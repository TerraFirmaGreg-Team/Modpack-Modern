// priority: 0
"use strict";

const registerAdvancedPeripheralsRecipes = (event) => {

    event.remove({ mod: 'advancedperipherals' });

	//Chat Box
	event.recipes.gtceu.assembler('advancedperipherals:assembler/chat_box')
		.itemInputs('1x computercraft:wired_modem', '1x gtceu:mv_machine_casing', '1x computercraft:monitor_normal', '2x gtceu:mv_sensor', '2x gtceu:mv_emitter', '1x #gtceu:circuits/hv')
		.circuit(4)
		.itemOutputs('advancedperipherals:chat_box')
		.duration(1200)
		.EUt(GTValues.VA[GTValues.MV])
		.addMaterialInfo(true)

	//Player Detector
	event.recipes.gtceu.assembler('advancedperipherals:assembler/player_detector')
		.itemInputs('1x computercraft:wired_modem', '1x gtceu:hv_machine_casing', '2x gtceu:hv_field_generator', '4x gtceu:hv_robot_arm', '6x gtceu:soc', Item.of('gtceu:face_mask', '{Damage:0}'))
		.circuit(4)
		.itemOutputs('advancedperipherals:player_detector')
		.duration(1200)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true)

	//ME Bridge
	event.recipes.gtceu.assembler('advancedperipherals:assembler/me_bridge')
		.itemInputs('1x computercraft:wired_modem', '1x gtceu:hv_machine_casing', '2x ae2:interface', '15x ae2:fluix_smart_cable', '4x ae2:engineering_processor', '1x #gtceu:circuits/ev')
		.circuit(4)
		.itemOutputs('advancedperipherals:me_bridge')
		.duration(1200)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true)

	//Environment Detector
	event.recipes.gtceu.assembler('advancedperipherals:assembler/environment_detector')
		.itemInputs('1x computercraft:wired_modem', '1x gtceu:hv_machine_casing', '2x gtceu:hv_sensor', '2x gtceu:hv_emitter', '1x #gtceu:circuits/ev')
		.inputFluids(Fluid.of('gtceu:biomass', 2000))
		.circuit(4)
		.itemOutputs('advancedperipherals:environment_detector')
		.duration(1200)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true)

	//Inventory Manager
	event.recipes.gtceu.assembler('advancedperipherals:assembler/inventory_manager')
		.itemInputs('1x computercraft:wired_modem', '1x gtceu:hv_machine_casing', '2x #gtceu:circuits/ev', '2x gtceu:hv_sensor', '2x ae2:export_bus', '1x ae2:equal_distribution_card')
		.circuit(4)
		.itemOutputs('advancedperipherals:inventory_manager')
		.duration(1200)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true)

	//Block Reader
	event.recipes.gtceu.assembler('advancedperipherals:assembler/block_reader')
		.itemInputs('1x computercraft:wired_modem', '1x gtceu:mv_machine_casing', '1x gtceu:lv_scanner', '1x gtceu:mv_sensor', '1x gtceu:mv_emitter', '1x #forge:lenses/amethyst')
		.circuit(4)
		.itemOutputs('advancedperipherals:block_reader')
		.duration(1200)
		.EUt(GTValues.VA[GTValues.MV])
		.addMaterialInfo(true)

	//Geo Scanner
	event.recipes.gtceu.assembler('advancedperipherals:assembler/geo_scanner')
		.itemInputs('1x computercraft:wired_modem', '1x gtceu:hv_machine_casing', '1x gtceu:prospector.hv', '2x gtceu:hv_sensor', '1x #forge:propick_heads/red_steel', '1x #gtceu:circuits/ev')
		.circuit(4)
		.itemOutputs('advancedperipherals:geo_scanner')
		.duration(1200)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true)

	//NBT Storage
	event.recipes.gtceu.assembler('advancedperipherals:assembler/nbt_storage')
		.itemInputs('1x computercraft:wired_modem', '1x gtceu:hv_machine_casing', '1x computercraft:disk_drive', '1x gtceu:item_smart_filter', '16x gtceu:ram_chip', '1x #gtceu:circuits/ev')
		.circuit(4)
		.itemOutputs('advancedperipherals:nbt_storage')
		.duration(1200)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true)

	//End Automata Core
	event.recipes.gtceu.assembler('advancedperipherals:assembler/end_automata_core')
		.itemInputs('1x computercraft:wired_modem', '1x #forge:lenses/nether_star', '4x gtceu:quantum_eye', ChemicalHelper.get(TagPrefix.gear, GTMaterials.HSSS, 4), '1x gtceu:luv_robot_arm')
		.circuit(4)
		.itemOutputs('advancedperipherals:end_automata_core')
		.duration(2400)
		.EUt(GTValues.VA[GTValues.LuV])

	//Husbandry Automata Core
	event.recipes.gtceu.assembler('advancedperipherals:assembler/husbandry_automata_core')
		.itemInputs('1x computercraft:wired_modem', '1x tfcgroomer:blue_steel_grooming_station', '1x tfcgroomer:red_steel_grooming_station', ChemicalHelper.get(TagPrefix.gear, GTMaterials.StainlessSteel, 4), '1x gtceu:hv_robot_arm')
		.circuit(4)
		.itemOutputs('advancedperipherals:husbandry_automata_core')
		.duration(2400)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true)

	//Weak Automata Core
	event.recipes.gtceu.assembler('advancedperipherals:assembler/weak_automata_core')
		.itemInputs('1x computercraft:wired_modem', '64x gtceu:cpu_chip', '4x gtceu:hv_conveyor_module', ChemicalHelper.get(TagPrefix.gear, GTMaterials.StainlessSteel, 4), '1x gtceu:hv_robot_arm')
		.circuit(4)
		.itemOutputs('advancedperipherals:weak_automata_core')
		.duration(2400)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true)

	//Overpowered Husbandry Automata Core
	event.recipes.gtceu.assembler('advancedperipherals:assembler/overpowered_husbandry_automata_core')
		.itemInputs('advancedperipherals:husbandry_automata_core', ChemicalHelper.get(TagPrefix.gear, GTMaterials.HSSS, 4), '6x #gtceu:circuits/iv')
		.circuit(4)
		.itemOutputs('advancedperipherals:overpowered_husbandry_automata_core')
		.duration(2400)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true)

	//Overpowered Weak Automata Core
	event.recipes.gtceu.assembler('advancedperipherals:assembler/overpowered_weak_automata_core')
		.itemInputs('advancedperipherals:weak_automata_core', ChemicalHelper.get(TagPrefix.gear, GTMaterials.HSSS, 4), '6x #gtceu:circuits/iv')
		.circuit(4)
		.itemOutputs('advancedperipherals:overpowered_weak_automata_core')
		.duration(2400)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true)

	//Memory Card
	event.recipes.gtceu.shaped('advancedperipherals:memory_card', [
		'A',
		'B',
		'C'
	], {
		A: ChemicalHelper.get(TagPrefix.plate, GTMaterials.Polyethylene, 1),
		B: 'computercraft:disk',
		C: ChemicalHelper.get(TagPrefix.plateDouble, GTMaterials.Gold, 1)
	}).addMaterialInfo().id('advancedperipherals:shaped/memory_card')
}