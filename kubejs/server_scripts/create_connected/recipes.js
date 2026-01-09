// priority: 0
"use strict";

const registerCreateConnectedRecipes = (event) => {

	global.CREATE_CONNECTED_DISABLED_ITEMS.forEach(item => {
		event.remove({ input: item })
		event.remove({ output: item })
	})

	event.stonecutting('create_connected:copycat_box', '#forge:ingots/zinc')
	event.stonecutting('2x create_connected:copycat_catwalk', '#forge:ingots/zinc')

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
}