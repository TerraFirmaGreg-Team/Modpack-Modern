"use strict";

/**
 * 
 * @param {Internal.TFCDataEventJS} evt 
 */

const registerTFCDataForRailwaysNavigator = (evt) => {
	if (Platform.isLoaded("createrailwaysnavigator")) {
        evt.itemSize('createrailwaysnavigator:advanced_display_block', 'small', 'light')
        evt.itemSize('createrailwaysnavigator:advanced_display_slab', 'small', 'light')
        evt.itemSize('createrailwaysnavigator:advanced_display', 'small', 'light')
        evt.itemSize('createrailwaysnavigator:advanced_display_small', 'small', 'light')
        evt.itemSize('createrailwaysnavigator:advanced_display_panel', 'small', 'light')
        evt.itemSize('createrailwaysnavigator:advanced_display_half_panel', 'small', 'light')
        evt.itemSize('createrailwaysnavigator:advanced_display_slope', 'small', 'light')
        evt.itemSize('createrailwaysnavigator:train_station_clock', 'small', 'light')
        evt.itemSize('createrailwaysnavigator:navigator', 'very_small', 'very_light')
	}
}