"use strict";

const registerRnrItemTags = (event) => {

	global.RNR_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	});

	global.TFC_WOOD_TYPES.forEach(wood => {
		event.add('rnr:shingles', `rnr:wood/shingle/${wood}`)
		event.add('rnr:roof_blocks', `rnr:wood/shingles/${wood}`)
		event.add('rnr:roof_blocks', `rnr:wood/shingles/${wood}_stairs`)
		event.add('rnr:roof_blocks', `rnr:wood/shingles/${wood}_slab`)
	})

	global.AFC_WOOD_TYPES.forEach(wood => {
		event.add('rnr:shingles', `rnr:wood/shingle/${wood}`)
		event.add('rnr:roof_blocks', `rnr:wood/shingles/${wood}`)
		event.add('rnr:roof_blocks', `rnr:wood/shingles/${wood}_stairs`)
		event.add('rnr:roof_blocks', `rnr:wood/shingles/${wood}_slab`)
	})

	event.add('rnr:shingles', `rnr:unfired_terracotta_roof_tile`)
	event.add('rnr:shingles', `rnr:terracotta_roof_tile`)
	event.add('rnr:shingles', `rnr:unfired_roof_tile`)
	event.add('rnr:shingles', `rnr:ceramic_roof_tile`)

	event.add('rnr:roof_blocks', `rnr:roof_frame`)
	event.add('rnr:roof_blocks', `rnr:roof_frame_stairs`)
	event.add('rnr:roof_blocks', `rnr:roof_frame_slab`)
	event.add('rnr:roof_blocks', `rnr:thatch_roof`)
	event.add('rnr:roof_blocks', `rnr:thatch_roof_stairs`)
	event.add('rnr:roof_blocks', `rnr:thatch_roof_slab`)
	event.add('rnr:roof_blocks', `rnr:terracotta_roof`)
	event.add('rnr:roof_blocks', `rnr:terracotta_roof_stairs`)
	event.add('rnr:roof_blocks', `rnr:terracotta_roof_slab`)
	event.add('rnr:roof_blocks', `rnr:ceramic_roof`)
	event.add('rnr:roof_blocks', `rnr:ceramic_roof_stairs`)
	event.add('rnr:roof_blocks', `rnr:ceramic_roof_slab`)

	global.TFC_STONE_TYPES.forEach(stone => {
		event.add('rnr:cobbled_roads', `rnr:rock/cobbled_road/${stone}`)
		event.add('rnr:cobbled_roads', `rnr:rock/cobbled_road/${stone}_stairs`)
		event.add('rnr:cobbled_roads', `rnr:rock/cobbled_road/${stone}_slab`)

		event.add('rnr:sett_roads', `rnr:rock/sett_road/${stone}`)
		event.add('rnr:sett_roads', `rnr:rock/sett_road/${stone}_stairs`)
		event.add('rnr:sett_roads', `rnr:rock/sett_road/${stone}_slab`)

		event.add('rnr:flagstone_roads', `rnr:rock/flagstones/${stone}`)
		event.add('rnr:flagstone_roads', `rnr:rock/flagstones/${stone}_stairs`)
		event.add('rnr:flagstone_roads', `rnr:rock/flagstones/${stone}_slab`)

		event.add('rnr:gravel_roads', `rnr:rock/gravel_road/${stone}`)
		event.add('rnr:gravel_roads', `rnr:rock/gravel_road/${stone}_stairs`)
		event.add('rnr:gravel_roads', `rnr:rock/gravel_road/${stone}_slab`)
		event.add('rnr:gravel_roads', `rnr:rock/over_height_gravel/${stone}`)

		event.add('rnr:macadam_roads', `rnr:rock/macadam_road/${stone}`)
		event.add('rnr:macadam_roads', `rnr:rock/macadam_road/${stone}_stairs`)
		event.add('rnr:macadam_roads', `rnr:rock/macadam_road/${stone}_slab`)
	})

	global.SAND_COLORS.forEach(color => {
		event.add('rnr:flagstone_roads', `rnr:${color}_sandstone_flagstones`)
		event.add('rnr:flagstone_roads', `rnr:${color}_sandstone_flagstones_stairs`)
		event.add('rnr:flagstone_roads', `rnr:${color}_sandstone_flagstones_slab`)
	})

	event.add('rnr:sett_roads', `rnr:brick_road`)
	event.add('rnr:sett_roads', `rnr:brick_road_slab`)
	event.add('rnr:sett_roads', `rnr:brick_road_stairs`)
	
	event.add('rnr:concrete_roads', `rnr:concrete_road`)
	event.add('rnr:concrete_roads', `rnr:concrete_road_control_joint`)
	event.add('rnr:concrete_roads', `rnr:cracked_concrete_road`)
	event.add('rnr:concrete_roads', `rnr:trodden_concrete_road`)
	event.add('rnr:concrete_roads', `rnr:cracked_trodden_concrete_road`)
	event.add('rnr:concrete_roads', `rnr:concrete_road_panel`)
	event.add('rnr:concrete_roads', `rnr:concrete_road_sett`)
	event.add('rnr:concrete_roads', `rnr:concrete_road_flagstones`)

	event.add('rnr:concrete_roads', `rnr:concrete_road_stairs`)
	event.add('rnr:concrete_roads', `rnr:cracked_concrete_road_stairs`)
	event.add('rnr:concrete_roads', `rnr:trodden_concrete_road_stairs`)
	event.add('rnr:concrete_roads', `rnr:cracked_trodden_concrete_road_stairs`)
	event.add('rnr:concrete_roads', `rnr:concrete_road_panel_stairs`)
	event.add('rnr:concrete_roads', `rnr:concrete_road_sett_stairs`)
	event.add('rnr:concrete_roads', `rnr:concrete_road_flagstones_stairs`)

	event.add('rnr:concrete_roads', `rnr:concrete_road_slab`)
	event.add('rnr:concrete_roads', `rnr:cracked_concrete_road_slab`)
	event.add('rnr:concrete_roads', `rnr:trodden_concrete_road_slab`)
	event.add('rnr:concrete_roads', `rnr:cracked_trodden_concrete_road_slab`)
	event.add('rnr:concrete_roads', `rnr:concrete_road_panel_slab`)
	event.add('rnr:concrete_roads', `rnr:concrete_road_sett_slab`)
	event.add('rnr:concrete_roads', `rnr:concrete_road_flagstones_slab`)
};

