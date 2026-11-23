"use strict";

// #region Venus fire
const VENUS_FIRE_IMMUNE_TAG = 'tfg:venus_fire_immune'

/**
 * @param {Internal.TagEventJS} event
 * @param {*} forms
 */
function addVenusFireImmuneForms(event, forms) {
	if (!forms) return
	for (let form of ['block', 'stair', 'slab', 'wall']) {
		if (forms[form]) event.add(VENUS_FIRE_IMMUNE_TAG, forms[form])
	}
	addVenusFireImmuneForms(event, forms.mossy)
	addVenusFireImmuneForms(event, forms.cracked)
}

/**
 * @param {Internal.TagEventJS} event
 * @param {String} rockId Key in global.BIG_ROCK_TABLE, e.g. 'basalt'
 * @param {Boolean} buildingBlocks Also adds crafted blocks: stairs, slabs, walls, bricks, polished, chiseled, pillars
 */

function addVenusFireImmuneRock(event, rockId, buildingBlocks) {
	const rock = global.BIG_ROCK_TABLE[rockId]
	if (!rock) {
		console.warn(`[TFG] Venus Fire unknown rock '${rockId}'`)
		return
	}

	for (let id of [rock.hardened, rock.gravel, rock.spike, rock.loose, rock.mossyLoose]) {
		if (id) event.add(VENUS_FIRE_IMMUNE_TAG, id)
	}
	if (rock.raw && rock.raw.block) event.add(VENUS_FIRE_IMMUNE_TAG, rock.raw.block)
	if (rock.cobble && rock.cobble.block) event.add(VENUS_FIRE_IMMUNE_TAG, rock.cobble.block)

	if (!buildingBlocks) return

	for (let type of ['raw', 'cobble', 'bricks', 'polished', 'chiseled']) {
		addVenusFireImmuneForms(event, rock[type])
	}
	if (rock.stonecutting) {
		for (let forms of rock.stonecutting) addVenusFireImmuneForms(event, forms)
	}
	if (rock.pillar) event.add(VENUS_FIRE_IMMUNE_TAG, rock.pillar)
	if (rock.pillar2) event.add(VENUS_FIRE_IMMUNE_TAG, rock.pillar2)
}

/**
 * @param {Internal.TagEventJS} event
 * @param {String} materialId e.g. 'gold', 'stainless_steel'
 */
function addVenusFireImmuneMaterial(event, materialId) {
	const material = TFGHelpers.getMaterial(materialId)
	if (material == null) {
		console.warn(`[TFG] Venus Fire unknown material '${materialId}'`)
		return
	}

	const prefixes = [
		TagPrefix.block,
		TagPrefix.frameGt,
		TFGTagPrefix.blockPlated,
		TFGTagPrefix.stairPlated,
		TFGTagPrefix.slabPlated,
		TFGTagPrefix.bars,
		TFGTagPrefix.trapdoor,
		TFGTagPrefix.chain
	]
	for (let prefix of prefixes) {
		let stack = ChemicalHelper.get(prefix, material, 1)
		if (!stack.isEmpty()) event.add(VENUS_FIRE_IMMUNE_TAG, stack.id)
	}
}
// #endregion


function registerTFGVenusItemTags(event) {

	// TODO: foods for bugs with tfg:venusian_arthropod_foods
	event.add('tfg:venusian_arthropod_foods', 'arthropocolypse:beetle_fragment')
	event.add('tfg:venusian_arthropod_foods', 'arthropocolypse:gilded_scale')

	event.add('tfg:sulfie_food', 'minecraft:gunpowder')
	event.add('tfg:sulfie_food', '#forge:dusts/sulfur')

	event.add('tfg:venus_plants', 'aliencraft_kepler:small_desert_cactus')
	event.add('tfg:venus_plants', 'aliencraft_kepler:big_alien_cactus')
	event.add('tfg:venus_plants', 'aliencraft_kepler:alien_cactus_flower')
	event.add('tfg:venus_plants', 'aliencraft_kepler:thorn_flower')
	event.add('tfg:venus_plants', 'aliencraft_kepler:crawling_lily')
	event.add('tfg:venus_plants', 'aliencraft_kepler:desertgrass_3')
	event.add('tfg:venus_plants', 'aliencraft_kepler:alien_vines')
	event.add('tfc:compost_greens_low', '#tfg:venus_plants')
}


