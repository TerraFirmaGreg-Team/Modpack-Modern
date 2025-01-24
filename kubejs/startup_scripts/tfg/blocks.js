const registerTFGBlocks = (event) => {

	event.create('tfg:artificial_end_portal_frame')
		.stoneSoundType()
		.tagBlock('minecraft:mineable/pickaxe')
		.requiresTool(true)
		.fullBlock(true)
		.item(item => {
			item.modelJson({ parent: 'minecraft:block/end_portal_frame' })
		})

	const $ClusterBlock = Java.loadClass('net.minecraft.world.level.block.AmethystClusterBlock')
	const $Blocks = Java.loadClass('net.minecraft.world.level.block.Blocks')
	const $Properties = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour$Properties')

	event.createCustom(`tfg:lunar_warped_roots`, () => new $ClusterBlock(6, 2, $Properties.copy($Blocks.DEAD_TUBE_CORAL_BLOCK)))
	event.createCustom(`tfg:lunar_sprouts`, () => new $ClusterBlock(4, 2, $Properties.copy($Blocks.DEAD_TUBE_CORAL_BLOCK)))
}