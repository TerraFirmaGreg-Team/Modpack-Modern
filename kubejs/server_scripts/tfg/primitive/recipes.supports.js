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

	event.recipes.gtceu.macerator(`reinforced_light_concrete_support_to_dust`)
		.itemInputs('tfg:reinforced_light_concrete_support')
		.itemOutputs('gtceu:tiny_steel_dust')
		.duration(150)
		.EUt(2)
		.category(GTRecipeCategories.MACERATOR_RECYCLING);

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

	event.recipes.gtceu.macerator(`reinforced_dark_concrete_support_to_dust`)
		.itemInputs('tfg:reinforced_dark_concrete_support')
		.itemOutputs('gtceu:tiny_steel_dust')
		.duration(150)
		.EUt(2)
		.category(GTRecipeCategories.MACERATOR_RECYCLING);

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

	// Stone supports are in recipes.rocks.js

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
		.addMaterialInfo(true)
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
		.itemOutputs('2x tfg:steel_support')
		.itemInputs('1x #forge:double_ingots/steel')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	TFGHelpers.registerMaterialInfo('tfg:steel_support', [GTMaterials.Steel, 1])
}
