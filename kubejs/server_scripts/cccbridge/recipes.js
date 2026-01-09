// priority: 0
"use strict";

const registerCccBridgeRecipes = (event) => {
	
    event.remove({not: [
		{ id: 'cccbridge:to_target_block' }, 
		{ id: 'cccbridge:to_source_block' }
	], mod: 'cccbridge' });

    // Animatronic
	event.recipes.gtceu.assembler('cccbridge:assembler/animatronic_block')
		.itemInputs('1x gtceu:hv_machine_casing','2x gtceu:hv_robot_arm','2x vintageimprovements:redstone_module', '1x greate:stainless_steel_cogwheel', '1x gtceu:computer_monitor_cover')
		.circuit(4)
		.itemOutputs('cccbridge:animatronic_block')
		.duration(800)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true)

    // Scroller Pane
	event.recipes.gtceu.assembler('cccbridge:assembler/scroller_block')
		.itemInputs('1x computercraft:wired_modem', '1x greate:aluminium_cogwheel', '1x gtceu:computer_monitor_cover')
		.circuit(4)
		.itemOutputs('cccbridge:scroller_block')
		.duration(600)
		.EUt(GTValues.VA[GTValues.MV])
		.addMaterialInfo(true)

    // RedRouter Block
	event.recipes.gtceu.assembler('cccbridge:assembler/redrouter_block')
		.itemInputs('1x computercraft:wired_modem', '1x gtceu:mv_machine_casing', '1x gtceu:computer_monitor_cover','10x vintageimprovements:redstone_module', '8x #gtceu:transistors')
		.circuit(4)
		.itemOutputs('cccbridge:redrouter_block')
		.duration(800)
		.EUt(GTValues.VA[GTValues.MV])
		.addMaterialInfo(true)

    // Source Block
	event.recipes.gtceu.assembler('cccbridge:assembler/source_block')
		.itemInputs('1x computercraft:wired_modem', '1x gtceu:mv_machine_casing', '1x gtceu:computer_monitor_cover', ChemicalHelper.get(TagPrefix.plate, GTMaterials.Redstone, 8))
		.circuit(4)
		.itemOutputs('cccbridge:source_block')
		.duration(800)
		.EUt(GTValues.VA[GTValues.MV])
		.addMaterialInfo(true)
}