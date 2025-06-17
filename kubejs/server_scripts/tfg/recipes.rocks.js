// priority: 0

function registerTFGRockRecipes(event) {

	// #region Nether rock recipes

	// loose rocks to cobble, bricks to brick blocks

	const GLUEING_TOGETHER = [
		{ loose: 'tfg:loose/deepslate', block: 'minecraft:cobbled_deepslate' },
		{ loose: 'beneath:blackstone_pebble', block: 'minecraft:blackstone' },
		{ loose: 'tfg:brick/deepslate', block: '4x minecraft:deepslate_bricks' },
		{ loose: 'tfg:loose/dripstone', block: 'minecraft:dripstone_block' }
	]

	GLUEING_TOGETHER.forEach(x => {
		event.shaped(x.block, [
			'ABA',
			'BAB',
			'ABA'
		], {
			A: x.loose,
			B: 'tfc:mortar'
		})

		event.recipes.gtceu.assembler(`${x.loose}_to_${x.block}`.replace(/[: ]/g, '_'))
			.itemInputs(`5x ${x.loose}`)
			.inputFluids(Fluid.of('gtceu:concrete', 72))
			.itemOutputs(x.block)
			.circuit(2)
			.duration(50)
			.EUt(2)
	})

	// loose to bricks

	const LOOSE_TO_BRICKS = [
		{ loose: 'tfg:loose/deepslate', brick: 'tfg:brick/deepslate' }
	]

	LOOSE_TO_BRICKS.forEach(x => {
		event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(
			x.brick, [x.loose, '#tfc:chisels']
		))

		event.recipes.gtceu.cutter(`${x.loose}_to_${x.brick}`.replace(/:/g, '_'))
			.itemInputs(x.loose)
			.itemOutputs(x.brick)
			.duration(40)
			.EUt(8)
	})

	// raw to polished

	const RAW_TO_POLISHED = [
		{ raw: 'minecraft:deepslate', polished: 'minecraft:polished_deepslate' },
		{ raw: 'minecraft:blackstone', polished: 'minecraft:polished_blackstone' },
		{ raw: 'minecraft:deepslate_bricks', polished: 'minecraft:deepslate_tiles' },
		{ raw: 'minecraft:deepslate_tiles', polished: 'minecraft:chiseled_deepslate' },
		{ raw: 'minecraft:polished_blackstone_bricks', polished: 'minecraft:chiseled_polished_blackstone' },
		{ raw: 'minecraft:basalt', polished: 'minecraft:smooth_basalt' },
		{ raw: 'minecraft:smooth_basalt', polished: 'minecraft:polished_basalt' }
	]
	
	RAW_TO_POLISHED.forEach(x => {
		event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(
			x.polished, [x.raw, '#tfc:chisels']
		))

		event.recipes.gtceu.laser_engraver(`${x.raw}_to_${x.polished}`.replace(/:/g, '_'))
			.itemInputs(x.raw)
			.itemOutputs(x.polished)
			.notConsumable('tfc:lens')
			.duration(30)
			.EUt(GTValues.VA[GTValues.ULV])

		//event.custom({
		//	type: 'vintageimprovements:laser_cutting',
		//	ingredients: [{ item: x.raw }],
		//	results: [{item: x.polished }],
		//	energy: GTValues.VA[GTValues.ULV] * 30 * 4,
		//	maxChargeRate: GTValues.VA[GTValues.ULV] * 4
		//}).id(`tfg:vi/laser/tfg/${x.raw.replace(/:/g, '_')}_to_${x.polished.replace(/:/g, '_')}`)
	})

	// cracked bricks

	const CRACKING = [
		{ raw: 'minecraft:deepslate_bricks', cracked: 'minecraft:cracked_deepslate_bricks' },
		{ raw: 'minecraft:deepslate_tiles', cracked: 'minecraft:cracked_deepslate_tiles' }
	]

	CRACKING.forEach(x => {
		event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(
			x.cracked, [x.raw, '#tfc:hammers']
		))

		event.recipes.gtceu.forge_hammer(`${x.raw}_to_${x.cracked}`.replace(/:/g, '_'))
			.itemInputs(x.raw)
			.itemOutputs(x.cracked)
			.duration(12)
			.EUt(8)
	})

	// forge hammer

	const HAMMERING = [
		{ raw: 'minecraft:deepslate', hammered: 'minecraft:cobbled_deepslate' },
		{ raw: 'minecraft:cobbled_deepslate', hammered: 'tfc:sand/black' },
		{ raw: 'minecraft:blackstone', hammered: 'tfc:sand/black' },
		{ raw: 'beneath:crackrack', hammered: 'tfc:sand/pink' },
		{ raw: 'minecraft:dripstone_block', hammered: 'tfc:sand/brown' }
	]

	HAMMERING.forEach(x => {
		event.recipes.gtceu.forge_hammer(`${x.raw}_to_${x.hammered}`.replace(/:/g, '_'))
			.itemInputs(x.raw)
			.itemOutputs(x.hammered)
			.duration(12)
			.EUt(8)
	})

	// slabs, stairs, walls

	const CUTTER = [
		{ 
			raw: 'minecraft:cobbled_deepslate',
			stair: 'minecraft:cobbled_deepslate_stairs',
			slab: 'minecraft:cobbled_deepslate_slab',
			wall: 'minecraft:cobbled_deepslate_wall',
			dust: 'gtceu:deepslate_dust',
			loose: 'tfg:loose/deepslate'
		},
		{
			raw: 'minecraft:polished_deepslate',
			stair: 'minecraft:polished_deepslate_stairs',
			slab: 'minecraft:polished_deepslate_slab',
			wall: 'minecraft:polished_deepslate_wall',
			dust: 'gtceu:deepslate_dust'
		},
		{
			raw: 'minecraft:deepslate_bricks',
			stair: 'minecraft:deepslate_brick_stairs',
			slab: 'minecraft:deepslate_brick_slab',
			wall: 'minecraft:deepslate_brick_wall',
			dust: 'gtceu:deepslate_dust'
		},
		{
			raw: 'minecraft:deepslate_tiles',
			stair: 'minecraft:deepslate_tile_stairs',
			slab: 'minecraft:deepslate_tile_slab',
			wall: 'minecraft:deepslate_tile_wall',
			dust: 'gtceu:deepslate_dust'
		},
		{
			raw: 'minecraft:blackstone',
			stair: 'minecraft:blackstone_stairs',
			slab: 'minecraft:blackstone_slab',
			wall: 'minecraft:blackstone_wall',
			dust: 'gtceu:blackstone_dust',
			loose: 'beneath:blackstone_pebble'
		},
		{
			raw: 'minecraft:polished_blackstone',
			stair: 'minecraft:polished_blackstone_stairs',
			slab: 'minecraft:polished_blackstone_slab',
			wall: 'minecraft:polished_blackstone_wall',
			dust: 'gtceu:blackstone_dust'
		},
		{
			raw: 'minecraft:polished_blackstone_bricks',
			stair: 'minecraft:polished_blackstone_brick_stairs',
			slab: 'minecraft:polished_blackstone_brick_slab',
			wall: 'minecraft:polished_blackstone_brick_wall',
			dust: 'gtceu:blackstone_dust'
		}
	]
	
	CUTTER.forEach(x => {
		if ("stair" in x) {
			event.recipes.tfc.chisel(x.stair, x.raw, 'stair')

			event.recipes.gtceu.macerator(`macerate_${x.stair}`.replace(/:/g, '_'))
				.itemInputs(x.stair)
				.itemOutputs(x.dust)
				.duration(150)
				.EUt(2)
				.category(GTRecipeCategories.MACERATOR_RECYCLING)

			if ("loose" in x) {
				event.shapeless(`3x ${x.loose}`, [x.stair])
			}
		}
		if ("slab" in x) {
			event.recipes.tfc.chisel(x.slab, x.raw, 'slab').extraDrop(x.slab)

			event.recipes.gtceu.macerator(`macerate_${x.slab}`.replace(/:/g, '_'))
				.itemInputs(`2x ${x.slab}`)
				.itemOutputs(x.dust)
				.duration(150)
				.EUt(2)
				.category(GTRecipeCategories.MACERATOR_RECYCLING)

			if ("loose" in x) {
				event.shapeless(`2x ${x.loose}`, [x.slab])
			}
		}
		if ("wall" in x) {
			event.recipes.tfc.chisel(x.wall, x.slab, 'smooth')

			event.recipes.gtceu.macerator(`macerate_${x.wall}`.replace(/:/g, '_'))
				.itemInputs(x.wall)
				.itemOutputs(x.dust)
				.duration(150)
				.EUt(2)
				.category(GTRecipeCategories.MACERATOR_RECYCLING)
		}

		if ("loose" in x) {
			event.shapeless(`4x ${x.loose}`, [x.raw])
		}
	})

	const MACERATOR = [
		{ block: 'minecraft:deepslate', dust: 'gtceu:deepslate_dust' },
		{ block: 'minecraft:dripstone_block', dust: 'tfg:dripstone_dust' }
	]

	MACERATOR.forEach(x => {
		event.recipes.gtceu.macerator(`macerate_${x.block}`.replace(/:/g, '_'))
			.itemInputs(x.block)
			.itemOutputs(x.dust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)
	})

	// rock breaker

	const ROCK_DUPING = [
		'minecraft:deepslate',
		'minecraft:cobbled_deepslate',
		'minecraft:blackstone',
		'minecraft:dripstone_block'
	]
	
	ROCK_DUPING.forEach(x => {
		event.recipes.gtceu.rock_breaker(x)
			.notConsumable(x)
			.itemOutputs(x)
			.duration(16)
			.EUt(7)
	})

	// #endregion

	//#region Magma Blocks
	event.remove({id: 'gtceu:compressor/magma_block'})
	event.remove({id: 'greate:splashing/obsidian'})

	//magma block + stone group
	const magma_blocks = [
		{magma: 'minecraft:magma_block', rock: 'minecraft:blackstone'},
		{magma: 'tfc:rock/magma/granite', rock: 'tfc:rock/raw/granite'},
		{magma: 'tfc:rock/magma/diorite', rock: 'tfc:rock/raw/diorite'},
		{magma: 'tfc:rock/magma/gabbro', rock: 'tfc:rock/raw/gabbro'},
		{magma: 'tfc:rock/magma/rhyolite', rock: 'tfc:rock/raw/rhyolite'},
		{magma: 'tfc:rock/magma/basalt', rock: 'tfc:rock/raw/basalt'},
		{magma: 'tfc:rock/magma/andesite', rock: 'tfc:rock/raw/andesite'},
		{magma: 'tfc:rock/magma/dacite', rock: 'tfc:rock/raw/dacite'}
	];

	magma_blocks.forEach(block => {

		event.recipes.gtceu.fluid_solidifier(`tfg:gtceu/fluid_solidifier/${block.magma}`.replace(/:/g, '/'))
			.itemInputs(`1x ${block.rock}`)
			.inputFluids(Fluid.of('minecraft:lava', 250))
			.itemOutputs(`1x ${block.magma}`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.ULV])
			
		event.recipes.gtceu.extractor(`tfg:gtceu/extractor/${block.magma}`.replace(/:/g, "/"))
			.itemInputs(`1x ${block.magma}`)
			.outputFluids(Fluid.of('minecraft:lava', 250))
			.itemOutputs(`1x ${block.rock}`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.LV])
	})
	//#endregion
}