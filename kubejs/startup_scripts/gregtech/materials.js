const $OreProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty")
const $OrePropertyKey = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey")

GTCEuStartupEvents.registry('gtceu:material', event => {
    //GTMaterials.Bismuth.setProperty($OrePropertyKey.ORE, new $OreProperty());
})