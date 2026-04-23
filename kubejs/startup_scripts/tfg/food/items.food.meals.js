// priority: 0
"use strict";

function registerTFGMealFoodItems(event) {
	
	registerTFGFruitMealFoodItems(event);

	//#region Meal Containers

	// Foil Packs
	event.create('tfg:foil_pack');
	event.create('tfg:clean_foil_pack');

	event.create('tfg:used_foil_pack')
		.translationKey('item.tfg.food.used_foil_pack')
		.food(food => food.hunger(0).saturation(0)
			.effect('minecraft:nausea', 200, 0, 1)
		)
		.texture('tfg:item/used_foil_pack');

	//#endregion
	//#region Meals

	// Meal bag
	event.create('tfg:food/meal_bag')
		.translationKey('item.tfg.food.meal_bag')
		.food(food => food.hunger(1).saturation(1)
			.eaten(ctx => {
				if (ctx.player) {
					ctx.player.give('tfg:used_foil_pack')
				}
			})
		)
		.texture('tfg:item/food/meal_bag')
		.tag('tfc:foods')
		.tag('tfg:space_food');

	// Calorie paste
	event.create('tfg:food/calorie_paste')
		.translationKey('item.tfg.food.calorie_paste')
		.food(food => food.hunger(1).saturation(1)
			.eaten(ctx => {
				if (ctx.player) {
					ctx.player.give('tfg:used_foil_pack')
				}
			})
		)
		.texture('tfg:item/food/calorie_paste')
		.tag('tfc:foods')
		.tag('tfg:space_food');

	// Dino nuggies
	event.create('tfg:food/raw_dino_nugget')
		.texture('tfg:item/food/raw_dino_nugget')
		.food(food => food.hunger(1).saturation(1))
		.tag('tfc:foods');

	event.create('tfg:food/cooked_dino_nugget')
		.texture('tfg:item/food/cooked_dino_nugget')
		.food(food => food.hunger(1).saturation(1))
		.tag('tfc:foods');

	// Ice soup (intentionally not tagged as food)
	event.create('tfg:food/ice_soup')
		.translationKey('item.tfg.food.ice_soup')
		.texture('tfg:item/food/ice_soup')
		.food(food => {
			food.effect('tfg:cooling', 100, 0, 1)
			food.eaten(ctx => {
				if (ctx.player) {
					ctx.player.give('tfc:ceramic/bowl')
				}
			})
		});

	// Fried Cheese Curds
	event.create('tfg:food/raw_beer_battered_cheese_curds')
		.translationKey('item.tfg.food.raw_beer_battered_cheese_curds')
		.texture('tfg:item/food/raw_beer_battered_cheese_curds')
		.food(food => food.hunger(1).saturation(1))
		.tag('tfc:foods');

	event.create('tfg:food/cooked_beer_battered_cheese_curds')
		.translationKey('item.tfg.food.cooked_beer_battered_cheese_curds')
		.texture('tfg:item/food/cooked_beer_battered_cheese_curds')
		.food(food => food.hunger(1).saturation(1))
		.tag('tfc:foods')
		.tag('tfg:foods/usable_in_burgers');

	// French Fries
	event.create('tfg:food/raw_fries')
		.translationKey('item.tfg.food.raw_fries')
		.texture('tfg:item/food/raw_fries')
		.food(food => food.hunger(1).saturation(1))
		.tag('tfc:foods');

	event.create('tfg:food/cooked_fries')
		.translationKey('item.tfg.food.cooked_fries')
		.texture('tfg:item/food/cooked_fries')
		.food(food => food.hunger(1).saturation(1))
		.tag('tfc:foods')
		.tag('tfg:foods/usable_in_burgers');

	// Poutine
	event.create('tfg:food/poutine')
		.translationKey('item.tfg.food.poutine')
		.texture('tfg:item/food/poutine')
		.food(food => food.hunger(1).saturation(1))
		.tag('tfc:foods');

	// Brioche Bun
	event.create('tfg:food/brioche_dough')
		.translationKey('item.tfg.food.brioche_dough')
		.texture('tfg:item/food/brioche_dough')
		.food(food => food.hunger(1).saturation(1))
		.tag('tfc:foods');

	event.create('tfg:food/brioche_bun')
		.translationKey('item.tfg.food.brioche_bun')
		.texture('tfg:item/food/brioche_bun')
		.food(food => food.hunger(1).saturation(1))
		.tag('tfc:foods');

	// Burgers
	event.create('tfg:food/raw_burger_patty')
		.translationKey('item.tfg.food.raw_burger_patty')
		.texture('tfg:item/food/raw_burger_patty')
		.food(food => food.hunger(1).saturation(1)
			.effect('minecraft:hunger', 100, 0, 1))
		.tag('tfc:foods')
		.tag('tfc:foods/meats')
		.tag('tfc:foods/raw_meats')
		.tag('tfc:foods/can_be_salted');

	event.create('tfg:food/cooked_burger_patty')
		.translationKey('item.tfg.food.cooked_burger_patty')
		.texture('tfg:item/food/cooked_burger_patty')
		.food(food => food.hunger(1).saturation(1))
		.tag('tfc:foods')
		.tag('tfc:foods/meats')
		.tag('tfc:foods/cooked_meats')
		.tag('tfg:foods/usable_in_burgers');

	event.create('tfg:food/hamburger')
		.translationKey('item.tfg.food.hamburger')
		.texture('tfg:item/food/hamburger')
		.food(food => food.hunger(1).saturation(1))
		.tag('tfc:foods');

	event.create('tfg:food/cheeseburger')
		.translationKey('item.tfg.food.cheeseburger')
		.texture('tfg:item/food/cheeseburger')
		.food(food => food.hunger(1).saturation(1))
		.tag('tfc:foods');

	// Slice of "Cheese" (intentionally not tagged as food)
	event.create('tfg:food/slice_of_cheese')
		.translationKey('item.tfg.food.slice_of_cheese')
		.texture('tfg:item/food/slice_of_cheese')
		.food(food => food.hunger(1).saturation(1)
			.eaten(ctx => {
				if (ctx.player) {
					ctx.player.give(ChemicalHelper.get(TagPrefix.foil, GTMaterials.Polyethylene, 1))
				}
			})
		)
		.tag('tfc:foods/usable_in_jam_sandwich')
		.tag('tfc:foods/usable_in_sandwich')
		.tag('tfg:foods/usable_in_meal_bag')
		.tag('tfc:foods/dairy')
		.tag('tfc:pig_food');

	// Oatmeal
	event.create('tfg:food/oatmeal')
		.translationKey('item.tfg.food.oatmeal')
		.texture('tfg:item/food/oatmeal')
		.food(food => food.hunger(1).saturation(1))
	    .tag('tfc:foods');

	// Instant Mac
	event.create('tfg:food/raw_instant_mac')
		.translationKey('item.tfg.food.raw_instant_mac')
		.texture('tfg:item/food/raw_instant_mac')
		.food(food => food.hunger(1).saturation(1)
			.eaten(ctx => {
				if (ctx.player) {
					ctx.player.give('create:cardboard')
				}
			})
		)
	    .tag('tfc:foods');

	event.create('tfg:food/cooked_instant_mac')
		.translationKey('item.tfg.food.cooked_instant_mac')
		.texture('tfg:item/food/cooked_instant_mac')
		.food(food => food.hunger(1).saturation(1)
			.eaten(ctx => {
				if (ctx.player) {
					ctx.player.give('create:cardboard')
				}
			})
		)
	    .tag('tfc:foods');

	//#endregion
};
