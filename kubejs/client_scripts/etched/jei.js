/**
 * 
 * @param {Internal.RemoveJEIRecipesEvent_} evt 
 */
const hideEtchedRecipes = (evt) =>
{
    evt.remove("create:automatic_shapeless", "gtceu:sus_record")
}

/**
 * 
 * @param {Internal.HideJEIEventJS} evt 
 */
const hideEtchedItems = (evt) =>
{
    evt.hide("gtceu:sus_record")

    let categories = global.jeiRuntime.recipeManager.createRecipeCategoryLookup().get().toList();
    categories.forEach(cat => 
        {
            console.log("CATEGORY: " + cat.getRecipeType().getUid());
            let allrecipes = global.jeiRuntime.getRecipeManager().createRecipeLookup(cat.getRecipeType()).get().toArray();
            allrecipes.forEach(recipe =>
            {
                if(recipe && typeof recipe.getId === "function")
                {
                    try {
                        let recipeId = recipe.getId();
                        console.log("ID: " + recipeId);
                    } catch (error) {
                        
                    }
                }
            })
        }
    );


}