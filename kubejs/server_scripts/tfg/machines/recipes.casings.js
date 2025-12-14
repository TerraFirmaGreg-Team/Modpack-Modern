"use strict";

function registerTFGCasingRecipes(event) {

	event.recipes.gtceu.assembler('steel_machine_casing')
		.itemInputs(ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 4))
		.itemOutputs('gtceu:steel_machine_casing')
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(16)

	// Railgun
	global.GTCEU_SUPERCONDUCTORS.forEach((type, index) => {
		const multiplier = index + 1

		event.recipes.gtceu.assembler(`tfg:assembler/superconductor_coil_small_from_${type.name}`)
			.itemInputs(
				ChemicalHelper.get(TagPrefix.plate, GTMaterials.HSLASteel, 4),
				ChemicalHelper.get(TagPrefix.rod, GTMaterials.Steel, 2),
				ChemicalHelper.get(TagPrefix.rod, GTMaterials.SteelMagnetic, 1),
				ChemicalHelper.get(TagPrefix.wireFine, GTMaterials[type.materialId], 4)
			)
			.inputFluids(Fluid.of('gtceu:epoxy', 144))
			.itemOutputs(Item.of('tfg:superconductor_coil_small', 4 * multiplier))
			.circuit(4)
			.duration(400)
			.EUt(GTValues.VA[GTValues.MV])

		event.recipes.gtceu.assembler(`tfg:assembler/superconductor_coil_large_from_${type.name}`)
			.itemInputs(
				ChemicalHelper.get(TagPrefix.plate, GTMaterials.HSLASteel, 4),
				ChemicalHelper.get(TagPrefix.rod, GTMaterials.Steel, 2),
				ChemicalHelper.get(TagPrefix.rod, GTMaterials.SteelMagnetic, 1),
				ChemicalHelper.get(TagPrefix.wireGtSingle, GTMaterials[type.materialId], 4))
			.inputFluids(Fluid.of('gtceu:epoxy', 144))
			.itemOutputs(Item.of('tfg:superconductor_coil_large', 4 * multiplier))
			.circuit(7)
			.duration(600)
			.EUt(GTValues.VA[GTValues.MV])
	})

	event.recipes.gtceu.assembler('tfg:assembler/electromagnetic_accelerator')
		.itemInputs(
			'2x #forge:plates/desh',
			'gtceu:mv_voltage_coil',
			'5x tfg:dry_ice',
			'gtceu:nonconducting_casing'
		)
		.inputFluids(Fluid.of('gtceu:blue_alloy', 288))
		.itemOutputs('6x tfg:electromagnetic_accelerator')
		.circuit(4)
		.duration(800)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.assembler('tfg:assembler/machine_casing_aluminium_plated_steel')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.plate, GTMaterials.Aluminium, 6),
			ChemicalHelper.get(TagPrefix.frameGt, GTMaterials.Steel, 1)
		)
		.inputFluids(Fluid.of('gtceu:silicon', 72))
		.itemOutputs('2x tfg:machine_casing_aluminium_plated_steel')
		.circuit(6)
		.duration(20 * (2.5))
		.EUt(GTValues.VH[GTValues.LV])

	// Solar
	event.recipes.gtceu.assembler('basic_solar_casing')
		.itemInputs('gtceu:steel_machine_casing', 'tfg:photo_cell_t1')
		.itemOutputs('8x tfg:casings/machine_casing_blue_solar_panel')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(16)

	event.recipes.gtceu.assembler('advanced_solar_casing')
		.itemInputs('8x tfg:casings/machine_casing_blue_solar_panel', 'ad_astra:photovoltaic_etrium_cell')
		.itemOutputs('8x tfg:casings/machine_casing_green_solar_panel')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(16)

	event.recipes.gtceu.assembler('elite_solar_casing')
		.itemInputs('8x tfg:casings/machine_casing_green_solar_panel', 'ad_astra:photovoltaic_vesnium_cell')
		.itemOutputs('8x tfg:casings/machine_casing_red_solar_panel')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(16)

	event.recipes.gtceu.assembler('tfg:reflector_from_lens')
		.itemInputs(
			'24x #forge:lenses',
			ChemicalHelper.get(TagPrefix.frameGt, GTMaterials.BlackSteel, 1)
		)
		.inputFluids(Fluid.of('gtceu:silver', 1296))
		.itemOutputs('1x tfg:reflector')
		.circuit(6)
		.duration(20 * (60))
		.EUt(GTValues.VH[GTValues.HV])

	event.recipes.gtceu.assembler('tfg:reflector_from_inr')
		.itemInputs(
			'1x gtceu:neutron_reflector',
			ChemicalHelper.get(TagPrefix.frameGt, GTMaterials.BlackSteel, 1)
		)
		.itemOutputs('2x tfg:reflector')
		.circuit(9)
		.duration(20 * (20))
		.EUt(GTValues.VH[GTValues.MV])

	event.recipes.gtceu.assembler('tfg:reflector_from_certus')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.plate, GTMaterials.CertusQuartz, 12),
			ChemicalHelper.get(TagPrefix.frameGt, GTMaterials.BlackSteel, 1)
		)
		.inputFluids(Fluid.of('gtceu:silver', 488))
		.itemOutputs('1x tfg:reflector')
		.circuit(6)
		.dimension('ad_astra:moon')
		.duration(20 * (60))
		.EUt(GTValues.VH[GTValues.MV])

	// Moon
	event.recipes.gtceu.assembler('iron_desh_casing')
		.itemInputs(ChemicalHelper.get(TagPrefix.plate, GTMaterials.Steel, 6), 'gtceu:desh_frame')
		.itemOutputs('2x tfg:casings/machine_casing_iron_desh')
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(16)

	// Evaporation
	event.recipes.gtceu.assembler('tfg:casings/machine_casing_stainless_evaporation')
		.itemInputs('gtceu:clean_machine_casing', '4x gtceu:annealed_copper_double_wire')
		.inputFluids(Fluid.of('gtceu:polyvinyl_chloride', 288))
		.itemOutputs('tfg:casings/machine_casing_stainless_evaporation')
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(GTValues.VA[GTValues.HV])

	// Ostrum Linear Acclerator
	event.recipes.gtceu.assembler('tfg:casings/machine_casing_mars')
		.itemInputs('gtceu:clean_machine_casing', '4x #forge:double_wires/kanthal')
		.inputFluids(Fluid.of('gtceu:polybenzimidazole', 288))
		.itemOutputs('tfg:casings/machine_casing_mars')
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.assembler('gtceu:atomic_casing')
		.itemInputs('4x #forge:dense_plates/lead', '2x #forge:plates/rtm_alloy', '#forge:frames/titanium')
		.inputFluids(Fluid.of('gtceu:polyvinyl_butyral', 288))
		.itemOutputs('2x gtceu:atomic_casing')
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(GTValues.VA[GTValues.HV])

	// Vacuum Intake
	event.shaped('tfg:casings/machine_casing_vacuum_engine_intake', [
		'USU',
		'WZW',
		'UTU'
	], {
		S: '#forge:tools/hammers',
		T: '#forge:tools/wrenches',
		W: '#forge:rotors/ultimet',
		U: 'gtceu:ultimet_normal_item_pipe',
		Z: 'gtceu:inert_machine_casing'
	}).id('tfg:shaped/casing_machine_casing_vacuum_engine_intake')

	event.recipes.gtceu.assembler('tfg:casings/machine_casing_vacuum_engine_intake')
		.itemInputs(
			'2x #forge:rotors/ultimet',
			'4x gtceu:ultimet_normal_item_pipe',
			'1x gtceu:inert_machine_casing')
		.itemOutputs('tfg:casings/machine_casing_vacuum_engine_intake')
		.duration(50)
		.EUt(GTValues.VH[GTValues.LV])
		.circuit(2)

	event.recipes.gtceu.assembler('tfg:casings/machine_casing_power_casing')
		.itemInputs('gtceu:ostrum_frame', '4x #forge:plates/titanium_tungsten_carbide', '16x #forge:fine_wires/copper',
					'16x #forge:fine_wires/tungsten_bismuth_oxide_composite')
		.inputFluids(Fluid.of('gtceu:reinforced_epoxy_resin', 288))
		.itemOutputs('2x tfg:machine_casing_power_casing')
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(GTValues.VA[GTValues.EV])
}