"use strict";

/**
 * 
 * @param {Internal.TFCDataEventJS} evt 
 */

const registerTFCDataForImmersiveAircraft = (evt) => {
    evt.itemSize('immersive_aircraft:quadrocopter', 'large', 'heavy');
    evt.itemSize('immersive_aircraft:airship', 'very_large', 'heavy');
    evt.itemSize('immersive_aircraft:gyrodyne', 'very_large', 'very_heavy');
    evt.itemSize('immersive_aircraft:cargo_airship', 'very_large', 'very_heavy');
    evt.itemSize('immersive_aircraft:warship', 'huge', 'very_heavy');
    evt.itemSize('immersive_aircraft:biplane', 'huge', 'very_heavy');
    evt.itemSize('man_of_many_planes:economy_plane', 'huge', 'very_heavy');
    evt.itemSize('man_of_many_planes:scarlet_biplane', 'huge', 'very_heavy');
}