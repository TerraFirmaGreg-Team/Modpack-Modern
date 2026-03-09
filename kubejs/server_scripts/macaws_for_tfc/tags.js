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