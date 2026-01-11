// priority: 0
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerTFCScrapingRecipes = (event) => {
    
    event.remove({ input: 'tfcscraping:ceramic/scraping_knife_blade_mold'})
    event.recipes.tfc.casting('tfcscraping:metal/scraping_knife_blade/bismuth_bronze', 'tfcscraping:ceramic/scraping_knife_blade_mold', TFC.fluidStackIngredient('gtceu:bismuth_bronze', 288), 0.1)
    event.recipes.tfc.casting('tfcscraping:metal/scraping_knife_blade/black_bronze', 'tfcscraping:ceramic/scraping_knife_blade_mold', TFC.fluidStackIngredient('gtceu:black_bronze', 288), 0.1)
    event.recipes.tfc.casting('tfcscraping:metal/scraping_knife_blade/bronze', 'tfcscraping:ceramic/scraping_knife_blade_mold', TFC.fluidStackIngredient('gtceu:bronze', 288), 0.1)
    event.recipes.tfc.casting('tfcscraping:metal/scraping_knife_blade/copper', 'tfcscraping:ceramic/scraping_knife_blade_mold', TFC.fluidStackIngredient('gtceu:copper', 288), 0.1)

}