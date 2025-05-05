function registerTFGSpaceBlocks(event) {

	const $Blocks = Java.loadClass('net.minecraft.world.level.block.Blocks')
	const $Properties = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour$Properties')
	const $SproutsBlock = Java.loadClass('net.minecraft.world.level.block.NetherSproutsBlock')

	// #region Moon blocks

	event.createCustom(`tfg:lunar_warped_roots`, () => new $SproutsBlock($Properties.copy($Blocks.DEAD_TUBE_CORAL_BLOCK)))
	event.createCustom(`tfg:lunar_sprouts`, () => new $SproutsBlock( $Properties.copy($Blocks.DEAD_TUBE_CORAL_BLOCK)))

	event.create('tfg:rock/hardened_moon_stone')
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

	event.create('tfg:rock/hardened_moon_deepslate')
		.stoneSoundType()
		.requiresTool(true)
		.item(item => {
			item.modelJson({ parent: 'ad_astra:item/moon_deepslate' })
		})
		.tagBlock('tfc:can_carve')
		.tagBoth('forge:stone')
		.tagBoth('tfc:rock/hardened')
		.tagBlock('minecraft:mineable/pickaxe')
		.mapColor('terracotta_cyan')
		.fullBlock(true)
		.opaque(true)

	event.create('tfg:loose/moon_stone', 'tfc:loose_rock')
		.itemTexture('tfg:item/loose/moon_stone')
		.rockTypeModel('igneous_extrusive')

	event.create('tfg:loose/moon_deepslate', 'tfc:loose_rock')
		.itemTexture('tfg:item/loose/moon_deepslate')
		.rockTypeModel('igneous_extrusive')

	// #endregion

	// #region Mars blocks

	event.create('tfg:rock/hardened_mars_stone')
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

	event.create('tfg:loose/mars_stone', 'tfc:loose_rock')
		.itemTexture('tfg:item/loose/mars_stone')
		.rockTypeModel('sedimentary')

}