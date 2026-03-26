// startup_scripts/bedrock_fluid_climate.js
"use strict";

const TFGBedrockFluidRegistry = Java.loadClass("su.terrafirmagreg.core.common.data.tfgt.worldgen.TFGBedrockFluidRegistry")
const ClimateWeightModifier = Java.loadClass("su.terrafirmagreg.core.common.data.tfgt.worldgen.ClimateWeightModifier")
const ClimateMode = Java.loadClass("su.terrafirmagreg.core.common.data.tfgt.worldgen.ClimateWeightModifier$Mode")
const ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation")
const ResourceKey = Java.loadClass("net.minecraft.resources.ResourceKey")
const Registries = Java.loadClass("net.minecraft.core.registries.Registries")
const HashSet = Java.loadClass("java.util.HashSet")

// ── HELPERS ───────────────────────────────────────────────────
const rl = id => ResourceLocation.fromNamespaceAndPath("tfg", id)
const biomeKey = id => ResourceKey.create(Registries.BIOME, new ResourceLocation(id))
const biomeSet = ids => {
    const set = new HashSet()
    ids.forEach(id => set.add(biomeKey(id)))
    return set
}

// ── API ───────────────────────────────────────────────────────

// Add a fluid vein dependent of average temperature
const temperature = (veinId, min, max, weight) =>
    TFGBedrockFluidRegistry.addClimate(rl(veinId),
        new ClimateWeightModifier(ClimateMode.TEMPERATURE, min, max, weight))

// Add a fluid vein dependent of rainfall
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

// ── TRUE OCEAN BIOMES ─────────────────────────────────────────
// Used by climateAndBiome (tags not supported here)
const TRUE_OCEAN_BIOMES = [
    "tfg:earth/ocean",
    "tfg:earth/ocean_reef",
    "tfg:earth/deep_ocean",
    "tfg:earth/deep_ocean_trench",
    "tfg:earth/sunken_shield_volcano",
]
// =========================================================
// NATURAL GAS
// =========================================================

// Surface Indicator - Wet/Cold Climate
temperatureAndRainfall("natural_gas_surface_indicator", -20, 0, 300, 500, 50)

// Ocean Biomes - Cold/Wet Climate
climateAndBiome("natural_gas_ocean", -20, 10, 200, 500, TRUE_OCEAN_BIOMES, 50)

// =========================================================
// LIGHT OIL
// =========================================================

// Spout - Hot/Dry Climate
temperatureAndRainfall("light_oil_spout_hot", 20, 30, 0, 50, 50)

// Spout - Ocean Biomes
climateAndBiome("light_oil_spout_ocean", 15, 30, 0, 100, TRUE_OCEAN_BIOMES, 100)

// =========================================================
// OIL
// =========================================================

// Spout - Hot/Dry Climate
temperatureAndRainfall("oil_spout_hot", 20, 30, 0, 50, 30)

// Spout - Ocean Biomes
climateAndBiome("oil_spout_ocean", 15, 30, 0, 100, TRUE_OCEAN_BIOMES, 30)

// =========================================================
// HEAVY OIL
// =========================================================

// Spout - Hot/Dry Climate
temperatureAndRainfall("heavy_oil_spout_hot", 20, 30, 0, 50, 20)

// Spout - Ocean Biomes
climateAndBiome("heavy_oil_spout_ocean", 15, 30, 0, 100, TRUE_OCEAN_BIOMES, 20)

// =========================================================
// RAW OIL
// =========================================================

// Spout - Hot/Dry Climate
temperatureAndRainfall("raw_oil_spout_hot", 20, 30, 0, 50, 30)

// Spout - Ocean Biomes
climateAndBiome("raw_oil_spout_ocean", 15, 30, 0, 100, TRUE_OCEAN_BIOMES, 30)