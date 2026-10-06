// priority: 0
"use strict";

TFCEvents.registerFaunas(event => {
	const $SpawnPlacements = Java.loadClass("net.minecraft.world.entity.SpawnPlacements")

	// Earth
	event.replace("tfg:bison", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("tfg:jerboa", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("tfg:lemming", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("tfg:mongoose", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("tfg:dromedary_camel", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("tfg:bactrian_camel", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("tfg:leopard_seal", $SpawnPlacements.Type.NO_RESTRICTIONS, "ocean_floor");
	
	event.replace("jellies:herbal", $SpawnPlacements.Type.ON_GROUND, "motion_blocking_no_leaves");
	event.replace("jellies:phosphorum", $SpawnPlacements.Type.ON_GROUND, "motion_blocking_no_leaves");

	event.replace("fowlplay:blue_jay", $SpawnPlacements.Type.ON_GROUND, "world_surface");
	event.replace("fowlplay:cardinal", $SpawnPlacements.Type.ON_GROUND, "world_surface");
	event.replace("fowlplay:chickadee", $SpawnPlacements.Type.ON_GROUND, "world_surface");
	event.replace("fowlplay:crow", $SpawnPlacements.Type.ON_GROUND, "world_surface");
	event.replace("fowlplay:goose", $SpawnPlacements.Type.NO_RESTRICTIONS, "ocean_floor");
	event.replace("fowlplay:gull", $SpawnPlacements.Type.NO_RESTRICTIONS, "world_surface");
	event.replace("fowlplay:hawk", $SpawnPlacements.Type.ON_GROUND, "world_surface");
	event.replace("fowlplay:penguin", $SpawnPlacements.Type.NO_RESTRICTIONS, "ocean_floor");
	event.replace("fowlplay:pigeon", $SpawnPlacements.Type.ON_GROUND, "world_surface");
	event.replace("fowlplay:raven", $SpawnPlacements.Type.ON_GROUND, "world_surface");
	event.replace("fowlplay:robin", $SpawnPlacements.Type.ON_GROUND, "world_surface");
	event.replace("fowlplay:sparrow", $SpawnPlacements.Type.ON_GROUND, "world_surface");

	// Mars
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

	// Venus
	event.replace("arthropocolypse:prairie_grasshopper", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("arthropocolypse:field_cricket", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("arthropocolypse:ice_crawler", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("arthropocolypse:worker_ant", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("arthropocolypse:soldier_ant", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("arthropocolypse:stag_beetle", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("arthropocolypse:wharf_roach", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("arthropocolypse:platerodrilus", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("arthropocolypse:mealworm_beetle", $SpawnPlacements.Type.ON_GROUND, "ocean_floor");
	event.replace("arthropocolypse:millipede_head", $SpawnPlacements.Type.NO_RESTRICTIONS, "ocean_floor");
	event.replace("minecraft:strider", $SpawnPlacements.Type.NO_RESTRICTIONS, "ocean_floor");
})