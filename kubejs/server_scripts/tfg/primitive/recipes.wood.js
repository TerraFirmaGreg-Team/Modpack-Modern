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

	event.recipes.create.splashing([Item.of('tfc:powder/wood_ash').withChance(0.25), Item.of('minecraft:stick').withChance(0.25)], 'tfc:torch')
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

	// Ladder
	event.shaped('8x minecraft:ladder', [
		'A A',
		'AAA',
		'A A'
	], {
		A: '#forge:rods/wooden'
	}).id('gtceu:shaped/ladder')

	event.shaped('8x minecraft:ladder', [
		'A A',
		'AAA',
		'A A'
	], {
		A: '#tfc:lumber'
	}).id('tfc:crafting/vanilla/ladder')

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

	event.shaped('2x gtceu:treated_wood_door', [
		'AA ',
		'AA ',
		'AA '
	], {
		A: 'gtceu:treated_wood_plate'
	}).id('tfg:shaped/treated_door')

	event.shaped('3x gtceu:treated_wood_trapdoor', [
		'AAA',
		'AAA',
		'   '
	], {
		A: 'gtceu:treated_wood_plate'
	}).id('tfg:shaped/treated_trapdoor')

	event.shaped('gtceu:treated_wood_pressure_plate', [
		' B ',
		'CDC',
		' E '
	], {
		B: '#tfc:hammers',
		C: 'gtceu:treated_wood_slab',
		D: '#forge:small_springs',
		E: '#forge:tools/screwdrivers'
	}).id('gtceu:shaped/treated_pressure_plate')

	event.recipes.gtceu.assembler('gtceu:treated_pressure_plate')
		.itemInputs('#forge:small_springs', '2x gtceu:treated_wood_slab')
		.itemOutputs('gtceu:treated_wood_pressure_plate')
		.circuit(3)
		.duration(50)
		.EUt(2)

	event.replaceOutput({ id: 'gtceu:cutter/treated_button' }, 'gtceu:treated_wood_button', '6x gtceu:treated_wood_button')
	event.replaceOutput({ id: 'gtceu:cutter/treated_button_water' }, 'gtceu:treated_wood_button', '6x gtceu:treated_wood_button')
	event.replaceOutput({ id: 'gtceu:cutter/treated_button_distilled_water' }, 'gtceu:treated_wood_button', '6x gtceu:treated_wood_button')

	event.replaceOutput({ id: 'gtceu:cutter/bamboo_button' }, 'minecraft:bamboo_button', '6x minecraft:bamboo_button')
	event.replaceOutput({ id: 'gtceu:cutter/bamboo_button_water' }, 'minecraft:bamboo_button', '6x minecraft:bamboo_button')
	event.replaceOutput({ id: 'gtceu:cutter/bamboo_button_distilled_water' }, 'minecraft:bamboo_button', '6x minecraft:bamboo_button')

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
		B: '#forge:rods/wooden',
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

	// Sticks
	event.shapeless('2x minecraft:stick', ['#minecraft:saplings', '#forge:tools/knives']).id('tfg:strip_saplings')

	event.recipes.gtceu.cutter('tfg:saplings_to_sticks')
		.itemInputs('#minecraft:saplings')
		.itemOutputs('2x minecraft:stick')
		.duration(20)
		.EUt(7)

	event.recipes.gtceu.packer('tfg:stick_bunch')
		.itemInputs('9x #forge:rods/wooden')
		.circuit(5)
		.itemOutputs('tfc:stick_bunch')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.packer('tfg:stick_bundle')
		.itemInputs('18x #forge:rods/wooden')
		.circuit(8)
		.itemOutputs('tfc:stick_bundle')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	
	// Какие то рецепты дерева
	global.TFC_WOOD_TYPES.forEach(wood => {
		event.remove({ id: `tfc:crafting/wood/${wood}_axle` })
		event.remove({ id: `tfc:crafting/wood/${wood}_bladed_axle` })
		event.remove({ id: `tfc:crafting/wood/${wood}_encased_axle` })
		event.remove({ id: `tfc:crafting/wood/${wood}_clutch` })
		event.remove({ id: `tfc:crafting/wood/${wood}_gear_box` })
		event.remove({ id: `tfc:crafting/wood/${wood}_water_wheel` })

		// Бревна -> Пиломатериалы
		generateCutterRecipe(event, `#tfc:${wood}_logs`, `16x tfc:wood/lumber/${wood}`, 50, 7, `${wood}_lumber_from_log`)

		// Доски -> Пиломатериалы
		generateCutterRecipe(event, `tfc:wood/planks/${wood}`, `4x tfc:wood/lumber/${wood}`, 50, 7, `${wood}_lumber_from_planks`)

		// Ступень -> Пиломатериалы
		generateCutterRecipe(event, `tfc:wood/planks/${wood}_stairs`, `3x tfc:wood/lumber/${wood}`, 50, 7, `${wood}_lumber_from_stairs`)


		// Плита -> Пиломатериалы
		generateCutterRecipe(event, `tfc:wood/planks/${wood}_slab`, `2x tfc:wood/lumber/${wood}`, 50, 7, `${wood}_lumber_from_slab`)

		// ? -> Деревянная нажимная пластина
		event.shaped(`tfc:wood/planks/${wood}_pressure_plate`, [
			' B ',
			'CDC',
			' E '
		], {
			B: '#tfc:hammers',
			C: `tfc:wood/planks/${wood}_slab`,
			D: '#forge:small_springs',
			E: '#forge:tools/screwdrivers'
		}).id(`tfc:crafting/wood/${wood}_pressure_plate`)

		event.recipes.gtceu.assembler(`${wood}_pressure_plate`)
			.itemInputs('#forge:small_springs', `2x tfc:wood/planks/${wood}_slab`)
			.circuit(3)
			.itemOutputs(`2x tfc:wood/planks/${wood}_pressure_plate`)
			.duration(50)
			.EUt(2)

		// ? -> Деревянная кнопка
		event.remove({ id: `tfc:crafting/wood/${wood}_button` })

		generateCutterRecipe(event, `tfc:wood/planks/${wood}_pressure_plate`, `6x tfc:wood/planks/${wood}_button`, 50, 7, `${wood}_button`)
		
		// Stripped logs
		event.recipes.gtceu.lathe(`tfg:stripping_${wood}_log`)
			.itemInputs(`tfc:wood/log/${wood}`)
			.itemOutputs(`tfc:wood/stripped_log/${wood}`)
			.duration(50)
			.EUt(2)

		event.recipes.gtceu.lathe(`tfg:stripping_${wood}_wood`)
			.itemInputs(`tfc:wood/wood/${wood}`)
			.itemOutputs(`tfc:wood/stripped_wood/${wood}`)
			.duration(50)
			.EUt(2)

		event.recipes.vintageimprovements.polishing(`tfc:wood/stripped_log/${wood}`, `tfc:wood/log/${wood}`)
			.speedLimits(0)
			.processingTime(50 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
			.id(`tfg:vi/lathe/stripping_${wood}_log`)

		event.recipes.vintageimprovements.polishing(`tfc:wood/stripped_wood/${wood}`, `tfc:wood/wood/${wood}`)
			.speedLimits(0)
			.processingTime(50 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
			.id(`tfg:vi/lathe/stripping_${wood}_wood`)
	})
}