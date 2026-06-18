"use strict";

function registerTFGWorldGenBeneathDecoBlocks(event) {

	event.create('tfg:charred_log')
		.fullBlock(true)
		.woodSoundType()
		.property(BlockProperties.AXIS)
		.tagBoth('minecraft:mineable/axe')
		.tagBoth('tfc:logs_that_log')
		.tagBoth('afc:logs_that_log')
		.tagBoth('minecraft:logs')
		.mapColor('black')

	event.create('tfg:huge_quartz')
		.fullBlock(true)
		.soundType('amethyst')
		.mapColor('quartz')
		.textureAll('tfg:block/huge_quartz')
		.requiresTool(true)
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('tfc:mineable_with_glass_saw')
		.defaultTranslucent()
			
	event.create('tfg:steam_emitter', 'tfg:particle_emitter_decoration')
		.soundType('dripstone_block')
		.mapColor('color_white')
		.box(3, 0, 3, 13, 10, 13)
		.particles(a => a
			.range(2, 1, 2)
			.velocity(0, 0.1, 0)
			.particle('tfg:geothermal_steam')
			.count(1)
			.forced(true));

	// Pale moss

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

	// Plants

	event.create('tfg:mushroom_roots', 'tfg:decorative_plant')
		.soundType('nether_wart')
		.speedFactor(0.9)
		.tagItem('tfg:plants/beneath')

	event.create('tfg:mushroom_sprouts', 'tfg:decorative_plant')
		.soundType('nether_wart')
		.speedFactor(0.9)
		.tagItem('tfg:plants/beneath')
		
	event.create('betterend:nightshade_moss', 'tfg:attached_decorative_plant')
		.soundType('crop')
		.tagBoth('tfg:plants/beneath')
		.tagBlock('minecraft:replaceable')
		.lightLevel(0.65)

	event.create('betterend:murkweed', 'tfg:decorative_plant')
		.soundType('crop')
		.mapColor('color_black')
		.effect('minecraft:darkness')
		.speedFactor(0.5)
		.tagItem('tfg:plants/beneath')
		.tagBlock('minecraft:replaceable')

	event.create('betterend:needlegrass', 'tfg:decorative_plant')
		.soundType('crop')
		.effect('minecraft:weakness')
		.speedFactor(0.9)
		.tagItem('tfg:plants/beneath')
		.tagBlock('minecraft:replaceable')
		.lootItem('tfc:straw')

	event.create('tfg:plant/wither_rose', 'tfg:decorative_plant')
		.soundType('crop')
		.mapColor('color_black')
		.effect('minecraft:wither')
		.speedFactor(0.5)
		.tagItem('tfg:plants/beneath')
		.tagBlock('minecraft:replaceable')

	event.create('tfg:plant/blackthorn', 'tfg:tall_decorative_plant')
		.height(2)
		.soundType('crop')
		.box(1, 0, 1, 15, 16, 15)
		.speedFactor(0.7)
		.tagBoth('tfg:plants/beneath')
		.tagBlock('minecraft:replaceable')

	event.create('tfg:groundcover/ginkgo_twig', 'tfc:ground_cover')
		.box(3, 0, 3, 13, 3, 13)
		.groundCoverModelShape('twig')
		.withPreexistingItem('tfg:twigs/ginkgo')
		.tagBlock('tfc:can_be_snow_piled')
		.texture('particle', 'wan_ancient_beasts:block/ginkgo_log')
		.texture('all', 'wan_ancient_beasts:block/ginkgo_log')
		.texture('top', 'wan_ancient_beasts:block/ginkgo_log_top')
}