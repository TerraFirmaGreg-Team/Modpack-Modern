"use strict";

const registerMeasurementsRecipes = (event) => {

    event.remove({ mod: 'measurements' })

    event.shaped('1x measurements:tape_measure', [
        'ABD',
        'BED',
        'CBB'  
    ], {
        A: '#forge:plates/rubber',
        B: '#forge:foils/steel',
        C: '#forge:ingots/rubber',
        D: '#forge:plates/brass',
        E: '#forge:springs/steel'
    }).id('measurements:shapeless/tape_measure')

	event.recipes.gtceu.arc_furnace('measurements:arc_furnace/recycling/tape_measure')
		.itemInputs('1x measurements:tape_measure')
		.itemOutputs('1x gtceu:steel_ingot', '1x create:brass_ingot', '1x gtceu:rubber_ingot')
		.duration(224)
		.EUt(30)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)

	event.recipes.gtceu.macerator('measurements:macerator/recycling/tape_measure')
		.itemInputs('1x measurements:tape_measure')
		.itemOutputs('1x gtceu:steel_dust', '1x gtceu:brass_dust', '1x gtceu:rubber_dust')
		.duration(224)
		.EUt(7)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
}