// priority: 0
"use strict";

const registerMegaCellsRecipes = (event) => {
    
    event.remove({ not: [
        {id: 'megacells:network/mega_pattern_provider_block'},
        {id: 'megacells:network/mega_interface_block'},
        {id: 'megacells:network/mega_interface_part'},
        {id: 'megacells:network/mega_pattern_provider_part'},
    ], mod: 'megacells' })
    
    event.recipes.gtceu.assembler('megacells:mega_energy_cell')
        .itemInputs('8x ae2:dense_energy_cell', '8x gtceu:nichrome_quadruple_wire', '4x #gtceu:circuits/iv')
        .itemOutputs('megacells:mega_energy_cell')
        .circuit(1)
        .duration(960)
        .EUt(2048)
		.addMaterialInfo(true)

    //printed accumulation circuit
    event.recipes.gtceu.forming_press('megacells:printed_accumulation_processor')
        .itemInputs('#forge:dense_plates/silicon')
        .notConsumable('megacells:accumulation_processor_press')
        .itemOutputs('megacells:printed_accumulation_processor')
        .duration(20)
        .circuit(1)
        .EUt(1920)

    event.recipes.gtceu.forming_press('megacells:printed_accumulation_processor_moon')
        .itemInputs('#forge:dense_plates/silicon')
        .notConsumable('megacells:accumulation_processor_press')
        .itemOutputs('2x megacells:printed_accumulation_processor')
        .duration(20)
        .circuit(2)
        .EUt(1920)
        .dimension('ad_astra:moon')

	// Accumulation Processor

	event.recipes.gtceu.circuit_assembler('ae2:accumulation_processor_moon')
		.itemInputs(
			'ae2:printed_silicon',
			'megacells:printed_accumulation_processor',
			'#gtceu:circuits/iv',
			'2x #gtceu:resistors',
			'1x minecraft:redstone')
		.inputFluids(Fluid.of('tfg:fluix', 144*5))
		.itemOutputs('megacells:accumulation_processor')
		.duration(20*5)
		.EUt(GTValues.VA[GTValues.IV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.circuit_assembler('ae2:accumulation_processor')
		.itemInputs(
			'ae2:printed_silicon',
			'megacells:printed_accumulation_processor',
			'#gtceu:circuits/iv',
			'1x minecraft:redstone')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144*5))
		.itemOutputs('2x megacells:accumulation_processor')
		.duration(20*5)
		.EUt(GTValues.VA[GTValues.EV])
		.dimension('ad_astra:moon')

    // Inscriber Silicon Press
    event.recipes.gtceu.laser_engraver('ae2:accumulation_processor_press')
        .itemInputs('tfg:unfinished_inscriber_accumulation_press')
        .notConsumable('#forge:lenses/black')
        .itemOutputs('megacells:accumulation_processor_press')
        .duration(4000)
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
    event.recipes.gtceu.shaped('megacells:mega_item_cell_housing', [
        'ABA',
        'CDC',
        'BBB'
    ], {
        A: 'ae2:quartz_vibrant_glass',
        B: '#forge:plates/maraging_steel_300',
        C: '#forge:fine_wires/niobium_titanium',
        D: '#gtceu:circuits/iv',
    }).addMaterialInfo().id('tfg:crafting/mega_item_cell_housing')
    
    //Mega Fluid Cell Housing
    event.recipes.gtceu.shaped('megacells:mega_fluid_cell_housing', [
        'ABA',
        'CDC',
        'BBB'
    ], {
        A: 'ae2:quartz_vibrant_glass',
        B: '#forge:plates/incoloy_ma_956',
        C: '#forge:fine_wires/niobium_titanium',
        D: '#gtceu:circuits/iv',
    }).addMaterialInfo().id('tfg:crafting/mega_fluid_cell_housing')

    //cell dock
    event.recipes.gtceu.shaped('megacells:cell_dock', [
        'ABA',
        'CDC',
    ], {
        A: '#forge:plates/steel',
        B: 'ae2:engineering_processor',
        C: '#ae2:glass_cable',
        D: '#gtceu:circuits/lv',
    }).addMaterialInfo().id('tfg:crafting/megacells_cell_dock')

    //#region Storage Components

    // 1m storage components
    event.recipes.gtceu.assembly_line('megacells:cell_component_1m')
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
        .duration(2000)
        .EUt(GTValues.VA[GTValues.LuV])
		.dimension('ad_astra:moon')

    event.recipes.gtceu.assembly_line('megacells:cell_component_1m_256k')
        .itemInputs(
 			'4x #gtceu:circuits/uv',
			'32x gtceu:hpic_chip',
			'64x ae2:engineering_processor',
			'64x ae2:logic_processor',
			'64x ae2:logic_processor',
            '16x megacells:accumulation_processor',
            '2x ae2:cell_component_256k')
        .inputFluids(Fluid.of('tfg:fluix', 4608))
        .inputFluids(Fluid.of('gtceu:polyphenylene_sulfide', 9216))
        .itemOutputs('megacells:cell_component_1m')
        .duration(4000)
        .EUt(GTValues.VA[GTValues.ZPM])
        .cleanroom(CleanroomType.CLEANROOM)

    // 4m storage components
    event.recipes.gtceu.assembly_line('megacells:cell_component_4m')
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
        .duration(2000)
        .EUt(GTValues.VA[GTValues.ZPM])
		.dimension('ad_astra:moon')

    event.recipes.gtceu.assembly_line('megacells:cell_component_4m_256k')
        .itemInputs(
 			'4x #gtceu:circuits/uhv',
			'64x gtceu:advanced_soc',
			'64x ae2:engineering_processor',
			'64x ae2:logic_processor',
			'64x ae2:logic_processor',
            '64x megacells:accumulation_processor',
            '2x megacells:cell_component_1m')
        .inputFluids(Fluid.of('tfg:fluix', 9216))
        .inputFluids(Fluid.of('gtceu:polyphenylene_sulfide', 18432))
        .itemOutputs('megacells:cell_component_4m')
        .duration(4000)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.CLEANROOM)

    // 16m storage components
    event.recipes.gtceu.assembly_line('megacells:cell_component_16m')
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
        .duration(8000)
        .stationResearch(b => b.researchStack(Item.of('megacells:cell_component_4m')).EUt(GTValues.VA[GTValues.LuV]).CWUt(32))
        .EUt(GTValues.VA[GTValues.UV])
        .dimension('ad_astra:moon')
        .cleanroom(CleanroomType.CLEANROOM)

    // 64m storage components
    event.recipes.gtceu.assembly_line('megacells:cell_component_64m')
        .itemInputs(
 			'8x #gtceu:circuits/uhv',
			'64x gtceu:uhpic_chip',
			'64x ae2:engineering_processor',
			'64x ae2:logic_processor',
			'64x ae2:logic_processor',
			'64x ae2:calculation_processor',
            '64x megacells:accumulation_processor',
            '64x megacells:accumulation_processor',
            '1x megacells:cell_component_16m')
        .inputFluids(Fluid.of('tfg:cryogenized_fluix', 36864))
        .inputFluids(Fluid.of('tfg:fluix', 36864))
        .inputFluids(Fluid.of('gtceu:polyphenylene_sulfide', 73728))
        .itemOutputs('megacells:cell_component_64m')
        .duration(8000)
        .stationResearch(b => b.researchStack(Item.of('megacells:cell_component_16m')).EUt(GTValues.VA[GTValues.LuV]).CWUt(64))
        .EUt(GTValues.VA[GTValues.UHV])
        .dimension('ad_astra:moon')
        .cleanroom(CleanroomType.CLEANROOM)

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

    event.recipes.gtceu.assembler('megacells:mega_crafting_unit')
        .itemInputs(
            '4x megacells:accumulation_processor',
            '4x ae2:logic_processor',
            '4x ae2:calculation_processor',
            '4x ae2:engineering_processor',
            '#gtceu:circuits/luv',
            '6x #forge:plates/titanium_tungsten_carbide',
            'ae2:crafting_unit')
        .inputFluids(Fluid.of('tfg:fluix', 144*8))
        .itemOutputs('megacells:mega_crafting_unit')
        .duration(20*15)
        .EUt(GTValues.VA[GTValues.IV])
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.assembler('megacells:mega_crafting_unit_moon')
        .itemInputs(
            '4x megacells:accumulation_processor',
            '4x ae2:logic_processor',
            '4x ae2:calculation_processor',
            '4x ae2:engineering_processor',
            '#gtceu:circuits/luv',
            '6x #forge:plates/titanium_tungsten_carbide',
            'ae2:crafting_unit')
        .inputFluids(Fluid.of('tfg:cryogenized_fluix', 144*4))
        .itemOutputs('2x megacells:mega_crafting_unit')
        .duration(20*15)
        .EUt(GTValues.VA[GTValues.IV])
        .dimension('ad_astra:moon')

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
    .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 144))
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
        .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 144))
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
         .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 144))
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
         .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 144))
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
        .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 144))
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
        .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 144))
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
        .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 144))
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
        .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 144))
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
