/**
 * @param {TagEvent.Item} event
 */
const registerWoodStructItemTags = (event) =>{
    global.getWoodStructArray().forEach(woodType => {
        console.log("Generating Wood Struct Item Tags for " + woodType.modName + ":" + woodType.name);
        //Add track to track tag
        global.invokeIfValid(woodType.railways_data, () =>
        {        
            event.add('create:tracks', woodType.railways_data.track);
            event.add('create:tracks', woodType.railways_data.track_narrow);
            event.add('create:tracks', woodType.railways_data.track_wide);
        });

        //Add everycomp window tags
        global.invokeIfValid(woodType.window, () => event.add('forge:glass', woodType.window));
        global.invokeIfValid(woodType.window_pane, () => event.add('forge:glass_panes', woodType.window_pane));

        //macaw
        global.invokeIfValid(woodType.macaw_data, () =>
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
        global.invokeIfValid(woodType.rnr_data, () =>
        {
            event.add('rnr:shingles', woodType.rnr_data.shingle);
            event.add('rnr:roof_blocks', woodType.rnr_data.shingle_block);
            event.add('rnr:roof_blocks', woodType.rnr_data.shingle_slab);
            event.add('rnr:roof_blocks', woodType.rnr_data.shingle_stair);
            event.add('tfg:whitelisted/facades', woodType.rnr_data.shingle_block);
            event.add('tfg:whitelisted/facades', woodType.rnr_data.window);
        })

        //goog translated:
        // To roast TFC logs in pyrolysis. stove Why can't you just add a tag to a tag? (let's say minecraft:logs), because that breaks all minecraft:logs recipes, magic...
        global.invokeIfValid(woodType.logsTag, () =>
        {
            event.add("minecraft:logs_that_burn", woodType.logsTag);
            event.add("minecraft:logs", woodType.logsTag);
        })

        //goog translated:
        //Chest tags to distinguish their types
        global.invokeIfValid(woodType.chest, () => event.add("tfg:default_chests", woodType.chest));
        global.invokeIfValid(woodType.trapped_chest, () => event.add("tfg:trapped_chests", woodType.trapped_chest));

        global.invokeIfValid(woodType.rope_ladder, () => event.add("tfg:rope_ladders", woodType.rope_ladder));

        global.invokeIfValid(woodType.sign, () => event.add("minecraft:signs", woodType.sign));

        global.invokeIfValid(woodType.railways_data, () =>
        {
            event.add('c:hidden_from_recipe_viewers', woodType.railways_data.incomplete_track)
            event.add('c:hidden_from_recipe_viewers', woodType.railways_data.incomplete_track_narrow)
            event.add('c:hidden_from_recipe_viewers', woodType.railways_data.incomplete)	
        });

        global.invokeIfValid(woodType.woodKind, () =>
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
            
            //Add all the logs to the "wood type" tag
            event.add(`tfg:${tagSuffix}`, woodType.logsTag);
            event.add(`tfg:${tagSuffix}_supports`, woodType.support);

            //If we have tree data
            global.invokeIfValid(woodType.tree_data, () =>
            {
                woodType.tree_data.forEach(treeData =>
                {
                    //And the tree data has log data
                    if(treeData.log_data)
                    {
                        //Add to respective tags if entry exists
                        let logData = treeData.log_data;
                        global.invokeIfValid(logData.stripped_log, () => event.add(`tfg:stripped_${tagSuffix}`, logData.stripped_log));
                        global.invokeIfValid(logData.stripped_wood, () => event.add(`tfg:stripped_${tagSuffix}`, logData.stripped_wood));
                    }
                })
            });


            global.TFC_EQUIPMENT_METALS.forEach(metal =>
            {
                event.add(`tfg:hanging_sign/${metal}/${tagSuffix}`, `${woodType.modName}:wood/hanging_sign/${metal}/${woodType.name}`);
            })
        })

        global.invokeIfValid(woodType.tree_data, () =>
        {
            woodType.tree_data.forEach(treeData =>
            {
                //Ensure the sapling is in the sapling tag.
                event.add('minecraft:saplings', treeData.sapling);
                if(!treeData.log_data)
                {
                    return;
                }

                let logData = treeData.log_data;
                let log = logData.log;
                let strippedLog = logData.stripped_log;
                let wood = logData.wood;
                let strippedWood = logData.stripped_wood;

                let tagWithoutHashtag = woodType.logsTag;
                tagWithoutHashtag = tagWithoutHashtag.replace("#", "");
                //Ensure the logs are inside the logs tag
                if(log)
                    event.add(tagWithoutHashtag, log);
                if(strippedLog)
                    event.add(tagWithoutHashtag, strippedLog);
                if(wood)
                    event.add(tagWithoutHashtag, wood);
                if(strippedWood)
                    event.add(tagWithoutHashtag, strippedWood); 

                //Dont do tapping related tags if the tree doesnt have any tappable liquids
                global.invokeIfValid(treeData.tapper_output, () =>
                {
                    if(log)
                        event.add(`tfg:${treeData.tapper_output}_logs`, log);
                    if(strippedLog)
                        event.add(`tfg:${treeData.tapper_output}_logs`, strippedLog);
                    if(wood)
                        event.add(`tfg:${treeData.tapper_output}_logs`, wood);
                    if(strippedWood)
                        event.add(`tfg:${treeData.tapper_output}_logs`, strippedWood);
                    
                    if(treeData.sapling)
                        event.add(`tfg:${treeData.tapper_output}_saplings`, treeData.sapling);
                    if(treeData.leaf_block)
                        event.add(`tfg:${treeData.tapper_output}_leaves`, treeData.leaf_block);
                    if(treeData.fallen_leaves)
                        event.add(`tfg:${treeData.tapper_output}_fallen_leaves`, treeData.fallen_leaves);
                    if(treeData.twig)
                        event.add(`tfg:${treeData.tapper_output}_twigs`, treeData.twig);
                });
            });
        });

        global.invokeIfValid(woodType.food_shelf, () => event.add('firmalife:food_shelves', woodType.food_shelf));
        global.invokeIfValid(woodType.hanger, () => event.add('firmalife:hangers', woodType.hanger));
        global.invokeIfValid(woodType.jarbnet, () => event.add('firmalife:jarbnets', woodType.jarbnet));
        global.invokeIfValid(woodType.big_barrel, () => event.add('firmalife:big_barrels', woodType.big_barrel));
        global.invokeIfValid(woodType.wine_shelf, () => event.add('firmalife:wine_shelves', woodType.wine_shelf));
        global.invokeIfValid(woodType.stomping_barrel, () => event.add('firmalife:stomping_barrels', woodType.stomping_barrel));
        global.invokeIfValid(woodType.barrel_press, () => event.add('firmalife:barrel_presses', woodType.barrel_press));

        global.invokeIfValid(woodType.sewing_table, () => event.add('tfc:sewing_tables', woodType.sewing_table));
        global.invokeIfValid(woodType.scribing_table, () => event.add('tfc:scribing_tables', woodType.scribing_table));
        global.invokeIfValid(woodType.jar_shelf, () => event.add('tfc:jar_shelves', woodType.jar_shelf));
        global.invokeIfValid(woodType.chest_minecart, () => event.add('tfc:minecarts', woodType.chest_minecart));
    });

}

