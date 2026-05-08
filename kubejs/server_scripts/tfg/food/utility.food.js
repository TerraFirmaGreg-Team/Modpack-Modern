// priority: 1
"use strict";

//#region Machine Helper

const $ISPRecipeLogic = Java.loadClass("su.terrafirmagreg.core.common.tfgt.machine.trait.ISPOutputRecipeLogic")
const $SizedIngredient = Java.loadClass("com.gregtechceu.gtceu.api.recipe.ingredient.SizedIngredient")
const Sized = (ing, amount) => $SizedIngredient.create(ing, amount)

/**
* @typedef {Object} FoodRecipeData
* @property {number?} circuit Circuit value.
* @property {Internal.GTRecipeComponents$FluidIngredientJS_[]?} fluidInputs Fluid inputs - format: `["mod:fluid amount"]`.
* @property {Internal.FluidStackJS[]?} fluidOutputs Fluid outputs - format: `["mod:fluid amount"]`.
* @property {(string | [string, Internal.Ingredient])[]?} itemInputs Item inputs - can be either a string or a tuple where the ingredient is used for the ISP recipe.
* @property {string[]?} itemOutputs Ingredient outputs - first output is replaced with ISP output if defined
* @property {Internal.ItemStackProviderJS?} itemOutputProvider ItemStackProvider which provides the recipe output.
* @property {boolean?} daytime Daytime condition.
* @property {boolean?} perTick Whether the recipe uses per tick logic.
* @property {(string | [string, Internal.GTRecipeSchema$GTRecipeJS.dimension])?} dimension Dimension condition.
* @property {Internal.GTRecipeSchema$GTRecipeJS.cleanroom?} cleanroom CleanroomType
* @property {string[]?} notConsumable Not consumable ingredients.
*
* **NOTE:** TFC Ingredients do not support item counts higher than 1. Do `Sized(TFCIngredient('item:item'), count)` instead of `TFCIngredient('[count]x item:item')`
*/

/**
 * @param event
 * @param {"food_oven"|"food_processor"} type Type of the food machine.
 * @param {string} id Recipe ID.
 * @param {number} duration Recipe duration.
 * @param {number} EUt Energy usage per tick.
 * @param {string} text Additional text for the recipe.
 * @param {FoodRecipeData} data Recipe data.
 */
global.registerFoodRecipe = (event, type, id, duration, EUt, text, data) => {
	if (data.itemInputs === undefined) data.itemInputs = []
	if (data.itemOutputs === undefined) data.itemOutputs = []
	if (data.fluidInputs === undefined) data.fluidInputs = []
	if (data.fluidOutputs === undefined) data.fluidOutputs = []
	if (data.notConsumable === undefined) data.notConsumable = []
	let gregInputs = [], inputs = []
	let outputFirstIndex = (data.itemOutputProvider === undefined) ? 0 : 1
	data.itemInputs.forEach(item => {
		if (typeof item === "string") {
			gregInputs.push(item)

			const match = item.match(/^(\d+)\s*x\s*/i);
			let count = 1
			if (match) {
				count = parseInt(match[1]);
				item = item.slice(match[0].length);
			}
			inputs.push($SizedIngredient.create(item, count))
		} else {
			gregInputs.push(item[0])
			inputs.push(item[1])
		}
	});

	$ISPRecipeLogic.RegisterRecipeData(`${type  }/${  id}`, inputs, (data.itemOutputProvider === undefined) ? null : data.itemOutputProvider.asCanonClass(), data.itemOutputs.slice(outputFirstIndex).map(i => Item.of(i)))

	let r = event.recipes.gtceu[type](id)
	.duration(duration)
	.EUt(EUt)

	if (data.circuit) r.circuit(data.circuit)
	if (data.daytime) r.daytime(data.daytime)
	if (data.perTick) r.perTick(data.perTick)
	if (data.dimension) r.dimension(data.dimension)
	if (data.cleanroom) r.cleanroom(data.cleanroom)
	if (data.notConsumable.length > 0) r.notConsumable(data.notConsumable)
	if (data.itemOutputs.length > 0) r.itemOutputs(data.itemOutputs)
	if (data.itemInputs.length > 0) r.itemInputs(data.itemInputs)
	if (data.fluidInputs.length > 0) r.inputFluids(data.fluidInputs);
	if (data.fluidOutputs.length > 0) r.outputFluids(data.fluidOutputs);
	if (text !== "") r.addDataString("action", text);

	return r;
};

