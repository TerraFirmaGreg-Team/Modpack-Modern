// priority: -1
"use strict";

/**
 * @typedef {Object} BlockForms
 * @property {string} block
 * @property {string?} stair
 * @property {string?} slab
 * @property {string?} wall
 * @property {BlockForms?} mossy - If this block has a mossy variant
 * @property {BlockForms?} cracked - If this block has a cracked variant
 */

/**
 * @typedef {Object} RockType
 * @property {String?} material
 * Material ID if this rock type can be macerated
 * @property {String?} tfcTag
 * Item tag that everything in this rock type should be added to
 * @property {boolean} isTFC
 * If this is a built-in TFC rock type or not
 * @property {boolean} collapsible
 * If the raw and polished blocks should collapse. If this rock type has no cobble, they will also never collapse. Cobble and gravel always landslide.
 * @property {String?} stonecutterTag
 * Item tag for stonecutting
 * @property {String?} gravelTag
 * Item tag for what kind of sand this gravel should be turned into
 * @property {String?} mapColor
 * @property {String?} sound
 * @property {String[]?} dimensions
 * Used for generating rock breaker recipes.
 * TFC rocks can be used on any dimension, null/empty array on other types will not have any recipes.
 * @property {String?} hardened
 * @property {String?} gravel
 * @property {String?} loose
 * @property {String?} mossyLoose
 * @property {String?} brick
 * ID of the brick item
 * @property {String?} support
 * @property {String?} aqueduct
 * @property {String?} spike
 * @property {String?} pillar
 * @property {String?} pillar2
 * @property {BlockForms?} raw
 * @property {BlockForms?} cobble
 * @property {BlockForms?} bricks
 * @property {BlockForms?} polished
 * @property {BlockForms?} chiseled
 * @property {BlockForms[]?} stonecutting
 * Extra blocks that you can use a stonecutter to get
 */

/**
 * Generates an object of block, stair, slab, and wall strings.
 * @param {String} id
 * The internal ID of a rock type. For example, migmatite is 'deepslate'.
 * @param {String} pattern 
 * A pattern to use to generate the other rock form strings. 
 * %s will be replaced with the id above.
 * "_stairs", "_slab", or "_wall" will be appended on the end.
 * @param {BlockForms?} [mossy=null]
 * If this rock block has a mossy subset, put it here.
 * @param {BlockForms?} [cracked=null]
 * If this rock block has a cracked subset, put it here.
 * @returns {BlockForms?}
 */
function generateForms(id, pattern, mossy, cracked) {
	let replaced = pattern.replace('%s', id);
	return {
		block: `${replaced}`,
		stair: `${replaced}_stairs`,
		slab: `${replaced}_slab`,
		wall: `${replaced}_wall`,
		mossy: mossy,
		cracked: cracked
	};
}

/**
 * Generates an object of block, stair, slab, and wall strings.
 * @param {String} id
 * The internal ID of a rock type. For example, migmatite is 'deepslate'.
 * @param {String} pattern 
 * A pattern to use to generate the other rock form strings. 
 * %s will be replaced with the id above.
 * "_stairs", "_slab", or "_wall" will be appended on the end.
 * @param {BlockForms} table
 * Another table of forms to overwrite this one. Good if there's already an existing block.
 * @param {BlockForms?} [mossy=null]
 * If this rock block has a mossy subset, put it here.
 * @param {BlockForms?} [cracked=null]
 * If this rock block has a cracked subset, put it here.
 * @returns {BlockForms}
 */
function generateFormsExisting(id, pattern, table, mossy, cracked) {
	let generated = generateForms(id, pattern, mossy, cracked);
	
	if (table.block == null)
		table.block = generated.block;
	if (table.stair == null)
		table.stair = generated.stair;
	if (table.slab == null)
		table.slab = generated.slab;
	if (table.wall == null)
		table.wall = generated.wall;
	if (table.mossy == null)
		table.mossy = generated.mossy;
	if (table.cracked == null)
		table.cracked = generated.cracked;

	return table;
}


/**
 * Same as above but a special case for Ad Astra because they're allergic to walls.
 * @param {String} id
 * The internal ID of a rock type. For example, migmatite is 'deepslate'.
 * @param {String} pattern 
 * A pattern to use to generate the other rock form strings. 
 * %s will be replaced with the id above.
 * "_stairs", "_slab", or "_wall" will be appended on the end.
 * @param {String} wall
 * The TFG wall block.
 * @param {BlockForms?} [mossy=null]
 * If this rock block has a mossy subset, put it here.
 * @param {BlockForms?} [cracked=null]
 * If this rock block has a cracked subset, put it here.
 * @returns {BlockForms}
 */
function generateFormsExceptWall(id, pattern, wall, mossy, cracked) {
	let replaced = pattern.replace('%s', id);
	return {
		block: replaced,
		stair: `${replaced}_stairs`,
		slab: `${replaced}_slab`,
		wall: wall,
		mossy: mossy,
		cracked: cracked
	};
}

/**
 * Fills out a rock type for the TFC blocks, since they already exist and have known IDs.
 * @param {String} id
 * The internal ID of a rock type.
 * @param {RockType} table 
 * The table with all the other blocks.
 * @returns {RockType}
 */
function generateTFC(id, table) {
	table.stonecutterTag = `tfg:stone_types/${id}`;
	table.hardened = `tfc:rock/hardened/${id}`;
	table.gravel = `tfc:rock/gravel/${id}`;
	table.loose = `tfc:rock/loose/${id}`;
	table.mossyLoose = `tfc:rock/mossy_loose/${id}`;
	table.brick = `tfc:brick/${id}`;
	table.support = `tfg:${id}_support`;
	table.aqueduct = `tfc:rock/aqueduct/${id}`;
	table.spike = `tfc:rock/spike/${id}`;

	table.raw = generateForms(id, 'tfc:rock/raw/%s'),
	table.cobble = generateForms(id, 'tfc:rock/cobble/%s', 
		generateForms(id, 'tfc:rock/mossy_cobble/%s'));
	table.bricks = generateForms(id, 'tfc:rock/bricks/%s', 
		generateForms(id, 'tfc:rock/mossy_bricks/%s'),
		generateForms(id, 'tfc:rock/cracked_bricks/%s'));
	table.polished = generateForms(id, 'tfc:rock/smooth/%s');
	table.chiseled = { block: `tfc:rock/chiseled/${id}` };

	table.isTFC = true;
	table.collapsible = true;
	return table;
}

/**
 * Generates some missing rock-type blocks that don't have stair/slab/wall blocks.
 * @param {String} id 
 * The internal ID of a rock type. For example, migmatite is 'deepslate'.
 * @param {RockType} table
 * A table of different rock blocks.
 * @returns {RockType}
 */
function generateMissing(id, table) {
	table.stonecutterTag = `tfg:stonecutting/${id}`;
	if (table.hardened === undefined)
		table.hardened = `tfg:rock/hardened_${id}`;
	if (table.gravel === undefined)
		table.gravel = `tfg:rock/gravel_${id}`;
	if (table.loose === undefined)
		table.loose = `tfg:loose/${id}`;
	if (table.brick === undefined)
		table.brick = `tfg:brick/${id}`;
	if (table.support === undefined)
		table.support = `tfg:${id}_support`;
	if (table.aqueduct === undefined)
		table.aqueduct = `tfg:rock/aqueduct_${id}`;
	if (table.spike === undefined)
		table.spike = `tfg:spike/${id}_spike`;
	if (table.collapsible === undefined)
		table.collapsible = true;

	table.isTFC = false;
	return table;
}

