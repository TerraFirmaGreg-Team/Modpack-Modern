function registerTFGPowerGenBalance(event) {

	//#region Buff fuels

	event.remove({ id: 'gtceu:combustion_generator/cetane_diesel' })
	event.recipes.gtceu.combustion_generator('tfg:cetane_boosted_diesel')
		.inputFluids(Fluid.of('gtceu:cetane_boosted_diesel', 1))
		.duration(20*1.6)
		.EUt(-32)
        .dimension('minecraft:overworld')
		.dimension('minecraft:the_nether')

    //#endregion

    //#region Nerf/Removed
/* COMMENT OUT UNTIL WE WANT TO ENABLE THE NERF
	event.remove({ id: 'gtceu:gas_turbine/benzene' })
	event.recipes.gtceu.gas_turbine('tfg:benzene')
		.inputFluids(Fluid.of('gtceu:benzene', 1))
		.duration(20*0.2)
		.EUt(-32)
        .dimension('minecraft:overworld')
		.dimension('minecraft:the_nether')

	event.remove({ id: 'gtceu:gas_turbine/nitrobenzene' })
	event.recipes.gtceu.gas_turbine('tfg:nitrobenzene')
		.inputFluids(Fluid.of('gtceu:nitrobenzene', 1))
		.duration(20*0.5)
		.EUt(-32)
        .dimension('minecraft:overworld')
		.dimension('minecraft:the_nether')

	event.remove({ id: 'gtceu:combustion_generator/sulfuric_light_fuel' })
    event.remove({ id: 'gtceu:combustion_generator/light_fuel' })
*/

    // Switch HOG to require IV Energy Hatch and Diesel available at LV

	event.remove({ id: 'gtceu:combustion_generator/diesel' })
	event.recipes.gtceu.combustion_generator('tfg:diesel')
		.inputFluids(Fluid.of('gtceu:diesel', 1))
		.duration(20*0.6)
		.EUt(-32)
        .dimension('minecraft:overworld')
		.dimension('minecraft:the_nether')

	event.remove({ id: 'gtceu:large_chemical_reactor/high_octane_gasoline' })
	event.recipes.gtceu.large_chemical_reactor('tfg:high_octane_gasoline')
		.inputFluids(
            Fluid.of('gtceu:gasoline', 20000),
            Fluid.of('gtceu:octane', 2000),
            Fluid.of('gtceu:nitrous_oxide', 2000),
            Fluid.of('gtceu:toluene', 1000),
            Fluid.of('gtceu:ethyl_tertbutyl_ether', 1000))
        .outputFluids(Fluid.of('gtceu:high_octane_gasoline', 32000))
		.duration(20*1.5)
		.EUt(GTValues.VA[GTValues.LuV])
        .circuit(24)

}