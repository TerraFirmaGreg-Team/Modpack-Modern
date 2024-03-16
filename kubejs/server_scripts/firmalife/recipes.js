// priority: 0

const registerFirmaLifeRecipes = (event) => {

    //#region Удаление других рецептов

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

    //#endregion

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

    // Jar Lid
    event.recipes.gtceu.assembler(`tfg:firmalife/jar_lid`)             
        .itemInputs('#forge:ingots/tin')
        .circuit(7)
        .itemOutputs('16x tfc:jar_lid')
        .duration(50)
        .EUt(7)

    // Pineapple Fiber
    event.recipes.gtceu.assembler(`tfg:firmalife/pineapple_fiber`)             
        .itemInputs('firmalife:food/pineapple')
        .circuit(1)
        .itemOutputs('firmalife:pineapple_fiber')
        .duration(50)
        .EUt(7)

    // Pineapple Yarn
    event.recipes.gtceu.assembler(`tfg:firmalife/pineapple_yarn`)             
        .itemInputs('firmalife:pineapple_fiber')
        .circuit(1)
        .itemOutputs('8x firmalife:pineapple_yarn')
        .duration(50)
        .EUt(7)

    // Pineapple Leather
    event.recipes.gtceu.assembler(`tfg:firmalife/pineapple_leather`)             
        .itemInputs('16x firmalife:pineapple_yarn')
        .circuit(1)
        .itemOutputs('firmalife:pineapple_leather')
        .duration(50)
        .EUt(7)

    // TODO: Не работает потому что грегтех
    // Доставание меда из сот
    /*
    event.recipes.gtceu.assembler(`tfg:firmalife/beehive_honey_decomposition`)             
        .itemInputs('firmalife:beehive_frame')
        .circuit(1)
        .itemOutputs('firmalife:beehive_frame', 'firmalife:beeswax')
        .duration(10)
        .EUt(2)*/

    //#region Никстамаль

    event.recipes.gtceu.macerator(`tfg:firmalife/nixtamal`)             
            .itemInputs('firmalife:food/nixtamal')
            .itemOutputs('4x firmalife:food/masa_flour')
            .duration(60)
            .EUt(2)

    event.recipes.createMilling('4x firmalife:food/masa_flour', 'firmalife:food/nixtamal')
        .id(`tfg:milling/firmalife/nixtamal`)

    //#endregion

    //#region Рецепты теплиц

    //#region Медная

    // Стена
    event.shaped('8x firmalife:copper_greenhouse_wall', [
        'ABA',
        'ABA',
        'ABA' 
    ], {
        A: '#forge:rods/copper',
        B: 'minecraft:glass'   
    }).id('firmalife:crafting/greenhouse/copper_greenhouse_wall')

    // Панель
    event.shaped('8x firmalife:copper_greenhouse_panel_wall', [
        'ABA',
        'ABA',
        'ABA' 
    ], {
        A: '#forge:rods/copper',
        B: 'firmalife:reinforced_glass'   
    }).id('firmalife:crafting/greenhouse/copper_greenhouse_panel_wall')

    // Панельная Крыша
    event.shaped('4x firmalife:copper_greenhouse_panel_roof', [
        'A  ',
        'BA ',
        'BBA' 
    ], {
        A: 'firmalife:reinforced_glass',
        B: '#forge:rods/copper'   
    }).id('firmalife:crafting/greenhouse/copper_greenhouse_panel_roof')

    // Крыша
    event.shaped('4x firmalife:copper_greenhouse_roof', [
        'A  ',
        'BA ',
        'BBA' 
    ], {
        A: '#forge:rods/copper',
        B: 'firmalife:reinforced_glass'   
    }).id('firmalife:crafting/greenhouse/copper_greenhouse_roof')

    // Верхушка крыши
    event.shaped('8x firmalife:copper_greenhouse_roof_top', [
        'ABA',
        'BAB' 
    ], {
        A: '#forge:rods/copper',
        B: 'firmalife:reinforced_glass'   
    }).id('firmalife:crafting/greenhouse/copper_greenhouse_roof_top')

    // Люк
    event.shaped('8x firmalife:copper_greenhouse_trapdoor', [
        'ABA',
        'BAB' 
    ], {
        A: 'firmalife:reinforced_glass',
        B: '#forge:rods/copper'
    }).id('firmalife:crafting/greenhouse/copper_greenhouse_trapdoor')

    // Дверь
    event.shaped('2x firmalife:copper_greenhouse_door', [
        'AB',
        'AB',
        'AB' 
    ], {
        A: '#forge:rods/copper',
        B: 'minecraft:glass'
    }).id('firmalife:crafting/greenhouse/copper_greenhouse_door')

    // Порт
    event.shaped('8x firmalife:copper_greenhouse_port', [
        'AA',
        'BC',
        'AA' 
    ], {
        A: 'firmalife:reinforced_glass',
        B: '#forge:rods/copper',
        C: 'firmalife:copper_pipe'
    }).id('firmalife:crafting/greenhouse/copper_greenhouse_port')

    //#endregion

    //#region Железная

    // Стена
    event.shaped('8x firmalife:iron_greenhouse_wall', [
        'ABA',
        'ABA',
        'ABA' 
    ], {
        A: '#forge:rods/wrought_iron',
        B: 'minecraft:glass'   
    }).id('firmalife:crafting/greenhouse/iron_greenhouse_wall')

    // Панель
    event.shaped('8x firmalife:iron_greenhouse_panel_wall', [
        'ABA',
        'ABA',
        'ABA' 
    ], {
        A: '#forge:rods/wrought_iron',
        B: 'firmalife:reinforced_glass'   
    }).id('firmalife:crafting/greenhouse/iron_greenhouse_panel_wall')

    // Панельная Крыша
    event.shaped('4x firmalife:iron_greenhouse_panel_roof', [
        'A  ',
        'BA ',
        'BBA' 
    ], {
        A: 'firmalife:reinforced_glass',
        B: '#forge:rods/wrought_iron'   
    }).id('firmalife:crafting/greenhouse/iron_greenhouse_panel_roof')

    // Крыша
    event.shaped('4x firmalife:iron_greenhouse_roof', [
        'A  ',
        'BA ',
        'BBA' 
    ], {
        A: '#forge:rods/wrought_iron',
        B: 'firmalife:reinforced_glass'   
    }).id('firmalife:crafting/greenhouse/iron_greenhouse_roof')

    // Верхушка крыши
    event.shaped('8x firmalife:iron_greenhouse_roof_top', [
        'ABA',
        'BAB' 
    ], {
        A: '#forge:rods/wrought_iron',
        B: 'firmalife:reinforced_glass'   
    }).id('firmalife:crafting/greenhouse/iron_greenhouse_roof_top')

    // Люк
    event.shaped('8x firmalife:iron_greenhouse_trapdoor', [
        'ABA',
        'BAB' 
    ], {
        A: 'firmalife:reinforced_glass',
        B: '#forge:rods/wrought_iron'
    }).id('firmalife:crafting/greenhouse/iron_greenhouse_trapdoor')

    // Дверь
    event.shaped('2x firmalife:iron_greenhouse_door', [
        'AB',
        'AB',
        'AB' 
    ], {
        A: '#forge:rods/wrought_iron',
        B: 'minecraft:glass'
    }).id('firmalife:crafting/greenhouse/iron_greenhouse_door')

    // Порт
    event.shaped('8x firmalife:iron_greenhouse_port', [
        'AA',
        'BC',
        'AA' 
    ], {
        A: 'firmalife:reinforced_glass',
        B: '#forge:rods/wrought_iron',
        C: 'firmalife:copper_pipe'
    }).id('firmalife:crafting/greenhouse/iron_greenhouse_port')

    //#endregion

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

    //#endregion

    //#region Укрепленное стекло

    event.shaped('firmalife:reinforced_glass', [
        'AB'  
    ], {
        A: '#tfc:saws', 
        B: 'gtceu:tempered_glass'   
    }).id('tfg:shaped/reinforced_glass')

    generateCutterRecipe(event, '3x gtceu:tempered_glass', null, '8x firmalife:reinforced_glass', 100, 7, 'reinforced_glass')

    //#endregion

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