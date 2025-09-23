// priority: 0
"use strict";

TFCEvents.registerFaunas(event => {
	event.replace("tfg:glacian_ram", "on_ground", "ocean_floor");
	event.replace("tfg:sniffer", "on_ground", "ocean_floor");
	event.replace("tfg:wraptor", "on_ground", "ocean_floor");
	event.replace("species:goober", "on_ground", "ocean_floor");
	event.replace("species:springling", "on_ground", "ocean_floor");
	event.replace("wan_ancient_beasts:walker", "on_ground", "ocean_floor");
	event.replace("wan_ancient_beasts:eater", "on_ground", "ocean_floor");
	event.replace("wan_ancient_beasts:crusher", "on_ground", "ocean_floor");

	event.replace("wan_ancient_beasts:soarer", "no_restrictions", "world_surface");
	event.replace("wan_ancient_beasts:glider", "no_restrictions", "world_surface");
})