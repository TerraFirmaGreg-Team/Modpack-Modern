const registerExtendedAE2Recipes = (event) => {

    event.remove({not:[
        { id: 'expatternprovider:epp_part' },
        { id: 'expatternprovider:ei_part' },
        { id: 'expatternprovider:epp_alt' },
        { id: 'expatternprovider:ei_alt' },
    ], mod: 'expatternprovider' });
    

    //#region Ext interface

    // IV
    event.recipes.gtceu.assembly_line('expatternprovider:ex_interface_iv')
        .itemInputs(
            '2x #megacells:mega_interface',
            '4x megacells:accumulation_processor',
            '4x gtceu:iv_conveyor_module',
            'gtceu:fusion_glass',
            '2x #forge:dense_plates/tungsten_steel',
            '#gtceu:circuits/iv',
            '2x #gtceu:circuits/ev',)
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('expatternprovider:ex_interface')
        .duration(300)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)

    // LuV
    event.recipes.gtceu.assembly_line('expatternprovider:ex_interface_luv')
        .itemInputs(
            '4x #megacells:mega_interface',
            '4x megacells:accumulation_processor',
            '4x gtceu:luv_conveyor_module',
            '2x gtceu:fusion_glass',
            '2x #forge:dense_plates/rhodium_plated_palladium',
            '#gtceu:circuits/luv',
            '2x #gtceu:circuits/iv',)
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('2x expatternprovider:ex_interface')
        .duration(300)
        .EUt(30720)
        .cleanroom(CleanroomType.CLEANROOM)

    // ZPM
    event.recipes.gtceu.assembly_line('expatternprovider:ex_interface_zpm')
        .itemInputs(
            '8x #megacells:mega_interface',
            '4x megacells:accumulation_processor',
            '4x gtceu:zpm_conveyor_module',
            '4x gtceu:fusion_glass',
            '2x #forge:dense_plates/naquadah_alloy',
            '#gtceu:circuits/zpm',
            '2x #gtceu:circuits/luv',)
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('4x expatternprovider:ex_interface')
        .duration(300)
        .EUt(119680)
        .cleanroom(CleanroomType.CLEANROOM)

    // UV
    event.recipes.gtceu.assembly_line('expatternprovider:ex_interface_ev')
        .itemInputs(
            '16x #megacells:mega_interface',
            '4x megacells:accumulation_processor',
            '4x gtceu:uv_conveyor_module',
            '8x gtceu:fusion_glass',
            '4x #forge:dense_plates/darmstadtium',
            '#gtceu:circuits/uv',
            '2x #gtceu:circuits/zpm',)
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('8x expatternprovider:ex_interface')
        .duration(300)
        .EUt(491520)
        .cleanroom(CleanroomType.CLEANROOM)
    //#endregion

    //#region ex pattern provider 
    // IV
    event.recipes.gtceu.assembly_line('expatternprovider:ex_pattern_provider_iv')
        .itemInputs(
            '2x #megacells:mega_pattern_provider',
            '4x megacells:accumulation_processor',
            '4x gtceu:iv_conveyor_module',
            '2x #forge:dense_plates/tungsten_steel',
            '#gtceu:circuits/iv',
            '2x #gtceu:circuits/ev',)
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('expatternprovider:ex_pattern_provider')
        .duration(300)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)

    // LuV
    event.recipes.gtceu.assembly_line('expatternprovider:ex_pattern_provider_luv')
        .itemInputs(
            '4x #megacells:mega_pattern_provider',
            '4x megacells:accumulation_processor',
            '4x gtceu:luv_conveyor_module',
            '2x #forge:dense_plates/rhodium_plated_palladium',
            '#gtceu:circuits/luv',
            '2x #gtceu:circuits/iv',)
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('2x expatternprovider:ex_pattern_provider')
        .duration(300)
        .EUt(30720)
        .cleanroom(CleanroomType.CLEANROOM)

    // ZPM
    event.recipes.gtceu.assembly_line('expatternprovider:ex_pattern_provider_zpm')
        .itemInputs(
        '8x #megacells:mega_pattern_provider',
        '4x megacells:accumulation_processor',
        '4x gtceu:zpm_conveyor_module',
        '2x #forge:dense_plates/naquadah_alloy',
        '#gtceu:circuits/zpm',
        '2x #gtceu:circuits/luv',)
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('4x expatternprovider:ex_pattern_provider')
        .duration(300)
        .EUt(119680)
        .cleanroom(CleanroomType.CLEANROOM)
        
    //UV
    event.recipes.gtceu.assembly_line('expatternprovider:ex_pattern_provider_uv')
        .itemInputs(
            '16x #megacells:mega_pattern_provider',
            '4x megacells:accumulation_processor',
            '4x gtceu:uv_conveyor_module',
            '2x #forge:dense_plates/darmstadtium',
            '#gtceu:circuits/uv',
            '2x #gtceu:circuits/zpm',)
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 1152))
        .itemOutputs('8x expatternprovider:ex_pattern_provider')
        .duration(300)
        .EUt(491520)
        .cleanroom(CleanroomType.CLEANROOM)

    //#endregion

    //#region bus

    //ex import bus part
    event.recipes.gtceu.assembly_line('expatternprovider:ex_import_bus_part')
        .itemInputs(
            '2x #forge:plates/tungsten_steel',
            '8x ae2:calculation_processor',
            '4x megacells:accumulation_processor',
            '4x ae2:annihilation_core',
            '2x ae2:import_bus',
            '2x gtceu:iv_conveyor_module',
            '2x gtceu:iv_electric_pump',
            'gtceu:iv_robot_arm',
            '4x #forge:rods/tungsten_steel',
            '8x #forge:bolts/tungsten_steel',
            '4x ae2:speed_card',)
        .inputFluids(Fluid.of('gtceu:polybenzimidazole', 144))
        .itemOutputs('expatternprovider:ex_import_bus_part')
        .duration(200)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)

    //ex export bus part
    event.recipes.gtceu.assembly_line('expatternprovider:ex_export_bus_part')
        .itemInputs(
        '2x #forge:plates/tungsten_steel',
        '8x ae2:calculation_processor',
        '4x megacells:accumulation_processor',
        '4x ae2:formation_core',
        '2x ae2:export_bus',
        '2x gtceu:iv_conveyor_module',
        '2x gtceu:iv_electric_pump',
        'gtceu:iv_robot_arm',
        '4x #forge:rods/tungsten_steel',
        '8x #forge:bolts/tungsten_steel',
        '4x ae2:speed_card',)
    .inputFluids(Fluid.of('gtceu:polybenzimidazole', 144))
    .itemOutputs('expatternprovider:ex_export_bus_part')
    .duration(200)
    .EUt(7680)
    .cleanroom(CleanroomType.CLEANROOM)

    //tag export bus
    event.recipes.gtceu.assembler('expatternprovider:tag_export_bus')
        .itemInputs(
            'expatternprovider:ex_export_bus_part',
            '2x ae2:logic_processor',
            'gtceu:digital_interface_cover',)
        .itemOutputs('expatternprovider:tag_export_bus')
        .duration(100)
        .EUt(480)

    //tag storage bus
    event.recipes.gtceu.assembler('expatternprovider:tag_storage_bus')
        .itemInputs(
            'ae2:storage_bus',
            '2x ae2:logic_processor',
            'gtceu:digital_interface_cover',)
        .itemOutputs('expatternprovider:tag_storage_bus')
        .duration(100)
        .EUt(480)

    //mod export bus
    event.recipes.gtceu.assembler('expatternprovider:mod_export_bus')
        .itemInputs(
            'expatternprovider:ex_export_bus_part',
            '2x ae2:calculation_processor',
            'gtceu:digital_interface_cover',)
        .itemOutputs('expatternprovider:mod_export_bus')
        .duration(100)
        .EUt(480)

    //mod storage bus
    event.recipes.gtceu.assembler('expatternprovider:mod_storage_bus')
        .itemInputs(
            'ae2:storage_bus',
            '2x ae2:calculation_processor',
            'gtceu:digital_interface_cover',)
        .itemOutputs('expatternprovider:mod_storage_bus')
        .duration(100)
        .EUt(480)

    //precise export bus
    event.recipes.gtceu.assembler('expatternprovider:precise_export_bus')
        .itemInputs(
            'expatternprovider:ex_export_bus_part',
            '2x ae2:calculation_processor',)
        .itemOutputs('expatternprovider:precise_export_bus')
        .duration(100)
        .EUt(480)

    //precise storage bus
    event.recipes.gtceu.assembler('expatternprovider:precise_storage_bus')
        .itemInputs(
            'ae2:storage_bus',
            '2x ae2:calculation_processor',)
        .itemOutputs('expatternprovider:precise_storage_bus')
        .duration(100)
        .EUt(480)

    //threshold export bus
    event.recipes.gtceu.assembler('expatternprovider:threshold_export_bus')
        .itemInputs(
            'expatternprovider:ex_export_bus_part',
            '2x ae2:logic_processor',
            'ae2:level_emitter',)
        .itemOutputs('expatternprovider:threshold_export_bus')
        .duration(100)
        .EUt(480)

    

    //#endregion

    //caner
    event.recipes.gtceu.assembler('expatternprovider:caner')
        .itemInputs(
            '#forge:frames/stainless_steel',
            'expatternprovider:ingredient_buffer',
            'ae2:import_bus',
            'ae2:export_bus',
            '2x ae2:calculation_processor')
        .itemOutputs('expatternprovider:caner')
        .duration(100)
        .EUt(480)

    //active formation plane
    event.recipes.gtceu.assembler('expatternprovider:active_formation_plane')
        .itemInputs(
            'ae2:formation_plane',
            'expatternprovider:ex_export_bus_part',
            '2x ae2:engineering_processor')
        .itemOutputs('expatternprovider:active_formation_plane')
        .duration(100)
        .EUt(480)

    //pattern modifier
    event.recipes.gtceu.assembler('expatternprovider:pattern_modifier')
        .itemInputs(
            'ae2:blank_pattern',
            'ae2:logic_processor')
        .inputFluids(Fluid.of('gtceu:green_dye', 144))
        .itemOutputs('expatternprovider:pattern_modifier')
        .duration(100)
        .EUt(480)

    //threshold level emitter
    event.recipes.gtceu.assembler('expatternprovider:threshold_level_emitter')
        .itemInputs(
            'ae2:level_emitter',
            '2x minecraft:redstone_torch',
            '2x ae2:calculation_processor',)
        .itemOutputs('expatternprovider:threshold_level_emitter')
        .duration(100)
        .EUt(480)
    
    //wireless tool
    event.recipes.gtceu.assembler('expatternprovider:wireless_tool')
        .itemInputs(
            '3x #forge:plates/steel',
            '#gtceu:circuits/ev',
            '2x gtceu:ev_emitter',
            '2x ae2:wireless_receiver',
            'ae2:calculation_processor')
        .itemOutputs('expatternprovider:wireless_tool')
        .duration(100)
        .EUt(1920)

    //wireless tool
    event.recipes.gtceu.assembler('expatternprovider:wireless_connect')
        .itemInputs(
            '2x gtceu:iv_machine_casing',
            '4x #gtceu:circuits/iv',
            '8x ae2:wireless_receiver',
            '4x gtceu:iv_emitter',
            '4x gtceu:iv_sensor',
            '8x ae2:engineering_processor',
            '4x megacells:accumulation_processor')
        .itemOutputs('2x expatternprovider:wireless_connect')
        .duration(200)
        .EUt(7580)

    //me packing tape
    event.recipes.gtceu.assembler('expatternprovider:me_packing_tape')
        .itemInputs(
            '#forge:rods/stainless_steel',
            '8x #forge:dusts/fluix',
            '4x #forge:plates/paper',)
        .inputFluids(Fluid.of('gtceu:glue', 144))
        .itemOutputs(Item.of('expatternprovider:me_packing_tape', '{Damage:0}'))
        .duration(100)
        .EUt(1920)

    //ex pattern access
    event.recipes.gtceu.assembler('expatternprovider:ex_pattern_access_part')
        .itemInputs(
            'ae2:pattern_access_terminal',
            '4x ae2:logic_processor',
            '2x megacells:accumulation_processor',)
        .itemOutputs('expatternprovider:ex_pattern_access_part')
        .duration(100)
        .EUt(1920)

    // Wireless Crafting Terminal
    event.recipes.gtceu.assembler('expatternprovider:wireless_ex_pat')
        .itemInputs(
            '2x gtceu:hv_lithium_battery',
            '2x gtceu:luv_sensor',
            'gtceu:luv_emitter',
            '2x #forge:rods/osmiridium',
            'ae2:wireless_terminal',
            'expatternprovider:ex_pattern_access_part')
        .itemOutputs('expatternprovider:wireless_ex_pat')
        .duration(30)
        .EUt(250)
    
    //#region ex molecular assembler
    event.recipes.gtceu.assembly_line('expatternprovider:ex_molecular_assembler_iv')
    .itemInputs(
        '8x ae2:molecular_assembler',
        '4x #gtceu:circuits/iv',
        '2x #gtceu:circuits/ev',
        '8x megacells:accumulation_processor',
        '8x ae2:logic_processor',
        '2x gtceu:iv_conveyor_module',
        '2x gtceu:iv_robot_arm',
        '4x #forge:rods/long/tungsten_steel',)
    .inputFluids(
        Fluid.of('gtceu:soldering_alloy', 576),
        Fluid.of('gtceu:polybenzimidazole', 1152),)
    .itemOutputs('expatternprovider:ex_molecular_assembler')
    .duration(200)
    .EUt(7680)
    .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.assembly_line('expatternprovider:ex_molecular_assembler_luv')
    .itemInputs(
        '16x ae2:molecular_assembler',
        '4x #gtceu:circuits/luv',
        '2x #gtceu:circuits/iv',
        '8x megacells:accumulation_processor',
        '8x ae2:logic_processor',
        '2x gtceu:luv_conveyor_module',
        '2x gtceu:luv_robot_arm',
        '4x #forge:rods/long/rhodium_plated_palladium',)
    .inputFluids(
        Fluid.of('gtceu:soldering_alloy', 576),
        Fluid.of('gtceu:polybenzimidazole', 1152),)
    .itemOutputs('2x expatternprovider:ex_molecular_assembler')
    .duration(200)
    .EUt(30720)
    .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.assembly_line('expatternprovider:ex_molecular_assembler_zpm')
    .itemInputs(
        '32x ae2:molecular_assembler',
        '4x #gtceu:circuits/zpm',
        '2x #gtceu:circuits/luv',
        '8x megacells:accumulation_processor',
        '8x ae2:logic_processor',
        '2x gtceu:zpm_conveyor_module',
        '2x gtceu:zpm_robot_arm',
        '4x #forge:rods/long/naquadah_alloy')
    .inputFluids(
        Fluid.of('gtceu:soldering_alloy', 576),
        Fluid.of('gtceu:polybenzimidazole', 1152),)
    .itemOutputs('4x expatternprovider:ex_molecular_assembler')
    .duration(200)
    .EUt(122880)
    .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.assembly_line('expatternprovider:ex_molecular_assembler_uv')
    .itemInputs(
        '32x ae2:molecular_assembler',
        '32x ae2:molecular_assembler',
        '4x #gtceu:circuits/uv',
        '2x #gtceu:circuits/zpm',
        '8x megacells:accumulation_processor',
        '8x ae2:logic_processor',
        '2x gtceu:uv_conveyor_module',
        '2x gtceu:uv_robot_arm',
        '4x #forge:rods/long/darmstadtium')
    .inputFluids(
        Fluid.of('gtceu:soldering_alloy', 576),
        Fluid.of('gtceu:polybenzimidazole', 1152),)
    .itemOutputs('8x expatternprovider:ex_molecular_assembler')
    .duration(200)
    .EUt(491520)
    .cleanroom(CleanroomType.CLEANROOM)

    //#endregion

    //ex io port
    event.recipes.gtceu.assembler('expatternprovider:ex_io_port')
        .itemInputs(
            'gtceu:ev_machine_casing',
            'ae2:io_port',
            '2x megacells:accumulation_processor',
            '4x ae2:logic_processor',
            '4x ae2:engineering_processor',
            '4x ae2:speed_card',)
        .itemOutputs('expatternprovider:ex_io_port')
        .duration(200)
        .EUt(1000)
    
    event.recipes.gtceu.assembler('expatternprovider:ex_drive')
        .itemInputs(
            'gtceu:ev_machine_casing',
            'ae2:drive',
            '2x megacells:accumulation_processor',
            '4x ae2:logic_processor',
            '4x ae2:engineering_processor',
            '2x ae2:capacity_card',)
        .itemOutputs('expatternprovider:ex_drive')
        .duration(200)
        .EUt(1920)

    event.recipes.gtceu.assembler('expatternprovider:ingredient_buffer')
        .itemInputs(
            'gtceu:hv_machine_casing',
            '2x ae2:quartz_vibrant_glass',
            'gtceu:stainless_steel_drum',
            '2x ae2:cell_component_1k',
            'gtceu:hv_robot_arm',
            'gtceu:hv_electric_pump',)
        .itemOutputs('expatternprovider:ingredient_buffer')
        .duration(200)
        .EUt(1920)

    event.recipes.gtceu.assembler('expatternprovider:ex_charger')
        .itemInputs(
            '4x ae2:charger',
            '4x ae2:storage_bus',
            'ae2:cable_interface',
            '4x #forge:double_wires/uranium_triplatinum',
            '4x ae2:logic_processor',
            '4x ae2:engineering_processor',
            '2x megacells:accumulation_processor',

        )
        .itemOutputs('expatternprovider:ex_charger')
        .duration(200)
        .EUt(1920)

        

    }