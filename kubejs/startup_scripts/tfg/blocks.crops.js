// Priority: 0
"use strict";

const registerTFGCrops = (event) => {

    event.create('tfg:sunflower', 'tfc:double_crop')
        .translationKey('block.tfg.sunflower')
        .soundType('crop')
        .nutrient('nitrogen')
        .stages(4)
        .doubleStages(2)
        .hardness(0.4)
        ['productItem(java.util.function.Consumer)'](product=> {
            product.translationKey('item.tfg.sunflower_product')
            product.texture('tfg:item/sunflower_product')
        })
        .seedItem(seed => {
            seed.translationKey('item.tfg.sunflower_seed')
            seed.texture('tfg:item/sunflower_seed')
        })
        .deadBlock(dead => {
            dead.translationKey('block.tfg.sunflower_dead')
            dead.hardness(0.2)
            dead.soundType('crop')
        })

    event.create('tfg:sunflower_wild', 'tfc:wild_crop')
        .type('double')
        .translationKey('block.tfg.sunflower_wild')
        .soundType('crop')
        .seeds('tfg:sunflower_seeds')
        .food('tfg:sunflower_product')
        .hardness(0.2)
        .tagBoth('tfc:wild_crops')
        .tagItem('c:hidden_from_recipe_viewers')

    event.create('tfg:rapeseed', 'tfc:double_crop')
        .translationKey('block.tfg.rapeseed')
        .soundType('crop')
        .nutrient('phosphorous')
        .stages(3)
        .doubleStages(3)
        .hardness(0.4)
        ['productItem(java.util.function.Consumer)'](product => {
            product.translationKey('item.tfg.rapeseed_product')
        })
        .seedItem(seed => {
            seed.translationKey('item.tfg.rapeseed_seed')
        })
        .deadBlock(dead => {
            dead.translationKey('block.tfg.rapeseed_dead')
            dead.hardness(0.2)
            dead.soundType('crop')
        })

    event.create('tfg:rapeseed_wild', 'tfc:wild_crop')
        .type('double')
        .translationKey('block.tfg.rapeseed_wild')
        .soundType('crop')
        .seeds('tfg:rapeseed_seeds')
        .food('tfg:rapeseed_product')
        .hardness(0.2)
        .tagBoth('tfc:wild_crops')
        .tagItem('c:hidden_from_recipe_viewers')
}