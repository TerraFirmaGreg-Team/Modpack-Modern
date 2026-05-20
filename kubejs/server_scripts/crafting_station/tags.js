// priority: 0
"use strict";

const registerCraftingStationBlockEntityTags = (event) => {
    global.CF_DISABLED_STORAGES.forEach(storage => {
        event.add('craftingstation:blacklisted', storage)
    })
}