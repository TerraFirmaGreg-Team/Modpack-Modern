// priority: 0
"use strict";

function registerDiggerHelmetRecipes(event) {
	event.remove({ mod: 'diggerhelmet' })

	event.shaped('diggerhelmet:digger_helmet', [
		' F ',
		'EAB',
		'DCD'
	], {
		A: '#minecraft:candles',
		B: '#forge:rings',
		C: 'minecraft:leather_helmet',
		D: '#forge:rods/tin',
		E: '#forge:tools/hammers',
		F: 'minecraft:glowstone_dust'
	})
	.id('tfg:shaped/digger_helmet')

	event.recipes.gtceu.assembler('tfg:mining_speed_modifier')
		.itemInputs('#forge:plates/blue_steel', '#gtceu:circuits/lv', '2x tfg:haste_pill')
		.inputFluids(Fluid.of('tfcagedalcohol:aged_whiskey', 1000))
		.itemOutputs('diggerhelmet:mining_speed_modifier')
		.EUt(16)
		.duration(400)

	event.shaped('diggerhelmet:auto_drink_modifier', [
		' A ',
		'BCB',
		'DCD'
	], {
		A: 'waterflasks:leather_flask',
		B: '#forge:string',
		C: 'minecraft:bamboo',
		D: 'tfc:glue'
	}).id('tfg:shaped/auto_drink_modifier_bamboo')

	event.shaped('diggerhelmet:auto_drink_modifier', [
		' A ',
		'BCB',
		' C '
	], {
		A: 'waterflasks:leather_flask',
		B: '#forge:screws/wrought_iron',
		C: '#forge:foils/rubber'
	}).id('tfg:shaped/auto_drink_modifier_rubber')

	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless('diggerhelmet:silk_lining', ['tfcambiental:silk_cowl', '#forge:string', '#tfc:sewing_needles'])
	).id('tfg:shapeless/diggerhelmet/silk_lining')

	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless('diggerhelmet:wool_lining', ['tfcambiental:wool_hat', '#forge:string', '#tfc:sewing_needles'])
	).id('tfg:shapeless/diggerhelmet/wool_lining')
}