/**
 * 
 * @param {Internal.RemoveJEIRecipesEvent_} evt 
 */
const registerEtchedJEIRecipes = (evt) =>
{
    evt.remove("minecraft:crafting", "minecraft:kjs/gtceu_sus_record")
}

/**
 * 
 * @param {Internal.HideJEIEventJS} evt 
 */
const registerEtchedJEIItems = (evt) =>
{
    evt.hide("gtceu:sus_record")
}