// priority: 0
"use strict";

const registerRailWaysRecipes = (event) => {

	// Удаление рецептов мода railways 
	event.remove({ mod: 'railways' });

	registerRailwaysLocometalRecipes(event)

	// Семафор
	event.shaped('railways:semaphore', [
		' A ',
		'BCD',
		'EAE'
	], {
		A: '#forge:plates/wrought_iron',
		B: '#minecraft:fences',
		C: 'create:andesite_casing',
		D: 'create:electron_tube',
		E: '#forge:tools/hammers',
	}).id('tfg:railways/shaped/semaphore')

	event.recipes.gtceu.assembler('tfg:railways/semaphore')
		.itemInputs('2x #forge:plates/wrought_iron', '#minecraft:fences', 'create:andesite_casing', 'create:electron_tube')
		.circuit(3)
		.itemOutputs('railways:semaphore')
		.duration(200)
		.EUt(28)
		.addMaterialInfo(true)

	// Соединитель поездов
	event.shaped('railways:track_coupler', [
		'AAA',
		'DBE',
		' C '
	], {
		A: '#forge:sheets/wrought_iron',
		B: 'gtceu:red_alloy_single_wire',
		C: 'create:railway_casing',
		D: '#forge:tools/wire_cutters',
		E: '#forge:tools/screwdrivers',
	}).id('tfg:railways/shaped/track_coupler')

	event.recipes.gtceu.assembler('tfg:railways/track_coupler')
		.itemInputs('3x #forge:sheets/wrought_iron', 'gtceu:red_alloy_single_wire', 'create:railway_casing')
		.circuit(3)
		.itemOutputs('railways:track_coupler')
		.duration(200)
		.EUt(28)
		.addMaterialInfo(true)

	//#region Couplers and Buffers
	event.recipes.gtceu.assembler(`tfg:railways/screwlink_coupler`)
		.itemInputs(`minecraft:tripwire_hook`, `#forge:plates/steel`, '#forge:screws/steel')
		.circuit(1)
		.itemOutputs(`railways:screwlink_coupler`)
		.duration(200)
		.EUt(28)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler(`tfg:railways/copycat_headstock_screwlink_coupler`)
		.itemInputs(`railways:screwlink_coupler`, `create:copycat_panel`)
		.circuit(1)
		.itemOutputs(`railways:copycat_headstock_screwlink_coupler`)
		.duration(200)
		.EUt(28)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler(`tfg:railways/buffer`)
		.itemInputs(`6x #forge:rods/long/steel`, `2x railways:small_buffer`)
		.circuit(1)
		.itemOutputs(`railways:buffer`)
		.duration(200)
		.EUt(28)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler(`tfg:railways/small_buffer`)
		.itemInputs(`railways:screwlink_coupler`, `#forge:ingots/steel`)
		.circuit(1)
		.itemOutputs(`railways:small_buffer`)
		.duration(200)
		.EUt(28)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler(`tfg:railways/big_buffer`)
		.itemInputs(`railways:small_buffer`, `#forge:ingots/steel`)
		.circuit(1)
		.itemOutputs(`railways:big_buffer`)
		.duration(200)
		.EUt(28)
		.addMaterialInfo(true)

	//#endregion

	//#region conductor
	event.recipes.gtceu.assembler(`tfg:railways/conductor_cap`)
		.itemInputs('#gtceu:circuits/lv', '#gtceu:electric_motors', '2x #forge:string', '#tfc:high_quality_cloth')
		.circuit(15)
		.itemOutputs('railways:white_conductor_cap')
		.duration(80)
		.inputFluids(Fluid.of('gtceu:glue', 200))
		.EUt(16)

	event.recipes.tfc.barrel_sealed(1000)
		.inputs('#tfg:colored_caps', Fluid.of(`tfc:lye`, 288))
		.outputItem(`railways:white_conductor_cap`)
		.id(`railways:barrel/cap_decolor`)

	event.recipes.gtceu.chemical_bath(`tfg:cap_decolor_bath`)
		.itemInputs('#tfg:colored_caps')
		.inputFluids(Fluid.of('gtceu:chlorine', 20))
		.itemOutputs('railways:white_conductor_cap')
		.duration(80)
		.EUt(4)
		.category(GTRecipeCategories.CHEM_DYES)

	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		event.recipes.gtceu.chemical_bath(`railways/${dye}_conductor_cap`)
			.itemInputs('railways:white_conductor_cap')
			.inputFluids(Fluid.of(`tfc:${dye}_dye`, 288))
			.itemOutputs(`railways:${dye}_conductor_cap`)
			.duration(200)
			.EUt(4)
			.category(GTRecipeCategories.CHEM_DYES)
		if (dye !== "white") {
			event.recipes.tfc.barrel_sealed(1000)
				.inputs(`railways:white_conductor_cap`, Fluid.of(`tfc:${dye}_dye`, 288))
				.outputItem(`railways:${dye}_conductor_cap`)
				.id(`railways:barrel/dyeing/${dye}_conductor_cap`)
		}
	})

	//#endregion

	// Переключатель пути поезда из андезита
	event.shaped('railways:track_switch_andesite', [
		'BAB',
		'CDC',
		'ECF'
	], {
		A: 'minecraft:lever',
		B: '#forge:bolts/wrought_iron',
		C: '#forge:cogwheels',
		D: 'create:andesite_casing',
		E: '#forge:tools/screwdrivers',
		F: '#forge:tools/hammers',
	}).id('tfg:railways/shaped/track_switch_andesite')

	event.recipes.gtceu.assembler('tfg:railways/track_switch_andesite')
		.itemInputs('minecraft:lever', '2x #forge:bolts/wrought_iron', '2x #forge:cogwheels', 'create:andesite_casing')
		.circuit(3)
		.itemOutputs('railways:track_switch_andesite')
		.duration(200)
		.EUt(28)

	// Переключатель пути поезда из латуни
	event.shaped('railways:track_switch_brass', [
		'BAB',
		'CDC',
		'ECF'
	], {
		A: 'minecraft:lever',
		B: '#forge:bolts/brass',
		C: '#forge:cogwheels',
		D: 'create:brass_casing',
		E: '#forge:tools/screwdrivers',
		F: '#forge:tools/hammers',
	}).id('tfg:railways/shaped/track_switch_brass')

	event.recipes.gtceu.assembler('tfg:railways/track_switch_brass')
		.itemInputs('minecraft:lever', '2x #forge:bolts/brass', '2x #forge:cogwheels', 'create:brass_casing')
		.circuit(3)
		.itemOutputs('railways:track_switch_brass')
		.duration(200)
		.EUt(28)

	// Свисток кондуктора
	event.shaped('railways:conductor_whistle', [
		'ABC'
	], {
		A: '#forge:plates/brass',
		B: '#forge:tools/hammers',
		C: '#forge:tools/files',
	}).id('tfg:railways/shaped/conductor_whistle')

	event.recipes.gtceu.assembler('tfg:railways/conductor_whistle')
		.itemInputs('#forge:plates/brass')
		.circuit(30)
		.itemOutputs('railways:conductor_whistle')
		.duration(200)
		.EUt(28)

	// Удаленная линза
	event.shaped('railways:remote_lens', [
		'ABC',
		'DE '
	], {
		A: '#forge:plates/brass',
		B: '#forge:tools/hammers',
		C: '#forge:tools/files',
		D: 'create:precision_mechanism',
		E: 'gtceu:lv_sensor'
	}).id('tfg:railways/shaped/remote_lens')

	event.recipes.gtceu.assembler('tfg:railways/remote_lens')
		.itemInputs('#forge:plates/brass', 'create:precision_mechanism', 'gtceu:lv_sensor')
		.circuit(3)
		.itemOutputs('railways:remote_lens')
		.duration(200)
		.EUt(28)

	// Дымогенератор 1
	event.shaped('railways:smokestack_caboosestyle', [
		'BCB',
		'DA '
	], {
		A: '#forge:storage_blocks/charcoal',
		B: '#forge:bolts/black_steel',
		C: '#forge:plates/black_steel',
		D: '#forge:tools/hammers'
	}).id('tfg:railways/shaped/smokestack_caboosestyle')

	event.recipes.gtceu.assembler('tfg:railways/smokestack_caboosestyle')
		.itemInputs('#forge:storage_blocks/charcoal', '2x #forge:bolts/black_steel', '#forge:plates/black_steel')
		.circuit(4)
		.itemOutputs('railways:smokestack_caboosestyle')
		.duration(200)
		.EUt(28)

	// Дымогенератор 2
	event.shaped('railways:smokestack_long', [
		'C  ',
		'BAB'
	], {
		A: '#forge:storage_blocks/charcoal',
		B: '#forge:bolts/black_steel',
		C: '#forge:tools/hammers'
	}).id('tfg:railways/shaped/smokestack_long')

	event.recipes.gtceu.assembler('tfg:railways/smokestack_long')
		.itemInputs('#forge:storage_blocks/charcoal', '2x #forge:bolts/black_steel')
		.circuit(5)
		.itemOutputs('railways:smokestack_long')
		.duration(200)
		.EUt(28)

	// Дымогенератор 3
	event.shaped('railways:smokestack_coalburner', [
		'B B',
		'BCB',
		'BAB'
	], {
		A: '#forge:storage_blocks/charcoal',
		B: '#forge:plates/black_steel',
		C: '#forge:tools/hammers'
	}).id('tfg:railways/shaped/smokestack_coalburner')

	event.recipes.gtceu.assembler('tfg:railways/smokestack_coalburner')
		.itemInputs('#forge:storage_blocks/charcoal', '6x #forge:plates/black_steel')
		.circuit(6)
		.itemOutputs('railways:smokestack_coalburner')
		.duration(200)
		.EUt(28)

	// Дымогенератор 4
	event.shaped('railways:smokestack_oilburner', [
		'BCB',
		'BAB'
	], {
		A: '#forge:storage_blocks/charcoal',
		B: '#forge:plates/black_steel',
		C: '#forge:tools/hammers'
	}).id('tfg:railways/shaped/smokestack_oilburner')

	event.recipes.gtceu.assembler('tfg:railways/smokestack_oilburner')
		.itemInputs('#forge:storage_blocks/charcoal', '6x #forge:plates/black_steel')
		.circuit(7)
		.itemOutputs('railways:smokestack_oilburner')
		.duration(200)
		.EUt(28)

	// Дымогенератор 5
	event.shaped('railways:smokestack_streamlined', [
		'C  ',
		'BAB'
	], {
		A: '#forge:storage_blocks/charcoal',
		B: '#forge:plates/black_steel',
		C: '#forge:tools/hammers'
	}).id('tfg:railways/shaped/smokestack_streamlined')

	event.recipes.gtceu.assembler('tfg:railways/smokestack_streamlined')
		.itemInputs('#forge:storage_blocks/charcoal', '2x #forge:plates/black_steel')
		.circuit(8)
		.itemOutputs('railways:smokestack_streamlined')
		.duration(200)
		.EUt(28)

	// Дымогенератор 6
	event.shaped('railways:smokestack_woodburner', [
		' D ',
		'CBC',
		'BAB'
	], {
		A: '#forge:storage_blocks/charcoal',
		B: '#forge:plates/black_steel',
		C: '#forge:bolts/black_steel',
		D: '#forge:tools/hammers'
	}).id('tfg:railways/shaped/smokestack_woodburner')

	event.recipes.gtceu.assembler('tfg:railways/smokestack_woodburner')
		.itemInputs('#forge:storage_blocks/charcoal', '3x #forge:plates/black_steel', '2x #forge:bolts/black_steel')
		.circuit(9)
		.itemOutputs('railways:smokestack_woodburner')
		.duration(200)
		.EUt(28)

	// Вентилятор радиатора
	event.shaped('2x railways:smokestack_diesel', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:rods/wrought_iron',
		C: '#forge:rotors/iron',
	}).id('tfg:railways/shaped/smokestack_diesel')

	// Монорельс
	event.recipes.createSequencedAssembly([
		'8x railways:track_monorail',
	], 'create:metal_girder', [
		event.recipes.createDeploying('railways:track_incomplete_monorail', ['railways:track_incomplete_monorail', '#forge:plates/wrought_iron']),
		event.recipes.greate.pressing('railways:track_incomplete_monorail', 'railways:track_incomplete_monorail'),
		event.recipes.createDeploying('railways:track_incomplete_monorail', ['railways:track_incomplete_monorail', '#forge:plates/wrought_iron']),
		event.recipes.greate.pressing('railways:track_incomplete_monorail', 'railways:track_incomplete_monorail'),
	]).transitionalItem('railways:track_incomplete_monorail').loops(1).id('tfg:railways/sequenced_assembly/track_monorail')

	event.recipes.gtceu.assembler('railways/monorail')
		.itemInputs('create:metal_girder', '2x #forge:plates/wrought_iron')
		.itemOutputs('8x railways:track_monorail')
		.duration(250)
		.EUt(32)

	// Железнодорожное полотно (Узкое)
	event.recipes.createSequencedAssembly([
		'16x railways:track_create_andesite_narrow',
	], '#tfg:rock_slabs', [
		event.recipes.createDeploying('railways:track_incomplete_create_andesite_narrow', ['railways:track_incomplete_create_andesite_narrow', 'gtceu:steel_rod']),
		event.recipes.createDeploying('railways:track_incomplete_create_andesite_narrow', ['railways:track_incomplete_create_andesite_narrow', '#tfc:mortar']),
		event.recipes.greate.pressing('railways:track_incomplete_create_andesite_narrow', 'railways:track_incomplete_create_andesite_narrow'),
	]).transitionalItem('railways:track_incomplete_create_andesite_narrow').loops(2).id('tfg:railways/sequenced_assembly/track_create_andesite_narrow_from_steel')

	event.recipes.gtceu.assembler('railways/track_create_andesite_narrow_from_steel')
		.itemInputs('#tfg:rock_slabs', '2x gtceu:steel_rod')
		.inputFluids(Fluid.of('gtceu:concrete', 144))
		.itemOutputs('16x railways:track_create_andesite_narrow')
		.duration(800)
		.EUt(16)
		.circuit(1)

	// Железнодорожное полотно (Нормальное)
	event.recipes.createSequencedAssembly([
		'16x create:track',
	], '#tfg:rock_slabs', [
		event.recipes.createDeploying('railways:track_incomplete_blackstone', ['railways:track_incomplete_blackstone', '#tfg:rock_slabs']),
		event.recipes.createDeploying('railways:track_incomplete_blackstone', ['railways:track_incomplete_blackstone', 'gtceu:steel_rod']),
		event.recipes.createDeploying('railways:track_incomplete_blackstone', ['railways:track_incomplete_blackstone', '#tfc:mortar']),
		event.recipes.greate.pressing('railways:track_incomplete_blackstone', 'railways:track_incomplete_blackstone'),
	]).transitionalItem('railways:track_incomplete_blackstone').loops(2).id('tfg:railways/sequenced_assembly/track_create_andesite')

	event.recipes.gtceu.assembler('railways/track')
		.itemInputs('3x #tfg:rock_slabs', '2x gtceu:steel_rod')
		.inputFluids(Fluid.of('gtceu:concrete', 144))
		.itemOutputs('16x create:track')
		.duration(800)
		.EUt(16)
		.circuit(2)

	// Железнодорожное полотно (Широкое)
	event.recipes.createSequencedAssembly([
		'16x railways:track_create_andesite_wide',
	], '#tfg:rock_slabs', [
		event.recipes.createDeploying('railways:track_incomplete_create_andesite_wide', ['railways:track_incomplete_create_andesite_wide', '#forge:stone']),
		event.recipes.createDeploying('railways:track_incomplete_create_andesite_wide', ['railways:track_incomplete_create_andesite_wide', 'gtceu:steel_rod']),
		event.recipes.createDeploying('railways:track_incomplete_create_andesite_wide', ['railways:track_incomplete_create_andesite_wide', '#tfc:mortar']),
		event.recipes.greate.pressing('railways:track_incomplete_create_andesite_wide', 'railways:track_incomplete_create_andesite_wide'),
	]).transitionalItem('railways:track_incomplete_create_andesite_wide').loops(2).id('tfg:railways/sequenced_assembly/track_create_andesite_wide')

	event.recipes.gtceu.assembler('railways/track_create_andesite_wide')
		.itemInputs('5x #tfg:rock_slabs', '2x gtceu:steel_rod')
		.inputFluids(Fluid.of('gtceu:concrete', 144))
		.itemOutputs('16x railways:track_create_andesite_wide')
		.duration(800)
		.EUt(16)
		.circuit(3)

	// Железнодородные полотна из дерева
	global.TFC_WOOD_TYPES.forEach(woodType => {
		// Узкое
		event.recipes.createSequencedAssembly([
			`16x railways:track_tfc_${woodType}_narrow`,
		], `tfc:wood/planks/${woodType}_slab`, [
			event.recipes.createDeploying(`railways:track_incomplete_tfc_${woodType}_narrow`, [`railways:track_incomplete_tfc_${woodType}_narrow`, 'gtceu:steel_rod']),
			event.recipes.createDeploying(`railways:track_incomplete_tfc_${woodType}_narrow`, [`railways:track_incomplete_tfc_${woodType}_narrow`, '#forge:screws']),
			event.recipes.greate.pressing(`railways:track_incomplete_tfc_${woodType}_narrow`, `railways:track_incomplete_tfc_${woodType}_narrow`),
		]).transitionalItem(`railways:track_incomplete_tfc_${woodType}_narrow`).loops(2).id(`tfg:railways/sequenced_assembly/track_create_${woodType}_narrow`)

		event.recipes.gtceu.assembler(`railways/track_create_${woodType}_narrow`)
			.itemInputs(`tfc:wood/planks/${woodType}_slab`, '2x gtceu:steel_rod', '2x #forge:screws')
			.itemOutputs(`16x railways:track_tfc_${woodType}_narrow`)
			.duration(800)
			.EUt(16)
			.circuit(1)

		// Нормальное
		event.recipes.createSequencedAssembly([
			`16x railways:track_tfc_${woodType}`,
		], `tfc:wood/planks/${woodType}_slab`, [
			event.recipes.createDeploying(`railways:track_incomplete_tfc_${woodType}`, [`railways:track_incomplete_tfc_${woodType}`, `tfc:wood/lumber/${woodType}`]),
			event.recipes.createDeploying(`railways:track_incomplete_tfc_${woodType}`, [`railways:track_incomplete_tfc_${woodType}`, 'gtceu:steel_rod']),
			event.recipes.createDeploying(`railways:track_incomplete_tfc_${woodType}`, [`railways:track_incomplete_tfc_${woodType}`, '#forge:screws']),
			event.recipes.greate.pressing(`railways:track_incomplete_tfc_${woodType}`, `railways:track_incomplete_tfc_${woodType}`),
		]).transitionalItem(`railways:track_incomplete_tfc_${woodType}`).loops(2).id(`tfg:railways/sequenced_assembly/track_create_${woodType}`)

		event.recipes.gtceu.assembler(`railways/track_${woodType}`)
			.itemInputs(`tfc:wood/planks/${woodType}_slab`, `2x tfc:wood/lumber/${woodType}`, '2x gtceu:steel_rod', '2x #forge:screws')
			.itemOutputs(`16x railways:track_tfc_${woodType}`)
			.duration(800)
			.EUt(16)
			.circuit(2)

		// Широкое
		event.recipes.createSequencedAssembly([
			`16x railways:track_tfc_${woodType}_wide`,
		], `tfc:wood/planks/${woodType}_slab`, [
			event.recipes.createDeploying(`railways:track_incomplete_tfc_${woodType}_wide`, [`railways:track_incomplete_tfc_${woodType}_wide`, `tfc:wood/planks/${woodType}_slab`]),
			event.recipes.createDeploying(`railways:track_incomplete_tfc_${woodType}_wide`, [`railways:track_incomplete_tfc_${woodType}_wide`, `gtceu:steel_rod`]),
			event.recipes.createDeploying(`railways:track_incomplete_tfc_${woodType}_wide`, [`railways:track_incomplete_tfc_${woodType}_wide`, '#forge:screws']),
			event.recipes.greate.pressing(`railways:track_incomplete_tfc_${woodType}_wide`, `railways:track_incomplete_tfc_${woodType}_wide`)
		]).transitionalItem(`railways:track_incomplete_tfc_${woodType}_wide`).loops(2).id(`tfg:railways/sequenced_assembly/track_create_${woodType}_wide`)

		event.recipes.gtceu.assembler(`railways/track_${woodType}_wide`)
			.itemInputs(`3x tfc:wood/planks/${woodType}_slab`, '2x gtceu:steel_rod', '2x #forge:screws')
			.itemOutputs(`16x railways:track_tfc_${woodType}_wide`)
			.duration(800)
			.EUt(16)
			.circuit(3)
	});

	const OTHER_TRACKS = [
		{ rail: 'blackstone', slab: 'minecraft:blackstone_slab', block: 'minecraft:blackstone' },
		{ rail: 'acacia', slab: 'afc:wood/planks/baobab_slab', block: 'afc:wood/planks/baobab' },
		{ rail: 'birch', slab: 'afc:wood/planks/eucalyptus_slab', block: 'afc:wood/planks/eucalyptus' },
		{ rail: 'cherry', slab: 'afc:wood/planks/fig_slab', block: 'afc:wood/planks/fig' },
		{ rail: 'jungle', slab: 'afc:wood/planks/teak_slab', block: 'afc:wood/planks/teak' },
		{ rail: 'spruce', slab: 'afc:wood/planks/cypress_slab', block: 'afc:wood/planks/cypress' },
		{ rail: 'crimson', slab: 'beneath:wood/planks/crimson_slab', block: 'beneath:wood/planks/crimson' },
		{ rail: 'warped', slab: 'beneath:wood/planks/warped_slab', block: 'beneath:wood/planks/warped' },
		{ rail: 'stripped_bamboo', slab: 'minecraft:bamboo_slab', block: 'minecraft:bamboo_planks' },
		{ rail: 'bamboo', slab: 'minecraft:bamboo_block', block: 'minecraft:stripped_bamboo_block' },
		{ rail: 'tieless', slab: 'framedblocks:framed_slab', block: 'framedblocks:framed_cube' }
	]

	OTHER_TRACKS.forEach(x => {
		event.recipes.createSequencedAssembly([
			`16x railways:track_${x.rail}_narrow`,
		], x.slab, [
			event.recipes.createDeploying(`railways:track_incomplete_${x.rail}_narrow`, [`railways:track_incomplete_${x.rail}_narrow`, `gtceu:steel_rod`]),
			event.recipes.createDeploying(`railways:track_incomplete_${x.rail}_narrow`, [`railways:track_incomplete_${x.rail}_narrow`, `#tfc:mortar`]),
			event.recipes.greate.pressing(`railways:track_incomplete_${x.rail}_narrow`, `railways:track_incomplete_${x.rail}_narrow`),
		]).transitionalItem(`railways:track_incomplete_${x.rail}_narrow`).loops(2).id(`tfg:railways/sequenced_assembly/track_${x.rail}_narrow_alt`)

		event.recipes.gtceu.assembler(`tfg:railways/track_${x.rail}_narrow_alt`)
			.itemInputs(x.slab, `2x gtceu:steel_rod`)
			.inputFluids(Fluid.of(`gtceu:concrete`, 144))
			.itemOutputs(`16x railways:track_${x.rail}_narrow`)
			.duration(800)
			.EUt(16)
			.circuit(1)

		event.recipes.createSequencedAssembly([
			`16x railways:track_${x.rail}`,
		], x.slab, [
			event.recipes.createDeploying(`railways:track_incomplete_${x.rail}`, [`railways:track_incomplete_${x.rail}`, x.slab]),
			event.recipes.createDeploying(`railways:track_incomplete_${x.rail}`, [`railways:track_incomplete_${x.rail}`, `gtceu:steel_rod`]),
			event.recipes.createDeploying(`railways:track_incomplete_${x.rail}`, [`railways:track_incomplete_${x.rail}`, `#tfc:mortar`]),
			event.recipes.greate.pressing(`railways:track_incomplete_${x.rail}`, `railways:track_incomplete_${x.rail}`),
		]).transitionalItem(`railways:track_incomplete_${x.rail}`).loops(2).id(`tfg:railways/sequenced_assembly/track_${x.rail}_alt`)

		event.recipes.gtceu.assembler(`tfg:railways/track_${x.rail}_normal_alt`)
			.itemInputs(`3x ${x.slab}`, `2x gtceu:steel_rod`)
			.inputFluids(Fluid.of(`gtceu:concrete`, 144))
			.itemOutputs(`16x railways:track_${x.rail}`)
			.duration(800)
			.EUt(16)
			.circuit(2)

		event.recipes.createSequencedAssembly([
			`16x railways:track_${x.rail}_wide`,
		], x.slab, [
			event.recipes.createDeploying(`railways:track_incomplete_${x.rail}_wide`, [`railways:track_incomplete_${x.rail}_wide`, x.block]),
			event.recipes.createDeploying(`railways:track_incomplete_${x.rail}_wide`, [`railways:track_incomplete_${x.rail}_wide`, `gtceu:steel_rod`]),
			event.recipes.createDeploying(`railways:track_incomplete_${x.rail}_wide`, [`railways:track_incomplete_${x.rail}_wide`, `#tfc:mortar`]),
			event.recipes.greate.pressing(`railways:track_incomplete_${x.rail}_wide`, `railways:track_incomplete_${x.rail}_wide`),
		]).transitionalItem(`railways:track_incomplete_${x.rail}_wide`).loops(2).id(`tfg:railways/sequenced_assembly/track_${x.rail}_wide_alt`)

		event.recipes.gtceu.assembler(`tfg:railways/track_${x.rail}_wide_alt`)
			.itemInputs(`5x ${x.slab}`, `2x gtceu:steel_rod`)
			.inputFluids(Fluid.of(`gtceu:concrete`, 144))
			.itemOutputs(`16x railways:track_${x.rail}_wide`)
			.duration(800)
			.EUt(16)
			.circuit(3)
	})

	event.recipes.gtceu.assembler('tfg:railways/phantom_tracks')
		.itemInputs('32x create:track', 'ae2:ender_dust')
		.itemOutputs('32x railways:track_phantom')
		.duration(100)
		.EUt(16)

	event.shapeless('8x railways:track_phantom', ['#forge:small_dusts/ender_pearl', '8x create:track'])
		.id('tfg:shapeless/phantom_tracks')

	event.shaped('1x railways:handcar', [
		'EFE',
		'BAA',
		'CDC'
	], {
		A: '#minecraft:wooden_slabs',
		B: '#create:seats',
		C: 'gtceu:steel_minecart_wheels',
		D: 'greate:steel_cogwheel',
		E: ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.Steel, 1),
		F: ChemicalHelper.get(TagPrefix.spring, GTMaterials.Steel, 1)
	}).id('tfg:railways/shaped/handcar')
}
