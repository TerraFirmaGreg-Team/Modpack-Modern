"use strict";

function registerTFGWorldGenBeneathDecoBlocks(event) {

	event.create('tfg:mushroom_roots', 'tfg:decorative_plant')
		.soundType('nether_wart')
		.tagItem('tfc:plants')

	event.create('tfg:mushroom_sprouts', 'tfg:decorative_plant')
		.soundType('nether_wart')
		.tagItem('tfc:plants')

	event.create('tfg:charred_log')
		.fullBlock(true)
		.woodSoundType()
		.property(BlockProperties.AXIS)
		.tagBoth('minecraft:mineable/axe')
		.tagBoth('tfc:logs_that_log')
		.tagBoth('afc:logs_that_log')
		.tagBoth('minecraft:logs')
		.mapColor('black')
}