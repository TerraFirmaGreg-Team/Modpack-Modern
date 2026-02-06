// priority: 0
"use strict";

//#region items
ServerEvents.tags('item', event => {
	/*
	*	How to use:
	*	'target_tag':  //this is the tag you're adding items/blocks/fluids to
	*		['item_1', 'item_2', 'item_3'] //the items you're adding to the tag go here
	*
	*    ммм ну типа вот как это всё работает:
	*    'target_tag':  //прикинь, это тег, в него добавляют предметы жижи или другой мусор
	*        ['item_1', 'item_2', 'item_3'] //твой мусор
	*/
    const itemTagAdditions = {
        'curios:face':
            ['create:goggles'],

        'tfg:metal_bars':
            ['create:andesite_bars', 'create:brass_bars', 'create:copper_bars'],

        'create:blaze_burner_fuel/regular':
            ['gtceu:poor_raw_coal', 'gtceu:coal_dust', 'gtceu:charcoal_dust', 'gtceu:raw_coal',
            'gtceu:rich_raw_coal', 'gtceu:flawed_coal_gem', 'gtceu:chipped_coal_gem', 'gtceu:pure_coal_dust'],

        'create:blaze_burner_fuel/special':
            ['gtceu:flawless_coal_gem', 'gtceu:exquisite_coal_gem', 'gtceu:coke_gem', 'beneath:cursecoal'],

        'create:non_movable':
            ['gtceu:wood_crate', '#create:toolboxes', 'tfg:spice', 'tfg:geyser_source',
            'tfg:geyser_source_small', '#tfc:can_landslide'],

        'forge:smooth_stone_slab':
            ['create:polished_cut_granite_slab', 'create:polished_cut_diorite_slab', 'create:polished_cut_andesite_slab',
            'create:polished_cut_calcite_slab', 'create:polished_cut_dripstone_slab', 'create:polished_cut_deepslate_slab',
            'create:polished_cut_tuff_slab', 'create:polished_cut_limestone_slab', 'create:polished_cut_asurine_slab',
            'create:polished_cut_crimsite_slab', 'create:polished_cut_ochrum_slab', 'create:polished_cut_scoria_slab',
            'create:polished_cut_scorchia_slab', 'create:polished_cut_veridium_slab']
    };

    const itemTagRemovals = {
        'curios:head':
            ['create:goggles'],

        'c:hidden_from_recipe_viewers':
            ['create:copper_sheet', 'create:brass_sheet', 'create:golden_sheet', 'create:crushed_raw_gold',
            'create:crushed_raw_copper', 'create:crushed_raw_zinc', 'create:crushed_raw_tin',
            'create:crushed_raw_silver', 'create:crushed_raw_lead', 'create:powdered_obsidian'],

        'create:stone_types/deepslate':
            ['minecraft:deepslate'],

        'create:stone_types/dripstone':
            ['minecraft:dripstone_block'],

        'create:stone_types/blackstone':
            ['minecraft:blackstone']
    };

    // Remove all crushed raw materials
    event.removeAll('create:crushed_raw_materials');

    // Add disabled items to hidden from recipe viewers
    global.CREATE_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item);
        event.add('c:hidden_from_recipe_viewers', item);
    });

    // Add colored valve handles and seats
    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        event.add('tfg:colored_valve_handles', `create:${dye}_valve_handle`);
        if (dye !== 'white') event.add('tfg:colored_seats', `create:${dye}_seat`);
    });

    // Add storage crates, chests, and tanks to non_movable using regex
    event.add('create:non_movable', /gtceu:.*_crate/);
    event.add('create:non_movable', /gtceu:.*_chest/);
    event.add('create:non_movable', /gtceu:.*_tank/);

    // helpers
    Object.entries(itemTagAdditions).forEach(([tag, items]) => {
        items.forEach(item => event.add(tag, item));
    });

    Object.entries(itemTagRemovals).forEach(([tag, items]) => {
        items.forEach(item => event.remove(tag, item));
    });

})
//#endregion

//#region blocks
ServerEvents.tags('block', event => {

    const blockTagAdditions = {
        'create:fan_processing_catalysts/splashing':
            ['tfc:fluid/river_water', 'tfc:fluid/salt_water', 'tfc:fluid/spring_water', 'tfg:semiheavy_ammoniacal_water'],

        'create:chest_mounted_storage':
            ['#forge:chests/wooden', 'framedblocks:framed_chest'],

        'create:non_movable':
            ['gtceu:wood_crate', '#create:toolboxes', 'tfg:spice', 'tfg:geyser_source', 'tfg:geyser_source_small']
    };

    const blockTagRemovals = {
        'create:windmill_sails':
            ['create:sail_frame']
    };

    // Remove all passive boiler heaters, blasting, and haunting catalysts
    event.removeAll('create:passive_boiler_heaters');
    event.removeAll('create:fan_processing_catalysts/blasting');
    event.removeAll('create:fan_processing_catalysts/haunting');

    // Remove disabled blocks
    global.CREATE_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item);
    });

    // Add colored valve handles and seats
    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        event.add('tfg:colored_valve_handles', `create:${dye}_valve_handle`);
        if (dye !== 'white') event.add('tfg:colored_seats', `create:${dye}_seat`);
    });

    // Add storage crates, chests, and tanks to non_movable using regex
    event.add('create:non_movable', /gtceu:.*_crate/);
    event.add('create:non_movable', /gtceu:.*_chest/);
    event.add('create:non_movable', /gtceu:.*_tank/);

    // helpers
    Object.entries(blockTagAdditions).forEach(([tag, items]) => {
        items.forEach(item => event.add(tag, item));
    });

    Object.entries(blockTagRemovals).forEach(([tag, items]) => {
        items.forEach(item => event.remove(tag, item));
    });

})
//#endregion

//#region fluids
ServerEvents.tags('fluid', event => {

    const fluidTagAdditions = {
        'create:bottomless/allow':
            ['tfc:fresh_water', 'tfc:salt_water', 'tfg:semiheavy_ammoniacal_water'],

        'c:hidden_from_recipe_viewers':
            ['create:chocolate', 'create:honey', 'create:builders_tea', 'create:potion'],

        'create:fan_processing_catalysts/splashing':
            ['tfc:river_water', 'tfc:salt_water', 'tfc:spring_water', 'tfg:semiheavy_ammoniacal_water']
    };

    const fluidTagRemovals = {
        'create:bottomless/allow':
            ['minecraft:lava']
    };

    // Remove all blasting and haunting catalysts
    event.removeAll('create:fan_processing_catalysts/blasting');
    event.removeAll('create:fan_processing_catalysts/haunting');

    // helpers
    Object.entries(fluidTagAdditions).forEach(([tag, items]) => {
        items.forEach(item => event.add(tag, item));
    });

    Object.entries(fluidTagRemovals).forEach(([tag, items]) => {
        items.forEach(item => event.remove(tag, item));
    });

})
//#endregion
