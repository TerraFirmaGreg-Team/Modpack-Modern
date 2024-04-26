const registerMEGASellsRecipes = (event) => {

    event.remove({ mod: 'megacells'})
    /*
    event.remove({ id: 'megacells:crafting/mega_energy_cell' })
    event.remove({ id: 'megacells:crafting/sky_steel_block' })
    event.remove({ id: 'megacells:crafting/sky_steel_ingot_from_sky_steel_block' })
    event.remove({ id: 'megacells:transform/sky_steel_ingot' })
    event.remove({ id: 'megacells:inscriber/accumulation_processor_press' })
    event.remove({ id: 'megacells:inscriber/accumulation_processor_print' })
    event.remove({ id: 'megacells:inscriber/accumulation_processor_press_extra' })
    event.remove({ id: 'megacells:inscriber/accumulation_processor' })
    event.remove({ id: 'megacells:cells/mega_fluid_cell_housing' })
    event.remove({ id: 'megacells:cells/mega_item_cell_housing' })

    event.remove({ id: 'megacells:crafting/decompression_module' })
    event.remove({ id: 'megacells:cells/standard/bulk_item_cell' })
    event.remove({ id: 'megacells:crafting/bulk_cell_component' })
    event.remove({ id: 'megacells:crafting/compression_card' })
*/
    //printed accumulation circuit
    
    event.recipes.gtceu.forming_press('megacells:printed_accumulation_processor')
        .itemInputs('#forge:plates/enriched_naquadah')
        .notConsumable('megacells:accumulation_processor_press')
        .itemOutputs('megacells:printed_accumulation_processor')
        .duration(20)
        .EUt(1920)

    // Inscrdiber Silicon Press
    event.recipes.gtceu.laser_engraver('ae2:accumulation_processor_press_iron')
        .itemInputs('#forge:plates/iron', 'ae2:singularity')
        .notConsumable('#forge:lenses/black')
        .itemOutputs('megacells:accumulation_processor_press')
        .duration(6000)
        .EUt(1920)

    event.recipes.gtceu.laser_engraver('ae2:accumulation_processor_press_wrought_iron')
        .itemInputs('#forge:plates/wrought_iron', 'ae2:singularity')
        .notConsumable('#forge:lenses/black')
        .itemOutputs('megacells:accumulation_processor_press')
        .duration(4000)
        .EUt(1920)

    //accumulation processor
    event.recipes.gtceu.circuit_assembler('megacells:accumulation_processor')
        .itemInputs(
            'ae2:printed_silicon',
            'megacells:printed_accumulation_processor',
            '#gtceu:circuits/iv',
            '2x #gtceu:resistors',
            '2x #forge:fine_wires/niobium_titanium',)
        .inputFluids(Fluid.of('gtceu:fluix', 144))
        .itemOutputs('2x megacells:accumulation_processor')
        .duration(20)
        .EUt(1920)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.circuit_assembler('megacells:accumulation_processor_adv')
        .itemInputs(
            'ae2:printed_silicon',
            'megacells:printed_accumulation_processor',
            '#gtceu:circuits/iv',
            'gtceu:advanced_smd_resistor',
            '2x #forge:fine_wires/niobium_titanium',)
        .inputFluids(Fluid.of('gtceu:fluix', 144))
        .itemOutputs('2x megacells:accumulation_processor')
        .duration(20)
        .EUt(1920)
        .cleanroom(CleanroomType.CLEANROOM)

        /*
    //Mega Item Cell Housing
    event.shaped('megacells:mega_item_cell_housing', [
        'ABA',
        'CDC',
        'BBB'
    ], {
        A: 'ae2:quartz_vibrant_glass',
        B: '#forge:plates/enriched_naquadah',
        C: '#forge:fine_wires/niobium_titanium',
        D: '#gtceu:circuits/iv',
    }).id('tfg:crafting/mega_item_cell_housing')
    
    //Mega Fluid Cell Housing
    event.shaped('megacells:mega_fluid_cell_housing', [
        'ABA',
        'CDC',
        'BBB'
    ], {
        A: 'ae2:quartz_vibrant_glass',
        B: '#forge:plates/incoloy_ma_956',
        C: '#forge:fine_wires/niobium_titanium',
        D: '#gtceu:circuits/iv',
    }).id('tfg:crafting/mega_fluid_cell_housing')

    //#region Storage Components

    // 1k storage components
    event.recipes.gtceu.assembler('megacells:cell_component_1m')
        .itemInputs(
            '4x #gtceu:batteries/ulv',
            '4x #forge:plates/wrought_iron',
            '4x #forge:dusts/certus_quartz',
            '2x megacells:accumulation_processor',)
        .inputFluids(Fluid.of('gtceu:hsla_steel', 144))
        .itemOutputs('megacells:cell_component_1m')
        .duration(200)
        .EUt(480)

    // 4k storage components
    event.recipes.gtceu.assembler('megacells:cell_component_4m')
        .itemInputs(
            '4x #gtceu:circuits/ev',
            '4x #forge:plates/titanium',
            '4x #forge:dusts/certus_quartz',
            '2x megacells:accumulation_processor')
        .inputFluids(Fluid.of('gtceu:hsla_steel', 144))
        .itemOutputs('megacells:cell_component_4m')
        .duration(200)
        .EUt(1920)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.assembler('megacells:cell_component_4m_1m')
        .itemInputs(
            '2x megacells:accumulation_processor',
            '2x #gtceu:circuits/ev',
            '4x megacells:cell_component_1m')
        .inputFluids(Fluid.of('gtceu:hsla_steel', 144))
        .itemOutputs('megacells:cell_component_4m')
        .duration(400)
        .EUt(1920)
        .cleanroom(CleanroomType.CLEANROOM)

    // 16k storage components
    event.recipes.gtceu.assembler('megacells:cell_component_16m')
        .itemInputs(
            '4x #gtceu:circuits/iv',
            '4x #forge:plates/tungsten_steel',
            '8x #forge:dusts/certus_quartz',
            '2x megacells:accumulation_processor',)
        .inputFluids(Fluid.of('gtceu:hsla_steel', 144))
        .itemOutputs('megacells:cell_component_16m')
        .duration(200)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.assembler('megacells:cell_component_16m_4m')
        .itemInputs(
            '2x megacells:accumulation_processor',
            '2x #gtceu:circuits/iv',
            '4x megacells:cell_component_4m')
        .inputFluids(Fluid.of('gtceu:hsla_steel', 144))
        .itemOutputs('megacells:cell_component_16m')
        .duration(400)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)

    // 64k storage components
    event.recipes.gtceu.assembler('megacells:cell_component_64m')
        .itemInputs(
            '4x #gtceu:circuits/luv',
            '4x #forge:plates/rhodium_plated_palladium',
            '8x #forge:dusts/certus_quartz',
            '2x megacells:accumulation_processor')
        .inputFluids(Fluid.of('gtceu:hsla_steel', 144))
        .itemOutputs('megacells:cell_component_64m')
        .duration(200)
        .EUt(30720)
        .cleanroom(CleanroomType.CLEANROOM)
        event.recipes.gtceu.assembler('megacells:cell_component_64m_16m')
        .itemInputs(
            '2x megacells:accumulation_processor',
            '2x #gtceu:circuits/luv',
            '4x megacells:cell_component_16m')
        .inputFluids(Fluid.of('gtceu:hsla_steel', 144))
        .itemOutputs('megacells:cell_component_64m')
        .duration(400)
        .EUt(30720)
        .cleanroom(CleanroomType.CLEANROOM)

    // 256k storage components
    event.recipes.gtceu.assembler('megacells:cell_component_256m')
        .itemInputs(
            '4x #gtceu:circuits/zpm',
            '4x #forge:plates/naquadah_alloy',
            '16x #forge:dusts/certus_quartz',
            '2x megacells:accumulation_processor',)
        .inputFluids(Fluid.of('gtceu:hsla_steel', 144))
        .itemOutputs('megacells:cell_component_256m')
        .duration(200)
        .EUt(122880)
        .cleanroom(CleanroomType.CLEANROOM)
    event.recipes.gtceu.assembler('megacells:cell_component_256m_64m')
        .itemInputs(
            '2x megacells:accumulation_processor',
            '2x #gtceu:circuits/zpm',
            '4x megacells:cell_component_64m')
        .inputFluids(Fluid.of('gtceu:hsla_steel', 144))
        .itemOutputs('megacells:cell_component_256m')
        .duration(400)
        .EUt(122880)
        .cleanroom(CleanroomType.CLEANROOM)
        */
    //#endregion

    //#region MEGA interface
    // EV
    event.recipes.gtceu.assembler('megacells:mega_interface_ev')
        .itemInputs(
            '2x #ae2:interface',
            '4x megacells:accumulation_processor',
            '2x gtceu:ev_conveyor_module',
            '4x gtceu:laminated_glass',
            '4x gtceu:titanium_plate',
            '2x ae2:annihilation_core',
            '2x ae2:formation_core',
            '#gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 1152))
        .itemOutputs('megacells:mega_interface')
        .duration(300)
        .EUt(1920)
        .cleanroom(CleanroomType.CLEANROOM)

    // IV
    event.recipes.gtceu.assembler('megacells:mega_interface_iv')
        .itemInputs(
            '4x #ae2:interface',
            '4x megacells:accumulation_processor',
            '2x gtceu:iv_conveyor_module',
            '4x gtceu:laminated_glass',
            '4x gtceu:tungsten_steel_plate',
            '2x ae2:annihilation_core',
            '2x ae2:formation_core',
            '#gtceu:circuits/iv',)
        .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 1152))
        .itemOutputs('2x megacells:mega_interface')
        .duration(300)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)

    // LuV
    event.recipes.gtceu.assembler('megacells:mega_interface_luv')
        .itemInputs(
            '8x #ae2:interface',
            '4x megacells:accumulation_processor',
            '2x gtceu:luv_conveyor_module',
            '4x gtceu:laminated_glass',
            '4x gtceu:rhodium_plated_palladium_plate',
            '2x ae2:annihilation_core',
            '2x ae2:formation_core',
            '#gtceu:circuits/luv')
        .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 1152))
        .itemOutputs('4x megacells:mega_interface')
        .duration(300)
        .EUt(30720)
        .cleanroom(CleanroomType.CLEANROOM)

    // ZPM
    event.recipes.gtceu.assembler('megacells:mega_interface_zpm')
        .itemInputs(
            '16x #ae2:interface',
            '4x megacells:accumulation_processor',
            '2x gtceu:zpm_conveyor_module',
            '4x gtceu:laminated_glass',
            '4x gtceu:naquadah_alloy_plate',
            '2x ae2:annihilation_core',
            '2x ae2:formation_core',
            '#gtceu:circuits/zpm')
        .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 1152))
        .itemOutputs('8x megacells:mega_interface')
        .duration(300)
        .EUt(119680)
        .cleanroom(CleanroomType.CLEANROOM)

    //#endregion

    //#region MEGA provider
    // EV
    event.recipes.gtceu.assembler('megacells:mega_pattern_provider_ev')
        .itemInputs(
            '2x #ae2:pattern_provider',
            '4x megacells:accumulation_processor',
            '2x gtceu:ev_conveyor_module',
            '4x gtceu:titanium_plate',
            '2x ae2:annihilation_core',
            '2x ae2:formation_core',
            '#gtceu:circuits/ev')
        .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 1152))
        .itemOutputs('megacells:mega_pattern_provider')
        .duration(300)
        .EUt(1920)
        .cleanroom(CleanroomType.CLEANROOM)

    // IV
    event.recipes.gtceu.assembler('megacells:mega_pattern_provider_iv')
        .itemInputs(
            '4x #ae2:pattern_provider',
            '4x megacells:accumulation_processor',
            '2x gtceu:iv_conveyor_module',
            '4x gtceu:tungsten_steel_plate',
            '2x ae2:annihilation_core',
            '2x ae2:formation_core',
            '#gtceu:circuits/iv',)
        .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 1152))
        .itemOutputs('2x megacells:mega_pattern_provider')
        .duration(300)
        .EUt(7680)
        .cleanroom(CleanroomType.CLEANROOM)

    // LuV
    event.recipes.gtceu.assembler('megacells:mega_pattern_provider_luv')
        .itemInputs(
            '8x #ae2:pattern_provider',
            '4x megacells:accumulation_processor',
            '2x gtceu:luv_conveyor_module',
            '4x gtceu:rhodium_plated_palladium_plate',
            '2x ae2:annihilation_core',
            '2x ae2:formation_core',
            '#gtceu:circuits/luv')
        .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 1152))
        .itemOutputs('4x megacells:mega_pattern_provider')
        .duration(300)
        .EUt(30720)
        .cleanroom(CleanroomType.CLEANROOM)

    // ZPM
    event.recipes.gtceu.assembler('megacells:mega_pattern_provider_zpm')
        .itemInputs(
            '16x #ae2:pattern_provider',
            '4x megacells:accumulation_processor',
            '2x gtceu:zpm_conveyor_module',
            '4x gtceu:naquadah_alloy_plate',
            '2x ae2:annihilation_core',
            '2x ae2:formation_core',
            '#gtceu:circuits/zpm')
        .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 1152))
        .itemOutputs('8x megacells:mega_pattern_provider')
        .duration(300)
        .EUt(119680)
        .cleanroom(CleanroomType.CLEANROOM)

    //#endregion

    // cable mega interface
    event.shapeless('megacells:cable_mega_interface', ['megacells:mega_interface'])
        .id('megacells:crafting/cable_mega_interface')
    
    event.shapeless('megacells:mega_interface', ['megacells:cable_mega_interface'])
        .id('megacells:crafting/mega_interface')

    // cable mega pattern provider
    event.shapeless('megacells:cable_mega_pattern_provider', ['megacells:mega_pattern_provider'])
        .id('megacells:crafting/cable_mega_pattern_provider')
    
    event.shapeless('megacells:mega_pattern_provider', ['megacells:cable_mega_pattern_provider'])
        .id('megacells:crafting/mega_pattern_provider')

    // greater energy card
    event.recipes.gtceu.assembler('megacells:greater_energy_card')
        .itemInputs(
            'ae2:energy_card',
            '2x gtceu:lapotronic_energy_orb'
        )
        .itemOutputs('megacells:greater_energy_card')
        .duration(200)
        .EUt(1024)
    

    
}