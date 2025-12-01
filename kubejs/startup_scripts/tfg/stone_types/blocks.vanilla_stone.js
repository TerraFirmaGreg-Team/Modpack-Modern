"use strict";

function registerTFGVanillaStoneBlocks(event) {

	event.create(`tfg:rock/stone_wall`, 'wall')
			.soundType(global.STONE_CHARACS.reconstituted.sound)
			.textureAll('minecraft:block/stone')
			.tagBoth('tfg:rock_wall')
			.mapColor(global.STONE_CHARACS.reconstituted.mapColor)
			.tagBlock('minecraft:mineable/pickaxe')
			.fullBlock(true)
			.opaque(true)

	let SHAPES = ['stairs', 'wall']
	SHAPES.forEach(shape => {
		event.create(`tfg:rock/smooth_stone_${shape}`, shape)
			.soundType(global.STONE_CHARACS.reconstituted.sound)
			.textureAll('minecraft:block/smooth_stone')
			.tagBoth(`tfg:rock_${shape}s`.replace(/ss/g, 's'))
			.mapColor(global.STONE_CHARACS.reconstituted.mapColor)
			.tagBlock('minecraft:mineable/pickaxe')
			.fullBlock(true)
			.opaque(true)
	})

	SHAPES = ['stairs', 'slab', 'wall']
	SHAPES.forEach(shape => {
		event.create(`tfg:rock/cracked_bricks_stone_${shape}`, shape)
			.soundType(global.STONE_CHARACS.reconstituted.sound)
			.textureAll('minecraft:block/cracked_stone_bricks')
			.tagBoth(`tfg:brick_${shape}s`.replace(/ss/g, 's'))
			.mapColor(global.STONE_CHARACS.reconstituted.mapColor)
			.tagBlock('minecraft:mineable/pickaxe')
			.fullBlock(true)
			.opaque(true)
	})

	event.create('tfg:rock/quartz_wall', 'wall')
			.soundType('stone')
			.textureAll('minecraft:block/quartz_block_side')
			.tagBoth('tfg:rock_wall')
			.mapColor('snow')
			.tagBlock('minecraft:mineable/pickaxe')
			.fullBlock(true)
			.opaque(true)

	event.create('tfg:rock/smooth_quartz_wall', 'wall')
			.soundType('stone')
			.textureAll('minecraft:block/quartz_block_bottom')
			.tagBoth('tfg:rock_wall')
			.mapColor('snow')
			.tagBlock('minecraft:mineable/pickaxe')
			.fullBlock(true)
			.opaque(true)

}