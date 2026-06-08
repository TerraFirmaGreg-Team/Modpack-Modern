// priority: 0
"use strict";

function registerTFGSlimeRecipes(event) {
	// Plant slime ball
	event.shapeless('gtceu:plant_ball', ['tfg:slime/slime_ball/plant', '#forge:tools/mortars'])
		.id('tfg:shapeless/mortar_plant_slime_ball')

	event.recipes.tfc.quern('gtceu:plant_ball', 'tfg:slime/slime_ball/plant')
		.id('tfg:quern/plant_slime_ball')

	event.recipes.gtceu.macerator('tfg:plant_slime_ball')
		.itemInputs('tfg:slime/slime_ball/plant')
		.itemOutputs('gtceu:plant_ball')
		.EUt(2)
		.duration(50)

	// Glowberry slime ball
	for (let i = 1; i <= 5; i++) {
		let inputArray = new Array(0)
		let outputArray = new Array(0)

		for (let j = 1; j < i + 1; j++) {
			inputArray.push('tfg:slime/slime_ball/glowberry')
			outputArray.push('minecraft:sugar')
		}

		event.recipes.tfc.pot(inputArray, Fluid.of('tfc:spring_water', 200 * i), 300, 200)
			.itemOutput(outputArray)
			.id(`tfg:pot/${i}x_glowberry_slime_ball_to_sugar`)
	}

	event.recipes.firmalife.vat()
		.inputs('tfg:slime/slime_ball/glowberry', Fluid.of('tfc:spring_water', 200))
		.outputItem('minecraft:sugar')
		.length(600)
		.id('tfg:vat/glowberry_slime_ball_to_sugar')

	event.recipes.gtceu.brewery('tfg:glowberry_slime_ball')
		.itemInputs('tfg:slime/slime_ball/glowberry')
		.inputFluids(Fluid.of('tfc:spring_water', 200))
		.itemOutputs('minecraft:sugar')
		.duration(100)
		.EUt(16)

	// Latex slime ball
	event.recipes.firmalife.vat()
		.inputs('tfg:slime/slime_ball/latex', Fluid.of('tfc:spring_water', 200))
		.outputFluid(Fluid.of('tfg:latex', 200))
		.length(600)
		.id('tfg:vat/latex_slime_ball_to_latex')

	event.recipes.gtceu.brewery('tfg:latex_slime_ball')
		.itemInputs('tfg:slime/slime_ball/latex')
		.inputFluids(Fluid.of('tfc:spring_water', 200))
		.outputFluids(Fluid.of('tfg:latex', 200))
		.duration(100)
		.EUt(16)
}