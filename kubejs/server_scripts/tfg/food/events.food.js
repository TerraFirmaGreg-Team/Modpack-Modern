"use strict";

ItemEvents.foodEaten('firmalife:food/cooked_pie', event => {
	if (event.player.isCreative() === false) {
		event.player.give('firmalife:pie_pan');
	};
});

ItemEvents.foodEaten('minecraft:pumpkin_pie', event => {
	if (event.player.isCreative() === false) {
		event.player.give('firmalife:pie_pan');
	};
});