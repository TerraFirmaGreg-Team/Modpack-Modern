// priority: 0
"use strict";

function registerDeaFissionRecipes(event) {
	event.remove({ id: 'deafission:fission_reactor_fuel/uranium' })
	event.remove({ id: 'deafission:fission_reactor_fuel/thorium' })
	event.remove({ id: 'deafission:fission_reactor_coolant/thorium/nak_to_plasma' })
	event.remove({ id: 'deafission:fission_reactor_coolant/uranium/water_to_steam' })

	let component = function (type, block, value) {
		event.custom({
			type: 'deafission:fission_component',
			componentType: type,
			block: block,
			data: {
				value: value
			}
		});
	};

	// Examples: https://bitbucket.org/Vazde/minecraft-fission/src/master/mod/settings-run/kubejs/server_scripts/recipes.js

	component("HEAT", "minecraft:blue_ice", 0.5)
	component("HEAT", "tfg:glacian_wool_frame", 2);
	component("HEAT", "tfg:aes_insulation_frame", 1);
	component("HEAT", "tfg:moderate_core_frame", 10);
	component("HEAT", "tfg:impure_moderate_core_frame", 5);
}