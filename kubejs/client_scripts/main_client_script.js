// priority: 1

console.log('TerraFirmaGreg the best modpack in the world :)')

/**
 * Событие регистрации любых ассетов на клиентской стороне.
 */
ClientEvents.highPriorityAssets(event => {
    registerBeneathAssets(event)
    registerMinecraftAssets(event)
    registerTFCAssets(event)    
})