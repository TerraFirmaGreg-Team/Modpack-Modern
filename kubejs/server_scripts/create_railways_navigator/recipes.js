"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerRailwaysNavigatorRecipes = (event) => {
	if (Platform.isLoaded("createrailwaysnavigator")) {
        //Display variants and train station clock items already have default
        //recipes. No need to change them.

        //Display Board
        event.shaped(
            Item.of('createrailwaysnavigator:advanced_display', 2),
            [
                "AAA",
                "CBE",
                "EDE"
            ], {
                A: 'gtceu:glass_plate',
                B: 'create:display_board',
                C: 'gtceu:computer_monitor_cover',
                D: 'vintageimprovements:redstone_module',
                E: 'gtceu:brass_screw'
            }
        )
        event.recipes.gtceu.assembler('assembler:advanced_display')
            .itemInputs(
                'create:display_board',
                'gtceu:computer_monitor_cover',
                'vintageimprovements:redstone_module',
                '3x gtceu:glass_plate',
                '3x gtceu:brass_screw'
            )
            .itemOutputs('2x createrailwaysnavigator:advanced_display')
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])
            .addMaterialInfo(true)

        //Navigator
        event.shaped(
            Item.of('createrailwaysnavigator:navigator'),
            [
                "ABA",
                "CDC",
                "FEG"
            ], {
                A: 'gtceu:mv_sensor',
                B: 'gtceu:glass_plate',
                C: '#gtceu:circuits/mv',
                D: 'gtceu:computer_monitor_cover',
                E: 'vintageimprovements:redstone_module',
                F: '#gtceu:batteries/mv',
                G: 'gtceu:mv_emitter'
            }
        )
        event.recipes.gtceu.assembler('assembler:navigator')
            .itemInputs(
                'gtceu:computer_monitor_cover',
                'vintageimprovements:redstone_module',
                '#gtceu:batteries/mv',
                'gtceu:mv_emitter',
                'gtceu:glass_plate',
                '2x #gtceu:circuits/mv',
                '2x gtceu:mv_sensor'
            )
            .itemOutputs('createrailwaysnavigator:navigator')
            .duration(200)
            .EUt(GTValues.VA[GTValues.LV])
            .addMaterialInfo(true)
	}
}