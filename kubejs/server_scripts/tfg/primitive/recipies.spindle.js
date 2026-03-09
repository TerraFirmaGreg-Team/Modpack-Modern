"use strict";

function registerTFGSpindleRecipies(event) {
	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless('8x firmalife:pineapple_yarn', [
			'firmalife:pineapple_fiber',
			'#tfg:tools/spindles'
		]).id('tfg:shapeless/pineapple_yarn')
	)
	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless('8x tfc:wool_yarn', [
			'tfc:wool',
			'#tfg:tools/spindles'
		]).id('tfg:shapeless/wool_yarn')
	)
	event.shaped('tfg:copper_spindle', [
		'A',
		'B'
	], {
		A: 'tfg:copper_spindle_head',
		B: '#forge:rods/wooden'
	}).id('tfg:shaped/copper_spindle')
}