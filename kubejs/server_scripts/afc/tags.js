"use strict";

//#region items
ServerEvents.tags('item', event => {

    // Hide disabled items from recipe viewers
    global.AFC_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })

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
        'tfg:latex_logs':
            ['#tfc:kapok_logs', '#afc:hevea_logs', '#afc:rubber_fig_logs'],

        'tfg:rubber_saplings':
            ['tfc:wood/sapling/kapok', 'afc:wood/sapling/red_silk_cotton',
            'afc:wood/sapling/hevea', 'afc:wood/sapling/rubber_fig'],

        'tfg:rubber_leaves':
            ['tfc:wood/leaves/kapok', 'afc:wood/leaves/red_silk_cotton',
            'afc:wood/leaves/hevea', 'afc:wood/leaves/rubber_fig'],

        'tfg:rosin_logs':
            ['#tfc:aspen_logs', '#tfc:spruce_logs', '#tfc:white_cedar_logs', '#tfc:douglas_fir_logs'],

        'tfg:rosin_leaves':
            ['tfc:wood/leaves/aspen', 'afc:wood/leaves/coast_spruce', 'tfc:wood/leaves/spruce',
            'afc:wood/leaves/black_spruce', 'afc:wood/leaves/sitka_spruce', 
            'tfc:wood/leaves/douglas_fir', 'tfc:wood/leaves/white_cedar'],

        'tfg:rosin_saplings':
            ['tfc:wood/sapling/aspen', 'afc:wood/sapling/coast_spruce', 'tfc:wood/sapling/spruce',
            'afc:wood/sapling/black_spruce', 'afc:wood/sapling/sitka_spruce',
            'tfc:wood/sapling/douglas_fir', 'tfc:wood/sapling/white_cedar'],

        'tfg:maple_saplings':
            ['tfc:wood/sapling/maple', 'afc:wood/sapling/bigleaf_maple', 'afc:wood/sapling/weeping_maple'],

        'tfg:maple_leaves':
            ['tfc:wood/leaves/maple', 'afc:wood/leaves/bigleaf_maple', 'tfc:wood/leaves/weeping_maple'],

        'tfg:rubber_plants':
            ['tfc:plant/goldenrod', 'tfc:plant/dandelion']
    }

    // Add AFC saplings to minecraft:saplings tag
    global.AFC_SAPLINGS.forEach(x => {
        event.add('minecraft:saplings', `afc:wood/sapling/${x.sapling}`)
    })

    // Add wood-specific tags for all AFC wood types
    global.AFC_WOOD_TYPES.forEach(woodType => {
        event.add('minecraft:logs_that_burn', `#afc:${woodType}_logs`)
        event.add('tfg:default_chests', `afc:wood/chest/${woodType}`)
        event.add('tfg:trapped_chests', `afc:wood/trapped_chest/${woodType}`)
        event.add('firmalife:food_shelves', `afc:wood/food_shelf/${woodType}`)
        event.add('firmalife:hangers', `afc:wood/hanger/${woodType}`)
        event.add('firmalife:jarbnets', `afc:wood/jarbnet/${woodType}`)
        event.add('firmalife:big_barrels', `afc:wood/big_barrel/${woodType}`)
        event.add('firmalife:wine_shelves', `afc:wood/wine_shelf/${woodType}`)
        event.add('firmalife:stomping_barrels', `afc:wood/stomping_barrel/${woodType}`)
        event.add('firmalife:barrel_presses', `afc:wood/barrel_press/${woodType}`)
        event.add('tfc:sewing_tables', `afc:wood/sewing_table/${woodType}`)
    })

    // Add hardwood-specific tags
    global.AFC_HARDWOOD_TYPES.forEach(woodType => {
        event.add('tfg:hardwood', `#afc:${woodType}_logs`)
        event.add('tfg:stripped_hardwood', `afc:wood/stripped_log/${woodType}`)
        event.add('tfg:stripped_hardwood', `afc:wood/stripped_wood/${woodType}`)
        event.add('tfg:hardwood_supports', `afc:wood/support/${woodType}`)
    })

    // Add softwood-specific tags
    global.AFC_SOFTWOOD_TYPES.forEach(woodType => {
        event.add('tfg:softwood', `#afc:${woodType}_logs`)
        event.add('tfg:stripped_softwood', `afc:wood/stripped_log/${woodType}`)
        event.add('tfg:stripped_softwood', `afc:wood/stripped_wood/${woodType}`)
        event.add('tfg:softwood_supports', `afc:wood/support/${woodType}`)
    })

    // helpers
    Object.entries(itemTagAdditions).forEach(([tag, items]) => {
        items.forEach(item => event.add(tag, item))
    })

})
//#endregion

//#region blocks
ServerEvents.tags('block', event => {

    // Remove all tags from disabled blocks
    global.AFC_DISABLED_ITEMS.forEach(block => {
        event.removeAllTagsFrom(block)
    })

    const blockTagAdditions = {
        'afc:tappable_logs':
            ['tfc:wood/log/ancient_kapok', 'tfc:wood/log/kapok', 'tfc:wood/log/ancient_aspen',
            'tfc:wood/log/aspen', 'tfc:wood/log/ancient_white_cedar', 'tfc:wood/log/white_cedar',
            'tfc:wood/log/ancient_douglas_fir', 'tfc:wood/log/douglas_fir', 'tfc:wood/log/ancient_spruce',
            'tfc:wood/log/spruce', 'beneath:wood/log/crimson', 'beneath:wood/wood/crimson',
            'beneath:wood/log/warped', 'beneath:wood/wood/warped'],

        'tfg:latex_logs':
            ['#tfc:kapok_logs', '#afc:hevea_logs', '#afc:rubber_fig_logs'],

        'tfg:syrup_logs':
            ['#tfc:maple_logs', '#tfc:birch_logs'],

        'tfg:rosin_logs':
            ['#tfc:aspen_logs', '#tfc:spruce_logs', '#tfc:white_cedar_logs', '#tfc:douglas_fir_logs']
    }

    // helpers
    Object.entries(blockTagAdditions).forEach(([tag, items]) => {
        items.forEach(item => event.add(tag, item))
    })

})
//#endregion

//#region fluids
ServerEvents.tags('fluid', event => {

    const fluidsToStrip = [
        'afc:latex'
    ]

    const fluidTagAdditions = {
        'c:hidden_from_recipe_viewers':
            ['afc:latex']
    }

    // helpers
    fluidsToStrip.forEach(fluid => event.removeAllTagsFrom(fluid))
    
    Object.entries(fluidTagAdditions).forEach(([tag, items]) => {
        items.forEach(item => event.add(tag, item))
    })

})
//#endregion
