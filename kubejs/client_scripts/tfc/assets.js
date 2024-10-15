// priority: 0

const registerTFCAssets = (e) => {
    
    //#region Обработка дерева топором
    global.TFC_WOOD_TYPES.forEach(woodName => {
        const logJson = {
            type: 'emi:world_interaction',
            left: `item:tfc:wood/log/${woodName}`,
            right: '#item:minecraft:axes',
            output: `item:tfc:wood/stripped_log/${woodName}`
        }
        
        const woodJson = {
            type: 'emi:world_interaction',
            left: `item:tfc:wood/wood/${woodName}`,
            right: '#item:minecraft:axes',
            output: `item:tfc:wood/stripped_wood/${woodName}`
        }

        e.add(`emi:recipe/additions/tfc_${woodName}_log_conversion`, logJson)
        e.add(`emi:recipe/additions/tfc_${woodName}_wood_conversion`, woodJson)
    })
    //#endregion

    //todo: flattering recipes, shovels, etc
}