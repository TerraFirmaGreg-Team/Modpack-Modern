// priority: 0
"use strict";

/** Placeholder crafting for TFG snorkel / flippers / snowshoes */
ServerEvents.recipes((event) => {
    event.shaped("tfg:snowshoes", ["RSR", "SRS", "RSR"], {
        S: "#forge:string",
        R: "#forge:rods/wooden",
    });
    event.shaped("tfg:flippers", [" L ", "L L", "L L"], {
        L: "#forge:plates/rubber",
    });
    event.shaped("tfg:snorkel", [" S ", "PGL", "D T"], {
        S: "#forge:string",
        P: "#forge:small_item_pipes/tin",   
        L: "sns:leather_strip",
        G: "minecraft:glass_pane",
        T: "#forge:tools/screwdrivers",
        D: "#forge:dyes/red_dye"
    });
});
