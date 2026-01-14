// priority: 0
"use strict";

const registerTFCGroomingStationRecipes = (event) => {

	global.TFC_EQUIPMENT_METALS.forEach(materialName => {
		const trough = `tfcgroomer:${materialName}_grooming_station`;

		event.recipes.gtceu.shaped(trough, [
			'ABA',
			'AAA',
			'C C'
		], {
			A: `#forge:plates/${materialName}`,
			B: '#forge:tools/hammers',
			C: 'tfc:wattle'
		}).addMaterialInfo().id(`tfcgroomer:${materialName}_grooming_station`)

		addMaterialRecyclingNoTagPrefix(event, trough, GTMaterials.get(materialName), 'grooming_station', 5);
	})
}
