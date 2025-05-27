// priority: 0

const registerTFCDataForFirmalife = (event) => {
    registerFirmalifeItemSize(event)
}

//#region registerFirmalifeItemSize
const registerFirmalifeItemSize = (event) => {
    event.itemSize('firmalife:jar/honey', 'tiny', 'medium')
    event.itemSize('firmalife:jar/compost', 'tiny', 'medium')
    event.itemSize('firmalife:jar/rotten_compost', 'tiny', 'medium')
    event.itemSize('firmalife:jar/guano', 'tiny', 'medium')

}
//#endregion