// This can also be used for things that aren't really rock types, if you want to generate similar recipes.
/** @global */
global.BIG_ROCK_TABLE = /** @type {{String, RockType}} */ ({

	/////////////////////////////////////////////////////////////////////////////////////////////
	// TFC ROCKS
	/////////////////////////////////////////////////////////////////////////////////////////////

	"gabbro": generateTFC('gabbro', {
		material: 'tfg:igneous_mafic',
		tfcTag: 'tfc:igneous_intrusive_items'
	}),
	"diorite": generateTFC('diorite', {
		material: 'tfg:igneous_intermediate',
		tfcTag: 'tfc:igneous_intrusive_items',
		pillar: 'create:diorite_pillar',
		pillar2: 'create:layered_diorite',
		stonecutterTag: 'create:stone_types/diorite',
		stonecutting: [
			generateForms('diorite', 'create:cut_%s'),
			generateForms('diorite', 'create:polished_cut_%s'),
			generateFormsExisting('diorite', 'create:cut_%s_brick', { block: 'create:cut_diorite_bricks' }),
			generateFormsExisting('diorite', 'create:small_%s_brick', { block: 'create:small_diorite_bricks' })
		]
	}),
	"granite": generateTFC('granite', {
		material: 'tfg:igneous_felsic',
		tfcTag: 'tfc:igneous_intrusive_items'
	}),
	"basalt": generateTFC('basalt', {
		material: 'tfg:igneous_mafic',
		tfcTag: 'tfc:igneous_extrusive_items',
		pillar: 'minecraft:polished_basalt',
		pillar2: 'minecraft:smooth_basalt',
	}),
	"andesite": generateTFC('andesite', {
		material: 'tfg:igneous_intermediate',
		tfcTag: 'tfc:igneous_extrusive_items',
		pillar: 'create:andesite_pillar',
		pillar2: 'create:layered_andesite',
		stonecutterTag: 'create:stone_types/andesite',
		stonecutting: [
			generateForms('andesite', 'create:cut_%s'),
			generateForms('andesite', 'create:polished_cut_%s'),
			generateFormsExisting('andesite', 'create:cut_%s_brick', { block: 'create:cut_andesite_bricks' }),
			generateFormsExisting('andesite', 'create:small_%s_brick', { block: 'create:small_andesite_bricks' })
		]
	}),
	"dacite": generateTFC('dacite', {
		material: 'tfg:igneous_intermediate',
		tfcTag: 'tfc:igneous_extrusive_items'
	}),
	"rhyolite": generateTFC('rhyolite', {
		material: 'tfg:igneous_felsic',
		tfcTag: 'tfc:igneous_extrusive_items'
	}),
	"shale": generateTFC('shale', {
		material: 'tfg:sedimentary_clastic',
		tfcTag: 'tfc:sedimentary_items'
	}),
	"claystone": generateTFC('claystone', {
		material: 'tfg:sedimentary_clastic',
		tfcTag: 'tfc:sedimentary_items'
	}),
	"conglomerate": generateTFC('conglomerate', {
		material: 'tfg:sedimentary_clastic',
		tfcTag: 'tfc:sedimentary_items'
	}),
	"limestone": generateTFC('limestone', {
		material: 'tfg:sedimentary_carbonate',
		tfcTag: 'tfc:sedimentary_items',
		pillar: 'create:limestone_pillar',
		pillar2: 'create:layered_limestone',
		stonecutterTag: 'create:stone_types/limestone',
		stonecutting: [
			{ block: 'create:limestone' },
			generateForms('limestone', 'create:cut_%s'),
			generateForms('limestone', 'create:polished_cut_%s'),
			generateFormsExisting('limestone', 'create:cut_%s_brick', { block: 'create:cut_limestone_bricks' }),
			generateFormsExisting('limestone', 'create:small_%s_brick', { block: 'create:small_limestone_bricks' })
		]
	}),
	"dolomite": generateTFC('dolomite', {
		material: 'tfg:sedimentary_carbonate',
		tfcTag: 'tfc:sedimentary_items'
	}),
	"chalk": generateTFC('chalk', {
		material: 'tfg:sedimentary_carbonate',
		tfcTag: 'tfc:sedimentary_items'
	}),
	"chert": generateTFC('chert', {
		material: 'tfg:sedimentary_organic',
		tfcTag: 'tfc:sedimentary_items',
		pillar: 'create:granite_pillar',
		pillar2: 'create:layered_granite',
		stonecutterTag: 'create:stone_types/granite',
		stonecutting: [
			generateForms('granite', 'create:cut_%s'),
			generateForms('granite', 'create:polished_cut_%s'),
			generateFormsExisting('granite', 'create:cut_%s_brick', { block: 'create:cut_granite_bricks' }),
			generateFormsExisting('granite', 'create:small_%s_brick', { block: 'create:small_granite_bricks' })
		]
	}),
	"slate": generateTFC('slate', {
		material: 'tfg:metamorphic',
		tfcTag: 'tfc:metamorphic_items'
	}),
	"phyllite": generateTFC('phyllite', {
		material: 'tfg:metamorphic',
		tfcTag: 'tfc:metamorphic_items'
	}),
	"schist": generateTFC('schist', {
		material: 'tfg:metamorphic',
		tfcTag: 'tfc:metamorphic_items'
	}),
	"gneiss": generateTFC('gneiss', {
		material: 'tfg:metamorphic',
		tfcTag: 'tfc:metamorphic_items'
	}),
	"marble": generateTFC('marble', {
		material: 'tfg:metamorphic',
		tfcTag: 'tfc:metamorphic_items',
		stonecutting: [
			{ block: 'gtceu:polished_marble' },
			{ block: 'gtceu:chiseled_marble' },
			{ block: 'gtceu:marble_tile' },
			{ block: 'gtceu:marble_small_tile' },
			{ block: 'gtceu:marble_windmill_a' },
			{ block: 'gtceu:marble_windmill_b' },
			{ block: 'gtceu:small_marble_bricks' },
			{ block: 'gtceu:square_marble_bricks' }
		]
	}),
	"quartzite": generateTFC('quartzite', {
		material: 'tfg:metamorphic',
		tfcTag: 'tfc:metamorphic_items'
	}),

	/////////////////////////////////////////////////////////////////////////////////////////////
	// BENEATH ROCKS
	/////////////////////////////////////////////////////////////////////////////////////////////

	// Nether quartz
	"nether_quartz": {
		// No material because GT already has recycling for these
		sound: 'stone',
		mapColor: 'quartz',
		collapsible: false,
		raw: {
			block: 'minecraft:quartz_block',
			stair: 'minecraft:quartz_stairs',
			slab: 'minecraft:quartz_slab',
			wall: 'tfg:rock/quartz_wall',
			texture: 'minecraft:block/quartz_block_side'
		},
		polished: {
			block: 'minecraft:smooth_quartz',
			stair: 'minecraft:smooth_quartz_stairs',
			slab: 'minecraft:smooth_quartz_slab',
			wall: 'tfg:rock/smooth_quartz_wall',
			texture: 'minecraft:block/quartz_block_bottom'
		}
	},
	// Migmatite
	"deepslate": generateMissing('deepslate', {
		material: 'tfg:metamorphic',
		tfcTag: 'tfc:metamorphic_items',
		gravelTag: 'tfc:black_gravel',
		sound: 'deepslate',
		mapColor: 'terracotta_grey',
		dimensions: ['minecraft:overworld', 'minecraft:the_nether', 'ad_astra:venus'],
		support: 'tfg:migmatite_support',
		pillar: 'create:deepslate_pillar',
		pillar2: 'create:layered_deepslate',
		stonecutterTag: 'create:stone_types/deepslate',
		raw: generateFormsExisting('deepslate', 'tfg:rock/%s', { block: 'minecraft:deepslate' }),
		cobble: generateForms('deepslate', 'minecraft:cobbled_%s',
			generateForms('deepslate', 'tfg:rock/mossy_cobble_%s')),
		bricks: generateFormsExisting('deepslate', 'minecraft:%s_brick', { block: 'minecraft:deepslate_bricks' },
			generateForms('deepslate', 'tfg:rock/mossy_bricks_%s'),
			generateFormsExisting('deepslate', 'tfg:rock/cracked_bricks_%s', { block: 'minecraft:cracked_deepslate_bricks' })),
		polished: generateForms('deepslate', 'minecraft:polished_%s'),
		chiseled: { block: 'minecraft:chiseled_deepslate' },
		stonecutting: [
			generateFormsExisting('deepslate', 'minecraft:%s_tile', { block: 'minecraft:deepslate_tiles' }, null,
				generateFormsExisting('deepslate', 'tfg:rock/cracked_tiles_%s', { block: 'minecraft:cracked_deepslate_tiles' })),
			generateForms('deepslate', 'create:cut_%s'),
			generateForms('deepslate', 'create:polished_cut_%s'),
			generateFormsExisting('deepslate', 'create:cut_%s_brick', { block: 'create:cut_deepslate_bricks' }),
			generateFormsExisting('deepslate', 'create:small_%s_brick', { block: 'create:small_deepslate_bricks' })
		]
	}),
	// Travertine
	"dripstone": generateMissing('dripstone', {
		material: 'tfg:sedimentary_carbonate',
		tfcTag: 'tfc:sedimentary_items',
		gravelTag: 'tfc:brown_gravel',
		sound: 'dripstone_block',
		mapColor: 'terracotta_brown',
		dimensions: ['minecraft:overworld', 'minecraft:the_nether', 'ad_astra:venus'],
		support: 'tfg:travertine_support',
		pillar: 'create:dripstone_pillar',
		pillar2: 'create:layered_dripstone',
		stonecutterTag: 'create:stone_types/dripstone',
		raw: generateFormsExisting('dripstone', 'tfg:rock/%s', { block: 'minecraft:dripstone_block' }),
		cobble: generateForms('dripstone', 'tfg:rock/cobble_%s', 
			generateForms('dripstone', 'tfg:rock/mossy_cobble_%s')),
		bricks: generateFormsExisting('dripstone', 'create:cut_%s_brick', {
				block: 'create:cut_dripstone_bricks',
				texture: 'create:block/palettes/stone_types/brick/dripstone_cut_brick'
			},
			generateForms('dripstone', 'tfg:rock/mossy_bricks_%s'),
			generateForms('dripstone', 'tfg:rock/cracked_bricks_%s')),
		polished: generateForms('dripstone', 'create:cut_%s'),
		stonecutting: [
			generateForms('dripstone', 'create:polished_cut_%s'),
			generateFormsExisting('dripstone', 'create:small_%s_brick', { block: 'create:small_dripstone_bricks' })
		]
	}),
	// Pyroxenite
	"blackstone": generateMissing('blackstone', {
		material: 'tfg:igneous_ultramafic',
		tfcTag: 'tfc:igneous_intrusive_items',
		gravelTag: 'tfc:black_gravel',
		sound: 'stone',
		mapColor: 'color_black',
		dimensions: ['minecraft:overworld', 'minecraft:the_nether', 'ad_astra:mercury'],
		support: 'tfg:pyroxenite_support',
		pillar: 'beneath:ancient_altar',
		loose: 'beneath:blackstone_pebble',
		brick: 'beneath:blackstone_brick',
		aqueduct: 'beneath:blackstone_aqueduct',
		raw: generateForms('blackstone', 'minecraft:%s'),
		cobble: generateFormsExisting('blackstone', 'tfg:rock/cobble_%s', { texture: 'minecraft:block/blackstone_top' },
			generateForms('blackstone', 'tfg:rock/mossy_cobble_%s')),
		bricks: generateFormsExisting('blackstone', 'minecraft:polished_%s_brick', { block: 'minecraft:polished_blackstone_bricks' },
			generateForms('blackstone', 'tfg:rock/mossy_bricks_%s'),
			generateFormsExisting('blackstone', 'tfg:rock/cracked_bricks_%s', { block: 'minecraft:cracked_polished_blackstone_bricks' })),
		polished: generateForms('blackstone', 'minecraft:polished_%s'),
		chiseled: { block: 'minecraft:chiseled_polished_blackstone' },
	}),
	// Keratophyre
	"crackrack": generateMissing('crackrack', {
		material: 'tfg:igneous_intermediate',
		tfcTag: 'tfc:igneous_extrusive_items',
		stonecutterTag: 'tfg:stone_types/keratophyre',
		gravelTag: 'tfc:pink_gravel',
		sound: 'netherrack',
		mapColor: 'crimson_stem',
		dimensions: ['minecraft:overworld', 'minecraft:the_nether', 'ad_astra:venus'],
		support: 'tfg:keratophyre_support',
		brick: 'minecraft:nether_brick',
		aqueduct: 'tfg:rock/aqueduct_nether',
		raw: generateFormsExisting('crackrack', 'tfg:rock/%s', { block: 'beneath:crackrack' }),
		cobble: generateForms('crackrack', 'tfg:rock/cobble_%s', 
			generateForms('crackrack', 'tfg:rock/mossy_cobble_%s')),
		bricks: generateFormsExisting('nether', 'minecraft:%s_brick', { block: 'minecraft:nether_bricks' },
			generateForms('nether', 'tfg:rock/mossy_bricks_%s'),
			generateFormsExisting('nether', 'tfg:rock/cracked_bricks_%s', { block: 'minecraft:cracked_nether_bricks' })),
		polished: generateForms('crackrack', 'tfg:rock/polished_%s'),
		chiseled: { block: 'minecraft:chiseled_nether_bricks' },
		stonecutting: [
			{ block: 'minecraft:nether_brick_fence' }
		]
	}),
	"calcite": {
		material: 'calcite',
		tfcTag: 'tfc:sedimentary_items',
		stonecutterTag: 'create:stone_types/calcite',
		isTFC: false,
		collapsible: false,
		sound: 'stone',
		mapColor: 'quartz',
		dimensions: ['minecraft:overworld', 'minecraft:the_nether', 'ad_astra:venus'],
		pillar: 'create:calcite_pillar',
		pillar2: 'create:layered_calcite',
		raw: { block: 'minecraft:calcite' },
		stonecutting: [
			generateForms('calcite', 'create:cut_%s'),
			generateForms('calcite', 'create:polished_cut_%s'),
			generateFormsExisting('calcite', 'create:cut_%s_brick', { block: 'create:cut_calcite_bricks' }),
			generateFormsExisting('calcite', 'create:small_%s_brick', { block: 'create:small_calcite_bricks' })
		]
	},
	"tuff": {
		material: 'tfg:igneous_felsic',
		tfcTag: 'tfc:igneous_extrusive_items',
		stonecutterTag: 'create:stone_types/tuff',
		isTFC: false,
		collapsible: false,
		sound: 'tuff',
		mapColor: 'terracotta_gray',
		dimensions: ['minecraft:overworld', 'minecraft:the_nether', 'ad_astra:venus'],
		pillar: 'create:tuff_pillar',
		pillar2: 'create:layered_tuff',
		raw: { block: 'minecraft:tuff' },
		stonecutting: [
			generateForms('tuff', 'create:cut_%s'),
			generateForms('tuff', 'create:polished_cut_%s'),
			generateFormsExisting('tuff', 'create:cut_%s_brick', { block: 'create:cut_tuff_bricks' }),
			generateFormsExisting('tuff', 'create:small_%s_brick', { block: 'create:small_tuff_bricks' })
		]
	},

	/////////////////////////////////////////////////////////////////////////////////////////////
	// MOON ROCKS
	/////////////////////////////////////////////////////////////////////////////////////////////

	// Anorthosite
	"moon_stone": generateMissing('moon_stone', {
		material: 'tfg:igneous_mafic',
		tfcTag: 'tfc:igneous_intrusive_items',
		gravelTag: 'tfg:moon_gravel',
		sound: 'stone',
		mapColor: 'terracotta_cyan',
		dimensions: ['ad_astra:moon'],
		support: 'tfg:anorthosite_support',
		pillar: 'ad_astra:moon_pillar',
		gravel: 'tfg:rock/gravel_moon',
		raw: generateFormsExceptWall('moon_stone', 'ad_astra:%s', 'tfg:rock/moon_stone_wall'),
		cobble: generateFormsExceptWall('moon', 'ad_astra:%s_cobblestone', 'tfg:rock/cobble_moon_wall',
			generateForms('moon', 'tfg:rock/mossy_cobble_%s')),
		bricks: generateFormsExisting('moon_stone', 'ad_astra:%s_brick', { block: 'ad_astra:moon_stone_bricks' },
			generateForms('moon', 'tfg:rock/mossy_bricks_%s'),
			generateFormsExisting('moon', 'tfg:rock/cracked_bricks_%s', { block: 'ad_astra:cracked_moon_stone_bricks' })),
		polished: generateFormsExceptWall('moon_stone', 'ad_astra:polished_%s', 'tfg:rock/polished_moon_wall'),
		chiseled: {
			block: 'ad_astra:chiseled_moon_stone_bricks',
			stair: 'ad_astra:chiseled_moon_stone_stairs',
			slab: 'ad_astra:chiseled_moon_stone_slab',
			wall: 'tfg:rock/chiseled_bricks_moon_wall'
		}
	}),
	// Norite
	"moon_deepslate": generateMissing('moon_deepslate', {
		material: 'tfg:igneous_mafic',
		tfcTag: 'tfc:igneous_intrusive_items',
		gravelTag: 'tfg:moon_gravel',
		sound: 'deepslate',
		mapColor: 'terracotta_blue',
		dimensions: ['ad_astra:moon', 'ad_astra:venus'],
		support: 'tfg:norite_support',
		pillar: 'tfg:rock/pillar_moon_deepslate',
		raw: generateFormsExisting('moon_deepslate', 'tfg:rock/%s', { block: 'ad_astra:moon_deepslate' }),
		cobble: generateForms('moon_deepslate', 'tfg:rock/cobble_%s',
			generateForms('moon_deepslate', 'tfg:rock/mossy_cobble_%s')),
		bricks: generateForms('moon_deepslate', 'tfg:rock/bricks_%s',
			generateForms('moon_deepslate', 'tfg:rock/mossy_bricks_%s'),
			generateForms('moon_deepslate', 'tfg:rock/cracked_bricks_%s')),
		polished: generateForms('moon_deepslate', 'tfg:rock/polished_%s'),
		chiseled: generateForms('moon_deepslate', 'tfg:rock/chiseled_bricks_%s')
	}),
	// Phonolite
	"glacio_stone": generateMissing('glacio_stone', {
		material: 'tfg:igneous_intermediate',
		tfcTag: 'tfc:igneous_extrusive_items',
		gravelTag: 'tfc:white_gravel',
		sound: 'stone',
		mapColor: 'terracotta_purple',
		dimensions: ['ad_astra:moon'],
		support: 'tfg:phonolite_support',
		pillar: 'ad_astra:glacio_pillar',
		gravel: 'tfg:rock/gravel_glacio',
		raw: generateFormsExceptWall('glacio_stone', 'ad_astra:%s', 'tfg:rock/glacio_stone_wall'),
		cobble: generateFormsExceptWall('glacio', 'ad_astra:%s_cobblestone', 'tfg:rock/cobble_glacio_wall',
			generateForms('glacio', 'tfg:rock/mossy_cobble_%s')),
		bricks: generateFormsExisting('glacio_stone', 'ad_astra:%s_brick', { block: 'ad_astra:glacio_stone_bricks' },
			generateForms('glacio', 'tfg:rock/mossy_bricks_%s'),
			generateFormsExisting('glacio', 'tfg:rock/cracked_bricks_%s', { block: 'ad_astra:cracked_glacio_stone_bricks' })),
		polished: generateFormsExceptWall('glacio_stone', 'ad_astra:polished_%s', 'tfg:rock/polished_glacio_wall'),
		chiseled: {
			block: 'ad_astra:chiseled_glacio_stone_bricks',
			stair: 'ad_astra:chiseled_glacio_stone_stairs',
			slab: 'ad_astra:chiseled_glacio_stone_slab',
			wall: 'tfg:rock/chiseled_bricks_glacio_wall'
		}
	}),
	// Suevite
	"sky_stone": {
		isTFC: false,
		collapsible: false,
		dimensions: ['ad_astra:moon'],
		stonecutterTag: 'tfg:stone_types/suevite',
		raw: generateFormsExisting('sky_stone', 'ae2:%s', { block: 'ae2:sky_stone_block' }),
		polished: generateFormsExisting('sky_stone', 'ae2:smooth_%s', { block: 'ae2:smooth_sky_stone_block' }),
		bricks: generateForms('sky_stone', 'ae2:%s_brick'),
		chiseled: generateForms('sky_stone', 'ae2:%s_small_brick')
	},
	"purpur": {
		isTFC: false,
		collapsible: false,
		brick: 'minecraft:popped_chorus_fruit',
		bricks: {
			block: 'minecraft:purpur_block',
			stair: 'minecraft:purpur_stairs',
			slab: 'minecraft:purpur_slab'
		},
		pillar: 'minecraft:purpur_pillar'
	},
	"fluix": {
		isTFC: false,
		collapsible: false,
		raw: generateFormsExisting('fluix', 'ae2:%s', { block: 'ae2:fluix_block' })
	},
	"certus": {
		isTFC: false,
		collapsible: false,
		stonecutterTag: 'tfg:stone_types/certus',
		raw: { block: 'gtceu:certus_quartz_block' },
		polished: generateFormsExisting('quartz', 'ae2:%s', { block: 'ae2:quartz_block' }),
		stonecutting: [
			generateFormsExisting('quartz', 'ae2:cut_%s', { block: 'ae2:cut_quartz_block' }),
			generateFormsExisting('quartz', 'ae2:smooth_%s', { block: 'ae2:smooth_quartz_block' }),
			generateFormsExisting('quartz', 'ae2:%s_brick', { block: 'ae2:quartz_bricks' }),
			generateForms('quartz', 'ae2:%s_pillar'),
			generateFormsExisting('quartz', 'ae2:chiseled_%s', { block: 'ae2:chiseled_quartz_block' }),
		]
	},

	/////////////////////////////////////////////////////////////////////////////////////////////
	// MARS ROCKS
	/////////////////////////////////////////////////////////////////////////////////////////////

	// Argillite
	"mars_stone": generateMissing('mars_stone', {
		material: 'tfg:sedimentary_clastic',
		tfcTag: 'tfc:sedimentary_items',
		gravelTag: 'tfg:mars_gravel',
		sound: 'stone',
		mapColor: 'terracotta_orange',
		dimensions: ['ad_astra:mars'],
		support: 'tfg:argillite_support',
		pillar: 'ad_astra:mars_pillar',
		gravel: 'tfg:rock/gravel_mars',
		raw: generateFormsExceptWall('mars_stone', 'ad_astra:%s', 'tfg:rock/mars_stone_wall'),
		cobble: generateFormsExceptWall('mars', 'ad_astra:%s_cobblestone', 'tfg:rock/cobble_mars_wall',
			generateForms('mars', 'tfg:rock/mossy_cobble_%s')),
		bricks: generateFormsExisting('mars_stone', 'ad_astra:%s_brick', { block: 'ad_astra:mars_stone_bricks' },
			generateForms('mars', 'tfg:rock/mossy_bricks_%s'),
			generateFormsExisting('mars', 'tfg:rock/cracked_bricks_%s', { block: 'ad_astra:cracked_mars_stone_bricks'})),
		polished: generateFormsExceptWall('mars_stone', 'ad_astra:polished_%s', 'tfg:rock/polished_mars_wall'),
		chiseled: {
			block: 'ad_astra:chiseled_mars_stone_bricks',
			stair: 'ad_astra:chiseled_mars_stone_stairs',
			slab: 'ad_astra:chiseled_mars_stone_slab',
			wall: 'tfg:rock/chiseled_bricks_mars_wall'
		}
	}),
	// Trachyte
	"venus_stone": generateMissing('venus_stone', {
		material: 'tfg:igneous_felsic',
		tfcTag: 'tfc:igneous_extrusive_items',
		gravelTag: 'tfg:venus_gravel',
		sound: 'stone',
		mapColor: 'terracotta_yellow',
		dimensions: ['ad_astra:mars', 'ad_astra:venus'],
		support: 'tfg:trachyte_support',
		pillar: 'ad_astra:venus_pillar',
		gravel: 'tfg:rock/gravel_venus',
		raw: generateFormsExceptWall('venus_stone', 'ad_astra:%s', 'tfg:rock/venus_stone_wall'),
		cobble: generateFormsExceptWall('venus', 'ad_astra:%s_cobblestone', 'tfg:rock/cobble_venus_wall',
			generateForms('venus', 'tfg:rock/mossy_cobble_%s')),
		bricks: generateFormsExisting('venus_stone', 'ad_astra:%s_brick', { block: 'ad_astra:venus_stone_bricks' },
			generateForms('venus', 'tfg:rock/mossy_bricks_%s'),
			generateFormsExisting('venus', 'tfg:rock/cracked_bricks_%s', { block: 'ad_astra:cracked_venus_stone_bricks' })),
		polished: generateFormsExceptWall('venus_stone', 'ad_astra:polished_%s', 'tfg:rock/polished_venus_wall'),
		chiseled: {
			block: 'ad_astra:chiseled_venus_stone_bricks',
			stair: 'ad_astra:chiseled_venus_stone_stairs',
			slab: 'ad_astra:chiseled_venus_stone_slab',
			wall: 'tfg:rock/chiseled_bricks_venus_wall'
		}
	}),
	"red_granite": generateMissing('red_granite', {
		material: 'tfg:igneous_felsic',
		tfcTag: 'tfc:igneous_intrusive_items',
		gravelTag: 'tfg:hematitic_gravel',
		sound: 'stone',
		mapColor: 'terracotta_red',
		dimensions: ['ad_astra:mars', 'ad_astra:venus'],
		support: 'tfg:red_granite_support',
		raw: {
			block: 'gtceu:red_granite',
			stair: 'tfg:rock/red_granite_stair',
			slab: 'tfg:rock/red_granite_slab',
			wall: 'tfg:rock/red_granite_wall',
			texture: 'gtceu:block/stones/red_granite/stone'
		},
		cobble: generateFormsExisting('red_granite', 'tfg:rock/cobble_%s', {
			block: 'gtceu:red_granite_cobblestone',
			texture: 'gtceu:block/stones/red_granite/cobble',
			mossy: generateFormsExisting('red_granite', 'tfg:rock/mossy_cobble_%s', {
				block: 'gtceu:mossy_red_granite_cobblestone',
				texture: 'gtceu:block/stones/red_granite/cobble_mossy'
			}),
		}),
		bricks: generateFormsExisting('red_granite', 'tfg:rock/bricks_%s', {
			block: 'gtceu:red_granite_bricks',
			texture: 'gtceu:block/stones/red_granite/bricks',
			mossy: generateFormsExisting('red_granite', 'tfg:rock/mossy_bricks_%s', {
				block: 'gtceu:mossy_red_granite_bricks',
				texture: 'gtceu:block/stones/red_granite/bricks_mossy'
			}),
			cracked: generateFormsExisting('red_granite', 'tfg:rock/cracked_bricks_%s', {
				block: 'gtceu:cracked_red_granite_bricks',
				texture: 'gtceu:block/stones/red_granite/bricks_cracked'
			})
		}),
		polished: generateFormsExisting('red_granite', 'tfg:rock/polished_%s', {
				block: 'gtceu:polished_red_granite',
				texture: 'gtceu:block/stones/red_granite/polished'
			}),
		chiseled: { block: 'gtceu:chiseled_red_granite' },
		stonecutting: [
			{ block: 'gtceu:red_granite_tile' },
			{ block: 'gtceu:red_granite_small_tile' },
			{ block: 'gtceu:red_granite_windmill_a' },
			{ block: 'gtceu:red_granite_windmill_b' },
			{ block: 'gtceu:small_red_granite_bricks' },
			{ block: 'gtceu:square_red_granite_bricks' }
		]
	}),


	/////////////////////////////////////////////////////////////////////////////////////////////
	// VENUS ROCKS
	/////////////////////////////////////////////////////////////////////////////////////////////

	//"geyserite": {
	//	material: organic,
	//	tfcTag: 'tfc:sedimentary',
	//	dimensions: ['ad_astra:venus'],
	//	raw: { block: 'tfg:rock/raw/geyserite' }
	//},
	// Ignimbrite
	"flavolite": generateMissing('flavolite', {
		material: 'tfg:igneous_felsic',
		tfcTag: 'tfc:igneous_extrusive_items',
		sound: 'deepslate',
		mapColor: 'sand',
		gravelTag: 'tfc:yellow_gravel',
		dimensions: ['ad_astra:venus'],
		pillar: 'betterend:flavolite_pillar',
		support: 'tfg:flavolite_support',
		raw: generateFormsExisting('flavolite', 'tfg:rock/%s', { block: 'betterend:flavolite' }),
		cobble: generateForms('flavolite', 'tfg:rock/cobble_%s'),
		bricks: generateFormsExisting('flavolite', 'tfg:rock/bricks_%s', { block: 'betterend:flavolite_bricks' }),
		polished: generateFormsExisting('flavolite', 'tfg:rock/polished_%s', { block: 'betterend:flavolite_polished' }),
		chiseled: generateFormsExisting('flavolite', 'tfg:rock/chiseled_%s', { block: 'betterend:flavolite_tiles' })
	}),
	// Lamproite
	"sandy_jadestone": generateMissing('sandy_jadestone', {
		material: 'tfg:igneous_ultramafic',
		tfcTag: 'tfc:igneous_extrusive_items',
		gravelTag: 'tfc:green_gravel',
		sound: 'stone',
		mapColor: 'grass',
		dimensions: ['ad_astra:venus'],
		pillar: 'betterend:sandy_jadestone_pillar',
		support: 'tfg:lamproite_support',
		raw: generateFormsExisting('sandy_jadestone', 'tfg:rock/%s', { block: 'betterend:sandy_jadestone' }),
		cobble: generateForms('sandy_jadestone', 'tfg:rock/cobble_%s'),
		bricks: generateFormsExisting('sandy_jadestone', 'tfg:rock/bricks_%s', { block: 'betterend:sandy_jadestone_bricks' }),
		polished: generateFormsExisting('sandy_jadestone', 'tfg:rock/polished_%s', { block: 'betterend:sandy_jadestone_polished' }),
		chiseled: generateFormsExisting('sandy_jadestone', 'tfg:rock/chiseled_%s', { block: 'betterend:sandy_jadestone_tiles' })
	}),
	// Thermal Vent Deposit
	"sulphuric_rock": {
		material: 'tfg:sedimentary_organic',
		collapsible: false,
		isTFC: false,
		sound: 'dripstone_block',
		mapColor: 'terracotta_light_gray',
		tfcTag: 'tfc:igneous_extrusive_items',
		stonecutterTag: 'tfg:stone_types/thermal_vent_deposit',
		dimensions: ['ad_astra:venus'],
		pillar: 'betterend:sulphuric_rock_pillar',
		raw: { block: 'betterend:sulphuric_rock' },
		bricks: { block: 'betterend:sulphuric_rock_bricks' },
		polished: { block: 'betterend:sulphuric_rock_polished' },
		chiseled: { block: 'betterend:sulphuric_rock_tiles' }
	},
	"scoria": generateMissing('scoria', {
		material: 'tfg:igneous_mafic',
		tfcTag: 'tfc:igneous_extrusive_items',
		gravelTag: 'tfc:brown_gravel',
		sound: 'stone',
		mapColor: 'terracotta_brown',
		dimensions: ['ad_astra:venus'],
		pillar: 'create:scoria_pillar',
		pillar2: 'create:layered_scoria',
		raw: generateFormsExisting('scoria', 'tfg:rock/%s', { 
			block: 'create:scoria',
			texture: 'create:block/palettes/stone_types/scoria'
		}),
		cobble: generateForms('scoria', 'tfg:rock/cobble_%s'),
		bricks: generateFormsExisting('scoria', 'create:cut_%s_brick', { 
			block: 'create:cut_scoria_bricks',
			texture: 'create:block/palettes/stone_types/brick/scoria_cut_brick'
		}),
		polished: generateForms('scoria', 'create:polished_cut_%s'),
		stonecutting: [
			generateForms('scoria', 'create:cut_%s'),
			generateFormsExisting('scoria', 'create:small_%s_brick', { block: 'create:small_scoria_bricks' })
		]
	}),
	"scorchia": generateMissing('scorchia', {
		material: 'tfg:igneous_mafic',
		tfcTag: 'tfc:igneous_extrusive_items',
		gravelTag: 'tfc:black_gravel',
		sound: 'stone',
		mapColor: 'terracotta_black',
		dimensions: ['ad_astra:moon', 'ad_astra:mars', 'ad_astra:venus'],
		pillar: 'create:scorchia_pillar',
		pillar2: 'create:layered_scorchia',
		raw: generateFormsExisting('scorchia', 'tfg:rock/%s', {
			block: 'create:scorchia',
			texture: 'create:block/palettes/stone_types/scorchia'
		}),
		cobble: generateForms('scorchia', 'tfg:rock/cobble_%s'),
		bricks: generateFormsExisting('scorchia', 'create:cut_%s_brick', {
			block: 'create:cut_scorchia_bricks',
			texture: 'create:block/palettes/stone_types/brick/scorchia_cut_brick'
		}),
		polished: generateForms('scorchia', 'create:polished_cut_%s'),
		stonecutting: [
			generateForms('scorchia', 'create:cut_%s'),
			generateFormsExisting('scorchia', 'create:small_%s_brick', { block: 'create:small_scorchia_bricks' })
		]
	}),
	// Mesa caprock
	"caprock": {
		material: 'tfg:sedimentary_clastic',
		tfcTag: 'tfc:sedimentary_items',
		isTFC: false,
		collapsible: false,
		dimensions: ['ad_astra:venus'],
		raw: { block: 'ad_astra:conglomerate' },
		gravel: 'tfc:rock/gravel/conglomerate',
		polished: { block: 'ad_astra:polished_conglomerate' }
	},

	/////////////////////////////////////////////////////////////////////////////////////////////
	// MERCURY ROCKS
	/////////////////////////////////////////////////////////////////////////////////////////////

	// Komatiite
	"mercury_stone": generateMissing('mercury_stone', {
		material: 'tfg:igneous_ultramafic',
		tfcTag: 'tfc:igneous_intrusive_items',
		gravelTag: 'tfc:white_gravel',
		sound: 'stone',
		mapColor: 'terracotta_purple',
		dimensions: ['ad_astra:mercury'],
		support: 'tfg:komatiite_support',
		pillar: 'ad_astra:mercury_pillar',
		gravel: 'tfg:rock/gravel_mercury',
		raw: generateFormsExceptWall('mercury_stone', 'ad_astra:%s', 'tfg:rock/mercury_stone_wall'),
		cobble: generateFormsExceptWall('mercury', 'ad_astra:%s_cobblestone', 'tfg:rock/cobble_mercury_wall',
			generateForms('mercury', 'tfg:rock/mossy_cobble_%s')),
		bricks: generateFormsExisting('mercury_stone', 'ad_astra:%s_brick', { block: 'ad_astra:mercury_stone_bricks' },
			generateForms('mercury', 'tfg:rock/mossy_bricks_%s'),
			generateFormsExisting('mercury', 'tfg:rock/cracked_bricks_%s', { block: 'ad_astra:cracked_mercury_stone_bricks' })),
		polished: generateFormsExceptWall('mercury_stone', 'ad_astra:polished_%s', 'tfg:rock/polished_mercury_wall'),
		chiseled: {
			block: 'ad_astra:chiseled_mercury_stone_bricks',
			stair: 'ad_astra:chiseled_mercury_stone_stairs',
			slab: 'ad_astra:chiseled_mercury_stone_slab',
			wall: 'tfg:rock/chiseled_bricks_mercury_wall'
		}
	}),


	/////////////////////////////////////////////////////////////////////////////////////////////
	// EUROPA ROCKS
	/////////////////////////////////////////////////////////////////////////////////////////////

	// do we want to rename this
	"permafrost": generateMissing('permafrost', {
		material: 'ice',
		sound: 'stone',
		mapColor: 'snow',
		dimensions: ['ad_astra:glacio'],
		support: 'tfg:permafrost_support',
		pillar: 'ad_astra:permafrost_pillar',
		raw: generateFormsExisting('permafrost', 'tfg:rock/%s', { block: 'ad_astra:permafrost' }),
		cobble: generateFormsExisting('permafrost', 'tfg:rock/cobble_%s', { texture: 'ad_astra:block/permafrost_top' },
			generateForms('permafrost', 'tfg:rock/mossy_cobble_%s')),
		bricks: generateFormsExisting('permafrost', 'ad_astra:%s_brick', { block: 'ad_astra:permafrost_bricks' },
			generateForms('permafrost', 'tfg:rock/mossy_bricks_%s'),
			generateFormsExisting('permafrost', 'tfg:rock/cracked_bricks_%s', { block: 'ad_astra:cracked_permafrost_bricks' })),
		polished: generateFormsExceptWall('permafrost', 'ad_astra:polished_%s', 'tfg:rock/polished_permafrost_wall'),
		chiseled: {
			block: 'ad_astra:chiseled_permafrost_bricks',
			stair: 'ad_astra:chiseled_permafrost_brick_stairs',
			slab: 'ad_astra:chiseled_permafrost_brick_slab',
			wall: 'tfg:rock/chiseled_bricks_permafrost_wall'
		},
		stonecutting: [
			{ block: 'ad_astra:permafrost_tiles' }
		]
	}),


	/////////////////////////////////////////////////////////////////////////////////////////////
	// SYNTHETIC ROCKS
	/////////////////////////////////////////////////////////////////////////////////////////////

	"stone": {
		material: 'stone',
		collapsible: false,
		sound: 'stone',
		mapColor: 'stone',
		support: 'tfg:stone_support',
		brick: 'gtceu:stone_ingot',
		aqueduct: 'tfg:rock/aqueduct_stone',
		stonecutterTag: 'tfg:stone_types/reconstituted_stone',
		raw: generateFormsExceptWall('stone', 'minecraft:%s', 'tfg:rock/stone_wall'),
		cobble: generateForms('cobblestone', 'minecraft:%s', 
			generateForms('cobblestone', 'minecraft:mossy_%s')),
		bricks: generateFormsExisting('stone', 'minecraft:%s_brick', { block: 'minecraft:stone_bricks' },
			generateFormsExisting('stone', 'minecraft:mossy_%s_brick', { block: 'minecraft:mossy_stone_bricks' }),
			generateFormsExisting('stone', 'tfg:rock/cracked_bricks_%s', { block: 'minecraft:cracked_stone_bricks' })),
		polished: {
			block: 'minecraft:smooth_stone',
			stair: 'tfg:rock/smooth_stone_stairs',
			slab: 'minecraft:smooth_stone_slab',
			wall: 'tfg:rock/smooth_stone_wall'
		},
		chiseled: { block: 'minecraft:chiseled_stone_bricks' }
	},
	"light_concrete": {
		material: 'concrete',
		collapsible: false,
		sound: 'stone',
		mapColor: 'color_light_gray',
		support: 'tfg:light_concrete_support',
		stonecutterTag: 'tfg:stone_types/light_concrete',
		raw: {
			block: 'gtceu:light_concrete',
			texture: 'gtceu:block/stones/light_concrete/stone'
		},
		cobble: {
			block: 'gtceu:light_concrete_cobblestone',
			mossy: { block: 'gtceu:mossy_light_concrete_cobblestone' }
		},
		bricks: {
			block: 'gtceu:light_concrete_bricks',
			mossy: { block: 'gtceu:mossy_light_concrete_bricks' },
			cracked: { block: 'gtceu:cracked_light_concrete_bricks' }
		},
		chiseled: { block: 'gtceu:chiseled_light_concrete' },
		polished: { block: 'gtceu:polished_light_concrete' },
		stonecutting: [
			{ block: 'gtceu:light_concrete_tile' },
			{ block: 'gtceu:light_concrete_small_tile' },
			{ block: 'gtceu:light_concrete_windmill_a' },
			{ block: 'gtceu:light_concrete_windmill_b' },
			{ block: 'gtceu:small_light_concrete_bricks' },
			{ block: 'gtceu:square_light_concrete_bricks' }
		]
	},
	"dark_concrete": {
		material: 'concrete',
		collapsible: false,
		sound: 'stone',
		mapColor: 'color_gray',
		support: 'tfg:dark_concrete_support',
		stonecutterTag: 'tfg:stone_types/dark_concrete',
		raw: {
			block: 'gtceu:dark_concrete',
			texture: 'gtceu:block/stones/dark_concrete/stone' 
		},
		cobble: {
			block: 'gtceu:dark_concrete_cobblestone',
			mossy: { block: 'gtceu:mossy_dark_concrete_cobblestone' }
		},
		bricks: {
			block: 'gtceu:dark_concrete_bricks',
			mossy: { block: 'gtceu:mossy_dark_concrete_bricks' },
			cracked: { block: 'gtceu:cracked_dark_concrete_bricks' }
		},
		chiseled: { block: 'gtceu:chiseled_dark_concrete' },
		polished: { block: 'gtceu:polished_dark_concrete' },
		stonecutting: [
			{ block: 'gtceu:dark_concrete_tile' },
			{ block: 'gtceu:dark_concrete_small_tile' },
			{ block: 'gtceu:dark_concrete_windmill_a' },
			{ block: 'gtceu:dark_concrete_windmill_b' },
			{ block: 'gtceu:small_dark_concrete_bricks' },
			{ block: 'gtceu:square_dark_concrete_bricks' }
		]
	},
	"titanium_concrete": {
		collapsible: false,
		sound: 'stone',
		stonecutterTag: 'tfg:stone_types/titanium_concrete',
		raw: { block: 'tfg:titanium_concrete' },
		bricks: { block: 'tfg:titanium_concrete_bricks' },
		chiseled: { block: 'tfg:titanium_concrete_tile' },
		polished: { block: 'tfg:polished_titanium_concrete' },
		stonecutting: [
			{ block: 'tfg:titanium_concrete_tile_small' },
			{ block: 'tfg:titanium_concrete_bricks_small' },
			{ block: 'tfg:titanium_concrete_bricks_square' }
		]
	},
	"brick": {
		material: 'brick',
		collapsible: false,
		sound: 'stone',
		stonecutterTag: 'tfg:stone_types/red_bricks',
		bricks: generateFormsExisting('brick', 'minecraft:%s', { block: 'minecraft:bricks' },
			generateFormsExisting('red_brick', 'createdeco:mossy_%s', { block: 'createdeco:mossy_red_bricks' }),
			generateFormsExisting('red_brick', 'createdeco:cracked_%s', { block: 'createdeco:cracked_red_bricks' })),
		polished: generateFormsExisting('red_brick', 'createdeco:corner_%s', { block: 'createdeco:corner_red_bricks' }),
		stonecutting: [
			generateFormsExisting('red_brick', 'createdeco:short_%s', { block: 'createdeco:short_red_bricks' }),
			generateFormsExisting('red_brick', 'createdeco:tiled_%s', { block: 'createdeco:tiled_red_bricks' }),
			generateFormsExisting('red_brick', 'createdeco:long_%s', { block: 'createdeco:long_red_bricks' })
		]
	},

	// TODO: vanilla clay bricks and create deco's colored ones

	/////////////////////////////////////////////////////////////////////////////////////////////
	// CREATE'S OTHER ROCKS
	/////////////////////////////////////////////////////////////////////////////////////////////

	"asurine": {
		material: 'asurine',
		collapsible: false,
		dimensions: ['ad_astra:moon'],
		pillar: 'create:asurine_pillar',
		pillar2: 'create:layered_asurine',
		stonecutterTag: 'create:stone_types/asurine',
		raw: { block: 'create:asurine' },
		bricks: generateFormsExisting('asurine', 'create:cut_%s_brick', { block: 'create:cut_asurine_bricks' }),
		polished: generateForms('asurine', 'create:polished_cut_%s'),
		stonecutting: [
			generateForms('asurine', 'create:cut_%s'),
			generateFormsExisting('asurine', 'create:small_%s_brick', { block: 'create:small_asurine_bricks' })
		]
	},
	"ochrum": {
		material: 'ochrum',
		collapsible: false,
		dimensions: ['ad_astra:mars'],
		pillar: 'create:ochrum_pillar',
		pillar2: 'create:layered_ochrum',
		stonecutterTag: 'create:stone_types/ochrum',
		raw: { block: 'create:ochrum' },
		bricks: generateFormsExisting('ochrum', 'create:cut_%s_brick', { block: 'create:cut_ochrum_bricks' }),
		polished: generateForms('ochrum', 'create:polished_cut_%s'),
		stonecutting: [
			generateForms('ochrum', 'create:cut_%s'),
			generateFormsExisting('ochrum', 'create:small_%s_brick', { block: 'create:small_ochrum_bricks' })
		]
	},
	"crimsite": {
		material: 'crimsite',
		collapsible: false,
		dimensions: ['ad_astra:venus'],
		pillar: 'create:crimsite_pillar',
		pillar2: 'create:layered_crimsite',
		stonecutterTag: 'create:stone_types/crimsite',
		raw: { block: 'create:crimsite' },
		bricks: generateFormsExisting('crimsite', 'create:cut_%s_brick', { block: 'create:cut_crimsite_bricks' }),
		polished: generateForms('crimsite', 'create:polished_cut_%s'),
		stonecutting: [
			generateForms('crimsite', 'create:cut_%s'),
			generateFormsExisting('crimsite', 'create:small_%s_brick', { block: 'create:small_crimsite_bricks' })
		]
	},
	"veridium": {
		material: 'veridium',
		collapsible: false,
		dimensions: ['ad_astra:glacio'],
		pillar: 'create:veridium_pillar',
		pillar2: 'create:layered_veridium',
		stonecutterTag: 'create:stone_types/veridium',
		raw: { block: 'create:veridium' },
		bricks: generateFormsExisting('veridium', 'create:cut_%s_brick', { block: 'create:cut_veridium_bricks' }),
		polished: generateForms('veridium', 'create:polished_cut_%s'),
		stonecutting: [
			generateForms('veridium', 'create:cut_%s'),
			generateFormsExisting('veridium', 'create:small_%s_brick', { block: 'create:small_veridium_bricks' })
		]
	}
})

