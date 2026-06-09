// priority: 0
"use strict";

function registerTFCLunchBoxRecipes(event) {
    event.remove({ id: 'tfclunchbox:upgrade_to_cooling_lunchbox' })
    event.remove({ id: 'tfclunchbox:electric_lunchbox' })

    event.shaped('tfclunchbox:cooling_lunchbox', [
        ' A ',
        'BCB'
    ], {
		A: '#forge:tools/hammers',
		B: '#forge:sheets/red_steel',
        C: 'tfclunchbox:lunchbox'
	}).id('tfg:shaped/upgrade_to_cooling_lunchbox')
    .modifyResult((grid, result) => {
			let orig = grid.find(Item.of('tfclunchbox:lunchbox'))

			if (orig.nbt == null) {
				return result;
			} else {
                delete orig.nbt.display;
				return result.withNBT({
                    Items: {
                        Items: orig.nbt.Items.Items
                    }
                });
			}
		})

    event.shaped('tfclunchbox:electric_lunchbox', [
        ' AB',
        'CDC',
        'EFE'
    ], {
		A: '#forge:fine_wires/copper',
        B: '#forge:tools/hammers',
		C: '#forge:sheets/blue_steel',
        D: 'tfclunchbox:cooling_lunchbox',
        E: '#forge:screws/steel',
        F: '#gtceu:circuits/lv'
	}).id('tfg:shaped/upgrade_to_electric_lunchbox')
    .modifyResult((grid, result) => {
			let orig = grid.find(Item.of('tfclunchbox:cooling_lunchbox'))

			if (orig.nbt == null) {
				return result;
			} else {
                delete orig.nbt.display;
				return result.withNBT({
                    Items: {
                        Items: orig.nbt.Items.Items
                    }
                });
			}
		})
}