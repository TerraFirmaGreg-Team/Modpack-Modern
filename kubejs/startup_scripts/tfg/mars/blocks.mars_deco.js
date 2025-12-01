"use strict";

function registerTFGWorldGenMarsDecoBlocks(event) {

	// 1 block tall
	createPlant(event, 'aeridium', 'mars')
		.box(2, 0, 2, 14, 14, 14)
	createPlant(event, 'amber_grass', 'mars')
		.box(3, 0, 3, 13, 8, 13)
		.lootItem('tfc:straw')
	createPlant(event, 'bushy_grass', 'mars')
		.box(3, 0, 3, 13, 12, 13)
	createPlant(event, 'cave_grass', 'mars')
		.box(3, 0, 3, 13, 12, 13)
		.lootItem('beneath:warped_straw')
	createPlant(event, 'clawfern', 'mars')
		.box(2, 0, 2, 14, 14, 14)
	createPlant(event, 'creeping_moss', 'mars')
		.box(2, 0, 2, 14, 20, 14)
		.lootItem('beneath:warped_straw')
	createPlant(event, 'flammalix', 'mars')
	createPlant(event, 'globulagus', 'mars')
		.box(3, 0, 3, 13, 13, 13)
		.lootItem('beneath:crimson_straw')
	createPlant(event, 'lamellarium', 'mars')
	createPlant(event, 'lutebus', 'mars')
		.box(3, 0, 3, 13, 8, 13)
		.lootItem('tfc:straw')
	createPlant(event, 'orango', 'mars')
		.box(3, 0, 3, 13, 12, 13)
		.lootItem('tfc:straw')
	createPlant(event, 'ruscus', 'mars')
		.lootItem('beneath:crimson_straw')
	createPlant(event, 'small_amaranita_mushroom', 'mars')
		.box(3, 0, 3, 13, 8, 13)
	createPlant(event, 'lucernia_outer_leaves', 'mars')
	createPlant(event, 'lanceleaf_small', 'mars')
		.box(4, 0, 4, 12, 8, 12)
	createPlant(event, 'selagine', 'mars')
		.lootItem('tfc:straw')

	// 1 block tall waterlogged

	createWaterPlant(event, 'charnia_orange', 'mars')
	createWaterPlant(event, 'charnia_cyan', 'mars')
	createWaterPlant(event, 'charnia_green', 'mars')
	createWaterPlant(event, 'charnia_light_blue', 'mars')
	createWaterPlant(event, 'charnia_purple', 'mars')
	createWaterPlant(event, 'charnia_red', 'mars')

	// Water surface

	event.create('betterend:flamaea', 'tfg:floating_decorative_plant')
		.soundType('crop')
		.box(1, 0, 1, 15, 2, 15)
		.mapColor('color_light_blue')
		.tagItem('tfg:mars_plants')
		.tagItem('forge:mushrooms')
		.tagBlock('tfg:do_not_destroy_in_space')
		.tagBlock('minecraft:replaceable')
		.tagBlock('tfc:can_be_ice_piled')

	event.create('betterend:lacugrove', 'tfg:floating_decorative_plant')
		.xz_offset(false)
		.soundType('crop')
		.box(0, 0, 0, 16, 1, 16)
		.mapColor('color_cyan')
		.tagItem('tfg:mars_plants')
		.tagBlock('tfg:do_not_destroy_in_space')
		.tagBlock('minecraft:replaceable')
		.tagBlock('tfc:can_be_ice_piled')

	// Mosses / Can go on sides of blocks

	event.create('betterend:aurant_polypore', 'tfg:attached_decorative_plant')
		.soundType('nether_wart')
		.tagItem('tfg:mars_plants')
		.tagItem('forge:mushrooms')
		.tagBlock('minecraft:replaceable')
		.tagBlock('tfg:do_not_destroy_in_space')

	event.create('betterend:purple_polypore', 'tfg:attached_decorative_plant')
		.soundType('nether_wart')
		.tagItem('tfg:mars_plants')
		.tagItem('forge:mushrooms')
		.tagBlock('minecraft:replaceable')
		.tagBlock('tfg:do_not_destroy_in_space')

	event.create('betterend:filalux_wings', 'tfg:attached_decorative_plant')
		.soundType('nether_wart')
		.allowVertical(true)
		.tagItem('tfg:mars_plants')
		.tagItem('forge:mushrooms')
		.tagBlock('minecraft:replaceable')
		.tagBlock('tfg:do_not_destroy_in_space')

	event.create('betterend:bulb_moss', 'tfg:attached_decorative_plant')
		.soundType('crop')
		.lootItem('tfc:straw')
		.tagItem('tfg:mars_plants')
		.tagBlock('minecraft:replaceable')
		.tagBlock('tfg:do_not_destroy_in_space')

	// Used for glacian trees
	event.create('betterend:glacian_hymenophore', 'tfg:attached_decorative_plant')
		.soundType('crop')
		.allowVertical(true)
		.tagBlock('minecraft:replaceable')
		.tagBlock('tfg:do_not_destroy_in_space')

	// Leaves

	event.create('betterend:cave_bush', 'tfc:leaves')
		.soundType('azalea_leaves')
		.tagBlock('minecraft:mineable/hoe')
		.tagBlock('tfg:do_not_destroy_in_space')
		.mapColor('fire')
		.seasonalColors(false)
		.tagItem('tfg:mars_plants')
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
					generator.texture("all", "betterend:block/cave_bush_leaves_1");
				} else {
					generator.parent("betterend:block/cave_bush_01");
				}
			})
		})

	event.create('betterend:lucernia_leaves', 'tfc:leaves')
		.soundType('azalea_leaves')
		.tagBlock('minecraft:mineable/hoe')
		.tagBlock('tfg:do_not_destroy_in_space')
		.mapColor('color_orange')
		.seasonalColors(false)
		.tagItem('tfg:mars_plants')
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
					generator.texture("all", "betterend:block/lucernia_leaves_1");
				} else {
					generator.parent("betterend:block/lucernia_leaves_1");
				}
			})
		})

	// Tall plants

	event.create('betterend:large_amaranita_mushroom', 'tfg:tall_decorative_plant')
		.height(3)
		.soundType('nether_wart')
		.tagItem('tfg:mars_plants')
		.tagBlock('tfg:do_not_destroy_in_space')
		.tagItem('forge:mushrooms')
		.mapColor('fire')

	event.create('betterend:lanceleaf', 'tfg:tall_decorative_plant')
		.height(5)
		.soundType('crop')
		.tagItem('tfg:mars_plants')
		.tagBlock('tfg:do_not_destroy_in_space')
		.mapColor('color_orange')

	// Ground cover

	event.create('tfg:groundcover/glider_feather', 'tfc:ground_cover')
		.box(4, 0, 4, 12, 2, 12)
		.soundType('wool')
		.groundCoverModelShape('feather')
		.withPreexistingItem('wan_ancient_beasts:glider_feather')
		.textureAll('wan_ancient_beasts:item/glider_feather')
		.tagBlock('tfc:can_be_snow_piled')

	event.create('tfg:groundcover/wraptor_feather', 'tfc:ground_cover')
		.box(4, 0, 4, 12, 2, 12)
		.soundType('wool')
		.groundCoverModelShape('feather')
		.withPreexistingItem('minecraft:feather')
		.textureAll('tfg:item/wraptor_wool')
		.tagBlock('tfc:can_be_snow_piled')

	event.create('tfg:groundcover/aeronos_stick', 'tfc:ground_cover')
		.box(3, 0, 3, 13, 3, 13)
		.groundCoverModelShape('twig')
		.withPreexistingItem('tfg:twigs/aeronos')
		.tagBlock('tfc:can_be_snow_piled')
		.texture('particle', 'ad_astra:block/aeronos_stem')
		.texture('all', 'ad_astra:block/aeronos_stem')
		.texture('top', 'ad_astra:block/aeronos_stem_inside')

	event.create('tfg:groundcover/strophar_stick', 'tfc:ground_cover')
		.box(3, 0, 3, 13, 3, 13)
		.groundCoverModelShape('twig')
		.withPreexistingItem('tfg:twigs/strophar')
		.tagBlock('tfc:can_be_snow_piled')
		.texture('particle', 'ad_astra:block/strophar_stem')
		.texture('all', 'ad_astra:block/strophar_stem')
		.texture('top', 'ad_astra:block/strophar_stem_inside')

	event.create('tfg:groundcover/glacian_stick', 'tfc:ground_cover')
		.box(3, 0, 3, 13, 3, 13)
		.groundCoverModelShape('twig')
		.withPreexistingItem('tfg:twigs/glacian')
		.tagBlock('tfc:can_be_snow_piled')
		.texture('particle', 'ad_astra:block/glacian_log')
		.texture('all', 'ad_astra:block/glacian_log')
		.texture('top', 'ad_astra:block/glacian_log_top')

	event.create('tfg:groundcover/alphacene_stick', 'tfc:ground_cover')
		.box(3, 0, 3, 13, 3, 13)
		.groundCoverModelShape('twig')
		.withPreexistingItem('tfg:twigs/alphacene')
		.tagBlock('tfc:can_be_snow_piled')
		.texture('particle', 'species:block/alphacene_mushroom_block')
		.texture('all', 'species:block/alphacene_mushroom_block')
		.texture('top', 'minecraft:block/mushroom_stem')
		
	// Misc

	event.create('tfg:spice', 'tfg:particle_emitter')
		.textureAll('tfg:block/sand_spice')
		.soundType('sand')
		.hardness(2)
		.resistance(6)
		// makes it invisible on xaeros, so people can't use it to find the deposits :)
		.mapColor('none')
		.particleOffset(0.3, 1.5, 0.3)
		.particleVelocity(0, 0.05, 0)
		.particle('electric_spark')
		.particleCount(2)
		.particleForced(false)
		.fullBlock(true)
		.opaque(true)
}