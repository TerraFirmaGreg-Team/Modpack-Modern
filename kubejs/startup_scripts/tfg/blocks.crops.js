// Priority: 0

const registerTFGCrops = (event) => {

    event.create('tfg:sunflower', 'tfc:double_crop')
        .displayName('Sunflower')
        .nutrient('nitrogen')
        .stages(8)
        .hardness(0.4)
        .texture('tfg:block/plant/sunflower')
        ['productItem(java.util.function.Consumer)'](product=> {
            product.translationKey('item.tfg.sunflower')
            product.texture('tfg:item/plant/sunflower_plant')
        })
        .seedItem(seed => {
            seed.translationKey('item.tfg.sunflower_seed')
            seed.texture('tfg:item/plant/sunflower_seed')
        })
        .deadBlock(dead => {
            dead.translationKey('item.tfg.sunflower_dead')
            dead.hardness(0.2)
        })

    event.create('tfg:wild_sunflower', 'tfc:wild_crop')
        .type('double')
        .translationKey('item.tfg.wild_sunflower')
        .seeds('tfg:sunflower_seeds')
        .hardness(0.2)

    event.create('tfg:rapeseed', 'tfc:double_crop')
        .displayName('Rapeseed')
        .nutrient('phosphorous')
        .stages(12)
        .hardness(0.4)
        .texture('tfg:block/plant/rapeseed')
        ['productItem(java.util.function.Consumer)'](product => {
            product.translationKey('item.tfg.rapeseed')
            product.texture('tfg:item/plant/rapeseed_plant')
        })
        .seedItem(seed => {
            seed.translationKey('item.tfg.rapeseed_seed')
            seed.texture('tfg:item/plant/rapeseed_seed')
        })
        .deadBlock(dead => {
            dead.translationKey('item.tfg.rapeseed_dead')
            dead.hardness(0.2)
        })

    event.create('tfg:wild_rapeseed', 'tfc:wild_crop')
        .type('double')
        .translationKey('item.tfg.wild_rapeseed')
        .seeds('tfg:rapeseed_seeds')
        .hardness(0.2)
}