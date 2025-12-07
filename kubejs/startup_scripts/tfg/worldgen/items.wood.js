"use strict";

function registerTFGWoodItems(event) {

	global.AD_ASTRA_WOOD.forEach(wood => {
		event.create(`tfg:wood/lumber/${wood.name}`)
			.translationKey(`item.tfg.${wood.name}_lumber`)
			.tag('tfc:lumber')
	})

	
	event.create('tfg:twigs/strophar')
		.tag('tfc:twigs')
		.texture('tfg:item/wood/twig/strophar')
	event.create('tfg:twigs/aeronos')
		.tag('tfc:twigs')
		.texture('tfg:item/wood/twig/aeronos')
	event.create('tfg:twigs/glacian')
		.tag('tfc:twigs')
		.texture('tfg:item/wood/twig/glacian')
	event.create('tfg:twigs/alphacene')
		.tag('tfc:twigs')
		.texture('tfg:item/wood/twig/alphacene')
}