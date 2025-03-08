const registerAFCRecipes = (event) =>{
    
    global.AFC_WOOD_TYPES.forEach(wood => {
        event.remove({ id: `afc:crafting/wood/${wood}_axle` })
        event.remove({ id: `afc:crafting/wood/${wood}_bladed_axle` })
        event.remove({ id: `afc:crafting/wood/${wood}_encased_axle` })
        event.remove({ id: `afc:crafting/wood/${wood}_clutch` })
        event.remove({ id: `afc:crafting/wood/${wood}_gear_box` })
        event.remove({ id: `afc:crafting/wood/${wood}_water_wheel` })
    
        // Бревна -> Пиломатериалы
        generateCutterRecipe(event, `#afc:${wood}_logs`, 1, `16x afc:wood/lumber/${wood}`, 400, 10, `${wood}_lumber_from_log`)
    
        // Доски -> Пиломатериалы
        generateCutterRecipe(event, `afc:wood/planks/${wood}`, null, `4x afc:wood/lumber/${wood}`, 400, 10, `${wood}_lumber_from_planks`)
    
        // Ступень -> Пиломатериалы
        generateCutterRecipe(event, `afc:wood/planks/${wood}_stairs`, null, `3x afc:wood/lumber/${wood}`, 400, 10, `${wood}_lumber_from_stairs`)
    
    
        // Плита -> Пиломатериалы
        generateCutterRecipe(event, `afc:wood/planks/${wood}_slab`, null, `2x afc:wood/lumber/${wood}`, 400, 10, `${wood}_lumber_from_slab`)
    
        // ? -> Деревянная нажимная пластина
        event.shaped(`afc:wood/planks/${wood}_pressure_plate`, [
            'ABA',
            'CDC',
            'AEA'  
        ], {
            A: '#forge:screws/wood',
            B: '#tfc:hammers',
            C: `afc:wood/planks/${wood}_slab`,
            D: '#forge:springs',
            E: '#forge:tools/screwdrivers'
        }).id(`afc:crafting/wood/${wood}_pressure_plate`)
    
        event.recipes.gtceu.assembler(`${wood}_pressure_plate`)             
            .itemInputs('#forge:springs', `2x afc:wood/planks/${wood}_slab`)
            .circuit(0)
            .itemOutputs(`2x afc:wood/planks/${wood}_pressure_plate`)
            .duration(50)
            .EUt(2)
    
        // ? -> Деревянная кнопка
        event.remove({ id: `afc:crafting/wood/${wood}_button` })
    
        generateCutterRecipe(event, `afc:wood/planks/${wood}_pressure_plate`, null, `6x afc:wood/planks/${wood}_button`, 50, 2, `${wood}_button`)  
    })
}