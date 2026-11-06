// priority: 0
"use strict";

const registerRailWaysItemTags = (event) => {

	// Adding Conductor tags
	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		if (dye !== 'white') {
			event.add('tfg:colored_caps', `railways:${dye}_conductor_cap`)
		}
		event.remove('c:hidden_from_recipe_viewers', `railways:${dye}_conductor_cap`)
	})

	event.remove('c:hidden_from_recipe_viewers', `railways:track_incomplete_phantom`)

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

	event.add('tfc:no_icicle_generation', 'railways:track_monorail')

	const LOCO_GLASSES = [
		'round_pane_locometal_window',
		'single_pane_locometal_window',
		'two_pane_locometal_window',
		'four_pane_locometal_window'
	]

	LOCO_GLASSES.forEach(glass => {
		const loco_glass = `railways:${glass}`
		event.add('forge:mineable/wrench', loco_glass)

		global.LOCOMETAL_COLORS.forEach(tfc_dye => {
			tfc_dye.colors.forEach(color => {
				const loco_glass_dyed = `railways:${color}_${glass}`
				event.add('forge:mineable/wrench', loco_glass_dyed)
			})
		})
	})
}
