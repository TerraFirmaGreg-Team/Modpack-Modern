// priority: 0
"use strict";

const registerSandwormRecipes = (event) => {

    event.remove({ mod: 'sandworm_mod'})

    event.recipes.gtceu.assembler('sandworm_mod:thumper')
		.itemInputs('6x #forge:plates/ostrum', '#gtceu:circuits/iv', 'gtceu:ev_electric_piston')
		.inputFluids(Fluid.of('gtceu:radon', 100))
		.itemOutputs('sandworm_mod:thumper')
		.duration(200)
		.circuit(10)
		.EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true);
}