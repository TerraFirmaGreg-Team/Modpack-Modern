// priority: 0

const registerGTCEuTagPrefixes = (event) => {

	event.create('blackstone', 'ore')
		.stateSupplier(() => Block.getBlock('minecraft:blackstone').defaultBlockState())
		.baseModelLocation('minecraft:block/blackstone')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(ItemGenerationCondition.hasOreProperty)


	event.create('dripstone', 'ore')
		.stateSupplier(() => Block.getBlock('minecraft:dripstone_block').defaultBlockState())
		.baseModelLocation('minecraft:block/dripstone_block')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(ItemGenerationCondition.hasOreProperty)

	// TODO: Delete this, fix it in tfg-core instead

	event.create('deepslate', 'ore')
		.stateSupplier(() => Block.getBlock('minecraft:deepslate').defaultBlockState())
		.baseModelLocation('minecraft:block/deepslate')
		.unificationEnabled(true)
		.materialIconType(GTMaterialIconType.ore)
		.generationCondition(ItemGenerationCondition.hasOreProperty)
}