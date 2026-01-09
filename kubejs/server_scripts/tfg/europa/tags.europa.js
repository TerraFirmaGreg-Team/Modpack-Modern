"use strict";

function registerTFGEuropaEntityTypeTags(event) {
	const ENTITIES = [
		'endermanoverhaul:coral_enderman',
		'endermanoverhaul:snowy_enderman',
		'endermanoverhaul:ice_spikes_enderman',
		'species:deepfish',
		'species:leaf_hanger'
	]

	ENTITIES.forEach(entity => {
		event.add('ad_astra:can_survive_extreme_cold', entity)
		event.add('ad_astra:lives_without_oxygen', entity)
	})
}

function registerTFGEuropaPlacedFeatures(event) {
	
	event.add("tfg:glacio_top_layer_modification", "tfg:glow_lichen")
	event.add("tfg:glacio_top_layer_modification", "tfc:surface_loose_rocks")
}