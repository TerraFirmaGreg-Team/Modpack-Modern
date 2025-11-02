// priority: 0
"use strict";

const registerMoreRedRecipes = (event) => {

	// Удаление ненужных крафтов
	event.remove({
		not: [
			{ id: 'morered:white_network_cable' },
			{ id: 'morered:orange_network_cable' },
			{ id: 'morered:magenta_network_cable' },
			{ id: 'morered:light_blue_network_cable' },
			{ id: 'morered:yellow_network_cable' },
			{ id: 'morered:lime_network_cable' },
			{ id: 'morered:pink_network_cable' },
			{ id: 'morered:gray_network_cable' },
			{ id: 'morered:light_gray_network_cable' },
			{ id: 'morered:cyan_network_cable' },
			{ id: 'morered:purple_network_cable' },
			{ id: 'morered:blue_network_cable' },
			{ id: 'morered:brown_network_cable' },
			{ id: 'morered:green_network_cable' },
			{ id: 'morered:red_network_cable' },
			{ id: 'morered:black_network_cable' },
			{ id: 'morered:bundled_network_cable' },
		], mod: 'morered'
	})


	// Latch
	event.recipes.gtceu.assembler('tfg/morered/latch')
		.itemInputs('4x gtceu:stone_plate', '2x minecraft:redstone_torch', '2x minecraft:redstone')
		.circuit(0)
		.itemOutputs('morered:latch')
		.duration(100)
		.EUt(16)
		.addMaterialInfo(true)

	// Pulse Gate
	event.recipes.gtceu.assembler('tfg/morered/pulse_gate')
		.itemInputs('3x gtceu:stone_plate', '2x minecraft:redstone', 'gtceu:wrought_iron_plate')
		.circuit(1)
		.itemOutputs('morered:pulse_gate')
		.duration(100)
		.EUt(16)
		.addMaterialInfo(true)

	// Red Wire Post
	event.recipes.gtceu.shaped('2x morered:redwire_post', ['A', 'B'], {
		A: '#forge:rods/wrought_iron',
		B: '#forge:fine_wires/red_alloy'
	}).addMaterialInfo().id('tfg:crafting/red_wire_post')

	// Red Wire Post Plate
	event.recipes.gtceu.assembler('tfg/morered/red_wire_post_plate')
		.itemInputs('3x gtceu:stone_plate', '2x minecraft:redstone', 'morered:redwire_post')
		.circuit(2)
		.itemOutputs('morered:redwire_post_plate')
		.duration(100)
		.EUt(16)
		.addMaterialInfo(true)

	// Red Wire Post Relay Plate
	event.recipes.gtceu.assembler('tfg/morered/red_wire_post_relay_plate')
		.itemInputs('3x gtceu:stone_plate', '4x minecraft:redstone', 'morered:redwire_post')
		.circuit(4)
		.itemOutputs('morered:redwire_post_relay_plate')
		.duration(100)
		.EUt(16)
		.addMaterialInfo(true)

	// Red Wire Post Relay Plate
	event.recipes.gtceu.assembler('tfg/morered/hexidecrubrometer')
		.itemInputs('8x gtceu:stone_plate', '9x minecraft:redstone', '4x minecraft:quartz')
		.circuit(5)
		.itemOutputs('morered:hexidecrubrometer')
		.duration(100)
		.EUt(16)
		.addMaterialInfo(true)

	// Bundled Cable Post
	event.shapeless('2x morered:bundled_cable_post', [
		'#forge:plates/wrought_iron',
		'morered:bundled_network_cable'
	]).id('tfg:crafting/bundled_cable_post')

	// Bundled Cable Post Plate
	event.recipes.gtceu.assembler('tfg/morered/bundled_cable_post_plate')
		.itemInputs('morered:bundled_cable_post', '3x morered:bundled_network_cable', '#forge:plates/wrought_iron')
		.circuit(6)
		.itemOutputs('morered:bundled_cable_relay_plate')
		.duration(100)
		.EUt(16)
		.addMaterialInfo(true)

	// Red Allot Wire
	event.shapeless('12x morered:red_alloy_wire', [
		'#forge:fine_wires/red_alloy',
		'#forge:fine_wires/red_alloy',
		'#forge:fine_wires/red_alloy'
	]).id('tfg:crafting/red_alloy_wire')

	// Red Wire Spool
	event.shaped('morered:redwire_spool', [
		'ABC',
		'BAB',
		'CBA'
	], {
		A: 'morered:red_alloy_wire',
		B: '#forge:plates/wrought_iron',
		C: '#tfc:can_be_lit_on_torch'
	}).id('tfg:crafting/redwire_spool')

	// Bundled Cable Spool
	event.shaped('morered:bundled_cable_spool', [
		'ABC',
		'BAB',
		'CBA'
	], {
		A: 'morered:bundled_network_cable',
		B: '#forge:plates/wrought_iron',
		C: '#tfc:can_be_lit_on_torch'
	}).id('tfg:crafting/bundled_cable_spool')

	// Diode
	event.recipes.gtceu.assembler('tfg/morered/diode')
		.itemInputs('3x gtceu:stone_plate', '3x minecraft:redstone_torch', '4x minecraft:redstone')
		.circuit(7)
		.itemOutputs('morered:diode')
		.duration(100)
		.EUt(16)

	// Not Gate
	event.recipes.gtceu.assembler('tfg/morered/not_gate')
		.itemInputs('3x gtceu:stone_plate', '3x minecraft:redstone_torch', '4x minecraft:redstone')
		.circuit(8)
		.itemOutputs('morered:not_gate')
		.duration(100)
		.EUt(16)

	// Nor Gate
	event.recipes.gtceu.assembler('tfg/morered/nor_gate')
		.itemInputs('3x gtceu:stone_plate', '3x minecraft:redstone_torch', '4x minecraft:redstone')
		.circuit(9)
		.itemOutputs('morered:nor_gate')
		.duration(100)
		.EUt(16)

	// Nand Gate
	event.recipes.gtceu.assembler('tfg/morered/nand_gate')
		.itemInputs('3x gtceu:stone_plate', '3x minecraft:redstone_torch', '4x minecraft:redstone')
		.circuit(10)
		.itemOutputs('morered:nand_gate')
		.duration(100)
		.EUt(16)

	// Or Gate
	event.recipes.gtceu.assembler('tfg/morered/or_gate')
		.itemInputs('3x gtceu:stone_plate', '3x minecraft:redstone_torch', '4x minecraft:redstone')
		.circuit(11)
		.itemOutputs('morered:or_gate')
		.duration(100)
		.EUt(16)

	// And Gate
	event.recipes.gtceu.assembler('tfg/morered/and_gate')
		.itemInputs('3x gtceu:stone_plate', '3x minecraft:redstone_torch', '4x minecraft:redstone')
		.circuit(12)
		.itemOutputs('morered:and_gate')
		.duration(100)
		.EUt(16)

	// XOR Gate
	event.recipes.gtceu.assembler('tfg/morered/xor_gate')
		.itemInputs('3x gtceu:stone_plate', '3x minecraft:redstone_torch', '4x minecraft:redstone')
		.circuit(13)
		.itemOutputs('morered:xor_gate')
		.duration(100)
		.EUt(16)

	// XNOR Gate
	event.recipes.gtceu.assembler('tfg/morered/xnor_gate')
		.itemInputs('3x gtceu:stone_plate', '3x minecraft:redstone_torch', '4x minecraft:redstone')
		.circuit(14)
		.itemOutputs('morered:xnor_gate')
		.duration(100)
		.EUt(16)

	// Multiplexer
	event.recipes.gtceu.assembler('tfg/morered/multiplexer')
		.itemInputs('3x gtceu:stone_plate', '3x minecraft:redstone_torch', '4x minecraft:redstone')
		.circuit(15)
		.itemOutputs('morered:multiplexer')
		.duration(100)
		.EUt(16)

	// And 2 Gate
	event.recipes.gtceu.assembler('tfg/morered/and_2_gate')
		.itemInputs('3x gtceu:stone_plate', '3x minecraft:redstone_torch', '4x minecraft:redstone')
		.circuit(16)
		.itemOutputs('morered:and_2_gate')
		.duration(100)
		.EUt(16)

	// Nand 2 Gate
	event.recipes.gtceu.assembler('tfg/morered/nand_2_gate')
		.itemInputs('3x gtceu:stone_plate', '3x minecraft:redstone_torch', '4x minecraft:redstone')
		.circuit(17)
		.itemOutputs('morered:nand_2_gate')
		.duration(100)
		.EUt(16)

	// Bitwise Diode
	event.recipes.gtceu.assembler('tfg/morered/bitwise_diode')
		.itemInputs('2x gtceu:stone_plate', 'minecraft:redstone', '3x minecraft:quartz')
		.circuit(0)
		.itemOutputs('morered:bitwise_diode')
		.duration(100)
		.EUt(16)

	// Bitwise Not Gate
	event.recipes.gtceu.assembler('tfg/morered/bitwise_not_gate')
		.itemInputs('2x gtceu:stone_plate', 'minecraft:redstone', '3x minecraft:quartz')
		.circuit(1)
		.itemOutputs('morered:bitwise_not_gate')
		.duration(100)
		.EUt(16)

	// Bitwise Or Gate
	event.recipes.gtceu.assembler('tfg/morered/bitwise_or_gate')
		.itemInputs('2x gtceu:stone_plate', 'minecraft:redstone', '3x minecraft:quartz')
		.circuit(2)
		.itemOutputs('morered:bitwise_or_gate')
		.duration(100)
		.EUt(16)

	// Bitwise And Gate
	event.recipes.gtceu.assembler('tfg/morered/bitwise_and_gate')
		.itemInputs('2x gtceu:stone_plate', 'minecraft:redstone', '3x minecraft:quartz')
		.circuit(3)
		.itemOutputs('morered:bitwise_and_gate')
		.duration(100)
		.EUt(16)

	// Bitwise Xor Gate
	event.recipes.gtceu.assembler('tfg/morered/bitwise_xor_gate')
		.itemInputs('2x gtceu:stone_plate', 'minecraft:redstone', '3x minecraft:quartz')
		.circuit(4)
		.itemOutputs('morered:bitwise_xor_gate')
		.duration(100)
		.EUt(16)

	// Bitwise XNOR Gate
	event.recipes.gtceu.assembler('tfg/morered/bitwise_xnor_gate')
		.itemInputs('2x gtceu:stone_plate', 'minecraft:redstone', '3x minecraft:quartz')
		.circuit(5)
		.itemOutputs('morered:bitwise_xnor_gate')
		.duration(100)
		.EUt(16)

	//#region Выход: Крашеные провода

	event.recipes.gtceu.chemical_bath(`tfg:morered/wire_decolor`)
		.itemInputs('#morered:colored_network_cables')
		.inputFluids(Fluid.of(`gtceu:chlorine`, 72))
		.itemOutputs('morered:red_alloy_wire')
		.duration(300)
		.EUt(4)
		.category(GTRecipeCategories.CHEM_DYES)

	global.MINECRAFT_DYE_NAMES.forEach(dye => {

		event.recipes.gtceu.chemical_bath(`tfg:morered/${dye}_wire`)
			.itemInputs('morered:red_alloy_wire')
			.inputFluids(Fluid.of(`tfc:${dye}_dye`, 72))
			.itemOutputs(`morered:${dye}_network_cable`)
			.duration(300)
			.EUt(4)
			.category(GTRecipeCategories.CHEM_DYES)

	})

	//#endregion
}