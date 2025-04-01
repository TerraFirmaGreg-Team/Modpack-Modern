/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerColdsgrapplerRecipes = (evt) =>
{
    evt.remove({mod:"coldsgrappler"})

    //Extra rope using rope-coils
    evt.recipes.minecraft.crafting_shapeless(Item.of('coldsgrappler:extra_rope_item', 2), ['firmaciv:rope_coil', 'firmaciv:rope_coil'])
        .id("coldsgrappler:crafting/shapeless/extra_rope_item")
    evt.recipes.minecraft.crafting_shapeless(Item.of('firmaciv:rope_coil', 2), ['coldsgrappler:extra_rope_item', 'coldsgrappler:extra_rope_item'])
        .id("coldsgrappler:crafting/shapeless/rope_coil")

    //Grappler using a torch and a stone javelin
    evt.recipes.minecraft.crafting_shaped(Item.of('coldsgrappler:grappler_item'),
    [
        ' A ',
        ' B ',
        ' C '
    ],
    {
        A: "#tfc:stone_javelins",
        B: "tfc:torch",
        C: "coldsgrappler:extra_rope_item"
    }).id("coldsgrappler:crafting/shaped/grappler_item");
    
    //Light rope
    evt.recipes.minecraft.crafting_shapeless(Item.of('coldsgrappler:rope_light_item'), ['coldsgrappler:extra_rope_item', 'tfc:torch']).id("coldsgrappler:crafting/shapeless/rope_light_item");
}