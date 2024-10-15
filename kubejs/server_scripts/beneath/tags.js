// priority: 0

const registerBeneathItemTags = (event) => {
    event.add('minecraft:saplings', 'beneath:wood/sapling/crimson')
    event.add('minecraft:saplings', 'beneath:wood/sapling/warped')
}

const registerBeneathBlockTags = (event) => {

}

const registerBeneathPlacedFeatures = (event) => {
    
    //#region Удаляем все руды TFC из генерации мира
    const ALL_DISABLED_BENEATH_VEINS = [
        'beneath:vein/cursecoal',
        'beneath:vein/deep_gold',
        'beneath:vein/normal_gold',
        'beneath:vein/quartz',
        'beneath:vein/sylvite'
    ]

    ALL_DISABLED_BENEATH_VEINS.forEach(vein => {
        event.remove('beneath:veins', vein)
    })
    //#endregion
}