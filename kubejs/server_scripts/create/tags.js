// priority: 0
"use strict";

const registerCreateItemTags = (event) => {

	// Удаление тегов у отключенных предметов
	global.CREATE_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	// This is greate's fault
	event.remove('c:hidden_from_recipe_viewers', 'create:copper_sheet')
	event.remove('c:hidden_from_recipe_viewers', 'create:brass_sheet')
	event.remove('c:hidden_from_recipe_viewers', 'create:golden_sheet')
	event.remove('c:hidden_from_recipe_viewers', 'create:crushed_raw_gold')
	event.remove('c:hidden_from_recipe_viewers', 'create:crushed_raw_copper')
	event.remove('c:hidden_from_recipe_viewers', 'create:crushed_raw_zinc')
	event.remove('c:hidden_from_recipe_viewers', 'create:crushed_raw_tin')
	event.remove('c:hidden_from_recipe_viewers', 'create:crushed_raw_silver')
	event.remove('c:hidden_from_recipe_viewers', 'create:crushed_raw_lead')
	event.remove('c:hidden_from_recipe_viewers', 'create:powdered_obsidian')

	// Create metal bars weren't metal bars :(
	event.add('tfg:metal_bars', 'create:andesite_bars')
	event.add('tfg:metal_bars', 'create:brass_bars')
	event.add('tfg:metal_bars', 'create:copper_bars')

	// Тэги для ручек и сидушек
	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		event.add('tfg:colored_valve_handles', `create:${dye}_valve_handle`)

		if (dye !== 'white') event.add('tfg:colored_seats', `create:${dye}_seat`)
	})

	event.removeAll('create:crushed_raw_materials')

	event.add('create:blaze_burner_fuel/regular', "gtceu:poor_raw_coal")
	event.add('create:blaze_burner_fuel/regular', "gtceu:coal_dust")
	event.add('create:blaze_burner_fuel/regular', "gtceu:charcoal_dust")
	event.add('create:blaze_burner_fuel/regular', "gtceu:raw_coal")
	event.add('create:blaze_burner_fuel/regular', "gtceu:rich_raw_coal")
	event.add('create:blaze_burner_fuel/regular', "gtceu:flawed_coal_gem")
	event.add('create:blaze_burner_fuel/regular', "gtceu:chipped_coal_gem")
	event.add('create:blaze_burner_fuel/regular', "gtceu:pure_coal_dust")

	event.add('create:blaze_burner_fuel/special', "gtceu:flawless_coal_gem")
	event.add('create:blaze_burner_fuel/special', "gtceu:exquisite_coal_gem")
	event.add('create:blaze_burner_fuel/special', "gtceu:coke_gem")
	event.add('create:blaze_burner_fuel/special', "beneath:cursecoal")

	event.add('create:non_movable', 'gtceu:wood_crate')
	event.add('create:non_movable', 'gtceu:bronze_crate')
	event.add('create:non_movable', 'gtceu:black_bronze_crate')
	event.add('create:non_movable', 'gtceu:bismuth_bronze_crate')
	event.add('create:non_movable', 'gtceu:steel_crate')
	event.add('create:non_movable', 'gtceu:aluminium_crate')
	event.add('create:non_movable', 'gtceu:stainless_steel_crate')
	event.add('create:non_movable', 'gtceu:titanium_crate')
	event.add('create:non_movable', 'gtceu:tungsten_steel_crate')
	event.add('create:non_movable', '#create:toolboxes')
	event.add('create:non_movable', 'gtceu:ulv_super_chest')
	event.add('create:non_movable', 'gtceu:lv_super_chest')
	event.add('create:non_movable', 'gtceu:mv_super_chest')
	event.add('create:non_movable', 'gtceu:hv_super_chest')
	event.add('create:non_movable', 'gtceu:ev_super_chest')
	event.add('create:non_movable', 'gtceu:iv_quantum_chest')
	event.add('create:non_movable', 'gtceu:luv_quantum_chest')
	event.add('create:non_movable', 'gtceu:zpm_quantum_chest')
	event.add('create:non_movable', 'gtceu:uv_quantum_chest')
	event.add('create:non_movable', 'gtceu:uhv_quantum_chest')
	event.add('create:non_movable', 'gtceu:ulv_super_tank')
	event.add('create:non_movable', 'gtceu:lv_super_tank')
	event.add('create:non_movable', 'gtceu:mv_super_tank')
	event.add('create:non_movable', 'gtceu:hv_super_tank')
	event.add('create:non_movable', 'gtceu:ev_super_tank')
	event.add('create:non_movable', 'gtceu:iv_quantum_tank')
	event.add('create:non_movable', 'gtceu:luv_quantum_tank')
	event.add('create:non_movable', 'gtceu:zpm_quantum_tank')
	event.add('create:non_movable', 'gtceu:uv_quantum_tank')
	event.add('create:non_movable', 'gtceu:uhv_quantum_tank')
	event.add('create:non_movable', 'tfg:spice')
	event.add('create:non_movable', 'tfg:geyser_source')
	event.add('create:non_movable', 'tfg:geyser_source_small')
	event.add('create:non_movable', '#tfc:can_landslide')

	event.remove('create:stone_types/deepslate', 'minecraft:deepslate')
	event.remove('create:stone_types/dripstone', 'minecraft:dripstone_block')
	event.remove('create:stone_types/blackstone', 'minecraft:blackstone')

	event.add('forge:smooth_stone_slab', 'create:polished_cut_granite_slab')
	event.add('forge:smooth_stone_slab', 'create:polished_cut_diorite_slab')
	event.add('forge:smooth_stone_slab', 'create:polished_cut_andesite_slab')
	event.add('forge:smooth_stone_slab', 'create:polished_cut_calcite_slab')
	event.add('forge:smooth_stone_slab', 'create:polished_cut_dripstone_slab')
	event.add('forge:smooth_stone_slab', 'create:polished_cut_deepslate_slab')
	event.add('forge:smooth_stone_slab', 'create:polished_cut_tuff_slab')
	event.add('forge:smooth_stone_slab', 'create:polished_cut_limestone_slab')
	event.add('forge:smooth_stone_slab', 'create:polished_cut_asurine_slab')
	event.add('forge:smooth_stone_slab', 'create:polished_cut_crimsite_slab')
	event.add('forge:smooth_stone_slab', 'create:polished_cut_ochrum_slab')
	event.add('forge:smooth_stone_slab', 'create:polished_cut_scoria_slab')
	event.add('forge:smooth_stone_slab', 'create:polished_cut_scorchia_slab')
	event.add('forge:smooth_stone_slab', 'create:polished_cut_veridium_slab')
}

