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
			// TODO: create's basalt? vanilla basalt?
		},
		// Migmatite
		"deepslate": generateMissing('deepslate', {
			material: metamorphic,
			tfcTag: 'tfc:metamorphic_items',
			chiseled: 'minecraft:chiseled_deepslate',
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
			chiseled: 'minecraft:chiseled_polished_blackstone',
			raw: generateForms('blackstone', 'minecraft:%s'),
			cobble: generateForms('blackstone', 'tfg:rock/cobble_%s', null,
				generateForms('blackstone', 'tfg:rock/mossy_cobble_%s')),
			bricks: generateForms('blackstone', 'minecraft:polished_%s_brick', 'minecraft:polished_blackstone_bricks', 
				generateForms('blackstone', 'tfg:rock/mossy_bricks_%s'),
				generateForms('blackstone', 'tfg:rock/cracked_bricks_%s', 'minecraft:cracked_polished_blackstone_bricks')),
			polished: generateForms('blackstone', 'minecraft:polished_%s')
		}),
		// Keratophyre
		"crackrack": generateMissing('crackrack', {
			material: intermediate
		})
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
	(red granite is same)

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
	argillite	sedimentary			clastic
	trachyte	extrusive igneous	felsic
	komatiite	intrusive igneous	ultramafic
	phonolite	extrusive igneous	intermediate
	permafrost	? not really a rock

	lamproite	extrusive igneous	ultramafic
	ignimbrite	either IE or meta depending on who you ask - mostly made of tuff + pumice/scoria
	sulphuric_rock	mafic
	scoria		extrusive igneous	mafic
	geyserite	sedimentary			chemical (mostly made of opal/silica)

	(unused)
	syenite		intrusive igneous	felsic	(opposite of trachyte)
	diabase		intrusive igneous	mafic (apparently common on earth?)
	perlite		extrusive igneous	felsic (hydrated obsidian, also used in ceramics?)
	*/
}