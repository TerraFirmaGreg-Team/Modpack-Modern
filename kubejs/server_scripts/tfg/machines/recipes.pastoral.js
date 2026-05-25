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

    // Category of generic wool producers
    let wool = event.recipes.gtceu.pastoral_engine('tfg:shear_wool')
        .itemOutputs(Item.of('tfc:wool'))
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.LV])
        .circuit(4)
    TFGRecipeSchemaBindings.animalPresent(wool, 'producing')

    // Mars animals
    let glacian_wool = event.recipes.gtceu.pastoral_engine('tfg:shear_glacian')
        .itemOutputs(Item.of('tfg:glacian_wool'))
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(5)
    TFGRecipeSchemaBindings.animalPresentEntity(glacian_wool, 'tfg:glacian_ram')

    let sniffer_wool = event.recipes.gtceu.pastoral_engine('tfg:shear_sniffer')
        .itemOutputs(Item.of('tfg:sniffer_wool'))
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(6)
    TFGRecipeSchemaBindings.animalPresent(sniffer_wool, 'producing')

    let wraptor_wool = event.recipes.gtceu.pastoral_engine('tfg:shear_wraptor')
        .itemOutputs(Item.of('tfg:wraptor_wool'))
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(7)
    TFGRecipeSchemaBindings.animalPresent(wraptor_wool, 'producing')

}