global.CREATE_DECO_BRICK_TYPES.forEach(color => {
	// handled above
	if (color === "red")
		return;

	global.BIG_ROCK_TABLE[`${color}_brick`] = {
		material: 'brick',
		collapsible: false,
		sound: 'stone',
		stonecutterTag: `tfg:stone_types/${color}_brick`,
		bricks: generateFormsExisting(color, 'createdeco:%s_brick', { block: `createdeco:${color}_bricks` },
			generateFormsExisting(color, 'createdeco:mossy_%s_brick', { block: `createdeco:mossy_${color}_bricks` }),
			generateFormsExisting(color, 'createdeco:cracked_%s_brick', { block: `createdeco:cracked_${color}_bricks` })),
		polished: generateFormsExisting(color, 'createdeco:corner_%s_brick', { block: `createdeco:corner_${color}_bricks` }),
		stonecutting: [
			generateFormsExisting(color, 'createdeco:short_%s_brick', { block: `createdeco:short_${color}_bricks` }),
			generateFormsExisting(color, 'createdeco:tiled_%s_brick', { block: `createdeco:tiled_${color}_bricks` }),
			generateFormsExisting(color, 'createdeco:long_%s_brick', { block: `createdeco:long_${color}_bricks` })
		]
	}
});

/* ROCKS:

igneous:
mafic = rich in magnesium and iron
felsic = rich in feldspar and quartz

sedimentary:
clastic = rich in quartz, feldspar, clay, mica
carbonate = calcium carbonate (calcite etc)
chemical = stuff like flint, halite, sylvite, gypsum
organic = coal basically
	
potassium_feldspar = aluminium + silicate, with sodium, calcium, potassium, barium
biotite = a type of mica (potassium, magnesium, iron, aluminium, silicon, and a little fluorine)

gabbro:		intrusive igneous	mafic
diorite:	intrusive igneous	intermediate
granite:	intrusive igneous	felsic

basalt:		extrusive igneous	mafic
andesite:	extrusive igneous	intermediate
dacite:		extrusive igneous	intermediate
rhyolite:	extrusive igneous	felsic

shale:		sedimentary			clastic
claystone:	sedimentary			clastic
cong:		sedimentary			clastic
limestone:	sedimentary			carbonate
dolomite:	sedimentary			carbonate
chalk:		sedimentary			carbonate
chert:		sedimentary			chemical? apparently it's similar to flint

slate:		metamorphic			from sedimentary clastic
pyllite:	metamorphic			from sedimentary clastic
schist:		metamorphic			from slate, phyllite, or igneous intrusive
gneiss:		metamorphic			from slate, phyllite, or igneous intrusive
marble:		metamorphic			from sedimentary carbonate
quartzite:	metamorphic			from chert

tuff:		either IE or sedi depending on who you ask - might be ok to move to earth at some point. Either in the beneath or if we port 1.21 tfc worldgen
travertine:	sedimentary			carbonate
migmatite:	metamorphic			from slate, phyllite, or igneous intrusive
pyroxenite:	intrusive igneous	ultramafic
keratophyre:extrusive igneous	intermediate
calcite:	sedimentary			carbonate
obsidian:	extrusive igneous	felsic
	
suevite		? melted rock from meteor impacts
anorthosite	intrusive igneous	mafic
norite		intrusive igneous	mafic
phonolite	extrusive igneous	intermediate

argillite	sedimentary			clastic
trachyte	extrusive igneous	felsic
red granite intrusive igneous	felsic

lamproite	extrusive igneous	ultramafic
ignimbrite	either IE or meta depending on who you ask - mostly made of tuff + pumice/scoria
sulphuric_rock	mafic
scoria		extrusive igneous	mafic
geyserite	sedimentary			chemical (mostly made of opal/silica)

komatiite	intrusive igneous	ultramafic
permafrost	? not really a rock

(unused)
syenite		intrusive igneous	felsic	(opposite of trachyte)
diabase		intrusive igneous	mafic (apparently common on earth?)
perlite		extrusive igneous	felsic (hydrated obsidian, also used in ceramics?)
*/