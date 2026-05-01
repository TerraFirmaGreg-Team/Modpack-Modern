"use strict";

const registerRnrRecipes = (event) => {
	event.remove({ input: 'rnr:concrete_powder' })
	event.remove({ id: 'rnr:crafting/concrete_powder' })

	event.recipes.gtceu.assembler('rnr:assembler/base_course')
		.itemInputs('1x rnr:crushed_base_course', '1x #tfc:dirt')
		.itemOutputs('2x rnr:base_course')
		.circuit(7)
		.duration(20)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('rnr:assembler/crushed_base_course')
		.itemInputs('1x #forge:gravel', '1x #rnr:loose_rock_items')
		.itemOutputs('8x rnr:crushed_base_course')
		.circuit(7)
		.duration(20)
		.EUt(GTValues.VA[GTValues.ULV])

	//hoggin roads
	event.recipes.gtceu.forming_press('tfg:hoggin')
		.itemInputs('rnr:base_course', 'rnr:hoggin_mix')
		.itemOutputs('rnr:hoggin')
		.duration(20)
		.EUt(120)

	event.recipes.gtceu.assembler('tfg:hoggin_slab')
		.itemInputs('rnr:hoggin')
		.itemOutputs('rnr:hoggin_slab')
		.circuit(2)
		.duration(20)
		.EUt(120)

	event.recipes.gtceu.assembler('tfg:hoggin_stairs')
		.itemInputs('rnr:hoggin')
		.itemOutputs('rnr:hoggin_stairs')
		.circuit(3)
		.duration(20)
		.EUt(120)

	//clay brick sett roads
	event.recipes.gtceu.forming_press(`tfg:sett_road/brick`)
		.itemInputs('rnr:base_course', 'minecraft:brick')
		.itemOutputs('rnr:brick_road')
		.duration(20)
		.EUt(120)

	event.recipes.gtceu.assembler(`tfg:sett_road_stairs/brick`)
		.itemInputs('rnr:brick_road')
		.itemOutputs('rnr:brick_road_slab')
		.circuit(2)
		.duration(20)
		.EUt(120)

	event.recipes.gtceu.assembler(`tfg:sett_road_slab/brick`)
		.itemInputs('rnr:brick_road')
		.itemOutputs('rnr:brick_road_stairs')
		.circuit(3)
		.duration(20)
		.EUt(120)

	const roads = [
		{ type: 'cobbled_road', ingredient: 'tfc:rock/loose' },
		{ type: 'sett_road',	ingredient: 'tfc:brick' },
		{ type: 'flagstones',	ingredient: 'rnr:flagstone' },
		{ type: 'gravel_road', 	ingredient: 'rnr:gravel_fill' }

	]

	global.TFC_STONE_TYPES.forEach(stone => {
		//flagstones
		event.recipes.gtceu.cutter(`tfg:flagstone/${stone}`)
			.itemInputs(`tfc:brick/${stone}`)
			.itemOutputs(`2x rnr:flagstone/${stone}`)
			.duration(20)
			.EUt(GTValues.VA[GTValues.ULV])

		//cobble road from mossy rock
		event.recipes.gtceu.forming_press(`tfg:rock/cobbled_road/${stone}_moss`)
			.itemInputs('rnr:base_course', `tfc:rock/mossy_loose/${stone}`)
			.itemOutputs(`rnr:rock/cobbled_road/${stone}`)
			.duration(50)
			.EUt(120)

		//over height gravel & macadam
		event.recipes.gtceu.forming_press(`tfg:over_height_gravel/${stone}`)
			.itemInputs(`rnr:rock/gravel_road/${stone}`, `rnr:gravel_fill/${stone}`)
			.itemOutputs(`rnr:rock/over_height_gravel/${stone}`)
			.duration(50)
			.EUt(120)
		
		event.recipes.gtceu.forming_press(`tfg:macadam_road/${stone}`)
			.itemInputs(`rnr:rock/over_height_gravel/${stone}`)
			.notConsumable('gtceu:empty_mold')
			.itemOutputs(`rnr:rock/macadam_road/${stone}`)
			.duration(50)
			.EUt(120)

		event.recipes.gtceu.assembler(`tfg:macadam_road/${stone}/slab`)
			.itemInputs(`rnr:rock/macadam_road/${stone}`)
			.itemOutputs(`rnr:rock/macadam_road/${stone}_slab`)
			.circuit(2)
			.duration(50)
			.EUt(120)

		event.recipes.gtceu.assembler(`tfg:macadam_road/${stone}_stairs`)
			.itemInputs(`rnr:rock/macadam_road/${stone}`)
			.itemOutputs(`rnr:rock/macadam_road/${stone}_stairs`)
			.circuit(3)
			.duration(50)
			.EUt(120)

		roads.forEach(road => {
			// all other roads but sandstone flagstones
			event.recipes.gtceu.forming_press(`tfg:${road.type}/${stone}`)
				.itemInputs('rnr:base_course', `${road.ingredient}/${stone}`)
				.itemOutputs(`rnr:rock/${road.type}/${stone}`)
				.duration(50)
				.EUt(120)

			event.recipes.gtceu.assembler(`tfg:${road.type}/${stone}_slab`)
				.itemInputs(`rnr:rock/${road.type}/${stone}`)
				.itemOutputs(`rnr:rock/${road.type}/${stone}_slab`)
				.circuit(2)
				.duration(50)
				.EUt(120)

			event.recipes.gtceu.assembler(`tfg:${road.type}/${stone}_stairs`)
				.itemInputs(`rnr:rock/${road.type}/${stone}`)
				.itemOutputs(`rnr:rock/${road.type}/${stone}_stairs`)
				.circuit(3)
				.duration(50)
				.EUt(120)
		})
	})
	//sandstone flagstones
	global.SAND_COLORS.forEach(sand => {
		event.recipes.gtceu.cutter(`tfg:/flagstone/${sand}_sandstone`)
			.itemInputs(`tfc:cut_sandstone/${sand}`)
			.itemOutputs(`8x rnr:flagstone/${sand}_sandstone`)
			.duration(20)

			.EUt(GTValues.VA[GTValues.ULV])
			event.recipes.gtceu.forming_press(`tfg:flagstones/${sand}_sandstone_flagstones`)
			.itemInputs('rnr:base_course', `rnr:flagstone/${sand}_sandstone`)
			.itemOutputs(`rnr:${sand}_sandstone_flagstones`)
			.duration(50)
			.EUt(120)

		event.recipes.gtceu.assembler(`tfg:flagstones/${sand}_sandstone_flagstones_slab`)
			.itemInputs(`rnr:${sand}_sandstone_flagstones`)
			.itemOutputs(`rnr:${sand}_sandstone_flagstones_slab`)
			.circuit(2)
			.duration(50)
			.EUt(120)

		event.recipes.gtceu.assembler(`tfg:flagstones/${sand}_sandstone_flagstones_stairs`)
			.itemInputs(`rnr:${sand}_sandstone_flagstones`)
			.itemOutputs(`rnr:${sand}_sandstone_flagstones_stairs`)
			.circuit(3)
			.duration(50)
			.EUt(120)
		});
	
	// wet concretes
	event.recipes.gtceu.chemical_bath('tfg:wet_concrete_road')
		.itemInputs('rnr:base_course')
		.inputFluids('rnr:concrete 40')
		.itemOutputs('rnr:wet_concrete_road')
		.duration(20)
		.EUt(120)
	
	const WET_CONCRETES = [
		{ type: '', 				item:'gtceu:empty_mold'},
		{ type: '_control_joint',	item:'#forge:rods'},
		{ type: '_panel',			item:'#forge:smooth_stone'},
		{ type: '_sett',			item:'#tfg:stone_brick'},
		{ type: '_flagstones',		item:'#rnr:flagstone_road_items'}
	]

	WET_CONCRETES.forEach(concrete => {
		event.recipes.gtceu.forming_press(`tfg:wet_concrete_road${concrete.type}`)
			.itemInputs('#tfg:wet_concrete_roads')
			.notConsumable(`${concrete.item}`)
			.itemOutputs(`rnr:wet_concrete_road${concrete.type}`)
			.duration(50)
			.EUt(120)
		event.recipes.gtceu.fluid_solidifier(`tfg:concrete_road${concrete.type}`)
			.itemInputs(`rnr:wet_concrete_road${concrete.type}`)
			.itemOutputs(`rnr:concrete_road${concrete.type}`)
			.duration(20)
			.EUt(120)
	})

	const CONCRETE_STAIRS_SLABS = [
		"",
		"_sett",
		"_flagstones",
		"_panel"
	]

	CONCRETE_STAIRS_SLABS.forEach(type => {
		event.recipes.gtceu.assembler(`tfg:concrete_road${type}_slab`)
			.itemInputs(`rnr:concrete_road${type}`)
			.itemOutputs(`rnr:concrete_road${type}_slab`)
			.circuit(2)
			.duration(20)
			.EUt(120)

		event.recipes.gtceu.assembler(`tfg:concrete_road${type}_stairs`)
			.itemInputs(`rnr:concrete_road${type}`)
			.itemOutputs(`rnr:concrete_road${type}_stairs`)
			.circuit(3)
			.duration(20)
			.EUt(120)
	})
		
	// bad concrete recycling
	const BAD_CONCRETE = [
		"cracked",
		"trodden",
		"cracked_trodden"
	]

	BAD_CONCRETE.forEach(type => {
		event.custom({	
			type: 'rnr:mattock',
			ingredient: `rnr:${type}_concrete_road`,
			result: 'rnr:base_course',
			mode: `smooth`})
			.id(`tfg:rnr/mattock/recycle_${type}_concrete_road`)

		event.custom({	
			type: 'rnr:mattock',
			ingredient: `rnr:${type}_concrete_road_stairs`,
			result: 'rnr:base_course',
			mode: 'smooth'})
			.id(`tfg:rnr/mattock/recycle_${type}_concrete_road_stairs`)

		event.custom({	
			type: 'rnr:mattock',
			ingredient: `rnr:${type}_concrete_road_slab`,
			result: 'rnr:base_course',
			mode: 'smooth'})
			.id(`tfg:rnr/mattock/recycle_${type}_concrete_road_slab`)

		event.recipes.gtceu.forge_hammer(`tfg:forge_hammer/recycle_${type}_concrete_road`)
			.itemInputs(`rnr:${type}_concrete_road`)
			.itemOutputs('rnr:base_course')
			.duration(20)
			.EUt(30)

		event.recipes.gtceu.forge_hammer(`tfg:forge_hammer/recycle_${type}_concrete_road_stairs`)
			.itemInputs(`rnr:${type}_concrete_road_stairs`)
			.itemOutputs('rnr:base_course')
			.duration(20)
			.EUt(30)

		event.recipes.gtceu.forge_hammer(`tfg:forge_hammer/recycle_${type}_concrete_road_slab`)
			.itemInputs(`rnr:${type}_concrete_road_slab`)
			.itemOutputs(`rnr:base_course`)
			.duration(20)
			.EUt(30)
	})

	event.smelting(
		'1x rnr:terracotta_roof_tile',
		'rnr:unfired_terracotta_roof_tile'
	).id('rnr:smelting/unfired_terracotta_roof_tile')

	event.smelting(
		'1x rnr:ceramic_roof_tile',
		'rnr:unfired_roof_tile'
	).id('rnr:smelting/unfired_roof_tile')

	event.remove({ id: 'rnr:clay_knapping/roof_tile_a' })
	event.remove({ id: 'rnr:clay_knapping/roof_tile_b' })
	event.remove({ id: 'rnr:clay_knapping/roof_tile_c' })

	event.recipes.tfc.knapping('10x rnr:unfired_roof_tile', 'tfc:clay', [
		'XXXXX',
		'X   X',
		'     ',
		'XXXXX',
		'X   X'
	]).id('tfg:clay_knapping/roof_tile_a')

	event.recipes.tfc.knapping('5x rnr:unfired_roof_tile', 'tfc:clay', [
		'XXXXX',
		'X   X',
		'     ',
		'     ',
		'     '
	]).id('tfg:clay_knapping/roof_tile_b')

	event.recipes.tfc.knapping('5x rnr:unfired_roof_tile', 'tfc:clay', [
		'     ',
		'     ',
		'     ',
		'XXXXX',
		'X   X'
	]).id('tfg:clay_knapping/roof_tile_c')

	//shingle assembler recipes
	global.TFC_WOOD_TYPES.forEach(wood => {
		event.recipes.gtceu.assembler(`tfg:wood/shingle/${wood}`)
			.itemInputs(`tfc:wood/log/${wood}`)
			.itemOutputs(`4x rnr:wood/shingle/${wood}`)
			.duration(20)
			.EUt(30)
		
		event.recipes.gtceu.assembler(`tfg:wood/shingles/${wood}`)
			.itemInputs(`rnr:wood/shingle/${wood}`, 'rnr:roof_frame')
			.itemOutputs(`rnr:wood/shingles/${wood}`)
			.duration(20)
			.EUt(30)

		event.recipes.gtceu.assembler(`tfg:wood/shingles/${wood}_slab_from_framing`)
			.itemInputs(`rnr:wood/shingle/${wood}`, 'rnr:roof_frame_slab')
			.itemOutputs(`rnr:wood/shingles/${wood}_slab`)
			.duration(20)
			.EUt(30)

		event.recipes.gtceu.assembler(`tfg:wood/shingles/${wood}_stairs_from_framing`)
			.itemInputs(`rnr:wood/shingle/${wood}`, 'rnr:roof_frame_stairs')
			.itemOutputs(`rnr:wood/shingles/${wood}_stairs`)
			.duration(20)
			.EUt(30)

		event.recipes.gtceu.assembler(`tfg:wood/shingles/${wood}_slab`)
			.itemInputs(`rnr:wood/shingles/${wood}`)
			.itemOutputs(`rnr:wood/shingles/${wood}_slab`)
			.circuit(3)
			.duration(20)
			.EUt(30)

		event.recipes.gtceu.assembler(`tfg:wood/shingles/${wood}_stairs`)
			.itemInputs(`rnr:wood/shingles/${wood}`)
			.itemOutputs(`rnr:wood/shingles/${wood}_stairs`)
			.circuit(2)
			.duration(20)
			.EUt(30)
	})

	global.AFC_WOOD_TYPES.forEach(wood => {
		event.recipes.gtceu.assembler(`tfg:wood/shingle/${wood}`)
			.itemInputs(`afc:wood/log/${wood}`)
			.itemOutputs(`4x rnr:wood/shingle/${wood}`)
			.circuit(3)
			.duration(20)
			.EUt(30)

		event.recipes.gtceu.assembler(`tfg:wood/shingles/${wood}`)
			.itemInputs(`rnr:wood/shingle/${wood}`, 'rnr:roof_frame')
			.itemOutputs(`rnr:wood/shingles/${wood}`)
			.duration(20)
			.EUt(30)

		event.recipes.gtceu.assembler(`tfg:wood/shingles/${wood}_slab_from_framing`)
			.itemInputs(`rnr:wood/shingle/${wood}`, 'rnr:roof_frame_slab')
			.itemOutputs(`rnr:wood/shingles/${wood}_slab`)
			.duration(20)
			.EUt(30)

		event.recipes.gtceu.assembler(`tfg:wood/shingles/${wood}_stairs_from_framing`)
			.itemInputs(`rnr:wood/shingle/${wood}`, 'rnr:roof_frame_stairs')
			.itemOutputs(`rnr:wood/shingles/${wood}_stairs`)
			.duration(20)
			.EUt(30)
				event.recipes.gtceu.assembler(`tfg:wood/shingles/${wood}_slab`)
			.itemInputs(`rnr:wood/shingles/${wood}`)
			.itemOutputs(`rnr:wood/shingles/${wood}_slab`)
			.circuit(3)
			.duration(20)
			.EUt(30)

		event.recipes.gtceu.assembler(`tfg:wood/shingles/${wood}_stairs`)
			.itemInputs(`rnr:wood/shingles/${wood}`)
			.itemOutputs(`rnr:wood/shingles/${wood}_stairs`)
			.circuit(2)
			.duration(20)
			.EUt(30)
	})

	const OTHER_ROOFS = [
		{type:'terracotta', material:'rnr:terracotta_roof_tile' },
		{type:'ceramic', 	material:'rnr:ceramic_roof_tile' },
		{type:'thatch', 	material:'tfc:straw' }	
	]

	OTHER_ROOFS.forEach(roof => {
		event.recipes.gtceu.assembler(`tfg:${roof.type}_roof`)
			.itemInputs(`${roof.material}`, 'rnr:roof_frame')
			.itemOutputs(`rnr:${roof.type}_roof`)
			.duration(20)
			.EUt(30)

		event.recipes.gtceu.assembler(`tfg:${roof.type}_roof_slab_from_framing`)
			.itemInputs(`${roof.material}`, 'rnr:roof_frame_slab')
			.itemOutputs(`rnr:${roof.type}_roof_slab`)
			.duration(20)
			.EUt(30)

		event.recipes.gtceu.assembler(`tfg:${roof.type}_roof_stairs_from_framing`)
			.itemInputs(`${roof.material}`, 'rnr:roof_frame_stairs')
			.itemOutputs(`rnr:${roof.type}_roof_stairs`)
			.duration(20)
			.EUt(30)

		event.recipes.gtceu.assembler(`tfg:${roof.type}_roof_slab`)
			.itemInputs(`rnr:${roof.type}_roof`)
			.itemOutputs(`rnr:${roof.type}_roof_slab`)
			.circuit(3)
			.duration(20)
			.EUt(30)

		event.recipes.gtceu.assembler(`tfg:${roof.type}_roof_stairs`)
			.itemInputs(`rnr:${roof.type}_roof`)
			.itemOutputs(`rnr:${roof.type}_roof_stairs`)
			.circuit(2)
			.duration(20)
			.EUt(30)
	})

	event.recipes.gtceu.mixer('rnr:mixer/wet_concrete_mix')
		.inputFluids('gtceu:concrete 200', "#tfg:clean_water 800")
		.outputFluids('rnr:concrete 1000')
		.circuit(7)
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

	// Tamped blocks for new world gen soils
	const DIRT_VARIATIONS = [
		"dirt",
		"grass",
		"rooted_dirt",
		"clay",
		"clay_grass",
		"coarse_dirt",
		"duff"
	]

	const MUD_VARIATIONS = [
		"mud",
		"muddy_roots"
	]

	global.TFG_MUD_TYPES.forEach(soil => {
		DIRT_VARIATIONS.forEach(type => {
			event.custom({
				type: `rnr:mattock`,
				ingredient: `tfg:${type}/${soil}`,
				result: `tfg:tamped/dirt/${soil}`,
				mode: `smooth`
			})
		})

		MUD_VARIATIONS.forEach(type => {
			event.custom({
				type: `rnr:mattock`,
				ingredient: `tfg:${type}/${soil}`,
				result: `tfg:tamped/mud/${soil}`,
				mode: `smooth`
			})
		})

		event.custom({
			type: `rnr:block_mod`,
			input_item: {
				item: `rnr:crushed_base_course`
			},
			input_block: `tfg:tamped/mud/${soil}`,
			output_block: `tfg:tamped/dirt/${soil}`
		})

		event.custom({
			type: `rnr:block_mod`,
			input_item: {
				item: `rnr:crushed_base_course`
			},
			input_block: `tfg:tamped/dirt/${soil}`,
			output_block: `rnr:base_course`
		})
	})

	global.TFC_MUD_TYPES.forEach(soil => {
		event.custom({
			type: `rnr:mattock`,
			ingredient: `tfg:coarse_dirt/${soil}`,
			result: `rnr:tamped_${soil}`,
			mode: `smooth`
		})
		event.custom({
			type: `rnr:mattock`,
			ingredient: `tfg:duff/${soil}`,
			result: `rnr:tamped_${soil}`,
			mode: `smooth`
		})
	})
};