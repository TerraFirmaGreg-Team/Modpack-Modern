"use strict";

/**
 * 
 * @param {Internal.TFCDataEventJS} evt 
 */

const registerTFCDataForChimes = (evt) => {
	if (Platform.isLoaded("chimes")) {
	evt.itemSize('chimes:bamboo_chimes', 'large', 'heavy');
	evt.itemSize('chimes:carved_bamboo_chimes', 'large', 'heavy');
	evt.itemSize('chimes:copper_chimes', 'large', 'heavy');
	evt.itemSize('chimes:iron_chimes', 'large', 'heavy');
	evt.itemSize('chimes:amethyst_chimes', 'large', 'heavy');
	evt.itemSize('chimes:glass_bells', 'normal', 'medium');
	}
}