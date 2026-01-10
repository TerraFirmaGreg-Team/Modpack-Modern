"use strict";

function registerTFGCompostRecipes(event) {
	//#region Fertiliser
	event.recipes.gtceu.mixer('tfg:fertilizer')
		.itemInputs(
			'#tfc:dirt',
			'2x #tfg:wood_dusts',
			'4x #forge:sand'
		)
		.circuit(1)
		.inputFluids("#tfg:clean_water 1000")
		.itemOutputs('4x gtceu:fertilizer')
		.duration(300)
		.EUt(30)

	event.recipes.gtceu.mixer('tfg:fertilizer_2')
		.itemInputs('tfc:compost')
		.inputFluids('#tfg:clean_water 1000')
		.itemOutputs('4x gtceu:fertilizer')
		.duration(300)
		.EUt(30)

	event.recipes.gtceu.centrifuge('tfg:gtceu/centrifuge/pure_fertilizers')
		.itemInputs('1x gtceu:fertilizer')
		.itemOutputs('1x tfc:pure_nitrogen', '1x tfc:pure_potassium', '1x tfc:pure_phosphorus')
		.duration(340)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.mixer('tfg:tfc/mixer/fertilizer')
		.itemInputs('1x tfc:pure_nitrogen', '1x tfc:pure_potassium', '1x tfc:pure_phosphorus', ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.Clay, 1))
		.itemOutputs('1x gtceu:fertilizer')
		.duration(160)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.gas_pressurizer('tfg:pure_nitrogen')
		.itemInputs('#forge:wax')
		.inputFluids(Fluid.of('gtceu:nitrogen', 1000))
		.itemOutputs('16x tfc:pure_nitrogen')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
	//#endregion

	// Humus and compost
	event.recipes.gtceu.extractor('tfg:humus_from_leaves')
		.itemInputs('#minecraft:leaves')
		.itemOutputs('tfc:groundcover/humus')
		.duration(600)
		.EUt(2)

	event.recipes.gtceu.extractor('tfg:humus_from_fallen_leaves')
		.itemInputs('#tfc:fallen_leaves')
		.itemOutputs('tfc:groundcover/humus')
		.duration(600)
		.EUt(2)

	event.recipes.gtceu.fermenter('tfg:fertilizer_to_compost')
		.itemInputs('4x gtceu:fertilizer')
		.itemOutputs('tfc:compost')
		.duration(1200)
		.EUt(2)

	const BROWNS = [ '16x #tfc:compost_browns_low', '8x #tfc:compost_browns', '4x #tfc:compost_browns_high' ];
	const GREENS = [ '16x #tfc:compost_greens_low', '8x #tfc:compost_greens', '4x #tfc:compost_greens_high' ];

	let i = 0;
	BROWNS.forEach(brown => {
		GREENS.forEach(green => {
			event.recipes.gtceu.mixer(`tfg:compost_${i++}`)
				.itemInputs(brown, green)
				.itemOutputs('tfc:compost')
				.duration(1200)
				.EUt(2)
		})
	})

	//Greens
	// Lows via crafting with mortar
	event.shaped(Item.of('tfg:universal_compost_greens', 1), [
		'AB'
	], {
		A: '#tfc:compost_greens_low',
		B: '#forge:tools/mortars'
	}).id('tfg:shaped/universal_compost_greens_from_low')

	// Mediums via crafting with mortar
	event.shaped(Item.of('tfg:universal_compost_greens', 2), [
		'AB'
	], {
		A: '#tfc:compost_greens',
		B: '#forge:tools/mortars'
	}).id('tfg:shaped/universal_compost_greens_from_medium')

	// Highs via crafting with mortar
	event.shaped(Item.of('tfg:universal_compost_greens', 4), [
		'AB'
	], {
		A: '#tfc:compost_greens_high',
		B: '#forge:tools/mortars'
	}).id('tfg:shaped/universal_compost_greens_from_high')

	// Filters
	const greens_low = Ingredient.of('#tfc:compost_greens_low')
	const browns_low = Ingredient.of('#tfc:compost_browns_low').itemIds
	const greens_medium = Ingredient.of('#tfc:compost_greens')
	const browns_medium = Ingredient.of('#tfc:compost_browns').itemIds
	const greens_high = Ingredient.of('#tfc:compost_greens_high')
	const browns_high = Ingredient.of('#tfc:compost_browns_high').itemIds

	let low_filtered = greens_low
	let medium_filtered = greens_medium
	let high_filtered = greens_high

	browns_low.forEach(item => {
		low_filtered = low_filtered.subtract(item)
		low_filtered = low_filtered.subtract('tfg:universal_compost_greens')
	})
	browns_medium.forEach(item => {
		medium_filtered = medium_filtered.subtract(item)
	})
	browns_high.forEach(item => {
		high_filtered = high_filtered.subtract(item)
	})

	// Lows via forge hammer
	event.recipes.gtceu.forge_hammer('tfg:universal_compost_greens_low')
		.itemInputs(low_filtered)
		.itemOutputs('tfg:universal_compost_greens')
		.duration(20)
		.EUt(8)

	// Mediums via forge hammer
	event.recipes.gtceu.forge_hammer('tfg:universal_compost_greens_medium')
		.itemInputs(medium_filtered)
		.itemOutputs(Item.of('tfg:universal_compost_greens', 2))
		.duration(20)
		.EUt(8)

	// Highs via forge hammer
	event.recipes.gtceu.forge_hammer('tfg:universal_compost_greens_high')
		.itemInputs(high_filtered)
		.itemOutputs(Item.of('tfg:universal_compost_greens', 4))
		.duration(20)
		.EUt(8)

	//Browns
	// Lows via crafting with mortar
	event.shaped(Item.of('tfg:universal_compost_browns', 1), [
		'A',
		'B'
	], {
		A: '#tfc:compost_browns_low',
		B: '#forge:tools/mortars'
	}).id('tfg:shaped/universal_compost_browns_from_low')

	// Mediums via crafting with mortar
	event.shaped(Item.of('tfg:universal_compost_browns', 2), [
		'A',
		'B'
	], {
		A: '#tfc:compost_browns',
		B: '#forge:tools/mortars'
	}).id('tfg:shaped/universal_compost_browns_from_medium')

	// Highs via crafting with mortar
	event.shaped(Item.of('tfg:universal_compost_browns', 4), [
		'A',
		'B'
	], {
		A: '#tfc:compost_browns_high',
		B: '#forge:tools/mortars'
	}).id('tfg:shaped/universal_compost_browns_from_high')

	// Lows via forge hammer
	event.recipes.gtceu.forge_hammer('tfg:universal_compost_browns_low')
		.itemInputs('#tfc:compost_browns_low')
		.itemOutputs('tfg:universal_compost_browns')
		.duration(20)
		.EUt(8)

	// Mediums via forge hammer
	event.recipes.gtceu.forge_hammer('tfg:universal_compost_browns_medium')
		.itemInputs('#tfc:compost_browns')
		.itemOutputs(Item.of('tfg:universal_compost_browns', 2))
		.duration(20)
		.EUt(8)

	// Highs via forge hammer
	event.recipes.gtceu.forge_hammer('tfg:universal_compost_browns_high')
		.itemInputs('#tfc:compost_browns_high')
		.itemOutputs(Item.of('tfg:universal_compost_browns', 4))
		.duration(20)
		.EUt(8)
}