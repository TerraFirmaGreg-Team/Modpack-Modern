// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function removeGreateRecipes(event) {

	global.GREATE_DISABLED_ITEMS.forEach(item => {
		event.remove({ input: item })
		event.remove({ output: item })
	})

	global.GREATE_DISABLED_FLUIDS.forEach(fluid => {
		event.remove({ input: fluid })
		event.remove({ output: fluid })
	})

	global.GREATE_DISABLED_TAGS.forEach(tag => {
		event.remove({ input: tag })
		event.remove({ output: tag })
	})

	event.remove({ mod: 'greate', input: 'create:andesite_alloy' });
	event.remove({ mod: 'greate', output: 'minecraft:bamboo_pressure_plate'})

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
		event.remove({ id: `gtceu:extractor/extract_${tier}_alloy` })
		event.remove({ id: `gtceu:extractor/extract_${tier}_gearbox` })
		event.remove({ id: `gtceu:extractor/extract_${tier}_vertical_gearbox` })
	})

	event.remove({ id: 'greate:milling/integration/gtceu/macerator/macerate_marble'})
	
	event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_andesite_alloy' })
	event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_chromatic_compound' })
	
	event.remove({ id: 'gtceu:shaped/andesite_alloy_shaft' })
	event.remove({ id: 'gtceu:extractor/extract_andesite_alloy' })
		
	event.remove({ id: /^greate:mixing\/integration\/create\/.*/ })
	event.remove({ id: /^greate:sawing\/integration\/create\/.*/ })
	event.remove({ id: /^greate:splashing\/integration\/create\/.*/ })
	event.remove({ id: /^greate:crushing\/integration\/create\/.*/ })
	event.remove({ id: /^greate:milling\/integration\/create\/.*/ })
	event.remove({ id: /^greate:compacting\/integration\/.*/ })
	event.remove({ id: /^greate:pressing\/integration\/.*/ })
	event.remove({ id: /^greate:shaped\/.*/ })
	event.remove({ id: /^greate:shapeless\/.*/ })

	event.remove({ mod: 'greate', type: 'create:deploying' });
	event.remove({ mod: 'greate', type: 'create:sequenced_assembly' });
	event.remove({ mod: 'greate', type: 'gtceu:assembler' });
	
	event.remove({ id: 'gtceu:macerator/macerate_andesite_alloy_encased_fan' });
	event.remove({ id: 'gtceu:arc_furnace/arc_andesite_alloy_encased_fan' });
	event.remove({ id: 'gtceu:macerator/macerate_andesite_alloy_mechanical_mixer' });
	event.remove({ id: 'gtceu:arc_furnace/arc_andesite_alloy_mechanical_mixer' });
	event.remove({ id: 'gtceu:macerator/macerate_andesite_alloy_mechanical_pump' });
	event.remove({ id: 'gtceu:arc_furnace/arc_andesite_alloy_mechanical_pump' });

	event.remove({ id: 'greate:cutting/integration/create/cutting/runtime_generated/compat/minecraft/bamboo_planks_to_bamboo_button' })
	event.remove({ id: 'greate:mixing/integration/gtceu/mixer/fire_charge' })
	event.remove({ id: 'toomanyrecipeviewers:/greate/milling/integration/gtceu/macerator/macerate_cocoa' })
	event.remove({ id: 'greate:milling/integration/gtceu/macerator/macerate_honeycomb' })
	event.remove({ id: 'greate:milling/integration/gtceu/macerator/macerate_honeycomb_block'})
	event.remove({ id: 'greate:milling/integration/gtceu/macerator/quartz_sand_from_sand' })
}
