function registerTFGPetroChemMaterials(event) {

	event.create('tfg:dehydrogenated_propane')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(480))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xd9a441)

	event.create('tfg:dehydrogenated_butane')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(480))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xc9783a)

	const dust = (id, color, secondaryColor) => event.create(id)
		.dust()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.iconSet(GTMaterialIconSet.FINE)
		.color(color)
        .secondaryColor(secondaryColor)

	dust('tfg:chromia_alumina_catalyst', 0x7fa37a, 0x596775)
	dust('tfg:coked_chromia_alumina_catalyst', 0x3d4a3a, 0xA398A4)
	dust('tfg:platinum_tin_alumina_catalyst', 0xd8dde0, 0xd8dde0)
	dust('tfg:coked_platinum_tin_alumina_catalyst', 0x55595c, 0x3A372B)
    dust('tfg:bismuth_molybdate_catalyst', 0xc9b458, 0x8a7a3a)

}