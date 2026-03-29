"use strict";

function registerTFGOverworldItemTags(event) {
	event.add('c:hidden_from_recipe_viewers', 'tfg:plant/flame_vine_plant')
	event.add('c:hidden_from_recipe_viewers', 'tfg:plant/cycad_plant')
	event.add('c:hidden_from_recipe_viewers', 'tfg:volcanic_ash')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/volcanic_ash')

	global.NEW_OVERWORLD_PLANTS.forEach(plant => {
		event.add('tfc:plants', plant);
		event.add('tfc:compost_greens_low', plant);
	});
	
	event.add('tfc:fluxstone', 'tfg:plant/mussels');
	event.add('tfc:fluxstone', 'tfg:plant/barnacles');

	event.add('tfg:stone_composition/igneous_mafic', 'tfg:mafic_hornfels')
	event.add('tfg:stone_composition/metamorphic', 'tfg:pelitic_hornfels')
	event.add('tfg:stone_composition/sedimentary_carbonate', 'tfg:carbonate_hornfels')

	event.add('tfg:anemones', "tfg:plant/anemone_green");
	event.add('tfg:anemones', "tfg:plant/anemone_purple");
	event.add('tfg:anemones', "tfg:plant/anemone_large_orange");
	event.add('tfg:anemones', "tfg:plant/anemone_large_purple");
	event.add('tfc:compost_browns', '#tfg:anemones');
	
	event.add('tfc:makes_red_dye', 'tfg:plant/kinnikinnick')
	event.add('tfc:makes_red_dye', 'tfg:plant/tank_bromeliad')
	event.add('tfc:makes_brown_dye', 'tfg:plant/shawiash')
	event.add('tfc:makes_pink_dye', 'tfg:plant/ramunda')
	event.add('tfc:makes_pink_dye', 'tfg:plant/moss_campion')
	event.add('tfc:makes_magenta_dye', 'tfg:plant/azalea')
	event.add('tfc:makes_yellow_dye', 'tfg:plant/buttercup')
	event.add('tfc:makes_yellow_dye', 'tfg:plant/yellow_saxifrage')
	event.add('tfc:makes_yellow_dye', 'tfg:plant/cycad')
	event.add('tfc:makes_orange_dye', 'tfg:plant/elegant_sunburst_lichen')
	event.add('tfc:makes_orange_dye', 'tfg:plant/palash')
	event.add('tfc:makes_orange_dye', 'tfg:plant/qantu')
	event.add('tfc:makes_orange_dye', 'tfg:plant/flame_vine')
	event.add('tfc:makes_green_dye', 'tfg:plant/prickly_pear')
	event.add('tfc:makes_green_dye', 'tfg:plant/prickly_pear_purple')
	event.add('tfc:makes_green_dye', 'tfg:plant/silken_pincushion_cactus')
	event.add('tfc:makes_blue_dye', 'tfg:plant/cornflower')
	event.add('tfc:makes_light_blue_dye', 'tfg:plant/mountain_hullwort')
	event.add('tfc:makes_light_blue_dye', 'tfg:plant/penwortel')
	event.add('tfc:makes_purple_dye', 'tfg:plant/ramirezella')
	event.add('tfc:makes_white_dye', 'tfg:plant/edelweiss')
	event.add('tfc:makes_white_dye', 'tfg:plant/bear_grass')
	event.add('tfc:makes_light_gray_dye', 'tfg:plant/silver_bromeliad')
}

