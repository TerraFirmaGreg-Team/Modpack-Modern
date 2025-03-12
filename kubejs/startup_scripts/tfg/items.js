// priority: 0

const registerTFGItems = (event) => {
    console.log("StartupEvents.registry('item')", Object.entries(event))

    event.create('tfg:hardwood_strip')
        .translationKey('item.tfg.hardwood_strip')

    event.create('tfg:soaked_hardwood_strip')
        .translationKey('item.tfg.soaked_hardwood_strip')

    event.create('tfg:soaked_unrefined_paper')
        .translationKey('item.tfg.soaked_unrefined_paper')

    // Extrudel Molds
    global.TFG_EXTRUDER_MOLDS.forEach(id => event.create(id))

    // Other Molds
    global.TFG_CASTING_MOLDS.forEach(id => event.create(id))
}