const registerCreateBlockTags = (event) => {

	// Удаление тегов у отключенных предметов
	global.CREATE_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
	})

	// Тэги для ручек и сидушек
	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		event.add('tfg:colored_valve_handles', `create:${dye}_valve_handle`)

		if (dye !== 'white') event.add('tfg:colored_seats', `create:${dye}_seat`)
	})

	// Disable bulk blasting
	event.removeAll('create:fan_processing_catalysts/blasting')
	event.removeAll('create:fan_processing_catalysts/haunting')

	// Waters for bulk washing
	event.add('create:fan_processing_catalysts/splashing', 'tfc:fluid/river_water')
	event.add('create:fan_processing_catalysts/splashing', 'tfc:fluid/salt_water')
	event.add('create:fan_processing_catalysts/splashing', 'tfc:fluid/spring_water')
	event.add('create:fan_processing_catalysts/splashing', 'tfg:semiheavy_ammoniacal_water')

	event.add('create:chest_mounted_storage', '#forge:chests/wooden')
	event.add('create:chest_mounted_storage', 'framedblocks:framed_chest')

	event.removeAll('create:passive_boiler_heaters')

	event.remove('create:windmill_sails', 'create:sail_frame')
	
	event.add('create:non_movable', 'gtceu:wood_crate')
	event.add('create:non_movable', 'gtceu:bronze_crate')
	event.add('create:non_movable', 'gtceu:black_bronze_crate')
	event.add('create:non_movable', 'gtceu:bismuth_bronze_crate')
	event.add('create:non_movable', 'gtceu:steel_crate')
	event.add('create:non_movable', 'gtceu:aluminium_crate')
	event.add('create:non_movable', 'gtceu:stainless_steel_crate')
	event.add('create:non_movable', 'gtceu:titanium_crate')
	event.add('create:non_movable', 'gtceu:tungsten_steel_crate')
	event.add('create:non_movable', '#create:toolboxes')
	event.add('create:non_movable', 'gtceu:ulv_super_chest')
	event.add('create:non_movable', 'gtceu:lv_super_chest')
	event.add('create:non_movable', 'gtceu:mv_super_chest')
	event.add('create:non_movable', 'gtceu:hv_super_chest')
	event.add('create:non_movable', 'gtceu:ev_super_chest')
	event.add('create:non_movable', 'gtceu:iv_quantum_chest')
	event.add('create:non_movable', 'gtceu:luv_quantum_chest')
	event.add('create:non_movable', 'gtceu:zpm_quantum_chest')
	event.add('create:non_movable', 'gtceu:uv_quantum_chest')
	event.add('create:non_movable', 'gtceu:uhv_quantum_chest')
	event.add('create:non_movable', 'gtceu:ulv_super_tank')
	event.add('create:non_movable', 'gtceu:lv_super_tank')
	event.add('create:non_movable', 'gtceu:mv_super_tank')
	event.add('create:non_movable', 'gtceu:hv_super_tank')
	event.add('create:non_movable', 'gtceu:ev_super_tank')
	event.add('create:non_movable', 'gtceu:iv_quantum_tank')
	event.add('create:non_movable', 'gtceu:luv_quantum_tank')
	event.add('create:non_movable', 'gtceu:zpm_quantum_tank')
	event.add('create:non_movable', 'gtceu:uv_quantum_tank')
	event.add('create:non_movable', 'gtceu:uhv_quantum_tank')
	event.add('create:non_movable', 'tfg:spice')
	event.add('create:non_movable', 'tfg:geyser_source')
	event.add('create:non_movable', 'tfg:geyser_source_small')
}


const registerCreateFluidTags = (event) => {

	//Hose Pulley Infinites
	event.add('create:bottomless/allow', 'tfc:fresh_water')
	event.add('create:bottomless/allow', 'tfc:salt_water')
	event.add('create:bottomless/allow', 'tfg:semiheavy_ammoniacal_water')
	event.remove('create:bottomless/allow', 'minecraft:lava')

	// Добавляем тег для скрытия в EMI
	event.add('c:hidden_from_recipe_viewers', 'create:chocolate')
	event.add('c:hidden_from_recipe_viewers', 'create:honey')
	event.add('c:hidden_from_recipe_viewers', 'create:builders_tea')
	event.add('c:hidden_from_recipe_viewers', 'create:potion')

	// Disable bulk blasting
	event.removeAll('create:fan_processing_catalysts/blasting')
	event.removeAll('create:fan_processing_catalysts/haunting')
	
	// Waters for bulk washing
	event.add('create:fan_processing_catalysts/splashing', 'tfc:river_water')
	event.add('create:fan_processing_catalysts/splashing', 'tfc:salt_water')
	event.add('create:fan_processing_catalysts/splashing', 'tfc:spring_water')
	event.add('create:fan_processing_catalysts/splashing', 'tfg:semiheavy_ammoniacal_water')
}
