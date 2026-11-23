/**
 * @param {TagEvent.Item} event
 */
const registerWoodStructItemTags = (event) =>{
    global.getWoodStructArray().forEach(woodType => {
        console.log("Generating Wood Struct Item Tags for " + woodType.modName + ":" + woodType.name);
        //Add track to track tag
        global.invokeIfNotNull(woodType.railways_data, () =>
        {        
            event.add('create:tracks', woodType.railways_data.track);
            event.add('create:tracks', woodType.railways_data.track_narrow);
            event.add('create:tracks', woodType.railways_data.track_wide);
        });

        //Add everycomp window tags
        global.invokeIfNotNull(woodType.window, () => event.add('forge:glass', woodType.window));
        global.invokeIfNotNull(woodType.window_pane, () => event.add('forge:glass_panes', woodType.window_pane));

        //macaw
        global.invokeIfNotNull(woodType.macaw_data, () =>
        {

            woodType.macaw_data.bridges.forEach(macawBridge =>
            {
                event.add('mcw_tfc_aio:bridges', macawBridge);
            });
            woodType.macaw_data.fences.forEach(macawFence =>
            {
                event.add('minecraft:fence_gates', macawFence);
            });
            woodType.macaw_data.roofs.forEach(macawRoof =>
            {
                event.add('mcw_tfc_aio:roofs', macawRoof);
            });
            woodType.macaw_data.furniture.regular.forEach(macawFurniture =>
            {
                event.add('mcw_tfc_aio:furniture', macawFurniture);
            });
            woodType.macaw_data.furniture.stripped.forEach(macawFurnitureStripped =>
            {
                event.add('mcw_tfc_aio:stripped_furniture', macawFurnitureStripped);
            });
        });
        

        //rnr
        global.invokeIfNotNull(woodType.shingle, () => event.add('rnr:shingles', woodType.shingle));
        global.invokeIfNotNull(woodType.shingle_roof, () => event.add('rnr:roof_blocks', woodType.shingle_roof));
        global.invokeIfNotNull(woodType.shingle_slab, () => event.add('rnr:roof_blocks', woodType.shingle_slab));
        global.invokeIfNotNull(woodType.shingle_stair, () => event.add('rnr:roof_blocks', woodType.shingle_stair));

        //goog translated:
        // To roast TFC logs in pyrolysis. stove Why can't you just add a tag to a tag? (let's say minecraft:logs), because that breaks all minecraft:logs recipes, magic...
        global.invokeIfNotNull(woodType.logs, () => event.add('minecraft:logs_that_burn', woodType.logs));

        //goog translated:
        //Chest tags to distinguish their types
        global.invokeIfNotNull(woodType.chest, () => event.add("tfg:default_chests", woodType.chest));
        global.invokeIfNotNull(woodType.trapped_chest, () => event.add("tfg:trapped_chests", woodType.trapped_chest));

        global.invokeIfNotNull(woodType.rope_ladder, () => event.add("tfg:rope_ladders", woodType.rope_ladder));

        global.invokeIfNotNull(woodType.sign, () => event.add("minecraft:signs", woodType.sign));

        global.invokeIfNotNull(woodType.railways_data, () =>
        {
            event.add('c:hidden_from_recipe_viewers', woodType.railways_data.incomplete_track)
            event.add('c:hidden_from_recipe_viewers', woodType.railways_data.incomplete_track_narrow)
            event.add('c:hidden_from_recipe_viewers', woodType.railways_data.incomplete)	
        });

        global.invokeIfNotNull(woodType.shingle_roof, () => event.add('tfg:whitelisted/facades', woodType.shingle_roof));
        global.invokeIfNotNull(woodType.window, () => event.add('tfg:whitelisted/facades', woodType.window));

        global.invokeIfNotNull(woodType.woodKind, () =>
        {
            let tagSuffix = null;
            if(woodType.woodKind == global.WOOD_KIND.HARD)
            {
                tagSuffix = "hardwood";
            }
            else if(woodType.woodKind == global.WOOD_KIND.SOFT)
            {
                tagSuffix = "softwood";
            }

            if(tagSuffix == null)
            {
                return;
            }
            
            event.add(`tfg:${tagSuffix}`, woodType.logs);
            event.add(`tfg:stripped_${tagSuffix}`, woodType.stripped_log);
            event.add(`tfg:stripped_${tagSuffix}`, woodType.stripped_wood);
            event.add(`tfg:${tagSuffix}_supports`, woodType.support);

            global.TFC_EQUIPMENT_METALS.forEach(metal =>
            {
                event.add(`tfg:hanging_sign/${metal}/${tagSuffix}`, `${woodType.modName}:wood/hanging_sign/${metal}/${woodType.name}`);
            })
        })

        global.invokeIfNotNull(woodType.tree_data, () =>
        {
            woodType.tree_data.forEach(treeData =>{
                //Ensure the sapling is in the sapling tag.
                event.add('minecraft:saplings', treeData.sapling);

                global.invokeIfNotNull(treeData.tapper_output, () =>
                {
                    event.add(`tfg:${treeData.tapper_output}_logs`, woodType.logs);
                    event.add(`tfg:${treeData.tapper_output}_saplings`, treeData.sapling),
                    event.add(`tfg:${treeData.tapper_output}_leaves`, treeData.leaf_block),
                    event.add(`tfg:${treeData.tapper_output}_fallen_leaves`, treeData.fallen_leaves);
                    if(woodType.twig)
                    {
                        event.add(`tfg:${treeData.tapper_output}_twigs`, woodType.twig);
                    }
                });
            });
        });

        global.invokeIfNotNull(woodType.firmalife_data, () =>
        {
            event.add('firmalife:food_shelves', woodType.food_shelf)
            event.add('firmalife:hangers', woodType.firmalife_data.hanger)
            event.add('firmalife:jarbnets', woodType.firmalife_data.jarbnet)
            event.add('firmalife:big_barrels', woodType.firmalife_data.big_barrel)
            event.add('firmalife:wine_shelves', woodType.firmalife_data.wine_shelf)
            event.add('firmalife:stomping_barrels', woodType.firmalife_data.stomping_barrel)
            event.add('firmalife:barrel_presses', woodType.firmalife_data.barrel_press)
        });

        global.invokeIfNotNull(woodType.tfc_data, () =>
        {
            event.add('tfc:sewing_tables', woodType.tfc_data.sewing_table)
            event.add('tfc:scribing_tables', woodType.tfc_data.scribing_table)
            event.add('tfc:jar_shelves', woodType.tfc_data.jar_shelf)
            event.add('tfc:minecarts', woodType.tfc_data.chest_minecart)
        });
    });

}

