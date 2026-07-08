// priority: 0

function registerTFGGarnetSandLine(event) {

    event.recipes.gtceu.arc_furnace('tfg:residual_slag_dust')
            .inputFluids(Fluid.of('gtceu:oxygen', 100))
            .itemOutputs(Item.of('tfg:residual_slag_dust', 1))
            .duration(3 * 20)
            .circuit(18)
            .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.canner('test_dupe')
        .itemInputs(Item.of('tfc:raw_sandstone/red_stairs'))
        .inputFluids(Fluid.of('tfg:bw_photographic_developer', 1000))
        .itemOutputs(Item.of('tfc:alabaster/polished/yellow'))
        .duration(20)
        .EUt(4)

}