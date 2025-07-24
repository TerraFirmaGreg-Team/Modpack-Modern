// priority: 0

function registerTFGNuclearRecipes(event) {

	//#region Nuclear Pellet

	event.recipes.gtceu.nuclear_fuel_factory('gtceu:thorium_pellet')
		//.circuit(4)
		//.inputFluids(Fluid.of('minecraft:water', 50))
		.itemInputs('1x #forge:ingots/thorium_230', '8x #forge:ingots/thorium_232')
		.itemOutputs('#forge:ingots/thorium_pellet')
		.duration(20*30)
		.EUt(GTValues.V[GTValues.HV])

	event.recipes.gtceu.nuclear_fuel_factory('gtceu:uranium_pellet')
		.inputFluids(Fluid.of('gtceu:uranium_waste', 1000))
		.itemInputs('#forge:ingots/uranium_235', '8x #forge:ingots/uranium')
		.itemOutputs('#forge:ingots/uranium_pellet')
		.duration(20*30)
		.EUt(GTValues.V[GTValues.HV])

	event.recipes.gtceu.nuclear_fuel_factory('gtceu:plutonium_pellet')
		//.inputFluids(Fluid.of('minecraft:water', 50))
		.itemInputs('#forge:ingots/plutonium_241', '8x #forge:ingots/plutonium')
		.itemOutputs('#forge:ingots/plutonium_pellet')
		.duration(20*30)
		.EUt(GTValues.V[GTValues.EV])

	//#endregion

	//#region Processing Fuels

	event.recipes.gtceu.centrifuge('thorium_isotope')
		//.inputFluids(Fluid.of('minecraft:water', 50))
		.itemInputs('9x #forge:dusts/thorium')
		.chancedOutput('#forge:dusts/thorium_230', 1000, 0)
		.itemOutputs('8x #forge:dusts/thorium_232')
		.duration(20*30)
		.EUt(GTValues.VA[GTValues.HV])

	//#endregion

	//#region Mars Water

	event.recipes.gtceu.electrolyzer('mars_water')
		.inputFluids(Fluid.of('tfg:semiheavy_ammoniacal_water', 1000))
		.outputFluids(Fluid.of('gtceu:heavy_water', 500))
		.itemOutputs('#forge:dusts/ammonium_chloride', '2x #forge:small_dusts/ammonium_chloride')
		.duration(20*36)
		.EUt(GTValues.VA[GTValues.HV])

/*	event.recipes.gtceu.electric_blast_furnace('ammonium_chloryde')
		.itemInputs('#forge:dusts/ammonium_chloride')
		.outputFluids(Fluid.of('gtceu:hydrochloric_acid', 1000))
		.outputFluids(Fluid.of('gtceu:ammonia', 1000))
		.blastFurnaceTemp(4600)
		.duration(20*36)
		.EUt(GTValues.VA[GTValues.IV])*/

	// Martian Sludge

	event.recipes.gtceu.chemical_bath('dirty_hexafluorosilicic_acid')
		.itemInputs('64x #forge:dusts/mars_stone_dust')
		.itemInputs('64x #forge:dusts/mars_stone_dust')
		.inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 1000))
		.outputFluids(Fluid.of('gtceu:dirty_hexafluorosilicic_acid', 1000))
		.duration(20*48)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.centrifuge('martian_sludge')
		.inputFluids(Fluid.of('gtceu:dirty_hexafluorosilicic_acid', 1000))
		.outputFluids(Fluid.of('gtceu:martian_sludge', 1000))
		.outputFluids(Fluid.of('gtceu:hydrogen', 1000))
		.outputFluids(Fluid.of('gtceu:fluorine', 1000))
		.duration(20*48)
		.EUt(GTValues.VA[GTValues.IV])

	// Plutonium Process

	event.recipes.gtceu.gas_pressurizer('nuclear_residue')
		.inputFluids(Fluid.of('gtceu:martian_sludge', 1000))
		.inputFluids(Fluid.of('gtceu:formamide', 1000))
		.outputFluids(Fluid.of('gtceu:radon', 10))
		.itemOutputs('#forge:dusts/nuclear_residue')
		.duration(20*48)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.vacuum_freezer('oxidized_nuclear_residue')
		.itemInputs('#forge:dusts/nuclear_residue')
		.inputFluids(Fluid.of('gtceu:dioxygen_difluoride', 1000))
		.outputFluids(Fluid.of('minecraft:water', 10))
		.itemOutputs('#forge:dusts/oxidized_nuclear_residue')
		.duration(20*5)
		.EUt(GTValues.VA[GTValues.IV])

	event.recipes.gtceu.centrifuge('refined_nuclear_residue')
		.inputFluids(Fluid.of('gtceu:distilled_water', 1000))
		.itemInputs('#forge:dusts/oxidized_nuclear_residue')
		.itemOutputs('#forge:dusts/refined_nuclear_residue')
		.outputFluids(Fluid.of('gtceu:hydrofluoric_acid', 2000))
		.duration(20*48)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.large_chemical_reactor('dioxygen_difluoride')
		.inputFluids(Fluid.of('gtceu:oxygen', 2000))
		.inputFluids(Fluid.of('gtceu:fluorine', 2000))
		.outputFluids(Fluid.of('gtceu:dioxygen_difluoride', 1000))
		.duration(20*48)
		.EUt(GTValues.VA[GTValues.IV])

	event.recipes.gtceu.large_chemical_reactor('plutonium_dust')
		.itemInputs('#forge:dusts/refined_nuclear_residue')
		.inputFluids(Fluid.of('gtceu:hydrogen', 2000))
		.itemOutputs('#forge:dusts/plutonium')
		.outputFluids(Fluid.of('gtceu:steam', 1000))
		.duration(20*48)
		.EUt(GTValues.VA[GTValues.IV])

	//#endregion

	//#region Heat Exchanger

	event.recipes.gtceu.heat_exchanger('uranium_steam')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.inputFluids(Fluid.of('gtceu:radioactive_steam', 1000))
		.inputFluids(Fluid.of('gtceu:ammonium_formate', 1000))
		.outputFluids(Fluid.of('gtceu:dense_steam', 1000))
		.outputFluids(Fluid.of('gtceu:formamide', 1000))
		.duration(20*10)
		.EUt(1)

	event.recipes.gtceu.heat_exchanger('plutonium_steam')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.inputFluids(Fluid.of('gtceu:irradiated_steam', 1000))
		.outputFluids(Fluid.of('gtceu:dense_steam', 1000))
		.duration(20*10)
		.EUt(1)

	//#endregion

	//#region Fission Reactor

	event.recipes.gtceu.fission_reactor('thorium_uranium_waste')
		.itemInputs('#forge:bolts/thorium_pellet')
		.inputFluids(Fluid.of('minecraft:water', 100))
		.outputFluids(Fluid.of('gtceu:dense_steam', 100))
		.outputFluids(Fluid.of('gtceu:uranium_waste', 100))
		.duration(20*10)
		.EUt(32)

	event.recipes.gtceu.fission_reactor('thorium_nuclear_waste')
		.itemInputs('#forge:bolts/thorium_pellet')
		.inputFluids(Fluid.of('gtceu:distilled_water', 100))
		.outputFluids(Fluid.of('gtceu:dense_steam', 100))
		.outputFluids(Fluid.of('gtceu:nuclear_waste', 100))
		.duration(20*10)
		.EUt(32)

	event.recipes.gtceu.fission_reactor('uranium_radioactive')
		.itemInputs('#forge:bolts/uranium_pellet')
		.inputFluids(Fluid.of('gtceu:heavy_water', 100))
		.outputFluids(Fluid.of('gtceu:radioactive_steam', 100))
		.outputFluids(Fluid.of('gtceu:radioactive_waste', 100))
		.duration(20*10)
		.EUt(32)

	event.recipes.gtceu.fission_reactor('plutonium_irradiated')
		.itemInputs('#forge:bolts/plutonium_pellet')
		.inputFluids(Fluid.of('gtceu:heavy_water', 100))
		.outputFluids(Fluid.of('gtceu:irradiated_steam', 100))
		.outputFluids(Fluid.of('gtceu:tritiated_water', 100))
		.duration(20*10)
		.EUt(32)

	

}