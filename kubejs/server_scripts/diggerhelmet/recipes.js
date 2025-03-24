// priority: 0

function registerDiggerHelmetRecipes(event) {

	event.remove({ mod: 'diggerhelmet' })

	event.shaped('diggerhelmet:digger_helmet', [
		' A ',
		'DBD',
		' C '
	], {
		A: '#minecraft:candles',
		B: '#forge:rings',
		C: 'minecraft:leather_helmet',
		D: '#forge:rods'
	})
	.id('tfg:shaped/digger_helmet_from_candle')

	event.shaped('diggerhelmet:digger_helmet', [
		' A ',
		'DBD',
		' C '
	], {
		A: 'minecraft:glowstone_dust',
		B: '#forge:rings',
		C: 'minecraft:leather_helmet',
		D: '#forge:rods'
	})
}