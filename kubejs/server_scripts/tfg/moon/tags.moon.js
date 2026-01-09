"use strict";

function registerTFGMoonItemTags(event) {

	event.add('tfg:moon_plants', 'tfg:lunar_roots')
	event.add('tfg:moon_plants', 'tfg:lunar_sprouts')

	event.add('tfc:compost_greens_high', 'minecraft:pearlescent_froglight')
	event.add('tfc:compost_greens_high', 'minecraft:verdant_froglight')
	event.add('tfc:compost_greens_high', 'minecraft:ochre_froglight')
}

function registerTFGMoonBlockTags(event) {

	event.add('minecraft:rabbits_spawnable_on', '#ad_astra:moon_stone_replaceables')
	event.add('species:limpet_spawnable_on', '#ad_astra:moon_stone_replaceables')

	event.add('ad_astra:moon_stone_replaceables', 'ad_astra:moon_sand')
	event.add('ad_astra:moon_stone_replaceables', 'tfg:rock/hardened_moon_stone')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:sand/white')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:sand/black')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/gravel/diorite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/gravel/gabbro')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/gravel/basalt')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/gravel/rhyolite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/gravel/andesite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/gravel/dacite')
	event.add('ad_astra:moon_stone_replaceables', 'tfg:rock/gravel_moon')
	event.add('ad_astra:moon_stone_replaceables', 'tfg:rock/gravel_moon_deepslate')
	event.add('ad_astra:moon_stone_replaceables', 'tfg:rock/gravel_glacio')
	event.add('ad_astra:moon_stone_replaceables', 'tfg:rock/hardened_moon_deepslate')
	event.add('ad_astra:moon_stone_replaceables', 'ad_astra:glacio_stone')
	event.add('ad_astra:moon_stone_replaceables', 'tfg:rock/hardened_glacio_stone')
	event.add('ad_astra:moon_stone_replaceables', 'ad_astra:glacio_cobblestone')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/basalt')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/basalt')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/gabbro')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/gabbro')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/diorite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/diorite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/rhyolite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/rhyolite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/andesite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/andesite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/dacite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/dacite')

	event.add('tfc:can_carve', '#ad_astra:moon_stone_replaceables')
}

function registerTFGMoonBiomeTags(event) {
	global.MOON_BIOMES.forEach(biome => {
		event.add('tfg:moon_biomes', biome)
		event.add('tfg:has_structure/meteors', biome)
		event.add('tfg:has_structure/cheese_ores', biome)
		event.add('tfg:has_structure/moonbase', biome)
		event.add('tfg:has_structure/moon_rabbit_houses', biome)
		event.add('species:limpet_spawns', biome)
	})
}

function registerTFGMoonEntityTypeTags(event) {
	const ENTITIES = [
		'tfc:rat',
		'tfg:moon_rabbit',
		'minecraft:enderman',
		'minecraft:shulker',
		'minecraft:shulker_bullet',
		'minecraft:skeleton',
		'minecraft:stray',
		'species:limpet',
		'species:birt',
		'endermanoverhaul:windswept_hills_enderman',
		'endermanoverhaul:soulsand_valley_enderman',
		'endermanoverhaul:spirit',
		'endermanoverhaul:end_enderman',
		'endermanoverhaul:end_islands_enderman',
	]

	ENTITIES.forEach(entity => {
		event.add('ad_astra:can_survive_extreme_cold', entity)
		event.add('ad_astra:lives_without_oxygen', entity)
	})

	event.add('tfc:deals_piercing_damage', 'minecraft:stray')
	event.add('tfc:deals_slashing_damage', 'minecraft:enderman')
	event.add('tfc:deals_slashing_damage', 'endermanoverhaul:windswept_hills_enderman')
	event.add('tfc:deals_slashing_damage', 'endermanoverhaul:soulsand_valley_enderman')
	event.add('tfc:deals_piercing_damage', 'endermanoverhaul:end_enderman')
	event.add('tfc:deals_slashing_damage', 'endermanoverhaul:end_islands_enderman')
	event.add('tfc:deals_crushing_damage', 'ad_astra:star_crawler')
	event.add('tfc:deals_crushing_damage', 'species:birt')

	event.add('tfg:ignores_gravity', 'minecraft:shulker_bullet')
	event.add('tfg:ignores_gravity', 'endermanoverhaul:spirit')
	event.add('tfg:ignores_gravity', 'species:birt')
	event.add('tfg:ignores_gravity', 'ad_astra:star_crawler')
}

function registerTFGMoonPlacedFeatures(event) {
	event.add('tfg:moon_craters', 'tfg:moon/crater/extra_large')
	event.add('tfg:moon_craters', 'tfg:moon/crater/large')
	event.add('tfg:moon_craters', 'tfg:moon/crater/medium')
	event.add('tfg:moon_craters', 'tfg:moon/crater/small')

	global.MOON_STONE_TYPES.forEach(stone => {
		// only in the sparse ones
		event.add('tfg:moon_large_rock_features', `tfg:moon/surface/delta/${stone}`)
		// in all moon biomes
		event.add('tfg:moon_small_rock_features', `tfg:moon/surface/pile/${stone}`)
		event.add('tfg:moon_small_rock_features', `tfg:moon/surface/loose/${stone}`)
	})

	event.add('tfg:moon_small_rock_features', 'tfg:moon/surface/pile_moon_sand')
	event.add('tfg:moon_small_rock_features', 'tfg:moon/surface/pile_white_sand')
	event.add('tfg:moon_small_rock_features', 'tfg:moon/surface/pile_black_sand')
}