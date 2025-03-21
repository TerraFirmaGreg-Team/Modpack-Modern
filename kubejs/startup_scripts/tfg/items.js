// priority: 0

const registerTFGItems = (event) => {
    console.log("StartupEvents.registry('item')", Object.entries(event))

    // #region Paper making
    event.create('tfg:hardwood_strip')
        .translationKey('item.tfg.hardwood_strip')

    event.create('tfg:soaked_hardwood_strip')
        .translationKey('item.tfg.soaked_hardwood_strip')

    event.create('tfg:soaked_unrefined_paper')
        .translationKey('item.tfg.soaked_unrefined_paper')
    // #endregion

    // #region Molds
    global.TFG_EXTRUDER_MOLDS.forEach(id => event.create(id))

    global.TFG_CASTING_MOLDS.forEach(id => event.create(id))
    // #endregion

    // #region Stone bricks and dusts
    event.create('tfg:brick/deepslate')
        .translationKey('item.tfg.brick.deepslate')
    // #endregion

    // #region Primitive rubber gloves
    event.create('tfg:prepared_leather_gloves')
        .translationKey('item.tfg.prepared_leather_gloves')

    event.create('tfg:latex_soaked_gloves')
        .translationKey('item.tfg.latex_soaked_gloves')
    // #endregion
}