// priority: 0
"use strict";

function removeTFCRecipes(event) {
	
	event.remove({ mod: 'tfc', type: 'tfc:welding' })

	global.TFC_METALS.forEach(metal => {
		event.remove({ id: `tfc:crafting/metal/block/${metal}` })
		event.remove({ id: `tfc:crafting/metal/block/${metal}_stairs` })
		event.remove({ id: `tfc:crafting/metal/block/${metal}_slab` })
	})

	global.TFC_DOUGHS.forEach(dough => {
		for (let i = 1; i <= 8; i++) {
			event.remove({ id: `tfc:crafting/dough/${dough}_dough_${i}` })
		}
	})
}
