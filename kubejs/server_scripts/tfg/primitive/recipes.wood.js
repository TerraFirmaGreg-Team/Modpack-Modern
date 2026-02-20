"use strict";

function registerTFGWoodRecipes(event) {
	
	event.replaceInput({ output: '#tfc:sewing_tables'}, '#forge:shears', '#forge:tools/knives')
	event.replaceInput({ id: 'gtceu:shaped/powderbarrel' }, 'gtceu:wood_plate', '#tfc:lumber')

	// Wood ash
	event.smelting('4x tfc:powder/wood_ash', '1x #minecraft:logs_that_burn').id('tfg:wood_ash')

	event.recipes.gtceu.chemical_reactor('tfg:wood_ash_to_wood_gas_air')
		.itemInputs('8x tfc:powder/wood_ash')
		.inputFluids(Fluid.of('gtceu:air', 100))
		.outputFluids('gtceu:wood_gas 100')
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.greate.splashing(
		[Item.of('tfc:powder/wood_ash').withChance(0.25), Item.of('minecraft:stick').withChance(0.25)],
		['tfc:torch', Fluid.of('minecraft:water', 100)]
	)
	.recipeTier(0)
	.id('tfg:splashing/wash_torch')

	// Just a dummy recipe to tell people they can get wood ash by throwing torches in water via TFC
	event.custom({
		type: "ae2:transform",
		circumstance: {
			type: "fluid",
			tag: "tfc:water"
		},
		ingredients: [{ item: 'tfc:torch' }],
		result: { item: 'tfc:powder/wood_ash' }
	}).id(`tfg:ae_transform/torch_to_wood_ash`)

	event.replaceInput({ id: 'tfc:crafting/vanilla/armor_stand' }, '#minecraft:planks', '#tfc:lumber')
	event.remove({ id: 'tfc:crafting/vanilla/armor_stand_bulk' })

	// Treated Wood
	event.remove({ id: 'gtceu:shaped/treated_wood_planks' })

	event.recipes.tfc.barrel_sealed(4000)
		.outputItem('gtceu:treated_wood_planks')
		.inputs('#minecraft:planks', TFC.fluidStackIngredient('#forge:creosote', 100))
		.id('tfg:barrel/treated_wood_planks')

	event.recipes.tfc.barrel_sealed(2000)
		.outputItem('gtceu:treated_wood_dust')
		.inputs('#tfg:wood_dusts', TFC.fluidStackIngredient('#forge:creosote', 50))
		.id('tfg:barrel/treated_wood_dust')

	// Empty Wooden Form
	event.shaped('gtceu:empty_wooden_form', [
		' AA',
		'BAA'
	], {
		A: '#minecraft:planks',
		B: '#forge:tools/saws'
	}).id('gtceu:shaped/plank_to_wooden_shape')

	// Wood gears
	event.shaped('gtceu:small_wood_gear', [
		'AB ',
		'BCB',
		' B '
	], {
		A: '#forge:tools/saws',
		B: '#tfc:lumber',
		C: 'tfc:glue'
	}).id('gtceu:shaped/small_gear_wood')

	event.shaped('gtceu:wood_gear', [
		'AB ',
		'BCB',
		' B '
	], {
		A: '#forge:tools/saws',
		B: '#minecraft:planks',
		C: 'tfc:glue'
	}).id('gtceu:shaped/gear_wood')
}