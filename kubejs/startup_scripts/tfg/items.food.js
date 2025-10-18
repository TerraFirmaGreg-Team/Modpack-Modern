// priority: 0
"use strict";

function registerTFGFoodItems(event) {

	event.create('tfg:food/raw_birt')
		.translationKey('item.tfg.food.raw_birt')
		.food(food => food.hunger(2).saturation(1)
			.effect('species:birtd', 50, 0, 1)
			.eaten(ctx => {
				ctx.player.level.runCommandSilent(`playsound species:effect.birtd.applied player ${ctx.player.username} ${ctx.player.x} ${ctx.player.y} ${ctx.player.z} 1 1`)
			}))

	event.create('tfg:food/cooked_birt')
		.translationKey('item.tfg.food.cooked_birt')
		.food(food => food.hunger(4).saturation(2))

	event.create('tfg:food/raw_limpet')
		.translationKey('item.tfg.food.raw_limpet')
		.food(food => food.hunger(2).saturation(1)
			.effect('minecraft:hunger', 100, 0, 1))

	event.create('tfg:food/cooked_limpet')
		.translationKey('item.tfg.food.cooked_limpet')
		.food(food => food.hunger(4).saturation(2))

	event.create('tfg:food/raw_crawlermari')
		.translationKey('item.tfg.food.raw_crawlermari')
		.food(food => food.hunger(2).saturation(1))

	event.create('tfg:food/cooked_crawlermari')
		.translationKey('item.tfg.food.cooked_crawlermari')
		.food(food => food.hunger(4).saturation(2))

	global.FOOD_FRUIT.forEach(fruit => {
		event.create(`tfg:food/freeze_dried/${fruit.name}`)
			.translationKey(`item.tfg.food.freeze_dried/${fruit.name}`)
			.texture(`tfg:item/food/freeze_dried_${fruit.name}`)
			.tag('tfg:space_food')
			.food(food => food.hunger(4).saturation(1)
				.eaten(ctx => {
					ctx.player.give('tfg:used_foil_pack')
				}))
	})

	event.create('tfg:food/calorie_paste')
		.translationKey('item.tfg.food.calorie_paste')
		.food(food => food.hunger(8).saturation(5)
			.eaten(ctx => {
				ctx.player.give('tfg:used_foil_pack')
			}))
		.texture('tfg:item/food/calorie_paste')
		.tag('tfg:space_food')

	event.create('tfg:used_foil_pack')
		.translationKey('item.tfg.food.used_foil_pack')
		.food(food => food.hunger(0).saturation(0)
			.effect('minecraft:nausea', 200, 0, 1)
		)
		.texture('tfg:item/used_foil_pack')

	event.create('tfg:food/meal_bag')
		.translationKey('item.tfg.food.meal_bag')
		.food(food => food.hunger(6).saturation(3)
			.eaten(ctx => {
				ctx.player.give('tfg:used_foil_pack')
			}))
		.texture('tfg:item/food/meal_bag')
		.tag('tfg:space_food')

	event.create('tfg:roasted_sunflower_seeds')
		.translationKey('item.tfg.roasted_sunflower_seeds')
		.texture('tfg:item/roasted_sunflower_seeds')
		.food(food => food.hunger(4).saturation(2))
		.tag('tfc:foods')
		.tag('tfc:foods/grains')
		.tag('tfc:foods/usable_in_salad')

	//Moon Rabbit
	event.create('tfg:food/raw_moon_rabbit')
		.translationKey('item.tfg.food.raw_moon_rabbit')
		.texture('tfg:item/food/raw_moon_rabbit')
		.food(food => food.hunger(2).saturation(2)
			.effect('minecraft:hunger', 100, 0, 1))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/raw_meats')

	event.create('tfg:food/cooked_moon_rabbit')
		.translationKey('item.tfg.food.cooked_moon_rabbit')
		.texture('tfg:item/food/cooked_moon_rabbit')
		.food(food => food.hunger(4).saturation(8))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/cooked_meats')

	//Glacian Ram
	event.create('tfg:food/raw_glacian_mutton')
		.translationKey('item.tfg.food.raw_glacian_mutton')
		.texture('tfg:item/food/raw_glacian_mutton')
		.food(food => food.hunger(2).saturation(2)
			.effect('minecraft:hunger', 100, 0, 1))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/raw_meats')

	event.create('tfg:food/cooked_glacian_mutton')
		.translationKey('item.tfg.food.cooked_glacian_mutton')
		.texture('tfg:item/food/cooked_glacian_mutton')
		.food(food => food.hunger(5).saturation(8))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/cooked_meats')

	//Sniffer
	event.create('tfg:food/raw_sniffer_beef')
		.translationKey('item.tfg.food.raw_sniffer_beef')
		.texture('tfg:item/food/raw_sniffer_beef')
		.food(food => food.hunger(3).saturation(2)
			.effect('minecraft:hunger', 100, 0, 1))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/raw_meats')

	event.create('tfg:food/cooked_sniffer_beef')
		.translationKey('item.tfg.food.cooked_sniffer_beef')
		.texture('tfg:item/food/cooked_sniffer_beef')
		.food(food => food.hunger(8).saturation(9))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/cooked_meats')

	//Wraptor
	event.create('tfg:food/raw_wraptor')
		.translationKey('item.tfg.food.raw_wraptor')
		.texture('tfg:item/food/raw_wraptor')
		.food(food => food.hunger(3).saturation(2)
			.effect('minecraft:hunger', 100, 0, 1))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/raw_meats')

	event.create('tfg:food/cooked_wraptor')
		.translationKey('item.tfg.food.cooked_wraptor')
		.texture('tfg:item/food/cooked_wraptor')
		.food(food => food.hunger(6).saturation(8))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/cooked_meats')

	//Springling
	event.create('tfg:food/raw_springling_collar')
		.translationKey('item.tfg.food.raw_springling_chops')
		.texture('tfg:item/food/raw_springling_collar')
		.food(food => food.hunger(2).saturation(2)
			.effect('minecraft:hunger', 100, 0, 1))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/raw_meats')

	event.create('tfg:food/cooked_springling_collar')
		.translationKey('item.tfg.food.cooked_springling_chops')
		.texture('tfg:item/food/cooked_springling_collar')
		.food(food => food.hunger(4).saturation(4))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/cooked_meats')

	//Walker
	event.create('tfg:food/raw_walker_steak')
		.translationKey('item.tfg.food.raw_walker_steak')
		.texture('tfg:item/food/raw_walker_steak')
		.food(food => food.hunger(3).saturation(2)
			.effect('minecraft:hunger', 100, 0, 1))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/raw_meats')

	event.create('tfg:food/cooked_walker_steak')
		.translationKey('item.tfg.food.cooked_walker_steak')
		.texture('tfg:item/food/cooked_walker_steak')
		.food(food => food.hunger(8).saturation(10))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/cooked_meats')

	//Glider
	event.create('tfg:food/raw_glider_wings')
		.translationKey('item.tfg.food.raw_glider_wings')
		.texture('tfg:item/food/raw_glider_wings')
		.food(food => food.hunger(1).saturation(1)
			.effect('minecraft:hunger', 100, 0, 1))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/raw_meats')

	event.create('tfg:food/cooked_glider_wings')
		.translationKey('item.tfg.food.cooked_glider_wings')
		.texture('tfg:item/food/cooked_glider_wings')
		.food(food => food.hunger(2).saturation(3))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/cooked_meats')

	//Soarer
	event.create('tfg:food/raw_whole_soarer')
		.translationKey('item.tfg.food.raw_whole_soarer')
		.texture('tfg:item/food/raw_whole_soarer')
		.food(food => food.hunger(2).saturation(2)
			.effect('minecraft:hunger', 100, 0, 1))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/raw_meats')

	event.create('tfg:food/cooked_whole_soarer')
		.translationKey('item.tfg.food.cooked_whole_soarer')
		.texture('tfg:item/food/cooked_whole_soarer')
		.food(food => food.hunger(6).saturation(6))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/cooked_meats')

	//Crusher
	event.create('tfg:food/raw_crusher_meat')
		.translationKey('item.tfg.food.raw_crusher_meat')
		.texture('tfg:item/food/raw_crusher_meat')
		.food(food => food.hunger(3).saturation(2)
			.effect('minecraft:hunger', 100, 0, 1))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/raw_meats')

	event.create('tfg:food/cooked_crusher_meat')
		.translationKey('item.tfg.food.cooked_crusher_meat')
		.texture('tfg:item/food/cooked_crusher_meat')
		.food(food => food.hunger(5).saturation(6))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/cooked_meats')

	//Goober
	event.create('tfg:food/raw_goober_meat')
		.translationKey('item.tfg.food.raw_goober_meat')
		.texture('tfg:item/food/raw_goober_meat')
		.food(food => food.hunger(1).saturation(2)
			.effect('minecraft:hunger', 100, 0, 1))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/raw_meats')

	event.create('tfg:food/cooked_goober_meat')
		.translationKey('item.tfg.food.cooked_goober_meat')
		.texture('tfg:item/food/cooked_goober_meat')
		.food(food => food.hunger(3).saturation(9))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/cooked_meats')

	//Stackatick
	event.create('tfg:food/raw_stackatick_chunks')
		.translationKey('item.tfg.food.raw_stackatick_chunks')
		.texture('tfg:item/food/raw_stackatick_chunks')
		.food(food => food.hunger(1).saturation(1)
			.effect('minecraft:hunger', 100, 0, 1))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/raw_meats')

	event.create('tfg:food/raw_stickastackatick')
		.translationKey('item.tfg.food.raw_stickastackatick')
		.parentModel('tfg:item/food/raw_stickastackatick')
		.food(food => food.hunger(1).saturation(1)
			.effect('minecraft:hunger', 100, 0, 1)
			.eaten(ctx => {
				ctx.player.give('minecraft:stick')
			}))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/raw_meats')

	event.create('tfg:food/cooked_stickastackatick')
		.translationKey('item.tfg.food.cooked_stickastackatick')
		.parentModel('tfg:item/food/cooked_stickastackatick')
		.food(food => food.hunger(2).saturation(5)
			.eaten(ctx => {
				ctx.player.give('minecraft:stick')
			}))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/cooked_meats')

	//Cruncher
	event.create('tfg:food/raw_cruncher_ribs')
		.translationKey('item.tfg.food.raw_cruncher_ribs')
		.texture('tfg:item/food/raw_cruncher_ribs')
		.food(food => food.hunger(2).saturation(2)
			.effect('minecraft:hunger', 100, 0, 1))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/raw_meats')

	event.create('tfg:food/cooked_cruncher_ribs')
		.translationKey('item.tfg.food.cooked_cruncher_ribs')
		.texture('tfg:item/food/cooked_cruncher_ribs')
		.food(food => food.hunger(10).saturation(14))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/cooked_meats')

	//Surfer
	event.create('tfg:food/raw_surfer_steak')
		.translationKey('item.tfg.food.raw_surfer_steak')
		.texture('tfg:item/food/raw_surfer_steak')
		.food(food => food.hunger(2).saturation(2)
			.effect('minecraft:hunger', 100, 0, 1))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/raw_meats')

	event.create('tfg:food/cooked_surfer_steak')
		.translationKey('item.tfg.food.cooked_surfer_steak')
		.texture('tfg:item/food/cooked_surfer_steak')
		.food(food => food.hunger(8).saturation(8))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/cooked_meats')

	//Longpig
	event.create('tfg:food/raw_long_pig_filet')
		.translationKey('item.tfg.food.raw_long_pig_filet')
		.texture('tfg:item/food/raw_long_pig_filet')
		.food(food => food.hunger(2).saturation(1)
			.effect('minecraft:hunger', 100, 0, 1))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/raw_meats')

	event.create('tfg:food/cooked_long_pig_filet')
		.translationKey('item.tfg.food.cooked_long_pig_filet')
		.texture('tfg:item/food/cooked_long_pig_filet')
		.food(food => food.hunger(4).saturation(2))
		.tag('tfc:foods/meats')
		.tag('tfc:foods/cooked_meats')

	// Dino nuggies
	event.create('tfg:food/raw_dino_nugget')
		.texture('tfg:item/food/raw_dino_nugget')
		.food(food => food.hunger(1).saturation(1))
		.tag('tfc:foods')

	event.create('tfg:food/cooked_dino_nugget')
		.texture('tfg:item/food/cooked_dino_nugget')
		.food(food => food.hunger(3).saturation(2))
		.tag('tfc:foods')

	// Ice soup (intentionally not tagged as food)
	event.create('tfg:food/ice_soup')
		.translationKey('item.tfg.food.ice_soup')
		.texture('tfg:item/food/ice_soup')
		.food(food => {
			food.effect('tfg:cooling', 100, 0, 1)
			food.eaten(ctx => {
				ctx.player.give('tfc:ceramic/bowl')
			})
		})
}
