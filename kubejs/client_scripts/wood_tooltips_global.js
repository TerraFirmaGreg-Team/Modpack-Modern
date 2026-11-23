/**
 * 
 * @param {Internal.ItemTooltipEventJS} event 
 */
const registerWoodStructTooltips = (event) =>{
    global.getWoodStructArray().forEach(woodType =>
    {
        console.log("Generating Wood Struct Tooltip for " + woodType.modName + ":" + woodType.name);
        global.invokeIfNotNull(woodType.support, () => event.addAdvanced([woodType.support], (item, advanced, text) => text.add(1, Text.translate('tfg.tooltip.support.tier1'))));
    })
}