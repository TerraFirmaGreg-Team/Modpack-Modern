// priority: 0
"use strict";

const registerTFCScrapingKnivesItemTags = (event) => {
    global.TFC_EQUIPMENT_METALS.forEach(metal => {
        event.add('tfcscraping:scraping_knife_blades', `tfcscraping:metal/scraping_knife_blade/${metal}`)
    })
}