function registerTFGVenusBlockTags(event) {
	event.add('ad_astra:venus_stone_replaceables', 'ad_astra:venus_stone')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:rock/hardened_venus_stone')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:rock/gravel_venus')
	event.add('ad_astra:venus_stone_replaceables', 'gtceu:red_granite')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:rock/hardened_red_granite')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:rock/gravel_red_granite')
	event.add('ad_astra:venus_stone_replaceables', 'ad_astra:moon_deepslate')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:rock/hardened_moon_deepslate')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:rock/gravel_moon_deepslate')
	event.add('ad_astra:venus_stone_replaceables', 'minecraft:deepslate')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:rock/hardened_deepslate')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:rock/gravel_deepslate')
	event.add('ad_astra:venus_stone_replaceables', 'minecraft:dripstone_block')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:rock/hardened_dripstone')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:rock/gravel_dripstone')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/raw/granite')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/hardened/granite')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/gravel/granite')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/raw/diorite')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/hardened/diorite')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/gravel/diorite')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/raw/gabbro')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/hardened/gabbro')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/gravel/gabbro')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/raw/basalt')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/hardened/basalt')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/gravel/basalt')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/magma/basalt')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/raw/rhyolite')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/hardened/andesite')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/gravel/andesite')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/raw/dacite')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/hardened/dacite')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/gravel/dacite')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/raw/slate')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/hardened/slate')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/gravel/slate')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/raw/schist')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/hardened/schist')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/gravel/schist')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/raw/gneiss')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/hardened/gneiss')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/gravel/gneiss')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/raw/phyllite')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/hardened/phyllite')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/gravel/phyllite')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/raw/quartzite')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/hardened/quartzite')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:rock/gravel/quartzite')
	event.add('ad_astra:venus_stone_replaceables', 'betterend:flavolite')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:rock/hardened_flavolite')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:rock/gravel_flavolite')
	event.add('ad_astra:venus_stone_replaceables', 'betterend:sandy_jadestone')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:rock/hardened_sandy_jadestone')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:rock/gravel_sandy_jadestone')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:sand/fluorapatite/blue')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:sandstone/raw/fluorapatite/blue')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:sand/fluorapatite/green')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:sandstone/raw/fluorapatite/green')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:sand/fluorapatite/brown')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:sandstone/raw/fluorapatite/brown')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:sand/fluorapatite/orange')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:sandstone/raw/fluorapatite/orange')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:sand/fluorapatite/white')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:sandstone/raw/fluorapatite/white')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:sand/fluorapatite/yellow')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:sandstone/raw/fluorapatite/yellow')
	event.add('ad_astra:venus_stone_replaceables', 'tfc:sand/black')
	event.add('ad_astra:venus_stone_replaceables', 'create:scoria')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:rock/hardened_scoria')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:rock/gravel_scoria')
	event.add('ad_astra:venus_stone_replaceables', 'create:scorchia')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:rock/hardened_scorchia')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:rock/gravel_scorchia')
	event.add('ad_astra:venus_stone_replaceables', 'create:ochrum')
	event.add('ad_astra:venus_stone_replaceables', 'create:crimsite')
	event.add('ad_astra:venus_stone_replaceables', 'ad_astra:conglomerate')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:rock/halite')
	event.add('ad_astra:venus_stone_replaceables', 'minecraft:tuff')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:tuff_gravel')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:rock/hardened_tuff')
	event.add('ad_astra:venus_stone_replaceables', 'minecraft:calcite')
	event.add('ad_astra:venus_stone_replaceables', 'minecraft:basalt')
	event.add('ad_astra:venus_stone_replaceables', 'minecraft:smooth_basalt')
	event.add('ad_astra:venus_stone_replaceables', 'betterend:sulphuric_rock')
	event.add('ad_astra:venus_stone_replaceables', 'betterend:lacugrove_bark')
	event.add('ad_astra:venus_stone_replaceables', 'betterend:lucernia_bark')
	event.add('ad_astra:venus_stone_replaceables', 'vintageimprovements:sulfur_block')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:rock/glauberite')
	event.add('ad_astra:venus_stone_replaceables', 'tfg:rock/aragonite')

	event.add('tfc:can_carve', '#ad_astra:venus_stone_replaceables')
	event.add('minecraft:animals_spawnable_on', '#ad_astra:venus_stone_replaceables')

	event.add('tfc:can_landslide', 'tfg:sand/fluorapatite/blue')
	event.add('tfc:can_landslide', 'tfg:sand/fluorapatite/green')
	event.add('tfc:can_landslide', 'tfg:sand/fluorapatite/brown')
	event.add('tfc:can_landslide', 'tfg:sand/fluorapatite/orange')
	event.add('tfc:can_landslide', 'tfg:sand/fluorapatite/white')
	event.add('tfc:can_landslide', 'tfg:sand/fluorapatite/yellow')

	event.add('tfg:decorative_plant_attachable', 'betterend:sulphuric_rock')

	event.add('tfg:silk_moth_blocks', 'betterend:silk_moth_nest')
	event.add('tfg:silk_moth_blocks', 'betterend:silk_moth_nest_holes')
	event.add('tfg:silk_moth_blocks', 'betterend:silk_moth_nest_filled')

	event.add('tfg:heightmap_ignore', 'create:crimsite')

	event.add('minecraft:lava_pool_stone_cannot_replace', 'tfg:venus_hornfels')
	event.add('minecraft:features_cannot_replace', 'tfg:venus_hornfels')

	event.add('tfg:geyserite_geode_cannot_replace', 'minecraft:air')
	event.add('tfg:geyserite_geode_cannot_replace', 'minecraft:cave_air')
	event.add('tfg:geyserite_geode_cannot_replace', 'tfg:fluid/geyser_slurry')
	event.add('tfg:geyserite_geode_cannot_replace', 'minecraft:lava')
	event.add('tfg:geyserite_geode_cannot_replace', '#minecraft:mineable/hoe')
	event.add('tfg:geyserite_geode_cannot_replace', '#minecraft:mineable/axe')
	event.add('tfg:geyserite_geode_cannot_replace', 'tfg:geyser_source')
	event.add('tfg:geyserite_geode_cannot_replace', 'betterend:sulphuric_rock')
	event.add('tfg:geyserite_geode_cannot_replace', 'betterend:hydrothermal_vent')
	event.add('tfg:geyserite_geode_cannot_replace', '#tfc:loose_rocks')

	// Blocks that won't burn due to Venus Fire
	
	// Terrain

	event.add('tfg:venus_fire_immune', '#ad_astra:venus_stone_replaceables')
	event.add('tfg:venus_fire_immune', '#tfc:loose_rocks')
	event.add('tfg:venus_fire_immune', '#forge:ores')
	event.add('tfg:venus_fire_immune', '#forge:surface_rocks')
	event.add('tfg:venus_fire_immune', '#forge:bud_indicators')
	//event.add('tfg:venus_fire_immune', /^tfc:rock\/spike\//)
	event.add('tfg:venus_fire_immune', 'tfg:venus_hornfels')
	event.add('tfg:venus_fire_immune', 'ad_astra:venus_sand')
	event.add('tfg:venus_fire_immune', 'ad_astra:venus_sandstone')
	event.add('tfg:venus_fire_immune', 'ad_astra:venus_cobblestone')
	event.add('tfg:venus_fire_immune', 'tfg:halite')
	event.add('tfg:venus_fire_immune', 'tfg:huge_salt')
	event.add('tfg:venus_fire_immune', 'tfc:groundcover/salt_lick')
	event.add('tfg:venus_fire_immune', 'beneath:sulfur')
	event.add('tfg:venus_fire_immune', 'tfg:rock/raw/geyserite')
	event.add('tfg:venus_fire_immune', 'tfg:rock/spike/geyserite')
	event.add('tfg:venus_fire_immune', 'tfg:rock/raw/stromatolite')
	event.add('tfg:venus_fire_immune', 'tfg:rock/spike/stromatolite')
	event.add('tfg:venus_fire_immune', 'tfg:big_volcano_smoke_emitter')
	event.add('tfg:venus_fire_immune', 'aliencraft_kepler:crawling_lily')
	event.add('tfg:venus_fire_immune', 'aliencraft_kepler:alien_cactus_flower')
	event.add('tfg:venus_fire_immune', 'opposing_force:slug_eggs')
	event.add('tfg:venus_fire_immune', 'aliencraft_kepler:big_alien_cactus')
	event.add('tfg:venus_fire_immune', 'aliencraft_kepler:small_desert_cactus')
	event.add('tfg:venus_fire_immune', 'aliencraft_kepler:thorn_flower')
	event.add('tfg:venus_fire_immune', 'tfg:pile/volcanic_ash')
	event.add('tfg:venus_fire_immune', '')
	event.add('tfg:venus_fire_immune', '')
	event.add('tfg:venus_fire_immune', '')
	event.add('tfg:venus_fire_immune', '')
	event.add('tfg:venus_fire_immune', '')
	event.add('tfg:venus_fire_immune', '')
	event.add('tfg:venus_fire_immune', '')

	// Rocks - Venus only (Crafted+Natural) - Others (Only Natural)

	// Common Rocks: Natural only
	for (let rockId of ['andesite', 'basalt', 'blackstone', 'crackrack', 'dacite', 'deepslate', 'diorite', 'dripstone', 'gabbro', 'gneiss', 'granite', 'moon_deepslate', 'phyllite', 'quartzite', 'red_granite', 'rhyolite', 'schist', 'scorchia', 'scoria', 'slate', 'tuff']) {
		addVenusFireImmuneRock(event, rockId, false)
	}

	// Venus rocks: Natural and Crafted
	for (let rockId of ['venus_stone', 'flavolite', 'sandy_jadestone', 'sulphuric_rock']) {
		addVenusFireImmuneRock(event, rockId, true)
	}

	// Acid-resistant GregTech materials

	addVenusFireImmuneMaterial(event, 'gold')
	addVenusFireImmuneMaterial(event, 'stainless_steel')

	// Geysers and sources

	event.add('tfg:venus_fire_immune', 'tfg:geyser_source')
	event.add('tfg:venus_fire_immune', 'tfg:geyser_source_small')
	event.add('tfg:venus_fire_immune', 'tfg:smoker_source')
	event.add('tfg:venus_fire_immune', 'tfg:lava_source')
	event.add('tfg:venus_fire_immune', 'betterend:hydrothermal_vent')
	event.add('tfg:venus_fire_immune', 'betterend:sulphur_crystal')
	event.add('tfg:venus_fire_immune', 'betterend:tube_worm')

	event.add('tfg:venus_fire_immune', 'tfg:stromatolite_cluster_small')
	event.add('tfg:venus_fire_immune', 'tfg:stromatolite_cluster_medium')
	event.add('tfg:venus_fire_immune', 'tfg:tall_stromatolite')
	event.add('tfg:venus_fire_immune', 'tfg:tall_stromatolite_cyanobacteria')

	// Flora and decoration
	event.add('tfg:venus_fire_immune', '#tfg:venus_plants')
	event.add('tfg:venus_fire_immune', '#tfg:silk_moth_blocks')
	event.add('tfg:venus_fire_immune', 'betterend:hydralux_sapling')
	event.add('tfg:venus_fire_immune', 'betterend:shadow_plant')
	event.add('tfg:venus_fire_immune', 'tfg:tall_fused_pillar')
	event.add('tfg:venus_fire_immune', 'tfg:short_fused_pillar')
	event.add('tfg:venus_fire_immune', 'tfg:ink_light')
	event.add('tfg:venus_fire_immune', 'tfg:slurry_slime_mold')
	event.add('tfg:venus_fire_immune', 'tfg:floating_fumarole_colony')
	event.add('tfg:venus_fire_immune', 'aliencraft_kepler:alien_vines')
	event.add('tfg:venus_fire_immune', 'aliencraft_kepler:vines_tip')
}

