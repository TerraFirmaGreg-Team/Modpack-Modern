"use strict";

function registerTFGOverworldItemTags(event) {
	event.add('c:hidden_from_recipe_viewers', 'tfg:plant/flame_vine_plant')
	event.add('c:hidden_from_recipe_viewers', 'tfg:plant/cycad_plant')

	global.NEW_OVERWORLD_PLANTS.forEach(plant => {
		event.add('tfc:plants', plant);
		event.add('tfc:compost_greens_low', plant);
	});
	
	event.add('tfc:fluxstone', 'tfg:plant/mussels');
	event.add('tfc:fluxstone', 'tfg:plant/barnacles');

	event.add('tfg:anemones', "tfg:plant/anemone_green");
	event.add('tfg:anemones', "tfg:plant/anemone_purple");
	event.add('tfg:anemones', "tfg:plant/anemone_large_orange");
	event.add('tfg:anemones', "tfg:plant/anemone_large_purple");
}

function registerTFGOverworldBlockTags(event) {
	event.add('tfg:dry_plant_plantable_on', '#minecraft:sand');
	event.add('tfg:dry_plant_plantable_on', '#forge:gravel');
	event.add('tfg:dry_plant_plantable_on', '#tfc:bush_plantable_on');
	event.add('tfg:dry_plant_plantable_on', '#forge:sandstone');

	event.add('tfg:epiphyte_plantable_on', '#minecraft:logs');
	event.add('tfg:epiphyte_plantable_on', '#forge:stone');
	event.add('tfg:epiphyte_plantable_on', '#forge:sandstone');

	event.add('tfg:sea_stack_rocks', 'tfc:rock/hardened/basalt');
	event.add('tfg:sea_stack_rocks', 'tfc:rock/hardened/limestone');
	event.add('tfg:sea_stack_rocks', 'tfc:rock/hardened/marble');
	event.add('tfg:sea_stack_rocks', 'tfc:rock/hardened/rhyolite');

	event.add('tfg:anemone_plantable_on', '#forge:stone');
	event.add('tfg:anemone_plantable_on', '#forge:cobblestone');
	event.add('tfg:anemone_plantable_on', '#forge:gravel');
	event.add('tfg:anemone_plantable_on', '#minecraft:sand');
	event.add('tfg:anemone_plantable_on', '#forge:sandstone');

	event.add('tfg:is_anemone', 'tfg:plant/anemone_green');
	event.add('tfg:is_anemone', 'tfg:plant/anemone_purple');
	event.add('tfg:is_anemone', 'tfg:plant/anemone_large_orange');
	event.add('tfg:is_anemone', 'tfg:plant/anemone_large_purple');
}

