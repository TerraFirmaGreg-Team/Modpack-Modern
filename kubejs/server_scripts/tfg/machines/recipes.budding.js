function registerTFGBuddingRecipes(event) {

    event.recipes.gtceu.budding_charger('tfg:tier_1')
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .addData("budding_charge", 5)
        .addData("budding_max_tier", 1)
        .EUt(GTValues.VHA[GTValues.MV])
        .duration(20*200)

    event.recipes.gtceu.budding_charger('tfg:tier_2')
        .itemInputs(Item.of('ae2:certus_quartz_dust', 4))
        .addData("budding_charge", 5)
        .addData("budding_max_tier", 2)
        .EUt(GTValues.VHA[GTValues.HV])
        .duration(20*200)

    event.recipes.gtceu.budding_charger('tfg:tier_3')
        .itemInputs(Item.of('ae2:charged_certus_quartz_crystal', 5))
        .addData("budding_charge", 5)
        .addData("budding_max_tier", 3)
        .EUt(GTValues.VHA[GTValues.EV])
        .duration(20*200)

    event.recipes.gtceu.budding_charger('tfg:tier_4')
        .itemInputs(Item.of('ae2:fluix_crystal', 5))
        .addData("budding_charge", 1)
        .addData("budding_max_tier", 4)
        .EUt(GTValues.VHA[GTValues.IV])
        .duration(20*200)

}