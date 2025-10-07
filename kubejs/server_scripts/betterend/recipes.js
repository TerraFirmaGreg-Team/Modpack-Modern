// priority: 0
"use strict";

function registerBetterEndRecipes(event) {

	Ingredient.of('#tfg:moon_plants').stacks.forEach(element => {
		const itemId = element.id;
		const recipeId = `betterend:greenhouse_${itemId.replace(':', '_')}`;

		event.recipes.gtceu.greenhouse(recipeId)
			.notConsumable(element.id)
			.itemOutputs(`8x ${element.id}`)
			.chancedOutput(element.id, 750, 0)
			.chancedOutput(element.id, 500, 0)
			.duration(36000) // 30 mins
			.circuit(1)
			.EUt(GTValues.VA[GTValues.MV])
			.dimension('ad_astra:moon')

		event.recipes.gtceu.greenhouse(`${recipeId}_helium`)
			.notConsumable(element.id)
			.inputFluids(Fluid.of('gtceu:helium_3', 500))
			.itemOutputs(`8x ${element.id}`)
			.chancedOutput(element.id, 4000, 0)
			.chancedOutput(element.id, 3000, 0)
			.duration(12000) // 30 mins
			.circuit(2)
			.EUt(GTValues.VA[GTValues.MV])
			.dimension('ad_astra:moon')
	});

	Ingredient.of('#tfg:mars_plants').stacks.forEach(element => {
		const itemId = element.id;
		const recipeId = `greenhouse_${itemId.replace(':', '_')}`;

		generateGreenHouseRecipe(event, itemId, 'tfg:semiheavy_ammoniacal_water', 8000, `8x ${itemId}`,
			recipeId, 'ad_astra:mars', 8, null, GTValues.VA[GTValues.LV]);
	});

	generateGreenHouseRecipe(event, '8x betterend:amber_root_seeds', 'tfg:semiheavy_ammoniacal_water', 8000, 
		'24x betterend:amber_root_product', 'amber_root', 'ad_astra:mars', 8, null, GTValues.VA[GTValues.LV])

	generateGreenHouseRecipe(event, '8x betterend:blossom_berry_seeds', 'tfg:semiheavy_ammoniacal_water', 8000, 
		'24x betterend:blossom_berry_product', 'blossom_berry', 'ad_astra:mars', 8, null, GTValues.VA[GTValues.LV])

	generateGreenHouseRecipe(event, '8x betterend:bolux_mushroom_seeds', 'tfg:semiheavy_ammoniacal_water', 8000, 
		'24x betterend:bolux_mushroom_product', 'bolux_mushroom', 'ad_astra:mars', 8, null, GTValues.VA[GTValues.LV])

	generateGreenHouseRecipe(event, '8x betterend:cave_pumpkin_plant_seeds', 'tfg:semiheavy_ammoniacal_water', 8000, 
		'24x betterend:cave_pumpkin', 'cave_pumpkin', 'ad_astra:mars', 8, null, GTValues.VA[GTValues.LV])

	generateGreenHouseRecipe(event, '8x betterend:chorus_mushroom_seeds', 'tfg:semiheavy_ammoniacal_water', 8000,
		'24x betterend:chorus_mushroom_product', 'chorus_mushroom', 'ad_astra:mars', 8, null, GTValues.VA[GTValues.LV])

	generateGreenHouseRecipe(event, '8x betterend:shadow_berry_seeds', 'tfg:semiheavy_ammoniacal_water', 8000, 
		'24x betterend:shadow_berry_product', 'shadow_berry', 'ad_astra:mars', 8, null, GTValues.VA[GTValues.LV])

	event.recipes.firmalife.oven('betterend:cave_pumpkin_pie_raw', 400, 60 * 20, 'betterend:cave_pumpkin_pie')
}