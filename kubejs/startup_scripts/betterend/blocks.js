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
	createPlant(event, 'amber_grass', 'mars')
	createPlant(event, 'aurant_polypore', 'mars')
	createPlant(event, 'bolux_mushroom', 'mars')
	createPlant(event, 'bushy_grass', 'mars')
	createPlant(event, 'cave_grass', 'mars')
	createPlant(event, 'chorus_mushroom', 'mars') // currently a crop, can be changed
	createPlant(event, 'clawfern', 'mars')
	createPlant(event, 'creeping_moss', 'mars')
	createPlant(event, 'flamaea', 'mars')
	createPlant(event, 'flammalix', 'mars')
	createPlant(event, 'globulagus', 'mars')
	createPlant(event, 'lamellarium', 'mars')
	createPlant(event, 'lutebus', 'mars')
	createPlant(event, 'orango', 'mars')
	createPlant(event, 'purple_polypore', 'mars')
	createPlant(event, 'ruscus', 'mars')
	createPlant(event, 'small_amaranita_mushroom', 'mars')

	// 1 block tall waterlogged
	// charnia (and its colors)
	// jungle_grass

	// Crops
	// amber_root
	// blossom_berry
	// shadow_berry

	// Mosses / Can go on sides of blocks
	// bulb_moss
	// cyan_moss
	// filalux_wings
	// jungle_fern
	// twisted_moss

	// Vines
	// bulb_vine
	// dense_vine
	// hydralux (bottom up, waterlogged)
	// jungle_vine
	// magnula
	// rubinea

	// Blocks
	// cave_bush
	// cave_pumpkin (also a vine)

	// "Structures"?
	// blue_vine (blue)
	// glowing pillar (orange)
	// large amaranita
	// end lily
	// end lotus
	// lanceleaf


	// ??

	event.create('betterend:crystal_grass', 'tfg:decorative_plant')
		//.tagItem('tfg:mars_plants')
		.tagBlock('minecraft:replaceable')

	event.create('betterend:blooming_cooksonia', 'tfg:decorative_plant')
		//.tagItem('tfg:mars_plants')
		.tagBlock('minecraft:replaceable')

	event.create('betterend:fracturn', 'tfg:decorative_plant')
		//.tagItem('tfg:mars_plants')
		.tagBlock('minecraft:replaceable')

	event.create('betterend:jungle_grass', 'tfg:decorative_plant')
		//.tagItem('tfg:mars_plants')
		.tagBlock('minecraft:replaceable')
}

/**
 * @param {any} event
 * @param {string} id
 * @param {string} planet
 */
function createPlant(event, id, planet) {
	event.create(`betterend:${id}`, 'tfg:decorative_plant')
		.tagItem(`tfg:${planet}_plants`)
		.tagBlock('minecraft:replaceable')
}