// priority: 0

const $TagKeyClazz = Java.loadClass('net.minecraft.tags.TagKey')
const $ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries')
const $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')

const createItemTag = (path) => {
    return $TagKeyClazz.create($ForgeRegistries.BLOCKS.getRegistryKey(), new $ResourceLocation(path))
}

const registerGTCEuTagPrefixes = (event) => {
    
    // TagPrefix.ORES.remove(TagPrefix.rawOreBlock);

    TagPrefix.ORES.remove(TagPrefix.ore);
    TagPrefix.ORES.remove(TagPrefix.oreDeepslate);
    TagPrefix.ORES.remove(TagPrefix.oreTuff);
    TagPrefix.ORES.remove(TagPrefix.oreSand);
    TagPrefix.ORES.remove(TagPrefix.oreRedSand);
    TagPrefix.ORES.remove(TagPrefix.oreRedGranite);
    TagPrefix.ORES.remove(TagPrefix.oreGravel);
    TagPrefix.ORES.remove(TagPrefix.oreEndstone);

    TagPrefix.ORES.remove(TagPrefix.oreBasalt);
    TagPrefix.ORES.remove(TagPrefix.oreAndesite);
    TagPrefix.ORES.remove(TagPrefix.oreDiorite);
    TagPrefix.ORES.remove(TagPrefix.oreGranite);

    global.TFC_STONE_TYPES.forEach(stoneTypeName => {
        event.create(`${stoneTypeName}`, 'ore')
            .customTagPath("", (prefix, mat) => createItemTag('minecraft:mineable/pickaxe'))
            .customTagPath("", (prefix, mat) => createItemTag('tfc:monster_spawns_on'))
            .customTagPath("", (prefix, mat) => createItemTag('tfc:can_start_collapse'))
            .customTagPath("", (prefix, mat) => createItemTag('minecraft:needs_stone_tool'))
            .customTagPath("", (prefix, mat) => createItemTag('tfc:can_collapse'))
            .customTagPath("", (prefix, mat) => createItemTag('tfc:prospectable'))
            .customTagPath("", (prefix, mat) => createItemTag('tfc:can_trigger_collapse'))
            .customTagPath("", (prefix, mat) => createItemTag('tfc:rock/ores'))

            .stateSupplier(() => Block.getBlock('minecraft:stone').defaultBlockState())
            .baseModelLocation(`tfc:block/rock/raw/${stoneTypeName}`)
            .unificationEnabled(true)
            
            .materialIconType(GTMaterialIconType.ore)
            .generationCondition(ItemGenerationCondition.hasOreProperty)
    })
}