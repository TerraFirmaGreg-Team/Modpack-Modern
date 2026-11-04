"use strict";

function registerTFGPetroChemRecipes(event) {

    //#region Fix Electrolyzation
    
    // Doesn't make sense to be the only one not cracked
    event.remove({ id: 'gtceu:distillation_tower/distill_refinery_gas' })

    event.remove({ id: 'gtceu:electrolyzer/propane_electrolysis' })
    event.remove({ id: 'gtceu:electrolyzer/butane_electrolysis' })

    event.remove({ id: 'gtceu:distillation_tower/distill_steam_cracked_propane' })
    event.remove({ id: 'gtceu:distillery/distill_steam_cracked_propane_to_ethylene' })
    event.remove({ id: 'gtceu:distillery/distill_steam_cracked_propane_to_methane' })

    event.remove({ id: 'gtceu:distillation_tower/distill_steam_cracked_butane' })
    event.remove({ id: 'gtceu:distillery/distill_steam_cracked_butane_to_propane' })
    event.remove({ id: 'gtceu:distillery/distill_steam_cracked_butane_to_ethane' })
    event.remove({ id: 'gtceu:distillery/distill_steam_cracked_butane_to_ethylene' })
    event.remove({ id: 'gtceu:distillery/distill_steam_cracked_butane_to_methane' })

    event.recipes.gtceu.distillation_tower('tfg:distill_steam_cracked_propane')
        .inputFluids(Fluid.of('gtceu:steam_cracked_propane', 1000))
        .outputFluids(
            Fluid.of('gtceu:propene', 175),
            Fluid.of('gtceu:ethylene', 650),
            Fluid.of('gtceu:methane', 925),
            Fluid.of('gtceu:hydrogen', 650))
        .chancedOutput(Item.of('gtceu:carbon_dust', 1), 2500, 0)
        .duration(20 * 6)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.distillation_tower('tfg:distill_steam_cracked_butane')
        .inputFluids(Fluid.of('gtceu:steam_cracked_butane', 1000))
        .outputFluids(
            Fluid.of('gtceu:butene', 75),
            Fluid.of('gtceu:butadiene', 50),
            Fluid.of('gtceu:propene', 250),
            Fluid.of('gtceu:ethylene', 800),
            Fluid.of('gtceu:methane', 900),
            Fluid.of('gtceu:hydrogen', 800))
        .chancedOutput(Item.of('gtceu:carbon_dust', 1), 2500, 0)
        .duration(20 * 6)
        .EUt(GTValues.VA[GTValues.MV])

    //#region New Dehydrogenation Method

	event.recipes.gtceu.mixer('tfg:chromia_alumina_catalyst')
		.itemInputs(Item.of('tfg:chromium_3_oxide_dust', 1), Item.of('tfg:alumina_dust', 4))
		.itemOutputs(Item.of('tfg:chromia_alumina_catalyst_dust', 5))
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.mixer('tfg:platinum_tin_alumina_catalyst')
		.itemInputs(Item.of('gtceu:platinum_dust', 1), Item.of('gtceu:tin_dust', 1), Item.of('tfg:alumina_dust', 14))
		.itemOutputs(Item.of('tfg:platinum_tin_alumina_catalyst_dust', 16))
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.HV])

	const CATALYSTS = [
		{ id: 'chromia_alumina_catalyst', mb: 8000, coke: 1, keep: 9000 },
		{ id: 'platinum_tin_alumina_catalyst', mb: 32000, coke: 4, keep: 9800 }
	]

	CATALYSTS.forEach(c => {
		;['propane', 'butane'].forEach(feed => {
			event.recipes.gtceu.cracker(`tfg:dehydrogenate_${feed}_${c.id}`)
				.itemInputs(Item.of(`tfg:${c.id}_dust`, 1))
				.inputFluids(Fluid.of(`gtceu:${feed}`, c.mb))
				.itemOutputs(Item.of(`tfg:coked_${c.id}_dust`, 1))
				.outputFluids(Fluid.of(`tfg:dehydrogenated_${feed}`, c.mb))
				.duration(c.mb * 120 / 1000)
				.EUt(240)
		})

		event.recipes.gtceu.chemical_reactor(`tfg:regenerate_${c.id}`)
			.itemInputs(Item.of(`tfg:coked_${c.id}_dust`, 1))
			.inputFluids(Fluid.of('gtceu:oxygen', c.coke * 2000))
			.chancedOutput(Item.of(`tfg:${c.id}_dust`, 1), c.keep, 0)
			.outputFluids(Fluid.of('gtceu:carbon_dioxide', c.coke * 1000))
			.duration(20 * 10 * c.coke)
			.EUt(GTValues.VA[GTValues.MV])
	})

	event.recipes.gtceu.distillation_tower('tfg:distill_dehydrogenated_propane')
		.inputFluids(Fluid.of('tfg:dehydrogenated_propane', 1000))
		.outputFluids(
			Fluid.of('gtceu:propane', 600),
			Fluid.of('gtceu:propene', 350),
			Fluid.of('gtceu:methane', 25),
			Fluid.of('gtceu:hydrogen', 1000))
		.duration(20 * 6)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.distillation_tower('tfg:distill_dehydrogenated_butane')
		.inputFluids(Fluid.of('tfg:dehydrogenated_butane', 1000))
		.outputFluids(
			Fluid.of('gtceu:butane', 600),
			Fluid.of('gtceu:butene', 350),
			Fluid.of('gtceu:propene', 25),
			Fluid.of('gtceu:hydrogen', 1050))
		.duration(20 * 6)
		.EUt(GTValues.VA[GTValues.MV])

    //#region Alternative Paths

}