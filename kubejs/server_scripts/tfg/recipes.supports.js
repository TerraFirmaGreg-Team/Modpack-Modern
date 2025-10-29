// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGSupportRecipes(event) {

	// Concrete Supports
	event.recipes.gtceu.fluid_solidifier('tfg:gtceu/fluid_solidifier/reinforced_light_concrete_support')
		.inputFluids(Fluid.of('gtceu:concrete', 96))
		.itemOutputs('1x tfg:reinforced_light_concrete_support')
		.itemInputs('1x tfg:rebar_support')
		.duration(60)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('tfg:gtceu/assembler/reinforced_light_concrete_support')
		.inputFluids(Fluid.of('gtceu:concrete', 96))
		.itemOutputs('1x tfg:reinforced_light_concrete_support')
		.itemInputs('1x tfg:rebar_support')
		.duration(120)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.chemical_bath('tfg:gtceu/chemical_bath/reinforced_dark_concrete_support')
		.inputFluids(Fluid.of('tfc:black_dye', 10))
		.itemOutputs('1x tfg:reinforced_dark_concrete_support')
		.itemInputs('1x tfg:reinforced_light_concrete_support')
		.duration(60)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.chemical_bath('tfg:gtceu/chemical_bath/dark_concrete_support')
		.inputFluids(Fluid.of('tfc:black_dye', 10))
		.itemOutputs('1x tfg:dark_concrete_support')
		.itemInputs('1x tfg:light_concrete_support')
		.duration(60)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('8x tfg:light_concrete_support', [
			'AB ',
			'AC ',
			'AC '
		], {
			A: 'gtceu:light_concrete',
			B: '#tfc:chisels',
			C: 'tfc:mortar'
		}).id('tfg:shaped/light_concrete_support'))

	event.recipes.gtceu.assembler('tfg:gtceu/assembler/light_concrete_support')
		.circuit(11)
		.inputFluids(Fluid.of('gtceu:concrete', 36))
		.itemOutputs('8x tfg:light_concrete_support')
		.itemInputs('3x gtceu:light_concrete')
		.duration(40)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('8x tfg:dark_concrete_support', [
			'AB ',
			'AC ',
			'AC '
		], {
			A: 'gtceu:dark_concrete',
			B: '#tfc:chisels',
			C: 'tfc:mortar'
		}).id('tfg:shaped/dark_concrete_support'))

	event.recipes.gtceu.assembler('tfg:gtceu/assembler/dark_concrete_support')
		.circuit(11)
		.inputFluids(Fluid.of('gtceu:concrete', 36))
		.itemOutputs('8x tfg:dark_concrete_support')
		.itemInputs('3x gtceu:dark_concrete')
		.duration(40)
		.EUt(GTValues.VA[GTValues.ULV])

	// Stone Supports
	global.TFC_STONE_TYPES.forEach(stone => {
		event.recipes.tfc.damage_inputs_shaped_crafting(
			event.shaped(`8x tfg:${stone}_support`, [
				'AB ',
				'AC ',
				'AC '
			], {
				A: `tfc:rock/loose/${stone}`,
				B: '#tfc:chisels',
				C: 'tfc:mortar'
			}).id(`tfg:shaped/${stone}_support`))

		event.recipes.tfc.damage_inputs_shaped_crafting(
			event.shaped(`8x tfg:${stone}_support`, [
				'AB ',
				'AC ',
				'AC '
			], {
				A: `tfc:rock/mossy_loose/${stone}`,
				B: '#tfc:chisels',
				C: 'tfc:mortar'
			}).id(`tfg:shaped/mossy/${stone}_support`))

		event.recipes.gtceu.assembler(`tfg:gtceu/assembler/${stone}_support`)
			.circuit(11)
			.inputFluids(Fluid.of('gtceu:concrete', 36))
			.itemOutputs(`8x tfg:${stone}_support`)
			.itemInputs(`3x tfc:rock/loose/${stone}`)
			.duration(40)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.assembler(`tfg:gtceu/assembler/mossy/${stone}_support`)
			.circuit(11)
			.inputFluids(Fluid.of('gtceu:concrete', 36))
			.itemOutputs(`8x tfg:${stone}_support`)
			.itemInputs(`3x tfc:rock/mossy_loose/${stone}`)
			.duration(40)
			.EUt(GTValues.VA[GTValues.ULV])
	})

	// REDO w/ table and loop
	const EXO_STONE_SUPPORTS = [
		{ loose: 'tfg:loose/deepslate',       support: 'tfg:migmatite_support' },
		{ loose: 'beneath:blackstone_pebble', support: 'tfg:pyroxenite_support' },
		{ loose: 'tfg:loose/dripstone',       support: 'tfg:travertine_support' },
		{ loose: 'tfg:loose/crackrack',       support: 'tfg:keratophyre_support' },
		{ loose: 'tfg:loose/moon_stone',      support: 'tfg:anorthosite_support' },
		{ loose: 'tfg:loose/moon_deepslate',  support: 'tfg:norite_support' },
		{ loose: 'tfg:loose/mars_stone',      support: 'tfg:argillite_support' },
		{ loose: 'tfg:loose/venus_stone',     support: 'tfg:trachyte_support' },
		{ loose: 'tfg:loose/mercury_stone',   support: 'tfg:komatiite_support' },
		{ loose: 'tfg:loose/glacio_stone',    support: 'tfg:phonolite_support' },
		{ loose: 'tfg:loose/permafrost',      support: 'tfg:permafrost_support' },
		{ loose: 'tfg:loose/red_granite',     support: 'tfg:red_granite_support' },
		{ loose: 'gtceu:stone_ingot',         support: 'tfg:stone_support' }
	]

	EXO_STONE_SUPPORTS.forEach(s => {
		event.recipes.tfc.damage_inputs_shaped_crafting(
			event.shaped(`8x ${s.support}`, [
				'AB ',
				'AC ',
				'AC '
			], {
				A: s.loose,
				B: '#tfc:chisels',
				C: 'tfc:mortar'
			}).id(`tfg:shaped/${s.support.split(':')[1]}`)
		)

		event.recipes.gtceu.assembler(`tfg:gtceu/assembler/${s.support.split(':')[1]}`)
			.circuit(11)
			.inputFluids(Fluid.of('gtceu:concrete', 36))
			.itemOutputs(`8x ${s.support}`)
			.itemInputs(`3x ${s.loose}`)
			.duration(40)
			.EUt(GTValues.VA[GTValues.ULV])
	})

	// Metal Supports
	event.shaped('8x tfg:rebar_support', [
		'BA ',
		'AC '
	], {
		A: ChemicalHelper.get(TagPrefix.rod, GTMaterials.Steel, 1),
		B: ChemicalHelper.get(TagPrefix.wireFine, GTMaterials.Steel, 1),
		C: '#forge:tools/wire_cutters'
	}).id('tfg:shaped/rebar_support')

	event.recipes.gtceu.assembler('tfg:gtceu/assembler/rebar_support')
		.circuit(11)
		.itemOutputs('8x tfg:rebar_support')
		.itemInputs(ChemicalHelper.get(TagPrefix.rod, GTMaterials.Steel, 2), ChemicalHelper.get(TagPrefix.wireFine, GTMaterials.Steel, 1))
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.tfc.anvil(
		'1x tfg:steel_support',
		'#forge:double_ingots/steel',
		[
			'upset_last',
			'shrink_any'
		]
	).tier(4).id('tfg:anvil/steel_support')

	event.recipes.gtceu.assembler('tfg:gtceu/assembler/steel_support')
		.circuit(11)
		.itemOutputs('4x tfg:steel_support')
		.itemInputs('2x #forge:double_ingots/steel')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])
		.addMaterialInfo(true)
}
