"use strict";

function registerTFGBiotechItems(event) {
		
	event.create('tfg:stainless_steel_needle')
		.unstackable()
		.maxDamage(9999)

	//#region Lab Equipment

	global.LAB_EQUIPMENT_CONTAINERS.forEach((item) => {
		event.create(`tfg:${item.type}`, 'tfc:glass_bottle')
			.fluidTagAccept('tfg:not_solid')
			.capacity(item.capacity)
			.translationKey(`item.tfg.lab_equipment.${item.type}`)
			.tag('tfg:lab_equipment_containers')
			.tag('tfc:fluid_item_ingredient_empty_containers')
			.tag('tfc:glass_bottles')
	})

	event.create('tfg:lab_equipment')
		.translationKey('item.tfg.lab_equipment.lab_equipment')
		.tooltip(Text.translatable('tfg.tooltip.lab_equipment.set'))

	event.create('tfg:dirty_lab_equipment')
		.translationKey('item.tfg.lab_equipment.dirty_lab_equipment')
		.tooltip(Text.translatable('tfg.tooltip.lab_equipment.set_dirty'))
	//#endregion

	
	//#region Bioline

	event.create('tfg:cellulose_matrix')
	event.create('tfg:smooth_endoplasmic_reticula')
	event.create('tfg:rough_endoplasmic_reticula')
	event.create('tfg:alpha_keratin')

	//#endregion
}