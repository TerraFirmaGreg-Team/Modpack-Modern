"use strict";

function registerTFGMarsMaterials(event) {

	event.create('liquid_carbon_dioxide')
		.liquid(100) //Not realistic but I want it to be cryogenic
		.components('1x carbon', '2x oxygen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xDBFBFF)

	// Mars Ore Line

	event.create('lightweight_ostrum_vapor')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(760))

	event.create('ostrum_vapor')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(815))

	event.create('dense_ostrum_vapor')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(930))

	event.create('residual_radioactive_concoction')
		.liquid(new GTFluidBuilder().customStill().temperature(450))

	// Atmosphere

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

	// Mars sap
	
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

	// Ores

	event.create('ostrum')
		.components('2x pitchblende', '1x tricalcium_phosphate', '1x bauxite', '1x silver', '1x beryllium')
		.color(0xbd7980)
		.secondaryColor(0xA66C8D)
		.iconSet(GTMaterialIconSet.getByName('tfc_cassiterite'))
		.ingot()
		.liquid()
		.blastTemp(3700, 'mid', GTValues.VA[GTValues.EV])
		.flags(
			GTMaterialFlags.DISABLE_DECOMPOSITION,
			GTMaterialFlags.FORCE_GENERATE_BLOCK, 
			GTMaterialFlags.GENERATE_PLATE,
			GTMaterialFlags.GENERATE_ROD,
			GTMaterialFlags.GENERATE_FRAME,
			GTMaterialFlags.DISABLE_ALLOY_BLAST
		)	

	event.create("ostrum_iodide")
		.ingot()
		.components('2x ostrum', 'iodine')
		.blastTemp(3700, 'mid', GTValues.VA[GTValues.IV], (20*120))
		.iconSet(GTMaterialIconSet.BRIGHT)
		.flags(GTMaterialFlags.GENERATE_GEAR)
		.color(0xc696f2)
		.secondaryColor(0x9b99ff)
}