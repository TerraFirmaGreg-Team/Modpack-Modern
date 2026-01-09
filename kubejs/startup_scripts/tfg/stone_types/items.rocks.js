"use strict";

function registerTFGRockItems(event) {

	event.create('tfg:brick/deepslate')
		.tag(`tfc:metamorphic_items`)
		.translationKey('item.tfg.brick.deepslate')

	event.create('tfg:brick/dripstone')
		.tag(`tfc:sedimentary_items`)
		.translationKey('item.tfg.brick.dripstone')	

	event.create('tfg:brick/moon_stone')
		.tag(`tfc:igneous_intrusive_items`)
		.translationKey('item.tfg.brick.moon_stone')

	event.create('tfg:brick/moon_deepslate')
		.tag(`tfc:igneous_intrusive_items`)
		.translationKey('item.tfg.moon_deepslate')

	event.create('tfg:brick/mars_stone')
		.tag(`tfc:sedimentary_items`)
		.translationKey('item.tfg.brick.mars_stone')

	event.create('tfg:brick/venus_stone')
		.tag(`tfc:igneous_extrusive_items`)
		.translationKey('item.tfg.brick.venus_stone')

	event.create('tfg:brick/mercury_stone')
		.tag(`tfc:igneous_intrusive_items`)
		.translationKey('item.tfg.brick.mercury_stone')

	event.create('tfg:brick/glacio_stone')
		.tag(`tfc:igneous_extrusive_items`)	
		.translationKey('item.tfg.brick.glacio_stone')

	event.create('tfg:brick/permafrost')
		.translationKey('item.tfg.brick.permafrost')

	event.create('tfg:brick/red_granite')
		.tag(`tfc:igneous_intrusive_items`)
		.translationKey('item.tfg.red_granite')
}