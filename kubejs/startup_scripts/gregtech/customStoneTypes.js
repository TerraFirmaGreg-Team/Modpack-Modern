// priority: 0

const registerStoneTypes = (event) => {
    global.allTFCStoneTypeNames.forEach(stoneTypeName => {
        event.create("tfc_" + stoneTypeName, 'ore')
            .stateSupplier(() => Block.getBlock('tfc:rock/raw/' + stoneTypeName).defaultBlockState())
            .sound(SoundType.STONE)
            .unificationEnabled(true)
            .materialIconType(GTMaterialIconType.ore)
            .generationCondition(ItemGenerationCondition.hasOreProperty)
    });
}

