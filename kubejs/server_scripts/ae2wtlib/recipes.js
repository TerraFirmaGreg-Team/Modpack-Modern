// priority: 0

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
            '2x gtceu:hv_lithium_battery',
            'ae2:wireless_terminal',
            'ae2:pattern_encoding_terminal',
            '2x gtceu:luv_sensor',
            'gtceu:luv_emitter',
            '2x #forge:rods/osmiridium',
            )
        .itemOutputs('ae2wtlib:wireless_pattern_encoding_terminal')
        .duration(30)
        .EUt(250)
    
    // Pattern Access Terminal
    event.recipes.gtceu.assembler('ae2wtlib:wireless_pattern_access_terminal')
        .itemInputs(
            '2x gtceu:hv_lithium_battery',
            'ae2:wireless_terminal',
            'ae2:pattern_access_terminal',
            '2x gtceu:luv_sensor',
            'gtceu:luv_emitter',
            '2x #forge:rods/osmiridium'
            )
        .itemOutputs('ae2wtlib:wireless_pattern_access_terminal')
        .duration(30)
        .EUt(250)

    // Magnet Card
	event.recipes.gtceu.assembler('ae2wtlib:magnet_card')
        .itemInputs(
            '#forge:ingots/magnetic_neodymium',
            '4x #forge:rods/magnetic_neodymium',
            'ae2:advanced_card',
            'ae2:annihilation_plane',
            '#forge:plates/redstone',
            '#forge:plates/lapis',
            )
        .itemOutputs('ae2wtlib:magnet_card')
        .duration(30)
        .EUt(250)

    // Quantum Bridge Card
    event.recipes.gtceu.assembler('ae2wtlib:quantum_bridge_card')
        .itemInputs(
            '4x gtceu:iv_sensor',
            '4x ae2:wireless_booster',
            '2x gtceu:luv_sensor',
            'gtceu:wireless_digital_interface_cover',)
        .itemOutputs('ae2wtlib:quantum_bridge_card')
        .duration(30)
        .EUt(250)
}