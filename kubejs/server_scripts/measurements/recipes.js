"use strict";

const registerMeasurementsRecipes = (event) => {

    event.remove({ mod: 'measurements' })

    event.recipes.gtceu.shaped('1x measurements:tape_measure', [
        'ABD',
        'BED',
        'CBB'  
    ], {
        A: '#forge:plates/rubber',
        B: '#forge:foils/steel',
        C: '#forge:ingots/rubber',
        D: '#forge:plates/brass',
        E: '#forge:springs/steel'
    }).addMaterialInfo().id('measurements:shapeless/tape_measure')
}