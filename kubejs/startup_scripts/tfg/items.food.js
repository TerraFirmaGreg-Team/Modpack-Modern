// priority: 0

function registerTFGFoodItems(event) {

	event.create('tfg:food/raw_birt')
		.translationKey('item.tfg.food.raw_birt')
		.food(food => food.hunger(2).saturation(2)
			.effect('species:birtd', 50, 0, 1)
			.eaten(ctx => {
				ctx.player.level.runCommandSilent(`playsound species:effect.birtd.applied player ${ctx.player.username} ${ctx.player.x} ${ctx.player.y} ${ctx.player.z} 1 1`)
			}))

	event.create('tfg:food/cooked_birt')
		.translationKey('item.tfg.food.cooked_birt')
		.food(food => food.hunger(6).saturation(6))

	event.create('tfg:food/raw_limpet')
		.translationKey('item.tfg.food.raw_limpet')
		.food(food => food.hunger(2).saturation(2))

	event.create('tfg:food/cooked_limpet')
		.translationKey('item.tfg.food.cooked_limpet')
		.food(food => food.hunger(6).saturation(6))

	event.create('tfg:food/raw_crawlermari')
		.translationKey('item.tfg.food.raw_crawlermari')
		.food(food => food.hunger(2).saturation(2))

	event.create('tfg:food/cooked_crawlermari')
		.translationKey('item.tfg.food.cooked_crawlermari')
		.food(food => food.hunger(6).saturation(6))
}