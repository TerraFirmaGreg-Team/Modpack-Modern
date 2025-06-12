// priority: 0
/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */


function registerTFGFoodRecipes(event) {

	/**
	 * @param {Internal.Ingredient} ingredient 
	 */
	const NotRotten = (ingredient) => TFC.ingredient.notRotten(ingredient)

	const $ISPRecipeLogic = Java.loadClass("su.terrafirmagreg.core.common.data.machines.ISPOutputRecipeLogic")
	const $SizedIngredient = Java.loadClass("com.gregtechceu.gtceu.api.recipe.ingredient.SizedIngredient")

	const Sized = (ing, amount) => $SizedIngredient.create(ing, amount)


	/**
	 * @typedef {Object} FoodRecipeData
	 * @property {number?} circuit
	 * @property {number} duration
	 * @property {number} EUt
	 * @property {Internal.GTRecipeComponents$FluidIngredientJS_[]?} fluidInputs Fluid inputs behave normally
	 * @property {Internal.FluidStackJS[]?} fluidOutputs Fluid outputs behave normally
	 * @property {string[]?} itemInputHints Array of simple ingredients, used internally within gregtech. [NOT ACTUAL INPUTS]
	 * @property {string?} itemOutputHint Simple ingredient output, used internally within gregtech. [NOT ACTUAL OUTPUT]
	 * @property {Ingredient[]?} itemInputs Array of ingredients used when running a recipe. 
	 * @property {Internal.ItemStackProviderJS?} itemOutputProvider ItemStackProvider which provides the recipe output.
	 */

	/**
	 * **NOTE:** TFC Ingredients do not support item counts higher than 1. Do `Sized(TFCIngredient('item:item'), count)` instead of `TFCIngredient('[count]x item:item')`
	 * 
	 * @param {"food_oven"|"food_processor"} type The recipe type
	 * @param {string} id  The recipe id
	 * @param {FoodRecipeData} data Recipe data
	 */
	function registerFoodRecipe(type, id, data) {
		if (data.fluidInputs === undefined) data.fluidInputs = []
		if (data.fluidOutputs === undefined) data.fluidOutputs = []
		if (data.itemInputHints === undefined) data.itemInputHints = []
		if (data.itemInputs === undefined) data.itemInputs = []

		if ((data.itemOutputProvider === undefined && data.itemOutputHint !== undefined) || (data.itemOutputHint === undefined && data.itemOutputProvider !== undefined)) {
			return console.error(`Invalid recipe ${type}[${id}]: itemOutputProvider & itemOutputHint do not match`)
		}
		if (data.itemOutputHint === undefined && data.fluidOutputs.length === 0) return console.error(`Invalid recipe ${type}[${id}]: No outputs`)
		if (data.itemInputHints.length === 0 && data.fluidInputs.length === 0) return console.error(`Invalid recipe ${type}[${id}]: No inputs`)
		if (data.itemInputHints.length !== data.itemInputs.length) return console.error(`Invalid recipe ${type}[${id}]: itemInputHints.length !== itemInputs.length`)

		for (let index = 0; index < data.itemInputs; index++) {
			if (typeof data.itemInputs[index] === "string") data.itemInputs[index] = Ingredient.of(data.itemInputs[index]);
		}

		$ISPRecipeLogic.RegisterRecipeData(type + "/" + id, data.itemInputs, (data.itemOutputProvider === undefined) ? null : data.itemOutputProvider.asCanonClass())

		let r = event.recipes.gtceu[type](id)
		.duration(data.duration)
		.EUt(data.EUt)

		if (data.circuit) r.circuit(data.circuit)
		if (data.itemOutputHint) r.itemOutputs(data.itemOutputHint)
		if (data.itemInputHints.length > 0) r.itemInputs(data.itemInputHints)
		if (data.fluidInputs.length > 0) r.inputFluids(data.fluidInputs);
		if (data.fluidOutputs.length > 0) r.outputFluids(data.fluidOutputs);
	}

	//#region ================= Meat cooking =================
	
	global.TFC_MEAT_RECIPE_COMPONENTS.forEach(item => {

		registerFoodRecipe("food_oven", item.name, {
			duration: 300,
			EUt: 16,
			itemInputHints: [item.input],
			itemOutputHint: item.output,
			itemInputs: [NotRotten(item.input)],
			itemOutputProvider: TFC.isp.of(item.output).copyFood().addTrait("firmalife:oven_baked")
		})
	})

	//#endregion
	//#region ================= Cutting grains =================

	global.TFC_QUERN_GRAIN_RECIPE_COMPONENTS.forEach(item => {
		registerFoodRecipe("food_processor", item.name, {
			duration: 100,
			EUt: 2,
			itemInputHints: [item.input],
			itemOutputHint: item.output,
			itemInputs: [NotRotten(item.input)],
			itemOutputProvider: TFC.isp.of(item.output).copyOldestFood()
		})
	})

	//#endregion
	//#region ================= Grains to flour =================

	global.TFC_QUERN_FLOUR_RECIPE_COMPONENTS.forEach(item => {
		registerFoodRecipe("food_processor", item.name, {
			duration: 100,
			EUt: 2,
			itemInputHints: [item.input],
			itemOutputHint: item.output,
			itemInputs: [NotRotten(item.input)],
			itemOutputProvider: TFC.isp.of(item.output).copyOldestFood()
		})
	
	})

	// global.FIRMALIFE_QUERN_FLOUR_RECIPE_COMPONENTS.forEach(item => {

	// 	registerTFCRecipeProperties("food_processor/" + item.name,
	// 		[ NotRotten(item.input) ],
	// 		TFC.isp.of(item.output).copyFood()
	// 	)

	// 	event.recipes.gtceu.food_processor(item.name)
	// 		.itemInputs(item.input)
	// 		.itemOutputs(item.output)
	// 		.duration(100)
	// 		.EUt(2)
	// })

	//#endregion
	//#region ================= Dough =================

	global.TFC_MIXER_FLATBREAD_DOUGH_RECIPE_COMPONENTS.forEach(item => {

		registerFoodRecipe("food_processor", item.name, {
			duration: 300,
			EUt: 2,
			itemInputHints: [item.input],
			itemOutputHint: item.output,
			fluidInputs: [Fluid.of('minecraft:water', 100)],
			itemInputs: [NotRotten(item.input)],
			itemOutputProvider: TFC.isp.of(item.output).copyFood()
		})

	})

	global.FIRMALIFE_MIXER_FLATBREAD_DOUGH_RECIPE_COMPONENTS.forEach(item => {

		registerFoodRecipe("food_processor", item.name, {
			duration: 300,
			EUt: 2,
			itemInputHints: [item.input],
			itemOutputHint: item.output,
			fluidInputs: [Fluid.of('minecraft:water', 100)],
			itemInputs: [NotRotten(item.input)],
			itemOutputProvider: TFC.isp.of(item.output).copyFood()
		})
	})

	//#endregion
	//#region ================= Baking bread =================

	global.TFC_FURNACE_BREAD_RECIPE_COMPONENTS.forEach(item => {

		registerFoodRecipe("food_oven", item.name, {
			duration: 300,
			EUt: 16,
			itemInputHints: [item.input],
			itemOutputHint: item.output,
			itemInputs: [NotRotten(item.input)],
			itemOutputProvider: TFC.isp.of(item.output).copyFood().addTrait("firmalife:oven_baked")
		})

	})

	global.FIRMALIFE_FURNACE_FLATBREAD_RECIPE_COMPONENTS.forEach(item => {

		registerFoodRecipe("food_oven", item.name, {
			duration: 300,
			EUt: 16,
			itemInputHints: [item.input],
			itemOutputHint: item.output,
			itemInputs: [NotRotten(item.input)],
			itemOutputProvider: TFC.isp.of(item.output).copyFood().addTrait("firmalife:oven_baked")
		})
	})

	//#endregion
	//#region ================= Firmalife =================

	global.FIRMALIFE_COOKING_RECIPE_COMPONENTS.forEach(item => {

		registerFoodRecipe("food_oven", item.name, {
			duration: 300,
			EUt: 16,
			itemInputHints: [item.input],
			itemOutputHint: item.output,
			itemInputs: [NotRotten(item.input)],
			itemOutputProvider: TFC.isp.of(item.output).firmaLifeCopyDynamicFood()
		})
	})

	//#endregion
	//#region ================= Dairy =================

	global.TFC_CURDS_AND_CHEESES.forEach(item => {

		registerFoodRecipe("food_processor", `${item.curd}_curd`, {
			duration: 1200,
			EUt: 16,
			itemOutputHint: item.curd,
			fluidInputs: [Fluid.of(item.input_fluid, 1000)],
			itemInputs: [],
			itemOutputProvider: TFC.isp.of(item.curd).resetFood()
		})

		registerFoodRecipe("food_processor", `${item.cheese1}_cheese_wheel_1`, {
			duration: 8000,
			EUt: 16,
			itemInputHints: [`3x ${item.curd}`],
			itemOutputHint: `firmalife:${item.cheese1}_wheel`,
			fluidInputs: [Fluid.of('tfc:salt_water', 750)],
			itemInputs: [ Sized(NotRotten(item.curd),3) ],
			itemOutputProvider: TFC.isp.of(`firmalife:${item.cheese1}_wheel`).copyOldestFood()
		})

		registerFoodRecipe("food_processor", `${item.cheese2}_cheese_wheel_2`, {
			circuit: 2,
			duration: 1000,
			EUt: 16,
			itemInputHints: [`6x ${item.curd}`, `3x tfc:powder/salt`],
			itemOutputHint: `firmalife:${item.cheese2}_wheel`,
			itemInputs: [ Sized(NotRotten(item.curd), 6), Sized(Ingredient.of("tfc:powder/salt"), 3) ],
			itemOutputProvider: TFC.isp.of(`firmalife:${item.cheese2}_wheel`).copyOldestFood()
		})

		registerFoodRecipe("food_processor", `${item.cheese1}_cheese_cutting_1`, {
			duration: 100,
			EUt: 8,
			itemInputHints: [`firmalife:${item.cheese1}_wheel`],
			itemOutputHint: `4x firmalife:food/${item.cheese1}`,
			itemInputs: [ NotRotten(`firmalife:${item.cheese1}_wheel`) ],
			itemOutputProvider: TFC.isp.of(`4x firmalife:food/${item.cheese1}`).copyOldestFood()
		})

		registerFoodRecipe("food_processor", `${item.cheese2}_cheese_cutting_2`, {
			duration: 100,
			EUt: 8,
			itemInputHints: [`firmalife:${item.cheese2}_wheel`],
			itemOutputHint: `4x firmalife:food/${item.cheese2}`,
			itemInputs: [ NotRotten(`firmalife:${item.cheese2}_wheel`) ],
			itemOutputProvider: TFC.isp.of(`4x firmalife:food/${item.cheese2}`).copyOldestFood()
		})

	})

	global.TFC_MILKS.forEach(milk => {
		const milkID = milk.id.split(':')[1];

		registerFoodRecipe("food_processor", `white_chocolate_blend_from_${milkID}`, {
			circuit: 1,
			duration: 300,
			EUt: 16,
			itemInputHints: ['2x firmalife:food/cocoa_butter', '#tfc:sweetener'],
			itemOutputHint: '2x firmalife:food/white_chocolate_blend',
			fluidInputs: [Fluid.of(milk.id, 1000)],
			itemInputs: [ Sized(NotRotten("firmalife:food/cocoa_butter"), 2), "#tfc:sweetener"],
			itemOutputProvider: TFC.isp.of('2x firmalife:food/white_chocolate_blend').resetFood(),
		})

		registerFoodRecipe("food_processor", `dark_chocolate_blend_from_${milkID}`, {
			circuit: 1,
			duration: 300,
			EUt: 16,
			itemInputHints: ['2x firmalife:food/cocoa_powder', '#tfc:sweetener'],
			itemOutputHint: '2x firmalife:food/dark_chocolate_blend',
			fluidInputs: [Fluid.of(milk.id, 1000)],
			itemInputs: [ Sized(NotRotten("firmalife:food/cocoa_powder"), 2), "#tfc:sweetener"],
			itemOutputProvider: TFC.isp.of('2x firmalife:food/dark_chocolate_blend').resetFood(),
		})

		registerFoodRecipe("food_processor", `milk_chocolate_blend_from_${milkID}`, {
			circuit: 2,
			duration: 300,
			EUt: 16,
			itemInputHints: ['firmalife:food/cocoa_powder', 'firmalife:food/cocoa_butter', '#tfc:sweetener'],
			itemOutputHint: '2x firmalife:food/milk_chocolate_blend',
			fluidInputs: [Fluid.of(milk.id, 1000)],
			itemInputs: [ NotRotten("firmalife:food/cocoa_powder"), NotRotten('firmalife:food/cocoa_butter'), "#tfc:sweetener"],
			itemOutputProvider: TFC.isp.of('2x firmalife:food/milk_chocolate_blend').resetFood(),
		})

		registerFoodRecipe("food_processor", `egg_noodles_from_${milkID}`, {
			circuit: 6,
			duration: 50,
			EUt: 8,
			itemInputHints: ["#tfc:foods/flour", 'tfc:powder/salt', '#forge:eggs'],
			itemOutputHint: 'firmalife:food/raw_egg_noodles',
			itemInputs: [NotRotten("#tfc:foods/flour"), NotRotten('#forge:eggs'), 'tfc:powder/salt'],
			fluidInputs: [Fluid.of(milk.id, 1000)],
			itemOutputProvider: TFC.isp.of("firmalife:food/raw_egg_noodles").copyOldestFood(),
		})

		registerFoodRecipe("food_processor", `rice_noodles_from_${milkID}`, {
			duration: 50,
			EUt: 8,
			itemInputHints: ["tfc:food/rice_flour", 'tfc:food/maize_flour', 'tfc:powder/salt'],
			fluidInputs: [Fluid.of(milk.id, 1000)],
			itemOutputHint: '2x firmalife:food/raw_rice_noodles',
			itemInputs: [NotRotten("tfc:food/rice_flour"), NotRotten('tfc:food/maize_flour'), 'tfc:powder/salt'],
			itemOutputProvider: TFC.isp.of('2x firmalife:food/raw_rice_noodles').copyOldestFood()
		})
	
		// No ISP needed here
		event.recipes.gtceu.fermenter(`tfg:fermenter/cream_from_${milkID}`)
			.inputFluids(Fluid.of(milk.id, 1000))
			.outputFluids(Fluid.of('firmalife:cream'))
			.circuit(6)
			.duration(1200)
			.EUt(24)
	})

	//#endregion

	//#region ================= Misc =================

	registerFoodRecipe("food_processor", "food_salting", {
		duration: 10,
		EUt: 16,
		itemInputHints: ["#tfc:foods/can_be_salted", "tfc:powder/salt"],
		itemOutputHint: "#tfc:foods/can_be_salted",
		itemInputs: [TFC.ingredient.lacksTrait(NotRotten("#tfc:foods/can_be_salted"), "tfc:salted"), "tfc:powder/salt"],
		itemOutputProvider: TFC.isp.copyInput().addTrait("tfc:salted")
	})

	registerFoodRecipe("food_processor", "tomato_sauce", {
		duration: 2000,
		EUt: 8,
		itemInputHints: ['tfc:food/tomato', 'tfc:powder/salt', 'tfc:food/garlic'],
		itemOutputHint: '5x firmalife:food/tomato_sauce',
		fluidInputs: [Fluid.of('minecraft:water', 100)],
		itemInputs: [NotRotten('tfc:food/tomato'), NotRotten('tfc:food/garlic'), "tfc:powder/salt"],
		itemOutputProvider: TFC.isp.of('firmalife:food/tomato_sauce').copyOldestFood(),
	})

	registerFoodRecipe("food_processor", "tomato_sauce_from_mix", {
		duration: 200,
		EUt: 8,
		itemInputHints: ['firmalife:food/tomato_sauce_mix'],
		itemOutputHint: 'firmalife:food/tomato_sauce',
		fluidInputs: [Fluid.of('minecraft:water', 200)],
		itemInputs: [NotRotten("firmalife:food/tomato_sauce_mix")],
		itemOutputProvider: TFC.isp.of('firmalife:food/tomato_sauce').copyOldestFood(),
	})

	registerFoodRecipe("food_processor", "olive_paste", {
		duration: 60,
		EUt: 8,
		itemInputHints: ['tfc:food/olive'],
		itemOutputHint: '2x tfc:olive_paste',
		itemInputs: [NotRotten('tfc:food/olive')],
		itemOutputProvider: TFC.isp.of('2x tfc:olive_paste'),
	})

	registerFoodRecipe("food_processor", "soybean_paste", {
		duration: 60,
		EUt: 8,
		itemInputHints: ['firmalife:food/dehydrated_soybean'],
		itemOutputHint: 'firmalife:food/soybean_paste',
		itemInputs: [NotRotten('firmalife:food/dehydrated_soybean')],
		itemOutputProvider: TFC.isp.of('firmalife:food/soybean_paste').copyOldestFood(),
	})
		
	// Vinegar
	global.TFC_ALCOHOL.forEach(alcohol => {
		let name = `vinegar_${alcohol.id.replace(':', '_')}`;

		registerFoodRecipe("food_processor", name, {
			circuit: 5,
			duration: 600,
			EUt: 32,
			itemInputHints: ['#tfc:foods/fruits'],
			itemInputs: [NotRotten('#tfc:foods/fruits')],
			fluidInputs: [Fluid.of(alcohol.id, 250)],
			fluidOutputs: [Fluid.of('tfc:vinegar', 250)],
		})

	})

	registerFoodRecipe("food_processor", "pizza_dough_olive_oil", {
		duration: 300,
		EUt: 16,
		itemInputHints: ['firmalife:spice/basil_leaves', '#tfc:foods/dough', 'tfc:powder/salt'],
		itemOutputHint: '4x firmalife:food/pizza_dough',
		fluidInputs: [Fluid.of('tfc:olive_oil', 1000)],
		itemInputs: ["firmalife:spice/basil_leaves", NotRotten("#tfc:foods/dough"), "tfc:powder/salt"],
		itemOutputProvider: TFC.isp.of("4x firmalife:food/pizza_dough").copyOldestFood()
	})

	registerFoodRecipe("food_processor", "pizza_dough_soybean_oil", {
		duration: 300,
		EUt: 16,
		itemInputHints: ['firmalife:spice/basil_leaves', '#tfc:foods/dough', 'tfc:powder/salt'],
		itemOutputHint: '4x firmalife:food/pizza_dough',
		fluidInputs: [Fluid.of('firmalife:soybean_oil', 1000)],
		itemInputs: ["firmalife:spice/basil_leaves", NotRotten("#tfc:foods/dough"), "tfc:powder/salt"],
		itemOutputProvider: TFC.isp.of("4x firmalife:food/pizza_dough").copyOldestFood()
	})

	registerFoodRecipe("food_processor", "vanilla_ice_cream", {
		duration: 300,
		EUt: 16,
		itemInputHints: ['firmalife:ice_shavings', '#tfc:sweetener', 'firmalife:spice/vanilla'],
		itemOutputHint: '2x firmalife:food/vanilla_ice_cream',
		fluidInputs: [Fluid.of('firmalife:cream', 1000)],
		itemInputs: ['firmalife:ice_shavings', '#tfc:sweetener', 'firmalife:spice/vanilla'],
		itemOutputProvider: TFC.isp.of("2x firmalife:food/vanilla_ice_cream").resetFood()
	})

	registerFoodRecipe("food_processor", "chocolate_ice_cream", {
		duration: 300,
		EUt: 16,
		itemInputHints: ['firmalife:food/vanilla_ice_cream'],
		itemOutputHint: 'firmalife:food/chocolate_ice_cream',
		fluidInputs: [Fluid.of('firmalife:chocolate', 1000)],
		itemInputs: [NotRotten('firmalife:food/vanilla_ice_cream')],
		itemOutputProvider: TFC.isp.of("firmalife:food/chocolate_ice_cream").resetFood()
	})

	registerFoodRecipe("food_processor", "strawberry_ice_cream", {
		duration: 300,
		EUt: 16,
		itemInputHints: ['firmalife:food/vanilla_ice_cream', '2x tfc:food/strawberry'],
		itemOutputHint: 'firmalife:food/strawberry_ice_cream',
		itemInputs: [NotRotten('firmalife:food/vanilla_ice_cream'), Sized(NotRotten("tfc:food/strawberry"), 2)],
		itemOutputProvider: TFC.isp.of("firmalife:food/strawberry_ice_cream").resetFood()
	})

	registerFoodRecipe("food_processor", "butter", {
		duration: 300,
		EUt: 16,
		itemInputHints: ["tfc:powder/salt"],
		itemOutputHint: "firmalife:food/buffer",
		fluidInputs: [Fluid.of('firmalife:cream', 1000)],
		itemInputs: ["tfc:powder/salt"],
		itemOutputProvider: TFC.isp.of('firmalife:food/butter').resetFood()
	})

	registerFoodRecipe("food_processor", "pie_dough", {
		circuit: 2,
		duration: 300,
		EUt: 16,
		itemInputHints: ['#tfc:sweetener', 'firmalife:food/butter', '#tfc:foods/flour'],
		itemOutputHint: 'firmalife:food/pie_dough',
		fluidInputs: [Fluid.of('minecraft:water', 1000)],
		itemInputs: [NotRotten('firmalife:food/butter'), NotRotten('#tfc:foods/flour'), "#tfc:sweetener"],
		itemOutputProvider: TFC.isp.of('firmalife:food/pie_dough').copyOldestFood()
	})

	registerFoodRecipe("food_processor", "pumpkin_pie_dough", {
		circuit: 2,
		duration: 300,
		EUt: 16,
		itemInputHints: ['#tfc:sweetener', '#forge:eggs', '2x tfc:food/pumpkin_chunks', '#tfc:foods/flour'],
		itemOutputHint: 'firmalife:food/pumpkin_pie_dough',
		fluidInputs: [Fluid.of('minecraft:water', 1000)],
		itemInputs: ['#tfc:sweetener', NotRotten('#forge:eggs'), Sized(NotRotten('tfc:food/pumpkin_chunks'), 2), NotRotten('#tfc:foods/flour')],
		itemOutputProvider: TFC.isp.of('firmalife:food/pumpkin_pie_dough').copyOldestFood()
	})

	registerFoodRecipe("food_processor", "cookie_dough", {
		duration: 300,
		EUt: 16,
		itemInputHints: ['#tfc:sweetener', '#forge:eggs', 'firmalife:food/butter', '#tfc:foods/flour', "firmalife:spice/vanilla"],
		itemOutputHint: '4x firmalife:food/cookie_dough',
		itemInputs: ['firmalife:spice/vanilla', '#tfc:sweetener', NotRotten('firmalife:food/butter'), NotRotten('#tfc:foods/flour'), NotRotten('#forge:eggs')],
		itemOutputProvider: TFC.isp.of('4x firmalife:food/cookie_dough').copyOldestFood()
	})

	registerFoodRecipe("food_processor", "chocolate_chip_cookie_dough", {
		duration: 300,
		EUt: 16,
		itemInputHints: ['4x firmalife:food/cookie_dough', '#firmalife:chocolate_blends'],
		itemOutputHint: '4x firmalife:food/chocolate_chip_cookie_dough',
		itemInputs: [Sized(NotRotten('firmalife:food/cookie_dough'), 4), NotRotten('#firmalife:chocolate_blends')],
		itemOutputProvider: TFC.isp.of('4x firmalife:food/chocolate_chip_cookie_dough').copyOldestFood()
	})

	registerFoodRecipe("food_processor", "hardtack_dough", {
		duration: 300,
		EUt: 16,
		itemInputHints: ['tfc:powder/salt', '#tfc:foods/flour'],
		itemOutputHint: '4x firmalife:food/hardtack_dough',
		fluidInputs: [Fluid.of('minecraft:water', 1000)],
		itemInputs: [NotRotten('#tfc:foods/flour'), "tfc:powder/salt"],
		itemOutputProvider: TFC.isp.of('4x firmalife:food/hardtack_dough').copyOldestFood()
	})

	registerFoodRecipe("food_processor", "yeast_starter", {
		duration: 1200,
		EUt: 8,
		circuit: 1,
		fluidInputs: [Fluid.of('firmalife:yeast_starter', 100)],
		fluidOutputs: [Fluid.of('firmalife:yeast_starter', 600)],
		itemInputHints: ['#tfc:foods/flour'],
		itemInputs: [NotRotten('#tfc:foods/flour')]
	})

	registerFoodRecipe("food_processor", "cocoa_dust", {
		duration: 100,
		EUt: 4,
		itemInputHints: ["firmalife:food/roasted_cocoa_beans"],
		itemOutputHint: "gtceu:cocoa_dust",
		itemInputs: [NotRotten('firmalife:food/roasted_cocoa_beans')],
		itemOutputProvider: TFC.isp.of("gtceu:cocoa_dust")
	})

	registerFoodRecipe("food_processor", "red_grapes", {
		duration: 50,
		EUt: 8,
		itemInputHints: ["firmalife:food/red_grapes"],
		itemOutputHint: "firmalife:food/smashed_red_grapes",
		itemInputs: [NotRotten('firmalife:food/red_grapes')],
		itemOutputProvider: TFC.isp.of('firmalife:food/smashed_red_grapes').copyOldestFood()
	})

	registerFoodRecipe("food_processor", "white_grapes", {
		duration: 50,
		EUt: 8,
		itemInputHints: ["firmalife:food/white_grapes"],
		itemOutputHint: "firmalife:food/smashed_white_grapes",
		itemInputs: [NotRotten('firmalife:food/white_grapes')],
		itemOutputProvider: TFC.isp.of('firmalife:food/smashed_white_grapes').copyOldestFood()
	})

	registerFoodRecipe("food_processor", "cured_maize", {
		duration: 300,
		EUt: 8,
		itemInputHints: ["tfc:food/maize_grain"],
		itemOutputHint: "firmalife:food/cured_maize",
		itemInputs: [NotRotten("tfc:food/maize_grain")],
		itemOutputProvider: TFC.isp.of('firmalife:food/cured_maize').copyOldestFood()
	})

	registerFoodRecipe("food_processor", "soy_mixture", {
		duration: 300,
		EUt: 8,
		itemInputHints: ["tfc:food/soybean", 'tfc:powder/salt'],
		itemOutputHint: "firmalife:food/soy_mixture",
		fluidInputs: [Fluid.of('minecraft:water', 50)],
		itemInputs: [NotRotten("tfc:food/soybean"), "tfc:powder/salt"],
		itemOutputProvider: TFC.isp.of('firmalife:food/soy_mixture').copyOldestFood(),

	})

	registerFoodRecipe("food_oven", "boiled_egg", {
		duration: 200,
		EUt: 8,
		itemInputHints: ["#firmalife:foods/raw_eggs"],
		itemOutputHint: "tfc:food/boiled_egg",
		fluidInputs: [Fluid.of('minecraft:water', 200)],
		itemInputs: [NotRotten('#firmalife:foods/raw_eggs')],
		itemOutputProvider: TFC.isp.of('tfc:food/boiled_egg').copyOldestFood()
	})

	registerFoodRecipe("food_oven", "cooked_rice", {
		duration: 200,
		EUt: 8,
		itemInputHints: ["tfc:food/rice_grain"],
		itemOutputHint: "tfc:food/cooked_rice",
		fluidInputs: [Fluid.of('minecraft:water', 200)],
		itemInputs: [NotRotten('tfc:food/rice_grain')],
		itemOutputProvider: TFC.isp.of('tfc:food/cooked_rice').copyOldestFood()
	})

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
		.inputFluids(Fluid.of('minecraft:water', 100))
		.outputFluids(Fluid.of('firmalife:soybean_oil', 250))
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(600)

	event.recipes.gtceu.fermenter('tfg:fermenter/curdled_milk')
		.inputFluids(Fluid.of('minecraft:milk', 2000))
		.itemInputs('firmalife:rennet')
		.outputFluids(Fluid.of('tfc:curdled_milk', 2000))
		.duration(2400)
		.EUt(16)

	event.recipes.gtceu.fermenter('tfg:fermenter/curdled_yak_milk')
		.inputFluids(Fluid.of('firmalife:yak_milk', 2000))
		.itemInputs('firmalife:rennet')
		.outputFluids(Fluid.of('firmalife:curdled_yak_milk', 2000))
		.duration(2400)
		.EUt(16)

	event.recipes.gtceu.fermenter('tfg:fermenter/curdled_goat_milk')
		.inputFluids(Fluid.of('firmalife:goat_milk', 2000))
		.itemInputs('firmalife:rennet')
		.outputFluids(Fluid.of('firmalife:curdled_goat_milk', 2000))
		.duration(2400)
		.EUt(16)

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

	//#endregion

	event.replaceInput({id: 'gtceu:shaped/lv_food_processor'}, 'gtceu:lv_electric_piston', 'gtceu:steel_whisk')
	event.replaceInput({id: 'gtceu:shaped/mv_food_processor'}, 'gtceu:mv_electric_piston', 'gtceu:aluminium_whisk')
	event.replaceInput({id: 'gtceu:shaped/hv_food_processor'}, 'gtceu:hv_electric_piston', 'gtceu:stainless_steel_whisk')
	event.replaceInput({id: 'gtceu:shaped/ev_food_processor'}, 'gtceu:ev_electric_piston', 'gtceu:titanium_whisk')

	event.replaceInput({id: 'gtceu:shaped/lv_food_oven'}, 'gtceu:lv_electric_piston', '#tfg:metal_bars')
	event.replaceInput({id: 'gtceu:shaped/mv_food_oven'}, 'gtceu:mv_electric_piston', '#tfg:metal_bars')
	event.replaceInput({id: 'gtceu:shaped/hv_food_oven'}, 'gtceu:hv_electric_piston', '#tfg:metal_bars')
	event.replaceInput({id: 'gtceu:shaped/ev_food_oven'}, 'gtceu:ev_electric_piston', '#tfg:metal_bars')
}