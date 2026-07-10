// priority: 0

function registerTFGGarnetSandLine(event) {

    /*
    event.recipes.gtceu.autoclave('tfg:')
            .itemInputs(Item.of(, ))
            .inputFluids(Fluid.of(, ))
            .itemOutputs(Item.of(, ))
            .outputFluids(Fluid.of(, ))
            .duration(20 * )
            .blastFurnaceTemp(1650)
            .circuit()
            .EUt(GTValues.VA[GTValues.MV])
    */

    // Step 1

    event.recipes.gtceu.autoclave('tfg:garnet_leach_liquor')
            .itemInputs(Item.of('gtceu:crushed_garnet_sand_ore'))
            .inputFluids(Fluid.of('gtceu:sulfuric_acid', 1000))
            .itemOutputs(Item.of('gtceu:gypsum_dust', 8), Item.of('gtceu:silicon_dioxide_dust', 3), Item.of('tfg:residual_slag_dust', 1))
            .outputFluids(Fluid.of('tfg:garnet_leach_liquor', 1000))
            .duration(20 * 30)
            .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.electric_blast_furnace('tfg:fusion_clinker_dust')
            .itemInputs(Item.of('tfg:residual_slag_dust', 1), Item.of('gtceu:soda_ash_dust', 6))
            .inputFluids(Fluid.of('gtceu:nitrogen', ))
            .itemOutputs(Item.of('tfg:fusion_clinker_dust', 1))
            .duration(20 * 42)
            .blastFurnaceTemp(1650)
            .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.autoclave('tfg:secondary_liquor')
            .itemInputs(Item.of('tfg:fusion_clinker_dust', 1))
            .inputFluids(Fluid.of('minecraft:water', 1000))
            .itemOutputs(Item.of('tfg:inert_slag_dust', 1))
            .outputFluids(Fluid.of('tfg:secondary_liquor', 1000))
            .duration(20 * 32)
            .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.mixer('tfg:enriched_garnet_leach_liquor')
            .inputFluids(Fluid.of('tfg:secondary_liquor', 1000), Fluid.of('tfg:garnet_leach_liquor', 1000))
            .outputFluids(Fluid.of('tfg:enriched_garnet_leach_liquor', 1000))
            .duration(20 * 28)
            .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('tfg:soda_ash_loop_sodium_aluminate_liquor')
            .inputFluids(Fluid.of('gtceu:carbon_dioxide', 1000), Fluid.of('tfg:sodium_aluminate_liquor', 1000))
            .itemOutputs(Item.of('tfg:aluminium_hydroxide_dust', 7), Item.of('gtceu:soda_ash_dust', 6))
            .duration(20 * 16)
            .EUt(GTValues.VA[GTValues.MV])

    // Step 2

    event.recipes.gtceu.chemical_reactor('tfg:depleted_liquor_a')
            .itemInputs(Item.of('gtceu:sodium_hydroxide_dust', 1))
            .inputFluids(Fluid.of('tfg:enriched_garnet_leach_liquor', 1000))
            .itemOutputs(Item.of('gtceu:iron_dust', 3))
            .outputFluids(Fluid.of('tfg:depleted_liquor_a', 1000))
            .duration(20 * 38)
            .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('tfg:depleted_liquor_b')
            .itemInputs(Item.of('gtceu:sodium_hydroxide_dust', 1))
            .inputFluids(Fluid.of('tfg:depleted_liquor_a', 1000))
            .itemOutputs(Item.of('tfg:al_cr_y_hydroxide_cake_dust', 3))
            .outputFluids(Fluid.of('tfg:depleted_liquor_b', 1000))
            .duration(20 * 38)
            .EUt(GTValues.VA[GTValues.LV])


}