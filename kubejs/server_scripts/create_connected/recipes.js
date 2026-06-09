// priority: 0
"use strict";

const registerCreateConnectedRecipes = (event) => {

	event.remove({ input: "create_connected:copycat_vertical_step", output: "create:copycat_step" });

	// Remove Fluid Vessel Crafting
	event.remove({ id: 'create_connected:crafting/kinetics/fluid_vessel' })

	// Centrifugal Clutch
	event.shapeless('create_connected:centrifugal_clutch', [
		'create:andesite_casing',
		'#forge:plates/wrought_iron',
		'create:speedometer',
		'#forge:shafts',
	]).id('create_connected:crafting/kinetics/centrifugal_clutch')

	// Freewheel Clutch'
	event.shapeless('create_connected:freewheel_clutch', [
		'create:andesite_casing',
		'#forge:plates/wrought_iron',
		'#forge:shafts',
		'#forge:cogwheels',
	]).id('create_connected:crafting/kinetics/freewheel_clutch')

	// Overstress Clutch
	event.shapeless('create_connected:overstress_clutch', [
		'create:andesite_casing',
		'#forge:plates/wrought_iron',
		'#forge:shafts',
		'create:electron_tube',
	]).id('create_connected:crafting/kinetics/overstress_clutch')

	// Item Silo
	event.shaped('create_connected:item_silo', [
		' C ',
		'BAD',
		' C '
	], {
		A: '#forge:chests/wooden',
		B: '#forge:sheets/wrought_iron',
		C: '#forge:screws/wrought_iron',
		D: '#forge:tools/screwdrivers'
	}).id('create_connected:crafting/kinetics/item_silo')

	event.recipes.gtceu.assembler('tfg:create_connected/item_silo')
		.itemInputs('#forge:chests/wooden', '#forge:sheets/wrought_iron', '2x #forge:screws/wrought_iron')
		.circuit(10)
		.itemOutputs('create_connected:item_silo')
		.duration(200)
		.EUt(20)
		.addMaterialInfo(true)

	// Sequenced Pulse Generator
	event.shaped('create_connected:sequenced_pulse_generator', [
		'DA ',
		'DCD',
		'EEE'
	], {
		A: 'create:electron_tube',
		C: '#forge:plates/bronze',
		D: 'minecraft:redstone_torch',
		E: '#forge:stone'
	}).id('create_connected:crafting/kinetics/sequenced_pulse_generator')

	event.replaceInput({ id: 'create_connected:crafting/kinetics/redstone_link_wildcard' }, 'create:transmitter', 'minecraft:redstone_torch')

	event.shaped('create_connected:kinetic_bridge', [
		'BCF',
		'AEA',
		'DCD'
	], {
		A: 'create:brass_casing',
		B: '#forge:tools/hammers',
		C: '#forge:rods/magnetic_iron',
		D: '#forge:small_gears/red_alloy',
		E: '#forge:shafts',
		F: '#forge:tools/wrenches'
	}).id('create_connected:crafting/kinetics/kinetic_bridge')

	event.recipes.gtceu.assembler('tfg:create_connected/kinetic_bridge')
		.itemInputs('2x create:brass_casing', '2x #forge:rods/magnetic_iron', '2x #forge:small_gears/red_alloy', '#forge:shafts')
		.itemOutputs('create_connected:kinetic_bridge')
		.duration(200)
		.EUt(20)

	TFGHelpers.registerMaterialInfo('create_connected:kinetic_bridge', [GTMaterials.Brass, 2, GTMaterials.Wood, 2, GTMaterials.RedAlloy, 2, GTMaterials.IronMagnetic, 1])

	// Brass chute

	event.shaped('create_connected:brass_chute', [
		'A',
		'B'
	], {
		A: '#forge:plates/brass',
		B: 'create:chute'
	}).id('create_connected:crafting/kinetics/brass_chute')

	TFGHelpers.registerMaterialInfo('create_connected:brass_chute', [GTMaterials.WroughtIron, 3, GTMaterials.Brass, 1]);

	event.shaped('create:smart_chute', [
		'A',
		'B'
	], {
		A: 'create_connected:brass_chute',
		B: 'create:electron_tube'
	}).id('tfg:shaped/smart_chute_from_brass_chute')
}