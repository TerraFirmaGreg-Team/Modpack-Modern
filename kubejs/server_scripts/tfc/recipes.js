// priority: 0

const registerTFCRecipes = (event) => {
    
    // Bismuth Bronze

    // Ingot
    event.recipes.tfc.casting('gtceu:bismuth_bronze_ingot', 'tfc:ceramic/ingot_mold', TFC.fluidStackIngredient('gtceu:bismuth_bronze', 144), 0.1)
        .id('tfc:casting/bismuth_bronze_fire_ingot')
    
    event.recipes.tfc.casting('gtceu:bismuth_bronze_ingot', 'tfc:ceramic/fire_ingot_mold', TFC.fluidStackIngredient('gtceu:bismuth_bronze', 144), 0.01)
        .id('tfc:casting/bismuth_bronze_ingot')

    event.recipes.tfc.heating('gtceu:bismuth_bronze_ingot', 985)
        .resultFluid(Fluid.of('gtceu:bismuth_bronze', 144))
        .id('tfc:heating/metal/bismuth_bronze_ingot')
    
    //event.recipes.tfc.heating('gtceu:bismuth_bronze_ingot', 985)
    //    .resultFluid(Fluid.of('gtceu:bismuth_bronze', 144))
    //    .id('tfc:heating/metal/bismuth_bronze_ingot')
}