// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGRockRecipes(event) {

	// #region Nether rock recipes

	// loose rocks to cobble, bricks to brick blocks

	const GLUEING_TOGETHER = [
		{ loose: 'tfg:loose/deepslate', block: 'minecraft:cobbled_deepslate' },
		{ loose: 'beneath:blackstone_pebble', block: 'minecraft:blackstone' },
		{ loose: 'tfg:brick/deepslate', block: '4x minecraft:deepslate_bricks' },
		{ loose: 'tfg:loose/dripstone', block: 'minecraft:dripstone_block' },
		{ loose: 'tfg:loose/moon_stone', block: 'ad_astra:moon_cobblestone' },
		{ loose: 'tfg:brick/moon_stone', block: '4x ad_astra:moon_stone_bricks' },
		{ loose: 'tfg:loose/moon_deepslate', block: 'ad_astra:moon_deepslate' },
		{ loose: 'tfg:loose/mars_stone', block: 'ad_astra:mars_cobblestone' },
		{ loose: 'tfg:brick/mars_stone', block: '4x ad_astra:mars_stone_bricks' },
		{ loose: 'tfg:loose/venus_stone', block: 'ad_astra:venus_cobblestone' },
		{ loose: 'tfg:brick/venus_stone', block: '4x ad_astra:venus_stone_bricks' },
		{ loose: 'tfg:loose/mercury_stone', block: 'ad_astra:mercury_cobblestone' },
		{ loose: 'tfg:brick/mercury_stone', block: '4x ad_astra:mercury_stone_bricks' },
		{ loose: 'tfg:loose/glacio_stone', block: 'ad_astra:glacio_cobblestone' },
		{ loose: 'tfg:brick/glacio_stone', block: '4x ad_astra:glacio_stone_bricks' },
		{ loose: 'tfg:brick/permafrost', block: '4x ad_astra:permafrost_bricks' },
		{ loose: 'minecraft:popped_chorus_fruit', block: '4x minecraft:purpur_block' }
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
		{ loose: 'tfg:loose/deepslate', brick: 'tfg:brick/deepslate' },
		{ loose: 'tfg:loose/moon_stone', brick: 'tfg:brick/moon_stone' },
		{ loose: 'tfg:loose/mars_stone', brick: 'tfg:brick/mars_stone' },
		{ loose: 'tfg:loose/venus_stone', brick: 'tfg:brick/venus_stone' },
		{ loose: 'tfg:loose/mercury_stone', brick: 'tfg:brick/mercury_stone' },
		{ loose: 'tfg:loose/glacio_stone', brick: 'tfg:brick/glacio_stone' },
		{ loose: 'tfg:loose/permafrost', brick: 'tfg:brick/permafrost' }
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
		{ raw: 'minecraft:smooth_basalt', polished: 'minecraft:polished_basalt' },
		{ raw: 'ad_astra:moon_stone', polished: 'ad_astra:polished_moon_stone' },
		{ raw: 'ad_astra:moon_stone_bricks', polished: 'ad_astra:chiseled_moon_stone_bricks' },
		{ raw: 'ad_astra:mars_stone', polished: 'ad_astra:polished_mars_stone' },
		{ raw: 'ad_astra:mars_stone_bricks', polished: 'ad_astra:chiseled_mars_stone_bricks' },
		{ raw: 'ad_astra:venus_stone', polished: 'ad_astra:polished_venus_stone' },
		{ raw: 'ad_astra:venus_stone_bricks', polished: 'ad_astra:chiseled_venus_stone_bricks' },
		{ raw: 'ad_astra:venus_sandstone', polished: 'ad_astra:venus_sandstone_bricks' },
		{ raw: 'ad_astra:mercury_stone', polished: 'ad_astra:polished_mercury_stone' },
		{ raw: 'ad_astra:mercury_stone_bricks', polished: 'ad_astra:chiseled_mercury_stone_bricks' },
		{ raw: 'ad_astra:glacio_stone', polished: 'ad_astra:polished_glacio_stone' },
		{ raw: 'ad_astra:glacio_stone_bricks', polished: 'ad_astra:chiseled_glacio_stone_bricks' },
		{ raw: 'ad_astra:conglomerate', polished: 'ad_astra:polished_conglomerate' },
		{ raw: 'ad_astra:permafrost', polished: 'ad_astra:polished_permafrost' },
		{ raw: 'ad_astra:permafrost_bricks', polished: 'ad_astra:chiseled_permafrost_bricks' },
		{ raw: 'ad_astra:chiseled_permafrost_bricks', polished: 'ad_astra:permafrost_tiles' },
		{ raw: 'ae2:sky_stone_block', polished: 'ae2:smooth_sky_stone_block' },
		{ raw: 'ae2:smooth_sky_stone_block', polished: 'ae2:sky_stone_brick' },
		{ raw: 'ae2:sky_stone_brick', polished: 'ae2:sky_stone_small_brick' },
		{ raw: 'gtceu:certus_quartz_block', polished: 'ae2:cut_quartz_block' },
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
		{ raw: 'minecraft:deepslate_tiles', cracked: 'minecraft:cracked_deepslate_tiles' },
		{ raw: 'ad_astra:moon_stone_bricks', cracked: 'ad_astra:cracked_moon_stone_bricks' },
		{ raw: 'ad_astra:mars_stone_bricks', cracked: 'ad_astra:cracked_mars_stone_bricks' },
		{ raw: 'ad_astra:venus_stone_bricks', cracked: 'ad_astra:cracked_venus_stone_bricks' },
		{ raw: 'ad_astra:venus_sandstone_bricks', cracked: 'ad_astra:cracked_venus_sandstone_bricks' },
		{ raw: 'ad_astra:mercury_stone_bricks', cracked: 'ad_astra:cracked_mercury_stone_bricks' },
		{ raw: 'ad_astra:glacio_stone_bricks', cracked: 'ad_astra:cracked_glacio_stone_bricks' },
		{ raw: 'ad_astra:permafrost_bricks', cracked: 'ad_astra:cracked_permafrost_bricks' }
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

		event.recipes.greate.pressing(x.cracked, x.raw)
			.recipeTier(1)
			.id(`greate:pressing/${x.raw}_to_${x.cracked}`.replace(/:/g, '_'))
	})

	// forge hammer

	const HAMMERING = [
		{ raw: 'minecraft:deepslate', hammered: 'minecraft:cobbled_deepslate' },
		{ raw: 'minecraft:cobbled_deepslate', hammered: 'tfc:sand/black' },
		{ raw: 'minecraft:blackstone', hammered: 'tfc:sand/black' },
		{ raw: 'beneath:crackrack', hammered: 'tfc:sand/pink' },
		{ raw: 'minecraft:dripstone_block', hammered: 'tfc:sand/brown' },

		{ raw: 'ad_astra:moon_stone', hammered: 'ad_astra:moon_cobblestone' },
		{ raw: 'tfg:rock/hardened_moon_stone', hammered: 'ad_astra:moon_cobblestone' },
		{ raw: 'ad_astra:moon_cobblestone', hammered: 'ad_astra:moon_sand' },
		{ raw: 'ad_astra:moon_deepslate', hammered: 'ad_astra:moon_sand' },
		{ raw: 'tfg:rock/hardened_moon_deepslate', hammered: 'ad_astra:moon_sand' },
		{ raw: 'ad_astra:mars_stone', hammered: 'ad_astra:mars_cobblestone' },
		{ raw: 'tfg:rock/hardened_mars_stone', hammered: 'ad_astra:mars_cobblestone' },
		{ raw: 'ad_astra:mars_cobblestone', hammered: 'ad_astra:mars_sand' },
		{ raw: 'ad_astra:venus_stone', hammered: 'ad_astra:venus_cobblestone' },
		{ raw: 'tfg:rock/hardened_venus_stone', hammered: 'ad_astra:venus_cobblestone' },
		{ raw: 'ad_astra:venus_cobblestone', hammered: 'ad_astra:venus_sand' },
		{ raw: 'ad_astra:mercury_stone', hammered: 'ad_astra:mercury_cobblestone' },
		{ raw: 'tfg:rock/hardened_mercury_stone', hammered: 'ad_astra:mercury_cobblestone' },
		{ raw: 'ad_astra:mercury_cobblestone', hammered: 'tfc:sand/red' },
		{ raw: 'ad_astra:glacio_stone', hammered: 'ad_astra:glacio_cobblestone' },
		{ raw: 'tfg:rock/hardened_glacio_stone', hammered: 'ad_astra:glacio_cobblestone' },
		{ raw: 'ad_astra:glacio_cobblestone', hammered: 'tfc:sand/white' },
		{ raw: 'ad_astra:conglomerate', hammered: 'tfc:rock/gravel/conglomerate' },
		{ raw: 'ad_astra:permafrost', hammered: 'tfg:loose/permafrost' }
	]

	HAMMERING.forEach(x => {
		event.recipes.gtceu.forge_hammer(`${x.raw}_to_${x.hammered}`.replace(/:/g, '_'))
			.itemInputs(x.raw)
			.itemOutputs(x.hammered)
			.duration(12)
			.EUt(8)

		event.recipes.greate.pressing(x.hammered, x.raw)
			.recipeTier(1)
			.id(`greate:pressing/${x.raw}_to_${x.hammered}`.replace(/:/g, '_'))
	})

	// slabs, stairs, walls

	const CUTTER = [
		// #region Nether
		{ 
			raw: 'minecraft:cobbled_deepslate',
			stair: 'minecraft:cobbled_deepslate_stairs',
			slab: 'minecraft:cobbled_deepslate_slab',
			wall: 'minecraft:cobbled_deepslate_wall',
			dust: 'gtceu:deepslate_dust',
			loose: 'tfg:loose/deepslate',
			stonecutting: false
		},
		{
			raw: 'minecraft:polished_deepslate',
			stair: 'minecraft:polished_deepslate_stairs',
			slab: 'minecraft:polished_deepslate_slab',
			wall: 'minecraft:polished_deepslate_wall',
			dust: 'gtceu:deepslate_dust',
			stonecutting: false
		},
		{
			raw: 'minecraft:deepslate_bricks',
			stair: 'minecraft:deepslate_brick_stairs',
			slab: 'minecraft:deepslate_brick_slab',
			wall: 'minecraft:deepslate_brick_wall',
			dust: 'gtceu:deepslate_dust',
			stonecutting: false
		},
		{
			raw: 'minecraft:deepslate_tiles',
			stair: 'minecraft:deepslate_tile_stairs',
			slab: 'minecraft:deepslate_tile_slab',
			wall: 'minecraft:deepslate_tile_wall',
			dust: 'gtceu:deepslate_dust',
			stonecutting: false
		},
		{
			raw: 'minecraft:blackstone',
			stair: 'minecraft:blackstone_stairs',
			slab: 'minecraft:blackstone_slab',
			wall: 'minecraft:blackstone_wall',
			dust: 'gtceu:blackstone_dust',
			loose: 'beneath:blackstone_pebble',
			stonecutting: false
		},
		{
			raw: 'minecraft:polished_blackstone',
			stair: 'minecraft:polished_blackstone_stairs',
			slab: 'minecraft:polished_blackstone_slab',
			wall: 'minecraft:polished_blackstone_wall',
			dust: 'gtceu:blackstone_dust',
			stonecutting: false
		},
		{
			raw: 'minecraft:polished_blackstone_bricks',
			stair: 'minecraft:polished_blackstone_brick_stairs',
			slab: 'minecraft:polished_blackstone_brick_slab',
			wall: 'minecraft:polished_blackstone_brick_wall',
			dust: 'gtceu:blackstone_dust',
			stonecutting: false
		},
		// #endregion
		// #region Space
		{ 
			raw: 'ad_astra:moon_cobblestone',
			stair: 'ad_astra:moon_cobblestone_stairs',
			slab: 'ad_astra:moon_cobblestone_slab',
			dust: 'tfg:moon_stone_dust',
			loose: 'tfg:loose/moon_stone',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:mars_cobblestone',
			stair: 'ad_astra:mars_cobblestone_stairs',
			slab: 'ad_astra:mars_cobblestone_slab',
			dust: 'tfg:mars_stone_dust',
			loose: 'tfg:loose/mars_stone',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:venus_cobblestone',
			stair: 'ad_astra:venus_cobblestone_stairs',
			slab: 'ad_astra:venus_cobblestone_slab',
			dust: 'tfg:venus_stone_dust',
			loose: 'tfg:loose/venus_stone',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:mercury_cobblestone',
			stair: 'ad_astra:mercury_cobblestone_stairs',
			slab: 'ad_astra:mercury_cobblestone_slab',
			dust: 'tfg:mercury_stone_dust',
			loose: 'tfg:loose/mercury_stone',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:glacio_cobblestone',
			stair: 'ad_astra:glacio_cobblestone_stairs',
			slab: 'ad_astra:glacio_cobblestone_slab',
			dust: 'tfg:glacio_stone_dust',
			loose: 'tfg:loose/glacio_stone',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:moon_stone',
			stair: 'ad_astra:moon_stone_stairs',
			slab: 'ad_astra:moon_stone_slab',
			dust: 'tfg:moon_stone_dust',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:mars_stone',
			stair: 'ad_astra:mars_stone_stairs',
			slab: 'ad_astra:mars_stone_slab',
			dust: 'tfg:mars_stone_dust',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:venus_stone',
			stair: 'ad_astra:venus_stone_stairs',
			slab: 'ad_astra:venus_stone_slab',
			dust: 'tfg:venus_stone_dust',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:mercury_stone',
			stair: 'ad_astra:mercury_stone_stairs',
			slab: 'ad_astra:mercury_stone_slab',
			dust: 'tfg:mercury_stone_dust',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:glacio_stone',
			stair: 'ad_astra:glacio_stone_stairs',
			slab: 'ad_astra:glacio_stone_slab',
			dust: 'tfg:glacio_stone_dust',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:venus_sandstone_bricks',
			stair: 'ad_astra:venus_sandstone_brick_stairs',
			slab: 'ad_astra:venus_sandstone_brick_slab',
			dust: '4x gtceu:venus_sand',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:moon_stone_bricks',
			stair: 'ad_astra:moon_stone_brick_stairs',
			slab: 'ad_astra:moon_stone_brick_slab',
			wall: 'ad_astra:moon_stone_brick_wall',
			dust: 'tfg:moon_stone_dust',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:mars_stone_bricks',
			stair: 'ad_astra:mars_stone_brick_stairs',
			slab: 'ad_astra:mars_stone_brick_slab',
			wall: 'ad_astra:mars_stone_brick_wall',
			dust: 'tfg:mars_stone_dust',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:venus_stone_bricks',
			stair: 'ad_astra:venus_stone_brick_stairs',
			slab: 'ad_astra:venus_stone_brick_slab',
			wall: 'ad_astra:venus_stone_brick_wall',
			dust: 'tfg:venus_stone_dust',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:mercury_stone_bricks',
			stair: 'ad_astra:mercury_stone_brick_stairs',
			slab: 'ad_astra:mercury_stone_brick_slab',
			wall: 'ad_astra:mercury_stone_brick_wall',
			dust: 'tfg:mercury_stone_dust',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:glacio_stone_bricks',
			stair: 'ad_astra:glacio_stone_brick_stairs',
			slab: 'ad_astra:glacio_stone_brick_slab',
			wall: 'ad_astra:glacio_stone_brick_wall',
			dust: 'tfg:glacio_stone_dust',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:permafrost_bricks',
			stair: 'ad_astra:permafrost_brick_stairs',
			slab: 'ad_astra:permafrost_brick_slab',
			wall: 'ad_astra:permafrost_brick_wall',
			dust: 'gtceu:ice_dust',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:chiseled_moon_stone_bricks',
			stair: 'ad_astra:chiseled_moon_stone_stairs',
			slab: 'ad_astra:chiseled_moon_stone_slab',
			dust: 'tfg:moon_stone_dust',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:chiseled_mars_stone_bricks',
			stair: 'ad_astra:chiseled_mars_stone_stairs',
			slab: 'ad_astra:chiseled_mars_stone_slab',
			dust: 'tfg:mars_stone_dust',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:chiseled_venus_stone_bricks',
			stair: 'ad_astra:chiseled_venus_stone_stairs',
			slab: 'ad_astra:chiseled_venus_stone_slab',
			dust: 'tfg:venus_stone_dust',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:chiseled_mercury_stone_bricks',
			stair: 'ad_astra:chiseled_mercury_stone_stairs',
			slab: 'ad_astra:chiseled_mercury_stone_slab',
			dust: 'tfg:mercury_stone_dust',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:chiseled_glacio_stone_bricks',
			stair: 'ad_astra:chiseled_glacio_stone_stairs',
			slab: 'ad_astra:chiseled_glacio_stone_slab',
			dust: 'tfg:glacio_stone_dust',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:chiseled_permafrost_bricks',
			stair: 'ad_astra:chiseled_permafrost_brick_stairs',
			slab: 'ad_astra:chiseled_permafrost_brick_slab',
			dust: 'gtceu:ice_dust',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:polished_moon_stone',
			stair: 'ad_astra:polished_moon_stone_stairs',
			slab: 'ad_astra:polished_moon_stone_slab',
			dust: 'tfg:moon_stone_dust',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:polished_mars_stone',
			stair: 'ad_astra:polished_mars_stone_stairs',
			slab: 'ad_astra:polished_mars_stone_slab',
			dust: 'tfg:mars_stone_dust',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:polished_venus_stone',
			stair: 'ad_astra:polished_venus_stone_stairs',
			slab: 'ad_astra:polished_venus_stone_slab',
			dust: 'tfg:venus_stone_dust',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:polished_mercury_stone',
			stair: 'ad_astra:polished_mercury_stone_stairs',
			slab: 'ad_astra:polished_mercury_stone_slab',
			dust: 'tfg:mercury_stone_dust',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:polished_glacio_stone',
			stair: 'ad_astra:polished_glacio_stone_stairs',
			slab: 'ad_astra:polished_glacio_stone_slab',
			dust: 'tfg:glacio_stone_dust',
			stonecutting: true
		},
		{ 
			raw: 'ad_astra:polished_permafrost',
			stair: 'ad_astra:polished_permafrost_stairs',
			slab: 'ad_astra:polished_permafrost_slab',
			dust: 'gtceu:ice_dust',
			stonecutting: true
		},
		{
			raw: 'ae2:sky_stone_block',
			stair: 'ae2:sky_stone_stairs',
			slab: 'ae2:sky_stone_slab',
			wall: 'ae2:sky_stone_wall',
			dust: 'ae2:sky_dust',
			stonecutting: true
		},
		{
			raw: 'ae2:smooth_sky_stone_block',
			stair: 'ae2:smooth_sky_stone_stairs',
			slab: 'ae2:smooth_sky_stone_slab',
			wall: 'ae2:smooth_sky_stone_wall',
			dust: 'ae2:sky_dust',
			stonecutting: true
		},
		{
			raw: 'ae2:sky_stone_brick',
			stair: 'ae2:sky_stone_brick_stairs',
			slab: 'ae2:sky_stone_brick_slab',
			wall: 'ae2:sky_stone_brick_wall',
			dust: 'ae2:sky_dust',
			stonecutting: true
		},
		{
			raw: 'ae2:sky_stone_small_brick',
			stair: 'ae2:sky_stone_small_brick_stairs',
			slab: 'ae2:sky_stone_small_brick_slab',
			wall: 'ae2:sky_stone_small_brick_wall',
			dust: 'ae2:sky_dust',
			stonecutting: true
		},
		{
			raw: 'ae2:fluix_block',
			stair: 'ae2:fluix_stairs',
			slab: 'ae2:fluix_slab',
			wall: 'ae2:fluix_wall',
			dust: 'ae2:fluix_dust',
			stonecutting: true
		},
		{
			raw: 'minecraft:purpur_block',
			stair: 'minecraft:purpur_stairs',
			slab: 'minecraft:purpur_slab',
			dust: null,
			stonecutting: true
		}
		// #endregion
	]
	
	CUTTER.forEach(x => {
		if ("stair" in x) {
			event.recipes.tfc.chisel(x.stair, x.raw, 'stair')

			if (x.stonecutting) {
				event.stonecutting(x.stair, x.raw).id(`${x.raw}_to_${x.stair}`.replace(/:/g, '_'))
			}

			if (x.dust !== null) {
				event.recipes.gtceu.macerator(`macerate_${x.stair}`.replace(/:/g, '_'))
					.itemInputs(x.stair)
					.itemOutputs(x.dust)
					.duration(150)
					.EUt(2)
					.category(GTRecipeCategories.MACERATOR_RECYCLING)
			}

			if ("loose" in x) {
				event.shapeless(`3x ${x.loose}`, [x.stair])
			}
		}
		if ("slab" in x) {
			event.recipes.tfc.chisel(x.slab, x.raw, 'slab').extraDrop(x.slab)
			
			if (x.stonecutting) {
				event.stonecutting(`2x ${x.slab}`, x.raw).id(`${x.raw}_to_${x.slab}`.replace(/:/g, '_'))
			}

			if (x.dust !== null) {
				event.recipes.gtceu.macerator(`macerate_${x.slab}`.replace(/:/g, '_'))
					.itemInputs(`2x ${x.slab}`)
					.itemOutputs(x.dust)
					.duration(150)
					.EUt(2)
					.category(GTRecipeCategories.MACERATOR_RECYCLING)
			}

			if ("loose" in x) {
				event.shapeless(`2x ${x.loose}`, [x.slab])
			}
		}
		if ("wall" in x) {
			event.recipes.tfc.chisel(x.wall, x.raw, 'smooth')
			
			if (x.stonecutting) {
				event.stonecutting(x.wall, x.raw).id(`${x.raw}_to_${x.wall}`.replace(/:/g, '_'))
			}

			if (x.dust !== null) {
				event.recipes.gtceu.macerator(`macerate_${x.wall}`.replace(/:/g, '_'))
					.itemInputs(x.wall)
					.itemOutputs(x.dust)
					.duration(150)
					.EUt(2)
					.category(GTRecipeCategories.MACERATOR_RECYCLING)
			}
		}

		if ("loose" in x) {
			event.shapeless(`4x ${x.loose}`, [x.raw])
		}
	})

	// pillars

	const PILLARS = [
		{ raw: 'ad_astra:moon_stone_bricks', pillar: 'ad_astra:moon_pillar' },
		{ raw: 'ad_astra:mars_stone_bricks', pillar: 'ad_astra:mars_pillar' },
		{ raw: 'ad_astra:venus_stone_bricks', pillar: 'ad_astra:venus_pillar' },
		{ raw: 'ad_astra:mercury_stone_bricks', pillar: 'ad_astra:mercury_pillar' },
		{ raw: 'ad_astra:glacio_stone_bricks', pillar: 'ad_astra:glacio_pillar' },
		{ raw: 'ad_astra:permafrost_bricks', pillar: 'ad_astra:permafrost_pillar' },
		{ raw: 'minecraft:purpur_block', pillar: 'minecraft:purpur_pillar' }
	]

	PILLARS.forEach(x => {
		event.shaped(`2x ${x.pillar}`, [
			'A',
			'A'
		], {
			A: x.raw
		})

		event.stonecutting(x.pillar, x.raw).id(`${x.raw}_to_${x.pillar}`.replace(/:/g, '_'))
	})

	// macerating

	const MACERATOR = [
		{ block: 'minecraft:deepslate', dust: 'gtceu:deepslate_dust' },
		{ block: 'minecraft:dripstone_block', dust: 'tfg:dripstone_dust' },
		{ block: 'ad_astra:moon_stone', dust: 'tfg:moon_stone_dust' },
		{ block: 'ad_astra:moon_deepslate', dust: 'tfg:moon_deepslate_dust' },
		{ block: 'ad_astra:mars_stone', dust: 'tfg:mars_stone_dust' },
		{ block: 'ad_astra:venus_stone', dust: 'tfg:venus_stone_dust' },
		{ block: 'ad_astra:mercury_stone', dust: 'tfg:mercury_stone_dust' },
		{ block: 'ad_astra:glacio_stone', dust: 'tfg:glacio_stone_dust' },
		{ block: 'ad_astra:permafrost', dust: 'gtceu:ice_dust' },
		{ block: 'ae2:sky_stone', dust: 'ae2:sky_dust' }
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
		'minecraft:dripstone_block',
		'minecraft:basalt'
	]
	
	ROCK_DUPING.forEach(x => {
		event.recipes.gtceu.rock_breaker(x)
			.notConsumable(x)
			.itemOutputs(x)
			.duration(16)
			.EUt(7)
	})

	event.recipes.gtceu.rock_breaker('tfg:moon_stone')
		.notConsumable('ad_astra:moon_stone')
		.itemOutputs('ad_astra:moon_stone')
		.duration(16)
		.EUt(7)
		.dimension('ad_astra:moon')

	event.recipes.gtceu.rock_breaker('tfg:moon_deepslate')
		.notConsumable('ad_astra:moon_deepslate')
		.itemOutputs('ad_astra:moon_deepslate')
		.duration(16)
		.EUt(7)
		.dimension('ad_astra:moon')

	event.recipes.gtceu.rock_breaker('tfg:glacio_stone')
		.notConsumable('ad_astra:glacio_stone')
		.itemOutputs('ad_astra:glacio_stone')
		.duration(16)
		.EUt(7)
		.dimension('ad_astra:moon')

	event.recipes.gtceu.rock_breaker('tfg:mars_stone')
		.notConsumable('ad_astra:mars_stone')
		.itemOutputs('ad_astra:mars_stone')
		.duration(16)
		.EUt(7)
		.dimension('ad_astra:mars')
		
	event.recipes.gtceu.rock_breaker('tfg:venus_stone')
		.notConsumable('ad_astra:venus_stone')
		.itemOutputs('ad_astra:venus_stone')
		.duration(16)
		.EUt(7)
		.dimension('ad_astra:venus')

	event.recipes.gtceu.rock_breaker('tfg:mercury_stone')
		.notConsumable('ad_astra:mercury_stone')
		.itemOutputs('ad_astra:mercury_stone')
		.duration(16)
		.EUt(7)
		.dimension('ad_astra:mercury')
	// #endregion

	// #region sandstone

	event.recipes.gtceu.compressor('tfg:venus_sandstone')
		.itemInputs('4x ad_astra:venus_sand')
		.itemOutputs('ad_astra:venus_sandstone')
		.duration(40*20)
		.EUt(2)

	event.recipes.gtceu.compressor('tfg:permafrost')
		.itemInputs('4x tfg:loose/permafrost')
		.itemOutputs('ad_astra:permafrost')
		.duration(40*20)
		.EUt(2)

	// #endregion

	//#region Magma Blocks
	event.remove({id: 'gtceu:compressor/magma_block'})
	event.remove({id: 'greate:splashing/obsidian'})

	//magma block + stone group
	const MAGMA_BLOCKS = [
		{ magma: 'minecraft:magma_block', rock: 'minecraft:blackstone' },
		{ magma: 'tfc:rock/magma/granite', rock: 'tfc:rock/raw/granite' },
		{ magma: 'tfc:rock/magma/diorite', rock: 'tfc:rock/raw/diorite' },
		{ magma: 'tfc:rock/magma/gabbro', rock: 'tfc:rock/raw/gabbro' },
		{ magma: 'tfc:rock/magma/rhyolite', rock: 'tfc:rock/raw/rhyolite' },
		{ magma: 'tfc:rock/magma/basalt', rock: 'tfc:rock/raw/basalt' },
		{ magma: 'tfc:rock/magma/andesite', rock: 'tfc:rock/raw/andesite' },
		{ magma: 'tfc:rock/magma/dacite', rock: 'tfc:rock/raw/dacite' }
	];

	MAGMA_BLOCKS.forEach(block => {

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