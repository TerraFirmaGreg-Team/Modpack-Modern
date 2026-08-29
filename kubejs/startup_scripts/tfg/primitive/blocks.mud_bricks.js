// priority: 0
"use strict";

function registerTFGMudBrickBlocks(event) {

	global.TFG_MUD_TYPES.forEach(dirt => {
		event.create(`tfg:mud_bricks/${dirt}`)
			.soundType('mud_bricks')
			.mapColor('dirt')
			.requiresTool(true)
			.hardness(2.6)
			.tagBlock('minecraft:mineable/shovel')
			.textureAll(`tfg:block/mud_bricks/${dirt}`)

		event.create(`tfg:mud_bricks/${dirt}_stairs`, 'stairs')
			.soundType('mud_bricks')
			.mapColor('dirt')
			.requiresTool(true)
			.hardness(2.6)
			.tagBlock('minecraft:mineable/shovel')
			.textureAll(`tfg:block/mud_bricks/${dirt}`)

		event.create(`tfg:mud_bricks/${dirt}_slab`, 'slab')
			.soundType('mud_bricks')
			.mapColor('dirt')
			.requiresTool(true)
			.hardness(2.6)
			.tagBlock('minecraft:mineable/shovel')
			.textureAll(`tfg:block/mud_bricks/${dirt}`)

		event.create(`tfg:mud_bricks/${dirt}_wall`, 'wall')
			.soundType('mud_bricks')
			.mapColor('dirt')
			.requiresTool(true)
			.hardness(2.6)
			.tagBlock('minecraft:mineable/shovel')
			.textureAll(`tfg:block/mud_bricks/${dirt}`)
	})
}