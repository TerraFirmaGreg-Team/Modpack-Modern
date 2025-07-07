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

	// Space Rocket Materials

	event.create('rocket_alloy_t1')
		.ingot()
		.components('6x aluminium', '2x stainless_steel', '1x red_steel')
		.color(0x333e47)
		.iconSet('metallic')
		.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_DENSE)
		.blastTemp(1760, 'low', 120, 1200)

	event.create('vitrified_asbestos')
		.dust()
		.fluid()
		.iconSet('glass')
		.color(0xcccccc)

	// Space suit gases (these all add up to 10B of components = 1B of space suit gas)

	event.create('tfg:compressed_nitrox')
		.gas()
		.components('8x nitrogen', '2x oxygen')
		.color(0xaef5ef)

	event.create('tfg:compressed_heliox')
		.gas()
		.components('8x helium', '2x oxygen')
		.color(0xf5eeb3)

	event.create('tfg:compressed_heliox_3')
		.gas()
		.components('8x helium_3', '2x oxygen')
		.color(0xf5ea90)

	event.create('tfg:compressed_trimix')
		.gas()
		.components('5x nitrogen', '3x oxygen', '2x helium')
		.color(0xc3fab9)

	event.create('tfg:compressed_trimix_3')
		.gas()
		.components('5x nitrogen', '3x oxygen', '2x helium_3')
		.color(0xa3ed95)

	// Refrigerants

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
