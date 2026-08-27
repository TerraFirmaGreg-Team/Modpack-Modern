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
            Item.Of('createrailwaysnavigator:advanced_display'),
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

        //Navigator
        event.shaped(
            Item.Of('createrailwaysnavigator:navigator'),
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
	}
}