// priority: 0
"use strict";

function registerTFGRepairRecipes(event) {
     event.custom({
        type: 'tfg:item_repair',
        pattern: [
            " R ",
            " H ",
            " T "
        ],
        key: {
            H: { item: "gtceu:wrought_iron_knife" },
            R: { tag: "forge:ingots/wrought_iron" },
            T: { tag: "forge:tools/hammers" }
        },
        repairPercentage: 0.75
    }).id('tfg:item_repair/repair_test')
}