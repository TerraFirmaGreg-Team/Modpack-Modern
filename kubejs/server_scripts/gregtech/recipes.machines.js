// priority: 0

function registerGTCEuMachineRecipes(event) {
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
	event.replaceInput({ id: 'gtceu:shaped/steam_miner_steel' },
		'gtceu:lp_steam_miner', 'gtceu:steel_brick_casing')

	//#region Выход: Стальные машины

	// HP Steam Boilers
	event.shaped('gtceu:hp_steam_solid_boiler', [
		'AEA',
		'ADA',
		'BCB'
	], {
		A: '#forge:plates/steel',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: 'gtceu:steel_brick_casing',
		D: 'tfc:crucible',
		E: '#forge:rods/black_steel'
	}).id('gtceu:shaped/steam_boiler_coal_steel')

	event.shaped('gtceu:hp_steam_liquid_boiler', [
		'AEA',
		'ADA',
		'BCB'
	], {
		A: '#forge:plates/steel',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: 'gtceu:steel_brick_casing',
		D: '#forge:glass',
		E: '#forge:rods/black_steel'
	}).id('gtceu:shaped/steam_boiler_lava_steel')

	event.shaped('gtceu:hp_steam_solar_boiler', [
		'AAA',
		'BCB',
		'EDE'
	], {
		A: '#forge:glass_panes',
		B: '#forge:double_plates/silver',
		C: '#forge:rods/black_steel',
		D: 'gtceu:steel_brick_casing',
		E: 'gtceu:tin_alloy_small_fluid_pipe',
	}).id('gtceu:shaped/steam_boiler_solar_steel')

	// Экстрактор
	event.shaped('gtceu:hp_steam_extractor', [
		'BEB',
		'CAC',
		'DFD'
	], {
		A: 'gtceu:steel_brick_casing',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:plates/steel',
		D: '#forge:plates/wrought_iron',
		E: '#forge:glass_panes',
		F: '#forge:rings/black_steel'
	}).id('gtceu:shaped/steam_extractor_steel')

	// Дробитель
	event.shaped('gtceu:hp_steam_macerator', [
		'BFB',
		'CAC',
		'DED'
	], {
		A: 'gtceu:steel_brick_casing',
		B: '#forge:small_gears/wrought_iron',
		C: '#forge:plates/steel',
		D: '#forge:rods/black_steel',
		E: 'gtceu:tin_alloy_small_fluid_pipe',
		F: '#forge:raw_materials/diamond'
	}).id('gtceu:shaped/steam_macerator_steel')

	// Компрессор
	event.shaped('gtceu:hp_steam_compressor', [
		'BCB',
		'EAE',
		'DFD'
	], {
		A: 'gtceu:steel_brick_casing',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:plates/steel',
		D: '#forge:plates/wrought_iron',
		E: 'minecraft:piston',
		F: '#forge:rods/black_steel'
	}).id('gtceu:shaped/steam_compressor_steel')

	// Молот
	event.shaped('gtceu:hp_steam_forge_hammer', [
		'DFD',
		'BEB',
		'CAC'
	], {
		A: 'gtceu:steel_brick_casing',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:plates/steel',
		D: '#forge:plates/wrought_iron',
		E: '#forge:ingots/black_steel',
		F: 'minecraft:piston'
	}).id('gtceu:shaped/steam_hammer_steel')

	// Печь
	event.shaped('gtceu:hp_steam_furnace', [
		'BCB',
		'DAD',
		'FFF'
	], {
		A: 'gtceu:steel_brick_casing',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:plates/steel',
		D: '#forge:plates/wrought_iron',
		F: '#forge:rods/black_steel'
	}).id('gtceu:shaped/steam_furnace_steel')

	// Сплавщик
	event.shaped('gtceu:hp_steam_alloy_smelter', [
		'FCF',
		'DAD',
		'CBC'
	], {
		A: 'gtceu:steel_brick_casing',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:plates/steel',
		D: '#forge:plates/wrought_iron',
		F: '#forge:rods/black_steel'
	}).id('gtceu:shaped/steam_alloy_smelter_steel')

	// Блоко-ломатель
	event.shaped('gtceu:hp_steam_rock_crusher', [
		'ECE',
		'BAB',
		'DDD'
	], {
		A: 'gtceu:steel_brick_casing',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:drill_heads',
		D: '#forge:rods/wrought_iron',
		E: '#forge:screws/wrought_iron'
	}).id('gtceu:shaped/steam_rock_breaker_steel')

	// Miner
	event.shaped('gtceu:hp_steam_miner', [
		'EFE',
		'BAB',
		'DCD'
	], {
		A: 'gtceu:steel_brick_casing',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:drill_heads',
		D: '#forge:rods/steel',
		E: '#forge:plates/wrought_iron',
		F: '#gtceu:circuits/ulv'
	}).id('gtceu:shaped/steam_miner_steel')

	//#endregion

	//#region passthrough hatches
	event.recipes.shaped('gtceu:lv_item_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:lv_conveyor_module',
		B: 'gtceu:small_wrought_iron_gear',
		C: 'gtceu:lv_machine_hull',
		D: '#tfg:default_chests'
	}).id('gtceu:shaped/passthrough_hatch_item_lv')

	event.recipes.shaped('gtceu:mv_item_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:mv_conveyor_module',
		B: 'gtceu:small_bronze_gear',
		C: 'gtceu:mv_machine_hull',
		D: '#tfg:default_chests'
	}).id('gtceu:shaped/passthrough_hatch_item_mv')

	event.recipes.shaped('gtceu:ev_item_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:ev_conveyor_module',
		B: 'gtceu:small_titanium_gear',
		C: 'gtceu:ev_machine_hull',
		D: '#tfg:default_chests'
	}).id('gtceu:shaped/passthrough_hatch_item_ev')

	event.recipes.shaped('gtceu:iv_item_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:iv_conveyor_module',
		B: 'gtceu:small_tungsten_steel_gear',
		C: 'gtceu:iv_machine_hull',
		D: '#tfg:default_chests'
	}).id('gtceu:shaped/passthrough_hatch_item_iv')

	event.recipes.shaped('gtceu:luv_item_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:luv_conveyor_module',
		B: 'gtceu:small_hsss_gear',
		C: 'gtceu:luv_machine_hull',
		D: '#tfg:default_chests'
	}).id('gtceu:shaped/passthrough_hatch_item_luv')

	event.recipes.shaped('gtceu:zpm_item_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:zpm_conveyor_module',
		B: 'gtceu:small_osmiridium_gear',
		C: 'gtceu:zpm_machine_hull',
		D: '#tfg:default_chests'
	}).id('gtceu:shaped/passthrough_hatch_item_zpm')

	event.recipes.shaped('gtceu:uv_item_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:uv_conveyor_module',
		B: 'gtceu:small_naquadah_alloy_gear',
		C: 'gtceu:uv_machine_hull',
		D: '#tfg:default_chests'
	}).id('gtceu:shaped/passthrough_hatch_item_uv')

	event.recipes.shaped('gtceu:lv_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:lv_electric_pump',
		B: 'gtceu:bronze_small_fluid_pipe',
		C: 'gtceu:lv_machine_hull',
		D: '#forge:glass'
	}).id('gtceu:shaped/passthrough_hatch_fluid_lv')

	event.recipes.shaped('gtceu:mv_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:mv_electric_pump',
		B: 'gtceu:steel_small_fluid_pipe',
		C: 'gtceu:mv_machine_hull',
		D: '#forge:glass'
	}).id('gtceu:shaped/passthrough_hatch_fluid_mv')

	event.remove('gtceu:shaped/passthrough_hatch_fluid')

	event.recipes.shaped('gtceu:hv_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:hv_electric_pump',
		B: 'gtceu:stainless_steel_small_fluid_pipe',
		C: 'gtceu:hv_machine_hull',
		D: 'gtceu:tempered_glass'
	}).id('gtceu:shaped/passthrough_hatch_fluid_hv')

	event.recipes.shaped('gtceu:ev_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:ev_electric_pump',
		B: 'gtceu:titanium_small_fluid_pipe',
		C: 'gtceu:ev_machine_hull',
		D: 'gtceu:tempered_glass'
	}).id('gtceu:shaped/passthrough_hatch_fluid_ev')

	event.recipes.shaped('gtceu:iv_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:iv_electric_pump',
		B: 'gtceu:tungsten_steel_small_fluid_pipe',
		C: 'gtceu:iv_machine_hull',
		D: 'gtceu:laminated_glass'
	}).id('gtceu:shaped/passthrough_hatch_fluid_iv')

	event.recipes.shaped('gtceu:luv_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:luv_electric_pump',
		B: 'gtceu:niobium_titanium_small_fluid_pipe',
		C: 'gtceu:luv_machine_hull',
		D: 'gtceu:laminated_glass'
	}).id('gtceu:shaped/passthrough_hatch_fluid_luv')

	event.recipes.shaped('gtceu:zpm_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:zpm_electric_pump',
		B: 'gtceu:polybenzimidazole_small_fluid_pipe',
		C: 'gtceu:zpm_machine_hull',
		D: 'gtceu:fusion_glass'
	}).id('gtceu:shaped/passthrough_hatch_fluid_zpm')

	event.recipes.shaped('gtceu:uv_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:uv_electric_pump',
		B: 'gtceu:naquadah_small_fluid_pipe',
		C: 'gtceu:uv_machine_hull',
		D: 'gtceu:fusion_glass'
	}).id('gtceu:shaped/passthrough_hatch_fluid_uv')

	//#endregion

	//#region ULV Hatches

	event.recipes.shaped('gtceu:ulv_input_bus', [
		'CAC',
		'CBC',
		'CDC'
	], {
		A: '#forge:chests/wooden',
		B: 'gtceu:ulv_machine_hull',
		C: 'tfc:glue',
		D: '#forge:tools/wrenches'
	}).id('gtceu:shaped/ulv_input_bus')

	event.recipes.shaped('gtceu:ulv_output_bus', [
		'CDC',
		'CBC',
		'CAC'
	], {
		A: '#forge:chests/wooden',
		B: 'gtceu:ulv_machine_hull',
		C: 'tfc:glue',
		D: '#forge:tools/wrenches'
	}).id('gtceu:shaped/ulv_output_bus')

	event.recipes.shaped('gtceu:ulv_input_hatch', [
		'CAC',
		'CBC',
		'CDC'
	], {
		A: '#forge:glass',
		B: 'gtceu:ulv_machine_hull',
		C: 'tfc:glue',
		D: '#forge:tools/wrenches'
	}).id('gtceu:shaped/ulv_input_hatch')

	event.recipes.shaped('gtceu:ulv_output_hatch', [
		'CDC',
		'CBC',
		'CAC'
	], {
		A: '#forge:glass',
		B: 'gtceu:ulv_machine_hull',
		C: 'tfc:glue',
		D: '#forge:tools/wrenches'
	}).id('gtceu:shaped/ulv_output_hatch')

	//#endregion

	//#region Long distance pipes

	event.recipes.gtceu.assembler('long_distance_item_pipe')
		.itemInputs('1x #forge:large_item_pipes/polyvinyl_chloride', '4x #forge:plates/vanadium_steel')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
		.itemOutputs('32x gtceu:long_distance_item_pipeline')
		.EUt(GTValues.VA[GTValues.HV])
		.circuit(2)
		.duration(300)

	event.recipes.gtceu.assembler('long_distance_fluid_pipe')
		.itemInputs('1x #forge:large_fluid_pipes/vanadium_steel', '4x #forge:plates/polyvinyl_chloride')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
		.itemOutputs('32x gtceu:long_distance_fluid_pipeline')
		.EUt(GTValues.VA[GTValues.HV])
		.circuit(2)
		.duration(300)

	event.recipes.gtceu.assembler('long_distance_item_endpoint')
		.itemInputs('2x #forge:large_item_pipes/polyvinyl_chloride', '8x #forge:plates/vanadium_steel', '2x #forge:gears/stainless_steel')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
		.itemOutputs('2x gtceu:long_distance_item_pipeline_endpoint')
		.EUt(GTValues.VA[GTValues.HV])
		.circuit(1)
		.duration(400)

	event.recipes.gtceu.assembler('long_distance_fluid_endpoint')
		.itemInputs('2x #forge:large_fluid_pipes/vanadium_steel', '8x #forge:plates/polyvinyl_chloride', '2x #forge:gears/stainless_steel')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
		.itemOutputs('2x gtceu:long_distance_fluid_pipeline_endpoint')
		.EUt(GTValues.VA[GTValues.HV])
		.circuit(1)
		.duration(400)

	//#endregion

	// #region Assembly line stack size problems

	event.remove({ id: 'gtceu:assembly_line/high_performance_computing_array' })
	event.recipes.gtceu.assembly_line('high_performace_computing_array')
		.itemInputs('gtceu:data_bank',
			'4x #gtceu:circuits/zpm',
			'8x gtceu:luv_field_generator',
			'gtceu:data_orb',
			'gtceu:computer_monitor_cover',
			'32x #forge:double_wires/uranium_rhodium_dinaquadide',
			'32x #forge:double_wires/uranium_rhodium_dinaquadide',
			'16x gtceu:normal_optical_pipe')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 1152),
			Fluid.of('gtceu:vanadium_gallium', 1152),
			Fluid.of('gtceu:pcb_coolant', 4000))
		.itemOutputs('gtceu:high_performance_computation_array')
		.duration(60 * 20)
		.EUt(100000)
		["scannerResearch(java.util.function.UnaryOperator)"](b =>
			b.researchStack(Item.of('gtceu:computer_monitor_cover')).EUt(GTValues.VA[GTValues.IV]).duration(120*20))

	event.remove({ id: 'gtceu:assembly_line/me_pattern_buffer' })
	event.recipes.gtceu.assembly_line('me_pattern_buffer')
		.itemInputs('gtceu:luv_dual_input_hatch',
			'gtceu:luv_emitter',
			'4x #gtceu:circuits/luv',
			'3x ae2:pattern_provider',
			'3x ae2:interface',
			'4x ae2:speed_card',
			'2x ae2:capacity_card',
			'64x #forge:fine_wires/europium',
			'32x #forge:fine_wires/europium')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 576), Fluid.of('gtceu:lubricant', 500))
		.itemOutputs('gtceu:me_pattern_buffer')
		.duration(30 * 20)
		.EUt(GTValues.VA[GTValues.LuV])
		["scannerResearch(java.util.function.UnaryOperator)"](b =>
			b.researchStack(Item.of('gtceu:luv_dual_input_hatch')).EUt(GTValues.VA[GTValues.LuV]).duration(60*20))

	event.remove({ id: 'gtceu:assembly_line/me_pattern_buffer_proxy' })
	event.recipes.gtceu.assembly_line('me_pattern_buffer_proxy')
		.itemInputs('gtceu:luv_machine_hull',
			'2x gtceu:luv_sensor',
			'#gtceu:circuits/luv',
			'ae2:quantum_link',
			'2x ae2:quantum_ring',
			'64x #forge:fine_wires/europium')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 576), Fluid.of('gtceu:lubricant', 500))
		.itemOutputs('gtceu:me_pattern_buffer_proxy')
		.duration(30 * 20)
		.EUt(GTValues.VA[GTValues.ZPM])
		.stationResearch(b => b.researchStack(Item.of('gtceu:me_pattern_buffer')).EUt(GTValues.VA[GTValues.LuV]).CWUt(32))

	event.remove({ id: 'gtceu:assembly_line/ultimate_battery' })
	event.recipes.gtceu.assembly_line('ultimate_battery')
		.itemInputs('16x #forge:double_plates/darmstadtium',
			'4x #gtceu:circuits/uhv',
			'16x gtceu:energy_cluster',
			'4x gtceu:uv_field_generator',
			'64x gtceu:uhpic_wafer',
			'64x gtceu:uhpic_wafer',
			'64x gtceu:advanced_smd_diode',
			'64x gtceu:advanced_smd_capacitor',
			'64x gtceu:advanced_smd_resistor',
			'64x gtceu:advanced_smd_transistor',
			'64x gtceu:advanced_smd_inductor',
			'32x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire',
			'64x #forge:bolts/neutronium')
		.inputFluids(
			Fluid.of('gtceu:soldering_alloy', 5760),
			Fluid.of('gtceu:polybenzimidazole', 2304),
			Fluid.of('gtceu:naquadria', 2592))
		.itemOutputs('gtceu:max_battery')
		.duration(100 * 20)
		.EUt(300000)
		.stationResearch(b => b.researchStack(Item.of('gtceu:energy_cluster')).EUt(GTValues.VA[GTValues.UHV]).CWUt(144))

	// #endregion

	// Drums
	const DRUMS_AND_CRATES = [
		'bismuth_bronze',
		'black_bronze'
	]

	DRUMS_AND_CRATES.forEach(material => {
		event.shapeless(`gtceu:${material}_drum`, [`gtceu:${material}_drum`]).id(`tfg:shapeless/drum_nbt_${material}`)

		event.shaped(`gtceu:${material}_drum`, [
			' A ',
			'BCB',
			'BCB'
		], {
			A: '#forge:tools/hammers',
			B: `#forge:plates/${material}`,
			C: `#forge:rods/long/${material}`
		}).id(`tfg:shaped/${material}_drum`)

		event.shaped(`gtceu:${material}_crate`, [
			'CBC',
			'BAB',
			'CBC'
		], {
			A: '#forge:tools/hammers',
			B: `#forge:plates/${material}`,
			C: `#forge:rods/long/${material}`
		}).id(`tfg:shaped/${material}_crate`)

		event.recipes.gtceu.assembler(`gtceu:${material}_drum`)
			.itemInputs(`4x #forge:plates/${material}`, `2x #forge:rods/long/${material}`)
			.itemOutputs(`gtceu:${material}_drum`)
			.duration(200)
			.EUt(16)
			.circuit(2)

		event.recipes.gtceu.assembler(`gtceu:${material}_crate`)
			.itemInputs(`4x #forge:plates/${material}`, `4x #forge:rods/long/${material}`)
			.itemOutputs(`gtceu:${material}_crate`)
			.duration(200)
			.EUt(16)
			.circuit(1)

		event.recipes.gtceu.macerator(`gtceu:${material}_drum`)
			.itemInputs(`gtceu:${material}_drum`)
			.itemOutputs(`6x #forge:dusts/${material}`)
			.duration(456)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		event.recipes.gtceu.macerator(`gtceu:${material}_crate`)
			.itemInputs(`gtceu:${material}_crate`)
			.itemOutputs(`8x #forge:dusts/${material}`)
			.duration(608)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		event.recipes.gtceu.arc_furnace(`gtceu:${material}_drum`)
			.itemInputs(`gtceu:${material}_drum`)
			.itemOutputs(`6x #forge:ingots/${material}`)
			.duration(456)
			.EUt(30)
			.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

		event.recipes.gtceu.arc_furnace(`gtceu:${material}_crate`)
			.itemInputs(`gtceu:${material}_crate`)
			.itemOutputs(`8x #forge:ingots/${material}`)
			.duration(608)
			.EUt(30)
			.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
	})

	// Wooden crate
	event.recipes.shaped('gtceu:wood_crate', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: '#forge:screws/wrought_iron',
		B: '#minecraft:planks',
		C: '#forge:tools/saws'
	}).id('tfg:shaped/wooden_crate_wrought_iron')

	event.recipes.gtceu.assembler('gtceu:wood_crate')
		.itemInputs('4x #minecraft:planks', '4x #forge:screws/wrought_iron')
		.itemOutputs('gtceu:wood_crate')
		.duration(100)
		.EUt(16)
		.circuit(5)

	// Steam multi parts

	event.shaped('gtceu:steel_machine_casing', [
		' A ',
		'ABA',
		' A '
	], {
		A: '#forge:ingots/steel',
		B: '#forge:tools/hammers'
	}).id('gtceu:shaped/steel_hull')

	event.shaped('gtceu:steam_input_hatch', [
		'ACA',
		' B ',
		'ACA'
	], {
		A: '#forge:screws/wrought_iron',
		B: 'gtceu:steel_machine_casing',
		C: '#forge:small_fluid_pipes/steel'
	}).id('gtceu:shaped/steam_hatch')

	event.shaped('gtceu:steam_grinder', [
		'ABA',
		'ACA',
		'ABA'
	], {
		A: 'gtceu:steam_machine_casing',
		B: '#forge:gears/invar',
		C: 'gtceu:hp_steam_macerator'
	}).id('gtceu:shaped/steam_grinder')

	event.shaped('gtceu:steam_oven', [
		'ABA',
		'ACA',
		'ABA'
	], {
		A: 'gtceu:steam_machine_casing',
		B: 'gtceu:heatproof_machine_casing',
		C: 'gtceu:hp_steam_furnace'
	}).id('gtceu:shaped/steam_oven')

	event.replaceInput({ id: 'gtceu:shaped/hv_cutter' }, 'gtceu:red_steel_buzz_saw_blade', 'gtceu:diamond_buzz_saw_blade')


	event.replaceOutput({ id: 'gtceu:macerator/macerate_steel_machine_casing' }, 'gtceu:steel_dust', '4x gtceu:steel_dust')
	event.replaceOutput({ id: 'gtceu:arc_furnace/arc_steel_machine_casing' }, 'gtceu:steel_ingot', '4x gtceu:steel_ingot')

	event.replaceOutput({ id: 'gtceu:macerator/macerate_steam_input_bus' }, 'gtceu:steel_dust', '4x gtceu:steel_dust')
	event.replaceOutput({ id: 'gtceu:arc_furnace/arc_steam_input_bus' }, 'gtceu:steel_ingot', '4x gtceu:steel_ingot')
	event.replaceOutput({ id: 'gtceu:macerator/macerate_steam_output_bus' }, 'gtceu:steel_dust', '4x gtceu:steel_dust')
	event.replaceOutput({ id: 'gtceu:arc_furnace/arc_steam_output_bus' }, 'gtceu:steel_ingot', '4x gtceu:steel_ingot')

	event.replaceOutput({ id: 'gtceu:macerator/macerate_steam_input_hatch' }, 'gtceu:steel_dust', '6x gtceu:steel_dust')
	event.replaceOutput({ id: 'gtceu:arc_furnace/arc_steam_input_hatch' }, 'gtceu:steel_block', '6x gtceu:steel_ingot')

	event.replaceOutput({ id: 'gtceu:macerator/macerate_steam_input_hatch'}, 'gtceu:steel_dust', '6x gtceu:steel_dust')
	event.replaceOutput({ id: 'gtceu:arc_furnace/arc_steam_input_hatch'}, 'gtceu:steel_block', '6x gtceu:steel_ingot')

	// #region Bedrock Miner

	event.recipes.gtceu.assembler('gtceu:mv_bedrock_miner')
		.itemInputs('1x gtceu:hv_machine_hull',
					'4x #forge:frames/steel',
					'4x #gtceu:circuits/iv',
					'4x gtceu:hv_electric_motor',
					'4x gtceu:hv_robot_arm',
					'4x gtceu:hv_conveyor_module',
					'4x #forge:gears/blue_steel')
		.itemOutputs('gtceu:mv_bedrock_ore_miner')
		.duration(400)
		.EUt(GTValues.VA[GTValues.HV])
		.circuit(2)

	event.recipes.gtceu.assembler('gtceu:hv_bedrock_miner')
		.itemInputs('1x gtceu:ev_machine_hull',
					'4x #forge:frames/titanium',
					'4x #gtceu:circuits/luv',
					'4x gtceu:luv_electric_motor',
					'4x gtceu:luv_robot_arm',
					'4x gtceu:luv_conveyor_module',
					'4x #forge:gears/ruridit')
		.itemOutputs('gtceu:hv_bedrock_ore_miner')
		.duration(400)
		.EUt(GTValues.VA[GTValues.IV])
		.circuit(2)

	event.recipes.gtceu.assembler('gtceu:ev_bedrock_miner')
		.itemInputs('1x gtceu:iv_machine_hull',
					'4x #forge:frames/tungsten_steel',
					'4x #gtceu:circuits/zpm',
					'4x gtceu:zpm_electric_motor',
					'4x gtceu:zpm_robot_arm',
					'4x gtceu:zpm_conveyor_module',
					'4x #forge:gears/osmiridium')
		.itemOutputs('gtceu:ev_bedrock_ore_miner')
		.duration(400)
		.EUt(GTValues.VA[GTValues.ZPM])
		.circuit(2)

	event.recipes.gtceu.mixer('gtceu:chipboard_composite_wax')
		.itemInputs('2x #tfg:wood_dusts',
					'1x #forge:wax')
		.itemOutputs('2x tfg:chipboard_composite')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.mixer('gtceu:chipboard_composite_resin')
		.itemInputs('4x #tfg:wood_dusts',
					'1x gtceu:sticky_resin')
		.itemOutputs('4x tfg:chipboard_composite')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.mixer('gtceu:chipboard_composite_glue')
		.itemInputs('2x #tfg:wood_dusts',
					'1x tfc:glue')
		.itemOutputs('2x tfg:chipboard_composite')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])


	event.recipes.gtceu.mixer('gtceu:chipboard_composite_fluid_glue')
		.itemInputs('1x #tfg:wood_dusts')
		.inputFluids(Fluid.of('gtceu:glue', 25))
		.itemOutputs('1x tfg:chipboard_composite')
		.duration(10)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.chemical_bath('gtceu:treated_chipboard_composite')
		.itemInputs('1x tfg:chipboard_composite')
		.inputFluids(Fluid.of('gtceu:creosote', 50))
		.itemOutputs('gtceu:treated_wood_dust')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.compressor('gtceu:wood_mdf')
		.itemInputs('1x tfg:chipboard_composite')
		.itemOutputs('gtceu:wood_plate')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.compressor('gtceu:treated_wood_mdf')
		.itemInputs('1x gtceu:treated_wood_dust')
		.itemOutputs('gtceu:treated_wood_plate')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

	//#region New Casings

	event.recipes.gtceu.assembler('red_solar_casing')
		.itemInputs('gtceu:steel_machine_casing', 'ad_astra:photovoltaic_vesnium_cell')
		.itemOutputs('tfg:casings/machine_casing_red_solar_panel')
		.circuit(6)
		.duration(2.5*20)
		.EUt(16)

	event.recipes.gtceu.assembler('iron_desh_casing')
		.itemInputs('6x gtceu:steel_plate', 'gtceu:desh_frame')
		.itemOutputs('2x tfg:casings/machine_casing_iron_desh')
		.circuit(6)
		.duration(2.5*20)
		.EUt(16)

	//#endregion

	//#region Large Solar Panel

	event.shaped(
    'gtceu:large_solar_panel',
    ['WSW', 'TZT', 'WUW'],
    {
        S: 'ad_astra:photovoltaic_vesnium_cell',
		Z: 'ad_astra:solar_panel',
        W: '#gtceu:circuits/ev',
		U: '#forge:gears/rocket_alloy_t1',
		T: '#forge:gears/desh'
    }
	).id('gtceu:shaped/large_solar_panel')

	event.recipes.gtceu.chemical_reactor('advanced_photovoltaic_cell')
		.itemInputs('ad_astra:photovoltaic_etrium_cell',
					'6x gtceu:energium_dust',
					'gtceu:carbon_fiber_plate')
		.inputFluids(Fluid.of('gtceu:helium_3', 128))
		.itemOutputs('ad_astra:photovoltaic_vesnium_cell')
		.duration(20*10)
		.EUt(GTValues.VA[GTValues.HV])

	// LSP Generating recipes

    event.recipes.gtceu.large_solar_panel('solar_panel_t1')
        .circuit(1)
		.chancedInput('ad_astra:photovoltaic_vesnium_cell', 5, 0)  // Slightly lower
        .duration(20*20)
		//.daytime(false)
		.dimension('ad_astra:moon')
        .EUt(-32*64/2)
	
    event.recipes.gtceu.large_solar_panel('solar_panel_t2')
        .circuit(2)
        .notConsumable(InputItem.of('ad_astra:photovoltaic_vesnium_cell'))
		.chancedFluidInput('tfg:solar_coolant 100', 5000, 0)
        .duration(20*20)
		//.daytime(false)
		.dimension('ad_astra:moon')
        .EUt(-((GTValues.V[GTValues.IV])/2))

    event.recipes.gtceu.large_solar_panel('solar_panel_t3')
        .circuit(3)
        .notConsumable(InputItem.of('ad_astra:photovoltaic_vesnium_cell'))
		.chancedFluidInput(Fluid.of('tfg:solar_coolant', 100), 5000, 0)
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144))
		.chancedFluidOutput('tfg:fluix 36', 7500, 0)
        .duration(20*20)
		//.daytime(false)
		.dimension('ad_astra:moon')
        .EUt(-((GTValues.V[GTValues.LuV])/2))
		
}