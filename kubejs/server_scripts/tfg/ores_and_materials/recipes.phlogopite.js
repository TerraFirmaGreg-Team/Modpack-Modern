// priority: 0

function registerTFGPhlogopiteRecipes(event) {

	/*
	event.recipes.gtceu.chemical_reactor('tfg:')
		.itemInputs(Item.of(, 1))
		.inputFluids(Fluid.of(, 1))
		.outputFluids(Fluid.of(, 1))
		.itemOutputs(Item.of(, 1))
		.duration(37 * 20)
        .EUt(GTValues.VA[GTValues.MV])
	*/

	// Phlogopite

	event.recipes.gtceu.chemical_bath('tfg:hydrofluoric_acid_from_phlogopite_dust')
		.itemInputs(Item.of('gtceu:phlogopite_dust', 20))
		.inputFluids(Fluid.of('gtceu:sulfuric_acid', 4000))
		.outputFluids(Fluid.of('gtceu:hydrofluoric_acid', 4000))
		.itemOutputs(Item.of('gtceu:potassium_sulfate_dust', 7), Item.of('gtceu:silicon_dioxide_dust', 9))
		.duration(20 * 12)
		.EUt(GTValues.VA[GTValues.MV])

	//#region Molybdenum Line

	// Remove Recipe

	// Molybdenite Line

	event.recipes.gtceu.electric_blast_furnace('tfg:molybdenum_trioxide_dust_from_molybdenite_dust')
		.itemInputs(Item.of('gtceu:molybdenite_dust', 6))
		.inputFluids(Fluid.of('gtceu:oxygen', 14000))
		.outputFluids(Fluid.of('gtceu:sulfur_dioxide', 4000))
		.itemOutputs(Item.of('tfg:molybdenum_trioxide_dust', 8))
		.duration(32 * 20)
        .EUt(GTValues.VA[GTValues.MV])
        .blastFurnaceTemp(1070)

	event.recipes.gtceu.chemical_reactor('tfg:molybdenum_dust_from_molybdenum_trioxide_dust')
		.itemInputs(Item.of('tfg:molybdenum_trioxide_dust', 4))
		.inputFluids(Fluid.of('gtceu:hydrogen', 6000))
		.outputFluids(Fluid.of('minecraft:water', 3000))
		.itemOutputs(Item.of('gtceu:molybdenum_dust', 1))
		.duration(14 * 20)
        .EUt(GTValues.VA[GTValues.MV])

	// Powellite

	event.recipes.gtceu.chemical_reactor('tfg:molybdenum_trioxide_dust_from_powellite_dust')
		.itemInputs(Item.of('gtceu:powellite_dust', 6))
		.inputFluids(Fluid.of('gtceu:sulfuric_acid', 1000))
		.outputFluids(Fluid.of('minecraft:water', 1000))
		.itemOutputs(Item.of('tfg:calcium_sulfate_dust', 6), Item.of('tfg:molybdenum_trioxide_dust', 4))
		.duration(18 * 20)
        .EUt(GTValues.VA[GTValues.MV])

	// Wulfenite

	event.recipes.gtceu.chemical_reactor('tfg:sodium_molybdate_dust')
		.itemInputs(Item.of('gtceu:wulfenite_dust', 6), Item.of('gtceu:sodium_hydroxide_dust', 6))
		.itemOutputs(Item.of('tfg:lead_hydroxide_dust', 5), Item.of('tfg:sodium_molybdate_dust', 7))
		.duration(24 * 20)
        .EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.chemical_reactor('tfg:molybdenum_trioxide_dust_from_sodium_molybdate_dust')
		.itemInputs(Item.of('tfg:sodium_molybdate_dust', 7))
		.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 2000))
		.outputFluids(Fluid.of('minecraft:water', 1000))
		.itemOutputs(Item.of('gtceu:salt_dust', 4), Item.of('tfg:molybdenum_trioxide_dust', 4))
		.duration(16 * 20)
        .EUt(GTValues.VA[GTValues.MV])

}
