// priority: 0

function registerTFGChromiumProcessing(event) {

    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_ruby' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_uvarovite' })
    event.remove({ id: 'gtceu:centrifuge/ruby_slurry_centrifuging' })
    event.remove({ id: 'gtceu:centrifuge/sapphire_slurry_centrifuging' })
    event.remove({ id: 'gtceu:centrifuge/green_sapphire_slurry_centrifuging' })
    event.remove({ id: 'gtceu:centrifuge/decomposition_centrifuging__garnet_sand' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_chromite' })

    //#region Ruby Processing Change

        event.recipes.gtceu.chemical_reactor('tfg:dirty_ruby_slurry_into_chromium')
                .itemInputs(Item.of('gtceu:sodium_hydroxide_dust', 4))
                .inputFluids(Fluid.of('tfg:dirty_ruby_slurry', 3000))
                .itemOutputs(Item.of('tfg:chromium_3_oxide_dust', 1), Item.of('tfg:sodium_aluminium_dust', 2))
                .outputFluids(Fluid.of('minecraft:water', 2000))
                .duration(12 * 20)
                .EUt(GTValues.VA[GTValues.MV])

        event.recipes.gtceu.chemical_reactor('tfg:filtered_ruby_slurry_into_chromium')
                .itemInputs(Item.of('gtceu:sodium_hydroxide_dust', 4))
                .inputFluids(Fluid.of('tfg:filtered_ruby_slurry', 1500))
                .itemOutputs(Item.of('tfg:chromium_3_oxide_dust', 1), Item.of('tfg:sodium_aluminium_dust', 2))
                .outputFluids(Fluid.of('minecraft:water', 2000))
                .duration(12 * 20)
                .EUt(GTValues.VA[GTValues.MV])

        event.recipes.gtceu.chemical_reactor('tfg:clean_ruby_slurry_into_chromium')
                .itemInputs(Item.of('gtceu:sodium_hydroxide_dust', 4))
                .inputFluids(Fluid.of('tfg:clean_ruby_slurry', 500))
                .itemOutputs(Item.of('tfg:chromium_3_oxide_dust', 1), Item.of('tfg:sodium_aluminium_dust', 2))
                .outputFluids(Fluid.of('minecraft:water', 2000))
                .duration(12 * 20)
                .EUt(GTValues.VA[GTValues.MV])

        event.recipes.gtceu.electric_blast_furnace('tfg:chromium_dustf_from_ruby')
                .itemInputs(Item.of('tfg:chromium_3_oxide_dust', 1), Item.of('gtceu:aluminium_dust', 2))
                .itemOutputs(Item.of('gtceu:chromium_dust', 2), Item.of('tfg:alumina_dust', 1))
                .duration(36 * 20)
                .EUt(GTValues.VA[GTValues.LV])
                .blastFurnaceTemp(1950)

        event.recipes.gtceu.electric_blast_furnace('tfg:chromium_dustf_from_carbon')
                .itemInputs(Item.of('tfg:chromium_3_oxide_dust', 1), Item.of('gtceu:carbon_dust', 3))
                .itemOutputs(Item.of('gtceu:chromium_dust', 2))
                .outputFluids(Fluid.of('gtceu:carbon_monoxide', 3000))
                .duration(46 * 20)
                .EUt(GTValues.VA[GTValues.LV])
                .blastFurnaceTemp(1950)

        event.recipes.gtceu.chemical_reactor('tfg:chromium_dust_from_hydrogen')
                .itemInputs(Item.of('tfg:chromium_3_oxide_dust', 1))
                .inputFluids(Fluid.of('gtceu:hydrogen', 6000))
                .itemOutputs(Item.of('gtceu:chromium_dust', 2))
                .outputFluids(Fluid.of('minecraft:water', 3000))
                .duration(36 * 20)
                .EUt(GTValues.VA[GTValues.LV])

        event.recipes.gtceu.chemical_reactor('tfg:aluminium_hydroxide_dust_from_sodium_aluminium')
                .itemInputs(Item.of('tfg:sodium_aluminium_dust', 2))
                .inputFluids(Fluid.of('minecraft:water', 2000), Fluid.of('gtceu:carbon_dioxide'))
                .itemOutputs(Item.of('gtceu:soda_ash_dust', 1), Item.of('tfg:aluminium_hydroxide_dust', 2))
                .duration(12 * 20)
                .EUt(GTValues.VA[GTValues.MV])

        //#region Garnet Processing Change

        event.recipes.gtceu.electromagnetic_separator('tfg:mixed_garnet')
                .itemInputs(Item.of('gtceu:garnet_sand_dust', 1))
                .itemOutputsRanged('gtceu:spessartine_dust', 0, 2)
                .itemOutputsRanged('gtceu:almandine_dust', 0, 2)
                .itemOutputsRanged('tfg:mixed_garnet_dust', 0, 12)
                .duration(12 * 20)
                .EUt(GTValues.VA[GTValues.MV])

        event.recipes.gtceu.centrifuge('tfg:uvarovite_dust_from_garnet')
                .itemInputs(Item.of('tfg:mixed_garnet_dust', 1))
                .itemOutputs(Item.of('gtceu:uvarovite_dust', 3), Item.of('gtceu:grossular_dust', 2))
                .duration(16 * 20)
                .EUt(GTValues.VA[GTValues.LV])

        event.recipes.gtceu.electric_blast_furnace('tfg:sodium_chromate_dust')
                .itemInputs(Item.of('gtceu:uvarovite_dust', 6), Item.of('gtceu:sodium_hydroxide_dust', 48))
                .itemOutputs(Item.of('tfg:sodium_chromate_dust', 12), Item.of('tfg:wollastonite_dust', 18))
                .duration(32 * 20)
                .EUt(GTValues.VA[GTValues.MV])
                .blastFurnaceTemp(1850)

        event.recipes.gtceu.chemical_reactor('tfg:sodium_dichromate_dust')
                .itemInputs(Item.of('tfg:sodium_chromate_dust', 12))
                .inputFluids(Fluid.of('gtceu:sulfuric_acid', 6000))
                .itemOutputs(Item.of('tfg:sodium_dichromate_dust', 6), Item.of('tfg:sodium_sulfate_dust', 6))
                .duration(14 * 20)
                .EUt(GTValues.VA[GTValues.LV])

        event.recipes.gtceu.chemical_reactor('tfg:chromium_3_oxide_dust_from_sodium_chromate')
                .itemInputs(Item.of('tfg:sodium_chromate_dust', 2))
                .inputFluids(Fluid.of('gtceu:hydrogen', 4000))
                .itemOutputs(Item.of('tfg:chromium_3_oxide_dust', 1), Item.of('gtceu:sodium_hydroxide_dust', 2))
                .outputFluids(Fluid.of('minecraft:water', 6000))
                .duration(11 * 20)
                .EUt(GTValues.VA[GTValues.LV])

        //#region Chromite

        event.recipes.gtceu.electric_blast_furnace('tfg:chromite_from_calcium_carbonate')
                .itemInputs(Item.of('gtceu:chromite_dust', 1), Item.of('gtceu:calcium_carbonate_dust', 1), Item.of('gtceu:carbon_dust', 3))
                .itemOutputs(Item.of('gtceu:chromium_dust', 2), Item.of('gtceu:iron_dust', 1), Item.of('tfg:wollastonite_dust'))
                .outputFluids(Fluid.of('gtceu:carbon_monoxide', 4000))
                .duration(24 * 20)
                .EUt(GTValues.VA[GTValues.MV])
                .blastFurnaceTemp(1650)

        event.recipes.gtceu.electric_blast_furnace('tfg:chromite_from_carbon')
                .itemInputs(Item.of('gtceu:chromite_dust', 1), Item.of('gtceu:carbon_dust', 4))
                .itemOutputs(Item.of('tfg:ferrochrome_dust', 1))
                .outputFluids(Fluid.of('gtceu:carbon_monoxide', 4000))
                .duration(32 * 20)
                .EUt(GTValues.VA[GTValues.HV])
                .blastFurnaceTemp(2110)

        event.recipes.gtceu.electrolyzer('tfg:ferrochrome')
                .itemInputs(Item.of('tfg:ferrochrome_dust', 3))
                .itemOutputs(Item.of('gtceu:chromium_dust', 2), Item.of('gtceu:iron_dust', 1))
                .duration(14 * 20)
                .EUt(GTValues.VA[GTValues.LV])

        //#end region

        // Others

        event.recipes.gtceu.chemical_reactor('tfg:calcium_carbonate_dust_from_calcium_hydroxide')
                .itemInputs(Item.of('gtceu:soda_ash_dust', 1), Item.of('gtceu:calcium_hydroxide_dust', 1))
                .itemOutputs(Item.of('gtceu:calcium_carbonate_dust', 1), Item.of('gtceu:sodium_hydroxide_dust', 2))
                .duration(16 * 20)
                .EUt(GTValues.VA[GTValues.LV])



}