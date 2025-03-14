/**
 * 
 * @param {TagEvent.Item} evt 
 */
const registerExposureItemTags = (evt) =>
{
    evt.add('exposure:black_printing_dyes', ['gtceu:chemical_black_dye'])
    evt.add('exposure:yellow_printing_dyes', ['gtceu:chemical_yellow_dye'])
    evt.add('exposure:cyan_printing_dyes', ['gtceu:chemical_cyan_dye'])
    evt.add('exposure:magenta_printing_dyes', ['gtceu:chemical_magenta_dye'])

    evt.add('exposure:photo_agers', ['gtceu:chemical_brown_dye'])
}