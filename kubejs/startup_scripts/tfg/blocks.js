
const registerTFGBlocks = (event) => {

	registerTFGNetherBlocks(event)
	registerTFGSpaceBlocks(event)
	registerTFGSupportBlocks(event)
    registerTFGCrops(event)

	event.create('tfg:artificial_end_portal_frame')
		.stoneSoundType()
		.tagBlock('minecraft:mineable/pickaxe')
		.requiresTool(true)
		.fullBlock(true)
		.item(item => {
			item.modelJson({ parent: 'minecraft:block/end_portal_frame' })
		})

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

	// #region Machine Casings

	global.TFG_MACHINE_CASINGS.forEach(type => {
		event.create(`tfg:casings/${type}`)
			.translationKey(`block.tfg.casings.${type}`)
			.model(`tfg:block/casings/${type}`)
			.soundType('copper')
			.hardness(5)
			.resistance(6)
			.tagBlock('minecraft:mineable/pickaxe')
			.mapColor('color_light_gray')
	})

	//#endregion

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


	// #region Deprecated

	event.create('treetap:tap')
		.requiresTool(false)
		.textureAll('tfg:item/deprecated')

	event.create('tfcea:refrigerator')
		.requiresTool(false)
		.textureAll('tfg:item/deprecated')

	// #endregion
}
