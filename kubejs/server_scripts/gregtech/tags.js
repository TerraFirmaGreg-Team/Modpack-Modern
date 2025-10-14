// priority: 0
"use strict";

/** @param {TagEvent.Item} event  */
function registerGTCEUItemTags(event) {
    // Удаление тегов у отключенных предметов
    global.GTCEU_DISABLED_ITEMS.forEach((item) => {
        event.removeAllTagsFrom(item);
        event.add("c:hidden_from_recipe_viewers", item);
    });

    global.GTCEU_HIDED_ITEMS.forEach((item) => {
        event.add("c:hidden_from_recipe_viewers", item);
    });

    global.GTCEU_ARMORS.forEach((item) => {
        event.add("minecraft:trimmable_armor", item);
    });

    // Добавление тега EMI для скрытия всех руд
    event.add("c:hidden_from_recipe_viewers", "#forge:ores");

    event.remove("minecraft:planks", "gtceu:treated_wood_planks");
    event.remove("minecraft:planks", "gtceu:treated_wood_plate");

    event.remove("minecraft:planks", "gtceu:wood_plate");

    event.add("tfg:sugars", "minecraft:sugar");
    event.add("tfg:sugars", "afc:birch_sugar");
    event.add("tfg:sugars", "afc:maple_sugar");

    global.MINECRAFT_DYE_NAMES.forEach((dyeName) => {
        event.remove("ae2:p2p_attunements/fluid_p2p_tunnel", `gtceu:${dyeName}_dye_bucket`);
    });

    // Piglin loved
    event.add("minecraft:piglin_loved", "gtceu:tiny_pyrite_dust");
    event.add("minecraft:piglin_loved", "gtceu:poor_raw_pyrite");
    event.add("minecraft:piglin_loved", "gtceu:raw_pyrite");
    event.add("minecraft:piglin_loved", "gtceu:rich_raw_pyrite");

    event.remove("forge:gems", "gtceu:coke_gem");

    // Rose Quartz Lens
    event.add("forge:lenses/pink", "gtceu:rose_quartz_lens");

    event.add("tfc:saws", "#forge:tools/buzzsaws");
    event.add("tfc:saws", "#forge:tools/chainsaws");

    global.GTCEU_CASTING_MOLDS.concat(global.TFG_CASTING_MOLDS).forEach((mold) => {
        event.add("gtceu:casting_molds", mold);
    });

    global.GTCEU_EXTRUDER_MOLDS.concat(global.TFG_EXTRUDER_MOLDS).forEach((mold) => {
        event.add("gtceu:extruder_molds", mold);
    });

    // @ts-expect-error According to KJS docs adding tags to tags is supported.
    event.add("gtceu:molds", "#gtceu:casting_molds", "#gtceu:extruder_molds", "gtceu:empty_mold");
}

/** @param {TagEvent.Block} event  */
function registerGTCEUBlockTags(event) {
    // Удаление тегов у отключенных предметов
    global.GTCEU_DISABLED_ITEMS.forEach((item) => {
        event.removeAllTagsFrom(item);
    });

    event.add("minecraft:mineable/pickaxe", "#forge:ores");
    event.add("minecraft:needs_iron_tool", "#forge:ores");

    // Collapse tags
    event.add("tfc:can_collapse", "#forge:ores");
    event.add("tfc:can_start_collapse", "#forge:ores");
    event.add("tfc:can_trigger_collapse", "#forge:ores");
    event.add("c:hidden_from_recipe_viewers", "#forge:ores");

    event.add("tfc:can_collapse", "#forge:raw_ore_blocks");
    event.add("tfc:can_start_collapse", "#forge:raw_ore_blocks");
    event.add("tfc:can_trigger_collapse", "#forge:raw_ore_blocks");
    event.add("c:hidden_from_recipe_viewers", "#forge:raw_ore_blocks");

    // Let GT indicators be covered by snow
    forEachMaterial((material) => {
        if (material.hasProperty(PropertyKey.ORE)) {
            const indicator = `gtceu:${material.getName()}_indicator`;

            event.add("tfg:dust_ore_indicators", indicator);
            event.add("tfc:can_be_snow_piled", indicator);
            event.add("tfc:can_be_ice_piled", indicator);

            if (material.hasProperty(PropertyKey.GEM)) {
                const bud = `gtceu:${material.getName()}_bud_indicator`;

                event.add("tfg:bud_ore_indicators", bud);
                event.add("tfc:can_be_snow_piled", bud);
                event.add("tfc:can_be_ice_piled", bud);

                event.add("minecraft:mineable/pickaxe", bud);
            }
        }
    });
}

/** @param {TagEvent.Fluid} event  */
function registerGTCEUFluidTags(event) {
    event.add("c:hidden_from_recipe_viewers", /gtceu.*potion.*/);

    event.add("c:hidden_from_recipe_viewers", "gtceu:molten_black_steel");
    event.add("c:hidden_from_recipe_viewers", "gtceu:molten_red_steel");
    event.add("c:hidden_from_recipe_viewers", "gtceu:molten_blue_steel");
    event.add("c:hidden_from_recipe_viewers", "gtceu:damascus_steel");
    event.add("c:hidden_from_recipe_viewers", "gtceu:blaze");
    event.add("c:hidden_from_recipe_viewers", "gtceu:thorium");

	event.add('firmalife:usable_in_mixing_bowl', 'gtceu:concrete')
}
