// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGSpaceRecipes(event) {

	const allowedCombustibleDims = [
		{
			dimension: "minecraft:the_nether",
			type: "dimension"
		},
		{
			dimension: "minecraft:overworld",
			type: "dimension"
		}
	]

	event.findRecipes({ type: "gtceu:large_boiler" }).forEach(recipe => {
		recipe.json.add("recipeConditions", allowedCombustibleDims)
	})
	event.findRecipes({ type: "gtceu:steam_boiler" }).forEach(recipe => {
		recipe.json.add("recipeConditions", allowedCombustibleDims)
	})
	event.findRecipes({ type: "gtceu:combustion_generator" }).forEach(recipe => {
		recipe.json.add("recipeConditions", allowedCombustibleDims)
	})
	event.findRecipes({ type: "gtceu:gas_turbine" }).forEach(recipe => {
		recipe.json.add("recipeConditions", allowedCombustibleDims)
	})

	// Air collector

	event.recipes.gtceu.gas_collector('tfg:nether')
		.circuit(2)
		.outputFluids(Fluid.of('gtceu:air', 10000))
		.dimension('minecraft:the_nether')
		.duration(200)
		.EUt(16)

	event.recipes.gtceu.gas_collector('tfg:moon')
		.circuit(3)
		.outputFluids(Fluid.of('gtceu:argon', 1))
		.dimension('ad_astra:moon')
		.duration(20*60*30)
		.EUt(16)

	event.recipes.gtceu.gas_collector('tfg:mars')
		.circuit(4)
		.outputFluids(Fluid.of('tfg:mars_air', 10000))
		.dimension('ad_astra:mars')
		.duration(20*10)
		.EUt(16)


	// Aqueous accumulator -- use adjacentFluids (plural) to avoid rhino ambiguous method issues
	
	let aaCircuit = 1;

	event.recipes.gtceu.aqueous_accumulator('water')
		.circuit(aaCircuit++)
		.duration(20)
		.EUt(GTValues.VHA[GTValues.ULV])
		.adjacentFluids(["minecraft:water"])
		.outputFluids(Fluid.of("minecraft:water", 1000))
		
	event.recipes.gtceu.aqueous_accumulator('sea_water')
		.circuit(aaCircuit++)
		.duration(20)
		.EUt(GTValues.VA[GTValues.ULV])
		.adjacentFluids(["tfc:salt_water"])
		.outputFluids(Fluid.of("tfc:salt_water", 1000))
		
	event.recipes.gtceu.aqueous_accumulator('semiheavy_water_mars')
		.circuit(aaCircuit++)
		.dimension('ad_astra:mars')
		.duration(20)
		.EUt(GTValues.VHA[GTValues.ULV])
		.adjacentFluids(["tfg:semiheavy_ammoniacal_water"])
		.outputFluids(Fluid.of("tfg:semiheavy_ammoniacal_water", 1000))

	event.recipes.gtceu.aqueous_accumulator('lava_overworld')
		.circuit(aaCircuit++)
		.dimension('minecraft:overworld')
		.duration(20*15)
		.EUt(GTValues.VHA[GTValues.HV])
		.adjacentFluids(["minecraft:lava"])
		.outputFluids(Fluid.of("minecraft:lava", 1000))

	event.recipes.gtceu.aqueous_accumulator('lava_nether')
		.circuit(aaCircuit++)
		.dimension('minecraft:the_nether')
		.duration(20*15)
		.EUt(GTValues.VHA[GTValues.HV])
		.adjacentFluids(["minecraft:lava"])
		.outputFluids(Fluid.of("minecraft:lava", 1000))

	event.recipes.gtceu.aqueous_accumulator('spring_water')
		.circuit(aaCircuit++)
		.dimension('minecraft:overworld')
		.duration(20)
		.EUt(GTValues.VA[GTValues.LV])
		.adjacentFluids(["tfc:spring_water"])
		.outputFluids(Fluid.of("tfc:spring_water", 1000))

	event.recipes.gtceu.aqueous_accumulator('more_water')
		.circuit(aaCircuit++)
		.duration(10)
		.EUt(GTValues.VHA[GTValues.HV])
		.adjacentFluids(["minecraft:water"])
		.outputFluids(Fluid.of("minecraft:water", 16000))
		
}