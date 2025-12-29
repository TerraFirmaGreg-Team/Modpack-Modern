"use strict";

function registerTFGWorldGenTrees(event) {

		// Mars Saplings

	event.create('tfg:saplings/crimson', 'tfc:sapling')
		.features('tfg:mars/tree/crimson')
		.tagBoth('minecraft:saplings')
		.tagBlock('tfg:do_not_destroy_in_space')
		.tagBlock('tfc:can_be_snow_piled')
		.growthDays(6)
		.soundType('nether_wart')
		.defaultCutout()
		.noCollision()
		.mapColor('crimson_nylium')

	event.create('tfg:saplings/warped', 'tfc:sapling')
		.features('tfg:mars/tree/warped')
		.tagBoth('minecraft:saplings')
		.tagBlock('tfg:do_not_destroy_in_space')
		.tagBlock('tfc:can_be_snow_piled')
		.growthDays(6)
		.soundType('nether_wart')
		.defaultCutout()
		.noCollision()
		.mapColor('warped_nylium')

	event.create('tfg:saplings/alphacene', 'tfc:sapling')
		.features('species:alphacene_mushroom')
		.tagBoth('minecraft:saplings')
		.tagBlock('tfg:do_not_destroy_in_space')
		.tagBlock('tfc:can_be_snow_piled')
		.growthDays(3)
		.soundType('nether_wart')
		.defaultCutout()
		.noCollision()
		.mapColor('gold')

	event.create('tfg:saplings/strophar', 'tfc:sapling')
		.features('tfg:mars/tree/strophar_mini')
		.tagBoth('minecraft:saplings')
		.tagBlock('tfg:do_not_destroy_in_space')
		.tagBlock('tfc:can_be_snow_piled')
		.growthDays(7)
		.soundType('nether_wart')
		.defaultCutout()
		.noCollision()
		.mapColor('terracotta_magenta')

	event.create('tfg:saplings/aeronos', 'tfc:sapling')
		.features('tfg:mars/tree/aeronos_mini')
		.tagBoth('minecraft:saplings')
		.tagBlock('tfg:do_not_destroy_in_space')
		.tagBlock('tfc:can_be_snow_piled')
		.growthDays(9)
		.soundType('nether_wart')
		.defaultCutout()
		.noCollision()
		.mapColor('color_light_green')

	event.create('tfg:saplings/glacian', 'tfc:sapling')
		.features('tfg:mars/tree/glacian_mini')
		.tagBoth('minecraft:saplings')
		.tagBlock('tfg:do_not_destroy_in_space')
		.tagBlock('tfc:can_be_snow_piled')
		.growthDays(9)
		.soundType('nether_wart')
		.defaultCutout()
		.noCollision()

	// Glacian tree stuff
	event.create('tfg:glacian_leaves', 'tfc:leaves')
		.soundType('azalea_leaves')
		.tagBlock('minecraft:mineable/hoe')
		.tagBlock('tfg:do_not_destroy_in_space')
		.mapColor('snow')
		.seasonalColors(false)
		.fallenLeaves(leaves => {
			leaves.noCollision()
			leaves.notSolid()
			leaves.defaultCutout()
			leaves.soundType('azalea_leaves')
			leaves.tagBlock('minecraft:mineable/hoe')
			leaves.tagBlock('minecraft:replaceable')
			leaves.noDynamicTinting()
			leaves.models((modelType, generator) => {
				if (modelType.layers != 8) {
					generator.parent("tfc:block/groundcover/fallen_leaves_height" + modelType.height);
					generator.texture("all", "ad_astra:block/glacian_leaves");
				} else {
					generator.parent("ad_astra:block/glacian_leaves");
				}
			})
		})

	event.create('tfg:glacian_wood', 'tfc:log')
		.tagBoth('minecraft:logs')
		.tagItem('minecraft:logs_that_burn')
		.tagItem('ad_astra:glacian_logs')
		.tagBlock('minecraft:mineable/axe')
		.soundType('wood')
		.mapColor('ice')
		.stripped(stripped => {
			stripped.tagBoth('minecraft:logs')
			stripped.tagItem('minecraft:logs_that_burn')
			stripped.tagItem('ad_astra:glacian_logs')
			stripped.tagBlock('minecraft:mineable/axe')
			stripped.soundType('wood')
		})

	event.create('tfg:glacian_log', 'tfc:log')
		.tagBoth('minecraft:logs')
		.tagBoth('c:hidden_from_recipe_viewers')
		.soundType('wood')
		.mapColor('ice')
		.stripped(stripped => {
			stripped.tagBoth('minecraft:logs')
			stripped.tagBoth('c:hidden_from_recipe_viewers')
			stripped.soundType('wood')
		})
}