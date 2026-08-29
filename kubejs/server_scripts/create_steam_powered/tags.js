// priority: 0
"use strict";

function registerCreateSteamPoweredItemTags(event) {
	event.removeAll('steampowered:bronze')
	event.removeAll('steampowered:bronzeplate')
}

function registerCreateSteamPoweredFluidTags(event) {
	event.add("c:hidden_from_recipe_viewers", "steampowered:steam");
}