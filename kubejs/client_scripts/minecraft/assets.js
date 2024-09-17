// priority: 0

const registerMinecraftAssets = (e) => {
    
    //#region Обработка дерева топором
    global.MINECRAFT_NETHER_WOOD_TYPES.forEach(woodName => {
        const logJson = {
            type: 'emi:world_interaction',
            left: `item:minecraft:${woodName}_stem`,
            right: '#item:minecraft:axes',
            output: `item:minecraft:stripped_${woodName}_stem`
        }
        
        const woodJson = {
            type: 'emi:world_interaction',
            left: `item:minecraft:${woodName}_hyphae`,
            right: '#item:minecraft:axes',
            output: `item:minecraft:stripped_${woodName}_hyphae`
        }

        e.add(`emi:recipe/additions/vanilla_nether_${woodName}_wood_conversion`, logJson)
        e.add(`emi:recipe/additions/vanilla_nether_${woodName}_wood_conversion`, woodJson)
    })
    //#endregion
}