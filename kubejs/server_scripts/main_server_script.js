// priority: 1

const $MaterialFlags = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlags')
const $ToolHelper = Java.loadClass('com.gregtechceu.gtceu.api.item.tool.ToolHelper')

/**
 * Событие регистрации предмет-тэгов.
 */
ServerEvents.tags('item', event => {
    registerTFCItemTags(event)
    registerFirmaLifeItemTags(event)
    
    registerMinecraftItemTags(event)
    
    registerGTCEUItemTags(event)
    
    registerAE2ItemTags(event)
    
    registerCreateItemTags(event)
    registerCreateAdditionsItemTags(event)
    registerRailWaysItemTags(event)
    
    registerMoreRedItemTags(event)
    
    registerSophisticatedBackpacksItemTags(event)
    
    registerChiselAndBitsItemTags(event)
    registerFTBQuestsItemTags(event)
})

/**
 * Событие регистрации блок-тэгов.
 */
ServerEvents.tags('block', event => {
    registerTFCBlockTags(event)
    registerFirmaLifeBlockTags(event)
    
    registerChiselAndBitsBlockTags(event)
    registerComputerCraftBlockTags(event)
})

/**
 * Событие регистрации жидкость-тэгов.
 */
ServerEvents.tags('fluid', event => {
    registerTFCFluidTags(event)
    registerCreateFluidTags(event)
})

/**
 * Событие регистрации генератора структур.
 */
ServerEvents.tags('worldgen/placed_feature', event => {
    registerTFCPlacedFeatures(event)
    registerFirmaLifePlacedFeatures(event)
})

/**
 * Здесь регистрируются файлы датапаков общие.
 * Срабатывает до инициализации рецептов.
 */
ServerEvents.highPriorityData(event => {
    registerComputerCraftData(event)
})

/**
 * Здесь регистрируются файлы датапаков TFC.
 * Срабатывает до инициализации рецептов.
 */
TFCEvents.data(event => {
    registerTFCDataForTFC(event)
    registerTFCDataForWaterFlasks(event)
    registerTFCDataForTreeTap(event)
    
    registerTFCDataForGTCEU(event)
})

/**
 * Событие регистрации рецептов.
 * Срабатывает после инициализации датапаков.
 */
ServerEvents.recipes(event => {
    registerTFCRecipes(event)
    registerFirmaLifeRecipes(event)
    registerFirmaCivRecipes(event)
    registerWaterFlasksRecipes(event)
    registerTreeTapRecipes(event)
    
    registerMinecraftRecipes(event)
    
    registerGTCEURecipes(event)
    
    registerCreateRecipes(event)
    registerCreateAdditionsRecipes(event)
    registerRailWaysRecipes(event)
    
    registerAE2Recipes(event)
    registerAE2WTLibRecipes(event)
    
    registerComputerCraftRecipes(event)
    
    registerMoreRedRecipes(event)
    
    registerSophisticatedBackpacksRecipes(event)

    registerToolBeltRecipes(event)
    
    registerExposureRecipes(event)
    
    registerFTBQuestsRecipes(event)

    // registerChiselAndBitsRecipes(event)
})

/**
 * Событие регистрации лут-тейблов.
 */
LootJS.modifiers((event) => {
    registerGTCEULoots(event)
});

/**
 * Событие регистрации рудных жил.
 */
GTCEuServerEvents.oreVeins(event => {
    event.removeAll()
})