function registerTFGOverworldBlockTags(event) {
	event.add('tfg:dry_plant_plantable_on', '#minecraft:sand');
	event.add('tfg:dry_plant_plantable_on', '#forge:gravel');
	event.add('tfg:dry_plant_plantable_on', '#tfc:bush_plantable_on');
	event.add('tfg:dry_plant_plantable_on', '#forge:sandstone');

	event.add('tfg:epiphyte_plantable_on', '#minecraft:logs');
	event.add('tfg:epiphyte_plantable_on', '#forge:stone');
	event.add('tfg:epiphyte_plantable_on', '#forge:sandstone');
	event.add('tfg:epiphyte_plantable_on', '#forge:gravel');

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

	event.add('tfc:can_be_snow_piled', 'firmalife:plant/basil');
	event.add('tfc:can_be_snow_piled', 'firmalife:plant/bay_laurel');
	event.add('tfc:can_be_snow_piled', 'firmalife:plant/cardamom');
	event.add('tfc:can_be_snow_piled', 'firmalife:plant/cilantro');
	event.add('tfc:can_be_snow_piled', 'firmalife:plant/cumin');
	event.add('tfc:can_be_snow_piled', 'firmalife:plant/oregano');
	event.add('tfc:can_be_snow_piled', 'firmalife:plant/pimento');
	event.add('tfc:can_be_snow_piled', 'firmalife:plant/vanilla');
	event.add('tfc:can_be_snow_piled', 'beneath:sulfur');

	event.removeAll('firmalife:butterfly_grass_mutants');
	event.add('firmalife:butterfly_grass_mutants', 'tfc:plant/bluegrass')
	event.add('firmalife:butterfly_grass_mutants', 'tfc:plant/bromegrass')
	event.add('firmalife:butterfly_grass_mutants', 'tfc:plant/fountain_grass')
	event.add('firmalife:butterfly_grass_mutants', 'tfc:plant/orchard_grass')
	event.add('firmalife:butterfly_grass_mutants', 'tfc:plant/pampas_grass')
	event.add('firmalife:butterfly_grass_mutants', 'tfc:plant/raddia_grass')
	event.add('firmalife:butterfly_grass_mutants', 'tfc:plant/ryegrass')
	event.add('firmalife:butterfly_grass_mutants', 'tfc:plant/scutch_grass')
	event.add('firmalife:butterfly_grass_mutants', 'tfc:plant/switchgrass')
	event.add('firmalife:butterfly_grass_mutants', 'tfc:plant/fall_fescue_grass')
	event.add('firmalife:butterfly_grass_mutants', 'tfc:plant/timothy_grass')
	event.add('firmalife:butterfly_grass_mutants', 'tfg:plant/red_oat_grass')

	event.add('tfc:kaolin_clay_replaceable', '#tfc:mud');

	event.add('tfc:powder_snow_replaceable', 'minecraft:snow_block');
	event.add('tfc:powder_snow_replaceable', 'minecraft:ice');
	event.add('tfc:powder_snow_replaceable', 'minecraft:packed_ice');
	event.add('tfc:powder_snow_replaceable', 'minecraft:blue_ice');
}

