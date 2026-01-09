// priority: 0
"use strict";

const registerAsticorCartsRecipes = (event) => {
    event.remove({ id: 'astikorcarts:animal_cart' })
    event.remove({ id: 'astikorcarts:supply_cart' })
    event.remove({ id: 'astikorcarts:plow' })
    event.remove({ id: 'astikorcarts:wheel' })

    event.recipes.gtceu.macerator(`tfg:recycle_astikor_animal_cart`)
        .itemInputs('#tfcastikorcarts:animal_cart')
        .itemOutputs('#forge:dusts/brass')
        .duration(100)
        .category(GTRecipeCategories.MACERATOR_RECYCLING)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.macerator(`tfg:recycle_astikor_supply_cart`)
        .itemInputs('#tfcastikorcarts:supply_cart')
        .itemOutputs('#forge:dusts/brass')
        .duration(100)
        .category(GTRecipeCategories.MACERATOR_RECYCLING)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.macerator(`tfg:recycle_astikor_plow`)
        .itemInputs('#tfcastikorcarts:plow')
        .itemOutputs('#forge:dusts/brass')
        .duration(100)
        .category(GTRecipeCategories.MACERATOR_RECYCLING)
        .EUt(GTValues.VA[GTValues.ULV])
}