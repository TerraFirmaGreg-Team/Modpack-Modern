"use strict";

function registerTFGClothRecipes(event) {

	//Cloth & String
	event.recipes.gtceu.wiremill('tfg:wiremill/phantom_thread')
		.itemInputs('1x minecraft:phantom_membrane')
		.itemOutputs('16x tfg:phantom_thread')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.wiremill('tfg:wiremill/polycaprolactam_string')
		.itemInputs(ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Polycaprolactam, 1))
		.itemOutputs('32x tfg:polycaprolactam_string')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('tfg:assembler/phantom_silk')
		.itemInputs('16x tfg:phantom_thread')
		.itemOutputs('1x tfg:phantom_silk')
		.duration(100)
		.circuit(3)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('tfg:assembler/polycaprolactam_fabric')
		.itemInputs('16x tfg:polycaprolactam_string')
		.itemOutputs('1x tfg:polycaprolactam_fabric')
		.duration(100)
		.circuit(3)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.chemical_bath('tfg:chemical_bath/bleaching/polycaprolactam_string')
		.itemInputs('tfg:polycaprolactam_string')
		.inputFluids(Fluid.of('gtceu:chlorine', 16))
		.itemOutputs('minecraft:string')
		.duration(80)
		.EUt(GTValues.VA[GTValues.ULV])
		.category(GTRecipeCategories.CHEM_DYES)

	event.recipes.tfc.loom(
		'1x tfg:phantom_silk',
		'16x tfg:phantom_thread',
		8,
		'tfg:block/phantom_silk_block'
	)

	event.recipes.tfc.loom(
		'1x tfg:polycaprolactam_fabric',
		'16x tfg:polycaprolactam_string',
		8,
		'tfg:block/polycaprolactam_fabric_block'
	)

	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless('16x tfg:phantom_thread', [
			'minecraft:phantom_membrane',
			'tfc:spindle'
		]).id('tfg:shapeless/phantom_thread'))

		// Wool Yarn
	event.recipes.gtceu.wiremill('tfg:tfc/wool_yarn')
		.itemInputs('tfc:wool')
		.itemOutputs('8x tfc:wool_yarn')
		.duration(100)
		.EUt(4)

	// Burlap Cloth
	event.recipes.gtceu.assembler('tfg:tfc/burlap_cloth')
		.itemInputs('12x tfc:jute_fiber')
		.circuit(0)
		.itemOutputs('tfc:burlap_cloth')
		.duration(100)
		.EUt(4)

	// Silk Cloth
	event.recipes.gtceu.assembler('tfg:tfc/silk_cloth')
		.itemInputs('24x minecraft:string')
		.circuit(0)
		.itemOutputs('tfc:silk_cloth')
		.duration(100)
		.EUt(4)

	// Wool Cloth
	event.recipes.gtceu.assembler('tfg:tfc/wool_cloth')
		.itemInputs('16x tfc:wool_yarn')
		.circuit(0)
		.itemOutputs('tfc:wool_cloth')
		.duration(100)
		.EUt(4)

	// Cloths to Wool
	event.recipes.gtceu.assembler('tfg:tfc/cloth_to_wool')
		.itemInputs('4x #tfc:sewing_light_cloth')
		.itemOutputs('8x minecraft:white_wool')
		.circuit(16)
		.duration(100)
		.EUt(4)

	// Wool Yarn
	event.recipes.gtceu.macerator('macerate_wool')
		.itemInputs('#minecraft:wool')
		.itemOutputs('tfc:wool_yarn')
		.chancedOutput('tfc:wool_yarn', 9000, 0)
		.chancedOutput('tfc:wool_yarn', 5000, 0)
		.chancedOutput('tfc:wool_yarn', 2000, 0)
		.duration(200)
		.EUt(2)

	// Jute Fiber
	generateMixerRecipe(event, 'tfc:jute', "#tfg:clean_water 200",
		'tfc:jute_fiber', null, [], 100, 4, 16, 'tfg:tfc/jute_fiber')

	//#region flax stuff

	event.shapeless('1x tfg:flax_bundle', ['9x tfg:flax_product'])
	event.recipes.gtceu.packer('tfg:packer/flax_bundle')
		.itemInputs('9x tfg:flax_product')
		.itemOutputs('tfg:flax_bundle')
		.duration('100')
		.EUt(GTValues.VA[GTValues.ULV])

	event.shapeless('1x tfg:bundled_scraped_flax', ['9x tfg:flax_waste'])
	event.recipes.gtceu.packer('tfg:packer/bundled_scraped_flax')
		.itemInputs('9x tfg:flax_waste')
		.itemOutputs('tfg:bundled_scraped_flax')
		.duration('100')
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.tfc.scraping(
		'tfg:flax_waste',
		'tfg:flax_product',
		'tfg:item/flax_waste',
		'tfg:item/flax_product',
		'2x tfg:flax_line'
	).id('tfg:scraping/flax_line')

	event.recipes.tfc.scraping(
		'tfg:bundled_scraped_flax',
		'tfg:flax_bundle',
		'tfg:item/bundled_scraped_flax',
		'tfg:item/flax_bundle',
		'18x tfg:flax_line'
	).id('tfg:scraping/flax_line_from_bundle')

	event.recipes.tfc.scraping(
		'tfc:groundcover/humus',
		'tfg:flax_waste',
		'tfc:item/groundcover/humus',
		'tfg:item/flax_waste',
		'tfg:flax_tow'
	).id('tfg:scraping/flax_tow')

	event.recipes.tfc.scraping(
		'9x tfc:groundcover/humus',
		'tfg:bundled_scraped_flax',
		'tfc:item/groundcover/humus',
		'tfg:item/bundled_scraped_flax',
		'9x tfg:flax_tow'
	).id('tfg:scraping/flax_tow_from_pile')

	event.recipes.gtceu.cutter('tfg:flax_line_in_cutter')
		.itemInputs('tfg:flax_product')
		.itemOutputs('2x tfg:flax_line', 'tfg:flax_waste')
		.duration(60)
		.EUt(2)

	event.recipes.gtceu.cutter('tfg:flax_line_from_bundle_in_cutter')
		.itemInputs('tfg:flax_bundle')
		.itemOutputs('18x tfg:flax_line', 'tfg:bundled_scraped_flax')
		.duration(540)
		.EUt(2)

	event.recipes.gtceu.cutter('tfg:flax_tow_in_cutter')
		.itemInputs('tfg:flax_waste')
		.itemOutputs('1x tfg:flax_tow', '1x tfc:groundcover/humus')
		.duration(60)
		.EUt(2)

	event.recipes.gtceu.cutter('tfg:flax_tow_from_bundle_in_cutter')
		.itemInputs('tfg:bundled_scraped_flax')
		.itemOutputs('9x tfg:flax_tow', '9x tfc:groundcover/humus')
		.duration(540)
		.EUt(2)

	event.recipes.gtceu.centrifuge('tfg:flax_product')
		.itemInputs('tfg:flax_product')
		.itemOutputs('2x tfg:flax_line', 'tfg:flax_tow', 'tfc:groundcover/humus')
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.centrifuge('tfg:flax_product_from_bundle')
		.itemInputs('tfg:flax_bundle')
		.itemOutputs('18x tfg:flax_line', '9x tfg:flax_tow', '9x tfc:groundcover/humus')
		.duration(1800)
		.EUt(GTValues.VA[GTValues.LV])

	event.custom({
		type: 'vintageimprovements:centrifugation',
		ingredients: [{ item: 'tfg:flax_product' }],
		results: [{ item: 'tfg:flax_line', count: 2 }, { item: 'tfg:flax_tow' }, { item: 'tfc:groundcover/humus' }],
		processingTime: 40 * 10 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
	}).id('tfg:vi_seperate_flax')

	event.custom({
		type: 'vintageimprovements:centrifugation',
		ingredients: [{ item: 'tfg:flax_bundle' }],
		results: [{ item: 'tfg:flax_line', count: 18 }, { item: 'tfg:flax_tow', count: 9 }, { item: 'tfc:groundcover/humus', count: 9 }],
		processingTime: 360 * 90 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
	}).id('tfg:vi_seperate_flax_from_bundle')

	// #endregion

	//#region flax line spinning
	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless('4x tfg:linen_thread', [
			'tfg:flax_line',
			'tfc:spindle'
		]).id('tfg:shapeless/linen_thread')
	)

	event.custom({
		type: 'vintageimprovements:coiling',
		ingredients: [{ item: 'tfg:flax_line' }],
		results: [{ item: 'tfg:linen_thread', count: 4 }],
		processingTime: 2 * 10 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
	}).id('tfg:vi_spin_flax_line')

	event.recipes.gtceu.wiremill('tfg:spin_flax_line')
		.itemInputs('tfg:flax_line')
		.itemOutputs('4x tfg:linen_thread')
		.duration(80)
		.EUt(GTValues.VA[GTValues.LV])
	//#endregion
	//#region flax looming
	event.recipes.tfc.loom(
		'1x tfg:linen_cloth',
		'16x tfg:linen_thread',
		8,
		'tfc:block/burlap'
	)

	event.recipes.tfc.loom(
		'1x tfc:burlap_cloth',
		'16x tfg:flax_tow',
		12,
		'tfc:block/burlap'
	)

	event.recipes.gtceu.assembler('tfg:assembler/linen_cloth')
		.itemInputs('16x tfg:linen_thread')
		.circuit(10)
		.itemOutputs('tfg:linen_cloth')
		.duration(100)
		.EUt(4)

	event.recipes.gtceu.assembler('tfg:assembler/flax_burlap')
		.itemInputs('16x tfg:flax_tow')
		.circuit(10)
		.itemOutputs('tfc:burlap_cloth')
		.duration(100)
		.EUt(4)
	//#endregion
}