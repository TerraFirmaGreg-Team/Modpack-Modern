const registerExpatternproviderRecipes = (event) => {

    event.remove({ mod: 'expatternprovider'})

    
    //#region Ext interface
    

    // IV
    event.recipes.gtceu.assembler('expatternprovider:ex_interface_iv')
        .itemInputs(
            '2x #megacells:mega_interface',
            '4x megacells:accumulation_processor',
            '2x gtceu:iv_conveyor_module',
            'gtceu:fusion_glass',
            '4x gtceu:tungsten_steel_plate',
            '#gtceu:circuits/iv',)
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('expatternprovider:ex_interface')
        .duration(300)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)

    // LuV
    event.recipes.gtceu.assembler('expatternprovider:ex_interface_luv')
        .itemInputs(
            '4x #megacells:mega_interface',
            '4x megacells:accumulation_processor',
            '2x gtceu:luv_conveyor_module',
            'gtceu:fusion_glass',
            '4x gtceu:rhodium_plated_palladium_plate',
            '#gtceu:circuits/luv')
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('2x expatternprovider:ex_interface')
        .duration(300)
        .EUt(30720)
        .cleanroom(CleanroomType.CLEANROOM)

    // ZPM
    event.recipes.gtceu.assembler('expatternprovider:ex_interface_zpm')
        .itemInputs(
            '8x #megacells:mega_interface',
            '4x megacells:accumulation_processor',
            '2x gtceu:zpm_conveyor_module',
            'gtceu:fusion_glass',
            '4x gtceu:naquadah_alloy_plate',
            '#gtceu:circuits/zpm')
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('4x expatternprovider:ex_interface')
        .duration(300)
        .EUt(119680)
        .cleanroom(CleanroomType.CLEANROOM)

    // UV
    event.recipes.gtceu.assembler('expatternprovider:ex_interface_ev')
        .itemInputs(
            '16x #megacells:mega_interface',
            '4x megacells:accumulation_processor',
            '2x gtceu:uv_conveyor_module',
            'gtceu:fusion_glass',
            '4x #forge:plates/darmstadtium',
            '#gtceu:circuits/uv')
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('8x expatternprovider:ex_interface')
        .duration(300)
        .EUt(491520)
        .cleanroom(CleanroomType.CLEANROOM)
    //#endregion

    //#region ex pattern provider 
    // IV
    event.recipes.gtceu.assembler('expatternprovider:ex_pattern_provider_iv')
        .itemInputs(
            '2x #megacells:mega_pattern_provider',
            '4x megacells:accumulation_processor',
            '2x gtceu:iv_conveyor_module',
            '4x gtceu:tungsten_steel_plate',
            '#gtceu:circuits/iv',)
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('expatternprovider:ex_pattern_provider')
        .duration(300)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)

    // LuV
    event.recipes.gtceu.assembler('expatternprovider:ex_pattern_provider_luv')
        .itemInputs(
            '4x #megacells:mega_pattern_provider',
            '4x megacells:accumulation_processor',
            '2x gtceu:luv_conveyor_module',
            '4x gtceu:rhodium_plated_palladium_plate',
            '#gtceu:circuits/luv')
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('2x expatternprovider:ex_pattern_provider')
        .duration(300)
        .EUt(30720)
        .cleanroom(CleanroomType.CLEANROOM)

    // ZPM
    event.recipes.gtceu.assembler('expatternprovider:ex_pattern_provider_zpm')
        .itemInputs(
        '8x #megacells:mega_pattern_provider',
        '4x megacells:accumulation_processor',
        '2x gtceu:zpm_conveyor_module',
        '4x gtceu:naquadah_alloy_plate',
        '#gtceu:circuits/zpm')
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('4x expatternprovider:ex_pattern_provider')
        .duration(300)
        .EUt(119680)
        .cleanroom(CleanroomType.CLEANROOM)
        
    //UV
    event.recipes.gtceu.assembler('expatternprovider:ex_pattern_provider_uv')
        .itemInputs(
            '16x #megacells:mega_pattern_provider',
            '4x megacells:accumulation_processor',
            '2x gtceu:uv_conveyor_module',
            '4x #forge:plates/darmstadtium',
            '#gtceu:circuits/uv')
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('8x expatternprovider:ex_pattern_provider')
        .duration(300)
        .EUt(491520)
        .cleanroom(CleanroomType.CLEANROOM)

    //#endregion

    // cable mega interface
    event.shapeless('expatternprovider:ex_interface_part', ['expatternprovider:ex_interface'])
        .id('expatternprovider:crafting/ex_interface_part')
    
    event.shapeless('expatternprovider:ex_interface', ['expatternprovider:ex_interface_part'])
        .id('expatternprovider:crafting/ex_interface')

    // cable mega pattern provider
    event.shapeless('expatternprovider:ex_pattern_provider_part', ['expatternprovider:ex_pattern_provider'])
        .id('expatternprovider:crafting/ex_pattern_provider')
    
    event.shapeless('expatternprovider:ex_pattern_provider', ['expatternprovider:ex_pattern_provider_part'])
        .id('expatternprovider:crafting/ex_pattern_provider_part')

}