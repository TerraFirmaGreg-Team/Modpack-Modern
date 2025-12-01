"use strict";

function registerTFGWorldGenMoonDecoBlocks(event) {

	// Moon
	
	event.create('tfg:lunar_roots', 'tfg:decorative_plant')
		.soundType('nether_wart')
		.lightLevel(0.4)
		.tagItem('tfg:moon_plants')
		.tagBlock('minecraft:replaceable')

	event.create('tfg:lunar_sprouts', 'tfg:decorative_plant')
		.soundType('nether_wart')
		.tagItem('tfg:moon_plants')
		.tagBlock('minecraft:replaceable')

	event.create('betterend:chorus_lily', 'tfc:ground_cover')
		.soundType('cherry_wood')
		.hardness(0.5)
		.tagItem('tfg:moon_plants')
		.tagBlock('minecraft:mineable/hoe')
		.tagBlock('tfg:do_not_destroy_in_space')
		.mapColor('terracotta_white')
		.box(0, 0, 0, 16, 6, 16)
		.fullBlock(false)
		.opaque(false)
		.notSolid()
		.renderType('cutout')

	// 1 block tall
	createPlant(event, 'inflexia', 'moon')
	createPlant(event, 'chorus_grass', 'moon')
	createPlant(event, 'salteago', 'moon')
	createPlant(event, 'vaiolush_fern', 'moon')


	// Mars

	

	// europa...?

	createPlant(event, 'crystal_grass', 'unused')
		.box(3, 0, 3, 13, 12, 13)
	createPlant(event, 'blooming_cooksonia', 'unused')
		.box(3, 0, 3, 13, 12, 13)
	createPlant(event, 'fracturn', 'unused')
		.box(3, 0, 3, 13, 12, 13)
	createPlant(event, 'jungle_grass', 'unused')
		.box(3, 0, 3, 13, 12, 13)
}

