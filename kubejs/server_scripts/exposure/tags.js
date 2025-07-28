"use strict";

/**
 * 
 * @param {TagEvent.Item} evt 
 */
const registerExposureItemTags = (evt) => {
    evt.add('exposure:black_printing_dyes', '#forge:dyes/black')
    evt.add('exposure:yellow_printing_dyes', '#forge:dyes/yellow')
    evt.add('exposure:cyan_printing_dyes', '#forge:dyes/cyan')
    evt.add('exposure:magenta_printing_dyes', '#forge:dyes/magenta')

    evt.add('exposure:photo_agers', '#forge:dyes/brown')
}