// priority: 0
"use strict";

const registerComputerCraftItemTags = (event) => {

    event.remove('minecraft:piglin_loved', 'computercraft:computer_advanced')
    event.remove('minecraft:piglin_loved', 'computercraft:turtle_advanced')
    event.remove('minecraft:piglin_loved', 'computercraft:wireless_modem_advanced')
    event.remove('minecraft:piglin_loved', 'computercraft:pocket_computer_advanced')
    event.remove('minecraft:piglin_loved', 'computercraft:monitor_advanced')
}

const registerComputerCraftBlockTags = (event) => {
    event.add('computercraft:turtle_hoe_harvestable', '#tfc:mineable_with_sharp_tool')
}