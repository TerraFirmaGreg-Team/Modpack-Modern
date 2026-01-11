// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGStoneDustRecipes(event) {

	event.recipes.gtceu.centrifuge('gtceu:stone_dust_separation')
		.itemInputs('gtceu:stone_dust')
		.chancedOutput('#forge:small_dusts/quartzite', 2500, 0)
		.chancedOutput('#forge:small_dusts/potassium_feldspar', 2500, 0)
		.chancedOutput('#forge:small_dusts/marble', 2222, 0)
		.chancedOutput('#forge:small_dusts/biotite', 1111, 0)
		.chancedOutput('#forge:small_dusts/metal_mixture', 825, 80)
		.chancedOutput('#forge:small_dusts/sodalite', 550, 55)
		.duration(12 * 20)
		.EUt(GTValues.VA[GTValues.HV])


	// AE2

	event.recipes.gtceu.centrifuge('sky_dust_separation')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(100)
		.itemInputs('ae2:sky_dust')
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.CertusQuartz, 1), 4500, 0)

	// Create

	event.recipes.gtceu.centrifuge('asurine_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(10 * 20)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('asurine'), 1))
		.chancedOutput('ae2:sky_dust', 6000, 0)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.CertusQuartz, 1), 5000, 0)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Olivine, 1), 4500, 0)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Zinc, 1), 3500, 0)
		.outputFluids(Fluid.of('gtceu:helium_3', 200))

	event.recipes.gtceu.centrifuge('ochrum_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('ochrum'), 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Hematite, 1), 4500, 0)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Lithium, 1), 3500, 0)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Gold, 1), 3500, 0)

	// Misc dust

	event.recipes.gtceu.centrifuge('gtceu:quartz_sand_separation')
		.EUt(30)
		.duration(60)
		.itemInputs('2x gtceu:quartz_sand_dust')
		.itemOutputs('gtceu:quartzite_dust')
		.chancedOutput('#forge:dusts/nether_quartz', 2000, 0)
}