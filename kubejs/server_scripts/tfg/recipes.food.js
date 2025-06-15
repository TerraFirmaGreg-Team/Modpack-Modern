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
	 * @property {string[]?} itemOutputHints Simple ingredient output, used internally within gregtech. [NOT ACTUAL OUTPUT]
	 * @property {Ingredient[]?} itemInputs Array of ingredients used when running a recipe. 
	 * @property {Internal.ItemStackProviderJS?} itemOutputProvider ItemStackProvider which provides the recipe output.
	 * @property {Internal.ItemStack[]?} itemSecondaryOutputs Secondary recipe outputs not provided by an ISP
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
		if (data.itemOutputHints === undefined) data.itemOutputHints = []
		if (data.itemSecondaryOutputs === undefined) data.itemSecondaryOutputs = []

		if (data.itemOutputHints.length !== (data.itemOutputProvider === undefined ? data.itemSecondaryOutputs.length : data.itemSecondaryOutputs.length + 1)) {
			return console.error(`Invalid recipe ${type}[${id}]: itemOutputHints.length !== total item outputs`)
		}
		if (data.itemOutputHints.length === 0 && data.fluidOutputs.length === 0) return console.error(`Invalid recipe ${type}[${id}]: No outputs`)
		if (data.itemInputHints.length === 0 && data.fluidInputs.length === 0) return console.error(`Invalid recipe ${type}[${id}]: No inputs`)
		if (data.itemInputHints.length !== data.itemInputs.length) return console.error(`Invalid recipe ${type}[${id}]: itemInputHints.length !== itemInputs.length`)
		let mappedInputs = data.itemInputs.map(v => {
			if (typeof v == "string") return Ingredient.of(v);
			return v;
		})

		$ISPRecipeLogic.RegisterRecipeData(type + "/" + id, mappedInputs, (data.itemOutputProvider === undefined) ? null : data.itemOutputProvider.asCanonClass(), data.itemSecondaryOutputs)

		let r = event.recipes.gtceu[type](id)
		.duration(data.duration)
		.EUt(data.EUt)

		if (data.circuit) r.circuit(data.circuit)
		if (data.itemOutputHints.length > 0) r.itemOutputs(data.itemOutputHints)
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
			itemOutputHints: [item.output],
			itemInputs: [NotRotten(item.input)],
			itemOutputProvider: TFC.isp.of(item.output).copyFood().addTrait("firmalife:oven_baked")
		})
	})

	//#endregion
	//#region ================= TFC Grains =================

	global.TFC_GRAINS.forEach(grain => {

		// Raw crop to grain
		registerFoodRecipe("food_processor", `${grain}_grain`, {
			duration: 100,
			EUt: 8,
			itemInputHints: [`tfc:food/${grain}`],
			itemOutputHints: [`tfc:food/${grain}_grain`],
			itemInputs: [NotRotten(`tfc:food/${grain}`)],
			itemOutputProvider: TFC.isp.of(`tfc:food/${grain}_grain`).copyOldestFood()
		})

		//  Grain to flour
		registerFoodRecipe("food_processor", `${grain}_flour`, {
			duration: 100,
			EUt: 8,
			itemInputHints: [`tfc:food/${grain}_grain`],
			itemOutputHints: [`2x tfc:food/${grain}_flour`],
			itemInputs: [NotRotten(`tfc:food/${grain}_grain`)],
			itemOutputProvider: TFC.isp.of(`2x tfc:food/${grain}_flour`).copyOldestFood()
		})

		// Flatbread dough
		registerFoodRecipe("food_processor", `${grain}_flatbread_dough`, {
			duration: 300,
			EUt: 8,
			itemInputHints: [`tfc:food/${grain}_flour`],
			itemOutputHints: [`2x tfc:food/${grain}_dough`],
			fluidInputs: [Fluid.of('minecraft:water', 100)],
			itemInputs: [NotRotten(`tfc:food/${grain}_flour`)],
			itemOutputProvider: TFC.isp.of(`2x tfc:food/${grain}_dough`).copyFood()
		})

		// Firmalife dough
		registerFoodRecipe("food_processor", `${grain}_dough`, {
			duration: 300,
			EUt: 16,
			itemInputHints: [`tfc:food/${grain}_flour`, `#tfc:sweetener`],
			itemOutputHints: [`4x firmalife:food/${grain}_dough`],
			fluidInputs: [Fluid.of('firmalife:yeast_starter', 200)],
			itemInputs: [NotRotten(`tfc:food/${grain}_flour`), `#tfc:sweetener`],
			itemOutputProvider: TFC.isp.of(`4x firmalife:food/${grain}_dough`).copyFood()
		})

		// Bread baking
		registerFoodRecipe("food_oven", `${grain}_flatbread`, {
			duration: 300,
			EUt: 16,
			itemInputHints: [`tfc:food/${grain}_dough`],
			itemOutputHints: [`firmalife:food/${grain}_flatbread`],
			itemInputs: [NotRotten(`tfc:food/${grain}_dough`)],
			itemOutputProvider: TFC.isp.of(`firmalife:food/${grain}_flatbread`).copyFood().addTrait("firmalife:oven_baked")
		})

		registerFoodRecipe("food_oven", `${grain}_bread`, {
			duration: 300,
			EUt: 16,
			itemInputHints: [`firmalife:food/${grain}_dough`],
			itemOutputHints: [`tfc:food/${grain}_bread`],
			itemInputs: [NotRotten(`firmalife:food/${grain}_dough`)],
			itemOutputProvider: TFC.isp.of(`tfc:food/${grain}_bread`).copyFood().addTrait("firmalife:oven_baked")
		})

		registerFoodRecipe("food_processor", `${grain}_bread_slice`, {
			duration: 10,
			EUt: 8,
			circuit: 1,
			itemInputHints: [`tfc:food/${grain}_bread`],
			itemOutputHints: [`2x firmalife:food/${grain}_slice`],
			itemInputs: [NotRotten(`tfc:food/${grain}_bread`)],
			itemOutputProvider: TFC.isp.of(`2x firmalife:food/${grain}_slice`).copyOldestFood()
		})

		//Sandwich making

		let breadTypes = [["bread", `tfc:food/${grain}_bread`], ["flatbread", `firmalife:food/${grain}_flatbread`], ["slice", `firmalife:food/${grain}_slice`]]
		breadTypes.forEach((type) => {
			registerFoodRecipe("food_processor", `${grain}_${type[0]}_sandwich`, {
				duration: 100,
				EUt: 16,
				circuit: 3,
				itemInputHints: [`2x ${type[1]}`, "3x #tfc:foods/usable_in_sandwich"],
				itemOutputHints: [`2x tfc:food/${grain}_bread_sandwich`],
				itemInputs: [Sized(NotRotten(type[1]), 2), Sized(NotRotten(`#tfc:foods/usable_in_sandwich`), 3)],
				itemOutputProvider: TFC.isp.of(`2x tfc:food/${grain}_bread_sandwich`).meal(
					(food => food.hunger(4).water(0.5).saturation(1).decayModifier(4.5)), [
					(portion) => portion.ingredient(Ingredient.of('#tfc:sandwich_bread')).nutrientModifier(0.5).saturationModifier(0.5).waterModifier(0.5),
					(portion) => portion.nutrientModifier(0.8).saturationModifier(0.8).waterModifier(0.8),
				])
			})

			
			registerFoodRecipe("food_processor", `${grain}_${type[0]}_jam_sandwich`, {
				duration: 100,
				EUt: 16,
				circuit: 4,
				itemInputHints: [`2x ${type[1]}`, "2x #tfc:foods/usable_in_jam_sandwich", '#tfc:foods/preserves'],
				itemOutputHints: [`2x tfc:food/${grain}_bread_jam_sandwich`, 'tfc:empty_jar'],
				itemInputs: [Sized(NotRotten(type[1]), 2), Sized(NotRotten(`#tfc:foods/usable_in_jam_sandwich`), 2), '#tfc:foods/preserves'],
				itemOutputProvider: TFC.isp.of(`2x tfc:food/${grain}_bread_jam_sandwich`).meal(
					(food => food.hunger(4).water(0.5).saturation(1).decayModifier(4.5)), [
					(portion) => portion.ingredient(Ingredient.of('#tfc:sandwich_bread')).nutrientModifier(0.5).saturationModifier(0.5).waterModifier(0.5),
					(portion) => portion.nutrientModifier(0.8).saturationModifier(0.8).waterModifier(0.8),
				]),
				itemSecondaryOutputs: [Item.of("tfc:empty_jar", 1)]
			})
		})


	})

	//#endregion

	//#region ================= Firmalife =================

	global.FIRMALIFE_COOKING_RECIPE_COMPONENTS.forEach(item => {

		registerFoodRecipe("food_oven", item.name, {
			duration: 300,
			EUt: 16,
			itemInputHints: [item.input],
			itemOutputHints: [item.output],
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
			itemOutputHints: [item.curd],
			fluidInputs: [Fluid.of(item.input_fluid, 1000)],
			itemOutputProvider: TFC.isp.of(item.curd).resetFood()
		})

		registerFoodRecipe("food_processor", `${item.cheese1}_cheese_wheel_1`, {
			duration: 8000,
			EUt: 16,
			itemInputHints: [`3x ${item.curd}`],
			itemOutputHints: [`firmalife:${item.cheese1}_wheel`],
			fluidInputs: [Fluid.of('tfc:salt_water', 750)],
			itemInputs: [ Sized(NotRotten(item.curd),3) ],
			itemOutputProvider: TFC.isp.of(`firmalife:${item.cheese1}_wheel`).copyOldestFood()
		})

		registerFoodRecipe("food_processor", `${item.cheese2}_cheese_wheel_2`, {
			circuit: 2,
			duration: 1000,
			EUt: 16,
			itemInputHints: [`3x ${item.curd}`, `6x tfc:powder/salt`],
			itemOutputHints: [`firmalife:${item.cheese2}_wheel`],
			itemInputs: [ Sized(NotRotten(item.curd), 3), Sized(Ingredient.of("tfc:powder/salt"), 6) ],
			itemOutputProvider: TFC.isp.of(`firmalife:${item.cheese2}_wheel`).copyOldestFood()
		})

		registerFoodRecipe("food_processor", `${item.cheese1}_cheese_cutting_1`, {
			duration: 100,
			EUt: 8,
			itemInputHints: [`firmalife:${item.cheese1}_wheel`],
			itemOutputHints: [`4x firmalife:food/${item.cheese1}`],
			itemInputs: [ NotRotten(`firmalife:${item.cheese1}_wheel`) ],
			itemOutputProvider: TFC.isp.of(`4x firmalife:food/${item.cheese1}`).copyOldestFood()
		})

		registerFoodRecipe("food_processor", `${item.cheese2}_cheese_cutting_2`, {
			duration: 100,
			EUt: 8,
			itemInputHints: [`firmalife:${item.cheese2}_wheel`],
			itemOutputHints: [`4x firmalife:food/${item.cheese2}`],
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
			itemOutputHints: ['2x firmalife:food/white_chocolate_blend'],
			fluidInputs: [Fluid.of(milk.id, 1000)],
			itemInputs: [ Sized(NotRotten("firmalife:food/cocoa_butter"), 2), "#tfc:sweetener"],
			itemOutputProvider: TFC.isp.of('2x firmalife:food/white_chocolate_blend').resetFood(),
		})

		registerFoodRecipe("food_processor", `dark_chocolate_blend_from_${milkID}`, {
			circuit: 1,
			duration: 300,
			EUt: 16,
			itemInputHints: ['2x firmalife:food/cocoa_powder', '#tfc:sweetener'],
			itemOutputHints: ['2x firmalife:food/dark_chocolate_blend'],
			fluidInputs: [Fluid.of(milk.id, 1000)],
			itemInputs: [ Sized(NotRotten("firmalife:food/cocoa_powder"), 2), "#tfc:sweetener"],
			itemOutputProvider: TFC.isp.of('2x firmalife:food/dark_chocolate_blend').resetFood(),
		})

		registerFoodRecipe("food_processor", `milk_chocolate_blend_from_${milkID}`, {
			circuit: 2,
			duration: 300,
			EUt: 16,
			itemInputHints: ['firmalife:food/cocoa_powder', 'firmalife:food/cocoa_butter', '#tfc:sweetener'],
			itemOutputHints: ['2x firmalife:food/milk_chocolate_blend'],
			fluidInputs: [Fluid.of(milk.id, 1000)],
			itemInputs: [ NotRotten("firmalife:food/cocoa_powder"), NotRotten('firmalife:food/cocoa_butter'), "#tfc:sweetener"],
			itemOutputProvider: TFC.isp.of('2x firmalife:food/milk_chocolate_blend').resetFood(),
		})

		registerFoodRecipe("food_processor", `egg_noodles_from_${milkID}`, {
			circuit: 6,
			duration: 50,
			EUt: 8,
			itemInputHints: ["#tfc:foods/flour", 'tfc:powder/salt', '#forge:eggs'],
			itemOutputHints: ['firmalife:food/raw_egg_noodles'],
			itemInputs: [NotRotten("#tfc:foods/flour"), NotRotten('#forge:eggs'), 'tfc:powder/salt'],
			fluidInputs: [Fluid.of(milk.id, 1000)],
			itemOutputProvider: TFC.isp.of("firmalife:food/raw_egg_noodles").copyOldestFood(),
		})

		registerFoodRecipe("food_processor", `rice_noodles_from_${milkID}`, {
			duration: 50,
			EUt: 8,
			itemInputHints: ["tfc:food/rice_flour", 'tfc:food/maize_flour', 'tfc:powder/salt'],
			fluidInputs: [Fluid.of(milk.id, 1000)],
			itemOutputHints: ['2x firmalife:food/raw_rice_noodles'],
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

	//#region ================= Food preservation =================
	
	registerFoodRecipe("food_processor", "food_salting", {
		duration: 10,
		EUt: 16,
		itemInputHints: ["#tfc:foods/can_be_salted", "tfc:powder/salt"],
		itemOutputHints: ["#tfc:foods/can_be_salted"],
		itemInputs: [TFC.ingredient.lacksTrait(NotRotten("#tfc:foods/can_be_salted"), "tfc:salted"), "tfc:powder/salt"],
		itemOutputProvider: TFC.isp.copyInput().addTrait("tfc:salted")
	})

	
	registerFoodRecipe("food_processor", "brine_meat", {
		duration: 200,
		EUt: 16,
		circuit: 5,
		itemInputHints: ["#tfc:foods/raw_meats"],
		itemOutputHints: ["#tfc:foods/raw_meats"],
		itemInputs: [TFC.ingredient.lacksTrait(NotRotten("#tfc:foods/raw_meats"), "tfc:brined")],
		fluidInputs: Fluid.of("tfc:brine", 100),
		itemOutputProvider: TFC.isp.copyInput().addTrait("tfc:brined")
	})

	registerFoodRecipe("food_processor", "brine_general", {
		duration: 200,
		EUt: 16,
		circuit: 5,
		itemInputHints: ["#firmalife:foods/pizza_ingredients"],
		itemOutputHints: ["#firmalife:foods/pizza_ingredients"],
		itemInputs: [TFC.ingredient.lacksTrait(NotRotten("#firmalife:foods/pizza_ingredients"), "tfc:brined")],
		fluidInputs: Fluid.of("tfc:brine", 100),
		itemOutputProvider: TFC.isp.copyInput().addTrait("tfc:brined")
	})


	registerFoodRecipe("food_processor", "pickle_meat", {
		duration: 200,
		EUt: 16,
		circuit: 5,
		itemInputHints: ["#tfc:foods/raw_meats"],
		itemOutputHints: ["#tfc:foods/raw_meats"],
		itemInputs: [TFC.ingredient.lacksTrait(TFC.ingredient.hasTrait(NotRotten("#tfc:foods/raw_meats"), "tfc:brined"), "tfc:pickled")],
		fluidInputs: Fluid.of("tfc:vinegar", 100),
		itemOutputProvider: TFC.isp.copyInput().addTrait("tfc:pickled")
	})

	registerFoodRecipe("food_processor", "pickle_general", {
		duration: 200,
		EUt: 16,
		circuit: 5,
		itemInputHints: ["#firmalife:foods/pizza_ingredients"],
		itemOutputHints: ["#firmalife:foods/pizza_ingredients"],
		itemInputs: [TFC.ingredient.lacksTrait(TFC.ingredient.hasTrait(NotRotten("#firmalife:foods/pizza_ingredients"), "tfc:brined"), "tfc:pickled")],
		fluidInputs: Fluid.of("tfc:vinegar", 100),
		itemOutputProvider: TFC.isp.copyInput().addTrait("tfc:pickled")
	})


	//#endregion
	//#region ================= Misc =================


	registerFoodRecipe("food_processor", 'firmalife_masa', {
		duration: 300,
		EUt: 2,
		itemInputHints: ["firmalife:food/masa_flour"],
		itemOutputHints: ["2x firmalife:food/masa"],
		fluidInputs: [Fluid.of('minecraft:water', 100)],
		itemInputs: [NotRotten("firmalife:food/masa_flour")],
		itemOutputProvider: TFC.isp.of("2x firmalife:food/masa").copyFood()
	})

	registerFoodRecipe("food_oven", "firmalife:food/corn_tortilla", {
		duration: 300,
		EUt: 16,
		itemInputHints: ["firmalife:food/masa"],
		itemOutputHints: ["firmalife:food/corn_tortilla"],
		itemInputs: [NotRotten("firmalife:food/masa")],
		itemOutputProvider: TFC.isp.of("firmalife:food/corn_tortilla").copyFood().addTrait("firmalife:oven_baked")
	})

	registerFoodRecipe("food_processor", "tomato_sauce", {
		duration: 2000,
		EUt: 8,
		itemInputHints: ['tfc:food/tomato', 'tfc:powder/salt', 'tfc:food/garlic'],
		itemOutputHints: ['5x firmalife:food/tomato_sauce'],
		fluidInputs: [Fluid.of('minecraft:water', 100)],
		itemInputs: [NotRotten('tfc:food/tomato'), NotRotten('tfc:food/garlic'), "tfc:powder/salt"],
		itemOutputProvider: TFC.isp.of('firmalife:food/tomato_sauce').copyOldestFood(),
	})

	registerFoodRecipe("food_processor", "tomato_sauce_from_mix", {
		duration: 200,
		EUt: 8,
		itemInputHints: ['firmalife:food/tomato_sauce_mix'],
		itemOutputHints: ['firmalife:food/tomato_sauce'],
		fluidInputs: [Fluid.of('minecraft:water', 200)],
		itemInputs: [NotRotten("firmalife:food/tomato_sauce_mix")],
		itemOutputProvider: TFC.isp.of('firmalife:food/tomato_sauce').copyOldestFood(),
	})

	registerFoodRecipe("food_processor", "olive_paste", {
		duration: 60,
		EUt: 8,
		itemInputHints: ['tfc:food/olive'],
		itemOutputHints: ['2x tfc:olive_paste'],
		itemInputs: [NotRotten('tfc:food/olive')],
		itemOutputProvider: TFC.isp.of('2x tfc:olive_paste'),
	})

	registerFoodRecipe("food_processor", "soybean_paste", {
		duration: 60,
		EUt: 8,
		itemInputHints: ['firmalife:food/dehydrated_soybeans'],
		itemOutputHints: ['firmalife:food/soybean_paste'],
		itemInputs: [NotRotten('firmalife:food/dehydrated_soybeans')],
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

	registerFoodRecipe("food_processor", "pizza_no_extra", {
		duration: 600,
		EUt: 16,
		itemInputHints: ["firmalife:food/pizza_dough", "firmalife:food/tomato_sauce", "firmalife:food/shredded_cheese"],
		itemOutputHints: ["firmalife:food/raw_pizza"],
		itemInputs: [NotRotten("firmalife:food/pizza_dough"), NotRotten("firmalife:food/tomato_sauce"), NotRotten("firmalife:food/shredded_cheese")],
		itemOutputProvider: TFC.isp.of("firmalife:food/raw_pizza").meal(
			(food) => food.hunger(4).saturation(1).grain(1).dairy(0.25).decayModifier(4.5),
			(portion) => portion.nutrientModifier(0.8).waterModifier(0.8).saturationModifier(0.8)
		)
	})

	registerFoodRecipe("food_processor", "pizza_1_extra", {
		duration: 600,
		EUt: 16,
		circuit: 1,
		itemInputHints: ["firmalife:food/pizza_dough", "firmalife:food/tomato_sauce", "firmalife:food/shredded_cheese", "#firmalife:foods/pizza_ingredients"],
		itemOutputHints: ["firmalife:food/raw_pizza"],
		itemInputs: [NotRotten("firmalife:food/pizza_dough"), NotRotten("firmalife:food/tomato_sauce"), NotRotten("firmalife:food/shredded_cheese"), NotRotten("#firmalife:foods/pizza_ingredients")],
		itemOutputProvider: TFC.isp.of("firmalife:food/raw_pizza").meal(
			(food) => food.hunger(4).saturation(1).grain(1).dairy(0.25).decayModifier(4.5),
			(portion) => portion.nutrientModifier(0.8).waterModifier(0.8).saturationModifier(0.8)
		)
	})

	registerFoodRecipe("food_processor", "pizza_2_extra", {
		duration: 600,
		EUt: 16,
		circuit: 2,
		itemInputHints: ["firmalife:food/pizza_dough", "firmalife:food/tomato_sauce", "firmalife:food/shredded_cheese", "2x #firmalife:foods/pizza_ingredients"],
		itemOutputHints: ["firmalife:food/raw_pizza"],
		itemInputs: [NotRotten("firmalife:food/pizza_dough"), NotRotten("firmalife:food/tomato_sauce"), NotRotten("firmalife:food/shredded_cheese"), NotRotten("2x #firmalife:foods/pizza_ingredients")],
		itemOutputProvider: TFC.isp.of("firmalife:food/raw_pizza").meal(
			(food) => food.hunger(4).saturation(1).grain(1).dairy(0.25).decayModifier(4.5),
			(portion) => portion.nutrientModifier(0.8).waterModifier(0.8).saturationModifier(0.8)
		)
	})

	registerFoodRecipe("food_processor", "pizza_dough_olive_oil", {
		duration: 300,
		EUt: 16,
		itemInputHints: ['firmalife:spice/basil_leaves', '#tfc:foods/dough', 'tfc:powder/salt'],
		itemOutputHints: ['4x firmalife:food/pizza_dough'],
		fluidInputs: [Fluid.of('tfc:olive_oil', 1000)],
		itemInputs: ["firmalife:spice/basil_leaves", NotRotten("#tfc:foods/dough"), "tfc:powder/salt"],
		itemOutputProvider: TFC.isp.of("4x firmalife:food/pizza_dough").copyOldestFood()
	})

	registerFoodRecipe("food_processor", "pizza_dough_soybean_oil", {
		duration: 300,
		EUt: 16,
		itemInputHints: ['firmalife:spice/basil_leaves', '#tfc:foods/dough', 'tfc:powder/salt'],
		itemOutputHints: ['4x firmalife:food/pizza_dough'],
		fluidInputs: [Fluid.of('firmalife:soybean_oil', 1000)],
		itemInputs: ["firmalife:spice/basil_leaves", NotRotten("#tfc:foods/dough"), "tfc:powder/salt"],
		itemOutputProvider: TFC.isp.of("4x firmalife:food/pizza_dough").copyOldestFood()
	})

	registerFoodRecipe("food_processor", "vanilla_ice_cream", {
		duration: 300,
		EUt: 16,
		itemInputHints: ['firmalife:ice_shavings', '#tfc:sweetener', 'firmalife:spice/vanilla'],
		itemOutputHints: ['2x firmalife:food/vanilla_ice_cream'],
		fluidInputs: [Fluid.of('firmalife:cream', 1000)],
		itemInputs: ['firmalife:ice_shavings', '#tfc:sweetener', 'firmalife:spice/vanilla'],
		itemOutputProvider: TFC.isp.of("2x firmalife:food/vanilla_ice_cream").resetFood()
	})

	registerFoodRecipe("food_processor", "chocolate_ice_cream", {
		duration: 300,
		EUt: 16,
		itemInputHints: ['firmalife:food/vanilla_ice_cream'],
		itemOutputHints: ['firmalife:food/chocolate_ice_cream'],
		fluidInputs: [Fluid.of('firmalife:chocolate', 1000)],
		itemInputs: [NotRotten('firmalife:food/vanilla_ice_cream')],
		itemOutputProvider: TFC.isp.of("firmalife:food/chocolate_ice_cream").resetFood()
	})

	registerFoodRecipe("food_processor", "strawberry_ice_cream", {
		duration: 300,
		EUt: 16,
		itemInputHints: ['firmalife:food/vanilla_ice_cream', '2x tfc:food/strawberry'],
		itemOutputHints: ['firmalife:food/strawberry_ice_cream'],
		itemInputs: [NotRotten('firmalife:food/vanilla_ice_cream'), Sized(NotRotten("tfc:food/strawberry"), 2)],
		itemOutputProvider: TFC.isp.of("firmalife:food/strawberry_ice_cream").resetFood()
	})

	registerFoodRecipe("food_processor", "butter", {
		duration: 300,
		EUt: 16,
		itemInputHints: ["tfc:powder/salt"],
		itemOutputHints: ["firmalife:food/butter"],
		fluidInputs: [Fluid.of('firmalife:cream', 1000)],
		itemInputs: ["tfc:powder/salt"],
		itemOutputProvider: TFC.isp.of('firmalife:food/butter').resetFood()
	})

	registerFoodRecipe("food_processor", "pie_dough", {
		circuit: 2,
		duration: 300,
		EUt: 16,
		itemInputHints: ['#tfc:sweetener', 'firmalife:food/butter', '#tfc:foods/flour'],
		itemOutputHints: ['firmalife:food/pie_dough'],
		fluidInputs: [Fluid.of('minecraft:water', 1000)],
		itemInputs: [NotRotten('firmalife:food/butter'), NotRotten('#tfc:foods/flour'), "#tfc:sweetener"],
		itemOutputProvider: TFC.isp.of('firmalife:food/pie_dough').copyOldestFood()
	})

	registerFoodRecipe("food_processor", "pumpkin_pie_dough", {
		circuit: 2,
		duration: 300,
		EUt: 16,
		itemInputHints: ['#tfc:sweetener', '#forge:eggs', '2x tfc:food/pumpkin_chunks', '#tfc:foods/flour'],
		itemOutputHints: ['firmalife:food/pumpkin_pie_dough'],
		fluidInputs: [Fluid.of('minecraft:water', 1000)],
		itemInputs: ['#tfc:sweetener', NotRotten('#forge:eggs'), Sized(NotRotten('tfc:food/pumpkin_chunks'), 2), NotRotten('#tfc:foods/flour')],
		itemOutputProvider: TFC.isp.of('firmalife:food/pumpkin_pie_dough').copyOldestFood()
	})

	registerFoodRecipe("food_processor", "cookie_dough", {
		duration: 300,
		EUt: 16,
		itemInputHints: ['#tfc:sweetener', '#forge:eggs', 'firmalife:food/butter', '#tfc:foods/flour', "firmalife:spice/vanilla"],
		itemOutputHints: ['4x firmalife:food/cookie_dough'],
		itemInputs: ['firmalife:spice/vanilla', '#tfc:sweetener', NotRotten('firmalife:food/butter'), NotRotten('#tfc:foods/flour'), NotRotten('#forge:eggs')],
		itemOutputProvider: TFC.isp.of('4x firmalife:food/cookie_dough').copyOldestFood()
	})

	registerFoodRecipe("food_processor", "chocolate_chip_cookie_dough", {
		duration: 300,
		EUt: 16,
		itemInputHints: ['4x firmalife:food/cookie_dough', '#firmalife:chocolate_blends'],
		itemOutputHints: ['4x firmalife:food/chocolate_chip_cookie_dough'],
		itemInputs: [Sized(NotRotten('firmalife:food/cookie_dough'), 4), NotRotten('#firmalife:chocolate_blends')],
		itemOutputProvider: TFC.isp.of('4x firmalife:food/chocolate_chip_cookie_dough').copyOldestFood()
	})

	registerFoodRecipe("food_processor", "hardtack_dough", {
		duration: 300,
		EUt: 16,
		itemInputHints: ['tfc:powder/salt', '#tfc:foods/flour'],
		itemOutputHints: ['4x firmalife:food/hardtack_dough'],
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

	registerFoodRecipe("food_processor", "yeast_starter_from_water", {
		duration: 7200,
		EUt: 8,
		circuit: 10,
		fluidInputs: [Fluid.of('minecraft:water', 100)],
		fluidOutputs: [Fluid.of('firmalife:yeast_starter', 600)],
		itemInputHints: ['#tfc:foods/fruits'],
		itemInputs: [NotRotten('#tfc:foods/fruits')]
	})
	
	registerFoodRecipe("food_processor", "cocoa_dust", {
		duration: 100,
		EUt: 4,
		itemInputHints: ["firmalife:food/roasted_cocoa_beans"],
		itemOutputHints: ["gtceu:cocoa_dust"],
		itemInputs: [NotRotten('firmalife:food/roasted_cocoa_beans')],
		itemOutputProvider: TFC.isp.of("gtceu:cocoa_dust")
	})

	registerFoodRecipe("food_processor", "red_grapes", {
		duration: 50,
		EUt: 8,
		itemInputHints: ["firmalife:food/red_grapes"],
		itemOutputHints: ["firmalife:food/smashed_red_grapes"],
		itemInputs: [NotRotten('firmalife:food/red_grapes')],
		itemOutputProvider: TFC.isp.of('firmalife:food/smashed_red_grapes').copyOldestFood()
	})

	registerFoodRecipe("food_processor", "white_grapes", {
		duration: 50,
		EUt: 8,
		itemInputHints: ["firmalife:food/white_grapes"],
		itemOutputHints: ["firmalife:food/smashed_white_grapes"],
		itemInputs: [NotRotten('firmalife:food/white_grapes')],
		itemOutputProvider: TFC.isp.of('firmalife:food/smashed_white_grapes').copyOldestFood()
	})

	registerFoodRecipe("food_processor", "cured_maize", {
		duration: 300,
		EUt: 8,
		itemInputHints: ["tfc:food/maize_grain"],
		itemOutputHints: ["firmalife:food/cured_maize"],
		itemInputs: [NotRotten("tfc:food/maize_grain")],
		itemOutputProvider: TFC.isp.of('firmalife:food/cured_maize').copyOldestFood()
	})

	registerFoodRecipe("food_processor", "soy_mixture", {
		duration: 300,
		EUt: 8,
		itemInputHints: ["tfc:food/soybean", 'tfc:powder/salt'],
		itemOutputHints: ["firmalife:food/soy_mixture"],
		fluidInputs: [Fluid.of('minecraft:water', 50)],
		itemInputs: [NotRotten("tfc:food/soybean"), "tfc:powder/salt"],
		itemOutputProvider: TFC.isp.of('firmalife:food/soy_mixture').copyOldestFood(),

	})

	registerFoodRecipe("food_oven", "boiled_egg", {
		duration: 200,
		EUt: 8,
		itemInputHints: ["#firmalife:foods/raw_eggs"],
		itemOutputHints: ["tfc:food/boiled_egg"],
		fluidInputs: [Fluid.of('minecraft:water', 200)],
		itemInputs: [NotRotten('#firmalife:foods/raw_eggs')],
		itemOutputProvider: TFC.isp.of('tfc:food/boiled_egg').copyOldestFood()
	})

	registerFoodRecipe("food_oven", "cooked_rice", {
		duration: 200,
		EUt: 8,
		itemInputHints: ["tfc:food/rice_grain"],
		itemOutputHints: ["tfc:food/cooked_rice"],
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