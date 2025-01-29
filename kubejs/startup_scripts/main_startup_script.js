// priority: 1

/**
 * Событие регистрации предметов.
 */
StartupEvents.registry('item', event => {
    registerGregTechItems(event)
    registerMinecraftItems(event)
    registerGTCEuItems(event)
    registerTFGItems(event)
})

/**
 * Событие регистрации блоков.
 */
StartupEvents.registry('block', event => {
    registerGregTechBlocks(event)
    registerGTCEuBlocks(event)
    registerTFGBlocks(event)    
})

/**
 * Событие изменения блоков.
 */
BlockEvents.modification(event => {})

/**
 * Событие изменения предметов.
 */
ItemEvents.modification(event => {})

/**
 * Событие регистрации жидкостей.
 */
StartupEvents.registry('fluid', event => {
    registerTFGFluids(event)
})

/**
 * Событие регистрации типов рецептов.
 */
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    registerGregTechRecipeTypes(event)
})

/**
 * Событие регистрации механизмов.
 */
GTCEuStartupEvents.registry('gtceu:machine', event => {
    registerGregTechMachines(event)
})

/**
 * Событие регистрации слоев пород GTM.
 */
GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    registerGregTechWorldGenLayers(event)
})

GTCEuStartupEvents.registry('gtceu:material', event =>
{
    registerTFGMaterials(event)
})

/**
 * Событие регистрации информации о составе предмета.
 */
TFGStartupEvents.materialInfo(event => {
    registerGregTechMaterialInfo(event)
})
// TFGStartupEvents.materialInfo(event => {
//     registerGTCEuMaterialInfo(event)
// })
