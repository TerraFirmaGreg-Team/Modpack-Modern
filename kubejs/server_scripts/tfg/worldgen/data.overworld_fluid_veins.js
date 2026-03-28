// server_scripts/bedrock_fluid_veins.js
"use strict";

function registerTFGOverworldBedrockFluidVeins(event) {
/*
    // REMOVE DEFAULTS
    event.remove('gtceu:heavy_oil_deposit')
    event.remove('gtceu:light_oil_deposit')
    event.remove('gtceu:natural_gas_deposit')
    event.remove('gtceu:oil_deposit')
    event.remove('gtceu:raw_oil_deposit')
    event.remove('gtceu:salt_water_deposit')

    // =========================================================
    // WATER
    // =========================================================

    // Common — everywhere except salt water, true ocean, dry biomes
    // Can't exclude so make it as : is_normal + is_mountain + is_cold + is_karst + is_shore_island + is_fresh_water
    
	event.add('tfg:water_common', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('minecraft:water').fluid)
        vein.weight(0)
        vein.minimumYield(100)
        vein.maximumYield(200)
        vein.depletionAmount(1)
        vein.depletionChance(100)
        vein.depletedYield(100)
        vein.biomeTag(15, 'tfg:earth/is_normal')
        vein.biomeTag(15, 'tfg:earth/is_mountain')
        vein.biomeTag(15, 'tfg:earth/is_cold')
        vein.biomeTag(15, 'tfg:earth/is_karst')
        vein.biomeTag(15, 'tfg:earth/is_shore_island')
        vein.biomeTag(15, 'tfg:earth/is_fresh_water')
    })

    // River
    event.add('tfg:water_river', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('minecraft:water').fluid)
        vein.weight(0)
        vein.minimumYield(100)
        vein.maximumYield(500)
        vein.depletionAmount(1)
        vein.depletionChance(100)
        vein.depletedYield(100)
        vein.biomeTag(500, 'tfg:earth/is_river')
    })

    // =========================================================
    // SEA WATER
    // =========================================================

    // Ocean + Salt Water biomes and manually add salt_flats as it's not part of the biome tag
    event.add('tfg:sea_water', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('tfc:salt_water').fluid)
        vein.weight(0)
        vein.minimumYield(50)
        vein.maximumYield(500)
        vein.depletionAmount(1)
        vein.depletionChance(100)
        vein.depletedYield(25)
        vein.biomeTag(100, 'tfg:earth/is_true_ocean')
        vein.biomeTag(100, 'tfg:earth/is_salt_water')
        vein.biomes(100, 'tfg:earth/salt_flats')
    })

    // =========================================================
    // MUDDY WATER - Mostly useless for now but could be used to make stone dusts from any stone
    // =========================================================

    // Common — everywhere except true ocean, shore/island, dry biomes
    // Can't exclude so make it as : is_normal + is_mountain + is_cold + is_karst + is_fresh_water + is_volcanic + is_river
    event.add('tfg:muddy_water', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('tfg:muddy_water').fluid)
        vein.weight(0)
        vein.minimumYield(5)
        vein.maximumYield(100)
        vein.depletionAmount(1)
        vein.depletionChance(100)
        vein.depletedYield(10)
        vein.biomeTag(5, 'tfg:earth/is_normal')
        vein.biomeTag(5, 'tfg:earth/is_mountain')
        vein.biomeTag(5, 'tfg:earth/is_cold')
        vein.biomeTag(5, 'tfg:earth/is_karst')
        vein.biomeTag(5, 'tfg:earth/is_fresh_water')
        vein.biomeTag(5, 'tfg:earth/is_volcanic')
        vein.biomeTag(5, 'tfg:earth/is_river')
    })

    // =========================================================
    // SPRING WATER
    // =========================================================

    // Volcanic biomes only
    event.add('tfg:spring_water', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('tfc:spring_water').fluid)
        vein.weight(0)
        vein.minimumYield(100)
        vein.maximumYield(200)
        vein.depletionAmount(1)
        vein.depletionChance(100)
        vein.depletedYield(5)
        vein.biomeTag(20, 'tfg:earth/is_volcanic')
    })

    // =========================================================
    // LIGHT OIL
    // =========================================================

    // Spout - Hot/Dry Climate — climate only
    // temperatureAndRainfall managed in bedrock_fluid_climate.js
    event.add('tfg:light_oil_spout_hot', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('gtceu:oil_light').fluid)
        vein.weight(0)
        vein.minimumYield(175)
        vein.maximumYield(300)
        vein.depletionAmount(1)
        vein.depletionChance(100)
        vein.depletedYield(25)
    })

    // Spout - Ocean Biomes — climate + biomes managed in bedrock_fluid_climate.js
    event.add('tfg:light_oil_spout_ocean', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('gtceu:oil_light').fluid)
        vein.weight(0)
        vein.minimumYield(150)
        vein.maximumYield(250)
        vein.depletionAmount(1)
        vein.depletionChance(100)
        vein.depletedYield(20)
    })

    // Common — no conditions
    event.add('tfg:light_oil_common', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('gtceu:oil_light').fluid)
        vein.weight(15)
        vein.minimumYield(10)
        vein.maximumYield(30)
        vein.depletionAmount(10)
        vein.depletionChance(100)
        vein.depletedYield(0)
    })

    // =========================================================
    // OIL
    // =========================================================

    // Spout - Hot/Dry Climate — climate only
    // temperatureAndRainfall managed in bedrock_fluid_climate.js
    event.add('tfg:oil_spout_hot', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('gtceu:oil').fluid)
        vein.weight(0)
        vein.minimumYield(175)
        vein.maximumYield(300)
        vein.depletionAmount(1)
        vein.depletionChance(100)
        vein.depletedYield(20)
    })

    // Spout - Ocean Biomes — climate + biomes managed in bedrock_fluid_climate.js
    event.add('tfg:oil_spout_ocean', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('gtceu:oil').fluid)
        vein.weight(0)
        vein.minimumYield(150)
        vein.maximumYield(250)
        vein.depletionAmount(1)
        vein.depletionChance(100)
        vein.depletedYield(15)
    })

    // Common — no conditions
    event.add('tfg:oil_common', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('gtceu:oil').fluid)
        vein.weight(10)
        vein.minimumYield(5)
        vein.maximumYield(15)
        vein.depletionAmount(10)
        vein.depletionChance(100)
        vein.depletedYield(0)
    })

    // =========================================================
    // HEAVY OIL
    // =========================================================

    // Spout - Hot/Dry Climate — climate only
    // temperatureAndRainfall managed in bedrock_fluid_climate.js
    event.add('tfg:heavy_oil_spout_hot', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('gtceu:oil_heavy').fluid)
        vein.weight(0)
        vein.minimumYield(150)
        vein.maximumYield(250)
        vein.depletionAmount(1)
        vein.depletionChance(100)
        vein.depletedYield(20)
    })

    // Spout - Ocean Biomes — climate + biomes managed in bedrock_fluid_climate.js
    event.add('tfg:heavy_oil_spout_ocean', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('gtceu:oil_heavy').fluid)
        vein.weight(0)
        vein.minimumYield(125)
        vein.maximumYield(200)
        vein.depletionAmount(1)
        vein.depletionChance(100)
        vein.depletedYield(15)
    })

    // Common — no conditions
    event.add('tfg:heavy_oil_common', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('gtceu:oil_heavy').fluid)
        vein.weight(5)
        vein.minimumYield(5)
        vein.maximumYield(10)
        vein.depletionAmount(10)
        vein.depletionChance(100)
        vein.depletedYield(0)
    })

    // =========================================================
    // RAW OIL
    // =========================================================

    // Spout - Hot/Dry Climate — climate only
    // temperatureAndRainfall managed in bedrock_fluid_climate.js
    event.add('tfg:raw_oil_spout_hot', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('gtceu:oil_medium').fluid)
        vein.weight(0)
        vein.minimumYield(200)
        vein.maximumYield(350)
        vein.depletionAmount(1)
        vein.depletionChance(100)
        vein.depletedYield(20)
    })

    // Spout - Ocean Biomes — climate + biomes managed in bedrock_fluid_climate.js
    event.add('tfg:raw_oil_spout_ocean', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('gtceu:oil_medium').fluid)
        vein.weight(0)
        vein.minimumYield(150)
        vein.maximumYield(250)
        vein.depletionAmount(1)
        vein.depletionChance(100)
        vein.depletedYield(15)
    })

    // Common — no conditions
    event.add('tfg:raw_oil_common', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('gtceu:oil_medium').fluid)
        vein.weight(10)
        vein.minimumYield(5)
        vein.maximumYield(15)
        vein.depletionAmount(10)
        vein.depletionChance(100)
        vein.depletedYield(0)
    })

    // =========================================================
    // NATURAL GAS
    // =========================================================

    // Surface Indicator - Wet/Cold Climate — climate only
    // temperature("natural_gas_surface_indicator", -20, 0, 50) managed in bedrock_fluid_climate.js
    event.add('tfg:natural_gas_surface_indicator', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('gtceu:natural_gas').fluid)
        vein.weight(0)
        vein.minimumYield(150)
        vein.maximumYield(300)
        vein.depletionAmount(1)
        vein.depletionChance(100)
        vein.depletedYield(40)
    })

    // Ocean Biomes — climate + biomes managed in bedrock_fluid_climate.js
    event.add('tfg:natural_gas_ocean', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('gtceu:natural_gas').fluid)
        vein.weight(0)
        vein.minimumYield(100)
        vein.maximumYield(250)
        vein.depletionAmount(1)
        vein.depletionChance(100)
        vein.depletedYield(10)
    })

    // Common — no conditions
    event.add('tfg:natural_gas_common', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('gtceu:natural_gas').fluid)
        vein.weight(10)
        vein.minimumYield(5)
        vein.maximumYield(15)
        vein.depletionAmount(10)
        vein.depletionChance(100)
        vein.depletedYield(0)
    })

    // =========================================================
    // LAVA
    // =========================================================

    // Volcanic biomes
    event.add('tfg:lava_volcanic', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('minecraft:lava').fluid)
        vein.weight(0)
        vein.minimumYield(50)
        vein.maximumYield(100)
        vein.depletionAmount(10)
        vein.depletionChance(100)
        vein.depletedYield(0)
        vein.biomeTag(20, 'tfg:earth/is_volcanic')
    })

    // Mountain biomes
    event.add('tfg:lava_mountain', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('minecraft:lava').fluid)
        vein.weight(0)
        vein.minimumYield(5)
        vein.maximumYield(35)
        vein.depletionAmount(100)
        vein.depletionChance(100)
        vein.depletedYield(0)
        vein.biomeTag(10, 'tfg:earth/is_mountain')
    })
*/
}