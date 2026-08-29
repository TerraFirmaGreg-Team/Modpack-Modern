// priority: 0
"use strict";

const registerEveryCompatRecipes = (event) => {

	global.TFC_WOOD_TYPES.forEach(wood => {
		event.remove({ id: `everycomp:c/tfc/${wood}_window_pane` })

		event.shapeless(`2x everycomp:c/tfc/${wood}_window_pane`,
			[
				`everycomp:c/tfc/${wood}_window`,
				'#forge:tools/saws'
			])
			.id(`tfg:everycompat/shapeless/${wood}_window_pane`)

		event.recipes.gtceu.cutter(`tfg:everycompat/shapeless/${wood}_window_pane`)
			.itemInputs(`3x everycomp:c/tfc/${wood}_window`)
			.itemOutputs(`8x everycomp:c/tfc/${wood}_window_pane`)
			.duration(40)
			.EUt(7)
	})

	global.AFC_WOOD_TYPES.forEach(wood => {
		event.remove({ id: `everycomp:c/afc/${wood}_window_pane` })

		event.shapeless(`2x everycomp:c/afc/${wood}_window_pane`,
			[
				`everycomp:c/afc/${wood}_window`,
				'#forge:tools/saws'
			])
			.id(`tfg:everycompat/shapeless/${wood}_window_pane`)

		event.recipes.gtceu.cutter(`tfg:everycompat/shapeless/${wood}_window_pane`)
			.itemInputs(`3x everycomp:c/afc/${wood}_window`)
			.itemOutputs(`8x everycomp:c/afc/${wood}_window_pane`)
			.duration(40)
			.EUt(7)
	})

	const DOMUM = [
		'cactus',
		'cactus_extra'
	]

	DOMUM.forEach(wood => {
		event.remove({ id: `everycomp:c/domum_ornamentum/${wood}_window_pane` })

		event.shapeless(`2x everycomp:c/domum_ornamentum/${wood}_window_pane`,
			[
				`everycomp:c/domum_ornamentum/${wood}_window`,
				'#forge:tools/saws'
			])
			.id(`tfg:everycompat/shapeless/${wood}_window_pane`)

		event.recipes.gtceu.cutter(`tfg:everycompat/shapeless/${wood}_window_pane`)
			.itemInputs(`3x everycomp:c/domum_ornamentum/${wood}_window`)
			.itemOutputs(`8x everycomp:c/domum_ornamentum/${wood}_window_pane`)
			.duration(40)
			.EUt(7)
	})

	global.AD_ASTRA_WOOD.forEach(wood => {
		event.remove({ id: `everycomp:c/ad_astra/${wood.name}_window_pane` })

		event.shapeless(`2x everycomp:c/ad_astra/${wood.name}_window_pane`,
			[
				`everycomp:c/ad_astra/${wood.name}_window`,
				'#forge:tools/saws'
			])
			.id(`tfg:everycompat/shapeless/${wood.name}_window_pane`)

		event.recipes.gtceu.cutter(`tfg:everycompat/shapeless/${wood.name}_window_pane`)
			.itemInputs(`3x everycomp:c/ad_astra/${wood.name}_window`)
			.itemOutputs(`8x everycomp:c/ad_astra/${wood.name}_window_pane`)
			.duration(40)
			.EUt(7)
	})

	global.WAB_WOOD.forEach(wood => {
		event.remove({ id: `everycomp:c/wan_ancient_beasts/${wood.name}_window_pane` })

		event.shapeless(`2x everycomp:c/wan_ancient_beasts/${wood.name}_window_pane`,
			[
				`everycomp:c/wan_ancient_beasts/${wood.name}_window`,
				'#forge:tools/saws'
			])
			.id(`tfg:everycompat/shapeless/${wood.name}_window_pane`)

		event.recipes.gtceu.cutter(`tfg:everycompat/shapeless/${wood.name}_window_pane`)
			.itemInputs(`3x everycomp:c/wan_ancient_beasts/${wood.name}_window`)
			.itemOutputs(`8x everycomp:c/wan_ancient_beasts/${wood.name}_window_pane`)
			.duration(40)
			.EUt(7)
	})
}