"use strict";

/** @param {TagEvent.Item} event */
function registerDomumOrnamentumItemTags(event) {
    global.DOMUM_ORNAMENTUM_FLOATING_CARPETS.forEach((carpet) => {
        event.add("domum_ornamentum:floating_carpet", carpet);
    });
}

/** @param {TagEvent.Block} event */
function registerDomumOrnamentumBlockTags(event) {
    //#region Hidden Items
    global.DOMUM_ORNAMENTUM_DISABLED_ITEMS.forEach((item) => {
        event.removeAllTagsFrom(item);
        event.add("c:hidden_from_recipe_viewers", item);
    });
    //#endregion

    //#region Assign Tags
    const materials = [
        //tags
        "#tfc:rock/bricks",
        "#tfc:rock/smooth",
        "#tfc:rock/gravel",
        "#minecraft:planks",
        "#minecraft:logs",
        "#tfc:colored_raw_alabaster",
        "#tfc:colored_bricks_alabaster",
        "#tfc:colored_polished_alabaster",
        "#tfc:mud_bricks",
        "#forge:sandstone",
        //rnr shingles
        "rnr:wood/shingles/teak",
        "rnr:wood/shingles/cypress",
        "rnr:wood/shingles/fig",
        "rnr:wood/shingles/ironwood",
        "rnr:wood/shingles/ipe",
        "rnr:wood/shingles/chestnut",
        "rnr:wood/shingles/blackwood",
        "rnr:wood/shingles/birch",
        "rnr:wood/shingles/aspen",
        "rnr:wood/shingles/ash",
        "rnr:wood/shingles/acacia",
        "rnr:ceramic_roof",
        "rnr:terracotta_roof",
        "rnr:wood/shingles/douglas_fir",
        "rnr:wood/shingles/hickory",
        "rnr:wood/shingles/kapok",
        "rnr:wood/shingles/mangrove",
        "rnr:wood/shingles/maple",
        "rnr:wood/shingles/oak",
        "rnr:wood/shingles/palm",
        "rnr:wood/shingles/pine",
        "rnr:wood/shingles/rosewood",
        "rnr:wood/shingles/sequoia",
        "rnr:wood/shingles/spruce",
        "rnr:wood/shingles/sycamore",
        "rnr:wood/shingles/white_cedar",
        "rnr:wood/shingles/willow",
        "rnr:wood/shingles/baobab",
        "rnr:wood/shingles/eucalyptus",
        "rnr:wood/shingles/mahogany",
        "rnr:wood/shingles/hevea",
        "rnr:wood/shingles/tualang",
        //tfc blocks
        "tfc:fire_bricks",
        "tfc:aggregate",
        "tfc:alabaster/raw",
        "tfc:alabaster/bricks",
        "tfc:alabaster/polished",
        //gtceu blocks
        "gtceu:coke_oven_bricks",
        "gtceu:firebricks",
        "gtceu:mossy_light_concrete_cobblestone",
        "gtceu:polished_light_concrete",
        "gtceu:light_concrete_bricks",
        "gtceu:cracked_light_concrete_bricks",
        "gtceu:mossy_light_concrete_bricks",
        "gtceu:chiseled_light_concrete",
        "gtceu:light_concrete_tile",
        "gtceu:light_concrete_small_tile",
        "gtceu:light_concrete_windmill_a",
        "gtceu:light_concrete_windmill_b",
        "gtceu:small_light_concrete_bricks",
        "gtceu:square_light_concrete_bricks",
        "gtceu:mossy_dark_concrete_cobblestone",
        "gtceu:polished_dark_concrete",
        "gtceu:dark_concrete_bricks",
        "gtceu:cracked_dark_concrete_bricks",
        "gtceu:mossy_dark_concrete_bricks",
        "gtceu:chiseled_dark_concrete",
        "gtceu:dark_concrete_tile",
        "gtceu:dark_concrete_small_tile",
        "gtceu:dark_concrete_windmill_a",
        "gtceu:dark_concrete_windmill_b",
        "gtceu:small_dark_concrete_bricks",
        "gtceu:square_dark_concrete_bricks",
        //createdeco blocks
        "createdeco:dean_bricks",
        "createdeco:short_dean_bricks",
        "createdeco:tiled_dean_bricks",
        "createdeco:long_dean_bricks",
        "createdeco:corner_dean_bricks",
        "createdeco:cracked_dean_bricks",
        "createdeco:mossy_dean_bricks",
        "createdeco:verdant_bricks",
        "createdeco:short_verdant_bricks",
        "createdeco:tiled_verdant_bricks",
        "createdeco:long_verdant_bricks",
        "createdeco:corner_verdant_bricks",
        "createdeco:cracked_verdant_bricks",
        "createdeco:mossy_verdant_bricks",
        "createdeco:umber_bricks",
        "createdeco:short_umber_bricks",
        "createdeco:tiled_umber_bricks",
        "createdeco:long_umber_bricks",
        "createdeco:corner_umber_bricks",
        "createdeco:cracked_umber_bricks",
        "createdeco:mossy_umber_bricks",
        "createdeco:short_red_bricks",
        "createdeco:tiled_red_bricks",
        "createdeco:long_red_bricks",
        "createdeco:corner_red_bricks",
        "createdeco:cracked_red_bricks",
        "createdeco:mossy_red_bricks",
        "createdeco:scarlet_bricks",
        "createdeco:short_scarlet_bricks",
        "createdeco:tiled_scarlet_bricks",
        "createdeco:long_scarlet_bricks",
        "createdeco:corner_scarlet_bricks",
        "createdeco:cracked_scarlet_bricks",
        "createdeco:mossy_scarlet_bricks",
        "createdeco:blue_bricks",
        "createdeco:short_blue_bricks",
        "createdeco:tiled_blue_bricks",
        "createdeco:long_blue_bricks",
        "createdeco:corner_blue_bricks",
        "createdeco:cracked_blue_bricks",
        "createdeco:mossy_blue_bricks",
        "createdeco:dusk_bricks",
        "createdeco:short_dusk_bricks",
        "createdeco:tiled_dusk_bricks",
        "createdeco:long_dusk_bricks",
        "createdeco:corner_dusk_bricks",
        "createdeco:cracked_dusk_bricks",
        "createdeco:mossy_dusk_bricks",
        "createdeco:pearl_bricks",
        "createdeco:short_pearl_bricks",
        "createdeco:tiled_pearl_bricks",
        "createdeco:long_pearl_bricks",
        "createdeco:corner_pearl_bricks",
        "createdeco:cracked_pearl_bricks",
        "createdeco:mossy_pearl_bricks",
    ];

    materials.forEach((material) => {
        event.add("domum_ornamentum:all_brick_materials", `${material}`);
        event.add("domum_ornamentum:bricks", `${material}`);
        event.add("domum_ornamentum:doors_materials", `${material}`);
        event.add("domum_ornamentum:fancy_doors_materials", `${material}`);
        event.add("domum_ornamentum:fancy_trapdoors_materials", `${material}`);
        event.add("domum_ornamentum:fancy_gate_materials", `${material}`);
        event.add("domum_ornamentum:fence_materials", `${material}`);
        event.add("domum_ornamentum:paper_wall_center", `${material}`);
        event.add("domum_ornamentum:paper_wall_frame", `${material}`);
        event.add("domum_ornamentum:pillar_materials", `${material}`);
        event.add("domum_ornamentum:post_materials", `${material}`);
        event.add("domum_ornamentum:shingles_cover", `${material}`);
        event.add("domum_ornamentum:shingles_roof", `${material}`);
        event.add("domum_ornamentum:shingles_support", `${material}`);
        event.add("domum_ornamentum:slab_materials", `${material}`);
        event.add("domum_ornamentum:stairs_material", `${material}`);
        event.add("domum_ornamentum:timber_frames_center", `${material}`);
        event.add("domum_ornamentum:timber_frames_frame", `${material}`);
        event.add("domum_ornamentum:trapdoors_materials", `${material}`);
    });

    // Gregtech storage blocks don't work here
    event.remove("domum_ornamentum:all_brick_materials", "#forge:storage_blocks");
    event.remove("domum_ornamentum:bricks", "#forge:storage_blocks");
    event.remove("domum_ornamentum:doors_materials", "#forge:storage_blocks");
    event.remove("domum_ornamentum:fancy_doors_materials", "#forge:storage_blocks");
    event.remove("domum_ornamentum:fancy_trapdoors_materials", "#forge:storage_blocks");
    event.remove("domum_ornamentum:fancy_gate_materials", "#forge:storage_blocks");
    event.remove("domum_ornamentum:fence_materials", "#forge:storage_blocks");
    event.remove("domum_ornamentum:paper_wall_center", "#forge:storage_blocks");
    event.remove("domum_ornamentum:paper_wall_frame", "#forge:storage_blocks");
    event.remove("domum_ornamentum:pillar_materials", "#forge:storage_blocks");
    event.remove("domum_ornamentum:post_materials", "#forge:storage_blocks");
    event.remove("domum_ornamentum:shingles_cover", "#forge:storage_blocks");
    event.remove("domum_ornamentum:shingles_roof", "#forge:storage_blocks");
    event.remove("domum_ornamentum:shingles_support", "#forge:storage_blocks");
    event.remove("domum_ornamentum:slab_materials", "#forge:storage_blocks");
    event.remove("domum_ornamentum:stairs_material", "#forge:storage_blocks");
    event.remove("domum_ornamentum:timber_frames_center", "#forge:storage_blocks");
    event.remove("domum_ornamentum:timber_frames_frame", "#forge:storage_blocks");
    event.remove("domum_ornamentum:trapdoors_materials", "#forge:storage_blocks");
    event.remove("domum_ornamentum:framed_light_center", "#forge:storage_blocks");
    //#endregion
}
