"use strict";

const registerTFGBlocks = (event) => {

	registerTFGDimensionMarkerBlocks(event)
	registerTFGCrops(event)
	registerTFGVaseBlocks(event)

	registerTFGSupportBlocks(event)
	registerTFGAqueductBlocks(event)
	registerTFGRockBlocks(event)
	registerTFGVanillaStoneBlocks(event)

	registerTFGWorldGenTrees(event)
	registerTFGWorldGenBeneathDecoBlocks(event)
	registerTFGWorldGenMoonDecoBlocks(event)
	registerTFGWorldGenMarsDecoBlocks(event)
	registerTFGWorldGenVenusDecoBlocks(event)
	registerTFGWorldGenEuropaDecoBlocks(event)

	registerTFGCasingBlocks(event)
	registerTFGNuclearBlocks(event)


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
