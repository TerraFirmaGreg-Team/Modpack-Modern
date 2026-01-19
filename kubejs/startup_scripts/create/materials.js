// priority: 0
"use strict";

function registerCreateMaterials(event) {

	event.create('asurine')
		.color(0x7DB8D1)
		.secondaryColor(0x4C5D7B)
		.components('1x certus_quartz', '1x olivine', '1x zinc')
		.dust()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('ochrum')
		.color(0xB6995E)
		.secondaryColor(0x865840)
		.components('1x quartzite', '1x hematite', '1x gold')
		.dust()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('crimsite')
		.color(0xA0504B)
		.secondaryColor(0x7D2F3B)
		.dust()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('veridium')
		.color(0x4F957C)
		.secondaryColor(0x2A5C4A)
		.dust()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
}