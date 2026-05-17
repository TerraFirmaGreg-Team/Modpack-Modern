// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function removeGreateRecipes(event) {

	global.GREATE_DISABLED_FLUIDS.forEach(fluid => {
		event.remove({ input: fluid })
		event.remove({ output: fluid })
	})

	global.GREATE_DISABLED_TAGS.forEach(tag => {
		event.remove({ input: tag })
		event.remove({ output: tag })
	})

	global.GREATE_MATERIAL_TIERS.forEach(tier => {
		
		event.remove({ id: `greate:shaped/${tier}_shaft` })
		event.remove({ id: `greate:shaped/${tier}_cogwheel` })
		event.remove({ id: `greate:shaped/${tier}_large_cogwheel` })
		event.remove({ id: `greate:shaped/${tier}_large_cogwheel_from_little` })
		
		removeCutterRecipe(event, `${tier}_shaft`)
		removeCutterRecipe(event, `${tier}_shaft_water`)
		removeCutterRecipe(event, `${tier}_shaft_distilled_water`)
		
		event.remove({ id: `gtceu:smelting/smelt_dust_${tier}_to_ingot` })
		removeMaceratorRecipe(event, `macerate_${tier}`)

		event.remove({ id: `gtceu:extractor/extract_${tier}` })
		event.remove({ id: `gtceu:extractor/extract_${tier}_shaft` })
		event.remove({ id: `gtceu:extractor/extract_${tier}_cogwheel` })
		event.remove({ id: `gtceu:extractor/extract_large_${tier}_cogwheel` })
		event.remove({ id: `gtceu:extractor/extract_${tier}_alloy` })
		event.remove({ id: `gtceu:extractor/extract_${tier}_gearbox` })
		event.remove({ id: `gtceu:extractor/extract_${tier}_vertical_gearbox` })
	})

	event.remove({ mod: 'greate', type: 'minecraft:crafting_shaped' })
	event.remove({ mod: 'greate', type: 'minecraft:crafting_shapeless' })
	event.remove({ mod: 'greate', type: 'create:deploying' });
	event.remove({ mod: 'greate', type: 'create:sequenced_assembly' });
	event.remove({ mod: 'greate', type: 'gtceu:assembler' });
}
