// priority: 0
"use strict";

function registerStarcatcherItems(event) {
	if (!Platform.isLoaded("starcatcher")) return;


		// Create a filet item for each unique filet type.
		const filetTypes = new Set(Object.values(global.STARCATCHER_FISH).map(f => f.filet).filter(Boolean));
		filetTypes.forEach(filet => {

			event.create(`tfg:food/raw_${filet}_fish_filet`)
				.translationKey(`item.tfg.food.raw_${filet}_fish_filet`)
				.food(food => food.hunger(2).saturation(1));

			event.create(`tfg:food/cooked_${filet}_fish_filet`)
				.translationKey(`item.tfg.food.cooked_${filet}_fish_filet`)
				.food(food => food.hunger(4).saturation(2));

		});

		// Create cooked fish items for each fish type.
		Object.keys(global.STARCATCHER_FISH).forEach(fish => {
			if ( global.STARCATCHER_FISH[fish]?.dimension !== null && global.STARCATCHER_FISH[fish]?.dimension !== undefined ) {

				event.create(`tfg:food/cooked_${fish}`)
					.translationKey(`item.tfg.food.cooked_${fish}`)
					.food(food => food.hunger(4).saturation(2));
			};
		});
};
