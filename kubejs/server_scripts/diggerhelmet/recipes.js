// priority: 0

function registerDiggerHelmetRecipes(event) {
	event.remove({ mod: 'diggerhelmet' })

	event.shapeless('diggerhelmet:eternal_candle', ['#minecraft:candles', 'minecraft:glowstone_dust'])
		.id('tfg:shapeless/eternal_candle')

	event.shaped('diggerhelmet:digger_helmet', [
		' A ',
		'EB ',
		'DCD'
	], {
		A: 'diggerhelmet:eternal_candle',
		B: '#forge:rings',
		C: 'minecraft:leather_helmet',
		D: '#forge:rods/tin',
		E: '#forge:tools/hammers'
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
	}).id('tfg:shaped/auto_drink_modifier')
}