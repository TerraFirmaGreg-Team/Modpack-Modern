// priority: 0

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
		.food(food => food.hunger(2).saturation(1))

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
		.texture('tfg:item/plant/roasted_sunflower_seeds')
}