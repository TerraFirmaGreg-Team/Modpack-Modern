// priority: 0
"use strict";

function registerTFCGurmanRecipes(event) {
	//#region Food Oven Recipes
			
	global.cookingRecipe(event, 'margarita_pizza', 'tfc_gurman:raw_margarita_pizza', 'tfc_gurman:margarita_pizza');
		
	global.cookingRecipe(event, 'pepperoni_pizza', 'tfc_gurman:raw_pepperoni_pizza', 'tfc_gurman:pepperoni_pizza');
		
	global.cookingRecipe(event, 'hawaiian_pizza', 'tfc_gurman:raw_hawaiian_pizza', 'tfc_gurman:hawaiian_pizza');
		
	global.cookingRecipe(event, 'four_cheeses_pizza', 'tfc_gurman:raw_four_cheeses_pizza', 'tfc_gurman:four_cheeses_pizza');
		
	global.cookingRecipe(event, 'four_meats_pizza', 'tfc_gurman:raw_four_meats_pizza', 'tfc_gurman:four_meats_pizza');
		
	global.cookingRecipe(event, 'neapolitano_pizza', 'tfc_gurman:raw_neapolitano_pizza', 'tfc_gurman:neapolitano_pizza');
		
	global.cookingRecipe(event, 'croissants', 'tfc_gurman:raw_croissants', 'tfc_gurman:croissants');
		
	global.cookingRecipe(event, 'kiev_cutlets', 'tfc_gurman:raw_kiev_cutlets', 'tfc_gurman:kiev_cutlets');
		
	global.cookingRecipe(event, 'quiche', 'tfc_gurman:raw_quiche', 'tfc_gurman:quiche');

	global.cookingRecipe(event, 'tandoori_chicken', 'tfc_gurman:raw_tandoori_chicken', 'tfc_gurman:tandoori_chicken');

	global.cookingRecipe(event, 'placinda', 'tfc_gurman:raw_placinda', 'tfc_gurman:placinda');

	global.cookingRecipe(event, 'tonkatsu', 'tfc_gurman:raw_tonkatsu', 'tfc_gurman:tonkatsu');

	global.cookingRecipe(event, 'takoyaki', 'tfc_gurman:raw_takoyaki', 'tfc_gurman:takoyaki');

	global.cookingRecipe(event, 'bulgogi', 'tfc_gurman:raw_bulgogi', 'tfc_gurman:bulgogi');

	global.cookingRecipe(event, 'bratwurst', 'tfc_gurman:raw_bratwurst', 'tfc_gurman:bratwurst');
		
	global.cookingRecipe(event, 'crepes', 'tfc_gurman:raw_crepes', 'tfc_gurman:crepes');
		
	global.cookingRecipe(event, 'chebureki', 'tfc_gurman:raw_chebureki', 'tfc_gurman:chebureki');

	global.cookingRecipe(event, 'khachapuri', 'tfc_gurman:raw_khachapuri', 'tfc_gurman:khachapuri');

	global.cookingRecipe(event, 'lavash_wrap', 'tfc_gurman:raw_lavash_wrap', 'tfc_gurman:lavash_wrap');

	global.cookingRecipe(event, 'syrniki', 'tfc_gurman:raw_syrniki', 'tfc_gurman:syrniki');
				
	global.cookingRecipe(event, 'oladyi', 'tfc_gurman:raw_oladyi', 'tfc_gurman:oladyi');

	// Falafel - from soybean (no raw version)
	global.cookingRecipe(event, 'falafel', 'tfc:food/soybean', 'tfc_gurman:falafel');

	global.cookingRecipe(event, 'pelmeni', 'tfc_gurman:raw_pelmeni', 'tfc_gurman:pelmeni', '#tfg:clean_water 500');

	global.cookingRecipe(event, 'vareniki', 'tfc_gurman:raw_vareniki', 'tfc_gurman:vareniki', '#tfg:clean_water 500');

	//#endregion

	//#region Food Processor Recipes

	// Borscht
	global.processorRecipe(event, 'borscht', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['tfc:food/beet', 'tfc:food/cabbage', 'tfc:food/carrot', 'tfc:food/onion', 'tfc:food/tomato', '3x #tfc:bowls'],
		fluidInputs: ['minecraft:water 1000'],
		itemOutputs: ['3x tfc_gurman:borscht'],
		circuit: 20,
		itemOutputProvider: TFC.isp.of('3x tfc_gurman:borscht').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	// Schi
	global.processorRecipe(event, 'schi', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['2x tfc:food/cabbage', 'tfc:food/carrot', 'tfc:food/onion', 'tfc:food/tomato', '3x #tfc:bowls'],
		fluidInputs: ['minecraft:water 1000'],
		itemOutputs: ['3x tfc_gurman:schi'],
		circuit: 20,
		itemOutputProvider: TFC.isp.of('3x tfc_gurman:schi').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});
	
	// Coffee
	global.processorRecipe(event, 'coffee', 1000, GTValues.VHA[GTValues.LV], {
		itemInputs: ['2x firmalife:food/roasted_cocoa_beans'],
		fluidInputs: ['minecraft:water 1000'],
		fluidOutputs: ['tfc_gurman:coffee 1000'],
		circuit: 2
	});

	// Cocoa
	global.processorRecipe(event, 'cocoa', 1000, GTValues.VHA[GTValues.LV], {
		itemInputs: ['2x firmalife:food/cocoa_powder'],
		fluidInputs: ['#tfc:milks 1000'],
		fluidOutputs: ['tfc_gurman:cocoa 1000'],
		circuit: 1
	});

	// Compote
	global.processorRecipe(event, 'compote', 1000, GTValues.VHA[GTValues.LV], {
		itemInputs: ['2x #tfc:foods/fruits'],
		fluidInputs: ['minecraft:water 1000'],
		fluidOutputs: ['tfc_gurman:compote 1000'],
		circuit: 2
	});

	// Lemonade
	global.processorRecipe(event, 'lemonade', 1500, GTValues.VHA[GTValues.LV], {
		itemInputs: ['2x tfc:food/lemon', '#tfc:sweetener'],
		fluidInputs: ['minecraft:water 1000'],
		fluidOutputs: ['tfc_gurman:lemonade 1000'],
		circuit: 2
	});

	// Kvass
	global.processorRecipe(event, 'kvass', 2400, GTValues.VHA[GTValues.LV], {
		itemInputs: ['2x #tfc:foods/grains'],
		fluidInputs: ['minecraft:water 1000'],
		fluidOutputs: ['tfc_gurman:kvass 1000'],
		circuit: 2
	});

	// Tea Mint
	global.processorRecipe(event, 'tea_mint', 200, GTValues.VHA[GTValues.LV], {
		itemInputs: ['2x tfc_gurman:dried_mint_leaves'],
		fluidInputs: ['minecraft:water 1000'],
		fluidOutputs: ['tfc_gurman:tea_mint 1000'],
		circuit: 2
	});

	// Tea Chamomile
	global.processorRecipe(event, 'tea_chamomile', 200, GTValues.VHA[GTValues.LV], {
		itemInputs: ['2x tfc_gurman:dried_chamomile_leaves'],
		fluidInputs: ['minecraft:water 1000'],
		fluidOutputs: ['tfc_gurman:tea_chamomile 1000'],
		circuit: 2
	});

	// Tea Rosehip
	global.processorRecipe(event, 'tea_rosehip', 200, GTValues.VHA[GTValues.LV], {
		itemInputs: ['2x tfc_gurman:dried_rosehip_leaves'],
		fluidInputs: ['minecraft:water 1000'],
		fluidOutputs: ['tfc_gurman:tea_rosehip 1000'],
		circuit: 2
	});

	// Tea Nettle
	global.processorRecipe(event, 'tea_nettle', 200, GTValues.VHA[GTValues.LV], {
		itemInputs: ['2x tfc_gurman:dried_nettle_leaves'],
		fluidInputs: ['minecraft:water 1000'],
		fluidOutputs: ['tfc_gurman:tea_nettle 1000'],
		circuit: 2
	});

	// Solyanka
	global.processorRecipe(event, 'solyanka', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['#tfc:foods/meats', 'tfc:food/cabbage', 'tfc:food/onion', 'tfc:food/tomato', 'tfc:food/olive', '3x #tfc:bowls'],
		fluidInputs: ['minecraft:water 1000'],
		itemOutputs: ['3x tfc_gurman:solyanka'],
		circuit: 20,
		itemOutputProvider: TFC.isp.of('3x tfc_gurman:solyanka').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	// Okroshka
	global.processorRecipe(event, 'okroshka', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['tfc:food/cabbage', 'tfc:food/tomato', 'tfc:food/potato', 'tfc:food/onion', '#firmalife:foods/raw_eggs', '3x #tfc:bowls'],
		fluidInputs: ['tfc_gurman:kvass 1000'],
		itemOutputs: ['3x tfc_gurman:okroshka'],
		circuit: 20,
		itemOutputProvider: TFC.isp.of('3x tfc_gurman:okroshka').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	// Zama
	global.processorRecipe(event, 'zama', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['tfc:food/chicken', 'tfc:food/carrot', 'tfc:food/onion', 'tfc:powder/salt', 'tfc:food/garlic', '3x #tfc:bowls'],
		fluidInputs: ['minecraft:water 1000'],
		itemOutputs: ['3x tfc_gurman:zama'],
		circuit: 20,
		itemOutputProvider: TFC.isp.of('3x tfc_gurman:zama').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	// Curry
	global.processorRecipe(event, 'curry', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['#tfc:foods/cooked_meats', '#tfc:foods/vegetables', 'tfc:powder/salt', 'tfc:food/cooked_rice', '3x #tfc:bowls'],
		fluidInputs: ['#tfc:milks 1000'],
		itemOutputs: ['3x tfc_gurman:curry'],
		circuit: 16,
		itemOutputProvider: TFC.isp.of('3x tfc_gurman:curry').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	// Goulash
	global.processorRecipe(event, 'goulash', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['#tfc:foods/raw_meats', 'tfc:food/onion', 'tfc:food/potato', 'tfc:powder/salt', '3x #tfc:bowls'],
		fluidInputs: ['minecraft:water 100'],
		itemOutputs: ['3x tfc_gurman:goulash'],
		circuit: 16,
		itemOutputProvider: TFC.isp.of('3x tfc_gurman:goulash').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	// Pho
	global.processorRecipe(event, 'pho', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['firmalife:food/cooked_pasta', '#tfc:foods/cooked_meats', 'tfc:food/garlic', 'tfc:powder/salt', '3x #tfc:bowls'],
		fluidInputs: ['minecraft:water 100'],
		itemOutputs: ['3x tfc_gurman:pho'],
		circuit: 16,
		itemOutputProvider: TFC.isp.of('3x tfc_gurman:pho').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	// Bouillabaisse
	global.processorRecipe(event, 'bouillabaisse', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['#firmalife:foods/raw_fish', 'tfc:food/tomato', 'tfc:food/onion', 'tfc:food/garlic', 'tfc:powder/salt', '3x #tfc:bowls'],
		fluidInputs: ['minecraft:water 1000'],
		itemOutputs: ['3x tfc_gurman:bouillabaisse'],
		circuit: 16,
		itemOutputProvider: TFC.isp.of('3x tfc_gurman:bouillabaisse').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	// Ramen with Beef
	global.processorRecipe(event, 'ramen_beef', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['firmalife:food/raw_egg_noodles', '#firmalife:foods/raw_eggs', 'tfc:food/beef', 'tfc:food/onion', '2x #tfc:bowls'],
		fluidInputs: ['minecraft:water 1000'],
		itemOutputs: ['2x tfc_gurman:ramen_with_beef'],
		circuit: 21,
		itemOutputProvider: TFC.isp.of('2x tfc_gurman:ramen_with_beef').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	// Ramen with Camelidae
	global.processorRecipe(event, 'ramen_camelidae', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['firmalife:food/raw_egg_noodles', '#firmalife:foods/raw_eggs', 'tfc:food/camelidae', 'tfc:food/onion', '2x #tfc:bowls'],
		fluidInputs: ['minecraft:water 1000'],
		itemOutputs: ['2x tfc_gurman:ramen_with_camelidae'],
		circuit: 21,
		itemOutputProvider: TFC.isp.of('2x tfc_gurman:ramen_with_camelidae').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	// Ramen with Chevon
	global.processorRecipe(event, 'ramen_chevon', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['firmalife:food/raw_egg_noodles', '#firmalife:foods/raw_eggs', 'tfc:food/chevon', 'tfc:food/onion', '2x #tfc:bowls'],
		fluidInputs: ['minecraft:water 1000'],
		itemOutputs: ['2x tfc_gurman:ramen_with_chevon'],
		circuit: 21,
		itemOutputProvider: TFC.isp.of('2x tfc_gurman:ramen_with_chevon').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	// Ramen with Bacon
	global.processorRecipe(event, 'ramen_bacon', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['firmalife:food/raw_egg_noodles', '#firmalife:foods/raw_eggs', 'firmalife:food/bacon', 'tfc:food/onion', '2x #tfc:bowls'],
		fluidInputs: ['minecraft:water 1000'],
		itemOutputs: ['2x tfc_gurman:ramen_with_bacon'],
		circuit: 21,
		itemOutputProvider: TFC.isp.of('2x tfc_gurman:ramen_with_bacon').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	// Biryani
	global.processorRecipe(event, 'biryani', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['tfc:food/rice_grain', '#tfc:foods/meats', 'tfc:food/onion', 'tfc:food/carrot', 'tfc:food/tomato', '3x #tfc:bowls'],
		fluidInputs: ['minecraft:water 1000'],
		itemOutputs: ['3x tfc_gurman:biryani'],
		circuit: 20,
		itemOutputProvider: TFC.isp.of('3x tfc_gurman:biryani').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	// Fried Rice
	global.processorRecipe(event, 'fried_rice', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['tfc:food/cooked_rice', '#forge:eggs', '#tfc:foods/vegetables', 'tfc:powder/salt', '3x #tfc:bowls'],
		fluidInputs: ['minecraft:water 100'],
		itemOutputs: ['3x tfc_gurman:fried_rice'],
		circuit: 16,
		itemOutputProvider: TFC.isp.of('3x tfc_gurman:fried_rice').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	// Kimchi
	global.processorRecipe(event, 'kimchi', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['tfc:food/cabbage', 'tfc:food/carrot', 'tfc:food/onion', 'tfc:food/garlic', 'tfc:powder/salt', '3x #tfc:bowls'],
		fluidInputs: ['minecraft:water 1000'],
		itemOutputs: ['3x tfc_gurman:kimchi'],
		circuit: 20,
		itemOutputProvider: TFC.isp.of('3x tfc_gurman:kimchi').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	// Dolma
	global.processorRecipe(event, 'dolma', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['#tfc:foods/meats', 'tfc:food/rice_grain', 'tfc:powder/salt', '2x #tfc:bowls'],
		fluidInputs: ['minecraft:water 1000'],
		itemOutputs: ['2x tfc_gurman:dolma'],
		circuit: 16,
		itemOutputProvider: TFC.isp.of('2x tfc_gurman:dolma').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	// Spaghetti Bolognese
	global.processorRecipe(event, 'spaghetti_bolognese', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['firmalife:food/cooked_pasta', '#tfc:foods/cooked_meats', 'tfc:food/tomato', 'tfc:food/onion', 'tfc:food/garlic', '3x #tfc:bowls'],
		fluidInputs: ['minecraft:water 500'],
		itemOutputs: ['3x tfc_gurman:spaghetti_bolognese'],
		circuit: 18,
		itemOutputProvider: TFC.isp.of('3x tfc_gurman:spaghetti_bolognese').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	// Pasta Carbonara
	global.processorRecipe(event, 'pasta_carbonara', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['firmalife:food/cooked_pasta', 'firmalife:food/bacon', '#firmalife:foods/raw_eggs', 'firmalife:food/shredded_cheese', 'tfc:powder/salt', '3x #tfc:bowls'],
		fluidInputs: ['minecraft:water 500'],
		itemOutputs: ['3x tfc_gurman:pasta_carbonara'],
		circuit: 18,
		itemOutputProvider: TFC.isp.of('3x tfc_gurman:pasta_carbonara').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	// Ratatouille
	global.processorRecipe(event, 'ratatouille', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['tfc:food/tomato', 'tfc:food/pumpkin_chunks', 'tfc:food/carrot', 'tfc:food/onion', 'tfc:food/garlic', '3x #tfc:bowls'],
		fluidInputs: ['minecraft:water 500'],
		itemOutputs: ['3x tfc_gurman:ratatouille'],
		circuit: 18,
		itemOutputProvider: TFC.isp.of('3x tfc_gurman:ratatouille').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	// Risotto
	global.processorRecipe(event, 'risotto', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['tfc:food/rice_grain', '#firmalife:foods/cheeses', '#tfc:foods/vegetables', '2x #tfc:bowls'],
		fluidInputs: ['minecraft:water 100'],
		itemOutputs: ['3x tfc_gurman:risotto'],
		circuit: 18,
		itemOutputProvider: TFC.isp.of('3x tfc_gurman:risotto').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	// Porridge
	global.processorRecipe(event, 'porridge', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['#tfc:foods/grains', 'tfc:powder/salt', '#tfc:bowls'],
		fluidInputs: ['minecraft:water 250'],
		itemOutputs: ['tfc_gurman:porridge'],
		circuit: 18,
		itemOutputProvider: TFC.isp.of('tfc_gurman:porridge').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	// Mamaliga
	global.processorRecipe(event, 'mamaliga', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['tfc:food/maize_grain', 'tfc:powder/salt', '#tfc:bowls'],
		fluidInputs: ['minecraft:water 1000'],
		itemOutputs: ['tfc_gurman:mamaliga'],
		circuit: 16,
		itemOutputProvider: TFC.isp.of('tfc_gurman:mamaliga').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	// Adjika
	global.processorRecipe(event, 'adjika', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['tfc:food/green_bell_pepper', 'tfc:food/red_bell_pepper', 'tfc:powder/salt', 'tfc:food/garlic', 'firmalife:plant/cilantro', '5x #tfc:bowls'],
		fluidInputs: ['minecraft:water 500'],
		itemOutputs: ['5x tfc_gurman:adjika'],
		circuit: 8,
		itemOutputProvider: TFC.isp.of('5x tfc_gurman:adjika').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	//#endregion

	// #region Drying
	global.processorRecipeText(event, 'dried_mint', 200, GTValues.VA[GTValues.LV], "tfg.food_recipe.drying", {
		itemInputs: ["tfc:plant/foxglove"],
		fluidInputs: ['gtceu:nitrogen 100'],
		itemOutputs: ["tfc_gurman:dried_mint_leaves"],
		circuit: 6
	});

	global.processorRecipeText(event, 'dried_chamomile', 200, GTValues.VA[GTValues.LV], "tfg.food_recipe.drying", {
		itemInputs: ["tfc:plant/lilac"],
		fluidInputs: ['gtceu:nitrogen 100'],
		itemOutputs: ["tfc_gurman:dried_chamomile_leaves"],
		circuit: 6
	});

	global.processorRecipeText(event, 'dried_rosehip', 200, GTValues.VA[GTValues.LV], "tfg.food_recipe.drying", {
		itemInputs: ["tfc:plant/rose"],
		fluidInputs: ['gtceu:nitrogen 100'],
		itemOutputs: ["tfc_gurman:dried_rosehip_leaves"],
		circuit: 6
	});

	global.processorRecipeText(event, 'dried_nettle', 200, GTValues.VA[GTValues.LV], "tfg.food_recipe.drying", {
		itemInputs: ["tfc:plant/trillium"],
		fluidInputs: ['gtceu:nitrogen 100'],
		itemOutputs: ["tfc_gurman:dried_nettle_leaves"],
		circuit: 6
	});
	// #endregion Drying

	// #region Crafting table foods

	// TODO: unfinished
	global.processorRecipe(event, 'margarita_pizza', 300, GTValues.VA[GTValues.LV], {
		itemInputs: ['firmalife:food/pizza_dough', 'firmalife:food/shredded_cheese', 'tfc:food/tomato', 'tfc:food/red_bell_pepper', 'tfc_gurman:plant_mix', 'firmalife:food/tomato_sauce'],
		itemOutputs: ['tfc_gurman:raw_margarita_pizza'],
		circuit: 4,
		itemOutputProvider: TFC.isp.of('tfc_gurman:raw_margarita_pizza').simpleModifier('tfg:force_add_bowl').copyOldestFood()
	});

	// #endregion

	// #region Replacements

	event.replaceInput({ id: "tfc_gurman:crafting/tiramisu" }, "minecraft:sugar", "#tfg:sugars");

	event.recipes.tfc.advanced_shapeless_crafting(TFC.isp.of('4x tfc_gurman:raw_takoyaki').copyOldestFood(), [
		TFC.ingredient.notRotten('tfg:food/raw_crawlermari'),
		TFC.ingredient.notRotten('#tfc:foods/flour'), 
		TFC.ingredient.notRotten('#forge:eggs'),
		'tfc:powder/salt'
	]).id('tfg:shapeless/takoyaki_from_crawlermari');

	// #endregion
}
