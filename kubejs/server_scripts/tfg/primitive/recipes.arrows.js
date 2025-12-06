"use strict";

function registerTFGArrowRecipes(event) {
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

	event.recipes.gtceu.assembler('tfg:assembler/flint_arrow_head')
		.itemInputs('1x minecraft:flint')
		.itemOutputs('4x tfg:flint_arrow_head')
		.duration(20)
		.circuit(4)
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

	event.shaped('4x minecraft:arrow', [
		' A ',
		' B ',
		' C '
	], {
		A: 'tfg:flint_arrow_head',
		B: '#forge:rods/wooden',
		C: 'tfg:fletching'
	}).id('tfg:shaped/arrow')

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