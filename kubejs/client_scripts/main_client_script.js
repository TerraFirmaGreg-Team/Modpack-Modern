ItemEvents.tooltip(evt => {
    registerTooltips(evt);
})

EmiPlusPlusEvents.registerGroups(event => {
    registerSingleGroups(event)
    registerMultiGroups(event)
    registerWireGroups(event)
})