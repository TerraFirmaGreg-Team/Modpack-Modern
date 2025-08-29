// Priority: 0
"use strict";

const registerTFGCrops = (event) => {

    // Earth Crops

    event.create('tfg:sunflower', 'tfc:double_crop')
        .translationKey('block.tfg.sunflower')
        .soundType('crop')
        .nutrient('nitrogen')
        .stages(4)
        .doubleStages(2)
        .hardness(0.4)
        .growthModifier(0.8)
        .tagBlock('minecraft:mineable/hoe')
        .productItem(product => {
            product.texture('tfg:item/sunflower_product')
        })
        .seedItem(seed => {
            seed.texture('tfg:item/sunflower_seed')
        })
        .deadBlock(dead => {
            dead.hardness(0.2)
            dead.soundType('crop')
            dead.tagBlock('minecraft:mineable/hoe')
        })

    event.create('tfg:sunflower_wild', 'tfc:wild_crop')
        .type('double')
        .soundType('crop')
        .seeds('tfg:sunflower_seeds')
        .food('tfg:sunflower_product')
        .hardness(0.2)
        .tagBoth('tfc:wild_crops')
        .tagBlock('minecraft:mineable/hoe')
        .tagItem('c:hidden_from_recipe_viewers')

    event.create('tfg:rapeseed', 'tfc:double_crop')
        .translationKey('block.tfg.rapeseed')
        .soundType('crop')
        .nutrient('phosphorous')
        .stages(3)
        .doubleStages(3)
        .hardness(0.4)
        .tagBlock('minecraft:mineable/hoe')
        .deadBlock(dead => {
            dead.hardness(0.2)
            dead.soundType('crop')
            dead.tagBlock('minecraft:mineable/hoe')
        })

    event.create('tfg:rapeseed_wild', 'tfc:wild_crop')
        .type('double')
        .soundType('crop')
        .seeds('tfg:rapeseed_seeds')
        .food('tfg:rapeseed_product')
        .hardness(0.2)
        .tagBoth('tfc:wild_crops')
        .tagBlock('minecraft:mineable/hoe')
        .tagItem('c:hidden_from_recipe_viewers')
		
	event.create('tfg:flax', 'tfc:double_crop')
        .translationKey('block.tfg.flax')
        .soundType('crop')
        .nutrient('nitrogen')
        .stages(5)
        .doubleStages(3)
        .hardness(0.4)
        .growthModifier(1.2)
		.expiryModifier(1.2)
        .tagBlock('minecraft:mineable/hoe')
        .productItem(product => {
            product.texture('tfg:item/flax_product')
        })
        .seedItem(seed => {
            seed.texture('tfg:item/flax_seed')
			seed.food(food => {
	            food.hunger(1)
	            food.saturation(2)
            })
        })
        .deadBlock(dead => {
            dead.hardness(0.2)
            dead.soundType('crop')
            dead.tagBlock('minecraft:mineable/hoe')
        })

    event.create('tfg:flax_wild', 'tfc:wild_crop')
        .type('double')
        .soundType('crop')
        .seeds('tfg:flax_seeds')
        .food('tfg:flax_product')
        .hardness(0.2)
        .tagBoth('tfc:wild_crops')
        .tagBlock('minecraft:mineable/hoe')
        .tagItem('c:hidden_from_recipe_viewers')

    // Mars Crops

    event.create('betterend:amber_root', 'tfc:crop')
        .soundType('crop')
        .nutrient('phosphorous')
        .stages(3)
        .hardness(0.4)
        .tagBlock('minecraft:mineable/hoe')
        .productItem(product => {
            product.food(food => {
	            food.hunger(4)
	            food.saturation(1)
            })
        })
        .deadBlock(dead => {
            dead.hardness(0.2)
            dead.soundType('crop')
            dead.tagBlock('minecraft:mineable/hoe')
        })

    event.create('betterend:amber_root_wild', 'tfc:wild_crop')
        .type('default')
        .soundType('crop')
        .seeds('betterend:amber_root_seeds')
        .food('betterend:amber_root_product')
        .hardness(0.2)
        .tagBoth('tfc:wild_crops')
        .tagBlock('minecraft:mineable/hoe')
        .tagItem('c:hidden_from_recipe_viewers')


    event.create('betterend:blossom_berry', 'tfc:crop')
        .soundType('crop')
        .nutrient('potassium')
        .stages(3)
        .hardness(0.4)
        .tagBlock('minecraft:mineable/hoe')
        .productItem(product => {
            product.food(food => {
	            food.hunger(5)
	            food.saturation(1)
            })
        })
        .deadBlock(dead => {
            dead.hardness(0.2)
            dead.soundType('crop')
            dead.tagBlock('minecraft:mineable/hoe')
        })

    event.create('betterend:blossom_berry_wild', 'tfc:wild_crop')
        .type('default')
        .soundType('crop')
        .seeds('betterend:blossom_berry_seeds')
        .food('betterend:blossom_berry_product')
        .hardness(0.2)
        .tagBoth('tfc:wild_crops')
        .tagBlock('minecraft:mineable/hoe')
        .tagItem('c:hidden_from_recipe_viewers')


    event.create('betterend:cave_pumpkin')
        .soundType('cherry_wood')
        .tagBlock('minecraft:mineable/axe')
        .tagBlock('minecraft:mineable/hoe')
        .mapColor('color_red')
        .requiresTool(false)
		.fullBlock(false)
		.opaque(false)
        .notSolid()

    event.create('betterend:cave_pumpkin_plant', 'tfc:spreading_crop')
        .soundType('crop')
        .nutrient('nitrogen')
        .stages(3)
        .hardness(0.4)
        .tagBlock('minecraft:mineable/hoe')
        .deadBlock(dead => {
            dead.hardness(0.2)
            dead.soundType('crop')
            dead.tagBlock('minecraft:mineable/hoe')
        })
        .fruitBlock('betterend:cave_pumpkin')
        .textureAt(0, "betterend:block/cave_pumpkin_stem_0")
        .textureAt(1, "betterend:block/cave_pumpkin_stem_1")
        .textureAt(2, "betterend:block/cave_pumpkin_stem_2")
        .textureAt(3, "betterend:block/cave_pumpkin_stem_3")
        .texture("side", "betterend:block/cave_pumpkin_stem_3_side")

    event.create('betterend:cave_pumpkin_wild', 'tfc:wild_crop')
        .type('spreading')
        .soundType('crop')
        .spreadingFruitBlock('betterend:cave_pumpkin')
        .seeds('betterend:cave_pumpkin_seeds')
        .hardness(0.2)
        .tagBoth('tfc:wild_crops')
        .tagBlock('minecraft:mineable/hoe')
        .tagItem('c:hidden_from_recipe_viewers')


    event.create('betterend:chorus_mushroom', 'tfc:crop')
        .translationKey('block.betterend.chorus_mushroom')
        .soundType('nether_wart')
        .nutrient('phosphorous')
        .stages(3)
        .hardness(0.4)
        .tagBlock('minecraft:mineable/hoe')
        .productItem(product => {
            product.food(food => {
	            food.hunger(2)
	            food.saturation(1)
                food.effect('minecraft:hunger', 30 * 20, 0, 1)
                food.effect('minecraft:weakness', 30 * 20, 0, 1)
            })
        })
        .deadBlock(dead => {
            dead.hardness(0.2)
            dead.soundType('nether_wart')
            dead.tagBlock('minecraft:mineable/hoe')
        })

    event.create('betterend:chorus_mushroom_wild', 'tfc:wild_crop')
        .type('default')
        .translationKey('block.betterend.chorus_mushroom_wild')
        .soundType('nether_wart')
        .seeds('betterend:chorus_mushroom_seeds')
        .food('betterend:chorus_mushroom_product')
        .hardness(0.2)
        .tagBoth('tfc:wild_crops')
        .tagBlock('minecraft:mineable/hoe')
        .tagItem('c:hidden_from_recipe_viewers')


    event.create('betterend:shadow_berry', 'tfc:crop')
        .soundType('crop')
        .nutrient('potassium')
        .stages(3)
        .hardness(0.4)
        .tagBlock('minecraft:mineable/hoe')
        .productItem(product => {
            product.food(food => {
	            food.hunger(5)
	            food.saturation(1)
                food.effect('minecraft:poison', 5 * 20, 0, 1)
            })
        })
        .deadBlock(dead => {
            dead.hardness(0.2)
            dead.soundType('crop')
            dead.tagBlock('minecraft:mineable/hoe')
        })

    event.create('betterend:shadow_berry_wild', 'tfc:wild_crop')
        .type('default')
        .soundType('crop')
        .seeds('betterend:shadow_berry_seeds')
        .food('betterend:shadow_berry_product')
        .hardness(0.2)
        .tagBoth('tfc:wild_crops')
        .tagBlock('minecraft:mineable/hoe')
        .tagItem('c:hidden_from_recipe_viewers')


    event.create('betterend:bolux_mushroom', 'tfc:crop')
        .soundType('nether_wart')
        .nutrient('phosphorous')
        .stages(3)
        .hardness(0.4)
        .tagBlock('minecraft:mineable/hoe')
        .productItem(product => {
            product.food(food => {
	            food.hunger(2)
	            food.saturation(1)
                food.effect('tfc:thirst', 60 * 20, 0, 1)
                food.effect('minecraft:nausea', 30 * 20, 0, 1)
            })
        })
        .deadBlock(dead => {
            dead.hardness(0.2)
            dead.soundType('nether_wart')
            dead.tagBlock('minecraft:mineable/hoe')
        })

    event.create('betterend:bolux_mushroom_wild', 'tfc:wild_crop')
        .type('default')
        .soundType('nether_wart')
        .seeds('betterend:bolux_mushroom_seeds')
        .food('betterend:bolux_mushroom_product')
        .hardness(0.2)
        .tagBoth('tfc:wild_crops')
        .tagBlock('minecraft:mineable/hoe')
        .tagItem('c:hidden_from_recipe_viewers')

    // Mars Saplings

    event.create('tfg:saplings/crimson', 'tfc:sapling')
        .features('tfg:mars/tree/crimson')
        .translationKey('minecraft.block.crimson_fungus')
        .growthDays(6)

    event.create('tfg:saplings/warped', 'tfc:sapling')
        .features('tfg:mars/tree/warped')
        .translationKey('minecraft.block.warped_fungus')
        .growthDays(6)

    event.create('tfg:saplings/alphacene', 'tfc:sapling')
        .features('species:alphacene_mushroom')
        .translationKey('species.block.alphacene_mushroom')
        .growthDays(3)

    event.create('tfg:saplings/strophar', 'tfc:sapling')
        .features('tfg:mars/tree/strophar')
        .translationKey('ad_astra.block.strophar_mushroom')
        .growthDays(7)

    event.create('tfg:saplings/aeronos', 'tfc:sapling')
        .features('tfg:mars/tree/aeronos')
        .translationKey('ad_astra.block.strophar_mushroom')
        .growthDays(9)

    event.create('tfg:saplings/glacian', 'tfc:sapling')
        .features('tfg:mars/tree/glacian')
        .growthDays(9)
}