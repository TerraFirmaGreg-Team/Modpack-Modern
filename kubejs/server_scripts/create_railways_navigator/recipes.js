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
                "FDE"
            ], {
                A: 'gtceu:glass_plate',
                B: 'create:display_board',
                C: 'gtceu:computer_monitor_cover',
                D: 'gtceu:small_red_alloy_gear',
                E: 'gtceu:brass_screw',
                F: '#forge:tools/screwdrivers'
            }
        )
        event.recipes.gtceu.assembler('assembler:advanced_display')
            .itemInputs(
                'create:display_board',
                'gtceu:computer_monitor_cover',
                'gtceu:small_red_alloy_gear',
                '3x gtceu:glass_plate',
                '2x gtceu:brass_screw'
            )
            .itemOutputs('2x createrailwaysnavigator:advanced_display')
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])
            .addMaterialInfo(true)

        //Navigator
        event.shaped(
            Item.of('createrailwaysnavigator:navigator'),
            [
                "ABH",
                "CDI",
                "FEG"
            ], {
                A: 'gtceu:mv_sensor',
                B: 'gtceu:glass_plate',
                C: '#gtceu:circuits/mv',
                D: 'gtceu:computer_monitor_cover',
                E: 'gtceu:small_red_alloy_gear',
                F: '#gtceu:batteries/mv',
                G: 'gtceu:mv_emitter',
                H: '#forge:tools/screwdrivers',
                I: 'gtceu:stainless_steel_screw'
            }
        )
        event.recipes.gtceu.assembler('assembler:navigator')
            .itemInputs(
                'gtceu:computer_monitor_cover',
                'gtceu:small_red_alloy_gear',
                '#gtceu:batteries/mv',
                'gtceu:mv_emitter',
                'gtceu:glass_plate',
                '#gtceu:circuits/mv',
                'gtceu:mv_sensor',
                'gtceu:stainless_steel_screw'
            )
            .itemOutputs('createrailwaysnavigator:navigator')
            .duration(200)
            .EUt(GTValues.VA[GTValues.LV])
            .addMaterialInfo(true)
	}
}