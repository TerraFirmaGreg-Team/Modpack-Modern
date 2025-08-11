// priority: 0
"use strict";

const registerRailWaysItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.RAIL_WAYS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
    // Adding Conductor tags
    global.MINECRAFT_DYE_NAMES.forEach(dye => {
		if (dye !== 'white') event.add('tfg:colored_caps', `railways:${dye}_conductor_cap`)
		event.remove('c:hidden_from_recipe_viewers',`railways:${dye}_conductor_cap`)
	})
}
const registerRailWaysBlockTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.RAIL_WAYS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}
