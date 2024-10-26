// priority: 0

const registerBeneathAssets = (e) => {
    
    //#region Обработка дерева топором
    global.BENEATH_WOOD_TYPES.forEach(woodName => {
        const logJson = {
            type: 'emi:world_interaction',
            left: `item:beneath:wood/log/${woodName}`,
            right: '#item:minecraft:axes',
            output: `item:beneath:wood/stripped_log/${woodName}`
        }
        
        const woodJson = {
            type: 'emi:world_interaction',
            left: `item:beneath:wood/wood/${woodName}`,
            right: '#item:minecraft:axes',
            output: `item:beneath:wood/stripped_wood/${woodName}`
        }

        e.add(`emi:recipe/additions/beneath_${woodName}_log_conversion`, logJson)
        e.add(`emi:recipe/additions/beneath_${woodName}_wood_conversion`, woodJson)
    })
    //#endregion

    //todo: flattering recipes, shovels, etc
}