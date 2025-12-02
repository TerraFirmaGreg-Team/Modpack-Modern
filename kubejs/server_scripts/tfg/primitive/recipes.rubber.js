"use strict";

function registerTFGRubberRecipes(event) {

	// Sticky resin
	event.recipes.tfc.pot('tfc:powder/wood_ash', Fluid.of('tfg:latex', 1000), 1200, 300)
		.itemOutput('gtceu:sticky_resin')
		.id('tfg:pot/sticky_resin_from_latex')

	event.recipes.tfc.pot('tfc:powder/wood_ash', Fluid.of('tfg:conifer_pitch', 1000), 1200, 300)
		.itemOutput('gtceu:sticky_resin')
		.id('tfg:pot/sticky_resin_from_conifer_pitch')

	event.recipes.gtceu.fluid_solidifier('tfg:fluid_solidifier/latex_to_sticky_resin')
		.duration(12 * 20)
		.EUt(30)
		.itemInputs('tfc:powder/wood_ash')
		.itemOutputs('gtceu:sticky_resin')
		.inputFluids(Fluid.of('tfg:latex', 1000))

	event.recipes.gtceu.fluid_solidifier('tfg:fluid_solidifier/pitch_to_sticky_resin')
		.duration(12 * 20)
		.EUt(30)
		.itemInputs('tfc:powder/wood_ash')
		.itemOutputs('gtceu:sticky_resin')
		.inputFluids(Fluid.of('tfg:conifer_pitch', 1000))

	// Rubber Processing Line
	event.recipes.firmalife.vat()
		.inputs('tfc:powder/sulfur', Fluid.of('tfg:latex', 1000))
		.outputFluid(Fluid.of('tfg:vulcanized_latex', 1000))
		.length(300)
		.temperature(300)
		.id('tfg:vat/vulcanized_latex')

	event.recipes.tfc.pot('tfc:powder/sulfur', Fluid.of('tfg:latex', 1000), 1200, 300)
		.fluidOutput(Fluid.of('tfg:vulcanized_latex', 1000))
		.id('tfg:pot/vulcanized_latex')

	event.recipes.gtceu.chemical_reactor('tfg:latex_to_vulcanized_latex')
		.duration(100)
		.EUt(20)
		.itemInputs('tfc:powder/sulfur')
		.inputFluids(Fluid.of('tfg:latex', 1000))
		.outputFluids(Fluid.of('tfg:vulcanized_latex', 1000))

	event.recipes.gtceu.fluid_solidifier('tfg:vulcanized_latex_to_raw_rubber_pulp')
		.duration(100)
		.EUt(20)
		.inputFluids(Fluid.of('tfg:vulcanized_latex', 1000))
		.itemOutputs('4x gtceu:raw_rubber_dust')

	event.recipes.gtceu.fluid_solidifier('tfg:solidify_glue')
		.inputFluids(Fluid.of('gtceu:glue', 50))
		.notConsumable('gtceu:ball_casting_mold')
		.itemOutputs('tfc:glue')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.centrifuge('tfg:centrifuge_rosin')
		.itemInputs('tfg:conifer_rosin')
		.outputFluids(Fluid.of('gtceu:glue', 50))
		.itemOutputs('2x #forge:dusts/carbon')
		.chancedOutput('gtceu:plant_ball', 7500, 0)
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.centrifuge('tfg:centrifuge_sticky_resin')
		.itemInputs('gtceu:sticky_resin')
		.outputFluids(Fluid.of('gtceu:glue', 100))
		.itemOutputs('3x #forge:dusts/carbon')
		.chancedOutput('gtceu:plant_ball', 5000, 0)
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.chemical_reactor(`tfg:treat_latex_plants_into_latex`)
		.itemInputs('16x #tfg:rubber_plants', 'gtceu:tiny_sodium_hydroxide_dust')
		.circuit(1)
		.outputFluids(Fluid.of('tfg:latex', 1000))
		.duration(200)
		.EUt(20)


	// #region Primitive protection

	event.recipes.tfc.barrel_sealed(2000)
		.outputItem('tfg:prepared_leather_gloves')
		.inputs('tfchotornot:mittens', Fluid.of('tfc:vinegar', 1000))
		.id('tfg:sealed_barrel/prepared_leather_gloves')

	event.recipes.firmalife.vat()
		.outputItem('tfg:latex_soaked_gloves')
		.inputs('tfg:prepared_leather_gloves', Fluid.of('tfg:vulcanized_latex', 1000))
		.length(300)
		.temperature(200)
		.id('tfg:vat/latex_soaked_gloves')

	event.recipes.firmalife.oven('tfg:latex_soaked_gloves', 120, 1200, 'gtceu:rubber_gloves')
		.id('tfg:oven/rubber_gloves')

	event.remove({ id: 'gtceu:shaped/rubber_gloves' })

	event.recipes.gtceu.alloy_smelter('rubber_gloves_alloy_smelter')
		.itemInputs('2x #forge:plates/rubber')
		.notConsumable('create:brass_hand')
		.itemOutputs('gtceu:rubber_gloves')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])
		.category(GTRecipeCategories.INGOT_MOLDING)


	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('gtceu:face_mask', [
			'ACA',
			'ABA',
			' D '
		], {
			A: '#forge:string',
			B: '#forge:cloth',
			C: 'minecraft:paper',
			D: '#tfc:sewing_needles'
		})
	).id('gtceu:shaped/face_mask')

	event.recipes.gtceu.assembler('assemble_face_mask')
		.itemInputs('4x #forge:string', '#forge:cloth', 'minecraft:paper')
		.itemOutputs('gtceu:face_mask')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])
		.circuit(7)

	// #endregion
}