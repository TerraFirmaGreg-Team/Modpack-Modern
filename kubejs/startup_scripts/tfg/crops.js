//#region New Crops

// Sunflower

const registerTFGCrops = (event) => {

    event.create('tfg:sunflower', 'tfc:double_crop')
        .displayName('Sunflower')
        .nutrient('phosphorous')
        .stages(8)
        .hardness(0.4)
        .texture('tfg:block/plant/sunflower')
        .productItem('tfg:sunflower')
        .seedItem(function (seed) {
            seed.displayName('Sunflower seed')
            seed.burnTime(100)
            seed.texture('tfg:item/plant/sunflower_seed')
        })
        .deadBlock(function (dead) {
            dead.displayName('Dead Sunflower')
            dead.material("plant")
            dead.hardness(0.2)
        })

    event.create('tfg:wild_sunflower', 'tfc:wild_crop')
        .type('double')
        .displayName("Wild Sunflower")
        .seeds('tfg:sunflower_seeds')
        .hardness(0.2)

            event.create('tfg:rapeseed', 'tfc:double_crop')
        .displayName('Rapeseed')
        .nutrient('phosphorous')
        .stages(12)
        .hardness(0.4)
        .texture('tfg:block/plant/rapeseed')
        .productItem('tfg:rapeseed')
        .seedItem(function (seed) {
            seed.displayName('Rapeseed seed')
            seed.burnTime(100)
            seed.texture('tfg:item/plant/rapeseed_seed')
        })
        .deadBlock(function (dead) {
            dead.displayName('Dead Rapeseed')
            dead.material("plant")
            dead.hardness(0.2)
        })

    event.create('tfg:wild_rapeseed', 'tfc:wild_crop')
        .type('double')
        .displayName("Wild Rapeseed")
        .seeds('tfg:rapeseed_seeds')
        .hardness(0.2)
}

//#endregion

//#region New Items

const registerTFGPlants = (event) => {

    event.create('tfg:sunflower')
        .translationKey('item.tfg.sunflower')
        .texture('tfg:item/plant/sunflower_plant')

    event.create('tfg:roasted_sunflower_seeds')
        .translationKey('item.tfg.roasted_sunflower_seeds')
        .texture('tfg:item/plant/roasted_sunflower_seeds')

    event.create('tfg:rapeseed')
        .translationKey('item.tfg.rapeseed')
        .texture('tfg:item/rapeseed_plant')

}

//#endregion