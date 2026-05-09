// priority: 0
"use strict";

ServerEvents.tags("block", (event) => {
	const asphalt = [
		"tfg:asphalt_road",
		"tfg:asphalt_road_hot",
		"tfg:asphalt_road_pouring",
		"tfg:asphalt_road_slab",
		"tfg:asphalt_road_stairs",
	];
	for (const id of asphalt) {
		event.add("tfc:supports_landslide", id);
		event.add("tfc:toughness_2", id);
	}
});
