// priority: 0

const hideExtendedCraftingStuff = (event) => {
    extendedCraftingItemsToHide.forEach(itemToHide => {
        event.hide(itemToHide)
    })
}