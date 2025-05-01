// priority: 0

const registerTFGMaterials = (event) => {
	event.create('hardwood')
		.dust()
		.flags(GTMaterialFlags.FLAMMABLE)
		.iconSet(GTMaterialIconSet.FINE)
		.color('0x7a5225')
		.secondaryColor('0x7a5225')

	event.create('thermochemically_treated_hardwood')
		.dust()
		.flags(GTMaterialFlags.FLAMMABLE)
		.iconSet(GTMaterialIconSet.FINE)
		.color('0x52482c')
		.secondaryColor('0x52482c')

	// Important tags to add to fluids:
	// tfc:usable_in_pot, tfc:usable_in_barrel, tfc:usable_in_wooden_bucket

	event.create('tfg:latex')
		.liquid()
		.color(0xFBB982)

	event.create('tfg:vulcanized_latex')
		.liquid()
		.color(0xc79973)

	event.create('tfg:conifer_pitch')
		.liquid()
		.color(0xfbdf82)
		.secondaryColor(0xff9d2e)


	event.create('lactose')
		.dust()
		.iconSet(GTMaterialIconSet.FINE)
		.color('0xede8da')
		.secondaryColor('0xeddcad')
		.components('12x carbon', '22x hydrogen', '11x oxygen')
}