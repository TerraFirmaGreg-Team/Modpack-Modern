"use strict";

const registerMatterManipulatorRecipes = (event) => {

    event.remove({
		not: [
			{ id: 'matter_manipulator:blueprint' },
		], mod: 'matter_manipulator'
	});
    
	// Geometry
	event.recipes.gtceu.assembler('tfg:prototype_matter_manipulator')
		.itemInputs('1x gtceu:hv_emitter','2x gtceu:hv_fluid_regulator','6x #forge:plates/stainless_steel', '2x gtceu:hv_robot_arm', '1x gtceu:computer_monitor_cover', '1x gtceu:energy_crystal', '1x ae2:formation_plane')
		.circuit(13)
		.itemOutputs(Item.of('matter_manipulator:prototype_matter_manipulator', '{MatterManipulator:{}}'))
		.duration(20*10)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true)

	// Cable Exchange Geometry
	event.recipes.gtceu.assembler('tfg:matter_manipulator_mki')
		.itemInputs('1x gtceu:ev_emitter','2x gtceu:ev_fluid_regulator','6x #forge:plates/titanium', '2x gtceu:ev_robot_arm', '1x gtceu:computer_monitor_cover', '1x gtceu:lapotron_crystal', '1x ae2:equal_distribution_card')
		.circuit(13)
		.itemOutputs(Item.of('matter_manipulator:matter_manipulator_mki', '{MatterManipulator:{}}'))
		.duration(20*15)
		.EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true)

	// Cable Exchange Geometry Copy Blueprint Move but limited range
	event.recipes.gtceu.assembler('tfg:matter_manipulator_mkii')
		.itemInputs('1x gtceu:ev_emitter','2x gtceu:ev_fluid_regulator','6x #forge:plates/titanium', '2x gtceu:ev_robot_arm', '1x gtceu:computer_monitor_cover', '1x #gtceu:batteries/ev', '1x ae2:spatial_storage_cell_2', '3x #forge:double_plates/ostrum')
		.circuit(13)
		.itemOutputs(Item.of('matter_manipulator:matter_manipulator_mkii', '{MatterManipulator:{}}'))
		.duration(20*30)
		.EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true)

		/*
	// Everything but no range limit
	event.recipes.gtceu.assembler('tfg:matter_manipulator_mkiii')
		.itemInputs('1x gtceu:ev_sensor','2x gtceu:ev_fluid_regulator','6x #forge:plates/titanium', '2x gtceu:ev_robot_arm', '1x gtceu:computer_monitor_cover', '1x gtceu:energy_crystal', '1x ae2:annihilation_plane')
		.circuit(13)
		.itemOutputs(Item.of('matter_manipulator:matter_manipulator_mkiii', '{MatterManipulator:{}}'))
		.duration(160)
		.EUt(2000)
		.addMaterialInfo(true)
		*/

}
