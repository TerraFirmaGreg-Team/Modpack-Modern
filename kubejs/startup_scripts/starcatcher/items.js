// priority: 0
"use strict";

function registerStarcatcherItems(event) {
	if (!Platform.isLoaded("starcatcher")) return;


		// Create a filet item for each unique filet type.
		const filetTypes = new Set(Object.values(global.STARCATCHER_FISH).map(f => f.filet).filter(Boolean));
		filetTypes.forEach(filet => {

			if (filet !== null && filet !== "calamari") {
				event.create(`tfg:food/seafood/raw_${filet}_cut`)
					.translationKey(`item.tfg.food.seafood.raw_${filet}_cut`)
					.food(food => food.hunger(2).saturation(1))
					.tag('tfc:foods')
					.tag('tfc:foods/meats')
					.tag('tfc:foods/cooked_meats')
					.tag('firmalife:foods/cooked_fish')
					.tag('minecraft:fishes')
					.tag('starcatcher:baits');

				event.create(`tfg:food/seafood/cooked_${filet}_cut`)
					.translationKey(`item.tfg.food.seafood.cooked_${filet}_cut`)
					.food(food => food.hunger(4).saturation(2))
					.tag('tfc:foods')
					.tag('tfc:foods/meats')
					.tag('tfc:foods/raw_meats')
					.tag('firmalife:foods/raw_fish')
					.tag('minecraft:fishes');
			};

		});

		// Create cooked fish items for each fish type.
		Object.keys(global.STARCATCHER_FISH).forEach(fish => {
			
			if ( global.STARCATCHER_FISH[fish]?.dimension !== null && 
				global.STARCATCHER_FISH[fish]?.dimension !== undefined && 
				global.STARCATCHER_FISH[fish]?.filet !== null ) {

				event.create(`tfg:food/cooked_fish/cooked_${fish}`)
					.translationKey(`item.tfg.food.cooked_fish.cooked_${fish}`)
					.food(food => food.hunger(4).saturation(2))
					.tag('tfc:foods')
					.tag('tfc:foods/meats')
					.tag('tfc:foods/cooked_meats')
					.tag('firmalife:foods/cooked_fish')
					.tag('minecraft:fishes');
			};
		});
};
