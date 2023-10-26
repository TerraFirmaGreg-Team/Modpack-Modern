// priority: 0

const registerTagPrefixes = (event) => {
    event.create('poor_raw')
        .unificationEnabled(true)
        .generateItem(true)
        .materialIconType(GTMaterialIconType.rawOre)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .defaultTagPath(TagPrefix.LoaderType.FORGE, "poor_raw_materials/%s")
        .register();
    
    event.create('rich_raw')
        .unificationEnabled(true)
        .generateItem(true)
        .materialIconType(GTMaterialIconType.rawOre)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .defaultTagPath(TagPrefix.LoaderType.FORGE, "rich_raw_materials/%s")
        .register();
}