// priority: 0

const registerTFGItems = (event) => {
    
    const $DyeColor = Java.loadClass('net.minecraft.world.item.DyeColor')

    console.log("StartupEvents.registry('item')", Object.entries(event))

    event.create('tfg:hardwood_strip')
        .translationKey('item.tfg.hardwood_strip')

    event.create('tfg:soaked_hardwood_strip')
        .translationKey('item.tfg.soaked_hardwood_strip')

    event.create('tfg:soaked_unrefined_paper')
        .translationKey('item.tfg.soaked_unrefined_paper')
    
    event.create('tfg:terra_firma_greg')
        .translationKey('item.tfg.terra_firma_greg')
    
    //#region chalk creation
    event.create('tfg:unfired_chalk')
        .translationKey('item.tfg.unfired_chalk')

    Color.DYE.forEach((dyeName, dye) =>
    {
        event.create(`tfg:wet_${dyeName}_chalk`)
        .translationKey(`item.tfg.wet_${dyeName}_chalk`)
        .textureJson({
            layer0: 'tfg:item/unfired_chalk'
        })
        .color(0, dye.getHexJS());
    });
    //#endregion

    // Extrudel Molds
    global.TFG_EXTRUDER_MOLDS.forEach(id => event.create(id))

    // Other Molds
    global.TFG_CASTING_MOLDS.forEach(id => event.create(id))
}