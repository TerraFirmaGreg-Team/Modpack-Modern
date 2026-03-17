// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGCollapseRecipes(event) {
	
	const SHAPES = ['stair', 'slab', 'wall'];

	// Rocks
	for (let [rockId, rock] of Object.entries(global.BIG_ROCK_TABLE)) {

		if (rock.cobble != null) {
			if (rock.raw != null && rock.collapsible) {
				event.recipes.tfc.collapse(rock.cobble.block, rock.raw.block);

				SHAPES.forEach(shape => {
					if (rock.raw[shape] != null) {
						event.recipes.tfc.collapse(rock.cobble[shape], rock.raw[shape]);
					}
				})
			}
			if (rock.hardened != null) {
				event.recipes.tfc.collapse(rock.cobble.block, rock.hardened);
			}
			if (rock.polished != null && rock.collapsible) {
				event.recipes.tfc.collapse(rock.cobble.block, rock.polished.block);

				SHAPES.forEach(shape => {
					if (rock.polished[shape] != null) {
						event.recipes.tfc.collapse(rock.cobble[shape], rock.polished[shape]);
					}
				})
			}

			if (Ingredient.of(`#forge:ores_in_ground/${rockId}`).itemIds.toArray().length > 0) {
				event.recipes.tfc.collapse(rock.cobble.block, `#forge:ores_in_ground/${rockId}`)
			}

			event.recipes.tfc.landslide(rock.cobble.block, rock.cobble.block);

			if (rock.cobble.mossy != null) {
				event.recipes.tfc.landslide(rock.cobble.mossy.block, rock.cobble.mossy.block);
			}
		}

		if (rock.gravel != null) {
			event.recipes.tfc.landslide(rock.gravel, rock.gravel);
		}
	}

	event.recipes.tfc.collapse('#tfg:rock_slabs').id('tfg:collapse/rock_slabs')
	event.recipes.tfc.collapse('#tfg:rock_stairs').id('tfg:collapse/rock_stairs')
	event.recipes.tfc.collapse('#tfg:rock_walls').id('tfg:collapse/rock_walls')

	// Nether
	event.recipes.tfc.collapse('tfc:rock/cobble/basalt', 'minecraft:basalt')
	event.recipes.tfc.landslide('tfg:ash_pile', 'tfg:ash_pile')

	// Space
	event.recipes.tfc.landslide('ad_astra:moon_sand', 'ad_astra:moon_sand')
	event.recipes.tfc.landslide('ad_astra:mars_sand', 'ad_astra:mars_sand')
	event.recipes.tfc.landslide('ad_astra:venus_sand', 'ad_astra:venus_sand')
	event.recipes.tfc.landslide('minecraft:red_sand', 'minecraft:red_sand')
	
	event.recipes.tfc.landslide('tfg:grass/mars_dirt', 'tfg:grass/mars_dirt')
	event.recipes.tfc.landslide('tfg:grass/mars_dirt', 'tfg:grass/amber_mycelium')
	event.recipes.tfc.landslide('tfg:grass/mars_dirt', 'tfg:grass/rusticus_mycelium')
	event.recipes.tfc.landslide('tfg:grass/mars_dirt', 'tfg:grass/sangnum_mycelium')
	event.recipes.tfc.landslide('tfg:grass/mars_dirt', 'tfg:grass/mars_farmland')
	event.recipes.tfc.landslide('tfg:grass/mars_dirt', 'tfg:grass/mars_path')
  
	event.recipes.tfc.landslide('tfg:grass/mars_clay_dirt', 'tfg:grass/mars_clay_dirt')
	event.recipes.tfc.landslide('tfg:grass/mars_clay_dirt', 'tfg:grass/amber_clay_mycelium')
	event.recipes.tfc.landslide('tfg:grass/mars_clay_dirt', 'tfg:grass/rusticus_clay_mycelium')
	event.recipes.tfc.landslide('tfg:grass/mars_clay_dirt', 'tfg:grass/sangnum_clay_mycelium')
	event.recipes.tfc.landslide('tfc:red_kaolin_clay', 'tfg:grass/amber_kaolin_mycelium')
	event.recipes.tfc.landslide('tfc:red_kaolin_clay', 'tfg:grass/rusticus_kaolin_mycelium')
	event.recipes.tfc.landslide('tfc:red_kaolin_clay', 'tfg:grass/sangnum_kaolin_mycelium')

	event.recipes.tfc.landslide('tfg:sand/fluorapatite/blue', 'tfg:sand/fluorapatite/blue')
	event.recipes.tfc.landslide('tfg:sand/fluorapatite/green', 'tfg:sand/fluorapatite/green')
	event.recipes.tfc.landslide('tfg:sand/fluorapatite/brown', 'tfg:sand/fluorapatite/brown')
	event.recipes.tfc.landslide('tfg:sand/fluorapatite/orange', 'tfg:sand/fluorapatite/orange')
	event.recipes.tfc.landslide('tfg:sand/fluorapatite/white', 'tfg:sand/fluorapatite/white')
	event.recipes.tfc.landslide('tfg:sand/fluorapatite/yellow', 'tfg:sand/fluorapatite/yellow')
	
	event.recipes.tfc.landslide('tfg:coarse_dirt/sandy_loam', 'tfg:coarse_dirt/sandy_loam')
	event.recipes.tfc.landslide('tfg:coarse_dirt/silty_loam', 'tfg:coarse_dirt/silty_loam')
	event.recipes.tfc.landslide('tfg:coarse_dirt/silt', 'tfg:coarse_dirt/silt')
	event.recipes.tfc.landslide('tfg:coarse_dirt/loam', 'tfg:coarse_dirt/loam')
	
	event.recipes.tfc.landslide('tfg:dirt/sandy_loam', 'tfc:duff/sandy_loam')
	event.recipes.tfc.landslide('tfg:dirt/silty_loam', 'tfc:duff/silty_loam')
	event.recipes.tfc.landslide('tfg:dirt/silt', 'tfc:duff/silt')
	event.recipes.tfc.landslide('tfg:dirt/loam', 'tfc:duff/loam')

	global.TFG_MUD_TYPES.forEach(dirt => {
		event.recipes.tfc.landslide(`tfg:dirt/${dirt}`, `tfg:grass/${dirt}`)
		event.recipes.tfc.landslide(`tfg:dirt/${dirt}`, `tfg:duff/${dirt}`)
		event.recipes.tfc.landslide(`tfg:mud/${dirt}`, `tfg:mud/${dirt}`)
		event.recipes.tfc.landslide(`tfg:dirt/${dirt}`, `tfg:farmland/${dirt}`)
		event.recipes.tfc.landslide(`tfg:dirt/${dirt}`, `tfg:grass_path/${dirt}`)
		event.recipes.tfc.landslide(`tfg:clay/${dirt}`, `tfg:clay/${dirt}`)
		event.recipes.tfc.landslide(`tfg:clay/${dirt}`, `tfg:clay_grass/${dirt}`)
		event.recipes.tfc.landslide(`tfg:coarse_dirt/${dirt}`, `tfg:coarse_dirt/${dirt}`)
	})

	// Other
	event.recipes.tfc.collapse("#forge:raw_ore_blocks");
}