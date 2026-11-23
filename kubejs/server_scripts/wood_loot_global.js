/** @param {Internal.LootModificationEventJS} event */
const registerWoodStructLoot = (event) =>
{
    global.getWoodStructArray().forEach(woodType =>
    {
        console.log("Generating Wood Struct Loot for " + woodType.modName + ":" + woodType.name);
        global.invokeIfNotNull(woodType.window_pane, () =>
        {
            event.addBlockLootModifier(woodType.window_pane)
                .addLoot(woodType.window_pane);
        });
    })
}