// priority: 0
"use strict";

const registerTFCTagPrefixes = (event) => {

	// These ores break worldgen if removed somehow?
	// TagPrefix.ORES.remove(TagPrefix.ore)
	TagPrefix.ORES.remove(TagPrefix.oreDeepslate)
	TagPrefix.ORES.remove(TagPrefix.oreTuff)
	TagPrefix.ORES.remove(TagPrefix.oreSand)
	TagPrefix.ORES.remove(TagPrefix.oreRedSand)
	TagPrefix.ORES.remove(TagPrefix.oreMarble)
	TagPrefix.ORES.remove(TagPrefix.oreGravel)
	TagPrefix.ORES.remove(TagPrefix.oreEndstone)
	TagPrefix.ORES.remove(TagPrefix.oreNetherrack)
	TagPrefix.ORES.remove(TagPrefix.oreBlackstone)

	TagPrefix.ORES.remove(TagPrefix.oreBasalt)
	TagPrefix.ORES.remove(TagPrefix.oreAndesite)
	TagPrefix.ORES.remove(TagPrefix.oreDiorite)
	TagPrefix.ORES.remove(TagPrefix.oreGranite)

	const shouldGenerateOre = (material) => {
		return material.hasProperty(PropertyKey.ORE) && material !== GTMaterials.Plutonium239;
	}

	global.TFC_STONE_TYPES.forEach(stoneTypeName => {
		const material = GTCEuAPI.materialManager.getMaterial(stoneTypeName)

		event.create(`${stoneTypeName}`, 'ore')
			.stateSupplier(() => Block.getBlock('minecraft:stone').defaultBlockState())
			.baseModelLocation(`tfc:block/rock/raw/${stoneTypeName}`)
			.unificationEnabled(true)
			.materialSupplier(() => material)
			.materialIconType(GTMaterialIconType.ore)
			.generationCondition(shouldGenerateOre)
	})

	// Custom stone types

	// Can't use 'blackstone' for whatever reason -- GTM has its own 
	// blackstone ore type but it doesn't seem to work at all?
	// This works around that
	event.create('pyroxenite', 'ore')
		.stateSupplier(() => Block.getBlock('minecraft:blackstone').defaultBlockState())
		.baseModelLocation('minecraft:block/blackstone')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(shouldGenerateOre)
		.materialSupplier(() => GTMaterials.Blackstone)

	event.create('dripstone', 'ore')
		.stateSupplier(() => Block.getBlock('minecraft:dripstone_block').defaultBlockState())
		.baseModelLocation('minecraft:block/dripstone_block')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(shouldGenerateOre)
		.materialSupplier(() => GTCEuAPI.materialManager.getMaterial('dripstone'))
	// Redefine deepslate so it has the correct sound effects (yes I fixed this in GTM as well)
	event.create('deepslate', 'ore')
		.stateSupplier(() => Block.getBlock('minecraft:deepslate').defaultBlockState())
		.baseModelLocation('minecraft:block/deepslate')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(shouldGenerateOre)
		.materialSupplier(() => GTMaterials.Deepslate)

	event.create('moon_stone', 'ore')
		.stateSupplier(() => Block.getBlock('tfg:rock/hardened_moon_stone').defaultBlockState())
		.baseModelLocation('ad_astra:block/moon_stone')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(shouldGenerateOre)

	event.create('moon_deepslate', 'ore')
		.stateSupplier(() => Block.getBlock('tfg:rock/hardened_moon_deepslate').defaultBlockState())
		.baseModelLocation('ad_astra:block/moon_deepslate')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(shouldGenerateOre)

	event.create('mars_stone', 'ore')
		.stateSupplier(() => Block.getBlock('tfg:rock/hardened_mars_stone').defaultBlockState())
		.baseModelLocation('ad_astra:block/mars_stone')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(shouldGenerateOre)

	event.create('venus_stone', 'ore')
		.stateSupplier(() => Block.getBlock('tfg:rock/hardened_venus_stone').defaultBlockState())
		.baseModelLocation('ad_astra:block/venus_stone')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(shouldGenerateOre)

	event.create('mercury_stone', 'ore')
		.stateSupplier(() => Block.getBlock('tfg:rock/hardened_mercury_stone').defaultBlockState())
		.baseModelLocation('ad_astra:block/mercury_stone')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(shouldGenerateOre)

	event.create('glacio_stone', 'ore')
		.stateSupplier(() => Block.getBlock('tfg:rock/hardened_glacio_stone').defaultBlockState())
		.baseModelLocation('ad_astra:block/glacio_stone')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(shouldGenerateOre)
}