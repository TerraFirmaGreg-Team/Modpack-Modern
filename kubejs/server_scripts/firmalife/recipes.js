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
    
    //#region Рецепты муки

    global.FIRMALIFE_QUERN_FLOUR_RECIPE_COMPONENTS.forEach(element => {
        event.recipes.gtceu.macerator(`tfg:${element.name}`)             
            .itemInputs(element.input)
            .itemOutputs(element.output)
            .duration(200)
            .EUt(16)

        event.recipes.createMilling(element.output, element.input)
            .id(`tfg:milling/${element.name}`)
    })

    //#endregion

    //#region Рецепты теста

    global.FIRMALIFE_MIXER_FLATBREAD_DOUGH_RECIPE_COMPONENTS.forEach(element => {
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

    //#region Смешивание в миске

    // Тесто для пиццы
    event.recipes.gtceu.mixer('firmalife:food/pizza_dough')             
        .itemInputs('firmalife:spice/basil_leaves', '#tfc:foods/dough', 'tfc:powder/salt')
        .inputFluids(Fluid.of('tfc:olive_oil', 1000))
        .itemOutputs('4x firmalife:food/pizza_dough')
        .duration(300)
        .EUt(16)

    event.recipes.create.mixing('4x firmalife:food/pizza_dough', ['firmalife:spice/basil_leaves', '#tfc:foods/dough', 'tfc:powder/salt', Fluid.of('tfc:olive_oil', 1000)])
        .id('firmalife:create/mixer/food/pizza_dough')

    // Vanilla Ice Cream
    event.recipes.gtceu.mixer('firmalife:food/vanilla_ice_cream')             
        .itemInputs('firmalife:ice_shavings', '#tfc:sweetener', 'firmalife:spice/vanilla')
        .inputFluids(Fluid.of('firmalife:cream', 1000))
        .itemOutputs('2x firmalife:food/vanilla_ice_cream')
        .duration(300)
        .EUt(16)

    event.recipes.create.mixing('2x firmalife:food/vanilla_ice_cream', ['firmalife:ice_shavings', '#tfc:sweetener', 'firmalife:spice/vanilla', Fluid.of('firmalife:cream', 1000)])
        .id('firmalife:create/mixer/food/vanilla_ice_cream')

    // Pumpkin Pie Dough
    event.recipes.gtceu.mixer('firmalife:food/pumpkin_pie_dough')             
        .itemInputs('#tfc:sweetener', '#forge:eggs', '2x tfc:food/pumpkin_chunks', '#tfc:foods/flour')
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .itemOutputs('firmalife:food/pumpkin_pie_dough')
        .duration(300)
        .EUt(16)

    event.recipes.create.mixing('firmalife:food/pumpkin_pie_dough', ['#tfc:sweetener', '#forge:eggs', '2x tfc:food/pumpkin_chunks', '#tfc:foods/flour', Fluid.of('minecraft:water', 1000)]
    ).id('firmalife:create/mixer/food/pumpkin_pie_dough')

    // Butter
    event.recipes.gtceu.mixer('firmalife:food/butter')             
        .itemInputs('tfc:powder/salt')
        .inputFluids(Fluid.of('firmalife:cream', 1000))
        .itemOutputs('firmalife:food/butter')
        .duration(300)
        .EUt(16)

    event.recipes.create.mixing('firmalife:food/butter', ['tfc:powder/salt', Fluid.of('firmalife:cream', 1000)])
        .id('firmalife:create/mixer/food/butter')

    // Pie Dough
    event.recipes.gtceu.mixer('firmalife:food/pie_dough')             
        .itemInputs('#tfc:sweetener', 'firmalife:food/butter', '#tfc:foods/flour')
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .itemOutputs('firmalife:food/pie_dough')
        .duration(300)
        .EUt(16)

    event.recipes.create.mixing('firmalife:food/pie_dough', ['#tfc:sweetener', 'firmalife:food/butter', '#tfc:foods/flour', Fluid.of('minecraft:water', 1000)])
        .id('firmalife:create/mixer/food/pie_dough')

    // Cookie Dough
    event.recipes.gtceu.mixer('firmalife:food/cookie_dough')             
        .itemInputs('#tfc:sweetener', 'firmalife:food/butter', '#tfc:foods/flour', '#forge:eggs', 'firmalife:spice/vanilla')
        .itemOutputs('4x firmalife:food/cookie_dough')
        .duration(300)
        .EUt(16)

    event.recipes.create.mixing('4x firmalife:food/cookie_dough', ['#tfc:sweetener', 'firmalife:food/butter', '#tfc:foods/flour', '#forge:eggs', 'firmalife:spice/vanilla'])
        .id('firmalife:create/mixer/food/cookie_dough')

    // Hardtack Dough
    event.recipes.gtceu.mixer('firmalife:food/hardtack_dough')             
        .itemInputs('tfc:powder/salt', '#tfc:foods/flour')
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .itemOutputs('4x firmalife:food/hardtack_dough')
        .duration(300)
        .EUt(16)

    event.recipes.create.mixing('4x firmalife:food/hardtack_dough', ['tfc:powder/salt', '#tfc:foods/flour', Fluid.of('minecraft:water', 1000)])
        .id('firmalife:create/mixer/food/hardtack_dough')

    // Chocolate Ice Cream
    event.recipes.gtceu.mixer('firmalife:food/chocolate_ice_cream')             
        .itemInputs('firmalife:food/vanilla_ice_cream')
        .inputFluids(Fluid.of('firmalife:chocolate', 1000))
        .itemOutputs('firmalife:food/chocolate_ice_cream')
        .duration(300)
        .EUt(16)

    event.recipes.create.mixing('firmalife:food/chocolate_ice_cream', ['firmalife:food/vanilla_ice_cream', Fluid.of('firmalife:chocolate', 1000)])
        .id('firmalife:create/mixer/food/chocolate_ice_cream')

    // White Chocolate Blend
    event.recipes.gtceu.mixer('firmalife:food/white_chocolate_blend/milk')             
        .itemInputs('2x firmalife:food/cocoa_butter', '#tfc:sweetener')
        .inputFluids(Fluid.of('minecraft:milk', 1000))
        .itemOutputs('2x firmalife:food/white_chocolate_blend')
        .duration(300)
        .EUt(16)

    event.recipes.create.mixing('2x firmalife:food/white_chocolate_blend', ['2x firmalife:food/cocoa_butter', '#tfc:sweetener', Fluid.of('minecraft:milk', 1000)])
        .id('firmalife:create/mixer/food/white_chocolate_blend/milk')

    event.recipes.gtceu.mixer('firmalife:food/white_chocolate_blend/yak_milk')             
        .itemInputs('2x firmalife:food/cocoa_butter', '#tfc:sweetener')
        .inputFluids(Fluid.of('firmalife:yak_milk', 1000))
        .itemOutputs('2x firmalife:food/white_chocolate_blend')
        .duration(300)
        .EUt(16)

    event.recipes.create.mixing('2x firmalife:food/white_chocolate_blend', ['2x firmalife:food/cocoa_butter', '#tfc:sweetener', Fluid.of('firmalife:yak_milk', 1000)])
        .id('firmalife:create/mixer/food/white_chocolate_blend/yak_milk')

    event.recipes.gtceu.mixer('firmalife:food/white_chocolate_blend/goat_milk')             
        .itemInputs('2x firmalife:food/cocoa_butter', '#tfc:sweetener')
        .inputFluids(Fluid.of('firmalife:goat_milk', 1000))
        .itemOutputs('2x firmalife:food/white_chocolate_blend')
        .duration(300)
        .EUt(16)

    event.recipes.create.mixing('2x firmalife:food/white_chocolate_blend', ['2x firmalife:food/cocoa_butter', '#tfc:sweetener', Fluid.of('firmalife:goat_milk', 1000)])
        .id('firmalife:create/mixer/food/white_chocolate_blend/goat_milk')

    event.recipes.gtceu.mixer('firmalife:food/white_chocolate_blend/coconut_milk')             
        .itemInputs('2x firmalife:food/cocoa_butter', '#tfc:sweetener')
        .inputFluids(Fluid.of('firmalife:coconut_milk', 1000))
        .itemOutputs('2x firmalife:food/white_chocolate_blend')
        .duration(300)
        .EUt(16)

    event.recipes.create.mixing('2x firmalife:food/white_chocolate_blend', ['2x firmalife:food/cocoa_butter', '#tfc:sweetener', Fluid.of('firmalife:coconut_milk', 1000)])
        .id('firmalife:create/mixer/food/white_chocolate_blend/coconut_milk')

    // Dark Chocolate Blend
    event.recipes.gtceu.mixer('firmalife:food/dark_chocolate_blend/milk')             
        .itemInputs('2x firmalife:food/cocoa_powder', '#tfc:sweetener')
        .inputFluids(Fluid.of('minecraft:milk', 1000))
        .itemOutputs('2x firmalife:food/dark_chocolate_blend')
        .duration(300)
        .EUt(16)

    event.recipes.create.mixing('2x firmalife:food/dark_chocolate_blend', ['2x firmalife:food/cocoa_powder', '#tfc:sweetener', Fluid.of('minecraft:milk', 1000)])
        .id('firmalife:create/mixer/food/dark_chocolate_blend/milk')

    event.recipes.gtceu.mixer('firmalife:food/dark_chocolate_blend/yak_milk')             
        .itemInputs('2x firmalife:food/cocoa_powder', '#tfc:sweetener')
        .inputFluids(Fluid.of('firmalife:yak_milk', 1000))
        .itemOutputs('2x firmalife:food/dark_chocolate_blend')
        .duration(300)
        .EUt(16)

    event.recipes.create.mixing('2x firmalife:food/dark_chocolate_blend', ['2x firmalife:food/cocoa_powder', '#tfc:sweetener', Fluid.of('firmalife:yak_milk', 1000)])
        .id('firmalife:create/mixer/food/dark_chocolate_blend/yak_milk')

    event.recipes.gtceu.mixer('firmalife:food/dark_chocolate_blend/goat_milk')             
        .itemInputs('2x firmalife:food/cocoa_powder', '#tfc:sweetener')
        .inputFluids(Fluid.of('firmalife:goat_milk', 1000))
        .itemOutputs('2x firmalife:food/dark_chocolate_blend')
        .duration(300)
        .EUt(16)

    event.recipes.create.mixing('2x firmalife:food/dark_chocolate_blend', ['2x firmalife:food/cocoa_powder', '#tfc:sweetener', Fluid.of('firmalife:goat_milk', 1000)])
        .id('firmalife:create/mixer/food/dark_chocolate_blend/goat_milk')

    event.recipes.gtceu.mixer('firmalife:food/dark_chocolate_blend/coconut_milk')             
        .itemInputs('2x firmalife:food/cocoa_powder', '#tfc:sweetener')
        .inputFluids(Fluid.of('firmalife:coconut_milk', 1000))
        .itemOutputs('2x firmalife:food/dark_chocolate_blend')
        .duration(300)
        .EUt(16)

    event.recipes.create.mixing('2x firmalife:food/dark_chocolate_blend', ['2x firmalife:food/cocoa_powder', '#tfc:sweetener', Fluid.of('firmalife:coconut_milk', 1000)])
        .id('firmalife:create/mixer/food/dark_chocolate_blend/coconut_milk')

    // Milk Chocolate Blend
    event.recipes.gtceu.mixer('firmalife:food/milk_chocolate_blend/milk')             
        .itemInputs('firmalife:food/cocoa_powder', 'firmalife:food/cocoa_butter', '#tfc:sweetener')
        .inputFluids(Fluid.of('minecraft:milk', 1000))
        .itemOutputs('2x firmalife:food/milk_chocolate_blend')
        .duration(300)
        .EUt(16)

    event.recipes.create.mixing('2x firmalife:food/milk_chocolate_blend', ['firmalife:food/cocoa_powder', 'firmalife:food/cocoa_butter','#tfc:sweetener', Fluid.of('minecraft:milk', 1000)])
        .id('firmalife:create/mixer/food/milk_chocolate_blend/milk')

    event.recipes.gtceu.mixer('firmalife:food/milk_chocolate_blend/yak_milk')             
        .itemInputs('firmalife:food/cocoa_powder', 'firmalife:food/cocoa_butter', '#tfc:sweetener')
        .inputFluids(Fluid.of('firmalife:yak_milk', 1000))
        .itemOutputs('2x firmalife:food/milk_chocolate_blend')
        .duration(300)
        .EUt(16)

    event.recipes.create.mixing('2x firmalife:food/milk_chocolate_blend', ['firmalife:food/cocoa_powder', 'firmalife:food/cocoa_butter','#tfc:sweetener', Fluid.of('firmalife:yak_milk', 1000)])
        .id('firmalife:create/mixer/food/milk_chocolate_blend/yak_milk')

    event.recipes.gtceu.mixer('firmalife:food/milk_chocolate_blend/goat_milk')             
        .itemInputs('firmalife:food/cocoa_powder', 'firmalife:food/cocoa_butter', '#tfc:sweetener')
        .inputFluids(Fluid.of('firmalife:goat_milk', 1000))
        .itemOutputs('2x firmalife:food/milk_chocolate_blend')
        .duration(300)
        .EUt(16)

    event.recipes.create.mixing('2x firmalife:food/milk_chocolate_blend', ['firmalife:food/cocoa_powder', 'firmalife:food/cocoa_butter','#tfc:sweetener', Fluid.of('firmalife:goat_milk', 1000)])
        .id('firmalife:create/mixer/food/milk_chocolate_blend/goat_milk')

    event.recipes.gtceu.mixer('firmalife:food/milk_chocolate_blend/coconut_milk')             
        .itemInputs('firmalife:food/cocoa_powder', 'firmalife:food/cocoa_butter', '#tfc:sweetener')
        .inputFluids(Fluid.of('firmalife:coconut_milk', 1000))
        .itemOutputs('2x firmalife:food/milk_chocolate_blend')
        .duration(300)
        .EUt(16)

    event.recipes.create.mixing('2x firmalife:food/milk_chocolate_blend', ['firmalife:food/cocoa_powder', 'firmalife:food/cocoa_butter','#tfc:sweetener', Fluid.of('firmalife:coconut_milk', 1000)])
        .id('firmalife:create/mixer/food/milk_chocolate_blend/coconut_milk')

    // Strawberry Ice Cream
    event.recipes.gtceu.mixer('firmalife:food/strawberry_ice_cream')             
        .itemInputs('firmalife:food/vanilla_ice_cream', '2x tfc:food/strawberry')
        .itemOutputs('firmalife:food/strawberry_ice_cream')
        .duration(300)
        .EUt(16)

        event.recipes.create.mixing('firmalife:food/strawberry_ice_cream', ['firmalife:food/vanilla_ice_cream', '2x tfc:food/strawberry']
        ).id('firmalife:create/mixer/food/strawberry_ice_cream')

    // Hardtack Dough
    event.recipes.gtceu.mixer('firmalife:food/chocolate_chip_cookie_dough')             
        .itemInputs('4x firmalife:food/cookie_dough', '#firmalife:chocolate_blends')
        .itemOutputs('4x firmalife:food/chocolate_chip_cookie_dough')
        .duration(300)
        .EUt(16)

    event.recipes.create.mixing('4x firmalife:food/chocolate_chip_cookie_dough', ['4x firmalife:food/cookie_dough', '#firmalife:chocolate_blends'])
        .id('firmalife:create/mixer/food/chocolate_chip_cookie_dough')

    //#endregion

    //#region Обжарка некоторой еды

    // Cooked Pizza
    event.smelting('firmalife:food/cooked_pizza', 'firmalife:food/raw_pizza')    

    // Taco Shell
    event.smelting('firmalife:food/taco_shell', 'firmalife:food/corn_tortilla')

    // Sugar Cookie
    event.smelting('firmalife:food/sugar_cookie', 'firmalife:food/cookie_dough')

    // Chocolate Chip Cookie
    event.smelting('firmalife:food/chocolate_chip_cookie', 'firmalife:food/chocolate_chip_cookie_dough')

    // Hardtack
    event.smelting('firmalife:food/hardtack', 'firmalife:food/hardtack_dough')

    // Cooked Pie
    event.smelting('firmalife:food/cooked_pie', 'firmalife:food/filled_pie')

    // Roasted Cocoa Beans
    event.smelting('firmalife:food/roasted_cocoa_beans', 'firmalife:food/cocoa_beans')

    // Pumpkin Pie
    event.smelting('minecraft:pumpkin_pie', 'firmalife:food/raw_pumpkin_pie')

    //#endregion 

    // Sticky Resin by Vat
    event.custom({
        "type": "firmalife:vat",
        "input_item": {
          "ingredient": {
            "item": 'tfc:powder/sulfur'
          }
        },
        "input_fluid": {
          "ingredient": 'tfg:latex',
          "amount": 1000
        },
        "output_item": {
          "item": 'gtceu:sticky_resin'
        }
      });
    
}