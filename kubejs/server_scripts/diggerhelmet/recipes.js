// priority: 0

function registerDiggerHelmetRecipes(event) {

	event.remove({ mod: 'diggerhelmet' })

	event.shaped('diggerhelmet:digger_helmet', [
		' E ',
		'BA ',
		'DBD'
	], {
		A: '#minecraft:candles',
		B: '#forge:rings',
		C: 'minecraft:leather_helmet',
		D: '#forge:rods',
		E: 'minecraft:glowstone_dust'
	})
	.id('tfg:shaped/digger_helmet_from_candle')
}