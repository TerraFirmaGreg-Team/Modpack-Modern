// priority: 0

const registerEveryCompatRecipes = (event) => {

	global.TFC_WOOD_TYPES.forEach(wood =>
	{
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
			.EUt(20)
	})
}