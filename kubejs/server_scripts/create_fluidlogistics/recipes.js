// priority: 0
"use strict";

function registerCreateFluidLogisticsRecipes(event) {

    event.remove({
		not: [
			{ id: 'fluidlogistics:horizontal_multi_fluid_tank_from_tank' },
			{ id: 'fluidlogistics:multi_fluid_tank_from_horizontal' },
			{ id: 'fluidlogistics:hand_pointer_clear' },
		], mod: "fluidlogistics" })

    event.shapeless('fluidlogistics:waterproof_cardboard_block', ['create:cardboard_block', '#forge:wax'])
    event.recipes.create.item_application('fluidlogistics:waterproof_cardboard_block', ['create:cardboard_block', '#forge:wax'])
    
	event.recipes.gtceu.packer('tfg:waterproof_cardboard_block')
		.itemInputs('4x create:cardboard', '#forge:wax')
		.itemOutputs('fluidlogistics:waterproof_cardboard_block')
		.duration(500)
		.EUt(7)

    event.recipes.gtceu.shaped('fluidlogistics:fluid_packager', [
		' A ',
		'BCD',
		'FEG'
	], {
		A: '#forge:small_gears/red_alloy',
		B: '#forge:springs/wrought_iron',
		C: 'create:copper_casing',
		D: 'fluidlogistics:waterproof_cardboard_block',
		E: 'create:electron_tube',
		F: '#forge:tools/screwdrivers',
		G: '#forge:tools/wrenches'
	}).id("fluidlogistics:shaped/fluid_packager")

	event.recipes.gtceu.assembler('fluidlogistics:fluid_packager')
		.itemInputs('#forge:small_gears/red_alloy', '#forge:springs/wrought_iron', 'create:copper_casing', 'fluidlogistics:waterproof_cardboard_block', 'create:electron_tube')
		.itemOutputs('fluidlogistics:fluid_packager')
		.circuit(20)
		.duration(100)
		.EUt(20)
		
    event.recipes.gtceu.shaped('fluidlogistics:multi_fluid_tank', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: '#forge:bolts/brass',
		B: '#forge:tools/screwdrivers',
		C: '#forge:plates/brass',
		D: '#forge:glass_panes',
		E: '#forge:tools/wrenches'
	}).id("fluidlogistics:shaped/multi_fluid_tank")



    event.recipes.gtceu.shaped('fluidlogistics:multi_fluid_access_port', [
		' A ',
		' B ',
		' C '
	], {
		A: 'create:copper_sheet',
		B: 'fluidlogistics:multi_fluid_tank',
		C: 'create:electron_tube',
    }).id("fluidlogistics:shaped/multi_fluid_access_port1")

    event.recipes.gtceu.shaped('fluidlogistics:multi_fluid_access_port', [
		' A ',
		' B ',
		' C '
	], {
		A: 'create:copper_sheet',
		B: 'fluidlogistics:horizontal_multi_fluid_tank',
		C: 'create:electron_tube',
	}).id("fluidlogistics:shaped/multi_fluid_access_port2")

	event.recipes.createMechanicalCrafting('fluidlogistics:hand_pointer', [
		'A',
		'B',
		'C',
		'D',
		'D'
	], {
		A: 'create:brass_hand',
		B: 'create:electron_tube',
		C: 'create:precision_mechanism',
		D: 'gtceu:brass_rod'
	}).id("fluidlogistics:mechanical_crafting/hand_pointer")
	
	event.shaped('fluidlogistics:fluid_hatch', [
		'A',
		'B',
		'C'
	], {
		A: '#forge:tools/hammers',
		B: '#tfc:trapdoors',
		C: 'create:item_drain',
	}).id('tfg:fluidlogistics/shaped/fluid_hatch_tfc')

	event.shaped('fluidlogistics:fluid_hatch', [
		'A',
		'B',
		'C'
	], {
		A: '#forge:tools/hammers',
		B: '#createdeco:metal_trapdoors',
		C: 'create:item_drain',
	}).id('tfg:fluidlogistics/shaped/fluid_hatch_deco')

	event.recipes.gtceu.assembler('tfg:fluidlogistics/fluid_hatch_tfc')
		.itemInputs('create:item_drain', '#tfc:trapdoors')
		.circuit(19)
		.itemOutputs('fluidlogistics:fluid_hatch')
		.duration(200)
		.EUt(20)

	event.recipes.gtceu.assembler('tfg:fluidlogistics/fluid_hatch_deco')
		.itemInputs('create:item_drain', '#createdeco:metal_trapdoors')
		.circuit(19)
		.itemOutputs('fluidlogistics:fluid_hatch')
		.duration(200)
		.EUt(20)

	TFGHelpers.registerMaterialInfo('fluidlogistics:fluid_hatch', [GTMaterials.Copper, 1, GTMaterials.Wood, 1])

	event.shapeless('fluidlogistics:faucet', ['#create:valve_handles', 'gtceu:copper_small_fluid_pipe'])
		.id('tfg:shapeless/fluidlogistics/faucet')

	event.shapeless('fluidlogistics:smart_faucet', ['fluidlogistics:faucet', 'create:electron_tube', '#forge:plates/brass'])
		.id('tfg:shapeless/fluidlogistics/smart_faucet')


	event.shaped('fluidlogistics:mechanical_fluid_gun', [
		'A ',
		'C ',
		'DF'
	], {
		A: 'create:spout',
		C: 'create:precision_mechanism',
		D: 'create:copper_casing',
		F: '#forge:tools/wrenches'
	}).id('tfg:shaped/fluidlogistics/mechanical_fluid_gun')

	event.recipes.gtceu.assembler('tfg:fluidlogistics/mechanical_fluid_gun')
		.itemInputs('create:spout', 'create:precision_mechanism', 'create:copper_casing')
		.itemOutputs('fluidlogistics:mechanical_fluid_gun')
		.duration(200)
		.EUt(20)
		.addMaterialInfo(true)

	event.shaped('fluidlogistics:smart_hopper', [
		' A ',
		' B ',
		'DCD'
	], {
		A: 'create:electron_tube',
		B: '#gtceu:electric_pumps',
		C: 'minecraft:hopper',
		D: '#forge:plates/copper'
	}).id('tfg:shaped/smart_hopper')
}