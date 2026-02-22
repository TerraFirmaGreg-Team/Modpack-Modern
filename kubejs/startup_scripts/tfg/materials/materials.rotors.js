// priority: 0
"use strict";

function registerTFGRotorMaterials(event) {
	const $BlastProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty")

	// Material at HV used for Exotic Rotor

	event.create('tfg:inconel_718')
		.components('5x invar', '2x chromium', '2x molybdenum', '1x niobium', '1x aluminium', '1x titanium')
		.color(0xfff870)
		.secondaryColor(0xc8cdf7)
		.iconSet(GTMaterialIconSet.METALLIC)
		.ingot()
		.blastTemp(2710, $BlastProperty.GasTier.MID, GTValues.VA[GTValues.EV], (20*120))
		.flags(
			GTMaterialFlags.DISABLE_DECOMPOSITION, 
			GTMaterialFlags.GENERATE_PLATE,
			GTMaterialFlags.GENERATE_ROD,
			GTMaterialFlags.GENERATE_BOLT_SCREW)

	event.create('tfg:weak_inconel_718')
		.components('5x invar', '2x chromium', '2x molybdenum', '1x niobium', '1x aluminium', '1x titanium')
		.color(0x8f8c57)
		.secondaryColor(0xc8cdf7)
		.iconSet(GTMaterialIconSet.ROUGH)
		.ingot()
		.blastTemp(1210, $BlastProperty.GasTier.MID, GTValues.VA[GTValues.EV], (20*120))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:homogenized_inconel_718')
		.components('5x invar', '2x chromium', '2x molybdenum', '1x niobium', '1x aluminium', '1x titanium')
		.color(0xdbd560)
		.secondaryColor(0xc8cdf7)
		.iconSet(GTMaterialIconSet.DULL)
		.ingot()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, 
			GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		
	// Material for Inconel Line at HV

	event.create('tfg:inert_furnace_atmosphere')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(3730))
		.components('2x nitrogen', '1x argon', '1x hydrogen')
		.color(0xB8B6AD)
		.secondaryColor(0x9A8C62)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:metal_desorption_gas')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(1200))
		.components('2x hydrogen', '1x oxygen', '1x carbon_monoxide')
		.color(0x7A7262)
		.secondaryColor(0x5E4B32)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:reducing_process_gas')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(1800))
		.components('3x hydrogen', '1x nitrogen', '1x carbon_monoxide')
		.color(0x9AA0A6)
		.secondaryColor(0x6B7075)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	// Material for Mo-Si-B

	event.create('tfg:argon_enriched_atmosphere')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(87))
		.color(0x7F9CBF)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:furnace_exhaust_gas')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(1200))
		.color(0xAAAAAA)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:mo_si_b_off_gas')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(1500))
		.color(0xC0B283)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:medium_temperature_off_gas')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(800))
		.color(0xE0C080)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:hydroxide_decomposition_off_gas')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(600))
		.color(0xA0C0FF)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:linac_activated_gas')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(300))
		.color(0xFF4444)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:highly_active_off_gas')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(1300))
		.color(0xFFAA00)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:dirty_mo_si_b')
		.color(0x77FF77)
		.secondaryColor(0x77AAFF)
		.iconSet(GTMaterialIconSet.ROUGH)
		.dust()
		.flags(
			GTMaterialFlags.DISABLE_DECOMPOSITION, 
			GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

	event.create('tfg:weak_mo_si_b')
		.color(0xAAAAAA)
		.secondaryColor(0x77AAFF)
		.iconSet(GTMaterialIconSet.ROUGH)
		.ingot()
		.blastTemp(2710, $BlastProperty.GasTier.MID, GTValues.VA[GTValues.EV], (20*120))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:worked_mo_si_b')
		.color(0x77AAFF)
		.secondaryColor(0x77FF77)
		.blastTemp(2710, $BlastProperty.GasTier.MID, GTValues.VA[GTValues.EV], (20*120))
		.iconSet(GTMaterialIconSet.OPAL)
		.ingot()
		.flags(
			GTMaterialFlags.DISABLE_DECOMPOSITION, 
			GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

	event.create('tfg:homogenized_mo_si_b')
		.color(0x88CCFF)
		.secondaryColor(0x99FF88)
		.iconSet(GTMaterialIconSet.FINE)
		.blastTemp(2710, $BlastProperty.GasTier.MID, GTValues.VA[GTValues.EV], (20*120))
		.ingot()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:activated_mo_si_b')
		.color(0xFF4444)
		.secondaryColor(0x88CCFF)
		.iconSet(GTMaterialIconSet.RADIOACTIVE)
		.ingot()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:mo_si_b')
		.color(0x77AAFF)
		.secondaryColor(0xCCCCCC)
		.iconSet(GTMaterialIconSet.METALLIC)
		.ingot()
		.blastTemp(2710, $BlastProperty.GasTier.MID, GTValues.VA[GTValues.EV], (20*120))
		.flags(
			GTMaterialFlags.DISABLE_DECOMPOSITION, 
			GTMaterialFlags.GENERATE_PLATE,
			GTMaterialFlags.GENERATE_ROD,
			GTMaterialFlags.GENERATE_BOLT_SCREW)

	event.create('tfg:mo_50_re')
		.color(0x5a8c78)
		.secondaryColor(0x94eb9f)
		.iconSet(GTMaterialIconSet.getByName('chonky'))
		.ingot()
		.blastTemp(2341, $BlastProperty.GasTier.LOW, GTValues.VA[GTValues.HV], (20*95))
		.flags( 
			GTMaterialFlags.GENERATE_PLATE,
			GTMaterialFlags.GENERATE_ROD,
			GTMaterialFlags.GENERATE_BOLT_SCREW)
}