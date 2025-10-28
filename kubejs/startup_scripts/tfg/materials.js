// priority: 0
"use strict";

const registerTFGMaterials = (event) => {

	
	event.create('hardwood')
		.dust()
		.flags(GTMaterialFlags.FLAMMABLE)
		.iconSet(GTMaterialIconSet.WOOD)
		.color('0x7a5225')
		.secondaryColor('0x7a5225')

	event.create('thermochemically_treated_hardwood')
		.dust()
		.flags(GTMaterialFlags.FLAMMABLE)
		.iconSet(GTMaterialIconSet.WOOD)
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

	// Cooking

	event.create('lactose')
		.dust()
		.iconSet(GTMaterialIconSet.FINE)
		.color('0xede8da')
		.secondaryColor('0xeddcad')
		.components('12x carbon', '22x hydrogen', '11x oxygen')

	// Used as a TFC aluminium substitute so you can't make actual aluminium ingots early
	event.create('aluminium_silicate')
		.dust()
		.ingot()
		.liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).temperature(1520))
		.components('2x aluminium', '1x silicon', '5x oxygen')
		.iconSet('metallic')
		.color(0xB6D3FF)
		.secondaryColor(0x6F4AB3)

	// Space Rocket Materials

	event.create('rocket_alloy_t1')
		.ingot()
		.components('6x aluminium', '2x stainless_steel', '1x red_steel')
		.color(0x333e47)
		.iconSet('metallic')
		.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_GEAR)
		.blastTemp(1760, 'low', 256, 900)

	event.create('rocket_alloy_t2')
		.ingot()
		.components('19x titanium', '4x vanadium', '3x aluminium', '3x chromium', '3x tin')
		.color(0x3c253d)
		.iconSet('metallic')
		.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.DISABLE_ALLOY_BLAST)
		.blastTemp(3200, 'mid', 1024, 1100)
		.liquid()
	
