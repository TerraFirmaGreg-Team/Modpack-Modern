"use strict";

function registerTFGMoSiBRecipes(event) {

    const $HeatRecipeCapability = Java.loadClass("fi.dea.mc.deafission.common.data.recipe.HeatRecipeCapability");
	const $HeatIngredient = Java.loadClass("fi.dea.mc.deafission.common.data.recipe.HeatIngredient");
    
    // Mo-Si-B Line

    event.remove({ id: 'gtceu:vacuum_freezer/cool_hot_mo_si_b_ingot' })
    event.remove({ id: 'gtceu:vacuum_freezer/cool_hot_homogenized_mo_si_b_ingot' })
    event.remove({ id: 'gtceu:electric_blast_furnace/blast_weak_mo_si_b_gas' })
    event.remove({ id: 'gtceu:electric_blast_furnace/blast_weak_mo_si_b' })
    event.remove({ id: 'gtceu:alloy_smelter/alloy_smelt_homogenized_mo_si_b_to_nugget' })
    event.remove({ id: 'gtceu:alloy_smelter/alloy_smelt_activated_mo_si_b_to_nugget' })
    event.remove({ id: 'gtceu:vacuum_freezer/cool_hot_weak_mo_si_b_ingot' })

	event.recipes.gtceu.mixer('tfg:dirty_mo_si_b_dust')
		.itemInputs(Item.of('gtceu:silicon_dust', 1), Item.of('gtceu:molybdenum_dust', 1), Item.of('gtceu:boron_dust', 1))
        .inputFluids(Fluid.of('tfg:argon_enriched_atmosphere', 6000))
		.itemOutputs(Item.of('tfg:dirty_mo_si_b_dust', 3))
		.outputFluids(Fluid.of('tfg:hydroxide_decomposition_off_gas', 300))
		.duration(12 * 20)
		.EUt(GTValues.VA[GTValues.EV])
		.circuit(1)

	event.recipes.gtceu.arc_furnace('tfg:silicon_tetrachloride_water')
		.itemInputs(Item.of('tfg:dirty_mo_si_b_dust', 1))
        .inputFluids(Fluid.of('gtceu:oxygen', 100))
		.itemOutputs(Item.of('tfg:weak_mo_si_b_dust', 1))
		.duration(3 * 20)
		.EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.electric_blast_furnace('tfg:hot_weak_mo_si_b_ingot')
        .itemInputs(Item.of('tfg:weak_mo_si_b_dust', 1))
        .inputFluids(Fluid.of('gtceu:helium', 100))
        .itemOutputs(Item.of('tfg:hot_weak_mo_si_b_ingot', 1))
        .outputFluids(Fluid.of('tfg:furnace_exhaust_gas', 100))
        .duration(46 * 20)
        .EUt(GTValues.VA[GTValues.HV])
        .blastFurnaceTemp(3150)

	event.recipes.gtceu.forge_hammer('tfg:hot_worked_mo_si_b_ingot')
		.itemInputs(Item.of('tfg:hot_weak_mo_si_b_ingot', 1))
		.itemOutputs(Item.of('tfg:hot_worked_mo_si_b_ingot', 1))
		.duration(40 * 20)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.chemical_bath('tfg:mo_si_b_off_gas')
		.itemInputs(Item.of('tfg:hot_worked_mo_si_b_ingot', 1))
        .inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 1000))
		.itemOutputs(Item.of('tfg:hot_homogenized_mo_si_b_ingot', 1))
		.outputFluids(Fluid.of('tfg:mo_si_b_off_gas', 100))
		.duration(24 * 20)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.chemical_reactor('tfg:medium_temperature_off_gas')
        .inputFluids(Fluid.of('tfg:mo_si_b_off_gas', 100), Fluid.of('tfg:furnace_exhaust_gas', 100))
		.outputFluids(Fluid.of('tfg:medium_temperature_off_gas', 100))
		.duration(82 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.gas_pressurizer('tfg:highly_active_off_gas')
        .inputFluids(Fluid.of('tfg:medium_temperature_off_gas', 100), Fluid.of('tfg:linac_activated_gas', 100), Fluid.of('tfg:hydroxide_decomposition_off_gas', 100))
		.outputFluids(Fluid.of('tfg:highly_active_off_gas', 100))
		.duration(37 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.vacuum_freezer('tfg:dirty_mo_si_b_dust')
		.itemInputs(Item.of('tfg:hot_homogenized_mo_si_b_ingot', 1))
		.itemOutputs(Item.of('tfg:homogenized_mo_si_b_ingot', 1))
		.outputFluids(Fluid.of('tfg:inert_furnace_atmosphere', 5000))
		.duration(18 * 20)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.ostrum_linear_accelerator('tfg:activated_mo_si_b_ingot')
		.perTick(true)
		.inputFluids(Fluid.of('gtceu:residual_radioactive_concoction', 1))
		.perTick(false)
        .itemInputs(Item.of('tfg:homogenized_mo_si_b_ingot', 1))
		.inputFluids(Fluid.of('gtceu:dense_ostrum_vapor', 1000))
		.itemOutputs(Item.of('tfg:activated_mo_si_b_ingot', 1))
        .outputFluids(Fluid.of('tfg:linac_activated_gas', 100))
		.input($HeatRecipeCapability.CAP, new $HeatIngredient(500, 890))
		.dimension('ad_astra:mars')
		.duration(20 * 600)
		.EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.electric_blast_furnace('tfg:hot_mo_si_b_ingot')
        .itemInputs(Item.of('tfg:activated_mo_si_b_ingot', 1))
        .inputFluids(Fluid.of('tfg:highly_active_off_gas', 100))
        .itemOutputs(Item.of('tfg:hot_mo_si_b_ingot', 1))
        .duration(46 * 20)
        .EUt(GTValues.VA[GTValues.IV])
        .blastFurnaceTemp(3230)

	event.recipes.gtceu.vacuum_freezer('tfg:mo_si_b_ingot')
		.itemInputs(Item.of('tfg:hot_mo_si_b_ingot', 1))
        .inputFluids(Fluid.of('gtceu:liquid_helium', 100))
		.itemOutputs(Item.of('tfg:mo_si_b_ingot', 1))
		.outputFluids(Fluid.of('tfg:inert_furnace_atmosphere', 5000))
		.duration(18 * 20)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.chemical_reactor('tfg:argon_enriched_atmosphere')
        .inputFluids(Fluid.of('tfg:inert_furnace_atmosphere', 10000), Fluid.of('gtceu:argon', 1000))
		.outputFluids(Fluid.of('tfg:argon_enriched_atmosphere', 2000))
		.duration(60 * 20)
		.EUt(GTValues.VA[GTValues.HV])

}