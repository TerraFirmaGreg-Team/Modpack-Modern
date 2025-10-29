// priority: 0
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerGTCEURecipes = (event) => {

	registerGTCEUMetalRecipes(event)
	registerGTCEURecyclingRecipes(event)
	registerGTCEuTFCMetalsRecipes(event)
	registerGTCEuMachineRecipes(event)

	removeGTCEURecipes(event)

	//#region Выход: Удобрение
	// В обычном миксере
	event.recipes.gtceu.mixer('tfg:fertilizer')
		.itemInputs(
			'#tfc:dirt',
			'2x #tfg:wood_dusts',
			'4x #forge:sand'
		)
		.circuit(1)
		.inputFluids("#tfg:clean_water 1000")
		.itemOutputs('4x gtceu:fertilizer')
		.duration(300)
		.EUt(30)

	event.recipes.gtceu.mixer('tfg:fertilizer_2')
		.itemInputs('tfc:compost')
		.inputFluids('#tfg:clean_water 1000')
		.itemOutputs('4x gtceu:fertilizer')
		.duration(300)
		.EUt(30)

	//#endregion

	//#region Выход: Кварцевый песок

	event.shaped('gtceu:quartz_sand_dust', [
		'A',
		'B'
	], {
		A: '#forge:sand',
		B: '#forge:tools/mortars'
	}).id('gtceu:shaped/quartz_sand')

	event.recipes.gtceu.macerator('quartz_sand_from_sand')
		.itemInputs('#forge:sand')
		.itemOutputs('gtceu:quartz_sand_dust')
		.duration(30)
		.EUt(2)

	//#endregion

	event.recipes.gtceu.macerator('flux')
		.itemInputs('#tfc:fluxstone')
		.itemOutputs('2x tfc:powder/flux')
		.duration(30)
		.EUt(2)

	event.recipes.gtceu.forge_hammer('flux')
		.itemInputs('#tfc:fluxstone')
		.itemOutputs('2x tfc:powder/flux')
		.duration(30)
		.EUt(2)

	event.recipes.greate.pressing('2x tfc:powder/flux', '#tfc:fluxstone')
		.recipeTier(0)
		.id('greate:pressing/flux')

	//#region Выход: Диоксид силикона

	event.recipes.gtceu.electrolyzer('sand_electrolysis')
		.itemInputs('8x #forge:sand')
		.itemOutputs('gtceu:silicon_dioxide_dust')
		.duration(500)
		.EUt(25)

	//#endregion

	event.recipes.gtceu.centrifuge('tfg:beets_to_sugar')
		.itemInputs('5x tfc:food/beet')
		.inputFluids(Fluid.of('tfc:salt_water', 1000))
		.itemOutputs('3x minecraft:sugar', '3x gtceu:plant_ball', '1x #forge:dusts/salt')
		.outputFluids(Fluid.of('minecraft:water', 1000))
		.duration(800)
		.EUt(7)
		.circuit(3)

	event.smelting('4x tfc:powder/wood_ash', '1x #minecraft:logs_that_burn').id('tfg:wood_ash')

	//#region Выход: Соленая пыль + Вода

	// Декрафт в центрифуге
	event.recipes.gtceu.centrifuge('centrifuging_tfc_salt_water')
		.inputFluids(Fluid.of('tfc:salt_water', 1000))
		.itemOutputs('1x gtceu:salt_dust')
		.outputFluids(Fluid.of('minecraft:water', 1000))
		.duration(51)
		.EUt(30)
		.circuit(1)

	// Декрафт в электролайзере
	event.recipes.gtceu.electrolyzer('electrolyze_tfc_salt_water')
		.inputFluids(Fluid.of('tfc:salt_water', 1000))
		.itemOutputs('1x gtceu:sodium_hydroxide_dust', '2x gtceu:small_sodium_hydroxide_dust')
		.outputFluids(Fluid.of('gtceu:chlorine', 500), Fluid.of('gtceu:hydrogen', 500))
		.duration(720)
		.EUt(30)

	// Add circuit to gregtech salt water mixer recipe
	event.remove({ id: 'gtceu:mixer/salt_water' })
	generateMixerRecipe(event, ['2x #forge:dusts/salt'], Fluid.of('minecraft:water', 1000), [], 1, Fluid.of('gtceu:salt_water', 1000), 40, 7, 64, 'tfg:gtceu/salt_water')

	//#endregion

	//#region Выход: Пропитанные доски

	event.remove({ id: 'gtceu:shaped/treated_wood_planks' })

	event.recipes.tfc.barrel_sealed(4000)
		.outputItem('gtceu:treated_wood_planks')
		.inputs('#minecraft:planks', TFC.fluidStackIngredient('#forge:creosote', 100))
		.id('tfg:barrel/treated_wood_planks')

	event.recipes.tfc.barrel_sealed(2000)
		.outputItem('gtceu:treated_wood_dust')
		.inputs('#tfg:wood_dusts', TFC.fluidStackIngredient('#forge:creosote', 50))
		.id('tfg:barrel/treated_wood_dust')

	//#endregion

	//#region Выход: Капля резины

	// Из латекса
	event.recipes.tfc.pot('tfc:powder/wood_ash', Fluid.of('tfg:latex', 1000), 1200, 300)
		.itemOutput('gtceu:sticky_resin')
		.id('tfg:pot/sticky_resin_from_latex')

	event.recipes.tfc.pot('tfc:powder/wood_ash', Fluid.of('tfg:conifer_pitch', 1000), 1200, 300)
		.itemOutput('gtceu:sticky_resin')
		.id('tfg:pot/sticky_resin_from_conifer_pitch')

	event.recipes.gtceu.fluid_solidifier('tfg:fluid_solidifier/latex_to_sticky_resin')
		.duration(12 * 20)
		.EUt(30)
		.itemInputs('tfc:powder/wood_ash')
		.itemOutputs('gtceu:sticky_resin')
		.inputFluids(Fluid.of('tfg:latex', 1000))

	event.recipes.gtceu.fluid_solidifier('tfg:fluid_solidifier/pitch_to_sticky_resin')
		.duration(12 * 20)
		.EUt(30)
		.itemInputs('tfc:powder/wood_ash')
		.itemOutputs('gtceu:sticky_resin')
		.inputFluids(Fluid.of('tfg:conifer_pitch', 1000))
	//#endregion

	//#region Выход: Растительный шарик
	// 8x Ванильная растительность -> Plant Ball (Compressor)

	event.recipes.gtceu.compressor('plant_ball_from_tfc_seeds')
		.itemInputs('4x #tfc:seeds')
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	let food = Ingredient.of('#tfc:foods')
		.subtract('minecraft:brown_mushroom')
		.subtract('minecraft:red_mushroom')
		.withCount(8)

	event.recipes.gtceu.compressor('plant_ball_from_tfc_food')
		.itemInputs(food)
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	event.recipes.gtceu.compressor('plant_ball_from_tfc_plants')
		.itemInputs('4x #tfc:plants')
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	event.recipes.gtceu.compressor('plant_ball_from_moon_plants')
		.itemInputs('4x #tfg:moon_plants')
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	event.recipes.gtceu.compressor('plant_ball_from_mars_plants')
		.itemInputs('4x #tfg:mars_plants')
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	event.recipes.gtceu.compressor('plant_ball_from_tfc_corals')
		.itemInputs('4x #tfc:corals')
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	event.recipes.gtceu.compressor('plant_ball_from_misc_plants')
		.itemInputs('4x #createaddition:plants')
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	event.recipes.gtceu.compressor('plant_ball_from_wart_blocks')
		.itemInputs('4x #minecraft:wart_blocks')
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	//#endregion

	//#region Выход: Биомасса

	// Ванильная растительность -> Биомасса (Brewery)

	event.recipes.gtceu.brewery('biomass_from_tfc_seeds')
		.itemInputs('#tfc:seeds')
		.inputFluids("#tfc:any_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 100))
		.duration(100)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_tfc_food')
		.itemInputs('#tfc:foods')
		.inputFluids("#tfc:any_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 100))
		.duration(100)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_tfc_plants')
		.itemInputs('#tfc:plants')
		.inputFluids("#tfc:any_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 100))
		.duration(100)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_moon_plants')
		.itemInputs('#tfg:moon_plants')
		.inputFluids("#tfc:any_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 100))
		.duration(100)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_mars_plants')
		.itemInputs('#tfg:mars_plants')
		.inputFluids("#tfc:any_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 100))
		.duration(100)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_tfc_corals')
		.itemInputs('#tfc:corals')
		.inputFluids("#tfc:any_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 100))
		.duration(100)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_spider_eyes')
		.itemInputs('minecraft:spider_eye')
		.inputFluids("#tfc:any_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 100))
		.duration(100)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_leaves')
		.itemInputs('#minecraft:leaves')
		.inputFluids("#tfc:any_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 20))
		.duration(100)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_fallen_leaves')
		.itemInputs('#tfc:fallen_leaves')
		.inputFluids("#tfc:any_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 20))
		.duration(100)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_minecraft_plants')
		.itemInputs('#createaddition:plants')
		.inputFluids("#tfc:any_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 100))
		.duration(100)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_wart_blocks')
		.itemInputs('#minecraft:wart_blocks')
		.inputFluids("#tfc:any_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 50))
		.duration(100)
		.EUt(3)

	//#endregion

	//#region Выход: Рыбье масло

	event.recipes.gtceu.extractor(`tfg/fish_oil`)
		.itemInputs('#minecraft:fishes')
		.outputFluids(Fluid.of('gtceu:fish_oil', 200))
		.duration(40)
		.EUt(4)

	event.recipes.gtceu.extractor(`tfg/tallow`)
		.itemInputs('tfc:blubber')
		.outputFluids(Fluid.of('tfc:tallow', 200))
		.duration(40)
		.EUt(4)

	// you get tallow from killing things like orcas, so this seems close enough
	event.recipes.gtceu.mixer('tallow_to_fish_oil')
		.inputFluids('tfc:tallow 100', 'tfc:lye 100')
		.outputFluids('gtceu:fish_oil 200')
		.duration(100)
		.EUt(4)

	//#endregion

	//#region Выход: Семянное масло

	event.recipes.gtceu.extractor(`tfg/seed_oil`)
		.itemInputs('#tfc:seeds')
		.outputFluids(Fluid.of('gtceu:seed_oil', 50))
		.duration(32)
		.EUt(2)

	//#endregion

	//#region Выход: Цемент

	generateMixerRecipe(event, ['2x #tfg:stone_dusts', 'gtceu:marble_dust', 'gtceu:gypsum_dust'],
		"#tfg:clean_water 1000", [], null, 'gtceu:concrete 1152', 40, 16, 64, 'concrete_from_marble')

	generateMixerRecipe(event, ['3x #tfg:stone_dusts', 'gtceu:clay_dust'],
		"#tfg:clean_water 500", [], null, 'gtceu:concrete 576', 20, 16, 64, 'concrete_from_clay')

	generateMixerRecipe(event, ['3x #tfg:stone_dusts', 'gtceu:calcite_dust', 'gtceu:gypsum_dust'],
		"#tfg:clean_water 1000", [], null, 'gtceu:concrete 1152', 40, 16, 64, 'concrete_from_calcite')

	//GT light/dark concrete recipe fix

	event.remove({ id: 'gtceu:fluid_solidifier/solidify_concrete_block' })
	event.remove({ id: 'gtceu:chemical_bath/light_to_dark_concrete' })

	event.recipes.gtceu.fluid_solidifier('gtceu:fluid_solidifier/solidify_light_concrete')
		.inputFluids(Fluid.of('gtceu:concrete', 144))
		.notConsumable('1x gtceu:block_casting_mold')
		.itemOutputs('1x gtceu:light_concrete')
		.duration(98)
		.EUt(7)

	event.recipes.gtceu.chemical_bath('gtceu:chemical_bath/dark_concrete')
		.inputFluids(Fluid.of('tfc:black_dye', 18))
		.itemInputs('1x gtceu:light_concrete')
		.itemOutputs('1x gtceu:dark_concrete')
		.duration(20)
		.EUt(7)

	event.recipes.gtceu.extractor('gtceu:extractor/extract_light_concrete')
		.itemInputs('1x gtceu:light_concrete')
		.outputFluids(Fluid.of('gtceu:concrete', 144))
		.duration(98)
		.EUt(30)

	event.stonecutting('gtceu:light_concrete_bricks', 'gtceu:light_concrete').id('tfg:stonecutting/light_concrete_bricks')
	event.stonecutting('gtceu:chiseled_light_concrete', 'gtceu:light_concrete').id('tfg:stonecutting/chiseled_light_concrete')
	event.stonecutting('gtceu:light_concrete_tile', 'gtceu:light_concrete').id('tfg:stonecutting/light_concrete_tile')
	event.stonecutting('gtceu:light_concrete_small_tile', 'gtceu:light_concrete').id('tfg:stonecutting/light_concrete_small_tile')
	event.stonecutting('gtceu:light_concrete_windmill_a', 'gtceu:light_concrete').id('tfg:stonecutting/light_concrete_windmill_a')
	event.stonecutting('gtceu:light_concrete_windmill_b', 'gtceu:light_concrete').id('tfg:stonecutting/light_concrete_windmill_b')
	event.stonecutting('gtceu:small_light_concrete_bricks', 'gtceu:light_concrete').id('tfg:stonecutting/small_light_concrete_bricks')
	event.stonecutting('gtceu:square_light_concrete_bricks', 'gtceu:light_concrete').id('tfg:stonecutting/square_light_concrete_bricks')

	event.stonecutting('gtceu:dark_concrete_bricks', 'gtceu:dark_concrete').id('tfg:stonecutting/dark_concrete_bricks')
	event.stonecutting('gtceu:chiseled_dark_concrete', 'gtceu:dark_concrete').id('tfg:stonecutting/chiseled_dark_concrete')
	event.stonecutting('gtceu:dark_concrete_tile', 'gtceu:dark_concrete').id('tfg:stonecutting/dark_concrete_tile')
	event.stonecutting('gtceu:dark_concrete_small_tile', 'gtceu:dark_concrete').id('tfg:stonecutting/dark_concrete_small_tile')
	event.stonecutting('gtceu:dark_concrete_windmill_a', 'gtceu:dark_concrete').id('tfg:stonecutting/dark_concrete_windmill_a')
	event.stonecutting('gtceu:dark_concrete_windmill_b', 'gtceu:dark_concrete').id('tfg:stonecutting/dark_concrete_windmill_b')
	event.stonecutting('gtceu:small_dark_concrete_bricks', 'gtceu:dark_concrete').id('tfg:stonecutting/small_dark_concrete_bricks')
	event.stonecutting('gtceu:square_dark_concrete_bricks', 'gtceu:dark_concrete').id('tfg:stonecutting/square_dark_concrete_bricks')

	//#endregion

	//#region GT marble

	event.stonecutting('gtceu:polished_marble', 'tfc:rock/bricks/marble').id('tfg:stonecutting/gt_polished_marble')
	event.stonecutting('gtceu:chiseled_marble', 'tfc:rock/bricks/marble').id('tfg:stonecutting/gt_chiseled_marble')
	event.stonecutting('gtceu:marble_tile', 'tfc:rock/bricks/marble').id('tfg:stonecutting/gt_marble_tile')
	event.stonecutting('gtceu:marble_small_tile', 'tfc:rock/bricks/marble').id('tfg:stonecutting/gt_marble_small_tile')
	event.stonecutting('gtceu:marble_windmill_a', 'tfc:rock/bricks/marble').id('tfg:stonecutting/gt_marble_windmill_a')
	event.stonecutting('gtceu:marble_windmill_b', 'tfc:rock/bricks/marble').id('tfg:stonecutting/gt_marble_windmill_b')
	event.stonecutting('gtceu:small_marble_bricks', 'tfc:rock/bricks/marble').id('tfg:stonecutting/gt_small_marble_bricks')
	event.stonecutting('gtceu:square_marble_bricks', 'tfc:rock/bricks/marble').id('tfg:stonecutting/gt_square_marble_bricks')

	//#endregion

	//#region Выход: Бурильная жидкость

	generateMixerRecipe(event, ['2x #tfg:stone_dusts'], ['gtceu:lubricant 20', "#tfg:clean_water 4000"],
		[], null, Fluid.of('gtceu:drilling_fluid', 5000), 40, 16, 64, 'drilling_fluid')

	//#endregion

	//#region Выход: Пыль мяса

	event.recipes.gtceu.macerator('macerate_meat_to_dust')
		.itemInputs('#tfc:foods/meats')
		.itemOutputs('gtceu:meat_dust', 'gtceu:tiny_bone_dust')
		.duration(100)
		.EUt(2)

	//#endregion

	//#region Выход: Пыль какао-бобов

	event.recipes.gtceu.macerator('macerate_cocoa')
		.itemInputs('firmalife:food/roasted_cocoa_beans')
		.itemOutputs('gtceu:cocoa_dust')
		.duration(100)
		.EUt(2)

	//#endregion

	//#region Стеклодувка

	// Glass Tube
	event.recipes.tfc.glassworking('gtceu:glass_tube', '#tfc:glass_batches_tier_3', ['blow', 'stretch', 'stretch'])
		.id('tfg:gtceu/glassworking/glass_tube')

	//#endregion

	// Пыль звезды незера 
	event.recipes.gtceu.chemical_reactor('tfg:gtceu/nether_star_dust')
		.itemInputs('2x #forge:dusts/iridium', '#forge:dusts/diamond')
		.circuit(10)
		.itemOutputs('gtceu:nether_star_dust')
		// TODO: change to something else with venus
		.inputFluids(Fluid.of('gtceu:neon', 1000))
		.duration(700)
		.EUt(2720)

	// Empty Wooden Form
	event.shaped('gtceu:empty_wooden_form', [
		' AA',
		'BAA'
	], {
		A: '#minecraft:planks',
		B: '#forge:tools/saws'
	}).id('gtceu:shaped/plank_to_wooden_shape')

	// Деревянная шестерня
	event.shaped('gtceu:small_wood_gear', [
		'AB ',
		'BCB',
		' B '
	], {
		A: '#forge:tools/saws',
		B: '#forge:rods/wooden',
		C: 'tfc:glue'
	}).id('gtceu:shaped/small_gear_wood')

	event.shaped('gtceu:wood_gear', [
		'AB ',
		'BCB',
		' B '
	], {
		A: '#forge:tools/saws',
		B: '#minecraft:planks',
		C: 'tfc:glue'
	}).id('gtceu:shaped/gear_wood')

	// Compressed Coke Clay
	event.shaped('gtceu:compressed_coke_clay', [
		'AAA',
		'BCB',
		'BBB'
	], {
		A: 'minecraft:clay_ball',
		B: '#minecraft:sand',
		C: 'gtceu:brick_wooden_form'
	}).replaceIngredient('gtceu:brick_wooden_form', 'gtceu:brick_wooden_form').id('gtceu:shaped/compressed_coke_clay')

	// Coke Oven Brick
	event.recipes.tfc.heating('gtceu:compressed_coke_clay', 1399)
		.resultItem('gtceu:coke_oven_brick')
		.id('tfg:heating/coke_oven_bricks')

	event.recipes.gtceu.alloy_smelter('gtceu:coke_oven_brick')
		.itemInputs('3x #minecraft:sand', '2x minecraft:clay_ball')
		.itemOutputs('gtceu:coke_oven_brick')
		.duration(7.5 * 20)
		.EUt(GTValues.VA[GTValues.ULV])

	// Multi-Smelter
	event.shaped('gtceu:multi_smelter', [
		'AAA',
		'BCB',
		'DBD'
	], {
		A: 'gtceu:hp_steam_furnace',
		B: '#gtceu:circuits/hv',
		C: 'gtceu:heatproof_machine_casing',
		D: 'gtceu:copper_single_cable'
	}).id('gtceu:shaped/multi_furnace')

	event.shaped('gtceu:multi_smelter', [
		'AAA',
		'BCB',
		'DBD'
	], {
		A: 'gtceu:lv_electric_furnace',
		B: '#gtceu:circuits/hv',
		C: 'gtceu:heatproof_machine_casing',
		D: 'gtceu:copper_single_cable'
	}).id('gtceu:shaped/multi_furnace2')

	// Electric Blast Furnace
	event.shaped('gtceu:electric_blast_furnace', [
		'AAA',
		'BCB',
		'DBD'
	], {
		A: 'gtceu:hp_steam_furnace',
		B: '#gtceu:circuits/lv',
		C: 'gtceu:heatproof_machine_casing',
		D: 'gtceu:tin_single_cable'
	}).id('gtceu:shaped/electric_blast_furnace')

	event.shaped('gtceu:electric_blast_furnace', [
		'AAA',
		'BCB',
		'DBD'
	], {
		A: 'gtceu:lv_electric_furnace',
		B: '#gtceu:circuits/lv',
		C: 'gtceu:heatproof_machine_casing',
		D: 'gtceu:tin_single_cable'
	}).id('gtceu:shaped/electric_blast_furnace2')

	// Клей из ТФК клея / Glue from resin
	event.recipes.gtceu.extractor('tfg:glue_from_tfc_glue')
		.itemInputs('tfc:glue')
		.outputFluids(Fluid.of('gtceu:glue', 50))
		.duration(20 * 10)
		.EUt(5)

	event.recipes.gtceu.extractor('tfg:glue_from_sticky_resin')
		.itemInputs('gtceu:sticky_resin')
		.outputFluids(Fluid.of('gtceu:glue', 100))
		.duration(20 * 10)
		.EUt(5)

	event.recipes.gtceu.extractor('tfg:glue_from_conifer_resin')
		.itemInputs('tfg:conifer_rosin')
		.outputFluids(Fluid.of('gtceu:glue', 50))
		.duration(20 * 10)
		.EUt(5)

	event.recipes.gtceu.mixer('tfg:glue_from_bone_meal')
		.itemInputs('minecraft:bone_meal')
		.inputFluids(Fluid.of('tfc:limewater', 500))
		.outputFluids(Fluid.of('gtceu:glue', 50))
		.duration(100)
		.EUt(5)

	// Исправление рецепта пыли серебра стерлинга
	event.remove({ id: 'gtceu:mixer/sterling_silver' })
	generateMixerRecipe(event, ['#forge:dusts/copper', '4x #forge:dusts/silver'], [], '5x gtceu:sterling_silver_dust',
		1, [], 500, 7, 64, 'gtceu:mixer/sterling_silver')

	// Исправление рецепта пыли розовой бронзы
	event.remove({ id: 'gtceu:mixer/rose_gold' })
	generateMixerRecipe(event, ['#forge:dusts/copper', '4x #forge:dusts/gold'], [], '5x gtceu:rose_gold_dust',
		3, [], 500, 7, 64, 'gtceu:mixer/rose_gold')

	//#region Рецепт ULV микросхемы

	event.remove({ id: 'gtceu:shaped/vacuum_tube' })
	event.replaceInput({ id: 'gtceu:assembler/vacuum_tube_plain' }, 'gtceu:steel_bolt', 'gtceu:resin_circuit_board')
	event.replaceInput({ id: 'gtceu:assembler/vacuum_tube_red_alloy' }, 'gtceu:steel_bolt', 'gtceu:resin_circuit_board')
	event.replaceInput({ id: 'gtceu:assembler/vacuum_tube_red_alloy_annealed' }, 'gtceu:steel_bolt', 'gtceu:resin_circuit_board')

	event.recipes.createSequencedAssembly([
		'gtceu:vacuum_tube',
	], 'gtceu:resin_circuit_board', [
		event.recipes.createDeploying('tfg:unfinished_vacuum_tube', ['tfg:unfinished_vacuum_tube', '#forge:bolts/steel']),
		event.recipes.createDeploying('tfg:unfinished_vacuum_tube', ['tfg:unfinished_vacuum_tube', 'gtceu:copper_single_wire']),
		event.recipes.createDeploying('tfg:unfinished_vacuum_tube', ['tfg:unfinished_vacuum_tube', 'gtceu:copper_single_wire']),
		event.recipes.createDeploying('tfg:unfinished_vacuum_tube', ['tfg:unfinished_vacuum_tube', 'gtceu:glass_tube']),
		event.custom({ type: 'vintageimprovements:vacuumizing', ingredients: [{ item: 'tfg:unfinished_vacuum_tube' }], results: [{ item: 'tfg:unfinished_vacuum_tube' }], processingTime: 80 })
	]).transitionalItem('tfg:unfinished_vacuum_tube').loops(1).id('tfg:gtceu/sequenced_assembly/vacuum_tube')

	//#endregion

	//#region Рецепт LV микросхемы

	event.remove({ id: 'gtceu:shaped/electronic_circuit_lv' })

	event.recipes.createSequencedAssembly([
		'gtceu:basic_electronic_circuit',
	], 'gtceu:resin_printed_circuit_board', [
		event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', 'gtceu:resistor']),
		event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', 'gtceu:resistor']),
		event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', 'gtceu:vacuum_tube']),
		event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', 'gtceu:vacuum_tube']),
		event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', 'create:electron_tube']),
		event.recipes.createFilling('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', Fluid.of('gtceu:glue', 50)]),
		event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', '#forge:plates/steel']),
	]).transitionalItem('tfg:unfinished_basic_electronic_circuit').loops(1).id('tfg:gtceu/sequenced_assembly/basic_electronic_circuit')

	event.remove({ id: 'gtceu:shaped/electronic_circuit_mv' })

	event.recipes.createSequencedAssembly([
		'gtceu:good_electronic_circuit',
	], 'gtceu:phenolic_printed_circuit_board', [
		event.recipes.createDeploying('tfg:unfinished_good_electronic_circuit', ['tfg:unfinished_good_electronic_circuit', 'gtceu:diode']),
		event.recipes.createDeploying('tfg:unfinished_good_electronic_circuit', ['tfg:unfinished_good_electronic_circuit', 'gtceu:diode']),
		event.recipes.createDeploying('tfg:unfinished_good_electronic_circuit', ['tfg:unfinished_good_electronic_circuit', '#forge:single_wires/copper']),
		event.recipes.createDeploying('tfg:unfinished_good_electronic_circuit', ['tfg:unfinished_good_electronic_circuit', '#forge:single_wires/copper']),
		event.recipes.createDeploying('tfg:unfinished_good_electronic_circuit', ['tfg:unfinished_good_electronic_circuit', 'gtceu:basic_electronic_circuit']),
		event.recipes.createDeploying('tfg:unfinished_good_electronic_circuit', ['tfg:unfinished_good_electronic_circuit', 'gtceu:basic_electronic_circuit']),
		event.recipes.createDeploying('tfg:unfinished_good_electronic_circuit', ['tfg:unfinished_good_electronic_circuit', 'gtceu:basic_electronic_circuit']),
		event.recipes.createDeploying('tfg:unfinished_good_electronic_circuit', ['tfg:unfinished_good_electronic_circuit', '#forge:plates/steel']),
	]).transitionalItem('tfg:unfinished_good_electronic_circuit').loops(1).id('tfg:gtceu/sequenced_assembly/good_electronic_circuit')

	//#endregion

	//#region Quantum mainframe stack fix.
	//
	// Quantum Mainframes need 48x annealed copper wire but
	// the stacking limit is 32 so instead allow 24x 2x.
	//
	// Frustratingly event.replaceInput doesn't allow for
	// changing item counts, only types.
	event.remove(/gtceu:circuit_assembler\/quantum_mainframe_zpm.*/)
	event.recipes.gtceu.circuit_assembler('quantum_mainframe_zpm')
		.itemInputs(
			'2x gtceu:hssg_frame',
			'2x gtceu:quantum_processor_computer',
			'48x gtceu:smd_capacitor',
			'24x gtceu:smd_inductor',
			'24x gtceu:ram_chip',
			'24x gtceu:annealed_copper_double_wire')
		.inputFluids(Fluid.of('gtceu:tin', 576))
		.itemOutputs('gtceu:quantum_processor_mainframe')
		.duration(800)
		.EUt(7680)

	event.recipes.gtceu.circuit_assembler('quantum_mainframe_zpm_soldering_alloy')
		.itemInputs(
			'2x gtceu:hssg_frame',
			'2x gtceu:quantum_processor_computer',
			'48x gtceu:smd_capacitor',
			'24x gtceu:smd_inductor',
			'24x gtceu:ram_chip',
			'24x gtceu:annealed_copper_double_wire')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
		.itemOutputs('gtceu:quantum_processor_mainframe')
		.duration(800)
		.EUt(7680)

	event.recipes.gtceu.circuit_assembler('quantum_mainframe_zpm_asmd')
		.itemInputs(
			'2x gtceu:hssg_frame',
			'2x gtceu:quantum_processor_computer',
			'12x gtceu:advanced_smd_capacitor',
			'6x gtceu:advanced_smd_inductor',
			'24x gtceu:ram_chip',
			'24x gtceu:annealed_copper_double_wire')
		.inputFluids(Fluid.of('gtceu:tin', 576))
		.itemOutputs('gtceu:quantum_processor_mainframe')
		.duration(800)
		.EUt(7680)

	event.recipes.gtceu.circuit_assembler('quantum_mainframe_zpm_asmd_soldering_alloy')
		.itemInputs(
			'2x gtceu:hssg_frame',
			'2x gtceu:quantum_processor_computer',
			'12x gtceu:advanced_smd_capacitor',
			'6x gtceu:advanced_smd_inductor',
			'24x gtceu:ram_chip',
			'24x gtceu:annealed_copper_double_wire')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
		.itemOutputs('gtceu:quantum_processor_mainframe')
		.duration(800)
		.EUt(7680)
	//#endregion


	// #region Move MV superconductor to early HV instead of post-vac freezer

	event.remove({ id: 'gtceu:shaped/hv_chemical_bath' })
	event.shaped('gtceu:hv_chemical_bath', [
		'ABC',
		'DEA',
		'FGF'
	], {
		A: 'gtceu:hv_conveyor_module',
		B: 'gtceu:tempered_glass',
		C: 'gtceu:gold_single_cable',
		D: 'gtceu:hv_electric_pump',
		// swap one of the tempered glass for a PE pipe to ensure they've finished the plastic part of MV
		E: 'gtceu:polyethylene_normal_fluid_pipe',
		F: '#gtceu:circuits/hv',
		G: 'gtceu:hv_machine_hull'
	}).id('tfg:shaped/hv_chemical_bath')

	event.recipes.gtceu.chemical_bath('tfg:magnesium_diboride_cool_down_distilled_water')
		.itemInputs('gtceu:hot_magnesium_diboride_ingot')
		.inputFluids(Fluid.of('gtceu:distilled_water', 100))
		.itemOutputs('gtceu:magnesium_diboride_ingot')
		.duration(250)
		.EUt(480)

	event.recipes.gtceu.chemical_bath('tfg:magnesium_diboride_cool_down')
		.itemInputs('gtceu:hot_magnesium_diboride_ingot')
		.inputFluids(Fluid.of('minecraft:water', 100))
		.itemOutputs('gtceu:magnesium_diboride_ingot')
		.duration(400)
		.EUt(480)

	// #endregion

	// #region Add all glass colors to macerator/hammer
	removeMaceratorRecipe(event, 'macerate_glass');
	event.recipes.gtceu.macerator("gtceu:macerator/macerate_glass")
		.itemInputs(
			"#forge:glass"
		)
		.itemOutputs("gtceu:glass_dust")
		.duration(20)
		.EUt(2);

	removeMaceratorRecipe(event, 'macerate_glass_pane');
	event.recipes.gtceu.macerator("gtceu:macerator/macerate_glass_pane")
		.itemInputs(
			"#forge:glass_panes"
		)
		.itemOutputs("3x gtceu:tiny_glass_dust")
		.duration(6)
		.EUt(2)

	event.replaceInput({ id: "gtceu:shaped/glass_dust_hammer" },
		"minecraft:glass",
		"#forge:glass"
	);
	// #endregion

	// #region Rich coal processing

	event.recipes.gtceu.coke_oven("tfg:poor_coal_to_coke")
		.itemInputs('2x gtceu:poor_raw_coal')
		.itemOutputs('1x gtceu:coke_gem')
		.outputFluids(Fluid.of('gtceu:creosote', 500))
		.duration(900)

	event.recipes.gtceu.coke_oven("tfg:coal_to_coke")
		.itemInputs('gtceu:raw_coal')
		.itemOutputs('2x gtceu:coke_gem')
		.outputFluids(Fluid.of('gtceu:creosote', 1000))
		.duration(900)

	event.recipes.gtceu.coke_oven("tfg:rich_coal_to_coke")
		.itemInputs('gtceu:rich_raw_coal')
		.itemOutputs('4x gtceu:coke_gem')
		.outputFluids(Fluid.of('gtceu:creosote', 2000))
		.duration(900)

	event.recipes.gtceu.pyrolyse_oven("tfg:rich_coal_to_tar")
		.itemInputs('3x gtceu:rich_raw_coal')
		.chancedOutput('gtceu:dark_ash_dust', 5000, 0)
		.outputFluids(Fluid.of('gtceu:coal_tar', 3000))
		.duration(288)
		.EUt(96)
		.circuit(8)

	event.recipes.gtceu.pyrolyse_oven("tfg:rich_coal_to_coke_creosote")
		.itemInputs('4x gtceu:rich_raw_coal')
		.itemOutputs('16x gtceu:coke_gem')
		.outputFluids(Fluid.of('gtceu:creosote', 8000))
		.duration(576)
		.EUt(64)
		.circuit(1)

	event.recipes.gtceu.pyrolyse_oven("tfg:coal_to_coal_gas")
		.itemInputs('4x gtceu:rich_raw_coal')
		.itemOutputs('16x gtceu:coke_gem')
		.inputFluids(Fluid.of('gtceu:steam'))
		.outputFluids(Fluid.of('gtceu:coal_gas', 4000))
		.duration(288)
		.EUt(96)
		.circuit(22)

	event.recipes.gtceu.pyrolyse_oven("tfg:coal_to_coke_creosote_nitrogen")
		.itemInputs('4x gtceu:rich_raw_coal')
		.itemOutputs('16x gtceu:coke_gem')
		.inputFluids(Fluid.of('gtceu:nitrogen'))
		.outputFluids(Fluid.of('gtceu:creosote', 8000))
		.duration(288)
		.EUt(96)
		.circuit(2)

	event.recipes.gtceu.coke_oven("tfg:raw_coal_to_coke")
		.itemInputs('gtceu:raw_coal')
		.itemOutputs('2x gtceu:coke_gem')
		.outputFluids(Fluid.of('gtceu:creosote', 2000))
		.duration(1710)

	event.recipes.gtceu.pyrolyse_oven("tfg:raw_coal_to_tar")
		.itemInputs('6x gtceu:raw_coal')
		.chancedOutput('gtceu:dark_ash_dust', 5000, 0)
		.outputFluids(Fluid.of('gtceu:coal_tar', 3000))
		.duration(288)
		.EUt(96)
		.circuit(8)

	event.recipes.gtceu.pyrolyse_oven("tfg:raw_coal_to_coke_creosote")
		.itemInputs('8x gtceu:raw_coal')
		.itemOutputs('16x gtceu:coke_gem')
		.outputFluids(Fluid.of('gtceu:creosote', 8000))
		.duration(576)
		.EUt(64)
		.circuit(1)

	event.recipes.gtceu.pyrolyse_oven("tfg:raw_coal_to_coal_gas")
		.itemInputs('8x gtceu:raw_coal')
		.itemOutputs('16x gtceu:coke_gem')
		.inputFluids(Fluid.of('gtceu:steam'))
		.outputFluids(Fluid.of('gtceu:coal_gas', 4000))
		.duration(288)
		.EUt(96)
		.circuit(22)

	event.recipes.gtceu.pyrolyse_oven("tfg:raw_coal_to_coke_creosote_nitrogen")
		.itemInputs('8x gtceu:raw_coal')
		.itemOutputs('16x gtceu:coke_gem')
		.inputFluids(Fluid.of('gtceu:nitrogen'))
		.outputFluids(Fluid.of('gtceu:creosote', 8000))
		.duration(288)
		.EUt(96)
		.circuit(2)

	// #endregion

	// #region Fix TFC hanging sign metal dupe for Macerator and Arc Furnace

	const SIGN_METALS = [
		GTMaterials.Copper,
		GTMaterials.Bronze,
		GTMaterials.BlackBronze,
		GTMaterials.BismuthBronze,
		GTMaterials.WroughtIron,
		GTMaterials.Steel,
		GTMaterials.BlackSteel,
		GTMaterials.RedSteel,
		GTMaterials.BlueSteel
	];

	SIGN_METALS.forEach(metal => {
		// Arc furnace
		global.TFC_WOOD_TYPES.forEach(wood => {
			event.remove(`gtceu:arc_furnace/arc_wood/hanging_sign/${metal.getName()}/${wood}`)
			event.recipes.gtceu.arc_furnace(`gtceu:arc_furnace/macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemInputs(`tfc:wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemOutputs('gtceu:tiny_ash_dust')
				.chancedOutput(ChemicalHelper.get(TagPrefix.nugget, metal, 1), 3750, 0)
				.inputFluids(Fluid.of('gtceu:oxygen', 12))
				.duration(12)
				.EUt(30)
				.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		})

		global.AFC_WOOD_TYPES.forEach(wood => {
			event.recipes.gtceu.arc_furnace(`gtceu:arc_furnace/macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemInputs(`afc:wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemOutputs('gtceu:tiny_ash_dust')
				.chancedOutput(ChemicalHelper.get(TagPrefix.nugget, metal, 1), 3750, 0)
				.inputFluids(Fluid.of('gtceu:oxygen', 12))
				.duration(12)
				.EUt(30)
				.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		})

		// Macerator
		global.TFC_HARDWOOD_TYPES.forEach(wood => {
			removeMaceratorRecipe(event, `macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
			event.recipes.gtceu.macerator(`gtceu:macerator/macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemInputs(`tfc:wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemOutputs('gtceu:hardwood_dust')
				.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, metal, 1), 3750, 0)
				.duration(108)
				.EUt(8)
				.category(GTRecipeCategories.MACERATOR_RECYCLING)
		})

		global.TFC_SOFTWOOD_TYPES.forEach(wood => {
			removeMaceratorRecipe(event, `macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
			event.recipes.gtceu.macerator(`gtceu:macerator/macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemInputs(`tfc:wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemOutputs('gtceu:wood_dust')
				.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, metal, 1), 3750, 0)
				.duration(108)
				.EUt(8)
				.category(GTRecipeCategories.MACERATOR_RECYCLING)
		})

		global.AFC_HARDWOOD_TYPES.forEach(wood => {
			event.recipes.gtceu.macerator(`gtceu:macerator/macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemInputs(`afc:wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemOutputs('gtceu:hardwood_dust')
				.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, metal, 1), 3750, 0)
				.duration(108)
				.EUt(8)
				.category(GTRecipeCategories.MACERATOR_RECYCLING)
		})

		global.AFC_SOFTWOOD_TYPES.forEach(wood => {
			event.recipes.gtceu.macerator(`gtceu:macerator/macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemInputs(`afc:wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemOutputs('gtceu:wood_dust')
				.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, metal, 1), 3750, 0)
				.duration(108)
				.EUt(8)
				.category(GTRecipeCategories.MACERATOR_RECYCLING)
		})
	})
	// #endregion

	//#region Voiding covers

	event.replaceInput({ id: 'gtceu:shaped/cover_fluid_voiding' },
		'minecraft:ender_pearl', 'ae2:ender_dust');

	event.replaceInput({ id: 'gtceu:assembler/cover_fluid_voiding' },
		'minecraft:ender_pearl', 'ae2:ender_dust');

	event.replaceInput({ id: 'gtceu:shaped/cover_item_voiding' },
		'minecraft:ender_pearl', 'ae2:ender_dust');

	event.replaceInput({ id: 'gtceu:assembler/cover_item_voiding' },
		'minecraft:ender_pearl', 'ae2:ender_dust');

	//#endregion

	// #region Treated Wood

	event.shaped('2x gtceu:treated_wood_door', [
		'AA ',
		'AA ',
		'AA '
	], {
		A: 'gtceu:treated_wood_plate'
	}).id('tfg:shaped/treated_door')

	event.shaped('3x gtceu:treated_wood_trapdoor', [
		'AAA',
		'AAA',
		'   '
	], {
		A: 'gtceu:treated_wood_plate'
	}).id('tfg:shaped/treated_trapdoor')

	// #endregion

	// #region Rubber Processing Line
	event.recipes.firmalife.vat()
		.inputs('tfc:powder/sulfur', Fluid.of('tfg:latex', 1000))
		.outputFluid(Fluid.of('tfg:vulcanized_latex', 1000))
		.length(300)
		.temperature(300)
		.id('tfg:vat/vulcanized_latex')

	event.recipes.tfc.pot('tfc:powder/sulfur', Fluid.of('tfg:latex', 1000), 1200, 300)
		.fluidOutput(Fluid.of('tfg:vulcanized_latex', 1000))
		.id('tfg:pot/vulcanized_latex')

	event.recipes.gtceu.chemical_reactor('tfg:latex_to_vulcanized_latex')
		.duration(100)
		.EUt(20)
		.itemInputs('tfc:powder/sulfur')
		.inputFluids(Fluid.of('tfg:latex', 1000))
		.outputFluids(Fluid.of('tfg:vulcanized_latex', 1000))

	event.recipes.gtceu.fluid_solidifier('tfg:vulcanized_latex_to_raw_rubber_pulp')
		.duration(100)
		.EUt(20)
		.inputFluids(Fluid.of('tfg:vulcanized_latex', 1000))
		.itemOutputs('4x gtceu:raw_rubber_dust')

	// #endregion

	// #region Primitive protection

	event.recipes.tfc.barrel_sealed(2000)
		.outputItem('tfg:prepared_leather_gloves')
		.inputs('tfchotornot:mittens', Fluid.of('tfc:vinegar', 1000))
		.id('tfg:sealed_barrel/prepared_leather_gloves')

	event.recipes.firmalife.vat()
		.outputItem('tfg:latex_soaked_gloves')
		.inputs('tfg:prepared_leather_gloves', Fluid.of('tfg:vulcanized_latex', 1000))
		.length(300)
		.temperature(200)
		.id('tfg:vat/latex_soaked_gloves')

	event.recipes.firmalife.oven('tfg:latex_soaked_gloves', 120, 1200, 'gtceu:rubber_gloves')
		.id('tfg:oven/rubber_gloves')

	event.remove({ id: 'gtceu:shaped/rubber_gloves' })

	event.recipes.gtceu.alloy_smelter('rubber_gloves_alloy_smelter')
		.itemInputs('2x #forge:plates/rubber')
		.notConsumable('create:brass_hand')
		.itemOutputs('gtceu:rubber_gloves')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])
		.category(GTRecipeCategories.INGOT_MOLDING)


	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('gtceu:face_mask', [
			'ACA',
			'ABA',
			' D '
		], {
			A: '#forge:string',
			B: '#forge:cloth',
			C: 'minecraft:paper',
			D: '#tfc:sewing_needles'
		})
	).id('gtceu:shaped/face_mask')

	event.recipes.gtceu.assembler('assemble_face_mask')
		.itemInputs('4x #forge:string', '#forge:cloth', 'minecraft:paper')
		.itemOutputs('gtceu:face_mask')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])
		.circuit(7)

	// #endregion

	event.replaceInput({ id: 'gtceu:shaped/nightvision_goggles' }, 'gtceu:glass_lens', 'tfc:lens')
	event.replaceInput({ id: 'gtceu:shaped/nightvision_goggles' }, 'gtceu:lv_sodium_battery', '#gtceu:batteries/lv')

	event.replaceInput({ id: 'gtceu:shaped/note_block' }, 'minecraft:iron_bars', '#tfg:metal_bars')
	event.replaceInput({ id: 'gtceu:shaped/note_block' }, 'gtceu:wood_plate', '#tfc:lumber')

	event.replaceInput({ mod: 'gtceu' }, 'minecraft:sugar', '#tfg:sugars')
	event.replaceInput({ mod: 'gtceu' }, 'minecraft:string', '#forge:string')

	event.replaceInput({ id: 'gtceu:shaped/blacklight' }, 'gtceu:tungsten_carbide_screw', '#tfg:components/uv_leds')

	event.recipes.gtceu.fluid_solidifier('tfg:solidify_glue')
		.inputFluids(Fluid.of('gtceu:glue', 50))
		.notConsumable('gtceu:ball_casting_mold')
		.itemOutputs('tfc:glue')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.centrifuge('tfg:centrifuge_rosin')
		.itemInputs('tfg:conifer_rosin')
		.outputFluids(Fluid.of('gtceu:glue', 50))
		.itemOutputs('2x #forge:dusts/carbon')
		.chancedOutput('gtceu:plant_ball', 7500, 0)
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.centrifuge('tfg:centrifuge_sticky_resin')
		.itemInputs('gtceu:sticky_resin')
		.outputFluids(Fluid.of('gtceu:glue', 100))
		.itemOutputs('3x #forge:dusts/carbon')
		.chancedOutput('gtceu:plant_ball', 5000, 0)
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.chemical_reactor(`tfg:treat_latex_plants_into_latex`)
		.itemInputs('16x #tfg:rubber_plants', 'gtceu:tiny_sodium_hydroxide_dust')
		.circuit(1)
		.outputFluids(Fluid.of('tfg:latex', 1000))
		.duration(200)
		.EUt(20)

	event.recipes.createSequencedAssembly([
		'gtceu:ulv_voltage_coil',
	], 'gtceu:magnetic_iron_rod', [
		event.recipes.createDeploying('gtceu:magnetic_iron_rod', ['gtceu:magnetic_iron_rod', '#forge:fine_wires/lead'])
	]).transitionalItem('gtceu:magnetic_iron_rod').loops(32).id('tfg:sequenced_assembly/ulv_voltage_coil')

	//#endregion

	//#region Steam Bloomery

	event.recipes.gtceu.steam_bloomery('steam_raw_iron_bloom_coal')
		.itemInputs('#forge:ingots/iron', '#tfc:steam_bloomery_basic_fuels')
		.itemOutputs('tfc:raw_iron_bloom')
		.duration(2400)
		.EUt(2)

	event.recipes.gtceu.steam_bloomery('steam_raw_iron_bloom_coalcoke')
		.itemInputs('2x #forge:ingots/iron', '#tfc:blast_furnace_fuel')
		.itemOutputs('2x tfc:raw_iron_bloom')
		.duration(2400)
		.EUt(2)

	forEachMaterial(material => {

		const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY)
		if (tfcProperty === null)
			return;

		const outputMaterial = tfcProperty.getOutputMaterial() === null ? material : tfcProperty.getOutputMaterial()
		if (outputMaterial === GTMaterials.Iron) {
			event.recipes.gtceu.steam_bloomery(`steam_raw_iron_bloom_coal_${material.getName()}`)
				.itemInputs(ChemicalHelper.get(TagPrefix.dust, material, 1), '#tfc:steam_bloomery_basic_fuels')
				.itemOutputs('tfc:raw_iron_bloom')
				.duration(2400)
				.EUt(2)

			event.recipes.gtceu.steam_bloomery(`steam_raw_iron_bloom_coalcoke_${material.getName()}`)
				.itemInputs(ChemicalHelper.get(TagPrefix.dust, material, 2), '#tfc:blast_furnace_fuel')
				.itemOutputs('2x tfc:raw_iron_bloom')
				.duration(2400)
				.EUt(2)
		}
	})

	//#endregion

	//#region Stick Packing

	event.recipes.gtceu.packer('tfg:stick_bunch')
		.itemInputs('9x #forge:rods/wooden')
		.circuit(5)
		.itemOutputs('tfc:stick_bunch')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.packer('tfg:stick_bundle')
		.itemInputs('18x #forge:rods/wooden')
		.circuit(8)
		.itemOutputs('tfc:stick_bundle')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	//#endregion

	// Fix Snow in Compressor

	event.remove({ id: 'gtceu:compressor/snowballs_to_snow' })
	event.recipes.gtceu.compressor('gtceu:compressor/snowballs_to_snow_fixed')
		.itemInputs('8x minecraft:snowball')
		.itemOutputs('minecraft:snow_block')
		.duration(20 * 10)
		.EUt(2)

	//#region Changing tiers of decomposition recipes

	event.recipes.gtceu.electrolyzer('gtceu:decomposition_electrolyzing_clay')
		.itemInputs('13x #forge:dusts/clay')
		.itemOutputs('2x #forge:dusts/sodium', '1x #forge:dusts/lithium', '2x #forge:dusts/aluminium', '2x #forge:dusts/silicon')
		.outputFluids(Fluid.of('minecraft:water', 6000))
		.duration(GTMaterials.Clay.getMass() * 13)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.centrifuge('gtceu:stone_dust_separation')
		.itemInputs('gtceu:stone_dust')
		.chancedOutput('#forge:small_dusts/quartzite', 2500, 0)
		.chancedOutput('#forge:small_dusts/potassium_feldspar', 2500, 0)
		.chancedOutput('#forge:small_dusts/marble', 2222, 0)
		.chancedOutput('#forge:small_dusts/biotite', 1111, 0)
		.chancedOutput('#forge:small_dusts/metal_mixture', 825, 80)
		.chancedOutput('#forge:small_dusts/sodalite', 550, 55)
		.duration(12 * 20)
		.EUt(GTValues.VA[GTValues.HV])


	//#endregion

	//#region Tape

	event.shaped('gtceu:basic_tape', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'minecraft:paper',
		B: 'tfc:glue'
	}).id('tfg:shaped/basic_tape_from_glue')

	event.recipes.gtceu.assembler('basic_tape_from_glue')
		.itemInputs('2x minecraft:paper', 'tfc:glue')
		.itemOutputs('2x gtceu:basic_tape')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	//#endregion 

	//#region glowstone
	event.recipes.gtceu.alloy_blast_smelter('abs:liquid_glowstone')
		.itemInputs('#forge:dusts/gold', '#forge:dusts/redstone', '#forge:dusts/sulfur')
		.outputFluids(Fluid.of('gtceu:glowstone', 288))
		.duration(20 * 60 / 1.3)
		.EUt(GTValues.VA[GTValues.LV])
		.blastFurnaceTemp(1064)
		.circuit(9)
	//#endregion


	//#region Large boilers fuel rebalance

	// Balance is based on adjusting to match singeblock boiler efficiency
	// High Pressure Steam Solid Boiler produces 288,000 mB steam/coke
	// High Pressure Steam Liquid Boiler produces 432 mB steam/creosote
	// By Defualt: Large Bronze Boiler produces 50mB steam/creosote, 32000mB steam/coke
	// This is a factor of 9x for solids, 8.64x for liquids
	// Large boiler fuel burn time is multiplied by 9, resulting in less fuel used over time for the same amount of steam produced per tick

	event.findRecipes({ id: /^gtceu:large_boiler\/.*/, type: "gtceu:large_boiler" }).forEach(large_boiler_recipe => {

		let recipe_duration = large_boiler_recipe.json.getAsJsonPrimitive("duration").asInt

		large_boiler_recipe.json.remove("duration")
		large_boiler_recipe.json.add("duration", recipe_duration * 9)
	})

	//#endregion


	//#region GT Facades
	event.remove({ id: 'gtceu:crafting/facade_cover' })

	event.shapeless(Item.of('gtceu:facade_cover', 8, '{Facade: {Count:1b,id:"minecraft:stone"}}'), ['3x #forge:plates/iron', "#tfg:whitelisted/facades"])
		.modifyResult((craftingGrid, result) => {
			let blockID = craftingGrid.find(Ingredient.of("#tfg:whitelisted/facades")).id

			let facadeNBT = `{Facade: {Count:1b,id:` + `'${blockID}'` + `}}`
			result.nbt = facadeNBT
			return result;
		}).id('gtceu:facade_cover');

	event.shapeless(Item.of('gtceu:facade_cover', 32, '{Facade: {Count:1b,id:"minecraft:stone"}}'), ['3x #forge:plates/titanium', "#tfg:whitelisted/facades"])
		.modifyResult((craftingGrid, result) => {
			let blockID = craftingGrid.find(Ingredient.of("#tfg:whitelisted/facades")).id

			let facadeNBT = `{Facade: {Count:1b,id:` + `'${blockID}'` + `}}`
			result.nbt = facadeNBT
			return result;
		}).id('gtceu:facade_cover32');
	//#endregion

	event.recipes.gtceu.laser_engraver('tfg:diamond_gear')
		.itemInputs('4x #forge:plates/diamond')
		.itemOutputs('#forge:gears/diamond')
		.notConsumable('gtceu:glass_lens')
		.duration(200)
		.EUt(GTValues.VA[GTValues.MV])

	//#region Rose Quartz fabrication + decomposition
	event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_chromatic_compound' });
	event.remove({ id: 'gtceu:autoclave/autoclave_dust_rose_quartz_water' })
	event.remove({ id: 'gtceu:autoclave/autoclave_dust_rose_quartz_distilled' })

	generateMixerRecipe(event, ['gtceu:nether_quartz_dust', '8x minecraft:redstone'], [], '9x gtceu:rose_quartz_dust', 2, [], 180, 60, 64, 'rose_quartz_dust_mixing')
	generateMixerRecipe(event, ['gtceu:tiny_nether_quartz_dust', '8x gtceu:tiny_redstone_dust'], [], 'gtceu:rose_quartz_dust', 2, [], 20, 60, 64, 'tiny_rose_quartz_dust_mixing')

	event.recipes.gtceu.autoclave("autoclave_dust_rose_quartz_ice")
		.itemInputs('#forge:dusts/rose_quartz')
		.inputFluids(Fluid.of("gtceu:ice", 144))
		.itemOutputs("#forge:gems/rose_quartz")
		.duration(2000)
		.EUt(120)

	event.recipes.gtceu.electrolyzer('electrolyze_rose_quartz_dust')
		.itemInputs('9x gtceu:rose_quartz_dust')
		.itemOutputs('1x gtceu:nether_quartz_dust', '8x minecraft:redstone')
		.duration(7 * 20)
		.EUt(60)
	//#endregion

	//#region Multiblock Tanks

	event.recipes.gtceu.assembler('tfg:assembler/wood_wall')
		.itemInputs('4x #forge:treated_wood', ChemicalHelper.get(TagPrefix.plate, GTMaterials.Copper, 1))
		.itemOutputs('gtceu:wood_wall')
		.circuit(4)
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('tfg:assembler/wooden_multiblock_tank')
		.itemInputs('gtceu:wood_wall', ChemicalHelper.get(TagPrefix.ring, GTMaterials.Copper, 2))
		.itemOutputs('gtceu:wooden_multiblock_tank')
		.circuit(4)
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('tfg:assembler/wooden_tank_valve')
		.itemInputs('gtceu:wood_wall', ChemicalHelper.get(TagPrefix.ring, GTMaterials.Copper, 1), ChemicalHelper.get(TagPrefix.rotor, GTMaterials.Copper, 1))
		.itemOutputs('gtceu:wooden_tank_valve')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('tfg:assembler/steel_multiblock_tank')
		.itemInputs('gtceu:solid_machine_casing', ChemicalHelper.get(TagPrefix.ring, GTMaterials.Steel, 2))
		.itemOutputs('gtceu:steel_multiblock_tank')
		.circuit(4)
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('tfg:assembler/steel_tank_valve')
		.itemInputs('gtceu:solid_machine_casing', ChemicalHelper.get(TagPrefix.ring, GTMaterials.Steel, 1), ChemicalHelper.get(TagPrefix.rotor, GTMaterials.Steel, 1))
		.itemOutputs('gtceu:steel_tank_valve')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

	//#endregion

	event.smelting('minecraft:iron_ingot', '#forge:ingots/wrought_iron')
		.id('tfg:revert_wrought_iron_ingot')

	event.replaceOutput({ id: 'gtceu:distillery/distill_biomass_to_water' }, 'gtceu:wood_dust', 'gtceu:carbon_dust')
	event.replaceOutput({ id: 'gtceu:distillery/distill_biomass_to_ethanol' }, 'gtceu:wood_dust', 'gtceu:carbon_dust')
	event.replaceOutput({ id: 'gtceu:distillation_tower/distill_biomass' }, 'gtceu:wood_dust', 'gtceu:carbon_dust')

	//#region Circuit Fixes

	global.ADD_CIRCUIT.forEach(item => {
		addCircuitToRecipe(event, item.recipeId, item.circuitNumber)
	})

	//#endregion

	//#region Chemical Reaction for Solar Panel

	event.recipes.gtceu.chemical_reactor('tfg:chlorine_pentafluoride')
		.inputFluids(Fluid.of('gtceu:fluorine', 5000), Fluid.of('gtceu:chlorine', 1000))
		.outputFluids(Fluid.of('tfg:chlorine_pentafluoride', 1000))
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('tfg:chloryl_fluoride')
		.inputFluids(Fluid.of('tfg:chlorine_pentafluoride', 1000), Fluid.of('minecraft:water', 2000))
		.outputFluids(Fluid.of('tfg:chloryl_fluoride', 1000), Fluid.of('gtceu:hydrofluoric_acid', 4000))
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.large_chemical_reactor('tfg:solar_coolant')
		.inputFluids(Fluid.of('tfg:chloryl_fluoride', 3000), Fluid.of('gtceu:helium_3', 8000), Fluid.of('minecraft:water', 8000))
		.outputFluids(Fluid.of('tfg:solar_coolant', 1000), Fluid.of('gtceu:hydrofluoric_acid', 3000), Fluid.of('gtceu:hypochlorous_acid', 3000))
		.duration(20 * 5)
		.EUt(GTValues.VH[GTValues.EV])

	event.recipes.gtceu.large_chemical_reactor('tfg:solar_coolant_t2')
		.inputFluids(Fluid.of('tfg:solar_coolant', 8000), Fluid.of('gtceu:argon', 1000))
		.itemInputs(Item.of('#forge:aerogels'))
		.outputFluids(Fluid.of('tfg:solar_coolant_tier2', 8000))
		.duration(20 * 15)
		.EUt(GTValues.VH[GTValues.IV])

	//#endregion

	event.replaceInput({ id: 'gtceu:shaped/powderbarrel' }, 'gtceu:wood_plate', '#tfc:lumber')

	event.shaped('gtceu:treated_wood_pressure_plate', [
		' B ',
		'CDC',
		' E '
	], {
		B: '#tfc:hammers',
		C: 'gtceu:treated_wood_slab',
		D: '#forge:small_springs',
		E: '#forge:tools/screwdrivers'
	}).id('gtceu:shaped/treated_pressure_plate')

	event.recipes.gtceu.assembler('gtceu:treated_pressure_plate')
		.itemInputs('#forge:small_springs', '2x gtceu:treated_wood_slab')
		.itemOutputs('gtceu:treated_wood_pressure_plate')
		.circuit(3)
		.duration(50)
		.EUt(2)

	// Matches

	event.shapeless('4x gtceu:matches', ['#forge:dusts/phosphorus', 'tfc:glue', '4x #forge:bolts/wood'])
		.id('tfg:shapeless/phosphorus_matches')

	event.shapeless('4x gtceu:matches', ['#forge:dusts/tricalcium_phosphate', 'tfc:glue', '4x #forge:bolts/wood'])
		.id('tfg:shapeless/tricalcium_phosphate_matches')

	event.shapeless(Item.of('gtceu:matchbox', '{usesLeft:8}'), ['minecraft:paper', '8x gtceu:matches'])
		.id('tfg:shapeless/matchbox')


	event.remove({ id: 'gtceu:chemical_reactor/nano_cpu_wafer' })
	event.remove({ id: 'gtceu:large_chemical_reactor/nano_cpu_wafer' })
		
	event.recipes.gtceu.chemical_reactor('tfg:nano_cpu_wafer')
		.inputFluids(Fluid.of('gtceu:tritiated_water', 576))
		.itemInputs('gtceu:cpu_wafer', '16x gtceu:carbon_fibers')
		.itemOutputs('gtceu:nano_cpu_wafer')
		.duration(20*60)
		.EUt(GTValues.VA[GTValues.EV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.remove({ id: 'gtceu:chemical_reactor/soda_ash_from_carbon_dioxide' })
	event.remove({ id: 'gtceu:large_chemical_reactor/soda_ash_from_carbon_dioxide' })

	event.recipes.gtceu.implosion_compressor('tfg:dense_lead_plate')
		.itemInputs('16x #forge:ingots/lead', '16x #forge:ingots/lead', '6x #forge:ingots/lead')
		.itemInputs('gtceu:industrial_tnt')
		.itemOutputs('4x #forge:dense_plates/lead')
		.duration(20 * 1)
		.EUt(GTValues.VA[GTValues.LV])
	
	// Remove Plutonium from centrifuging Uranium dust
	
	event.remove({ id: 'gtceu:centrifuge/uranium_238_separation' })
	
	event.recipes.gtceu.centrifuge('tfg:uranium_238_separation')
		.itemInputs('#forge:dusts/uranium')
		.chancedOutput('#forge:tiny_dusts/uranium_235', 2300, 0)
		.duration(20*40)
		.EUt(GTValues.VA[GTValues.HV])
	
	// Change the Large Centrifugal Unit to be craftable at EV

	event.remove({ id: 'gtceu:shaped/large_centrifuge' })

	event.shaped('gtceu:large_centrifuge', [
		'EFE',
		'ADA',
		'BCB'
	], {
		A: '#gtceu:circuits/ev',
		B: 'gtceu:ev_electric_motor',
		C: 'gtceu:aluminium_single_cable',
		D: 'gtceu:ev_centrifuge',
		E: 'gtceu:molybdenum_disilicide_spring',
		F: 'gtceu:stainless_steel_huge_fluid_pipe'
	}).id('tfg:shaped/large_centrifuge')

	event.recipes.gtceu.chemical_reactor('tfg:wood_ash_to_wood_gas_air')
		.itemInputs('8x tfc:powder/wood_ash')
		.inputFluids(Fluid.of('gtceu:air', 100))
		.outputFluids('gtceu:wood_gas 100')
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.LV])

	event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv_asmd_soldering_alloy'})
	event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv'})
	event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv_soldering_alloy'})
	event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv_asmd'})

	event.recipes.gtceu.circuit_assembler('tfg:circuit_assembler/mainframe_iv')
		.itemInputs('2x gtceu:aluminium_frame', '2x gtceu:micro_processor_computer', '8x #gtceu:inductors', '16x #gtceu:capacitors', 'gtceu:nano_cpu_chip', '16x gtceu:annealed_copper_single_wire')
		.inputFluids(Fluid.of('gtceu:tin', 576))
		.itemOutputs('gtceu:micro_processor_mainframe')
		.duration(20 * 40)
		.EUt(GTValues.VA[GTValues.HV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.circuit_assembler('tfg:circuit_assembler/mainframe_iv_soldering_alloy')
		.itemInputs('2x gtceu:aluminium_frame', '2x gtceu:micro_processor_computer', '8x #gtceu:inductors', '16x #gtceu:capacitors', 'gtceu:nano_cpu_chip', '16x gtceu:annealed_copper_single_wire')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
		.itemOutputs('gtceu:micro_processor_mainframe')
		.duration(20 * 40)
		.EUt(GTValues.VA[GTValues.HV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.circuit_assembler('tfg:circuit_assembler/mainframe_iv_asmd')
		.itemInputs('2x gtceu:aluminium_frame', '2x gtceu:micro_processor_computer', '2x gtceu:advanced_smd_inductor', '4x gtceu:advanced_smd_capacitor', 'gtceu:nano_cpu_chip', '16x gtceu:annealed_copper_single_wire')
		.inputFluids(Fluid.of('gtceu:tin', 576))
		.itemOutputs('gtceu:micro_processor_mainframe')
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.HV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.circuit_assembler('tfg:circuit_assembler/mainframe_iv_asmd_soldering_alloy')
		.itemInputs('2x gtceu:aluminium_frame', '2x gtceu:micro_processor_computer', '2x gtceu:advanced_smd_inductor', '4x gtceu:advanced_smd_capacitor', 'gtceu:nano_cpu_chip', '16x gtceu:annealed_copper_single_wire')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
		.itemOutputs('gtceu:micro_processor_mainframe')
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.HV])
		.cleanroom(CleanroomType.CLEANROOM)

	// Buttons
	removeCutterRecipe(event, 'blackstone_button')
	removeCutterRecipe(event, 'blackstone_button_water')
	removeCutterRecipe(event, 'blackstone_button_distilled_water')
	removeCutterRecipe(event, 'cut_polished_blackstone_brickslab_into_button')
	removeCutterRecipe(event, 'cut_polished_blackstone_brickslab_into_button_water')
	removeCutterRecipe(event, 'cut_polished_blackstone_brickslab_into_button_distilled_water')

	event.recipes.gtceu.cutter('tfg:blackstone_button')
		.itemInputs('minecraft:polished_blackstone_pressure_plate')
		.itemOutputs('6x minecraft:polished_blackstone_button')
		.EUt(7)
		.duration(100)


	event.replaceOutput({ id: 'gtceu:cutter/bamboo_button' }, 'minecraft:bamboo_button', '6x minecraft:bamboo_button')
	event.replaceOutput({ id: 'gtceu:cutter/bamboo_button_water' }, 'minecraft:bamboo_button', '6x minecraft:bamboo_button')
	event.replaceOutput({ id: 'gtceu:cutter/bamboo_button_distilled_water' }, 'minecraft:bamboo_button', '6x minecraft:bamboo_button')

	event.replaceOutput({ id: 'gtceu:cutter/treated_button' }, 'gtceu:treated_wood_button', '6x gtceu:treated_wood_button')
	event.replaceOutput({ id: 'gtceu:cutter/treated_button_water' }, 'gtceu:treated_wood_button', '6x gtceu:treated_wood_button')
	event.replaceOutput({ id: 'gtceu:cutter/treated_button_distilled_water' }, 'gtceu:treated_wood_button', '6x gtceu:treated_wood_button')

	//#region Replace Recipe

	event.remove({ id: 'gtceu:assembly_line/me_pattern_buffer_proxy' })
	event.recipes.gtceu.assembly_line('tfg:me_pattern_buffer_proxy')
		.itemInputs(
			'gtceu:luv_machine_hull',
			'2x gtceu:luv_sensor',
			'#gtceu:circuits/luv',
			'gtceu:fusion_glass',
			'2x ae2:quantum_ring',
			// tom insists on keeping this jank, it feels like a bug to me but apparently it's "intended base gt behaviour"
			'32x gtceu:fine_europium_wire',
			'32x gtceu:fine_europium_wire',
			'16x megacells:accumulation_processor')
		.inputFluids(Fluid.of('gtceu:lubricant', 500))
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144 * 4))
		.stationResearch(b => b.researchStack(Item.of('gtceu:me_pattern_buffer')).EUt(GTValues.VA[GTValues.LuV]).CWUt(32))
		.itemOutputs('gtceu:me_pattern_buffer_proxy')
		.duration(30 * 20)
		.EUt(GTValues.VA[GTValues.ZPM])

	event.replaceInput({ id: 'gtceu:assembly_line/me_pattern_buffer' }, 'ae2:pattern_provider', '3x expatternprovider:ex_pattern_provider')
	event.replaceInput({ id: 'gtceu:assembly_line/me_pattern_buffer' }, 'ae2:interface', '3x expatternprovider:oversize_interface')

	event.replaceInput({ id: 'gtceu:shaped/large_combustion_engine' }, '#gtceu:circuits/iv', '#gtceu:circuits/ev')
	event.replaceInput({ id: 'gtceu:shaped/nano_chestplate_advanced' }, '#gtceu:circuits/iv', '#gtceu:circuits/ev')
	event.replaceInput({ id: 'gtceu:assembler/ev_large_miner' }, '#gtceu:circuits/iv', '#gtceu:circuits/ev')

	// the recycling fix only works if the addMaterialInfo() is on the shaped recipe, NOT the assembler
	removeMaceratorRecipe(event, 'macerate_palladium_substation')
	event.recipes.gtceu.shaped('gtceu:palladium_substation', [
		'AAA',
		' B ',
		'AAA'
	], {
		A: ChemicalHelper.get(TagPrefix.plate, GTMaterials.Palladium, 1),
		B: ChemicalHelper.get(TagPrefix.frameGt, GTMaterials.Ultimet, 1)
	}).addMaterialInfo().id('tfg:shaped/casing_palladium_substation')

	event.recipes.gtceu.assembler('casing_palladium_substation')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.plate, GTMaterials.Palladium, 6),
			ChemicalHelper.get(TagPrefix.frameGt, GTMaterials.Ultimet, 1)
		)
		.itemOutputs('gtceu:palladium_substation')
		.duration(20 * 2.5)
		.circuit(6)
		.EUt(GTValues.VA[GTValues.LV])

	
	removeMaceratorRecipe(event, 'macerate_power_substation')
	event.recipes.gtceu.shaped('gtceu:power_substation', [
		'ABA',
		'CDC',
		'ABA'
	], {
		A: 'gtceu:lapotron_crystal',
		B: 'gtceu:mpic_chip',
		C: '#gtceu:circuits/ev',
		D: 'gtceu:palladium_substation'
	}).addMaterialInfo().id('gtceu:shaped/power_substation')

	event.replaceInput({ id: 'gtceu:assembler/field_generator_hv' }, 'gtceu:quantum_eye', 'tfg:cryo_fluix_pearl')
	event.replaceInput({ id: 'gtceu:assembler/field_generator_ev' }, 'minecraft:nether_star', 'gtceu:quantum_eye')
	event.replaceInput({ id: 'gtceu:assembler/field_generator_iv' }, 'gtceu:quantum_star', 'minecraft:nether_star')

	event.recipes.gtceu.shaped('gtceu:hv_field_generator', [
		'ABA',
		'CDC',
		'ABA'
	], {
		A: ChemicalHelper.get(TagPrefix.wireGtQuadruple, GTMaterials.MercuryBariumCalciumCuprate , 1),
		B: ChemicalHelper.get(TagPrefix.plate, GTMaterials.StainlessSteel, 1),
		C: '#gtceu:circuits/hv',
		D: 'tfg:cryo_fluix_pearl'
	}).addMaterialInfo().id('gtceu:shaped/field_generator_hv')

	event.recipes.gtceu.shaped('gtceu:ev_field_generator', [
		'ABA',
		'CDC',
		'ABA'
	], {
		A: ChemicalHelper.get(TagPrefix.wireGtQuadruple, GTMaterials.UraniumTriplatinum , 1),
		B: ChemicalHelper.get(TagPrefix.plateDouble, GTMaterials.Titanium, 1),
		C: '#gtceu:circuits/ev',
		D: 'gtceu:quantum_eye'
	}).addMaterialInfo().id('gtceu:shaped/field_generator_ev')

	event.recipes.gtceu.shaped('gtceu:iv_field_generator', [
		'ABA',
		'CDC',
		'ABA'
	], {
		A: ChemicalHelper.get(TagPrefix.wireGtQuadruple, GTMaterials.SamariumIronArsenicOxide , 1),
		B: ChemicalHelper.get(TagPrefix.plateDouble, GTMaterials.TungstenSteel, 1),
		C: '#gtceu:circuits/iv',
		D: 'minecraft:nether_star'
	}).addMaterialInfo().id('gtceu:shaped/field_generator_iv')

	event.remove({ id: 'gtceu:chemical_bath/quantum_eye' })
	event.recipes.gtceu.chemical_bath('tfg:quantum_eye')
		.itemInputs('tfg:cryo_fluix_pearl')
		.inputFluids(Fluid.of('gtceu:radon', 250))
		.itemOutputs('gtceu:quantum_eye')
		.duration(20 * 24)
		.EUt(GTValues.VA[GTValues.HV])

	// Modify Rotor Holder to require an Assembler

	event.remove({ id: 'gtceu:shaped/rotor_holder_hv' })
	event.remove({ id: 'gtceu:shaped/rotor_holder_ev' })
	event.remove({ id: 'gtceu:shaped/rotor_holder_iv' })
	event.remove({ id: 'gtceu:shaped/rotor_holder_luv' })
	event.remove({ id: 'gtceu:shaped/rotor_holder_zpm' })
	event.remove({ id: 'gtceu:shaped/rotor_holder_uv' })

	event.recipes.gtceu.assembler('tfg:rotor_holder_hv')
		.itemInputs('4x #forge:gears/black_steel', '4x #forge:small_gears/stainless_steel', 'gtceu:hv_machine_hull')
		.itemOutputs('gtceu:hv_rotor_holder')
		.duration(20 * 6)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.assembler('tfg:rotor_holder_ev')
		.itemInputs('4x #forge:gears/ultimet', '4x #forge:small_gears/titanium', 'gtceu:ev_machine_hull')
		.itemOutputs('gtceu:ev_rotor_holder')
		.duration(20 * 6)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.assembler('tfg:rotor_holder_iv')
		.itemInputs('4x #forge:gears/hssg', '4x #forge:small_gears/tungsten_steel', 'gtceu:iv_machine_hull')
		.itemOutputs('gtceu:iv_rotor_holder')
		.duration(20 * 6)
		.EUt(GTValues.VA[GTValues.IV])

	event.recipes.gtceu.assembler('tfg:rotor_holder_luv')
		.itemInputs('4x #forge:gears/ruthenium', '4x #forge:small_gears/rhodium_plated_palladium', 'gtceu:luv_machine_hull')
		.itemOutputs('gtceu:luv_rotor_holder')
		.duration(20 * 6)
		.EUt(GTValues.VA[GTValues.LuV])

	event.recipes.gtceu.assembler('tfg:rotor_holder_zpm')
		.itemInputs('4x #forge:gears/trinium', '4x #forge:small_gears/naquadah_alloy', 'gtceu:zpm_machine_hull')
		.itemOutputs('gtceu:zpm_rotor_holder')
		.duration(20 * 6)
		.EUt(GTValues.VA[GTValues.ZPM])

	event.recipes.gtceu.assembler('tfg:rotor_holder_uv')
		.itemInputs('4x #forge:gears/tritanium', '4x #forge:small_gears/darmstadtium', 'gtceu:uv_machine_hull')
		.itemOutputs('gtceu:uv_rotor_holder')
		.duration(20 * 6)
		.EUt(GTValues.VA[GTValues.UV])

	//# Circuit Board

	event.replaceInput({ id: 'gtceu:assembler/phenolic_board' }, '#tfg:wood_dusts', 'tfg:high_density_treated_fiberboard')

	//#region New Tungsten Line

	event.remove({ id: 'gtceu:chemical_bath/tungstic_acid_from_scheelite' })
	event.remove({ id: 'gtceu:chemical_bath/tungstic_acid_from_tungstate' })
	event.remove({ id: 'gtceu:electrolyzer/tungstic_acid_electrolysis' })

	// Transform Tungstate and Scheelite

	event.recipes.gtceu.large_chemical_reactor('tfg:scheelite_to_sodium_tungstate')
		.itemInputs(Item.of('gtceu:scheelite_dust', 6))
		.itemInputs(Item.of('gtceu:soda_ash_dust', 6))
		.itemOutputs(Item.of('tfg:sodium_tungstate_dust', 6))
		.itemOutputs(Item.of('gtceu:calcite_dust', 6))
		.duration(20*12)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.large_chemical_reactor('tfg:tungstate_to_sodium_tungstate')
		.itemInputs(Item.of('gtceu:tungstate_dust', 6))
		.itemInputs(Item.of('gtceu:soda_ash_dust', 6))
		.itemOutputs(Item.of('tfg:sodium_tungstate_dust', 6))
		.itemOutputs(Item.of('gtceu:lithium_dust', 2))
		.itemOutputs(Item.of('gtceu:carbon_dust', 1))
		.outputFluids(Fluid.of('gtceu:oxygen', 3000))
		.duration(20*12)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.chemical_bath('tfg:tungstate_to_tungsten_acid')
		.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 12000))
		.itemInputs(Item.of('tfg:sodium_tungstate_dust', 6))
		.itemOutputs(Item.of('gtceu:salt_dust', 48))
		.itemOutputs(Item.of('gtceu:tungstic_acid_dust', 6))
		.duration(20*24)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.chemical_bath('tfg:tungsten_acid_to_ammonium_tungstate')
		.inputFluids(Fluid.of('gtceu:ammonia', 10000))
		.itemInputs(Item.of('gtceu:tungstic_acid_dust', 12))
		.itemOutputs(Item.of('tfg:ammonium_tungstate_dust', 1))
		.duration(20*16)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.evaporation_tower('tfg:ammonium_tungstate_to_apt_h')
		.itemInputs(Item.of('tfg:ammonium_tungstate_dust', 1))
		.itemOutputs(Item.of('tfg:apt_gem', 1))
		.outputFluids(Fluid.of('gtceu:hydrogen', 500))
		.outputFluids(Fluid.of('gtceu:hydrogen', 500))
		.outputFluids(Fluid.of('gtceu:hydrogen', 500))
		.outputFluids(Fluid.of('gtceu:hydrogen', 500))
		.outputFluids(Fluid.of('gtceu:hydrogen', 500))
		.outputFluids(Fluid.of('gtceu:hydrogen', 500))
		.duration(20*90)
		.EUt(GTValues.VHA[GTValues.HV])

	event.recipes.gtceu.distillery('tfg:ammonium_tungstate_to_apt')
		.itemInputs(Item.of('tfg:ammonium_tungstate_dust', 1))
		.itemOutputs(Item.of('tfg:apt_gem', 1))
		.outputFluids(Fluid.of('gtceu:hydrogen', 500))
		.duration(20*90)
		.EUt(GTValues.VHA[GTValues.HV])

	event.recipes.gtceu.pyrolyse_oven('tfg:apt')
		.itemInputs(Item.of('tfg:apt_gem', 1))
		.itemOutputs(Item.of('tfg:tungsten_oxide_dust', 3))
		.outputFluids(Fluid.of('gtceu:ammonia', 10000))
		.duration(20*36)
		.EUt(GTValues.VA[GTValues.EV])
		.circuit(1)

	event.recipes.gtceu.pyrolyse_oven('tfg:apt_nitrogen')
		.itemInputs(Item.of('tfg:apt_gem', 1))
		.inputFluids(Fluid.of('gtceu:nitrogen', 1000))
		.itemOutputs(Item.of('tfg:tungsten_oxide_dust', 3))
		.outputFluids(Fluid.of('gtceu:ammonia', 10000))
		.duration(20*18)
		.EUt(GTValues.VA[GTValues.EV])
		.circuit(2)

	event.recipes.gtceu.arc_furnace('tfg:tungsten_apt')
		.itemInputs(Item.of('tfg:tungsten_oxide_dust', 1))
		.inputFluids(Fluid.of('gtceu:hydrogen', 1000))
		.itemOutputs(Item.of('gtceu:tungsten_dust', 1))
		.duration(20*2.8)
		.EUt(GTValues.VA[GTValues.EV])
		

	// New Alloys

	event.recipes.gtceu.mixer('tfg:ostrum_iodide')
		.itemInputs('1x #forge:dusts/iodine', '2x #forge:dusts/ostrum')
		.itemOutputs('3x #forge:dusts/ostrum_iodide')
		.duration(20 * 12)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.mixer('tfg:tungsten_bismuth_oxide_composite')
		.itemInputs('2x #forge:dusts/bismuth', 'gtceu:tungsten_dust')
		.inputFluids(Fluid.of('gtceu:oxygen', 3000))
		.itemOutputs('3x tfg:tungsten_bismuth_oxide_composite_dust')
		.duration(20 * 12)
		.EUt(GTValues.VA[GTValues.EV])

	// Handcrafted artisanal concrete

	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#tfg:stone_dusts', '#tfg:stone_dusts', '#forge:dusts/marble', '#forge:dusts/gypsum'], Fluid.of('minecraft:water', 1000))
		.outputFluid(Fluid.of('gtceu:concrete', 1000))

	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#tfg:stone_dusts', '#tfg:stone_dusts', '#tfg:stone_dusts', '#forge:dusts/clay'], Fluid.of('minecraft:water', 500))
		.outputFluid(Fluid.of('gtceu:concrete', 500))

	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#tfg:stone_dusts', '#tfg:stone_dusts', '#tfg:stone_dusts', '#forge:dusts/calcite', '#forge:dusts/gypsum'], Fluid.of('minecraft:water', 1000))
		.outputFluid(Fluid.of('gtceu:concrete', 1000))

	event.recipes.tfc.barrel_sealed(1000)
		.inputFluid(Fluid.of('gtceu:concrete', 144))
		.inputItem('gtceu:wood_frame')
		.outputItem('gtceu:light_concrete')
		.id('tfg:barrel/light_concrete')

	event.recipes.tfc.barrel_sealed(1000)
		.inputFluid(Fluid.of('gtceu:concrete', 96))
		.inputItem('tfg:rebar_support')
		.outputItem('tfg:reinforced_light_concrete_support')
		.id('tfg:barrel/reinforced_light_concrete_support')

	event.recipes.tfc.barrel_sealed(500)
		.inputItem('gtceu:light_concrete')
		.inputFluid(Fluid.of('tfc:black_dye', 18))
		.outputItem('gtceu:dark_concrete')
		.id('tfg:barrel/dark_concrete')
		
	event.recipes.tfc.barrel_sealed(500)
		.inputItem('tfg:light_concrete_support')
		.inputFluid(Fluid.of('tfc:black_dye', 10))
		.outputItem('tfg:dark_concrete_support')
		.id('tfg:barrel/dark_concrete_support')

	event.recipes.tfc.barrel_sealed(500)
		.inputItem('tfg:reinforced_light_concrete_support')
		.inputFluid(Fluid.of('tfc:black_dye', 10))
		.outputItem('tfg:reinforced_dark_concrete_support')
		.id('tfg:barrel/reinforced_dark_concrete_support')

	event.recipes.gtceu.alloy_smelter('glass_bottle')
		.itemInputs('#forge:dusts/glass')
		.itemOutputs('tfc:silica_glass_bottle')
		.notConsumable('gtceu:bottle_casting_mold')
		.EUt(2)
		.duration(20 * 5)
		.category(GTRecipeCategories.INGOT_MOLDING)

	// Change

	// The 9x buff for large boiler recipes above does not apply to this for some reason, so it gets 3x duration for an effective 1/3 reduction instead

	event.forEachRecipe({ id: /gtceu:large_boiler\/(minecraft_ladder|gtceu_wood_frame)/ }, recipe => {
            var newDuration = recipe.get("duration")
            recipe.set("duration", newDuration*3)
        })

	event.forEachRecipe({ id: /gtceu:steam_boiler\/(minecraft_ladder|gtceu_wood_frame)/ }, recipe => {
            var newDuration = recipe.get("duration")
            recipe.set("duration", newDuration/3)
        })
}
