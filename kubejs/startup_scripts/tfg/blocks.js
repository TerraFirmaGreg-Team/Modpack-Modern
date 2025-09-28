"use strict";

const registerTFGBlocks = (event) => {

	registerTFGNetherBlocks(event)
	registerTFGSpaceBlocks(event)
	registerTFGSupportBlocks(event)
	registerTFGAqueductBlocks(event)
	registerTFGCrops(event)

	event.create('tfg:dry_ice', 'tfg:particle_emitter')
		.textureAll('tfg:block/dry_ice')
		.soundType('bone_block')
		.hardness(1)
		.resistance(1)
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('tfcambiental:cold_stuff')
		.defaultTranslucent()
		.mapColor('color_white')
		.speedFactor(1.2)
		.particleOffset(1, 1, 1)
		.particleVelocity(0.05, 0, 0.05)
		.particle('minecraft:campfire_cosy_smoke')
		.particleCount(2)
		.particleForced(false)
		
	event.create('tfg:exhaust_vent_particle', 'tfg:particle_emitter')
		.textureAll('tfg:block/titanium_concrete')
		.soundType('metal')
		.hardness(5)
		.resistance(6)
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:mineable/wrench')
		.mapColor('color_black')
		.speedFactor(1.1)
		.particleOffset(5, 1, 5)
		.particleVelocity(0.0, 0.1, 0.0)
		.particle('minecraft:campfire_signal_smoke')
		.particleCount(50)
		.particleForced(true)

	// #region Machine Casings

	global.TFG_MACHINE_CASINGS.forEach(type => {
		event.create(`tfg:casings/${type}`)
			.translationKey(`block.tfg.casings.${type}`)
			.model(`tfg:block/casings/${type}`)
			.soundType('copper')
			.hardness(5)
			.resistance(6)
			.tagBlock('minecraft:mineable/pickaxe')
			.tagBlock('minecraft:mineable/wrench')
			.mapColor('color_light_gray')
	})

	event.create(`tfg:casings/machine_casing_stainless_evaporation`)
		.translationKey(`block.tfg.casings.machine_casing_stainless_evaporation`)
		.model(`tfg:block/casings/machine_casing_stainless_evaporation`)
		.soundType('copper')
		.hardness(5)
		.resistance(6)
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:mineable/wrench')
		.mapColor('color_light_gray')

    event.create('tfg:casings/machine_casing_vacuum_engine_intake', 'gtceu:active')
        .simple('tfg:block/casings/machine_casing_vacuum_engine_intake')
        .translationKey('block.tfg.casings.machine_casing_vacuum_engine_intake')
        .soundType('metal')
        .resistance(6).hardness(5)
        .tagBlock('mineable/pickaxe')
        .tagBlock('forge:mineable/wrench')
        .requiresTool(true)
		.mapColor('color_light_gray')

	event.create('tfg:casings/machine_casing_bioculture')
		.translationKey('block.tfg.casings.machine_casing_bioculture')
		.model('tfg:block/casings/machine_casing_bioculture')
		.soundType('copper')
		.hardness(5)
		.resistance(6)
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:mineable/wrench')
		.mapColor('color_red')

	event.create('tfg:casings/machine_casing_bioculture_glass')
		.translationKey('block.tfg.casings.machine_casing_bioculture_glass')
		.model('tfg:block/casings/machine_casing_bioculture_glass')
		.soundType('glass')
		.hardness(5)
		.resistance(6)
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:mineable/wrench')
		.mapColor('color_orange')
		.defaultTranslucent()

	event.create('tfg:casings/bioculture_rotor_primary', 'gtceu:active')
		.translationKey('block.tfg.casings.bioculture_rotor_primary')
		.model('tfg:block/casings/bioculture_rotor_primary')
		.soundType('copper')
		.hardness(5)
		.resistance(6)
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:mineable/wrench')
		.mapColor('color_light_gray')

	event.create('tfg:casings/bioculture_rotor_secondary', 'gtceu:active')
		.translationKey('block.tfg.casings.bioculture_rotor_secondary')
		.model('tfg:block/casings/bioculture_rotor_secondary')
		.soundType('copper')
		.hardness(5)
		.resistance(6)
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:mineable/wrench')
		.mapColor('color_light_gray')

	event.create('tfg:casings/machine_casing_ultraviolet', 'gtceu:active')
		.translationKey('block.tfg.casings.machine_casing_ultraviolet')
		.bloom('tfg:block/casings/machine_casing_ultraviolet')
		.soundType('glass')
		.hardness(5)
		.resistance(6)
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:mineable/wrench')
		.mapColor('color_light_gray')
	
	event.create('tfg:casings/heat_pipe_casing')
		.translationKey('block.tfg.casings.heat_pipe_casing')
		.model('tfg:block/casings/heat_pipe_casing')
		.soundType('copper')
		.hardness(5)
		.resistance(6)
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:mineable/wrench')
		.mapColor('color_black')

	//#endregion
	
	event.create('tfg:titanium_concrete')
		.translationKey('block.tfg.titanium_concrete')
		.model('tfg:block/concrete/titanium_concrete')
		.soundType('stone')
		.mapColor('stone')
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBoth('tfg:titanium_concrete')
		
		
	event.create('tfg:polished_titanium_concrete')
		.translationKey('block.tfg.polished_titanium_concrete')
		.model('tfg:block/concrete/polished_titanium_concrete')
		.soundType('stone')
		.mapColor('stone')
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBoth('tfg:titanium_concrete')
		
	event.create('tfg:titanium_concrete_tile')
		.translationKey('block.tfg.titanium_concrete_tile')
		.model('tfg:block/concrete/titanium_concrete_tile')
		.soundType('stone')
		.mapColor('stone')
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBoth('tfg:titanium_concrete')
		
	event.create('tfg:titanium_concrete_tile_small')
		.translationKey('block.tfg.titanium_concrete_tile_small')
		.model('tfg:block/concrete/titanium_concrete_tile_small')
		.soundType('stone')
		.mapColor('stone')
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBoth('tfg:titanium_concrete')
		
	event.create('tfg:titanium_concrete_bricks')
		.translationKey('block.tfg.titanium_concrete_bricks')
		.model('tfg:block/concrete/titanium_concrete_bricks')
		.soundType('stone')
		.mapColor('stone')
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBoth('tfg:titanium_concrete')
		
	event.create('tfg:titanium_concrete_bricks_small')
		.translationKey('block.tfg.titanium_concrete_bricks_small')
		.model('tfg:block/concrete/titanium_concrete_bricks_small')
		.soundType('stone')
		.mapColor('stone')
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBoth('tfg:titanium_concrete')
		
	event.create('tfg:titanium_concrete_bricks_square')
		.translationKey('block.tfg.titanium_concrete_bricks_square')
		.model('tfg:block/concrete/titanium_concrete_bricks_square')
		.soundType('stone')
		.mapColor('stone')
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBoth('tfg:titanium_concrete')
		

	// #region Decorative vases
	global.MINECRAFT_DYE_NAMES.forEach(color => {
		event.create(`tfg:decorative_vase/generated/${color}`, 'cardinal')
			.model(`tfg:block/decorative_vase/loot_vase_${color}`)
			.soundType('decorated_pot')
			.hardness(0.7)
			.tagBlock('minecraft:mineable/pickaxe')
			.mapColor(`color_${color}`)
			.box(2, 0, 2, 14, 20, 14)
			.fullBlock(false)
			.opaque(false)
			.renderType('cutout')

		event.create(`tfg:decorative_vase/${color}`, 'cardinal')
			.model(`tfg:block/decorative_vase/vase_${color}`)
			.soundType('decorated_pot')
			.hardness(0.7)
			.tagBlock('minecraft:mineable/pickaxe')
			.mapColor(`color_${color}`)
			.box(2, 0, 2, 14, 20, 14)
			.fullBlock(false)
			.opaque(false)
			.renderType('cutout')
			.blockEntity(be => {
				be.attach('tfc:inventory', {
					width: 9,
					height: 1,
					size: size => size.isSmallerThan('large')
				})
				be.rightClickOpensInventory()
			})

		event.create(`tfg:decorative_vase/unfired/${color}`, 'cardinal')
			.model(`tfg:block/decorative_vase/vase_unfired_${color}`)
			.soundType('decorated_pot')
			.hardness(0.7)
			.tagBlock('minecraft:mineable/pickaxe')
			.mapColor(`color_${color}`)
			.box(2, 0, 2, 14, 20, 14)
			.fullBlock(false)
			.opaque(false)
			.renderType('cutout')
	})
	event.create('tfg:decorative_vase', 'cardinal')
		.model('tfg:block/decorative_vase/vase')
		.soundType('decorated_pot')
		.hardness(0.7)
		.tagBlock('minecraft:mineable/pickaxe')
		.mapColor(`color_gray`)
		.box(2, 0, 2, 14, 20, 14)
		.fullBlock(false)
		.opaque(false)
		.renderType('cutout')
		.blockEntity(be => {
			be.attach('tfc:inventory', {
				width: 9,
				height: 1,
				size: size => size.isSmallerThan('large')
			})
			be.rightClickOpensInventory()
		})

	event.create('tfg:decorative_vase/unfired', 'cardinal')
		.model('tfg:block/decorative_vase/vase_unfired')
		.soundType('decorated_pot')
		.hardness(0.7)
		.tagBlock('minecraft:mineable/pickaxe')
		.mapColor(`color_gray`)
		.box(2, 0, 2, 14, 20, 14)
		.fullBlock(false)
		.opaque(false)
		.renderType('cutout')

	// #endregion

	// #region Layer blocks

	event.create('tfg:ash_pile', 'tfg:layer_block')
		.existingItem('tfc:powder/wood_ash')
		.mapColor('color_light_gray')

	event.create('tfg:pile/black_sand', 'tfg:layer_block')
		.existingItem('tfc:sand/black')

	event.create('tfg:pile/brown_sand', 'tfg:layer_block')
		.existingItem('tfc:sand/brown')

	event.create('tfg:pile/green_sand', 'tfg:layer_block')
		.existingItem('tfc:sand/green')

	event.create('tfg:pile/pink_sand', 'tfg:layer_block')
		.existingItem('tfc:sand/pink')

	event.create('tfg:pile/red_sand', 'tfg:layer_block')
		.existingItem('tfc:sand/red')

	event.create('tfg:pile/white_sand', 'tfg:layer_block')
		.existingItem('tfc:sand/white')

	event.create('tfg:pile/yellow_sand', 'tfg:layer_block')
		.existingItem('tfc:sand/yellow')

	event.create('tfg:pile/mars_sand', 'tfg:layer_block')
		.existingItem('ad_astra:mars_sand')

	event.create('tfg:pile/moon_sand', 'tfg:layer_block')
		.existingItem('ad_astra:moon_sand')

	event.create('tfg:pile/venus_sand', 'tfg:layer_block')
		.existingItem('ad_astra:venus_sand')


	// #endregion

	// #region Reconstituted Stone

	event.create(`tfg:rock/stone_wall`, 'wall')
			.soundType(global.STONE_CHARACS.reconstituted.sound)
			.textureAll('minecraft:block/stone')
			.tagBoth('tfg:rock_wall')
			.mapColor(global.STONE_CHARACS.reconstituted.mapColor)
			.tagBlock('minecraft:mineable/pickaxe')
			.fullBlock(true)
			.opaque(true)

	let SHAPES = ['stairs', 'wall']
	SHAPES.forEach(shape => {
		event.create(`tfg:rock/smooth_stone_${shape}`, shape)
			.soundType(global.STONE_CHARACS.reconstituted.sound)
			.textureAll('minecraft:block/smooth_stone')
			.tagBoth(`tfg:rock_${shape}s`.replace(/ss/g, 's'))
			.mapColor(global.STONE_CHARACS.reconstituted.mapColor)
			.tagBlock('minecraft:mineable/pickaxe')
			.fullBlock(true)
			.opaque(true)
	})

	SHAPES = ['stairs', 'slab', 'wall']
	SHAPES.forEach(shape => {
		event.create(`tfg:rock/cracked_bricks_stone_${shape}`, shape)
			.soundType(global.STONE_CHARACS.reconstituted.sound)
			.textureAll('minecraft:block/cracked_stone_bricks')
			.tagBoth(`tfg:brick_${shape}s`.replace(/ss/g, 's'))
			.mapColor(global.STONE_CHARACS.reconstituted.mapColor)
			.tagBlock('minecraft:mineable/pickaxe')
			.fullBlock(true)
			.opaque(true)
	})

	// #endregion Reconstituted Stone
  
  // #region Deprecated

	event.create('treetap:tap')
		.requiresTool(false)
		.textureAll('tfg:item/deprecated')

	event.create('tfcea:refrigerator')
		.requiresTool(false)
		.textureAll('tfg:item/deprecated')

	// #endregion
}
