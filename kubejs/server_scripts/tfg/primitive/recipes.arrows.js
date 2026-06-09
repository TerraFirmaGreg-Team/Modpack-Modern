"use strict";

function registerTFGArrowRecipes(event) {

	event.shaped('tfg:unstrung_bow', [
		'AA',
		'AB'
	], {
		A: '#forge:rods/wooden',
		B: '#forge:tools/knives'
	}).id('tfg:shaped/unstrung_bow')

	event.shaped('minecraft:bow', [
		'AB',
		'BB'
	], {
		A: 'tfg:unstrung_bow',
		B: '#forge:string'
	}).id('tfg:shaped/bow')

	// Arrow Parts
	event.recipes.tfc.knapping(
		'4x tfg:flint_arrow_head',
		'tfg:flint',
		[
			'  XXX',
			' XXXX',
			'XXXXX',
			' XXX ',
			'  X  '
		]
	).outsideSlotRequired(false)
		.id('tfg:knapping/flint_arrow_head')

	event.recipes.gtceu.cutter('tfg:assembler/flint_arrow_head')
		.itemInputs('1x minecraft:flint')
		.itemOutputs('4x tfg:flint_arrow_head')
		.duration(20)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless('4x tfg:fletching', [
			'minecraft:feather',
			'#forge:tools/knives'
		]).id('tfg:shapeless/fletching'))

	event.recipes.gtceu.assembler('tfg:assembler/fletching')
		.itemInputs('1x minecraft:feather')
		.itemOutputs('4x tfg:fletching')
		.duration(20)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.ULV])

	event.shapeless('minecraft:arrow', ['tfg:flint_arrow_head', '#forge:rods/wooden', 'tfg:fletching'])
		.id('tfg:shaped/arrow')

	event.shapeless('minecraft:arrow', ['primitive_creatures:tt_5', '#forge:rods/wooden', 'tfg:fletching'])
		.id('tfg:shaped/arrow_shard')

	event.shapeless('minecraft:arrow', ['species:werefang', '#forge:rods/wooden', 'tfg:fletching'])
		.id('tfg:shaped/arrow_werefang')

	// Wraptor feathers
	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless('4x tfg:fletching', [
			'tfg:wraptor_wool',
			'#forge:tools/knives'
		]).id('tfg:shapeless/wraptor_feather_fletching'))

	event.recipes.gtceu.assembler('tfg:assembler/wraptor_feather_fletching')
		.itemInputs('1x tfg:wraptor_wool')
		.itemOutputs('4x tfg:fletching')
		.duration(20)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.ULV])

	// Glider feathers
	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless('4x tfg:fletching', [
			'wan_ancient_beasts:glider_feather',
			'#forge:tools/knives'
		]).id('tfg:shapeless/glider_feather_fletching'))

	event.recipes.gtceu.assembler('tfg:assembler/glider_feather_fletching')
		.itemInputs('1x wan_ancient_beasts:glider_feather')
		.itemOutputs('4x tfg:fletching')
		.duration(20)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.ULV])
}