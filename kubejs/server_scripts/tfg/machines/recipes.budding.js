function registerTFGBuddingRecipes(event) {

    event.recipes.gtceu.budding_charger('tfg:tier_1')
        .inputFluids(Fluid.of('minecraft:water', 4000))
        .addData("budding_charge", 25)
        .addData("budding_max_tier", 1)
        .EUt(GTValues.VA[GTValues.HV])
        .duration(20*10)

    event.recipes.gtceu.budding_charger('tfg:tier_2')
        .itemInputs(Item.of('ae2:certus_quartz_dust', 4))
        .addData("budding_charge", 25)
        .addData("budding_max_tier", 2)
        .EUt(GTValues.VA[GTValues.HV])
        .duration(20*10)

    event.recipes.gtceu.budding_charger('tfg:tier_3')
        .itemInputs(Item.of('ae2:charged_certus_quartz_crystal'))
        .addData("budding_charge", 25)
        .addData("budding_max_tier", 3)
        .EUt(GTValues.VA[GTValues.HV])
        .duration(20*10)

    event.recipes.gtceu.budding_charger('tfg:tier_4')
        .itemInputs(Item.of('ae2:fluix_crystal'))
        .addData("budding_charge", 25)
        .addData("budding_max_tier", 4)
        .EUt(GTValues.VA[GTValues.HV])
        .duration(20*10)

}