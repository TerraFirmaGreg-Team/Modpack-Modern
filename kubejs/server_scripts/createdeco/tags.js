"use strict";

const metalBars = /** @type {const} */ (["andesite", "brass", "iron", "copper", "industrial_iron", "zinc"]);

/** @param {TagEvent.Item} event  */
function registerCreateDecoItemTags(event) {
    global.CREATEDECO_DISABLED_ITEMS.forEach((item) => {
        event.removeAllTagsFrom(item);
        event.add("c:hidden_from_recipe_viewers", item);
    });

    event.remove("createdeco:internal/blocks/iron_blocks", "minecraft:iron_block");
    event.remove("createdeco:internal/blocks/industrial_iron_blocks", "create:industrial_iron_block");

    metalBars.forEach((metalBars) => {
        event.add("tfg:metal_bars", `createdeco:${metalBars}_bars`);
        event.add("tfg:metal_bars", `createdeco:${metalBars}_bars_overlay`);
    });

    event.add("createdeco:metal_trapdoors", "createdeco:andesite_trapdoor");
    event.add("createdeco:metal_trapdoors", "createdeco:brass_trapdoor");
    event.add("createdeco:metal_trapdoors", "createdeco:copper_trapdoor");
    event.add("createdeco:metal_trapdoors", "createdeco:industrial_iron_trapdoor");
    event.add("createdeco:metal_trapdoors", "createdeco:zinc_trapdoor");

    event.add("createdeco:internal/plates/iron_plates", "#forge:plates/wrought_iron");
    event.add("createdeco:internal/plates/copper_plates", "#forge:plates/copper");
    event.add("createdeco:internal/plates/brass_plates", "#forge:plates/brass");
    event.add("createdeco:internal/plates/andesite_plates", "#forge:plates/tin_alloy");
    event.add("createdeco:internal/plates/industrial_iron_plates", "#forge:sheets/steel");
    event.add("createdeco:internal/plates/zinc_plates", "#forge:sheets/zinc");

    event.add("createdeco:internal/nuggets/iron_nuggets", "#forge:nuggets/wrought_iron");
    event.add("createdeco:internal/nuggets/copper_nuggets", "#forge:nuggets/copper");
    event.add("createdeco:internal/nuggets/zinc_nuggets", "#forge:nuggets/zinc");
    event.add("createdeco:internal/nuggets/industrial_iron_nuggets", "#forge:nuggets/steel");
    event.add("createdeco:internal/nuggets/brass_nuggets", "#forge:nuggets/brass");
    event.add("createdeco:internal/nuggets/copper_nuggets", "#forge:nuggets/copper");

    event.add("createdeco:internal/ingots/iron_ingots", "#forge:ingots/wrought_iron");
    event.add("createdeco:internal/ingots/copper_ingots", "#forge:ingots/copper");
    event.add("createdeco:internal/ingots/brass_ingots", "#forge:ingots/brass");
    event.add("createdeco:internal/ingots/zinc_ingots", "#forge:ingots/zinc");
    event.add("createdeco:internal/ingots/andesite_ingots", "#forge:ingots/tin_alloy");
    event.add("createdeco:internal/ingots/industrial_iron_ingots", `#forge:ingots/steel`);

    event.add("createdeco:internal/blocks/iron_blocks", "#forge:storage_blocks/wrought_iron");
    event.add("createdeco:internal/blocks/copper", "#forge:storage_blocks/copper");
    event.add("createdeco:internal/blocks/brass_blocks", "#forge:storage_blocks/brass");
    event.add("createdeco:internal/blocks/industrial_iron_blocks", "#forge:storage_blocks/steel");
    event.add("createdeco:internal/blocks/zinc_blocks", "#forge:storage_blocks/zinc");
    event.add("createdeco:internal/blocks/andesite_blocks", "#forge:storage_blocks/tin_alloy");

    global.MINECRAFT_DYE_NAMES.forEach((color) => {
        event.add("createdeco:shipping_containers", `createdeco:${color}_shipping_container`);
    });

		global.CREATE_DECO_GLASS_PANES.forEach(pane => {
			event.add("forge:glass_panes", pane)
		})
}

/** @param {TagEvent.Block} event */
function registerCreateDecoBlockTags(event) {
    metalBars.forEach((metalBars) => {
        // The bars are missing mineable tags for some reason
        event.add("minecraft:mineable/pickaxe", `createdeco:${metalBars}_bars`);
        event.add("minecraft:mineable/pickaxe", `createdeco:${metalBars}_bars_overlay`);
    });
}
