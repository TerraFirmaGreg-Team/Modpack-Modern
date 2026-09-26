// Priority: 0
"use strict";

function registerTFGMaterialBlocks(event) {
	// Stone anvils for beneath igneous rocks
	event.create('tfg:crackrack_anvil', 'tfc:anvil')
		.tier(0)
		.soundType('netherrack')
		.mapColor('crimson_stem')
		.noItem()
		.tagBlock('tfc:anvils')
		.tagBlock('minecraft:mineable/pickaxe')

	event.create('tfg:blackstone_anvil', 'tfc:anvil')
		.tier(0)
		.soundType('stone')
		.mapColor('color_black')
		.noItem()
		.tagBlock('tfc:anvils')
		.tagBlock('minecraft:mineable/pickaxe')

	// MV
	event.create('tfg:vanadium_steel_anvil', 'tfc:anvil')
		.tier(7)
		.soundType('anvil')
		.mapColor('ice')
		.tagBoth('tfc:anvils')
		.tagBlock('minecraft:mineable/pickaxe')

	// HV
	event.create('tfg:stainless_steel_anvil', 'tfc:anvil')
		.tier(8)
		.soundType('anvil')
		.mapColor('quartz')
		.tagBoth('tfc:anvils')
		.tagBlock('minecraft:mineable/pickaxe')

	// EV
	event.create('tfg:tungsten_anvil', 'tfc:anvil')
		.tier(9)
		.soundType('anvil')
		.mapColor('color_black')
		.tagBoth('tfc:anvils')
		.tagBlock('minecraft:mineable/pickaxe')
}