// priority: 0
"use strict";

function registerTFGSlimeRecipes(event) {
    // tfg:slime/slime_ball/plant
    event.shapeless('gtceu:plant_ball', ['tfg:slime/slime_ball/plant', '#forge:tools/mortars'])
		.id('tfg:shapeless/mortar_plant_slime_ball')

    event.recipes.tfc.quern('gtceu:plant_ball', 'tfg:slime/slime_ball/plant')

    // tfg:slime/slime_ball/glowberry
    for (let i = 1; i <= 5; i++) {
		let inputArray = new Array(0)
        let outputArray = new Array(0)

		for (let j = 1; j < i + 1; j++) {
			inputArray.push('tfg:slime/slime_ball/glowberry')
            outputArray.push('minecraft:sugar')
		}

		event.recipes.tfc.pot(inputArray, Fluid.of('tfc:spring_water', 200 * i), 300, 200)
			.itemOutput(outputArray)
			.id(`tfc:pot/${i}x_glowberry_slime_ball_to_sugar`)
	}
    
    // tfg:slime/slime_ball/latex
    event.recipes.firmalife.vat()
        .inputs('tfg:slime/slime_ball/latex', Fluid.of('tfc:spring_water', 200))
        .outputFluid(Fluid.of('tfg:latex', 200))
        .length(600)
        .id('tfc:vat/latex_slime_ball_to_latex')
}