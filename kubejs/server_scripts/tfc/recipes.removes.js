// priority: 0
"use strict";

function removeTFCRecipes(event) {
	
	event.remove({ mod: 'tfc', type: 'tfc:welding' })
	event.remove({ id: /tfc:heating\/metal\/.*/ })
	event.remove({ id: /tfc:heating\/ore\/.*/ })

	global.TFC_METALS.forEach(metal => {
		event.remove({ id: `tfc:crafting/metal/block/${metal}` })
		event.remove({ id: `tfc:crafting/metal/block/${metal}_stairs` })
		event.remove({ id: `tfc:crafting/metal/block/${metal}_slab` })
	})

	// #region Reliable recipe remover doesn't work with the quern
	event.remove({ id: 'tfc:quern/small_bismuthinite' })
	event.remove({ id: 'tfc:quern/small_cassiterite' })
	event.remove({ id: 'tfc:quern/small_garnierite' })
	event.remove({ id: 'tfc:quern/small_hematite' })
	event.remove({ id: 'tfc:quern/small_limonite' })
	event.remove({ id: 'tfc:quern/small_magnetite' })
	event.remove({ id: 'tfc:quern/small_malachite' })
	event.remove({ id: 'tfc:quern/small_native_copper' })
	event.remove({ id: 'tfc:quern/small_native_gold' })
	event.remove({ id: 'tfc:quern/small_native_silver' })
	event.remove({ id: 'tfc:quern/small_sphalerite' })
	event.remove({ id: 'tfc:quern/small_tetrahedrite' })
	event.remove({ id: 'tfc:quern/normal_bismuthinite' })
	event.remove({ id: 'tfc:quern/normal_cassiterite' })
	event.remove({ id: 'tfc:quern/normal_garnierite' })
	event.remove({ id: 'tfc:quern/normal_hematite' })
	event.remove({ id: 'tfc:quern/normal_limonite' })
	event.remove({ id: 'tfc:quern/normal_magnetite' })
	event.remove({ id: 'tfc:quern/normal_malachite' })
	event.remove({ id: 'tfc:quern/normal_native_copper' })
	event.remove({ id: 'tfc:quern/normal_native_gold' })
	event.remove({ id: 'tfc:quern/normal_native_silver' })
	event.remove({ id: 'tfc:quern/normal_sphalerite' })
	event.remove({ id: 'tfc:quern/normal_tetrahedrite' })
	event.remove({ id: 'tfc:quern/poor_bismuthinite' })
	event.remove({ id: 'tfc:quern/poor_cassiterite' })
	event.remove({ id: 'tfc:quern/poor_garnierite' })
	event.remove({ id: 'tfc:quern/poor_hematite' })
	event.remove({ id: 'tfc:quern/poor_limonite' })
	event.remove({ id: 'tfc:quern/poor_magnetite' })
	event.remove({ id: 'tfc:quern/poor_malachite' })
	event.remove({ id: 'tfc:quern/poor_native_copper' })
	event.remove({ id: 'tfc:quern/poor_native_gold' })
	event.remove({ id: 'tfc:quern/poor_native_silver' })
	event.remove({ id: 'tfc:quern/poor_sphalerite' })
	event.remove({ id: 'tfc:quern/poor_tetrahedrite' })
	event.remove({ id: 'tfc:quern/rich_bismuthinite' })
	event.remove({ id: 'tfc:quern/rich_cassiterite' })
	event.remove({ id: 'tfc:quern/rich_garnierite' })
	event.remove({ id: 'tfc:quern/rich_hematite' })
	event.remove({ id: 'tfc:quern/rich_limonite' })
	event.remove({ id: 'tfc:quern/rich_magnetite' })
	event.remove({ id: 'tfc:quern/rich_malachite' })
	event.remove({ id: 'tfc:quern/rich_native_copper' })
	event.remove({ id: 'tfc:quern/rich_native_gold' })
	event.remove({ id: 'tfc:quern/rich_native_silver' })
	event.remove({ id: 'tfc:quern/rich_sphalerite' })
	event.remove({ id: 'tfc:quern/rich_tetrahedrite' })
	//#endregion

	global.TFC_DOUGHS.forEach(dough => {
		for (let i = 1; i <= 8; i++) {
			event.remove({ id: `tfc:crafting/dough/${dough}_dough_${i}` })
		}
	})
}
