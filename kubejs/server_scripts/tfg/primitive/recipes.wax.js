"use strict";

function registerTFGWaxRecipes(event) {

	//forge:wax
	event.replaceInput({}, 'firmalife:beeswax', '#forge:wax')

	//paraffin
	event.recipes.gtceu.chemical_reactor('tfg:paraffin_wax_from_lubricant')
		.circuit(7)
		.itemOutputs('6x tfg:paraffin_wax')
		.outputFluids(Fluid.of('gtceu:oil_light', 25))
		.inputFluids(Fluid.of('gtceu:lubricant', 250), Fluid.of('gtceu:acetone', 25))
		.duration(500)
		.EUt(GTValues.VA[GTValues.LV])

	// Rosin
	event.recipes.firmalife.vat()
		.inputs('tfc:powder/charcoal', Fluid.of('tfg:conifer_pitch', 1000))
		.outputItem('tfg:conifer_rosin')
		.id('tfg:vat/conifer_pitch_to_rosin');

	event.recipes.tfc.pot('tfc:powder/charcoal', Fluid.of('tfg:conifer_pitch', 1000), 1200, 300)
		.itemOutput('tfg:conifer_rosin')
		.id('tfg:pot/conifer_pitch_to_rosin')

	event.recipes.gtceu.fluid_solidifier('tfg:pitch_to_rosin')
		.inputFluids(Fluid.of('tfg:conifer_pitch', 1000))
		.itemInputs('tfc:powder/charcoal')
		.itemOutputs('tfg:conifer_rosin')
		.duration(20 * 12)
		.EUt(GTValues.VA[GTValues.LV])

	//#region Wax Unification

	// Recipe Removals
	event.remove({ id: 'gtceu:extractor/extract_honeycomb_block' });
	event.remove({ id: 'gtceu:extractor/extract_honeycomb' });
	event.remove({ id: 'gtceu:extractor/extract_wax_dust' });

	// Extractor Recipe
	event.recipes.gtceu.extractor('tfg:wax_melting')
		.itemInputs(Ingredient.of('#forge:wax'))
		.outputFluids(Fluid.of('gtceu:wax', 144))
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.LV])
		.category(GTRecipeCategories.EXTRACTOR_RECYCLING);

	event.recipes.gtceu.extractor('tfg:tiny_wax_dust_melting')
		.itemInputs(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Wax, 1))
		.outputFluids(Fluid.of('gtceu:wax', 16))
		.duration(10)
		.EUt(GTValues.VA[GTValues.LV])
		.category(GTRecipeCategories.EXTRACTOR_RECYCLING);

	event.recipes.gtceu.extractor('tfg:small_wax_dust_melting')
		.itemInputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.Wax, 1))
		.outputFluids(Fluid.of('gtceu:wax', 36))
		.duration(20)
		.EUt(GTValues.VA[GTValues.LV])
		.category(GTRecipeCategories.EXTRACTOR_RECYCLING);

	//#endregion
}