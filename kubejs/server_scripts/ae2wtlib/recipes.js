// priority: 0
"use strict";

const registerAE2WTLibRecipes = (event) => {

    // Удаление рецептов мода
    event.remove({ id: 'ae2wtlib:pattern_access/wireless_pattern_access_terminal' });
    event.remove({ id: 'ae2wtlib:pattern_encoding/wireless_pattern_encoding_terminal' });
    event.remove({ id: 'ae2wtlib:pattern_encoding/upgrade_wireless_pattern_encoding_terminal' });
    
    event.remove({ id: 'ae2wtlib:magnet_card' });
    event.remove({ id: 'ae2wtlib:quantum_bridge_card' });
    
    // Wireless Pattern Terminal
    event.recipes.gtceu.assembler('ae2wtlib:wireless_pattern_encoding_terminal')
        .itemInputs(
            '2x #gtceu:batteries/ev',
            'ae2:wireless_terminal',
            'ae2:pattern_encoding_terminal',
            '2x gtceu:ev_sensor',
            'gtceu:ev_emitter',
            '2x #forge:rods/ultimet')
        .itemOutputs('ae2wtlib:wireless_pattern_encoding_terminal')
        .duration(300)
        .EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true)
    
    // Pattern Access Terminal
    event.recipes.gtceu.assembler('ae2wtlib:wireless_pattern_access_terminal')
        .itemInputs(
            '2x #gtceu:batteries/ev',
            'ae2:wireless_terminal',
            'ae2:pattern_access_terminal',
            '2x gtceu:ev_sensor',
            'gtceu:ev_emitter',
            '2x #forge:rods/ultimet')
        .itemOutputs('ae2wtlib:wireless_pattern_access_terminal')
        .duration(300)
        .EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true)

    // Magnet Card
	event.recipes.gtceu.assembler('ae2wtlib:magnet_card')
        .itemInputs(
            '#forge:ingots/magnetic_neodymium',
            '4x #forge:rods/magnetic_neodymium',
            'ae2:advanced_card',
            'ae2:annihilation_plane')
        .itemOutputs('ae2wtlib:magnet_card')
        .duration(300)
        .EUt(250)
		.addMaterialInfo(true)

    // Quantum Bridge Card
    event.recipes.gtceu.assembly_line('ae2wtlib:quantum_bridge_card')
        .itemInputs(
            '8x ae2:quantum_ring',
            'ae2:quantum_link',
            'gtceu:quantum_star',
            '2x gtceu:zpm_sensor',
            '4x ae2:wireless_booster',
            '#gtceu:circuits/uv')
        .inputFluids(
            Fluid.of('gtceu:tritanium', 2304),
            Fluid.of('gtceu:titanium', 2160),
            Fluid.of('gtceu:polybenzimidazole', 1152),
            Fluid.of('gtceu:styrene_butadiene_rubber', 864)
        )    
        .itemOutputs('ae2wtlib:quantum_bridge_card')
        .duration(300)
        .EUt(64000)
        

    event.remove({ id: 'ae2wtlib:wireless_universal_terminal/ae' })
    event.remove({ id: 'ae2wtlib:wireless_universal_terminal/ce' })
    event.remove({ id: 'ae2wtlib:wireless_universal_terminal/ca' })

    event.recipes.gtceu.assembler('ae2wtlib:wireless_universal_terminal')
        .itemInputs(
            'ae2:cell_component_16k',
            '1x gtceu:ev_sensor',
            '1x gtceu:ev_emitter',
            '2x #forge:plates/rhodium')
        .inputFluids(Fluid.of('gtceu:epoxy', 144))
        .itemOutputs(Item.of('ae2wtlib:wireless_universal_terminal'))
        .duration(300)
        .EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true, true)
}