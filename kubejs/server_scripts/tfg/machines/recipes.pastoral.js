"use strict";

function registerTFGPastoralRecipes(event) {

    // Entity type specific
    let milk_cow = event.recipes.gtceu.pastoral_engine('tfg:milk_cow')
        .outputFluids('minecraft:milk 1000')
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.LV])
        .circuit(1)
    TFGRecipeSchemaBindings.animalPresentEntity(milk_cow, 'tfc:cow')

    let milk_yak = event.recipes.gtceu.pastoral_engine('tfg:milk_yak')
        .outputFluids('firmalife:yak_milk 1000')
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.LV])
        .circuit(2)
    TFGRecipeSchemaBindings.animalPresentEntity(milk_yak, 'tfc:yak')

    let milk_goat = event.recipes.gtceu.pastoral_engine('tfg:milk_goat')
        .outputFluids('firmalife:goat_milk 1000')
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.LV])
        .circuit(3)
    TFGRecipeSchemaBindings.animalPresentEntity(milk_goat, 'tfc:goat')

    // Category
    let wool = event.recipes.gtceu.pastoral_engine('tfg:shear_wool')
        .itemOutputs(Item.of('tfc:wool'))
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.LV])
        .circuit(4)
    TFGRecipeSchemaBindings.animalPresent(wool, 'producing')

}