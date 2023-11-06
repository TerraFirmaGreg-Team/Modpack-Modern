// priority: 0

const hideGTStuff = (event) => {
    // Hide unused GT ores
    GTRegistries.MATERIALS.forEach(material => {
        stoneTypesToHide.forEach(stoneTypeName => {
            event.hide(`#forge:ores/${stoneTypeName}/${material}`)
        })
    })
}

const groupGTStuff = (event) => {
    event.groupItemsByTag('tfg:rei_groups/nuggets', 'Nuggets', 'forge:nuggets')
    event.groupItemsByTag('tfg:rei_groups/dusts_tiny', 'Tiny Dusts', 'forge:dusts/tiny')
    event.groupItemsByTag('tfg:rei_groups/dusts_small', 'Small Dusts', 'forge:dusts/small')
    event.groupItemsByTag('tfg:rei_groups/dusts', 'Dusts', 'forge:dusts')
    event.groupItemsByTag('tfg:rei_groups/dusts_pure', 'Pure Dusts', 'forge:dusts/pure')
    event.groupItemsByTag('tfg:rei_groups/dusts_impure', 'Impure Dusts', 'forge:dusts/impure')
    event.groupItemsByTag('tfg:rei_groups/ores', 'Ores', 'forge:ores')
    event.groupItemsByTag('tfg:rei_groups/crushed_ores', 'Crushed Ores', 'forge:crushed_ores')
    event.groupItemsByTag('tfg:rei_groups/purified_ores', 'Purified Ores', 'forge:purified_ores')
    event.groupItemsByTag('tfg:rei_groups/refined_ores', 'Refined Ores', 'forge:refined_ores')

    // event.groupItems('tfg:rei_groups/poor_raw_ores', 'Poor Raw Ores', [/gtceu:poor_raw/])
    // event.groupItems('tfg:rei_groups/normal_raw_ores', 'Normal Raw Ores', [/gtceu:raw/])
    // event.groupItems('tfg:rei_groups/rich_raw_ores', 'Rich Raw Ores', [/gtceu:rich_raw/])
    // todo: add poor raw ore
    // todo: add normal raw ore
    // todo: add rich raw ore
}