/**
 * @param {TagEvent.Item} event
 */
const registerWoodStructItemTags = (event) =>{
    global.TFC_WOOD_STRUCT.forEach(woodType => {
        console.log("Generating Wood Struct Item Tags for " + woodType.modName + ":" + woodType.name);
        //Add track to track tag
        global.invokeIfNotNull(woodType.track, () => event.add('create:tracks', woodType.track));
        global.invokeIfNotNull(woodType.track_narrow, () => event.add('create:tracks', woodType.track_narrow));
        global.invokeIfNotNull(woodType.track_wide, () => event.add('create:tracks', woodType.track_wide));

        //Add everycomp window tags
        global.invokeIfNotNull(woodType.window, () => event.add('forge:glass', woodType.window));
        global.invokeIfNotNull(woodType.window_pane, () => event.add('forge:glass_panes', woodType.window_pane));

        //macaw
        global.invokeIfNotNull(woodType.macaw_bridges, () =>
        {
            woodType.macaw_bridges.forEach(macawBridge =>
            {
                event.add('mcw_tfc_aio:bridges', macawBridge);
            });
        });
        global.invokeIfNotNull(woodType.macaw_fences, () =>
        {
            woodType.macaw_fences.forEach(macawFence =>
            {
                event.add('minecraft:fence_gates', macawFence);
            });
        });
        global.invokeIfNotNull(woodType.macaw_roofs, () =>
        {
            woodType.macaw_roofs.forEach(macawRoof =>
            {
                event.add('mcw_tfc_aio:roofs', macawRoof);
            });
        });
        global.invokeIfNotNull(woodType.macaw_furniture, () =>
        {
            woodType.macaw_furniture.forEach(macawFurniture =>
            {
                event.add('mcw_tfc_aio:furniture', macawFurniture);
            });
        });
        global.invokeIfNotNull(woodType.macaw_furniture_stripped, () =>
        {
            woodType.macaw_furniture_stripped.forEach(macawFurnitureStripped =>
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

        global.invokeIfNotNull(woodType.name, () =>
        {
            event.add('c:hidden_from_recipe_viewers', `railways:track_incomplete_tfc_${woodType.name}`)
            event.add('c:hidden_from_recipe_viewers', `railways:track_incomplete_tfc_${woodType.name}_narrow`)
            event.add('c:hidden_from_recipe_viewers', `railways:track_incomplete_tfc_${woodType.name}_wide`)	
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
                event.add(`tfg:hanging_sign/${metal}/${tagSuffix}`, `tfc:wood/hanging_sign/${metal}/${woodType.name}`);
            })
        })
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