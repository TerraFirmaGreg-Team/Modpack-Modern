const registerTFGMaterials = (event) =>
{
    event.create('hardwood')
        .dust()
        .flags(GTMaterialFlags.FLAMMABLE)
        .iconSet(GTMaterialIconSet.FINE)
        .color('0x7a5225')
        .secondaryColor('0x7a5225')

    event.create('thermochemically_treated_hardwood')
        .dust()
        .flags(GTMaterialFlags.FLAMMABLE)
        .iconSet(GTMaterialIconSet.FINE)
        .color('0x52482c')
        .secondaryColor('0x52482c')

    event.create('lactose')
        .dust()
        .iconSet(GTMaterialIconSet.FINE)
        .color('0xede8da')
        .secondaryColor('0xeddcad')
}