function registerTFGVenusBiomeTags(event) {
	global.VENUS_BIOMES.forEach(biome => {
		event.add('tfg:venus_biomes', biome);
		event.add('ad_astra:has_acid_rain', biome);
	})
}

function registerTFGVenusEntityTypeTags(event) {
	const ENTITIES = [
		'minecraft:enderman',
		'minecraft:magma_cube',
		'minecraft:blaze',
		'minecraft:strider',
		"endermanoverhaul:desert_enderman",
		"endermanoverhaul:savanna_enderman",
		"endermanoverhaul:nether_wastes_enderman",
		"endermanoverhaul:scarab",
		"ad_astra:sulfur_creeper",
		'species:trooper',
		'primitive_creatures:golem_2',
		'arthropocolypse:scarab',
		'arthropocolypse:prairie_grasshopper', 
		'arthropocolypse:field_cricket',
		'arthropocolypse:ice_crawler',
		'arthropocolypse:behemoth_desert_spider',
		'arthropocolypse:behemoth_desert_scorpion',
		'arthropocolypse:worker_ant',
		'arthropocolypse:soldier_ant',
		'arthropocolypse:stag_beetle',
		'arthropocolypse:stag_beetle_larva',
		'arthropocolypse:wharf_roach',
		'arthropocolypse:platerodrilus',
		'arthropocolypse:mealworm_beetle',
		'arthropocolypse:mealworm',
		'arthropocolypse:millipede_head',
		'arthropocolypse:millipede_body',
		'arthropocolypse:millipede_tail',
		'opposing_force:slug',
		'opposing_force:trembler',
		'opposing_force:guzzler',
		'opposing_force:fire_slime',
		'opposing_force:hanging_spider',
		'opposing_force:umber_spider',
		'opposing_force:ladybug',
		'opposing_force:whizz',
		'aliencraft_kepler:tree_mite',
		'aliencraft_kepler:xenoscorpion_surface',
		'aliencraft_kepler:ancient_beetle',
		'tfg:silk_moth',
		'tfg:dragonfly'
	]

	ENTITIES.forEach(entity => {
		event.add('ad_astra:can_survive_extreme_heat', entity)
		event.add('ad_astra:lives_without_oxygen', entity)
		event.add('ad_astra:can_survive_in_acid_rain', entity)
		event.add('gtceu:heat_immune', entity)
		event.add('tfg:ignores_cacti', entity)
		event.add('tfg:ignores_gravity', entity)
	})

	const venusPrey = [
		'minecraft:strider',
		'species:trooper',
		'arthropocolypse:scarab',
		'arthropocolypse:prairie_grasshopper',
		'arthropocolypse:field_cricket',
		'arthropocolypse:ice_crawler',
		'arthropocolypse:worker_ant',
		'arthropocolypse:stag_beetle_larva',
		'arthropocolypse:wharf_roach',
		'arthropocolypse:mealworm',
		'opposing_force:whizz',
		'endermanoverhaul:scarab'
	];

	venusPrey.forEach(entity => {
		event.add('tfg:venus_prey', entity);
	})

	event.add('tfc:deals_slashing_damage', 'endermanoverhaul:desert_enderman')
	event.add('tfc:deals_slashing_damage', 'endermanoverhaul:savanna_enderman')
	event.add('tfc:deals_slashing_damage', 'endermanoverhaul:nether_wastes_enderman')
	event.add('tfc:deals_crushing_damage', 'minecraft:magma_cube')
	event.add('tfc:deals_crushing_damage', 'primitive_creatures:golem_2')
	event.add('tfc:deals_piercing_damage', 'arthropocolypse:scarab')
	event.add('tfc:deals_piercing_damage', 'arthropocolypse:ice_crawler')
	event.add('tfc:deals_piercing_damage', 'arthropocolypse:behemoth_desert_spider')
	event.add('tfc:deals_piercing_damage', 'arthropocolypse:behemoth_desert_scorpion')
	event.add('tfc:deals_piercing_damage', 'arthropocolypse:soldier_ant')
	event.add('tfc:deals_piercing_damage', 'arthropocolypse:stag_beetle')
	event.add('tfc:deals_piercing_damage', 'arthropocolypse:wharf_roach')
	event.add('tfc:deals_piercing_damage', 'arthropocolypse:platerodrilus')
	event.add('tfc:deals_piercing_damage', 'arthropocolypse:mealworm_beetle')
	event.add('tfc:deals_piercing_damage', 'arthropocolypse:millipede_head')
	event.add('tfc:deals_crushing_damage', 'opposing_force:slug')
	event.add('tfc:deals_crushing_damage', 'opposing_force:trembler')
	event.add('tfc:deals_crushing_damage', 'opposing_force:guzzler')
	event.add('tfc:deals_crushing_damage', 'opposing_force:fire_slime')
	event.add('tfc:deals_piercing_damage', 'opposing_force:hanging_spider')
	event.add('tfc:deals_piercing_damage', 'opposing_force:umber_spider')
	event.add('tfc:deals_crushing_damage', 'opposing_force:ladybug')
	event.add('tfc:deals_piercing_damage', 'opposing_force:whizz')
	event.add('tfc:deals_piercing_damage', 'aliencraft_kepler:tree_mite')
	event.add('tfc:deals_slashing_damage', 'aliencraft_kepler:xenoscorpion_surface')
	event.add('tfc:deals_piercing_damage', 'aliencraft_kepler:ancient_beetle')
}

function registerTFGVenusPlacedFeatures(event) {

	// Underground decoration
	event.add('tfg:venus_underground_decoration', 'tfg:venus/underground/loose_rocks')
	event.add('tfg:venus_underground_decoration', 'tfc:cave_spike')
	event.add('tfg:venus_underground_decoration', 'tfc:cave_column')
	event.add('tfg:venus_underground_decoration', 'tfc:large_cave_spike')
	event.add('tfg:venus_underground_decoration', 'tfg:venus/underground/noise_cave_stalagmite')
	event.add('tfg:venus_underground_decoration', 'tfg:venus/underground/noise_cave_stalagtite')

	event.add("tfg:venus_top_layer_modification", "tfc:surface_loose_rocks")
}