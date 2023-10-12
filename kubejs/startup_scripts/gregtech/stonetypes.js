// priority: 0

const MapColor = Java.loadClass('net.minecraft.world.level.material.MapColor')
const ChemicalHelper = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.ChemicalHelper")

// Replace + Remove Stonetypes
GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    // Ожидаем нормальной фичи для удаления стоунтайпов
    // TagPrefix.ORES.remove(TagPrefix.ore)
    // TagPrefix.ORES.remove(TagPrefix.oreTuff)
    // TagPrefix.ORES.remove(TagPrefix.oreDeepslate)
    // TagPrefix.ORES.remove(TagPrefix.oreSand)
    // TagPrefix.ORES.remove(TagPrefix.oreRedSand)
    // TagPrefix.ORES.remove(TagPrefix.oreGravel)
    // TagPrefix.ORES.remove(TagPrefix.oreNetherrack)
    // TagPrefix.ORES.remove(TagPrefix.oreEndstone)

    global.StoneTypeNamesWithoutGTDups.forEach(stoneTypeName => {
        event.create(stoneTypeName, 'ore')
            .stateSupplier(() => Block.getBlock('tfc:rock/raw/' + stoneTypeName).defaultBlockState())
            .sound(SoundType.STONE)
            .unificationEnabled(true)
            .materialIconType(GTMaterialIconType.ore)
            .generationCondition(ItemGenerationCondition.hasOreProperty)
    });

    TagPrefix.ORES.put(TagPrefix.oreGranite, new TagPrefix.OreType(() => Block.getBlock('tfc:rock/raw/granite').defaultBlockState(), false, false, MapColor.STONE, SoundType.STONE))
    ChemicalHelper.ORES_INVERSE.put(() => Block.getBlock('tfc:rock/raw/granite').defaultBlockState(), TagPrefix.oreGranite)

    TagPrefix.ORES.put(TagPrefix.oreDiorite, new TagPrefix.OreType(() => Block.getBlock('tfc:rock/raw/diorite').defaultBlockState(), false, false, MapColor.STONE, SoundType.STONE))
    ChemicalHelper.ORES_INVERSE.put(() => Block.getBlock('tfc:rock/raw/diorite').defaultBlockState(), TagPrefix.oreDiorite)

    TagPrefix.ORES.put(TagPrefix.oreBasalt, new TagPrefix.OreType(() => Block.getBlock('tfc:rock/raw/basalt').defaultBlockState(), false, false, MapColor.STONE, SoundType.STONE))
    ChemicalHelper.ORES_INVERSE.put(() => Block.getBlock('tfc:rock/raw/basalt').defaultBlockState(), TagPrefix.oreBasalt)

    TagPrefix.ORES.put(TagPrefix.oreAndesite, new TagPrefix.OreType(() => Block.getBlock('tfc:rock/raw/andesite').defaultBlockState(), false, false, MapColor.STONE, SoundType.STONE))
    ChemicalHelper.ORES_INVERSE.put(() => Block.getBlock('tfc:rock/raw/andesite').defaultBlockState(), TagPrefix.oreAndesite)
})