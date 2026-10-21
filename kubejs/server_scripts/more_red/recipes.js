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

	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless('gtceu:stone_plate', [ '#tfg:rock_slabs', '#tfc:chisels' ])
			.id('tfg:shapeless/stone_plate'))


	// Red Wire Post
	event.shaped('2x morered:redwire_post', ['A', 'B'], {
		A: '#forge:rods/wrought_iron',
		B: '#forge:fine_wires/red_alloy'
	}).id('tfg:crafting/red_wire_post')

	// Red Wire Post Plate
	event.shaped('morered:redwire_post_plate', [
		' P ',
		'SSS'
	], {
		S: 'gtceu:stone_plate',
		P: 'morered:redwire_post'
	}).id('tfg:shaped/morered/redwire_post_plate')

	// Red Wire Post Relay Plate
	event.shaped('morered:redwire_post_relay_plate', [
		'RPR',
		'SSS'
	], {
		S: 'gtceu:stone_plate',
		P: 'morered:redwire_post',
		R: 'minecraft:redstone'
	}).id('tfg:shaped/morered/redwire_post_relay_plate')

	// Red Wire Post Relay Plate
	event.shaped('morered:hexidecrubrometer', [
		'SQS',
		'QRQ',
		'SQS'
	], {
		S: 'gtceu:stone_plate',
		Q: '#tfg:quartz_gems',
		R: 'minecraft:redstone'
	}).id('tfg:shaped/morered/hexidecrubrometer')

	// Bundled Cable Post
	event.shapeless('2x morered:bundled_cable_post', [
		'#forge:plates/wrought_iron',
		'morered:bundled_network_cable'
	]).id('tfg:crafting/bundled_cable_post')

	// Bundled Cable Post Plate
	event.shaped('morered:bundled_cable_relay_plate', [
		' P ',
		'SSS'
	], {
		S: 'gtceu:stone_plate',
		P: 'morered:bundled_cable_post'
	}).id('tfg:shaped/morered/bundled_cable_relay_plate')

	// Red Alloy Wire
	event.shapeless('12x morered:red_alloy_wire', [
		'#forge:fine_wires/red_alloy',
		'#forge:fine_wires/red_alloy',
		'#forge:fine_wires/red_alloy'
	]).id('tfg:crafting/red_alloy_wire')

	// Red Wire Spool
	event.shaped('morered:redwire_spool', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'morered:red_alloy_wire',
		B: '#forge:rods/wrought_iron'
	}).id('tfg:crafting/redwire_spool')

	// Bundled Cable Spool
	event.shaped('morered:bundled_cable_spool', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'morered:bundled_network_cable',
		B: '#forge:rods/wrought_iron'
	}).id('tfg:crafting/bundled_cable_spool')

	// Devices
	const redstoneDevices = Ingredient.of('#morered:redstone_devices').itemIds.toArray().map(String);
	redstoneDevices.forEach(item => {
		if (item !== 'minecraft:comparator') {
			event.stonecutting(item, 'minecraft:comparator')
				.id(`tfg:stonecutter/${global.linuxUnfucker(item)}_from_comparator`)
		}

		event.stonecutting(item, Ingredient.of('#morered:redstone_devices').subtract('minecraft:comparator').subtract(item))
			.id(`tfg:stonecutter/${global.linuxUnfucker(item)}_from_other`)
	})

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