/*	event.create('rocket_alloy_t3')
		.ingot()
		.components('8x titanium', '9x tungsten_steel', '2x tantalum', '2x radon')
		.color(0x6c678b)
		//.secondaryColor(0xa59fc6)
		.liquid()
		.removeHazard()
		.iconSet('metallic')
		.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_GEAR)
		.blastTemp(4200, 'high', 4096, 1300)
	*/
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

	// Fission Component

	event.create('tfg:tetrafluoroethane')
		.fluid()
		.gem()
		.flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.DISABLE_DECOMPOSITION)
		.iconSet(GTMaterialIconSet.QUARTZ)
		.components('2x carbon', '2x hydrogen', '4x fluorine')
		.color(0x46702e)

	// Crafting components

	event.create('tfg:kaolinite')
		.dust()
		.components('2x aluminium', '2x silicon', '9x oxygen', '4x hydrogen')
		.color(0xEEB9AD)
		.secondaryColor(0xF6A797)

	event.create('tfg:vitrified_pearl')
		.dust()
		.flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
		.components('2x aluminium', '2x silicon', '9x oxygen', '4x hydrogen', '1x ender_pearl')
		.color(0xFFFFFF)
		.secondaryColor(0x67FFE6)

	//#region Solar Panel Chemicals

	event.create('tfg:chloryl_fluoride')
		.gas()
		.components('1x fluorine', '1x chlorine', '2x oxygen')
		.color(0x8AFAF4)

	event.create('tfg:chlorine_pentafluoride')
		.gas()
		.components('5x fluorine', '1x chlorine')
		.color(0x51F7C0)

	event.create('tfg:solar_coolant')
        .gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(163))
		.components('8x helium_3', '11x oxygen', '11x hydrogen')
		.color(0xEDFFB3)

	event.create('tfg:solar_coolant_tier2')
        .gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(73))
		.formula('(He³8O11H11)8(Ar)(?)')
		.color(0xfeff5d)

	//#endregion
	event.create('liquid_carbon_dioxide')
		.liquid(100) //Not realistic but I want it to be cryogenic
		.components('1x carbon', '2x oxygen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xDBFBFF)

	//#region Rockwool
	event.create('tfg:aes_mix')
		.dust()
		.flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
		.components('5x silicon_dioxide', '4x quicklime', '1x magnesia')
		.hazard(HazardProperty.HazardTrigger.SKIN_CONTACT, GTMedicalConditions.CHEMICAL_BURNS)
		.color(0xE0E9E4)
		//.secondaryColor(0x54483d)
	event.create('tfg:molten_aes')
		.liquid(2900)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.components('5x silicon_dioxide', '4x quicklime', '1x magnesia')
		.color(0xe65609)
		.secondaryColor(0xe65609)
	//#endregion
	
	//#region Ammonia Borane
	event.create('tfg:sodium_hydride')
		.dust()
		.flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
		.components('1x sodium', '1x hydrogen')
		.color(0xEDF5F3)
	event.create('tfg:boric_acid')
		.dust()
		.flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
		.components('3x hydrogen', '1x boron', '3x oxygen')
		.color(0xDFEDDF)
		.secondaryColor(0xDFEDDF)
	event.create('tfg:trimethyl_borate')
		.liquid()
		.flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
		.components('3x carbon', '9x hydrogen', '1x boron', '3x oxygen')
		.color(0xF7F7F7)
	event.create('tfg:sodium_borohydride')
		.dust()
		.flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
		.components('1x sodium', '1x boron', '4x hydrogen')
		.color(0xE8F1FF)
		.secondaryColor(0xE8F1FF)
	event.create('tfg:sodium_methoxide')
		.dust()
		.flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
		.components('1x sodium', '1x oxygen', '1x carbon', '3x hydrogen')
		.color(0xE8E5DF)
		.secondaryColor(0xE8E5DF)
	event.create('tfg:ammonia_borane')
		.dust()
		.flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING, GTMaterialFlags.GENERATE_PLATE)
		.components('1x ammonia', '1x boron', '3x hydrogen')
		.color(0xCCE3E3)
		.secondaryColor(0xCCE3E3)
	//#endregion
	
	//#region polyurethane
	event.create('tfg:aniline')
		.liquid()
		.components('6x carbon', '5x hydrogen', '1x nitrogen', '2x hydrogen')
		.color(0xBAB999)
	event.create('tfg:dimethyl_carbonate')
		.liquid()
		.flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
		.components('3x carbon','6x hydrogen', '3x oxygen')
		.color(0xFFFFF2)
	event.create('tfg:methyl_phenylcarbamate')
		.liquid()
		.flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
		.components('8x carbon','9x hydrogen','1x nitrogen', '2x oxygen')
		.color(0xB4EDB4)
	event.create('tfg:methylene_diphenyl_dicarbamate')
		.liquid()
		.flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
		.components('17x carbon','18x hydrogen','2x nitrogen', '4x oxygen')
		.color(0x69C2C1)
	event.create('tfg:methylene_diphenyl_diisocyanate')
		.dust()
		.flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
		.components('13x carbon','10x hydrogen','2x nitrogen', '2x oxygen')
		.color(0xFFFFBA)
	//#endregion
	
	//#region aerogel
	event.create('tfg:tmos')
		.liquid()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xC2C6CC)
	event.create('tfg:silica_gel')
		.liquid()
		.color(0x60BABF)
		.secondaryColor(0xFFD38C)
	event.create('tfg:soaked_silica_gel')
		.liquid()
		.color(0x9ED5D9)
	//#endregion

	//#region Bromine Line

    event.create('raw_brine')
        .fluid()
        .color(0x947a11)
        //.secondaryColor(0x81FFF9)

    event.create('hot_brine')
        .liquid(320)
        .color(0x944611)

    event.create('hot_chlorinated_brominated_brine')
        .liquid(320)
        .color(0xbf8d5a)
		.formula('?Cl')

    event.create('brominated_chlorine_vapor')
        .gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(320))
		.color(0xbf8d5a)
		.formula('ClBr(H2O)')

    event.create('acidic_bromine_solution')
		.liquid(new GTFluidBuilder().attribute(GTFluidAttributes.ACID))
		.color(0xe7b989)
		.formula('ClBr')

    event.create('concentrated_bromine_solution')
		.liquid()
		.color(0x905d29)
		.formula('Br2Cl')

    event.create('debrominated_brine')
		.liquid()
		.color(0xc3874a)

    event.create('acidic_bromine_exhaust')
        .gas(new GTFluidBuilder().state(GTFluidState.GAS).attribute(GTFluidAttributes.ACID).temperature(293))
		.color(0xec9c4a)
		.formula('(H2O)3Cl')

    event.create('hot_alkaline_debrominated_brine')
		.liquid()
		.color(0xcc6a06)
		.formula('?2Cl')

    event.create('hot_debrominated_brine')
		.liquid(320)
		.color(0xb08e6b)

    event.create('hydrogen_iodide')
        .gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(293))
		.color(0x82a6ce)
		.formula('HI')

	//#endregion

	//#region Mars Ore Line

	event.create('lightweight_ostrum_vapor')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(760))
		.formula('(?)')

	event.create('ostrum_vapor')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(815))
		.formula('(?)')

	event.create('dense_ostrum_vapor')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(930))
		.formula('(?)')

	event.create('residual_radioactive_concoction')
		.liquid(new GTFluidBuilder().customStill().temperature(450))
		.formula('(?)')

	//#endregion

	//#region Moon Ore Line

	event.create('regolith_vapor')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(727))

	event.create('tfg:certus_regolith')
		.dust()
		.flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.iconSet(GTMaterialIconSet.CERTUS)
		.color('0xc1e6e4')
		.secondaryColor('0x7a5225')

	event.create('tfg:goethe_regolith')
		.dust()
		.flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.iconSet(GTMaterialIconSet.METALLIC)
		.color('0xb0af5b')
		.secondaryColor('0x7a5225')

	event.create('tfg:bright_regolith')
		.dust()
		.flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.iconSet(GTMaterialIconSet.SHINY)
		.color('0xf0efe9')
		.secondaryColor('0xffffff')

	event.create('tfg:cassiterite_regolith')
		.dust()
		.flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.iconSet(GTMaterialIconSet.METALLIC)
		.color('0xbab6b7')
		.secondaryColor('0x7a5225')

	event.create('tfg:regolith_mush')
		.dust()
		.flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.iconSet(GTMaterialIconSet.WOOD)
		.color('0xa2cde0')
		.secondaryColor('0x7a5225')

	//#endregion

	//#region Tungsten Line

	event.create('tfg:sodium_tungstate')
		.dust()
		.flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.DISABLE_DECOMPOSITION)
		.iconSet(GTMaterialIconSet.BRIGHT)
		.components('2x sodium','1x tungsten', '4x oxygen')
		.color('0xdcf6f7')

	event.create('tfg:ammonium_tungstate')
		.dust()
		.flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.DISABLE_DECOMPOSITION)
		.iconSet(GTMaterialIconSet.DULL)
		.formula('(NH4)10(H2W12O42)')
		.color('0xfafafa')

	event.create('tfg:apt')
		.gem()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.iconSet(GTMaterialIconSet.FLINT)
		.formula("(NH4)10(H2W12O42)(H2O)4")
		.color('0xaabdf0')

	event.create('tfg:tungsten_oxide')
		.dust()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.iconSet(GTMaterialIconSet.FLINT)
		.components('1x tungsten', '3x oxygen')
		.color('0xf0c851')

	// #endregion

	// #region Atmospheres

	event.create('tfg:mars_air')
        .gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(208))
		.color('0xD08957')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.components('94x carbon_dioxide', '3x nitrogen', '2x argon', '1x oxygen')

	// TODO: move neon and xenon somewhere else
	event.create('tfg:liquid_mars_air')
		.liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).temperature(58))
		.color('0xD08957')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.components('80x carbon_dioxide', '7x nitrogen', '5x argon', '3x oxygen', '1x neon', '1x krypton', '1x xenon')

	// #endregion

	//#region New Alloy for Turbines

	event.create('tfg:tungsten_bismuth_oxide_composite')
		.components('1x tungsten', '2x bismuth', '3x oxygen')
		.color(0xf7cb48)
		.secondaryColor(0xfffef0)
		.iconSet(GTMaterialIconSet.getByName('tfc_cassiterite'))
		.ingot()
		.blastTemp(3700, 'mid', GTValues.VA[GTValues.IV], (20*120))
		.rotorStats(250, 90, 2 ,620)
		.flags(
			GTMaterialFlags.DISABLE_DECOMPOSITION, 
			GTMaterialFlags.GENERATE_PLATE,
			GTMaterialFlags.GENERATE_ROD,
			GTMaterialFlags.GENERATE_BOLT_SCREW,
			GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES,
			GTMaterialFlags.GENERATE_GEAR
		)

	// #endregion

	// #region Mars sap
	
	event.create('tfg:crimsene')
		.liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).temperature(220))
		.gem()
		.iconSet('lapis')
		.flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0xB12727)
		.secondaryColor(0x562C3E)

	event.create('tfg:warpane')
		.liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).temperature(220))
		.gem()
		.iconSet('quartz')
		.flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0x45ABA9)
		.secondaryColor(0x562C3E)

	event.create('tfg:mycelienzene')
		.dust()
		.color(0x9E7385)

	event.create('tfg:cooked_mycelienzane')
		.liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).temperature(1830))
		.color(0x9E7385)

	event.create('tfg:iodomethane')
		.liquid()
		.components('1x carbon', '3x hydrogen', '1x iodine')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xAC45C6)

	event.create('tfg:trideuteroiodomethane')
		.liquid()
		.components('1x carbon', '3x deuterium', '1x iodine')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xDD9DED)

	// #endregion
	
	// #region conductor
	event.create('tfg:thermally_conductive_fluid')
		.liquid()
		.flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
		.components('7x gallium', '2x tin', '1x zinc')
		.color('0x34cfeb')
}
