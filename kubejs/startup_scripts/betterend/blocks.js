// priority: 0

function registerBetterEndBlocks(event) {

	// Moon

	event.create('betterend:chorus_lily', 'tfc:ground_cover')
		.soundType('cherry_wood')
		.hardness(0.5)
		.tagBlock('minecraft:mineable/hoe')
		.tagItem('tfg:moon_plants')
		.mapColor('terracotta_white')
		.box(0, 0, 0, 16, 6, 16)
		.fullBlock(false)
		.opaque(false)
		.notSolid()
		.renderType('cutout')

	event.create('betterend:inflexia', 'tfg:decorative_plant')
		.tagItem('tfg:moon_plants')
		.tagBlock('minecraft:replaceable')

	event.create('betterend:chorus_grass', 'tfg:decorative_plant')
		.tagItem('tfg:moon_plants')
		.tagBlock('minecraft:replaceable')

	event.create('betterend:salteago', 'tfg:decorative_plant')
		.tagItem('tfg:moon_plants')
		.tagBlock('minecraft:replaceable')

	event.create('betterend:vaiolush_fern', 'tfg:decorative_plant')
		.tagItem('tfg:moon_plants')
		.tagBlock('minecraft:replaceable')

	// Mars

	event.create('betterend:crystal_grass', 'tfg:decorative_plant')
		.tagItem('tfg:mars_plants')
		.tagBlock('minecraft:replaceable')

	event.create('betterend:blooming_cooksonia', 'tfg:decorative_plant')
		.tagItem('tfg:mars_plants')
		.tagBlock('minecraft:replaceable')

	event.create('betterend:fracturn', 'tfg:decorative_plant')
		.tagItem('tfg:mars_plants')
		.tagBlock('minecraft:replaceable')

	event.create('betterend:jungle_grass', 'tfg:decorative_plant')
		.tagItem('tfg:mars_plants')
		.tagBlock('minecraft:replaceable')
}