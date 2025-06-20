// priority: 0
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
	*
	* **NOTE:** TFC Ingredients do not support item counts higher than 1. Do `Sized(TFCIngredient('item:item'), count)` instead of `TFCIngredient('[count]x item:item')`
	*/

	//#region Helper funcs

	/**
	 * @param {"food_oven"|"food_processor"} type 
	 * @param {string} id 
	 * @param {string} duration 
	 * @param {string} EUt 
	 * @param {FoodRecipeData} data 
	 */
	function registerFoodRecipe(type, id, duration, EUt, text, data) {
		if (data.itemInputs === undefined) data.itemInputs = []
		if (data.itemOutputs === undefined) data.itemOutputs = []
		if (data.fluidInputs === undefined) data.fluidInputs = []
		if (data.fluidOutputs === undefined) data.fluidOutputs = []
		let gregInputs = [], inputs= []
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

		$ISPRecipeLogic.RegisterRecipeData(type + "/" + id, inputs, (data.itemOutputProvider === undefined) ? null : data.itemOutputProvider.asCanonClass(), data.itemOutputs.slice(outputFirstIndex).map(i => Item.of(i)))

		let r = event.recipes.gtceu[type](id)
		.duration(duration)
		.EUt(EUt)

		if (data.circuit) r.circuit(data.circuit)
		if (data.itemOutputs.length > 0) r.itemOutputs(data.itemOutputs)
		if (data.itemInputs.length > 0) r.itemInputs(data.itemInputs)
		if (data.fluidInputs.length > 0) r.inputFluids(data.fluidInputs);
		if (data.fluidOutputs.length > 0) r.outputFluids(data.fluidOutputs);
		if (text != "") r.addDataString("action", text);
	}

		/**
	 * @param {string} id 
	 * @param {number} duration 
	 * @param {EUt} EUt 
	 * @param {FoodRecipeData} data 
	 */
	const processorRecipe = (id, duration, EUt, data) => registerFoodRecipe("food_processor", id, duration, EUt, "", data)

	/**
	 * @param {string} id 
	 * @param {number} duration 
	 * @param {EUt} EUt 
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
		registerFoodRecipe("food_oven", id, 300, 32, "", {
			itemInputs: [input],
			itemOutputs: [out],
			fluidInputs: (fluid === undefined) ? [] : [fluid],
			itemInputs: [input],
			itemOutputProvider: (isFirmaDynamic) ? TFC.isp.of(out).firmaLifeCopyDynamicFood() : TFC.isp.of(out).copyFood().addTrait("firmalife:oven_baked")
		})
	}

	//#endregion

	//#region ================= Meat cooking =================
	
	global.TFC_MEAT_RECIPE_COMPONENTS.forEach(item => {
		cookingRecipe(item.name, item.input, item.output)
	})

	//#endregion
	//#region ================= TFC Grains =================

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

		// Flatbread dough
		processorRecipe(`${grain}_flatbread_dough`, 300, 8, {
			itemInputs: [`tfc:food/${grain}_flour`],
			itemOutputs: [`2x tfc:food/${grain}_dough`],
			fluidInputs: [Fluid.of('minecraft:water', 100)],
			itemOutputProvider: TFC.isp.of(`2x tfc:food/${grain}_dough`).copyFood()
		})

		// Firmalife dough
		processorRecipe(`${grain}_dough`, 300, 16, {
			itemInputs: [`tfc:food/${grain}_flour`, `#tfc:sweetener`],
			itemOutputs: [`4x firmalife:food/${grain}_dough`],
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
					(portion) => portion.nutrientModifier(0.8).saturationModifier(0.8).waterModifier(0.8),
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
					(portion) => portion.nutrientModifier(0.8).saturationModifier(0.8).waterModifier(0.8),
				]),
			})

			//2 Jam
			processorRecipe(`${grain}_${type[0]}_jam_sandwich_2`, 100, 16, {
				circuit: 4,
				itemInputs: [`2x ${type[1]}`, '2x #tfc:foods/preserves', '1x #tfc:foods/usable_in_jam_sandwich_2'],
				itemOutputs: [`2x tfc:food/${grain}_bread_jam_sandwich`, '2x tfc:empty_jar'],
				itemOutputProvider: TFC.isp.of(`2x tfc:food/${grain}_bread_jam_sandwich`).meal(
					(food => food.hunger(4).water(0.5).saturation(1).decayModifier(4.5)), [
					(portion) => portion.ingredient(Ingredient.of('#tfc:sandwich_bread')).nutrientModifier(0.5).saturationModifier(0.5).waterModifier(0.5),
					(portion) => portion.nutrientModifier(0.8).saturationModifier(0.8).waterModifier(0.8),
				]),
			})

			//3 Jam
			processorRecipe(`${grain}_${type[0]}_jam_sandwich_3`, 100, 16, {
				circuit: 4,
				itemInputs: [`2x ${type[1]}`, '3x #tfc:foods/preserves'],
				itemOutputs: [`2x tfc:food/${grain}_bread_jam_sandwich`, '3x tfc:empty_jar'],
				itemOutputProvider: TFC.isp.of(`2x tfc:food/${grain}_bread_jam_sandwich`).meal(
					(food => food.hunger(4).water(0.5).saturation(1).decayModifier(4.5)), [
					(portion) => portion.ingredient(Ingredient.of('#tfc:sandwich_bread')).nutrientModifier(0.5).saturationModifier(0.5).waterModifier(0.5),
					(portion) => portion.nutrientModifier(0.8).saturationModifier(0.8).waterModifier(0.8),
				]),
			})
		})


	})

	//#endregion

	//#region ================= Firmalife =================

	global.FIRMALIFE_COOKING_RECIPE_COMPONENTS.forEach(item => {
		cookingRecipe(item.name, item.input, item.output, undefined, true)
	})

	//#endregion
	//#region ================= Dairy =================

	global.TFC_CURDS_AND_CHEESES.forEach(item => {

		processorRecipe(`${item.curd}_curd`, 1200, 16, {
			itemOutputs: [item.curd],
			fluidInputs: [Fluid.of(item.input_fluid, 1000)],
			itemOutputProvider: TFC.isp.of(item.curd).resetFood()
		})

		processorRecipe(`${item.cheese1}_cheese_wheel_1`, 8000, 16, {
			itemInputs: [`3x ${item.curd}`],
			itemOutputs: [`firmalife:${item.cheese1}_wheel`],
			fluidInputs: [Fluid.of('tfc:salt_water', 750)],
			itemOutputProvider: TFC.isp.of(`firmalife:${item.cheese1}_wheel`).copyOldestFood()
		})

		processorRecipe(`${item.cheese2}_cheese_wheel_2`, 1000, 16, {
			circuit: 2,
			itemInputs: [`3x ${item.curd}`, `6x tfc:powder/salt`],
			itemOutputs: [`firmalife:${item.cheese2}_wheel`],
			itemOutputProvider: TFC.isp.of(`firmalife:${item.cheese2}_wheel`).copyOldestFood()
		})

		processorRecipe(`${item.cheese1}_cheese_cutting_1`, 100, 8, {
			itemInputs: [`firmalife:${item.cheese1}_wheel`],
			itemOutputs: [`4x firmalife:food/${item.cheese1}`],
			itemOutputProvider: TFC.isp.of(`4x firmalife:food/${item.cheese1}`).copyOldestFood()
		})

		processorRecipe(`${item.cheese2}_cheese_cutting_2`, 100, 8, {
			itemInputs: [`firmalife:${item.cheese2}_wheel`],
			itemOutputs: [`4x firmalife:food/${item.cheese2}`],
			itemOutputProvider: TFC.isp.of(`4x firmalife:food/${item.cheese2}`).copyOldestFood()
		})

	})

	global.TFC_MILKS.forEach(milk => {
		const milkID = milk.id.split(':')[1];

		processorRecipe(`white_chocolate_blend_from_${milkID}`, 300, 16, {
			circuit: 3,
			itemInputs: ['2x firmalife:food/cocoa_butter', '#tfc:sweetener'],
			itemOutputs: ['2x firmalife:food/white_chocolate_blend'],
			fluidInputs: [Fluid.of(milk.id, 1000)],
			itemOutputProvider: TFC.isp.of('2x firmalife:food/white_chocolate_blend').resetFood(),
		})

		processorRecipe(`dark_chocolate_blend_from_${milkID}`, 300, 16, {
			circuit: 2,
			itemInputs: ['2x firmalife:food/cocoa_powder', '#tfc:sweetener'],
			itemOutputs: ['2x firmalife:food/dark_chocolate_blend'],
			fluidInputs: [Fluid.of(milk.id, 1000)],
			itemOutputProvider: TFC.isp.of('2x firmalife:food/dark_chocolate_blend').resetFood(),
		})

		processorRecipe(`milk_chocolate_blend_from_${milkID}`, 300, 16, {
			circuit: 1,
			itemInputs: ['firmalife:food/cocoa_powder', 'firmalife:food/cocoa_butter', '#tfc:sweetener'],
			itemOutputs: ['2x firmalife:food/milk_chocolate_blend'],
			fluidInputs: [Fluid.of(milk.id, 1000)],
			itemOutputProvider: TFC.isp.of('2x firmalife:food/milk_chocolate_blend').resetFood(),
		})

		// TODO: this has nutrition dynamically set in the pot recipe, can we do that here?
		processorRecipe(`egg_noodles_from_${milkID}`, 50, 8, {
			circuit: 6,
			itemInputs: ["#tfc:foods/flour", 'tfc:powder/salt', '#forge:eggs'],
			itemOutputs: ['firmalife:food/raw_egg_noodles'],
			fluidInputs: [Fluid.of(milk.id, 1000)],
			itemOutputProvider: TFC.isp.of("firmalife:food/raw_egg_noodles").copyOldestFood(),
		})

		processorRecipe(`rice_noodles_from_${milkID}`, 50, 8, {
			itemInputs: ["tfc:food/rice_flour", 'tfc:food/maize_flour', 'tfc:powder/salt'],
			fluidInputs: [Fluid.of(milk.id, 1000)],
			itemOutputs: ['2x firmalife:food/raw_rice_noodles'],
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

	const smoking_meats = Ingredient.of('#tfc:foods/raw_meats').itemIds;
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
			fluidInputs: [Fluid.of('gtceu:wood_gas', 50)],
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
			(portion) => portion.nutrientModifier(1).saturationModifier(0.8).waterModifier(0.8),
		]).addTrait('tfg:freeze_dried')
	})

	//2 Input
	processorRecipeText('meal_bag/2', 100, 120, "tfg.food_recipe.freeze_drying", {
		circuit: 11,
		itemInputs: ['2x #tfg:foods/usable_in_meal_bag', '2x tfg:foil_pack', 'tfg:dry_ice'],
		itemOutputs: ['2x tfg:food/meal_bag'],
		itemOutputProvider: TFC.isp.of('2x tfg:food/meal_bag').meal(
			(food => food.hunger(4).saturation(1.5).decayModifier(4.5)), [
			(portion) => portion.nutrientModifier(1).saturationModifier(0.8).waterModifier(0.8),
		]).addTrait('tfg:freeze_dried')
	})

	//3 Input
	processorRecipeText('meal_bag/3', 100, 120, "tfg.food_recipe.freeze_drying", {
		circuit: 12,
		itemInputs: ['3x #tfg:foods/usable_in_meal_bag', '2x tfg:foil_pack', 'tfg:dry_ice'],
		itemOutputs: ['2x tfg:food/meal_bag'],
		itemOutputProvider: TFC.isp.of('2x tfg:food/meal_bag').meal(
			(food => food.hunger(4).saturation(1.5).decayModifier(4.5)), [
			(portion) => portion.nutrientModifier(1).saturationModifier(0.8).waterModifier(0.8),
		]).addTrait('tfg:freeze_dried')
	})

	//4 Input
	processorRecipeText('meal_bag/4', 100, 120, "tfg.food_recipe.freeze_drying", {
		circuit: 13,
		itemInputs: ['4x #tfg:foods/usable_in_meal_bag', '2x tfg:foil_pack', 'tfg:dry_ice'],
		itemOutputs: ['2x tfg:food/meal_bag'],
		itemOutputProvider: TFC.isp.of('2x tfg:food/meal_bag').meal(
			(food => food.hunger(4).saturation(1.5).decayModifier(4.5)), [
			(portion) => portion.nutrientModifier(1).saturationModifier(0.8).waterModifier(0.8),
		]).addTrait('tfg:freeze_dried')
	})

	//5 Input
	processorRecipeText('meal_bag/5', 100, 120, "tfg.food_recipe.freeze_drying", {
		circuit: 14,
		itemInputs: ['5x #tfg:foods/usable_in_meal_bag', '2x tfg:foil_pack', 'tfg:dry_ice'],
		itemOutputs: ['2x tfg:food/meal_bag'],
		itemOutputProvider: TFC.isp.of('2x tfg:food/meal_bag').meal(
			(food => food.hunger(4).saturation(1.5).decayModifier(4.5)), [
			(portion) => portion.nutrientModifier(1).saturationModifier(0.8).waterModifier(0.8),
		]).addTrait('tfg:freeze_dried')
	})

	//#endregion

	//#region ================= Misc =================

	global.TFC_JAMS.forEach(name => {
		processorRecipe(`${name}_jam`, 200, 8, {
			circuit: 15,
			itemInputs: [`4x tfc:food/${name}`, "#tfg:sugars", "#tfc:empty_jar_with_lid"],
			itemOutputs: [`4x tfc:jar/${name}`],
			fluidInputs: [Fluid.of("minecraft:water", 100)],
			itemOutputProvider: TFC.isp.of(`4x tfc:jar/${name}`).copyFood()
		})

		processorRecipe(`${name}_jam_no_seal`, 200, 8, {
			circuit: 16,
			itemInputs: [`4x tfc:food/${name}`, "#tfg:sugars", "tfc:empty_jar"],
			itemOutputs: [`4x tfc:jar/${name}_unsealed`],
			fluidInputs: [Fluid.of("minecraft:water", 100)],
			itemOutputProvider: TFC.isp.of(`4x tfc:jar/${name}_unsealed`).copyFood()
		})
	})

	cookingRecipe("pasta", "firmalife:food/raw_egg_noodles", "firmalife:food/cooked_pasta", Fluid.of("minecraft:water", 100))
	cookingRecipe("corn_tortilla", "firmalife:food/masa", "firmalife:food/corn_tortilla")
	cookingRecipe("boiled_egg", "#firmalife:foods/raw_eggs", "tfc:food/boiled_egg", Fluid.of("minecraft:water", 200))
	cookingRecipe("cooked_rice", "tfc:food/rice_grain", "tfc:food/cooked_rice", Fluid.of("minecraft:water", 200))

	processorRecipe("pasta_tomato_sauce", 60, 8, {
		itemInputs: ["firmalife:food/cooked_pasta", "firmalife:food/tomato_sauce"],
		itemOutputs: ["firmalife:food/pasta_with_tomato_sauce"],
		itemOutputProvider: TFC.isp.of('firmalife:food/pasta_with_tomato_sauce').copyFood()
	})

	processorRecipe('firmalife_masa', 300, 2, {
		itemInputs: ["firmalife:food/masa_flour"],
		itemOutputs: ["2x firmalife:food/masa"],
		fluidInputs: [Fluid.of('minecraft:water', 100)],
		itemOutputProvider: TFC.isp.of("2x firmalife:food/masa").copyFood()
	})

	processorRecipe("tortilla_chips", 40, 16, {
		itemInputs: ["firmalife:food/taco_shell", "tfc:powder/salt"],
		itemOutputs: ["firmalife:food/tortilla_chips"],
		itemOutputProvider: TFC.isp.of("firmalife:food/tortilla_chips").copyFood()
	})

	processorRecipe("tomato_sauce_mix", 600, 8, {
		itemInputs: ['tfc:food/tomato', 'tfc:powder/salt', 'tfc:food/garlic'],
		itemOutputs: ['5x firmalife:food/tomato_sauce_mix'],
		itemOutputProvider: TFC.isp.of('5x firmalife:food/tomato_sauce_mix').copyOldestFood(),
	})

	processorRecipe("tomato_sauce_from_mix", 200, 8, {
		itemInputs: ['firmalife:food/tomato_sauce_mix'],
		itemOutputs: ['firmalife:food/tomato_sauce'],
		fluidInputs: [Fluid.of('minecraft:water', 200)],
		itemOutputProvider: TFC.isp.of('firmalife:food/tomato_sauce').copyOldestFood(),
	})

	processorRecipe("olive_paste", 60, 8, {
		itemInputs: ['tfc:food/olive'],
		itemOutputs: ['2x tfc:olive_paste'],
		itemOutputProvider: TFC.isp.of('2x tfc:olive_paste'),
	})

	processorRecipe("soybean_paste", 60, 8, {
		itemInputs: ['firmalife:food/dehydrated_soybeans'],
		itemOutputs: ['firmalife:food/soybean_paste'],
		itemOutputProvider: TFC.isp.of('firmalife:food/soybean_paste').copyOldestFood(),
	})

	processorRecipeText('calorie_paste', 100, 512, "tfg.food_recipe.freeze_drying", {
		circuit: 8,
		itemInputs: ['firmalife:food/soybean_paste', 'tfg:foil_pack', '2x gtceu:small_meat_dust'],
		itemOutputs: ['tfg:food/calorie_paste'],
		fluidInputs: [Fluid.of('gtceu:fermented_biomass', 40)],
		itemOutputProvider: TFC.isp.of('tfg:food/calorie_paste').copyOldestFood().addTrait('tfg:freeze_dried'),
	})
		
	// Vinegar
	global.TFC_ALCOHOL.forEach(alcohol => {
		let name = `vinegar_${alcohol.id.replace(':', '_')}`;

		processorRecipe(name, 600, 32, {
			circuit: 5,
			itemInputs: ['#tfc:foods/fruits'],
			fluidInputs: [Fluid.of(alcohol.id, 250)],
			fluidOutputs: [Fluid.of('tfc:vinegar', 250)],
		})

	})

	processorRecipe("pizza_no_extra", 600, 16, {
		itemInputs: ["firmalife:food/pizza_dough", "firmalife:food/tomato_sauce", "firmalife:food/shredded_cheese"],
		itemOutputs: ["firmalife:food/raw_pizza"],
		itemOutputProvider: TFC.isp.of("firmalife:food/raw_pizza").meal(
			(food) => food.hunger(4).saturation(1).grain(1).dairy(0.25).decayModifier(4.5),
			[(portion) => portion.nutrientModifier(0.8).waterModifier(0.8).saturationModifier(0.8)]
		)
	})

	processorRecipe("pizza_1_extra", 600, 16, {
		circuit: 1,
		itemInputs: ["firmalife:food/pizza_dough", "firmalife:food/tomato_sauce", "firmalife:food/shredded_cheese", "#firmalife:foods/pizza_ingredients"],
		itemOutputs: ["firmalife:food/raw_pizza"],
		itemOutputProvider: TFC.isp.of("firmalife:food/raw_pizza").meal(
			(food) => food.hunger(4).saturation(1).grain(1).dairy(0.25).decayModifier(4.5),
			[(portion) => portion.nutrientModifier(0.8).waterModifier(0.8).saturationModifier(0.8)]
		)
	})

	processorRecipe("pizza_2_extra", 600, 16, {
		circuit: 2,
		itemInputs: ["firmalife:food/pizza_dough", "firmalife:food/tomato_sauce", "firmalife:food/shredded_cheese", "2x #firmalife:foods/pizza_ingredients"],
		itemOutputs: ["firmalife:food/raw_pizza"],
		itemOutputProvider: TFC.isp.of("firmalife:food/raw_pizza").meal(
			(food) => food.hunger(4).saturation(1).grain(1).dairy(0.25).decayModifier(4.5),
			[(portion) => portion.nutrientModifier(0.8).waterModifier(0.8).saturationModifier(0.8)]
		)
	})

	processorRecipe("pizza_dough_olive_oil", 300, 16, {
		itemInputs: ['firmalife:spice/basil_leaves', '#tfc:foods/dough', 'tfc:powder/salt'],
		itemOutputs: ['4x firmalife:food/pizza_dough'],
		fluidInputs: [Fluid.of('tfc:olive_oil', 1000)],
		itemOutputProvider: TFC.isp.of("4x firmalife:food/pizza_dough").copyOldestFood()
	})

	processorRecipe("pizza_dough_soybean_oil", 300, 16, {
		itemInputs: ['firmalife:spice/basil_leaves', '#tfc:foods/dough', 'tfc:powder/salt'],
		itemOutputs: ['4x firmalife:food/pizza_dough'],
		fluidInputs: [Fluid.of('firmalife:soybean_oil', 1000)],
		itemOutputProvider: TFC.isp.of("4x firmalife:food/pizza_dough").copyOldestFood()
	})

	processorRecipe("vanilla_ice_cream", 300, 16, {
		itemInputs: ['firmalife:ice_shavings', '#tfc:sweetener', 'firmalife:spice/vanilla'],
		itemOutputs: ['2x firmalife:food/vanilla_ice_cream'],
		fluidInputs: [Fluid.of('firmalife:cream', 1000)],
		itemOutputProvider: TFC.isp.of("2x firmalife:food/vanilla_ice_cream").resetFood()
	})

	processorRecipe("chocolate_ice_cream", 300, 16, {
		itemInputs: ['firmalife:food/vanilla_ice_cream'],
		itemOutputs: ['firmalife:food/chocolate_ice_cream'],
		fluidInputs: [Fluid.of('firmalife:chocolate', 1000)],
		itemOutputProvider: TFC.isp.of("firmalife:food/chocolate_ice_cream").resetFood()
	})

	processorRecipe("strawberry_ice_cream", 300, 16, {
		itemInputs: ['firmalife:food/vanilla_ice_cream', '2x tfc:food/strawberry'],
		itemOutputs: ['firmalife:food/strawberry_ice_cream'],
		itemOutputProvider: TFC.isp.of("firmalife:food/strawberry_ice_cream").resetFood()
	})

	processorRecipe("cookie_dough_ice_cream", 300, 16, {
		itemInputs: [`firmalife:food/vanilla_ice_cream`, `firmalife:food/chocolate_chip_cookie_dough`],
		itemOutputs: [`firmalife:food/cookie_dough_ice_cream`],
		itemOutputProvider: TFC.isp.of("firmalife:food/cookie_dough_ice_cream").resetFood()
	})

	processorRecipe("butter", 300, 16, {
		itemInputs: ["tfc:powder/salt"],
		itemOutputs: ["firmalife:food/butter"],
		fluidInputs: [Fluid.of('firmalife:cream', 1000)],
		itemOutputProvider: TFC.isp.of('firmalife:food/butter').resetFood()
	})

	processorRecipe("pie_dough", 300, 16, {
		circuit: 2,
		itemInputs: ['#tfc:sweetener', 'firmalife:food/butter', '#tfc:foods/flour'],
		itemOutputs: ['firmalife:food/pie_dough'],
		fluidInputs: [Fluid.of('minecraft:water', 1000)],
		itemOutputProvider: TFC.isp.of('firmalife:food/pie_dough').copyOldestFood()
	})

	processorRecipe("pumpkin_pie_dough", 300, 16, {
		circuit: 2,
		itemInputs: ['#tfc:sweetener', '#forge:eggs', '2x tfc:food/pumpkin_chunks', '#tfc:foods/flour'],
		itemOutputs: ['firmalife:food/pumpkin_pie_dough'],
		fluidInputs: [Fluid.of('minecraft:water', 1000)],
		itemOutputProvider: TFC.isp.of('firmalife:food/pumpkin_pie_dough').copyOldestFood()
	})

	processorRecipe("raw_pumpkin_pie", 20, 8, {
		itemInputs: ["firmalife:food/pumpkin_pie_dough", "firmalife:pie_pan"],
		itemOutputs: ["firmalife:raw_pumpkin_pie"],
		itemOutputProvider: TFC.isp.of("firmalife:food/raw_pumpkin_pie").copyFood()
	})

	processorRecipe("cookie_dough", 300, 16, {
		itemInputs: ['#tfc:sweetener', '#forge:eggs', 'firmalife:food/butter', '#tfc:foods/flour', "firmalife:spice/vanilla"],
		itemOutputs: ['4x firmalife:food/cookie_dough'],
		itemOutputProvider: TFC.isp.of('4x firmalife:food/cookie_dough').copyOldestFood()
	})

	processorRecipe("chocolate_chip_cookie_dough", 300, 16, {
		itemInputs: ['4x firmalife:food/cookie_dough', '#firmalife:chocolate_blends'],
		itemOutputs: ['4x firmalife:food/chocolate_chip_cookie_dough'],
		itemOutputProvider: TFC.isp.of('4x firmalife:food/chocolate_chip_cookie_dough').copyOldestFood()
	})

	processorRecipe("hardtack_dough", 300, 16, {
		itemInputs: ['tfc:powder/salt', '#tfc:foods/flour'],
		itemOutputs: ['4x firmalife:food/hardtack_dough'],
		fluidInputs: [Fluid.of('minecraft:water', 1000)],
		itemOutputProvider: TFC.isp.of('4x firmalife:food/hardtack_dough').copyOldestFood()
	})

	processorRecipe("yeast_starter", 1200, 8, {
		circuit: 1,
		fluidInputs: [Fluid.of('firmalife:yeast_starter', 100)],
		fluidOutputs: [Fluid.of('firmalife:yeast_starter', 600)],
		itemInputs: ['#tfc:foods/flour'],
	})

	processorRecipe("yeast_starter_from_water", 7200, 8, {
		circuit: 10,
		fluidInputs: [Fluid.of('minecraft:water', 100)],
		fluidOutputs: [Fluid.of('firmalife:yeast_starter', 600)],
		itemInputs: ['#tfc:foods/fruits'],
	})
	
	processorRecipe("cocoa_dust", 100, 4, {
		itemInputs: ["firmalife:food/roasted_cocoa_beans"],
		itemOutputs: ["gtceu:cocoa_dust"],
		itemOutputProvider: TFC.isp.of("gtceu:cocoa_dust")
	})

	processorRecipe("red_grapes", 50, 8, {
		itemInputs: ["firmalife:food/red_grapes"],
		itemOutputs: ["firmalife:food/smashed_red_grapes"],
		itemOutputProvider: TFC.isp.of('firmalife:food/smashed_red_grapes').copyOldestFood()
	})

	processorRecipe("white_grapes", 50, 8, {
		itemInputs: ["firmalife:food/white_grapes"],
		itemOutputs: ["firmalife:food/smashed_white_grapes"],
		itemOutputProvider: TFC.isp.of('firmalife:food/smashed_white_grapes').copyOldestFood()
	})

	processorRecipe("cured_maize", 300, 8, {
		itemInputs: ["tfc:food/maize_grain"],
		itemOutputs: ["firmalife:food/cured_maize"],
		itemOutputProvider: TFC.isp.of('firmalife:food/cured_maize').copyOldestFood()
	})

	processorRecipe("soy_mixture", 300, 8, {
		itemInputs: ["tfc:food/soybean", 'tfc:powder/salt'],
		itemOutputs: ["firmalife:food/soy_mixture"],
		fluidInputs: [Fluid.of('minecraft:water', 50)],
		itemOutputProvider: TFC.isp.of('firmalife:food/soy_mixture').copyOldestFood(),

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

	//#region Heating recipes for new foods

	event.recipes.tfc.heating('tfg:food/raw_birt', 200)
		.resultItem(TFC.isp.of('tfg:food/cooked_birt').copyFood())

	event.recipes.tfc.heating('tfg:food/raw_crawlermari', 200)
		.resultItem(TFC.isp.of('tfg:food/cooked_crawlermari').copyFood())

	event.recipes.tfc.heating('tfg:food/raw_limpet', 200)
		.resultItem(TFC.isp.of('tfg:food/cooked_limpet').copyFood())

	//#endregion

	// Tweaks to the machine crafts that are more annoying to do in java
	event.replaceInput({id: 'gtceu:shaped/lv_food_processor'}, 'gtceu:lv_electric_piston', 'gtceu:steel_whisk')
	event.replaceInput({id: 'gtceu:shaped/mv_food_processor'}, 'gtceu:mv_electric_piston', 'gtceu:aluminium_whisk')
	event.replaceInput({id: 'gtceu:shaped/hv_food_processor'}, 'gtceu:hv_electric_piston', 'gtceu:stainless_steel_whisk')
	event.replaceInput({id: 'gtceu:shaped/ev_food_processor'}, 'gtceu:ev_electric_piston', 'gtceu:titanium_whisk')

	event.replaceInput({id: 'gtceu:shaped/lv_food_oven'}, 'gtceu:lv_electric_piston', '#tfg:metal_bars')
	event.replaceInput({id: 'gtceu:shaped/mv_food_oven'}, 'gtceu:mv_electric_piston', '#tfg:metal_bars')
	event.replaceInput({id: 'gtceu:shaped/hv_food_oven'}, 'gtceu:hv_electric_piston', '#tfg:metal_bars')
	event.replaceInput({id: 'gtceu:shaped/ev_food_oven'}, 'gtceu:ev_electric_piston', '#tfg:metal_bars')
	
	event.replaceInput({id: 'gtceu:shaped/mv_food_refrigerator'}, 'gtceu:mv_machine_hull', 'gtceu:mv_hermetic_casing')
	event.replaceInput({id: 'gtceu:shaped/hv_food_refrigerator'}, 'gtceu:hv_machine_hull', 'gtceu:hv_hermetic_casing')
	event.replaceInput({id: 'gtceu:shaped/ev_food_refrigerator'}, 'gtceu:ev_machine_hull', 'gtceu:ev_hermetic_casing')
}