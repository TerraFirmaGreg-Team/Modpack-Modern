// priority: 0
"use strict";

function registerTFGNuclearComponentsRecipes(event) {

	let component = function (type, block, value) {
		event.custom({
			type: 'deafission:component_fr',
			componentType: type,
			block: block,
			data: {
				value: value
			}
		});
	};

    let componentThermal = function(type, block, temp, cap) {
        event.custom({
            type: 'deafission:component_hb',
            componentType: type,
            block: block,
            data: {
                temperature: temp,
                capacity: cap
            }
        });
    };

	// Examples: https://bitbucket.org/Vazde/minecraft-fission/src/master/mod/settings-run/kubejs/server_scripts/recipes.js

	component("HEAT", "minecraft:blue_ice", 0.5)
	component("HEAT", "tfg:glacian_wool_frame", 2);
	component("HEAT", "tfg:aes_insulation_frame", 1);
	component("HEAT", "tfg:moderate_core_frame", 10);
	component("HEAT", "tfg:impure_moderate_core_frame", 5);

    componentThermal('THERMAL', 'minecraft:sand', 1000, 10);
    componentThermal('THERMAL', 'tfg:impure_moderate_core_frame', 2000, 10);
	componentThermal('THERMAL', 'tfg:moderate_core_frame', 4000, 10);
    componentThermal('THERMAL', 'minecraft:bedrock', 9001, 10);
	
}