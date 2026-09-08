// priority: 0
"use strict";

const registerViaRomanaRecipes = (event) => {
	if (!Platform.isLoaded('via_romana')) return

	event.remove({ mod: 'via_romana' })

	event.shapeless('via_romana:charting_map', [
		'minecraft:map',
		'#forge:dyes/black',
		'minecraft:feather',
		'minecraft:string'
	]).id('via_romana:charting_map')
}
