// priority: 0

GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    event.create('tfc_claystone', 'ore')
        .stateSupplier(() => Block.getBlock('tfc:rock/raw/claystone').defaultBlockState())
        .sound(SoundType.STONE)
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
})

