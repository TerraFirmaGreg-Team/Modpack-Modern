// priority: 0

const registerFirmaLifeRecipes = (event) => {

    //#region Нержавеющая теплица

    event.remove({ id: 'firmalife:crafting/greenhouse/stainless_steel_greenhouse_wall' })
    event.remove({ id: 'firmalife:crafting/greenhouse/stainless_steel_greenhouse_panel_wall' })
    event.remove({ id: 'firmalife:crafting/greenhouse/stainless_steel_greenhouse_panel_roof' })
    event.remove({ id: 'firmalife:crafting/greenhouse/stainless_steel_greenhouse_roof' })
    event.remove({ id: 'firmalife:crafting/greenhouse/stainless_steel_greenhouse_roof_top' })
    event.remove({ id: 'firmalife:crafting/greenhouse/stainless_steel_greenhouse_trapdoor' })
    event.remove({ id: 'firmalife:crafting/greenhouse/stainless_steel_greenhouse_door' })
    event.remove({ id: 'firmalife:crafting/greenhouse/stainless_steel_greenhouse_port' })

    //#endregion

    event.remove({ id: 'firmalife:crafting/compost_tumbler' })
    event.remove({ id: 'firmalife:crafting/pumping_station' })

    // - Chromium
    
    // Ingot 
    event.remove({ id: 'firmalife:casting/chromium_ingot' })
    event.remove({ id: 'firmalife:casting/chromium_ingot_fire' })
    event.remove({ id: 'firmalife:heating/metal/chromium_ingot' })

    // Double Ingot
    event.remove({ id: 'firmalife:welding/chromium_double_ingot' })
    event.remove({ id: 'firmalife:heating/metal/chromium_double_ingot' })

    // Sheet
    event.remove({ id: 'firmalife:anvil/chromium_sheet' })
    event.remove({ id: 'firmalife:heating/metal/chromium_sheet' })

    // Double Sheet
    event.remove({ id: 'firmalife:welding/chromium_double_sheet' })
    event.remove({ id: 'firmalife:heating/metal/chromium_double_sheet' })

    // Rod
    event.remove({ id: 'firmalife:anvil/chromium_rod' })
    event.remove({ id: 'firmalife:heating/metal/chromium_rod' })

    // Ores
    event.remove({ id: 'firmalife:heating/ore/small_chromite' })
    event.remove({ id: 'firmalife:heating/ore/poor_chromite' })
    event.remove({ id: 'firmalife:heating/ore/normal_chromite' })
    event.remove({ id: 'firmalife:heating/ore/rich_chromite' })

    // - Stainless Steel
    
    // Ingot 
    event.remove({ id: 'firmalife:casting/stainless_steel_ingot' })
    event.remove({ id: 'firmalife:casting/stainless_steel_ingot_fire' })
    event.remove({ id: 'firmalife:heating/metal/stainless_steel_ingot' })

    // Double Ingot
    event.remove({ id: 'firmalife:welding/stainless_steel_double_ingot' })
    event.remove({ id: 'firmalife:heating/metal/stainless_steel_double_ingot' })

    // Sheet
    event.remove({ id: 'firmalife:anvil/stainless_steel_sheet' })
    event.remove({ id: 'firmalife:heating/metal/stainless_steel_sheet' })

    // Double Sheet
    event.remove({ id: 'firmalife:welding/stainless_steel_double_sheet' })
    event.remove({ id: 'firmalife:heating/metal/stainless_steel_double_sheet' })

    // Rod
    event.remove({ id: 'firmalife:anvil/stainless_steel_rod' })
    event.remove({ id: 'firmalife:heating/metal/stainless_steel_rod' })

    // Декрафт Jag Lid
    event.recipes.tfc.heating('tfc:jar_lid', 230)
        .resultFluid(Fluid.of('gtceu:tin', 9))
        .id(`tfc:heating/jar_lid`)

    // Pie Pan
    event.recipes.tfc.anvil('4x firmalife:pie_pan', '#forge:plates/wrought_iron', ["hit_last", "hit_second_last", "draw_third_last"])
        .tier(3)
        .id('firmalife:anvil/pie_pan')

    // Jarring Station
    event.shaped('firmalife:jarring_station', [
        'A A',
        'BBB'  
    ], {
        A: '#forge:plates/wrought_iron', 
        B: 'firmalife:treated_lumber'  
    }).id('firmalife:crafting/jarring_station')

    // Vat
    event.shaped('firmalife:vat', [
        'A A',
        'BAB'  
    ], {
        A: '#forge:plates/wrought_iron', 
        B: 'firmalife:beeswax'  
    }).id('firmalife:crafting/vat')

    //#region Рецепты электрической теплицы
    
    // Дерево

    // Семена фруктов
    global.FIRMALIFE_GREENHOUSE_FRUIT_RECIPE_COMPONENTS.forEach(element => {
        generateGreenHouseRecipe(event, element.input, element.fluid_amount, element.output, element.name)
    })

    // Семена ягод
    global.FIRMALIFE_GREENHOUSE_BERRY_RECIPE_COMPONENTS.forEach(element => {
        generateGreenHouseRecipe(event, element.input, element.fluid_amount, element.output, element.name)
    })

    //#endregion
    
    //#region Рецепты теста

    global.FIRMALIFE_MIXER_FLATBREAD_DOUGH_RECIPE_COMPONENTS .forEach(element => {
        event.recipes.gtceu.mixer(element.name)             
            .itemInputs(element.input, '#tfc:sweetener')
            .inputFluids(Fluid.of('firmalife:yeast_starter', 100))
            .itemOutputs(element.output)
            .duration(300)
            .EUt(16)
    })

    //#endregion

    //#region Рецепты плоского хлеба

    global.FIRMALIFE_FURNACE_FLATBREAD_RECIPE_COMPONENTS.forEach(element => {
        event.smelting(element.output, element.input)
            .id(`tfg:smelting/${element.name}`)
    })

    //#endregion
}