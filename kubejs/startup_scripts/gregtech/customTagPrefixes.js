// priority: 0

const registerTagPrefixes = (event) => {
    event.create('poor_raw')
        .unificationEnabled(true)
        .generateItem(true)
        .materialIconType(GTMaterialIconType.rawOre)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .register();
    
    event.create('rich_raw')
        .unificationEnabled(true)
        .generateItem(true)
        .materialIconType(GTMaterialIconType.rawOre)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .register();
}