"use strict";

function registerTFGVaseBlocks(event) {

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

}