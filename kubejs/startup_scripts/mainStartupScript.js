// priority: 0

GTCEuStartupEvents.registry('gtceu:material', event => {
    registerMaterials(event);
})

GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    registerStoneTypes(event);
    registerTagPrefixes(event);
})