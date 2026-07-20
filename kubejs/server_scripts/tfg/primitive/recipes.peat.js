"use strict";

function registerTFGPeatRecipes(event) {

		event.custom({
			type: "firmalife:drying",
			ingredient: {
				item: `tfc:peat`
			},
			result: {
				"count": 4,
				item: `tfg:dried_peat_brick`
			}
		}).id(`tfg:drying/peat_drying`)

}