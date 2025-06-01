// priority: 0

function registerTFGSpaceRecipes(event) {

	// Air collector

	event.recipes.gtceu.gas_collector('nether')
		.circuit(2)
		.outputFluids(Fluid.of('gtceu:air', 10000))
		.dimension('minecraft:the_nether')
		.duration(200)
		.EUt(16)

	event.recipes.gtceu.gas_collector('moon')
		.circuit(3)
		.outputFluids(Fluid.of('gtceu:argon', 1))
		.dimension('ad_astra:moon')
		.duration(20*60*30)
		.EUt(16)

	// Aqueous accumulator

	event.recipes.gtceu.aqueous_accumulator('water_overworld')
		.circuit(1)
		.dimension('minecraft:overworld')
		.duration(20)
		.EUt(GTValues.VHA[GTValues.ULV])
		.addDataString("fluidA", "minecraft:water")
		.addDataString("fluidB", "minecraft:water")
		.outputFluids(Fluid.of("minecraft:water", 1000))

	event.recipes.gtceu.aqueous_accumulator('water_nether')
		.circuit(2)
		.dimension('minecraft:the_nether')
		.duration(20)
		.EUt(GTValues.VHA[GTValues.ULV])
		.addDataString("fluidA", "minecraft:water")
		.addDataString("fluidB", "minecraft:water")
		.outputFluids(Fluid.of("minecraft:water", 1000))
		
	event.recipes.gtceu.aqueous_accumulator('sea_water_overworld')
		.circuit(3)
		.dimension('minecraft:overworld')
		.duration(20)
		.EUt(GTValues.VA[GTValues.ULV])
		.addDataString("fluidA", "tfc:salt_water")
		.addDataString("fluidB", "tfc:salt_water")
		.outputFluids(Fluid.of("tfc:salt_water", 1000))

	event.recipes.gtceu.aqueous_accumulator('sea_water_nether')
		.circuit(4)
		.dimension('minecraft:the_nether')
		.duration(20)
		.EUt(GTValues.VA[GTValues.ULV])
		.addDataString("fluidA", "tfc:salt_water")
		.addDataString("fluidB", "tfc:salt_water")
		.outputFluids(Fluid.of("tfc:salt_water", 1000))

	event.recipes.gtceu.aqueous_accumulator('lava_overworld')
		.circuit(5)
		.dimension('minecraft:overworld')
		.duration(20)
		.EUt(GTValues.VHA[GTValues.HV])
		.addDataString("fluidA", "minecraft:lava")
		.addDataString("fluidB", "minecraft:lava")
		.outputFluids(Fluid.of("minecraft:lava", 1000))

	event.recipes.gtceu.aqueous_accumulator('lava_nether')
		.circuit(6)
		.dimension('minecraft:the_nether')
		.duration(20)
		.EUt(GTValues.VHA[GTValues.HV])
		.addDataString("fluidA", "minecraft:lava")
		.addDataString("fluidB", "minecraft:lava")
		.outputFluids(Fluid.of("minecraft:lava", 1000))
}