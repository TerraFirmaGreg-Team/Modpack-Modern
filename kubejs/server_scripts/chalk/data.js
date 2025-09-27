"use strict";

/**
 * 
 * @param {Internal.TFCDataEventJS} evt 
 */
const registerTFCDataForChalk = (evt) => {
    global.MINECRAFT_DYE_NAMES.forEach(dyeName => {
        evt.itemHeat(`tfg:wet_${dyeName}_chalk`, 1, null, null, `tfg:heating/wet_${dyeName}_chalk`)
    })
}