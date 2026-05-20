"use strict";

function registerTFGWorldGenBeneathDecoBlocks(event) {

	event.create('tfg:mushroom_roots', 'tfg:decorative_plant')
		.soundType('nether_wart')
		.speedFactor(0.9)
		.tagItem('tfg:plants/beneath')

	event.create('tfg:mushroom_sprouts', 'tfg:decorative_plant')
		.soundType('nether_wart')
		.speedFactor(0.9)
		.tagItem('tfg:plants/beneath')

	event.create('tfg:charred_log')
		.fullBlock(true)
		.woodSoundType()
		.property(BlockProperties.AXIS)
		.tagBoth('minecraft:mineable/axe')
		.tagBoth('tfc:logs_that_log')
		.tagBoth('afc:logs_that_log')
		.tagBoth('minecraft:logs')
		.mapColor('black')

	event.create('tfg:pale_moss_block')
		.mapColor('glow_lichen')
		.hardness(0.1)
		.soundType('moss')
		.tagItem('createaddition:plants')
		.tagItem('tfc:compost_greens')
		.tagBlock('tfc:dirt')
		.tagItem('minecraft:dirt')
		.tagBlock('minecraft:mineable/hoe')
	
	event.create('tfg:pale_moss_carpet')
		.mapColor('glow_lichen')
		.hardness(0.1)
		.soundType('moss')
		.box(0, 0, 0, 16, 1, 16)
		.tagItem('tfc:compost_greens_low')
		.tagBlock('minecraft:mineable/hoe')
		
	event.create('betterend:nightshade_moss', 'tfg:attached_decorative_plant')
		.soundType('crop')
		.tagBoth('tfg:plants/beneath')
		.tagBlock('minecraft:replaceable')
		.lightLevel(0.85)

	event.create('betterend:murkweed', 'tfg:decorative_plant')
		.soundType('crop')
		.mapColor('color_black')
		.effect('minecraft:darkness')
		.speedFactor(0.5)
		.tagItem('tfg:plants/beneath')

	event.create('betterend:needlegrass', 'tfg:decorative_plant')
		.soundType('crop')
		.mapColor('color_black')
		.effect('minecraft:weakness')
		.speedFactor(0.9)
		.tagItem('tfg:plants/beneath')

	event.create('tfg:plant/wither_rose', 'tfg:decorative_plant')
		.soundType('crop')
		.mapColor('color_black')
		.effect('minecraft:wither')
		.speedFactor(0.5)
		.tagItem('tfg:plants/beneath')
}