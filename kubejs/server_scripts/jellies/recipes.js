// priority: 0
"use strict";

function registerJelliesRecipes(event) {
	// Jellie Nutritional Mash
	event.shaped('4x jellies:jellie/food/nutritional_mash', [
		' A ',
		'ABA',
		' A '
	], {
		A: '#tfg:items/jellie_nutritional_mash_ingredient',
		B: '#forge:tools/mortars'
	}).id('tfg:shaped/jellies_nutritional_mash')

	event.recipes.gtceu.mixer('tfg:jellies_nutritional_mash')
		.circuit(8)
		.itemInputs('#tfg:items/jellie_nutritional_mash_ingredient', '#tfg:items/jellie_nutritional_mash_ingredient', '#tfg:items/jellie_nutritional_mash_ingredient', '#tfg:items/jellie_nutritional_mash_ingredient')
		.itemOutputs('4x jellies:jellie/food/nutritional_mash')
		.duration(100)
		.EUt(GTValues.VHA[GTValues.ULV])

	// Jellie Slime Ball to Minecraft Slime Ball
	event.custom({
		type: "ae2:transform",
		circumstance: {
			type: "fluid",
			tag: "tfc:any_water"
		},
		ingredients: [{ tag: 'jellies:slime_ball' }],
		result: { item: 'minecraft:slime_ball' }
	}).id(`tfg:ae_transform/jellies_to_slime`)

	event.recipes.gtceu.chemical_bath('tfg:jellies_to_slime')
		.itemInputs('#jellies:slime_ball')
		.inputFluids(Fluid.of('minecraft:water', 200))
		.itemOutputs('minecraft:slime_ball')
		.duration(50)
		.EUt(GTValues.VHA[GTValues.ULV])


	// Glowberry Slime Ball
	event.recipes.tfc.heating('jellies:jellie/slime_ball/glowberry', 100)
		.resultItem('minecraft:sugar')
		.id('tfg:heating/glowberry_jellie')

	event.recipes.tfc.pot('jellies:jellie/slime_ball/glowberry', Fluid.of('minecraft:water', 200), 100, 100)
		.itemOutput('minecraft:sugar')
		.id('tfg:pot/glowberry_jellie')

	event.smelting('minecraft:sugar', 'jellies:jellie/slime_ball/glowberry')
		.id('tfg:smelting/glowberry_jellie')

	// TODO: recipe for glowberry jam?

	// Milk Slime Ball
	event.recipes.tfc.heating('jellies:jellie/slime_ball/milk', 100)
		.resultFluid(Fluid.of('tfg:jellie_milk', 1000))
		.id('tfg:heating/milk_jellie')

	event.recipes.tfc.pot('jellies:jellie/slime_ball/milk', Fluid.of('minecraft:water', 200), 100, 100)
		.fluidOutput(Fluid.of('tfg:jellie_milk', 1000))
		.id('tfg:pot/milk_jellie')

	event.recipes.gtceu.brewery('tfg:milk_slime_ball')
		.itemInputs('jellies:jellie/slime_ball/milk')
		.outputFluids(Fluid.of('tfg:jellie_milk', 1000))
		.duration(100)
		.EUt(GTValues.VHA[GTValues.ULV])
	
	// Plant Slime Ball
	event.shapeless('2x gtceu:plant_ball', ['jellies:jellie/slime_ball/plant', '#forge:tools/mortars'])
		.id('tfg:shapeless/mortar_plant_slime_ball')

	event.recipes.tfc.quern('2x gtceu:plant_ball', 'jellies:jellie/slime_ball/plant')
		.id('tfg:quern/plant_slime_ball')

	event.recipes.gtceu.macerator('tfg:plant_slime_ball')
		.itemInputs('jellies:jellie/slime_ball/plant')
		.itemOutputs('2x gtceu:plant_ball')
		.duration(50)
		.EUt(GTValues.VHA[GTValues.ULV])

	// Spring Slime Ball
	event.recipes.tfc.heating('jellies:jellie/slime_ball/spring', 100)
		.resultFluid(Fluid.of('tfc:spring_water', 1000))
		.id('tfg:heating/spring_jellie')

	event.recipes.tfc.pot('jellies:jellie/slime_ball/spring', Fluid.of('minecraft:water', 200), 100, 100)
		.fluidOutput(Fluid.of('tfc:spring_water', 1000))
		.id('tfg:pot/spring_jellie')

	event.recipes.gtceu.brewery('tfg:spring_slime_ball')
		.itemInputs('jellies:jellie/slime_ball/spring')
		.outputFluids(Fluid.of('tfc:spring_water', 1000))
		.duration(100)
		.EUt(GTValues.VHA[GTValues.ULV])
}