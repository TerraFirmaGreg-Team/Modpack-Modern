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

    //Arrow Parts
    event.create('tfg:flint_arrow_head')
        .translationKey('item.tfg.flint_arrow_head')

    event.create('tfg:fletching')
        .translationKey('item.tfg.fletching')

    //#region Immersive Aircraft Impl
    event.create('tfg:scaffolding_frame')
        .translationKey('item.tfg.scaffolding_frame')

    event.create('tfg:airship_hull')
        .translationKey('item.tfg.airship_hull')

    event.create('tfg:airship_balloon')
        .translationKey('item.tfg.airship_balloon')
        
    event.create('tfg:lv_aircraft_engine')
        .translationKey('item.tfg.lv_aircraft_engine')
    
    event.create('tfg:hv_aircraft_engine')
        .translationKey('item.tfg.hv_aircraft_engine')

    event.create('tfg:ev_aircraft_engine')
        .translationKey('item.tfg.ev_aircraft_engine')

    event.create('tfg:black_steel_plated_airplane_propeller')
        .translationKey('item.tfg.black_steel_plated_airplane_propeller')

    event.create('tfg:redblu_steel_plated_airplane_propeller')
        .translationKey('item.tfg.redblu_steel_plated_airplane_propeller')

    event.create('tfg:stainless_steel_plated_airplane_propeller')
        .translationKey('item.tfg.stainless_steel_plated_airplane_propeller')

    event.create('tfg:titanium_plated_airplane_propeller')
        .translationKey('item.tfg.titanium_plated_airplane_propeller')

    event.create('tfg:redblu_steel_landing_gear')
        .translationKey('item.tfg.redblu_steel_landing_gear')

    event.create('tfg:aluminium_landing_gear')
        .translationKey('item.tfg.aluminium_landing_gear')

    event.create('tfg:stainless_steel_landing_gear')
        .translationKey('item.tfg.stainless_steel_landing_gear')

    event.create('tfg:titanium_landing_gear')
        .translationKey('item.tfg.titanium_landing_gear')

    event.create('tfg:redblu_steel_hull_reinforcement')
        .translationKey('item.tfg.redblu_steel_hull_reinforcement')

    event.create('tfg:aluminium_hull_reinforcement')
        .translationKey('item.tfg.aluminium_hull_reinforcement')
        
    event.create('tfg:stainless_steel_hull_reinforcement')
        .translationKey('item.tfg.stainless_steel_hull_reinforcement')

    event.create('tfg:titanium_hull_reinforcement')
        .translationKey('item.tfg.titanium_hull_reinforcement')
    //#endregion

    // #region 0.7.19 -> 0.9 compat

    event.create('gtceu:zinc_ingot')
    event.create('gtceu:brass_ingot')
    event.create('gtceu:vanadium_ingot')
    event.create('gtceu:black_steel_ingot')
    event.create('gtceu:red_steel_ingot')
    event.create('gtceu:blue_steel_ingot')
    event.create('gtceu:iron_double_ingot')

    event.create('gtceu:black_steel_double_ingot')
    event.create('gtceu:red_steel_double_ingot')
    event.create('gtceu:blue_steel_double_ingot')

    event.create('gtceu:zinc_nugget')
    event.create('gtceu:brass_nugget')
    event.create('gtceu:copper_nugget')
    event.create('gtceu:vanadium_nugget')

    event.create('gtceu:copper_plate')
    event.create('gtceu:brass_plate')
    event.create('gtceu:gold_plate')
    event.create('gtceu:iron_plate')
    event.create('gtceu:cobalt_plate')
    event.create('gtceu:rose_gold_plate')
    event.create('gtceu:aluminium_plate')
    event.create('gtceu:invar_plate')
    event.create('gtceu:lead_plate')
    event.create('gtceu:nickel_plate')
    event.create('gtceu:osmium_plate')
    event.create('gtceu:palladium_plate')
    event.create('gtceu:platinum_plate')
    event.create('gtceu:rhodium_plate')
    event.create('gtceu:silver_plate')
    event.create('gtceu:vanadium_plate')
    event.create('gtceu:zinc_plate')

    event.create('gtceu:vanadium_block')
    event.create('gtceu:zinc_block')
    event.create('gtceu:brass_block')

    event.create('gtceu:gold_purified_ore')
    event.create('gtceu:copper_purified_ore')
    event.create('gtceu:zinc_purified_ore')
    event.create('gtceu:silver_purified_ore')
    event.create('gtceu:tin_purified_ore')
    event.create('gtceu:lead_purified_ore')


    // #endregion
}