function registerRnrBlockTags(event) {
	
	global.TFC_WOOD_TYPES.forEach(wood => {
		event.add('minecraft:mineable/axe', `rnr:wood/shingles/${wood}`)
		event.add('minecraft:mineable/axe', `rnr:wood/shingles/${wood}_stairs`)
		event.add('minecraft:mineable/axe', `rnr:wood/shingles/${wood}_slab`)
	});

	global.AFC_WOOD_TYPES.forEach(wood => {
		event.add('minecraft:mineable/axe', `rnr:wood/shingles/${wood}`)
		event.add('minecraft:mineable/axe', `rnr:wood/shingles/${wood}_stairs`)
		event.add('minecraft:mineable/axe', `rnr:wood/shingles/${wood}_slab`)
	});

	event.add('minecraft:mineable/hoe', `rnr:thatch_roof`)
	event.add('minecraft:mineable/hoe', `rnr:thatch_roof_stairs`)
	event.add('minecraft:mineable/hoe', `rnr:thatch_roof_slab`)

	event.add('minecraft:mineable/pickaxe', `rnr:terracotta_roof`)
	event.add('minecraft:mineable/pickaxe', `rnr:terracotta_roof_stairs`)
	event.add('minecraft:mineable/pickaxe', `rnr:terracotta_roof_slab`)
	event.add('minecraft:mineable/pickaxe', `rnr:ceramic_roof`)
	event.add('minecraft:mineable/pickaxe', `rnr:ceramic_roof_stairs`)
	event.add('minecraft:mineable/pickaxe', `rnr:ceramic_roof_slab`)

}