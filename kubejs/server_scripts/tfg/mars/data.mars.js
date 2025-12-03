"use strict";

function registerTFGMarsBedrockFluidVeins(event) {

	const Registries = Java.loadClass("net.minecraft.core.registries.Registries")
	const ResourceKey = Java.loadClass("net.minecraft.resources.ResourceKey")
	const martianAmberHillsResourceKey = ResourceKey.create(Registries.BIOME, "tfg:mars/amber_hills")
	const martianAmberPlainsResourceKey = ResourceKey.create(Registries.BIOME, "tfg:mars/amber_plains")
	const martianMountainsResourceKey = ResourceKey.create(Registries.BIOME, "tfg:mars/martian_mountains")
	const martianRusticusHillsResourceKey = ResourceKey.create(Registries.BIOME, "tfg:mars/rusticus_hills")
	const martianRusticusPlainsResourceKey = ResourceKey.create(Registries.BIOME, "tfg:mars/rusticus_plains")
	const martianSangnumHillsResourceKey = ResourceKey.create(Registries.BIOME, "tfg:mars/sangnum_hills")
	const martianSangnumPlainsResourceKey = ResourceKey.create(Registries.BIOME, "tfg:mars/sangnum_plains")

	event.add('tfg:semiheavy_ammoniacal_water', vein => {
		vein.dimensions('ad_astra:mars')
		vein.fluid(() => Fluid.of('tfg:semiheavy_ammoniacal_water').fluid)
		vein.weight(100)
		vein.minimumYield(200)
		vein.maximumYield(400)
		vein.depletionAmount(1)
		vein.depletionChance(20)
		vein.depletedYield(15)
	})

	event.add('tfg:liquid_carbon_dioxide', vein => {
		vein.dimensions('ad_astra:mars')
		vein.fluid(() => Fluid.of('gtceu:liquid_carbon_dioxide').fluid)
		vein.weight(30)
		vein.minimumYield(20)
		vein.maximumYield(350)
		vein.depletionAmount(1)
		vein.depletionChance(20)
		vein.depletedYield(5)
	})

	event.add('tfg:liquid_ice', vein => {
		vein.dimensions('ad_astra:mars')
		vein.fluid(() => Fluid.of('gtceu:ice').fluid)
		vein.weight(20)
		vein.minimumYield(20)
		vein.maximumYield(200)
		vein.depletionAmount(1)
		vein.depletionChance(20)
		vein.depletedYield(5)
	})

	// Heavy Ammonical Water in Specific Biome Credit to Monifactory from https://github.com/ThePansmith/Monifactory/blob/main/kubejs/server_scripts/worldgen/fluidVeins.js

	event.add('tfg:heavy_ammoniacal_water', vein => {
		vein.dimensions('ad_astra:mars')
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