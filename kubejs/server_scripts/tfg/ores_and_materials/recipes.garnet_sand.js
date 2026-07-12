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

    //#region Step 1

    event.recipes.gtceu.chemical_reactor('tfg:garnet_leach_liquor')
            .itemInputs(Item.of('gtceu:crushed_garnet_sand_ore'))
            .inputFluids(Fluid.of('gtceu:sulfuric_acid', 1000))
            .itemOutputs(Item.of('gtceu:gypsum_dust', 8), Item.of('gtceu:silicon_dioxide_dust', 3), Item.of('tfg:flawed_garnet_residual_slag_gem', 1))
            .outputFluids(Fluid.of('tfg:garnet_leach_liquor', 1000))
            .duration(20 * 30)
            .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.electric_blast_furnace('tfg:garnet_fusion_clinker')
            .itemInputs(Item.of('tfg:flawed_garnet_residual_slag_gem', 1), Item.of('gtceu:soda_ash_dust', 6))
            .inputFluids(Fluid.of('gtceu:nitrogen', 100))
            .itemOutputs(Item.of('tfg:garnet_fusion_clinker', 1))
            .duration(20 * 42)
            .blastFurnaceTemp(1650)
            .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.autoclave('tfg:garnet_secondary_liquor')
            .itemInputs(Item.of('tfg:garnet_fusion_clinker', 1))
            .inputFluids(Fluid.of('minecraft:water', 1000))
            .itemOutputs(Item.of('tfg:flawed_inert_slag_gem', 1))
            .outputFluids(Fluid.of('tfg:garnet_secondary_liquor', 1000))
            .duration(20 * 32)
            .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.mixer('tfg:enriched_garnet_leach_liquor')
            .inputFluids(Fluid.of('tfg:garnet_secondary_liquor', 1000), Fluid.of('tfg:garnet_leach_liquor', 1000))
            .outputFluids(Fluid.of('tfg:enriched_garnet_leach_liquor', 1000))
            .duration(20 * 28)
            .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('tfg:soda_ash_loop_sodium_aluminate_liquor')
            .inputFluids(Fluid.of('gtceu:carbon_dioxide', 1000), Fluid.of('tfg:sodium_aluminate_liquor', 1000))
            .itemOutputs(Item.of('tfg:aluminium_hydroxide_dust', 7), Item.of('gtceu:soda_ash_dust', 6))
            .duration(20 * 16)
            .EUt(GTValues.VA[GTValues.MV])

    //#region Step 2

    event.recipes.gtceu.chemical_reactor('tfg:depleted_liquor_a')
            .itemInputs(Item.of('gtceu:sodium_hydroxide_dust', 1))
            .inputFluids(Fluid.of('tfg:enriched_garnet_leach_liquor', 1000))
            .itemOutputs(Item.of('gtceu:iron_dust', 3))
            .outputFluids(Fluid.of('tfg:depleted_garnet_liquor_a', 1000))
            .duration(20 * 38)
            .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('tfg:depleted_liquor_b')
            .itemInputs(Item.of('gtceu:sodium_hydroxide_dust', 1))
            .inputFluids(Fluid.of('tfg:depleted_garnet_liquor_a', 1000))
            .itemOutputs(Item.of('tfg:al_cr_y_hydroxide_cake', 3))
            .outputFluids(Fluid.of('tfg:depleted_garnet_liquor_b', 1000))
            .duration(20 * 38)
            .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('tfg:process_depleted_garnet_liquor_b')
            .inputFluids(Fluid.of('tfg:depleted_garnet_liquor_b', 500), Fluid.of('gtceu:carbon_monoxide', 2000))
            .itemOutputs(Item.of('gtceu:manganese_dust', 2), Item.of('gtceu:magnesium_dust', 1), Item.of('gtceu:calcium_carbonate_dust', 1))
            .outputFluids(Fluid.of('gtceu:hydrogen', 1000), Fluid.of('gtceu:sulfuric_acid', 500))
            .duration(20 * 36)
            .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.autoclave('tfg:cr_y_residue_dust')
            .itemInputs(Item.of('gtceu:sodium_hydroxide_dust', 3), Item.of('tfg:al_cr_y_hydroxide_cake'))
            .inputFluids(Fluid.of('gtceu:distilled_water', 50))
            .itemOutputs(Item.of('tfg:cr_y_residue_dust', 1))
            .outputFluids(Fluid.of('tfg:sodium_aluminate_liquor', 1000))
            .duration(20 * 16)
            .EUt(GTValues.VA[GTValues.MV])

    //#region Boost Yield with Slurry

    // Ruby Slurry

    event.recipes.gtceu.mixer('tfg:enriched_cr_y_residue_a')
            .itemInputs(Item.of('tfg:cr_y_residue_dust', 1))
            .inputFluids(Fluid.of('tfg:dirty_ruby_slurry', 1000))
            .itemOutputs(Item.of('tfg:enriched_cr_y_residue_dust', 1))
            .duration(20 * 18)
            .circuit(1)
            .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.mixer('tfg:enriched_cr_y_residue_b')
            .itemInputs(Item.of('tfg:cr_y_residue_dust', 1))
            .inputFluids(Fluid.of('tfg:filtered_ruby_slurry', 500))
            .itemOutputs(Item.of('tfg:enriched_cr_y_residue_dust', 1))
            .duration(20 * 12)
            .circuit(1)
            .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.mixer('tfg:enriched_cr_y_residue_c')
            .itemInputs(Item.of('tfg:cr_y_residue_dust', 1))
            .inputFluids(Fluid.of('tfg:clean_ruby_slurry', 100))
            .itemOutputs(Item.of('tfg:enriched_cr_y_residue_dust', 1))
            .duration(20 * 6)
            .circuit(1)
            .EUt(GTValues.VA[GTValues.EV])

        // Garnet Slurry

    event.recipes.gtceu.mixer('tfg:enriched_cr_y_residue_a_garnet')
            .itemInputs(Item.of('tfg:cr_y_residue_dust', 1))
            .inputFluids('#tfg:dirty_garnet_slurry 1000')
            .itemOutputs(Item.of('tfg:enriched_cr_y_residue_dust', 1))
            .duration(20 * 18)
            .circuit(1)
            .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.mixer('tfg:enriched_cr_y_residue_b_garnet')
            .itemInputs(Item.of('tfg:cr_y_residue_dust', 1))
            .inputFluids('#tfg:filtered_garnet_slurry 500')
            .itemOutputs(Item.of('tfg:enriched_cr_y_residue_dust', 1))
            .duration(20 * 12)
            .circuit(1)
            .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.mixer('tfg:enriched_cr_y_residue_c_garnet')
            .itemInputs(Item.of('tfg:cr_y_residue_dust', 1))
            .inputFluids('#tfg:clean_garnet_slurry 100')
            .itemOutputs(Item.of('tfg:enriched_cr_y_residue_dust', 1))
            .duration(20 * 6)
            .circuit(1)
            .EUt(GTValues.VA[GTValues.EV])

    // Both Slurry

    event.recipes.gtceu.mixer('tfg:enriched_cr_y_residue_a_both')
            .itemInputs(Item.of('tfg:cr_y_residue_dust', 1))
            .inputFluids('#tfg:dirty_garnet_slurry 1000')
            .inputFluids(Fluid.of('tfg:dirty_ruby_slurry', 1000))
            .itemOutputs(Item.of('tfg:enriched_cr_y_residue_dust', 2))
            .duration(20 * 18)
            .circuit(2)
            .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.mixer('tfg:enriched_cr_y_residue_b_both')
            .itemInputs(Item.of('tfg:cr_y_residue_dust', 1))
            .inputFluids('#tfg:filtered_garnet_slurry 500')
            .inputFluids(Fluid.of('tfg:filtered_ruby_slurry', 500))
            .itemOutputs(Item.of('tfg:enriched_cr_y_residue_dust', 2))
            .duration(20 * 12)
            .circuit(2)
            .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.mixer('tfg:enriched_cr_y_residue_c_both')
            .itemInputs(Item.of('tfg:cr_y_residue_dust', 1))
            .inputFluids('#tfg:clean_garnet_slurry 100')
            .inputFluids(Fluid.of('tfg:clean_ruby_slurry', 100))
            .itemOutputs(Item.of('tfg:enriched_cr_y_residue_dust', 2))
            .duration(20 * 6)
            .circuit(2)
            .EUt(GTValues.VA[GTValues.EV])

    //#region Step 3

    event.recipes.gtceu.autoclave('tfg:cr_y_pregnant_liquor')
            .itemInputs(Item.of('tfg:cr_y_residue_dust', 1))
            .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 1000))
            .outputFluids(Fluid.of('tfg:cr_y_pregnant_liquor', 1000))
            .duration(20 * 18)
            .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.autoclave('tfg:cr_y_pregnant_liquor_from_enriched_cr_y_residue')
            .itemInputs(Item.of('tfg:enriched_cr_y_residue_dust', 1))
            .inputFluids(Fluid.of('gtceu:hydrochloric_acid', 1000))
            .outputFluids(Fluid.of('tfg:cr_y_pregnant_liquor', 2000))
            .duration(20 * 18)
            .EUt(GTValues.VA[GTValues.MV])

    // Final loop

    event.recipes.gtceu.mixer('tfg:loaded_mixture')
            .inputFluids(Fluid.of('tfg:cr_y_pregnant_liquor', 1000), Fluid.of('tfg:lean_organic', 1000))
            .outputFluids(Fluid.of('tfg:loaded_mixture', 1000))
            .duration(20 * 36)
            .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.centrifuge('tfg:raffinate')
            .inputFluids(Fluid.of('tfg:loaded_mixture', 1000))
            .outputFluids(Fluid.of('tfg:raffinate', 1000), Fluid.of('tfg:loaded_organic', 1000))
            .duration(20 * 12)
            .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('tfg:chromium_dust_from_raffinate')
            .itemInputs(Item.of('gtceu:sodium_hydroxide_dust', 3))
            .inputFluids(Fluid.of('tfg:raffinate', 1000))
            .itemOutputsRanged(Item.of('gtceu:chromium_dust', 1), 1, 2)
            .duration(20 * 9)
            .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.centrifuge('tfg:yttrium_dust_from_raffinate')
            .inputFluids(Fluid.of('tfg:loaded_organic', 1000))
            .outputFluids(Fluid.of('tfg:lean_organic', 1000))
            .chancedOutput(Item.of('gtceu:yttrium_dust', 1), 1000, 0)
            .duration(20 * 12)
            .EUt(GTValues.VA[GTValues.MV])

    //#region Obtain Lean Organic
    
    event.recipes.gtceu.chemical_reactor('tfg:ethylhexenal')
            .notConsumable(Item.of('gtceu:sodium_hydroxide_dust'))
            .inputFluids(Fluid.of('gtceu:butyraldehyde', 2000))
            .outputFluids(Fluid.of('tfg:ethylhexenal', 1000), Fluid.of('minecraft:water', 1000))
            .duration(20 * 58)
            .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('tfg:ethylhexanol')
            .inputFluids(Fluid.of('tfg:ethylhexenal', 1000), Fluid.of('gtceu:hydrogen', 4000))
            .outputFluids(Fluid.of('tfg:ethylhexanol', 1000))
            .duration(20 * 32)
            .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('tfg:organic_extractant_from_phosphorus_pentoxide_dust')
            .itemInputs(Item.of('gtceu:phosphorus_pentoxide_dust', 14))
            .inputFluids(Fluid.of('tfg:ethylhexanol', 1000))
            .outputFluids(Fluid.of('tfg:organic_extractant', 1000), Fluid.of('minecraft:water', 1000))
            .duration(20 * 32)
            .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.mixer('tfg:lean_organic_starter')
            .itemInputs(Item.of('tfg:organic_stabilizer_dust', 8))
            .inputFluids(Fluid.of('tfg:organic_extractant', 1000))
            .outputFluids(Fluid.of('tfg:lean_organic', 1000))
            .duration(20 * 41)
            .EUt(GTValues.VA[GTValues.MV])
}