/**
 * @param event
 * @param {string} id Recipe ID.
 * @param {number} duration Recipe duration.
 * @param {number} EUt Energy usage per tick.
 * @param {FoodRecipeData} data Recipe data.
 */
global.processorRecipe = (event, id, duration, EUt, data) => global.registerFoodRecipe(event, "food_processor", id, duration, EUt, "", data);

/**
 * @param event
 * @param {string} id Recipe ID.
 * @param {number} duration Recipe duration.
 * @param {number} EUt Energy usage per tick.
 * @param {FoodRecipeData} data Recipe data.
 * @param {string} text Additional text for the recipe.
 */
global.processorRecipeText = (event, id, duration, EUt, text, data) => global.registerFoodRecipe(event, "food_processor", id, duration, EUt, text, data);

/**
 * @param event
 * @param {string} id Recipe ID.
 * @param {string} input Recipe input.
 * @param {string} out Recipe output.
 * @param {Internal.FluidIngredient?} fluid Fluid ingredient.
 * @param {boolean?} isFirmaDynamic Whether the recipe uses `firmaLifeCopyDynamicFood`.
 */
global.cookingRecipe = (event, id, input, out, fluid, isFirmaDynamic) => {
	return global.registerFoodRecipe(event, "food_oven", id, 20 * 10, GTValues.VA[GTValues.LV], "", {
		itemInputs: [input],
		itemOutputs: [out],
		fluidInputs: (fluid === undefined) ? [] : [fluid],
		itemOutputProvider: ((isFirmaDynamic) ? TFC.isp.of(out).firmaLifeCopyDynamicFood() : TFC.isp.of(out).copyFood()).addTrait("firmalife:oven_baked")
	});
};

//#endregion
//#region Jam Generator

/**
 * Function to generate jam food processor recipes.
 * @param {*} event 
 * @param {Item} fruitId The item ID of the fruit.
 * @param {string} fruitName The name of the fruit.
 * @param {Item} jar The item ID of the sealed jar.
 * @param {Item} unsealedJar The item ID of the unsealed jar.
 */
global.generateJamProcessorRecipes = function(event, fruitId, fruitName, jar, unsealedJar) {
	if (!fruitId || !fruitName || !jar || !unsealedJar) {
		throw new Error(`Missing parameters for generateJamProcessorRecipes: fruitId=${fruitId}, fruitName=${fruitName}, jar=${jar}, unsealedJar=${unsealedJar}`);
	}

	global.processorRecipe(event, `jam/${fruitName}`, 100, 8, {
		circuit: 15,
		itemInputs: [`4x ${fruitId}`, "#tfc:sweetener", "4x #tfc:empty_jar_with_lid"],
		fluidInputs: ['#tfg:clean_water 100'],
		itemOutputs: [`4x ${jar}`],
		itemOutputProvider: TFC.isp.of(`4x ${jar}`).copyFood()
	});

	global.processorRecipe(event, `jam/${fruitName}_unsealed`, 100, 8, {
		circuit: 16,
		itemInputs: [`4x ${fruitId}`, "#tfc:sweetener", "4x tfc:empty_jar"],
		fluidInputs: ['#tfg:clean_water 100'],
		itemOutputs: [`4x ${unsealedJar}`],
		itemOutputProvider: TFC.isp.of(`4x ${unsealedJar}`).copyFood()
	});
};

/**
 * Function to generate jam pot and vat recipes.
 * @param {*} event 
 * @param {Item} fruitId The item ID of the fruit.
 * @param {string} fruitName The name of the fruit.
 * @param {Item} jar The item ID of the sealed jar.
 * @param {ResourceTexture_} texture The texture to use for the pot fluid.
 */
global.generateJamPotAndVatRecipes = function(event, fruitId, fruitName, jar, texture) {
	if (!fruitId || !fruitName || !jar || !texture) {
		throw new Error(`Missing parameters for generateJamPotAndVatRecipes: fruitId=${fruitId}, fruitName=${fruitName}, jar=${jar}, texture=${texture}`);
	}

	for (let i = 2; i <= 4; i++) {
		let ingredients = [];
		for (let j = 0; j < i; j++) {
			ingredients.push(TFC.ingredient.notRotten(fruitId));
		}
		ingredients.push('#tfc:sweetener');

		event.recipes.tfc.pot_jam(
			`${i}x ${jar}`,
			ingredients,
			TFC.fluidStackIngredient('#tfg:clean_water', 100),
			500,
			200,
			texture
		).id(`tfg:pot/jam/${fruitName}_x${i}`)
	}

	event.recipes.firmalife.vat()
		.inputFluid(TFC.fluidStackIngredient('firmalife:sugar_water', 500))
		.inputItem(TFC.ingredient.notRotten(fruitId))
		.length(100)
		.temperature(200)
		.jar(jar)
		.id(`tfg:vat/jam/${fruitName}`);
};

