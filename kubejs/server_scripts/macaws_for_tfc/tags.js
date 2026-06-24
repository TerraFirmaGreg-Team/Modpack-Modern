// priority: 0
"use strict";

function registerMacawsForTFCItemTags(event) {
	global.MINECRAFT_DYE_NAMES.forEach(color => {
		event.remove(`mcw_tfc_aio:${color}_roofs`, `mcw_tfc_aio:roofs/${color}_roofs/${color}_roof_slab`);
	})

	// Fence Gates
	global.TFC_WOOD_TYPES.forEach(wood => {
		event.add('minecraft:fence_gates', `mcw_tfc_aio:fences/${wood}_fences/${wood}_highley_gate`)
		event.add('minecraft:fence_gates', `mcw_tfc_aio:fences/${wood}_fences/${wood}_pyramid_gate`)

		event.add('mcw_tfc_aio:bridges', `mcw_tfc_aio:bridges/${wood}_bridges/${wood}_bridge_pier`)
		event.add('mcw_tfc_aio:bridges', `mcw_tfc_aio:bridges/${wood}_bridges/${wood}_log_bridge_middle`)
		event.add('mcw_tfc_aio:bridges', `mcw_tfc_aio:bridges/${wood}_bridges/${wood}_log_bridge_stair`)
		event.add('mcw_tfc_aio:bridges', `mcw_tfc_aio:bridges/${wood}_bridges/${wood}_rail_bridge`)
		event.add('mcw_tfc_aio:bridges', `mcw_tfc_aio:bridges/${wood}_bridges/rope_${wood}_bridge`)
		event.add('mcw_tfc_aio:bridges', `mcw_tfc_aio:bridges/${wood}_bridges/${wood}_rope_bridge_stair`)
	})

	// Bridges
	event.add('mcw_tfc_aio:bridges', `mcw_tfc_aio:bridges/brick_bridges/brick_bridge_pier`)
	event.add('mcw_tfc_aio:bridges', `mcw_tfc_aio:bridges/brick_bridges/brick_bridge`)
	event.add('mcw_tfc_aio:bridges', `mcw_tfc_aio:bridges/brick_bridges/brick_bridge_stair`)
	event.add('mcw_tfc_aio:bridges', `mcw_tfc_aio:bridges/bamboo_bridges/bamboo_bridge_pier`)
	event.add('mcw_tfc_aio:bridges', `mcw_tfc_aio:bridges/bamboo_bridges/bamboo_bridge`)
	event.add('mcw_tfc_aio:bridges', `mcw_tfc_aio:bridges/bamboo_bridges/bamboo_bridge_stair`)
	event.add('mcw_tfc_aio:bridges', `mcw_tfc_aio:bridges/bamboo_bridges/dry_bamboo_bridge_pier`)
	event.add('mcw_tfc_aio:bridges', `mcw_tfc_aio:bridges/bamboo_bridges/dry_bamboo_bridge`)
	event.add('mcw_tfc_aio:bridges', `mcw_tfc_aio:bridges/bamboo_bridges/dry_bamboo_bridge_stair`)
	event.add('mcw_tfc_aio:bridges', 'mcw_tfc_aio:bridges/iron_bridges/iron_bridge')
	event.add('mcw_tfc_aio:bridges', 'mcw_tfc_aio:bridges/iron_bridges/iron_bridge_pier')
	event.add('mcw_tfc_aio:bridges', 'mcw_tfc_aio:bridges/iron_bridges/iron_bridge_stair')

	// Roofs
	const ROOF_TYPES = [
		'_attic_roof',
		'_lower_roof',
		'_roof',
		'_steep_roof',
		'_top_roof',
		'_upper_lower_roof',
		'_upper_steep_roof'
	]

	global.TFC_WOOD_TYPES.forEach(wood => {
		ROOF_TYPES.forEach(type => {
			event.add('mcw_tfc_aio:roofs', `mcw_tfc_aio:roofs/${wood}_roofs/${wood}_planks${type}`)
			event.add('mcw_tfc_aio:roofs', `mcw_tfc_aio:roofs/${wood}_roofs/${wood}${type}`)
		})
	})

	global.MINECRAFT_DYE_NAMES.forEach(color => {
		ROOF_TYPES.forEach(type => {
			event.add('mcw_tfc_aio:roofs', `mcw_tfc_aio:roofs/${color}_roofs/${color}${type}`)
			event.add('mcw_tfc_aio:roofs', `mcw_tfc_aio:roofs/${color}_concrete_roofs/${color}_concrete${type}`)
			event.add('mcw_tfc_aio:roofs', `mcw_tfc_aio:roofs/${color}_terracotta_roofs/${color}_terracotta${type}`)
		})
	})

	ROOF_TYPES.forEach(type => {
		event.add('mcw_tfc_aio:roofs', `mcw_tfc_aio:roofs/brick_roofs/bricks${type}`)
		event.add('mcw_tfc_aio:roofs', `mcw_tfc_aio:roofs/thatch_roofs/thatch${type}`)
		event.add('mcw_tfc_aio:roofs', `mcw_tfc_aio:roofs/thatch2_roofs/thatch2${type}`)
	})

	// Gutters & Awnings

	global.MINECRAFT_DYE_NAMES.forEach(color => {
		event.add('mcw_tfc_aio:gutters', `mcw_tfc_aio:roofs/gutters/gutter_base_${color}`)
		event.add('mcw_tfc_aio:gutters', `mcw_tfc_aio:roofs/gutters/gutter_middle_${color}`)

		event.add('mcw_tfc_aio:awnings', `mcw_tfc_aio:roofs/awnings/${color}_striped_awning`)
	})

	event.add('mcw_tfc_aio:gutters', `mcw_tfc_aio:roofs/gutters/gutter_base`)
	event.add('mcw_tfc_aio:gutters', `mcw_tfc_aio:roofs/gutters/gutter_middle`)

	// Furniture

	const FURNITURE_TYPES = [
		'_wardrobe',
		'_chair',
		'_modern_wardrobe',
		'_double_wardrobe',
		'_bookshelf',
		'_bookshelf_cupboard',
		'_drawer',
		'_double_drawer',
		'_bookshelf_drawer',
		'_lower_bookshelf_drawer',
		'_large_drawer',
		'_lower_triple_drawer',
		'_triple_drawer',
		'_desk',
		'_covered_desk',
		'_modern_desk',
		'_table',
		'_end_table',
		'_coffee_table',
		'_glass_table',
		'_modern_chair',
		'_striped_chair',
		'_stool_chair',
		'_counter',
		'_drawer_counter',
		'_double_drawer_counter',
		'_cupboard_counter'
	]

	global.TFC_WOOD_TYPES.forEach(wood => {
		FURNITURE_TYPES.forEach(type => {
			event.add('mcw_tfc_aio:furniture', `mcw_tfc_aio:furniture/${wood}_furniture/${wood}${type}`)
			event.add('mcw_tfc_aio:stripped_furniture', `mcw_tfc_aio:furniture/${wood}_furniture/stripped_${wood}${type}`)
		})
	})
}

