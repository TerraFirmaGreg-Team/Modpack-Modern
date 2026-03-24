// startup_scripts/bedrock_fluid_climate.js
"use strict";

const TFGBedrockFluidRegistry = Java.loadClass(
    "su.terrafirmagreg.core.common.data.tfgt.worldgen.TFGBedrockFluidRegistry")
const ClimateWeightModifier = Java.loadClass(
    "su.terrafirmagreg.core.common.data.tfgt.worldgen.ClimateWeightModifier")
const ClimateMode = Java.loadClass(
    "su.terrafirmagreg.core.common.data.tfgt.worldgen.ClimateWeightModifier$Mode")
const ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation")

function rl(id) {
    return ResourceLocation.fromNamespaceAndPath("tfg", id)
}

function temperature(veinId, min, max, weight) {
    TFGBedrockFluidRegistry.addClimate(rl(veinId),
        new ClimateWeightModifier(ClimateMode.TEMPERATURE, min, max, weight))
}

function rainfall(veinId, min, max, weight) {
    TFGBedrockFluidRegistry.addClimate(rl(veinId),
        new ClimateWeightModifier(ClimateMode.RAINFALL, min, max, weight))
}

function temperatureAndRainfall(veinId, tempMin, tempMax, rainMin, rainMax, weight) {
    TFGBedrockFluidRegistry.addClimate(rl(veinId),
        ClimateWeightModifier.combined(tempMin, tempMax, rainMin, rainMax, weight))
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