// priority: 0
"use strict";

const registerCraftingStationBlockEntityTags = (event) => {
    global.CF_WHITELISTED_STORAGES.forEach(storage => {
        event.add('craftingstation:whitelisted', storage)
    })
}