// priority: 0

const registerTFCDataForTreeTap = (event) => {
    registerTreeTapHeats(event)
}

const registerTreeTapHeats = (event) => {
    event.itemHeat('treetap:tap', 0.2345, null, null)
}