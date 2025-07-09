// priority: 0

function registerBetterEndRecipes(event) {

	Ingredient.of('#tfg:moon_plants').stacks.forEach(element => {
		const itemId = element.id;
		const recipeId = `betterend:greenhouse_${itemId.replace(':', '_')}`;

		event.recipes.gtceu.greenhouse(recipeId)
			.itemInputs(element.id)
			.itemOutputs(`8x ${element.id}`)
			.chancedOutput(element.id, 7500, 1000)
			.chancedOutput(element.id, 5000, 1000)
			.duration(36000) // 30 mins
			.circuit(1)
			.EUt(GTValues.VA[GTValues.MV])
			.dimension('ad_astra:moon')

		event.recipes.gtceu.greenhouse(recipeId + "_helium")
			.itemInputs(element.id)
			.inputFluids(Fluid.of('gtceu:helium_3', 500))
			.itemOutputs(`8x ${element.id}`)
			.chancedOutput(element.id, 8500, 1000)
			.chancedOutput(element.id, 6000, 1000)
			.duration(12000) // 30 mins
			.circuit(2)
			.EUt(GTValues.VA[GTValues.MV])
			.dimension('ad_astra:moon')
	});
}