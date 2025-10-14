// priority: 0
"use strict";

/** @param {TagEvent.Item} event */
function registerGreateItemTags(event) {
    global.GREATE_DISABLED_ITEMS.forEach((item) => {
        event.removeAllTagsFrom(item);
        event.add("c:hidden_from_recipe_viewers", item);
    });

    global.GREATE_BELTS.forEach((belt) => event.add("greate:belts", belt));
    global.GREATE_CRUSHING_WHEELS.forEach((crushingWheel) => event.add("greate:crushing_wheels", crushingWheel));
    global.GREATE_ENCASED_FANS.forEach((fan) => event.add("greate:encased_fans", fan));
    global.GREATE_MECHANICAL_MIXERS.forEach((mixer) => event.add("greate:mechanical_mixers", mixer));
    global.GREATE_MECHANICAL_PRESSES.forEach((press) => event.add("greate:mechanical_presses", press));
    global.GREATE_MECHANICAL_PUMPS.forEach((pump) => event.add("greate:mechanical_pumps", pump));
    global.GREATE_MECHANICAL_SAWS.forEach((saw) => event.add("greate:mechanical_saws", saw));
    global.GREATE_MILLSTONES.forEach((millstone) => event.add("greate:millstones", millstone));
}

/** @param {TagEvent.Block} event */
function registerGreateBlockTags(event) {
    global.GREATE_DISABLED_ITEMS.forEach((item) => {
        event.removeAllTagsFrom(item);
        event.add("c:hidden_from_recipe_viewers", item);
    });
}

/** @param {TagEvent.Fluid} event */
function registerGreateFluidTags(event) {
    global.GREATE_DISABLED_FLUIDS.forEach((fluid) => {
        event.removeAllTagsFrom(fluid);
        event.add("c:hidden_from_recipe_viewers", fluid);
    });
}
