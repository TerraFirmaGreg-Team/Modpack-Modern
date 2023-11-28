// priority: 0

const hideExtendedCraftingStuff = (event) => {
    global.EXTENDED_CRAFTING_DISABLED_ITEMS.forEach(item => {
        event.hide(item)
    })
}