"use strict";

function registerTFGEquipmentRecipes(event) {
	// #region Primitive protection

	event.recipes.tfc.barrel_sealed(2000)
		.outputItem('tfg:prepared_leather_gloves')
		.inputs('tfchotornot:mittens', Fluid.of('tfc:vinegar', 1000))
		.id('tfg:sealed_barrel/prepared_leather_gloves')

	event.recipes.firmalife.vat()
		.outputItem('tfg:latex_soaked_gloves')
		.inputs('tfg:prepared_leather_gloves', Fluid.of('tfg:vulcanized_latex', 1000))
		.length(300)
		.temperature(200)
		.id('tfg:vat/latex_soaked_gloves')

	event.recipes.firmalife.oven('tfg:latex_soaked_gloves', 120, 1200, 'gtceu:rubber_gloves')
		.id('tfg:oven/rubber_gloves')

	event.remove({ id: 'gtceu:shaped/rubber_gloves' })

	event.recipes.gtceu.alloy_smelter('rubber_gloves_alloy_smelter')
		.itemInputs('2x #forge:plates/rubber')
		.notConsumable('create:brass_hand')
		.itemOutputs('gtceu:rubber_gloves')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])
		.category(GTRecipeCategories.INGOT_MOLDING)


	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('gtceu:face_mask', [
			'ACA',
			'ABA',
			' D '
		], {
			A: '#forge:string',
			B: '#forge:cloth',
			C: 'minecraft:paper',
			D: '#tfc:sewing_needles'
		})
	).id('gtceu:shaped/face_mask')

	event.recipes.gtceu.assembler('assemble_face_mask')
		.itemInputs('4x #forge:string', '#forge:cloth', 'minecraft:paper')
		.itemOutputs('gtceu:face_mask')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])
		.circuit(7)

	// #endregion

	event.shaped("tfg:snowshoes", [
		"RSR",
		"WSW",
		"LSL"
	], {
		S: "#forge:string",
		R: "#forge:rods",
		W: "#forge:rods/long",
		L: ['#tfg:rubber_foils', 'sns:leather_strip'],
	}).id('tfg:shaped/snowshoes');

	event.shaped("tfg:flippers", [
		"L L", 
		"LKL", 
		"B B"
	], {
		K: "#forge:tools/knives",
		L: "#tfg:rubber_plates",
		B: "#tfg:rubber_foils"
	}).id('tfg:shaped/flippers_rubber');

	event.shaped("tfg:flippers", [
		" K ", 
		"BHB"
	], {
		K: "#forge:tools/knives",
		H: "firmaciv:large_waterproof_hide",
		B: "sns:leather_strip"
	}).id('tfg:shaped/flippers_leather');

	event.shaped('tfg:snorkel', [
		'BC ',
		'BLE',
		'LGL'
	], {
		B: ['#forge:tiny_fluid_pipes', 'minecraft:bamboo'],
		L: ['#tfg:rubber_foils', 'sns:leather_strip'],
		E: '#forge:tools/hammers',
		G: "#forge:glass_panes",
		C: '#tfg:water_breathing_ingredients'
	}).id('tfg:shaped/snorkel')
}