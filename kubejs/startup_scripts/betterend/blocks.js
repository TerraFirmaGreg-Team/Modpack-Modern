// priority: 0
"use strict";

function registerBetterEndBlocks(event) {

	// Moon

	event.create('betterend:chorus_lily', 'tfc:ground_cover')
		.soundType('cherry_wood')
		.hardness(0.5)
		.tagBlock('minecraft:mineable/hoe')
		.tagItem('tfg:moon_plants')
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
	createPlant(event, 'flamaea', 'mars')
		.box(2, 0, 2, 14, 3, 14)
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
	// TODO: needs a feature
	createPlant(event, 'lanceleaf_small', 'mars')
		.box(4, 0, 4, 12, 8, 12)
	// TODO: needs a feature

	// 1 block tall waterlogged

	createPlant(event, 'charnia_orange', 'mars')
	createPlant(event, 'charnia_cyan', 'mars')
	createPlant(event, 'charnia_green', 'mars')
	createPlant(event, 'charnia_light_blue', 'mars')
	createPlant(event, 'charnia_purple', 'mars')
	createPlant(event, 'charnia_red', 'mars')

	// Mosses / Can go on sides of blocks
	
	//createPlant(event, 'aurant_polypore', 'mars')
	//createPlant(event, 'purple_polypore', 'mars')

	// Leaves

	event.create('betterend:cave_bush', 'tfc:leaves')
		.soundType('azalea_leaves')
		.tagBlock('minecraft:mineable/hoe')
		.mapColor('fire')
		.seasonalColors(false)
		.tagItem('tfg:mars_plants')
		.fallenLeaves(leaves => {
			leaves.noCollision()
			leaves.notSolid()
			leaves.defaultCutout()
			leaves.soundType('azalea_leaves')
			leaves.tagBlock('minecraft:mineable/hoe')
			// TODO: kjs-tfc 1.3.3 will have an option to disable tinting on leaves
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
		.mapColor('color_orange')
		.seasonalColors(false)
		.tagItem('tfg:mars_plants')
		.fallenLeaves(leaves => {
			leaves.noCollision()
			leaves.notSolid()
			leaves.defaultCutout()
			leaves.soundType('azalea_leaves')
			leaves.tagBlock('minecraft:mineable/hoe')
			// TODO: kjs-tfc 1.3.3 will have an option to disable tinting on leaves
			leaves.models((modelType, generator) => {
				if (modelType.layers != 8) {
					generator.parent("tfc:block/groundcover/fallen_leaves_height" + modelType.height);
					generator.texture("all", "betterend:block/lucernia_leaves_1");
				} else {
					generator.parent("betterend:block/lucernia_leaves_1");
				}
			})
		})

	// "Structures"?
	// blue_vine (blue)
	// glowing pillar (orange)
	// large amaranita
	// end lily
	// end lotus
	// lanceleaf

	event.create('betterend:large_amaranita_mushroom', 'tfg:tall_decorative_plant')
		.height(3)
		.soundType('nether_wart')
		.tagBlock('minecraft:mineable/hoe')
		.tagItem('tfg:mars_plants')
		.tagItem('forge:mushrooms')
		.mapColor('fire')

	event.create('betterend:lanceleaf', 'tfg:tall_decorative_plant')
		.height(5)
		.soundType('crop')
		.tagBlock('minecraft:mineable/hoe')
		.tagItem('tfg:mars_plants')
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
}