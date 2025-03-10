/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerTFCBetterBFRecipes = (event) =>
{    
    event.remove("tfcbetterbf:heating/metal/insulation")
    
    event.recipes.tfc.heating('tfcbetterbf:insulation', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 432))
        .id(`tfcbetterbf:heating/insulation`)
}