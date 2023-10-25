const $OreProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty")
const $PropertyKey = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey")

const registerMaterials = (event) => {
    GTMaterials.Bismuth.setProperty($PropertyKey.ORE, new $OreProperty());
    GTMaterials.Borax.setProperty($PropertyKey.ORE, new $OreProperty());

    event.create('sylvite')
        .dust()
        .ore()
        .color(0x839689)
        .iconSet(GTMaterialIconSet.DULL)

    // StoneType materials 
    // todo: add flags(decomposition_by_centrifuging)
    // todo: add colors
    // todo: add components
    event.create('gabbro').dust().color(0x839689).iconSet(GTMaterialIconSet.ROUGH)
    event.create('shale').dust().color(0x839689).iconSet(GTMaterialIconSet.ROUGH)
    event.create('claystone').dust().color(0x839689).iconSet(GTMaterialIconSet.ROUGH)
    event.create('limestone').dust().color(0x839689).iconSet(GTMaterialIconSet.ROUGH)
    event.create('conglomerate').dust().color(0x839689).iconSet(GTMaterialIconSet.ROUGH)
    event.create('dolomite').dust().color(0x839689).iconSet(GTMaterialIconSet.ROUGH)
    event.create('chert').dust().color(0x839689).iconSet(GTMaterialIconSet.ROUGH)
    event.create('chalk').dust().color(0x839689).iconSet(GTMaterialIconSet.ROUGH)
    event.create('rhyolite').dust().color(0x839689).iconSet(GTMaterialIconSet.ROUGH)
    event.create('dacite').dust().color(0x839689).iconSet(GTMaterialIconSet.ROUGH)
    event.create('slate').dust().color(0x839689).iconSet(GTMaterialIconSet.ROUGH)
    event.create('phyllite').dust().color(0x839689).iconSet(GTMaterialIconSet.ROUGH)
    event.create('schist').dust().color(0x839689).iconSet(GTMaterialIconSet.ROUGH)
    event.create('gneiss').dust().color(0x839689).iconSet(GTMaterialIconSet.ROUGH) 
}