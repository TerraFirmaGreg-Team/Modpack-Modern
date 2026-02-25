// priority: 0
"use strict";

TFCEvents.registerFaunas(event => {
	const $SpawnPlacements = Java.loadClass("net.minecraft.world.entity.SpawnPlacements")

	event.replace("tfg:glacian_ram", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("tfg:sniffer", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("tfg:wraptor", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("species:goober", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("species:springling", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("wan_ancient_beasts:walker", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("wan_ancient_beasts:eater", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("wan_ancient_beasts:crusher", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("wan_ancient_beasts:snatcher", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("wan_ancient_beasts:charger", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("wan_ancient_beasts:raider", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");

	event.replace("wan_ancient_beasts:soarer", $SpawnPlacements.Type.NO_RESTRICTIONS, "world_surface");
	event.replace("wan_ancient_beasts:glider", $SpawnPlacements.Type.NO_RESTRICTIONS, "world_surface");
})