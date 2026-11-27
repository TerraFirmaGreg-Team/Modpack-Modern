"use strict";

function registerTFGWoodItems(event) {
	
	event.create('tfg:twigs/alphacene')
		.tag('tfc:twigs')
		.texture('tfg:item/wood/twig/alphacene')

	// Bamboo lumber
	event.create('tfg:wood/lumber/bamboo')
		.tag('tfc:lumber')
		.texture('tfg:item/wood/lumber/bamboo')
}