"use strict";

const registerTFGBlocks = (event) => {

	registerTFGDimensionMarkerBlocks(event)
	registerTFGCrops(event)
	registerTFGVaseBlocks(event)
	registerTFGMudBrickBlocks(event)
	registerTFGRockBlocks(event)
	registerTFGSupportBlocks(event)
	registerTFGGlassBlocks(event)
	registerTFGNewWoodBlocks(event)

	registerTFGMarsTrees(event)
	registerTFGWorldGenBeneathDecoBlocks(event)
	registerTFGWorldGenMoonDecoBlocks(event)
	registerTFGWorldGenMarsDecoBlocks(event)
	registerTFGWorldGenVenusDecoBlocks(event)
	registerTFGWorldGenEuropaDecoBlocks(event)

	registerTFGNuclearBlocks(event)

	event.create('tfg:big_volcano_smoke_emitter', 'tfg:particle_emitter_decoration')
		.tagBlock('minecraft:mineable/pickaxe')
		.soundType('stone')
		.noDrops()
		.particles(p => p
			.position(0.5, 2, 0.5)
			.range(4, 1, 4)
			.velocity(0, 1, 0)
			.particle('tfg:volcano_smoke'))
		.hasTicker(true)
		.emitDelay(200);

	event.create('tfg:natural_gas_emitter', 'tfg:particle_emitter_decoration')
		.soundType('sand')
		.noDrops()
		.noItem()
		.box(0, 0, 0, 16, 1, 16, true)
		.defaultTranslucent()
		.particles(p => p
			.position(0.5, 0.5, 0.5)
			.velocity(0, 1, 0)
			.particle('minecraft:dust')
			.dust(1, 0.95, 1, 1))
		.emitDelay(8);

	event.create('tfg:natural_gas_bubble_emitter', 'tfg:particle_emitter_decoration')
		.soundType('sand')
		.noDrops()
		.noItem()
		.box(0, 0, 0, 16, 1, 16, true)
		.defaultTranslucent()
		.particles(p => p
			.position(0.5, 0.2, 0.5)
			.velocity(0, 2, 0)
			.particle('minecraft:bubble_column_up'))
		.emitDelay(5);
	
}
