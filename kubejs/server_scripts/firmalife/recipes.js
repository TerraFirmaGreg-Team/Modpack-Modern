// priority: 0

const registerFirmaLifeRecipes = (event) => {
    
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
        
}