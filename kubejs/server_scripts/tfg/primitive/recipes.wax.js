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

	// Tapping
	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/aspen"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 2))
		.minTemp(-10)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/aspen_resin")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/ancient_aspen"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 2))
		.minTemp(-10)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/ancient_aspen_resin")

	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/spruce"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 4))
		.minTemp(-15)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/spruce_resin")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/ancient_spruce"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 4))
		.minTemp(-15)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/ancient_spruce_resin")

	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/white_cedar"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 3))
		.minTemp(-8)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/white_cedar_resin")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/ancient_white_cedar"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 3))
		.minTemp(-8)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/ancient_white_cedar_resin")

	event.recipes.afc.tree_tapping(TFC.blockIngredient('tfc:wood/log/douglas_fir'))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 2))
		.minTemp(-8)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/douglas_fir_resin")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/ancient_douglas_fir"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 2))
		.minTemp(-8)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/ancient_douglas_fir_resin")

	// Conifer Pitch
	event.recipes.gtceu.extractor('conifer_from_log')
		.itemInputs('#tfg:rosin_logs')
		.outputFluids(Fluid.of('tfg:conifer_pitch', 250))
		.duration(600)
		.EUt(20)

	event.recipes.gtceu.extractor('conifer_from_sapling')
		.itemInputs('#tfg:rosin_saplings')
		.outputFluids(Fluid.of('tfg:conifer_pitch', 100))
		.duration(750)
		.EUt(20)

	event.recipes.gtceu.extractor('conifer_from_leaves')
		.itemInputs('#tfg:rosin_leaves')
		.outputFluids(Fluid.of('tfg:conifer_pitch', 50))
		.duration(750)
		.EUt(20)

	event.recipes.gtceu.centrifuge('conifer_log_separation')
		.itemInputs('#tfg:rosin_logs')
		.chancedOutput('tfg:conifer_rosin', 7500, 0)
		.chancedOutput('gtceu:plant_ball', 3750, 0)
		.chancedOutput('gtceu:sticky_resin', 2500, 0)
		.chancedOutput('gtceu:wood_dust', 2500, 0)
		.outputFluids(Fluid.of('gtceu:methane', 60))
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.MV])

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