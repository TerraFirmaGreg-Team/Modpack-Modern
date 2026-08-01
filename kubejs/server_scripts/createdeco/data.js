"use strict";

function registerCreateDecoData(event) {

	const coins = [
		'createdeco:gold_coin',
		'createdeco:netherite_coin',
		'createdeco:brass_coin',
		'createdeco:iron_coin',
		'createdeco:copper_coin',
		'createdeco:industrial_iron_coin',
		'createdeco:zinc_coin',
	];

	coins.forEach(coin => {
		event.itemHeat(coin, 1/9, null, null, coin);
		event.itemHeat(`${coin}stack`, 4/9, null, null, `${coin}stack`);
		event.itemSize(coin, "tiny", "very_light", coin);
		event.itemSize(`${coin}stack`, "tiny", "very_light", `${coin}stack`);
	})
}