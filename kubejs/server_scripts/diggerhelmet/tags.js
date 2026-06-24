// priority: 0
"use strict";

function registerDiggerHelmetItemTags(event) {

	const DISABLED_ITEMS = [
		'diggerhelmet:eternal_candle',
	]

	DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	event.add('tfc:mob_head_armor', 'diggerhelmet:digger_helmet');
	event.add('tfc:mob_head_armor', 'diggerhelmet:copper_digger_helmet');
	event.add('tfc:mob_head_armor', 'diggerhelmet:bronze_digger_helmet');
	event.add('tfc:mob_head_armor', 'diggerhelmet:bismuth_bronze_digger_helmet');
	event.add('tfc:mob_head_armor', 'diggerhelmet:black_bronze_digger_helmet');
}