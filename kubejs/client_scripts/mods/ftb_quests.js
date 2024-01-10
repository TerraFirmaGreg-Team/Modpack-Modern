// priority: 0

const hideFTBQuestsStuff = (event) => {
    global.FTB_QUESTS_DISABLED_ITEMS.forEach(item => {
        event.hide(item)
    })
}