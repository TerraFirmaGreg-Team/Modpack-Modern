// priority: 0
"use strict";

/**
 * 
 * @param {Registry.Item} event 
 */
function registerBetterEndItems(event) {
	event.create('betterend:bolux_mushroom_cooked')
		.food(food => {
			food.hunger(2)
			food.saturation(2.5)
		})
	event.create('betterend:cave_pumpkin_chunks')
		.food(food => {
			food.hunger(4)
			food.saturation(1)
			food.effect('minecraft:glowing', 10 * 20, 0, 1)
		})
	event.create('betterend:cave_pumpkin_pie_raw')
	event.create('betterend:cave_pumpkin_pie_dough')
		.food(food => { })
	event.create('betterend:cave_pumpkin_pie')
		.food(food => {
			food.hunger(4)
			food.saturation(3)
		})
	event.create('betterend:chorus_mushroom_cooked')
		.food(food => {
			food.hunger(2)
			food.saturation(2.5)
		})
	event.create('betterend:shadow_berry_cooked')
		.food(food => {
			food.hunger(5)
			food.saturation(2)
		})
}