function registerTFGOverworldBiomeTags(event) {

	// Structures
	event.add('tfg:has_structure/plains_temperate_0', 'tfc:plains')
	event.add('tfg:has_structure/plains_temperate_0', 'tfc:plateau')
	event.add('tfg:has_structure/plains_temperate_0', 'tfc:highlands')

	event.add('tfg:has_structure/plains_temperate_0', 'tfg:earth/burren_plains')
	event.add('tfg:has_structure/plains_temperate_0', 'tfg:earth/burren_plateau')
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

	event.add('tfg:has_structure/illages', 'tfg:earth/burren_plains')
	event.add('tfg:has_structure/illages', 'tfg:earth/burren_plateau')
	event.add('tfg:has_structure/illages', 'tfg:earth/drumlins')
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

	event.add('tfc_ruins:has_structure/ruin_beach', 'tfg:earth/coastal_dunes')
	event.add('tfc_ruins:has_structure/ruin_beach', 'tfg:earth/embayments')
	event.add('tfc_ruins:has_structure/ruin_beach', 'tfg:earth/rocky_shores')
	event.add('tfc_ruins:has_structure/ruin_beach', 'tfg:earth/sea_stacks')
	event.add('tfc_ruins:has_structure/ruin_beach', 'tfg:earth/shield_volcano_shore')
	event.add('tfc_ruins:has_structure/ruin_beach', 'tfg:earth/shore')
	event.add('tfc_ruins:has_structure/ruin_beach', 'tfg:earth/terrace_lower')
	event.add('tfc_ruins:has_structure/ruin_beach', 'tfg:earth/tidal_flats')
	
	event.add('tfc_ruins:has_structure/ruin_rich', 'tfg:earth/highlands')
	event.add('tfc_ruins:has_structure/ruin_rich', 'tfg:earth/glacially_carved_mountains')
	event.add('tfc_ruins:has_structure/ruin_rich', 'tfg:earth/plateau')
	event.add('tfc_ruins:has_structure/ruin_rich', 'tfg:earth/old_mountains')
	event.add('tfc_ruins:has_structure/ruin_rich', 'tfg:earth/rolling_hills')

	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/badlands')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/burren_badlands')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/burren_plains')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/burren_plateau')
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
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/rolling_hills')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/setback_cliffs')
	event.add('tfc_ruins:has_structure/ruin_small', 'tfg:earth/stone_circles')
	
	event.add('tfc_ruined_world:has_structure/large_structure', 'tfg:earth/hills')
	event.add('tfc_ruined_world:has_structure/large_structure', 'tfg:earth/plateau')
	event.add('tfc_ruined_world:has_structure/large_structure', 'tfg:earth/plateau_wide')
	event.add('tfc_ruined_world:has_structure/large_structure', 'tfg:earth/plains')
	event.add('tfc_ruined_world:has_structure/large_structure', 'tfg:earth/drumlins')
	event.add('tfc_ruined_world:has_structure/large_structure', 'tfg:earth/mesas')
	event.add('tfc_ruined_world:has_structure/large_structure', 'tfg:earth/hoodoos')
	event.add('tfc_ruined_world:has_structure/large_structure', 'tfg:earth/patterned_ground')
	event.add('tfc_ruined_world:has_structure/large_structure', 'tfg:earth/inverted_patterned_ground')
	event.add('tfc_ruined_world:has_structure/large_structure', 'tfg:earth/knob_and_kettle')
	event.add('tfc_ruined_world:has_structure/large_structure', 'tfg:earth/mud_flats')
	event.add('tfc_ruined_world:has_structure/large_structure', 'tfg:earth/salt_flats')
	
	event.add('tfc_ruined_world:has_structure/small_structure', '#tfc:ruined_world:has_structure/large_structure')
	event.add('tfc_ruined_world:has_structure/small_structure', 'tfg:earth/old_mountains')
	event.add('tfc_ruined_world:has_structure/small_structure', 'tfg:earth/glacially_carved_mountains')

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
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/shilin_highlands");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/shilin_plateau");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/active_shield_volcano");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/dormant_shield_volcano");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/extinct_shield_volcano");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/ancient_shield_volcano");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/ice_sheet_shield_volcano");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/glaciated_shield_volcano");
	event.add("tfc:kaolin_clay_spawns_in", "tfg:earth/sunken_shield_volcano");

	global.TFC_BIOMES.forEach(biome => {
		event.add('tfg:overworld_biomes', biome);
	})
	global.NEW_TFC_BIOMES.forEach(biome => {
		event.add('tfg:overworld_biomes', biome);
	})

	event.add('waves:has_waves', '#tfg:earth/is_ocean');
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
	event.add("tfc:feature/crops", "tfg:earth/radish_patch");
	event.add("tfc:feature/crops", "tfg:earth/lentil_patch");
	event.add("tfc:feature/crops", "tfg:earth/cucumber_patch");
	// Herbs and spices
	event.add("tfc:feature/crops", "tfg:earth/basil_patch");
	event.add("tfc:feature/crops", "tfg:earth/bay_laurel_patch");
	event.add("tfc:feature/crops", "tfg:earth/cardamom_patch");
	event.add("tfc:feature/crops", "tfg:earth/cilantro_patch");
	event.add("tfc:feature/crops", "tfg:earth/cumin_patch");
	event.add("tfc:feature/crops", "tfg:earth/oregano_patch");
	event.add("tfc:feature/crops", "tfg:earth/pimento_patch");
	event.add("tfc:feature/crops", "tfg:earth/vanilla_patch");
	// TODO: add mustard

	// Other decoration
	// Old worldgen
	event.add("tfc:in_biome/underground_decoration", "tfg:glow_lichen");
	event.add("tfc:in_biome/underground_decoration", "tfg:earth/sulfur_patch");
	event.add("tfc:in_biome/underground_decoration", "tfg:earth/oil_spout");
	event.add("tfc:in_biome/underground_decoration", "tfg:earth/flint_patch");
	event.add("tfc:in_biome/underground_decoration", "tfg:earth/sand");
	// New worldgen
	event.add("tfg:in_biome/underground_decoration", "tfg:glow_lichen");
	event.add("tfg:in_biome/underground_decoration", "tfg:earth/sulfur_patch");
	event.add("tfg:in_biome/underground_decoration", "tfg:earth/oil_spout");
	event.add("tfg:in_biome/underground_decoration", "tfg:earth/flint_patch");
	event.add("tfg:in_biome/underground_decoration", "tfg:earth/sand");

	// Volcanoes
	event.add("tfg:feature/volcanoes", "tfg:earth/volcano/random_cinder_cone");

	event.add("tfg:feature/tuyas", "tfg:earth/volcano/tuya_smoke");
	event.add("tfg:feature/tuyas", "tfg:earth/volcano/tuya_sulfur_patch");
	event.add("tfg:feature/tuyas", "tfg:earth/volcano/tuya_ash_pile");

	event.add("tfg:feature/shield_volcanoes", "tfg:earth/volcano/sulfur_patch");
	event.add("tfg:feature/shield_volcanoes", "tfg:earth/volcano/volcanic_ash_pile");
	event.add("tfg:in_biome/surface_decoration/active_shield_volcano", "tfg:earth/volcano/volcano_smoke_random");

	// Fluid veins
	event.add("tfc:in_biome/underground_structures", "tfg:earth/fluid_vein/oil_spout_and_sands");
	event.add("tfc:in_biome/underground_structures", "tfg:earth/fluid_vein/random_active_hot_spring");
	event.add("tfc:in_biome/underground_structures", "tfg:earth/fluid_vein/oil_ocean");
	event.add("tfc:in_biome/underground_structures", "tfg:earth/fluid_vein/oil_light_ocean");
	event.add("tfc:in_biome/underground_structures", "tfg:earth/fluid_vein/oil_medium_ocean");
	event.add("tfc:in_biome/underground_structures", "tfg:earth/fluid_vein/oil_heavy_ocean");
	// Remove hot springs from old worldgen biomes
	event.remove("tfc:in_biome/large_features/old_mountains", "tfc:random_active_hot_spring")
	event.remove("tfc:in_biome/large_features/volcanic_mountains", "tfc:random_active_hot_spring")
	event.remove("tfc:in_biome/large_features/canyons", "tfc:random_active_hot_spring")
}