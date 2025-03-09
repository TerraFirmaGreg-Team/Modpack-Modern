
/**
 * 
 * @param {TagEvent.Item} event 
 */
const registerAlekishipsItemTags = (event) =>
{
    event.removeAllTagsFrom("alekiships:cannon")
    event.add("c:hidden_from_recipe_viewers", "alekiships:cannon")
}