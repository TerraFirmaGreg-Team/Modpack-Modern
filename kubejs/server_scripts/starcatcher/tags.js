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

			if ( global.STARCATCHER_FISH[fish]?.filet !== null && global.STARCATCHER_FISH[fish]?.filet !== undefined ) {
				event.add(`tfg:food/${global.STARCATCHER_FISH[fish].filet}_seafood`, `starcatcher:${fish}`);
			};
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

const registerStarcatcherBiomeTags = (event) => {
	if (!Platform.isLoaded("starcatcher")) return;

	event.add('starcatcher:is_ocean', 'tfc:salt_marsh')
	event.add('starcatcher:is_ocean', 'tfc:shore')
	event.add('starcatcher:is_ocean', 'tfc:tidal_flats')
};

const registerStarcatcherEntityTypeTags = (event) => {
	if (!Platform.isLoaded("starcatcher")) return;
		event.add('ad_astra:can_survive_extreme_heat', 'starcatcher:fish')
		event.add('ad_astra:can_survive_in_acid_rain', 'starcatcher:fish')
		event.add('ad_astra:can_survive_extreme_cold', 'starcatcher:fish')
		event.add('ad_astra:lives_without_oxygen', 'starcatcher:fish')
		event.add('tfg:ignores_gravity', 'starcatcher:fish')
		event.add('gtceu:heat_immune', 'starcatcher:fish')
};