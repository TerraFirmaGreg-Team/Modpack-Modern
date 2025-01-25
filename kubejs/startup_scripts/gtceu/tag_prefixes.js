// priority: 0

const registerGTCEuTagPrefixes = (event) => {
	
	event.create('anorthite', 'ore')
        .stateSupplier(() => Block.getBlock('tfg:raw_anorthite').defaultBlockState())
        .baseModelLocation('ad_astra:block/moon_stone')
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)

    event.create('dunite', 'ore')
        .stateSupplier(() => Block.getBlock('tfg:raw_dunite').defaultBlockState())
        .baseModelLocation('ad_astra:block/moon_deepslate')
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
}