/**
 * Function to generate jam unsealing recipes.
 * @param {*} event
 * @param {Item} jar The item ID of the sealed jar.
 * @param {Item} unsealedJar The item ID of the unsealed jar.
 * @param {string} fruitName The name of the fruit.
 */
global.generateJamUnsealingRecipe = function(event, jar, unsealedJar, fruitName) {
	if (!jar || !unsealedJar || !fruitName) {
		throw new Error(`Missing parameters for generateJamUnsealingRecipe: jar=${jar}, unsealedJar=${unsealedJar}, fruitName=${fruitName}`);
	}

	event.recipes.tfc.no_remainder_shapeless_crafting(
		event.recipes.tfc.advanced_shapeless_crafting(
			TFC.itemStackProvider.of(unsealedJar).copyOldestFood(),
			[TFC.ingredient.notRotten(jar)],
			jar
		).id(`tfg:crafting/unseal_${fruitName}_jar`)
	);
};

/**
 * Function to generate all jam related recipes for a given fruit.
 * @param {*} event
 * @param {Item} fruitId The item ID of the fruit.
 * @param {string} fruitName The name of the fruit.
 * @param {Item} jar The item ID of the sealed jar.
 * @param {Item} unsealedJar The item ID of the unsealed jar.
 * @param {ResourceTexture_} texture The texture to use for the pot fluid.
 */
global.generateAllJamRecipes = function(event, fruitId, fruitName, jar, unsealedJar, texture) {
	if (!fruitId || !fruitName || !jar || !unsealedJar || !texture) {
		throw new Error(`Missing parameters for generateAllJamRecipes: fruitId=${fruitId}, fruitName=${fruitName}, jar=${jar}, unsealedJar=${unsealedJar}, texture=${texture}`);
	}

	global.generateJamUnsealingRecipe(event, jar, unsealedJar, fruitName);
	global.generateJamPotAndVatRecipes(event, fruitId, fruitName, jar, texture);
	global.generateJamProcessorRecipes(event, fruitId, fruitName, jar, unsealedJar);
};

//#endregion
//#region Boiling Generator

/**
 * Function to generate boiling recipes for a food item using a fluid.
 * Can create pot, vat, and processor recipes depending on parameters.
 * @param {*} event
 * @param {Fluid} inputFluid The fluid ID of the input fluid.
 * @param {number} FluidQty The quantity of the input fluid.
 * @param {Item} inputItem The item ID of the food item to be boiled.
 * @param {Item} outputItem The item ID of the resulting boiled food item.
 * @param {Boolean|null} genPotRecipe Whether to generate pot recipes. Defaults to `true`.
 * @param {Boolean|null} genVatRecipe Whether to also generate a vat recipe to match. Defaults to `true`.
 * @param {Boolean|null} genProcessorRecipe Whether to also generate a processor recipe to match. Defaults to `true`. Defaults to `true`.
 * @param {Number|null} circuit The circuit value for the processor recipe.
 */
global.generateFluidBoilingFoodRecipes = function(event, inputFluid, fluidQty, inputItem, outputItem, genPotRecipe, genVatRecipe, genProcessorRecipe, circuit) {
	genPotRecipe = genPotRecipe !== false ? true : false;
	genVatRecipe = genVatRecipe !== false ? true : false;
	genProcessorRecipe = genProcessorRecipe !== false ? true : false;

	if (!inputFluid || !fluidQty || !inputItem || !outputItem) {
		throw new Error(`Missing parameters for generateFluidBoilingFoodRecipes: inputFluid=${inputFluid}, FluidQty=${fluidQty}, inputItem=${inputItem}, outputItem=${outputItem}`);
	}

	if (genPotRecipe) {
		for (let i = 1; i <= 5; i++) {
			event.recipes.tfc.pot(
				Array(i).fill(TFC.ingredient.notRotten(inputItem)),
				TFC.fluidStackIngredient(inputFluid, fluidQty * i),
				500,
				200
				)
				.itemOutput(TFC.isp.of(`${i}x ${outputItem}`).copyFood()
			).id(`tfg:pot/${global.linuxUnfucker(inputItem)}_boiled_into_${global.linuxUnfucker(outputItem)}_${i}`);
		}
	}

	if (genVatRecipe) {
		event.recipes.firmalife.vat()
			.inputFluid(TFC.fluidStackIngredient(inputFluid, fluidQty))
			.inputItem(TFC.ingredient.notRotten(inputItem))
			.outputItem(TFC.isp.of(outputItem).copyFood())
			.length(100)
			.temperature(200)
			.id(`tfg:vat/${global.linuxUnfucker(inputItem)}_boiled_into_${global.linuxUnfucker(outputItem)}`);
	}

	if (genProcessorRecipe) {
		let processorParameters = {
			itemInputs: [inputItem],
			fluidInputs: [`${inputFluid} ${fluidQty}`],
			itemOutputs: [outputItem],
			itemOutputProvider: TFC.isp.of(outputItem).copyFood()
		};
		if (circuit !== null) processorParameters.circuit = circuit;
		let a = global.processorRecipe(event, `${global.linuxUnfucker(inputItem)}_boiled_into_${global.linuxUnfucker(outputItem)}`, 100, 8, processorParameters);
	}
};

