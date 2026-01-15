// priority: 0
"use strict";

const registerTFGRockMaterials = (event) => {

	// Specialized icon sets for TFC's own
	modifyTFGIconSets(event)

	const registerStoneMaterial = (rockType, color, components) =>
		event.create(`tfg:${rockType}`)
			.color(color)
			.dust()
			.iconSet(GTMaterialIconSet.ROUGH)
			.components(components)
			.flags(
				GTMaterialFlags.MORTAR_GRINDABLE,
				GTMaterialFlags.NO_SMASHING,
				GTMaterialFlags.NO_SMELTING,
				GTMaterialFlags.DISABLE_DECOMPOSITION);

	// event.create() returns a material builder, not the actual material
	registerStoneMaterial('sedimentary_clastic', 0xAF9377, ['quartzite', 'potassium_feldspar']);
	const clastic = GTMaterials.get('tfg:sedimentary_clastic');
	registerStoneMaterial('sedimentary_carbonate', 0xADA67A, ['quartzite', 'calcite']);
	const carbonate = GTMaterials.get('tfg:sedimentary_carbonate');
	registerStoneMaterial('sedimentary_organic', 0xA8706B, ['flint', 'unknown']);
	const organic = GTMaterials.get('tfg:sedimentary_organic');

	registerStoneMaterial('metamorphic', 0x876981, ['marble', 'deepslate']);
	const metamorphic = GTMaterials.get('tfg:metamorphic');

	registerStoneMaterial('igneous_ultramafic', 0x45474D, ['blackstone']);
	const ultramafic = GTMaterials.get('tfg:igneous_ultramafic');
	registerStoneMaterial('igneous_mafic', 0x525D6B, ['basalt']);
	const mafic = GTMaterials.get('tfg:igneous_mafic');
	registerStoneMaterial('igneous_intermediate', 0x71818A, ['andesite']);
	const intermediate = GTMaterials.get('tfg:igneous_intermediate');
	registerStoneMaterial('igneous_felsic', 0x97B2BF, ['granite_red']);
	const felsic = GTMaterials.get('tfg:igneous_felsic');

	global.GEOLOGY_MATERIALS = {
		gabbro: mafic,
		diorite: intermediate,
		granite: felsic,
		basalt: mafic,
		andesite: intermediate,
		dacite: intermediate,
		rhyolite: felsic,
		shale: clastic,
		claystone: clastic,
		conglomerate: clastic,
		limestone: carbonate,
		dolomite: carbonate,
		chalk: carbonate,
		chert: organic,
		slate: metamorphic,
		phyllite: metamorphic,
		schist: metamorphic,
		gneiss: metamorphic,
		marble: metamorphic,
		quartzite: metamorphic,

		deepslate: metamorphic,
		dripstone: carbonate,
		blackstone: ultramafic,
		crackrack: intermediate,
		calcite: carbonate,

		moon_stone: mafic,
		moon_deepslate: mafic,
		glacio_stone: intermediate,

		mars_stone: clastic,
		venus_stone: felsic,
		granite_red: felsic,

		tuff: felsic,
		flavolite: felsic,
		sandy_jadestone: ultramafic,
		sulphuric_rock: mafic,
		brimstone: organic,
		scoria: mafic,
		geyserite: organic,

		mercury_stone: ultramafic,
	}

	/**
	 * Generates an object of block, stair, slab, and wall strings.
	 * @param {String} id
	 * The internal ID of a rock type. For example, migmatite is 'deepslate'.
	 * @param {String} pattern 
	 * A pattern to use to generate the other rock form strings. 
	 * %s will be replaced with the id above.
	 * "_stairs", "_slab", or "_wall" will be appended on the end.
	 * @param {String?} [existingBlock=null]
	 * If the block doesn't match the pattern (or if the block exists but in a different namespace for example), 
	 * put it here to avoid auto generating it.
	 * @param {{block: String, stair: String, slab: String, wall: String}?} [mossy=null]
	 * If this rock block has a mossy subset, put it here.
	 * @param {{block: String, stair: String, slab: String, wall: String}?} [cracked=null]
	 * If this rock block has a cracked subset, put it here.
	 * @returns {{block: String, stair: String, slab: String, wall: String, mossy: *?, cracked: *?}?}
	 */
	function generateForms(id, pattern, existingBlock = null, mossy = null, cracked = null) {
		let replaced = pattern.replace('%s', id);
		return {
			block: existingBlock ?? `${replaced}`,
			stair: `${replaced}_stairs`,
			slab: `${replaced}_slab`,
			wall: `${replaced}_wall`,
			mossy: mossy,
			cracked: cracked
		};
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
	 * @param {{block: String, stair: String, slab: String, wall: String}?} [mossy=null]
	 * If this rock block has a mossy subset, put it here.
	 * @param {{block: String, stair: String, slab: String, wall: String}?} [cracked=null]
	 * If this rock block has a cracked subset, put it here.
	 * @returns {{block: String, stair: String, slab: String, wall: String, mossy: *?, cracked: *?}?}
	 */
	function generateFormsAdAstra(id, pattern, wall, mossy = null, cracked = null) {
		let replaced = pattern.replace('%s', id);
		return {
			block: existingBlock ?? `${replaced}`,
			stair: `${replaced}_stairs`,
			slab: `${replaced}_slab`,
			wall: wall,
			mossy: mossy,
			cracked: cracked
		};
	}

	/**
	 * Generates some missing rock-type blocks that don't have stair/slab/wall blocks.
	 * @param {String} id 
	 * The internal ID of a rock type. For example, migmatite is 'deepslate'.
	 * @param {*} table
	 * A table of different rock blocks.
	 */
	function generateMissing(id, table) {
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

		table.isTFC = false;
		return table;
	}

	// This can also be used for things that aren't really rock types, if you want to generate similar recipes.
	global.BIG_ROCK_TABLE = {
		"gabbro": {
			material: mafic,
			tfcTag: 'tfc:igneous_intrusive_items',
			support: 'tfg:gabbro_support',
			isTFC: true
		},
		"diorite": {
			material: intermediate,
			tfcTag: 'tfc:igneous_intrusive_items',
			support: 'tfg:diorite_support',
			isTFC: true,
			pillar: 'create:diorite_pillar',
			pillar2: 'create:layered_diorite',
			createTag: 'create:stone_types/diorite',
			stonecutting: [
				generateForms('diorite', 'create:cut_%s'),
				generateForms('diorite', 'create:polished_cut_%s'),
				generateForms('diorite', 'create:cut_%s_brick', 'create:cut_diorite_bricks'),
				generateForms('diorite', 'create:small_%s_brick', 'create:small_diorite_bricks')
			]
		},
		"granite": {
			material: felsic,
			tfcTag: 'tfc:igneous_intrusive_items',
			support: 'tfg:granite_support',
			isTFC: true
		},
		"basalt": {
			material: mafic,
			tfcTag: 'tfc:igneous_extrusive_items',
			support: 'tfg:basalt_support',
			isTFC: true,
			pillar: 'minecraft:polished_basalt',
			pillar2: 'minecraft:smooth_basalt',
		},
		"andesite": {
			material: intermediate,
			tfcTag: 'tfc:igneous_extrusive_items',
			support: 'tfg:andesite_support',
			isTFC: true,
			pillar: 'create:andesite_pillar',
			pillar2: 'create:layered_andesite',
			createTag: 'create:stone_types/andesite',
			stonecutting: [
				generateForms('andesite', 'create:cut_%s'),
				generateForms('andesite', 'create:polished_cut_%s'),
				generateForms('andesite', 'create:cut_%s_brick', 'create:cut_andesite_bricks'),
				generateForms('andesite', 'create:small_%s_brick', 'create:small_andesite_bricks')
			]
		},
		"dacite": {
			material: intermediate,
			tfcTag: 'tfc:igneous_extrusive_items',
			support: 'tfg:dacite_support',
			isTFC: true
		},
		"rhyolite": {
			material: felsic,
			tfcTag: 'tfc:igneous_extrusive_items',
			support: 'tfg:rhyolite_support',
			isTFC: true
		},
		"shale": {
			material: clastic,
			tfcTag: 'tfc:sedimentary_items',
			support: 'tfg:shale_support',
			isTFC: true
		},
		"claystone": {
			material: clastic,
			tfcTag: 'tfc:sedimentary_items',
			support: 'tfg:claystone_support',
			isTFC: true
		},
		"conglomerate": {
			material: clastic,
			tfcTag: 'tfc:sedimentary_items',
			support: 'tfg:conglomerate_support',
			isTFC: true
		},
		"limestone": {
			material: carbonate,
			tfcTag: 'tfc:sedimentary_items',
			support: 'tfg:limestone_support',
			isTFC: true,
			pillar: 'create:limestone_pillar',
			pillar2: 'create:layered_limestone',
			createTag: 'create:stone_types/limestone',
			stonecutting: [
				generateForms('limestone', 'create:cut_%s'),
				generateForms('limestone', 'create:polished_cut_%s'),
				generateForms('limestone', 'create:cut_%s_brick', 'create:cut_limestone_bricks'),
				generateForms('limestone', 'create:small_%s_brick', 'create:small_limestone_bricks'),
				{ block: 'create:limestone' }
			]
		},
		"dolomite": {
			material: carbonate,
			tfcTag: 'tfc:sedimentary_items',
			support: 'tfg:dolomite_support',
			isTFC: true
		},
		"chalk": {
			material: carbonate,
			tfcTag: 'tfc:sedimentary_items',
			support: 'tfg:chalk_support',
			isTFC: true
		},
		"chert": {
			material: organic,
			tfcTag: 'tfc:sedimentary_items',
			support: 'tfg:chert_support',
			isTFC: true,
			pillar: 'create:granite_pillar',
			pillar2: 'create:layered_granite',
			createTag: 'create:stone_types/granite',
			stonecutting: [
				generateForms('granite', 'create:cut_%s'),
				generateForms('granite', 'create:polished_cut_%s'),
				generateForms('granite', 'create:cut_%s_brick', 'create:cut_granite_bricks'),
				generateForms('granite', 'create:small_%s_brick', 'create:small_granite_bricks')
			]
		},
		"slate": {
			material: metamorphic,
			tfcTag: 'tfc:metamorphic_items',
			support: 'tfg:slate_support',
			isTFC: true
		},
		"phyllite": {
			material: metamorphic,
			tfcTag: 'tfc:metamorphic_items',
			support: 'tfg:phyllite_support',
			isTFC: true
		},
		"schist": {
			material: metamorphic,
			tfcTag: 'tfc:metamorphic_items',
			support: 'tfg:schist_support',
			isTFC: true
		},
		"gneiss": {
			material: metamorphic,
			tfcTag: 'tfc:metamorphic_items',
			support: 'tfg:gneiss_support',
			isTFC: true
		},
		"marble": {
			material: metamorphic,
			tfcTag: 'tfc:metamorphic_items',
			support: 'tfg:marble_support',
			isTFC: true,
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
		},
		"quartzite": {
			material: GTMaterials.Quartzite,
			tfcTag: 'tfc:metamorphic_items',
			support: 'tfg:quartzite_support',
			isTFC: true
		},
		// Migmatite
		"deepslate": generateMissing('deepslate', {
			material: metamorphic,
			tfcTag: 'tfc:metamorphic_items',
			support: 'tfg:migmatite_support',
			pillar: 'create:deepslate_pillar',
			pillar2: 'create:layered_deepslate',
			createTag: 'create:stone_types/deepslate',
			raw: generateForms('deepslate', 'tfg:rock/%s', 'minecraft:deepslate'),
			cobble: generateForms('deepslate', 'minecraft:cobbled_%s', null,
				generateForms('deepslate', 'tfg:rock/mossy_cobble_%')),
			bricks: generateForms('deepslate', 'minecraft:%s_brick', 'minecraft:deepslate_bricks',
				generateForms('deepslate', 'tfg:rock/mossy_bricks_%s'),
				generateForms('deepslate', 'tfg:rock/cracked_bricks_%s', 'minecraft:cracked_deepslate_bricks')),
			polished: generateForms('deepslate', 'minecraft:polished_%s'),
			chiseled: { block: 'minecraft:chiseled_deepslate' },
			stonecutting: [
				generateForms('deepslate', 'minecraft:%s_tile', 'minecraft:deepslate_tiles', null, 
					generateForms('deepslate', 'tfg:rock/cracked_tiles_%s', 'minecraft:cracked_deepslate_tiles')),
				generateForms('deepslate', 'create:cut_%s'),
				generateForms('deepslate', 'create:polished_cut_%s'),
				generateForms('deepslate', 'create:cut_%s_brick', 'create:cut_deepslate_bricks'),
				generateForms('deepslate', 'create:small_%s_brick', 'create:small_deepslate_bricks')
			]
		}),
		// Travertine
		"dripstone": generateMissing('dripstone', {
			material: carbonate,
			tfcTag: 'tfc:sedimentary_items',
			support: 'tfg:travertine_support',
			pillar: 'create:dripstone_pillar',
			pillar2: 'create:layered_dripstone',
			createTag: 'create:stone_types/dripstone',
			raw: generateForms('dripstone', 'tfg:rock/%s', 'minecraft:dripstone_block'),
			cobble: generateForms('dripstone', 'tfg:rock/cobble_%s', null,
				generateForms('dripstone', 'tfg:rock/mossy_cobble_%s')),
			bricks: generateForms('dripstone', 'create:cut_%s_brick', 'create:cut_dripstone_bricks',
				generateForms('dripstone', 'tfg:rock/mossy_bricks_%s'),
				generateForms('dripstone', 'tfg:rock/cracked_bricks_%s')),
			polished: generateForms('dripstone', 'create:cut_%s'),
			stonecutting: [
				generateForms('dripstone', 'create:polished_cut_%s'),
				generateForms('dripstone', 'create:small_%s_brick', 'create:small_dripstone_bricks')
			]
		}),
		// Pyroxenite
		"blackstone": generateMissing('blackstone', {
			material: ultramafic,
			tfcTag: 'tfc:igneous_intrusive_items',
			support: 'tfg:pyroxenite_support',
			pillar: 'beneath:ancient_altar',
			loose: 'beneath:blackstone_pebble',
			brick: 'beneath:blackstone_brick',
			aqueduct: 'beneath:blackstone_aqueduct',
			raw: generateForms('blackstone', 'minecraft:%s'),
			cobble: generateForms('blackstone', 'tfg:rock/cobble_%s', null,
				generateForms('blackstone', 'tfg:rock/mossy_cobble_%s')),
			bricks: generateForms('blackstone', 'minecraft:polished_%s_brick', 'minecraft:polished_blackstone_bricks',
				generateForms('blackstone', 'tfg:rock/mossy_bricks_%s'),
				generateForms('blackstone', 'tfg:rock/cracked_bricks_%s', 'minecraft:cracked_polished_blackstone_bricks')),
			polished: generateForms('blackstone', 'minecraft:polished_%s'),
			chiseled: { block: 'minecraft:chiseled_polished_blackstone' },
		}),
		// Keratophyre
		"crackrack": generateMissing('crackrack', {
			material: intermediate,
			tfcTag: 'tfc:igneous_extrusive',
			support: 'tfg:keratophyre_support',
			brick: 'minecraft:nether_brick',
			aqueduct: 'tfg:rock/aqueduct_nether',
			raw: generateForms('crackrack', 'tfg:rock/%s', 'beneath:crackrack'),
			cobble: generateForms('crackrack', 'tfg:rock/cobble_%s', null,
				generateForms('crackrack', 'tfg:rock/mossy_cobble_%s')),
			bricks: generateForms('nether', 'minecraft:%s_brick', 'minecraft:nether_bricks',
				generateForms('nether', 'tfg:rock/mossy_bricks_%s'),
				generateForms('nether', 'tfg:rock/cracked_bricks_%s', 'minecraft:cracked_nether_bricks')),
			polished: generateForms('crackrack', 'tfg:rock/polished_%s'),
			chiseled: { block: 'minecraft:chiseled_nether_bricks' },
			stonecutting: [
				{ block: 'minecraft:nether_brick_fence' }
			]
		}),
		"calcite": {
			material: carbonate,
			tfcTag: 'tfc:sedimentary',
			isTFC: false,
			pillar: 'create:calcite_pillar',
			pillar2: 'create:layered_calcite',
			raw: { block: 'minecraft:calcite' },
			stonecutting: [
				generateForms('calcite', 'create:cut_%s'),
				generateForms('calcite', 'create:polished_cut_%s'),
				generateForms('calcite', 'create:cut_%s_brick', 'create:cut_calcite_bricks'),
				generateForms('calcite', 'create:small_%s_brick', 'create:small_calcite_bricks')
			]
		},
		"tuff": {
			material: felsic,
			tfcTag: 'tfc:igneous_extrusive',
			isTFC: false,
			pillar: 'create:tuff_pillar',
			pillar2: 'create:layered_tuff',
			raw: { block: 'minecraft:tuff' },
			stonecutting: [
				generateForms('tuff', 'create:cut_%s'),
				generateForms('tuff', 'create:polished_cut_%s'),
				generateForms('tuff', 'create:cut_%s_brick', 'create:cut_tuff_bricks'),
				generateForms('tuff', 'create:small_%s_brick', 'create:small_tuff_bricks')
			]
		},
		// Anorthosite
		"moon_stone": generateMissing('moon_stone', {
			material: mafic,
			tfcTag: 'tfc:igneous_intrusive',
			support: 'tfg:anorthosite_support',
			pillar: 'ad_astra:moon_pillar',
			raw: generateFormsAdAstra('moon_stone', 'ad_astra:%s', 'tfg:rock/moon_stone_wall'),
			cobble: generateFormsAdAstra('moon', 'ad_astra:%s_cobblestone', 'tfg:rock/cobble_moon_wall',
				generateForms('moon', 'tfg:rock/mossy_cobble_%s')),
			bricks: generateForms('moon_stone', 'ad_astra:%s_brick', 'ad_astra:moon_stone_bricks',
				generateForms('moon', 'tfg:rock/cracked_bricks_%s', 'ad_astra:cracked_moon_stone_bricks'),
				generateForms('moon', 'tfg:rock/mossy_bricks_%s')),
			polished: generateFormsAdAstra('moon_stone', 'ad_astra:polished_%s', 'tfg:rock/polished_moon_wall'),
			chiseled: {
				block: 'ad_astra:chiseled_moon_stone_bricks',
				stair: 'ad_astra:chiseled_moon_stone_stairs',
				slab: 'ad_astra:chiseled_moon_stone_slab',
				wall: 'tfg:rock/chiseled_bricks_moon_wall'
			}
		}),
		// Norite
		"moon_deepslate": generateMissing('moon_deepslate', {
			material: mafic,
			tfcTag: 'tfc:igneous_intrusive',
			support: 'tfg:norite_support',
			pillar: 'tfg:rock/pillar_moon_deepslate',
			raw: generateForms('moon_deepslate', 'tfg:rock/%s', 'ad_astra:moon_deepslate'),
			cobble: generateForms('moon_deepslate', 'tfg:rock/cobble_%s', null,
				generateForms('moon_deepslate', 'tfg:rock/mossy_cobble_%s')),
			bricks: generateForms('moon_deepslate', 'tfg:rock/bricks_%s', null,
				generateForms('moon_deepslate', 'tfg:rock/mossy_bricks_%s'),
				generateForms('moon_deepslate', 'tfg:rock/cracked_bricks_%s')),
			polished: generateForms('moon_deepslate', 'tfg:rock/polished_%s'),
			chiseled: generateForms('moon_deepslate', 'tfg:rock/chiseled_bricks_%s')
		}),
		// Phonolite
		"glacio_stone": generateMissing('glacio_stone', {
			material: intermediate,
			tfcTag: 'tfc:igneous_extrusive',
			support: 'tfg:phonolite_support',
			pillar: 'ad_astra:glacio_pillar',
			raw: generateFormsAdAstra('glacio_stone', 'ad_astra:%s', 'tfg:rock/glacio_stone_wall'),
			cobble: generateFormsAdAstra('glacio', 'ad_astra:%s_cobblestone', 'tfg:rock/cobble_glacio_wall',
				generateForms('glacio', 'tfg:rock/mossy_cobble_%s')),
			bricks: generateForms('glacio_stone', 'ad_astra:%s_brick', 'ad_astra:glacio_stone_bricks',
				generateForms('glacio', 'tfg:rock/cracked_bricks_%s', 'ad_astra:cracked_glacio_stone_bricks'),
				generateForms('glacio', 'tfg:rock/mossy_bricks_%s')),
			polished: generateFormsAdAstra('glacio_stone', 'ad_astra:polished_%s', 'tfg:rock/polished_glacio_wall'),
			chiseled: {
				block: 'ad_astra:chiseled_glacio_stone_bricks',
				stair: 'ad_astra:chiseled_glacio_stone_stairs',
				slab: 'ad_astra:chiseled_glacio_stone_slab',
				wall: 'tfg:rock/chiseled_bricks_glacio_wall'
			}
		}),
		// Sky stone
		"suevite": {
			material: null,
			raw: generateForms('sky_stone', 'ae2:%s', 'ae2:sky_stone_block'),
			polished: generateForms('sky_stone', 'ae2:smooth_%s', 'ae2:smooth_sky_stone_block'),
			bricks: generateForms('sky_stone', 'ae2:%s_brick'),
			chiseled: generateForms('sky_stone', 'ae2:%s_small_brick')
		},
		"purpur": {
			material: null,
			brick: 'minecraft:popped_chorus_fruit',
			bricks: { 
				block: 'minecraft:purpur_block', 
				stair: 'minecraft:purpur_stairs',
				slab: 'minecraft:purpur_slab'
			},
			pillar: 'minecraft:purpur_pillar'
		}
	}

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
}