// priority: 0

function registerTFGSpaceOres(event) {

	//#region Moon Harvester

	event.recipes.gtceu.moon_dust_harvester('tfg:lunar_assurine_harvester')
		.biome('tfg:moon/lunar_asurine_dense')
		.itemOutputsRanged('#forge:dusts/certus_regolith', 1, 5)
		.duration(20 * 80)
		.EUt(GTValues.VA[GTValues.LV])
		.circuit(1)

	event.recipes.gtceu.moon_dust_harvester('tfg:lunar_chorus_dense')
		.biome('tfg:moon/lunar_chorus_dense')
		.itemOutputsRanged('#forge:dusts/goethe_regolith', 1, 5)
		.duration(20 * 80)
		.EUt(GTValues.VA[GTValues.LV])
		.circuit(2)

	event.recipes.gtceu.moon_dust_harvester('tfg:lunar_corals_dense')
		.biome('tfg:moon/lunar_corals_dense')
		.itemOutputsRanged('#forge:dusts/bright_regolith', 1, 5)
		.duration(20 * 80)
		.EUt(GTValues.VA[GTValues.LV])
		.circuit(3)

	event.recipes.gtceu.moon_dust_harvester('tfg:lunar_lights_dense')
		.biome('tfg:moon/lunar_lights_dense')
		.itemOutputsRanged('#forge:dusts/cassiterite_regolith', 1, 5)
		.duration(20 * 80)
		.EUt(GTValues.VA[GTValues.LV])
		.circuit(4)

	//#endregion

	//#region Regolith Vapor Processing

	event.recipes.gtceu.mixer('tfg:regolith_slurry_suspension')
		.itemInputs('ad_astra:moon_sand', 'tfg:dry_ice')
		.itemOutputs('#forge:dusts/regolith_mush')
		.dimension('ad_astra:moon')
		.duration(20 * 60)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.chemical_bath('tfg:regolith_vapor')
		.itemInputs('#forge:dusts/regolith_mush')
		.inputFluids('gtceu:nitrogen 1000')
		.itemOutputs('#forge:dusts/silicon_dioxide')
		.outputFluids('gtceu:regolith_vapor 1000')
		.dimension('ad_astra:moon')
		.duration(20 * 28)
		.EUt(GTValues.VHA[GTValues.LV])

	//#endregion

	//#region Making Dusty Ores

	const $ChanceLogic = Java.loadClass('com.gregtechceu.gtceu.api.recipe.chance.logic.ChanceLogic')

	event.recipes.gtceu.chemical_reactor('tfg:dusty_certus_reactor')
		.itemInputs('#forge:dusts/certus_regolith')
		.inputFluids('gtceu:regolith_vapor 100')
		.itemOutputs('gtceu:dusty_raw_certus_quartz')
		.dimension('ad_astra:moon')
		.duration(20 * 68)
		.EUt(GTValues.VHA[GTValues.ULV])

	event.recipes.gtceu.chemical_reactor('tfg:dusty_goethite_reactor')
		.itemInputs('#forge:dusts/goethe_regolith')
		.inputFluids('gtceu:regolith_vapor 100')
		.itemOutputs('gtceu:dusty_raw_goethite')
		.dimension('ad_astra:moon')
		.duration(20 * 68)
		.EUt(GTValues.VHA[GTValues.ULV])

	event.recipes.gtceu.chemical_reactor('tfg:dusty_shiny_reactor')
		.itemInputs('#forge:dusts/bright_regolith')
		.inputFluids('gtceu:regolith_vapor 100')
		.chancedItemOutputLogic($ChanceLogic.XOR)
		.chancedOutput('gtceu:dusty_raw_diamond', 2000, 0)
		.chancedOutput('gtceu:dusty_raw_gold', 8000, 0)
		.dimension('ad_astra:moon')
		.duration(20 * 68)
		.EUt(GTValues.VHA[GTValues.ULV])

	event.recipes.gtceu.chemical_reactor('tfg:dusty_cassiterite_reactor')
		.itemInputs('#forge:dusts/cassiterite_regolith')
		.inputFluids('gtceu:regolith_vapor 100')
		.itemOutputs('gtceu:dusty_raw_cassiterite')
		.dimension('ad_astra:moon')
		.duration(20 * 68)
		.EUt(GTValues.VHA[GTValues.ULV])

	//#endregion

	//#region Basic dusty ore centrifuging

	// These have special recipes
	const DUSTY_ORE_EXCEPTIONS = [
		GTMaterials.Goethite,
		GTMaterials.Cassiterite,
		GTMaterials.Bauxite
	]

	// Otherwise everything else just centrifuges into its dust version
	forEachMaterial(material => {
		if (DUSTY_ORE_EXCEPTIONS.indexOf(material) >= 0)
			return;

		const dustyOre = ChemicalHelper.get(TFGTagPrefix.dustyRawOre, material, 1)
		const dust = ChemicalHelper.get(TagPrefix.dust, material, 1)

		if (dustyOre !== null && dust !== null) {
			event.recipes.gtceu.centrifuge(`tfg:dusty_to_dust_${material.getName()}`)
				.itemInputs(dustyOre)
				.itemOutputs(dust)
				.duration(20 * 45)
				.EUt(GTValues.VA[GTValues.MV])
		}
	})

	event.recipes.gtceu.centrifuge('tfg:dusty_to_dust_goethite')
		.itemInputs('#forge:dusty_raw_materials/goethite')
		.chancedItemOutputLogic($ChanceLogic.XOR)
		.chancedOutput('#forge:dusts/iron', 5000, 0)
		.chancedOutput('#forge:dusts/copper', 5000, 0)
		.duration(20 * 45)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.centrifuge('tfg:dusty_to_dust_bauxite')
		.itemInputs('#forge:dusty_raw_materials/bauxite')
		.itemOutputs('#forge:dusts/aluminium')
		.duration(20 * 45)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.centrifuge('tfg:dusty_to_dust_tin')
		.itemInputs('#forge:dusty_raw_materials/cassiterite')
		.itemOutputs('#forge:dusts/tin')
		.duration(20 * 45)
		.EUt(GTValues.VA[GTValues.MV])

	//#region Mars Ores Line

	// Ostrum Harvester

	event.recipes.gtceu.ostrum_harvester(`tfg:ostrum_harvesting`)
		.perTick(true)
		.inputFluids('gtceu:drilling_fluid 4')
		.perTick(false)
		.dimension('ad_astra:mars')
		.itemOutputsRanged('gtceu:ostrum_dust', 1, 5)
		.duration(20 * 30)
		.EUt(GTValues.VA[GTValues.LV]);

	// #region Zirconium

	event.recipes.gtceu.chemical_reactor('tfg:silicon_tetrachloride')
		.itemInputs('#forge:dusts/silicon')
		.inputFluids('gtceu:chlorine 4000')
		.outputFluids('tfg:silicon_tetrachloride 1000')
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.chemical_reactor('tfg:silicon_tetrachloride_decomp')
		.inputFluids('tfg:silicon_tetrachloride 1000', 'minecraft:water 2000')
		.itemOutputs('#forge:dusts/silicon')
		.outputFluids('gtceu:hydrochloric_acid 4000', 'gtceu:oxygen 2000')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.chemical_reactor('tfg:zirconium_tetrachloride')
		.itemInputs('4x #forge:dusts/carbon', '6x #forge:dusts/zircon')
		.inputFluids('gtceu:chlorine 8000')
		.outputFluids('gtceu:carbon_monoxide 4000', 'tfg:silicon_tetrachloride 1000')
		.itemOutputs('5x #forge:dusts/zirconium_tetrachloride')
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.electric_blast_furnace('tfg:zirconium')
		.itemInputs('2x #forge:dusts/magnesium', '5x #forge:dusts/zirconium_tetrachloride')
		.itemOutputs('#forge:hot_ingots/zirconium', '6x #forge:dusts/magnesium_chloride')
		.duration(55 * 20)
		.blastFurnaceTemp(4241)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.chemical_reactor('tfg:zirconium_bromide')
		.itemInputs('#forge:dusts/zirconium', '2x #forge:dusts/carbon')
		.inputFluids('gtceu:bromine 4000', 'gtceu:oxygen 2000')
		.itemOutputs('5x #forge:dusts/zirconium_bromide')
		.outputFluids('gtceu:carbon_monoxide 2000')
		.duration(10 * 20)
		.EUt(GTValues.VA[GTValues.IV])

	event.recipes.gtceu.chemical_reactor('tfg:zirconium_diboride')
		.itemInputs('10x #forge:dusts/zirconium_bromide', '5x #forge:dusts/boron_carbide')
		.notConsumable('#forge:dusts/carbon')
		.itemOutputs('6x #forge:dusts/zirconium_diboride', '#forge:dusts/carbon')
		.outputFluids('gtceu:bromine 8000')
		.duration(10 * 20)
		.EUt(GTValues.VA[GTValues.IV])

	event.recipes.gtceu.chemical_reactor('tfg:boron_carbide')
		.itemInputs('4x #forge:dusts/boron', '7x #forge:dusts/carbon')
		.inputFluids('gtceu:oxygen 6000')
		.itemOutputs('5x #forge:dusts/boron_carbide')
		.outputFluids('gtceu:carbon_monoxide 6000')
		.duration(10 * 20)
		.EUt(GTValues.VA[GTValues.HV])

	// #endregion
}