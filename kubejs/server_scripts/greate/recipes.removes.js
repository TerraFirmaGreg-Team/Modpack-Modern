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
	
	event.remove({ id: 'gtceu:shaped/andesite_alloy_shaft' })
	event.remove({ id: 'gtceu:shaped/andesite_alloy_cogwheel' })
	event.remove({ id: 'gtceu:shaped/andesite_alloy_large_cogwheel' })
	event.remove({ id: 'gtceu:shaped/andesite_alloy_large_cogwheel_from_little' })
	event.remove({ id: 'gtceu:shaped/steel_cogwheel' })
	event.remove({ id: 'gtceu:shaped/steel_large_cogwheel' })
	event.remove({ id: 'gtceu:shaped/steel_large_cogwheel_from_little' })
	event.remove({ id: 'gtceu:shaped/aluminium_cogwheel' })
	event.remove({ id: 'gtceu:shaped/aluminium_large_cogwheel' })
	event.remove({ id: 'gtceu:shaped/aluminium_large_cogwheel_from_little' })
	event.remove({ id: 'gtceu:shaped/stainless_steel_cogwheel' })
	event.remove({ id: 'gtceu:shaped/stainless_steel_large_cogwheel' })
	event.remove({ id: 'gtceu:shaped/stainless_steel_large_cogwheel_from_little' })
	event.remove({ id: 'gtceu:shaped/titanium_cogwheel' })
	event.remove({ id: 'gtceu:shaped/titanium_large_cogwheel' })
	event.remove({ id: 'gtceu:shaped/titanium_large_cogwheel_from_little' })

	removeCutterRecipe(event, "andesite_alloy_shaft")
	removeCutterRecipe(event, "andesite_alloy_shaft_water")
	removeCutterRecipe(event, "andesite_alloy_shaft_distilled_water")
	removeCutterRecipe(event, "steel_shaft")
	removeCutterRecipe(event, "steel_shaft_water")
	removeCutterRecipe(event, "steel_shaft_distilled_water")
	removeCutterRecipe(event, "aluminium_shaft")
	removeCutterRecipe(event, "aluminium_shaft_water")
	removeCutterRecipe(event, "aluminium_shaft_distilled_water")
	removeCutterRecipe(event, "stainless_steel_shaft")
	removeCutterRecipe(event, "stainless_steel_shaft_water")
	removeCutterRecipe(event, "stainless_steel_shaft_distilled_water")
	removeCutterRecipe(event, "titanium_shaft")
	removeCutterRecipe(event, "titanium_shaft_water")
	removeCutterRecipe(event, "titanium_shaft_distilled_water")

	event.remove({ id: 'greate:milling/integration/gtceu/macerator/macerate_marble'})
	
	event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_andesite_alloy' })
	event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_chromatic_compound' })

	event.remove({ id: 'gtceu:smelting/smelt_dust_andesite_alloy_to_ingot' })
	
	event.remove({ id: 'gtceu:extractor/extract_andesite_alloy_shaft' })

	event.remove({ id: 'gtceu:extractor/extract_andesite_alloy' })
	event.remove({ id: 'gtceu:extractor/extract_steel_alloy'})
	event.remove({ id: 'gtceu:extractor/extract_aluminium_alloy' })
	event.remove({ id: 'gtceu:extractor/extract_stainless_steel_alloy' })
	event.remove({ id: 'gtceu:extractor/extract_titanium_alloy' })
	event.remove({ id: 'gtceu:extractor/extract_tungsten_steel_alloy' })
	event.remove({ id: 'gtceu:extractor/extract_rhodium_plated_palladium_alloy' })
	event.remove({ id: 'gtceu:extractor/extract_naquadah_alloy_alloy' })
	event.remove({ id: 'gtceu:extractor/extract_darmstadtium_alloy' })
	event.remove({ id: 'gtceu:extractor/extract_neutronium_alloy' })

	removeMaceratorRecipe(event, 'macerate_andesite_alloy')
	removeMaceratorRecipe(event, 'macerate_steel_alloy')
	removeMaceratorRecipe(event, 'macerate_aluminium_alloy')
	removeMaceratorRecipe(event, 'macerate_stainless_steel_alloy')
	removeMaceratorRecipe(event, 'macerate_titanium_alloy')
	removeMaceratorRecipe(event, 'macerate_tungsten_steel_alloy')
	removeMaceratorRecipe(event, 'macerate_rhodium_plated_palladium_alloy')
	removeMaceratorRecipe(event, 'macerate_naquadah_alloy_alloy')
	removeMaceratorRecipe(event, 'macerate_darmstadtium_alloy')
	removeMaceratorRecipe(event, 'macerate_neutronium_alloy')
	
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
}
