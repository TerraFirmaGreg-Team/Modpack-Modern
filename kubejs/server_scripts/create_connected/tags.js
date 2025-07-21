"use strict";

const registerCreateConnectedItemTags = (event) => {

	global.CREATE_CONNECTED_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	event.remove('minecraft:creeper_drop_music_discs', ['create_connected:music_disc_elevator', 'create_connected:music_disc_interlude'])
}