// priority: 0

const registerTagPrefixes = (event) => {
    event.create('poor_raw_ore')
        .unificationEnabled(true)
        .generateItem(true)
        .materialIconType(GTMaterialIconType.rawOre)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .register();
    
    event.create('rich_raw_ore')
        .unificationEnabled(true)
        .generateItem(true)
        .materialIconType(GTMaterialIconType.rawOre)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .register();
}