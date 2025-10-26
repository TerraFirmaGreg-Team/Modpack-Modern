"use strict";

function registerCreateHypertubeRecipes(event) {
	event.remove({ mod: 'create_hypertube' })

	event.recipes.gtceu.assembler('create_hypertube:hypertube')
		.itemInputs('2x #forge:plates/stainless_steel', '4x ae2:quartz_glass')
		.itemOutputs('8x create_hypertube:hypertube')
		.EUt(GTValues.VA[GTValues.HV])
		.duration(50)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('create_hypertube:entrance')
		.itemInputs('4x #forge:plates/stainless_steel','create:smart_chute' ,'greate:stainless_steel_cogwheel', 'ae2:charged_certus_quartz_crystal')
		.itemOutputs('create_hypertube:hypertube_entrance')
		.inputFluids(Fluid.of('gtceu:silicone_rubber', 288))
		.EUt(GTValues.VA[GTValues.HV])
		.duration(100)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('create_hypertube:entrance_sbr')
		.itemInputs('4x #forge:plates/stainless_steel','create:smart_chute' ,'greate:stainless_steel_cogwheel', 'ae2:charged_certus_quartz_crystal')
		.itemOutputs('create_hypertube:hypertube_entrance')
		.inputFluids(Fluid.of('gtceu:styrene_butadiene_rubber', 144))
		.EUt(GTValues.VA[GTValues.HV])
		.duration(100)

	event.recipes.gtceu.assembler('create_hypertube:accelerator')
		.itemInputs('2x #forge:plates/stainless_steel', 'greate:stainless_steel_cogwheel', 'ae2:fluix_crystal')
		.itemOutputs('create_hypertube:hypertube_accelerator')
		.inputFluids(Fluid.of('gtceu:silicone_rubber', 288))
		.EUt(GTValues.VA[GTValues.HV])
		.duration(100)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('create_hypertube:accelerator_sbr')
		.itemInputs('2x #forge:plates/stainless_steel', 'greate:stainless_steel_cogwheel', 'ae2:fluix_crystal')
		.itemOutputs('create_hypertube:hypertube_accelerator')
		.inputFluids(Fluid.of('gtceu:styrene_butadiene_rubber', 144))
		.EUt(GTValues.VA[GTValues.HV])
		.duration(100)
}
