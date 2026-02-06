"use strict";

const registerRnrItemTags = (event) => {

	global.RNR_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	});
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