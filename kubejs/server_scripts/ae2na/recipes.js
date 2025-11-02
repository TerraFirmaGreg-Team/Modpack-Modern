// priority: 0
"use strict";

const registerAE2NetworkAnalyzerRecipes = (event) => {
    
    // Network_analyser
    event.recipes.gtceu.shaped('ae2netanalyser:network_analyser', [
        'ABA',
        'CDC',
        'EFE' 
    ], {
        A: 'gtceu:hv_sensor',
        B: 'gtceu:hv_emitter',
        C: '#gtceu:circuits/hv',
        D: 'gtceu:computer_monitor_cover',
        E: '#forge:plates/stainless_steel',
        F: '#gtceu:batteries/hv'
    }).addMaterialInfo().id('ae2netanalyser:analyser')
}
