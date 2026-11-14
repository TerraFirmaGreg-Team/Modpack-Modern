// priority: 0
"use strict";

const registerTFGRocksTagPrefixes = (event) => {
	
//	TagPrefix.ORES.remove(TagPrefix.oreDeepslate)
	TagPrefix.ORES.remove(TagPrefix.oreSand)
//	TagPrefix.ORES.remove(TagPrefix.oreRedSand)
	//TagPrefix.ORES.remove(TagPrefix.oreMarble)
	TagPrefix.ORES.remove(TagPrefix.oreGravel)
	TagPrefix.ORES.remove(TagPrefix.oreEndstone)
	TagPrefix.ORES.remove(TagPrefix.oreNetherrack)
	TagPrefix.ORES.remove(TagPrefix.oreBlackstone)
	//TagPrefix.ORES.remove(TagPrefix.oreBasalt)
	//TagPrefix.ORES.remove(TagPrefix.oreAndesite)
	//TagPrefix.ORES.remove(TagPrefix.oreDiorite)
	//TagPrefix.ORES.remove(TagPrefix.oreGranite)
//	TagPrefix.ORES.remove(TagPrefix.oreRedGranite)

	const shouldGenerateOre = (material) => {
		return material.hasProperty(PropertyKey.ORE);
	}

	const shouldGenerateSandOre = (material) => {
		return material.getName().includes("sand") && material.hasProperty(PropertyKey.ORE);
	}

	global.TFC_STONE_TYPES.forEach(stoneTypeName => {

		if (stoneTypeName !== 'marble'
			&& stoneTypeName !== 'basalt'
			&& stoneTypeName !== 'andesite'
			&& stoneTypeName !== 'diorite'
			&& stoneTypeName !== 'granite') {
			event.create(`${stoneTypeName}`, 'ore')
				.stateSupplier(() => Block.getBlock('minecraft:stone').defaultBlockState())
				.baseModelLocation(`tfc:block/rock/raw/${stoneTypeName}`)
				.unificationEnabled(true)
				.materialIconType(GTMaterialIconType.ore)
				.generationCondition(shouldGenerateOre)
		}

		TFGHelpers.registerCobbleBlock(`${stoneTypeName}`, `tfc:rock/cobble/${stoneTypeName}`);
	})

	// Custom stone types

	// Can't use 'blackstone' for whatever reason -- GTM has its own 
	// blackstone ore type but it doesn't seem to work at all?
	// This works around that
	event.create('tfg:pyroxenite', 'ore')
		.stateSupplier(() => Block.getBlock('minecraft:blackstone').defaultBlockState())
		.baseModelLocation('minecraft:block/blackstone')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(shouldGenerateOre)
		
	TFGHelpers.registerCobbleBlock('tfg:pyroxenite', 'tfg:rock/cobble_blackstone');

	/*event.create('deepslate', 'ore')
		.stateSupplier(() => Block.getBlock('minecraft:deepslate').defaultBlockState())
		.baseModelLocation('minecraft:block/deepslate')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(shouldGenerateOre)*/

	TFGHelpers.registerCobbleBlock('gtceu:deepslate', 'minecraft:cobbled_deepslate');

	event.create('tfg:dripstone', 'ore')
		.stateSupplier(() => Block.getBlock('minecraft:dripstone_block').defaultBlockState())
		.baseModelLocation('minecraft:block/dripstone_block')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(shouldGenerateOre)
		
	TFGHelpers.registerCobbleBlock('tfg:dripstone', 'tfg:rock/cobble_dripstone');

	event.create('tfg:moon_stone', 'ore')
		.stateSupplier(() => Block.getBlock('tfg:rock/hardened_moon_stone').defaultBlockState())
		.baseModelLocation('ad_astra:block/moon_stone')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(shouldGenerateOre)
		
	TFGHelpers.registerCobbleBlock('tfg:moon_stone', 'ad_astra:moon_cobblestone');

	event.create('tfg:moon_deepslate', 'ore')
		.stateSupplier(() => Block.getBlock('tfg:rock/hardened_moon_deepslate').defaultBlockState())
		.baseModelLocation('ad_astra:block/moon_deepslate')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(shouldGenerateOre)

	TFGHelpers.registerCobbleBlock('tfg:moon_deepslate', 'tfg:rock/cobble_moon_deepslate');

	event.create('tfg:mars_stone', 'ore')
		.stateSupplier(() => Block.getBlock('tfg:rock/hardened_mars_stone').defaultBlockState())
		.baseModelLocation('ad_astra:block/mars_stone')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(shouldGenerateOre)

	TFGHelpers.registerCobbleBlock('tfg:mars_stone', 'ad_astra:mars_cobblestone');

	event.create('tfg:venus_stone', 'ore')
		.stateSupplier(() => Block.getBlock('tfg:rock/hardened_venus_stone').defaultBlockState())
		.baseModelLocation('ad_astra:block/venus_stone')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(shouldGenerateOre)

	TFGHelpers.registerCobbleBlock('tfg:venus_stone', 'ad_astra:venus_cobblestone');

	event.create('tfg:mercury_stone', 'ore')
		.stateSupplier(() => Block.getBlock('tfg:rock/hardened_mercury_stone').defaultBlockState())
		.baseModelLocation('ad_astra:block/mercury_stone')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(shouldGenerateOre)

	TFGHelpers.registerCobbleBlock('tfg:mercury_stone', 'ad_astra:mercury_cobblestone');

	event.create('tfg:glacio_stone', 'ore')
		.stateSupplier(() => Block.getBlock('tfg:rock/hardened_glacio_stone').defaultBlockState())
		.baseModelLocation('ad_astra:block/glacio_stone')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(shouldGenerateOre)

	TFGHelpers.registerCobbleBlock('tfg:glacio_stone', 'ad_astra:glacio_cobblestone');

	//event.create('red_granite', 'ore')
	//	.stateSupplier(() => Block.getBlock('tfg:rock/hardened_red_granite').defaultBlockState())
	//	.baseModelLocation('gtceu:block/red_granite')
	//	.unificationEnabled(true)
	//	.materialIconType(GTMaterialIconType.ore)
	//	.generationCondition(shouldGenerateOre)

	TFGHelpers.registerCobbleBlock('gtceu:red_granite', 'gtceu:red_granite_cobblestone');

	event.create('tfg:flavolite', 'ore')
		.stateSupplier(() => Block.getBlock('tfg:rock/hardened_flavolite').defaultBlockState())
		.baseModelLocation('betterend:block/flavolite')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(shouldGenerateOre)

	TFGHelpers.registerCobbleBlock('tfg:flavolite', 'tfg:rock/cobble_flavolite');

	event.create('tfg:sandy_jadestone', 'ore')
		.stateSupplier(() => Block.getBlock('tfg:rock/hardened_sandy_jadestone').defaultBlockState())
		.baseModelLocation('betterend:block/sandy_jadestone')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(shouldGenerateOre)

	TFGHelpers.registerCobbleBlock('tfg:sandy_jadestone', 'tfg:rock/cobble_sandy_jadestone');

	global.SAND_COLORS.forEach(color => {
		if (color !== 'red') { //GTM8 BUG
			event.create(`tfg:${color}_sand`, 'ore')
				.stateSupplier(() => Block.getBlock('minecraft:red_sand').defaultBlockState())
				.baseModelLocation(`tfc:block/sand/${color}`)
				.unificationEnabled(true)
				.materialIconType(GTMaterialIconType.ore)
				.generationCondition(shouldGenerateSandOre)
		}

		TFGHelpers.registerCobbleBlock(`tfg:${color}_sand`, `tfc:sand/${color}`);
	})
}