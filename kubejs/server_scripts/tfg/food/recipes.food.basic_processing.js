"use strict";

/**
 * This file is for recipes related to the processing of crops and meat for further use.
 */
function registerTFGBasicProcessingFoodRecipes(event) {

	//#region Plant Cutting
	
	/**
	 * Object array of crops to be cut up. `{input, output, genShapelessKnife, genShapelessHammer, genShapelessMortar}`
	 * @type {{String, String, Boolean, Boolean, Boolean}[]}
	 */
	const plantCutting = [
		{input: 'minecraft:brown_mushroom_block', output: '4x minecraft:brown_mushroom'},
		{input: 'minecraft:red_mushroom_block', output: '4x minecraft:red_mushroom'},
		{input: 'tfc:pumpkin', output: '4x tfc:food/pumpkin_chunks'},
		{input: 'tfc:melon', output: '4x tfc:food/melon_slice'},
		{input: 'betterend:cave_pumpkin', output: '4x betterend:cave_pumpkin_chunks', genShapelessKnife: true, genShapelessHammer: true},
	];

	plantCutting.forEach(block => {
		global.generateCuttingFoodRecipes(event, block.input, block.output, block.genShapelessKnife, block.genShapelessHammer, block.genShapelessMortar);
	});

	global.SPICES.forEach((spice, i) => {
		if (i === 0) {
			global.generateCuttingFoodRecipes(event, spice.plant, `2x ${spice.product}`);
		}

		if (i > 1) {
			global.generateCuttingFoodRecipes(event, spice.plant, `2x ${spice.product}`, true);
		}
	});

	//#endregion
	//#region Soy Processing

	// Soy Processing
	event.recipes.tfc.advanced_shaped_crafting(
		TFC.isp.of(`firmalife:food/soybean_paste`).copyFood(), ['A', 'B'], {
			A: TFC.ingredient.notRotten(`firmalife:food/dehydrated_soybeans`),
			B: '#forge:tools/mortars'
		}, 0, 0).id(`tfg:mortar/soybean_paste`);

	global.processorRecipe(event, 'soybean_paste', 60, 8, {
		itemInputs: ['firmalife:food/dehydrated_soybeans'],
		itemOutputs: ['firmalife:food/soybean_paste'],
		itemOutputProvider: TFC.isp.of('firmalife:food/soybean_paste').copyOldestFood()
	});

	global.processorRecipe(event, 'soy_mixture', 300, 8, {
		circuit: 1,
		itemInputs: ['tfc:food/soybean', 'gtceu:small_salt_dust'],
		fluidInputs: ['#tfg:clean_water 50'],
		itemOutputs: ['firmalife:food/soy_mixture'],
		itemOutputProvider: TFC.isp.of('firmalife:food/soy_mixture').copyFood()
	});

	global.processorRecipe(event, 'soy_mixture_sea_water', 300, 8, {
		circuit: 1,
		itemInputs: ['tfc:food/soybean'],
		fluidInputs: ['tfc:salt_water 50'],
		itemOutputs: ['firmalife:food/soy_mixture'],
		itemOutputProvider: TFC.isp.of('firmalife:food/soy_mixture').copyFood()
	});

	global.processorRecipe(event, 'soy_mixture_salt_water', 300, 8, {
		circuit: 1,
		itemInputs: ['tfc:food/soybean'],
		fluidInputs: ['gtceu:salt_water 25'],
		itemOutputs: ['firmalife:food/soy_mixture'],
		itemOutputProvider: TFC.isp.of('firmalife:food/soy_mixture').copyFood()
	});
	
	event.recipes.tfg.copper_pot()
		.itemInputs('tfc:food/soybean', 'gtceu:small_salt_dust')
		.fluidInputs('#tfg:clean_water 50')
		.itemOutputs(TFC.isp.of('firmalife:food/soy_mixture').copyFood())
		.duration(100)
		.temperature(100)
		.id('tfg:copper_pot/soy_mixture_from_water');
	
	event.recipes.tfg.copper_pot()
		.itemInputs('tfc:food/soybean')
		.fluidInputs('tfc:salt_water 50')
		.itemOutputs(TFC.isp.of('firmalife:food/soy_mixture').copyFood())
		.duration(100)
		.temperature(100)
		.id('tfg:copper_pot/soy_mixture_from_sea_water');

	//#endregion
	//#region Olive Processing

	event.recipes.tfc.advanced_shaped_crafting(
		TFC.isp.of(`2x tfc:olive_paste`).copyFood(), ['A', 'B'], {
			A: TFC.ingredient.notRotten(`tfc:food/olive`),
			B: '#forge:tools/mortars'
		}, 0, 0).id(`tfg:mortar/olive_paste`);

	global.processorRecipe(event, 'olive_paste', 60, 8, {
		itemInputs: ['tfc:food/olive'],
		itemOutputs: ['2x tfc:olive_paste'],
		itemOutputProvider: TFC.isp.of('2x tfc:olive_paste'),
		circuit: 3
	});

	event.recipes.tfg.copper_pot()
		.itemInputs('tfc:olive_paste')
		.fluidInputs('#tfg:clean_water 200')
		.fluidOutputs('tfc:olive_oil_water 200')
		.duration(200)
		.temperature(100)
		.id('tfg:copper_pot/olive_oil_water');

	event.recipes.gtceu.mixer('tfg:tfc/olive_oil_water')
		.inputFluids(Fluid.of('water', 200))
		.itemInputs('1x tfc:olive_paste')
		.outputFluids(Fluid.of('tfc:olive_oil_water', 200))
		.duration(200)
		.EUt(28);

	event.recipes.gtceu.distillery('tfg:tfc/olive_oil')
		.inputFluids(Fluid.of('tfc:olive_oil_water', 250))
		.outputFluids(Fluid.of('tfc:olive_oil', 50))
		.duration(600)
		.EUt(28);

	event.recipes.gtceu.fermenter('tfg:soybean_oil')
		.itemInputs('firmalife:food/soybean_paste')
		.inputFluids("#tfg:clean_water 100")
		.outputFluids(Fluid.of('firmalife:soybean_oil', 250))
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(600);
	
	//#endregion
	//#region Misc Plants

	// Fries
	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.itemStackProvider.of('4x tfg:food/raw_fries').copyFood(),
		[TFC.ingredient.notRotten('tfc:food/potato'), '#tfc:knives'],
		'tfc:food/potato'
	).id(`tfg:crafting/raw_fries_knife`);

	global.processorRecipe(event, 'raw_fries', 20*1, 8, {
		itemInputs: ['tfc:food/potato'],
		itemOutputs: ['4x tfg:food/raw_fries'],
		circuit: 7,
		itemOutputProvider: TFC.isp.of('4x tfg:food/raw_fries').copyFood()
	});

	global.generateOilBoilingFoodRecipes(event, 'tfg:food/raw_fries', 'tfg:food/cooked_fries', true, true, true);
	
    // Pineapple fiber
    global.processorRecipe(event, 'firmalife:crafting/pineapple_fiber', 300, 16, {
        circuit: 3,
        itemInputs: ['firmalife:food/pineapple'],
        fluidInputs: [Fluid.of('gtceu:nitrogen', 100)],
        itemOutputs: ['firmalife:pineapple_fiber']
    });

	//#endregion
	//#region Meat Processing

	// Stackatick
	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.itemStackProvider.of('tfg:food/raw_stickastackatick').copyFood(),
		[TFC.ingredient.notRotten('tfg:food/raw_stackatick_chunks'), '#forge:rods/wood'], 'tfg:food/raw_stackatick_chunks')
		.id(`tfg:crafting/raw_stickastackatick`);

	// Bacon
	global.processorRecipe(event, 'bacon', 300, 8, {
		circuit: 1,
		itemInputs: ['tfc:food/pork', 'gtceu:small_salt_dust'],
		itemOutputs: ['4x firmalife:food/bacon'],
		fluidInputs: ['gtceu:wood_gas 5', 'tfc:brine 100'],
		itemOutputProvider: TFC.isp.of('4x firmalife:food/bacon')
			.addTrait('firmalife:smoked')
			.addTrait('tfc:brined')
			.addTrait('tfc:salted')
			.copyFood()
	});

	// Eggs.
	for (let i = 1; i <= 6; i++) {
		event.remove({ id: `tfc:pot/boiled_egg_${i}` });
	};
	event.remove({ id: 'tfc:heating/cooked_egg' });
	
	global.processorRecipe(event, 'pickled_egg', 1000, 8, {
		circuit: 1,
		itemInputs: ['minecraft:clay_ball', 'tfc:powder/wood_ash', 'gtceu:small_salt_dust', 'tfc:food/boiled_egg'],
		itemOutputs: ['firmalife:food/pickled_egg'],
		itemOutputProvider: TFC.isp.of('firmalife:food/pickled_egg').copyFood()
	});
	
	global.generateFoodCookingRecipes(event, '#forge:eggs', 'tfc:food/cooked_egg', true, true, false, 1);
	global.generateWaterBoilingFoodRecipes(event, '#forge:eggs', 'tfc:food/boiled_egg', true, true, true, 2);

	//#endregion
	//#region Fruit Processing

	global.FOOD_FRUIT.forEach(fruit => {

		// Juice
		event.recipes.tfc.advanced_shapeless_crafting(
			TFC.itemStackProvider.of('tfg:food/juice').mergeTag({"dynamic_color": fruit.color.toString()}).meal(
			(food) => food.hunger(4).decayModifier(1.5).water(15).quenching(3),
			[(portion) => portion.nutrientModifier(1.1).saturationModifier(1.5)]
		),
			[
				TFC.ingredient.notRotten(fruit.id),
				TFC.ingredient.notRotten(fruit.id),
				TFC.ingredient.notRotten(fruit.id),
				'tfc:empty_jar',
				'firmalife:cork',
				'#forge:tools/mortars'
			]
		).id(`tfg:crafting/juice/${fruit.name}`);

		global.processorRecipe(event, `juice/${fruit.name}`, 60, GTValues.VA[GTValues.ULV], {
			itemInputs: [`3x ${fruit.id}`, 'tfc:empty_jar', 'firmalife:cork'],
			itemOutputs: ['tfg:food/juice'],
			notConsumable: ['#firmalife:barrel_presses'],
			itemOutputProvider: TFC.isp.of('tfg:food/juice').mergeTag({"dynamic_color": fruit.color.toString()}).meal(
				(food) => food.hunger(4).decayModifier(1.5).water(15).quenching(3),
				[(portion) => portion.nutrientModifier(1.1).saturationModifier(1.5)]
			)
		});

	});

	global.washingHelper(event, 'tfg:food/juice', 'tfc:empty_jar');

	//#endregion
	//#region Coconut Processing

	global.generateCuttingFoodRecipes(event, 'tfg:palm_tree/coconut_fruit_brown', 'tfg:food/opened_brown_coconut', false, true);
	global.generateCuttingFoodRecipes(event, 'tfg:palm_tree/coconut_fruit_green', 'tfg:food/opened_green_coconut', false, true);

	event.recipes.tfc.barrel_instant()
		.outputFluid(Fluid.of('firmalife:coconut_milk', 500))
		.inputItem(TFC.ingredient.notRotten('tfg:food/opened_green_coconut'))
		.id('tfg:barrel/opened_green_coconut_draining');

	global.processorRecipe(event, 'opened_green_coconut_draining', 100, 8, {
		circuit: 1,
		itemInputs: ['tfg:food/opened_green_coconut'],
		fluidOutputs: [Fluid.of('firmalife:coconut_milk', 500)]
	});

	//#endregion
	//#region Sugar Refining
	event.remove({id: 'firmalife:pot/beet_sugar'});
	event.remove({id: 'firmalife:pot/beet_sugar_freshwater'});

	// Sugar Water
	event.recipes.tfg.copper_pot()
		.itemInputs('#tfc:sweetener')
		.fluidInputs('#tfg:clean_water 2000')
		.fluidOutputs('firmalife:sugar_water 2000')
		.tool('firmalife:spoon')
		.duration(200)
		.temperature(300)
		.id('tfg:copper_pot/sugar_water');
	
	// Sugar Water From Sugarcane
	event.recipes.tfg.copper_pot()
		.itemInputs('tfc:food/sugarcane')
		.fluidOutputs('firmalife:sugar_water 2000')
		.attachment('press', x => x.circuit(1))
		.duration(200)
		.id('tfg:copper_pot/sugar_water_from_sugarcane');

	// Sugar Water From Beets
	event.recipes.tfg.copper_pot()
		.itemInputs('tfc:food/beet')
		.fluidInputs('tfc:salt_water 200')
		.fluidOutputs('firmalife:sugar_water 1000')
		.duration(300)
		.temperature(200)
		.id('tfg:copper_pot/sugar_water_from_beets');
	
	// Sugar From Sugar Water
	event.recipes.tfg.copper_pot()
		.fluidInputs('firmalife:sugar_water 2000')
		.itemOutputs('minecraft:sugar')
		.attachment('condenser', x => x
            .fluidOutput('minecraft:water 1000')
        )
		.duration(400)
		.temperature(100)
		.id('tfg:copper_pot/sugar_from_sugar_water');

	// Syrup Concentration
	/**
	 * Generates concentration recipes converting raw sap fluid into syrup fluid and crystallized sugar.
	 *
	 * @param {Fluid} sapFluidId Fluid ID of the raw sap fluid.
	 * @param {Fluid} syrupFluidId Fluid ID of the syrup fluid.
	 * @param {Item} sugarId Item ID of the sugar item.
	 * @returns {void}
	 */
	function generateSyrupConcentrationRecipes(sapFluidId, syrupFluidId, sugarId) {

		if (sapFluidId != null && syrupFluidId != null) {
			let sapIdSuffix = global.linuxUnfucker(`${sapFluidId}_to_${syrupFluidId}`);

			event.recipes.tfg.copper_pot()
				.fluidInputs(`${sapFluidId} 200`)
				.fluidOutputs(`${syrupFluidId} 50`)
				.duration(100)
				.temperature(200)
				.id(`tfg:copper_pot/${sapIdSuffix}`);
				
			event.recipes.gtceu.fluid_heater(`tfg:${sapIdSuffix}`)
				.inputFluids(Fluid.of(sapFluidId, 200))
				.outputFluids(Fluid.of(syrupFluidId, 50))
				.duration(100)
				.EUt(GTValues.VA[GTValues.ULV]);
		}

		if (syrupFluidId != null && sugarId != null) {
			let sugarIdSuffix = global.linuxUnfucker(`${syrupFluidId}_to_${sugarId}`);

			event.recipes.tfg.copper_pot()
				.fluidInputs(`${syrupFluidId} 100`)
				.itemOutputs(sugarId)
				.attachment('condenser', x => x
					.fluidOutput('minecraft:water 50')
				)
				.duration(400)
				.temperature(100)
				.id(`tfg:copper_pot/${sugarIdSuffix}`);
				
			event.recipes.gtceu.fluid_solidifier(`tfg:${sugarIdSuffix}`)
				.inputFluids(Fluid.of(syrupFluidId, 100))
				.itemOutputs(sugarId)
				.duration(400)
				.EUt(GTValues.VHA[GTValues.ULV]);
		}
	};

	/**
	 * @typedef {Object} SapConcentrateEntry
	 * @property {Fluid} sapFluid Raw sap fluid ID.
	 * @property {Fluid} syrupFluid Syrup fluid ID.
	 * @property {Item} sugar Sugar item ID.
	 */

	/**
	 * Mapping of tree types to their sap, syrup, and sugar IDs.
	 * @type {Record<string, SapConcentrateEntry>}
	 */
	const sapConcentrates = {
		maple: {sapFluid: 'afc:maple_sap', syrupFluid: 'afc:maple_syrup', sugar: 'afc:maple_sugar'},
		birch: {sapFluid: 'afc:birch_sap', syrupFluid: 'afc:birch_syrup', sugar: 'afc:birch_sugar'}
	};
	Object.values(sapConcentrates).forEach(saps => {
		generateSyrupConcentrationRecipes(saps.sapFluid, saps.syrupFluid, saps.sugar);
	});


	//#endregion
	//#region Salt Refining

	// Sea Water Condensing
	event.recipes.tfg.copper_pot()
		.fluidInputs('tfc:salt_water 625')
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.Salt, 1))
		.attachment('condenser', x => x
            .fluidOutput('minecraft:water 500')
        )
		.duration(200)
		.temperature(100)
		.id('tfg:copper_pot/salt_from_salt_water');

	//#endregion
	//#region Chemicals

	// Crude Gelatin
	event.recipes.tfc.pot(
		Array(5).fill('minecraft:bone_meal'),
		TFC.fluidStackIngredient('#tfg:clean_water', 1000),
		500,
		200
		)
		.itemOutput(TFC.isp.of('tfg:food/crude_gelatin').resetFood()
	).id('tfg:pot/bone_meal_boiled_into_crude_gelatin');

	event.recipes.tfg.copper_pot()
		.itemInputs('5x minecraft:bone_meal')
		.fluidInputs('#tfg:clean_water 1000')
		.itemOutputs(TFC.isp.of('tfg:food/crude_gelatin').resetFood())
		.duration(300)
		.temperature(200)
		.id('tfg:copper_pot/bone_meal_boiled_into_crude_gelatin');

	global.registerFoodRecipe(event, 'food_oven', 'bone_meal_boiled_into_crude_gelatin', 100, 8, '', {
		circuit: 1,
		itemInputs: ['5x minecraft:bone_meal'],
		fluidInputs: ['#tfg:clean_water 1000'],
		itemOutputs: ['tfg:food/crude_gelatin'],
		itemOutputProvider: TFC.isp.of('tfg:food/crude_gelatin').resetFood()
	});

	// Vinegar
	global.processorRecipe(event, 'vinegar_alcohol', 600, GTValues.VA[GTValues.LV], {
		circuit: 5,
		itemInputs: ['#tfc:foods/fruits'],
		fluidInputs: ['#tfg:alcohols 250'],
		fluidOutputs: [Fluid.of('tfc:vinegar', 250)]
	});

	// Salt
	event.shapeless('4x gtceu:small_salt_dust', ['#forge:dusts/salt', '#forge:tools/mortars'])
		.id(`tfg:mortar/salt`);
		
	// Sodium Dihydrogen Citrate
	event.recipes.gtceu.chemical_reactor('tfg:sodium_dihydrogen_citrate')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.dust, 'tfg:citric_acid', 1),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.SodiumBicarbonate, 1)
		)
		.itemOutputs('tfg:sodium_dihydrogen_citrate_dust')
		.outputFluids(
			Fluid.of('minecraft:water', 1000),
			Fluid.of('gtceu:carbon_dioxide', 1000)
		)
		.duration(20*10)
		.EUt(GTValues.VA[GTValues.HV]);

	// Citric Acid
	global.processorRecipe(event, 'citric_acid', 20*20, GTValues.VA[GTValues.HV], {
		itemInputs: [
			'#tfg:foods/citrus_fruits',
			'gtceu:calcium_hydroxide_dust'
		],
		fluidInputs: ['gtceu:sulfuric_acid 100'],
		itemOutputs: ['2x tfg:citric_acid_dust' ],
		itemOutputProvider: TFC.isp.of('2x tfg:citric_acid_dust')
	});

	//#endregion
};