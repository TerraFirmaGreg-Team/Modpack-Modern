"use strict";

/**
 * 
 * @param {TagEvent.Item} evt 
 */
const registerImmersiveAircraftItemTags = (event) => {
    event.add('c:hidden_from_recipe_viewers', 'immersive_aircraft:propeller')
    event.add('c:hidden_from_recipe_viewers', 'immersive_aircraft:boiler')
}