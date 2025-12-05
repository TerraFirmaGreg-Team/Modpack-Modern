"use strict";

function registerTFGSolarRecipes(event) {

	//#region Large Solar Panel

	event.shaped(
		'gtceu:large_solar_panel',
		['WSW', 'TZT', 'WUW'],
		{
			S: 'tfg:photo_cell_t1',
			Z: 'ad_astra:solar_panel',
			W: '#gtceu:circuits/ev',
			U: '#forge:gears/rocket_alloy_t1',
			T: '#forge:gears/desh'
		}
	).id('gtceu:shaped/large_solar_panel')

	event.shaped(
		'gtceu:large_solar_panel_tier2',
		['WSW', 'TZT', 'WUW'],
		{
			S: 'ad_astra:photovoltaic_etrium_cell',
			Z: 'gtceu:large_solar_panel',
			W: '#gtceu:circuits/iv',
			U: '#forge:gears/rocket_alloy_t1',
			T: '#forge:gears/desh'
		}
	).id('gtceu:shaped/large_solar_panel_tier2')

	event.shaped(
		'gtceu:large_solar_panel_tier3',
		['WSW', 'TZT', 'WUW'],
		{
			S: 'ad_astra:photovoltaic_vesnium_cell',
			Z: 'gtceu:large_solar_panel_tier2',
			W: '#gtceu:circuits/luv',
			U: '#forge:gears/rocket_alloy_t1',
			T: '#forge:gears/desh'
		}
	).id('gtceu:shaped/large_solar_panel_tier3')

	event.recipes.gtceu.chemical_reactor('advanced_photovoltaic_cell')
		.itemInputs('8x tfg:photo_cell_t1',
			'6x #forge:dusts/vanadium_gallium',
			'#forge:insulation_t2/sheet')
		.inputFluids(Fluid.of('gtceu:helium_3', 1000))
		.itemOutputs('8x ad_astra:photovoltaic_etrium_cell')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.chemical_reactor('expert_photovoltaic_cell')
		.itemInputs('8x ad_astra:photovoltaic_etrium_cell',
			'6x gtceu:energium_dust',
			'#forge:insulation_t3/sheet')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 1000))
		.itemOutputs('8x ad_astra:photovoltaic_vesnium_cell')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.IV])

	//#region Chemical Reaction for Solar Panel

	event.recipes.gtceu.chemical_reactor('tfg:chlorine_pentafluoride')
		.inputFluids(Fluid.of('gtceu:fluorine', 5000), Fluid.of('gtceu:chlorine', 1000))
		.outputFluids(Fluid.of('tfg:chlorine_pentafluoride', 1000))
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('tfg:chloryl_fluoride')
		.inputFluids(Fluid.of('tfg:chlorine_pentafluoride', 1000), Fluid.of('minecraft:water', 2000))
		.outputFluids(Fluid.of('tfg:chloryl_fluoride', 1000), Fluid.of('gtceu:hydrofluoric_acid', 4000))
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.large_chemical_reactor('tfg:solar_coolant')
		.inputFluids(Fluid.of('tfg:chloryl_fluoride', 3000), Fluid.of('gtceu:helium_3', 8000), Fluid.of('minecraft:water', 8000))
		.outputFluids(Fluid.of('tfg:solar_coolant', 1000), Fluid.of('gtceu:hydrofluoric_acid', 3000), Fluid.of('gtceu:hypochlorous_acid', 3000))
		.duration(20 * 5)
		.EUt(GTValues.VH[GTValues.EV])

	event.recipes.gtceu.large_chemical_reactor('tfg:solar_coolant_t2')
		.inputFluids(Fluid.of('tfg:solar_coolant', 8000), Fluid.of('gtceu:argon', 1000))
		.itemInputs(Item.of('#forge:aerogels'))
		.outputFluids(Fluid.of('tfg:solar_coolant_tier2', 8000))
		.duration(20 * 15)
		.EUt(GTValues.VH[GTValues.IV])

	//#endregion

	// LSP Generating recipes

	// Solar T1

	event.recipes.gtceu.large_solar_panel('solar_panel_t1_emergency')
		.chancedInput('tfg:photo_cell_t1', 100, 0)
		.duration(20 * 20)
		.daytime(false)
		.dimension('ad_astra:moon')
		.EUt(-((GTValues.V[GTValues.HV])), 2)
		.circuit(1)

	event.recipes.gtceu.large_solar_panel('solar_panel_t1')
		.notConsumable('tfg:photo_cell_t1')
		.perTick(true)
		.chancedFluidInput('tfg:compressed_trimix_3 4', 5000, 0)
		.perTick(false)
		.duration(20 * 20)
		.daytime(false)
		.dimension('ad_astra:moon')
		.EUt(-(GTValues.V[GTValues.EV]), 2)
		.circuit(2)

	// Solar T2

	event.recipes.gtceu.large_solar_panel_tier2('solar_panel_t2_emergency')
		.chancedInput('ad_astra:photovoltaic_etrium_cell', 100, 0)
		.duration(20 * 20)
		.daytime(false)
		.dimension('ad_astra:moon')
		.EUt(-(GTValues.V[GTValues.EV]), 2)
		.circuit(1)

	event.recipes.gtceu.large_solar_panel_tier2('solar_panel_t2_strong')
		.notConsumable('ad_astra:photovoltaic_etrium_cell')
		.perTick(true)
		.chancedFluidInput('tfg:solar_coolant 10', 5000, 0)
		.inputFluids('tfg:cryogenized_fluix 4')
		.outputFluids('tfg:fluix 1')
		.perTick(false)
		.duration(20 * 20)
		.daytime(false)
		.dimension('ad_astra:moon')
		.EUt(-(GTValues.V[GTValues.IV]), 2)
		.circuit(2)

	event.recipes.gtceu.large_solar_panel_tier2('solar_panel_t2_cheap')
		.notConsumable('ad_astra:photovoltaic_etrium_cell')
		.perTick(true)
		.inputFluids('tfg:compressed_trimix_3 1')
		.perTick(false)
		.duration(20 * 20)
		.daytime(false)
		.dimension('ad_astra:moon')
		.EUt(-(GTValues.V[GTValues.EV]), 2)
		.circuit(3)

	// Solar T3

	event.recipes.gtceu.large_solar_panel_tier3('solar_panel_t3_emergency')
		.chancedInput('ad_astra:photovoltaic_vesnium_cell', 100, 0)
		.duration(20 * 20)
		.daytime(false)
		.dimension('ad_astra:moon')
		.EUt(-(GTValues.V[GTValues.IV]), 2)
		.circuit(1)

	event.recipes.gtceu.large_solar_panel_tier3('solar_panel_t3_strong')
		.notConsumable('ad_astra:photovoltaic_vesnium_cell')
		.perTick(true)
		.chancedFluidInput('tfg:solar_coolant_tier2 10', 5000, 0)
		.inputFluids('tfg:cryogenized_fluix 4')
		.outputFluids('tfg:fluix 1')
		.perTick(false)
		.duration(20 * 20)
		.daytime(false)
		.dimension('ad_astra:moon')
		.EUt(-(GTValues.V[GTValues.LuV]), 2)
		.circuit(2)

	event.recipes.gtceu.large_solar_panel_tier3('solar_panel_t3_cheap')
		.notConsumable('ad_astra:photovoltaic_vesnium_cell')
		.perTick(true)
		.chancedFluidInput('tfg:solar_coolant 10', 5000, 0)
		.inputFluids('tfg:cryogenized_fluix 4')
		.outputFluids('tfg:fluix 1')
		.perTick(false)
		.duration(20 * 20)
		.daytime(false)
		.dimension('ad_astra:moon')
		.EUt(-(GTValues.V[GTValues.IV]), 2)
		.circuit(2)

	//#endregion
}