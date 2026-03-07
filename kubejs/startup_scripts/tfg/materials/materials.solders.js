// priority: 0
"use strict";

function registerTFGSolderMaterials(event) {

	event.create('tfg:woods_metal')
		.dust()
		.liquid(GTFluidBuilder().temperature(343).customStill())
		.ingot()
		.color(0x65737C)
		.components('4x bismuth', '2x lead', '1x tin', '1x cadmium')
		.flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
		.hazard(HazardProperty.HazardTrigger.SKIN_CONTACT, GTMedicalConditions.POISON)

	event.create('tfg:bi_pb_sn_cd_in_tl')
		.dust()
		.liquid(GTFluidBuilder().temperature(314).customStill())
		.ingot()
		.color(0x745252)
		.components('8x bismuth', '4x lead', '2x tin', '3x indium', '2x cadmium', '1x thallium')
		.flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
		.hazard(HazardProperty.HazardTrigger.SKIN_CONTACT, GTMedicalConditions.CHEMICAL_BURNS)

	event.create('tfg:lorandite')
		.dust()
		.ore()
		.color(0xC97523)
		.secondaryColor(0xcf151b)
		.components('1x thallium', '1x arsenic', '2x sulfur')
		.addOreByproducts('pyrite', 'sulfur', 'stibnite', 'arsenic_trioxide')
		.washedIn(GTMaterials.SodiumPersulfate)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, TFGMaterialFlags.GENERATE_DUSTY_ORES)

	event.create('tfg:thallium_sulfate')
		.dust()
		.color(0x6691AD)
		.components('2x thallium', '1x sulfur', '4x oxygen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.hazard(HazardProperty.HazardTrigger.SKIN_CONTACT, GTMedicalConditions.CHEMICAL_BURNS)

	event.create('tfg:zinc_sulfate')
		.dust()
		.color(0x92B39F)
		.components('1x zinc', '1x sulfur', '4x oxygen')
		.flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)


}