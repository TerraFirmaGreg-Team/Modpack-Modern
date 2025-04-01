/**
 * 
 * @param {TagEvent.Item} evt 
 */
const registerChalkItemTags = (evt) =>
{
    ["tiny_", "small_", ""].forEach(suffix =>
    {
        evt.add(`chalk:${suffix}dusts_for_chalks`, `tfg:${suffix}chalk_dust`)
        evt.add(`chalk:${suffix}dusts_for_chalks`, `tfg:${suffix}limestone_dust`)
        evt.add(`chalk:${suffix}dusts_for_chalks`, `tfg:${suffix}dripstone_dust`)
    })
}