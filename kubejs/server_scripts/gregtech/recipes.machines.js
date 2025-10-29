// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
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
	removeMaceratorRecipe(event, 'macerate_coke_oven')
	event.recipes.gtceu.shaped('gtceu:coke_oven', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'gtceu:coke_oven_bricks',
		B: ChemicalHelper.get(TagPrefix.plate, GTMaterials.WroughtIron, 1),
		C: '#forge:tools/wrenches'
	}).addMaterialInfo().id('gtceu:shaped/coke_oven')

	// Coke Oven Hatch
	removeMaceratorRecipe(event, 'macerate_coke_oven_hatch')
	event.recipes.tfc.no_remainder_shaped_crafting(
		event.shaped('gtceu:coke_oven_hatch', [
			'AB'
		], {
			A: 'gtceu:coke_oven_bricks',
			B: '#tfc:barrels'
		})
	).id('tfg:shaped/coke_oven_hatch_barrel')

	event.remove({ id: 'gtceu:arc_furnace/arc_coke_oven_hatch' })
	event.recipes.gtceu.shaped('gtceu:coke_oven_hatch', [
		'AB'
	], {
		A: 'gtceu:coke_oven_bricks',
		B: '#forge:chests/wooden'
	}).addMaterialInfo().id('gtceu:shaped/coke_oven_hatch')

	//#endregion

	//#region Выход: Стальные машины

	// HP Steam Boilers
	removeMaceratorRecipe(event, 'macerate_hp_steam_solid_boiler')
	event.recipes.gtceu.shaped('gtceu:hp_steam_solid_boiler', [
		'AEA',
		'ADA',
		'BCB'
	], {
		A: ChemicalHelper.get(TagPrefix.plate, GTMaterials.Steel, 1),
		B: ChemicalHelper.get(TagPrefix.pipeSmallFluid, GTMaterials.TinAlloy, 1),
		C: 'gtceu:steel_brick_casing',
		D: 'tfc:crucible',
		E: ChemicalHelper.get(TagPrefix.rod, GTMaterials.BlackSteel, 1)
	}).addMaterialInfo().id('gtceu:shaped/steam_boiler_coal_steel')

	removeMaceratorRecipe(event, 'macerate_hp_steam_liquid_boiler')
	event.recipes.gtceu.shaped('gtceu:hp_steam_liquid_boiler', [
		'AEA',
		'ADA',
		'BCB'
	], {
		A: ChemicalHelper.get(TagPrefix.plate, GTMaterials.Steel, 1),
		B: ChemicalHelper.get(TagPrefix.pipeSmallFluid, GTMaterials.TinAlloy, 1),
		C: 'gtceu:steel_brick_casing',
		D: '#forge:glass',
		E: ChemicalHelper.get(TagPrefix.rod, GTMaterials.BlackSteel, 1)
	}).addMaterialInfo().id('gtceu:shaped/steam_boiler_lava_steel')

	removeMaceratorRecipe(event, 'macerate_hp_steam_solar_boiler')
	event.recipes.gtceu.shaped('gtceu:hp_steam_solar_boiler', [
		'AAA',
		'BCB',
		'EDE'
	], {
		A: '#forge:glass_panes',
		B: ChemicalHelper.get(TagPrefix.plateDouble, GTMaterials.Silver, 1),
		C: ChemicalHelper.get(TagPrefix.rod, GTMaterials.BlackSteel, 1),
		D: 'gtceu:steel_brick_casing',
		E: ChemicalHelper.get(TagPrefix.pipeSmallFluid, GTMaterials.TinAlloy, 1),
	}).addMaterialInfo().id('gtceu:shaped/steam_boiler_solar_steel')

	// Экстрактор
	removeMaceratorRecipe(event, 'macerate_hp_steam_extractor')
	event.recipes.gtceu.shaped('gtceu:hp_steam_extractor', [
		'BEB',
		'CAC',
		'DFD'
	], {
		A: 'gtceu:steel_brick_casing',
		B: ChemicalHelper.get(TagPrefix.pipeSmallFluid, GTMaterials.TinAlloy, 1),
		C: ChemicalHelper.get(TagPrefix.plate, GTMaterials.Steel, 1),
		D: ChemicalHelper.get(TagPrefix.plate, GTMaterials.WroughtIron, 1),
		E: '#forge:glass_panes',
		F: ChemicalHelper.get(TagPrefix.ring, GTMaterials.BlackSteel, 1)
	}).addMaterialInfo().id('gtceu:shaped/steam_extractor_steel')

	// Дробитель
	removeMaceratorRecipe(event, 'macerate_hp_steam_macerator')
	event.recipes.gtceu.shaped('gtceu:hp_steam_macerator', [
		'BFB',
		'CAC',
		'DED'
	], {
		A: 'gtceu:steel_brick_casing',
		B: '#forge:small_gears/wrought_iron',
		C: ChemicalHelper.get(TagPrefix.plate, GTMaterials.Steel, 1),
		D: ChemicalHelper.get(TagPrefix.rod, GTMaterials.BlackSteel, 1),
		E: ChemicalHelper.get(TagPrefix.pipeSmallFluid, GTMaterials.TinAlloy, 1),
		F: '#forge:raw_materials/diamond'
	}).addMaterialInfo().id('gtceu:shaped/steam_macerator_steel')

	// Компрессор
	removeMaceratorRecipe(event, 'macerate_hp_steam_compressor')
	event.recipes.gtceu.shaped('gtceu:hp_steam_compressor', [
		'BCB',
		'EAE',
		'DFD'
	], {
		A: 'gtceu:steel_brick_casing',
		B: ChemicalHelper.get(TagPrefix.pipeSmallFluid, GTMaterials.TinAlloy, 1),
		C: ChemicalHelper.get(TagPrefix.plate, GTMaterials.Steel, 1),
		D: ChemicalHelper.get(TagPrefix.plate, GTMaterials.WroughtIron, 1),
		E: 'minecraft:piston',
		F: ChemicalHelper.get(TagPrefix.rod, GTMaterials.BlackSteel, 1)
	}).addMaterialInfo().id('gtceu:shaped/steam_compressor_steel')

	// Молот
	removeMaceratorRecipe(event, 'macerate_hp_steam_forge_hammer')
	event.recipes.gtceu.shaped('gtceu:hp_steam_forge_hammer', [
		'DFD',
		'BEB',
		'CAC'
	], {
		A: 'gtceu:steel_brick_casing',
		B: ChemicalHelper.get(TagPrefix.pipeSmallFluid, GTMaterials.TinAlloy, 1),
		C: ChemicalHelper.get(TagPrefix.plate, GTMaterials.Steel, 1),
		D: ChemicalHelper.get(TagPrefix.plate, GTMaterials.WroughtIron, 1),
		E: ChemicalHelper.get(TagPrefix.ingot, GTMaterials.BlackSteel, 1),
		F: 'minecraft:piston'
	}).addMaterialInfo().id('gtceu:shaped/steam_hammer_steel')

	// Печь
	removeMaceratorRecipe(event, 'macerate_hp_steam_furnace')
	event.recipes.gtceu.shaped('gtceu:hp_steam_furnace', [
		'BCB',
		'DAD',
		'FFF'
	], {
		A: 'gtceu:steel_brick_casing',
		B: ChemicalHelper.get(TagPrefix.pipeSmallFluid, GTMaterials.TinAlloy, 1),
		C: ChemicalHelper.get(TagPrefix.plate, GTMaterials.Steel, 1),
		D: ChemicalHelper.get(TagPrefix.plate, GTMaterials.WroughtIron, 1),
		F: ChemicalHelper.get(TagPrefix.rod, GTMaterials.BlackSteel, 1)
	}).addMaterialInfo().id('gtceu:shaped/steam_furnace_steel')

	// Сплавщик
	removeMaceratorRecipe(event, 'macerate_hp_steam_alloy_smelter')
	event.recipes.gtceu.shaped('gtceu:hp_steam_alloy_smelter', [
		'FCF',
		'DAD',
		'CBC'
	], {
		A: 'gtceu:steel_brick_casing',
		B: ChemicalHelper.get(TagPrefix.pipeSmallFluid, GTMaterials.TinAlloy, 1),
		C: ChemicalHelper.get(TagPrefix.plate, GTMaterials.Steel, 1),
		D: ChemicalHelper.get(TagPrefix.plate, GTMaterials.WroughtIron, 1),
		F: ChemicalHelper.get(TagPrefix.rod, GTMaterials.BlackSteel, 1)
	}).addMaterialInfo().id('gtceu:shaped/steam_alloy_smelter_steel')

	// Блоко-ломатель
	removeMaceratorRecipe(event, 'macerate_hp_steam_rock_crusher')
	event.recipes.gtceu.shaped('gtceu:hp_steam_rock_crusher', [
		'ECE',
		'BAB',
		'DDD'
	], {
		A: 'gtceu:steel_brick_casing',
		B: ChemicalHelper.get(TagPrefix.pipeSmallFluid, GTMaterials.TinAlloy, 1),
		C: '#forge:drill_heads',
		D: ChemicalHelper.get(TagPrefix.rod, GTMaterials.WroughtIron, 1),
		E: ChemicalHelper.get(TagPrefix.screw, GTMaterials.WroughtIron, 1)
	}).addMaterialInfo().id('gtceu:shaped/steam_rock_breaker_steel')

	// Miner
	removeMaceratorRecipe(event, 'macerate_hp_steam_miner')
	event.recipes.gtceu.shaped('gtceu:hp_steam_miner', [
		'EFE',
		'BAB',
		'DCD'
	], {
		A: 'gtceu:steel_brick_casing',
		B: ChemicalHelper.get(TagPrefix.pipeSmallFluid, GTMaterials.TinAlloy, 1),
		C: '#forge:drill_heads',
		D: ChemicalHelper.get(TagPrefix.rod, GTMaterials.Steel, 1),
		E: ChemicalHelper.get(TagPrefix.plate, GTMaterials.WroughtIron, 1),
		F: '#gtceu:circuits/ulv'
	}).addMaterialInfo().id('gtceu:shaped/steam_miner_steel')

	//#endregion

	//#region passthrough hatches
	event.recipes.gtceu.shaped('gtceu:lv_item_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:lv_conveyor_module',
		B: 'gtceu:small_wrought_iron_gear',
		C: 'gtceu:lv_machine_hull',
		D: '#tfg:default_chests'
	}).addMaterialInfo().id('gtceu:shaped/passthrough_hatch_item_lv')

	event.recipes.gtceu.shaped('gtceu:mv_item_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:mv_conveyor_module',
		B: 'gtceu:small_bronze_gear',
		C: 'gtceu:mv_machine_hull',
		D: '#tfg:default_chests'
	}).addMaterialInfo().id('gtceu:shaped/passthrough_hatch_item_mv')

	event.recipes.gtceu.shaped('gtceu:ev_item_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:ev_conveyor_module',
		B: 'gtceu:small_titanium_gear',
		C: 'gtceu:ev_machine_hull',
		D: '#tfg:default_chests'
	}).addMaterialInfo().id('gtceu:shaped/passthrough_hatch_item_ev')

	event.recipes.gtceu.shaped('gtceu:iv_item_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:iv_conveyor_module',
		B: 'gtceu:small_tungsten_steel_gear',
		C: 'gtceu:iv_machine_hull',
		D: '#tfg:default_chests'
	}).addMaterialInfo().id('gtceu:shaped/passthrough_hatch_item_iv')

	event.recipes.gtceu.shaped('gtceu:luv_item_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:luv_conveyor_module',
		B: 'gtceu:small_hsss_gear',
		C: 'gtceu:luv_machine_hull',
		D: '#tfg:default_chests'
	}).addMaterialInfo().id('gtceu:shaped/passthrough_hatch_item_luv')

	event.recipes.gtceu.shaped('gtceu:zpm_item_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:zpm_conveyor_module',
		B: 'gtceu:small_osmiridium_gear',
		C: 'gtceu:zpm_machine_hull',
		D: '#tfg:default_chests'
	}).addMaterialInfo().id('gtceu:shaped/passthrough_hatch_item_zpm')

	event.recipes.gtceu.shaped('gtceu:uv_item_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:uv_conveyor_module',
		B: 'gtceu:small_naquadah_alloy_gear',
		C: 'gtceu:uv_machine_hull',
		D: '#tfg:default_chests'
	}).addMaterialInfo().id('gtceu:shaped/passthrough_hatch_item_uv')

	event.recipes.gtceu.shaped('gtceu:lv_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:lv_electric_pump',
		B: 'gtceu:bronze_small_fluid_pipe',
		C: 'gtceu:lv_machine_hull',
		D: '#forge:glass'
	}).addMaterialInfo().id('gtceu:shaped/passthrough_hatch_fluid_lv')

	event.recipes.gtceu.shaped('gtceu:mv_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:mv_electric_pump',
		B: 'gtceu:steel_small_fluid_pipe',
		C: 'gtceu:mv_machine_hull',
		D: '#forge:glass'
	}).addMaterialInfo().id('gtceu:shaped/passthrough_hatch_fluid_mv')

	event.remove('gtceu:shaped/passthrough_hatch_fluid')

	event.recipes.gtceu.shaped('gtceu:hv_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:hv_electric_pump',
		B: 'gtceu:stainless_steel_small_fluid_pipe',
		C: 'gtceu:hv_machine_hull',
		D: 'gtceu:tempered_glass'
	}).addMaterialInfo().id('gtceu:shaped/passthrough_hatch_fluid_hv')

	event.recipes.gtceu.shaped('gtceu:ev_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:ev_electric_pump',
		B: 'gtceu:titanium_small_fluid_pipe',
		C: 'gtceu:ev_machine_hull',
		D: 'gtceu:tempered_glass'
	}).addMaterialInfo().id('gtceu:shaped/passthrough_hatch_fluid_ev')

	event.recipes.gtceu.shaped('gtceu:iv_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:iv_electric_pump',
		B: 'gtceu:tungsten_steel_small_fluid_pipe',
		C: 'gtceu:iv_machine_hull',
		D: 'gtceu:laminated_glass'
	}).addMaterialInfo().id('gtceu:shaped/passthrough_hatch_fluid_iv')

	event.recipes.gtceu.shaped('gtceu:luv_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:luv_electric_pump',
		B: 'gtceu:niobium_titanium_small_fluid_pipe',
		C: 'gtceu:luv_machine_hull',
		D: 'gtceu:laminated_glass'
	}).addMaterialInfo().id('gtceu:shaped/passthrough_hatch_fluid_luv')

	event.recipes.gtceu.shaped('gtceu:zpm_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:zpm_electric_pump',
		B: 'gtceu:polybenzimidazole_small_fluid_pipe',
		C: 'gtceu:zpm_machine_hull',
		D: 'gtceu:fusion_glass'
	}).addMaterialInfo().id('gtceu:shaped/passthrough_hatch_fluid_zpm')

	event.recipes.gtceu.shaped('gtceu:uv_fluid_passthrough_hatch', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:uv_electric_pump',
		B: 'gtceu:naquadah_small_fluid_pipe',
		C: 'gtceu:uv_machine_hull',
		D: 'gtceu:fusion_glass'
	}).addMaterialInfo().id('gtceu:shaped/passthrough_hatch_fluid_uv')

	//#endregion

	//#region ULV Hatches

	event.recipes.gtceu.shaped('gtceu:ulv_input_bus', [
		'CAC',
		'CBC',
		'CDC'
	], {
		A: '#forge:chests/wooden',
		B: 'gtceu:ulv_machine_hull',
		C: 'tfc:glue',
		D: '#forge:tools/wrenches'
	}).addMaterialInfo().id('gtceu:shaped/ulv_input_bus')

	event.recipes.gtceu.shaped('gtceu:ulv_output_bus', [
		'CDC',
		'CBC',
		'CAC'
	], {
		A: '#forge:chests/wooden',
		B: 'gtceu:ulv_machine_hull',
		C: 'tfc:glue',
		D: '#forge:tools/wrenches'
	}).addMaterialInfo().id('gtceu:shaped/ulv_output_bus')

	event.recipes.gtceu.shaped('gtceu:ulv_input_hatch', [
		'CAC',
		'CBC',
		'CDC'
	], {
		A: '#forge:glass',
		B: 'gtceu:ulv_machine_hull',
		C: 'tfc:glue',
		D: '#forge:tools/wrenches'
	}).addMaterialInfo().id('gtceu:shaped/ulv_input_hatch')

	event.recipes.gtceu.shaped('gtceu:ulv_output_hatch', [
		'CDC',
		'CBC',
		'CAC'
	], {
		A: '#forge:glass',
		B: 'gtceu:ulv_machine_hull',
		C: 'tfc:glue',
		D: '#forge:tools/wrenches'
	}).addMaterialInfo().id('gtceu:shaped/ulv_output_hatch')

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
		.addMaterialInfo(true, true)

	event.recipes.gtceu.assembler('long_distance_fluid_endpoint')
		.itemInputs('2x #forge:large_fluid_pipes/vanadium_steel', '8x #forge:plates/polyvinyl_chloride', '2x #forge:gears/stainless_steel')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
		.itemOutputs('2x gtceu:long_distance_fluid_pipeline_endpoint')
		.EUt(GTValues.VA[GTValues.HV])
		.circuit(1)
		.duration(400)
		.addMaterialInfo(true, true)

	//#endregion

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
			.addMaterialInfo(true)

		event.recipes.gtceu.assembler(`gtceu:${material}_crate`)
			.itemInputs(`4x #forge:plates/${material}`, `4x #forge:rods/long/${material}`)
			.itemOutputs(`gtceu:${material}_crate`)
			.duration(200)
			.EUt(16)
			.circuit(1)
			.addMaterialInfo(true)
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

	event.recipes.gtceu.assembler('tfg:wood_crate')
		.itemInputs('4x #minecraft:planks', '4x #forge:screws/wrought_iron')
		.itemOutputs('gtceu:wood_crate')
		.duration(100)
		.EUt(16)
		.circuit(5)

	event.recipes.shaped('gtceu:wood_crate', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: '#forge:screws/any_bronze',
		B: '#minecraft:planks',
		C: '#forge:tools/saws'
	}).id('tfg:shaped/wooden_crate_bronze')

	event.recipes.gtceu.assembler('tfg:wood_crate_bronze')
		.itemInputs('4x #minecraft:planks', '4x #forge:screws/any_bronze')
		.itemOutputs('gtceu:wood_crate')
		.duration(100)
		.EUt(16)
		.circuit(5)

	// Steam multi parts

	removeMaceratorRecipe(event, 'macerate_steel_machine_casing')
	event.recipes.gtceu.shaped('gtceu:steel_machine_casing', [
		' A ',
		'ABA',
		' A '
	], {
		A: ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 1),
		B: '#forge:tools/hammers'
	}).addMaterialInfo().id('gtceu:shaped/steel_hull')

	removeMaceratorRecipe(event, 'macerate_steam_input_hatch')
	event.recipes.gtceu.shaped('gtceu:steam_input_hatch', [
		'ACA',
		' B ',
		'ACA'
	], {
		A: ChemicalHelper.get(TagPrefix.screw, GTMaterials.WroughtIron, 1),
		B: 'gtceu:steel_machine_casing',
		C: ChemicalHelper.get(TagPrefix.pipeSmallFluid, GTMaterials.Steel, 1)
	}).addMaterialInfo().id('gtceu:shaped/steam_hatch')

	removeMaceratorRecipe(event, 'macerate_steam_grinder')
	event.recipes.gtceu.shaped('gtceu:steam_grinder', [
		'ABA',
		'ACA',
		'ABA'
	], {
		A: 'gtceu:bronze_plate',
		B: ChemicalHelper.get(TagPrefix.gear, GTMaterials.Invar, 1),
		C: 'gtceu:hp_steam_macerator'
	}).addMaterialInfo().id('gtceu:shaped/steam_grinder')

	removeMaceratorRecipe(event, 'macerate_steam_oven')
	event.recipes.gtceu.shaped('gtceu:steam_oven', [
		'ABA',
		'ACA',
		'ABA'
	], {
		A: 'gtceu:bronze_plate',
		B: 'gtceu:heatproof_machine_casing',
		C: 'gtceu:hp_steam_furnace'
	}).addMaterialInfo().id('gtceu:shaped/steam_oven')

	event.replaceInput({ id: 'gtceu:shaped/hv_cutter' }, 'gtceu:red_steel_buzz_saw_blade', 'gtceu:diamond_buzz_saw_blade')

	removeMaceratorRecipe(event, 'macerate_steam_input_bus')
	event.recipes.gtceu.shaped('gtceu:steam_input_bus', ['A', 'B'], {
		A: '#forge:chests/wooden',
		B: 'gtceu:steam_machine_casing'
	}).addMaterialInfo().id('gtceu:shaped/steam_input_bus')

	removeMaceratorRecipe(event, 'macerate_steam_output_bus')
	event.recipes.gtceu.shaped('gtceu:steam_output_bus', ['B', 'A'], {
		A: '#forge:chests/wooden',
		B: 'gtceu:steam_machine_casing'
	}).addMaterialInfo().id('gtceu:shaped/steam_output_bus')

	//#region Chipboard Composite

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

	event.recipes.gtceu.compressor('gtceu:wood_mdf')
		.itemInputs('1x tfg:chipboard_composite')
		.itemOutputs('gtceu:wood_plate')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.chemical_bath('gtceu:treated_chipboard_composite')
		.itemInputs('1x tfg:chipboard_composite')
		.inputFluids(Fluid.of('gtceu:creosote', 50))
		.itemOutputs('tfg:treated_chipboard_composite')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.chemical_bath('gtceu:bath_high_density_treated_fiberboard')
		.itemInputs('1x gtceu:wood_plate')
		.inputFluids(Fluid.of('gtceu:creosote', 50))
		.itemOutputs('tfg:high_density_treated_fiberboard')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.chemical_bath('gtceu:bath_treated_wood_dust')
		.itemInputs('#tfg:wood_dusts')
		.inputFluids(Fluid.of('gtceu:creosote', 50))
		.itemOutputs('gtceu:treated_wood_dust')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.compressor('tfg:compressed_treated_chipboard_composite')
		.itemInputs('tfg:treated_chipboard_composite')
		.itemOutputs('tfg:high_density_treated_fiberboard')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('tfg:resin_circuit_assembler')
		.itemInputs('gtceu:wood_plate', '2x gtceu:sticky_resin')
		.itemOutputs('gtceu:resin_circuit_board')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.ULV])

	//#region New Casings

	event.recipes.gtceu.assembler('basic_solar_casing')
		.itemInputs('gtceu:steel_machine_casing', 'tfg:photo_cell_t1')
		.itemOutputs('8x tfg:casings/machine_casing_blue_solar_panel')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(16)

	event.recipes.gtceu.assembler('advanced_solar_casing')
		.itemInputs('8x tfg:casings/machine_casing_blue_solar_panel', 'ad_astra:photovoltaic_etrium_cell')
		.itemOutputs('8x tfg:casings/machine_casing_green_solar_panel')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(16)

	event.recipes.gtceu.assembler('elite_solar_casing')
		.itemInputs('8x tfg:casings/machine_casing_green_solar_panel', 'ad_astra:photovoltaic_vesnium_cell')
		.itemOutputs('8x tfg:casings/machine_casing_red_solar_panel')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(16)

	event.recipes.gtceu.assembler('iron_desh_casing')
		.itemInputs(ChemicalHelper.get(TagPrefix.plate, GTMaterials.Steel, 6), 'gtceu:desh_frame')
		.itemOutputs('2x tfg:casings/machine_casing_iron_desh')
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(16)

	event.recipes.gtceu.assembler('steel_machine_casing')
		.itemInputs(ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 4))
		.itemOutputs('gtceu:steel_machine_casing')
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(16)

	event.recipes.gtceu.assembler('tfg:casings/machine_casing_stainless_evaporation')
		.itemInputs('gtceu:clean_machine_casing', '4x gtceu:annealed_copper_double_wire')
		.inputFluids(Fluid.of('gtceu:polyvinyl_chloride', 288))
		.itemOutputs('tfg:casings/machine_casing_stainless_evaporation')
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.assembler('tfg:casings/machine_casing_mars')
		.itemInputs('gtceu:clean_machine_casing', '4x #forge:double_wires/kanthal')
		.inputFluids(Fluid.of('gtceu:polybenzimidazole', 288))
		.itemOutputs('tfg:casings/machine_casing_mars')
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.assembler('gtceu:atomic_casing')
		.itemInputs('4x #forge:dense_plates/lead', '2x #forge:plates/rtm_alloy', '#forge:frames/titanium')
		.inputFluids(Fluid.of('gtceu:polyvinyl_butyral', 288))
		.itemOutputs('2x gtceu:atomic_casing')
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(GTValues.VA[GTValues.HV])

	//#endregion

	//#region Large Solar Panel

	event.shaped(
		'gtceu:large_solar_panel',
		['WSW', 'TZT', 'WUW'],
		{
			S: 'tfg:photo_cell_t1',
			Z: 'ad_astra:solar_panel',
			W: '#gtceu:circuits/ev',
			U: '#forge:gears/rocket_alloy_t1',
			T: '#forge:gears/desh'
		}
	).id('gtceu:shaped/large_solar_panel')

	event.shaped(
		'gtceu:large_solar_panel_tier2',
		['WSW', 'TZT', 'WUW'],
		{
			S: 'ad_astra:photovoltaic_etrium_cell',
			Z: 'gtceu:large_solar_panel',
			W: '#gtceu:circuits/iv',
			U: '#forge:gears/rocket_alloy_t1',
			T: '#forge:gears/desh'
		}
	).id('gtceu:shaped/large_solar_panel_tier2')

	event.shaped(
		'gtceu:large_solar_panel_tier3',
		['WSW', 'TZT', 'WUW'],
		{
			S: 'ad_astra:photovoltaic_vesnium_cell',
			Z: 'gtceu:large_solar_panel_tier2',
			W: '#gtceu:circuits/luv',
			U: '#forge:gears/rocket_alloy_t1',
			T: '#forge:gears/desh'
		}
	).id('gtceu:shaped/large_solar_panel_tier3')

	event.recipes.gtceu.chemical_reactor('advanced_photovoltaic_cell')
		.itemInputs('8x tfg:photo_cell_t1',
			'6x #forge:dusts/vanadium_gallium',
			'#forge:insulation_t2/sheet')
		.inputFluids(Fluid.of('gtceu:helium_3', 1000))
		.itemOutputs('8x ad_astra:photovoltaic_etrium_cell')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.chemical_reactor('expert_photovoltaic_cell')
		.itemInputs('8x ad_astra:photovoltaic_etrium_cell',
			'6x gtceu:energium_dust',
			'#forge:insulation_t3/sheet')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 1000))
		.itemOutputs('8x ad_astra:photovoltaic_vesnium_cell')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.IV])

	// LSP Generating recipes

	// Solar T1

	event.recipes.gtceu.large_solar_panel('solar_panel_t1_emergency')
		.chancedInput('tfg:photo_cell_t1', 100, 0)
		.duration(20 * 20)
		.daytime(false)
		.dimension('ad_astra:moon')
		.EUt(-((GTValues.V[GTValues.HV])), 2)
		.circuit(1)

	event.recipes.gtceu.large_solar_panel('solar_panel_t1')
		.notConsumable('tfg:photo_cell_t1')
		.perTick(true)
		.chancedFluidInput('tfg:compressed_trimix_3 4', 5000, 0)
		.perTick(false)
		.duration(20 * 20)
		.daytime(false)
		.dimension('ad_astra:moon')
		.EUt(-(GTValues.V[GTValues.EV]), 2)
		.circuit(2)

	// Solar T2

	event.recipes.gtceu.large_solar_panel_tier2('solar_panel_t2_emergency')
		.chancedInput('ad_astra:photovoltaic_etrium_cell', 100, 0)
		.duration(20 * 20)
		.daytime(false)
		.dimension('ad_astra:moon')
		.EUt(-(GTValues.V[GTValues.EV]), 2)
		.circuit(1)

	event.recipes.gtceu.large_solar_panel_tier2('solar_panel_t2_strong')
		.notConsumable('ad_astra:photovoltaic_etrium_cell')
		.perTick(true)
		.chancedFluidInput('tfg:solar_coolant 10', 5000, 0)
		.inputFluids('tfg:cryogenized_fluix 4')
		.outputFluids('tfg:fluix 1')
		.perTick(false)
		.duration(20 * 20)
		.daytime(false)
		.dimension('ad_astra:moon')
		.EUt(-(GTValues.V[GTValues.IV]), 2)
		.circuit(2)

	event.recipes.gtceu.large_solar_panel_tier2('solar_panel_t2_cheap')
		.notConsumable('ad_astra:photovoltaic_etrium_cell')
		.perTick(true)
		.inputFluids('tfg:compressed_trimix_3 1')
		.perTick(false)
		.duration(20 * 20)
		.daytime(false)
		.dimension('ad_astra:moon')
		.EUt(-(GTValues.V[GTValues.EV]), 2)
		.circuit(3)

	// Solar T3

	event.recipes.gtceu.large_solar_panel_tier3('solar_panel_t3_emergency')
		.chancedInput('ad_astra:photovoltaic_vesnium_cell', 100, 0)
		.duration(20 * 20)
		.daytime(false)
		.dimension('ad_astra:moon')
		.EUt(-(GTValues.V[GTValues.IV]), 2)
		.circuit(1)

	event.recipes.gtceu.large_solar_panel_tier3('solar_panel_t3_strong')
		.notConsumable('ad_astra:photovoltaic_vesnium_cell')
		.perTick(true)
		.chancedFluidInput('tfg:solar_coolant_tier2 10', 5000, 0)
		.inputFluids('tfg:cryogenized_fluix 4')
		.outputFluids('tfg:fluix 1')
		.perTick(false)
		.duration(20 * 20)
		.daytime(false)
		.dimension('ad_astra:moon')
		.EUt(-(GTValues.V[GTValues.LuV]), 2)
		.circuit(2)

	event.recipes.gtceu.large_solar_panel_tier3('solar_panel_t3_cheap')
		.notConsumable('ad_astra:photovoltaic_vesnium_cell')
		.perTick(true)
		.chancedFluidInput('tfg:solar_coolant 10', 5000, 0)
		.inputFluids('tfg:cryogenized_fluix 4')
		.outputFluids('tfg:fluix 1')
		.perTick(false)
		.duration(20 * 20)
		.daytime(false)
		.dimension('ad_astra:moon')
		.EUt(-(GTValues.V[GTValues.IV]), 2)
		.circuit(2)

	//#endregion

	//#region Mars Ore Line

	// Multiblock

	event.shaped('gtceu:ostrum_linear_accelerator', [
		'USU',
		'WZW',
		'PTP'
	], {
		S: 'tfg:casings/machine_casing_vacuum_engine_intake',
		Z: 'gtceu:iv_machine_hull',
		W: '#gtceu:circuits/iv',
		U: '#forge:double_plates/stellite_100',
		T: '#forge:single_cables/platinum',
		P: 'gtceu:iv_electric_pump'
	}
	).id('gtceu:shaped/ostrum_linear_accelerator')

	event.recipes.gtceu.assembler('tfg:ostrum_harvester')
		.itemInputs(
			'1x gtceu:ev_machine_hull',
			'4x #gtceu:circuits/ev',
			'4x gtceu:ev_electric_motor',
			'4x #forge:rotors/black_steel',
			'4x gtceu:ev_electric_pump',
			'4x #forge:gears/desh')
		.itemOutputs('gtceu:ostrum_harvester')
		.duration(400)
		.EUt(GTValues.VA[GTValues.EV])
		.circuit(2)

	event.recipes.gtceu.assembler('tfg:moon_dust_harvester')
		.itemInputs(
			'1x gtceu:hv_machine_hull',
			'4x #gtceu:circuits/hv',
			'4x gtceu:hv_electric_motor',
			'4x #forge:rotors/titanium',
			'4x gtceu:hv_electric_pump',
			'4x #forge:gears/rocket_alloy_t1')
		.itemOutputs('gtceu:moon_dust_harvester')
		.duration(400)
		.EUt(GTValues.VA[GTValues.HV])
		.circuit(2)

	// Vacuum Intake

	event.shaped('tfg:casings/machine_casing_vacuum_engine_intake', [
		'USU',
		'WZW',
		'UTU'
	], {
		S: '#forge:tools/hammers',
		T: '#forge:tools/wrenches',
		W: '#forge:rotors/ultimet',
		U: 'gtceu:ultimet_normal_item_pipe',
		Z: 'gtceu:inert_machine_casing'
	}).id('tfg:shaped/casing_machine_casing_vacuum_engine_intake')

	event.recipes.gtceu.assembler('tfg:casings/machine_casing_vacuum_engine_intake')
		.itemInputs(
			'2x #forge:rotors/ultimet',
			'4x gtceu:ultimet_normal_item_pipe',
			'1x gtceu:inert_machine_casing')
		.itemOutputs('tfg:casings/machine_casing_vacuum_engine_intake')
		.duration(50)
		.EUt(GTValues.VH[GTValues.LV])
		.circuit(2)

	// Stainless Evaporation Tower

	event.recipes.gtceu.shaped('tfg:evaporation_tower', [
		'TUT',
		'WZW',
		'TUT'
	], {
		T: '#gtceu:circuits/iv',
		W: 'gtceu:ev_electric_pump',
		U: '#forge:double_wires/nichrome',
		Z: 'gtceu:ev_machine_hull'
	}).addMaterialInfo().id('tfg:shaped/evaporation_tower')

	//#endregion

	//#region Nuclear Controler

	event.shaped('deafission:fission_reactor_mk1', [
		'TUT',
		'WZW',
		'TUT'
	], {
		T: 'gtceu:atomic_casing',
		W: '#gtceu:circuits/ev',
		U: 'gtceu:hv_field_generator',
		Z: 'gtceu:ev_machine_hull'
	}
	).id('tfg:shaped/fission_reactor_mk1')

	event.shaped('gtceu:nuclear_fuel_factory', [
		'TUT',
		'WZW',
		'TBT'
	], {
		T: 'gtceu:atomic_casing',
		W: '#gtceu:circuits/ev',
		U: 'gtceu:ev_emitter',
		Z: 'gtceu:ev_machine_hull',
		B: 'gtceu:ev_robot_arm'
	}
	).id('tfg:shaped/nuclear_fuel_factory')

	event.shaped('gtceu:heat_exchanger', [
		'TUT',
		'WZW',
		'GBG'
	], {
		T: 'gtceu:high_temperature_smelting_casing',
		W: '#gtceu:circuits/ev',
		U: 'gtceu:ev_sensor',
		Z: 'gtceu:ev_machine_hull',
		B: 'gtceu:ev_fluid_regulator',
		G: '#forge:gears/ostrum_iodide'
	}
	).id('tfg:shaped/heat_exchanger')

	event.shaped('tfg:nuclear_turbine', [
		'CTC',
		'TZT',
		'BTB'
	], {
		T: '#forge:gears/magnalium',
		Z: 'gtceu:ev_machine_hull',
		B: 'gtceu:ultimet_large_item_pipe',
		C: '#gtceu:circuits/ev'
	}
	).id('tfg:shaped/nuclear_turbine')

}
