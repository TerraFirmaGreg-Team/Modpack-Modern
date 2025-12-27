// priority: 0
"use strict";

const registerCreateRecipes = (event) => {

	// Удаление рецептов мода create 
	event.remove({
		not: [
			{ id: 'create:crafting/kinetics/cuckoo_clock' },
			{ id: 'create:crafting/kinetics/mysterious_cuckoo_clock' },
			{ id: 'create:crafting/kinetics/smart_chute' },
			{ id: 'create:crafting/kinetics/speedometer_from_conversion' },
			{ id: 'create:crafting/kinetics/stressometer_from_conversion' },
			{ id: 'create:crafting/kinetics/smart_fluid_pipe' },
			{ id: 'create:crafting/kinetics/portable_fluid_interface' },
			{ id: 'create:crafting/kinetics/clockwork_bearing' },
			{ id: 'create:crafting/kinetics/linear_chassisfrom_conversion' },
			{ id: 'create:crafting/kinetics/secondary_linear_chassisfrom_conversion' },
			{ id: 'create:crafting/kinetics/portable_storage_interface' },
			{ id: 'create:crafting/kinetics/track_signal' },
			{ id: 'create:crafting/kinetics/track_observer' },
			{ id: 'create:crafting/kinetics/controls' },
			{ id: 'create:crafting/logistics/content_observer' },
			{ id: 'create:crafting/logistics/stockpile_switch' },
			{ id: 'create:crafting/kinetics/nixie_tube' },
			{ id: 'create:crafting/kinetics/placard' },
			{ id: 'create:crafting/logistics/pulse_repeater' },
			{ id: 'create:crafting/logistics/pulse_extender' },
			{ id: 'create:crafting/logistics/powered_latch' },
			{ id: 'create:crafting/logistics/powered_toggle_latch' },
			{ id: 'create:crafting/kinetics/crafter_slot_cover' },
			{ id: 'create:crafting/appliances/linked_controller' },
			{ id: 'create:crafting/appliances/filter_clear' },
			{ id: 'create:crafting/appliances/attribute_filter_clear' },
			{ id: 'create:crafting/appliances/schedule_clear' },
			{ id: 'create:crafting/schematics/empty_schematic' },
			{ id: 'create:crafting/schematics/schematic_and_quill' },
			{ id: 'create:crafting/appliances/clipboard_clear' },
			{ id: 'create:crafting/logistics/content_observer' },
			{ id: 'create:crafting/kinetics/chain_conveyor' },
			{ id: 'create:crafting/logistics/packager_from_conversion' },
			{ id: 'create:crafting/logistics/repackager_from_conversion' },
			{ id: 'create:crafting/materials/cardboard_block'},
			{ id: 'create:crafting/materials/bound_cardboard_block'},
			{ id: 'create:crafting/materials/cardboard_from_block'},
			{ id: 'create:crafting/materials/cardboard_from_bound_block'},
			{ id: 'create:item_application/bound_cardboard_inworld'},
			{ id: 'create:crafting/logistics/redstone_requester_clear'},
			{ id: 'create:crafting/logistics/stock_link_clear'},
			{ id: 'create:crafting/logistics/stock_ticker_clear'},
			{ id: 'create:crafting/logistics/factory_gauge_clear'},
			{ output: '#create:table_cloths'}, // Gotta do this to not purge the table cloth reset recipes
			{ type: 'minecraft:stonecutting' }
		], mod: 'create'
	})
	// Make Bound Cardboard craftable with all string
	event.replaceInput({id: 'create:crafting/materials/bound_cardboard_block' }, 'minecraft:string', '#forge:string')
	
	// Remove Table Cloth recipes
	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		event.remove([{ id: `create:crafting/logistics/${dye}_table_cloth` }, { id: `create:crafting/logistics/${dye}_table_cloth_from_other_table_cloth` }])
	})

	event.remove({ type: 'minecraft:stonecutting', input: 'create:andesite_alloy' })
	event.remove({ type: 'minecraft:stonecutting', input: 'create:rose_quartz' })
	event.remove({ type: 'minecraft:stonecutting', input: 'create:polished_rose_quartz' })
	event.remove({ type: 'minecraft:stonecutting', input: 'minecraft:iron_ingot' })
	event.remove({ type: 'create:spout_filling', id: 'create:potions' })
	event.remove({ type: 'create:spout_filling', id: 'create:fill_minecraft_glass_bottle_with_gtceu_potion' })
	event.remove({ type: 'create:draining', id: 'create:potions' })

	// Train Station
	event.shapeless('2x create:track_station', [
		'create:railway_casing',
		'firmaciv:firmaciv_compass'
	]).id('create:crafting/kinetics/track_station')

	// Speedometer
	event.shapeless('create:speedometer', [
		'create:andesite_casing',
		'firmaciv:firmaciv_compass'
	]).id('create:crafting/kinetics/speedometer')

	// Пушка для постройки схематик
	event.recipes.gtceu.shaped('create:schematicannon', [
		'DE ',
		'CAC'
	], {
		A: '#forge:storage_blocks/wrought_iron',
		C: '#tfc:rock/smooth',
		D: 'minecraft:dispenser',
		E: 'firmaciv:cannon'
	}).addMaterialInfo().id('tfg:create/shaped/schematicannon')

	// Стол для схематик
	event.shaped('create:schematic_table', [
		'AAA',
		'CB '
	], {
		A: '#minecraft:wooden_slabs',
		B: '#minecraft:logs',
		C: '#forge:tools/saws'
	}).id('tfg:create/shaped/schematic_table')

	event.recipes.gtceu.assembler('create:schematic_table')
		.itemInputs('3x #minecraft:wooden_slabs', '1x #minecraft:logs')
		.itemOutputs('create:schematic_table')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	// Внутриблочный двигатель цепи
	event.shapeless('create:encased_chain_drive', [
		'create:andesite_casing',
		'#tfg:metal_chains',
		'#tfg:metal_chains',
		'#tfg:metal_chains',
		'#tfg:metal_chains'
	]).id('tfg:create/shapeless/encased_chain_drive')

	// Сопло
	event.shaped('create:nozzle', [
		'ABA',
		'ACA'
	], {
		A: '#forge:rods/wrought_iron',
		B: '#forge:plates/wrought_iron',
		C: '#forge:cloth'
	}).id('tfg:create/shaped/nozzle')

	// Ручка, чтобы люто крутить
	event.shaped('create:hand_crank', [
		'AAA',
		'  B'
	], {
		A: '#tfc:lumber',
		B: '#forge:rods/bismuth_bronze'
	}).id('tfg:create/shaped/hand_crank_bismuth_bronze')

	event.shaped('create:hand_crank', [
		'AAA',
		'  B'
	], {
		A: '#tfc:lumber',
		B: '#forge:rods/bronze'
	}).id('tfg:create/shaped/hand_crank_bronze')

	event.shaped('create:hand_crank', [
		'AAA',
		'  B'
	], {
		A: '#tfc:lumber',
		B: '#forge:rods/black_bronze'
	}).id('tfg:create/shaped/hand_crank_black_bronze')

	// Емкость для миксера
	event.shaped('create:basin', [
		'ABA',
		'AAA'
	], {
		A: '#forge:ingots/iron',
		B: '#forge:tools/hammers'
	}).id('tfg:create/shaped/basin')

	event.recipes.gtceu.assembler('tfg:create/basin')
		.itemInputs('5x #forge:ingots/iron')
		.circuit(3)
		.itemOutputs('create:basin')
		.duration(200)
		.EUt(20)
		.addMaterialInfo(true)

	// Место куда можно что то положить
	event.recipes.gtceu.shaped('create:depot', [
		'A',
		'B'
	], {
		A: '#forge:double_plates/wrought_iron',
		B: 'create:andesite_casing'
	}).addMaterialInfo().id('tfg:create/shaped/depot')

	// Лоток
	event.shaped('create:chute', [
		'A ',
		'AB',
		'A '
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:tools/hammers'
	}).id('tfg:create/shaped/chute')

	event.recipes.gtceu.assembler('tfg:create/chute')
		.itemInputs('3x #forge:plates/wrought_iron')
		.circuit(4)
		.itemOutputs('create:chute')
		.duration(200)
		.EUt(20)
		.addMaterialInfo(true)

	// Металлический держатель
	event.recipes.gtceu.shaped('4x create:metal_bracket', [
		'AAA',
		' B '
	], {
		A: '#forge:bolts/wrought_iron',
		B: '#forge:plates/wrought_iron'
	}).addMaterialInfo().id('tfg:create/shaped/metal_bracket')

	// Жидкостная труба
	event.shaped('create:fluid_pipe', [
		'BAB'
	], {
		A: '#forge:tools/hammers',
		B: '#forge:plates/copper'
	}).id('tfg:create/shaped/fluid_pipe')

	event.recipes.gtceu.assembler('tfg:create/fluid_pipe')
		.itemInputs('2x #forge:plates/copper')
		.circuit(3)
		.itemOutputs('create:fluid_pipe')
		.duration(200)
		.EUt(20)
		.addMaterialInfo(true)

	// Жидкостный люк
	event.shapeless('create:fluid_valve', [
		'create:fluid_pipe',
		'#forge:plates/wrought_iron'
	]).id('tfg:create/shapeless/fluid_valve')

	// Ручка жидкостного люка
	event.shaped('create:copper_valve_handle', [
		' A ',
		'BCD'
	], {
		A: '#forge:plates/copper',
		B: '#forge:tools/hammers',
		C: '#forge:small_gears/wrought_iron',
		D: '#forge:tools/files'
	}).id('tfg:create/shaped/copper_valve_handle')

	event.recipes.gtceu.assembler('tfg:create/copper_valve_handle')
		.itemInputs('#forge:plates/copper', '#forge:small_gears/wrought_iron')
		.circuit(6)
		.itemOutputs('create:copper_valve_handle')
		.duration(200)
		.EUt(20)
		.addMaterialInfo(true)

	// Жидкостный резервуар
	event.shaped('create:fluid_tank', [
		'ADA',
		'BCB',
		'AEA'
	], {
		A: '#forge:bolts/copper',
		B: '#forge:plates/copper',
		C: '#forge:glass_panes',
		D: '#forge:tools/screwdrivers',
		E: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/fluid_tank')

	event.recipes.gtceu.assembler('create:fluid_tank')
		.itemInputs('2x #forge:bolts/copper', '2x #forge:plates/copper', '#forge:glass_panes')
		.itemOutputs('create:fluid_tank')
		.circuit(4)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])
		.addMaterialInfo(true)

	// Шкив для шланга
	event.shaped('create:hose_pulley', [
		'DAE',
		' B ',
		'CFC'
	], {
		A: 'create:copper_casing',
		B: '#forge:foils/rubber',
		C: '#forge:plates/copper',
		D: '#forge:tools/wrenches',
		E: '#forge:tools/hammers',
		F: 'minecraft:bucket'
	}).id('tfg:create/shaped/hose_pulley')

	event.recipes.gtceu.assembler('create:hose_pulley')
		.itemInputs('create:copper_casing', '#forge:foils/rubber', '2x #forge:plates/copper', 'minecraft:bucket')
		.itemOutputs('create:hose_pulley')
		.duration(50)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.ULV])

	TFGHelpers.registerMaterialInfo('create:hose_pulley', { 'copper': 3 });

	// Слив из предметов
	event.shaped('create:item_drain', [
		'A',
		'B'
	], {
		A: '#tfg:metal_bars',
		B: 'create:copper_casing'
	}).id('tfg:create/shaped/item_drain')

	// Жидкостный наполнитель
	event.shaped('create:spout', [
		'CBD',
		' A '
	], {
		A: '#forge:foils/rubber',
		B: 'create:fluid_tank',
		C: '#forge:tools/wrenches',
		D: '#forge:tools/screwdrivers'
	}).id('tfg:create/shaped/spout')

	event.recipes.gtceu.assembler('create:spout')
		.itemInputs('create:fluid_tank', '#forge:foils/rubber')
		.itemOutputs('create:spout')
		.duration(50)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.ULV])
		.addMaterialInfo(true)

	// Паровой двигатель
	event.shaped('create:steam_engine', [
		'  A',
		'DCC',
		'FE '
	], {
		A: '#forge:screws/wrought_iron',
		C: '#forge:rods/brass',
		D: '#forge:small_gears/steel',
		E: '#forge:tools/hammers',
		F: '#forge:double_ingots/copper'
	}).id('tfg:create/shaped/steam_engine')

	event.recipes.gtceu.assembler('tfg:create/steam_engine')
		.itemInputs('1x #forge:screws/wrought_iron', '2x #forge:rods/brass', '#forge:small_gears/steel', '#forge:double_ingots/copper')
		.circuit(3)
		.itemOutputs('create:steam_engine')
		.duration(200)
		.EUt(32)
		.addMaterialInfo(true)

	// Паровой свисток
	event.shaped('create:steam_whistle', [
		'AC',
		'BD'
	], {
		A: '#forge:plates/brass',
		B: '#forge:rings/gold',
		C: '#forge:tools/hammers',
		D: '#forge:tools/files'
	}).id('tfg:create/shaped/steam_whistle')

	event.recipes.gtceu.assembler('tfg:create/steam_whistle')
		.itemInputs('#forge:plates/brass', '#forge:rings/gold')
		.circuit(5)
		.itemOutputs('create:steam_whistle')
		.duration(200)
		.EUt(4)
		.addMaterialInfo(true)

	// Рука поршня
	event.shaped('8x create:piston_extension_pole', [
		'A ',
		'BC',
		'A '
	], {
		A: '#minecraft:planks',
		B: '#forge:plates/wrought_iron',
		C: '#forge:tools/hammers'
	}).id('tfg:create/shaped/piston_extension_pole')

	event.recipes.gtceu.assembler('tfg:create/piston_extension_pole')
		.itemInputs('2x #minecraft:planks', '#forge:plates/wrought_iron')
		.circuit(3)
		.itemOutputs('8x create:piston_extension_pole')
		.duration(200)
		.EUt(20)
		.addMaterialInfo(true)

	// Редстоуновый вал
	event.shaped('8x create:gantry_shaft', [
		'A ',
		'BC',
		'A '
	], {
		A: '#forge:plates/wrought_iron',
		B: 'gtceu:red_alloy_single_wire',
		C: '#forge:tools/hammers'
	}).id('tfg:create/shaped/gantry_shaft')

	event.recipes.gtceu.assembler('tfg:create/gantry_shaft')
		.itemInputs('gtceu:red_alloy_single_wire', '2x #forge:plates/wrought_iron')
		.circuit(3)
		.itemOutputs('8x create:gantry_shaft')
		.duration(200)
		.EUt(20)
		.addMaterialInfo(true)

	// Канатный шкиф
	event.shaped('create:rope_pulley', [
		'EA ',
		'DBD',
		' C '
	], {
		A: 'create:andesite_casing',
		B: 'firmaciv:rope_coil',
		C: '#forge:plates/wrought_iron',
		D: '#forge:cogwheels',
		E: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/rope_pulley')

	event.recipes.gtceu.assembler('create:rope_pulley')
		.itemInputs('create:andesite_casing', 'firmaciv:rope_coil', '#forge:plates/wrought_iron', '2x #forge:cogwheels')
		.itemOutputs('create:rope_pulley')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])
		.circuit(22)

	TFGHelpers.registerMaterialInfo('create:rope_pulley', { 'wood': 1, 'wrought_iron': 2 });

	// Шкиф подъемника
	event.shaped('create:elevator_pulley', [
		'EAF',
		'DBD',
		' C '
	], {
		A: 'create:brass_casing',
		B: 'firmaciv:rope_coil',
		C: '#forge:plates/steel',
		D: '#forge:cogwheels',
		E: '#forge:tools/wrenches',
		F: 'create:electron_tube'
	}).id('tfg:create/shaped/elevator_pulley')

	event.recipes.gtceu.assembler('create:elevator_pulley')
		.itemInputs('create:brass_casing', 'firmaciv:rope_coil', '#forge:plates/steel', '2x #forge:cogwheels', 'create:electron_tube')
		.itemOutputs('create:elevator_pulley')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	TFGHelpers.registerMaterialInfo('create:elevator_pulley', { 'wood': 1, 'brass': 1, 'steel': 1 });

	// Сборщик вагонеток
	event.shaped('create:cart_assembler', [
		' D ',
		'ABA',
		'C C'
	], {
		A: '#forge:plates/steel',
		B: 'gtceu:red_alloy_single_wire',
		C: '#minecraft:logs',
		D: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/cart_assembler')

	event.recipes.gtceu.assembler('create:cart_assembler')
		.itemInputs('2x #forge:plates/steel', 'gtceu:red_alloy_single_wire', '2x #minecraft:logs')
		.itemOutputs('create:cart_assembler')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])
		.circuit(21)
		.addMaterialInfo(true)

	// Контроллер рельсы
	event.shaped('4x create:controller_rail', [
		'ABA',
		'ACA',
		'ABA'
	], {
		A: '#forge:rods/gold',
		B: '#tfc:can_be_lit_on_torch',
		C: 'create:electron_tube'
	}).id('tfg:create/shaped/controller_rail')

	// Линейный переход
	event.recipes.gtceu.shaped('4x create:linear_chassis', [
		'A A',
		'CCC',
		'A A'
	], {
		A: '#forge:bolts/wrought_iron',
		C: '#minecraft:logs'
	}).addMaterialInfo().id('tfg:create/shaped/linear_chassis')

	event.shapeless('create:linear_chassis', ['create:secondary_linear_chassis'])
	event.shapeless('create:secondary_linear_chassis', ['create:linear_chassis'])

	// Радиальный переход
	event.recipes.gtceu.shaped('3x create:radial_chassis', [
		'ACA',
		' C ',
		'ACA'
	], {
		A: '#forge:bolts/wrought_iron',
		C: '#minecraft:logs'
	}).addMaterialInfo().id('tfg:create/shaped/radial_chassis')

	// Умный липкий поршень
	event.recipes.gtceu.shaped('create:sticker', [
		'ABA',
		'CDC'
	], {
		A: '#forge:plates/wrought_iron',
		B: 'tfc:glue',
		C: '#forge:cobblestone',
		D: '#forge:dusts/redstone'
	}).addMaterialInfo().id('tfg:create/shaped/sticker')

	// Механическая бурилка
	event.shaped('create:mechanical_drill', [
		'EBF',
		'HCG',
		'ADA'
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:drill_heads',
		C: 'greate:steel_cogwheel',
		D: 'create:andesite_casing',
		E: '#forge:tools/hammers',
		F: '#forge:tools/wrenches',
		G: '#forge:screws/wrought_iron',
		H: '#gtceu:circuits/ulv'
	}).id('tfg:create/shaped/mechanical_drill')

	event.recipes.gtceu.assembler('create:mechanical_drill')
		.itemInputs('2x #forge:plates/wrought_iron', '#forge:drill_heads', '#forge:cogwheels', 'create:andesite_casing', '#gtceu:circuits/ulv')
		.itemOutputs('create:mechanical_drill')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])
		.circuit(19)

	TFGHelpers.registerMaterialInfo('create:mechanical_drill', { 'wood': 1, 'steel': 4, 'wrought_iron': 3 });

	event.shaped('create:mechanical_roller', [
		'GBG',
		'ADA',
		'EHF'
	], {
		A: '#forge:plates/wrought_iron',
		B: 'tfc:metal/block/wrought_iron',
		D: 'create:andesite_casing',
		E: '#forge:tools/hammers',
		F: '#forge:tools/wrenches',
		G: '#forge:bolts/wrought_iron',
		H: '#forge:cogwheels'
	}).id('tfg:create/shaped/mechanical_roller')

	event.recipes.gtceu.assembler('create:mechanical_roller')
		.itemInputs('2x #forge:plates/wrought_iron', 'tfc:metal/block/wrought_iron', 'create:andesite_casing', '2x #forge:bolts/wrought_iron', '#forge:cogwheels')
		.itemOutputs('create:mechanical_roller')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])
		.circuit(20)

	TFGHelpers.registerMaterialInfo('create:mechanical_roller', { 'wood': 1,'wrought_iron': 4 });

	// Редстоуновый контакт
	event.shaped('2x create:redstone_contact', [
		'DCE',
		'ABA',
		'AAA'
	], {
		A: '#forge:cobblestone',
		B: '#forge:dusts/redstone',
		C: '#forge:plates/wrought_iron',
		D: '#forge:screws/bronze',
		E: '#forge:tools/screwdrivers'
	}).id('tfg:create/shaped/redstone_contact')

	event.recipes.gtceu.assembler('tfg:create/redstone_contact')
		.itemInputs('5x #forge:cobblestone', '#forge:dusts/redstone', '#forge:plates/wrought_iron', '#forge:screws/bronze')
		.circuit(3)
		.itemOutputs('2x create:redstone_contact')
		.duration(200)
		.EUt(20)
		.addMaterialInfo(true)

	// Механический собиратель
	event.shaped('create:mechanical_harvester', [
		'CDE',
		'BFB',
		'AAA'
	], {
		A: '#forge:shovel_heads/wrought_iron',
		B: '#forge:plates/wrought_iron',
		C: '#forge:tools/hammers',
		D: 'create:andesite_casing',
		E: '#forge:tools/wrenches',
		F: '#forge:cogwheels'
	}).id('tfg:create/shaped/mechanical_harvester')

	event.recipes.gtceu.assembler('tfg:create/mechanical_harvester')
		.itemInputs('3x #forge:shovel_heads', '2x #forge:plates/wrought_iron', '#forge:cogwheels', 'create:andesite_casing')
		.circuit(3)
		.itemOutputs('create:mechanical_harvester')
		.duration(200)
		.EUt(20)

	TFGHelpers.registerMaterialInfo('create:mechanical_harvester', { 'wood': 1, 'wrought_iron': 3 });

	// Механический плуг
	event.shaped('create:mechanical_plough', [
		'CDE',
		'BFB',
		'AAA'
	], {
		A: '#forge:hoe_heads/wrought_iron',
		B: '#forge:plates/wrought_iron',
		C: '#forge:tools/hammers',
		D: 'create:andesite_casing',
		E: '#forge:tools/wrenches',
		F: '#forge:cogwheels'
	}).id('tfg:create/shaped/mechanical_plough')

	event.recipes.gtceu.assembler('tfg:create/mechanical_plough')
		.itemInputs('3x #forge:hoe_heads', '2x #forge:plates/wrought_iron', '#forge:cogwheels', 'create:andesite_casing')
		.circuit(5)
		.itemOutputs('create:mechanical_plough')
		.duration(200)
		.EUt(20)

	TFGHelpers.registerMaterialInfo('create:mechanical_plough', { 'wood': 1, 'wrought_iron': 3 });

	// Create sail creation using custom sail items.

	event.shaped('8x create:sail_frame', [
		'ADA',
		'BCB',
		'ABA'
	], {
		A: '#forge:screws/wood',
		B: 'gtceu:treated_wood_rod',
		C: 'gtceu:treated_wood_frame',
		D: '#forge:rods/wrought_iron'
	}).id('tfg:create/shaped/sail_frame')

	event.shaped('8x create:white_sail', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'create:sail_frame',
		B: '#forge:cloth'
	}).id('tfg:create/shaped/white_sail')


	// Андезитовый корпус
	event.recipes.createItemApplication(['create:andesite_casing'], ['#forge:stripped_logs', '#forge:plates/wrought_iron'])
		.id('tfg:create/item_application/andesite_casing')

	event.recipes.gtceu.assembler('tfg:create/andesite_casing')
		.itemInputs('#forge:stripped_logs', '#forge:plates/wrought_iron')
		.circuit(10)
		.itemOutputs('create:andesite_casing')
		.duration(50)
		.EUt(4)
		.addMaterialInfo(true)

	// Латунный корпус
	event.recipes.createItemApplication(['create:brass_casing'], ['#forge:stripped_logs', '#forge:plates/brass'])
		.id('tfg:create/item_application/brass_casing')

	event.recipes.gtceu.assembler('tfg:create/brass_casing')
		.itemInputs('#forge:stripped_logs', '#forge:plates/brass')
		.circuit(10)
		.itemOutputs('create:brass_casing')
		.duration(50)
		.EUt(4)
		.addMaterialInfo(true)

	// Медный корпус
	event.recipes.createItemApplication(['create:copper_casing'], ['#forge:stripped_logs', '#forge:plates/copper'])
		.id('tfg:create/item_application/copper_casing')

	event.recipes.gtceu.assembler('tfg:create/copper_casing')
		.itemInputs('#forge:stripped_logs', '#forge:plates/copper')
		.circuit(11)
		.itemOutputs('create:copper_casing')
		.duration(50)
		.EUt(4)
		.addMaterialInfo(true)

    // Shadow steel casing
    event.recipes.createItemApplication(['create:shadow_steel_casing'], ['#forge:stripped_logs', '#forge:plates/black_steel'])
    		.id('tfg:create/item_application/shadow_steel_casing')

    event.recipes.gtceu.assembler('tfg:create/shadow_steel_casing')
        .itemInputs('#forge:stripped_logs', '#forge:plates/black_steel')
        .circuit(11)
        .itemOutputs('create:shadow_steel_casing')
        .duration(50)
        .EUt(4)
        .addMaterialInfo(true)

    // Refined radiance casing
    event.recipes.createItemApplication(['create:refined_radiance_casing'], ['#forge:stripped_logs', 'gtceu:glowstone_plate'])
            .id('tfg:create/item_application/refined_radiance_casing')

    event.recipes.gtceu.assembler('tfg:create/refined_radiance_casing')
        .itemInputs('#forge:stripped_logs', 'gtceu:glowstone_plate')
        .circuit(11)
        .itemOutputs('create:refined_radiance_casing')
        .duration(50)
        .EUt(4)
        .addMaterialInfo(true)

	// Корпус поезда
	event.recipes.createItemApplication(['create:railway_casing'], ['create:brass_casing', '#forge:plates/black_steel'])
		.id('tfg:create/item_application/railway_casing')

	event.recipes.gtceu.assembler('tfg:create/railway_casing')
		.itemInputs('create:brass_casing', '#forge:plates/black_steel')
		.circuit(10)
		.itemOutputs('create:railway_casing')
		.duration(50)
		.EUt(4)
		.addMaterialInfo(true)

	// Механический крафтер
	event.shaped('create:mechanical_crafter', [
		' A ',
		'DCE',
		' F '
	], {
		A: 'create:electron_tube',
		C: '#tfc:workbenches',
		D: '#forge:tools/wrenches',
		E: '#forge:tools/hammers',
		F: '#forge:small_gears/brass'
	}).id('tfg:create/shaped/mechanical_crafter')

	event.recipes.gtceu.assembler('create:mechanical_crafter')
		.itemInputs('create:electron_tube', '#tfc:workbenches', '#forge:small_gears/brass')
		.itemOutputs('create:mechanical_crafter')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])
		.addMaterialInfo(true)

	// Маховик
	event.shaped('create:flywheel', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: '#forge:plates/brass',
		B: '#forge:rods/wrought_iron',
		C: '#forge:shafts'
	}).id('tfg:create/shaped/flywheel')

	// Механическая рука
	event.shaped('create:mechanical_arm', [
		'AAB',
		'C  ',
		' DF'
	], {
		A: '#forge:rods/brass',
		B: '#forge:rods/wrought_iron',
		C: 'create:precision_mechanism',
		D: 'create:brass_casing',
		F: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/mechanical_arm')

	event.recipes.gtceu.assembler('tfg:create/mechanical_arm')
		.itemInputs('2x #forge:rods/brass', '#forge:rods/wrought_iron', 'create:precision_mechanism', 'create:brass_casing')
		.circuit(3)
		.itemOutputs('create:mechanical_arm')
		.duration(200)
		.EUt(20)
		.addMaterialInfo(true)

	// Наблюдатель за поездом
	event.shapeless('create:track_observer', [
		'create:railway_casing',
		'#minecraft:stone_pressure_plates'
	]).id('tfg:create/shapeless/track_observer')

	// Сейф
	event.shaped('create:item_vault', [
		' B ',
		'CAC',
		' D '
	], {
		A: '#forge:chests/wooden',
		B: '#forge:sheets/wrought_iron',
		C: '#forge:screws/wrought_iron',
		D: '#forge:tools/screwdrivers'
	}).id('tfg:create/shaped/item_vault')

	event.recipes.gtceu.assembler('tfg:create/item_vault')
		.itemInputs('#forge:chests/wooden', '#forge:sheets/wrought_iron', '2x #forge:screws/wrought_iron')
		.circuit(3)
		.itemOutputs('create:item_vault')
		.duration(200)
		.EUt(20)
		.addMaterialInfo(true)

	// Умный раздатчик/приемник из железа
	event.shaped('2x create:andesite_funnel', [
		'AAD',
		'BBC'
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:foils/rubber',
		C: '#forge:tools/wrenches',
		D: '#forge:tools/knives'
	}).id('tfg:create/shaped/andesite_funnel')

	event.recipes.gtceu.assembler('create:andesite_funnel')
		.itemInputs('#forge:plates/wrought_iron', '#forge:foils/rubber')
		.itemOutputs('create:andesite_funnel')
		.circuit(6)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.shaped('2x create:andesite_funnel', [
		'AAD',
		'BBC'
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:leather',
		C: '#forge:tools/wrenches',
		D: '#forge:tools/knives'
	}).id('tfg:create/shaped/andesite_funnel_leather')

	event.recipes.gtceu.assembler('create:andesite_funnel_leather')
		.itemInputs('#forge:plates/wrought_iron', '#forge:leather')
		.itemOutputs('create:andesite_funnel')
		.circuit(7)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	TFGHelpers.registerMaterialInfo('create:andesite_funnel', { 'wrought_iron': 1 });

	// Умный раздатчик/приемник из латуни
	event.shaped('2x create:brass_funnel', [
		' E ',
		'AAD',
		'BBC'
	], {
		A: '#forge:plates/brass',
		B: '#forge:foils/rubber',
		C: '#forge:tools/wrenches',
		D: '#forge:tools/knives',
		E: 'create:electron_tube'
	}).id('tfg:create/shaped/brass_funnel')

	event.recipes.gtceu.assembler('create:brass_funnel')
		.itemInputs('2x #forge:plates/brass', '2x #forge:foils/rubber', 'create:electron_tube')
		.itemOutputs('2x create:brass_funnel')
		.circuit(8)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.shaped('2x create:brass_funnel', [
		' E ',
		'AAD',
		'BBC'
	], {
		A: '#forge:plates/brass',
		B: '#forge:leather',
		C: '#forge:tools/wrenches',
		D: '#forge:tools/knives',
		E: 'create:electron_tube'
	}).id('tfg:create/shaped/brass_funnel_leather')

	event.recipes.gtceu.assembler('create:brass_funnel_leather')
		.itemInputs('2x #forge:plates/brass', '2x #forge:leather', 'create:electron_tube')
		.itemOutputs('2x create:brass_funnel')
		.circuit(9)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	TFGHelpers.registerMaterialInfo('create:brass_funnel', { 'brass': 1 });

	// Тунель из железа
	event.shaped('create:andesite_tunnel', [
		' D',
		'AA',
		'BB'
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:foils/rubber',
		D: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/andesite_tunnel')

	event.recipes.gtceu.assembler('create:andesite_tunnel')
		.itemInputs('#forge:plates/wrought_iron', '#forge:foils/rubber')
		.itemOutputs('create:andesite_tunnel')
		.circuit(10)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.shaped('create:andesite_tunnel', [
		' D',
		'AA',
		'BB'
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:leather',
		D: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/andesite_tunnel_leather')

	event.recipes.gtceu.assembler('create:andesite_tunnel_leather')
		.itemInputs('#forge:plates/wrought_iron', '#forge:leather')
		.itemOutputs('create:andesite_tunnel')
		.circuit(11)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])
		
	TFGHelpers.registerMaterialInfo('create:andesite_tunnel', { 'wrought_iron': 1 });

	// Тунель из латуни
	event.shaped('create:brass_tunnel', [
		'CD',
		'AA',
		'BB'
	], {
		A: '#forge:plates/brass',
		B: '#forge:foils/rubber',
		C: 'create:electron_tube',
		D: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/brass_tunnel')

	event.recipes.gtceu.assembler('create:brass_tunnel')
		.itemInputs('2x #forge:plates/brass', '2x #forge:foils/rubber', 'create:electron_tube')
		.itemOutputs('2x create:brass_tunnel')
		.circuit(12)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.shaped('create:brass_tunnel', [
		'CD',
		'AA',
		'BB'
	], {
		A: '#forge:plates/brass',
		B: '#forge:leather',
		C: 'create:electron_tube',
		D: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/brass_tunnel_leather')

	event.recipes.gtceu.assembler('create:brass_tunnel_leather')
		.itemInputs('2x #forge:plates/brass', '2x #forge:leather', 'create:electron_tube')
		.itemOutputs('2x create:brass_tunnel')
		.circuit(13)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])
		
	TFGHelpers.registerMaterialInfo('create:brass_tunnel', { 'brass': 1 });

	// Дисплей столешница (чзх)
	event.shaped('create:display_board', [
		'DA ',
		'BCB',
		' A '
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:rings/wrought_iron',
		C: '#forge:small_gears',
		D: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/display_board')

	event.recipes.gtceu.assembler('create:display_board')
		.itemInputs('2x #forge:plates/wrought_iron', '2x #forge:rings/wrought_iron', '#forge:small_gears')
		.itemOutputs('create:display_board')
		.duration(50)
		.circuit(14)
		.EUt(GTValues.VA[GTValues.ULV])

	// Латунная рука
	event.recipes.gtceu.shaped('create:brass_hand', [
		' AB',
		'CCD',
		' C '
	], {
		A: '#forge:tools/hammers',
		B: ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Brass, 1),
		C: ChemicalHelper.get(TagPrefix.bolt, GTMaterials.Brass, 1),
		D: '#forge:tools/files'
	}).addMaterialInfo().id('tfg:create/shaped/brass_hand')

	event.recipes.gtceu.assembler('tfg:create/brass_hand')
		.itemInputs('3x #forge:bolts/brass', '#forge:plates/brass')
		.circuit(3)
		.itemOutputs('create:brass_hand')
		.duration(200)
		.EUt(20)

	// Тюбик с клеем
	event.shaped('create:super_glue', [
		'BA',
		'CB'
	], {
		A: '#forge:plates/wrought_iron',
		B: 'tfc:glue',
		C: '#forge:rings/wrought_iron'
	}).id('tfg:create/shaped/super_glue')

	// Deployer
	event.shaped('create:deployer', [
		' A ',
		'DBF',
		' CE'
	], {
		A: '#forge:cogwheels',
		B: 'gtceu:ulv_machine_casing',
		C: 'create:brass_hand',
		D: '#forge:tools/wrenches',
		E: '#forge:tools/screwdrivers',
		F: 'create:electron_tube'
	}).id('tfg:create/shaped/deployer')

	event.recipes.gtceu.assembler('create:deployer')
		.itemInputs('#forge:cogwheels', 'gtceu:ulv_machine_casing', 'create:brass_hand', 'create:electron_tube')
		.itemOutputs('create:deployer')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])
		
	TFGHelpers.registerMaterialInfo('create:deployer', { 'brass': 12/9, 'wrought_iron': 8 });

	// Соединятор вагонеток
	event.shapeless('create:minecart_coupling', [
		'#tfg:metal_chains',
		'#forge:bolts',
		'#tfg:metal_chains',
		'#forge:bolts',
		'#tfg:metal_chains',
		'#forge:tools/hammers'
	]).id('tfg:create/shapeless/minecart_coupling')

	event.recipes.gtceu.assembler('tfg:create/minecart_coupling')
		.itemInputs('3x #tfg:metal_chains', '2x #forge:bolts')
		.circuit(1)
		.itemOutputs('create:minecart_coupling')
		.duration(200)
		.EUt(20)

	// Блупринт создания
	event.shapeless('create:crafting_blueprint', [
		'minecraft:painting',
		'#tfc:workbenches'
	]).id('tfg:create/shapeless/crafting_blueprint')

	// Медная бочка на спину
	event.shaped('create:copper_backtank', [
		'ABA',
		'CDC',
		'EFE'
	], {
		A: '#forge:screws/copper',
		B: 'greate:andesite_alloy_shaft',
		C: '#forge:plates/copper',
		D: 'tfc:bellows',
		E: 'firmaciv:large_waterproof_hide',
		F: 'tfc:metal/chestplate/copper'
	}).id('tfg:create/shaped/copper_backtank')

	// Шлем для дайвинга
	event.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('create:copper_diving_helmet').copyForgingBonus(), [
			'ABA',
			'CDC'
		], {
			A: '#forge:plates/copper',
			B: 'tfc:metal/helmet/copper',
			C: '#forge:glass_panes',
			D: 'firmaciv:large_waterproof_hide'
		}, 0, 1).id('tfg:create/shaped/copper_diving_helmet')

	// Ботинки для дайвинга
	event.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('create:copper_diving_boots').copyForgingBonus(), [
			'ABA',
			'CDC'
		], {
			A: '#forge:screws/copper',
			B: 'tfc:metal/boots/copper',
			C: '#forge:ingots/iron',
			D: 'firmaciv:large_waterproof_hide'
		}, 0, 1).id('tfg:create/shaped/copper_diving_boots_cast_iron')

	event.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('create:copper_diving_boots').copyForgingBonus(), [
			'ABA',
			'CDC'
		], {
			A: '#forge:screws/copper',
			B: 'tfc:metal/boots/copper',
			C: '#forge:ingots/wrought_iron',
			D: 'firmaciv:large_waterproof_hide'
		}, 0, 1).id('tfg:create/shaped/copper_diving_boots_wrought_iron')

	// Netherite backtank
	event.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('create:netherite_backtank').copyForgingBonus(), [
			'ABA',
			'CDC',
			'EFE'
		], {
			A: '#forge:screws/blue_steel',
			B: 'greate:steel_shaft',
			C: '#forge:plates/blue_steel',
			D: 'gtceu:steel_drum',
			E: 'beneath:cursed_hide',
			F: 'tfc:metal/chestplate/blue_steel'
		}, 2, 1).id('tfg:create/shaped/netherite_backtank')

	event.shaped('create:netherite_backtank', [
		'ACA',
		'CCC',
		'EDE'
	], {
		A: '#forge:screws/blue_steel',
		C: '#forge:plates/blue_steel',
		D: 'create:copper_backtank',
		E: 'beneath:cursed_hide'
	}).id('tfg:create/shaped/netherite_backtank_upgrade')

	// Netherite diving helmet
	event.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('create:netherite_diving_helmet').copyForgingBonus(), [
			'ABA',
			'CDC'
		], {
			A: '#forge:plates/blue_steel',
			B: 'tfc:metal/helmet/blue_steel',
			C: 'firmalife:reinforced_glass',
			D: 'beneath:cursed_hide'
		}, 0, 1).id('tfg:create/shaped/netherite_diving_helmet')

	event.shaped('create:netherite_diving_helmet', [
		' A ',
		'ABA',
		'CDC'
	], {
		A: '#forge:plates/blue_steel',
		B: 'create:copper_diving_helmet',
		C: 'firmalife:reinforced_glass',
		D: 'beneath:cursed_hide'
	}).id('tfg:create/shaped/netherite_diving_helmet_upgrade')

	// Netherite diving boots
	event.recipes.tfc.advanced_shaped_crafting(
		TFC.itemStackProvider.of('create:netherite_diving_boots').copyForgingBonus(), [
			'ABC',
			'EDE'
		], {
			A: '#forge:screws/blue_steel',
			B: 'tfc:metal/boots/blue_steel',
			C: '#forge:plates/blue_steel',
			D: 'beneath:cursed_hide',
			E: '#forge:ingots/lead'
		}, 0, 1).id('tfg:create/shaped/netherite_diving_boots')

	event.shaped('create:netherite_diving_boots', [
		'ABA',
		'CDC'
	], {
		A: '#forge:screws/blue_steel',
		B: 'create:copper_diving_boots',
		C: '#forge:plates/blue_steel',
		D: 'beneath:cursed_hide'
	}).id('tfg:create/shaped/netherite_diving_boots_upgrade')

	// Херь, увеличивающая дистанцию копки
	event.recipes.createMechanicalCrafting('create:extendo_grip', [
		' A ',
		' B ',
		'CCC',
		'CCC',
		' D '
	], {
		A: '#forge:plates/brass',
		B: 'create:precision_mechanism',
		C: '#forge:rods/wooden',
		D: 'create:brass_hand'
	}).id('tfg:create/mechanical_crafting/extendo_grip')

	// Херь, устанавливающая блоки зеркально
	event.recipes.createMechanicalCrafting('create:wand_of_symmetry', [
		'  A  ',
		' ABA ',
		'  C  ',
		'  D  ',
		'  D  '
	], {
		A: '#forge:glass',
		B: 'minecraft:redstone_lamp',
		C: 'create:precision_mechanism',
		D: '#forge:rods/brass'
	}).id('tfg:create/mechanical_crafting/wand_of_symmetry')

	// Фильтр список
	event.shaped('create:filter', [
		'ABA'
	], {
		A: '#forge:bolts/wrought_iron',
		B: '#forge:cloth'
	}).id('tfg:create/shaped/filter')

	// Фильтр аттрибутов
	event.shaped('create:attribute_filter', [
		'ABA'
	], {
		A: '#forge:bolts/brass',
		B: '#forge:cloth'
	}).id('tfg:create/shaped/attribute_filter')

	event.shaped('create:package_filter', [
		'ABA'
	], {
		A: '#forge:bolts/bismuth',
		B: '#forge:cloth'
	}).id('tfg:create/shaped/package_filter')

	event.shapeless('create:package_filter', ['create:package_filter'])
		.id('tfg:shapeless/package_filter')

	// Расписание поездов
	event.shapeless('4x create:schedule', [
		'minecraft:paper',
		'#forge:dyes/black'
	]).id('tfg:create/shapeless/schedule')

	// Дневник
	event.shaped('create:clipboard', [
		' AD',
		' B ',
		' C '
	], {
		A: '#forge:small_springs',
		B: '#tfc:lumber',
		C: 'minecraft:paper',
		D: '#forge:bolts'
	}).id('tfg:create/shaped/clipboard')

	// Лестница из железа
	event.shaped('7x create:andesite_ladder', [
		'A A',
		'AAA',
		'A A'
	], {
		A: '#forge:rods/tin_alloy'
	}).id('tfg:create/shaped/andesite_ladder')

	TFGHelpers.registerMaterialInfo('createdeco:andesite_ladder', { 'tin_alloy': 0.5 })

	// Лестница из латуни
	event.shaped('7x create:brass_ladder', [
		'A A',
		'AAA',
		'A A'
	], {
		A: '#forge:rods/brass'
	}).id('tfg:create/shaped/brass_ladder')

	TFGHelpers.registerMaterialInfo('createdeco:brass_ladder', { 'brass': 0.5 })

	// Лестница из железа
	event.shaped('7x create:copper_ladder', [
		'A A',
		'AAA',
		'A A'
	], {
		A: '#forge:rods/copper'
	}).id('tfg:create/shaped/copper_ladder')

	TFGHelpers.registerMaterialInfo('createdeco:copper_ladder', { 'copper': 0.5 })

	// Леса из железа
	event.shaped('4x create:andesite_scaffolding', [
		'AAA',
		'A A'
	], {
		A: '#forge:rods/tin_alloy'
	}).id('tfg:create/shaped/andesite_scaffolding')

	// Леса из латуни
	event.shaped('4x create:brass_scaffolding', [
		'AAA',
		'A A'
	], {
		A: '#forge:rods/brass'
	}).id('tfg:create/shaped/brass_scaffolding')

	// Леса из железа
	event.shaped('4x create:copper_scaffolding', [
		'AAA',
		'A A'
	], {
		A: '#forge:rods/copper'
	}).id('tfg:create/shaped/copper_scaffolding')

	// Цинковая ступень
	event.shaped('4x create:copycat_step', [
		'A ',
		' B'
	], {
		A: '#forge:plates/zinc',
		B: '#forge:tools/files'
	}).id('tfg:create/shapeless/copycat_step')

	// Цинковая панель
	event.shaped('4x create:copycat_panel', [
		'A B',
	], {
		A: '#forge:plates/zinc',
		B: '#forge:tools/files'
	}).id('tfg:create/shapeless/copycat_panel')

	// Деталь рельса
	event.shaped('3x create:metal_girder', [
		'AAA',
		'BBB'
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:bolts/wrought_iron'
	}).id('tfg:create/shaped/metal_girder')

	// Стеклянная дверь
	event.shapeless('create:framed_glass_door', [
		'#minecraft:wooden_doors',
		'minecraft:glass_pane'
	]).id('tfg:create/shapeless/framed_glass_door')

	// Стеклянный люк
	event.shapeless('create:framed_glass_trapdoor', [
		'#minecraft:wooden_trapdoors',
		'minecraft:glass_pane'
	]).id('tfg:create/shapeless/framed_glass_trapdoor')

	// 
	event.recipes.createMechanicalCrafting('create:potato_cannon', [
		'ABCCC',
		'DD   '
	], {
		A: '#forge:screws/copper',
		B: 'create:precision_mechanism',
		C: 'create:fluid_pipe',
		D: '#forge:plates/copper'
	}).id('tfg:create/mechanical_crafting/potato_cannon')

	// Липкий механический поршень
	event.shaped('create:mechanical_piston', [
		'A',
		'B',
		'C'
	], {
		A: 'minecraft:piston',
		B: 'create:andesite_casing',
		C: '#forge:shafts'
	}).id('tfg:create/shaped/mechanical_piston')

	event.shaped('create:sticky_mechanical_piston', [
		'A',
		'B',
		'C'
	], {
		A: '#forge:tools/hammers',
		B: 'tfc:glue',
		C: 'create:mechanical_piston'
	}).id('tfg:create/shaped/sticky_mechanical_piston_from_glue')

	event.shaped('create:sticky_mechanical_piston', [
		'A',
		'B',
		'C'
	], {
		A: '#forge:tools/hammers',
		B: 'gtceu:sticky_resin',
		C: 'create:mechanical_piston',
	}).id('tfg:create/shaped/sticky_mechanical_piston_from_sticky_resin')

	event.recipes.gtceu.assembler('tfg:create/sticky_mechanical_piston_from_liquid_glue')
		.itemInputs('create:mechanical_piston')
		.inputFluids(Fluid.of('gtceu:glue', 50))
		.itemOutputs('create:sticky_mechanical_piston')
		.duration(100)
		.EUt(4)

	event.recipes.gtceu.assembler('tfg:create/sticky_mechanical_piston_from_slimeball')
		.itemInputs('create:mechanical_piston', 'tfc:glue')
		.itemOutputs('create:sticky_mechanical_piston')
		.duration(100)
		.EUt(4)

	event.recipes.gtceu.assembler('tfg:create/sticky_mechanical_piston_from_sticky_resin')
		.itemInputs('create:mechanical_piston', 'gtceu:sticky_resin')
		.itemOutputs('create:sticky_mechanical_piston')
		.duration(100)
		.EUt(4)

	//#region Покраска ручек от люка

	event.recipes.tfc.barrel_sealed(1000)
		.inputs('#tfg:colored_valve_handles', Fluid.of(`tfc:lye`, 144))
		.outputItem(`create:copper_valve_handle`)
		.id(`barrel/create/valve_handle_decolor`)

	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		event.recipes.tfc.barrel_sealed(1000)
			.inputs('create:copper_valve_handle', Fluid.of(`tfc:${dye}_dye`, 144))
			.outputItem(`create:${dye}_valve_handle`)
			.id(`barrel/create/${dye}_valve_handle`)
	})

	//#endregion

	//#region Покраска тулбоксов

	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		if (dye !== 'brown') {
			event.remove({ id: `create:create.toolbox.color.block.create.${dye}_toolbox` })

			event.recipes.tfc.barrel_sealed(1000)
				.inputs('create:brown_toolbox', Fluid.of(`tfc:${dye}_dye`, 288))
				.outputItem(`create:${dye}_toolbox`)
				.id(`barrel/create/${dye}_toolbox`)

			event.recipes.gtceu.chemical_bath(`create/${dye}_toolbox`)
				.itemInputs('create:brown_toolbox')
				.inputFluids(Fluid.of(`tfc:${dye}_dye`, 288))
				.itemOutputs(`create:${dye}_toolbox`)
				.duration(200)
				.EUt(4)
				.category(GTRecipeCategories.CHEM_DYES)
		}
	})

	//#endregion

	//#region Painting postboxes
	event.recipes.tfc.barrel_sealed(1000)
		.inputs('#create:postboxes', Fluid.of(`tfc:lye`, 288))
		.outputItem(`create:white_postbox`)
		.id(`barrel/create/postbox_decolor`)

	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		if (dye !== 'white') {
			event.recipes.tfc.barrel_sealed(1000)
				.inputs('create:white_postbox', Fluid.of(`tfc:${dye}_dye`, 288))
				.outputItem(`create:${dye}_postbox`)
				.id(`barrel/create/${dye}_postbox`)

			event.recipes.gtceu.chemical_bath(`create/${dye}_postbox`)
				.itemInputs('create:white_postbox')
				.inputFluids(Fluid.of(`tfc:${dye}_dye`, 288))
				.itemOutputs(`create:${dye}_postbox`)
				.duration(200)
				.EUt(4)
				.category(GTRecipeCategories.CHEM_DYES)
		}
	})

	//#endregion

	//#region Painting table cloths
	event.recipes.tfc.barrel_sealed(1000)
		.inputs('#create:dyed_table_cloths', Fluid.of(`tfc:lye`, 144))
		.outputItem(`create:white_table_cloth`)
		.id(`barrel/create/table_cloth_decolor`)

	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		if (dye !== 'white') {
			event.recipes.tfc.barrel_sealed(1000)
				.inputs('create:white_table_cloth', Fluid.of(`tfc:${dye}_dye`, 288))
				.outputItem(`create:${dye}_table_cloth`)
				.id(`barrel/create/${dye}_table_cloth`)

			event.recipes.gtceu.chemical_bath(`create/${dye}_table_cloth`)
				.itemInputs('create:white_table_cloth')
				.inputFluids(Fluid.of(`tfc:${dye}_dye`, 288))
				.itemOutputs(`create:${dye}_table_cloth`)
				.duration(200)
				.EUt(4)
				.category(GTRecipeCategories.CHEM_DYES)
		}
	})

	//#endregion

	//#region Покраска сидушек

	event.recipes.tfc.barrel_sealed(1000)
		.inputs('#tfg:colored_seats', Fluid.of(`tfc:lye`, 288))
		.outputItem(`create:white_seat`)
		.id(`barrel/create/seat_decolor`)

	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		if (dye !== "white") {

			event.recipes.tfc.barrel_sealed(1000)
				.inputs(`create:white_seat`, Fluid.of(`tfc:${dye}_dye`, 288))
				.outputItem(`create:${dye}_seat`)
				.id(`barrel/create/${dye}_seat`)
		}
	})

	//#endregion

	//#region Механизм точности

	event.recipes.createSequencedAssembly([
		'create:precision_mechanism',
	], '#forge:plates/gold', [
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:small_springs/gold']),
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:small_gears/brass']),
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:bolts/wrought_iron']),
	]).transitionalItem('create:incomplete_precision_mechanism').loops(3).id('tfg:create/sequenced_assembly/precision_mechanism')

	event.recipes.gtceu.assembler('tfg:create/precision_mechanism')
		.itemInputs('#forge:plates/gold', '2x #forge:small_springs/gold', '2x #forge:small_gears/brass', '2x #forge:bolts/wrought_iron')
		.itemOutputs('create:precision_mechanism')
		.duration(20 * 20)
		.EUt(20)
		.addMaterialInfo(true)

	//#endregion

	// #region Water Wheels

	event.recipes.gtceu.shaped('create:water_wheel', [
		'ACA',
		'CBC',
		'ACA'
	], {
		A: 'gtceu:treated_wood_planks',
		B: 'create:andesite_casing',
		C: '#forge:rods/wrought_iron'
	}).addMaterialInfo().id('create:shaped/water_wheel')

	event.recipes.gtceu.shaped('create:large_water_wheel', [
		'ACA',
		'CBC',
		'ACA'
	], {
		A: 'gtceu:treated_wood_planks',
		B: 'create:water_wheel',
		C: '#forge:plates/steel'
	}).addMaterialInfo().id('create:shaped/large_water_wheel')

	// #endregion

	// #region Windmill Bearing

	event.shaped('create:windmill_bearing', [
		'FA ',
		'DBE',
		' C '
	], {
		A: 'gtceu:treated_wood_slab',
		B: 'create:andesite_casing',
		C: '#forge:cogwheels',
		D: '#forge:small_gears/brass',
		E: '#forge:tools/hammers',
		F: 'tfc:glue'
	}).id('create:shaped/windmill_bearing')

	event.recipes.gtceu.assembler('create:windmill_bearing')
		.itemInputs('gtceu:treated_wood_slab', 'create:andesite_casing', '#forge:cogwheels', '#forge:small_gears/brass')
		.inputFluids(Fluid.of('gtceu:glue', 50))
		.itemOutputs('create:windmill_bearing')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])
		.circuit(1)

	TFGHelpers.registerMaterialInfo('create:windmill_bearing', { 'wood': 1.5, 'brass': 1, 'wrought_iron': 1 });

	// #endregion

	//#region Blaze burner

	event.shaped('create:blaze_burner', [
		'EFE',
		'BAB',
		'DCD'
	], {
		A: '#forge:gems/coke',
		B: 'tfc:metal/bars/steel',
		C: '#forge:double_plates/steel',
		D: '#forge:plates/steel',
		E: '#forge:rods/steel',
		F: '#forge:tools/hammers'
	}).id('tfg:create/shaped/blaze_burner')

	event.recipes.gtceu.assembler('create:blaze_burner')
		.itemInputs('#forge:gems/coke', '2x tfc:metal/bars/steel', '2x #forge:rods/steel', '#forge:double_plates/steel', '2x #forge:plates/steel')
		.itemOutputs('create:blaze_burner')
		.duration(50)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.ULV])
		.addMaterialInfo(true)

	//#endregion

	// #region So-called "Shit Glass"

	event.shaped('4x create:framed_glass',
		[
			'AA',
			'AA'
		], {
		A: 'minecraft:glass'
	}).id('tfg:create/framed_glass')

	event.shaped('4x create:tiled_glass',
		[
			'A A',
			'   ',
			'A A'
		], {
		A: 'minecraft:glass'
	}).id('tfg:create/tiled_glass')

	event.shaped('4x create:horizontal_framed_glass',
		[
			'AA',
			'  ',
			'AA'
		], {
		A: 'minecraft:glass'
	}).id('tfg:create/horizontal_framed_glass')

	event.shaped('4x create:vertical_framed_glass',
		[
			'A A',
			'A A'
		], {
		A: 'minecraft:glass'
	}).id('tfg:create/vertical_framed_glass')

	const CREATE_FRAMED_GLASS_WINDOWS =
	[
		'framed_glass',
		'tiled_glass',
		'horizontal_framed_glass',
		'vertical_framed_glass'
	]

	CREATE_FRAMED_GLASS_WINDOWS.forEach(x => {
		event.shapeless(`2x create:${x}_pane`,
			[
				`create:${x}`,
				'#forge:tools/saws'
			])
			.id(`tfg:create/shapeless/${x}_pane`)

		event.recipes.gtceu.cutter(`tfg:create/${x}_pane`)
			.itemInputs(`3x create:${x}`)
			.itemOutputs(`8x create:${x}_pane`)
			.duration(40)
			.EUt(7)
	})

	const CREATE_OTHER_GLASS_WINDOWS =
	[
		['dark_oak', 'tfc:wood/planks/hickory'],
		['mangrove', 'tfc:wood/planks/mangrove'],
		['cherry', 'afc:wood/planks/fig'],
		['oak', 'tfc:wood/planks/oak'],
		['spruce', 'afc:wood/planks/cypress'],
		['jungle', 'afc:wood/planks/teak'],
		['birch', 'afc:wood/planks/eucalyptus'],
		['acacia', 'afc:wood/planks/baobab'],
		['crimson', 'beneath:wood/planks/crimson'],
		['warped', 'beneath:wood/planks/warped'],
		['bamboo', 'minecraft:bamboo_planks'],
		['ornate_iron', 'tfc:metal/bars/wrought_iron'],
		['industrial_iron', 'tfc:metal/bars/steel']
	]

	CREATE_OTHER_GLASS_WINDOWS.forEach(x => {
		event.shaped(`2x create:${x[0]}_window`,
			[
				'   ',
				'BAB',
				' B '
			], {
			A: '#forge:glass',
			B: x[1]
		}).id(`tfg:create/shaped/${x[0]}_window`)

		event.shapeless(`2x create:${x[0]}_window_pane`,
			[
				`create:${x[0]}_window`,
				'#forge:tools/saws'
			])
			.id(`tfg:create/shapeless/${x[0]}_window_pane`)

		event.recipes.gtceu.cutter(`tfg:create/${x[0]}_window_pane`)
			.itemInputs(`3x create:${x[0]}_window`)
			.itemOutputs(`8x create:${x[0]}_window_pane`)
			.duration(40)
			.EUt(7)
	})

	//Allow automatic scraping by using sequenced assembly
	event.forEachRecipe({ type: 'tfc:scraping' }, r => {
		let originalRecipeIngredient = r.json.get("ingredient").get("item");
		let output = r.originalRecipeResult;

		event.recipes.createSequencedAssembly([output], originalRecipeIngredient, [
			event.recipes.createDeploying(originalRecipeIngredient, [originalRecipeIngredient, '#tfc:knives']).keepHeldItem()
		]).transitionalItem(originalRecipeIngredient).loops(16)
	})

	// #endregion
	
	//#region Create 6 Logistics

	event.shaped('2x create:chain_conveyor', [
		'DAE',
		'CBC',
		' A '
	], {
		A: '#forge:large_cogwheels',
		B: 'create:andesite_casing',
		C: 'gtceu:treated_wood_plate',
		D: '#forge:tools/wrenches',
		E: '#forge:tools/hammers'
	}).id('create:shaped/chain_conveyor')

    event.recipes.gtceu.assembler('create:chain_conveyor')
        .itemInputs('2x #forge:large_cogwheels', 'create:andesite_casing', 'gtceu:treated_wood_plate')
        .itemOutputs('2x create:chain_conveyor')
        .circuit(20)
        .duration(20 * 20)
        .EUt(20)

	event.shaped('2x create:cardboard', [
		'ABA',
		'BAB',
		'ABA'
	], {
		A: 'minecraft:paper',
		B: 'tfc:glue'
	}).id('tfg:create/shaped/cardboard_from_glue')

	event.recipes.gtceu.assembler('tfg:create/cardboard_from_glue')
		.itemInputs('4x minecraft:paper')
		.inputFluids(Fluid.of('gtceu:glue', 50))
		.circuit(5)
		.itemOutputs('2x create:cardboard')
		.duration(200)
		.EUt(7)

	event.recipes.gtceu.shaped('2x create:packager', [
		'AAA',
		'BCD',
		'EFE'
	], {
		A: '#forge:rods/wrought_iron',
		B: '#forge:springs/wrought_iron',
		C: 'gtceu:ulv_machine_casing',
		D: 'create:bound_cardboard_block',
		E: 'create:electron_tube',
		F: '#tfg:metal_bars'
	}).addMaterialInfo().id('tfg:create/shaped/packager')

	event.shaped('create:item_hatch', [
		'A',
		'B',
		'C'
	], {
		A: '#forge:tools/hammers',
		B: '#tfc:trapdoors',
		C: 'create:chute',
	}).id('tfg:create/shaped/item_hatch_tfc')

	event.shaped('create:item_hatch', [
		'A',
		'B',
		'C'
	], {
		A: '#forge:tools/hammers',
		B: '#createdeco:metal_trapdoors',
		C: 'create:chute',
	}).id('tfg:create/shaped/item_hatch_deco')

	event.recipes.gtceu.assembler('tfg:create/item_hatch_tfc')
		.itemInputs('3x #forge:plates/wrought_iron', '#tfc:trapdoors')
		.circuit(19)
		.itemOutputs('create:item_hatch')
		.duration(200)
		.EUt(20)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('tfg:create/item_hatch_deco')
		.itemInputs('3x #forge:plates/wrought_iron', '#createdeco:metal_trapdoors')
		.circuit(19)
		.itemOutputs('create:item_hatch')
		.duration(200)
		.EUt(20)

	event.shaped('create:package_frogport', [
		'GAG',
		'HCB',
		'EDF'
	], {
		A: 'tfc:glue',
		B: '#forge:small_gears/brass',
		C: '#tfg:metal_chains',
		D: 'create:item_vault',
		E: '#forge:tools/screwdrivers',
		F: '#forge:tools/wrenches',
		G: '#forge:plates/wrought_iron',
		H: 'create:electron_tube'
	}).id('tfg:create/shaped/package_frogport')

	event.recipes.gtceu.assembler('tfg:create/package_frogport')
		.itemInputs('#tfg:metal_chains', '2x #forge:plates/wrought_iron', '1x #forge:small_gears/brass', 'create:electron_tube', 'create:item_vault')
		.inputFluids(Fluid.of('gtceu:glue', 50))
		.itemOutputs('create:package_frogport')
		.circuit(20)
		.duration(200)
		.EUt(20)
		.addMaterialInfo(true)

	event.shapeless('create:white_postbox', [
		'create:track_signal',
		'gtceu:wood_crate'
	]).id('create:crafting/shapeless/white_postbox')

	event.shaped('create:white_table_cloth', [
		'AA',
		'BB'
	], {
		A: '#forge:cloth',
		B: 'tfg:scaffolding_frame'
	}).id('tfg:create/shaped/white_table_cloth')

	event.recipes.gtceu.laser_engraver('create:transmitter')
		.itemInputs('2x #forge:plates/red_alloy')
		.notConsumable('#forge:lenses/pink')
		.itemOutputs('create:transmitter')
		.duration(1200)
		.EUt(30)

	event.shaped('create:stock_link', [
		'FEB',
		'DAE',
		'GC '
	], {
		A: 'create:andesite_casing',
		B: 'gtceu:item_detector_cover',
		C: '#gtceu:circuits/lv',
		D: 'create:transmitter',
		E: '#forge:screws/steel',
		F: '#forge:tools/wrenches',
		G: '#forge:tools/screwdrivers'
	}).id('tfg:create/shaped/stock_link')

	event.recipes.gtceu.assembler('create:stock_link')
		.itemInputs('create:andesite_casing', 'gtceu:item_detector_cover', '#gtceu:circuits/lv', 'create:transmitter')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
		.itemOutputs('create:stock_link')
		.duration(150)
		.EUt(16)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('create:stock_link_tin')
		.itemInputs('create:andesite_casing', 'gtceu:item_detector_cover', '#gtceu:circuits/lv', 'create:transmitter')
		.inputFluids(Fluid.of('gtceu:tin', 144))
		.itemOutputs('create:stock_link')
		.duration(150)
		.EUt(16)

	event.shaped('create:stock_ticker', [
		' A ',
		'ABA',
		'CDC'
	], {
		A: '#forge:glass_panes',
		B: 'create:stock_link',
		C: '#gtceu:resistors',
		D: '#forge:plates/rose_quartz'
	}).id('tfg:create/shaped/stock_ticker')

	event.shaped('create:redstone_requester', [
		' A ',
		'ABA',
		'CDC'
	], {
		A: '#forge:plates/wrought_iron',
		B: 'create:stock_link',
		C: '#gtceu:circuits/ulv',
		D: '#forge:plates/rose_quartz'
	}).id('tfg:create/shaped/redstone_requester')

	event.shaped('2x create:factory_gauge', [
		'CAC',
		'DBE',
		'FGF'
	], {
		A: 'create:precision_mechanism',
		B: 'create:stock_link',
		C: '#forge:screws/aluminium',
		D: '#gtceu:diodes',
		E: '#gtceu:circuits/lv',
		F: '#forge:plates/rose_quartz',
		G: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/factory_gauge')

	event.recipes.gtceu.assembler('create:factory_gauge')
		.itemInputs('create:precision_mechanism', '2x #forge:screws/aluminium', '#gtceu:diodes', 'create:stock_link', '#gtceu:circuits/lv', '2x #forge:plates/rose_quartz')
		.itemOutputs('2x create:factory_gauge')
		.duration(150)
		.EUt(16)
		.addMaterialInfo(true)
	
	//#endregion

	//#region Decoration blocks

	const DECO_BLOCKS = [
		{ base: 'tfc:rock/raw/diorite', cut: 'create:cut_diorite', vanilla: 'minecraft:diorite' },
		// this is renamed to Cut Chert
		{ base: 'tfc:rock/raw/chert', cut: 'create:cut_granite', vanilla: 'minecraft:granite' },
		{ base: 'tfc:rock/raw/andesite', cut: 'create:cut_andesite', vanilla: 'minecraft:andesite' },
		{ base: 'tfc:rock/raw/limestone', cut: 'create:cut_limestone' },
		{ base: 'minecraft:deepslate', cut: 'create:cut_deepslate' },
		{ base: 'minecraft:dripstone_block', cut: 'create:cut_dripstone' },
		{ base: 'minecraft:calcite', cut: 'create:cut_calcite' }
	]

	DECO_BLOCKS.forEach(x => {

		event.recipes.tfc.damage_inputs_shapeless_crafting(
			event.shapeless(x.cut, [x.base, '#tfc:chisels', '#forge:tools/files'])
		).id(`create:shapeless/chisel_${x.cut.split(':')[1]}`)

		event.recipes.gtceu.laser_engraver(`engrave_${x.cut.split(':')[1]}`)
			.itemInputs(x.base)
			.notConsumable('tfc:lens')
			.itemOutputs(x.cut)
			.duration(32)
			.EUt(GTValues.VA[GTValues.ULV])

		event.shaped(`2x create:layered_${x.cut.split('_')[1]}`, [
			'AA'
		], {
			A: x.cut
		})

		event.shaped(`2x create:${x.cut.split('_')[1]}_pillar`, [
			'A',
			'A'
		], {
			A: x.cut
		})

		// Stops the stonecutter recipe turning it back into vanilla stone
		if ("vanilla" in x) {
			event.replaceOutput({ mod: 'create' }, x.vanilla, x.base);
		}
	})

	//#endregion
	
	event.shaped('create:white_seat', [
		'DA ',
		'CBC'
	], {
		A: '#tfc:high_quality_cloth',
		B: '#minecraft:wooden_slabs',
		C: '#forge:screws',
		D: '#forge:tools/hammers'
	}).id('tfg:create/shaped/white_seat')

	event.recipes.gtceu.assembler('create:white_seat')
		.itemInputs('#tfc:high_quality_cloth', '#minecraft:wooden_slabs', '2x #forge:screws')
		.itemOutputs('create:white_seat')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.shaped('create:brown_toolbox', [
		'CEC',
		'BFB',
		'DAD'
	], {
		A: '#forge:chests/wooden',
		B: '#forge:plates/brass',
		C: '#forge:bolts/brass',
		D: '#forge:screws',
		E: '#forge:tools/screwdrivers',
		F: 'gtceu:treated_wood_frame'
	}).id('tfg:create/shaped/brown_toolbox')

	event.recipes.gtceu.assembler('create:brown_toolbox')
		.itemInputs('#forge:chests/wooden', 'gtceu:treated_wood_frame', '2x #forge:plates/brass', 
					'2x #forge:bolts/brass', '2x #forge:screws')
		.itemOutputs('create:brown_toolbox')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.shaped('create:contraption_controls', [
		'EAF',
		'DBD',
		' C '
	], {
		A: '#minecraft:buttons',
		B: 'create:andesite_casing',
		C: 'create:electron_tube',
		D: '#forge:plates/wrought_iron',
		E: '#forge:tools/hammers',
		F: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/contraption_controls')

	event.recipes.gtceu.assembler('create:contraption_controls')
		.itemInputs('#minecraft:buttons', 'create:andesite_casing', 'create:electron_tube', '2x #forge:plates/wrought_iron')
		.itemOutputs('create:contraption_controls')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])
		.circuit(18)
		.addMaterialInfo(true)

	event.shaped('create:wrench', [
		' BB',
		' C ',
		'AD '
	], {
		A: '#forge:rods/wooden',
		B: '#forge:plates/brass',
		C: '#forge:cogwheels',
		D: '#forge:tools/hammers'
	}).id('tfg:create/shaped/wrench')

	event.shaped('create:goggles', [
		'BBB',
		'AEA',
		'C C'
	], {
		A: '#forge:rings/brass',
		B: 'sns:leather_strip',
		C: 'tfc:lens',
		E: '#forge:tools/hammers'
	}).id('tfg:create/shaped/goggles')

	event.recipes.gtceu.assembler('create:goggles')
		.itemInputs('2x #forge:rings/brass', '3x sns:leather_strip', '2x tfc:lens')
		.itemOutputs('create:goggles')
		.circuit(10)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('create:goggles_rubber')
		.itemInputs('2x #forge:rings/brass', '#forge:foils/rubber', '2x tfc:lens')
		.itemOutputs('create:goggles')
		.circuit(10)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.shaped('create:analog_lever', [
		'CA',
		'DB'
	], {
		A: 'minecraft:lever',
		B: 'create:andesite_casing',
		C: '#forge:tools/wrenches',
		D: 'minecraft:redstone'
	}).id('tfg:create/shaped/analog_lever')

	event.recipes.gtceu.assembler('create:analog_lever')
		.itemInputs('minecraft:lever', 'create:andesite_casing', 'minecraft:redstone')
		.itemOutputs('create:analog_lever')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.shaped('create:redstone_link', [
		'FCB',
		'DAD',
		' E '
	], {
		A: 'create:andesite_casing',
		B: '#gtceu:circuits/ulv',
		C: '#forge:small_springs',
		D: '#forge:plates/wrought_iron',
		E: '#forge:tools/wrenches',
		F: '#forge:tools/screwdrivers'
	}).id('tfg:create/shaped/redstone_link')

	event.recipes.gtceu.assembler('create:redstone_link')
		.itemInputs('create:andesite_casing', '#gtceu:circuits/ulv', '#forge:small_springs', '2x #forge:plates/wrought_iron')
		.itemOutputs('create:redstone_link')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])
		.circuit(17)
		
	TFGHelpers.registerMaterialInfo('create:redstone_link', { 'wrought_iron': 3 });

	event.shaped('create:display_link', [
		'FED',
		'BAB',
		' C '
	], {
		A: 'create:brass_casing',
		B: '#forge:springs/copper',
		C: '#forge:plates/brass',
		D: 'create:electron_tube',
		E: '#forge:screws',
		F: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/display_link')

	event.recipes.gtceu.assembler('create:display_link')
		.itemInputs('create:brass_casing', '2x #forge:springs/copper', '#forge:plates/brass', 'create:electron_tube')
		.itemOutputs('create:display_link')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])
		.addMaterialInfo(true)

	event.shaped('create:rotation_speed_controller', [
		'ECE',
		'BAB',
		'DFG'
	], {
		A: 'create:brass_casing',
		B: '#forge:small_gears/brass',
		C: '#forge:small_gears/red_alloy',
		D: '#forge:tools/wrenches',
		E: '#forge:small_springs/steel',
		F: '#forge:shafts',
		G: '#forge:tools/hammers'
	}).id('tfg:create/shaped/rotation_speed_controller')

	event.recipes.gtceu.assembler('create:rotation_speed_controller')
		.itemInputs('create:brass_casing', '2x #forge:small_gears/brass', '#forge:small_gears/red_alloy', '#forge:shafts')
		.itemOutputs('create:rotation_speed_controller')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.shaped('create:pulse_timer', [
		'E E',
		'ABC',
		'DDD'
	], {
		A: 'minecraft:redstone',
		B: '#forge:plates/brass',
		C: 'minecraft:redstone_torch',
		D: '#forge:stone',
		E: '#forge:rods/amethyst'
	}).id('tfg:shaped/pulse_timer')

	event.shaped('create:desk_bell', [
		'A',
		'B',
		'C'
	], {
		A: '#minecraft:buttons',
		B: '#tfc:bells',
		C: 'minecraft:redstone'
	}).id('tfg:shaped/desk_bell')

	event.shaped('create:sequenced_gearshift', [
		'DBE',
		'CAC',
		'   '
	], {
		A: 'create:brass_casing',
		B: 'create:electron_tube',
		C: '#forge:cogwheels',
		D: '#forge:tools/wrenches',
		E: '#forge:tools/hammers'
	}).id('tfg:create/shaped/sequenced_gearshift')

	event.recipes.gtceu.assembler('create:sequenced_gearshift')
		.itemInputs('create:brass_casing', 'create:electron_tube', '2x #forge:cogwheels')
		.itemOutputs('create:sequenced_gearshift')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	TFGHelpers.registerMaterialInfo('create:sequenced_gearshift', { 'wood': 1, 'steel': 4, 'wrought_iron': 3 });

	event.shaped('create:mechanical_bearing', [
		'CBE',
		' A ',
		' D '
	], {
		A: 'create:andesite_casing',
		B: '#forge:plates/wrought_iron',
		C: 'tfc:glue',
		D: '#forge:cogwheels',
		E: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/mechanical_bearing')

	event.recipes.gtceu.assembler('create:mechanical_bearing')
		.itemInputs('create:andesite_casing', '#forge:plates/wrought_iron', '#forge:cogwheels')
		.inputFluids(Fluid.of('gtceu:glue', 50))
		.itemOutputs('create:mechanical_bearing')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])
		.circuit(15)

	TFGHelpers.registerMaterialInfo('create:mechanical_bearing', { 'wood': 1, 'wrought_iron': 2 });

	event.shaped('create:gantry_carriage', [
		'DCE',
		' A ',
		' B '
	], {
		A: 'create:andesite_casing',
		B: '#forge:cogwheels',
		C: '#minecraft:wooden_slabs',
		D: 'tfc:glue',
		E: '#forge:tools/hammers'
	}).id('tfg:create/shaped/gantry_carriage')

	event.recipes.gtceu.assembler('create:gantry_carriage')
		.itemInputs('create:andesite_casing', '#forge:cogwheels', '#minecraft:wooden_slabs')
		.inputFluids(Fluid.of('gtceu:glue', 50))
		.itemOutputs('create:gantry_carriage')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])
		.circuit(2)

	TFGHelpers.registerMaterialInfo('create:gantry_carriage', { 'wood': 1.5, 'wrought_iron': 1 });

	event.shaped('create:weighted_ejector', [
		' B ',
		' CE',
		'DA '
	], {
		A: 'create:andesite_casing',
		B: '#forge:plates/wrought_iron',
		C: '#forge:springs/wrought_iron',
		D: '#forge:cogwheels',
		E: '#forge:tools/wrenches'
	}).id('tfg:create/shaped/weighted_ejector')

	event.recipes.gtceu.assembler('create:weighted_ejector')
		.itemInputs('create:andesite_casing', '#forge:plates/wrought_iron', '#forge:springs/wrought_iron', '#forge:cogwheels')
		.itemOutputs('create:weighted_ejector')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])
		.circuit(16)
		.addMaterialInfo(true)
		
	TFGHelpers.registerMaterialInfo('create:gantry_carriage', { 'wood': 1, 'wrought_iron': 3 });

	event.shaped('create:turntable', [
		'DA ',
		'CBC'
	], {
		A: '#create:seats',
		B: '#minecraft:wooden_slabs',
		C: '#forge:screws',
		D: '#forge:tools/hammers'
	}).id('tfg:create/shaped/turntable')

	event.recipes.gtceu.assembler('create:turntable')
		.itemInputs('#create:seats', '#minecraft:wooden_slabs', '2x #forge:screws')
		.itemOutputs('create:turntable')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.shaped('create:gearshift', [
		' C ',
		'DAE',
		' B '
	], {
		A: 'create:andesite_casing',
		B: '#forge:cogwheels',
		C: 'minecraft:redstone',
		D: '#forge:tools/wrenches',
		E: '#forge:tools/hammers'
	}).id('tfg:create/shaped/gearshift')

	event.recipes.gtceu.assembler('create:gearshift')
		.itemInputs('create:andesite_casing', '#forge:cogwheels', 'minecraft:redstone')
		.itemOutputs('create:gearshift')
		.circuit(5)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])
		.addMaterialInfo(true)

	TFGHelpers.registerMaterialInfo('create:gearshift', { 'wood': 1, 'wrought_iron': 1, 'redstone': 1 });

	event.shaped('create:clutch', [
		' C ',
		'DAE',
		' B '
	], {
		A: 'create:andesite_casing',
		B: '#forge:shafts',
		C: 'minecraft:redstone',
		D: '#forge:tools/wrenches',
		E: '#forge:tools/hammers'
	}).id('tfg:create/shaped/clutch')

	event.recipes.gtceu.assembler('create:clutch')
		.itemInputs('create:andesite_casing', '#forge:shafts', 'minecraft:redstone')
		.itemOutputs('create:clutch')
		.circuit(5)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.stonecutting('2x create:andesite_table_cloth', '#forge:ingots/tin_alloy')
	event.stonecutting('2x create:andesite_scaffolding', '#forge:ingots/tin_alloy')
	event.stonecutting('2x create:andesite_ladder', '#forge:ingots/tin_alloy')
	event.stonecutting('2x create:andesite_bars', '#forge:ingots/tin_alloy')

	// Industrial Iron stuff
	
	event.stonecutting('2x create:industrial_iron_block', '#forge:ingots/steel')

	event.custom({
		type: "ae2:transform",
		circumstance: {
			type: "fluid",
			tag: "tfc:water"
		},
		ingredients: [{ item: 'create:industrial_iron_block' }],
		result: { item: 'create:weathered_iron_block' }
	}).id(`tfg:ae_transform/weathered_iron_block`)

	event.recipes.gtceu.chemical_bath('tfg:industrial_iron_block')
		.itemInputs('create:industrial_iron_block')
		.inputFluids(Fluid.of('minecraft:water', 250))
		.itemOutputs('create:weathered_iron_block')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.custom({
		type: "ae2:transform",
		circumstance: {
			type: "fluid",
			tag: "tfc:water"
		},
		ingredients: [{ item: 'create:industrial_iron_window' }],
		result: { item: 'create:weathered_iron_window' }
	}).id(`tfg:ae_transform/weathered_iron_window`)

	event.recipes.gtceu.chemical_bath('tfg:industrial_iron_window')
		.itemInputs('create:industrial_iron_window')
		.inputFluids(Fluid.of('minecraft:water', 250))
		.itemOutputs('create:weathered_iron_window')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.custom({
		type: "ae2:transform",
		circumstance: {
			type: "fluid",
			tag: "tfc:water"
		},
		ingredients: [{ item: 'create:industrial_iron_window_pane' }],
		result: { item: 'create:weathered_iron_window_pane' }
	}).id(`tfg:ae_transform/weathered_iron_window_pane`)

	event.recipes.gtceu.chemical_bath('tfg:industrial_iron_window_pane')
		.itemInputs('create:industrial_iron_window_pane')
		.inputFluids(Fluid.of('minecraft:water', 250))
		.itemOutputs('create:weathered_iron_window_pane')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	// Rose quartz
	
	event.shaped('create:rose_quartz_lamp', [
		'ABA'
	], {
		A: '#forge:plates/rose_quartz',
		B: 'minecraft:redstone_lamp'
	}).id('tfg:shaped/rose_quartz_lamp')

	event.recipes.gtceu.laser_engraver('tfg:rose_quartz_tiles')
		.itemInputs('#forge:storage_blocks/rose_quartz')
		.itemOutputs('4x create:rose_quartz_tiles')
		.notConsumable('tfc:lens')
		.circuit(1)
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.laser_engraver('tfg:small_rose_quartz_tiles')
		.itemInputs('#forge:storage_blocks/rose_quartz')
		.itemOutputs('4x create:small_rose_quartz_tiles')
		.notConsumable('tfc:lens')
		.circuit(2)
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	// Bars

	event.stonecutting('4x create:andesite_bars', '#forge:ingots/tin_alloy')
	event.stonecutting('4x create:brass_bars', '#forge:ingots/brass')
	event.stonecutting('4x create:copper_bars', '#forge:ingots/copper')

	event.recipes.tfc.anvil(`4x create:andesite_bars`, `#forge:ingots/tin_alloy`, ['shrink_last', 'punch_second_last', 'punch_third_last'])
		.tier(3).id(`tfg:anvil/create_andesite_bars`)

	event.recipes.tfc.anvil(`4x create:brass_bars`, `#forge:ingots/brass`, ['shrink_last', 'punch_second_last', 'punch_third_last'])
		.tier(2).id(`tfg:anvil/create_brass_bars`)

	event.recipes.tfc.anvil(`4x create:copper_bars`, `#forge:ingots/copper`, ['shrink_last', 'punch_second_last', 'punch_third_last'])
		.tier(1).id(`tfg:anvil/create_copper_bars`)

	TFGHelpers.registerMaterialInfo('create:andesite_bars', { 'tin_alloy': 0.25 })
	TFGHelpers.registerMaterialInfo('create:brass_bars', { 'brass': 0.25 })
	TFGHelpers.registerMaterialInfo('create:copper_bars', { 'copper': 0.25 })

	// Doors

	event.shapeless('2x create:andesite_door', ['createdeco:andesite_door', '#minecraft:wooden_doors', 'minecraft:glass_pane'])
		.id('tfg:shapeless/create_andesite_door')

	event.shapeless('2x create:brass_door', ['createdeco:brass_door', '#minecraft:wooden_doors', 'minecraft:glass_pane'])
		.id('tfg:shapeless/create_brass_door')

	event.shapeless('2x create:copper_door', ['createdeco:copper_door', '#minecraft:wooden_doors', 'minecraft:glass_pane'])
		.id('tfg:shapeless/create_copper_door')

	event.shapeless('2x create:train_door', ['createdeco:industrial_iron_door', '#minecraft:wooden_doors', 'minecraft:glass_pane'])
		.id('tfg:shapeless/create_train_door')

	event.shapeless('2x create:train_trapdoor', ['tfc:metal/trapdoor/steel', '#minecraft:wooden_trapdoors'])
		.id('tfg:shapeless/create_train_trapdoor')

	// Fantasy stone blocks

	event.recipes.gtceu.macerator('tfg:asurine')
		.itemInputs('create:asurine')
		.itemOutputs('#forge:dusts/asurine')
		.duration(50)
		.EUt(2)

	event.recipes.gtceu.macerator('tfg:ochrum')
		.itemInputs('create:ochrum')
		.itemOutputs('#forge:dusts/ochrum')
		.duration(50)
		.EUt(2)

	event.shapeless('create:sand_paper', ['minecraft:paper', 'tfc:glue', '#forge:sand'])
		.id('tfg:shapeless/sand_paper')

	// The custom ores

	event.smelting('#forge:ingots/copper', 'create:crushed_raw_copper')
	event.smelting('#forge:ingots/gold', 'create:crushed_raw_gold')
	event.smelting('#forge:ingots/zinc', 'create:crushed_raw_zinc')
	event.smelting('#forge:ingots/silver', 'create:crushed_raw_silver')
	event.smelting('#forge:ingots/tin', 'create:crushed_raw_tin')
	event.smelting('#forge:ingots/lead', 'create:crushed_raw_lead')
}
