// priority: 0
"use strict";

const registerMegaCellsRecipes = (event) => {
    
    event.remove({ not: [
        {id: 'megacells:network/mega_pattern_provider_block'},
        {id: 'megacells:network/mega_interface_block'},
        {id: 'megacells:network/mega_interface_part'},
        {id: 'megacells:network/mega_pattern_provider_part'},
    ], mod: 'megacells' })

    // Energy Cell
    
    event.recipes.gtceu.me_assembler('megacells:mega_energy_cell')
        .itemInputs('8x ae2:dense_energy_cell', '8x gtceu:nichrome_quadruple_wire', '4x #gtceu:circuits/iv')
        .itemOutputs('megacells:mega_energy_cell')
        .duration(20*240)
        .EUt(GTValues.VA[GTValues.EV])
		.dimension('ad_astra:moon')
		.cleanroom(CleanroomType.CLEANROOM)
		.addMaterialInfo(true)
        .circuit(9)

    // Pattern Provider

    event.recipes.gtceu.me_assembler('tfg:mega_pattern_provider')
		.itemInputs(
			'gtceu:ev_robot_arm',
			'gtceu:stainless_steel_crate',
			'4x #forge:plates/stainless_steel',
			'4x ae2:annihilation_core',
			'4x ae2:formation_core')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144*10))
		.itemOutputs(Item.of('megacells:mega_pattern_provider', 1))
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b
                .researchStack(Item.of('ae2:pattern_provider'))
                .duration(20*30)
                .EUt(GTValues.VA[GTValues.HV]))
		.duration(20 * 80)
		.EUt(GTValues.VA[GTValues.EV])
		.dimension('ad_astra:moon')
		.circuit(3)

    //printed accumulation circuit
    event.recipes.gtceu.forming_press('megacells:printed_accumulation_processor_moon')
        .itemInputs('#forge:dense_plates/silicon')
        .notConsumable('megacells:accumulation_processor_press')
        .itemOutputs('megacells:printed_accumulation_processor')
        .duration(20)
        .circuit(1)
        .EUt(GTValues.VA[GTValues.IV])
        .dimension('ad_astra:moon')

    event.recipes.gtceu.forming_press('megacells:printed_accumulation_processor_cr')
        .itemInputs('#forge:dense_plates/silicon')
        .notConsumable('megacells:accumulation_processor_press')
        .itemOutputs('2x megacells:printed_accumulation_processor')
        .duration(20)
        .circuit(2)
        .EUt(GTValues.VA[GTValues.IV])
        .dimension('ad_astra:moon')
		.cleanroom(CleanroomType.CLEANROOM)

	// Accumulation Processor

	event.recipes.gtceu.me_assembler('ae2:accumulation_processor')
		.itemInputs(
			'ae2:printed_silicon',
			'megacells:printed_accumulation_processor',
			'#gtceu:circuits/iv',
			'2x #gtceu:resistors',
			'1x minecraft:redstone')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144*5))
		.itemOutputs('megacells:accumulation_processor')
		.duration(20*40)
		.EUt(GTValues.VA[GTValues.EV])
		.dimension('ad_astra:moon')
        .circuit(1)

	event.recipes.gtceu.me_assembler('ae2:accumulation_processor_cr')
		.itemInputs(
			'ae2:printed_silicon',
			'megacells:printed_accumulation_processor',
			'#gtceu:circuits/iv',
			'gtceu:advanced_smd_resistor',
			'1x minecraft:redstone')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144*5))
		.itemOutputs('4x megacells:accumulation_processor')
		.duration(20*80)
		.EUt(GTValues.VA[GTValues.EV])
		.dimension('ad_astra:moon')
		.cleanroom(CleanroomType.CLEANROOM)
        .circuit(2)

    // Inscriber Silicon Press
    event.recipes.gtceu.laser_engraver('ae2:accumulation_processor_press')
        .itemInputs('tfg:unfinished_inscriber_accumulation_press')
        .notConsumable('#forge:lenses/black')
        .itemOutputs('megacells:accumulation_processor_press')
        .duration(20*200)
        .EUt(GTValues.VA[GTValues.IV])
        .cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.implosion_compressor('tfg:unfinished_inscriber_accumulation_press')
		.itemInputs(
			'#forge:dense_plates/rocket_alloy_t1',
			'#forge:dense_plates/desh',
			'gtceu:quantum_star',
            '64x gtceu:industrial_tnt')
		.itemOutputs('tfg:unfinished_inscriber_accumulation_press')
		.duration(20)
		.EUt(GTValues.VA[GTValues.IV])

    //Mega Item Cell Housing

    event.recipes.gtceu.me_assembler('megacells:mega_item_cell_housing')
        .itemInputs(
 			'1x #gtceu:circuits/iv',
			'2x #forge:fine_wires/niobium_titanium',
			'2x #forge:plates/maraging_steel_300',
			'ae2:quartz_vibrant_glass')
        .inputFluids(Fluid.of('tfg:cryogenized_fluix', 144*6))
        .itemOutputs('megacells:mega_item_cell_housing')
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b
                .researchStack(Item.of('ae2:item_cell_housing'))
                .duration(20*60)
                .EUt(GTValues.VA[GTValues.EV]))
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.IV])
		.dimension('ad_astra:moon')
        .cleanroom(CleanroomType.CLEANROOM)
        .addMaterialInfo(true)
        .circuit(6)
    
    //Mega Fluid Cell Housing
    
    event.recipes.gtceu.me_assembler('megacells:mega_fluid_cell_housing')
        .itemInputs(
 			'1x #gtceu:circuits/iv',
			'2x #forge:fine_wires/niobium_titanium',
			'2x #forge:plates/incoloy_ma_956',
			'ae2:quartz_vibrant_glass')
        .inputFluids(Fluid.of('tfg:cryogenized_fluix', 144*6))
        .itemOutputs('megacells:mega_fluid_cell_housing')
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b
                .researchStack(Item.of('ae2:fluid_cell_housing'))
                .duration(20*60)
                .EUt(GTValues.VA[GTValues.EV]))
        .duration(20*60)
        .EUt(GTValues.VA[GTValues.IV])
		.dimension('ad_astra:moon')
        .cleanroom(CleanroomType.CLEANROOM)
        .addMaterialInfo(true)
        .circuit(6)

    //cell dock
    event.recipes.gtceu.shaped('megacells:cell_dock', [
        'ABA',
        'CDC',
    ], {
        A: '#forge:plates/steel',
        B: 'ae2:engineering_processor',
        C: '#ae2:smart_cable',
        D: '#gtceu:circuits/lv',
    }).addMaterialInfo().id('tfg:crafting/megacells_cell_dock')

    //#region Storage Components

    // 1m storage components
    event.recipes.gtceu.me_assembler('megacells:cell_component_1m')
        .itemInputs(
 			'4x #gtceu:circuits/zpm',
			'32x gtceu:hpic_chip',
			'64x ae2:calculation_processor',
			'64x ae2:logic_processor',
			'64x ae2:logic_processor',
            '16x megacells:accumulation_processor',
            '1x ae2:cell_component_256k')
        .inputFluids(Fluid.of('tfg:cryogenized_fluix', 4608))
        .inputFluids(Fluid.of('gtceu:polyphenylene_sulfide', 9216))
        .itemOutputs('megacells:cell_component_1m')
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b
                .researchStack(Item.of('ae2:cell_component_256k'))
                .duration(20*60)
                .EUt(GTValues.VA[GTValues.LuV]))
        .duration(20*100)
        .EUt(GTValues.VA[GTValues.LuV])
		.dimension('ad_astra:moon')
        .cleanroom(CleanroomType.CLEANROOM)
        .circuit(6)

    // 4m storage components
    event.recipes.gtceu.me_assembler('megacells:cell_component_4m')
        .itemInputs(
 			'4x #gtceu:circuits/uv',
			'64x gtceu:advanced_soc',
			'64x ae2:calculation_processor',
			'64x ae2:logic_processor',
			'64x ae2:logic_processor',
            '64x megacells:accumulation_processor',
            '1x megacells:cell_component_1m')
        .inputFluids(Fluid.of('tfg:cryogenized_fluix', 9216))
        .inputFluids(Fluid.of('gtceu:polyphenylene_sulfide', 18432))
        .itemOutputs('megacells:cell_component_4m')
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b
                .researchStack(Item.of('megacells:cell_component_1m'))
                .duration(20*30)
                .EUt(GTValues.VA[GTValues.LuV]))
        .duration(20*200)
        .EUt(GTValues.VA[GTValues.LuV])
		.dimension('ad_astra:moon')
        .cleanroom(CleanroomType.CLEANROOM)
        .circuit(7)

    // 16m storage components
    event.recipes.gtceu.me_assembler('megacells:cell_component_16m')
        .itemInputs(
 			'4x #gtceu:circuits/uhv',
			'64x gtceu:uhpic_chip',
			'64x ae2:engineering_processor',
			'64x ae2:logic_processor',
			'64x ae2:logic_processor',
            '64x megacells:accumulation_processor',
            '64x megacells:accumulation_processor',
            '1x megacells:cell_component_4m')
        .inputFluids(Fluid.of('tfg:cryogenized_fluix', 18432))
        .inputFluids(Fluid.of('tfg:fluix', 18432))
        .inputFluids(Fluid.of('gtceu:polyphenylene_sulfide', 36864))
        .itemOutputs('megacells:cell_component_16m')
        .duration(20*400)
        .stationResearch(b => b
            .researchStack(Item.of('megacells:cell_component_4m'))
            .EUt(GTValues.VA[GTValues.ZPM])
            .CWUt(32))
        .EUt(GTValues.VA[GTValues.ZPM])
        .dimension('ad_astra:moon')
        .cleanroom(CleanroomType.CLEANROOM)
        .circuit(8)

    // 64m storage components
    event.recipes.gtceu.me_assembler('megacells:cell_component_64m')
        .itemInputs(
 			'8x #gtceu:circuits/uhv',
			'64x gtceu:uhpic_chip',
			'64x ae2:engineering_processor',
			'64x ae2:logic_processor',
			'64x ae2:calculation_processor',
            '64x megacells:accumulation_processor',
            '64x megacells:accumulation_processor',
            '1x megacells:cell_component_16m')
        .inputFluids(Fluid.of('tfg:cryogenized_fluix', 36864))
        .inputFluids(Fluid.of('tfg:fluix', 36864))
        .inputFluids(Fluid.of('gtceu:polyphenylene_sulfide', 73728))
        .itemOutputs('megacells:cell_component_64m')
        .duration(20*800)
        .stationResearch(b => b
            .researchStack(Item.of('megacells:cell_component_16m'))
            .EUt(GTValues.VA[GTValues.UV])
            .CWUt(64))
        .EUt(GTValues.VA[GTValues.UV])
        .dimension('ad_astra:moon')
        .cleanroom(CleanroomType.CLEANROOM)
        .circuit(9)

    // greater energy card
    event.recipes.gtceu.assembler('megacells:greater_energy_card')
        .itemInputs(
            'ae2:energy_card',
            '2x gtceu:lapotronic_energy_orb')
        .itemOutputs('megacells:greater_energy_card')
        .duration(200)
        .EUt(1024)

    //#region Cell Packing
    //item
    event.recipes.gtceu.packer('megacells:item_storage_cell_1m')
        .itemInputs('megacells:mega_item_cell_housing', 'megacells:cell_component_1m')
        .itemOutputs('megacells:item_storage_cell_1m')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('megacells:item_storage_cell_4m')
        .itemInputs('megacells:mega_item_cell_housing', 'megacells:cell_component_4m')
        .itemOutputs('megacells:item_storage_cell_4m')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('megacells:item_storage_cell_16m')
        .itemInputs('megacells:mega_item_cell_housing', 'megacells:cell_component_16m')
        .itemOutputs('megacells:item_storage_cell_16m')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('megacells:item_storage_cell_64m')
        .itemInputs('megacells:mega_item_cell_housing', 'megacells:cell_component_64m')
        .itemOutputs('megacells:item_storage_cell_64m')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    // event.recipes.gtceu.packer('megacells:item_storage_cell_256m')
    // .itemInputs('megacells:mega_item_cell_housing', 'megacells:cell_component_256m')
    // .itemOutputs('megacells:item_storage_cell_256m')
    // .duration(10)
    // .EUt(12)
    // .cleanroom(CleanroomType.CLEANROOM)

    //fluid
    event.recipes.gtceu.packer('megacells:fluid_storage_cell_1m')
        .itemInputs('megacells:mega_fluid_cell_housing', 'megacells:cell_component_1m')
        .itemOutputs('megacells:fluid_storage_cell_1m')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('megacells:fluid_storage_cell_4m')
        .itemInputs('megacells:mega_fluid_cell_housing', 'megacells:cell_component_4m')
        .itemOutputs('megacells:fluid_storage_cell_4m')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('megacells:fluid_storage_cell_16m')
        .itemInputs('megacells:mega_fluid_cell_housing', 'megacells:cell_component_16m')
        .itemOutputs('megacells:fluid_storage_cell_16m')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('megacells:fluid_storage_cell_64m')
        .itemInputs('megacells:mega_fluid_cell_housing', 'megacells:cell_component_64m')
        .itemOutputs('megacells:fluid_storage_cell_64m')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    // event.recipes.gtceu.packer('megacells:fluid_storage_cell_256m')
    // .itemInputs('megacells:mega_fluid_cell_housing', 'megacells:cell_component_256m')
    // .itemOutputs('megacells:fluid_storage_cell_256m')
    // .duration(10)
    // .EUt(12)
    // .cleanroom(CleanroomType.CLEANROOM)

    //item back
    event.recipes.gtceu.packer('megacells:item_storage_cell_1m_back')
        .itemInputs('megacells:item_storage_cell_1m')
        .itemOutputs('megacells:mega_item_cell_housing', 'megacells:cell_component_1m')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('megacells:item_storage_cell_4m_back')
        .itemInputs('megacells:item_storage_cell_4m')
        .itemOutputs('megacells:mega_item_cell_housing', 'megacells:cell_component_4m')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('megacells:item_storage_cell_16m_back')
        .itemInputs('megacells:item_storage_cell_16m')
        .itemOutputs('megacells:mega_item_cell_housing', 'megacells:cell_component_16m')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('megacells:item_storage_cell_64m_back')
        .itemInputs('megacells:item_storage_cell_64m')
        .itemOutputs('megacells:mega_item_cell_housing', 'megacells:cell_component_64m')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    // event.recipes.gtceu.packer('megacells:item_storage_cell_256m_back')
    // .itemInputs('megacells:item_storage_cell_256m')
    // .itemOutputs('megacells:mega_item_cell_housing', 'megacells:cell_component_256m')
    // .duration(10)
    // .EUt(12)
    // .cleanroom(CleanroomType.CLEANROOM)

    //fluid back
    event.recipes.gtceu.packer('megacells:fluid_storage_cell_1m_back')
        .itemInputs('megacells:fluid_storage_cell_1m')
        .itemOutputs('megacells:mega_fluid_cell_housing', 'megacells:cell_component_1m')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('megacells:fluid_storage_cell_4m_back')
        .itemInputs('megacells:fluid_storage_cell_4m')
        .itemOutputs('megacells:mega_fluid_cell_housing', 'megacells:cell_component_4m')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('megacells:fluid_storage_cell_16m_back')
        .itemInputs('megacells:fluid_storage_cell_16m')
        .itemOutputs('megacells:mega_fluid_cell_housing','megacells:cell_component_16m')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('megacells:fluid_storage_cell_64m_back')
        .itemInputs('megacells:fluid_storage_cell_64m')
        .itemOutputs('megacells:mega_fluid_cell_housing', 'megacells:cell_component_64m')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    // event.recipes.gtceu.packer('megacells:fluid_storage_cell_256m_back')
    // .itemInputs('megacells:fluid_storage_cell_256m')
    // .itemOutputs('megacells:mega_fluid_cell_housing', 'megacells:cell_component_256m')
    // .duration(10)
    // .EUt(12)
    // .cleanroom(CleanroomType.CLEANROOM)

    //#endregion 

    //#region Crafting Unit

    event.recipes.gtceu.me_assembler('megacells:mega_crafting_unit')
        .itemInputs(
            '4x megacells:accumulation_processor',
            '4x ae2:logic_processor',
            '4x ae2:calculation_processor',
            '4x ae2:engineering_processor',
            '#gtceu:circuits/luv',
            '6x #forge:plates/titanium_tungsten_carbide',
            'ae2:crafting_unit')
        .inputFluids(Fluid.of('tfg:cryogenized_fluix', 144*8))
        .itemOutputs('megacells:mega_crafting_unit')
        .duration(20*160)
        .EUt(GTValues.VA[GTValues.IV])
        .dimension('ad_astra:moon')
        .cleanroom(CleanroomType.CLEANROOM)
        .circuit(3)


    // Mega Crafting  Storage

    event.recipes.gtceu.packer('megacells:mega_crafting_accelerator')
        .itemInputs('megacells:mega_crafting_unit', 'ae2:engineering_processor')
        .itemOutputs('megacells:mega_crafting_accelerator')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('megacells:1m_crafting_storage')
        .itemInputs('megacells:mega_crafting_unit', 'megacells:cell_component_1m')
        .itemOutputs('megacells:1m_crafting_storage')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('megacells:4m_crafting_storage')
        .itemInputs('megacells:mega_crafting_unit', 'megacells:cell_component_4m')
        .itemOutputs('megacells:4m_crafting_storage')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('megacells:16m_crafting_storage')
        .itemInputs('megacells:mega_crafting_unit', 'megacells:cell_component_16m')
        .itemOutputs('megacells:16m_crafting_storage')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('megacells:64m_crafting_storage')
        .itemInputs('megacells:mega_crafting_unit', 'megacells:cell_component_64m')
        .itemOutputs('megacells:64m_crafting_storage')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    /* event.recipes.gtceu.packer('megacells:256m_crafting_storage')
        .itemInputs('megacells:mega_crafting_unit', 'megacells:cell_component_256m')
        .itemOutputs('megacells:256m_crafting_storage')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    */

    event.recipes.gtceu.packer('megacells:mega_crafting_monitor')
        .itemInputs('megacells:mega_crafting_unit', 'ae2:storage_monitor')
        .itemOutputs('megacells:mega_crafting_monitor')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

        //back
    event.recipes.gtceu.packer('megacells:crafting_mega_accelerator_back')
        .itemInputs('ae2:crafting_accelerator')
        .itemOutputs('megacells:mega_crafting_unit', 'ae2:engineering_processor')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('megacells:1m_crafting_storage_back')
        .itemInputs('megacells:1m_crafting_storage')
        .itemOutputs('megacells:mega_crafting_unit', 'megacells:cell_component_1m')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('megacells:4m_crafting_storage_back')
        .itemInputs('megacells:4m_crafting_storage')
        .itemOutputs('megacells:mega_crafting_unit', 'megacells:cell_component_4m')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('megacells:16m_crafting_storage_back')
        .itemInputs('megacells:16m_crafting_storage')
        .itemOutputs('megacells:mega_crafting_unit', 'megacells:cell_component_16m')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('megacells:64m_crafting_storage_back')
        .itemInputs('megacells:64m_crafting_storage')
        .itemOutputs('megacells:mega_crafting_unit','megacells:cell_component_64m')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)

    // event.recipes.gtceu.packer('megacells:256m_crafting_storage_back')
    //     .itemInputs('megacells:256m_crafting_storage')
    //     .itemOutputs('megacells:mega_crafting_unit', 'megacells:cell_component_256m')
    //     .duration(10)
    //     .EUt(12)
    //     .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.packer('megacells:crafting_monitor_back')
        .itemInputs('megacells:mega_crafting_monitor')
        .itemOutputs('megacells:mega_crafting_unit', 'ae2:storage_monitor')
        .duration(10)
        .EUt(12)
        .cleanroom(CleanroomType.CLEANROOM)
    
        //#endregion

    //#region Portable Cells
    

    //#region Item
    
    // 1m
    event.recipes.gtceu.assembler('megacells:portable_item_cell_1m')
    .itemInputs(
        'ae2:chest',
        'megacells:cell_component_1m',
        'megacells:mega_energy_cell',
        '#gtceu:batteries/luv',
        'megacells:mega_item_cell_housing')
    .inputFluids(Fluid.of('tfg:cryogenized_fluix', 144))
    .itemOutputs('megacells:portable_item_cell_1m')
    .duration(200)
    .EUt(30720)
    .cleanroom(CleanroomType.CLEANROOM)

    // 4m
    event.recipes.gtceu.assembler('megacells:portable_item_cell_4m')
        .itemInputs(
            'ae2:chest',
            'megacells:cell_component_4m',
            'megacells:mega_energy_cell',
            '#gtceu:batteries/luv',
            'megacells:mega_item_cell_housing')
        .inputFluids(Fluid.of('tfg:cryogenized_fluix', 144))
        .itemOutputs('megacells:portable_item_cell_4m')
        .duration(200)
        .EUt(122880)
        .cleanroom(CleanroomType.CLEANROOM)

    // 16m
    event.recipes.gtceu.assembler('megacells:portable_item_cell_16m')
         .itemInputs(
             'ae2:chest',
             'megacells:cell_component_16m',
             'megacells:mega_energy_cell',
             '#gtceu:batteries/luv',
             'megacells:mega_item_cell_housing')
         .inputFluids(Fluid.of('tfg:cryogenized_fluix', 144))
         .itemOutputs('megacells:portable_item_cell_16m')
         .duration(200)
         .EUt(491520)
         .cleanroom(CleanroomType.CLEANROOM)

    // 64m
    event.recipes.gtceu.assembler('megacells:portable_item_cell_64m')
         .itemInputs(
             'ae2:chest',
             'megacells:cell_component_64m',
             'megacells:mega_energy_cell',
             '#gtceu:batteries/luv',
             'megacells:mega_item_cell_housing')
         .inputFluids(Fluid.of('tfg:cryogenized_fluix', 144))
         .itemOutputs('megacells:portable_item_cell_64m')
         .duration(200)
         .EUt(1966080)
         .cleanroom(CleanroomType.CLEANROOM)

    // // 256m
    // event.recipes.gtceu.assembler('megacells:portable_item_cell_256m')
    //     .itemInputs(
    //         'ae2:chest',
    //         'megacells:cell_component_256m',
    //         'megacells:mega_energy_cell',
    //         '#gtceu:batteries/luv',
    //         'megacells:mega_item_cell_housing')
    //     .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 144))
    //     .itemOutputs('megacells:portable_item_cell_256m')
    //     .duration(200)
    //     .EUt(7864320)
    //     .cleanroom(CleanroomType.CLEANROOM)

    //#endregion


    //#region Fluid

    // 1m
    event.recipes.gtceu.assembler('megacells:portable_fluid_cell_1m')
        .itemInputs(
            'ae2:chest',
            'megacells:cell_component_1m',
            'megacells:mega_energy_cell',
            '#gtceu:batteries/luv',
            'megacells:mega_fluid_cell_housing')
        .inputFluids(Fluid.of('tfg:cryogenized_fluix', 144))
        .itemOutputs('megacells:portable_fluid_cell_1m')
        .duration(200)
        .EUt(30720)
        .cleanroom(CleanroomType.CLEANROOM)

    // 4m
    event.recipes.gtceu.assembler('megacells:portable_fluid_cell_4m')
        .itemInputs(
            'ae2:chest',
            'megacells:cell_component_4m',
            'megacells:mega_energy_cell',
            '#gtceu:batteries/luv',
            'megacells:mega_fluid_cell_housing')
        .inputFluids(Fluid.of('tfg:cryogenized_fluix', 144))
        .itemOutputs('megacells:portable_fluid_cell_4m')
        .duration(200)
        .EUt(122880)
        .cleanroom(CleanroomType.CLEANROOM)

    // 16m
    event.recipes.gtceu.assembler('megacells:portable_fluid_cell_16m')
        .itemInputs(
            'ae2:chest',
            'megacells:cell_component_16m',
            'megacells:mega_energy_cell',
            '#gtceu:batteries/luv',
            'megacells:mega_fluid_cell_housing')
        .inputFluids(Fluid.of('tfg:cryogenized_fluix', 144))
        .itemOutputs('megacells:portable_fluid_cell_16m')
        .duration(200)
        .EUt(491520)
        .cleanroom(CleanroomType.CLEANROOM)

    // 64m
    event.recipes.gtceu.assembler('megacells:portable_fluid_cell_64m')
        .itemInputs(
            'ae2:chest',
            'megacells:cell_component_64m',
            'megacells:mega_energy_cell',
            '#gtceu:batteries/luv',
            'megacells:mega_fluid_cell_housing')
        .inputFluids(Fluid.of('tfg:cryogenized_fluix', 144))
        .itemOutputs('megacells:portable_fluid_cell_64m')
        .duration(200)
        .EUt(1966080)
        .cleanroom(CleanroomType.CLEANROOM)

    // // 256m
    // event.recipes.gtceu.assembler('megacells:portable_fluid_cell_256m')
    //     .itemInputs(
    //         'ae2:chest',
    //         'megacells:cell_component_256m',
    //         'megacells:mega_energy_cell',
    //         '#gtceu:batteries/luv',
    //         'megacells:mega_fluid_cell_housing')
    //     .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 144))
    //     .itemOutputs('megacells:portable_fluid_cell_256m')
    //     .duration(200)
    //     .EUt(7864320)
    //     .cleanroom(CleanroomType.CLEANROOM)

    //#endregion
    //#endregion
}
