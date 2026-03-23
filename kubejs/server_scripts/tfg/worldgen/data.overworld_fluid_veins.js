"use strict";

    /*
        GLOBALS
    */

    const biomeKeys = {}

    const BIOME_GROUPS = {
        seaWater: [],
        freshWater: [],
        oil: [],
        gas: [],
        volcanic: [],
    }

function registerTFGOverworldBedrockFluidVeins(event) {

    const Registries = Java.loadClass("net.minecraft.core.registries.Registries")
    const ResourceKey = Java.loadClass("net.minecraft.resources.ResourceKey")
    const ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation")


    /*
        BIOME LIST
    */

    const biomeNames = [
        "ocean",
        "ocean_reef",
        "deep_ocean",
        "deep_ocean_trench",
        "sunken_shield_volcano",
        "guano_island",
        "shore",
        "tidal_flats",
        "sea_stacks",
        "terrace_upper",
        "terrace_lower",
        "setback_cliffs",
        "coastal_dunes",
        "rocky_shores",
        "embayments",
        "shield_volcano_shore",
        "old_shield_volcano_shore",
        "ice_sheet_shore",
        "oceanic_mountain_lake",
        "volcanic_oceanic_mountain_lake",
        "salt_marsh",
        "mountain_lake",
        "old_mountain_lake",
        "volcanic_mountain_lake",
        "plateau_lake",
        "tower_karst_lake",
        "subglacial_lake",
        "meltwater_lake",
        "lake",
        "river",
        "plains",
        "hills",
        "lowlands",
        "rolling_hills",
        "highlands",
        "badlands",
        "plateau",
        "plateau_wide",
        "rocky_plateau",
        "tower_karst_plains",
        "tower_karst_canyons",
        "tower_karst_hills",
        "tower_karst_highlands",
        "tower_karst_bay",
        "old_mountains",
        "mountains",
        "oceanic_mountains",
        "volcanic_mountains",
        "volcanic_oceanic_mountains",
        "active_shield_volcano",
        "dormant_shield_volcano",
        "extinct_shield_volcano",
        "ancient_shield_volcano",
        "shield_volcano_shore",
        "sunken_shield_volcano",
        "extreme_doline_mountains",
        "doline_plains",
        "doline_hills",
        "doline_rolling_hills",
        "doline_highlands",
        "doline_plateau",
        "doline_canyons",
        "cenote_plains",
        "cenote_hills",
        "cenote_rolling_hills",
        "cenote_highlands",
        "cenote_plateau",
        "cenote_canyons",
        "burren_plateau",
        "burren_badlands",
        "burren_badlands_tall",
        "burren_plains",
        "burren_roche_moutonee",
        "shilin_plains",
        "shilin_hills",
        "shilin_highlands",
        "shilin_plateau",
        "shilin_canyons",
        "canyons",
        "low_canyons",
        "whorled_canyons",
        "stair_step_canyons",
        "mesas",
        "buttes",
        "hoodoos",
        "mud_flats",
        "salt_flats",
        "dune_sea",
        "grassy_dunes",
        "ice_sheet",
        "ice_sheet_edge",
        "ice_sheet_shore",
        "ice_sheet_mountains",
        "ice_sheet_mountains_edge",
        "ice_sheet_oceanic_mountains",
        "ice_sheet_oceanic_mountains_edge",
        "ice_sheet_tuyas",
        "ice_sheet_tuyas_edge",
        "glaciated_mountains",
        "glaciated_oceanic_mountains",
        "glaciated_shield_volcano",
        "glacially_carved_mountains",
        "glacially_carved_oceanic_mountains",
        "tuyas",
        "drumlins",
        "knob_and_kettle",
        "patterned_ground",
        "inverted_patterned_ground",
        "stone_circles"
    ];

    /*
        CREATE BIOME KEYS
    */

    for (let name of biomeNames) {

        biomeKeys[name] = ResourceKey.create(
            Registries.BIOME,
            new ResourceLocation("tfg", `earth/${name}`)
        )

    }

    /*
        RESET GROUPS (for reload)
    */

    Object.values(BIOME_GROUPS).forEach(arr => arr.length = 0)

    /*
        DEFINE GROUPS
    */

    BIOME_GROUPS.seaWater.push(
        [200, biomeKeys.ocean],
        [200, biomeKeys.deep_ocean],
        [200, biomeKeys.salt_marsh],
    )

    BIOME_GROUPS.freshWater.push(
        [200, biomeKeys.river],
        [200, biomeKeys.lake],
    )

    BIOME_GROUPS.volcanic.push(
        [300, biomeKeys.volcanic_mountains],
        [100, biomeKeys.mountains],
    )

    BIOME_GROUPS.oil.push(
        [200, biomeKeys.mountains],
        [200, biomeKeys.volcanic_mountains],
    )

    BIOME_GROUPS.gas.push(
        [200, biomeKeys.mountains],
    )

    /*
        REMOVE DEFAULT VEINS
    */

    event.remove('gtceu:heavy_oil_deposit')
    event.remove('gtceu:light_oil_deposit')
    event.remove('gtceu:natural_gas_deposit')
    event.remove('gtceu:oil_deposit')
    event.remove('gtceu:raw_oil_deposit')
    event.remove('gtceu:salt_water_deposit')

    /*
        STANDARD VEIN
    */

	event.add('tfg:heavy_oil', vein => {
		vein.dimensions('minecraft:overworld')
		vein.fluid(() => Fluid.of('gtceu:oil_heavy').fluid)
		vein.weight(5)
		vein.minimumYield(200)
		vein.maximumYield(400)
		vein.depletionAmount(1)
		vein.depletionChance(1)
		vein.depletedYield(200)
	})

	event.add('tfg:light_oil', vein => {
		vein.dimensions('minecraft:overworld')
		vein.fluid(() => Fluid.of('gtceu:oil_light').fluid)
		vein.weight(5)
		vein.minimumYield(20)
		vein.maximumYield(50)
		vein.depletionAmount(1)
		vein.depletionChance(1)
		vein.depletedYield(20)
	})

	event.add('tfg:oil', vein => {
		vein.dimensions('minecraft:overworld')
		vein.fluid(() => Fluid.of('gtceu:oil').fluid)
		vein.weight(5)
		vein.minimumYield(10)
		vein.maximumYield(30)
		vein.depletionAmount(1)
		vein.depletionChance(1)
		vein.depletedYield(10)
	})

	event.add('tfg:raw_oil', vein => {
		vein.dimensions('minecraft:overworld')
		vein.fluid(() => Fluid.of('gtceu:oil_medium').fluid)
		vein.weight(5)
		vein.minimumYield(10)
		vein.maximumYield(30)
		vein.depletionAmount(1)
		vein.depletionChance(1)
		vein.depletedYield(10)
	})

	event.add('tfg:natural_gas', vein => {
		vein.dimensions('minecraft:overworld')
		vein.fluid(() => Fluid.of('gtceu:natural_gas').fluid)
		vein.weight(0)
		vein.minimumYield(10)
		vein.maximumYield(30)
		vein.depletionAmount(1)
		vein.depletionChance(1)
		vein.depletedYield(10)
	})

	event.add('tfg:water', vein => {
		vein.dimensions('minecraft:overworld')
		vein.fluid(() => Fluid.of('minecraft:water').fluid)
		vein.weight(5)
		vein.minimumYield(10)
		vein.maximumYield(30)
		vein.depletionAmount(1)
		vein.depletionChance(1)
		vein.depletedYield(10)
	})

	/*
        SEA WATER
    */

    event.add('tfg:sea_water', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('tfc:salt_water').fluid)
        BIOME_GROUPS.seaWater.forEach(([weight, biome]) => {
            if (biome) vein.biomes(weight, biome)
        })
        vein.weight(0)
        vein.minimumYield(100)
        vein.maximumYield(650)
        vein.depletionAmount(1)
        vein.depletionChance(20)
        vein.depletedYield(30)
    })

    /*
        WATER
    */

    event.add('tfg:water', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('minecraft:water').fluid)
        BIOME_GROUPS.freshWater.forEach(([weight, biome]) => {
            if (biome) vein.biomes(weight, biome)
        })
        vein.weight(0)
        vein.minimumYield(100)
        vein.maximumYield(650)
        vein.depletionAmount(1)
        vein.depletionChance(20)
        vein.depletedYield(30)
    })


    /*
        OIL
    */

    event.add('tfg:oil', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('gtceu:oil').fluid)
        BIOME_GROUPS.oil.forEach(([weight, biome]) => {
            if (biome) vein.biomes(weight, biome)
        })
        vein.weight(0)
        vein.minimumYield(100)
        vein.maximumYield(650)
        vein.depletionAmount(1)
        vein.depletionChance(20)
        vein.depletedYield(30)
    })


    /*
        NATURAL GAS
    */

    event.add('tfg:natural_gas', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('gtceu:natural_gas').fluid)
        BIOME_GROUPS.gas.forEach(([weight, biome]) => {
            if (biome) vein.biomes(weight, biome)
        })
        vein.weight(0)
        vein.minimumYield(100)
        vein.maximumYield(650)
        vein.depletionAmount(1)
        vein.depletionChance(20)
        vein.depletedYield(30)
    })

    /*
        VOLCANIC OIL (example reuse)
    */

    event.add('tfg:volcanic_oil', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('gtceu:oil_heavy').fluid)
        BIOME_GROUPS.volcanic.forEach(([weight, biome]) => {
            if (biome) vein.biomes(weight, biome)
        })
        vein.weight(0)
        vein.minimumYield(100)
        vein.maximumYield(650)
        vein.depletionAmount(1)
        vein.depletionChance(20)
        vein.depletedYield(30)
    })
}