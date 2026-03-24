// startup_scripts/bedrock_fluid_climate.js
"use strict";

const TFGBedrockFluidRegistry = Java.loadClass(
    "su.terrafirmagreg.core.common.data.tfgt.worldgen.TFGBedrockFluidRegistry")
const ClimateWeightModifier = Java.loadClass(
    "su.terrafirmagreg.core.common.data.tfgt.worldgen.ClimateWeightModifier")
const ClimateMode = Java.loadClass(
    "su.terrafirmagreg.core.common.data.tfgt.worldgen.ClimateWeightModifier$Mode")
const ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation")
const ResourceKey = Java.loadClass("net.minecraft.resources.ResourceKey")
const Registries = Java.loadClass("net.minecraft.core.registries.Registries")

function rl(id) {
    return ResourceLocation.fromNamespaceAndPath("tfg", id)
}

// Add a fluid vein dependent of average temperature
function temperature(veinId, min, max, weight) {
    TFGBedrockFluidRegistry.addClimate(rl(veinId),
        new ClimateWeightModifier(ClimateMode.TEMPERATURE, min, max, weight))
}

// Add a fluid vein dependent of rainfall
function rainfall(veinId, min, max, weight) {
    TFGBedrockFluidRegistry.addClimate(rl(veinId),
        new ClimateWeightModifier(ClimateMode.RAINFALL, min, max, weight))
}

// Add a fluid vein dependent of average temperature AND rainfall (both need to be true)
function temperatureAndRainfall(veinId, tempMin, tempMax, rainMin, rainMax, weight) {
    TFGBedrockFluidRegistry.addClimate(rl(veinId),
        ClimateWeightModifier.combined(tempMin, tempMax, rainMin, rainMax, weight))
}

// Add a fluid vein dependent of average temperature AND rainfall AND biome (all of them need to be true)
function climateAndBiome(veinId, tempMin, tempMax, rainMin, rainMax, biomeIds, weight) {
    const HashSet = Java.loadClass("java.util.HashSet")
    const biomeSet = new HashSet()
    biomeIds.forEach(id => {
        const parts = id.split(":")
        biomeSet.add(ResourceKey.create(
            Registries.BIOME,
            ResourceLocation.fromNamespaceAndPath(parts[0], parts[1])
        ))
    })
    TFGBedrockFluidRegistry.addClimate(rl(veinId),
        ClimateWeightModifier.combinedWithBiome(
            tempMin, tempMax, rainMin, rainMax, biomeSet, weight))
}

// Gas Veins
temperature("natural_gas_cold_region_indicator", -20, -5, 300)
// rainfall("natural_gas_cold_region_indicator",  50, 200, 15)

// Oil Veins
temperatureAndRainfall("heavy_oil_spout",  20, 50,  0, 50, 400)
temperatureAndRainfall("raw_oil_spout",    20, 50,  0, 50, 400)
temperatureAndRainfall("light_oil_spout",  20, 50,  0, 50, 400)
temperatureAndRainfall("oil_spout",        20, 50,  0, 50, 400)

// Muddy Water
// rainfall("muddy_water", 300, 500, 50)

// Spring Water
climateAndBiome("spring_water", -20, 50, 0, 400, ["tfg:earth/extinct_shield_volcano", "tfg:earth/ancient_shield_volcano"], 4000)