/** @param {Internal.LootModificationEventJS} event */
const registerWoodStructLoot = (event) =>
{
    global.TFC_WOOD_STRUCT.forEach(woodType =>
    {
        global.invokeIfNotNull(woodType.window_pane, () =>
        {
            event.addBlockLootModifier(woodType.window_pane)
                .addLoot(woodType.window_pane);
        });
    })
}