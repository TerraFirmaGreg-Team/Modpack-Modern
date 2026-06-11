// priority: 0
"use strict";

function registerMinecraftItemModifications(event) {
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

	// Remove unneeded fuel sources

	event.modify("minecraft:lava_bucket", (item) => {
		item.burnTime = 0;
	});

	global.MINECRAFT_DYE_NAMES.forEach((color) => {
		event.modify(`minecraft:${color}_wool`, (item) => {
			item.burnTime = 0;
		});
		event.modify(`minecraft:${color}_carpet`, (item) => {
			item.burnTime = 0;
		});
	});

	// Ladder burn time

	event.modify('minecraft:ladder', item => {
		item.burnTime = 100
	})
}

function registerMinecraftBlockModifications(event) {

	event.modify('minecraft:cherry_leaves', block => {
		block.hasCollision = false
		block.speedFactor = 0.25
	})
}
