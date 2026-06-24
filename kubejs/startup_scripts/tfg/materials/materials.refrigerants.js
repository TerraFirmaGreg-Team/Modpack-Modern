// priority: 0
"use strict";

function registerTFGRefrigerantMaterials(event) {

	event.create('tfg:chlorodifluoromethane')
		.gas()
		.components('1x carbon', '1x hydrogen', '1x chlorine', '2x fluorine')
		.color(0x66ffa3)

	event.create('tfg:acetylene')
		.gas()
		.components('2x carbon', '2x hydrogen')
		.color(0x1a1212)

	event.create('tfg:isobutane')
		.gas()
		.components('4x carbon', '10x hydrogen')
		.color(0x7d0f00)

	event.create('tfg:1_1_1_2_tetrafluoroethane')
		.gas()
		.components('2x carbon', '2x hydrogen', '4x fluorine')
		.color(0x46702e)
}