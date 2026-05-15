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
    
    // fix firmalife food dupe patch
	event.itemSize('firmalife:food/cooked_pizza', 'very_small', 'medium')
	event.itemSize('firmalife:food/burrito', 'very_small', 'medium')
	event.itemSize('firmalife:food/taco', 'very_small', 'medium')
	event.itemSize('firmalife:food/cooked_pie', 'very_small', 'medium')
	event.itemSize('firmalife:food/filled_pie', 'very_small', 'medium')
	event.itemSize('firmalife:food/raw_pizza', 'very_small', 'medium')
	event.itemSize('firmalife:food/stinky_soup', 'very_small', 'medium')
}
//#endregion
