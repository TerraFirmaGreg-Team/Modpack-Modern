ItemEvents.rightClicked(event => {
    if (event.item.hasTag('tfc:nonplaceable')) {
        event.cancel()
    }
})
