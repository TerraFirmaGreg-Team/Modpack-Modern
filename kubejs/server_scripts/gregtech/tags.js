// priority: 0

const $PropertyKey = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey")

const registerBlockTagsGT = (event) => {
    
    // Регистрация дополнительных тэгов для руд gtceu, 
    // только для тех, что используются в жилах с рудой
    
    global.allTFCStoneTypeNames.forEach(stoneType => {
        GTRegistries.MATERIALS.forEach(material => {
            if (material.hasProperty($PropertyKey.ORE))
            {
                const blockName = `gtceu:tfc_${stoneType}_${material}_ore`

                event.add("minecraft:needs_iron_tool", blockName)
                event.add("minecraft:mineable/pickaxe", blockName)
                event.add("tfc:can_collapse", blockName)
                event.add("tfc:can_start_collapse", blockName)
                event.add("tfc:monster_spawn_on", blockName)
                event.add("tfc:prospectable", blockName)
                event.add("tfc:rock/ores", blockName)
            }
        })
    })
}

const registerItemTagsGT = (event) => {
    
}