// priority: 0
"use strict";

function registerTFGPlatlineRecipes(event) {

	//#region Pyrometallurgy

	const RICH_PGM_ORES = ['irarsite', 'ruarsite', 'ferhodsite'];

	RICH_PGM_ORES.forEach(ore => {
		event.recipes.gtceu.electric_blast_furnace(`tfg:pgm_calcine_from_${ore}`)
			.itemInputs(Item.of(`gtceu:${ore}_dust`, 1))
			.inputFluids(Fluid.of('gtceu:oxygen', 1000))
			.itemOutputs(Item.of('tfg:pgm_calcine_dust', 1), Item.of('gtceu:arsenic_trioxide_dust', 2))
			.outputFluids(Fluid.of('gtceu:sulfur_dioxide', 1000))
			.duration(20 * 30)
			.blastFurnaceTemp(1700)
			.EUt(GTValues.VA[GTValues.HV])
	})
    /*
    const POOR_PGM_ORES = [''];

	POOR_PGM_ORES.forEach(ore => {
		event.recipes.gtceu.electric_blast_furnace(`tfg:pgm_calcine_from_${ore}`)
			.itemInputs(Item.of(`gtceu:${ore}_dust`, 1))
			.inputFluids(Fluid.of('gtceu:oxygen', 1000))
			.itemOutputs(Item.of('tfg:pgm_calcine_dust', 1), Item.of('gtceu:arsenic_trioxide_dust', 2))
			.outputFluids(Fluid.of('gtceu:sulfur_dioxide', 1000))
			.duration(20 * 30)
			.blastFurnaceTemp(1700)
			.EUt(GTValues.VA[GTValues.HV])
	})
    */

	event.recipes.gtceu.chemical_reactor('tfg:pgm_converter_matte')
		.itemInputs(Item.of('tfg:pgm_calcine_dust', 2), Item.of('gtceu:silicon_dioxide_dust', 6))
		.inputFluids(Fluid.of('gtceu:oxygen', 1000))
		.itemOutputs(Item.of('tfg:flawed_pgm_converter_matte_gem', 1), Item.of('tfg:flawed_fayalite_slag_gem', 2))
		.duration(20 * 24)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.vacuum_freezer('tfg:pgm_crystallized_matte')
		.itemInputs(Item.of('tfg:flawed_pgm_converter_matte_gem', 1))
		.itemOutputs(Item.of('tfg:flawed_pgm_crystallized_matte_gem', 2))
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.chemical_bath('tfg:pgm_crystallized_matte_from_liquid_air')
		.itemInputs(Item.of('tfg:flawed_pgm_converter_matte_gem', 1))
		.inputFluids(Fluid.of('gtceu:liquid_air', 100))
		.itemOutputs(Item.of('tfg:flawed_pgm_crystallized_matte_gem', 2))
		.duration(20 * 80)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.electromagnetic_separator('tfg:pgm_magnetic_fraction')
		.itemInputs(Item.of('tfg:flawed_pgm_crystallized_matte_gem', 1))
		.itemOutputs(Item.of('tfg:pgm_magnetic_fraction_dust', 1), Item.of('tfg:cu_ni_sulfide_fraction_dust', 1))
		.duration(20 * 12)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.electric_blast_furnace('tfg:cu_ni_sulfide_fraction_smelting')
		.itemInputs(Item.of('tfg:cu_ni_sulfide_fraction_dust', 5))
		.inputFluids(Fluid.of('gtceu:oxygen', 1000))
		.itemOutputs(Item.of('gtceu:copper_dust', 2), Item.of('gtceu:nickel_dust', 2), Item.of('gtceu:cobalt_dust', 1))
		.outputFluids(Fluid.of('gtceu:sulfur_dioxide', 1000))
		.duration(20 * 36)
		.blastFurnaceTemp(1700)
		.EUt(GTValues.VA[GTValues.HV])

	//#endregion

	//#region Ferrous Loop

	event.recipes.gtceu.large_chemical_reactor('tfg:ferrous_sulfate_from_sulfuric_acid')
		.itemInputs(Item.of('tfg:flawed_fayalite_slag_gem', 1))
		.inputFluids(Fluid.of('gtceu:sulfuric_acid', 1000))
		.itemOutputs(Item.of('tfg:ferrous_sulfate_dust', 6), Item.of('gtceu:silicon_dioxide_dust', 3))
		.outputFluids(Fluid.of('minecraft:water', 1000))
		.duration(20 * 20)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.large_chemical_reactor('tfg:pgm_cementation')
		.itemInputs(Item.of('tfg:flawed_fayalite_slag_gem', 1))
		.inputFluids(Fluid.of('tfg:spent_pgm_liquor', 1000))
		.itemOutputs(Item.of('tfg:ferrous_sulfate_dust', 12), Item.of('tfg:pgm_cement', 1), Item.of('gtceu:silicon_dioxide_dust', 3))
		.outputFluids(Fluid.of('tfg:barren_liquor', 1000))
		.duration(20 * 20)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.electrolyzer('tfg:fayalite_slag_electrolysis')
		.itemInputs(Item.of('tfg:flawed_fayalite_slag_gem', 1))
		.itemOutputs(Item.of('gtceu:iron_dust', 2), Item.of('gtceu:silicon_dioxide_dust', 3))
		.outputFluids(Fluid.of('gtceu:oxygen', 2000))
		.duration(20 * 14)
		.EUt(GTValues.VA[GTValues.MV])

	//#endregion

	//#region Se-Te Effluent

	event.recipes.gtceu.chemical_reactor('tfg:selenium_from_barren_liquor')
		.inputFluids(Fluid.of('tfg:barren_liquor', 12000))
		.itemOutputs(Item.of('gtceu:selenium_dust', 1))
		.outputFluids(Fluid.of('tfg:tellurium_bearing_liquor', 1000))
		.duration(20 * 40)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('tfg:tellurium_from_tellurium_bearing_liquor')
		.inputFluids(Fluid.of('tfg:tellurium_bearing_liquor', 1000))
		.itemOutputs(Item.of('gtceu:tellurium_dust', 1))
		.outputFluids(Fluid.of('tfg:metal_bearing_liquor', 1000))
		.duration(20 * 40)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('tfg:neutral_effluent')
		.itemInputs(Item.of('gtceu:quicklime_dust', 2))
		.inputFluids(Fluid.of('tfg:metal_bearing_liquor', 1000))
		.itemOutputs(Item.of('tfg:flawed_heavy_metal_sludge_gem', 1))
		.outputFluids(Fluid.of('tfg:neutral_effluent', 3000))
		.duration(20 * 24)
		.EUt(GTValues.VA[GTValues.HV])

	//#endregion

	//#region Metal Refinery

	event.recipes.gtceu.large_chemical_reactor('tfg:pgm_chloride_solution')
		.itemInputs(Item.of('tfg:pgm_magnetic_fraction_dust', 3))
		.inputFluids(Fluid.of('gtceu:aqua_regia', 3000))
		.outputFluids(Fluid.of('tfg:pgm_chloride_solution', 3000), Fluid.of('gtceu:nitrogen_dioxide', 1000))
		.duration(20 * 30)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.large_chemical_reactor('tfg:pgm_chloride_solution_with_cement')
		.itemInputs(Item.of('tfg:pgm_magnetic_fraction_dust', 3), Item.of('tfg:pgm_cement', 1))
		.inputFluids(Fluid.of('gtceu:aqua_regia', 3000))
		.itemOutputs(Item.of('tfg:pgm_residue_dust', 1))
		.outputFluids(Fluid.of('tfg:pgm_chloride_solution', 3000), Fluid.of('gtceu:nitrogen_dioxide', 1000))
		.duration(20 * 30)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('tfg:gold_from_pgm_chloride_solution')
		.itemInputs(Item.of('tfg:ferrous_sulfate_dust', 12))
		.inputFluids(Fluid.of('tfg:pgm_chloride_solution', 5000))
		.itemOutputs(Item.of('gtceu:gold_dust', 2))
		.outputFluids(Fluid.of('tfg:pt_pd_solution', 1000))
		.duration(20 * 24)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('tfg:ammonium_hexachloroplatinate')
		.itemInputs(Item.of('gtceu:ammonium_chloride_dust', 6))
		.inputFluids(Fluid.of('tfg:pt_pd_solution', 1000))
		.itemOutputs(Item.of('tfg:ammonium_hexachloroplatinate_dust', 3))
		.outputFluids(Fluid.of('tfg:palladium_solution', 1000))
		.duration(20 * 24)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.cracker('tfg:platinum_from_ammonium_hexachloroplatinate')
		.itemInputs(Item.of('tfg:ammonium_hexachloroplatinate_dust', 9))
		.itemOutputs(Item.of('gtceu:platinum_dust', 3), Item.of('gtceu:ammonium_chloride_dust', 12))
		.outputFluids(Fluid.of('gtceu:hydrochloric_acid', 11000))
		.duration(20 * 36)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('tfg:palladium_from_palladium_solution')
		.inputFluids(Fluid.of('tfg:palladium_solution', 3000), Fluid.of('gtceu:hydrochloric_acid', 1000))
		.itemOutputs(Item.of('gtceu:palladium_dust', 1), Item.of('gtceu:ammonium_chloride_dust', 6))
		.outputFluids(Fluid.of('tfg:spent_pgm_liquor', 3000))
		.duration(20 * 30)
		.EUt(GTValues.VA[GTValues.HV])

	//#endregion

	//#region Oxidative Roasting

	event.recipes.gtceu.electric_blast_furnace('tfg:osmiridium_residue')
		.itemInputs(Item.of('tfg:pgm_residue_dust', 4))
		.inputFluids(Fluid.of('tfg:neutral_effluent', 1000))
		.itemOutputs(Item.of('tfg:osmiridium_residue_dust', 1), Item.of('gtceu:salt_dust', 2))
		.outputFluids(Fluid.of('tfg:roasting_off_gas', 1000))
		.duration(20 * 60)
		.blastFurnaceTemp(3600)
		.EUt(GTValues.VA[GTValues.IV])

	event.recipes.gtceu.distillation_tower('tfg:ruthenium_tetroxide_from_roasting_off_gas')
		.inputFluids(Fluid.of('tfg:roasting_off_gas', 4000))
		.itemOutputs(Item.of('gtceu:ruthenium_tetroxide_dust', 5))
		.outputFluids(Fluid.of('gtceu:sulfur_dioxide', 1000))
		.duration(20 * 40)
		.EUt(GTValues.VA[GTValues.IV])

	event.recipes.gtceu.chemical_reactor('tfg:sodium_ruthenate')
		.itemInputs(Item.of('gtceu:ruthenium_tetroxide_dust', 5), Item.of('gtceu:sodium_hydroxide_dust', 6))
		.itemOutputs(Item.of('tfg:sodium_ruthenate_dust', 7))
		.duration(20 * 24)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.chemical_reactor('tfg:ruthenium_from_sodium_ruthenate')
		.itemInputs(Item.of('tfg:sodium_ruthenate_dust', 7))
		.inputFluids(Fluid.of('gtceu:hydrogen', 4000))
		.itemOutputs(Item.of('gtceu:ruthenium_dust', 1), Item.of('tfg:spent_sodium_hydroxide_dust', 6))
		.duration(20 * 30)
		.EUt(GTValues.VA[GTValues.EV])

	//#endregion

	//#region Alkaline Fusion

	event.recipes.gtceu.electric_blast_furnace('tfg:fused_pgm_mass')
		.itemInputs(Item.of('tfg:osmiridium_residue_dust', 8), Item.of('gtceu:sodium_hydroxide_dust', 12), Item.of('tfg:sodium_bromate_dust', 20))
		.inputFluids(Fluid.of('gtceu:oxygen', 1000))
		.itemOutputs(Item.of('tfg:flawed_fused_pgm_mass_gem', 1), Item.of('tfg:sodium_bromide_dust', 8))
		.duration(20 * 90)
		.blastFurnaceTemp(5000)
		.EUt(GTValues.VA[GTValues.LuV])

	event.recipes.gtceu.chemical_reactor('tfg:sodium_bromate_from_sodium_bromide')
		.itemInputs(Item.of('tfg:sodium_bromide_dust', 2))
		.inputFluids(Fluid.of('minecraft:water', 3000))
		.itemOutputs(Item.of('tfg:sodium_bromate_dust', 5))
		.outputFluids(Fluid.of('gtceu:hydrogen', 6000))
		.duration(20 * 24)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.evaporation_tower('tfg:osmium_tetroxide_from_fused_pgm_mass')
		.itemInputs(Item.of('tfg:flawed_fused_pgm_mass_gem', 1))
		.inputFluids(Fluid.of('gtceu:chlorine', 8000))
		.itemOutputs(Item.of('gtceu:osmium_tetroxide_dust', 5))
		.outputFluids(Fluid.of('tfg:ir_rh_solution', 8000))
		.duration(20 * 60)
		.EUt(GTValues.VA[GTValues.IV])

	event.recipes.gtceu.chemical_reactor('tfg:osmium_from_osmium_tetroxide')
		.itemInputs(Item.of('gtceu:osmium_tetroxide_dust', 5), Item.of('tfg:spent_sodium_hydroxide_dust', 12))
		.inputFluids(Fluid.of('gtceu:hydrogen', 8000))
		.itemOutputs(Item.of('gtceu:osmium_dust', 1), Item.of('gtceu:sodium_hydroxide_dust', 12))
		.duration(20 * 40)
		.EUt(GTValues.VA[GTValues.LuV])

	event.recipes.gtceu.chemical_reactor('tfg:ammonium_hexachloroiridate')
		.itemInputs(Item.of('gtceu:ammonium_chloride_dust', 6))
		.inputFluids(Fluid.of('tfg:ir_rh_solution', 8000))
		.itemOutputs(Item.of('tfg:ammonium_hexachloroiridate_dust', 3))
		.outputFluids(Fluid.of('tfg:rhodium_solution', 8000))
		.duration(20 * 40)
		.EUt(GTValues.VA[GTValues.LuV])

	event.recipes.gtceu.cracker('tfg:iridium_from_ammonium_hexachloroiridate')
		.itemInputs(Item.of('tfg:ammonium_hexachloroiridate_dust', 3))
		.itemOutputs(Item.of('gtceu:iridium_dust', 1), Item.of('gtceu:ammonium_chloride_dust', 6))
		.duration(20 * 48)
		.EUt(GTValues.VA[GTValues.IV])

	event.recipes.gtceu.chemical_reactor('tfg:rhodium_salt')
		.itemInputs(Item.of('tfg:ferrous_sulfate_dust', 12))
		.inputFluids(Fluid.of('tfg:rhodium_solution', 1000))
		.itemOutputs(Item.of('tfg:rhodium_salt_dust', 1))
		.outputFluids(Fluid.of('tfg:spent_pgm_liquor', 1000))
		.duration(20 * 24)
		.EUt(GTValues.VA[GTValues.IV])

	event.recipes.gtceu.chemical_reactor('tfg:rhodium_from_rhodium_salt')
		.itemInputs(Item.of('tfg:rhodium_salt_dust', 4), Item.of('tfg:sodium_hydride_dust', 4))
		.itemOutputs(Item.of('gtceu:rhodium_dust', 1))
		.duration(20 * 40)
		.EUt(GTValues.VA[GTValues.IV])

	//#endregion

}