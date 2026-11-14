"use strict";

function registerTFGWorldGenEarthDecoBlocks(event) {

	global.TFC_EQUIPMENT_METALS.forEach(metal => {
		
		event.create(`tfg:groundcover/fallen_${metal}_lamp`, 'tfc:ground_cover')
			.box(4,0,4,12, 6,12)
			.soundType('metal')
			.groundCoverModelShape('fallen_lamp')
			.withPreexistingItem(`tfc:metal/unfinished_lamp/${metal}`)
			.texture('metal', `tfc:block/metal/smooth/${metal}`)
			.texture('particle', `tfc:block/metal/smooth/${metal}`)
	});
	
	event.create('tfg:rusted_pully', 'cardinal')
		.model('tfg:block/rusted_pulley')
		.renderType('cutout_mipped')
		.soundType('metal')
		.notSolid()
		.tagBlock('minecraft:mineable/axe')
		.tagBlock('minecraft:mineable/pickaxe')
		
	
	// Snow bricks
	event.create('tfg:snow_bricks')
		.textureAll('tfg:block/snow_bricks')
		.mapColor('snow')
		.soundType('snow')
		.tagBlock('minecraft:mineable/shovel')
		.hardness(0.6)
		.resistance(0.6)

	event.create('tfg:snow_brick_stairs', 'stairs')
		.textureAll('tfg:block/snow_bricks')
		.mapColor('snow')
		.soundType('snow')
		.tagBlock('minecraft:mineable/shovel')
		.hardness(0.6)
		.resistance(0.6)

	event.create('tfg:snow_brick_slab', 'slab')
		.textureAll('tfg:block/snow_bricks')
		.mapColor('snow')
		.soundType('snow')
		.tagBlock('minecraft:mineable/shovel')
		.hardness(0.6)
		.resistance(0.6)

	event.create('tfg:snow_brick_wall', 'wall')
		.textureAll('tfg:block/snow_bricks')
		.mapColor('snow')
		.soundType('snow')
		.tagBlock('minecraft:mineable/shovel')
		.hardness(0.6)
		.resistance(0.6)

	// Ice bricks
	event.create('tfg:packed_ice_bricks')
		.textureAll('tfg:block/packed_ice_bricks')
		.mapColor('ice')
		.soundType('glass')
		.tagBlock('minecraft:mineable/pickaxe')
		.requiresTool(true)
		.hardness(0.5)
		.resistance(0.5)
		.slipperiness(0.98)

	event.create('tfg:packed_ice_brick_stairs', 'stairs')
		.textureAll('tfg:block/packed_ice_bricks')
		.mapColor('ice')
		.soundType('glass')
		.tagBlock('minecraft:mineable/pickaxe')
		.requiresTool(true)
		.hardness(0.5)
		.resistance(0.5)
		.slipperiness(0.98)

	event.create('tfg:packed_ice_brick_slab', 'slab')
		.textureAll('tfg:block/packed_ice_bricks')
		.mapColor('ice')
		.soundType('glass')
		.tagBlock('minecraft:mineable/pickaxe')
		.requiresTool(true)
		.hardness(0.5)
		.resistance(0.5)
		.slipperiness(0.98)

	event.create('tfg:packed_ice_brick_wall', 'wall')
		.textureAll('tfg:block/packed_ice_bricks')
		.mapColor('ice')
		.soundType('glass')
		.tagBlock('minecraft:mineable/pickaxe')
		.requiresTool(true)
		.hardness(0.5)
		.resistance(0.5)
		.slipperiness(0.98)

	event.create('tfg:chiseled_packed_ice')
		.textureAll('tfg:block/chiseled_packed_ice')
		.mapColor('ice')
		.soundType('glass')
		.tagBlock('minecraft:mineable/pickaxe')
		.requiresTool(true)
		.hardness(0.5)
		.resistance(0.5)
		.slipperiness(0.98)
}