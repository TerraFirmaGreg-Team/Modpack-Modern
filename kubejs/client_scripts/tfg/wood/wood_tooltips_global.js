/**
 * 
 * @param {Internal.ItemTooltipEventJS} event 
 */
const registerWoodStructTooltips = (event) =>{
    global.getWoodStructArray().forEach(woodType =>
    {
        try
        {
            global.invokeIfValid(woodType.support, () => event.addAdvanced([woodType.support], (item, advanced, text) => text.add(1, Text.translate('tfg.tooltip.support.tier1'))));
        }
        catch(ex)
        {
            console.error(`Exception during Wood Struct Tooltip generation for ${woodType.modName}:${woodType.name}: ` + ex);
        }
    })
}