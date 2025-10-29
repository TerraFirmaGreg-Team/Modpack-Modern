"use strict";

const registerBuildingGadgetsRecipes = (event) => {

    event.remove({ mod: 'buildinggadgets2' })
    
	event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"buildinggadgets2:buildinggadgets2book"}'), [
		'minecraft:scaffolding',
		'#forge:books'
	]).id('buildinggadgets2:shapeless/guide_book')

	// Building Gadget
	event.recipes.gtceu.assembler('buildinggadgets2:/assembler/gadget_building')
		.itemInputs('1x gtceu:ev_emitter','2x gtceu:ev_fluid_regulator','6x #forge:plates/titanium', '2x gtceu:ev_robot_arm', '1x gtceu:computer_monitor_cover', '1x gtceu:lapotron_crystal', '1x ae2:formation_plane')
		.circuit(4)
		.itemOutputs('buildinggadgets2:gadget_building')
		.duration(160)
		.EUt(2000)
		.addMaterialInfo(true)

	// Exchanging Gadget
	event.recipes.gtceu.assembler('buildinggadgets2:/assembler/gadget_exchanging')
		.itemInputs('1x gtceu:ev_emitter','2x gtceu:ev_fluid_regulator','6x #forge:plates/titanium', '2x gtceu:ev_robot_arm', '1x gtceu:computer_monitor_cover', '1x gtceu:lapotron_crystal', '1x ae2:equal_distribution_card')
		.circuit(4)
		.itemOutputs('buildinggadgets2:gadget_exchanging')
		.duration(160)
		.EUt(2000)
		.addMaterialInfo(true)

	// Copy Paste Gadget
	event.recipes.gtceu.assembler('buildinggadgets2:/assembler/gadget_copy_paste')
		.itemInputs('1x gtceu:iv_emitter','2x gtceu:iv_fluid_regulator','6x #forge:plates/tungsten_steel', '2x gtceu:iv_robot_arm', '1x gtceu:computer_monitor_cover', '1x gtceu:lapotron_crystal', '1x ae2:spatial_storage_cell_2')
		.circuit(4)
		.itemOutputs('buildinggadgets2:gadget_copy_paste')
		.duration(160)
		.EUt(8100)
		.addMaterialInfo(true)

	// Dustruction Gadget
	event.recipes.gtceu.assembler('buildinggadgets2:/assembler/gadget_destruction')
		.itemInputs('1x gtceu:ev_sensor','2x gtceu:ev_fluid_regulator','6x #forge:plates/titanium', '2x gtceu:ev_robot_arm', '1x gtceu:computer_monitor_cover', '1x gtceu:energy_crystal', '1x ae2:annihilation_plane')
		.circuit(4)
		.itemOutputs('buildinggadgets2:gadget_destruction')
		.duration(160)
		.EUt(2000)
		.addMaterialInfo(true)

	// Cut Paste Gadget
	event.recipes.gtceu.assembler('buildinggadgets2:/assembler/gadget_cut_paste')
		.itemInputs('1x gtceu:iv_sensor','2x gtceu:iv_fluid_regulator','6x #forge:plates/tungsten_steel', '2x gtceu:iv_robot_arm', '1x gtceu:computer_monitor_cover', '1x gtceu:energy_crystal', '1x ae2:inverter_card')
		.circuit(4)
		.itemOutputs('buildinggadgets2:gadget_cut_paste')
		.duration(160)
		.EUt(8100)
		.addMaterialInfo(true)

	// Template Manager
	event.recipes.gtceu.assembler('buildinggadgets2:/assembler/template_manager')
		.itemInputs('1x gtceu:robust_machine_casing','2x gtceu:iv_electric_motor','8x #forge:plates/tungsten_steel', '1x #gtceu:circuits/iv', '1x gtceu:chemical_blue_dye', '1x gtceu:chemical_red_dye', '1x create:clipboard')
		.circuit(4)
		.itemOutputs('buildinggadgets2:template_manager ')
		.duration(160)
		.EUt(2000)
		.addMaterialInfo(true)
}
