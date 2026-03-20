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

    event.remove('railways:palettes/cycle_groups/netherite/hazard_stripes_black', 'railways:hazard_stripes_diagonal_on_black')
    event.remove('railways:palettes/cycle_groups/netherite/hazard_stripes_black', 'railways:hazard_stripes_chevron_on_black')
    event.remove('railways:palettes/cycle_groups/netherite/hazard_stripes_white', 'railways:hazard_stripes_diagonal_on_white')
    event.remove('railways:palettes/cycle_groups/netherite/hazard_stripes_white', 'railways:hazard_stripes_chevron_on_white')
    event.add('railways:palettes/cycle_groups/netherite/base', 'railways:hazard_stripes_diagonal_on_black')
    event.add('railways:palettes/cycle_groups/netherite/base', 'railways:hazard_stripes_chevron_on_black')
    event.add('railways:palettes/cycle_groups/netherite/base', 'railways:hazard_stripes_diagonal_on_white')
    event.add('railways:palettes/cycle_groups/netherite/base', 'railways:hazard_stripes_chevron_on_white')

    global.LOCOMETAL_COLORS.forEach(x => {
        x.colors.forEach((color, i) => {
        event.remove(`railways:palettes/cycle_groups/${color}/hazard_stripes_black`, `railways:${color}_hazard_stripes_diagonal_on_black`)
        event.remove(`railways:palettes/cycle_groups/${color}/hazard_stripes_black`, `railways:${color}_hazard_stripes_chevron_on_black`)
        event.remove(`railways:palettes/cycle_groups/${color}/hazard_stripes_white`, `railways:${color}_hazard_stripes_diagonal_on_white`)
        event.remove(`railways:palettes/cycle_groups/${color}/hazard_stripes_white`, `railways:${color}_hazard_stripes_chevron_on_white`)
        event.add(`railways:palettes/cycle_groups/${color}/base`, `railways:${color}_hazard_stripes_diagonal_on_black`)
        event.add(`railways:palettes/cycle_groups/${color}/base`, `railways:${color}_hazard_stripes_chevron_on_black`)
        event.add(`railways:palettes/cycle_groups/${color}/base`, `railways:${color}_hazard_stripes_diagonal_on_white`)
        event.add(`railways:palettes/cycle_groups/${color}/base`, `railways:${color}_hazard_stripes_chevron_on_white`)
        })
    })
}
const registerRailWaysBlockTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.RAIL_WAYS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}
