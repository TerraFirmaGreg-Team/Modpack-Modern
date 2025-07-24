// priority: 0
"use strict";

const registerTFCDataForFirmalife = (event) => {
    registerFirmalifeItemSize(event)
}

//#region registerFirmalifeItemSize
const registerFirmalifeItemSize = (event) => {
    event.itemSize('firmalife:jar/honey', 'tiny', 'medium', 'jar_of_honey')
    event.itemSize('firmalife:jar/compost', 'tiny', 'medium', 'jar_of_compost')
    event.itemSize('firmalife:jar/rotten_compost', 'tiny', 'medium', 'jar_of_rotten_compost')
    event.itemSize('firmalife:jar/guano', 'tiny', 'medium', 'jar_of_guano')

}
//#endregion
