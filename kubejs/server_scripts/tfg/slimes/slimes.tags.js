// priority: 0
"use strict";

function registerTFGSlimeItemTags(event) {
	event.add("tfg:slime_food", "#beneath:mushrooms");
}

function registerTFGSlimeBiomeTags(event) {
    event.add('tfg:nether/plant_slime_habitat', 'tfg:nether/muggy_bog')
    event.add('tfg:nether/plant_slime_habitat', 'tfg:nether/thorny_brambles')

    event.add('tfg:nether/glowberry_slime_habitat', 'tfg:nether/lush_hollow')

    event.add('tfg:nether/spring_slime_habitat', 'tfg:nether/geothermal_springs')

    event.add('tfg:nether/ice_slime_habitat', 'tfg:nether/salt_caves')

    event.add('tfg:nether/lava_slime_habitat', 'tfg:nether/lava_floes')
    event.add('tfg:nether/lava_slime_habitat', 'tfg:nether/ash_forest')

    event.add('tfg:nether/latex_slime_habitat', 'tfg:nether/webbed_lair')

}