function registerMacawsBlockTags(event) {
    addAll(event, 'mcw_tfc_aio:attic_roofs', [
        'mcw_tfc_aio:roofs/acacia_roofs/acacia_attic_roof',
        'mcw_tfc_aio:roofs/acacia_roofs/acacia_planks_attic_roof',
        'mcw_tfc_aio:roofs/ash_roofs/ash_attic_roof',
        'mcw_tfc_aio:roofs/ash_roofs/ash_planks_attic_roof',
        'mcw_tfc_aio:roofs/aspen_roofs/aspen_attic_roof',
        'mcw_tfc_aio:roofs/aspen_roofs/aspen_planks_attic_roof',
        'mcw_tfc_aio:roofs/base_roofs/base_attic_roof',
        'mcw_tfc_aio:roofs/birch_roofs/birch_attic_roof',
        'mcw_tfc_aio:roofs/birch_roofs/birch_planks_attic_roof',
        'mcw_tfc_aio:roofs/black_concrete_roofs/black_concrete_attic_roof',
        'mcw_tfc_aio:roofs/black_roofs/black_attic_roof',
        'mcw_tfc_aio:roofs/black_terracotta_roofs/black_terracotta_attic_roof',
        'mcw_tfc_aio:roofs/blackwood_roofs/blackwood_attic_roof',
        'mcw_tfc_aio:roofs/blackwood_roofs/blackwood_planks_attic_roof',
        'mcw_tfc_aio:roofs/blue_concrete_roofs/blue_concrete_attic_roof',
        'mcw_tfc_aio:roofs/blue_terracotta_roofs/blue_terracotta_attic_roof',
        'mcw_tfc_aio:roofs/brick_roofs/bricks_attic_roof',
        'mcw_tfc_aio:roofs/brown_concrete_roofs/brown_concrete_attic_roof',
        'mcw_tfc_aio:roofs/brown_terracotta_roofs/brown_terracotta_attic_roof',
        'mcw_tfc_aio:roofs/chestnut_roofs/chestnut_attic_roof',
        'mcw_tfc_aio:roofs/chestnut_roofs/chestnut_planks_attic_roof',
        'mcw_tfc_aio:roofs/cyan_concrete_roofs/cyan_concrete_attic_roof',
        'mcw_tfc_aio:roofs/cyan_terracotta_roofs/cyan_terracotta_attic_roof',
        'mcw_tfc_aio:roofs/douglas_fir_roofs/douglas_fir_attic_roof',
        'mcw_tfc_aio:roofs/douglas_fir_roofs/douglas_fir_planks_attic_roof',
        'mcw_tfc_aio:roofs/gray_concrete_roofs/gray_concrete_attic_roof',
        'mcw_tfc_aio:roofs/gray_roofs/gray_attic_roof',
        'mcw_tfc_aio:roofs/gray_terracotta_roofs/gray_terracotta_attic_roof',
        'mcw_tfc_aio:roofs/green_concrete_roofs/green_concrete_attic_roof',
        'mcw_tfc_aio:roofs/green_terracotta_roofs/green_terracotta_attic_roof',
        'mcw_tfc_aio:roofs/hickory_roofs/hickory_attic_roof',
        'mcw_tfc_aio:roofs/hickory_roofs/hickory_planks_attic_roof',
        'mcw_tfc_aio:roofs/kapok_roofs/kapok_attic_roof',
        'mcw_tfc_aio:roofs/kapok_roofs/kapok_planks_attic_roof',
        'mcw_tfc_aio:roofs/light_blue_concrete_roofs/light_blue_concrete_attic_roof',
        'mcw_tfc_aio:roofs/light_blue_terracotta_roofs/light_blue_terracotta_attic_roof',
        'mcw_tfc_aio:roofs/light_gray_concrete_roofs/light_gray_concrete_attic_roof',
        'mcw_tfc_aio:roofs/light_gray_roofs/light_gray_attic_roof',
        'mcw_tfc_aio:roofs/light_gray_terracotta_roofs/light_gray_terracotta_attic_roof',
        'mcw_tfc_aio:roofs/lime_concrete_roofs/lime_concrete_attic_roof',
        'mcw_tfc_aio:roofs/lime_terracotta_roofs/lime_terracotta_attic_roof',
        'mcw_tfc_aio:roofs/magenta_concrete_roofs/magenta_concrete_attic_roof',
        'mcw_tfc_aio:roofs/magenta_terracotta_roofs/magenta_terracotta_attic_roof',
        'mcw_tfc_aio:roofs/mangrove_roofs/mangrove_attic_roof',
        'mcw_tfc_aio:roofs/mangrove_roofs/mangrove_planks_attic_roof',
        'mcw_tfc_aio:roofs/maple_roofs/maple_attic_roof',
        'mcw_tfc_aio:roofs/maple_roofs/maple_planks_attic_roof',
        'mcw_tfc_aio:roofs/oak_roofs/oak_attic_roof',
        'mcw_tfc_aio:roofs/oak_roofs/oak_planks_attic_roof',
        'mcw_tfc_aio:roofs/orange_concrete_roofs/orange_concrete_attic_roof',
        'mcw_tfc_aio:roofs/orange_terracotta_roofs/orange_terracotta_attic_roof',
        'mcw_tfc_aio:roofs/palm_roofs/palm_attic_roof',
        'mcw_tfc_aio:roofs/palm_roofs/palm_planks_attic_roof',
        'mcw_tfc_aio:roofs/pine_roofs/pine_attic_roof',
        'mcw_tfc_aio:roofs/pine_roofs/pine_planks_attic_roof',
        'mcw_tfc_aio:roofs/pink_concrete_roofs/pink_concrete_attic_roof',
        'mcw_tfc_aio:roofs/pink_terracotta_roofs/pink_terracotta_attic_roof',
        'mcw_tfc_aio:roofs/purple_concrete_roofs/purple_concrete_attic_roof',
        'mcw_tfc_aio:roofs/purple_terracotta_roofs/purple_terracotta_attic_roof',
        'mcw_tfc_aio:roofs/red_concrete_roofs/red_concrete_attic_roof',
        'mcw_tfc_aio:roofs/red_terracotta_roofs/red_terracotta_attic_roof',
        'mcw_tfc_aio:roofs/rosewood_roofs/rosewood_attic_roof',
        'mcw_tfc_aio:roofs/rosewood_roofs/rosewood_planks_attic_roof',
        'mcw_tfc_aio:roofs/sequoia_roofs/sequoia_attic_roof',
        'mcw_tfc_aio:roofs/sequoia_roofs/sequoia_planks_attic_roof',
        'mcw_tfc_aio:roofs/spruce_roofs/spruce_attic_roof',
        'mcw_tfc_aio:roofs/spruce_roofs/spruce_planks_attic_roof',
        'mcw_tfc_aio:roofs/sycamore_roofs/sycamore_attic_roof',
        'mcw_tfc_aio:roofs/sycamore_roofs/sycamore_planks_attic_roof',
        'mcw_tfc_aio:roofs/thatch_roofs/thatch_attic_roof',
        'mcw_tfc_aio:roofs/thatch2_roofs/thatch2_attic_roof',
        'mcw_tfc_aio:roofs/white_cedar_roofs/white_cedar_attic_roof',
        'mcw_tfc_aio:roofs/white_cedar_roofs/white_cedar_planks_attic_roof',
        'mcw_tfc_aio:roofs/white_concrete_roofs/white_concrete_attic_roof',
        'mcw_tfc_aio:roofs/white_roofs/white_attic_roof',
        'mcw_tfc_aio:roofs/white_terracotta_roofs/white_terracotta_attic_roof',
        'mcw_tfc_aio:roofs/willow_roofs/willow_attic_roof',
        'mcw_tfc_aio:roofs/willow_roofs/willow_planks_attic_roof',
        'mcw_tfc_aio:roofs/yellow_concrete_roofs/yellow_concrete_attic_roof',
        'mcw_tfc_aio:roofs/yellow_terracotta_roofs/yellow_terracotta_attic_roof',
    ]);

}