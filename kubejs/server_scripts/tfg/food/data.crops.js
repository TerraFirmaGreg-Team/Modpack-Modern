"use strict";


/** @param {Internal.TFCDataEventJS} event */
function registerTFGCropRanges(event) {

	global.CROP_CLIMATE_DATA.forEach((crop) => {
		if (crop.genData !== true) return;
		
		event.climateRange((climate) => {
			climate.minHydration(crop.minHydration);
			climate.maxHydration(crop.maxHydration);
			climate.minTemperature(crop.minTemp);
			climate.maxTemperature(crop.maxTemp);
			climate.hydrationWiggle(crop.hydrationWiggle);
			climate.temperatureWiggle(crop.tempWiggle);
		}, crop.id);

	});
	
}
