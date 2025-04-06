ItemEvents.tooltip(evt =>
{
    registerTooltips(evt);
})

JEIEvents.hideItems(event =>
{
    hideEtchedItems(event);
})

JEIEvents.removeRecipes(event =>
{
    hideEtchedRecipes(event);
})

JEIEvents.removeCategories(evt =>
{
    console.log(evt.categoryIds);
})