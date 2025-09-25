"use strict";

function registerSNSItemModifications(event) {
    const bootPairs = [
        // [hiking_boot, non-hiking_equivalent]
        ['sns:hiking_boots', 'minecraft:leather_boots'],
        ['sns:steel_toe_hiking_boots', 'tfc:metal/boots/steel'],
        ['sns:black_steel_toe_hiking_boots', 'tfc:metal/boots/black_steel'],
        ['sns:blue_steel_toe_hiking_boots', 'tfc:metal/boots/blue_steel'],
        ['sns:red_steel_toe_hiking_boots', 'tfc:metal/boots/red_steel']
    ]

    // for each pair, set the max damage of the hiking boot to 10% more than the normal boot
    bootPairs.forEach(pair => {
        const hikingBoot = pair[0]
        const normalBoot = pair[1]

        event.modify(hikingBoot, item => {
            item.maxDamage = Item.of(normalBoot).maxDamage * 1.1
        })
    })
}

