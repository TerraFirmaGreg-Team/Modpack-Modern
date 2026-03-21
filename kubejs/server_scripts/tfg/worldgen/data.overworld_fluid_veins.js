"use strict";

function registerTFGOverworldBedrockFluidVeins(event) {

	const Registries = Java.loadClass("net.minecraft.core.registries.Registries")
	const ResourceKey = Java.loadClass("net.minecraft.resources.ResourceKey")
	const martianAmberHillsResourceKey = ResourceKey.create(Registries.BIOME, "tfg:mars/amber_hills")
	const martianAmberPlainsResourceKey = ResourceKey.create(Registries.BIOME, "tfg:mars/amber_plains")
	const martianMountainsResourceKey = ResourceKey.create(Registries.BIOME, "tfg:mars/martian_mountains")
	const martianRusticusHillsResourceKey = ResourceKey.create(Registries.BIOME, "tfg:mars/rusticus_hills")
	const martianRusticusPlainsResourceKey = ResourceKey.create(Registries.BIOME, "tfg:mars/rusticus_plains")
	const martianSangnumHillsResourceKey = ResourceKey.create(Registries.BIOME, "tfg:mars/sangnum_hills")
	const martianSangnumPlainsResourceKey = ResourceKey.create(Registries.BIOME, "tfg:mars/sangnum_plains")

    event.remove('gtceu:heavy_oil_deposit')
    event.remove('gtceu:light_oil_deposit')
    event.remove('gtceu:natural_gas_deposit')
    event.remove('gtceu:oil_deposit')
    event.remove('gtceu:raw_oil_deposit')
    event.remove('gtceu:salt_water_deposit')

	event.add('tfg:heavy_oil', vein => {
		vein.dimensions('minecraft:overworld')
		vein.fluid(() => Fluid.of('gtceu:heavy_oil').fluid)
		vein.weight(100)
		vein.minimumYield(200)
		vein.maximumYield(400)
		vein.depletionAmount(1)
		vein.depletionChance(1)
		vein.depletedYield(200)
	})

	event.add('tfg:light_oil', vein => {
		vein.dimensions('minecraft:overworld')
		vein.fluid(() => Fluid.of('gtceu:light_oil').fluid)
		vein.weight(10)
		vein.minimumYield(20)
		vein.maximumYield(50)
		vein.depletionAmount(1)
		vein.depletionChance(1)
		vein.depletedYield(20)
	})

	event.add('tfg:argon', vein => {
		vein.dimensions('minecraft:overworld')
		vein.fluid(() => Fluid.of('gtceu:oil').fluid)
		vein.weight(5)
		vein.minimumYield(10)
		vein.maximumYield(30)
		vein.depletionAmount(1)
		vein.depletionChance(1)
		vein.depletedYield(10)
	})

	event.add('tfg:heavy_ammoniacal_water', vein => {
		vein.dimensions('minecraft:overworld')
		vein.fluid(() => Fluid.of('tfg:heavy_ammoniacal_water').fluid)
		vein.biomes(20, martianAmberHillsResourceKey)
		vein.biomes(20, martianAmberPlainsResourceKey)
		vein.biomes(20, martianRusticusHillsResourceKey)
		vein.biomes(20, martianRusticusPlainsResourceKey)
		vein.biomes(20, martianSangnumHillsResourceKey)
		vein.biomes(20, martianSangnumPlainsResourceKey)
		// This one is exclusively far inland, so it's ok to buff it a bit in case the player has bad luck
		vein.biomes(50, martianMountainsResourceKey)
		vein.weight(0)
		vein.minimumYield(100)
		vein.maximumYield(650)
		vein.depletionAmount(1)
		vein.depletionChance(20)
		vein.depletedYield(30)
	})

}