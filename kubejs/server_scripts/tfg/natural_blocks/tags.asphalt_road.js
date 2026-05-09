// priority: 0
"use strict";

/** TFC falling blocks: canFallThrough requires toughness; tag roads like stone so soil cannot crush them. */
ServerEvents.tags("block", (event) => {
	const asphalt = [
		"tfg:asphalt_road",
		"tfg:asphalt_road_hot",
		"tfg:asphalt_road_pouring",
		"tfg:asphalt_road_slab",
		"tfg:asphalt_road_stairs",
	];
	for (const id of asphalt) {
		event.add("tfc:toughness_2", id);
	}
});
