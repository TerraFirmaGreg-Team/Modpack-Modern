// priority: 0
"use strict";

function registerTFGSlimeItemTags(event) {
	event.add("tfg:slime_food", "#beneath:mushrooms");
}

function registerTFGSlimeBiomeTags(event) {
    event.add('tfg:slime_habitat', 'tfg:nether/muggy_bog')
    event.add('tfg:slime_habitat', 'tfg:nether/thorny_brambles')
    event.add('tfg:slime_habitat', 'tfg:nether/lush_hollow')
    event.add('tfg:slime_habitat', 'tfg:nether/geothermal_springs')
    event.add('tfg:slime_habitat', 'tfg:nether/salt_caves')
    event.add('tfg:slime_habitat', 'tfg:nether/lava_floes')
    event.add('tfg:slime_habitat', 'tfg:nether/ash_forest')
    event.add('tfg:slime_habitat', 'tfg:nether/basalt_deltas')

    // Plant Slime
    event.add('tfg:nether/plant_slime_habitat', 'tfg:nether/muggy_bog')
    event.add('tfg:nether/plant_slime_habitat', 'tfg:nether/thorny_brambles')

    // Glowberry Slime
    event.add('tfg:nether/glowberry_slime_habitat', 'tfg:nether/lush_hollow')

    // Spring Slime
    event.add('tfg:nether/spring_slime_habitat', 'tfg:nether/geothermal_springs')

    // Ice Slime
    event.add('tfg:nether/ice_slime_habitat', 'tfg:nether/salt_caves')

    // Lava Slime
    event.add('tfg:nether/lava_slime_habitat', 'tfg:nether/lava_floes')
    event.add('tfg:nether/lava_slime_habitat', 'tfg:nether/ash_forest')
    event.add('tfg:nether/lava_slime_habitat', 'tfg:nether/basalt_deltas')
}