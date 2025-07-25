"use strict";

//#region Preservation Filter
FTBFilterSystemEvents.customFilter("HasPreservation", evt => {
    let stack = evt.getStack()
    let data = evt.getData()
    let foof = TFC.misc.getFood(stack)
    if (foof === null) {
        evt.cancel()
        return
    }

    let trait = TFC.misc.getFoodTrait(data)
    if (trait === null) {
        evt.cancel()
        return
    }

    if (!foof.hasTrait(trait)) {
        evt.cancel()
    }
    evt.success()
})
//#endregion