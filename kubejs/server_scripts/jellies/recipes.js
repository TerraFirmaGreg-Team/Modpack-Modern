// priority: 0
"use strict";

function registerJelliesRecipes(event) {
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
		.inputFluids(Fluid.of('minecraft:water', 250))
		.itemOutputs('minecraft:slime_ball')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	// Biotite Slime Ball
	event.shapeless('gtceu:biotite_dust', ['jellies:jellie/slime_ball/biotite', '#forge:tools/mortars'])
		.id('tfg:shapeless/mortar_biotite_slime_ball')

	event.recipes.tfc.quern('gtceu:biotite_dust', 'jellies:jellie/slime_ball/biotite')
		.id('tfg:quern/biotite_slime_ball')

	event.recipes.gtceu.macerator('tfg:biotite_slime_ball')
		.itemInputs('jellies:jellie/slime_ball/biotite')
		.itemOutputs('gtceu:biotite_dust')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	// Glowberry Slime Ball
	for (let i = 1; i <= 5; i++) {
		let inputArray = new Array(0)
		let outputArray = new Array(0)

		for (let j = 1; j < i + 1; j++) {
			inputArray.push('jellies:jellie/slime_ball/glowberry')
			outputArray.push('minecraft:sugar')
		}

		event.recipes.tfc.pot(inputArray, Fluid.of('tfc:spring_water', 200 * i), 300, 200)
			.itemOutput(outputArray)
			.id(`tfg:pot/${i}x_glowberry_slime_ball_to_sugar`)
	}

	event.recipes.firmalife.vat()
		.inputs('jellies:jellie/slime_ball/glowberry', Fluid.of('tfc:spring_water', 200))
		.outputItem('minecraft:sugar')
		.length(600)
		.id('tfg:vat/glowberry_slime_ball_to_sugar')

	event.recipes.gtceu.chemical_reactor('tfg:glowberry_slime_ball')
		.itemInputs('jellies:jellie/slime_ball/glowberry')
		.inputFluids(Fluid.of('tfc:spring_water', 200))
		.itemOutputs('minecraft:sugar')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	// Latex Slime Ball
	event.recipes.firmalife.vat()
		.inputs('jellies:jellie/slime_ball/latex', Fluid.of('tfc:spring_water', 200))
		.outputFluid(Fluid.of('tfg:latex', 200))
		.length(600)
		.id('tfg:vat/latex_slime_ball_to_latex')

	event.recipes.gtceu.brewery('tfg:latex_slime_ball')
		.itemInputs('jellies:jellie/slime_ball/latex')
		.inputFluids(Fluid.of('tfc:spring_water', 200))
		.outputFluids(Fluid.of('tfg:latex', 200))
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])
	
	// Plant Slime Ball
	event.shapeless('2x gtceu:plant_ball', ['jellies:jellie/slime_ball/plant', '#forge:tools/mortars'])
		.id('tfg:shapeless/mortar_plant_slime_ball')

	event.recipes.tfc.quern('2x gtceu:plant_ball', 'jellies:jellie/slime_ball/plant')
		.id('tfg:quern/plant_slime_ball')

	event.recipes.gtceu.macerator('tfg:plant_slime_ball')
		.itemInputs('jellies:jellie/slime_ball/plant')
		.itemOutputs('2x gtceu:plant_ball')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	// Spring Slime Ball
	event.recipes.firmalife.vat()
		.inputItem('jellies:jellie/slime_ball/spring')
		.outputFluid(Fluid.of('tfc:spring_water', 200))
		.length(600)
		.id('tfg:vat/spring_slime_ball_to_spring_water')

	event.recipes.gtceu.brewery('tfg:spring_slime_ball')
		.itemInputs('jellies:jellie/slime_ball/spring')
		.outputFluids(Fluid.of('tfc:spring_water', 200))
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])
}