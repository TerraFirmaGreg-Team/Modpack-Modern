function registerTFGSpaceBlocks(event) {

	const $Blocks = Java.loadClass('net.minecraft.world.level.block.Blocks')
	const $Properties = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour$Properties')
	const $SproutsBlock = Java.loadClass('net.minecraft.world.level.block.NetherSproutsBlock')

	// #region Moon blocks

	event.createCustom(`tfg:lunar_warped_roots`, () => new $SproutsBlock($Properties.copy($Blocks.DEAD_TUBE_CORAL_BLOCK)))
	event.createCustom(`tfg:lunar_sprouts`, () => new $SproutsBlock( $Properties.copy($Blocks.DEAD_TUBE_CORAL_BLOCK)))

	event.create('tfg:rock/raw_anorthosite')
		.stoneSoundType()
		.requiresTool(true)
		.item(item => {
			item.modelJson({ parent: 'ad_astra:item/moon_stone' })
		})
		.tagBlock('tfc:can_carve')
		.tagBoth('forge:stone')
		.tagBoth('tfc:rock/raw')
		.tagBlock('minecraft:mineable/pickaxe')
		.mapColor('terracotta_cyan')
		.fullBlock(true)
		.opaque(true)

	event.create('tfg:rock/hardened_anorthosite')
		.stoneSoundType()
		.requiresTool(true)
		.item(item => {
			item.modelJson({ parent: 'ad_astra:item/moon_stone' })
		})
		.tagBlock('tfc:can_carve')
		.tagBoth('forge:stone')
		.tagBoth('tfc:rock/hardened')
		.tagBlock('minecraft:mineable/pickaxe')
		.mapColor('terracotta_cyan')
		.fullBlock(true)
		.opaque(true)

	event.create('tfg:rock/raw_basanite')
		.stoneSoundType()
		.requiresTool(true)
		.item(item => {
			item.modelJson({ parent: 'ad_astra:item/moon_deepslate' })
		})
		.tagBlock('tfc:can_carve')
		.tagBoth('forge:stone')
		.tagBoth('tfc:rock/raw')
		.tagBlock('minecraft:mineable/pickaxe')
		.mapColor('terracotta_cyan')
		.fullBlock(true)
		.opaque(true)

	event.create('tfg:loose/anorthosite', 'tfc:loose_rock')
		.itemTexture('tfg:item/loose_anorthosite')
		.rockTypeModel('igneous_intrusive')

	// #endregion

	// #region Mars blocks

	event.create('tfg:rock/raw_syenite')
		.stoneSoundType()
		.requiresTool(true)
		.item(item => {
			item.modelJson({ parent: 'ad_astra:item/mars_stone' })
		})
		.tagBlock('tfc:can_carve')
		.tagBoth('forge:stone')
		.tagBoth('tfc:rock/raw')
		.tagBlock('minecraft:mineable/pickaxe')
		.mapColor('terracotta_orange')
		.fullBlock(true)
		.opaque(true)

	event.create('tfg:rock/hardened_syenite')
		.stoneSoundType()
		.requiresTool(true)
		.item(item => {
			item.modelJson({ parent: 'ad_astra:item/mars_stone' })
		})
		.tagBlock('tfc:can_carve')
		.tagBoth('forge:stone')
		.tagBoth('tfc:rock/hardened')
		.tagBlock('minecraft:mineable/pickaxe')
		.mapColor('terracotta_orange')
		.fullBlock(true)
		.opaque(true)

	event.create('tfg:loose/syenite', 'tfc:loose_rock')
		.itemTexture('tfg:item/loose_syenite')
		.rockTypeModel('igneous_intrusive')

}