/**
 * Function to generate boiling recipes for a food item using water.
 * Can create pot, vat, and processor recipes depending on parameters.
 * @param {*} event 
 * @param {Item} inputItem The item ID of the food item to be boiled.
 * @param {Item} outputItem The item ID of the resulting boiled food item.
 * @param {Boolean|null} genVatRecipe Whether to also generate a vat recipe to match.
 * @param {Boolean|null} genVatRecipe Whether to also generate a vat recipe to match.
 * @param {Boolean|null} genProcessorRecipe Whether to also generate a processor recipe to match.
 * @param {Number|null} circuit The circuit value for the processor recipe.
 */
global.generateWaterBoilingFoodRecipes = function(event, inputItem, outputItem, genPotRecipe, genVatRecipe, genProcessorRecipe, circuit) {
	if (!inputItem || !outputItem) {
		throw new Error(`Missing parameters for generateWaterBoilingFoodRecipes: inputItem=${inputItem}, outputItem=${outputItem}`);
	};
	global.generateFluidBoilingFoodRecipes(event, '#tfg:clean_water', 100, inputItem, outputItem, genPotRecipe, genVatRecipe, genProcessorRecipe, circuit);
};

/**
 * Function to generate boiling recipes for a food item using oil.
 * Can create pot, vat, and processor recipes depending on parameters.
 * @param {*} event 
 * @param {Item} inputItem The item ID of the food item to be boiled.
 * @param {Item} outputItem The item ID of the resulting boiled food item.
 * @param {Boolean|null} genPotRecipe Whether to also generate a pot recipe to match.
 * @param {Boolean|null} genVatRecipe Whether to also generate a vat recipe to match.
 * @param {Boolean|null} genProcessorRecipe Whether to also generate a processor recipe to match.
 * @param {Number|null} circuit The circuit value for the processor recipe.
 */
global.generateOilBoilingFoodRecipes = function(event, inputItem, outputItem, genPotRecipe, genVatRecipe, genProcessorRecipe, circuit) {
	if (!inputItem || !outputItem) {
		throw new Error(`Missing parameters for generateOilBoilingFoodRecipes: inputItem=${inputItem}, outputItem=${outputItem}`);
	};
	global.generateFluidBoilingFoodRecipes(event, '#firmalife:oils', 100, inputItem, outputItem, genPotRecipe, genVatRecipe, genProcessorRecipe, circuit);
};

//#endregion
//#region Cooking Generator

/**
 * Function to generate cooking recipes for a food item.
 * Will create food oven, and TFC heating recipes.
 * @param {*} event
 * @param {Item} inputItem The item ID of the food item to be cooked.
 * @param {Item} outputItem The item ID of the resulting cooked food item.
 * @param {Boolean|null} genOvenRecipe Wether to generate a GT oven recipe. Default `true`.
 * @param {Boolean|null} genHeatingRecipe Wether to generate heating recipes. Grilling, fire pit, oven. Default `true`.
 * @param {Boolean|null} genFirmalifeOvenRecipe Wether to generate a firmalife oven recipe. Standalone oven recipe for things like pizzas. Default `false`.
 */
