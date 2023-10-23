const $OreProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty")
const $OrePropertyKey = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey")

const registerMaterials = (event) => {
    GTMaterials.Bismuth.setProperty($OrePropertyKey.ORE, new $OreProperty());
    //GTMaterials.Gypsum.setProperty($OrePropertyKey.ORE, new $OreProperty());
    GTMaterials.Borax.setProperty($OrePropertyKey.ORE, new $OreProperty());

    event.create('sylvite')
        .dust()
        .ore()
        .color(0x839689)
        .iconSet(GTMaterialIconSet.DULL)
}