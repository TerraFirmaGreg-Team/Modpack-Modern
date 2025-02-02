// priority: 0

const registerAE2InsertExportCardRecipes = (event) => {
    
    // Удаление рецептов
    event.remove({ id: 'ae2insertexportcard:insert_card' })
    event.remove({ id: 'ae2insertexportcard:export_card' })

    // Insert Card
    event.recipes.gtceu.assembler('ae2insertexportcard:insert_card')
        .itemInputs(
            '4x gtceu:ev_sensor',
            '8x ae2:wireless_booster',
            '2x gtceu:iv_sensor',
            '4x ae2:import_bus',
            'ae2:advanced_card')
        .itemOutputs('ae2insertexportcard:insert_card')
        .duration(100)
        .EUt(1920)

    // Export Card
    event.recipes.gtceu.assembler('ae2insertexportcard:export_card')
        .itemInputs(
            '4x gtceu:ev_sensor',
            '8x ae2:wireless_booster',
            '2x gtceu:iv_sensor',
            '4x ae2:export_bus',
            'ae2:advanced_card')
        .itemOutputs('ae2insertexportcard:export_card')
        .duration(100)
        .EUt(1920)
}