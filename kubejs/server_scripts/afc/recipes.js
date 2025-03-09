/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
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

    event.shapeless("afc:tree_tap", "treetap:tap")

    event.remove({id: "afc:tree_tapping/hevea_latex"})
    event.remove({id: "afc:tree_tapping/rubber_fig_latex"})

    event.replaceInput({ id: "afc:anvil/tree_tap" }, "tfc:metal/sheet/wrought_iron", "minecraft:copper_ingot")

    // TreeTap Heating
    event.recipes.tfc.heating('afc:tree_tap', 1080)
    .resultFluid(Fluid.of('gtceu:copper', 144))
    .id('tfg:heating/tree_tap')

    //Custom rubber and hevea tappings
    //Hevea is the most efficient but requires the warmest temperatures
    //Rubber fig requires average temperatures and its mildly efficient
    event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/hevea"))
        .resultFluid(Fluid.of("tfg:latex", 3))
        .minTemp(22)
        .id("tfg:tree_tapping/latex/hevea")

    event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/rubber_fig"))
        .resultFluid(Fluid.of("tfg:latex", 2))
        .minTemp(12)
        .id("tfg:tree_tapping/latex/rubber_fig")
        
    //Kapok Grandfathered, least efficient but works as long as the temperature is not freezing
    event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/kapok"))
        .resultFluid(Fluid.of("tfg:latex", 1))
        .minTemp(1)
        .id("tfg:tree_tapping/kapok_latex")
}