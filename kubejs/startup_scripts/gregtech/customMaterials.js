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
}