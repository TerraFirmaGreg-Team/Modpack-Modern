// priority: 0
"use strict";

const registerAE2Recipes = (event) => {

	// Удаление рецептов мода
	event.remove({
		not: [
			{ id: 'ae2:transform/entangled_singularity_from_pearl' },
			{ id: 'ae2:network/parts/energy_acceptor' },
			{ id: 'ae2:network/blocks/energy_energy_acceptor_alt' },
			{ id: 'ae2:network/blocks/pattern_providers_interface_part' },
			{ id: 'ae2:network/blocks/pattern_providers_interface_alt' },
			{ id: 'ae2:network/blocks/interfaces_interface_part' },
			{ id: 'ae2:network/blocks/interfaces_interface_alt' },
			{ id: 'ae2:special/facade' },
		], mod: 'ae2'
	});

	event.remove({ output: 'ae2:fe_p2p_tunnel' })

	// Cutting knives (for renaming things)
	event.recipes.gtceu.shaped('ae2:certus_quartz_cutting_knife', [
		'  A',
		'BA ',
		'CCB',
	], {
		A: '#forge:rods',
		B: '#forge:plates/steel',
		C: '#forge:exquisite_gems/certus_quartz',
	}).id('tfg:crafting/certus_quartz_cutting_knife')

	event.recipes.gtceu.shaped('ae2:nether_quartz_cutting_knife', [
		'  A',
		'BA ',
		'CCB',
	], {
		A: '#forge:rods',
		B: '#forge:plates/steel',
		C: '#forge:exquisite_gems/nether_quartz',
	}).id('tfg:crafting/nether_quartz_cutting_knife')

	// Network tool
	event.recipes.gtceu.shaped('ae2:network_tool', [
		'AB',
		'CD',
	], {
		A: '#forge:tools/wrenches',
		B: '#gtceu:circuits/lv',
		C: 'ae2:calculation_processor',
		D: '#ae2:illuminated_panel',
	}).id('tfg:crafting/network_tool')

	// Wireless Access Point
	event.recipes.gtceu.shaped('ae2:wireless_access_point', [
		'A',
		'B',
		'C'
	], {
		A: 'ae2:wireless_receiver',
		B: 'ae2:calculation_processor',
		C: '#ae2:glass_cable',
	}).addMaterialInfo().id('tfg:crafting/wireless_access_point')

	// Wireless Receiver
	event.recipes.gtceu.shaped('ae2:wireless_receiver', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: '#ae2:glass_cable',
		B: 'ae2:fluix_pearl',
		C: 'gtceu:ev_sensor',
		D: '#forge:rods/titanium',
		E: '#gtceu:circuits/ev'
	}).addMaterialInfo().id('tfg:crafting/wireless_receiver')

	// Illuminated Panel
	event.recipes.gtceu.shaped('ae2:semi_dark_monitor', [
		' AD',
		'BCD',
		' AD'
	], {
		A: '#forge:plates/glowstone',
		B: '#forge:plates/aluminium',
		C: '#forge:plates/red_alloy',
		D: 'ae2:quartz_glass'
	}).addMaterialInfo().id('tfg:crafting/semi_dark_monitor')

	// Toggle Bus
	event.recipes.gtceu.shaped('ae2:toggle_bus', [
		' A ',
		'BCB',
		' A '
	], {
		A: '#forge:plates/red_alloy',
		B: '#ae2:glass_cable',
		C: 'minecraft:lever'
	}).addMaterialInfo().id('tfg:crafting/toggle_bus')

	// Capacity Card
	event.recipes.gtceu.shaped('ae2:capacity_card', [
		'AB',
		'BC',
	], {
		A: 'ae2:basic_card',
		B: 'ae2:cell_component_1k',
		C: '#forge:gems/certus_quartz'
	}).addMaterialInfo().id('tfg:crafting/capacity_card')

	// Crafting Card
	event.recipes.gtceu.shaped('ae2:crafting_card', [
		'AB',
		'BC',
	], {
		A: 'ae2:basic_card',
		B: 'ae2:cell_component_1k',
		C: '#tfc:workbenches'
	}).addMaterialInfo().id('tfg:crafting/crafting_card')

	// Redstone Card
	event.recipes.gtceu.shaped('ae2:redstone_card', [
		'AB',
		'BC'
	], {
		A: 'ae2:basic_card',
		B: 'minecraft:redstone_torch',
		C: 'ae2:calculation_processor'
	}).addMaterialInfo().id('tfg:crafting/redstone_card')

	// Fuzzy Card
	event.recipes.gtceu.shaped('ae2:fuzzy_card', [
		'AB',
		'CD',
	], {
		A: 'ae2:advanced_card',
		B: 'ae2:engineering_processor',
		C: 'ae2:logic_processor',
		D: 'ae2:calculation_processor'
	}).addMaterialInfo().id('tfg:crafting/fuzzy_card')

	// Inverter Card
	event.recipes.gtceu.shaped('ae2:inverter_card', [
		'AB',
		'BC',
	], {
		A: 'ae2:advanced_card',
		B: 'ae2:inverted_toggle_bus',
		C: 'ae2:calculation_processor'
	}).addMaterialInfo().id('tfg:crafting/inverter_card')

	// Acceleration Card
	event.recipes.gtceu.shaped('ae2:speed_card', [
		'AB',
		'CD',
	], {
		A: 'ae2:advanced_card',
		B: 'ae2:engineering_processor',
		C: 'ae2:logic_processor',
		D: '#forge:gems/fluix'
	}).addMaterialInfo().id('tfg:crafting/speed_card')

	//Auto Crafting Card
	event.recipes.gtceu.shaped('ae2:auto_complete_card', [
		'AB',
		'BC'
	], {
		A: 'ae2:advanced_card',
		B: 'ae2:engineering_processor',
		C: 'ae2:calculation_processor'
	}).addMaterialInfo().id('tfg:crafting/auto_complete_card')

	// Void Card
	event.shapeless('ae2:void_card', ['ae2:basic_card', 'ae2:calculation_processor'])
		.id('tfg:crafting/void_card')

	// Equal Distribution Card
	event.shapeless('ae2:equal_distribution_card', ['ae2:advanced_card', 'ae2:calculation_processor'])
		.id('tfg:crafting/equal_distribution_card')

	// Energy Card
	event.shapeless('ae2:energy_card', ['ae2:advanced_card', '2x #gtceu:batteries/hv'])
		.id('tfg:crafting/energy_card')

	// Quartz Fixture
	event.shapeless('ae2:quartz_fixture', [
		'ae2:charged_certus_quartz_crystal',
		'#forge:rods/aluminium'
	]).id('tfg:crafting/quartz_fixture')

	// Light Detecting Fixture
	event.shapeless('ae2:light_detector', [
		'#forge:gems/certus_quartz',
		'#forge:rods/wrought_iron'
	]).id('tfg:crafting/light_detector')

	// Wireless Terminal
	event.recipes.gtceu.shaped('ae2:wireless_terminal', [
		'ABA',
		'CDC',
		'FEF'
	], {
		A: 'ae2:wireless_receiver',
		B: 'ae2:terminal',
		C: 'ae2:engineering_processor',
		D: '#gtceu:circuits/hv',
		E: '#gtceu:batteries/hv',
		F: '#forge:plates/certus_quartz'
	}).addMaterialInfo().id('tfg:crafting/wireless_terminal')

	// Basic Card
	event.recipes.gtceu.shaped('2x ae2:basic_card', [
		'AB ',
		'CDB',
		'EB '
	], {
		A: '#forge:fine_wires/red_alloy',
		B: '#forge:plates/aluminium',
		C: 'ae2:calculation_processor',
		D: '#gtceu:circuits/mv',
		E: '#forge:fine_wires/gold'
	}).addMaterialInfo().id('tfg:crafting/basic_card')

	// Advanced Card
	event.recipes.gtceu.shaped('2x ae2:advanced_card', [
		'AB ',
		'CDB',
		'EB '
	], {
		A: '#forge:fine_wires/red_alloy',
		B: '#forge:plates/stainless_steel',
		C: 'ae2:calculation_processor',
		D: '#gtceu:circuits/hv',
		E: '#forge:fine_wires/silver'
	}).addMaterialInfo().id('tfg:crafting/advanced_card')

	// Wireless Booster
	event.recipes.gtceu.shaped('ae2:wireless_booster', [
		'ABC',
		'DDD',
	], {
		A: '#forge:dusts/fluix',
		B: '#forge:gems/certus_quartz',
		C: '#forge:plates/ender_pearl',
		D: '#forge:plates/titanium',
	}).addMaterialInfo().id('tfg:crafting/wireless_booster')

	event.recipes.gtceu.shaped('ae2:wireless_booster', [
		'ABC',
		'DDD',
	], {
		A: '#forge:dusts/fluix',
		B: '#forge:gems/certus_quartz',
		C: '#forge:plates/ender_pearl',
		D: 'minecraft:shulker_shell',
	}).id('tfg:crafting/wireless_booster_shulker')

	// Memory Card
	event.recipes.gtceu.shaped('ae2:memory_card', [
		'ABB',
		'CDC',
	], {
		A: 'ae2:calculation_processor',
		B: '#forge:plates/wrought_iron',
		C: '#forge:plates/gold',
		D: '#forge:plates/red_alloy',
	}).addMaterialInfo().id('tfg:crafting/memory_card')

	// Item Cell Housing
	event.recipes.gtceu.shaped('ae2:item_cell_housing', [
		'ABA',
		'CDC',
		'BBB'
	], {
		A: 'ae2:quartz_glass',
		B: '#forge:plates/steel',
		C: '#forge:fine_wires/red_alloy',
		D: '#gtceu:circuits/lv',
	}).addMaterialInfo().id('tfg:crafting/item_cell_housing')

	// Fluid Cell Housing
	event.recipes.gtceu.shaped('ae2:fluid_cell_housing', [
		'ABA',
		'CDC',
		'BBB'
	], {
		A: 'ae2:quartz_glass',
		B: '#forge:plates/stainless_steel',
		C: '#forge:fine_wires/red_alloy',
		D: '#gtceu:circuits/lv',
	}).addMaterialInfo().id('tfg:crafting/fluid_cell_housing')

	// Level Emitter
	event.recipes.gtceu.shaped('ae2:level_emitter', [
		'DA ',
		'BCB',
		' A '
	], {
		A: '#forge:plates/steel',
		B: '#ae2:glass_cable',
		C: 'minecraft:redstone_torch',
		D: 'ae2:calculation_processor',
	}).addMaterialInfo().id('tfg:crafting/level_emitter')

	// Energy Level Emitter
	event.recipes.gtceu.shaped('ae2:energy_level_emitter', [
		'DAE',
		'BCB',
		' A '
	], {
		A: '#forge:plates/steel',
		B: '#ae2:glass_cable',
		C: 'minecraft:redstone_torch',
		D: 'ae2:calculation_processor',
		E: 'ae2:charged_certus_quartz_crystal'
	}).addMaterialInfo().id('tfg:crafting/energy_level_emitter')

	// P2P Tunnel
	event.recipes.gtceu.shaped('2x ae2:me_p2p_tunnel', [
		'ABA',
		'BCB',
		'DDD'
	], {
		A: 'ae2:engineering_processor',
		B: '#forge:plates/aluminium',
		C: '#ae2:illuminated_panel',
		D: '#forge:gems/fluix',
	}).addMaterialInfo().id('tfg:crafting/me_p2p_tunnel')

	event.shapeless('ae2:me_p2p_tunnel', ['ae2:me_p2p_tunnel'])
		.id('tfg:shapeless/me_p2p_tunnel')
	event.shapeless('ae2:redstone_p2p_tunnel', ['ae2:redstone_p2p_tunnel'])
		.id('tfg:shapeless/redstone_p2p_tunnel')
	event.shapeless('ae2:item_p2p_tunnel', ['ae2:item_p2p_tunnel'])
		.id('tfg:shapeless/item_p2p_tunnel')
	event.shapeless('ae2:fluid_p2p_tunnel', ['ae2:fluid_p2p_tunnel'])
		.id('tfg:shapeless/fluid_p2p_tunnel')
	event.shapeless('ae2:light_p2p_tunnel', ['ae2:light_p2p_tunnel'])
		.id('tfg:shapeless/light_p2p_tunnel')

	// ME Chest
	event.recipes.gtceu.shaped('ae2:chest', [
		'AEA',
		'CDC',
		'ABA'
	], {
		A: '#forge:plates/stainless_steel',
		B: '#gtceu:circuits/mv',
		C: '#ae2:glass_cable',
		D: 'gtceu:aluminium_crate',
		E: 'ae2:terminal'
	}).addMaterialInfo().id('tfg:crafting/me_chest')

	// ME Drive
	event.recipes.gtceu.shaped('ae2:drive', [
		'ABA',
		'CDC',
		'EBE'
	], {
		A: '#forge:plates/steel',
		B: 'ae2:engineering_processor',
		C: '#ae2:glass_cable',
		D: '#gtceu:circuits/mv',
		E: '#forge:plates/titanium'
	}).addMaterialInfo().id('tfg:crafting/drive')

	event.recipes.gtceu.shaped('ae2:drive', [
		'ABA',
		'CDC',
		'EBE'
	], {
		A: '#forge:plates/steel',
		B: 'ae2:engineering_processor',
		C: '#ae2:glass_cable',
		D: '#gtceu:circuits/mv',
		E: 'minecraft:shulker_shell'
	}).id('tfg:crafting/drive_shulker')

	// Spatial Pylon
	event.recipes.gtceu.shaped('ae2:spatial_pylon', [
		'ABA',
		'CDC',
		'ABA'
	], {
		A: '#forge:plates/glass',
		B: '#ae2:glass_cable',
		C: '#forge:dusts/fluix',
		D: '#forge:gems/fluix',
	}).addMaterialInfo().id('tfg:crafting/spatial_pylon')

	// IO Port
	event.recipes.gtceu.shaped('ae2:io_port', [
		'AAA',
		'BCB',
		'DED'
	], {
		A: '#forge:plates/glass',
		B: 'ae2:drive',
		C: '#ae2:glass_cable',
		D: '#forge:plates/titanium',
		E: 'ae2:engineering_processor'
	}).addMaterialInfo().id('tfg:crafting/io_port')

	event.recipes.gtceu.shaped('ae2:io_port', [
		'AAA',
		'BCB',
		'DED'
	], {
		A: '#forge:plates/glass',
		B: 'ae2:drive',
		C: '#ae2:glass_cable',
		D: 'minecraft:shulker_shell',
		E: 'ae2:engineering_processor'
	}).id('tfg:crafting/io_port_shulker')

	// Spatial IO Port
	event.recipes.gtceu.shaped('ae2:spatial_io_port', [
		'AAA',
		'BCB',
		'DED'
	], {
		A: '#forge:plates/glass',
		B: '#ae2:glass_cable',
		C: 'ae2:io_port',
		D: '#forge:plates/titanium',
		E: 'ae2:engineering_processor'
	}).addMaterialInfo().id('tfg:crafting/spatial_io_port')

	event.recipes.gtceu.shaped('ae2:spatial_io_port', [
		'AAA',
		'BCB',
		'DED'
	], {
		A: '#forge:plates/glass',
		B: '#ae2:glass_cable',
		C: 'ae2:io_port',
		D: 'minecraft:shulker_shell',
		E: 'ae2:engineering_processor'
	}).id('tfg:crafting/spatial_io_port_shulker')

	// Monitors
	event.shapeless('ae2:semi_dark_monitor', ['ae2:dark_monitor'])
		.id('tfg:crafting/semi_dark_monitor_2')

	event.shapeless('ae2:dark_monitor', ['ae2:monitor'])
		.id('tfg:crafting/dark_monitor')

	event.shapeless('ae2:monitor', ['ae2:semi_dark_monitor'])
		.id('tfg:crafting/monitor')

	// Cell Workbench
	event.recipes.gtceu.shaped('ae2:cell_workbench', [
		'ABC',
		'DED',
		'DDD'
	], {
		A: 'gtceu:item_filter',
		B: 'gtceu:computer_monitor_cover',
		C: 'gtceu:fluid_filter',
		D: '#forge:plates/aluminium',
		E: 'ae2:calculation_processor',
	}).addMaterialInfo().id('tfg:crafting/cell_workbench')

	// Matter Condenser
	event.recipes.gtceu.shaped('ae2:condenser', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: '#forge:plates/stainless_steel',
		B: 'gtceu:hv_electric_piston',
		C: '#gtceu:circuits/hv',
	}).addMaterialInfo().id('tfg:crafting/condenser')

	// Toggle Bus
	event.shapeless('ae2:toggle_bus', ['ae2:inverted_toggle_bus'])
		.id('tfg:crafting/toggle_bus_2')

	event.shapeless('ae2:inverted_toggle_bus', ['ae2:toggle_bus'])
		.id('tfg:crafting/inverted_toggle_bus')

	// ME Annihilation Plane
	event.recipes.gtceu.shaped('ae2:annihilation_plane', [
		'AAA',
		'CBC'
	], {
		A: '#forge:gems/fluix',
		B: 'ae2:annihilation_core',
		C: '#forge:plates/aluminium'
	}).addMaterialInfo().id('tfg:crafting/annihilation_plane')

	// ME Formation Plane
	event.recipes.gtceu.shaped('ae2:formation_plane', [
		'AAA',
		'CBC'
	], {
		A: '#forge:gems/fluix',
		B: 'ae2:formation_core',
		C: '#forge:plates/aluminium'
	}).addMaterialInfo().id('tfg:crafting/formation_plane')

	// ME Terminal
	event.recipes.gtceu.shaped('ae2:terminal', [
		'ABC',
		'DED',
		'FGF'
	], {
		A: '#forge:tools/screwdrivers',
		B: '#ae2:illuminated_panel',
		C: '#forge:tools/mallets',
		D: '#forge:rods/steel',
		E: '#gtceu:circuits/hv',
		F: '#forge:plates/steel',
		G: '#forge:screws/steel'
	}).id('tfg:crafting/terminal')

	event.recipes.gtceu.assembler('assembler:ae2_terminal')
		.itemInputs(
			'#ae2:illuminated_panel',
			'2x #forge:rods/steel',
			'#gtceu:circuits/hv',
			'2x #forge:plates/steel',
			'#forge:screws/steel')
		.itemOutputs('ae2:terminal')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
		.addMaterialInfo(true)

	// ME Crafting Terminal
	event.recipes.gtceu.shaped('ae2:crafting_terminal', [
		'ABC',
		'DED',
		'FGF'
	], {
		A: '#forge:tools/screwdrivers',
		B: 'ae2:terminal',
		C: '#forge:tools/mallets',
		D: '#forge:rods/steel',
		E: '#tfc:workbenches',
		F: '#forge:plates/steel',
		G: 'ae2:engineering_processor'
	}).id('tfg:crafting/crafting_terminal')

	event.recipes.gtceu.assembler('assembler:ae2_crafting_terminal')
		.itemInputs(
			'ae2:terminal',
			'2x #forge:rods/steel',
			'ae2:engineering_processor',
			'2x #forge:plates/steel',
			'#tfc:workbenches')
		.itemOutputs('ae2:crafting_terminal')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
		.addMaterialInfo(true)

	// pattern access terminal
	event.recipes.gtceu.shaped('ae2:pattern_access_terminal', [
		'ABC',
		'DED',
		'FGF'
	], {
		A: '#forge:tools/screwdrivers',
		B: 'ae2:terminal',
		C: '#forge:tools/mallets',
		D: '#forge:rods/steel',
		E: '#ae2:pattern_provider',
		F: '#forge:plates/steel',
		G: 'ae2:engineering_processor'
	}).id('tfg:crafting/pattern_access_terminal')

	event.recipes.gtceu.assembler('assembler:ae2_pattern_access_terminal')
		.itemInputs(
			'ae2:terminal',
			'2x #forge:rods/steel',
			'ae2:engineering_processor',
			'2x #forge:plates/steel',
			'#ae2:pattern_provider')
		.itemOutputs('ae2:pattern_access_terminal')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
		.addMaterialInfo(true)

	// ME Pattern Terminal
	event.recipes.gtceu.shaped('ae2:pattern_encoding_terminal', [
		'ABC',
		'DED',
		'FGF'
	], {
		A: '#forge:tools/screwdrivers',
		B: 'ae2:terminal',
		C: '#forge:tools/mallets',
		D: '#forge:rods/steel',
		E: 'ae2:blank_pattern',
		F: '#forge:plates/steel',
		G: 'ae2:engineering_processor'
	}).id('tfg:crafting/pattern_encoding_terminal')

	event.recipes.gtceu.assembler('assembler:ae2_pattern_encoding_terminal')
		.itemInputs(
			'ae2:terminal',
			'2x #forge:rods/steel',
			'ae2:engineering_processor',
			'2x #forge:plates/steel',
			'ae2:blank_pattern')
		.itemOutputs('ae2:pattern_encoding_terminal')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
		.addMaterialInfo(true)

	// Matter Cannon
	event.recipes.gtceu.shaped('ae2:matter_cannon', [
		'AAB',
		'CD ',
		'A  '
	], {
		A: '#forge:plates/steel',
		B: 'ae2:formation_core',
		C: 'ae2:cell_component_4k',
		D: 'gtceu:hv_lithium_battery'
	}).addMaterialInfo().id('tfg:crafting/matter_cannon')

	// Color Applicator
	event.recipes.gtceu.shaped('ae2:color_applicator', [
		'ABA',
		'CDC',
		' E '
	], {
		A: 'gtceu:aluminium_single_wire',
		B: 'ae2:formation_core',
		C: 'ae2:cell_component_4k',
		D: 'gtceu:hv_lithium_battery',
		E: '#forge:rods/steel',
	}).addMaterialInfo().id('tfg:crafting/color_applicator')

	// Energy Cell
	event.recipes.gtceu.assembler('tfg:ae2/energy_cell')
		.itemInputs('gtceu:titanium_frame', '6x gtceu:titanium_plate', '24x gtceu:titanium_screw', 'gtceu:energy_crystal')
		.itemOutputs('ae2:energy_cell')
		.circuit(1)
		.duration(960)
		.EUt(256)
		.addMaterialInfo(true)

	// Dense Energy Cell
	event.recipes.gtceu.assembler('tfg:ae2/dense_energy_cell')
		.itemInputs('8x ae2:energy_cell', '8x gtceu:silver_quadruple_wire', '4x #gtceu:circuits/ev')
		.itemOutputs('ae2:dense_energy_cell')
		.circuit(1)
		.duration(960)
		.EUt(512)
		.addMaterialInfo(true)

	// Energy Acceptor
	event.recipes.gtceu.assembler('tfg:ae2/energy_acceptor')
		.itemInputs('5x gtceu:silver_double_cable', 'gtceu:hv_1a_energy_converter', 'gtceu:annealed_copper_single_cable')
		.itemOutputs('ae2:energy_acceptor')
		.circuit(1)
		.duration(520)
		.EUt(128)
		.addMaterialInfo(true)

	// Glass Cable
	event.recipes.gtceu.assembler('fluix_glass_cable')
		.itemInputs(
			'2x #forge:rods/quartzite',
			'3x ae2:quartz_fiber',
			'#forge:fine_wires/borosilicate_glass',
			'#forge:small_dusts/fluix')
		.itemOutputs('4x ae2:fluix_glass_cable')
		.circuit(1)
		.duration(20)
		.EUt(480)
		.addMaterialInfo(true)

	// Covered Cable
	event.recipes.gtceu.assembler('fluix_covered_cable_rubber')
		.itemInputs(
			'ae2:fluix_glass_cable')
		.inputFluids(Fluid.of('gtceu:rubber', 144))
		.itemOutputs('ae2:fluix_covered_cable')
		.circuit(2)
		.duration(10)
		.EUt(480)

	event.recipes.gtceu.assembler('fluix_covered_cable_silicone_rubber')
		.itemInputs(
			'ae2:fluix_glass_cable')
		.inputFluids(Fluid.of('gtceu:silicone_rubber', 144 / 2))
		.itemOutputs('ae2:fluix_covered_cable')
		.circuit(2)
		.duration(10)
		.EUt(480)

	event.recipes.gtceu.assembler('fluix_covered_cable_styrene_butadiene_rubber')
		.itemInputs(
			'4x ae2:fluix_glass_cable')
		.inputFluids(Fluid.of('gtceu:styrene_butadiene_rubber', 144 / 4))
		.itemOutputs('4x ae2:fluix_covered_cable')
		.circuit(2)
		.duration(10)
		.EUt(480)

	// Smart Cable
	event.recipes.gtceu.assembler('fluix_smart_cable_rubber')
		.itemInputs(
			'2x #forge:rods/quartzite',
			'3x ae2:quartz_fiber',
			'#forge:fine_wires/borosilicate_glass',
			'#forge:small_dusts/fluix',
			'#forge:dusts/redstone')
		.inputFluids(Fluid.of('gtceu:rubber', 144 * 4))
		.itemOutputs('4x ae2:fluix_smart_cable')
		.circuit(2)
		.duration(10)
		.EUt(480)

	event.recipes.gtceu.assembler('fluix_smart_cable_silicone_rubber')
		.itemInputs(
			'2x #forge:rods/quartzite',
			'3x ae2:quartz_fiber',
			'#forge:fine_wires/borosilicate_glass',
			'#forge:small_dusts/fluix',
			'#forge:dusts/redstone')
		.inputFluids(Fluid.of('gtceu:silicone_rubber', 144 * 2))
		.itemOutputs('4x ae2:fluix_smart_cable')
		.circuit(2)
		.duration(10)
		.EUt(480)

	event.recipes.gtceu.assembler('fluix_smart_cable_styrene_butadiene_rubber')
		.itemInputs(
			'2x #forge:rods/quartzite',
			'3x ae2:quartz_fiber',
			'#forge:fine_wires/borosilicate_glass',
			'#forge:small_dusts/fluix',
			'#forge:dusts/redstone')
		.inputFluids(Fluid.of('gtceu:styrene_butadiene_rubber', 144))
		.itemOutputs('4x ae2:fluix_smart_cable')
		.circuit(2)
		.duration(10)
		.EUt(480)

	// Covered dense cable

	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		event.recipes.gtceu.packer(`${dye}_covered_pack`)
			.itemInputs(`4x ae2:${dye}_covered_cable`)
			.itemOutputs(`ae2:${dye}_covered_dense_cable`)
			.duration(20)
			.EUt(GTValues.VA[GTValues.LV])

		event.recipes.gtceu.packer(`${dye}_covered_unpack`)
			.itemInputs(`ae2:${dye}_covered_dense_cable`)
			.itemOutputs(`4x ae2:${dye}_covered_cable`)
			.duration(20)
			.EUt(GTValues.VA[GTValues.LV])

		event.recipes.gtceu.packer(`${dye}_smart_pack`)
			.itemInputs(`4x ae2:${dye}_smart_cable`)
			.itemOutputs(`ae2:${dye}_smart_dense_cable`)
			.duration(20)
			.EUt(GTValues.VA[GTValues.LV])

		event.recipes.gtceu.packer(`${dye}_smart_unpack`)
			.itemInputs(`ae2:${dye}_smart_dense_cable`)
			.itemOutputs(`4x ae2:${dye}_smart_cable`)
			.duration(20)
			.EUt(GTValues.VA[GTValues.LV])

	})

	event.recipes.gtceu.packer('pack_fluix_covered_dense_cable')
		.itemInputs('4x ae2:fluix_covered_cable')
		.itemOutputs('ae2:fluix_covered_dense_cable')
		.duration(20)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.packer('unpack_fluix_covered_dense_cable')
		.itemInputs('ae2:fluix_covered_dense_cable')
		.itemOutputs('4x ae2:fluix_covered_cable')
		.duration(20)
		.EUt(GTValues.VA[GTValues.LV])

	// Smart dense cable

	event.recipes.gtceu.packer('pack_fluix_smart_dense_cable_smart_cable')
		.itemInputs('4x ae2:fluix_smart_cable')
		.itemOutputs('ae2:fluix_smart_dense_cable')
		.duration(20)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.packer('unpack_fluix_smart_dense_cable_smart_cable')
		.itemInputs('ae2:fluix_smart_dense_cable')
		.itemOutputs('4x ae2:fluix_smart_cable')
		.duration(20)
		.EUt(GTValues.VA[GTValues.LV])

	// Blank Pattern
	event.recipes.gtceu.assembler('ae2:blank_pattern_pe')
		.itemInputs(
			'3x #forge:plates/steel',
			'2x #forge:sheets/polyethylene',
			'4x #forge:fine_wires/red_alloy',
			'#gtceu:circuits/mv')
		.itemOutputs('ae2:blank_pattern')
		.duration(200)
		.EUt(120)

	event.recipes.gtceu.assembler('ae2:blank_pattern_pvc')
		.itemInputs(
			'3x #forge:plates/steel',
			'2x #forge:sheets/polyvinyl_chloride',
			'4x #forge:fine_wires/red_alloy',
			'#gtceu:circuits/mv')
		.itemOutputs('4x ae2:blank_pattern')
		.duration(200)
		.EUt(120)

	event.recipes.gtceu.assembler('ae2:blank_pattern_ptfe')
		.itemInputs(
			'3x #forge:plates/steel',
			'2x #forge:sheets/polytetrafluoroethylene',
			'4x #forge:fine_wires/red_alloy',
			'#gtceu:circuits/mv')
		.itemOutputs('16x ae2:blank_pattern')
		.duration(200)
		.EUt(480)

	event.recipes.gtceu.assembler('ae2:blank_pattern_pbi')
		.itemInputs(
			'3x #forge:plates/steel',
			'2x #forge:sheets/polybenzimidazole',
			'4x #forge:fine_wires/red_alloy',
			'#gtceu:circuits/mv')
		.itemOutputs('64x ae2:blank_pattern')
		.duration(200)
		.EUt(480)

	// Pattern box

	event.recipes.gtceu.shaped('ae2:pattern_box', [
		'ABA',
		'CAC'
	], {
		A: 'create:cardboard',
		B: 'ae2:blank_pattern',
		C: '#forge:fine_wires/red_alloy'
	}).id('tfg:shaped/ae2_pattern_box')

	// Annihilation Core

	event.recipes.gtceu.assembler('ae2:annihilation_core')
		.itemInputs(
			'2x #forge:rods/certus_quartz',
			'2x ae2:engineering_processor',
			'#forge:gems/quartzite')
		.inputFluids(Fluid.of('tfg:fluix', 144))
		.itemOutputs('4x ae2:annihilation_core')
		.circuit(5)
		.duration(20)
		.EUt(GTValues.VA[GTValues.MV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.assembler('ae2:annihilation_core_moon')
		.itemInputs(
			'2x #forge:rods/certus_quartz',
			'2x ae2:engineering_processor',
			'#forge:gems/quartzite')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144))
		.itemOutputs('8x ae2:annihilation_core')
		.circuit(5)
		.duration(20)
		.EUt(GTValues.VA[GTValues.MV])
		.dimension('ad_astra:moon')
		.addMaterialInfo(true)

	// Formation Core

	event.recipes.gtceu.assembler('ae2:formation_core')
		.itemInputs(
			'2x #forge:rods/nether_quartz',
			'2x ae2:engineering_processor',
			'#forge:gems/quartzite')
		.inputFluids(Fluid.of('tfg:fluix', 144))
		.itemOutputs('4x ae2:formation_core')
		.circuit(5)
		.duration(20)
		.EUt(GTValues.VA[GTValues.MV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.assembler('ae2:formation_core_moon')
		.itemInputs(
			'2x #forge:rods/nether_quartz',
			'2x ae2:engineering_processor',
			'#forge:gems/quartzite')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144))
		.itemOutputs('8x ae2:formation_core')
		.circuit(5)
		.duration(20)
		.EUt(GTValues.VA[GTValues.MV])
		.dimension('ad_astra:moon')
		.addMaterialInfo(true)

	// Wireless Crafting Terminal
	event.recipes.gtceu.assembler('ae2:wireless_crafting_terminal')
		.itemInputs(
			'2x #gtceu:batteries/ev',
			'2x gtceu:ev_sensor',
			'gtceu:ev_emitter',
			'2x #forge:rods/ultimet',
			'ae2:wireless_terminal',
			'ae2:crafting_terminal')
		.itemOutputs('ae2:wireless_crafting_terminal')
		.duration(300)
		.EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true)

	//#region Storage Components

	// 1k storage components
	event.recipes.gtceu.assembler('ae2:cell_component_1k')
		.itemInputs(
			'2x #gtceu:circuits/mv',
			'4x gtceu:cpu_chip',
			'#forge:foils/polyethylene',
			'ae2:logic_processor')
		.inputFluids(Fluid.of('tfg:fluix', 288))
		.itemOutputs('ae2:cell_component_1k')
		.duration(200)
		.EUt(GTValues.VA[GTValues.MV])

	// 4k storage components

	event.recipes.gtceu.assembler('ae2:cell_component_4k_1k')
		.itemInputs(
			'2x #gtceu:circuits/ev',
			'8x gtceu:cpu_chip',
			'4x #forge:foils/polyethylene',
			'4x ae2:logic_processor',
			'3x ae2:cell_component_1k')
		.inputFluids(Fluid.of('tfg:fluix', 288))
		.itemOutputs('ae2:cell_component_4k')
		.duration(400)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.HV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.assembler('ae2:cell_component_4k')
		.itemInputs(
			'2x #gtceu:circuits/hv',
			'8x gtceu:cpu_chip',
			'4x #forge:foils/polyethylene',
			'4x ae2:logic_processor',
			'2x ae2:cell_component_1k')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 288))
		.itemOutputs('ae2:cell_component_4k')
		.duration(200)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.MV])
		.dimension('ad_astra:moon')

	// 16k storage components

	event.recipes.gtceu.assembler('ae2:cell_component_16k_4k')
		.itemInputs(
			'2x #gtceu:circuits/iv',
			'16x gtceu:ram_chip',
			'16x #forge:foils/polyvinyl_chloride',
			'16x ae2:logic_processor',
			'3x ae2:cell_component_4k')
		.inputFluids(Fluid.of('tfg:fluix', 576))
		.itemOutputs('ae2:cell_component_16k')
		.duration(400)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.EV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.assembler('ae2:cell_component_16k')
		.itemInputs(
			'2x #gtceu:circuits/ev',
			'16x gtceu:ram_chip',
			'16x #forge:foils/polyvinyl_chloride',
			'16x ae2:logic_processor',
			'2x ae2:cell_component_4k')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 576))
		.itemOutputs('ae2:cell_component_16k')
		.duration(200)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.HV])
		.dimension('ad_astra:moon')

	// 64k storage components

	event.recipes.gtceu.assembler('ae2:cell_component_64k_16k')
		.itemInputs(
			'2x #gtceu:circuits/luv',
			'8x gtceu:nano_cpu_chip',
			'64x #forge:foils/polyvinyl_chloride',
			'64x ae2:logic_processor',
			'3x ae2:cell_component_16k')
		.inputFluids(Fluid.of('tfg:fluix', 1152))
		.itemOutputs('ae2:cell_component_64k')
		.duration(400)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.IV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.assembler('ae2:cell_component_64k')
		.itemInputs(
			'2x #gtceu:circuits/iv',
			'8x gtceu:nano_cpu_chip',
			'64x #forge:foils/polyvinyl_chloride',
			'64x ae2:logic_processor',
			'2x ae2:cell_component_16k')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 1152))
		.itemOutputs('ae2:cell_component_64k')
		.duration(200)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.EV])
		.dimension('ad_astra:moon')

	// 256k storage components

	event.recipes.gtceu.assembler('ae2:cell_component_256k_64k')
		.itemInputs(
			'2x #gtceu:circuits/zpm',
			'16x gtceu:qbit_cpu_chip',
			'64x #forge:foils/polyphenylene_sulfide',
			'64x #forge:foils/polyphenylene_sulfide',
			'64x ae2:logic_processor',
			'64x ae2:logic_processor',
			'3x ae2:cell_component_64k')
		.inputFluids(Fluid.of('tfg:fluix', 2304))
		.itemOutputs('ae2:cell_component_256k')
		.duration(400)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.LuV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.assembler('ae2:cell_component_256k')
		.itemInputs(
			'2x #gtceu:circuits/luv',
			'16x gtceu:qbit_cpu_chip',
			'64x #forge:foils/polyphenylene_sulfide',
			'64x #forge:foils/polyphenylene_sulfide',
			'64x ae2:logic_processor',
			'64x ae2:logic_processor',
			'2x ae2:cell_component_64k')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 2304))
		.itemOutputs('ae2:cell_component_256k')
		.duration(200)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.IV])
		.dimension('ad_astra:moon')

	//#endregion

	//#region Spatial Components

	// 2³ Spatial Component
	event.recipes.gtceu.assembler('ae2:spatial_cell_component_2')
		.itemInputs(
			'4x #gtceu:circuits/ev',
			'4x #forge:plates/titanium',
			'32x #forge:dusts/certus_quartz',
			'ae2:calculation_processor')
		.inputFluids(Fluid.of('tfg:fluix', 144))
		.itemOutputs('ae2:spatial_cell_component_2')
		.duration(200)
		.EUt(1920)

	// 16³ Spatial Component
	event.recipes.gtceu.assembler('ae2:spatial_cell_component_16')
		.itemInputs(
			'4x #gtceu:circuits/iv',
			'4x #forge:plates/tungsten_steel',
			'32x #forge:dusts/certus_quartz',
			'ae2:calculation_processor')
		.inputFluids(Fluid.of('tfg:fluix', 144))
		.itemOutputs('ae2:spatial_cell_component_16')
		.duration(200)
		.EUt(7680)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.assembler('ae2:spatial_cell_component_16_2')
		.itemInputs(
			'2x #gtceu:circuits/iv',
			'ae2:calculation_processor',
			'4x ae2:spatial_cell_component_2')
		.inputFluids(Fluid.of('tfg:fluix', 144))
		.itemOutputs('ae2:spatial_cell_component_16')
		.duration(400)
		.EUt(7680)
		.cleanroom(CleanroomType.CLEANROOM)

	// 128³ Spatial Component
	event.recipes.gtceu.assembler('ae2:spatial_cell_component_128')
		.itemInputs(
			'4x #gtceu:circuits/luv',
			'4x #forge:plates/rhodium_plated_palladium',
			'32x #forge:dusts/certus_quartz',
			'ae2:calculation_processor')
		.inputFluids(Fluid.of('tfg:fluix', 144))
		.itemOutputs('ae2:spatial_cell_component_128')
		.duration(200)
		.EUt(30720)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.assembler('ae2:spatial_cell_component_128_16')
		.itemInputs(
			'ae2:calculation_processor',
			'2x #gtceu:circuits/luv',
			'4x ae2:spatial_cell_component_16')
		.inputFluids(Fluid.of('tfg:fluix', 144))
		.itemOutputs('ae2:spatial_cell_component_128')
		.duration(400)
		.EUt(30720)
		.cleanroom(CleanroomType.CLEANROOM)

	//#endregion

	// Storage Monitor
	event.recipes.gtceu.assembler('ae2:storage_monitor')
		.itemInputs(
			'#ae2:illuminated_panel',
			'ae2:level_emitter')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('ae2:storage_monitor')
		.duration(200)
		.EUt(480)
		.addMaterialInfo(true)

	// Conversion Monitor
	event.recipes.gtceu.assembler('ae2:conversion_monitor')
		.itemInputs(
			'2x ae2:formation_core',
			'2x ae2:annihilation_core',
			'ae2:storage_monitor')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('ae2:conversion_monitor')
		.duration(200)
		.EUt(480)
		.addMaterialInfo(true)

	// Level Emitter
	event.recipes.gtceu.assembler('ae2:level_emitter')
		.itemInputs(
			'minecraft:redstone_torch',
			'#ae2:glass_cable',
			'#forge:plates/steel',
			'ae2:calculation_processor')
		.itemOutputs('ae2:level_emitter')
		.circuit(1)
		.duration(20)
		.EUt(480)
		.addMaterialInfo(true)

	// Storage Bus
	event.recipes.gtceu.assembler('ae2:storage_bus')
		.itemInputs(
			'#ae2:interface',
			'2x gtceu:mv_electric_piston',
			'#ae2:glass_cable')
		.inputFluids(Fluid.of('tfg:fluix', 144))
		.itemOutputs('ae2:storage_bus')
		.circuit(1)
		.duration(200)
		.EUt(480)
		.addMaterialInfo(true)

	// Import Bus
	event.recipes.gtceu.assembler('ae2:import_bus')
		.itemInputs(
			'#forge:plates/wrought_iron',
			'ae2:annihilation_core',
			'2x gtceu:mv_robot_arm',
			'#ae2:glass_cable')
		.inputFluids(Fluid.of('tfg:fluix', 144))
		.itemOutputs('ae2:import_bus')
		.circuit(2)
		.duration(200)
		.EUt(480)
		.addMaterialInfo(true)

	// Export Bus
	event.recipes.gtceu.assembler('ae2:export_bus')
		.itemInputs(
			'#forge:plates/wrought_iron',
			'ae2:formation_core',
			'2x gtceu:mv_robot_arm',
			'#ae2:glass_cable')
		.inputFluids(Fluid.of('tfg:fluix', 144))
		.itemOutputs('ae2:export_bus')
		.circuit(3)
		.duration(200)
		.EUt(480)
		.addMaterialInfo(true)

	// CPU Crafting Unit
	event.recipes.gtceu.assembler('ae2:crafting_unit')
		.itemInputs(
			'ae2:logic_processor',
			'ae2:engineering_processor',
			'ae2:calculation_processor',
			'#gtceu:circuits/ev',
			'6x #forge:plates/stainless_steel')
		.inputFluids(Fluid.of('tfg:fluix', 144 * 5))
		.itemOutputs('ae2:crafting_unit')
		.duration(200)
		.EUt(GTValues.VA[GTValues.HV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.assembler('ae2:crafting_unit_moon')
		.itemInputs(
			'ae2:logic_processor',
			'ae2:engineering_processor',
			'ae2:calculation_processor',
			'#gtceu:circuits/ev',
			'6x #forge:plates/stainless_steel')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144 * 5))
		.itemOutputs('2x ae2:crafting_unit')
		.duration(200)
		.EUt(GTValues.VA[GTValues.HV])
		.dimension('ad_astra:moon')
		.addMaterialInfo(true)

	//#region Molecular Assembler

	// HV
	event.recipes.gtceu.assembler('ae2:molecular_assembler_hv')
		.itemInputs(
			'2x #gtceu:circuits/hv',
			'ae2:quartz_glass',
			'4x ae2:annihilation_core',
			'4x ae2:formation_core',
			'2x gtceu:hv_robot_arm',
			'6x #forge:plates/stainless_steel')
		.inputFluids(Fluid.of('tfg:fluix', 144))
		.itemOutputs('ae2:molecular_assembler')
		.duration(200)
		.EUt(GTValues.VA[GTValues.HV])
		.cleanroom(CleanroomType.CLEANROOM)

	// EV Moon
	event.recipes.gtceu.assembler('ae2:molecular_assembler_ev')
		.itemInputs(
			'2x #gtceu:circuits/ev',
			'ae2:quartz_glass',
			'4x ae2:annihilation_core',
			'4x ae2:formation_core',
			'2x gtceu:ev_robot_arm',
			'6x #forge:plates/titanium')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144))
		.itemOutputs('4x ae2:molecular_assembler')
		.duration(200)
		.EUt(GTValues.VA[GTValues.EV])
		.dimension('ad_astra:moon')

	// IV
	event.recipes.gtceu.assembler('ae2:molecular_assembler_iv')
		.itemInputs(
			'2x #gtceu:circuits/iv',
			'ae2:quartz_glass',
			'8x ae2:annihilation_core',
			'8x ae2:formation_core',
			'2x gtceu:iv_robot_arm',
			'6x #forge:plates/tungsten_steel')
		.inputFluids(Fluid.of('tfg:fluix', 144 * 8))
		.itemOutputs('8x ae2:molecular_assembler')
		.duration(200)
		.EUt(GTValues.VA[GTValues.IV])
		.cleanroom(CleanroomType.CLEANROOM)

	//#endregion

	// ME Контроллер
	event.recipes.gtceu.assembler('ae2:controller')
		.itemInputs(
			'16x ae2:engineering_processor',
			'2x #gtceu:circuits/hv',
			'2x #forge:plates/titanium',
			'ae2:fluix_block')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('ae2:controller')
		.duration(200)
		.EUt(480)
		.cleanroom(CleanroomType.CLEANROOM)
		.addMaterialInfo(true, true)

	event.recipes.gtceu.assembler('ae2:controller_shulker')
		.itemInputs(
			'16x ae2:engineering_processor',
			'2x #gtceu:circuits/hv',
			'2x minecraft:shulker_shell',
			'ae2:fluix_block')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('ae2:controller')
		.duration(200)
		.EUt(480)
		.cleanroom(CleanroomType.CLEANROOM)

	//#region ME Interfaces

	// MV
	event.recipes.gtceu.assembler('ae2:interface_mv')
		.itemInputs(
			'gtceu:mv_conveyor_module',
			'2x #tfc:workbenches',
			'4x #forge:plates/aluminium',
			'4x ae2:annihilation_core',
			'4x ae2:formation_core')
		.inputFluids(Fluid.of('tfg:fluix', 144))
		.itemOutputs('ae2:interface')
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.MV])
		.cleanroom(CleanroomType.CLEANROOM)

	// MV Moon Only
	event.recipes.gtceu.assembler('ae2:interface_mv_moon')
		.itemInputs(
			'gtceu:mv_conveyor_module',
			'2x #tfc:workbenches',
			'4x #forge:plates/aluminium',
			'4x ae2:annihilation_core',
			'4x ae2:formation_core')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144))
		.itemOutputs('4x ae2:interface')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.MV])
		.dimension('ad_astra:moon')

	// IV
	event.recipes.gtceu.assembler('ae2:interface_iv')
		.itemInputs(
			'gtceu:iv_conveyor_module',
			'2x #tfc:workbenches',
			'4x #forge:plates/tungsten_steel',
			'16x ae2:annihilation_core',
			'16x ae2:formation_core')
		.inputFluids(Fluid.of('tfg:fluix', 144 * 8))
		.itemOutputs('16x ae2:interface')
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.IV])
		.cleanroom(CleanroomType.CLEANROOM)

	// IV Moon Only
	event.recipes.gtceu.assembler('ae2:interface_iv_moon')
		.itemInputs(
			'gtceu:iv_conveyor_module',
			'2x #tfc:workbenches',
			'4x #forge:plates/tungsten_steel',
			'16x ae2:annihilation_core',
			'16x ae2:formation_core')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144 * 8))
		.itemOutputs('32x ae2:interface')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.IV])
		.dimension('ad_astra:moon')


	//#endregion

	//#region Pattern Providers

	// MV
	event.recipes.gtceu.assembler('ae2:pattern_provider_mv')
		.itemInputs(
			'gtceu:mv_robot_arm',
			'2x #tfc:workbenches',
			'4x #forge:plates/aluminium',
			'4x ae2:annihilation_core',
			'4x ae2:formation_core')
		.inputFluids(Fluid.of('tfg:fluix', 144))
		.itemOutputs('ae2:pattern_provider')
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.MV])
		.cleanroom(CleanroomType.CLEANROOM)

	// MV Moon Only
	event.recipes.gtceu.assembler('ae2:pattern_provider_hv_moon')
		.itemInputs(
			'gtceu:mv_robot_arm',
			'2x #tfc:workbenches',
			'4x #forge:plates/aluminium',
			'4x ae2:annihilation_core',
			'4x ae2:formation_core')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144))
		.itemOutputs('4x ae2:pattern_provider')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.MV])
		.dimension('ad_astra:moon')

	// IV
	event.recipes.gtceu.assembler('ae2:pattern_provider_ev')
		.itemInputs(
			'gtceu:iv_robot_arm',
			'2x #tfc:workbenches',
			'4x #forge:plates/tungsten_steel',
			'16x ae2:annihilation_core',
			'16x ae2:formation_core')
		.inputFluids(Fluid.of('tfg:fluix', 144 * 8))
		.itemOutputs('16x ae2:pattern_provider')
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.IV])
		.cleanroom(CleanroomType.CLEANROOM)

	// IV Moon Only
	event.recipes.gtceu.assembler('ae2:pattern_provider_luv')
		.itemInputs(
			'gtceu:iv_robot_arm',
			'2x #tfc:workbenches',
			'4x #forge:plates/tungsten_steel',
			'16x ae2:annihilation_core',
			'16x ae2:formation_core')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144 * 8))
		.itemOutputs('32x ae2:pattern_provider')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.IV])
		.dimension('ad_astra:moon')

	//#endregion

	//#region Portable Cells

	//#region Item

	// 1k
	event.recipes.gtceu.assembler('ae2:portable_item_cell_1k')
		.itemInputs(
			'ae2:chest',
			'ae2:cell_component_1k',
			'#gtceu:batteries/mv',
			'ae2:item_cell_housing')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('ae2:portable_item_cell_1k')
		.duration(200)
		.EUt(480)

	// 4k
	event.recipes.gtceu.assembler('ae2:portable_item_cell_4k')
		.itemInputs(
			'ae2:chest',
			'ae2:cell_component_4k',
			'#gtceu:batteries/mv',
			'ae2:item_cell_housing')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('ae2:portable_item_cell_4k')
		.duration(200)
		.EUt(1920)
		.cleanroom(CleanroomType.CLEANROOM)

	// 16k
	event.recipes.gtceu.assembler('ae2:portable_item_cell_16k')
		.itemInputs(
			'ae2:chest',
			'ae2:cell_component_16k',
			'#gtceu:batteries/mv',
			'ae2:item_cell_housing')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('ae2:portable_item_cell_16k')
		.duration(200)
		.EUt(7680)
		.cleanroom(CleanroomType.CLEANROOM)

	// 64k
	event.recipes.gtceu.assembler('ae2:portable_item_cell_64k')
		.itemInputs(
			'ae2:chest',
			'ae2:cell_component_64k',
			'#gtceu:batteries/mv',
			'ae2:item_cell_housing')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('ae2:portable_item_cell_64k')
		.duration(200)
		.EUt(30720)
		.cleanroom(CleanroomType.CLEANROOM)

	// 256k
	event.recipes.gtceu.assembler('ae2:portable_item_cell_256k')
		.itemInputs(
			'ae2:chest',
			'ae2:cell_component_256k',
			'#gtceu:batteries/mv',
			'ae2:item_cell_housing')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('ae2:portable_item_cell_256k')
		.duration(200)
		.EUt(122880)
		.cleanroom(CleanroomType.CLEANROOM)

	//#endregion

	//#region Fluid

	// 1k
	event.recipes.gtceu.assembler('ae2:portable_fluid_cell_1k')
		.itemInputs(
			'ae2:chest',
			'ae2:cell_component_1k',
			'#gtceu:batteries/mv',
			'ae2:fluid_cell_housing')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('ae2:portable_fluid_cell_1k')
		.duration(200)
		.EUt(480)

	// 4k
	event.recipes.gtceu.assembler('ae2:portable_fluid_cell_4k')
		.itemInputs(
			'ae2:chest',
			'ae2:cell_component_4k',
			'#gtceu:batteries/mv',
			'ae2:fluid_cell_housing')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('ae2:portable_fluid_cell_4k')
		.duration(200)
		.EUt(1920)
		.cleanroom(CleanroomType.CLEANROOM)

	// 16k
	event.recipes.gtceu.assembler('ae2:portable_fluid_cell_16k')
		.itemInputs(
			'ae2:chest',
			'ae2:cell_component_16k',
			'#gtceu:batteries/mv',
			'ae2:fluid_cell_housing')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('ae2:portable_fluid_cell_16k')
		.duration(200)
		.EUt(7680)
		.cleanroom(CleanroomType.CLEANROOM)

	// 64k
	event.recipes.gtceu.assembler('ae2:portable_fluid_cell_64k')
		.itemInputs(
			'ae2:chest',
			'ae2:cell_component_64k',
			'#gtceu:batteries/mv',
			'ae2:fluid_cell_housing')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('ae2:portable_fluid_cell_64k')
		.duration(200)
		.EUt(30720)
		.cleanroom(CleanroomType.CLEANROOM)

	// 256k
	event.recipes.gtceu.assembler('ae2:portable_fluid_cell_256k')
		.itemInputs(
			'ae2:chest',
			'ae2:cell_component_256k',
			'#gtceu:batteries/mv',
			'ae2:fluid_cell_housing')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('ae2:portable_fluid_cell_256k')
		.duration(200)
		.EUt(122880)
		.cleanroom(CleanroomType.CLEANROOM)

	//#endregion

	//#endregion

	//#region Processors

	// Logic Processor

	event.recipes.gtceu.circuit_assembler('ae2:logic_processor_moon')
		.itemInputs(
			'ae2:printed_silicon',
			'ae2:printed_logic_processor',
			'#gtceu:circuits/lv',
			'2x #gtceu:resistors',
			'1x minecraft:redstone')
		.inputFluids(Fluid.of('tfg:fluix', 144))
		.itemOutputs('2x ae2:logic_processor')
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.HV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.circuit_assembler('ae2:logic_processor')
		.itemInputs(
			'ae2:printed_silicon',
			'ae2:printed_logic_processor',
			'#gtceu:circuits/lv',
			'1x minecraft:redstone')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144))
		.itemOutputs('3x ae2:logic_processor')
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.HV])
		.dimension('ad_astra:moon')

	// Calculation Processor

	event.recipes.gtceu.circuit_assembler('ae2:calculation_processor_moon')
		.itemInputs(
			'ae2:printed_silicon',
			'ae2:printed_calculation_processor',
			'#gtceu:circuits/lv',
			'2x #gtceu:resistors',
			'1x minecraft:redstone')
		.inputFluids(Fluid.of('tfg:fluix', 144))
		.itemOutputs('2x ae2:calculation_processor')
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.HV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.circuit_assembler('ae2:calculation_processor')
		.itemInputs(
			'ae2:printed_silicon',
			'ae2:printed_calculation_processor',
			'#gtceu:circuits/lv',
			'1x minecraft:redstone')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144))
		.itemOutputs('3x ae2:calculation_processor')
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.HV])
		.dimension('ad_astra:moon')

	// Engineering Processor

	event.recipes.gtceu.circuit_assembler('ae2:engineering_processor_moon')
		.itemInputs(
			'ae2:printed_silicon',
			'ae2:printed_engineering_processor',
			'#gtceu:circuits/lv',
			'2x #gtceu:resistors',
			'1x minecraft:redstone')
		.inputFluids(Fluid.of('tfg:fluix', 144))
		.itemOutputs('2x ae2:engineering_processor')
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.HV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.circuit_assembler('ae2:engineering_processor')
		.itemInputs(
			'ae2:printed_silicon',
			'ae2:printed_engineering_processor',
			'#gtceu:circuits/lv',
			'1x minecraft:redstone')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144))
		.itemOutputs('3x ae2:engineering_processor')
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.HV])
		.dimension('ad_astra:moon')

	// Printed Calculation Processor
	event.recipes.gtceu.forming_press('ae2:printed_calculation_processor')
		.itemInputs('#forge:plates/certus_quartz')
		.notConsumable('ae2:calculation_processor_press')
		.itemOutputs('ae2:printed_calculation_processor')
		.duration(20)
		.circuit(1)
		.EUt(480)

	event.recipes.gtceu.forming_press('ae2:printed_calculation_processor_moon')
		.itemInputs('#forge:plates/certus_quartz')
		.notConsumable('ae2:calculation_processor_press')
		.itemOutputs('2x ae2:printed_calculation_processor')
		.duration(20)
		.dimension('ad_astra:moon')
		.circuit(2)
		.EUt(480)

	// Printed Engineering Processor
	event.recipes.gtceu.forming_press('ae2:printed_engineering_processor')
		.itemInputs('#forge:plates/diamond')
		.notConsumable('ae2:engineering_processor_press')
		.itemOutputs('ae2:printed_engineering_processor')
		.duration(20)
		.circuit(1)
		.EUt(480)

	event.recipes.gtceu.forming_press('ae2:printed_engineering_processor_moon')
		.itemInputs('#forge:plates/diamond')
		.notConsumable('ae2:engineering_processor_press')
		.itemOutputs('2x ae2:printed_engineering_processor')
		.duration(20)
		.dimension('ad_astra:moon')
		.circuit(2)
		.EUt(480)

	// Printed Logic Processor
	event.recipes.gtceu.forming_press('ae2:printed_logic_processor')
		.itemInputs('#forge:plates/gold')
		.notConsumable('ae2:logic_processor_press')
		.itemOutputs('ae2:printed_logic_processor')
		.duration(20)
		.circuit(1)
		.EUt(480)

	event.recipes.gtceu.forming_press('ae2:printed_logic_processor_moon')
		.itemInputs('#forge:plates/gold')
		.notConsumable('ae2:logic_processor_press')
		.itemOutputs('2x ae2:printed_logic_processor')
		.duration(20)
		.dimension('ad_astra:moon')
		.circuit(2)
		.EUt(480)

	// Printed Silicon
	event.recipes.gtceu.forming_press('ae2:printed_silicon')
		.itemInputs('#forge:plates/silicon')
		.notConsumable('ae2:silicon_press')
		.itemOutputs('ae2:printed_silicon')
		.duration(20)
		.circuit(1)
		.EUt(480)

	event.recipes.gtceu.forming_press('ae2:printed_silicon_moon')
		.itemInputs('#forge:plates/silicon')
		.notConsumable('ae2:silicon_press')
		.itemOutputs('2x ae2:printed_silicon')
		.duration(20)
		.dimension('ad_astra:moon')
		.circuit(2)
		.EUt(480)

	// Glass Cable 
	event.recipes.gtceu.chemical_bath('ae2:fluix_glass_cable')
		.itemInputs('#ae2:glass_cable')
		.inputFluids(Fluid.of('gtceu:chlorine', 100))
		.itemOutputs('ae2:fluix_glass_cable')
		.duration(8)
		.EUt(480)
		.category(GTRecipeCategories.CHEM_DYES)
		.addMaterialInfo(true)

	// Covered Cable
	event.recipes.gtceu.chemical_bath('ae2:fluix_covered_cable')
		.itemInputs('#ae2:covered_cable')
		.inputFluids(Fluid.of('gtceu:chlorine', 100))
		.itemOutputs('ae2:fluix_covered_cable')
		.duration(8)
		.EUt(480)

	// Dense Covered Cable
	event.recipes.gtceu.chemical_bath('ae2:fluix_covered_dense_cable')
		.itemInputs('#ae2:covered_dense_cable')
		.inputFluids(Fluid.of('gtceu:chlorine', 100))
		.itemOutputs('ae2:fluix_covered_dense_cable')
		.duration(8)
		.EUt(480)

	// Smart Cable
	event.recipes.gtceu.chemical_bath('ae2:fluix_smart_cable')
		.itemInputs('#ae2:smart_cable')
		.inputFluids(Fluid.of('gtceu:chlorine', 100))
		.itemOutputs('ae2:fluix_smart_cable')
		.duration(8)
		.EUt(480)

	// Dense Smart Cable
	event.recipes.gtceu.chemical_bath('ae2:fluix_smart_dense_cable')
		.itemInputs('#ae2:smart_dense_cable')
		.inputFluids(Fluid.of('gtceu:chlorine', 100))
		.itemOutputs('ae2:fluix_smart_dense_cable')
		.duration(8)
		.EUt(480)

	// Cable Colorization
	for (let i = 0; i < 16; i++) {
		event.recipes.gtceu.chemical_bath(`${global.AE2_GLASS_CABLES[i]}_dye`)
			.itemInputs('ae2:fluix_glass_cable')
			.inputFluids(Fluid.of(`tfc:${global.MINECRAFT_DYE_NAMES[i]}_dye`, 72))
			.itemOutputs(global.AE2_GLASS_CABLES[i])
			.duration(20)
			.EUt(7)
			.category(GTRecipeCategories.CHEM_DYES)

		event.recipes.gtceu.chemical_bath(`${global.AE2_COVERED_CABLES[i]}_dye`)
			.itemInputs('ae2:fluix_covered_cable')
			.inputFluids(Fluid.of(`tfc:${global.MINECRAFT_DYE_NAMES[i]}_dye`, 72))
			.itemOutputs(global.AE2_COVERED_CABLES[i])
			.duration(20)
			.EUt(7)
			.category(GTRecipeCategories.CHEM_DYES)

		event.recipes.gtceu.chemical_bath(`${global.AE2_COVERED_DENSE_CABLES[i]}_dye`)
			.itemInputs('ae2:fluix_covered_dense_cable')
			.inputFluids(Fluid.of(`tfc:${global.MINECRAFT_DYE_NAMES[i]}_dye`, 72))
			.itemOutputs(global.AE2_COVERED_DENSE_CABLES[i])
			.duration(20)
			.EUt(7)
			.category(GTRecipeCategories.CHEM_DYES)

		event.recipes.gtceu.chemical_bath(`${global.AE2_SMART_CABLES[i]}_dye`)
			.itemInputs('ae2:fluix_smart_cable')
			.inputFluids(Fluid.of(`tfc:${global.MINECRAFT_DYE_NAMES[i]}_dye`, 72))
			.itemOutputs(global.AE2_SMART_CABLES[i])
			.duration(20)
			.EUt(7)
			.category(GTRecipeCategories.CHEM_DYES)

		event.recipes.gtceu.chemical_bath(`${global.AE2_SMART_DENSE_CABLES[i]}_dye`)
			.itemInputs('ae2:fluix_smart_dense_cable')
			.inputFluids(Fluid.of(`tfc:${global.MINECRAFT_DYE_NAMES[i]}_dye`, 72))
			.itemOutputs(global.AE2_SMART_DENSE_CABLES[i])
			.duration(20)
			.EUt(7)
			.category(GTRecipeCategories.CHEM_DYES)

		// Paint Balls
		event.recipes.gtceu.chemical_bath(`${global.AE2_PAINTBALLS[i]}_dye`)
			.itemInputs('ae2:matter_ball')
			.inputFluids(Fluid.of(`tfc:${global.MINECRAFT_DYE_NAMES[i]}_dye`, 36))
			.itemOutputs(global.AE2_PAINTBALLS[i])
			.duration(20)
			.EUt(7)
			.category(GTRecipeCategories.CHEM_DYES)

		// Lumen Paint Ball
		event.recipes.gtceu.chemical_bath(`${global.AE2_LUMEN_PAINTBALLS[i]}_gtceu_dye`)
			.itemInputs(global.AE2_PAINTBALLS[i])
			.inputFluids(Fluid.of('gtceu:glowstone', 125))
			.itemOutputs(global.AE2_LUMEN_PAINTBALLS[i])
			.duration(20)
			.EUt(7)
			.category(GTRecipeCategories.CHEM_DYES)
	};

	// Inscriber Silicon Press
	event.recipes.gtceu.forming_press('ae2:silicon_press_stainless_steel')
		.itemInputs('#forge:plates/stainless_steel')
		.notConsumable('ae2:silicon_press')
		.itemOutputs('ae2:silicon_press')
		.duration(100)
		.EUt(480)

	// Inscriber logic Press
	event.recipes.gtceu.forming_press('ae2:logic_processor_press_stainless_steel')
		.itemInputs('#forge:plates/stainless_steel')
		.notConsumable('ae2:logic_processor_press')
		.itemOutputs('ae2:logic_processor_press')
		.duration(100)
		.EUt(480)

	// Inscriber engineering Press
	event.recipes.gtceu.forming_press('ae2:engineering_press_stainless_steel')
		.itemInputs('#forge:plates/stainless_steel')
		.notConsumable('ae2:engineering_processor_press')
		.itemOutputs('ae2:engineering_processor_press')
		.duration(100)
		.EUt(480)

	// Inscriber calculation Press
	event.recipes.gtceu.forming_press('ae2:calculation_press_stainless_steel')
		.itemInputs('#forge:plates/stainless_steel')
		.notConsumable('ae2:calculation_processor_press')
		.itemOutputs('ae2:calculation_processor_press')
		.duration(100)
		.EUt(480)

	// Quartz Fiber
	event.recipes.gtceu.wiremill('ae2:quartz_fiber_certus')
		.itemInputs('#forge:rods/certus_quartz')
		.itemOutputs('ae2:quartz_fiber')
		.duration(100)
		.EUt(7)

	event.recipes.gtceu.wiremill('ae2:quartz_fiber_nether')
		.itemInputs('#forge:rods/nether_quartz')
		.itemOutputs('ae2:quartz_fiber')
		.duration(100)
		.EUt(7)

	// Quartz Glass
	event.recipes.gtceu.alloy_smelter('ae2:quartz_glass')
		.itemInputs('5x #forge:dusts/certus_quartz', '4x #forge:glass')
		.itemOutputs('4x ae2:quartz_glass')
		.duration(20)
		.EUt(120)
		.addMaterialInfo(true)

	// Vibrant Quartz Glass
	event.recipes.gtceu.alloy_smelter('ae2:quartz_vibrant_glass')
		.itemInputs('ae2:quartz_glass', '8x #forge:dusts/glowstone')
		.itemOutputs('ae2:quartz_vibrant_glass')
		.duration(20)
		.EUt(480)
		.addMaterialInfo(true)

	// Charged Certus Quartz 1x
	event.recipes.gtceu.polarizer('ae2:charged_certus_quartz_crystal_1x')
		.itemInputs('ae2:certus_quartz_crystal')
		.itemOutputs('ae2:charged_certus_quartz_crystal')
		.duration(800)
		.EUt(190)

	// Charged Certus Quartz 2x
	event.recipes.gtceu.polarizer('ae2:charged_certus_quartz_crystal_2x')
		.itemInputs('gtceu:flawless_certus_quartz_gem')
		.itemOutputs('2x ae2:charged_certus_quartz_crystal')
		.duration(800)
		.EUt(190)

	// Charged Certus Quartz 4x
	event.recipes.gtceu.polarizer('ae2:charged_certus_quartz_crystal_4x')
		.itemInputs('gtceu:exquisite_certus_quartz_gem')
		.itemOutputs('4x ae2:charged_certus_quartz_crystal')
		.duration(800)
		.EUt(190)

	//#region Cell Packing

	event.recipes.gtceu.packer('ae2:view_cell')
		.itemInputs('ae2:item_cell_housing', '#forge:gems/certus_quartz')
		.itemOutputs('ae2:view_cell')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:item_storage_cell_1k')
		.itemInputs('ae2:item_cell_housing', 'ae2:cell_component_1k')
		.itemOutputs('ae2:item_storage_cell_1k')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:item_storage_cell_4k')
		.itemInputs('ae2:item_cell_housing', 'ae2:cell_component_4k')
		.itemOutputs('ae2:item_storage_cell_4k')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:item_storage_cell_16k')
		.itemInputs('ae2:item_cell_housing', 'ae2:cell_component_16k')
		.itemOutputs('ae2:item_storage_cell_16k')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:item_storage_cell_64k')
		.itemInputs('ae2:item_cell_housing', 'ae2:cell_component_64k')
		.itemOutputs('ae2:item_storage_cell_64k')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:item_storage_cell_256k')
		.itemInputs('ae2:item_cell_housing', 'ae2:cell_component_256k')
		.itemOutputs('ae2:item_storage_cell_256k')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:fluid_storage_cell_1k')
		.itemInputs('ae2:fluid_cell_housing', 'ae2:cell_component_1k')
		.itemOutputs('ae2:fluid_storage_cell_1k')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:fluid_storage_cell_4k')
		.itemInputs('ae2:fluid_cell_housing', 'ae2:cell_component_4k')
		.itemOutputs('ae2:fluid_storage_cell_4k')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:fluid_storage_cell_16k')
		.itemInputs('ae2:fluid_cell_housing', 'ae2:cell_component_16k')
		.itemOutputs('ae2:fluid_storage_cell_16k')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:fluid_storage_cell_64k')
		.itemInputs('ae2:fluid_cell_housing', 'ae2:cell_component_64k')
		.itemOutputs('ae2:fluid_storage_cell_64k')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:fluid_storage_cell_256k')
		.itemInputs('ae2:fluid_cell_housing', 'ae2:cell_component_256k')
		.itemOutputs('ae2:fluid_storage_cell_256k')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:spatial_storage_cell_2')
		.itemInputs('ae2:item_cell_housing', 'ae2:spatial_cell_component_2')
		.itemOutputs('ae2:spatial_storage_cell_2')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:spatial_storage_cell_16')
		.itemInputs('ae2:item_cell_housing', 'ae2:spatial_cell_component_16')
		.itemOutputs('ae2:spatial_storage_cell_16')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:spatial_storage_cell_128')
		.itemInputs('ae2:item_cell_housing', 'ae2:spatial_cell_component_128')
		.itemOutputs('ae2:spatial_storage_cell_128')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:view_cell_back')
		.itemInputs('ae2:view_cell')
		.itemOutputs('ae2:item_cell_housing', '#forge:gems/certus_quartz')
		.duration(10)
		.EUt(12)

	event.recipes.gtceu.packer('ae2:item_storage_cell_1k_back')
		.itemInputs('ae2:item_storage_cell_1k')
		.itemOutputs('ae2:item_cell_housing', 'ae2:cell_component_1k')
		.duration(10)
		.EUt(12)

	event.recipes.gtceu.packer('ae2:item_storage_cell_4k_back')
		.itemInputs('ae2:item_storage_cell_4k')
		.itemOutputs('ae2:item_cell_housing', 'ae2:cell_component_4k')
		.duration(10)
		.EUt(12)

	event.recipes.gtceu.packer('ae2:item_storage_cell_16k_back')
		.itemInputs('ae2:item_storage_cell_16k')
		.itemOutputs('ae2:item_cell_housing', 'ae2:cell_component_16k')
		.duration(10)
		.EUt(12)

	event.recipes.gtceu.packer('ae2:item_storage_cell_64k_back')
		.itemInputs('ae2:item_storage_cell_64k')
		.itemOutputs('ae2:item_cell_housing', 'ae2:cell_component_64k')
		.duration(10)
		.EUt(12)

	event.recipes.gtceu.packer('ae2:item_storage_cell_256k_back')
		.itemInputs('ae2:item_storage_cell_256k')
		.itemOutputs('ae2:item_cell_housing', 'ae2:cell_component_256k')
		.duration(10)
		.EUt(12)

	event.recipes.gtceu.packer('ae2:fluid_storage_cell_1k_back')
		.itemInputs('ae2:fluid_storage_cell_1k')
		.itemOutputs('ae2:fluid_cell_housing', 'ae2:cell_component_1k')
		.duration(10)
		.EUt(12)

	event.recipes.gtceu.packer('ae2:fluid_storage_cell_4k_back')
		.itemInputs('ae2:fluid_storage_cell_4k')
		.itemOutputs('ae2:fluid_cell_housing', 'ae2:cell_component_4k')
		.duration(10)
		.EUt(12)

	event.recipes.gtceu.packer('ae2:fluid_storage_cell_16k_back')
		.itemInputs('ae2:fluid_storage_cell_16k')
		.itemOutputs('ae2:fluid_cell_housing', 'ae2:cell_component_16k')
		.duration(10)
		.EUt(12)

	event.recipes.gtceu.packer('ae2:fluid_storage_cell_64k_back')
		.itemInputs('ae2:fluid_storage_cell_64k')
		.itemOutputs('ae2:fluid_cell_housing', 'ae2:cell_component_64k')
		.duration(10)
		.EUt(12)

	event.recipes.gtceu.packer('ae2:fluid_storage_cell_256k_back')
		.itemInputs('ae2:fluid_storage_cell_256k')
		.itemOutputs('ae2:fluid_cell_housing', 'ae2:cell_component_256k')
		.duration(10)
		.EUt(12)

	event.recipes.gtceu.packer('ae2:spatial_storage_cell_2_back')
		.itemInputs('ae2:spatial_storage_cell_2')
		.itemOutputs('ae2:item_cell_housing', 'ae2:spatial_cell_component_2')
		.duration(10)
		.EUt(12)

	event.recipes.gtceu.packer('ae2:spatial_storage_cell_16_back')
		.itemInputs('ae2:spatial_storage_cell_16')
		.itemOutputs('ae2:item_cell_housing', 'ae2:spatial_cell_component_16')
		.duration(10)
		.EUt(12)

	event.recipes.gtceu.packer('ae2:spatial_storage_cell_128_back')
		.itemInputs('ae2:spatial_storage_cell_128')
		.itemOutputs('ae2:item_cell_housing', 'ae2:spatial_cell_component_128')
		.duration(10)
		.EUt(12)

	//#endregion 

	// Crafting  Storage
	event.recipes.gtceu.packer('ae2:crafting_accelerator')
		.itemInputs('ae2:crafting_unit', 'ae2:engineering_processor')
		.itemOutputs('ae2:crafting_accelerator')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:1k_crafting_storage')
		.itemInputs('ae2:crafting_unit', 'ae2:cell_component_1k')
		.itemOutputs('ae2:1k_crafting_storage')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:4k_crafting_storage')
		.itemInputs('ae2:crafting_unit', 'ae2:cell_component_4k')
		.itemOutputs('ae2:4k_crafting_storage')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:16k_crafting_storage')
		.itemInputs('ae2:crafting_unit', 'ae2:cell_component_16k')
		.itemOutputs('ae2:16k_crafting_storage')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:64k_crafting_storage')
		.itemInputs('ae2:crafting_unit', 'ae2:cell_component_64k')
		.itemOutputs('ae2:64k_crafting_storage')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:256k_crafting_storage')
		.itemInputs('ae2:crafting_unit', 'ae2:cell_component_256k')
		.itemOutputs('ae2:256k_crafting_storage')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:crafting_monitor')
		.itemInputs('ae2:crafting_unit', 'ae2:storage_monitor')
		.itemOutputs('ae2:crafting_monitor')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:crafting_accelerator_back')
		.itemInputs('ae2:crafting_accelerator')
		.itemOutputs('ae2:crafting_unit', 'ae2:engineering_processor')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:1k_crafting_storage_back')
		.itemInputs('ae2:1k_crafting_storage')
		.itemOutputs('ae2:crafting_unit', 'ae2:cell_component_1k')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:4k_crafting_storage_back')
		.itemInputs('ae2:4k_crafting_storage')
		.itemOutputs('ae2:crafting_unit', 'ae2:cell_component_4k')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:16k_crafting_storage_back')
		.itemInputs('ae2:16k_crafting_storage')
		.itemOutputs('ae2:crafting_unit', 'ae2:cell_component_16k')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:64k_crafting_storage_back')
		.itemInputs(
			'ae2:64k_crafting_storage')
		.itemOutputs(
			'ae2:crafting_unit',
			'ae2:cell_component_64k')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:256k_crafting_storage_back')
		.itemInputs('ae2:256k_crafting_storage')
		.itemOutputs('ae2:crafting_unit', 'ae2:cell_component_256k')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.packer('ae2:crafting_monitor_back')
		.itemInputs('ae2:crafting_monitor')
		.itemOutputs('ae2:crafting_unit', 'ae2:storage_monitor')
		.duration(10)
		.EUt(12)
		.cleanroom(CleanroomType.CLEANROOM)

	// Cable Anchor
	event.recipes.gtceu.extruder('ae2:cable_anchor')
		.itemInputs('#forge:plates/steel')
		.notConsumable('gtceu:bolt_extruder_mold')
		.itemOutputs('8x ae2:cable_anchor')
		.duration(15)
		.EUt(120)

	// Quantum Ring
	event.recipes.gtceu.assembly_line('ae2:quantum_ring')
		.itemInputs(
			'6x #gtceu:batteries/hv',
			'12x #gtceu:circuits/iv',
			'16x gtceu:iv_emitter',
			'8x ae2:engineering_processor',
			'14x gtceu:iv_sensor',
			'ae2:logic_processor')
		.inputFluids(Fluid.of('tfg:fluix', 144 * 200))
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144 * 150))
		.itemOutputs('ae2:quantum_ring')
		.duration(900)
		.EUt(GTValues.VA[GTValues.ZPM])
		.cleanroom(CleanroomType.CLEANROOM)

	// Quantum Link Chamber
	event.recipes.gtceu.assembly_line('ae2:quantum_link')
		.itemInputs(
			'8x tfg:cryo_fluix_pearl',
			'ae2:quartz_glass',
			'32x megacells:accumulation_processor',
			'32x megacells:accumulation_processor',
			'32x ae2:engineering_processor',
			'32x ae2:engineering_processor',
			'32x ae2:logic_processor',
			'32x ae2:logic_processor',
			'32x ae2:calculation_processor',
			'32x ae2:calculation_processor',
			'gtceu:ruthenium_trinium_americium_neutronate_hex_wire',
			'32x gtceu:uv_sensor',
			'32x gtceu:uv_emitter',
			'8x gtceu:uv_field_generator',
			'gtceu:max_battery')
		.inputFluids(Fluid.of('tfg:fluix', 144 * 2000))
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144 * 1500))
		.stationResearch(b => b.researchStack(Item.of('ae2:quartz_glass')).EUt(GTValues.VA[GTValues.UV]).CWUt(256))
		.dimension('ad_astra:moon')
		.itemOutputs('ae2:quantum_link')
		.duration(700)
		.EUt(GTValues.VA[GTValues.UHV])

	// Chemical Reactor
	event.recipes.gtceu.chemical_reactor('ae2:fluix_pearl')
		.itemInputs('4x #forge:gems/fluix', 'tfg:vitrified_pearl')
		.inputFluids(Fluid.of('tfg:fluix', 576))
		.itemOutputs('ae2:fluix_pearl')
		.duration(200)
		.EUt(480)
		.cleanroom(CleanroomType.CLEANROOM)
		.addMaterialInfo(true, true)

	// Fluix crystal
	event.recipes.gtceu.mixer('ae2:fluix_crystal')
		.itemInputs(
			'#tfg:reactant_fluix_ruby',
			'#tfg:reactant_fluix_quartz',
			'4x ae2:charged_certus_quartz_crystal')
		.inputFluids("#tfg:clean_water 150")
		.itemOutputs('5x ae2:fluix_crystal')
		.duration(120)
		.EUt(256)

	event.recipes.gtceu.mixer('ae2:fluix_crystal_ruby')
		.itemInputs(
			'#tfg:reactant_fluix_ruby_exquisite',
			'#tfg:reactant_fluix_quartz',
			'4x ae2:charged_certus_quartz_crystal')
		.inputFluids("#tfg:clean_water 150")
		.itemOutputs('20x ae2:fluix_crystal')
		.duration(80)
		.EUt(256)

	event.recipes.gtceu.mixer('ae2:fluix_crystal_quartz')
		.itemInputs(
			'#tfg:reactant_fluix_ruby',
			'#tfg:reactant_fluix_quartz_exquisite',
			'4x ae2:charged_certus_quartz_crystal')
		.inputFluids("#tfg:clean_water 150")
		.itemOutputs('20x ae2:fluix_crystal')
		.duration(80)
		.EUt(256)

	event.recipes.gtceu.mixer('ae2:fluix_crystal_quartz_ruby')
		.itemInputs(
			'#tfg:reactant_fluix_ruby_exquisite',
			'#tfg:reactant_fluix_quartz_exquisite',
			'4x ae2:charged_certus_quartz_crystal')
		.inputFluids(Fluid.of('gtceu:distilled_water', 150))
		.itemOutputs('40x ae2:fluix_crystal')
		.duration(60)
		.EUt(256)

	// Fluix block

	event.recipes.gtceu.fluid_solidifier('ae2:solidify_fluix_block')
		.inputFluids(Fluid.of('tfg:fluix', 144 * 4))
		.notConsumable('gtceu:block_casting_mold')
		.itemOutputs('ae2:fluix_block')
		.duration(100)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.macerator(`ae2:macerate_fluix_block`)
		.itemInputs('ae2:fluix_block')
		.itemOutputs('4x ae2:fluix_dust')
		.duration(100)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	// Certus deco blocks

	event.stonecutting('ae2:quartz_block', '#tfg:certus_quartz_blocks')
	event.stonecutting('ae2:cut_quartz_block', '#tfg:certus_quartz_blocks')
	event.stonecutting('ae2:smooth_quartz_block', '#tfg:certus_quartz_blocks')
	event.stonecutting('ae2:quartz_bricks', '#tfg:certus_quartz_blocks')
	event.stonecutting('ae2:quartz_pillar', '#tfg:certus_quartz_blocks')
	event.stonecutting('ae2:chiseled_quartz_block', '#tfg:certus_quartz_blocks')
	event.stonecutting('ae2:quartz_stairs', '#tfg:certus_quartz_blocks')
	event.stonecutting('ae2:cut_quartz_stairs', '#tfg:certus_quartz_blocks')
	event.stonecutting('ae2:smooth_quartz_stairs', '#tfg:certus_quartz_blocks')
	event.stonecutting('ae2:quartz_brick_stairs', '#tfg:certus_quartz_blocks')
	event.stonecutting('ae2:chiseled_quartz_stairs', '#tfg:certus_quartz_blocks')
	event.stonecutting('ae2:quartz_pillar_stairs', '#tfg:certus_quartz_blocks')
	event.stonecutting('ae2:quartz_wall', '#tfg:certus_quartz_blocks')
	event.stonecutting('ae2:cut_quartz_wall', '#tfg:certus_quartz_blocks')
	event.stonecutting('ae2:smooth_quartz_wall', '#tfg:certus_quartz_blocks')
	event.stonecutting('ae2:quartz_brick_wall', '#tfg:certus_quartz_blocks')
	event.stonecutting('ae2:chiseled_quartz_wall', '#tfg:certus_quartz_blocks')
	event.stonecutting('ae2:quartz_pillar_wall', '#tfg:certus_quartz_blocks')
	event.stonecutting('2x ae2:quartz_slab', '#tfg:certus_quartz_blocks')
	event.stonecutting('2x ae2:cut_quartz_slab', '#tfg:certus_quartz_blocks')
	event.stonecutting('2x ae2:smooth_quartz_slab', '#tfg:certus_quartz_blocks')
	event.stonecutting('2x ae2:quartz_brick_slab', '#tfg:certus_quartz_blocks')
	event.stonecutting('2x ae2:chiseled_quartz_slab', '#tfg:certus_quartz_blocks')
	event.stonecutting('2x ae2:quartz_pillar_slab', '#tfg:certus_quartz_blocks')

	event.recipes.gtceu.macerator('tfg:macerate_certus_deco')
		.itemInputs('#tfg:certus_quartz_blocks')
		.itemOutputs('4x #forge:dusts/certus_quartz')
		.duration(150)
		.EUt(2)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)

	event.recipes.gtceu.macerator('tfg:macerate_sky_stone')
		.itemInputs('#tfg:sky_stone_blocks')
		.itemOutputs('ae2:sky_dust')
		.duration(150)
		.EUt(2)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)

	// other deco

	event.recipes.gtceu.shaped('ae2:not_so_mysterious_cube', [
		' A ',
		'BCD',
		' E '
	], {
		A: 'ae2:calculation_processor_press',
		B: 'ae2:engineering_processor_press',
		C: 'ae2:fluix_block',
		D: 'ae2:logic_processor_press',
		E: 'ae2:silicon_press'
	}).id('tfg:shaped/not_so_mysterious_cube')

}
