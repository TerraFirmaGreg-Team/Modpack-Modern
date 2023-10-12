// priority: 999

// Комментарий
ServerEvents.tags('block', event => {
    global.AllStoneTypeNames.forEach(stoneTypeName => {
        event.add('minecraft:stone_ore_replaceables', 'tfc:rock/raw/' + stoneTypeName)
    });
})