global.generateFoodCookingRecipes = function(event, inputItem, outputItem, genOvenRecipe, genHeatingRecipe, genFirmalifeOvenRecipe) {
	genOvenRecipe = genOvenRecipe !== false ? true : false;
	genHeatingRecipe = genHeatingRecipe !== false ? true : false;
	genFirmalifeOvenRecipe = genFirmalifeOvenRecipe === true ? true : false;

	if (!inputItem || !outputItem) {
		throw new Error(`Missing parameters for generateFoodCookingRecipes: inputItem=${inputItem}, outputItem=${outputItem}`);
	}

	if (genOvenRecipe) {
		global.cookingRecipe(event, `${global.linuxUnfucker(inputItem)}_to_${global.linuxUnfucker(outputItem)}`, inputItem, outputItem);
	}

	if (genHeatingRecipe) {
		event.recipes.tfc.heating(TFC.ingredient.notRotten(inputItem), 200)
			.resultItem(TFC.isp.of(outputItem).copyFood())
			.id(`tfg:heating/${global.linuxUnfucker(inputItem)}_to_${global.linuxUnfucker(outputItem)}`);
	}

	if (genFirmalifeOvenRecipe) {
		event.recipes.firmalife.oven(
			inputItem,
			300,
			200,
			TFC.isp.of(outputItem).copyFood()
		).id(`tfg:firmalife_oven/${global.linuxUnfucker(inputItem)}_to_${global.linuxUnfucker(outputItem)}`);
	}
};

//#endregion
//#region Alcohol Generator

/**
 * Generates a set of recipes for alcohol production, including processor and barrel recipes for base, aged, and vintage alcohols.
 * @param {*} event 
 * @param {Item|Item<tag>} ingredient Ingredient used for the base alcohol recipe.
 * @param {Fluid} baseId Fluid ID for the base alcohol. Required if `genBaseProcessorRecipe` or `genBaseBarrelRecipe` or `genAgedRecipe` is true.
 * @param {Fluid} agedId Fluid ID for the aged alcohol. Required if `genAgedRecipe` or `genVintageRecipe` is true.
 * @param {Fluid} vintageId Fluid ID for the vintage alcohol. Required if `genVintageRecipe` is true.
 * @param {Boolean} genBaseBarrelRecipe Whether to generate a base barrel recipe. Defaults to `false`.
 * @param {Boolean} genBaseProcessorRecipe Whether to generate a base processor recipe. Defaults to `true`.
 * @param {Boolean} genAgedRecipe Whether to generate an aged recipe. Defaults to `false`.
 * @param {Boolean} genVintageRecipe Whether to generate a vintage recipe. Defaults to `true`.
 */
global.generateAlcoholRecipes = function(event, ingredient, baseId, agedId, vintageId, genBaseBarrelRecipe, genBaseProcessorRecipe, genAgedRecipe, genVintageRecipe) {
	genBaseBarrelRecipe = genBaseBarrelRecipe === true ? true : false;
	genBaseProcessorRecipe = genBaseProcessorRecipe !== false ? true : false;
	genAgedRecipe = genAgedRecipe === true ? true : false;
	genVintageRecipe = genVintageRecipe !== false ? true : false;

	if (genBaseProcessorRecipe) {
		global.processorRecipe(event, `processor_alcohol/${global.linuxUnfucker(baseId)}`, 2400, 1, {
			itemInputs: [ingredient],
			fluidInputs: ['#tfg:clean_water 500', 'firmalife:yeast_starter 10'],
			fluidOutputs: [Fluid.of(baseId, 500)],
			circuit: 11,
			notConsumable: ['#tfc:barrels']
		});
	}

	if (genBaseBarrelRecipe) {
		event.recipes.tfc.barrel_sealed(24000 * 3) // 3 days.
			.inputFluid(Fluid.of('#tfg:clean_water', 100))
    		.inputItem(ingredient)
			.outputFluid(Fluid.of(baseId, 100))
			.id(`tfg:barrel_alcohol/${global.linuxUnfucker(baseId)}`)
	}

	if (genAgedRecipe) {
		event.recipes.tfc.barrel_sealed(24000 * 24) // 24 days.
			.inputFluid(Fluid.of(baseId, 100))
			.outputFluid(Fluid.of(agedId, 100))
			.id(`tfg:barrel_alcohol/${global.linuxUnfucker(agedId)}`)
	}

	if (genVintageRecipe) {
		event.recipes.tfc.barrel_sealed(24000 * 24) // 24 days.
			.inputFluid(Fluid.of(agedId, 1000))
			.outputFluid(Fluid.of(vintageId, 750))
			.id(`tfg:barrel_alcohol/${global.linuxUnfucker(vintageId)}`)
	}
};

// #endregion
// #region Preservation

