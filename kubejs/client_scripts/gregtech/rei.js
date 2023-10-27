// priority: 0

const stoneTypesToHide = [
    "sand",
    "red_sand",
    "gravel",
    "ore",
    "deepslate",
    "basalt",
    "endstone",
    "netherrack",
    "andesite",
    "diorite",
    "granite",
    "tuff"
]

REIEvents.hide('item', event => {
    
    // Hide unused GT ores
    GTRegistries.MATERIALS.forEach(material => {
        global.stoneTypesToHide.forEach(stoneTypeName => {
            event.hide(`#forge:ores/${stoneTypeName}/${material}`)
        })
    })
    
})