// priority: 0
"use strict";

function registerTFCGurmanRecipes(event) {
	const $ISPRecipeLogic = Java.loadClass("su.terrafirmagreg.core.common.data.tfgt.machine.trait.ISPOutputRecipeLogic")

	//#region Food Oven Recipes
	
	// Pizzas
	event.recipes.gtceu.food_oven('margarita_pizza')
		.itemInputs('tfc_gurman:raw_margarita_pizza')
		.itemOutputs('tfc_gurman:margarita_pizza')
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])
	
	$ISPRecipeLogic.RegisterRecipeData('food_oven/margarita_pizza', 
		[Ingredient.of('tfc_gurman:raw_margarita_pizza')], 
		TFC.isp.of('tfc_gurman:margarita_pizza').firmaLifeCopyDynamicFood().asCanonClass(), 
		[])

	event.recipes.gtceu.food_oven('pepperoni_pizza')
		.itemInputs('tfc_gurman:raw_pepperoni_pizza')
		.itemOutputs('tfc_gurman:pepperoni_pizza')
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])
	
	$ISPRecipeLogic.RegisterRecipeData('food_oven/pepperoni_pizza', 
		[Ingredient.of('tfc_gurman:raw_pepperoni_pizza')], 
		TFC.isp.of('tfc_gurman:pepperoni_pizza').firmaLifeCopyDynamicFood().asCanonClass(), 
		[])

	event.recipes.gtceu.food_oven('havai_pizza')
		.itemInputs('tfc_gurman:raw_havai_pizza')
		.itemOutputs('tfc_gurman:havai_pizza')
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])
	
	$ISPRecipeLogic.RegisterRecipeData('food_oven/havai_pizza', 
		[Ingredient.of('tfc_gurman:raw_havai_pizza')], 
		TFC.isp.of('tfc_gurman:havai_pizza').firmaLifeCopyDynamicFood().asCanonClass(), 
		[])

	event.recipes.gtceu.food_oven('four_cheeses_pizza')
		.itemInputs('tfc_gurman:raw_four_cheeses_pizza')
		.itemOutputs('tfc_gurman:four_cheeses_pizza')
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])
	
	$ISPRecipeLogic.RegisterRecipeData('food_oven/four_cheeses_pizza', 
		[Ingredient.of('tfc_gurman:raw_four_cheeses_pizza')], 
		TFC.isp.of('tfc_gurman:four_cheeses_pizza').firmaLifeCopyDynamicFood().asCanonClass(), 
		[])

	event.recipes.gtceu.food_oven('four_meats_pizza')
		.itemInputs('tfc_gurman:raw_four_meats_pizza')
		.itemOutputs('tfc_gurman:four_meats_pizza')
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])
	
	$ISPRecipeLogic.RegisterRecipeData('food_oven/four_meats_pizza', 
		[Ingredient.of('tfc_gurman:raw_four_meats_pizza')], 
		TFC.isp.of('tfc_gurman:four_meats_pizza').firmaLifeCopyDynamicFood().asCanonClass(), 
		[])

	event.recipes.gtceu.food_oven('neapolitano_pizza')
		.itemInputs('tfc_gurman:raw_neapolitano_pizza')
		.itemOutputs('tfc_gurman:neapolitano_pizza')
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])
	
	$ISPRecipeLogic.RegisterRecipeData('food_oven/neapolitano_pizza', 
		[Ingredient.of('tfc_gurman:raw_neapolitano_pizza')], 
		TFC.isp.of('tfc_gurman:neapolitano_pizza').firmaLifeCopyDynamicFood().asCanonClass(), 
		[])

	event.recipes.gtceu.food_oven('croissants')
		.itemInputs('tfc_gurman:raw_croissants')
		.itemOutputs('tfc_gurman:croissants')
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])
	
	$ISPRecipeLogic.RegisterRecipeData('food_oven/croissants', 
		[Ingredient.of('tfc_gurman:raw_croissants')], 
		TFC.isp.of('tfc_gurman:croissants').firmaLifeCopyDynamicFood().asCanonClass(), 
		[])

	event.recipes.gtceu.food_oven('kiev_cutlets')
		.itemInputs('tfc_gurman:raw_kiev_cutlets')
		.itemOutputs('tfc_gurman:kiev_cutlets')
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])
	
	$ISPRecipeLogic.RegisterRecipeData('food_oven/kiev_cutlets', 
		[Ingredient.of('tfc_gurman:raw_kiev_cutlets')], 
		TFC.isp.of('tfc_gurman:kiev_cutlets').firmaLifeCopyDynamicFood().asCanonClass(), 
		[])

	event.recipes.gtceu.food_oven('quiche')
		.itemInputs('tfc_gurman:raw_quiche')
		.itemOutputs('tfc_gurman:quiche')
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])
	
	$ISPRecipeLogic.RegisterRecipeData('food_oven/quiche', 
		[Ingredient.of('tfc_gurman:raw_quiche')], 
		TFC.isp.of('tfc_gurman:quiche').firmaLifeCopyDynamicFood().asCanonClass(), 
		[])

	event.recipes.gtceu.food_oven('tandoori_chicken')
		.itemInputs('tfc_gurman:raw_tandoori_chicken')
		.itemOutputs('tfc_gurman:tandoori_chicken')
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])
	
	$ISPRecipeLogic.RegisterRecipeData('food_oven/tandoori_chicken', 
		[Ingredient.of('tfc_gurman:raw_tandoori_chicken')], 
		TFC.isp.of('tfc_gurman:tandoori_chicken').firmaLifeCopyDynamicFood().asCanonClass(), 
		[])

	event.recipes.gtceu.food_oven('placinda')
		.itemInputs('tfc_gurman:raw_placinda')
		.itemOutputs('tfc_gurman:placinda')
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])
	
	$ISPRecipeLogic.RegisterRecipeData('food_oven/placinda', 
		[Ingredient.of('tfc_gurman:raw_placinda')], 
		TFC.isp.of('tfc_gurman:placinda').firmaLifeCopyDynamicFood().asCanonClass(), 
		[])

	event.recipes.gtceu.food_oven('tonkatsu')
		.itemInputs('tfc_gurman:raw_tonkatsu')
		.itemOutputs('tfc_gurman:tonkatsu')
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])
	
	$ISPRecipeLogic.RegisterRecipeData('food_oven/tonkatsu', 
		[Ingredient.of('tfc_gurman:raw_tonkatsu')], 
		TFC.isp.of('tfc_gurman:tonkatsu').copyFood().addTrait("firmalife:oven_baked").asCanonClass(), 
		[])

	event.recipes.gtceu.food_oven('takoyaki')
		.itemInputs('tfc_gurman:raw_takoyaki')
		.itemOutputs('tfc_gurman:takoyaki')
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])
	
	$ISPRecipeLogic.RegisterRecipeData('food_oven/takoyaki', 
		[Ingredient.of('tfc_gurman:raw_takoyaki')], 
		TFC.isp.of('tfc_gurman:takoyaki').copyFood().addTrait("firmalife:oven_baked").asCanonClass(), 
		[])

	event.recipes.gtceu.food_oven('bulgogi')
		.itemInputs('tfc_gurman:raw_bulgogi')
		.itemOutputs('tfc_gurman:bulgogi')
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])
	
	$ISPRecipeLogic.RegisterRecipeData('food_oven/bulgogi', 
		[Ingredient.of('tfc_gurman:raw_bulgogi')], 
		TFC.isp.of('tfc_gurman:bulgogi').copyFood().addTrait("firmalife:oven_baked").asCanonClass(), 
		[])

	event.recipes.gtceu.food_oven('bratwurst')
		.itemInputs('tfc_gurman:raw_bratwurst')
		.itemOutputs('tfc_gurman:bratwurst')
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])
	
	$ISPRecipeLogic.RegisterRecipeData('food_oven/bratwurst', 
		[Ingredient.of('tfc_gurman:raw_bratwurst')], 
		TFC.isp.of('tfc_gurman:bratwurst').copyFood().addTrait("firmalife:oven_baked").asCanonClass(), 
		[])

	event.recipes.gtceu.food_oven('crepes')
		.itemInputs('tfc_gurman:raw_crepes')
		.itemOutputs('tfc_gurman:crepes')
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])
	
	$ISPRecipeLogic.RegisterRecipeData('food_oven/crepes', 
		[Ingredient.of('tfc_gurman:raw_crepes')], 
		TFC.isp.of('tfc_gurman:crepes').copyFood().addTrait("firmalife:oven_baked").asCanonClass(), 
		[])

	event.recipes.gtceu.food_oven('chebureki')
		.itemInputs('tfc_gurman:raw_chebureki')
		.itemOutputs('tfc_gurman:chebureki')
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])
	
	$ISPRecipeLogic.RegisterRecipeData('food_oven/chebureki', 
		[Ingredient.of('tfc_gurman:raw_chebureki')], 
		TFC.isp.of('tfc_gurman:chebureki').copyFood().addTrait("firmalife:oven_baked").asCanonClass(), 
		[])

	event.recipes.gtceu.food_oven('khachapuri')
		.itemInputs('tfc_gurman:raw_khachapuri')
		.itemOutputs('tfc_gurman:khachapuri')
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])
	
	$ISPRecipeLogic.RegisterRecipeData('food_oven/khachapuri', 
		[Ingredient.of('tfc_gurman:raw_khachapuri')], 
		TFC.isp.of('tfc_gurman:khachapuri').copyFood().addTrait("firmalife:oven_baked").asCanonClass(), 
		[])

	event.recipes.gtceu.food_oven('lavash_wrap')
		.itemInputs('tfc_gurman:raw_lavash_wrap')
		.itemOutputs('tfc_gurman:lavash_wrap')
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])
	
	$ISPRecipeLogic.RegisterRecipeData('food_oven/lavash_wrap', 
		[Ingredient.of('tfc_gurman:raw_lavash_wrap')], 
		TFC.isp.of('tfc_gurman:lavash_wrap').copyFood().addTrait("firmalife:oven_baked").asCanonClass(), 
		[])

	event.recipes.gtceu.food_oven('syrniki')
		.itemInputs('tfc_gurman:raw_syrniki')
		.itemOutputs('tfc_gurman:syrniki')
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])
	
	$ISPRecipeLogic.RegisterRecipeData('food_oven/syrniki', 
		[Ingredient.of('tfc_gurman:raw_syrniki')], 
		TFC.isp.of('tfc_gurman:syrniki').copyFood().addTrait("firmalife:oven_baked").asCanonClass(), 
		[])

	event.recipes.gtceu.food_oven('oladyi')
		.itemInputs('tfc_gurman:raw_oladyi')
		.itemOutputs('tfc_gurman:oladyi')
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])
	
	$ISPRecipeLogic.RegisterRecipeData('food_oven/oladyi', 
		[Ingredient.of('tfc_gurman:raw_oladyi')], 
		TFC.isp.of('tfc_gurman:oladyi').copyFood().addTrait("firmalife:oven_baked").asCanonClass(), 
		[])

	// Falafel - from soybean (no raw version)
	event.recipes.gtceu.food_oven('falafel')
		.itemInputs('tfc:food/soybean')
		.itemOutputs('tfc_gurman:falafel')
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])
	
	$ISPRecipeLogic.RegisterRecipeData('food_oven/falafel', 
		[Ingredient.of('tfc:food/soybean')], 
		TFC.isp.of('tfc_gurman:falafel').copyFood().addTrait("firmalife:oven_baked").asCanonClass(), 
		[])

	//#endregion

	//#region Food Processor Recipes

	// Borscht
	event.recipes.gtceu.food_processor('borscht')
		.circuit(20)
		.itemInputs('tfc:food/beet', 'tfc:food/cabbage', 'tfc:food/carrot', 'tfc:food/onion', 'tfc:food/tomato')
		.itemOutputs('tfc_gurman:borscht')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.duration(1800)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/borscht', 
		[Ingredient.of('tfc:food/beet'), Ingredient.of('tfc:food/cabbage'), Ingredient.of('tfc:food/carrot'), Ingredient.of('tfc:food/onion'), Ingredient.of('tfc:food/tomato')], 
		TFC.isp.of('tfc_gurman:borscht').copyFood().asCanonClass(), 
		[])

	// Schi
	event.recipes.gtceu.food_processor('schi')
		.circuit(20)
		.itemInputs('tfc:food/cabbage', 'tfc:food/cabbage', 'tfc:food/carrot', 'tfc:food/onion', 'tfc:food/tomato')
		.itemOutputs('tfc_gurman:schi')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.duration(1800)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/schi', 
		[Ingredient.of('tfc:food/cabbage'), Ingredient.of('tfc:food/cabbage'), Ingredient.of('tfc:food/carrot'), Ingredient.of('tfc:food/onion'), Ingredient.of('tfc:food/tomato')], 
		TFC.isp.of('tfc_gurman:schi').copyFood().asCanonClass(), 
		[])

	// Coffee
	event.recipes.gtceu.food_processor('coffee')
		.circuit(2)
		.itemInputs('firmalife:food/roasted_cocoa_beans', 'firmalife:food/roasted_cocoa_beans')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.outputFluids(Fluid.of('tfc_gurman:coffee', 1000))
		.duration(1800)
		.EUt(4)

	// Cocoa
	event.recipes.gtceu.food_processor('cocoa')
		.circuit(1)
		.itemInputs('firmalife:food/cocoa_powder', 'firmalife:food/cocoa_powder', 'minecraft:sugar')
		.inputFluids('#tfc:milks 1000')
		.outputFluids(Fluid.of('tfc_gurman:cocoa', 1000))
		.duration(1800)
		.EUt(4)

	// Compote
	event.recipes.gtceu.food_processor('compote')
		.circuit(2)
		.itemInputs('#tfc:foods/fruits', '#tfc:foods/fruits', 'minecraft:sugar')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.outputFluids(Fluid.of('tfc_gurman:compote', 1000))
		.duration(2000)
		.EUt(4)

	// Lemonade
	event.recipes.gtceu.food_processor('lemonade')
		.circuit(2)
		.itemInputs('tfc:food/lemon', 'tfc:food/lemon', 'minecraft:sugar')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.outputFluids(Fluid.of('tfc_gurman:lemonade', 1000))
		.duration(1500)
		.EUt(4)

	// Kvass
	event.recipes.gtceu.food_processor('kvass')
		.circuit(2)
		.itemInputs('#tfc:foods/breads', 'firmalife:tirage_mixture')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.outputFluids(Fluid.of('tfc_gurman:kvass', 1000))
		.duration(2400)
		.EUt(4)

	// Tea Mint
	event.recipes.gtceu.food_processor('tea_mint')
		.circuit(2)
		.itemInputs('tfc_gurman:dried_mint_leaves', 'tfc_gurman:dried_mint_leaves')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.outputFluids(Fluid.of('tfc_gurman:tea_mint', 1000))
		.duration(1800)
		.EUt(4)

	// Tea Chamomile
	event.recipes.gtceu.food_processor('tea_chamomile')
		.circuit(2)
		.itemInputs('tfc_gurman:dried_chamomile_leaves', 'tfc_gurman:dried_chamomile_leaves')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.outputFluids(Fluid.of('tfc_gurman:tea_chamomile', 1000))
		.duration(1800)
		.EUt(4)

	// Tea Rosehip
	event.recipes.gtceu.food_processor('tea_rosehip')
		.circuit(2)
		.itemInputs('tfc_gurman:dried_rosehip_leaves', 'tfc_gurman:dried_rosehip_leaves')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.outputFluids(Fluid.of('tfc_gurman:tea_rosehip', 1000))
		.duration(1800)
		.EUt(4)

	// Tea Nettle
	event.recipes.gtceu.food_processor('tea_nettle')
		.circuit(2)
		.itemInputs('tfc_gurman:dried_nettle_leaves', 'tfc_gurman:dried_nettle_leaves')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.outputFluids(Fluid.of('tfc_gurman:tea_nettle', 1000))
		.duration(1800)
		.EUt(4)

	// Solyanka
	event.recipes.gtceu.food_processor('solyanka')
		.circuit(20)
		.itemInputs('#tfc:foods/meats', 'tfc:food/cabbage', 'tfc:food/onion', 'tfc:food/tomato', 'tfc:food/olive')
		.itemOutputs('tfc_gurman:solyanka')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.duration(1800)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/solyanka', 
		[Ingredient.of('#tfc:foods/meats'), Ingredient.of('tfc:food/cabbage'), Ingredient.of('tfc:food/onion'), Ingredient.of('tfc:food/tomato'), Ingredient.of('tfc:food/olive')], 
		TFC.isp.of('tfc_gurman:solyanka').copyFood().asCanonClass(), 
		[])

	// Okroshka
	event.recipes.gtceu.food_processor('okroshka')
		.circuit(20)
		.itemInputs('tfc:food/cabbage', 'tfc:food/tomato', 'tfc:food/potato', 'tfc:food/onion', 'minecraft:egg')
		.itemOutputs('tfc_gurman:okroshka')
		.inputFluids(Fluid.of('tfc_gurman:kvass', 1000))
		.duration(1800)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/okroshka', 
		[Ingredient.of('tfc:food/cabbage'), Ingredient.of('tfc:food/tomato'), Ingredient.of('tfc:food/potato'), Ingredient.of('tfc:food/onion'), Ingredient.of('minecraft:egg')], 
		TFC.isp.of('tfc_gurman:okroshka').copyFood().asCanonClass(), 
		[])

	// Zama
	event.recipes.gtceu.food_processor('zama')
		.circuit(20)
		.itemInputs('tfc:food/chicken', 'tfc:food/carrot', 'tfc:food/onion', 'tfc:powder/salt', 'tfc:food/garlic')
		.itemOutputs('tfc_gurman:zama')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.duration(2000)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/zama', 
		[Ingredient.of('tfc:food/chicken'), Ingredient.of('tfc:food/carrot'), Ingredient.of('tfc:food/onion'), Ingredient.of('tfc:powder/salt'), Ingredient.of('tfc:food/garlic')], 
		TFC.isp.of('tfc_gurman:zama').copyFood().asCanonClass(), 
		[])

	// Curry
	event.recipes.gtceu.food_processor('curry')
		.circuit(16)
		.itemInputs('#tfc:foods/cooked_meats', '#tfc:foods/vegetables', 'tfc:powder/salt', 'tfc:food/cooked_rice')
		.itemOutputs('tfc_gurman:curry')
		.inputFluids('#tfc:milks 1000')
		.duration(2000)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/curry', 
		[Ingredient.of('#tfc:foods/cooked_meats'), Ingredient.of('#tfc:foods/vegetables'), Ingredient.of('tfc:powder/salt'), Ingredient.of('tfc:food/cooked_rice')], 
		TFC.isp.of('tfc_gurman:curry').copyFood().asCanonClass(), 
		[])

	// Goulash
	event.recipes.gtceu.food_processor('goulash')
		.circuit(16)
		.itemInputs('#tfc:foods/raw_meats', 'tfc:food/onion', 'tfc:food/potato', 'tfc:powder/salt')
		.itemOutputs('tfc_gurman:goulash')
		.inputFluids(Fluid.of('minecraft:water', 100))
		.duration(2000)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/goulash', 
		[Ingredient.of('#tfc:foods/raw_meats'), Ingredient.of('tfc:food/onion'), Ingredient.of('tfc:food/potato'), Ingredient.of('tfc:powder/salt')], 
		TFC.isp.of('tfc_gurman:goulash').copyFood().asCanonClass(), 
		[])

	// Pho
	event.recipes.gtceu.food_processor('pho')
		.circuit(16)
		.itemInputs('firmalife:food/cooked_pasta', '#tfc:foods/cooked_meats', 'tfc:food/garlic', 'tfc:powder/salt')
		.itemOutputs('tfc_gurman:pho')
		.inputFluids(Fluid.of('minecraft:water', 100))
		.duration(2000)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/pho', 
		[Ingredient.of('firmalife:food/cooked_pasta'), Ingredient.of('#tfc:foods/cooked_meats'), Ingredient.of('tfc:food/garlic'), Ingredient.of('tfc:powder/salt')], 
		TFC.isp.of('tfc_gurman:pho').copyFood().asCanonClass(), 
		[])

	// Bouillabaisse
	event.recipes.gtceu.food_processor('bouillabaisse')
		.circuit(16)
		.itemInputs('#firmalife:foods/raw_fish', 'tfc:food/tomato', 'tfc:food/onion', 'tfc:food/garlic', 'tfc:powder/salt')
		.itemOutputs('tfc_gurman:bouillabaisse')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.duration(2000)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/bouillabaisse', 
		[Ingredient.of('#firmalife:foods/raw_fish'), Ingredient.of('tfc:food/tomato'), Ingredient.of('tfc:food/onion'), Ingredient.of('tfc:food/garlic'), Ingredient.of('tfc:powder/salt')], 
		TFC.isp.of('tfc_gurman:bouillabaisse').copyFood().asCanonClass(), 
		[])

	// Ramen with Beef
	event.recipes.gtceu.food_processor('ramen_beef')
		.circuit(21)
		.itemInputs('firmalife:food/raw_egg_noodles', 'minecraft:egg', 'tfc:food/beef', 'tfc:food/onion')
		.itemOutputs('tfc_gurman:ramen_with_beef')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.duration(2000)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/ramen_beef', 
		[Ingredient.of('firmalife:food/raw_egg_noodles'), Ingredient.of('minecraft:egg'), Ingredient.of('tfc:food/beef'), Ingredient.of('tfc:food/onion')], 
		TFC.isp.of('tfc_gurman:ramen_with_beef').copyFood().asCanonClass(), 
		[])

	// Ramen with Camelidae
	event.recipes.gtceu.food_processor('ramen_camelidae')
		.circuit(21)
		.itemInputs('firmalife:food/raw_egg_noodles', 'minecraft:egg', 'tfc:food/camelidae', 'tfc:food/onion')
		.itemOutputs('tfc_gurman:ramen_with_camelidae')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.duration(2000)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/ramen_camelidae', 
		[Ingredient.of('firmalife:food/raw_egg_noodles'), Ingredient.of('minecraft:egg'), Ingredient.of('tfc:food/camelidae'), Ingredient.of('tfc:food/onion')], 
		TFC.isp.of('tfc_gurman:ramen_with_camelidae').copyFood().asCanonClass(), 
		[])

	// Ramen with Chevon
	event.recipes.gtceu.food_processor('ramen_chevon')
		.circuit(21)
		.itemInputs('firmalife:food/raw_egg_noodles', 'minecraft:egg', 'tfc:food/chevon', 'tfc:food/onion')
		.itemOutputs('tfc_gurman:ramen_with_chevon')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.duration(2000)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/ramen_chevon', 
		[Ingredient.of('firmalife:food/raw_egg_noodles'), Ingredient.of('minecraft:egg'), Ingredient.of('tfc:food/chevon'), Ingredient.of('tfc:food/onion')], 
		TFC.isp.of('tfc_gurman:ramen_with_chevon').copyFood().asCanonClass(), 
		[])

	// Ramen with Bacon
	event.recipes.gtceu.food_processor('ramen_bacon')
		.circuit(21)
		.itemInputs('firmalife:food/raw_egg_noodles', 'minecraft:egg', 'firmalife:food/bacon', 'tfc:food/onion')
		.itemOutputs('tfc_gurman:ramen_with_bacon')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.duration(2000)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/ramen_bacon', 
		[Ingredient.of('firmalife:food/raw_egg_noodles'), Ingredient.of('minecraft:egg'), Ingredient.of('firmalife:food/bacon'), Ingredient.of('tfc:food/onion')], 
		TFC.isp.of('tfc_gurman:ramen_with_bacon').copyFood().asCanonClass(), 
		[])

	// Biryani
	event.recipes.gtceu.food_processor('biryani')
		.circuit(20)
		.itemInputs('tfc:food/rice_grain', '#tfc:foods/meats', 'tfc:food/onion', 'tfc:food/carrot', 'tfc:food/tomato')
		.itemOutputs('tfc_gurman:biryani')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.duration(2000)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/biryani', 
		[Ingredient.of('tfc:food/rice_grain'), Ingredient.of('#tfc:foods/meats'), Ingredient.of('tfc:food/onion'), Ingredient.of('tfc:food/carrot'), Ingredient.of('tfc:food/tomato')], 
		TFC.isp.of('tfc_gurman:biryani').copyFood().asCanonClass(), 
		[])

	// Fried Rice
	event.recipes.gtceu.food_processor('fried_rice')
		.circuit(16)
		.itemInputs('tfc:food/cooked_rice', '#forge:eggs', '#tfc:foods/vegetables', 'tfc:powder/salt')
		.itemOutputs('tfc_gurman:fried_rice')
		.inputFluids(Fluid.of('minecraft:water', 100))
		.duration(2000)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/fried_rice', 
		[Ingredient.of('tfc:food/cooked_rice'), Ingredient.of('#forge:eggs'), Ingredient.of('#tfc:foods/vegetables'), Ingredient.of('tfc:powder/salt')], 
		TFC.isp.of('tfc_gurman:fried_rice').copyFood().asCanonClass(), 
		[])

	// Kimchi
	event.recipes.gtceu.food_processor('kimchi')
		.circuit(20)
		.itemInputs('tfc:food/cabbage', 'tfc:food/carrot', 'tfc:food/onion', 'tfc:food/garlic', 'tfc:powder/salt')
		.itemOutputs('tfc_gurman:kimchi')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.duration(2400)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/kimchi', 
		[Ingredient.of('tfc:food/cabbage'), Ingredient.of('tfc:food/carrot'), Ingredient.of('tfc:food/onion'), Ingredient.of('tfc:food/garlic'), Ingredient.of('tfc:powder/salt')], 
		TFC.isp.of('tfc_gurman:kimchi').copyFood().asCanonClass(), 
		[])

	// Dolma
	event.recipes.gtceu.food_processor('dolma')
		.circuit(16)
		.itemInputs('#tfc:foods/meats', 'tfc:food/rice_grain', 'tfc:powder/salt')
		.itemOutputs('tfc_gurman:dolma')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.duration(1800)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/dolma', 
		[Ingredient.of('#tfc:foods/meats'), Ingredient.of('tfc:food/rice_grain'), Ingredient.of('tfc:powder/salt')], 
		TFC.isp.of('tfc_gurman:dolma').copyFood().asCanonClass(), 
		[])

	// Spaghetti Bolognese
	event.recipes.gtceu.food_processor('spaghetti_bolognese')
		.circuit(18)
		.itemInputs('firmalife:food/cooked_pasta', '#tfc:foods/cooked_meats', 'tfc:food/tomato', 'tfc:food/onion', 'tfc:food/garlic')
		.itemOutputs('tfc_gurman:spaghetti_bolognese')
		.inputFluids(Fluid.of('minecraft:water', 500))
		.duration(2000)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/spaghetti_bolognese', 
		[Ingredient.of('firmalife:food/cooked_pasta'), Ingredient.of('#tfc:foods/cooked_meats'), Ingredient.of('tfc:food/tomato'), Ingredient.of('tfc:food/onion'), Ingredient.of('tfc:food/garlic')], 
		TFC.isp.of('tfc_gurman:spaghetti_bolognese').copyFood().asCanonClass(), 
		[])

	// Pasta Carbonara
	event.recipes.gtceu.food_processor('pasta_carbonara')
		.circuit(18)
		.itemInputs('firmalife:food/cooked_pasta', 'firmalife:food/bacon', 'minecraft:egg', 'firmalife:food/shredded_cheese', 'tfc:powder/salt')
		.itemOutputs('tfc_gurman:pasta_carbonara')
		.inputFluids(Fluid.of('minecraft:water', 500))
		.duration(2000)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/pasta_carbonara', 
		[Ingredient.of('firmalife:food/cooked_pasta'), Ingredient.of('firmalife:food/bacon'), Ingredient.of('minecraft:egg'), Ingredient.of('firmalife:food/shredded_cheese'), Ingredient.of('tfc:powder/salt')], 
		TFC.isp.of('tfc_gurman:pasta_carbonara').copyFood().asCanonClass(), 
		[])

	// Ratatouille
	event.recipes.gtceu.food_processor('ratatouille')
		.circuit(18)
		.itemInputs('tfc:food/tomato', 'tfc:food/pumpkin_chunks', 'tfc:food/carrot', 'tfc:food/onion', 'tfc:food/garlic')
		.itemOutputs('tfc_gurman:ratatouille')
		.inputFluids(Fluid.of('minecraft:water', 500))
		.duration(2000)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/ratatouille', 
		[Ingredient.of('tfc:food/tomato'), Ingredient.of('tfc:food/pumpkin_chunks'), Ingredient.of('tfc:food/carrot'), Ingredient.of('tfc:food/onion'), Ingredient.of('tfc:food/garlic')], 
		TFC.isp.of('tfc_gurman:ratatouille').copyFood().asCanonClass(), 
		[])

	// Risotto
	event.recipes.gtceu.food_processor('risotto')
		.circuit(18)
		.itemInputs('tfc:food/rice_grain', '#firmalife:foods/cheeses', '#tfc:foods/vegetables')
		.itemOutputs('tfc_gurman:risotto')
		.inputFluids(Fluid.of('minecraft:water', 100))
		.duration(2000)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/risotto', 
		[Ingredient.of('tfc:food/rice_grain'), Ingredient.of('#firmalife:foods/cheeses'), Ingredient.of('#tfc:foods/vegetables')], 
		TFC.isp.of('tfc_gurman:risotto').copyFood().asCanonClass(), 
		[])

	// Pelmeni (cooking raw pelmeni)
	event.recipes.gtceu.food_processor('pelmeni')
		.circuit(18)
		.itemInputs('tfc_gurman:raw_pelmeni')
		.itemOutputs('tfc_gurman:pelmeni')
		.inputFluids(Fluid.of('minecraft:water', 500))
		.duration(1000)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/pelmeni', 
		[Ingredient.of('tfc_gurman:raw_pelmeni')], 
		TFC.isp.of('tfc_gurman:pelmeni').copyFood().asCanonClass(), 
		[])

	// Vareniki (cooking raw vareniki)
	event.recipes.gtceu.food_processor('vareniki')
		.circuit(18)
		.itemInputs('tfc_gurman:raw_vareniki')
		.itemOutputs('tfc_gurman:vareniki')
		.inputFluids(Fluid.of('minecraft:water', 500))
		.duration(1000)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/vareniki', 
		[Ingredient.of('tfc_gurman:raw_vareniki')], 
		TFC.isp.of('tfc_gurman:vareniki').copyFood().asCanonClass(), 
		[])

	// Porridge
	event.recipes.gtceu.food_processor('porridge')
		.circuit(18)
		.itemInputs('#tfc:yak_food', 'tfc:powder/salt')
		.itemOutputs('tfc_gurman:porridge')
		.inputFluids(Fluid.of('minecraft:water', 250))
		.duration(2000)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/porridge', 
		[Ingredient.of('#tfc:yak_food'), Ingredient.of('tfc:powder/salt')], 
		TFC.isp.of('tfc_gurman:porridge').copyFood().asCanonClass(), 
		[])

	// Mamaliga
	event.recipes.gtceu.food_processor('mamaliga')
		.circuit(16)
		.itemInputs('tfc:food/maize_grain', 'tfc:powder/salt')
		.itemOutputs('tfc_gurman:mamaliga')
		.inputFluids(Fluid.of('minecraft:water', 250))
		.duration(2000)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/mamaliga', 
		[Ingredient.of('tfc:food/maize_grain'), Ingredient.of('tfc:powder/salt')], 
		TFC.isp.of('tfc_gurman:mamaliga').copyFood().asCanonClass(), 
		[])

	// Adjika
	event.recipes.gtceu.food_processor('adjika')
		.circuit(8)
		.itemInputs('tfc:food/green_bell_pepper', 'tfc:food/red_bell_pepper', 'tfc:powder/salt', 'tfc:food/garlic', 'firmalife:plant/cilantro')
		.itemOutputs('tfc_gurman:adjika')
		.inputFluids(Fluid.of('minecraft:water', 500))
		.duration(2000)
		.EUt(8)
	
	$ISPRecipeLogic.RegisterRecipeData('food_processor/adjika', 
		[Ingredient.of('tfc:food/green_bell_pepper'), Ingredient.of('tfc:food/red_bell_pepper'), Ingredient.of('tfc:powder/salt'), Ingredient.of('tfc:food/garlic'), Ingredient.of('firmalife:plant/cilantro')], 
		TFC.isp.of('tfc_gurman:adjika').copyFood().asCanonClass(), 
		[])

	//#endregion
}
