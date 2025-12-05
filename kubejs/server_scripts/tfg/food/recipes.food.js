// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGFoodRecipes(event) {

	const $ISPRecipeLogic = Java.loadClass("su.terrafirmagreg.core.common.data.tfgt.machine.trait.ISPOutputRecipeLogic")
	const $SizedIngredient = Java.loadClass("com.gregtechceu.gtceu.api.recipe.ingredient.SizedIngredient")
	const Sized = (ing, amount) => $SizedIngredient.create(ing, amount)

	/**
	 * @typedef {Object} FoodRecipeData
	 * @property {number?} circuit
	 * @property {Internal.GTRecipeComponents$FluidIngredientJS_[]?} fluidInputs
	 * @property {Internal.FluidStackJS[]?} fluidOutputs
	 * @property {(string | [string, Internal.Ingredient])[]?} itemInputs
	 * @property {string[]?} itemOutputs Ingredient outputs - first output is replaced with ISP output if defined
	 * @property {Internal.ItemStackProviderJS?} itemOutputProvider ItemStackProvider which provides the recipe output.
	 * @property {boolean?} daytime
	 * @property {boolean?} perTick
	 * @property {(string | [string, Internal.GTRecipeSchema$GTRecipeJS.dimension])?} dimension
	 * @property {Internal.GTRecipeSchema$GTRecipeJS.cleanroom?} cleanroom CleanroomType
	 * @property {string[]?} notConsumable
	*
	* **NOTE:** TFC Ingredients do not support item counts higher than 1. Do `Sized(TFCIngredient('item:item'), count)` instead of `TFCIngredient('[count]x item:item')`
	*/

	//#region Helper funcs

	/**
	 * @param {"food_oven"|"food_processor"} type 
	 * @param {string} id 
	 * @param {number} duration 
	 * @param {number} EUt 
	 * @param {string} text
	 * @param {FoodRecipeData} data 
	 */
	function registerFoodRecipe(type, id, duration, EUt, text, data) {
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
		})

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
	}

		/**
	 * @param {string} id 
	 * @param {number} duration 
	 * @param {number} EUt 
	 * @param {FoodRecipeData} data 
	 */
	const processorRecipe = (id, duration, EUt, data) => registerFoodRecipe("food_processor", id, duration, EUt, "", data)

	/**
	 * @param {string} id 
	 * @param {number} duration 
	 * @param {number} EUt 
	 * @param {FoodRecipeData} data 
	 * @param {string} text
	 */
	const processorRecipeText = (id, duration, EUt, text, data) => registerFoodRecipe("food_processor", id, duration, EUt, text, data)

	/**
	 * @param {string} id 
	 * @param {string} input 
	 * @param {string} out 
	 * @param {Internal.FluidIngredient?} fluid 
	 * @param {boolean?} isFirmaDynamic 
	 */
	function cookingRecipe(id, input, out, fluid, isFirmaDynamic) {
		return registerFoodRecipe("food_oven", id, 20 * 10, GTValues.VA[GTValues.LV], "", {
			itemInputs: [input],
			itemOutputs: [out],
			fluidInputs: (fluid === undefined) ? [] : [fluid],
			itemOutputProvider: ((isFirmaDynamic) ? TFC.isp.of(out).firmaLifeCopyDynamicFood() : TFC.isp.of(out).copyFood()).addTrait("firmalife:oven_baked")
		})
	}

	//#endregion

	//#region Meat cooking
	
	global.TFC_MEAT_RECIPE_COMPONENTS.forEach(item => {
		cookingRecipe(item.name, item.input, item.output)
	})

	//#endregion
	//#region TFC Grains

	global.TFC_GRAINS.forEach(grain => {

		// Raw crop to grain
		processorRecipe(`${grain}_grain`, 100, 8, {
			circuit: 30,
			itemInputs: [`tfc:food/${grain}`],
			itemOutputs: [`tfc:food/${grain}_grain`],
			itemOutputProvider: TFC.isp.of(`tfc:food/${grain}_grain`).copyOldestFood()
		})

		//  Grain to flour
		processorRecipe(`${grain}_flour`, 100, 8, {
			circuit: 31,
			itemInputs: [`tfc:food/${grain}_grain`],
			itemOutputs: [`2x tfc:food/${grain}_flour`],
			itemOutputProvider: TFC.isp.of(`2x tfc:food/${grain}_flour`).copyOldestFood()
		})

		event.recipes.tfc.advanced_shaped_crafting(
			TFC.isp.of(`tfc:food/${grain}_flour`).copyFood(), [
				'A',
				'B'
			], {
				A: TFC.ingredient.notRotten(`tfc:food/${grain}_grain`),
				B: '#forge:tools/mortars'
			}, 0, 0).id(`tfg:mortar/${grain}_flour`)

		// Flatbread dough
		processorRecipe(`${grain}_flatbread_dough`, 300, 8, {
			itemInputs: [`tfc:food/${grain}_flour`],
			itemOutputs: [`2x tfc:food/${grain}_dough`],
			circuit: 1,
			fluidInputs: ['#tfg:clean_water 100'],
			itemOutputProvider: TFC.isp.of(`2x tfc:food/${grain}_dough`).copyFood()
		})

		// Firmalife dough
		processorRecipe(`${grain}_dough`, 300, 16, {
			itemInputs: [`tfc:food/${grain}_flour`, `#tfc:sweetener`],
			itemOutputs: [`4x firmalife:food/${grain}_dough`],
			circuit: 1,
			fluidInputs: [Fluid.of('firmalife:yeast_starter', 200)],
			itemOutputProvider: TFC.isp.of(`4x firmalife:food/${grain}_dough`).copyFood()
		})

		// Bread baking
		cookingRecipe(`${grain}_flatbread`, `tfc:food/${grain}_dough`, `firmalife:food/${grain}_flatbread`)
		cookingRecipe(`${grain}_bread`, `firmalife:food/${grain}_dough`, `tfc:food/${grain}_bread`)

		processorRecipe(`${grain}_bread_slice`, 10, 8, {
			circuit: 1,
			itemInputs: [`tfc:food/${grain}_bread`],
			itemOutputs: [`2x firmalife:food/${grain}_slice`],
			itemOutputProvider: TFC.isp.of(`2x firmalife:food/${grain}_slice`).copyOldestFood()
		})

		//Sandwich making

		let breadTypes = [["bread", `tfc:food/${grain}_bread`], ["flatbread", `firmalife:food/${grain}_flatbread`], ["slice", `firmalife:food/${grain}_slice`]]
		breadTypes.forEach((type) => {
			processorRecipe(`${grain}_${type[0]}_sandwich`, 100, 16, {
				circuit: 3,
				itemInputs: [`2x ${type[1]}`, "3x #tfc:foods/usable_in_sandwich"],
				itemOutputs: [`2x tfc:food/${grain}_bread_sandwich`],
				itemOutputProvider: TFC.isp.of(`2x tfc:food/${grain}_bread_sandwich`).meal(
					(food => food.hunger(4).water(0.5).saturation(1).decayModifier(4.5)), [
					(portion) => portion.ingredient(Ingredient.of('#tfc:sandwich_bread')).nutrientModifier(0.5).saturationModifier(0.5).waterModifier(0.5),
					(portion) => portion.nutrientModifier(0.8).saturationModifier(0.8).waterModifier(0.8)
				])
			})

			//Note: Jam needs to be first in the recipe code or else it will consider it as the usable_in_jam_sandwhich ingredients.
			//1 Jam
			processorRecipe(`${grain}_${type[0]}_jam_sandwich_1`, 100, 16, {
				circuit: 4,
				itemInputs: [`2x ${type[1]}`, '#tfc:foods/preserves', '2x #tfc:foods/usable_in_jam_sandwich_2'],
				itemOutputs: [`2x tfc:food/${grain}_bread_jam_sandwich`, 'tfc:empty_jar'],
				itemOutputProvider: TFC.isp.of(`2x tfc:food/${grain}_bread_jam_sandwich`).meal(
					(food => food.hunger(4).water(0.5).saturation(1).decayModifier(4.5)), [
					(portion) => portion.ingredient(Ingredient.of('#tfc:sandwich_bread')).nutrientModifier(0.5).saturationModifier(0.5).waterModifier(0.5),
					(portion) => portion.nutrientModifier(0.8).saturationModifier(0.8).waterModifier(0.8)
				])
			})

			//2 Jam
			processorRecipe(`${grain}_${type[0]}_jam_sandwich_2`, 100, 16, {
				circuit: 4,
				itemInputs: [`2x ${type[1]}`, '2x #tfc:foods/preserves', '1x #tfc:foods/usable_in_jam_sandwich_2'],
				itemOutputs: [`2x tfc:food/${grain}_bread_jam_sandwich`, '2x tfc:empty_jar'],
				itemOutputProvider: TFC.isp.of(`2x tfc:food/${grain}_bread_jam_sandwich`).meal(
					(food => food.hunger(4).water(0.5).saturation(1).decayModifier(4.5)), [
					(portion) => portion.ingredient(Ingredient.of('#tfc:sandwich_bread')).nutrientModifier(0.5).saturationModifier(0.5).waterModifier(0.5),
					(portion) => portion.nutrientModifier(0.8).saturationModifier(0.8).waterModifier(0.8)
				])
			})

			//3 Jam
			processorRecipe(`${grain}_${type[0]}_jam_sandwich_3`, 100, 16, {
				circuit: 4,
				itemInputs: [`2x ${type[1]}`, '3x #tfc:foods/preserves'],
				itemOutputs: [`2x tfc:food/${grain}_bread_jam_sandwich`, '3x tfc:empty_jar'],
				itemOutputProvider: TFC.isp.of(`2x tfc:food/${grain}_bread_jam_sandwich`).meal(
					(food => food.hunger(4).water(0.5).saturation(1).decayModifier(4.5)), [
					(portion) => portion.ingredient(Ingredient.of('#tfc:sandwich_bread')).nutrientModifier(0.5).saturationModifier(0.5).waterModifier(0.5),
					(portion) => portion.nutrientModifier(0.8).saturationModifier(0.8).waterModifier(0.8)
				])
			})
		})


	})

	//#endregion

	//#region Firmalife

	global.FIRMALIFE_COOKING_RECIPE_COMPONENTS.forEach(item => {
		cookingRecipe(item.name, item.input, item.output, undefined, true)
	})

    // Pineapple fiber
    processorRecipe("firmalife:crafting/pineapple_fiber", 300, 16, {
        circuit: 3,
        itemInputs: ["firmalife:food/pineapple"],
        fluidInputs: [Fluid.of('gtceu:nitrogen', 100)],
        itemOutputs: ["firmalife:pineapple_fiber"]
    })
    
	//#endregion
	//#region Dairy

	global.TFC_CURDS_AND_CHEESES.forEach(item => {

		event.recipes.gtceu.fermenter(`tfg:curdled_${item.id}`)
			.inputFluids(Fluid.of(item.milk, 2000))
			.itemInputs('firmalife:rennet')
			.outputFluids(Fluid.of(item.curdled_fluid, 2000))
			.duration(2400)
			.EUt(16)

		event.recipes.gtceu.mixer(`lactose_milk_${item.id}`)
			.circuit(1)
			.inputFluids(Fluid.of(item.milk, 1000), Fluid.of('gtceu:acetic_acid', 25))
			.itemOutputs('1x gtceu:lactose_dust')
			.outputFluids(Fluid.of(item.curdled_fluid, 1000))
			.duration(300)
			.EUt(GTValues.VA[GTValues.LV])

		processorRecipe(`${item.id}_curd`, 1200, 16, {
			itemOutputs: [item.curd],
			fluidInputs: [Fluid.of(item.curdled_fluid, 1000)],
			itemOutputProvider: TFC.isp.of(item.curd).resetFood()
		})

		processorRecipe(`${item.id}_unsalted_cheese_wheel`, 8000, 16, {
			itemInputs: [`3x ${item.curd}`],
			itemOutputs: [item.unsalted_wheel],
			fluidInputs: [Fluid.of('tfc:salt_water', 750)],
			itemOutputProvider: TFC.isp.of(item.unsalted_wheel).copyOldestFood()
		})

		processorRecipe(`${item.id}_unsalted_cheese_cutting`, 100, 8, {
			itemInputs: [item.unsalted_wheel],
			itemOutputs: [`4x ${item.unsalted_cheese}`],
			itemOutputProvider: TFC.isp.of(`4x ${item.unsalted_cheese}`).copyOldestFood()
		})

		if (item.salted_wheel === null || item.salted_cheese === null)
			return;

		processorRecipe(`${item.id}_salted_cheese_wheel`, 1000, 16, {
			circuit: 2,
			itemInputs: [`3x ${item.curd}`, `6x tfc:powder/salt`],
			itemOutputs: [item.salted_wheel],
			itemOutputProvider: TFC.isp.of(item.salted_wheel).copyOldestFood()
		})

		processorRecipe(`${item.id}_salted_cheese_cutting`, 100, 8, {
			itemInputs: [item.salted_wheel],
			itemOutputs: [`4x ${item.salted_cheese}`],
			itemOutputProvider: TFC.isp.of(`4x ${item.salted_cheese}`).copyOldestFood()
		})
	})
	
	// Milks 

	processorRecipe(`white_chocolate_blend`, 300, 16, {
		circuit: 3,
		itemInputs: ['2x firmalife:food/cocoa_butter', '#tfc:sweetener'],
		fluidInputs: ['#tfc:milks 1000'],
		itemOutputs: ['2x firmalife:food/white_chocolate_blend'],
		itemOutputProvider: TFC.isp.of('2x firmalife:food/white_chocolate_blend').resetFood()
	})

	processorRecipe(`dark_chocolate_blend`, 300, 16, {
		circuit: 2,
		itemInputs: ['2x firmalife:food/cocoa_powder', '#tfc:sweetener'],
		fluidInputs: ['#tfc:milks 1000'],
		itemOutputs: ['2x firmalife:food/dark_chocolate_blend'],
		itemOutputProvider: TFC.isp.of('2x firmalife:food/dark_chocolate_blend').resetFood()
	})

	processorRecipe(`milk_chocolate_blend`, 300, 16, {
		circuit: 1,
		itemInputs: ['firmalife:food/cocoa_powder', 'firmalife:food/cocoa_butter', '#tfc:sweetener'],
		fluidInputs: ['#tfc:milks 1000'],
		itemOutputs: ['2x firmalife:food/milk_chocolate_blend'],
		itemOutputProvider: TFC.isp.of('2x firmalife:food/milk_chocolate_blend').resetFood()
	})

	// TODO: this has nutrition dynamically set in the pot recipe, can we do that here?
	processorRecipe(`egg_noodles`, 50, 8, {
		circuit: 6,
		itemInputs: ["#tfc:foods/flour", 'tfc:powder/salt', '#forge:eggs'],
		fluidInputs: ['#tfc:milks 1000'],
		itemOutputs: ['firmalife:food/raw_egg_noodles'],
		itemOutputProvider: TFC.isp.of("firmalife:food/raw_egg_noodles").copyOldestFood()
	})

	processorRecipe(`rice_noodles`, 50, 8, {
		itemInputs: ["tfc:food/rice_flour", 'tfc:food/maize_flour', 'tfc:powder/salt'],
		fluidInputs: ['#tfc:milks 1000'],
		itemOutputs: ['2x firmalife:food/raw_rice_noodles'],
		itemOutputProvider: TFC.isp.of('2x firmalife:food/raw_rice_noodles').copyOldestFood()
	})
	
	// No ISP needed here
	event.recipes.gtceu.fermenter(`tfg:fermenter/cream`)
		.inputFluids("#tfc:milks 1000")
		.outputFluids(Fluid.of('firmalife:cream'))
		.circuit(6)
		.duration(1200)
		.EUt(24)

	//#endregion

	//#region Chocolate 
	const chocolateType = ["white_chocolate", "milk_chocolate", "dark_chocolate"]
	const chocolateShape = ["", "_heart", "_bell", "_knife"] //"" is firmalife chocolate bar
	const chocolatemolds = ["tfc:ceramic/ingot_mold", "tfcchannelcasting:heart_mold", "tfc:ceramic/bell_mold", "tfc:ceramic/knife_blade_mold"]

	for (const ctype of chocolateType) {
		for (const cshape of chocolateShape) {
			processorRecipe(`${ctype}_${cshape}_melting`, 100, 16, {
				circuit: 1,
				itemInputs:[cshape == "" ? `firmalife:food/${ctype}` : `tfcchannelcasting:food/${ctype}${cshape}`],
				fluidOutputs:[cshape == "" ? Fluid.of(`tfcchannelcasting:${ctype}`, 144) : Fluid.of(`tfcchannelcasting:${ctype}`, 100)],
			})
		}
	}

	for (const ctype of chocolateType) {	
		for (const cshape of chocolateShape) {
			processorRecipe(`${ctype}_${cshape}_casting`, 100, 16, {
				fluidInputs: [cshape == "" ? Fluid.of(`tfcchannelcasting:${ctype}`, 144) : Fluid.of(`tfcchannelcasting:${ctype}`, 100)],
				itemOutputs: [cshape == "" ? `firmalife:food/${ctype}` : `tfcchannelcasting:food/${ctype}${cshape}`],
				itemOutputProvider: TFC.isp.of(cshape == "" ? `firmalife:food/${ctype}` : `tfcchannelcasting:food/${ctype}${cshape}`).resetFood(),
				notConsumable: [chocolatemolds[chocolateShape.indexOf(cshape)]]
			})
		}
	}

	//#endregion

	//#region Food preservation

	const smoking_meats = Ingredient.of('#tfc:foods/raw_meats').itemIds;
	const smoking_cheese = Ingredient.of('#firmalife:foods/cheeses').itemIds;
	const brining_veg = Ingredient.of('#firmalife:foods/pizza_ingredients').itemIds;
	const drying_fruits = Ingredient.of('#tfc:foods/fruits').itemIds;
	const drying_recipes = [
		{input: 'firmalife:food/soy_mixture', output: 'firmalife:food/tofu'},
		{input: 'tfc:food/soybean', output: 'firmalife:food/dehydrated_soybeans'},
		{input: 'firmalife:plant/vanilla', output: 'firmalife:spice/vanilla'},
		{input: 'firmalife:cinnamon_bark', output: 'firmalife:spice/cinnamon'},
		{input: 'firmalife:food/white_chocolate_blend', output: 'firmalife:food/white_chocolate'},
		{input: 'firmalife:food/milk_chocolate_blend', output: 'firmalife:food/milk_chocolate'},
		{input: 'firmalife:food/dark_chocolate_blend', output: 'firmalife:food/dark_chocolate'}
	];

	const brining_ingredients = smoking_meats.concat(brining_veg);

	brining_ingredients.forEach(item => {
		processorRecipeText(`${item.replace(/:/g, "/")}/brining`, 200, 16, "tfg.food_recipe.brining", {
			circuit: 5,
			itemInputs: [item],
			itemOutputs: [item],
			fluidInputs: [Fluid.of("tfc:brine", 100)],
			itemOutputProvider: TFC.isp.copyInput().addTrait('tfc:brined')
		})
	})

	smoking_meats.forEach(item => {
		processorRecipeText(`${item.replace(/:/g, "/")}/smoking`, 200, 16, "tfg.food_recipe.smoking", {
			circuit: 6,
			itemInputs: [item],
			itemOutputs: [item],
			fluidInputs: [Fluid.of('gtceu:wood_gas', 5)],
			itemOutputProvider: TFC.isp.copyInput().addTrait("firmalife:smoked")
		})
	})

	smoking_cheese.forEach(item => {
		processorRecipeText(`${item.replace(/:/g, "/")}/smoking`, 200, 16, "tfg.food_recipe.smoking", {
			circuit: 6,
			itemInputs: [item],
			itemOutputs: [item],
			fluidInputs: [Fluid.of('gtceu:wood_gas', 5)],
			itemOutputProvider: TFC.isp.copyInput().addTrait("firmalife:smoked")
		})
	})

	drying_fruits.forEach(item => {
		processorRecipeText(`${item.replace(/:/g, "/")}/drying`, 200, 16, "tfg.food_recipe.drying", {
			circuit: 6,
			itemInputs: [item],
			itemOutputs: [item],
			fluidInputs: [Fluid.of('gtceu:nitrogen', 100)],
			itemOutputProvider: TFC.isp.copyInput().addTrait("firmalife:dried")
		})
	})

	drying_recipes.forEach(item => {
		processorRecipeText(`${item.input.replace(/:/g, "/")}/drying`, 200, 16, "tfg.food_recipe.drying", {
			circuit: 6,
			itemInputs: [item.input],
			itemOutputs: [item.output],
			fluidInputs: [Fluid.of('gtceu:nitrogen', 100)],
			itemOutputProvider: TFC.isp.of(item.output).copyOldestFood()
		})
	})

	global.FOOD_FRUIT.forEach(fruit => {
		processorRecipeText(`${fruit.name}/drying`, 100, 120, "tfg.food_recipe.freeze_drying", {
			circuit: 7,
			itemInputs: [fruit.id, 'tfg:foil_pack', 'tfg:dry_ice'],
			itemOutputs: [`tfg:food/freeze_dried/${fruit.name}`],
			itemOutputProvider: TFC.isp.of(`tfg:food/freeze_dried/${fruit.name}`).copyOldestFood().removeTrait('firmalife:dried').addTrait('tfg:freeze_dried')
		})
	})

	//#endregion

	//#region Meal Bags
	//1 Input
	processorRecipeText('meal_bag/1', 100, 120, "tfg.food_recipe.freeze_drying", {
		circuit: 10,
		itemInputs: ['1x #tfg:foods/usable_in_meal_bag', '2x tfg:foil_pack', 'tfg:dry_ice'],
		itemOutputs: ['2x tfg:food/meal_bag'],
		itemOutputProvider: TFC.isp.of('2x tfg:food/meal_bag').meal(
			(food => food.hunger(4).saturation(1.5).decayModifier(4.5)), [
			(portion) => portion.nutrientModifier(1).saturationModifier(0.8).waterModifier(0.8)
		]).addTrait('tfg:freeze_dried')
	})

	//2 Input
	processorRecipeText('meal_bag/2', 100, 120, "tfg.food_recipe.freeze_drying", {
		circuit: 11,
		itemInputs: ['2x #tfg:foods/usable_in_meal_bag', '2x tfg:foil_pack', 'tfg:dry_ice'],
		itemOutputs: ['2x tfg:food/meal_bag'],
		itemOutputProvider: TFC.isp.of('2x tfg:food/meal_bag').meal(
			(food => food.hunger(4).saturation(1.5).decayModifier(4.5)), [
			(portion) => portion.nutrientModifier(1).saturationModifier(0.8).waterModifier(0.8)
		]).addTrait('tfg:freeze_dried')
	})

	//3 Input
	processorRecipeText('meal_bag/3', 100, 120, "tfg.food_recipe.freeze_drying", {
		circuit: 12,
		itemInputs: ['3x #tfg:foods/usable_in_meal_bag', '2x tfg:foil_pack', 'tfg:dry_ice'],
		itemOutputs: ['2x tfg:food/meal_bag'],
		itemOutputProvider: TFC.isp.of('2x tfg:food/meal_bag').meal(
			(food => food.hunger(4).saturation(1.5).decayModifier(4.5)), [
			(portion) => portion.nutrientModifier(1).saturationModifier(0.8).waterModifier(0.8)
		]).addTrait('tfg:freeze_dried')
	})

	//4 Input
	processorRecipeText('meal_bag/4', 100, 120, "tfg.food_recipe.freeze_drying", {
		circuit: 13,
		itemInputs: ['4x #tfg:foods/usable_in_meal_bag', '2x tfg:foil_pack', 'tfg:dry_ice'],
		itemOutputs: ['2x tfg:food/meal_bag'],
		itemOutputProvider: TFC.isp.of('2x tfg:food/meal_bag').meal(
			(food => food.hunger(4).saturation(1.5).decayModifier(4.5)), [
			(portion) => portion.nutrientModifier(1).saturationModifier(0.8).waterModifier(0.8)
		]).addTrait('tfg:freeze_dried')
	})

	//5 Input
	processorRecipeText('meal_bag/5', 100, 120, "tfg.food_recipe.freeze_drying", {
		circuit: 14,
		itemInputs: ['5x #tfg:foods/usable_in_meal_bag', '2x tfg:foil_pack', 'tfg:dry_ice'],
		itemOutputs: ['2x tfg:food/meal_bag'],
		itemOutputProvider: TFC.isp.of('2x tfg:food/meal_bag').meal(
			(food => food.hunger(4).saturation(1.5).decayModifier(4.5)), [
			(portion) => portion.nutrientModifier(1).saturationModifier(0.8).waterModifier(0.8)
		]).addTrait('tfg:freeze_dried')
	})

	//#endregion

	//#region Jams

	global.TFC_JAMS.forEach(name => {
		processorRecipe(`${name}_jam`, 200, 8, {
			circuit: 15,
			itemInputs: [`4x tfc:food/${name}`, "#tfc:sweetener", "4x #tfc:empty_jar_with_lid"],
			fluidInputs: ['#tfg:clean_water 100'],
			itemOutputs: [`4x tfc:jar/${name}`],
			itemOutputProvider: TFC.isp.of(`4x tfc:jar/${name}`).copyFood()
		})

		processorRecipe(`${name}_jam_no_seal`, 200, 8, {
			circuit: 16,
			itemInputs: [`4x tfc:food/${name}`, "#tfc:sweetener", "4x tfc:empty_jar"],
			fluidInputs: ['#tfg:clean_water 100'],
			itemOutputs: [`4x tfc:jar/${name}_unsealed`],
			itemOutputProvider: TFC.isp.of(`4x tfc:jar/${name}_unsealed`).copyFood()
		})
	})

	global.FIRMALIFE_JAMS.forEach(name => {
		processorRecipe(`${name}_jam`, 200, 8, {
			circuit: 15,
			itemInputs: [`4x firmalife:food/${name}`, "#tfc:sweetener", "4x #tfc:empty_jar_with_lid"],
			fluidInputs: ['#tfg:clean_water 100'],
			itemOutputs: [`4x firmalife:jar/${name}`],
			itemOutputProvider: TFC.isp.of(`4x firmalife:jar/${name}`).copyFood()
		})

		processorRecipe(`${name}_jam_no_seal`, 200, 8, {
			circuit: 16,
			itemInputs: [`4x firmalife:food/${name}`, "#tfc:sweetener", "4x tfc:empty_jar"],
			fluidInputs: ['#tfg:clean_water 100'],
			itemOutputs: [`4x firmalife:jar/${name}_unsealed`],
			itemOutputProvider: TFC.isp.of(`4x firmalife:jar/${name}_unsealed`).copyFood()
		})
	})

	//#endregion
	//#region Misc

	cookingRecipe("pasta", "firmalife:food/raw_egg_noodles", "firmalife:food/cooked_pasta", "#tfg:clean_water 100")

	cookingRecipe("corn_tortilla", "firmalife:food/masa", "firmalife:food/corn_tortilla")

	cookingRecipe("baked_potato", "tfc:food/potato", "tfc:food/baked_potato")

	cookingRecipe("boiled_egg", "#firmalife:foods/raw_eggs", "tfc:food/boiled_egg", "#tfg:clean_water 200")

	cookingRecipe("cooked_rice", "tfc:food/rice_grain", "tfc:food/cooked_rice", "#tfg:clean_water 200")

	processorRecipe("pasta_tomato_sauce", 60, 8, {
		itemInputs: ["firmalife:food/cooked_pasta", "firmalife:food/tomato_sauce"],
		itemOutputs: ["firmalife:food/pasta_with_tomato_sauce"],
		itemOutputProvider: TFC.isp.of('firmalife:food/pasta_with_tomato_sauce').copyFood()
	})

	processorRecipe(`masa_flour`, 100, 8, {
		circuit: 31,
		itemInputs: [`firmalife:food/nixtamal`],
		itemOutputs: [`4x firmalife:food/masa_flour`],
		itemOutputProvider: TFC.isp.of(`4x firmalife:food/masa_flour`).copyOldestFood()
	})

	event.recipes.tfc.advanced_shaped_crafting(
		TFC.isp.of(`4x firmalife:food/masa_flour`).copyFood(), ['A', 'B'], {
			A: TFC.ingredient.notRotten(`firmalife:food/nixtamal`),
			B: '#forge:tools/mortars'
		}, 0, 0).id(`tfg:mortar/masa_flour`)

	event.recipes.tfc.advanced_shaped_crafting(
		TFC.isp.of(`firmalife:food/soybean_paste`).copyFood(), ['A', 'B'], {
			A: TFC.ingredient.notRotten(`firmalife:food/dehydrated_soybeans`),
			B: '#forge:tools/mortars'
		}, 0, 0).id(`tfg:mortar/soybean_paste`)

	event.recipes.tfc.advanced_shaped_crafting(
		TFC.isp.of(`2x tfc:olive_paste`).copyFood(), ['A', 'B'], {
			A: TFC.ingredient.notRotten(`tfc:food/olive`),
			B: '#forge:tools/mortars'
		}, 0, 0).id(`tfg:mortar/olive_paste`)

	processorRecipe('firmalife_masa', 300, 2, {
		circuit: 3,
		itemInputs: ["firmalife:food/masa_flour"],
		fluidInputs: ['#tfg:clean_water 100'],
		itemOutputs: ["2x firmalife:food/masa"],
		itemOutputProvider: TFC.isp.of("2x firmalife:food/masa").copyFood()
	})

	processorRecipe("tortilla_chips", 40, 16, {
		itemInputs: ["firmalife:food/taco_shell", "tfc:powder/salt"],
		itemOutputs: ["firmalife:food/tortilla_chips"],
		itemOutputProvider: TFC.isp.of("firmalife:food/tortilla_chips").copyFood()
	})
	
	processorRecipe("tomato_sauce", 300, 8, {
		circuit: 1,
		itemInputs: ['tfc:food/tomato', 'tfc:powder/salt', 'tfc:food/garlic'],
		fluidInputs: ['#tfg:clean_water 200'],
		itemOutputs: ['5x firmalife:food/tomato_sauce'],
		itemOutputProvider: TFC.isp.of('5x firmalife:food/tomato_sauce').copyOldestFood()
	})

	processorRecipe("tomato_sauce_mix", 600, 8, {
		circuit: 2,
		itemInputs: ['tfc:food/tomato', 'tfc:powder/salt', 'tfc:food/garlic'],
		itemOutputs: ['5x firmalife:food/tomato_sauce_mix'],
		itemOutputProvider: TFC.isp.of('5x firmalife:food/tomato_sauce_mix').copyOldestFood()
	})

	processorRecipe("tomato_sauce_from_mix", 200, 8, {
		itemInputs: ['firmalife:food/tomato_sauce_mix'],
		fluidInputs: ['#tfg:clean_water 200'],
		itemOutputs: ['firmalife:food/tomato_sauce'],
		itemOutputProvider: TFC.isp.of('firmalife:food/tomato_sauce').copyOldestFood()
	})

	processorRecipe("olive_paste", 60, 8, {
		itemInputs: ['tfc:food/olive'],
		itemOutputs: ['2x tfc:olive_paste'],
		itemOutputProvider: TFC.isp.of('2x tfc:olive_paste'),
		circuit: 3
	})

	processorRecipe("soybean_paste", 60, 8, {
		itemInputs: ['firmalife:food/dehydrated_soybeans'],
		itemOutputs: ['firmalife:food/soybean_paste'],
		itemOutputProvider: TFC.isp.of('firmalife:food/soybean_paste').copyOldestFood()
	})

	processorRecipeText('calorie_paste', 100, 512, "tfg.food_recipe.freeze_drying", {
		circuit: 8,
		itemInputs: ['firmalife:food/soybean_paste', 'tfg:foil_pack', '2x gtceu:small_meat_dust', 'tfg:dry_ice'],
		itemOutputs: ['tfg:food/calorie_paste'],
		fluidInputs: [Fluid.of('gtceu:fermented_biomass', 40)],
		itemOutputProvider: TFC.isp.of('tfg:food/calorie_paste').copyOldestFood().addTrait('tfg:freeze_dried')
	})

	//Kelp
	cookingRecipe("dried_kelp_a", "tfc:plant/winged_kelp", "tfc:food/dried_kelp")
	cookingRecipe("dried_kelp_b", "tfc:plant/leafy_kelp", "tfc:food/dried_kelp")
	cookingRecipe("dried_kelp_c", "tfc:plant/giant_kelp_flower", "tfc:food/dried_kelp")
		
	//Seaweed
	cookingRecipe("dried_seaweed_a", "tfc:food/fresh_seaweed", "tfc:food/dried_seaweed")
	cookingRecipe("dried_seaweed_b", "tfc:groundcover/seaweed", "tfc:food/dried_seaweed")
	
	// Vinegar
	processorRecipe('vinegar_alcohol', 600, GTValues.VA[GTValues.LV], {
		circuit: 5,
		itemInputs: ['#tfc:foods/fruits'],
		fluidInputs: ['#tfc:alcohols 250'],
		fluidOutputs: [Fluid.of('tfc:vinegar', 250)]
	})

	//#region Pizza

	processorRecipe("pizza_no_extra", 600, 16, {
		circuit: 3,
		itemInputs: ["firmalife:food/pizza_dough", "firmalife:food/tomato_sauce", "firmalife:food/shredded_cheese"],
		itemOutputs: ["firmalife:food/raw_pizza"],
		itemOutputProvider: TFC.isp.of("firmalife:food/raw_pizza").meal(
			(food) => food.hunger(4).saturation(1).grain(1).dairy(0.25).decayModifier(4.5),
			[(portion) => portion.nutrientModifier(0.8).waterModifier(0.8).saturationModifier(0.8)]
		)
	})

	processorRecipe("pizza_1_extra", 600, GTValues.VHA[GTValues.MV], {
		circuit: 1,
		itemInputs: ["firmalife:food/pizza_dough", "firmalife:food/tomato_sauce", "firmalife:food/shredded_cheese", "#firmalife:foods/pizza_ingredients"],
		itemOutputs: ["firmalife:food/raw_pizza"],
		itemOutputProvider: TFC.isp.of("firmalife:food/raw_pizza").meal(
			(food) => food.hunger(4).saturation(1).grain(1).dairy(0.25).decayModifier(4.5),
			[(portion) => portion.nutrientModifier(0.8).waterModifier(0.8).saturationModifier(0.8)]
		)
	})

	processorRecipe("pizza_2_extra", 600, GTValues.VHA[GTValues.MV], {
		circuit: 2,
		itemInputs: ["firmalife:food/pizza_dough", "firmalife:food/tomato_sauce", "firmalife:food/shredded_cheese", "2x #firmalife:foods/pizza_ingredients"],
		itemOutputs: ["firmalife:food/raw_pizza"],
		itemOutputProvider: TFC.isp.of("firmalife:food/raw_pizza").meal(
			(food) => food.hunger(4).saturation(1).grain(1).dairy(0.25).decayModifier(4.5),
			[(portion) => portion.nutrientModifier(0.8).waterModifier(0.8).saturationModifier(0.8)]
		)
	})

	processorRecipe("pizza_dough", 300, 16, {
		itemInputs: ['firmalife:spice/basil_leaves', '#tfc:foods/dough', 'tfc:powder/salt'],
		fluidInputs: ['#firmalife:oils 100'],
		itemOutputs: ['4x firmalife:food/pizza_dough'],
		itemOutputProvider: TFC.isp.of("4x firmalife:food/pizza_dough").copyOldestFood()
	})

	//#endregion

	processorRecipe("shredded_cheese", 100, 16, {
		itemInputs: ['#firmalife:foods/cheeses'],
		itemOutputs: ['4x firmalife:food/shredded_cheese'],
		circuit: 30,
		itemOutputProvider: TFC.isp.of('4x firmalife:food/shredded_cheese').copyFood()
	})

	processorRecipe("basil", 20, 16, {
		itemInputs: ['firmalife:plant/basil'],
		itemOutputs: ['2x firmalife:spice/basil_leaves'],
		circuit: 30,
		itemOutputProvider: TFC.isp.of('2x firmalife:spice/basil_leaves').resetFood()
	})	

	//#region Ice cream

	processorRecipe("vanilla_ice_cream", 300, 16, {
		itemInputs: ['firmalife:ice_shavings', '#tfc:sweetener', 'firmalife:spice/vanilla'],
		itemOutputs: ['2x firmalife:food/vanilla_ice_cream'],
		fluidInputs: [Fluid.of('firmalife:cream', 1000)],
		itemOutputProvider: TFC.isp.of("2x firmalife:food/vanilla_ice_cream").resetFood()
	})

	processorRecipe("chocolate_ice_cream", 300, 16, {
		itemInputs: ['firmalife:food/vanilla_ice_cream'],
		itemOutputs: ['firmalife:food/chocolate_ice_cream'],
		fluidInputs: [Fluid.of('tfcchannelcasting:milk_chocolate', 100)],
		itemOutputProvider: TFC.isp.of("firmalife:food/chocolate_ice_cream").resetFood()
	})

	processorRecipe("strawberry_ice_cream", 300, 16, {
		itemInputs: ['firmalife:food/vanilla_ice_cream', '2x tfc:food/strawberry'],
		itemOutputs: ['firmalife:food/strawberry_ice_cream'],
		itemOutputProvider: TFC.isp.of("firmalife:food/strawberry_ice_cream").resetFood()
	})

	processorRecipe("cookie_dough_ice_cream", 300, 16, {
		itemInputs: [`firmalife:food/vanilla_ice_cream`, `firmalife:food/chocolate_chip_cookie_dough`],
		itemOutputs: [`2x firmalife:food/cookie_dough_ice_cream`],
		itemOutputProvider: TFC.isp.of("firmalife:food/cookie_dough_ice_cream").resetFood()
	})

	processorRecipe("banana_split", 500, 16, {
		itemInputs: ['firmalife:food/vanilla_ice_cream', 'firmalife:food/strawberry_ice_cream', 'firmalife:food/chocolate_ice_cream', 'firmalife:food/pineapple', 'tfc:food/cherry', '2x tfc:food/banana'],
		itemOutputs: ['2x firmalife:food/banana_split'],
		itemOutputProvider: TFC.isp.of('2x firmalife:food/banana_split').resetFood()
	})

	//#endregion

	processorRecipe("butter", 300, 16, {
		itemInputs: ["tfc:powder/salt"],
		fluidInputs: [Fluid.of('firmalife:cream', 1000)],
		itemOutputs: ["firmalife:food/butter"],
		itemOutputProvider: TFC.isp.of('firmalife:food/butter').resetFood()
	})

	processorRecipe("pie_dough", 300, 16, {
		circuit: 2,
		itemInputs: ['#tfc:sweetener', 'firmalife:food/butter', '#tfc:foods/flour'],
		fluidInputs: ['#tfg:clean_water 1000'],
		itemOutputs: ['firmalife:food/pie_dough'],
		itemOutputProvider: TFC.isp.of('firmalife:food/pie_dough').copyOldestFood()
	})

	processorRecipe("pumpkin_pie_dough", 300, 16, {
		circuit: 2,
		itemInputs: ['#tfc:sweetener', '#forge:eggs', '2x tfc:food/pumpkin_chunks', '#tfc:foods/flour'],
		fluidInputs: ['#tfg:clean_water 1000'],
		itemOutputs: ['firmalife:food/pumpkin_pie_dough'],
		itemOutputProvider: TFC.isp.of('firmalife:food/pumpkin_pie_dough').copyOldestFood()
	})

	processorRecipe("raw_pumpkin_pie", 20, 8, {
		itemInputs: ["firmalife:food/pumpkin_pie_dough", "#firmalife:pie_pans"],
		itemOutputs: ["firmalife:food/raw_pumpkin_pie"],
		itemOutputProvider: TFC.isp.of("firmalife:food/raw_pumpkin_pie").copyFood()
	})

	processorRecipe("cookie_dough", 300, 16, {
		itemInputs: ['#tfc:sweetener', '#forge:eggs', 'firmalife:food/butter', '#tfc:foods/flour', "firmalife:spice/vanilla"],
		itemOutputs: ['4x firmalife:food/cookie_dough'],
		itemOutputProvider: TFC.isp.of('4x firmalife:food/cookie_dough').copyOldestFood()
	})

	processorRecipe("chocolate_chip_cookie_dough", 300, 16, {
		itemInputs: ['4x firmalife:food/cookie_dough', '#firmalife:foods/chocolate'],
		itemOutputs: ['4x firmalife:food/chocolate_chip_cookie_dough'],
		itemOutputProvider: TFC.isp.of('4x firmalife:food/chocolate_chip_cookie_dough').copyOldestFood()
	})

	processorRecipe("hardtack_dough", 300, 16, {
		itemInputs: ['tfc:powder/salt', '#tfc:foods/flour'],
		fluidInputs: ['#tfg:clean_water 1000'],
		itemOutputs: ['4x firmalife:food/hardtack_dough'],
		circuit: 3,
		itemOutputProvider: TFC.isp.of('4x firmalife:food/hardtack_dough').copyFood()
	})

	processorRecipe("yeast_starter", 1200, 8, {
		circuit: 2,
		fluidInputs: [Fluid.of('firmalife:yeast_starter', 100)],
		fluidOutputs: [Fluid.of('firmalife:yeast_starter', 600)],
		itemInputs: ['#tfc:foods/flour']
	})

	processorRecipe("yeast_starter_from_water", 7200, 8, {
		circuit: 10,
		itemInputs: ['#tfc:foods/fruits'],
		fluidInputs: ['#tfg:clean_water 100'],
		fluidOutputs: [Fluid.of('firmalife:yeast_starter', 100)]
	})
	
	processorRecipe("cocoa_dust", 100, 4, {
		circuit: 1,
		itemInputs: ["firmalife:food/roasted_cocoa_beans"],
		itemOutputs: ["gtceu:cocoa_dust"],
		itemOutputProvider: TFC.isp.of("gtceu:cocoa_dust")
	})

	processorRecipe("cocoa_butter", 100, 4, {
		circuit: 2,
		itemInputs: ["firmalife:food/roasted_cocoa_beans"],
		itemOutputs: ["firmalife:food/cocoa_butter"],
		itemOutputProvider: TFC.isp.of("firmalife:food/cocoa_butter")
	})

	processorRecipe("red_grapes", 50, 8, {
		itemInputs: ["firmalife:food/red_grapes"],
		itemOutputs: ["firmalife:food/smashed_red_grapes"],
		itemOutputProvider: TFC.isp.of('firmalife:food/smashed_red_grapes').copyFood()
	})

	processorRecipe("white_grapes", 50, 8, {
		itemInputs: ["firmalife:food/white_grapes"],
		itemOutputs: ["firmalife:food/smashed_white_grapes"],
		itemOutputProvider: TFC.isp.of('firmalife:food/smashed_white_grapes').copyFood()
	})

	processorRecipe("cured_maize", 300, 8, {
		circuit: 1,
		itemInputs: ["tfc:food/maize_grain"],
		inputFluids: [Fluid.of('tfc:limewater', 100)],
		itemOutputs: ["firmalife:food/cured_maize"],
		itemOutputProvider: TFC.isp.of('firmalife:food/cured_maize').copyFood()
	})

	processorRecipe("soy_mixture", 300, 8, {
		circuit: 1,
		itemInputs: ["tfc:food/soybean", 'tfc:powder/salt'],
		fluidInputs: ['#tfg:clean_water 50'],
		itemOutputs: ["firmalife:food/soy_mixture"],
		itemOutputProvider: TFC.isp.of('firmalife:food/soy_mixture').copyFood()
	})

	processorRecipe("brown_mushroom", 100, 8, {
		circuit: 30,
		itemInputs: ["minecraft:brown_mushroom_block"],
		itemOutputs: ["4x minecraft:brown_mushroom"],
		itemOutputProvider: TFC.isp.of("4x minecraft:brown_mushroom").resetFood()
	})

	processorRecipe("red_mushroom", 100, 8, {
		circuit: 30,
		itemInputs: ["minecraft:red_mushroom_block"],
		itemOutputs: ["4x minecraft:red_mushroom"],
		itemOutputProvider: TFC.isp.of("4x minecraft:red_mushroom").resetFood()
	})

	processorRecipe("cut_pumpkin", 100, 8, {
		circuit: 30,
		itemInputs: ["tfc:pumpkin"],
		itemOutputs: ["4x tfc:food/pumpkin_chunks"],
		itemOutputProvider: TFC.isp.of("4x tfc:food/pumpkin_chunks").copyFood()
	})

	processorRecipe("cut_melon", 100, 8, {
		circuit: 30,
		itemInputs: ["tfc:melon"],
		itemOutputs: ["4x tfc:food/melon_slice"],
		itemOutputProvider: TFC.isp.of("4x tfc:food/melon_slice").copyFood()
	})

	processorRecipe("salsa", 300, 8, {
		circuit: 1,
		itemInputs: ['tfc:food/tomato', 'tfc:powder/salt', 'tfg:spice/cilantro_leaves'],
		itemOutputs: ['5x firmalife:food/salsa'],
		itemOutputProvider: TFC.isp.of('5x firmalife:food/salsa').copyFood()
	})

	processorRecipe("bacon", 300, 8, {
		circuit: 1,
		itemInputs: ['tfc:food/pork', 'tfc:powder/salt'],
		itemOutputs: ['4x firmalife:food/bacon'],
		itemOutputProvider: TFC.isp.of('4x firmalife:food/bacon').copyFood()
	})

	processorRecipe("picked_egg", 1000, 8, {
		circuit: 1,
		itemInputs: ['minecraft:clay_ball', 'tfc:powder/wood_ash', 'tfc:powder/salt', 'tfc:food/boiled_egg'],
		itemOutputs: ['firmalife:food/pickled_egg'],
		itemOutputProvider: TFC.isp.of('firmalife:food/pickled_egg').copyFood()
	})

	processorRecipe("garlic_bread", 300, 8, {
		circuit: 1,
		itemInputs: ['firmalife:food/toast', 'firmalife:food/butter', 'tfc:food/garlic'],
		itemOutputs: ['firmalife:food/garlic_bread'],
		itemOutputProvider: TFC.isp.of('firmalife:food/garlic_bread').copyOldestFood()
	})

	//#region Alcohols

	global.TFC_ALCOHOL.forEach(alcohol => {
		processorRecipe(alcohol.id.replace(/:/g, "_"), 2400, 1, {
			itemInputs: [alcohol.ingredient],
			fluidInputs: ['#tfg:clean_water 500', 'firmalife:yeast_starter 10'],
			fluidOutputs: [Fluid.of(alcohol.id, 500)],
			circuit: 11,
			notConsumable: ['#tfc:barrels']
		})
	})

	//#endregion
	//#region Cakes

	processorRecipe("cake_base", 300, 8, {
		circuit: 4,
		itemInputs: ["#forge:eggs", "2x #tfg:sugars", "2x #tfc:foods/flour"],
		fluidInputs: ['#tfc:milks 1000'],
		itemOutputs: ["createaddition:cake_base"],
		itemOutputProvider: TFC.isp.of("createaddition:cake_base").copyOldestFood()
	})

	cookingRecipe("baked_cake_base", "createaddition:cake_base", "createaddition:cake_base_baked")

	processorRecipe("vanilla_cake", 300, 8, {
		itemInputs: ['createaddition:cake_base_baked', '3x tfc:food/strawberry', 'firmalife:spice/vanilla'],
		fluidInputs: [Fluid.of("tfcchannelcasting:white_chocolate", 400)],
		itemOutputs: ["tfc:cake"]
	})

	processorRecipe("milk_chocolate_cake", 300, 8, {
		itemInputs: ['createaddition:cake_base_baked', '3x tfc:food/cherry', 'firmalife:food/cocoa_powder'],
		fluidInputs: [Fluid.of("tfcchannelcasting:milk_chocolate", 400)],
		itemOutputs: ["createaddition:chocolate_cake"]
	})

	processorRecipe("dark_chocolate_cake", 300, 8, {
		itemInputs: ['createaddition:cake_base_baked', '3x tfc:food/cherry', 'firmalife:food/cocoa_powder'],
		fluidInputs: [Fluid.of("tfcchannelcasting:dark_chocolate", 400)],
		itemOutputs: ["createaddition:chocolate_cake"]
	})

	processorRecipe("maple_honey_cake", 300, 8, {
		itemInputs: ['createaddition:cake_base_baked', '4x firmalife:raw_honey'],
		fluidInputs: [Fluid.of("afc:maple_syrup", 1000)],
		itemOutputs: ["createaddition:honey_cake"]
	})

	processorRecipe("birch_honey_cake", 300, 8, {
		itemInputs: ['createaddition:cake_base_baked', '4x firmalife:raw_honey'],
		fluidInputs: [Fluid.of("afc:birch_syrup", 1000)],
		itemOutputs: ["createaddition:honey_cake"]
	})

	processorRecipe("birtday_cake", 300, GTValues.VA[GTValues.HV], {
		itemInputs: ['createaddition:cake_base', '4x species:birt_egg', '4x tfc:food/blueberry', '2x minecraft:chorus_fruit', 'gtceu:blue_alloy_single_wire'],
		fluidInputs: [Fluid.of('gtceu:helium_3', 50)],
		itemOutputs: ["species:birtday_cake"]
	})

	//#endregion
	//#region Soup

    processorRecipe("grain_soup", 300, 8, {
        circuit: 20,
        itemInputs: [
            '3x #tfc:bowls',
            '2x #tfc:foods/grains',
            '3x #tfc:foods/usable_in_soup'
        ],
        fluidInputs: [Fluid.of('minecraft:water', 100)],
        itemOutputs: ['3x tfc:food/grain_soup'],
        itemOutputProvider: TFC.isp.of('3x tfc:food/grain_soup').simpleModifier('tfg:add_bowl').meal(
            (food) => food.hunger(5).water(1).saturation(1).decayModifier(4.5),
            [
                (portion) => portion
                    .ingredient(Ingredient.of('#tfc:foods/usable_in_soup'))
                    .nutrientModifier(1)
                    .saturationModifier(0.8)
                    .waterModifier(0.8)
            ]
        )
    })

    processorRecipe("fruit_soup", 200, 8, {
        circuit: 21,
        itemInputs: [
            '3x #tfc:bowls',
            '2x #tfc:foods/fruits',
            '3x #tfc:foods/usable_in_soup'
        ],
        fluidInputs: [Fluid.of('minecraft:water', 100)],
        itemOutputs: ['3x tfc:food/fruit_soup'],
        itemOutputProvider: TFC.isp.of('3x tfc:food/fruit_soup').simpleModifier('tfg:add_bowl').meal(
            (food) => food.hunger(5).water(1).saturation(1).decayModifier(4.5),
            [
                (portion) => portion
                    .ingredient(Ingredient.of('#tfc:foods/usable_in_soup'))
                    .nutrientModifier(1)
                    .saturationModifier(0.8)
                    .waterModifier(0.8)
            ]
        )
    })

    processorRecipe("vegetables_soup", 200, 8, {
        circuit: 22,
        itemInputs: [
            '3x #tfc:bowls',
            '2x #tfc:foods/vegetables',
            '3x #tfc:foods/usable_in_soup'
        ],
        fluidInputs: [Fluid.of('minecraft:water', 100)],
        itemOutputs: ['3x tfc:food/vegetables_soup'],
        itemOutputProvider: TFC.isp.of('3x tfc:food/vegetables_soup').simpleModifier('tfg:add_bowl').meal(
            (food) => food.hunger(5).water(1).saturation(1).decayModifier(4.5),
            [
                (portion) => portion
                    .ingredient(Ingredient.of('#tfc:foods/usable_in_soup'))
                    .nutrientModifier(1)
                    .saturationModifier(0.8)
                    .waterModifier(0.8)
            ]
        )
    })

    processorRecipe("protein_soup", 200, 8, {
        circuit: 23,
        itemInputs: [
            '3x #tfc:bowls',
            '2x #tfc:foods/meats',
            '3x #tfc:foods/usable_in_soup'
        ],
        fluidInputs: [Fluid.of('minecraft:water', 100)],
        itemOutputs: ['3x tfc:food/protein_soup'],
        itemOutputProvider: TFC.isp.of('3x tfc:food/protein_soup').simpleModifier('tfg:add_bowl').meal(
            (food) => food.hunger(5).water(1).saturation(1).decayModifier(4.5),
            [
                (portion) => portion
                    .ingredient(Ingredient.of('#tfc:foods/usable_in_soup'))
                    .nutrientModifier(1)
                    .saturationModifier(0.8)
                    .waterModifier(0.8)
            ]
        )
    })

    processorRecipe("dairy_soup", 200, 8, {
        circuit: 24,
        itemInputs: [
            '3x #tfc:bowls',
            '2x #tfc:foods/dairy',
            '3x #tfc:foods/usable_in_soup'
        ],
        fluidInputs: [Fluid.of('minecraft:water', 100)],
        itemOutputs: ['3x tfc:food/dairy_soup'],
        itemOutputProvider: TFC.isp.of('3x tfc:food/dairy_soup').simpleModifier('tfg:add_bowl').meal(
            (food) => food.hunger(5).water(1).saturation(1).decayModifier(4.5),
            [
                (portion) => portion
                    .ingredient(Ingredient.of('#tfc:foods/usable_in_soup'))
                    .nutrientModifier(1)
                    .saturationModifier(0.8)
                    .waterModifier(0.8)
            ]
        )
    })

	//#endregion

	// These don't need the ISP handling, they're just here to keep all the food recipes together

	event.recipes.gtceu.mixer('tfg:tfc/olive_oil_water')
		.inputFluids(Fluid.of('water', 200))
		.itemInputs('1x tfc:olive_paste')
		.outputFluids(Fluid.of('tfc:olive_oil_water', 200))
		.duration(200)
		.EUt(28)

	event.recipes.gtceu.distillery('tfg:tfc/olive_oil')
		.inputFluids(Fluid.of('tfc:olive_oil_water', 250))
		.outputFluids(Fluid.of('tfc:olive_oil', 50))
		.duration(600)
		.EUt(28)

	event.recipes.gtceu.fermenter('soybean_oil')
		.itemInputs('firmalife:food/soybean_paste')
		.inputFluids("#tfg:clean_water 100")
		.outputFluids(Fluid.of('firmalife:soybean_oil', 250))
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(600)

	// GT cocoa dust compat
	event.recipes.gtceu.macerator('firmalife:food/cocoa_powder')
		.itemInputs('gtceu:cocoa_dust')
		.itemOutputs('4x firmalife:food/cocoa_powder')
		.duration(100)
		.EUt(2)

	event.recipes.tfc.quern('4x firmalife:food/cocoa_powder', 'gtceu:cocoa_dust')
		.id(`tfg:quern/cocoa_powder`)

	event.recipes.tfc.quern('gtceu:cocoa_dust', 'firmalife:food/roasted_cocoa_beans')
		.id('tfg:quern/cocoa_dust');

	// These don't seem to work with the set_bowl ISP modifier 
	event.recipes.tfc.pot(['#tfc:bowls', 'firmalife:ice_shavings', 'firmalife:ice_shavings', 'firmalife:ice_shavings',  'firmalife:ice_shavings'],
		Fluid.of('minecraft:water', 1000), 20, 10)
		.itemOutput(TFC.isp.of('tfg:food/ice_soup'))
		.id('tfg:pot/ice_soup')

	event.recipes.gtceu.food_processor('ice_soup')
		.itemInputs('#tfc:bowls', '4x firmalife:ice_shavings')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.itemOutputs('tfg:food/ice_soup')
		.duration(60)
		.EUt(16)

	event.shaped('4x tfc:powder/salt', ['A', 'B'], {A: '#forge:dusts/salt', B: '#forge:tools/mortars'})
		.id(`tfg:mortar/salt`)

	//#endregion
	
	//Golden Apple
	processorRecipe('golden_apple_from_red', 30 * 20, GTValues.VA[GTValues.HV], {
		itemInputs: ['tfc:food/red_apple'],
		fluidInputs: [Fluid.of('gtceu:gold', 144 * 8)],
		itemOutputs: ['minecraft:golden_apple'],
		circuit: 5
	})
	processorRecipe('golden_apple_from_green', 30 * 20, GTValues.VA[GTValues.HV], {
		itemInputs: ['tfc:food/green_apple'],
		fluidInputs: [Fluid.of('gtceu:gold', 144 * 8)],
		itemOutputs: ['minecraft:golden_apple'],
		circuit: 5
	})

	//#region New foods

	event.recipes.tfc.heating('tfg:food/raw_birt', 200)
		.resultItem(TFC.isp.of('tfg:food/cooked_birt').copyFood())

	event.recipes.tfc.heating('tfg:food/raw_crawlermari', 200)
		.resultItem(TFC.isp.of('tfg:food/cooked_crawlermari').copyFood())

	event.recipes.tfc.heating('tfg:food/raw_limpet', 200)
		.resultItem(TFC.isp.of('tfg:food/cooked_limpet').copyFood())

	event.recipes.tfc.heating('tfg:sunflower_product', 200)
	 	.resultItem(TFC.isp.of('tfg:roasted_sunflower_seeds').copyFood())

	event.recipes.tfc.heating('tfg:food/raw_moon_rabbit', 200)
		.resultItem(TFC.isp.of('tfg:food/cooked_moon_rabbit').copyFood())

	event.recipes.tfc.heating('betterend:bolux_mushroom_product', 200)
		.resultItem(TFC.isp.of('betterend:bolux_mushroom_cooked').copyFood())

	event.recipes.tfc.heating('betterend:chorus_mushroom_product', 200)
		.resultItem(TFC.isp.of('betterend:chorus_mushroom_cooked').copyFood())

	event.recipes.tfc.heating('betterend:shadow_berry_product', 200)
		.resultItem(TFC.isp.of('betterend:shadow_berry_cooked').copyFood())

	event.recipes.tfc.heating('betterend:cave_pumpkin_pie_raw', 200)
		.resultItem(TFC.isp.of('betterend:cave_pumpkin_pie').copyFood())

	event.recipes.tfc.heating('tfg:food/raw_glacian_mutton', 200)
		.resultItem(TFC.isp.of('tfg:food/cooked_glacian_mutton').copyFood())
	
	event.recipes.tfc.heating('tfg:food/raw_sniffer_beef', 200)
		.resultItem(TFC.isp.of('tfg:food/cooked_sniffer_beef').copyFood())
	
	event.recipes.tfc.heating('tfg:food/raw_wraptor', 200)
		.resultItem(TFC.isp.of('tfg:food/cooked_wraptor').copyFood())
	
	event.recipes.tfc.heating('tfg:food/raw_springling_collar', 200)
		.resultItem(TFC.isp.of('tfg:food/cooked_springling_collar').copyFood())

	event.recipes.tfc.heating('tfg:food/raw_walker_steak', 200)
		.resultItem(TFC.isp.of('tfg:food/cooked_walker_steak').copyFood())
	
	event.recipes.tfc.heating('tfg:food/raw_glider_wings', 200)
		.resultItem(TFC.isp.of('tfg:food/cooked_glider_wings').copyFood())
	
	event.recipes.tfc.heating('tfg:food/raw_whole_soarer', 200)
		.resultItem(TFC.isp.of('tfg:food/cooked_whole_soarer').copyFood())
	
	event.recipes.tfc.heating('tfg:food/raw_crusher_meat', 200)
		.resultItem(TFC.isp.of('tfg:food/cooked_crusher_meat').copyFood())
		
	event.recipes.tfc.heating('tfg:food/raw_goober_meat', 200)
		.resultItem(TFC.isp.of('tfg:food/cooked_goober_meat').copyFood())

	event.recipes.tfc.heating('tfg:food/raw_surfer_steak', 200)
		.resultItem(TFC.isp.of('tfg:food/cooked_surfer_steak').copyFood())

	event.recipes.tfc.heating('tfg:food/raw_cruncher_ribs', 200)
		.resultItem(TFC.isp.of('tfg:food/cooked_cruncher_ribs').copyFood())

	event.recipes.tfc.heating('tfg:food/raw_stickastackatick', 200)
		.resultItem(TFC.isp.of('tfg:food/cooked_stickastackatick').copyFood())

	event.recipes.tfc.heating('tfg:food/raw_long_pig_filet', 200)
		.resultItem(TFC.isp.of('tfg:food/cooked_long_pig_filet').copyFood())

	event.recipes.tfc.heating('tfg:food/brioche_dough', 200)
		.resultItem(TFC.isp.of('tfg:food/brioche_bun').copyFood());

	event.recipes.tfc.heating('tfg:food/raw_burger_patty', 200)
		.resultItem(TFC.isp.of('tfg:food/cooked_burger_patty').copyFood());
		
	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.itemStackProvider.of('tfg:food/raw_stickastackatick').copyFood(),
		[TFC.ingredient.notRotten('tfg:food/raw_stackatick_chunks'), '#forge:rods/wood'], 'tfg:food/raw_stackatick_chunks')
		.id(`tfg:crafting/raw_stickastackatick`)

	// Bulbkin
	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.itemStackProvider.of('4x betterend:cave_pumpkin_chunks').copyFood(),
		[TFC.ingredient.notRotten('betterend:cave_pumpkin'), '#forge:tools/hammers'], 'betterend:cave_pumpkin')
		.id(`tfg:crafting/cave_pumpkin_chunks_hammer`)

	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.itemStackProvider.of('4x betterend:cave_pumpkin_chunks').copyFood(),
		[TFC.ingredient.notRotten('betterend:cave_pumpkin'), '#tfc:knives'], 'betterend:cave_pumpkin')
		.id(`tfg:crafting/cave_pumpkin_chunks_knife`)

	processorRecipe("cut_cave_pumpkin", 100, 8, {
		circuit: 30,
		itemInputs: ["betterend:cave_pumpkin"],
		itemOutputs: ["4x betterend:cave_pumpkin_chunks"],
		itemOutputProvider: TFC.isp.of("4x betterend:cave_pumpkin_chunks").copyFood()
	})

	processorRecipe("cave_pumpkin_pie_dough", 300, GTValues.VA[GTValues.HV], {
		itemInputs: ['#tfg:martian_eggs', '2x betterend:cave_pumpkin_chunks', 'betterend:amber_root_product', 'tfg:wraptor_sugar'],
		fluidInputs: ['minecraft:water 1000'],
		itemOutputs: ["betterend:cave_pumpkin_pie_dough"],
		itemOutputProvider: TFC.isp.of("betterend:cave_pumpkin_pie_dough").copyOldestFood()
	})

	event.recipes.firmalife.mixing_bowl()
		.ingredients([
			TFC.ingredient.notRotten('#tfg:martian_eggs'), 
			TFC.ingredient.notRotten('betterend:cave_pumpkin_chunks'), 
			TFC.ingredient.notRotten('betterend:cave_pumpkin_chunks'), 
			TFC.ingredient.notRotten('betterend:amber_root_product'),
			'tfg:wraptor_sugar'],
			Fluid.of('minecraft:water', 1000))
		.outputItem('betterend:cave_pumpkin_pie_dough')
		.id('tfg:mixing_bowl/cave_pumpkin_pie_dough')

	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.isp.of(`betterend:cave_pumpkin_pie_raw`).copyFood().firmaLifeAddPiePan(), [
			TFC.ingredient.notRotten(`betterend:cave_pumpkin_pie_dough`),
			'#firmalife:pie_pans'
		]).id(`tfg:shapeless/cave_pumpkin_pie_raw`)

	processorRecipe("raw_cave_pumpkin_pie", 20, 8, {
		itemInputs: [`betterend:cave_pumpkin_pie_dough`, "#firmalife:pie_pans"],
		itemOutputs: ["betterend:cave_pumpkin_pie_raw"],
		itemOutputProvider: TFC.isp.of("betterend:cave_pumpkin_pie_raw").copyFood()
	})

	// Dino nugs

	registerFoodRecipe("food_oven", "raw_dino_nugget", 300, GTValues.VA[GTValues.LV], 'tfg.food_recipe.deep_frying', {
		itemInputs: ["tfg:food/raw_dino_nugget"],
		itemOutputs: ["tfg:food/cooked_dino_nugget"],
		fluidInputs: ['#firmalife:oils 100'],
		itemOutputProvider: TFC.isp.of("tfg:food/cooked_dino_nugget")
			.firmaLifeCopyDynamicFood()
			.addTrait("firmalife:oven_baked")
			.meal(
				(food) => food.hunger(3).saturation(2).decayModifier(1.5),
				[(portion) => portion.nutrientModifier(2.0)])
	})

	processorRecipe("raw_dino_nuggets", 300, GTValues.VA[GTValues.HV], {
		itemInputs: ['#tfg:raw_dinosaur_meat', '3x #tfc:foods/flour', 'tfc:powder/salt'],
		fluidInputs: ['tfc:beer 200'],
		notConsumable: ['gtceu:nugget_casting_mold'],
		itemOutputs: ['2x tfg:food/raw_dino_nugget'],
		circuit: 1,
		itemOutputProvider: TFC.isp.of("2x tfg:food/raw_dino_nugget").meal(
			(food) => food.hunger(1).decayModifier(3).grain(0.4),
			[(portion) => portion.nutrientModifier(0.5).waterModifier(0.4)]
		)
	})

	processorRecipe("raw_dino_nuggets_aged_beer", 300, GTValues.VA[GTValues.HV], {
		itemInputs: ['#tfg:raw_dinosaur_meat', '3x #tfc:foods/flour', 'tfc:powder/salt'],
		fluidInputs: ['tfcagedalcohol:aged_beer 200'],
		notConsumable: ['gtceu:nugget_casting_mold'],
		itemOutputs: ['2x tfg:food/raw_dino_nugget'],
		circuit: 1,
		itemOutputProvider: TFC.isp.of("2x tfg:food/raw_dino_nugget").meal(
			(food) => food.hunger(1).decayModifier(3).grain(0.6),
			[(portion) => portion.nutrientModifier(0.5).waterModifier(0.4)]
		)
	})

	// Deep Frying
	for (let i = 1; i <= 5; i++) {
		// Fries
		event.recipes.tfc.pot(
			Array(i).fill('tfg:food/raw_fries'),
			TFC.fluidStackIngredient('#firmalife:oils', 100 * i),
			20*20,
			200
			)
			.itemOutput(TFC.isp.of(`${i}x tfg:food/cooked_fries`).copyFood()
		).id(`tfg:pot/cooked_fries_${i}`);

		// Beer Battered Cheese Curds
		event.recipes.tfc.pot(
			Array(i).fill('tfg:food/raw_beer_battered_cheese_curds'),
			TFC.fluidStackIngredient('#firmalife:oils', 100 * i),
			20*20,
			200
			)
			.itemOutput(TFC.isp.of(`${i}x tfg:food/cooked_beer_battered_cheese_curds`).copyFood()
		).id(`tfg:pot/cooked_beer_battered_cheese_curds_${i}`);
	};

	// Fries
	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.itemStackProvider.of('4x tfg:food/raw_fries').copyFood(),
		[TFC.ingredient.notRotten('tfc:food/potato'), '#tfc:knives'], 
		'tfc:food/potato'
	).id(`tfg:crafting/raw_fries_knife`);

	processorRecipe('raw_fries', 20*1, 8, {
		itemInputs: ['tfc:food/potato'],
		itemOutputs: ['4x tfg:food/raw_fries'],
		circuit: 7,
		itemOutputProvider: TFC.isp.of('4x tfg:food/raw_fries').copyFood()
	});

	registerFoodRecipe('food_oven', 'cooked_fries', 20*6, GTValues.VA[GTValues.ULV], 'tfg.food_recipe.deep_frying', {
		itemInputs: ['tfg:food/raw_fries'],
		itemOutputs: ['tfg:food/cooked_fries'],
		fluidInputs: ['#firmalife:oils 100'],
		itemOutputProvider: TFC.isp.of('tfg:food/cooked_fries').copyFood().addTrait('firmalife:oven_baked')
	});

	// Beer Battered Cheese Curds
	registerFoodRecipe('food_oven', 'cooked_beer_battered_cheese_curds', 20*6, GTValues.VA[GTValues.ULV], 'tfg.food_recipe.deep_frying', {
		itemInputs: ['tfg:food/raw_beer_battered_cheese_curds'],
		itemOutputs: ['tfg:food/cooked_beer_battered_cheese_curds'],
		fluidInputs: ['#firmalife:oils 100'],
		itemOutputProvider: TFC.isp.of('tfg:food/cooked_beer_battered_cheese_curds').copyFood().addTrait('firmalife:oven_baked')
	});

	/**
	 * @type {string[]} - Beer types for beer battered cheese curds.
	 */
	const beer = ['tfc:beer', 'tfcagedalcohol:aged_beer'];
	beer.forEach(beerType => {
		processorRecipe(`raw_beer_battered_cheese_curds/${beerType.replace(':', '_')}`, 20*5, GTValues.VA[GTValues.ULV], {
			itemInputs: ['4x #tfg:foods/cheese_curds', '#tfc:foods/flour', 'tfc:powder/salt', '#forge:eggs'],
			fluidInputs: [`${beerType} 100`],
			itemOutputs: ['4x tfg:food/raw_beer_battered_cheese_curds'],
			itemOutputProvider: TFC.isp.of('4x tfg:food/raw_beer_battered_cheese_curds').copyOldestFood()
		});
	});

	// Hamburgers
	event.recipes.tfc.advanced_shaped_crafting(
		TFC.isp.of('tfg:food/hamburger').meal(
			(food) => food.hunger(4).decayModifier(1.3),
			[(portion) => portion.nutrientModifier(1.2).saturationModifier(1.1)]
		), 
		[
			'CA ',
			'BBB',
			' A '
		], {
			A: TFC.ingredient.notRotten('tfg:food/brioche_bun'),
			B: TFC.ingredient.notRotten('#tfg:foods/usable_in_burgers'),
			C: '#forge:tools/knives'
		},
		0,
		0
	).id('tfg:crafting/hamburger');

	event.recipes.tfc.advanced_shaped_crafting(
		TFC.isp.of('tfg:food/cheeseburger').meal(
			(food) => food.hunger(4).decayModifier(1.3),
			[(portion) => portion.nutrientModifier(1.2).saturationModifier(1.1)]
		), 
		[
			'CA ',
			'BBD',
			' A '
		], {
			A: TFC.ingredient.notRotten('tfg:food/brioche_bun'),
			B: TFC.ingredient.notRotten('#tfg:foods/usable_in_burgers'),
			C: '#forge:tools/knives',
			D: TFC.ingredient.notRotten('#tfg:foods/cheeses')
		},
		0,
		0
	).id('tfg:crafting/cheeseburger');

	// Prosessor burgers allow extra ingredients.
	for (let i = 1; i <= 5; i++) {
		processorRecipe(`hamburger_${i}`, 20*1, GTValues.VA[GTValues.ULV], {
			itemInputs: [`${i}x #tfg:foods/usable_in_burgers`, '2x tfg:food/brioche_bun'],
			itemOutputs: ['tfg:food/hamburger'],
			circuit: i,
			itemOutputProvider: TFC.isp.of('tfg:food/hamburger').meal(
				(food) => food.hunger(4).decayModifier(1.3),
				[(portion) => portion.nutrientModifier(1.2).saturationModifier(1.1)]
			)
		});
	};

	for (let i = 1; i <= 4; i++) {
		processorRecipe(`cheeseburger_${i}`, 20*1, GTValues.VA[GTValues.ULV], {
			itemInputs: [`${i}x #tfg:foods/usable_in_burgers`, '2x tfg:food/brioche_bun', '#tfg:foods/cheeses'],
			itemOutputs: ['tfg:food/cheeseburger'],
			circuit: i,
			itemOutputProvider: TFC.isp.of('tfg:food/cheeseburger').meal(
				(food) => food.hunger(4).decayModifier(1.3),
				[(portion) => portion.nutrientModifier(1.2).saturationModifier(1.1)]
			)
		});
	};

	// Tirage Mixture
	event.recipes.gtceu.food_processor('tfg:tirage_mixture')
		.itemInputs('#tfc:sweetener')
		.inputFluids(Fluid.of('firmalife:yeast_starter', 100))
		.itemOutputs('firmalife:tirage_mixture')
		.duration(10)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.ULV])

	// Brioche Dough
	event.recipes.firmalife.mixing_bowl()
		.itemIngredients([
			TFC.ingredient.notRotten('#forge:eggs'),
			TFC.ingredient.notRotten('#tfc:foods/flour'),
			TFC.ingredient.notRotten('#tfc:foods/flour'),
			'firmalife:tirage_mixture'
		])
		.fluidIngredient(TFC.fluidStackIngredient('#tfc:milks', 500))
		.outputItem('6x tfg:food/brioche_dough')
		.id('tfg:mixing_bowl/brioche_dough');
	
	processorRecipe('brioche_dough/tirage_mixture', 20*2, GTValues.VA[GTValues.ULV], {
		itemInputs: ['2x #tfc:foods/flour', '#forge:eggs', 'firmalife:tirage_mixture'],
		fluidInputs: ['#tfc:milks 500'],
		itemOutputs: ['6x tfg:food/brioche_dough'],
		circuit: 5,
		itemOutputProvider: TFC.isp.of('6x tfg:food/brioche_dough').copyOldestFood()
	});

	processorRecipe('brioche_dough/yeast', 20*2, GTValues.VA[GTValues.ULV], {
		itemInputs: ['2x #tfc:foods/flour', '#forge:eggs', '#tfc:sweetener'],
		fluidInputs: ['#tfc:milks 500', 'firmalife:yeast_starter 100'],
		itemOutputs: ['6x tfg:food/brioche_dough'],
		circuit: 5,
		itemOutputProvider: TFC.isp.of('6x tfg:food/brioche_dough').copyOldestFood()
	});

	cookingRecipe('brioche_bun', 'tfg:food/brioche_dough', 'tfg:food/brioche_bun');

	// Burger Patty
	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.itemStackProvider.of('tfg:food/raw_burger_patty').copyFood(),
		[
			TFC.ingredient.notRotten('#tfg:foods/burger_meats'),
			'#forge:tools/mortars'
		]
	).id('tfg:crafting/raw_burger_patty');

	processorRecipe('raw_burger_patty', 20*1, GTValues.VA[GTValues.ULV], {
		itemInputs: ['#tfg:foods/burger_meats'],
		itemOutputs: ['tfg:food/raw_burger_patty'],
		notConsumable: ['gtceu:wire_extruder_mold'],
		itemOutputProvider: TFC.isp.of('tfg:food/raw_burger_patty').copyFood()
	});

	// Rich Stock
	event.recipes.tfc.pot(
		[
			'#tfg:foods/makes_rich_stock',
			'#tfc:foods/vegetables',
			'#forge:bones',
			'tfc:powder/salt',
			'tfg:spice/bay_leaf'
		],
		TFC.fluidStackIngredient('#tfg:clean_water', 1000),
		20*15,
		200
		)
		.fluidOutput(Fluid.of('tfg:rich_stock', 1000)
	).id('tfg:pot/rich_stock');

	processorRecipe('rich_stock', 20*5, GTValues.VA[GTValues.ULV], {
		itemInputs: [
			'#tfg:foods/makes_rich_stock',
			'#tfc:foods/vegetables',
			'#forge:bones',
			'tfc:powder/salt',
			'tfg:spice/bay_leaf'
		],
		fluidInputs: ['#tfg:clean_water 1000'],
		fluidOutputs: [Fluid.of('tfg:rich_stock', 1000)]
	});

	// Light Stock
	event.recipes.tfc.pot(
		[
			'#tfg:foods/makes_light_stock',
			'#tfc:foods/vegetables',
			'#forge:bones',
			'tfc:powder/salt',
			'firmalife:spice/basil_leaves'
		],
		TFC.fluidStackIngredient('#tfg:clean_water', 1000),
		20*15,
		200
		)
		.fluidOutput(Fluid.of('tfg:light_stock', 1000)
	).id('tfg:pot/light_stock');

	processorRecipe('light_stock', 20*5, GTValues.VA[GTValues.ULV], {
		itemInputs: [
			'#tfg:foods/makes_light_stock',
			'#tfc:foods/vegetables',
			'#forge:bones',
			'tfc:powder/salt',
			'firmalife:spice/basil_leaves'
		],
		fluidInputs: ['#tfg:clean_water 1000'],
		fluidOutputs: [Fluid.of('tfg:light_stock', 1000)]
	});

	// Brown Gravy
	processorRecipe('brown_gravy', 20*5, GTValues.VA[GTValues.ULV], {
		itemInputs: [
			'#tfc:foods/flour',
			'firmalife:food/butter',
			'tfg:spice/allspice'
		],
		fluidInputs: ['tfg:light_stock 1000', 'tfg:rich_stock 1000'],
		fluidOutputs: [Fluid.of('tfg:brown_gravy', 2000)]
	});

	// Poutine
	processorRecipe('poutine', 20*10, GTValues.VA[GTValues.LV], {
		itemInputs: [
			'4x tfg:food/cooked_fries',
			'#tfg:foods/cheese_curds',
			'2x #tfc:bowls'
		],
		fluidInputs: ['tfg:brown_gravy 500'],
		itemOutputs: ['2x tfg:food/poutine'],
		itemOutputProvider: TFC.isp.of('2x tfg:food/poutine').simpleModifier('tfg:add_bowl').meal(
            (food) => food.hunger(5).water(5).saturation(1).decayModifier(1).grain(1).protein(0.5).dairy(1.5),
			[(portion) => portion.nutrientModifier(0.8).saturationModifier(1)]
		)
	});

	// Oatmeal
	for (let i = 1; i <= 4; i++) {
		processorRecipe(`oatmeal_${i}`, 20*15, GTValues.VA[GTValues.LV], {
			itemInputs: [
				'4x #tfc:bowls',
				'tfc:food/oat_grain',
				`${i}x #tfg:foods/usable_in_oatmeal`,
				'#tfc:sweetener'
			],
			fluidInputs: ['#tfc:milks 1000'],
			itemOutputs: ['4x tfg:food/oatmeal'],
			circuit: i,
			itemOutputProvider: TFC.isp.of('4x tfg:food/oatmeal').simpleModifier('tfg:add_bowl').meal(
				(food) => food.hunger(5).water(5).saturation(1).decayModifier(1.4).dairy(1.5),
				[(portion) => portion.nutrientModifier(0.7).saturationModifier(0.7)]
			)
		});
	};

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
	processorRecipe('citric_acid', 20*20, GTValues.VA[GTValues.HV], {
		itemInputs: [
			'#tfg:foods/citrus_fruits',
			'gtceu:calcium_hydroxide_dust'
		],
		fluidInputs: ['gtceu:sulfuric_acid 100'],
		itemOutputs: ['2x tfg:citric_acid_dust' ]
	});

	// Slice of "Cheese"
	event.recipes.gtceu.food_processor('tfg:slice_of_cheese')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.dust, 'gtceu:lactose', 1),
			ChemicalHelper.get(TagPrefix.dust, 'tfg:cholesterol', 1),
			ChemicalHelper.get(TagPrefix.dust, 'tfg:sodium_dihydrogen_citrate', 1),
			ChemicalHelper.get(TagPrefix.foil, GTMaterials.Polyethylene, 8)
		)
		.inputFluids('#tfg:clean_water 1000')
		.itemOutputs('8x tfg:food/slice_of_cheese')
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	// Instant Mac
	processorRecipe('raw_instant_mac', 20 * 10, GTValues.VA[GTValues.LV], {
		itemInputs: ['firmalife:food/raw_egg_noodles', '#tfg:foods/cheeses', '2x create:cardboard'],
		itemOutputs: ['2x tfg:food/raw_instant_mac'],
		fluidInputs: ['gtceu:polyethylene 100'],
		itemOutputProvider: TFC.isp.of('2x tfg:food/raw_instant_mac').copyFood()
	});

	registerFoodRecipe('food_oven', 'cooked_instant_mac', 20 * 1, GTValues.VA[GTValues.LV], '' ,{
		itemInputs: ['tfg:food/raw_instant_mac'],
		itemOutputs: ['tfg:food/cooked_instant_mac'],
		fluidInputs: ['#tfc:milks 500'],
		itemOutputProvider: TFC.isp.of('tfg:food/cooked_instant_mac').copyFood()
	});

	//#region Spices

	// Skips the first two spices as they are already in Firmalife
	global.SPICES.slice(2).forEach(spice => {
		event.recipes.tfc.advanced_shapeless_crafting(
			Item.of(spice.product).withCount(2),
			[
				spice.plant,
				'#forge:tools/knives'
			]
		).id(`tfg:crafting/${spice.product.replace(':', '_')}`);

		event.recipes.gtceu.food_processor(`tfg:${spice.product.replace(':', '_')}`)
			.itemInputs(spice.plant)
			.itemOutputs(Item.of(spice.product).withCount(2))
			.duration(10)
			.circuit(1)
			.EUt(GTValues.VA[GTValues.ULV]);
	});

	// Replace input didnt work.
	event.remove({id: 'firmalife:crafting/salsa'});
	event.replaceInput({id: 'firmalife:crafting/lasagna'},'firmalife:plant/oregano','tfg:spice/oregano_leaves');

	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.itemStackProvider.of('5x firmalife:food/salsa').copyFood(),
		[
			'tfg:spice/cilantro_leaves',
			'tfc:food/tomato',
			'tfc:powder/salt',
			'#forge:tools/knives'
		]
	).id('tfg:crafting/salsa');

	//#endregion

	processorRecipe('nixtamal', 20*30, GTValues.VA[GTValues.ULV], {
		itemInputs: ['firmalife:food/cured_maize'],
		fluidInputs: ['#tfg:clean_water 100'],
		itemOutputs: ['firmalife:food/nixtamal'],
		circuit: 1,
		itemOutputProvider: TFC.isp.of('firmalife:food/nixtamal').copyFood()
	});

	//#endregion

}
