"use strict";

const registerTFGBlocks = (event) => {

	registerTFGDimensionMarkerBlocks(event)
	registerTFGCrops(event)
	registerTFGVaseBlocks(event)
	registerTFGMudBrickBlocks(event)
	registerTFGRockBlocks(event)
	registerTFGSupportBlocks(event)

	registerTFGWorldGenTrees(event)
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
			.position(0.5, 0.2, 0.5)
			.velocity(0, 1, 0)
			.particle('minecraft:dust')
			.dust(1, 0.95, 1, 1))
		.emitDelay(10);

	event.create('tfg:natural_gas_bubble_emitter', 'tfg:particle_emitter_decoration')
		.soundType('sand')
		.noDrops()
		.noItem()
		.box(0, 0, 0, 16, 1, 16, true)
		.defaultTranslucent()
		.particles(p => p
			.position(0.5, 0.2, 0.5)
			.velocity(0, 1, 0)
			.particle('minecraft:bubble_column_up'))
		.emitDelay(5);

	// Temporary, remove in 0.12
	event.create('gtceu:ostrum_linear_accelerator')
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.requiresTool(false)
		.textureAll('tfg:item/deprecated')
	
	event.create('gtceu:steam_bloomery')
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.requiresTool(false)
		.textureAll('tfg:item/deprecated')

	event.create('gtceu:heat_exchanger')
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.requiresTool(false)
		.textureAll('tfg:item/deprecated')

}
