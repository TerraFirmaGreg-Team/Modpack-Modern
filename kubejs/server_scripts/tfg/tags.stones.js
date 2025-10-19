// priority: 0

function registerTFGItemStoneTags(event) {

	event.add('tfc:fluxstone', 'tfg:loose/dripstone')
	

	// Brick Index
	const BRICK_KEYS = [
		"brick",
		"brick_stairs",
		"brick_slab",
		"brick_wall",
		"cracked_brick",
		"cracked_stairs",
		"cracked_slab",
		"cracked_wall",
		"mossy_brick",
		"mossy_stairs",
		"mossy_slab",
		"mossy_wall",
		"smooth_brick",
		"smooth_stairs",
		"smooth_slab",
		"smooth_wall",
		"chiseled_brick"
	];

	global.BRICK_INDEX.forEach(brickObj => {
		BRICK_KEYS.forEach(key => {
			const id = brickObj[key];
			if (typeof id === 'string' && id) {
				event.add('tfg:brick_index', id);
			}
		});
	});
	
	// Mars stone dust
	event.add('forge:mars_stone_dusts', 'tfg:venus_stone_dust')
	event.add('forge:mars_stone_dusts', 'gtceu:granite_red_dust')
	event.add('forge:mars_stone_dusts', 'tfg:mars_stone_dust')

	//#region Stone Dusts Tag
	event.add('tfg:stone_dusts', 'tfg:gabbro_dust')
	event.add('tfg:stone_dusts', 'tfg:shale_dust')
	event.add('tfg:stone_dusts', 'tfg:claystone_dust')
	event.add('tfg:stone_dusts', 'tfg:limestone_dust')
	event.add('tfg:stone_dusts', 'tfg:conglomerate_dust')
	event.add('tfg:stone_dusts', 'tfg:dolomite_dust')
	event.add('tfg:stone_dusts', 'tfg:chert_dust')
	event.add('tfg:stone_dusts', 'tfg:chalk_dust')
	event.add('tfg:stone_dusts', 'tfg:rhyolite_dust')
	event.add('tfg:stone_dusts', 'tfg:dacite_dust')
	event.add('tfg:stone_dusts', 'gtceu:quartzite_dust')
	event.add('tfg:stone_dusts', 'tfg:slate_dust')
	event.add('tfg:stone_dusts', 'tfg:phyllite_dust')
	event.add('tfg:stone_dusts', 'tfg:schist_dust')
	event.add('tfg:stone_dusts', 'tfg:gneiss_dust')
	event.add('tfg:stone_dusts', 'gtceu:marble_dust')
	event.add('tfg:stone_dusts', 'gtceu:basalt_dust')
	event.add('tfg:stone_dusts', 'gtceu:diorite_dust')
	event.add('tfg:stone_dusts', 'gtceu:andesite_dust')
	event.add('tfg:stone_dusts', 'gtceu:granite_dust')
	event.add('tfg:stone_dusts', 'gtceu:deepslate_dust')
	event.add('tfg:stone_dusts', 'gtceu:blackstone_dust')
	event.add('tfg:stone_dusts', 'tfg:dripstone_dust')
	event.add('tfg:stone_dusts', 'tfg:moon_stone_dust')
	event.add('tfg:stone_dusts', 'tfg:moon_deepslate_dust')
	event.add('tfg:stone_dusts', 'tfg:mars_stone_dust')
	event.add('tfg:stone_dusts', 'tfg:venus_stone_dust')
	event.add('tfg:stone_dusts', 'tfg:mercury_stone_dust')
	event.add('tfg:stone_dusts', 'tfg:glacio_stone_dust')
	event.add('tfg:stone_dusts', 'gtceu:stone_dust')
	event.add('tfg:stone_dusts', 'gtceu:red_granite_dust')
	event.add('tfg:stone_dusts', 'gtceu:netherrack_dust')
	//#endregion

	const SHAPES =    ['stairs', 'slab', 'wall']
	const SHAPES_AA = ['stairs', 'slab']

	const STONE_TYPES = {
		deepslate:      "metamorphic",
		blackstone:     "igneous_intrusive",
		dripstone:      "sedimentary",
		crackrack:      "igneous_intrusive",
		basalt:         "igneous_extrusive",
		moon:           "igneous_intrusive",
		moon_deepslate: "igneous_intrusive",
		mars:           "sedimentary",
		venus:          "igneous_extrusive",
		mercury:        "igneous_intrusive",
		glacio:         "igneous_extrusive",
		red_granite:    "igneous_intrusive"
	}

	function getStoneType(stone) {
		const stoneType = STONE_TYPES[stone.toLowerCase()];
		return stoneType ? stoneType : `Stone "${stone}" not found`;
	}

	const AA_REGULAR_STONES = ['moon', 'mars', 'venus', 'mercury', 'glacio']

	// #region Nether blocks
	 
	// Deepslate (Migmatite) [Metamorphic]
	const create_deepslate_blocks = Ingredient.of('#create:stone_types/deepslate').itemIds.toArray().map(String);
	create_deepslate_blocks.forEach(block => {
		event.add(`tfc:${STONE_TYPES.deepslate}_items`, block)
	})

	event.add(`tfc:${STONE_TYPES.deepslate}_items`, 'minecraft:deepslate')

	event.add(`tfc:${STONE_TYPES.deepslate}_items`, 'minecraft:cobbled_deepslate')

	SHAPES.forEach(shape => {
		event.add(`tfc:${STONE_TYPES.deepslate}_items`, `minecraft:cobbled_deepslate_${shape}`)
		event.add(`tfg:rock_${shape}`.replace(/ss/g, 's'), `minecraft:cobbled_deepslate_${shape}`)
	})

	event.add('forge:smooth_stone', 'minecraft:polished_deepslate')
	event.add(`tfc:${STONE_TYPES.deepslate}_items`, 'minecraft:polished_deepslate')	
	event.add('tfc:rock/smooth', 'minecraft:polished_deepslate')
	event.add('create:stone_types/deepslate', 'minecraft:polished_deepslate')

	SHAPES.forEach(shape => {
		event.add(`tfc:${STONE_TYPES.deepslate}_items`, `minecraft:polished_deepslate_${shape}`)
		event.add(`tfg:rock_${shape}`.replace(/ss/g, 's'), `minecraft:polished_deepslate_${shape}`)
	})

	event.add('forge:stone_bricks', 'minecraft:deepslate_bricks')
	event.add(`tfc:${STONE_TYPES.deepslate}_items`, 'minecraft:deepslate_bricks')
	event.add('tfc:rock/bricks', 'minecraft:deepslate_bricks')

	event.add('forge:stone_bricks', 'minecraft:deepslate_tiles')
	event.add(`tfc:${STONE_TYPES.deepslate}_items`, 'minecraft:deepslate_tiles')
	event.add('tfc:rock/bricks', 'minecraft:deepslate_tiles')
	event.add('tfc:rock/chiseled_bricks', 'minecraft:deepslate_tiles')

	SHAPES.forEach(shape => {
		event.add(`tfc:${STONE_TYPES.deepslate}_items`, `minecraft:deepslate_tile_${shape}`)
		event.add(`tfg:brick_${shape}`.replace(/ss/g, 's'), `minecraft:deepslate_tile_${shape}`)
	})

	event.add('forge:stone_bricks', 'minecraft:cracked_deepslate_tiles')
	event.add(`tfc:${STONE_TYPES.deepslate}_items`, 'minecraft:cracked_deepslate_tiles')
	event.add('tfc:rock/bricks', 'minecraft:cracked_deepslate_tiles')
	event.add('tfc:rock/chiseled_bricks', 'minecraft:cracked_deepslate_tiles')

	event.add('forge:stone_bricks', 'minecraft:chiseled_deepslate')
	event.add(`tfc:${STONE_TYPES.deepslate}_items`, 'minecraft:chiseled_deepslate')
	event.add('tfc:rock/bricks', 'minecraft:chiseled_deepslate')
	event.add('tfc:rock/chiseled_bricks', 'minecraft:chiseled_deepslate')

	// Blackstone (Pyroxenite) [Igneous Intrusive]
	event.remove('tfc:metamorphic_rock', 'beneath:blackstone_pebble')
	event.add(`tfc:${STONE_TYPES.blackstone}_rock`, 'beneath:blackstone_pebble')
	event.add(`tfc:${STONE_TYPES.blackstone}_items`, 'beneath:blackstone_pebble')
	event.add('rnr:loose_rock_items', 'beneath:blackstone_pebble')

	event.add(`tfc:${STONE_TYPES.blackstone}_items`, 'beneath:blackstone_brick')

	event.add('forge:stone', 'minecraft:blackstone')
	event.add(`tfc:${STONE_TYPES.blackstone}_items`, 'minecraft:blackstone')

	SHAPES.forEach(shape => {
		event.add(`tfc:${STONE_TYPES.blackstone}_items`, `minecraft:blackstone_${shape}`)
		event.add(`tfg:rock_${shape}`.replace(/ss/g, 's'), `minecraft:blackstone_${shape}`)
	})

	event.add(`tfc:${STONE_TYPES.blackstone}_items`, 'minecraft:gilded_blackstone')

	event.add('forge:smooth_stone', 'minecraft:polished_blackstone')
	event.add(`tfc:${STONE_TYPES.blackstone}_items`, 'minecraft:polished_blackstone')
	event.add('tfc:rock/smooth', 'minecraft:polished_blackstone')

	event.add('forge:stone_bricks', 'minecraft:polished_blackstone_bricks')
	event.add(`tfc:${STONE_TYPES.blackstone}_items`, 'minecraft:polished_blackstone_bricks')
	event.add('tfc:rock/bricks', 'minecraft:polished_blackstone_bricks')

	SHAPES.forEach(shape => {
		event.add(`tfc:${STONE_TYPES.blackstone}_items`, `minecraft:polished_blackstone_${shape}`)
		event.add(`tfg:rock_${shape}`.replace(/ss/g, 's'), `minecraft:polished_blackstone_${shape}`)
	})

	event.add('forge:stone_bricks', 'minecraft:cracked_polished_blackstone_bricks')
	event.add(`tfc:${STONE_TYPES.blackstone}_items`, 'minecraft:cracked_polished_blackstone_bricks')
	event.add('tfc:rock/bricks', 'minecraft:cracked_polished_blackstone_bricks')
	event.add('tfc:rock/cracked_bricks', 'minecraft:cracked_polished_blackstone_bricks')

	SHAPES.forEach(shape => {
		event.add(`tfc:${STONE_TYPES.blackstone}_items`, `minecraft:polished_blackstone_brick_${shape}`)
		event.add(`tfg:brick_${shape}`.replace(/ss/g, 's'), `minecraft:polished_blackstone_brick_${shape}`)
	})

	event.add('forge:stone_bricks', 'minecraft:polished_blackstone_bricks')
	event.add(`tfc:${STONE_TYPES.blackstone}_items`, 'minecraft:polished_blackstone_bricks')
	event.add('tfc:rock/bricks', 'minecraft:polished_blackstone_bricks')

	event.add('forge:stone_bricks', 'minecraft:chiseled_polished_blackstone')
	event.add(`tfc:${STONE_TYPES.blackstone}_items`, 'minecraft:chiseled_polished_blackstone')
	event.add('tfc:rock/bricks', 'minecraft:chiseled_polished_blackstone')
	event.add('tfc:rock/chiseled_bricks', 'minecraft:chiseled_polished_blackstone')

	event.add(`tfc:${STONE_TYPES.blackstone}_items`, 'beneath:blackstone_aqueduct')	

	// Dripstone (Travertine) [Sedimentary]
	const create_dripstone_blocks = Ingredient.of('#create:stone_types/dripstone').itemIds.toArray().map(String);
	create_dripstone_blocks.forEach(block => {
		event.add(`tfc:${STONE_TYPES.dripstone}_items`, block)
	})

	event.add('forge:stone', 'minecraft:dripstone_block')
	event.add(`tfc:${STONE_TYPES.dripstone}_items`, 'minecraft:dripstone_block')

	event.add('forge:smooth_stone', 'create:cut_dripstone')
	event.add(`tfc:${STONE_TYPES.dripstone}_items`, 'create:cut_dripstone')
	event.add('tfc:rock/smooth', 'create:cut_dripstone')

	SHAPES.forEach(shape => {
		event.add(`tfc:${STONE_TYPES.dripstone}_items`, `create:cut_dripstone_${shape}`)
		event.add(`tfg:rock_${shape}`.replace(/ss/g, 's'), `create:cut_dripstone_${shape}`)
	})

	event.add('forge:smooth_stone', 'ad_astra:polished_cut_dripstone')
	event.add('tfc:rock/smooth', 'create:polished_cut_dripstone')

	SHAPES.forEach(shape => {
		event.add(`tfc:${STONE_TYPES.dripstone}_items`, `create:polished_cut_dripstone_${shape}`)
		event.add(`tfg:rock_${shape}`.replace(/ss/g, 's'), `create:polished_cut_dripstone_${shape}`)
	})

	event.add('forge:stone_bricks', 'create:cut_dripstone_bricks')
	event.add(`tfc:${STONE_TYPES.dripstone}_items`, 'create:cut_dripstone_bricks')
	event.add('tfc:rock/bricks', 'create:cut_dripstone_bricks')

	SHAPES.forEach(shape => {
		event.add(`tfc:${STONE_TYPES.dripstone}_items`, `create:cut_dripstone_brick_${shape}`)
		event.add(`tfg:brick_${shape}`.replace(/ss/g, 's'), `create:cut_dripstone_brick_${shape}`)
	})

	event.add('forge:stone_bricks', 'create:small_dripstone_bricks')
	event.add(`tfc:${STONE_TYPES.dripstone}_items`, 'create:small_dripstone_bricks')
	event.add('tfc:rock/bricks', 'create:small_dripstone_bricks')
	event.add('tfc:rock/chiseled_bricks', 'create:small_dripstone_bricks')

	SHAPES.forEach(shape => {
		event.add(`tfc:${STONE_TYPES.dripstone}_items`, `create:small_dripstone_brick_${shape}`)
		event.add(`tfg:brick_${shape}`.replace(/ss/g, 's'), `create:small_dripstone_brick_${shape}`)
	})
 
	// Crackrack / "Nether" (Keratophyre) [Igneous Intrusive]
	event.add('forge:stone', 'beneath:crackrack')
	event.add(`tfc:${STONE_TYPES.crackrack}_items`, 'beneath:crackrack')
	
	event.add('forge:stone_bricks', 'minecraft:nether_bricks')
	event.add(`tfc:${STONE_TYPES.crackrack}_items`, 'minecraft:nether_bricks')
	event.add('tfc:rock/bricks', 'minecraft:nether_bricks')

	SHAPES.forEach(shape => {
		event.add(`tfc:${STONE_TYPES.crackrack}_items`, `minecraft:nether_brick_${shape}`)
		event.add(`tfg:brick_${shape}`.replace(/ss/g, 's'), `minecraft:nether_brick_${shape}`)
	})

	event.add('forge:stone_bricks', 'minecraft:cracked_nether_bricks')
	event.add(`tfc:${STONE_TYPES.crackrack}_items`, 'minecraft:cracked_nether_bricks')
	event.add('tfc:rock/bricks', 'minecraft:cracked_nether_bricks')
	event.add('tfc:rock/cracked_bricks', 'minecraft:cracked_nether_bricks')

	event.add('forge:stone_bricks', 'minecraft:chiseled_nether_bricks')
	event.add(`tfc:${STONE_TYPES.crackrack}_items`, 'minecraft:chiseled_nether_bricks')
	event.add('tfc:rock/bricks', 'minecraft:chiseled_nether_bricks')
	event.add('tfc:rock/chiseled_bricks', 'minecraft:chiseled_nether_bricks')

	// Basalt
	event.add('forge:stone', 'minecraft:basalt')
	event.add(`tfc:${STONE_TYPES.basalt}_items`, 'minecraft:basalt')

	event.add('forge:smooth_stone', 'minecraft:smooth_basalt')
	event.add(`tfc:${STONE_TYPES.basalt}_items`, 'minecraft:smooth_basalt')	
	event.add('tfc:rock/smooth', 'minecraft:smooth_basalt')

	event.add('forge:smooth_stone', 'minecraft:polished_basalt')
	event.add(`tfc:${STONE_TYPES.basalt}_items`, 'minecraft:polished_basalt')	
	event.add('tfc:rock/smooth', 'minecraft:polished_basalt')
	// #endregion

	// #region Space blocks
	AA_REGULAR_STONES.forEach(stone => {
		event.add('forge:stone', `ad_astra:${stone}_stone`)
		event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:${stone}_stone`)

		SHAPES_AA.forEach(shape => {
			event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:${stone}_stone_${shape}`)
			event.add(`tfg:rock_${shape}`.replace(/ss/g, 's'), `ad_astra:${stone}_stone_${shape}`)
		})

		event.add('forge:cobblestone', `ad_astra:${stone}_cobblestone`)
		event.add('forge:cobblestone/normal',  `ad_astra:${stone}_cobblestone`)
		event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:${stone}_cobblestone`)

		SHAPES_AA.forEach(shape => {
			event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:${stone}_cobblestone_${shape}`)
			event.add(`tfg:rock_${shape}`.replace(/ss/g, 's'), `ad_astra:${stone}_cobblestone_${shape}`)
		})

		event.add('forge:smooth_stone', `ad_astra:polished_${stone}_stone`)
		event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:polished_${stone}_stone`)
		event.add('tfc:rock/smooth', `ad_astra:polished_${stone}_stone`)

		SHAPES_AA.forEach(shape => {
			event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:polished_${stone}_stone_${shape}`)
			event.add(`tfg:rock_${shape}`.replace(/ss/g, 's'), `ad_astra:polished_${stone}_stone_${shape}`)
		})

		event.add('forge:stone_bricks', `ad_astra:${stone}_stone_bricks`)
		event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:${stone}_stone_bricks`)
		event.add('tfc:rock/bricks', `ad_astra:${stone}_stone_bricks`)
		
		SHAPES.forEach(shape => {
			event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:${stone}_stone_brick_${shape}`)
			event.add(`tfg:brick_${shape}`.replace(/ss/g, 's'), `ad_astra:${stone}_stone_brick_${shape}`)
		})

		event.add('forge:stone_bricks', `ad_astra:cracked_${stone}_stone_bricks`)
		event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:cracked_${stone}_stone_bricks`)
		event.add('tfc:rock/bricks', `ad_astra:cracked_${stone}_stone_bricks`)
		event.add('tfc:rock/cracked_bricks', `ad_astra:cracked_${stone}_stone_bricks`)

		event.add('forge:stone_bricks', `ad_astra:chiseled_${stone}_stone_bricks`)
		event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:chiseled_${stone}_stone_bricks`)
		event.add('tfc:rock/bricks', `ad_astra:chiseled_${stone}_stone_bricks`)
		event.add('tfc:rock/chiseled_bricks', `ad_astra:chiseled_${stone}_stone_bricks`)

		SHAPES_AA.forEach(shape => {
			event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:chiseled_${stone}_stone_brick_${shape}`)
			event.add(`tfg:brick_${shape}`.replace(/ss/g, 's'), `ad_astra:chiseled_${stone}_stone_brick_${shape}`)
		})

		event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:${stone}_pillar`)
	})

	// Moon Deepslate (Norite) [Igneous Intrusive]
	event.add('forge:stone', 'ad_astra:moon_deepslate')
	event.add(`tfc:${STONE_TYPES.moon_deepslate}_items`, 'ad_astra:moon_deepslate')
	
	// Red Granite [Igneous Intrusive]
	event.add('forge:stone', 'gtceu:red_granite')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:red_granite')

	event.add('forge:cobblestone', 'gtceu:red_granite_cobblestone')
	event.add('forge:cobblestone/normal', 'gtceu:red_granite_cobblestone')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:red_granite_cobblestone')

	event.add('forge:cobblestone', 'gtceu:mossy_red_granite_cobblestone')
	event.add('forge:cobblestone/normal', 'gtceu:mossy_red_granite_cobblestone')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:mossy_red_granite_cobblestone')

	event.add('forge:smooth_stone', 'gtceu:polished_red_granite')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:polished_red_granite')
	event.add('tfc:rock/smooth', 'gtceu:polished_red_granite')

	event.add('forge:stone_bricks', 'gtceu:red_granite_bricks')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:red_granite_bricks')
	event.add('tfc:rock/bricks', 'gtceu:red_granite_bricks')

	event.add('forge:stone_bricks', 'gtceu:mossy_red_granite_bricks')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:mossy_red_granite_bricks')
	event.add('tfc:rock/bricks', 'gtceu:mossy_red_granite_bricks')
	event.add('tfc:rock/mossy_bricks', 'gtceu:mossy_red_granite_bricks')

	event.add('forge:stone_bricks', 'gtceu:cracked_red_granite_bricks')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:cracked_red_granite_bricks')
	event.add('tfc:rock/bricks', 'gtceu:cracked_red_granite_bricks')
	event.add('tfc:rock/cracked_bricks', 'gtceu:cracked_red_granite_bricks')

	event.add('forge:stone_bricks', 'gtceu:red_granite_tile')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:red_granite_tile')
	event.add('tfc:rock/bricks', 'gtceu:red_granite_tile')
	event.add('tfc:rock/chiseled_bricks', 'gtceu:red_granite_tile')

	event.add('forge:stone_bricks', 'gtceu:square_red_granite_bricks')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:square_red_granite_bricks')
	event.add('tfc:rock/bricks', 'gtceu:square_red_granite_bricks')
	event.add('tfc:rock/chiseled_bricks', 'gtceu:square_red_granite_bricks')

	event.add('forge:stone_bricks', 'gtceu:red_granite_windmill_a')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:red_granite_windmill_a')
	event.add('tfc:rock/bricks', 'gtceu:red_granite_windmill_a')
	event.add('tfc:rock/chiseled_bricks', 'gtceu:red_granite_windmill_a')

	event.add('forge:stone_bricks', 'gtceu:red_granite_windmill_b')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:red_granite_windmill_b')
	event.add('tfc:rock/bricks', 'gtceu:red_granite_windmill_b')
	event.add('tfc:rock/chiseled_bricks', 'gtceu:red_granite_windmill_b')

	event.add('forge:stone_bricks', 'gtceu:small_red_granite_bricks')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:small_red_granite_bricks')
	event.add('tfc:rock/bricks', 'gtceu:small_red_granite_bricks')
	event.add('tfc:rock/chiseled_bricks', 'gtceu:small_red_granite_bricks')

	event.add('forge:stone_bricks', 'gtceu:red_granite_small_tile')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:red_granite_small_tile')
	event.add('tfc:rock/bricks', 'gtceu:red_granite_small_tile')
	event.add('tfc:rock/chiseled_bricks', 'gtceu:red_granite_small_tile')

	event.add('forge:stone_bricks', 'gtceu:chiseled_red_granite')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:chiseled_red_granite')
	event.add('tfc:rock/bricks', 'gtceu:chiseled_red_granite')
	event.add('tfc:rock/chiseled_bricks', 'gtceu:chiseled_red_granite')
	
	// Permafrost (???) [NA]
	event.remove('tfc:metamorphic_rock', 'tfg:loose/permafrost')
	event.add('forge:stone', 'ad_astra:permafrost')
	
	event.add('forge:smooth_stone', 'ad_astra:polished_permafrost')
	event.add('tfc:rock/smooth', 'ad_astra:polished_permafrost')

	event.add('forge:stone_bricks', 'ad_astra:permafrost_bricks')
	event.add('tfc:rock/bricks', 'ad_astra:permafrost_bricks')

	event.add('forge:stone_bricks', 'ad_astra:cracked_permafrost_bricks')
	event.add('tfc:rock/bricks', 'ad_astra:cracked_permafrost_bricks')
	event.add('tfc:rock/cracked_bricks', 'ad_astra:cracked_permafrost_bricks')

	event.add('forge:stone_bricks', 'ad_astra:chiseled_permafrost_bricks')
	event.add('tfc:rock/bricks', 'ad_astra:chiseled_permafrost_bricks')
	event.add('tfc:rock/chiseled_bricks', 'ad_astra:chiseled_permafrost_bricks')

}