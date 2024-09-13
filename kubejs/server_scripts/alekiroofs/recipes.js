// priority: 0

const registerAlekiRoofsRecipes = (e) => {
    
    //#region Дерево
    
    global.MINECRAFT_OVERWORLD_WOOD_TYPES.forEach(woodName => {
        
        // Wood
        e.remove({ id: `alekiroofs:crafting/${woodName}_roofing` })
    })
    
    global.MINECRAFT_NETHER_WOOD_TYPES.forEach(woodName => {

        e.remove({ id: `alekiroofs:crafting/${woodName}_roofing` })

        const plank = Item.of(`minecraft:${woodName}_planks`)
        const roofing = Item.of(`alekiroofs:${woodName}_roofing`)

        e.shaped(roofing.copyWithCount(2), [
            'A ',
            ' s'  
        ], {
            A: plank,
            s: '#forge:tools/saws'
        }).id(`tfg:${woodName}_roofing_saw`)

        e.recipes.gtceu.cutter(`tfg:${woodName}_roofing_from_planks`)             
            .itemInputs(plank)
            .circuit(3)
            .itemOutputs(roofing.copyWithCount(2))
            .itemOutputs('1x gtceu:wood_dust')
            .EUt(GTValues.VA[GTValues.ULV]).duration(200)
    })

    //#endregion
}