/**
 * @param {TagEvent.Block} event
 */
const registerWoodStructBlockTags = (event) =>
{
    global.TFC_WOOD_STRUCT.forEach(woodType =>
    {
        console.log("Generating Wood Struct Block Tags for " + woodType.modName + ":" + woodType.name);
        //everycompat
        global.invokeIfNotNull(woodType.window, () => event.add('tfc:mineable_with_glass_saw', woodType.window));
        global.invokeIfNotNull(woodType.window_pane, () => event.add('forge:glass_panes', woodType.window_pane));

        //rnr
        global.invokeIfNotNull(woodType.shingle_roof, () => event.add('minecraft:mineable/axe', woodType.shingle_roof));
        global.invokeIfNotNull(woodType.shingle_slab, () => event.add('minecraft:mineable/axe', woodType.shingle_slab));
        global.invokeIfNotNull(woodType.shingle_stair, () => event.add('minecraft:mineable/axe', woodType.shingle_stair));

        //Ensure the firmalife things can be broken with an axe
        global.invokeIfNotNull(woodType.firmalife_data, () =>
        {
            event.add('minecraft:mineable/axe', woodType.food_shelf)
            event.add('minecraft:mineable/axe', woodType.firmalife_data.hanger)
            event.add('minecraft:mineable/axe', woodType.firmalife_data.jarbnet)
            event.add('minecraft:mineable/axe', woodType.firmalife_data.big_barrel)
            event.add('minecraft:mineable/axe', woodType.firmalife_data.wine_shelf)
            event.add('minecraft:mineable/axe', woodType.firmalife_data.stomping_barrel)
            event.add('minecraft:mineable/axe', woodType.firmalife_data.barrel_press)
        });

        global.invokeIfNotNull(woodType.twig, () => event.add("tfc:can_be_snow_piled", woodType.twig));

        global.invokeIfNotNull(woodType.tree_data, () =>
        {
            woodType.tree_data.forEach(treeData =>
            {
                global.invokeIfNotNull(treeData.tapper_output, () =>
                {
                    //If it has a tapping output, mark it as tappable
                    event.add("afc:tappable_logs", woodType.log);
                    
                    //This will not scale, but maple and birch have "syrup logs tags."
                    var tapperLogTag = (treeData.tapper_output == "maple" || treeData.tapper_output == "birch") ? "tfg:syrup_logs" : `tfg:${treeData.tapper_output}_logs`;
                    event.add(tapperLogTag, woodType.logs);
                })
            })
        });
    })
}

/**
 * 
 * @param {TagEvent.EntityType} event 
 */
const registerWoodStructEntityTags = (event) =>
{
    global.TFC_WOOD_STRUCT.forEach(woodType =>
    {
        console.log("Generating Wood Struct Entity Tags for " + woodType.modName + ":" + woodType.name);
        global.invokeIfNotNull(woodType.astikor_data, () =>
        {
            global.invokeIfNotNull(woodType.astikor_data.animal_cart, () => event.add("tfg:ignores_cacti", woodType.astikor_data.animal_cart));
            global.invokeIfNotNull(woodType.astikor_data.supply_cart, () => event.add("tfg:ignores_cacti", woodType.astikor_datasupply_cart));
            global.invokeIfNotNull(woodType.astikor_data.plow, () => event.add("tfg:ignores_cacti", woodType.astikor_data.plow));
        });
    })
}