/**
 * @param {TagEvent.Block} event
 */
const registerWoodStructBlockTags = (event) =>
{
    global.getWoodStructArray().forEach(woodType =>
    {
        console.log("Generating Wood Struct Block Tags for " + woodType.modName + ":" + woodType.name);
        //everycompat
        global.invokeIfValid(woodType.window, () => event.add('tfc:mineable_with_glass_saw', woodType.window));
        global.invokeIfValid(woodType.window_pane, () => event.add('forge:glass_panes', woodType.window_pane));

        //rnr
        global.invokeIfValid(woodType.rnr_data, () =>
        {
            event.add('minecraft:mineable/axe', woodType.rnr_data.shingle_block);
            event.add('minecraft:mineable/axe', woodType.rnr_data.shingle_slab);
            event.add('minecraft:mineable/axe', woodType.rnr_data.shingle_stair);
        });

        //Ensure the firmalife things can be broken with an axe
        global.invokeIfValid(woodType.food_shelf, () => event.add('minecraft:mineable/axe', woodType.food_shelf));
        global.invokeIfValid(woodType.food_shelf, () => event.add('minecraft:mineable/axe', woodType.hanger));
        global.invokeIfValid(woodType.food_shelf, () => event.add('minecraft:mineable/axe', woodType.jarbnet));
        global.invokeIfValid(woodType.food_shelf, () => event.add('minecraft:mineable/axe', woodType.big_barrel));
        global.invokeIfValid(woodType.food_shelf, () => event.add('minecraft:mineable/axe', woodType.wine_shelf));
        global.invokeIfValid(woodType.food_shelf, () => event.add('minecraft:mineable/axe', woodType.stomping_barrel));
        global.invokeIfValid(woodType.food_shelf, () => event.add('minecraft:mineable/axe', woodType.barrel_press));

        global.invokeIfValid(woodType.tree_data, () =>
        {
            woodType.tree_data.forEach(treeData =>
            {
                if(treeData.twig)
                {
                    event.add("tfc:can_be_snow_piled", treeData.twig);
                }

                global.invokeIfValid((treeData.tapper_output && treeData.log_data), () =>
                {
                    //If it has a tapping output, mark it as tappable
                    let logData = treeData.log_data;
                    if(logData.log)
                    {
                        event.add("afc:tappable_logs", woodType.log);
                    }
                    
                    //This will not scale, but maple and birch have "syrup logs tags."
                    var tapperLogTag = (treeData.tapper_output == "maple" || treeData.tapper_output == "birch") ? "tfg:syrup_logs" : `tfg:${treeData.tapper_output}_logs`;
                    if(logData.log)
                        event.add(tapperLogTag, logData.log);
                    if(logData.stripped_log)
                        event.add(tapperLogTag, logData.stripped_log);
                    if(logData.wood)
                        event.add(tapperLogTag, logData.wood);
                    if(logData.stripped_wood)
                        event.add(tapperLogTag, logData.stripped_wood);
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
    global.getWoodStructArray().forEach(woodType =>
    {
        console.log("Generating Wood Struct Entity Tags for " + woodType.modName + ":" + woodType.name);
        global.invokeIfValid(woodType.astikor_data, () =>
        {
            global.invokeIfValid(woodType.astikor_data.animal_cart, () => event.add("tfg:ignores_cacti", woodType.astikor_data.animal_cart));
            global.invokeIfValid(woodType.astikor_data.supply_cart, () => event.add("tfg:ignores_cacti", woodType.astikor_datasupply_cart));
            global.invokeIfValid(woodType.astikor_data.plow, () => event.add("tfg:ignores_cacti", woodType.astikor_data.plow));
        });
    })
}