// priority: 0

const registerAE2NetworkAnalyzerRecipes = (event) => {
    
    // Network_analyser
    event.shaped('ae2netanalyser:network_analyser', [
        'ABA',
        'CDC',
        'EFE' 
    ], {
        A: 'gtceu:iv_sensor',
        B: 'gtceu:iv_emitter',
        C: '#gtceu:circuits/iv',
        D: 'gtceu:computer_monitor_cover',
        E: '#forge:plates/tungsten_steel',
        F: '#gtceu:batteries/iv'
    }).id('ae2netanalyser:analyser')
}