// priority: 0

const registerTFCTagPrefixes = (event) => {
    //const $TagKeyClazz = Java.loadClass('net.minecraft.tags.TagKey')
    //const $ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries')
    //const $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')

    // const $BlockBehavior = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour')
    // const $MapColor = Java.loadClass('net.minecraft.world.level.material.MapColor')

    //const createItemTag = (path) => {
    //    return $TagKeyClazz.create($ForgeRegistries.BLOCKS.getRegistryKey(), new $ResourceLocation(path))
    //}

    TagPrefix.ORES.remove(TagPrefix.rawOreBlock);

    TagPrefix.ORES.remove(TagPrefix.ore)
    TagPrefix.ORES.remove(TagPrefix.oreDeepslate)
    TagPrefix.ORES.remove(TagPrefix.oreTuff)
    TagPrefix.ORES.remove(TagPrefix.oreSand)
    TagPrefix.ORES.remove(TagPrefix.oreRedSand)
    TagPrefix.ORES.remove(TagPrefix.oreRedGranite)
    TagPrefix.ORES.remove(TagPrefix.oreMarble)
    TagPrefix.ORES.remove(TagPrefix.oreGravel)
    TagPrefix.ORES.remove(TagPrefix.oreEndstone)
    TagPrefix.ORES.remove(TagPrefix.oreNetherrack)

    TagPrefix.ORES.remove(TagPrefix.oreBasalt)
    TagPrefix.ORES.remove(TagPrefix.oreAndesite)
    TagPrefix.ORES.remove(TagPrefix.oreDiorite)
    TagPrefix.ORES.remove(TagPrefix.oreGranite)

    global.TFC_STONE_TYPES.forEach(stoneTypeName => {
        const material = GTCEuAPI.materialManager.getMaterial(stoneTypeName)
        
        // Kjs sucks
        // const template = $BlockBehavior.Properties.of()["mapColor(net.minecraft.world.level.material.MapColor)"]($MapColor)
        // const template = $BlockBehavior.Properties.of()["m_284180_(net.minecraft.world.level.material.MapColor)"]($MapColor)

        event.create(`${stoneTypeName}`, 'ore')
            .stateSupplier(() => Block.getBlock('minecraft:stone').defaultBlockState())
            .baseModelLocation(`tfc:block/rock/raw/${stoneTypeName}`)
            .unificationEnabled(true)
            .materialSupplier(() => material)

            .materialIconType(GTMaterialIconType.ore)
            .generationCondition(ItemGenerationCondition.hasOreProperty)
            
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
		.generationCondition(ItemGenerationCondition.hasOreProperty)
		.materialSupplier(() => GTMaterials.Blackstone)

	event.create('dripstone', 'ore')
		.stateSupplier(() => Block.getBlock('minecraft:dripstone_block').defaultBlockState())
		.baseModelLocation('minecraft:block/dripstone_block')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(ItemGenerationCondition.hasOreProperty)

	// Redefine deepslate so it has the correct sound effects (yes I fixed this in GTM as well)
	event.create('deepslate', 'ore')
		.stateSupplier(() => Block.getBlock('minecraft:deepslate').defaultBlockState())
		.baseModelLocation('minecraft:block/deepslate')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(ItemGenerationCondition.hasOreProperty)
		.materialSupplier(() => GTMaterials.Deepslate)
}