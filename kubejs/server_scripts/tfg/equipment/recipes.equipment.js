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
	
	// Electric flask
	event.recipes.vintageimprovements.curving('waterflasks:unfinished_red_steel_flask', '#forge:plates/red_steel')
		.head('gtceu:bottle_extruder_mold')
		.id(`tfg:vi/curving/unfinished_red_steel_flask`)

	event.recipes.gtceu.extruder(`tfg:unfinished_red_steel_flask`)
		.itemInputs('#forge:plates/red_steel')
		.notConsumable('gtceu:bottle_extruder_mold')
		.itemOutputs('waterflasks:unfinished_red_steel_flask')
		.duration(200)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.vintageimprovements.curving('waterflasks:unfinished_iron_flask', '#forge:plates/wrought_iron')
		.head('gtceu:bottle_extruder_mold')
		.id(`tfg:vi/curving/unfinished_iron_flask`)

	event.recipes.gtceu.extruder(`tfg:unfinished_iron_flask`)
		.itemInputs('#forge:plates/wrought_iron')
		.notConsumable('gtceu:bottle_extruder_mold')
		.itemOutputs('waterflasks:unfinished_iron_flask')
		.duration(200)
		.EUt(GTValues.VHA[GTValues.LV])

	event.custom({
		type: 'gtceu:crafting_shaped_energy_transfer',
		pattern: [
			'PBP',
			'HFH',
			'PCP'
		],
		key: {
			B: { item: 'gtceu:lv_sodium_battery'},
			F: { item: 'waterflasks:unfinished_red_steel_flask'},
			C: { tag: 'gtceu:circuits/lv'},
			P: [{ item: 'tfg:bakelite_plate' }, { item: 'gtceu:polyethylene_plate' }],
			H: [{ item: 'tfg:phantom_silk' }, { item: 'tfg:polycaprolactam_fabric' }]
		},
		chargeIngredient: { item: 'gtceu:lv_sodium_battery' },
		overrideCharge: true,
		transferMaxCharge: true,
		result: { item: 'tfg:electric_flask' }
	}).id('tfg:crafting/electric_flask_sodium')

	event.custom({
		type: 'gtceu:crafting_shaped_energy_transfer',
		pattern: [
			'PBP',
			'HFH',
			'PCP'
		],
		key: {
			B: { item: 'gtceu:lv_cadmium_battery'},
			F: { item: 'waterflasks:unfinished_red_steel_flask'},
			C: { tag: 'gtceu:circuits/lv'},
			P: [{ item: 'tfg:bakelite_plate' }, { item: 'gtceu:polyethylene_plate' }],
			H: [{ item: 'tfg:phantom_silk' }, { item: 'tfg:polycaprolactam_fabric' }]
		},
		chargeIngredient: { item: 'gtceu:lv_cadmium_battery' },
		overrideCharge: true,
		transferMaxCharge: true,
		result: { item: 'tfg:electric_flask' }
	}).id('tfg:crafting/electric_flask_cadmium')

	event.custom({
		type: 'gtceu:crafting_shaped_energy_transfer',
		pattern: [
			'PBP',
			'HFH',
			'PCP'
		],
		key: {
			B: { item: 'gtceu:lv_lithium_battery'},
			F: { item: 'waterflasks:unfinished_red_steel_flask'},
			C: { tag: 'gtceu:circuits/lv'},
			P: [{ item: 'tfg:bakelite_plate' }, { item: 'gtceu:polyethylene_plate' }],
			H: [{ item: 'tfg:phantom_silk' }, { item: 'tfg:polycaprolactam_fabric' }]
		},
		chargeIngredient: { item: 'gtceu:lv_lithium_battery' },
		overrideCharge: true,
		transferMaxCharge: true,
		result: { item: 'tfg:electric_flask' }
	}).id('tfg:crafting/electric_flask_lithium')
}