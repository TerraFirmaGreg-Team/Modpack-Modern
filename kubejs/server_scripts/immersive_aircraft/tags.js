"use strict";

/**
 * 
 * @param {TagEvent.Item} evt 
 */
const registerImmersiveAircraftItemTags = (evt) =>
{
    evt.add('c:hidden_from_recipe_viewers', 'immersive_aircraft:propeller');
    evt.add('c:hidden_from_recipe_viewers', 'immersive_aircraft:boiler')
}