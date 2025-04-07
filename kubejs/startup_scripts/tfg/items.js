// priority: 0

const registerTFGItems = (event) => {

    // #region Electronics

    event.create('tfg:unfinished_electron_tube', 'create:sequenced_assembly')
    event.create('tfg:unfinished_vacuum_tube', 'create:sequenced_assembly')
    event.create('tfg:unfinished_basic_electronic_circuit', 'create:sequenced_assembly')

    // #endregion
    
    const $DyeColor = Java.loadClass('net.minecraft.world.item.DyeColor')

    // #region Paper making
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

    //#region Medicine

    const pill = [
        'haste',
        'night_vision',
        'poison',
        'regeneration',
        'slowness',
        'speed',
        'water_breathing',
        'weakness',
    ]
    const pill_names = [
        'Haste',
        'Night Vision',
        'Poison',
        'Regeneration',
        'Slowness',
        'Speed',
        'Water Breathing',
        'Weakness',
    ]

    pill.forEach((pill_array, index) => {
        const pill_names_array = pill_names[index];

        event.create(`tfg:${pill_array}_pill`)
            .translationKey(`item.tfg.${pill_array}_pill`)
            .tooltip(`§9${pill_names_array} (08:00)`)

        event.create(`tfg:${pill_array}_tablet`)
            .translationKey(`item.tfg.${pill_array}_tablet`)
            .tooltip(`§9${pill_names_array} (30:00)`)
    })

    event.create(`tfg:antipoison_pill`)
        .translationKey(`item.tfg.antipoison_pill`)
        .tooltip(`§9Cures Poison`)

    event.create(`tfg:antipoison_tablet`)
        .translationKey(`item.tfg.antipoison_tablet`)
        .tooltip(`§9Cures All Harmful Effects`)   

    //salvos

    const salvo = [
        'absorption',
        'fire_resistance',
        'invisibility',
        'luck',
        'resistance',
    ]
    const salvo_names = [
        'Absorption',
        'Fire Resistance',
        'Invisibility',
        'Luck',
        'Resistance',
    ]

    salvo.forEach((salvo_array, index) => {
        const salvo_names_array = salvo_names[index];

        event.create(`tfg:${salvo_array}_salvo`)
            .translationKey(`item.tfg.${salvo_array}_salvo`)
            .tooltip(`§9${salvo_names_array} (08:00)`)
    })

    event.create(`tfg:instant_health_salvo`)
        .translationKey(`item.tfg.instant_health_salvo`)
        .tooltip(`§9Instant Health II`)
    //#endregion

    //#region Wax
    event.create(`tfg:paraffin_wax`)
        .translationKey(`item.tfg.paraffin_wax`)

    event.create('tfg:conifer_rosin')
        .translationKey('item.tfg.conifer_rosin')
    //#endregion
}