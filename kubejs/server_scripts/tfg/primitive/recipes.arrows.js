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

	event.shapeless('4x minecraft:stick', ['tfc:tree_roots', '#forge:tools/knives'])
		.id('tfg:shapeless/roots_to_stick')

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

	// Feathers
	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless('4x tfg:fletching', [
			['minecraft:feather', 'tfg:wraptor_wool', 'wan_ancient_beasts:glider_feather'],
			'#forge:tools/knives'
		]).id('tfg:shapeless/fletching'))

	event.recipes.gtceu.cutter('tfg:assembler/fletching')
		.itemInputs('1x minecraft:feather')
		.itemOutputs('4x tfg:fletching')
		.duration(20)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.cutter('tfg:assembler/wraptor_feather_fletching')
		.itemInputs('1x tfg:wraptor_wool')
		.itemOutputs('4x tfg:fletching')
		.duration(20)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.cutter('tfg:assembler/glider_feather_fletching')
		.itemInputs('1x wan_ancient_beasts:glider_feather')
		.itemOutputs('4x tfg:fletching')
		.duration(20)
		.EUt(GTValues.VA[GTValues.ULV])

	// Arrows
	event.shapeless('minecraft:arrow', [
		['tfg:flint_arrow_head', 'primitive_creatures:tt_5', 'species:werefang'],
		'#forge:rods/wooden',
		['tfg:fletching', 'tfg:hardwood_strip']
	]).id('tfg:shaped/arrow')

	event.shapeless('minecraft:arrow', [
		'minecraft:bone',
		'#forge:rods/wooden', 
		['tfg:fletching', 'tfg:hardwood_strip'],
		'#forge:tools/knives'
	]).id('tfg:shaped/arrow_bone')

	event.recipes.tfc.no_remainder_shapeless_crafting(
		event.shapeless('minecraft:arrow', ['tfc:bone_needle', '#forge:rods/wooden', ['tfg:fletching', 'tfg:hardwood_strip']]))
			.id('tfg:shaped/arrow_bone_needle')
}