/** @param {Internal.LootModificationEventJS} event */
const registerWoodStructLoot = (event) =>
{
    global.getWoodStructArray().forEach(woodType =>
    {
        try
        {
            global.invokeIfValid(woodType.window_pane, () =>
            {
                event.addBlockLootModifier(woodType.window_pane)
                    .addLoot(woodType.window_pane);
            });
        }
        catch(ex)
        {
            console.error(`Exception during Wood Struct Loot generation for ${woodType.modName}:${woodType.name}: ` + ex);
        }
    })
}