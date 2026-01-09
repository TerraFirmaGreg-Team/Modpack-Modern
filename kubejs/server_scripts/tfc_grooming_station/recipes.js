// priority: 0
"use strict";

const registerTFCGroomingStationRecipes = (event) => {

	global.TFC_EQUIPMENT_METALS.forEach(material => {
		event.recipes.gtceu.shaped(`tfcgroomer:${material}_grooming_station`, [
			'ABA',
			'AAA',
			'C C'
		], {
			A: `#forge:plates/${material}`,
			B: '#forge:tools/hammers',
			C: 'tfc:wattle'
		}).addMaterialInfo().id(`tfcgroomer:${material}_grooming_station`)
	})
}
