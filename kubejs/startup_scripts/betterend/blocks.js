// priority: 0
"use strict";

function registerBetterEndBlocks(event) {

	// Moon

	event.create('betterend:chorus_lily', 'tfc:ground_cover')
		.soundType('cherry_wood')
		.hardness(0.5)
		.tagItem('tfg:moon_plants')
		.tagBlock('minecraft:mineable/hoe')
		.tagBlock('tfg:do_not_destroy_in_space')
		.mapColor('terracotta_white')
		.box(0, 0, 0, 16, 6, 16)
		.fullBlock(false)
		.opaque(false)
		.notSolid()
		.renderType('cutout')

	// 1 block tall
	createPlant(event, 'inflexia', 'moon')
	createPlant(event, 'chorus_grass', 'moon')
	createPlant(event, 'salteago', 'moon')
	createPlant(event, 'vaiolush_fern', 'moon')


	// Mars

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

	// europa...?

	createPlant(event, 'crystal_grass', 'unused')
		.box(3, 0, 3, 13, 12, 13)
	createPlant(event, 'blooming_cooksonia', 'unused')
		.box(3, 0, 3, 13, 12, 13)
	createPlant(event, 'fracturn', 'unused')
		.box(3, 0, 3, 13, 12, 13)
	createPlant(event, 'jungle_grass', 'unused')
		.box(3, 0, 3, 13, 12, 13)
}

/**
 * @param {any} event
 * @param {string} id
 * @param {string} planet
 */
function createPlant(event, id, planet) {
	return event.create(`betterend:${id}`, 'tfg:decorative_plant')
		.tagItem(`tfg:${planet}_plants`)
		.tagBlock('minecraft:replaceable')
		.tagBlock('tfg:do_not_destroy_in_space')
		.tagBlock('tfc:can_be_snow_piled')
}

/**
 * @param {any} event
 * @param {string} id
 * @param {string} planet
 */
function createWaterPlant(event, id, planet) {
	return event.create(`betterend:${id}`, 'tfg:decorative_plant')
		.tagItem(`tfg:${planet}_plants`)
		.tagBlock('minecraft:replaceable')
		.tagBlock('tfg:do_not_destroy_in_space')
		.tagBlock('tfc:can_be_ice_piled')
}