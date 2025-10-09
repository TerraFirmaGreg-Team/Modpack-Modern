/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerFinalRecipes(event) {
    //Allow automatic scraping by using sequenced assembly
	event.forEachRecipe({ type: 'tfc:scraping' }, r => {
		let originalRecipeIngredient = r.json.get("ingredient").get("item");
		let output = r.originalRecipeResult;

		event.recipes.createSequencedAssembly([output], originalRecipeIngredient, [
			event.recipes.createDeploying(originalRecipeIngredient, [originalRecipeIngredient, '#tfc:knives']).keepHeldItem()
		]).transitionalItem(originalRecipeIngredient).loops(16)
	})
}