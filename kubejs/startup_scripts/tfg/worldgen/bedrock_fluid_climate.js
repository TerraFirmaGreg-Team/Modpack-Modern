// startup_scripts/bedrock_fluid_climate.js
"use strict";

const TFGBedrockFluidRegistry = Java.loadClass("su.terrafirmagreg.core.common.data.tfgt.worldgen.TFGBedrockFluidRegistry")
const ClimateWeightModifier = Java.loadClass("su.terrafirmagreg.core.common.data.tfgt.worldgen.ClimateWeightModifier")
const ClimateMode = Java.loadClass("su.terrafirmagreg.core.common.data.tfgt.worldgen.ClimateWeightModifier$Mode")
const ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation")
const ResourceKey = Java.loadClass("net.minecraft.resources.ResourceKey")
const Registries = Java.loadClass("net.minecraft.core.registries.Registries")
const HashSet = Java.loadClass("java.util.HashSet")

// Helpers
const rl = id => ResourceLocation.fromNamespaceAndPath("tfg", id)
const biomeKey = id => ResourceKey.create(Registries.BIOME, new ResourceLocation(id))
const biomeSet = ids => {
    const set = new HashSet()
    ids.forEach(id => set.add(biomeKey(id)))
    return set
}

// Api

// Spawn fluid vein dependent of average temperature
const temperature = (veinId, min, max, weight) =>
    TFGBedrockFluidRegistry.addClimate(rl(veinId),
        new ClimateWeightModifier(ClimateMode.TEMPERATURE, min, max, weight))

// Spawn fluid vein dependent of rainfall
const rainfall = (veinId, min, max, weight) =>
    TFGBedrockFluidRegistry.addClimate(rl(veinId),
        new ClimateWeightModifier(ClimateMode.RAINFALL, min, max, weight))

// Add a fluid vein dependent of average temperature AND rainfall (both need to be true)
const temperatureAndRainfall = (veinId, tempMin, tempMax, rainMin, rainMax, weight) =>
    TFGBedrockFluidRegistry.addClimate(rl(veinId),
        ClimateWeightModifier.combined(tempMin, tempMax, rainMin, rainMax, weight))

// Add a fluid vein dependent of average temperature AND rainfall AND biome (all of them need to be true)
const climateAndBiome = (veinId, tempMin, tempMax, rainMin, rainMax, biomeIds, weight) =>
    TFGBedrockFluidRegistry.addClimate(rl(veinId),
        ClimateWeightModifier.combinedWithBiome(
            tempMin, tempMax, rainMin, rainMax, biomeSet(biomeIds), weight))

// Gas
temperature("natural_gas_cold_region_indicator", -20, -5, 300)
// rainfall("natural_gas_cold_region_indicator", 50, 200, 15)

// Oil
temperatureAndRainfall("heavy_oil_spout",  20, 50, 0, 50, 400)
temperatureAndRainfall("raw_oil_spout",    20, 50, 0, 50, 400)
temperatureAndRainfall("light_oil_spout",  20, 50, 0, 50, 400)
temperatureAndRainfall("oil_spout",        20, 50, 0, 50, 400)

// Muddy Watter
// rainfall("muddy_water", 300, 500, 50)

// Spring Water
climateAndBiome("spring_water", -20, 50, 0, 400, ["tfg:earth/extinct_shield_volcano", "tfg:earth/ancient_shield_volcano",], 4000)