function registerTFGOverworldBiomeTags(event) {

	// Structures
	event.add('tfg:has_structure/plains_temperate_0', 'tfc:plains')
	event.add('tfg:has_structure/plains_temperate_0', 'tfc:plateau')
	event.add('tfg:has_structure/plains_temperate_0', 'tfc:highlands')

	event.add('tfg:has_structure/plains_temperate_0', 'tfg:earth/burren_plains')
	event.add('tfg:has_structure/plains_temperate_0', 'tfg:earth/burren_plateau')
	event.add('tfg:has_structure/plains_temperate_0', 'tfg:earth/cenote_highlands')
	event.add('tfg:has_structure/plains_temperate_0', 'tfg:earth/cenote_plains')
	event.add('tfg:has_structure/plains_temperate_0', 'tfg:earth/cenote_plateau')
	event.add('tfg:has_structure/plains_temperate_0', 'tfg:earth/doline_highlands')
	event.add('tfg:has_structure/plains_temperate_0', 'tfg:earth/doline_plains')
	event.add('tfg:has_structure/plains_temperate_0', 'tfg:earth/doline_plateau')
	event.add('tfg:has_structure/plains_temperate_0', 'tfg:earth/drumlins')
	event.add('tfg:has_structure/plains_temperate_0', 'tfg:earth/extinct_shield_volcano')
	event.add('tfg:has_structure/plains_temperate_0', 'tfg:earth/grassy_dunes')
	event.add('tfg:has_structure/plains_temperate_0', 'tfg:earth/highlands')
	event.add('tfg:has_structure/plains_temperate_0', 'tfg:earth/inverted_patterned_ground')
	event.add('tfg:has_structure/plains_temperate_0', 'tfg:earth/knob_and_kettle')
	event.add('tfg:has_structure/plains_temperate_0', 'tfg:earth/patterned_ground')
	event.add('tfg:has_structure/plains_temperate_0', 'tfg:earth/plains')
	event.add('tfg:has_structure/plains_temperate_0', 'tfg:earth/plateau')
	event.add('tfg:has_structure/plains_temperate_0', 'tfg:earth/plateau_wide')
	event.add('tfg:has_structure/plains_temperate_0', 'tfg:earth/rocky_plateau')

	event.add('tfg:has_structure/aqueduct', 'tfc:plains')
	event.add('tfg:has_structure/aqueduct', 'tfc:highlands')
	event.add('tfg:has_structure/aqueduct', 'tfc:lowlands')
	event.add('tfg:has_structure/aqueduct', 'tfc:badlands')

	event.add('tfg:has_structure/aqueduct', 'tfg:earth/badlands')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/burren_badlands')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/burren_plains')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/burren_roche_moutonee')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/buttes')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/canyons')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/cenote_canyons')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/cenote_highlands')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/cenote_hills')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/cenote_plains')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/doline_canyons')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/doline_highlands')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/doline_plains')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/drumlins')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/extreme_doline_plateau')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/grassy_dunes')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/highlands')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/hoodoos')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/lowlands')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/mesas')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/plains')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/shilin_plains')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/shilin_hills')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/shilin_highlands')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/stair_step_canyons')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/tower_karst_canyons')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/tower_karst_highlands')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/tower_karst_plains')
	event.add('tfg:has_structure/aqueduct', 'tfg:earth/tuyas')

	event.add('tfg:has_structure/ocean_moai_0', 'tfc:volcanic_oceanic_mountains')
	event.add('tfg:has_structure/ocean_moai_0', 'tfc:volcanic_mountains')

	event.add('tfg:has_structure/ocean_moai_0', 'tfg:earth/old_shield_volcano_shore')
	event.add('tfg:has_structure/ocean_moai_0', 'tfg:earth/shield_volcano_shore')
	event.add('tfg:has_structure/ocean_moai_0', 'tfg:earth/sunken_shield_volcano')
	event.add('tfg:has_structure/ocean_moai_0', 'tfg:earth/volcanic_oceanic_mountains')
	event.add('tfg:has_structure/ocean_moai_0', 'tfg:earth/volcanic_mountains')

	event.add('tfg:has_structure/illages', 'tfc:plains')
	event.add('tfg:has_structure/illages', 'tfc:hills')
	event.add('tfg:has_structure/illages', 'tfc:rolling_hills')
	event.add('tfg:has_structure/illages', 'tfc:badlands')
	event.add('tfg:has_structure/illages', 'tfc:plateau')
	event.add('tfg:has_structure/illages', 'tfc:old_mountains')

	event.add('tfg:has_structure/illages', 'tfg:earth/ancient_shield_volcano')
	event.add('tfg:has_structure/illages', 'tfg:earth/burren_plains')
	event.add('tfg:has_structure/illages', 'tfg:earth/burren_plateau')
	event.add('tfg:has_structure/illages', 'tfg:earth/cenote_highlands')
	event.add('tfg:has_structure/illages', 'tfg:earth/cenote_plains')
	event.add('tfg:has_structure/illages', 'tfg:earth/cenote_plateau')
	event.add('tfg:has_structure/illages', 'tfg:earth/doline_plains')
	event.add('tfg:has_structure/illages', 'tfg:earth/doline_plateau')
	event.add('tfg:has_structure/illages', 'tfg:earth/drumlins')
	event.add('tfg:has_structure/illages', 'tfg:earth/dormant_shield_volcano')
	event.add('tfg:has_structure/illages', 'tfg:earth/extinct_shield_volcano')
	event.add('tfg:has_structure/illages', 'tfg:earth/hills')
	event.add('tfg:has_structure/illages', 'tfg:earth/hoodoos')
	event.add('tfg:has_structure/illages', 'tfg:earth/inverted_patterned_ground')
	event.add('tfg:has_structure/illages', 'tfg:earth/knob_and_kettle')
	event.add('tfg:has_structure/illages', 'tfg:earth/mesas')
	event.add('tfg:has_structure/illages', 'tfg:earth/patterned_ground')
	event.add('tfg:has_structure/illages', 'tfg:earth/plains')
	event.add('tfg:has_structure/illages', 'tfg:earth/plateau')
	event.add('tfg:has_structure/illages', 'tfg:earth/plateau_wide')
	event.add('tfg:has_structure/illages', 'tfg:earth/rocky_plateau')
	event.add('tfg:has_structure/illages', 'tfg:earth/stone_circles')
	event.add('tfg:has_structure/illages', 'tfg:earth/tuyas')

	event.add('tfg:has_structure/illager_camp', 'tfc:badlands')
	event.add('tfg:has_structure/illager_camp', 'tfc:canyons')
	event.add('tfg:has_structure/illager_camp', 'tfc:highlands')
	event.add('tfg:has_structure/illager_camp', 'tfc:hills')
	event.add('tfg:has_structure/illager_camp', 'tfc:inverted_badlands')
	event.add('tfg:has_structure/illager_camp', 'tfc:low_canyons')
	event.add('tfg:has_structure/illager_camp', 'tfc:lowlands')
	event.add('tfg:has_structure/illager_camp', 'tfc:mountains')
	event.add('tfg:has_structure/illager_camp', 'tfc:oceanic_mountains')
	event.add('tfg:has_structure/illager_camp', 'tfc:old_mountains')
	event.add('tfg:has_structure/illager_camp', 'tfc:plains')
	event.add('tfg:has_structure/illager_camp', 'tfc:plateau')
	event.add('tfg:has_structure/illager_camp', 'tfc:rolling_hills')
	event.add('tfg:has_structure/illager_camp', 'tfc:salt_marsh')
	event.add('tfg:has_structure/illager_camp', 'tfc:shore')
	event.add('tfg:has_structure/illager_camp', 'tfc:tidal_flats')
	event.add('tfg:has_structure/illager_camp', 'tfc:volcanic_mountains')
	event.add('tfg:has_structure/illager_camp', 'tfc:volcanic_oceanic_mountains')

	event.add('tfg:has_structure/illager_camp', 'tfg:earth/ancient_shield_volcano')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/badlands')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/burren_badlands')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/burren_badlands_tall')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/burren_plains')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/burren_plateau')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/burren_roche_moutonee')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/buttes')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/canyons')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/cenote_canyons')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/cenote_highlands')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/cenote_hills')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/cenote_plains')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/cenote_plateau')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/cenote_rolling_hills')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/coastal_dunes')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/doline_canyons')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/doline_highlands')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/doline_hills')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/doline_plains')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/doline_plateau')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/doline_rolling_hills')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/dormant_shield_volcano')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/drumlins')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/embayments')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/extinct_shield_volcano')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/extreme_doline_plateau')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/glacially_carved_mountains')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/glacially_carved_oceanic_mountains')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/grassy_dunes')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/highlands')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/hills')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/hoodoos')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/inverted_patterned_ground')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/knob_and_kettle')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/low_canyons')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/lowlands')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/mesas')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/mountains')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/mud_flats')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/oceanic_mountains')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/old_mountains')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/old_shield_volcano_shore')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/patterned_ground')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/plains')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/plateau')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/plateau_wide')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/rocky_plateau')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/rolling_hills')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/salt_flats')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/salt_marsh')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/setback_cliffs')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/shield_volcano_shore')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/shilin_canyons')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/shilin_highlands')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/shilin_plains')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/shilin_plateau')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/shore')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/stair_step_canyons')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/stone_circles')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/terrace_lower')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/terrace_upper')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/tidal_flats')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/tower_karst_canyons')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/tower_karst_highlands')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/tower_karst_hills')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/tower_karst_lake')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/tower_karst_plains')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/tuyas')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/volcanic_mountains')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/volcanic_oceanic_mountains')
	event.add('tfg:has_structure/illager_camp', 'tfg:earth/whorled_canyons')

	event.add('tfg:has_structure/illager_roaming', '#tfg:has_structure/illager_camp')

	event.add('tfg:never_has_structure/illages', '#tfc:is_lake')
	event.add('tfg:never_has_structure/illages', '#tfc:is_ocean')
	event.add('tfg:never_has_structure/illages', '#tfc:is_river')
	event.add('tfg:never_has_structure/illages', '#tfg:earth/is_lake')
	event.add('tfg:never_has_structure/illages', '#tfg:earth/is_ocean')
	event.add('tfg:never_has_structure/illages', '#tfg:earth/is_river')

	event.add('tfc_ruins:has_structure/ruin_beach', 'tfg:earth/shore')
	event.add('tfc_ruins:has_structure/ruin_beach', 'tfg:earth/coastal_dunes')
	event.add('tfc_ruins:has_structure/ruin_beach', 'tfg:earth/embayments')
	event.add('tfc_ruins:has_structure/ruin_beach', 'tfg:earth/sea_stacks')
	event.add('tfc_ruins:has_structure/ruin_beach', 'tfg:earth/rocky_shores')
	event.add('tfc_ruins:has_structure/ruin_beach', 'tfg:earth/shield_volcano_shore')
	
	event.add('tfc_ruins:has_structure/ruin_rich', 'tfg:earth/highlands')
	event.add('tfc_ruins:has_structure/ruin_rich', 'tfg:earth/glacially_carved_mountains')
	event.add('tfc_ruins:has_structure/ruin_rich', 'tfg:earth/plateau')
	event.add('tfc_ruins:has_structure/ruin_rich', 'tfg:earth/old_mountains')
	event.add('tfc_ruins:has_structure/ruin_rich', 'tfg:earth/rolling_hills')

	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/badlands')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/burren_badlands')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/burren_plains')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/burren_plateau')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/cenote_hills')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/cenote_plains')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/cenote_plateau')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/cenote_rolling_hills')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/doline_hills')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/doline_plains')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/doline_plateau')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/doline_rolling_hills')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/drumlins')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/hills')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/hoodoos')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/inverted_patterned_ground')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/knob_and_kettle')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/low_canyons')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/lowlands')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/mesas')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/patterned_ground')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/plains')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/plateau')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/plateau_wide')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/rocky_plateau')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/rocky_shores')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/rolling_hills')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/setback_cliffs')
	
	event.add('tfc:ruined_world:has_structure/large_structure', 'tfg:earth/hills')
	event.add('tfc:ruined_world:has_structure/large_structure', 'tfg:earth/plateau')
	event.add('tfc:ruined_world:has_structure/large_structure', 'tfg:earth/plateau_wide')
	event.add('tfc:ruined_world:has_structure/large_structure', 'tfg:earth/plains')
	event.add('tfc:ruined_world:has_structure/large_structure', 'tfg:earth/drumlins')
	event.add('tfc:ruined_world:has_structure/large_structure', 'tfg:earth/mesas')
	event.add('tfc:ruined_world:has_structure/large_structure', 'tfg:earth/hoodoos')
	event.add('tfc:ruined_world:has_structure/large_structure', 'tfg:earth/patterned_ground')
	event.add('tfc:ruined_world:has_structure/large_structure', 'tfg:earth/inverted_patterned_ground')
	event.add('tfc:ruined_world:has_structure/large_structure', 'tfg:earth/knob_and_kettle')
	
	event.add('tfc:ruined_world:has_structure/small_structure', '#tfc:ruined_world:has_structure/large_structure')
	event.add('tfc:ruined_world:has_structure/small_structure', 'tfg:earth/old_mountains')
	event.add('tfc:ruined_world:has_structure/small_structure', 'tfg:earth/glacially_carved_mountains')

	event.add('tfc_ruined_world:has_structure/ancient_monument_1', '#tfc:ruined_world:has_structure/large_structure')
	event.add('tfc_ruined_world:has_structure/ancient_monument_2', '#tfc:ruined_world:has_structure/large_structure')
	event.add('tfc_ruined_world:has_structure/castle_1', '#tfc:ruined_world:has_structure/large_structure')
	event.add('tfc_ruined_world:has_structure/castle_2', '#tfc:ruined_world:has_structure/large_structure')
	event.add('tfc_ruined_world:has_structure/limestone_church', '#tfc:ruined_world:has_structure/large_structure')
	event.add('tfc_ruined_world:has_structure/medium_gneiss_church', '#tfc:ruined_world:has_structure/large_structure')
	event.add('tfc_ruined_world:has_structure/small_gneiss_church', '#tfc:ruined_world:has_structure/large_structure')
	event.add('tfc_ruined_world:has_structure/small_limestone_church', '#tfc:ruined_world:has_structure/large_structure')
	event.add('tfc_ruined_world:has_structure/small_limestone_church_2', '#tfc:ruined_world:has_structure/large_structure')
	event.add('tfc_ruined_world:has_structure/tower_1', '#tfc:ruined_world:has_structure/small_structure')
	event.add('tfc_ruined_world:has_structure/tower_2', '#tfc:ruined_world:has_structure/small_structure')
	event.add('tfc_ruined_world:has_structure/tower_3', '#tfc:ruined_world:has_structure/small_structure')
	event.add('tfc_ruined_world:has_structure/tower_4', '#tfc:ruined_world:has_structure/small_structure')
	event.add('tfc_ruined_world:has_structure/tower_5', '#tfc:ruined_world:has_structure/small_structure')
	event.add('tfc_ruined_world:has_structure/towerhouse_1', '#tfc:ruined_world:has_structure/small_structure')
	event.add('tfc_ruined_world:has_structure/towerhouse_2', '#tfc:ruined_world:has_structure/small_structure')

	// Kaolin
	event.add("tfc:kaolin_clay_spawns_in", "tfc:rolling_hills");

	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/rolling_hills");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/highlands");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/plateau");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/plateau_wide");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/old_mountains");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/tower_karst_hills");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/tower_karst_highlands");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/extreme_doline_plateau");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/extreme_doline_mountains");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/doline_rolling_hills");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/doline_highlands");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/doline_plateau");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/cenote_rolling_hills");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/cenote_highlands");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/cenote_plateau");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/shilin_hills");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/shilin_highlands");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/shilin_plateau");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/active_shield_volcano");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/dormant_shield_volcano");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/extinct_shield_volcano");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/ancient_shield_volcano");

	global.TFC_BIOMES.forEach(biome => {
		event.add('tfg:overworld_biomes', biome);
	})
	global.NEW_TFC_BIOMES.forEach(biome => {
		event.add('tfg:overworld_biomes', biome);
	})
}

