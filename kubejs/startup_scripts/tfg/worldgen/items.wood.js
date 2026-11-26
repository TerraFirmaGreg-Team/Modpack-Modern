"use strict";

function registerTFGWoodItems(event) {

	global.TFG_NEW_WOOD_TYPES.forEach(wood => {
		event.create(`tfg:wood/lumber/${wood.name}`)
			.translationKey(`item.tfg.item.wood.lumber.${wood.name}`)
			.tag('tfc:lumber')
	})

	
	event.create('tfg:twigs/alphacene')
		.tag('tfc:twigs')
		.texture('tfg:item/wood/twig/alphacene')

	// Bamboo lumber
	event.create('tfg:wood/lumber/bamboo')
		.tag('tfc:lumber')
		.texture('tfg:item/wood/lumber/bamboo')
}