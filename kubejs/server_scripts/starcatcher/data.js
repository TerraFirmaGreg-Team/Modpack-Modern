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
		if (filet !== null && filet !== undefined && filet !== 'calamari') {
			event.itemHeat(`tfg:food/seafood/raw_${filet}_cut`, 1.0, null, null)
			event.itemHeat(`tfg:food/seafood/cooked_${filet}_cut`, 1.0, null, null)
		};
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

			event.foodItem(`tfg:food/seafood/raw_common_cut`, (food) => {
				food.hunger(3);
				food.protein(1);
				food.decayModifier(3);
			});
			event.foodItem(`tfg:food/seafood/cooked_common_cut`, (food) => {
				food.hunger(4);
				food.saturation(1);
				food.protein(2);
				food.decayModifier(2.25);
			});

			event.foodItem(`tfg:food/seafood/raw_uncommon_cut`, (food) => {
				food.hunger(3);
				food.protein(1.3);
				food.decayModifier(3);
			});
			event.foodItem(`tfg:food/seafood/cooked_uncommon_cut`, (food) => {
				food.hunger(4);
				food.saturation(1.1);
				food.protein(2.3);
				food.decayModifier(2.25);
			});

			event.foodItem(`tfg:food/seafood/raw_rare_cut`, (food) => {
				food.hunger(3);
				food.protein(1.7);
				food.decayModifier(2.7);
			});
			event.foodItem(`tfg:food/seafood/cooked_rare_cut`, (food) => {
				food.hunger(4);
				food.saturation(1.2);
				food.protein(2.8);
				food.decayModifier(2.2);
			});

			event.foodItem(`tfg:food/seafood/raw_epic_cut`, (food) => {
				food.hunger(3);
				food.protein(2.1);
				food.decayModifier(2.5);
			});
			event.foodItem(`tfg:food/seafood/cooked_epic_cut`, (food) => {
				food.hunger(4);
				food.saturation(1.4);
				food.protein(3.3);
				food.decayModifier(2.0);
			});

			event.foodItem(`tfg:food/seafood/raw_legendary_cut`, (food) => {
				food.hunger(3);
				food.protein(2.3);
				food.decayModifier(2.1);
			});
			event.foodItem(`tfg:food/seafood/cooked_legendary_cut`, (food) => {
				food.hunger(4);
				food.saturation(1.6);
				food.protein(4.0);
				food.decayModifier(1.8);
			});

			event.foodItem(`tfg:food/seafood/raw_shrimp_cut`, (food) => {
				food.hunger(3);
				food.protein(1);
				food.decayModifier(3);
			});
			event.foodItem(`tfg:food/seafood/cooked_shrimp_cut`, (food) => {
				food.hunger(4);
				food.saturation(1);
				food.protein(2);
				food.decayModifier(2.25);
			});

			event.foodItem(`tfg:food/seafood/raw_eel_cut`, (food) => {
				food.hunger(3);
				food.protein(1.7);
				food.decayModifier(2.7);
			});
			event.foodItem(`tfg:food/seafood/cooked_eel_cut`, (food) => {
				food.hunger(4);
				food.saturation(1.2);
				food.protein(2.8);
				food.decayModifier(2.2);
			});

			event.foodItem(`tfg:food/seafood/raw_crab_cut`, (food) => {
				food.hunger(3);
				food.protein(1.7);
				food.decayModifier(2.7);
			});
			event.foodItem(`tfg:food/seafood/cooked_crab_cut`, (food) => {
				food.hunger(4);
				food.saturation(1.2);
				food.protein(2.8);
				food.decayModifier(2.2);
			});

	Object.keys(global.STARCATCHER_FISH).forEach(fish => {

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
	});
};

//#endregion