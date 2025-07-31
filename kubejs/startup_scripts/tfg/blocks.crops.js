// Priority: 0
"use strict";

const registerTFGCrops = (event) => {

    // Earth

    event.create('tfg:sunflower', 'tfc:double_crop')
        .translationKey('block.tfg.sunflower')
        .soundType('crop')
        .nutrient('nitrogen')
        .stages(4)
        .doubleStages(2)
        .hardness(0.4)
        ['productItem(java.util.function.Consumer)'](product => {
            product.texture('tfg:item/sunflower_product')
        })
        .seedItem(seed => {
            seed.texture('tfg:item/sunflower_seed')
        })
        .deadBlock(dead => {
            dead.hardness(0.2)
            dead.soundType('crop')
        })

    event.create('tfg:sunflower_wild', 'tfc:wild_crop')
        .type('double')
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
        .deadBlock(dead => {
            dead.hardness(0.2)
            dead.soundType('crop')
        })

    event.create('tfg:rapeseed_wild', 'tfc:wild_crop')
        .type('double')
        .soundType('crop')
        .seeds('tfg:rapeseed_seeds')
        .food('tfg:rapeseed_product')
        .hardness(0.2)
        .tagBoth('tfc:wild_crops')
        .tagItem('c:hidden_from_recipe_viewers')

    // Mars

    event.create('betterend:amber_root', 'tfc:crop')
        .soundType('crop')
        .nutrient('phosphorous')
        .stages(3)
        .hardness(0.4)
        ['productItem(java.util.function.Consumer)'](product => {
            product.food(food => {
	            food.hunger(4)
	            food.saturation(1)
            })
        })
        .deadBlock(dead => {
            dead.hardness(0.2)
            dead.soundType('crop')
        })

    event.create('betterend:amber_root_wild', 'tfc:wild_crop')
        .type('default')
        .soundType('crop')
        .seeds('betterend:amber_root_seeds')
        .food('betterend:amber_root_product')
        .hardness(0.2)
        .tagBoth('tfc:wild_crops')
        .tagItem('c:hidden_from_recipe_viewers')


    event.create('betterend:blossom_berry', 'tfc:crop')
        .soundType('crop')
        .nutrient('potassium')
        .stages(3)
        .hardness(0.4)
        ['productItem(java.util.function.Consumer)'](product => {
            product.food(food => {
	            food.hunger(5)
	            food.saturation(1)
            })
        })
        .deadBlock(dead => {
            dead.hardness(0.2)
            dead.soundType('crop')
        })

    event.create('betterend:blossom_berry_wild', 'tfc:wild_crop')
        .type('default')
        .soundType('crop')
        .seeds('betterend:blossom_berry_seeds')
        .food('betterend:blossom_berry_product')
        .hardness(0.2)
        .tagBoth('tfc:wild_crops')
        .tagItem('c:hidden_from_recipe_viewers')


    event.create('betterend:cave_pumpkin')
        .soundType('cherry_wood')
        .tagBlock('minecraft:mineable/axe')
        .tagBlock('minecraft:mineable/hoe')
        .mapColor('color_red')
        .requiresTool(false)
		.fullBlock(false)
		.opaque(false)

    event.create('betterend:cave_pumpkin_plant', 'tfc:spreading_crop')
        .soundType('crop')
        .nutrient('nitrogen')
        .stages(3)
        .hardness(0.4)
        .deadBlock(dead => {
            dead.hardness(0.2)
            dead.soundType('crop')
        })
        .fruitBlock('betterend:cave_pumpkin')

    event.create('betterend:cave_pumpkin_wild', 'tfc:wild_crop')
        .type('spreading')
        .soundType('crop')
        .spreadingFruitBlock('betterend:cave_pumpkin')
        .seeds('betterend:cave_pumpkin_seeds')
        .hardness(0.2)
        .tagBoth('tfc:wild_crops')
        .tagItem('c:hidden_from_recipe_viewers')


    event.create('betterend:chorus_mushroom', 'tfc:crop')
        .translationKey('block.betterend.chorus_mushroom')
        .soundType('nether_wart')
        .nutrient('phosphorous')
        .stages(3)
        .hardness(0.4)
        ['productItem(java.util.function.Consumer)'](product => {
            product.food(food => {
	            food.hunger(2)
	            food.saturation(1)
            })
        })
        .deadBlock(dead => {
            dead.hardness(0.2)
            dead.soundType('nether_wart')
        })

    event.create('betterend:chorus_mushroom_wild', 'tfc:wild_crop')
        .type('default')
        .translationKey('block.betterend.chorus_mushroom_wild')
        .soundType('nether_wart')
        .seeds('betterend:chorus_mushroom_seeds')
        .food('betterend:chorus_mushroom_product')
        .hardness(0.2)
        .tagBoth('tfc:wild_crops')
        .tagItem('c:hidden_from_recipe_viewers')


    event.create('betterend:shadow_berry', 'tfc:crop')
        .soundType('crop')
        .nutrient('potassium')
        .stages(3)
        .hardness(0.4)
        ['productItem(java.util.function.Consumer)'](product => {
            product.food(food => {
	            food.hunger(5)
	            food.saturation(1)
            })
        })
        .deadBlock(dead => {
            dead.hardness(0.2)
            dead.soundType('crop')
        })

    event.create('betterend:shadow_berry_wild', 'tfc:wild_crop')
        .type('default')
        .soundType('crop')
        .seeds('betterend:shadow_berry_seeds')
        .food('betterend:shadow_berry_product')
        .hardness(0.2)
        .tagBoth('tfc:wild_crops')
        .tagItem('c:hidden_from_recipe_viewers')


    event.create('betterend:bolux_mushroom', 'tfc:crop')
        .soundType('nether_wart')
        .nutrient('phosphorous')
        .stages(3)
        .hardness(0.4)
        ['productItem(java.util.function.Consumer)'](product => {
            product.food(food => {
	            food.hunger(2)
	            food.saturation(1)
            })
        })
        .deadBlock(dead => {
            dead.hardness(0.2)
            dead.soundType('nether_wart')
        })

    event.create('betterend:bolux_mushroom_wild', 'tfc:wild_crop')
        .type('default')
        .soundType('nether_wart')
        .seeds('betterend:bolux_mushroom_seeds')
        .food('betterend:bolux_mushroom_product')
        .hardness(0.2)
        .tagBoth('tfc:wild_crops')
        .tagItem('c:hidden_from_recipe_viewers')
}