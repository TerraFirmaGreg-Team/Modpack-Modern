// priority: 0

const registerBeneathRecipes = (e) => {
    
    // Какие то рецепты дерева
    global.BENEATH_WOOD_TYPES.forEach(wood => {
        e.remove({ id: `beneath:crafting/wood/${wood}_axle` })
        e.remove({ id: `beneath:crafting/wood/${wood}_bladed_axle` })
        e.remove({ id: `beneath:crafting/wood/${wood}_encased_axle` })
        e.remove({ id: `beneath:crafting/wood/${wood}_clutch` })
        e.remove({ id: `beneath:crafting/wood/${wood}_gear_box` })
        e.remove({ id: `beneath:crafting/wood/${wood}_water_wheel` })

        // Бревна -> Пиломатериалы
        generateCutterRecipe(e, `#tfc:${wood}_logs`, null, `16x beneath:wood/lumber/${wood}`, 400, 10, `${wood}_lumber_from_log`)

        // Доски -> Пиломатериалы
        generateCutterRecipe(e, `beneath:wood/planks/${wood}`, null, `4x beneath:wood/lumber/${wood}`, 400, 10, `${wood}_lumber_from_planks`)

        // Ступень -> Пиломатериалы
        generateCutterRecipe(e, `beneath:wood/planks/${wood}_stairs`, null, `3x beneath:wood/lumber/${wood}`, 400, 10, `${wood}_lumber_from_stairs`)

        // Плита -> Пиломатериалы
        generateCutterRecipe(e, `beneath:wood/planks/${wood}_slab`, null, `2x beneath:wood/lumber/${wood}`, 400, 10, `${wood}_lumber_from_slab`)

        // ? -> Деревянная нажимная пластина
        e.shaped(`beneath:wood/planks/${wood}_pressure_plate`, [
            'ABA',
            'CDC',
            'AEA'  
        ], {
            A: '#forge:screws/wood',
            B: '#tfc:hammers',
            C: `beneath:wood/planks/${wood}_slab`,
            D: '#forge:springs',
            E: '#forge:tools/screwdrivers'
        }).id(`beneath:crafting/wood/${wood}_pressure_plate`)

        e.recipes.gtceu.assembler(`${wood}_pressure_plate`)             
            .itemInputs('#forge:springs', `2x beneath:wood/planks/${wood}_slab`)
            .circuit(0)
            .itemOutputs(`2x beneath:wood/planks/${wood}_pressure_plate`)
            .duration(50)
            .EUt(2)

        // ? -> Деревянная кнопка
        e.remove({ id: `beneath:crafting/wood/${wood}_button` })

        generateCutterRecipe(e, `beneath:wood/planks/${wood}_pressure_plate`, null, `6x beneath:wood/planks/${wood}_button`, 50, 2, `${wood}_button`)
    })
    //#endregion
}