function registerTFGOverworldPlacedFeatures(event) {

	// Rose quartz
	// Old worldgen
	event.add('tfc:in_biome/surface_decoration/ocean', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/ocean_reef', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/deep_ocean', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/deep_ocean_trench', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/shore', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/tidal_flats', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/lowlands', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/salt_marsh', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/plains', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/lake', 'tfg:earth/rose_quartz/rose_quartz')
	// Mew worldgen
	event.add('tfg:in_biome/surface_decoration/ice_sheet', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfg:in_biome/surface_decoration/ice_sheet_mountains', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfg:in_biome/surface_decoration/ice_sheet_oceanic', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfg:in_biome/surface_decoration/ice_sheet_oceanic_mountains', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfg:in_biome/surface_decoration/ice_sheet_shield_volcano', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfg:in_biome/surface_decoration/ice_sheet_shore', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfg:in_biome/surface_decoration/ice_sheet_tuyas', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfg:in_biome/surface_decoration/glaciated_mountains', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfg:in_biome/surface_decoration/glacited_oceanic_mountains', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfg:in_biome/surface_decoration/glacited_shield_volcano', 'tfg:earth/rose_quartz/rose_quartz')

	// Tarkianite
	event.add('tfc:in_biome/veins', 'tfg:earth/vein/normal_tarkianite')
	event.add('tfc:in_biome/veins', 'tfg:earth/vein/desert_oilsands')

	// Add back the non-ore ones
	event.add("tfc:in_biome/veins", "tfc:vein/gravel");
	event.add("tfc:in_biome/veins", "tfc:vein/kaolin_disc");
	event.add("tfc:in_biome/veins", "tfc:vein/granite_dike");
	event.add("tfc:in_biome/veins", "tfc:vein/diorite_dike");
	event.add("tfc:in_biome/veins", "tfc:vein/gabbro_dike");

	// Geodes
	event.add("tfc:in_biome/veins", "tfg:earth/geode/amethyst");
	event.add("tfc:in_biome/veins", "tfg:earth/geode/barite");
	event.add("tfc:in_biome/veins", "tfg:earth/geode/calcite");
	event.add("tfc:in_biome/veins", "tfg:earth/geode/gypsum");
	event.add("tfc:in_biome/veins", "tfg:earth/geode/opal");
	event.add("tfc:in_biome/veins", "tfg:earth/geode/pyrite");
	event.add("tfc:in_biome/veins", "tfg:earth/geode/quartzite");

	// Crops
	event.add("tfc:feature/crops", "tfg:earth/sunflower_patch");
	event.add("tfc:feature/crops", "tfg:earth/rapeseed_patch");
	event.add("tfc:feature/crops", "tfg:earth/flax_patch");

	// Other decoration
	// Old worldgen
	event.add("tfc:in_biome/underground_decoration", "tfg:glow_lichen");
	event.add("tfc:in_biome/underground_decoration", "tfg:earth/sulfur_patch");
	event.add("tfc:in_biome/underground_decoration", "tfg:earth/oil_spout");
	event.add("tfc:in_biome/underground_decoration", "tfg:earth/volcano_spout");
	// New worldgen
	event.add("tfg:in_biome/underground_decoration", "tfg:glow_lichen");
	event.add("tfg:in_biome/underground_decoration", "tfg:earth/sulfur_patch");
	event.add("tfg:in_biome/underground_decoration", "tfg:earth/oil_spout");
	event.add("tfg:in_biome/underground_decoration", "tfg:earth/volcano_spout");
}