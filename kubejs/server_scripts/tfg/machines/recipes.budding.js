function registerTFGBuddingRecipes(event) {

    event.recipes.gtceu.budding_charger('tfg:tier_1')
        .itemInputs('minecraft:copper_ingot')
        .addData("budding_charge", 25)
        .addData("budding_max_tier", 1)
        .EUt(GTValues.VA[GTValues.HV])
        .duration(20*10)

    event.recipes.gtceu.budding_charger('tfg:tier_2')
        .itemInputs(Item.of('gold_ingot'))
        .addData("budding_charge", 25)
        .addData("budding_max_tier", 2)
        .EUt(GTValues.VA[GTValues.HV])
        .duration(20*10)

    event.recipes.gtceu.budding_charger('tfg:tier_3')
        .itemInputs(Item.of('gtceu:tin_ingot'))
        .addData("budding_charge", 25)
        .addData("budding_max_tier", 3)
        .EUt(GTValues.VA[GTValues.HV])
        .duration(20*10)

    event.recipes.gtceu.budding_charger('tfg:tier_4')
        .itemInputs(Item.of('gtceu:tungsten_ingot'))
        .addData("budding_charge", 25)
        .addData("budding_max_tier", 4)
        .EUt(GTValues.VA[GTValues.HV])
        .duration(20*10)

}