/**
 * Generates processor and drying mat recipes for food drying.
 * @param {*} event 
 * @param {ItemStackIngredient} inputItem Input item to be dried.
 * @param {Item} outputItem Ouput dried item.
 * @param {Boolean} genProcessorRecipe Whether to generate a food processor recipe for drying. Defaults to `true`.
 * @param {Boolean} genDryingMatRecipe Whether to generate a drying mat recipe for drying. Defaults to `false`.
 */
global.generateDryingFoodRecipes = function(event, inputItem, outputItem, genProcessorRecipe, genDryingMatRecipe) {
	genProcessorRecipe = genProcessorRecipe !== false ? true : false;
	genDryingMatRecipe = genDryingMatRecipe === true ? true : false;

	if (genProcessorRecipe) {
		global.processorRecipeText(event, `processor_drying/${global.linuxUnfucker(inputItem)}`, 200, 16, "tfg.food_recipe.drying", {
			circuit: 6,
			itemInputs: [inputItem],
			itemOutputs: [outputItem],
			fluidInputs: [Fluid.of('gtceu:nitrogen', 100)],
			itemOutputProvider: TFC.isp.of(outputItem).copyOldestFood()
		})
	}

	if (genDryingMatRecipe) {
		event.recipes.firmalife.drying(
			outputItem,
			TFC.ingredient.notRotten(inputItem)
    	).id(`tfg:mat_drying/${global.linuxUnfucker(inputItem)}`)
	}
};

/**
 * Generates processor and fire pit smoking recipes for food smoking.
 * @param {*} event 
 * @param {ItemStackIngredient} inputItem Item to be smoked. Will return with `firmalife:smoked` trait.
 * @param {Boolean} genProcessorRecipe Whether to generate a food processor recipe for smoking. Defaults to `true`.
 * @param {Boolean} genFireSmokingRecipe Whether to generate a fire smoking recipe for smoking. Defaults to `false`.
 */
global.generateSmokingFoodRecipes = function(event, inputItem, genProcessorRecipe, genFireSmokingRecipe) {
	genProcessorRecipe = genProcessorRecipe !== false ? true : false;
	genFireSmokingRecipe = genFireSmokingRecipe === true ? true : false;

	if (genProcessorRecipe) {
		global.processorRecipeText(event, `processor_smoking${global.linuxUnfucker(inputItem)}`, 200, 16, "tfg.food_recipe.smoking", {
			circuit: 6,
			itemInputs: [inputItem],
			itemOutputs: [inputItem],
			fluidInputs: [Fluid.of('gtceu:wood_gas', 5)],
			itemOutputProvider: TFC.isp.copyInput().addTrait("firmalife:smoked")
		});
	}

	if (genFireSmokingRecipe) {
		event.recipes.firmalife.smoking(
        	TFC.isp.copyInput().addTrait('kubejs:smoked'),
        	TFC.ingredient.notRotten(inputItem)
    	).id(`tfg:fire_smoking/${global.linuxUnfucker(inputItem)}`);
	}
};

/**
 * Generates processor and barrel brining recipes for food brining.
 * @param {*} event 
 * @param {ItemStackIngredient} inputItem Item to be brined. Will return with `tfc:brined` trait.
 * @param {Boolean} genProcessorRecipe Whether to generate a food processor recipe for brining. Defaults to `true`.
 * @param {Boolean} genBarrelRecipe Whether to generate a barrel recipe for brining. Defaults to `false`.
 */
global.generateBriningFoodRecipes = function(event, inputItem, genProcessorRecipe, genBarrelRecipe) {
	genProcessorRecipe = genProcessorRecipe !== false ? true : false;
	genBarrelRecipe = genBarrelRecipe === true ? true : false;

	if (genProcessorRecipe) {
		global.processorRecipeText(event, `processor_brining/${global.linuxUnfucker(inputItem)}`, 200, 16, "tfg.food_recipe.brining", {
			circuit: 5,
			itemInputs: [inputItem],
			itemOutputs: [inputItem],
			fluidInputs: [Fluid.of('tfc:brine', 100)],
			itemOutputProvider: TFC.isp.copyInput().addTrait('tfc:brined')
		});
	};

	if (genBarrelRecipe) {
		event.recipes.tfc.barrel_sealed(4800) // 4:00min
        	.outputItem(TFC.isp.copyInput().addTrait('tfc:brined'))
        	.inputs(TFC.ingredient.notRotten(inputItem), TFC.fluidStackIngredient('tfc:brine', 125))
	}
};
//	#endregion