// priority: 0

const tfcSimpleMaterials = [
    "gypsum",
    "cinnabar",
    "cryolite",
    "saltpeter",
    "sylvite",
    "borax",
    "halite",
    "amethyst",
    "opal",
    "pyrite",
    "topaz",
    "bituminous_coal",
    "lignite",
    "graphite",
    "sulfur",
    "diamond",
    "emerald",
    "lapis_lazuli",
    "ruby",
    "sapphire"
]

const tfcOreTypes = [
    "poor",
    "normal",
    "rich"
]

const tfcOreMaterials = [
    "bismuthinite",
    "cassiterite",
    "garnierite",
    "hematite",
    "limonite",
    "magnetite",
    "malachite",
    "native_copper",
    "native_gold",
    "native_silver",
    "sphalerite",
    "tetrahedrite"
]

const tfcDepositeMaterials = [
    "cassiterite",
    "native_copper",
    "native_gold",
    "native_silver"
]

REIEvents.hide('item', event => {
    
    // Hide unused TFC ores
    global.allTFCStoneTypeNames.forEach(stoneTypeName => {
        tfcSimpleMaterials.forEach(material => {
            event.hide(`tfc:ore/${material}/${stoneTypeName}`)
        })

        tfcOreTypes.forEach(oreTypeName => {
            tfcOreMaterials.forEach(oreMaterialName => {
                event.hide(`tfc:ore/${oreTypeName}_${oreMaterialName}/${stoneTypeName}`)
            })
        })

        tfcDepositeMaterials.forEach(depositeMaterialName => {
            event.hide(`tfc:deposit/${depositeMaterialName}/${stoneTypeName}`)
        })
    })
    
    
    
    
})