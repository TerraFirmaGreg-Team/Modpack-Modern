// priority: 0
"use strict";

const registerTFGRockMaterials = (event) => {
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
				GTMaterialFlags.DISABLE_DECOMPOSITION
			)

	/* Stone Types Materials */
	const clastic = registerStoneMaterial('sedimentary_clastic', 0xAF9377, ['quartzite', 'potassium_feldspar'])
	const carbonate = registerStoneMaterial('sedimentary_carbonate', 0xADA67A, ['quartzite', 'calcite'])
	const organic = registerStoneMaterial('sedimentary_organic', 0xA8706B, ['flint', 'unknown'])

	const meta = registerStoneMaterial('metamorphic', 0x876981, ['marble', 'deepslate'])

	const ultramafic = registerStoneMaterial('igneous_ultramafic', 0x45474D, ['quartzite', 'blackstone'])
	const mafic = registerStoneMaterial('igneous_mafic', 0x525D6B, ['quartzite', 'basalt'])
	const intermediate = registerStoneMaterial('igneous_intermediate', 0x71818A, ['quartzite', 'andesite'])
	const felsic = registerStoneMaterial('igneous_felsic', 0x97B2BF, ['quartzite', 'granite_red'])

	global.GEOLOGY_MATERIALS = {
		gabbro: mafic,
		diorite: intermediate,
		granite: felsic,
		granite_red: felsic,
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
		slate: meta,
		phyllite: meta,
		schist: meta,
		gneiss: meta,
		marble: meta,
		quartzite: meta,
		tuff: felsic,
		dripstone: carbonate,
		deepslate: meta,
		pyroxenite: ultramafic,
		crackrack: intermediate,
		calcite: carbonate,
		moon_stone: mafic,
		moon_deepslate: mafic,
		mars_stone: clastic,
		venus_stone: felsic,
		mercury_stone: ultramafic,
		glacio_stone: intermediate,
		flavolite: felsic,
		sandy_jadestone: ultramafic,
		sulphuric_rock: mafic,
		brimstone: organic,
		scoria: mafic,
		geyserite: organic
	}

	// Specialized icon sets for TFC's own
	modifyTFGIconSets(event)

	/*
	ROCKS:

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