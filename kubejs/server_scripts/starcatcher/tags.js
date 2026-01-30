// priority: 0
"use strict";

const registerStarcatcherItemTags = (event) => {
	if (!Platform.isLoaded("starcatcher")) return;

	global.STARCATCHER_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	});

	global.STARCATCHER_HIDDEN_ITEMS.forEach(item => {
		event.add('c:hidden_from_recipe_viewers', item)
	});

	Object.keys(global.STARCATCHER_FISH).forEach(fish => {
		if ( global.STARCATCHER_FISH[fish]?.dimension !== null && global.STARCATCHER_FISH[fish]?.dimension !== undefined ) {

			event.add(`tfg:food/${global.STARCATCHER_FISH[fish].filet}_fish`, `starcatcher:${fish}`);
			event.add('tfc:foods', `starcatcher:${fish}`);
			event.add('starcatcher:fishes', `starcatcher:${fish}`);
			event.add('firmalife:foods/raw_fish', `starcatcher:${fish}`);

		} else {

			event.removeAllTagsFrom(`starcatcher:${fish}`);
			event.add('c:hidden_from_recipe_viewers', `starcatcher:${fish}`);
		};
	});
};

const registerStarcatcherFluidTags = (event) => {
	if (!Platform.isLoaded("starcatcher")) return;
};
