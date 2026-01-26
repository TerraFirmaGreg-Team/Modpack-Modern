"use strict";

function registerTFGRubberRecipes(event) {

	// Tapping
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/rubber_fig"))
		.resultFluid(Fluid.of("tfg:latex", 2))
		.minTemp(4)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/latex/rubber_fig")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/ancient_rubber_fig"))
		.resultFluid(Fluid.of("tfg:latex", 2))
		.minTemp(4)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/latex/ancient_rubber_fig")

	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/hevea"))
		.resultFluid(Fluid.of("tfg:latex", 3))
		.minTemp(8)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/latex/hevea")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/ancient_hevea"))
		.resultFluid(Fluid.of("tfg:latex", 3))
		.minTemp(8)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/latex/ancient_hevea")

	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/kapok"))
		.resultFluid(Fluid.of("tfg:latex", 4))
		.minTemp(12)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/kapok_latex")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/ancient_kapok"))
		.resultFluid(Fluid.of("tfg:latex", 4))
		.minTemp(12)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/ancient_kapok_latex")

	// Latex
	event.recipes.gtceu.extractor('latex_from_log')
		.itemInputs('#tfg:latex_logs')
		.outputFluids(Fluid.of('tfg:latex', 250))
		.duration(600)
		.EUt(20)

	event.recipes.gtceu.extractor('latex_from_sapling')
		.itemInputs('#tfg:rubber_saplings')
		.outputFluids(Fluid.of('tfg:latex', 100))
		.duration(750)
		.EUt(20)

	event.recipes.gtceu.extractor('latex_from_leaves')
		.itemInputs('#tfg:rubber_leaves')
		.outputFluids(Fluid.of('tfg:latex', 50))
		.duration(750)
		.EUt(20)

	
	// Vaccuming rubber wood stuff for latex
	event.recipes.vintageimprovements.vacuumizing(Fluid.of('tfg:latex', 100), '#tfg:latex_logs')
		.processingTime(300 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id('tfg:vi/vacuumizing/latex_from_rubber_logs')

	event.recipes.vintageimprovements.vacuumizing(Fluid.of('tfg:latex', 25), '#tfg:rubber_saplings')
		.processingTime(150 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id('tfg:vi/vacuumizing/latex_from_rubber_sapling')

	event.recipes.vintageimprovements.vacuumizing(Fluid.of('tfg:latex', 10), '#tfg:rubber_leaves')
		.processingTime(75 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id('tfg:vi/vacuumizing/latex_from_rubber_leaves')

	event.recipes.vintageimprovements.vacuumizing(Fluid.of('tfg:latex', 100), ['#tfg:rubber_plants', 'tfc:powder/soda_ash', Fluid.of('tfc:salt_water', 50)])
		.heated()
		.processingTime(20 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id('tfg:vi/vacuumizing/latex_from_rubber_plants')

	// Sticky resin
	event.recipes.tfc.pot('tfc:powder/wood_ash', Fluid.of('tfg:latex', 1000), 1200, 300)
		.itemOutput('gtceu:sticky_resin')
		.id('tfg:pot/sticky_resin_from_latex')

	event.recipes.tfc.pot('tfc:powder/wood_ash', Fluid.of('tfg:conifer_pitch', 1000), 1200, 300)
		.itemOutput('gtceu:sticky_resin')
		.id('tfg:pot/sticky_resin_from_conifer_pitch')

	event.recipes.firmalife.vat()
		.inputs('tfc:powder/wood_ash', Fluid.of('tfg:latex', 1000))
		.outputItem('gtceu:sticky_resin')
		.id('tfg:vat/latex_to_sticky_resin');

	event.recipes.firmalife.vat()
		.inputs('tfc:powder/wood_ash', Fluid.of('tfg:conifer_pitch', 1000))
		.outputItem('gtceu:sticky_resin')
		.id('tfg:vat/conifer_pitch_to_sticky_resin');
	
	event.recipes.greate.mixing('gtceu:sticky_resin', [Fluid.of('tfg:latex', 1000), 'tfc:powder/wood_ash'])
		.recipeTier(1)
		.heated()
		.id('tfg:create/mixer/sticky_resin_from_latex');
		
	event.recipes.greate.mixing('gtceu:sticky_resin', [Fluid.of('tfg:conifer_pitch', 1000), 'tfc:powder/wood_ash'])
		.recipeTier(1)
		.heated()
		.id('tfg:create/mixer/sticky_resin_from_pitch');

	event.recipes.gtceu.fluid_solidifier('tfg:fluid_solidifier/latex_to_sticky_resin')
		.duration(12 * 20)
		.EUt(16)
		.itemInputs('tfc:powder/wood_ash')
		.itemOutputs('2x gtceu:sticky_resin')
		.inputFluids(Fluid.of('tfg:latex', 1000))

	event.recipes.gtceu.fluid_solidifier('tfg:fluid_solidifier/pitch_to_sticky_resin')
		.duration(12 * 20)
		.EUt(16)
		.itemInputs('tfc:powder/wood_ash')
		.itemOutputs('2x gtceu:sticky_resin')
		.inputFluids(Fluid.of('tfg:conifer_pitch', 1000))
		
	// Rubber
	event.recipes.vintageimprovements.vacuumizing(Fluid.of('gtceu:rubber', 144), '#forge:dusts/rubber')
		.heated()
		.processingTime(50 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id('tfg:vi/vacuumizing/rubber')
	
	// Rubber Processing Line
	event.recipes.tfc.pot('tfc:powder/sulfur', Fluid.of('tfg:latex', 1000), 1200, 300)
		.fluidOutput(Fluid.of('tfg:vulcanized_latex', 1000))
		.id('tfg:pot/vulcanized_latex')

	event.recipes.firmalife.vat()
		.inputs('tfc:powder/sulfur', Fluid.of('tfg:latex', 1000))
		.outputFluid(Fluid.of('tfg:vulcanized_latex', 1000))
		.length(300)
		.temperature(300)
		.id('tfg:vat/vulcanized_latex')

	event.recipes.gtceu.chemical_reactor('tfg:latex_to_vulcanized_latex')
		.duration(100)
		.EUt(20)
		.itemInputs('tfc:powder/sulfur')
		.inputFluids(Fluid.of('tfg:latex', 1000))
		.outputFluids(Fluid.of('tfg:vulcanized_latex', 1000))

	// Raw rubber pulp
	event.recipes.vintageimprovements.pressurizing('#forge:dusts/raw_rubber', Fluid.of('tfg:vulcanized_latex', 250))
		.heated()
		.processingTime(60 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.id('tfg:vi/pressurizing/vulcanized_latex_to_raw_rubber')

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
		.itemInputs('10x #tfg:rubber_plants', 'gtceu:tiny_sodium_hydroxide_dust')
		.circuit(1)
		.outputFluids(Fluid.of('tfg:latex', 1000))
		.duration(200)
		.EUt(20)

	event.recipes.gtceu.centrifuge('rubber_log_separation')
		.itemInputs('#tfg:latex_logs')
		.chancedOutput('gtceu:raw_rubber_dust', 5000, 0)
		.chancedOutput('gtceu:plant_ball', 3750, 0)
		.chancedOutput('gtceu:sticky_resin', 2500, 0)
		.chancedOutput('gtceu:wood_dust', 2500, 0)
		.outputFluids(Fluid.of('gtceu:methane', 60))
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.MV])
}