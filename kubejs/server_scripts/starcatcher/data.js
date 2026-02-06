// priority: 0
"use strict";

/** @param {Internal.TFCDataEventJS} event */
function registerTFCDataForStarcatcher(event) {
	if (!Platform.isLoaded("starcatcher")) return;

	registerStarcatcherHeatData(event);
	registerStarcatcherItemSize(event);
	registerStarcatcherFoodData(event);
};

//#region Heat Data

/** @param {Internal.TFCDataEventJS} event */
function registerStarcatcherHeatData(event) {
	if (!Platform.isLoaded("starcatcher")) return;

		/** Seperate filet types */
	const filetTypes = new Set(Object.values(global.STARCATCHER_FISH).map(f => f.filet).filter(Boolean));
	filetTypes.forEach(filet => {
		event.itemHeat(`tfg:food/raw_${filet}_fish_filet`, 1.0, null, null)
		event.itemHeat(`tfg:food/cooked_${filet}_fish_filet`, 1.0, null, null)
	});

	Object.keys(global.STARCATCHER_FISH).forEach(fish => {
		event.itemHeat(`starcatcher:${fish}`, 1.0, null, null)
		event.itemHeat(`tfg:food/cooked_fish/cooked_${fish}`, 1.0, null, null)
	});
};

//#endregion
//#region Item Size

/** @param {Internal.TFCDataEventJS} event */
function registerStarcatcherItemSize(event) {
	if (!Platform.isLoaded("starcatcher")) return;
	//event.itemSize('#forge:tools/mining_hammers', 'very_large', 'very_heavy', 'mining_hammers')
};

//#endregion
//#region Food Data

/** @param {Internal.TFCDataEventJS} event */
function registerStarcatcherFoodData(event) {
	if (!Platform.isLoaded("starcatcher")) return;

	/** Seperate filet types */
	const filetTypes = new Set(Object.values(global.STARCATCHER_FISH).map(f => f.filet).filter(Boolean));
	filetTypes.forEach(filet => {

		if (filet !== 'king') {

			event.foodItem(`tfg:food/raw_${filet}_fish_filet`, (food) => {
				food.hunger(3);
				food.protein(1);
				food.decayModifier(3);
			});

			event.foodItem(`tfg:food/cooked_${filet}_fish_filet`, (food) => {
				food.hunger(4);
				food.saturation(1);
				food.protein(2);
				food.decayModifier(2.25);
			});

		// Exception for Legendary Fish
		} else {

			event.foodItem(`tfg:food/raw_${filet}_fish_filet`, (food) => {
				food.hunger(3);
				food.protein(3);
				food.decayModifier(1.5);
			});

			event.foodItem(`tfg:food/cooked_${filet}_fish_filet`, (food) => {
				food.hunger(4);
				food.saturation(4);
				food.protein(6);
				food.decayModifier(1);
			});
		};

	});

	Object.keys(global.STARCATCHER_FISH).forEach(fish => {

		if (global.STARCATCHER_FISH[fish]?.filet !== 'king') {

			event.foodItem(`starcatcher:${fish}`, (food) => {
				food.hunger(3);
				food.protein(1);
				food.decayModifier(3);
			});

			event.foodItem(`tfg:food/cooked_fish/cooked_${fish}`, (food) => {
				food.hunger(4);
				food.saturation(1);
				food.protein(2);
				food.decayModifier(2.25);
			});

		// Exception for Legendary Fish
		} else {

			event.foodItem(`starcatcher:${fish}`, (food) => {
				food.hunger(3);
				food.protein(3);
				food.decayModifier(1.5);
			});

			event.foodItem(`tfg:food/cooked_fish/cooked_${fish}`, (food) => {
				food.hunger(4);
				food.saturation(4);
				food.protein(6);
				food.decayModifier(1);
			});
		};
	});
};

//#endregion