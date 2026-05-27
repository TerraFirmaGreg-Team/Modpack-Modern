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

	const TREATED_WOOD_ITEMS = [
		{ output: 'treated_wood_plate', input: '#tfc:lumber', multiplier: 1 },
		{ output: 'treated_wood_dust', input: 'tfg:wood_dusts', multiplier: 1 },
		{ output: 'treated_wood_rod', input: '#forge:rods/wooden', multiplier: 2 },
		{ output: 'long_treated_wood_rod', input: '#forge:rods/long/wood', multiplier: 4 },
		{ output: 'treated_wood_planks', input: '#minecraft:planks', multiplier: 4 },
		{ output: 'treated_wood_slab', input: '#minecraft:wooden_slabs', multiplier: 2 },
		{ output: 'treated_wood_fence', input: '#forge:fences/wooden', multiplier: 2.25 },
		{ output: 'treated_wood_pressure_plate', input: '#minecraft:wooden_pressure_plates', multiplier: 4 },
		{ output: 'treated_wood_trapdoor', input: '#minecraft:wooden_trapdoors', multiplier: 2 },
		{ output: 'treated_wood_stairs', input: '#minecraft:wooden_stairs', multiplier: 3 },
		{ output: 'treated_wood_fence_gate', input: '#forge:fence_gates/wooden', multiplier: 6 },
		{ output: 'treated_wood_door', input: '#minecraft:wooden_doors', multiplier: 3 },
	]

	TREATED_WOOD_ITEMS.forEach(item => {
		event.recipes.tfc.barrel_sealed(1000 * item.multiplier)
			.outputItem(`gtceu:${item.output}`)
			.inputs(`${item.input}`, TFC.fluidStackIngredient('#forge:creosote', 25 * item.multiplier))
			.id(`tfg:barrel/${item.output}`)
	})

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

	event.recipes.gtceu.assembler("tfg:small_wood_gear")
		.itemInputs('4x #tfc:lumber')
		.inputFluids(Fluid.of('gtceu:glue', 50))
		.itemOutputs('gtceu:small_wood_gear')
		.duration(20)
		.circuit(6)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.assembler("tfg:wood_gear")
		.itemInputs('4x #minecraft:planks')
		.inputFluids(Fluid.of('gtceu:glue', 50))
		.itemOutputs('gtceu:wood_gear')
		.duration(20)
		.circuit(6)
		.EUt(GTValues.VA[GTValues.LV])
}