// priority: 0
"use strict";

function registerMinecraftItemModifications(event) {

	event.modify('minecraft:red_mushroom', item => {
		item.foodProperties = food => {
			food.hunger(2)
			food.saturation(1)
			food.effect('minecraft:nausea', 100, 1, 1)
		}
	})

	event.modify('minecraft:brown_mushroom', item => {
		item.foodProperties = food => {
			food.hunger(2)
			food.saturation(1)
		}
	})

	event.modify('minecraft:popped_chorus_fruit', item => {
		item.foodProperties = food => {
			food.hunger(2)
			food.saturation(1)
		}
	})

	event.modify('minecraft:elytra', item => {
		item.maxDamage = 2046
	})

	// Matches blue steel greaves

	event.modify('minecraft:netherite_leggings', item => {
		item.maxDamage = 960
	})

	// Removes lava buckets as fuel

	event.modify('minecraft:lava_bucket', item => {
		item.burnTime = 0
	})

	// Ladder burn time

	event.modify('minecraft:ladder', item => {
		item.burnTime = 100
	})
}
