// priority: 0
"use strict";

const registerTFGRockMaterials = (event) => {
	const registerStoneMaterial = (rockType, color) =>
		event.create(`tfg:${rockType}`)
			.dust()
			.color(color)
			.iconSet(GTMaterialIconSet.ROUGH)
			.flags(
				GTMaterialFlags.MORTAR_GRINDABLE,
				GTMaterialFlags.NO_SMASHING,
				GTMaterialFlags.NO_SMELTING
			)

	/* TFC Stone Types Materials */
	registerStoneMaterial('gabbro', 0x7F8081)
	registerStoneMaterial('shale', 0x686567)
	registerStoneMaterial('claystone', 0xAF9377)
	registerStoneMaterial('limestone', 0xA09885)
	registerStoneMaterial('conglomerate', 0xA3977F)
	registerStoneMaterial('dolomite', 0x515155)
	registerStoneMaterial('chert', 0x7A6756)
	registerStoneMaterial('chalk', 0xA4A39F)
	registerStoneMaterial('rhyolite', 0x726D69)
	registerStoneMaterial('dacite', 0x979797)
	registerStoneMaterial('slate', 0x989287)
	registerStoneMaterial('phyllite', 0x706B61)
	registerStoneMaterial('schist', 0x6E735C)
	registerStoneMaterial('gneiss', 0x6A6D60)

	registerStoneMaterial('dripstone', 0x927965)

	registerStoneMaterial('moon_stone', 0x506869)
	registerStoneMaterial('moon_deepslate', 0x45474D)
	registerStoneMaterial('mars_stone', 0xD08957)
	registerStoneMaterial('venus_stone', 0xD5A664)
	registerStoneMaterial('mercury_stone', 0x723E49)
	registerStoneMaterial('glacio_stone', 0x9897BF)

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

	leucitite	extrusive igneous	felsic...?
	lamproite	extrusive igneous	ultramafic
	ignimbrite	either IE or meta depending on who you ask - mostly made of tuff + pumice/scoria
	scoria		extrusive igneous	mafic
	geyserite	sedimentary			chemical (mostly made of opal/silica)

	(unused)
	syenite		intrusive igneous	felsic	(opposite of trachyte)
	diabase		intrusive igneous	mafic (apparently common on earth?)
	perlite		extrusive igneous	felsic (hydrated obsidian, also used in ceramics?)
	*/
}