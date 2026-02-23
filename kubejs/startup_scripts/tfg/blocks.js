"use strict";

const registerTFGBlocks = (event) => {

	registerTFGDimensionMarkerBlocks(event)
	registerTFGCrops(event)
	registerTFGVaseBlocks(event)

	registerTFGRockBlocks(event)
	registerTFGSupportBlocks(event)

	registerTFGWorldGenTrees(event)
	registerTFGWorldGenBeneathDecoBlocks(event)
	registerTFGWorldGenMoonDecoBlocks(event)
	registerTFGWorldGenMarsDecoBlocks(event)
	registerTFGWorldGenVenusDecoBlocks(event)
	registerTFGWorldGenEuropaDecoBlocks(event)

	registerTFGCasingBlocks(event)
	registerTFGNuclearBlocks(event)

	event.create('tfg:quartz_crucible')
		.tagBlock('minecraft:mineable/pickaxe')
		.soundType('stone')
		.mapColor('metal')
		.hardness(3)
		.fullBlock(false)
		.box(1, 0, 1, 15, 16, 15)

	// Temporary, remove in 0.12
	event.create('gtceu:ostrum_linear_accelerator')
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.requiresTool(false)
		.textureAll('tfg:item/deprecated')
	
	event.create('gtceu:steam_bloomery')
		.tagBlock('gtceu:mineable/pickaxe_or_wrench')
		.requiresTool(false)
		.textureAll('tfg:item/deprecated')
}
