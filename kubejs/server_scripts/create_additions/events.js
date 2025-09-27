// priority: 0
"use strict";

const $FoodData = Java.loadClass("net.dries007.tfc.common.capabilities.food.FoodData")

// hunger, water, saturation, grain, fruit, veg, protein, dairy, decayModifier
const cakeData = new $FoodData(6, 0, 2, 1, 0, 0, 0, 0.5, 0)

BlockEvents.rightClicked(event => {

	const { block, server, player, player: { x, y, z, username } } = event;
	if (block.id !== 'createaddition:chocolate_cake' && block.id !== 'createaddition:honey_cake') return

	let foodData = player.getFoodData();
	if (foodData.needsFood()) foodData.eat(cakeData);
});