// priority: 0

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerGTCEURecipes = (event) => {
	
	registerGTCEUMetalRecipes(event)

	removeGTCEURecipes(event)

	//#region Выход: Удобрение
	// В обычном миксере
	event.recipes.gtceu.mixer('fertilizer')
		.itemInputs(
			'#tfc:dirt',
			'2x #tfg:wood_dusts',
			'4x #forge:sand'
		)
		.circuit(1)
		.inputFluids(Fluid.of('minecraft:water', 1000))
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

	//#region Выход: Диоксид силикона

	event.recipes.gtceu.electrolyzer('sand_electrolysis')
		.itemInputs('8x #forge:sand')
		.itemOutputs('gtceu:silicon_dioxide_dust')
		.duration(500)
		.EUt(25)

	//#endregion

	//#region Выход: Соленая пыль + Вода

	// Декрафт в центрифуге
	event.recipes.gtceu.centrifuge('centrifuging_tfc_salt_water')
		.inputFluids(Fluid.of('tfc:salt_water', 1000))
		.itemOutputs('1x gtceu:salt_dust')
		.outputFluids(Fluid.of('minecraft:water', 1000))
		.duration(51)
		.EUt(30)

	// Декрафт в электролайзере
	event.recipes.gtceu.electrolyzer('electrolyze_tfc_salt_water')
		.inputFluids(Fluid.of('tfc:salt_water', 1000))
		.itemOutputs('1x gtceu:sodium_hydroxide_dust', '2x gtceu:small_sodium_hydroxide_dust')
		.outputFluids(Fluid.of('gtceu:chlorine', 500), Fluid.of('gtceu:hydrogen', 500))
		.duration(720)
		.EUt(30)

	//#endregion

	//#region Выход: Каменный стержень

	// Из сырого камня
	event.recipes.gtceu.lathe('stone_rod_from_stone')
		.itemInputs('#tfc:rock/raw')
		.itemOutputs('gtceu:stone_rod', 'gtceu:small_stone_dust')
		.duration(15)
		.EUt(2)

	// Из булыжника
	event.recipes.gtceu.lathe('stone_rod_from_cobblestone')
		.itemInputs('#forge:cobblestone')
		.itemOutputs('gtceu:stone_rod', 'gtceu:small_stone_dust')
		.duration(15)
		.EUt(2)

	//#endregion

	//#region Выход: Сырая резиновая пыль

	// Из бревна капока
	event.recipes.gtceu.extractor('raw_rubber_from_log')
		.itemInputs('#tfg:latex_logs')
		.itemOutputs('gtceu:raw_rubber_dust')
		.duration(300)
		.EUt(2)

	// Из саженца капока
	event.recipes.gtceu.extractor('raw_rubber_from_sapling')
		.itemInputs('1x #tfg:rubber_saplings')
		.itemOutputs('gtceu:raw_rubber_dust')
		.duration(300)
		.EUt(2)

	// Из листвы капока
	event.recipes.gtceu.extractor('raw_rubber_from_leaves')
		.itemInputs('16x #tfg:rubber_leaves')
		.itemOutputs('gtceu:raw_rubber_dust')
		.duration(300)
		.EUt(2)

	event.replaceOutput({id: 'gtceu:centrifuge/sticky_resin_separation'}, 'gtceu:raw_rubber_dust', 'gtceu:carbon_dust')

	//#endregion

	//#region Выход: Пропитанные доски

	event.remove({ id: 'gtceu:shaped/treated_wood_planks' })

	event.recipes.tfc.barrel_sealed(4000)
		.outputItem('gtceu:treated_wood_planks')
		.inputs('#minecraft:planks', TFC.fluidStackIngredient('#forge:creosote', 100))
		.id('tfg:barrel/treated_wood_planks')

	//#endregion

	//#region Выход: Капля резины

	// Из латекса
	event.recipes.tfc.pot('tfc:powder/sulfur', Fluid.of('tfg:latex', 1000), 1200, 300)
		.itemOutput('gtceu:sticky_resin')
		.id('tfg:pot/sticky_resin_from_latex')

	event.recipes.tfc.pot('tfc:powder/sulfur', Fluid.of('tfg:conifer_pitch', 1000), 1200, 300)
		.itemOutput('gtceu:sticky_resin')
		.id('tfg:pot/sticky_resin_from_conifer_pitch')

	// Из бревна капока
	event.recipes.gtceu.centrifuge('rubber_log_separation')
		.itemInputs('#tfg:latex_logs')
		.chancedOutput('gtceu:raw_rubber_dust', 5000, 1200)
		.chancedOutput('gtceu:plant_ball', 3750, 900)
		.chancedOutput('gtceu:sticky_resin', 2500, 600)
		.chancedOutput('gtceu:wood_dust', 2500, 700)
		.outputFluids(Fluid.of('gtceu:methane', 60))
		.duration(200)
		.EUt(20)

	//#endregion

	//#region Выход: Растительный шарик

	// 8x Ванильная растительность -> Plant Ball (Compressor)

	event.recipes.gtceu.compressor('plant_ball_from_tfc_seeds')
		.itemInputs('8x #tfc:seeds')
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	event.recipes.gtceu.compressor('plant_ball_from_tfc_food')
		.itemInputs('8x #tfc:foods')
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	event.recipes.gtceu.compressor('plant_ball_from_tfc_plants')
		.itemInputs('8x #tfc:plants')
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	event.recipes.gtceu.compressor('plant_ball_from_tfc_corals')
		.itemInputs('8x #tfc:corals')
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	//#endregion

	//#region Выход: Биомасса

	// Ванильная растительность -> Биомасса (Brewery)

	event.recipes.gtceu.brewery('biomass_from_tfc_seeds')
		.itemInputs('#tfc:seeds')
		.inputFluids(Fluid.of('minecraft:water', 20))
		.outputFluids(Fluid.of('gtceu:biomass', 20))
		.duration(128)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_tfc_food')
		.itemInputs('#tfc:foods')
		.inputFluids(Fluid.of('minecraft:water', 20))
		.outputFluids(Fluid.of('gtceu:biomass', 20))
		.duration(128)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_tfc_plants')
		.itemInputs('#tfc:plants')
		.inputFluids(Fluid.of('minecraft:water', 20))
		.outputFluids(Fluid.of('gtceu:biomass', 20))
		.duration(128)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_tfc_corals')
		.itemInputs('#tfc:corals')
		.inputFluids(Fluid.of('minecraft:water', 20))
		.outputFluids(Fluid.of('gtceu:biomass', 20))
		.duration(128)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_spider_eyes')
		.itemInputs('minecraft:spider_eye')
		.inputFluids(Fluid.of('minecraft:water', 20))
		.outputFluids(Fluid.of('gtceu:biomass', 20))
		.duration(128)
		.EUt(3)

	//#endregion

	//#region Выход: Рыбье масло

	event.recipes.gtceu.extractor(`tfg/fish_oil`)
		.itemInputs('#minecraft:fishes')
		.outputFluids(Fluid.of('gtceu:fish_oil', 40))
		.duration(16)
		.EUt(4)

	//#endregion

	//#region Выход: Семянное масло

	event.recipes.gtceu.extractor(`tfg/seed_oil`)
		.itemInputs('#tfc:seeds')
		.outputFluids(Fluid.of('gtceu:seed_oil', 16))
		.duration(32)
		.EUt(2)

	//#endregion

	//#region Выход: Цемент

	generateMixerRecipe(
		event,
		['2x #tfg:stone_dusts', 'gtceu:marble_dust', 'gtceu:gypsum_dust'],
		Fluid.of('minecraft:water', 1000),
		[],
		null,
		Fluid.of('gtceu:concrete', 1152),
		40,
		16,
		64,
		'concrete_from_marble'
	)

	generateMixerRecipe(
		event,
		['3x #tfg:stone_dusts', 'gtceu:clay_dust'],
		Fluid.of('minecraft:water', 500),
		[],
		null,
		Fluid.of('gtceu:concrete', 576),
		20,
		16,
		64,
		'concrete_from_clay'
	)

	generateMixerRecipe(
		event,
		['3x #tfg:stone_dusts', 'gtceu:calcite_dust', 'gtceu:gypsum_dust'],
		Fluid.of('minecraft:water', 1000),
		[],
		null,
		Fluid.of('gtceu:concrete', 1152),
		40,
		16,
		64,
		'concrete_from_calcite'
	)

	//#endregion

	//#region Выход: Бурильная жидкость

	generateMixerRecipe(
		event,
		['2x #tfg:stone_dusts'],
		[Fluid.of('gtceu:lubricant', 20), Fluid.of('minecraft:water', 4000)],
		[],
		null,
		Fluid.of('gtceu:drilling_fluid', 5000),
		40,
		16,
		64,
		'drilling_fluid'
	)

	//#endregion

	//#region Выход: Пыль мяса

	event.recipes.gtceu.macerator('macerate_meat_to_dust')
		.itemInputs('#tfc:foods/meats')
		.itemOutputs('gtceu:meat_dust', 'gtceu:tiny_bone_dust')
		.duration(100)
		.EUt(2)

	//#endregion

	//#region Выход: Пыль какао-бобов

	event.recipes.gtceu.assembler('macerate_cocoa')
		.itemInputs('firmalife:food/cocoa_beans')
		.itemOutputs('gtceu:cocoa_dust')
		.duration(400)
		.EUt(2)

	//#endregion

	//#region Выход: Filter Casing

	event.shaped('gtceu:filter_casing', [
		'AAA',
		'BBB',
		'CDE'
	], {
		A: '#tfg:metal_bars',
		B: 'gtceu:item_filter',
		C: 'gtceu:mv_electric_motor',
		D: 'gtceu:steel_frame',
		E: '#forge:rotors/steel'
	}).id('gtceu:shaped/filter_casing')

	//#endregion

	//#region Выход: Assembly Line Grating

	event.shaped('2x gtceu:assembly_line_grating', [
		'ABA',
		'ACA',
		'ADA'
	], {
		A: '#tfg:metal_bars',
		B: '#forge:rotors/steel',
		C: 'gtceu:steel_frame',
		D: 'gtceu:mv_electric_motor'
	}).id('gtceu:shaped/casing_grate_casing')

	//#endregion

	//#region Gas Collectors

	event.shaped('gtceu:lv_gas_collector', [
		'ABA',
		'CEC',
		'ADA'
	], {
		A: '#tfg:metal_bars',
		B: 'gtceu:fluid_filter',
		C: 'gtceu:lv_electric_pump',
		D: '#gtceu:circuits/lv',
		E: 'gtceu:lv_machine_hull'
	}).id('gtceu:shaped/lv_gas_collector')

	event.shaped('gtceu:mv_gas_collector', [
		'ABA',
		'CEC',
		'ADA'
	], {
		A: '#tfg:metal_bars',
		B: 'gtceu:fluid_filter',
		C: 'gtceu:mv_electric_pump',
		D: '#gtceu:circuits/mv',
		E: 'gtceu:mv_machine_hull'
	}).id('gtceu:shaped/mv_gas_collector')

	event.shaped('gtceu:hv_gas_collector', [
		'ABA',
		'CEC',
		'ADA'
	], {
		A: '#tfg:metal_bars',
		B: 'gtceu:fluid_filter',
		C: 'gtceu:hv_electric_pump',
		D: '#gtceu:circuits/hv',
		E: 'gtceu:hv_machine_hull'
	}).id('gtceu:shaped/hv_gas_collector')

	event.shaped('gtceu:ev_gas_collector', [
		'ABA',
		'CEC',
		'ADA'
	], {
		A: '#tfg:metal_bars',
		B: 'gtceu:fluid_filter',
		C: 'gtceu:ev_electric_pump',
		D: '#gtceu:circuits/ev',
		E: 'gtceu:ev_machine_hull'
	}).id('gtceu:shaped/ev_gas_collector')

	event.shaped('gtceu:iv_gas_collector', [
		'ABA',
		'CEC',
		'ADA'
	], {
		A: '#tfg:metal_bars',
		B: 'gtceu:fluid_filter',
		C: 'gtceu:iv_electric_pump',
		D: '#gtceu:circuits/iv',
		E: 'gtceu:iv_machine_hull'
	}).id('gtceu:shaped/iv_gas_collector')

	event.shaped('gtceu:luv_gas_collector', [
		'ABA',
		'CEC',
		'ADA'
	], {
		A: '#tfg:metal_bars',
		B: 'gtceu:fluid_filter',
		C: 'gtceu:luv_electric_pump',
		D: '#gtceu:circuits/luv',
		E: 'gtceu:luv_machine_hull'
	}).id('gtceu:shaped/luv_gas_collector')

	event.shaped('gtceu:zpm_gas_collector', [
		'ABA',
		'CEC',
		'ADA'
	], {
		A: '#tfg:metal_bars',
		B: 'gtceu:fluid_filter',
		C: 'gtceu:zpm_electric_pump',
		D: '#gtceu:circuits/zpm',
		E: 'gtceu:zpm_machine_hull'
	}).id('gtceu:shaped/zpm_gas_collector')

	event.shaped('gtceu:uv_gas_collector', [
		'ABA',
		'CEC',
		'ADA'
	], {
		A: '#tfg:metal_bars',
		B: 'gtceu:fluid_filter',
		C: 'gtceu:uv_electric_pump',
		D: '#gtceu:circuits/uv',
		E: 'gtceu:uv_machine_hull'
	}).id('gtceu:shaped/uv_gas_collector')

	//#endregion

	//#region Forge Hammers

	event.shaped('gtceu:lv_forge_hammer', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: 'gtceu:tin_single_cable',
		B: 'gtceu:lv_electric_piston',
		C: '#gtceu:circuits/lv',
		D: 'gtceu:lv_machine_hull',
		E: 'tfc:metal/anvil/steel',
	}).id('gtceu:shaped/lv_forge_hammer')

	event.shaped('gtceu:mv_forge_hammer', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: 'gtceu:copper_single_cable',
		B: 'gtceu:mv_electric_piston',
		C: '#gtceu:circuits/mv',
		D: 'gtceu:mv_machine_hull',
		E: 'tfc:metal/anvil/steel',
	}).id('gtceu:shaped/mv_forge_hammer')

	event.shaped('gtceu:hv_forge_hammer', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: 'gtceu:gold_single_cable',
		B: 'gtceu:hv_electric_piston',
		C: '#gtceu:circuits/hv',
		D: 'gtceu:hv_machine_hull',
		E: 'tfc:metal/anvil/steel',
	}).id('gtceu:shaped/hv_forge_hammer')

	event.shaped('gtceu:ev_forge_hammer', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: 'gtceu:aluminium_single_cable',
		B: 'gtceu:ev_electric_piston',
		C: '#gtceu:circuits/ev',
		D: 'gtceu:ev_machine_hull',
		E: 'tfc:metal/anvil/black_steel',
	}).id('gtceu:shaped/ev_forge_hammer')

	event.shaped('gtceu:iv_forge_hammer', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: 'gtceu:platinum_single_cable',
		B: 'gtceu:iv_electric_piston',
		C: '#gtceu:circuits/iv',
		D: 'gtceu:iv_machine_hull',
		E: 'tfc:metal/anvil/black_steel',
	}).id('gtceu:shaped/iv_forge_hammer')

	event.shaped('gtceu:luv_forge_hammer', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: 'gtceu:niobium_titanium_single_cable',
		B: 'gtceu:luv_electric_piston',
		C: '#gtceu:circuits/luv',
		D: 'gtceu:luv_machine_hull',
		E: 'tfc:metal/anvil/black_steel',
	}).id('gtceu:shaped/luv_forge_hammer')

	event.shaped('gtceu:zpm_forge_hammer', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: 'gtceu:vanadium_gallium_single_cable',
		B: 'gtceu:zpm_electric_piston',
		C: '#gtceu:circuits/zpm',
		D: 'gtceu:zpm_machine_hull',
		E: '#tfc:red_or_blue_anvil',
	}).id('gtceu:shaped/zpm_forge_hammer')

	event.shaped('gtceu:uv_forge_hammer', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: 'gtceu:yttrium_barium_cuprate_single_cable',
		B: 'gtceu:uv_electric_piston',
		C: '#gtceu:circuits/uv',
		D: 'gtceu:uv_machine_hull',
		E: '#tfc:red_or_blue_anvil',
	}).id('gtceu:shaped/uv_forge_hammer')

	//#endregion

	//#region CokeOven

	// Coke Oven
	event.shaped('gtceu:coke_oven', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'gtceu:coke_oven_bricks',
		B: '#forge:plates/wrought_iron',
		C: '#forge:tools/wrenches'
	}).id('gtceu:shaped/coke_oven')

	// Coke Oven Hatch
	event.recipes.tfc.no_remainder_shaped_crafting(
		event.shaped('gtceu:coke_oven_hatch', [
			'AB'
		], {
			A: 'gtceu:coke_oven_bricks',
			B: '#tfc:barrels'
		})
	).id('gtceu:shaped/coke_oven_hatch')

	//#endregion

	// High Pressure Steam Miner
	event.replaceInput({id: 'gtceu:shaped/steam_miner_steel' },
		'gtceu:lp_steam_miner', 'gtceu:steel_brick_casing')

	//#region Выход: Стальные машины

	// Экстрактор
	event.shaped('gtceu:hp_steam_extractor', [
		'BEB',
		'CAC',
		'DBD'
	], {
		A: 'gtceu:steel_brick_casing',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:plates/steel',
		D: '#forge:plates/wrought_iron',
		E: '#forge:glass_panes'
	}).id('gtceu:shaped/steam_extractor_steel')

	// Дробитель
	event.shaped('gtceu:hp_steam_macerator', [
		'CCC',
		'BAB',
		'DDD'
	], {
		A: 'gtceu:steel_brick_casing',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:plates/steel',
		D: '#forge:plates/wrought_iron'
	}).id('gtceu:shaped/steam_macerator_steel')

	// Компрессор
	event.shaped('gtceu:hp_steam_compressor', [
		'BCB',
		'DAD',
		'BBB'
	], {
		A: 'gtceu:steel_brick_casing',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:plates/steel',
		D: '#forge:plates/wrought_iron'
	}).id('gtceu:shaped/steam_compressor_steel')

	// Молот
	event.shaped('gtceu:hp_steam_forge_hammer', [
		'DED',
		'BAB',
		'CCC'
	], {
		A: 'gtceu:steel_brick_casing',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:plates/steel',
		D: '#forge:plates/wrought_iron',
		E: '#forge:double_ingots/steel'
	}).id('gtceu:shaped/steam_hammer_steel')

	// Печь
	event.shaped('gtceu:hp_steam_furnace', [
		'BCB',
		'DAD',
		'BCB'
	], {
		A: 'gtceu:steel_brick_casing',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:plates/steel',
		D: '#forge:plates/wrought_iron'
	}).id('gtceu:shaped/steam_furnace_steel')

	// Сплавщик
	event.shaped('gtceu:hp_steam_alloy_smelter', [
		'DCD',
		'DAD',
		'DBD'
	], {
		A: 'gtceu:steel_brick_casing',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:plates/steel',
		D: '#forge:plates/wrought_iron'
	}).id('gtceu:shaped/steam_alloy_smelter_steel')

	// Блоко-ломатель
	event.shaped('gtceu:hp_steam_rock_crusher', [
		'DCD',
		'BAB',
		'DDD'
	], {
		A: 'gtceu:steel_brick_casing',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:plates/steel',
		D: '#forge:plates/wrought_iron'
	}).id('gtceu:shaped/steam_rock_breaker_steel')

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
		.inputFluids(Fluid.of('gtceu:nether_air', 1000))
		.duration(700)
		.EUt(2720)

	// Creosote-Treated Wood Planks -> Treated Wood Pulp
	event.recipes.gtceu.macerator('tfg:gtceu/macerate_treated_wood_planks')
		.itemInputs('gtceu:treated_wood_planks')
		.itemOutputs('gtceu:treated_wood_dust')
		.duration(120)
		.EUt(4)

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

	// Контроллер теплицы
	event.shaped('gtceu:greenhouse', [
		'ABA',
		'CDC',
		'BCB'
	], {
		A: '#gtceu:circuits/mv',
		B: 'gtceu:copper_single_cable',
		C: '#gtceu:circuits/mv',
		D: 'gtceu:solid_machine_casing'
	}).id('tfg:shaped/greenhouse')

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

	// Compressed Coke Clay -> Coke Oven Brick
	event.recipes.tfc.heating('gtceu:compressed_coke_clay', 1399)
		.resultItem('gtceu:coke_oven_brick')
		.id('tfg:heating/coke_oven_bricks')

	// TFC FireBrick -> FireBrick dust
	event.recipes.gtceu.macerator('macerate_firebrick')
		.itemInputs('tfc:ceramic/fire_brick')
		.itemOutputs('gtceu:fireclay_dust')
		.duration(15)
		.EUt(2)

	// Steel Steam Boiler
	event.shaped('gtceu:hp_steam_solid_boiler', [
		'AAA',
		'ACA',
		'BDB'
	], {
		A: '#forge:plates/steel',
		B: 'minecraft:bricks',
		C: '#forge:tools/wrenches',
		D: 'tfc:crucible'
	}).id('gtceu:shaped/steam_boiler_coal_steel')

	event.replaceInput({ id: 'gtceu:shaped/steam_boiler_solar_steel' },
		'gtceu:steel_small_fluid_pipe', 'gtceu:tin_alloy_small_fluid_pipe')

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

	// Клей из ТФК клея
	event.recipes.gtceu.centrifuge('glue_from_tfc_glue')
		.itemInputs('tfc:glue')
		.outputFluids(Fluid.of('gtceu:glue', 50))
		.duration(400)
		.EUt(5)

	// Исправление рецепта пыли серебра стерлинга
	generateMixerRecipe(event, ['#forge:dusts/copper', '4x #forge:dusts/silver'], [], '5x gtceu:sterling_silver_dust', 1, [], 500, 24, 64, 'sterling_silver')

	// Исправление рецепта пыли розовой бронзы
	generateMixerRecipe(event, ['#forge:dusts/copper', '4x #forge:dusts/gold'], [], '5x gtceu:rose_gold_dust', 3, [], 500, 24, 64, 'rose_gold')

	//#region Рецепт ULV микросхемы

	event.remove({ id: 'gtceu:shaped/vacuum_tube' })

	event.recipes.createSequencedAssembly([
		'gtceu:vacuum_tube',
	], '#forge:plates/wrought_iron', [
		event.recipes.createDeploying('tfg:unfinished_vacuum_tube', ['tfg:unfinished_vacuum_tube', '#forge:bolts/steel']),
		event.recipes.createDeploying('tfg:unfinished_vacuum_tube', ['tfg:unfinished_vacuum_tube', 'gtceu:glass_tube']),
		event.recipes.createDeploying('tfg:unfinished_vacuum_tube', ['tfg:unfinished_vacuum_tube', 'gtceu:copper_single_wire']),
	]).transitionalItem('tfg:unfinished_vacuum_tube').loops(2).id('tfg:gtceu/sequenced_assembly/vacuum_tube')

	//#endregion

	//#region Рецепт LV микросхемы

	event.remove({ id: 'gtceu:shaped/electronic_circuit_lv' })

	event.recipes.createSequencedAssembly([
		'gtceu:basic_electronic_circuit',
	], 'gtceu:resin_printed_circuit_board', [
		event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', '#forge:plates/steel']),
		event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', 'gtceu:resistor']),
		event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', 'gtceu:vacuum_tube']),
		event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', 'gtceu:red_alloy_single_cable']),
	]).transitionalItem('tfg:unfinished_basic_electronic_circuit').loops(2).id('tfg:gtceu/sequenced_assembly/basic_electronic_circuit')

	//#endregion

	//#region Long Distance Pipelines

	event.remove({ id: 'gtceu:assembler/long_distance_item_pipe' })
	event.recipes.gtceu.assembler('long_distance_item_pipe')
		.itemInputs(
			'1x gtceu:tin_large_item_pipe',
			'4x #forge:plates/steel')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 144 / 4))
		.itemOutputs('32x gtceu:long_distance_item_pipeline')
		.circuit(2)
		.duration(300)
		.EUt(24)

	event.remove({ id: 'gtceu:assembler/long_distance_fluid_pipe' })
	event.recipes.gtceu.assembler('long_distance_fluid_pipe')
		.itemInputs(
			'1x gtceu:bronze_large_fluid_pipe',
			'4x #forge:plates/steel')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 144 / 4))
		.itemOutputs('32x gtceu:long_distance_fluid_pipeline')
		.circuit(2)
		.duration(300)
		.EUt(24)

	//#endregion

	//#region LV hull

	event.replaceInput('gtceu:shaped/lv_machine_hull', '#forge:plates/wrought_iron', '#forge:plates/red_steel')

	//#endregion

	//#region make colored steel a bit easier to compensate

	event.recipes.gtceu.arc_furnace('tfg:black_steel_dust_to_ingot')
		.itemInputs('gtceu:black_steel_dust')
		.itemOutputs('tfc:metal/ingot/black_steel')
		.inputFluids(Fluid.of('gtceu:oxygen', 72))
		.duration(500)
		.EUt(24)

	event.recipes.gtceu.arc_furnace('tfg:red_steel_dust_to_ingot')
		.itemInputs('gtceu:red_steel_dust')
		.itemOutputs('tfc:metal/ingot/red_steel')
		.inputFluids(Fluid.of('gtceu:oxygen', 72))
		.duration(700)
		.EUt(32)

	event.recipes.gtceu.arc_furnace('tfg:blue_steel_dust_to_ingot')
		.itemInputs('gtceu:blue_steel_dust')
		.itemOutputs('tfc:metal/ingot/blue_steel')
		.inputFluids(Fluid.of('gtceu:oxygen', 72))
		.duration(700)
		.EUt(32)

	//#endregion

	//#region add regular furnace recipes for other tfc alloys

	event.remove({ id: 'gtceu:electric_blast_furnace/blast_bismuth_bronze' })
	event.remove({ id: 'gtceu:electric_blast_furnace/blast_bismuth_bronze_gas' })
	event.remove({ id: 'gtceu:electric_blast_furnace/blast_black_bronze' })
	event.remove({ id: 'gtceu:electric_blast_furnace/blast_black_bronze_gas' })
	event.remove({ id: 'gtceu:vacuum_freezer/cool_hot_black_bronze_ingot' })
	event.remove({ id: 'gtceu:vacuum_freezer/black_bronze' })
	event.remove({ id: 'gtceu:electric_blast_furnace/blast_sterling_silver' })
	event.remove({ id: 'gtceu:electric_blast_furnace/blast_sterling_silver_gas' })
	event.remove({ id: 'gtceu:electric_blast_furnace/blast_rose_gold' })
	event.remove({ id: 'gtceu:electric_blast_furnace/blast_rose_gold_gas' })

	event.smelting('gtceu:bismuth_bronze_ingot', 'gtceu:bismuth_bronze_dust')
	event.smelting('gtceu:black_bronze_ingot', 'gtceu:black_bronze_dust')
	event.smelting('gtceu:sterling_silver_ingot', 'gtceu:sterling_silver_dust')
	event.smelting('gtceu:rose_gold_ingot', 'gtceu:rose_gold_dust')

	//#endregion

	// Add circuit to assembler recipe for redstone lamp.
	// Avoids conflict with AE2 smart cables.
	event.remove({ id: 'gtceu:assembler/redstone_lamp' })
	event.recipes.gtceu.assembler('redstone_lamp')
		.itemInputs('4x #forge:dusts/redstone', '4x #forge:dusts/glowstone')
		.itemOutputs('1x minecraft:redstone_lamp')
		.circuit(1)
		.duration(100)
		.EUt(1)

	// Clear NBT on tanks with shapeless crafts.
	const TANK_NAMES = [
		"lv_super",
		"mv_super",
		"hv_super",
		"ev_super",
		"iv_quantum",
		"luv_quantum",
		"zpm_quantum",
		"uv_quantum",
		"uhv_quantum",
	]

	TANK_NAMES.forEach(prefix => {
		// Craft super tanks to remove their NBT data.
		event.shapeless(`gtceu:${prefix}_tank`, [`gtceu:${prefix}_tank`])
		// Craft super chests to remove their NBT data.
		event.shapeless(`gtceu:${prefix}_chest`, [`gtceu:${prefix}_chest`])
	})

	// red alloy, because crucible always makes 4+1=5

	event.remove({ id: 'gtceu:mixer/red_alloy' })
	event.recipes.gtceu.mixer('tfg:red_alloy_mixer')
		.itemInputs('1x gtceu:copper_dust', '4x minecraft:redstone')
		.itemOutputs('5x gtceu:red_alloy_dust')
		.circuit(2)
		.duration(100)
		.EUt(7)

	event.remove({ id: 'gtceu:centrifuge/red_alloy_separation' })
	event.recipes.gtceu.centrifuge('tfg:red_alloy_separation')
		.itemInputs('5x gtceu:red_alloy_dust')
		.itemOutputs('1x gtceu:copper_dust', '4x minecraft:redstone')
		.duration(900)
		.EUt(30)

	event.remove({ id: 'gtceu:alloy_smelter/copper_dust_and_redstone_dust_into_red_alloy' })
	event.recipes.gtceu.alloy_smelter('tfg:copper_dust_and_redstone_dust_into_red_alloy')
		.itemInputs('1x gtceu:copper_dust', '4x minecraft:redstone')
		.itemOutputs('5x gtceu:red_alloy_ingot')
		.duration(50)
		.EUt(16)

	event.remove({ id: 'gtceu:alloy_smelter/annealed_copper_dust_and_redstone_dust_into_red_alloy' })
	event.recipes.gtceu.alloy_smelter('tfg:annealed_copper_dust_and_redstone_dust_into_red_alloy')
		.itemInputs('1x gtceu:annealed_copper_dust', '4x minecraft:redstone')
		.itemOutputs('5x gtceu:red_alloy_ingot')
		.duration(50)
		.EUt(16)

	event.remove({ id: 'gtceu:alloy_smelter/copper_ingot_and_redstone_dust_into_red_alloy' })
	event.recipes.gtceu.alloy_smelter('tfg:copper_ingot_and_redstone_dust_into_red_alloy')
		.itemInputs('1x minecraft:copper_ingot', '4x minecraft:redstone')
		.itemOutputs('5x gtceu:red_alloy_ingot')
		.duration(50)
		.EUt(16)

	event.remove({ id: 'gtceu:alloy_smelter/annealed_copper_ingot_and_redstone_dust_into_red_alloy' })
	event.recipes.gtceu.alloy_smelter('tfg:annealed_copper_ingot_and_redstone_dust_into_red_alloy')
		.itemInputs('1x gtceu:annealed_copper_ingot', '4x minecraft:redstone')
		.itemOutputs('5x gtceu:red_alloy_ingot')
		.duration(50)
		.EUt(16)

	// steam machines

	event.remove({ id: 'gtceu:arc_furnace/arc_hp_steam_forge_hammer' })
	event.recipes.gtceu.arc_furnace('tfg:arc_hp_steam_forge_hammer')
		.itemInputs('1x gtceu:hp_steam_forge_hammer')
		.itemOutputs('8x gtceu:wrought_iron_ingot', '3x gtceu:steel_ingot', '2x gtceu:tin_alloy_ingot')
		.duration(3310)
		.EUt(30)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

	event.remove({ id: 'gtceu:macerator/macerate_hp_steam_forge_hammer' })
	event.recipes.gtceu.macerator('tfg:macerate_hp_steam_forge_hammer')
		.itemInputs('1x gtceu:hp_steam_forge_hammer')
		.itemOutputs('8x gtceu:iron_dust', '3x gtceu:steel_dust', '2x gtceu:tin_alloy_dust', '12x gtceu:brick_dust')
		.duration(3254)
		.EUt(8)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)

	event.remove({ id: 'gtceu:arc_furnace/arc_hp_steam_extractor' })
	event.recipes.gtceu.arc_furnace('tfg:arc_hp_steam_extractor')
		.itemInputs('1x gtceu:hp_steam_extractor')
		.itemOutputs('7x gtceu:wrought_iron_ingot', '2x gtceu:steel_ingot', '3x gtceu:tin_alloy_ingot')
		.duration(3310)
		.EUt(30)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

	event.remove({ id: 'gtceu:macerator/macerate_hp_steam_extractor' })
	event.recipes.gtceu.macerator('tfg:macerate_hp_steam_extractor')
		.itemInputs('1x gtceu:hp_steam_extractor')
		.itemOutputs('7x gtceu:iron_dust', '2x gtceu:steel_dust', '3x gtceu:tin_alloy_dust', '12x gtceu:brick_dust')
		.duration(3254)
		.EUt(8)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)

	event.remove({ id: 'gtceu:arc_furnace/arc_hp_steam_macerator' })
	event.recipes.gtceu.arc_furnace('tfg:arc_hp_steam_macerator')
		.itemInputs('1x gtceu:hp_steam_macerator')
		.itemOutputs('8x gtceu:wrought_iron_ingot', '3x gtceu:steel_ingot', '2x gtceu:tin_alloy_ingot')
		.duration(3310)
		.EUt(30)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

	event.remove({ id: 'gtceu:macerator/macerate_hp_steam_macerator' })
	event.recipes.gtceu.macerator('tfg:macerate_hp_steam_macerator')
		.itemInputs('1x gtceu:hp_steam_macerator')
		.itemOutputs('8x gtceu:iron_dust', '3x gtceu:steel_dust', '2x gtceu:tin_alloy_dust', '12x gtceu:brick_dust')
		.duration(3254)
		.EUt(8)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)

	event.remove({ id: 'gtceu:arc_furnace/arc_hp_steam_compressor' })
	event.recipes.gtceu.arc_furnace('tfg:arc_hp_steam_compressor')
		.itemInputs('1x gtceu:hp_steam_compressor')
		.itemOutputs('7x gtceu:wrought_iron_ingot', '1x gtceu:steel_ingot', '5x gtceu:tin_alloy_ingot')
		.duration(3310)
		.EUt(30)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

	event.remove({ id: 'gtceu:macerator/macerate_hp_steam_compressor' })
	event.recipes.gtceu.macerator('tfg:macerate_hp_steam_compressor')
		.itemInputs('1x gtceu:hp_steam_compressor')
		.itemOutputs('7x gtceu:iron_dust', '1x gtceu:steel_dust', '5x gtceu:tin_alloy_dust', '12x gtceu:brick_dust')
		.duration(3254)
		.EUt(8)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)

	event.remove({ id: 'gtceu:arc_furnace/arc_hp_steam_furnace' })
	event.recipes.gtceu.arc_furnace('tfg:arc_hp_steam_furnace')
		.itemInputs('1x gtceu:hp_steam_furnace')
		.itemOutputs('7x gtceu:wrought_iron_ingot', '2x gtceu:steel_ingot', '4x gtceu:tin_alloy_ingot')
		.duration(3310)
		.EUt(30)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

	event.remove({ id: 'gtceu:macerator/macerate_hp_steam_furnace' })
	event.recipes.gtceu.macerator('tfg:macerate_hp_steam_furnace')
		.itemInputs('1x gtceu:hp_steam_furnace')
		.itemOutputs('7x gtceu:iron_dust', '2x gtceu:steel_dust', '4x gtceu:tin_alloy_dust', '12x gtceu:brick_dust')
		.duration(3254)
		.EUt(8)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)

	event.remove({ id: 'gtceu:arc_furnace/arc_hp_steam_alloy_smelter' })
	event.recipes.gtceu.arc_furnace('tfg:arc_hp_steam_alloy_smelter')
		.itemInputs('1x gtceu:hp_steam_alloy_smelter')
		.itemOutputs('11x gtceu:wrought_iron_ingot', '1x gtceu:steel_ingot', '1x gtceu:tin_alloy_ingot')
		.duration(3310)
		.EUt(30)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

	event.remove({ id: 'gtceu:macerator/macerate_hp_steam_alloy_smelter' })
	event.recipes.gtceu.macerator('tfg:macerate_hp_steam_alloy_smelter')
		.itemInputs('1x gtceu:hp_steam_alloy_smelter')
		.itemOutputs('11x gtceu:iron_dust', '1x gtceu:steel_dust', '1x gtceu:tin_alloy_dust', '12x gtceu:brick_dust')
		.duration(3254)
		.EUt(8)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)

	event.remove({ id: 'gtceu:arc_furnace/arc_hp_steam_rock_crusher' })
	event.recipes.gtceu.arc_furnace('tfg:arc_hp_steam_rock_crusher')
		.itemInputs('1x gtceu:hp_steam_rock_crusher')
		.itemOutputs('10x gtceu:wrought_iron_ingot', '1x gtceu:steel_ingot', '2x gtceu:tin_alloy_ingot')
		.duration(3310)
		.EUt(30)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

	event.remove({ id: 'gtceu:macerator/macerate_hp_steam_rock_crusher' })
	event.recipes.gtceu.macerator('tfg:macerate_hp_steam_rock_crusher')
		.itemInputs('1x gtceu:hp_steam_rock_crusher')
		.itemOutputs('10x gtceu:iron_dust', '1x gtceu:steel_dust', '2x gtceu:tin_alloy_dust', '12x gtceu:brick_dust')
		.duration(3254)
		.EUt(8)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)

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
	event.remove({ id: "gtceu:macerator/macerate_glass" });
	event.recipes.gtceu.macerator("gtceu:macerator/macerate_glass")
		.itemInputs(
			"#forge:glass"
		)
		.itemOutputs("gtceu:glass_dust")
		.duration(20)
		.EUt(2);

	event.remove({ id: "gtceu:macerator/macerate_glass_pane" });
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
		.itemInputs('gtceu:poor_raw_coal')
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
	// #endregion

	// #region Fix TFC hanging sign metal dupe for Macerator and Arc Furnace

	const SIGN_METALS = [
		"copper",
		"bronze",
		"black_bronze",
		"bismuth_bronze",
		"wrought_iron",
		"steel",
		"black_steel",
		"red_steel",
		"blue_steel"
	];

	SIGN_METALS.forEach(metal => {
		global.TFC_WOOD_TYPES.forEach(wood => {
			event.remove(`gtceu:macerator/macerate_wood/hanging_sign/${metal}/${wood}`)
			event.recipes.gtceu.macerator(`gtceu:macerator/macerate_wood/hanging_sign/${metal}/${wood}`)
				.itemInputs(`tfc:wood/hanging_sign/${metal}/${wood}`)
				.itemOutputs('gtceu:wood_dust')
				.chancedOutput(`gtceu:tiny_${metal}_dust`, 3750, 0)
				.duration(108)
				.EUt(8)
				.category(GTRecipeCategories.MACERATOR_RECYCLING)

			event.remove(`gtceu:arc_furnace/arc_wood/hanging_sign/${metal}/${wood}`)
			event.recipes.gtceu.arc_furnace(`gtceu:arc_furnace/macerate_wood/hanging_sign/${metal}/${wood}`)
				.itemInputs(`tfc:wood/hanging_sign/${metal}/${wood}`)
				.itemOutputs('gtceu:tiny_ash_dust')
				.chancedOutput(`gtceu:${metal}_nugget`, 3750, 0)
				.inputFluids(Fluid.of('gtceu:oxygen', 12))
				.duration(12)
				.EUt(30)
				.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
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

	// #region Primitive protection

	event.recipes.tfc.barrel_sealed(2000)
		.outputItem('tfg:prepared_leather_gloves')
		.inputs('tfchotornot:mittens', Fluid.of('tfc:vinegar', 1000))
		.id('tfg:sealed_barrel/prepared_leather_gloves')

	event.recipes.firmalife.vat()
		.inputs('tfc:powder/wood_ash', Fluid.of('tfg:latex', 100))
		.outputFluid(Fluid.of('tfg:vulcanized_latex', 100))
		.length(300)
		.temperature(300)
		.id('tfg:vat/vulcanized_latex')

	event.recipes.tfc.pot('tfc:powder/wood_ash', Fluid.of('tfg:latex', 100), 1200, 300)
		.fluidOutput(Fluid.of('tfg:vulcanized_latex', 100))
		.id('tfg:pot/vulcanized_latex')

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

	event.replaceInput({id: 'gtceu:shaped/nightvision_goggles'}, 'gtceu:glass_lens', 'tfc:lens')
	
	event.replaceInput({id: 'gtceu:shaped/note_block'}, 'minecraft:iron_bars', '#tfg:metal_bars')
	event.replaceInput({id: 'gtceu:shaped/note_block'}, 'gtceu:wood_plate', '#tfc:lumber')

	event.replaceInput({mod: 'gtceu'}, 'minecraft:sugar', '#tfg:sugars')

	event.recipes.gtceu.fluid_solidifier('tfg:solidify_glue')
		.inputFluids(Fluid.of('gtceu:glue', 50))
		.notConsumable('gtceu:ball_casting_mold')
		.itemOutputs('tfc:glue')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

}
