// priority: 0

function registerTFGZirconiumRecipes(event) {

	// #region Zirconium

	event.recipes.gtceu.chemical_reactor('tfg:silicon_tetrachloride')
		.itemInputs('#forge:dusts/silicon')
		.inputFluids('gtceu:chlorine 4000')
		.outputFluids('tfg:silicon_tetrachloride 1000')
		.duration(20 * 20)
		.circuit(1)
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
