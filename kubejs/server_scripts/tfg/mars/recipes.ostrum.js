"use strict";

function registerTFGMarsOstrumRecipes(event) {

	var $HeatRecipeCapability = Java.loadClass("fi.dea.mc.deafission.common.data.recipe.HeatRecipeCapability");
	var $HeatIngredient = Java.loadClass("fi.dea.mc.deafission.common.data.recipe.HeatIngredient");
	const $ChanceLogic = Java.loadClass('com.gregtechceu.gtceu.api.recipe.chance.logic.ChanceLogic')

	// Ostrum Harvester

	event.recipes.gtceu.ostrum_harvester(`tfg:ostrum_harvesting`)
		.perTick(true)
		.inputFluids('gtceu:drilling_fluid 4')
		.perTick(false)
		.dimension('ad_astra:mars')
		.itemOutputsRanged('gtceu:ostrum_dust', 1, 5)
		.duration(20 * 30)
		.EUt(GTValues.VA[GTValues.LV]);

	// Ostrum Linear Accelerator Recipes
/*
	event.recipes.gtceu.ostrum_linear_accelerator('tfg:ostrum_transformation')
		.inputFluids('gtceu:residual_radioactive_concoction 100')
		.itemInputs('32x #forge:dusts/ostrum')
		.chancedFluidOutputLogic($ChanceLogic.XOR)
		.chancedFluidOutput('gtceu:lightweight_ostrum_vapor', 6000, 0)
		.chancedFluidOutput('gtceu:ostrum_vapor', 3000, 0)
		.chancedFluidOutput('gtceu:dense_ostrum_vapor', 1000, 0)
		.dimension('ad_astra:mars')
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.EV]);

	event.recipes.gtceu.ostrum_linear_accelerator('tfg:lightweight_ostrum')
		.inputFluids('gtceu:lightweight_ostrum_vapor 1000')
		.inputFluids('gtceu:residual_radioactive_concoction 100')
		.inputFluids(Fluid.of('tfg:heavy_water', 1000))
		.itemOutputsRanged('#forge:dusty_raw_materials/pitchblende', 1, 10)
		.itemOutputsRanged('#forge:dusty_raw_materials/silver', 1, 10)
		.itemOutputsRanged('#forge:dusty_raw_materials/tricalcium_phosphate', 1, 10)
		.dimension('ad_astra:mars')
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.IV]);

	event.recipes.gtceu.ostrum_linear_accelerator('tfg:ostrum')
		.inputFluids('gtceu:ostrum_vapor 1000')
		.inputFluids('gtceu:residual_radioactive_concoction 100')
		.inputFluids(Fluid.of('gtceu:radon', 100))
		.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/bauxite'), 1, 10)
		.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/lead'), 1, 10)
		.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/beryllium'), 1, 10)
		.dimension('ad_astra:mars')
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.IV]);

	event.recipes.gtceu.ostrum_linear_accelerator('tfg:dense_ostrum')
		.inputFluids('gtceu:dense_ostrum_vapor 1000')
		.inputFluids('gtceu:residual_radioactive_concoction 100')
		.inputFluids(Fluid.of('gtceu:tritiated_water', 500))
		.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/thorium'), 1, 10)
		.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/uraninite'), 1, 10)
		.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/hematite'), 1, 10)
		.dimension('ad_astra:mars')
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.IV]);
*/
	// Ostrum Linear Accelerator Recipes

	// .input($HeatRecipeCapability.CAP, new $HeatIngredient(X, Y)) where X is Minimal Temperature to run and where Y is HU consummed per craft
	
		event.recipes.gtceu.ostrum_linear_accelerator('tfg:ostrum_transformation')
			.inputFluids(Fluid.of('gtceu:residual_radioactive_concoction', 1000))
			.itemInputs('32x #forge:dusts/ostrum')
			.chancedFluidOutputLogic($ChanceLogic.XOR)
			.chancedFluidOutput('gtceu:lightweight_ostrum_vapor', 6000, 0)
			.chancedFluidOutput('gtceu:ostrum_vapor', 3000, 0)
			.chancedFluidOutput('gtceu:dense_ostrum_vapor', 1000, 0)
			.dimension('ad_astra:mars')
			.duration(20 * 5)
			.EUt(GTValues.VA[GTValues.EV]);
	
		event.recipes.gtceu.ostrum_linear_accelerator('tfg:lightweight_ostrum_vapor_t1')
			.perTick(true)
			.inputFluids(Fluid.of('gtceu:residual_radioactive_concoction', 1))
			.perTick(false)
			.inputFluids(Fluid.of('gtceu:lightweight_ostrum_vapor',1000))
			.inputFluids(Fluid.of('gtceu:radon', 10))
			.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/thorium'), 1, 5)
			.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/silver'), 1, 2)
			.itemOutputsRanged(Item.of('gtceu:dusty_raw_tricalcium_phosphate'), 1, 2)
			.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/bauxite'), 1, 2)
			.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/lead'), 1, 5)
			.input($HeatRecipeCapability.CAP, new $HeatIngredient(100, 500))
			.dimension('ad_astra:mars')
			.duration(20 * 120)
			.EUt(GTValues.VA[GTValues.IV])
			.circuit(1);
	
		event.recipes.gtceu.ostrum_linear_accelerator('tfg:lightweight_ostrum_vapor_t2')
			.perTick(true)
			.inputFluids(Fluid.of('gtceu:residual_radioactive_concoction', 1))
			.inputFluids(Fluid.of('tfg:semiheavy_water', 1))
			.perTick(false)
			.inputFluids(Fluid.of('gtceu:lightweight_ostrum_vapor',1000))
			.inputFluids(Fluid.of('gtceu:radon', 10))
			.inputFluids(Fluid.of('gtceu:krypton', 10))
			.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/thorium'), 1, 10)
			.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/silver'), 1, 3)
			.itemOutputsRanged(Item.of('gtceu:dusty_raw_tricalcium_phosphate'), 1, 3)
			.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/bauxite'), 1, 3)
			.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/lead'), 1, 3)
			.itemOutputsRanged(Item.of('gtceu:dusty_raw_pitchblende'), 1, 10)
			.input($HeatRecipeCapability.CAP, new $HeatIngredient(1, 1))
			.dimension('ad_astra:mars')
			.duration(20 * 120)
			.EUt(GTValues.VA[GTValues.IV])
			.circuit(2);
	
		event.recipes.gtceu.ostrum_linear_accelerator('tfg:lightweight_ostrum_vapor_t3')
			.perTick(true)
			.inputFluids(Fluid.of('gtceu:residual_radioactive_concoction', 1))
			.inputFluids(Fluid.of('tfg:semiheavy_water', 1))
			.perTick(false)
			.inputFluids(Fluid.of('gtceu:lightweight_ostrum_vapor',1000))
			.inputFluids(Fluid.of('gtceu:radon', 10))
			.inputFluids(Fluid.of('gtceu:krypton', 10))
			.inputFluids(Fluid.of('gtceu:tritiated_water', 10))
			.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/thorium'), 10, 20)
			.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/silver'), 1, 5)
			.itemOutputsRanged(Item.of('gtceu:dusty_raw_tricalcium_phosphate'), 1, 5)
			.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/bauxite'), 1, 5)
			.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/lead'), 1, 5)
			.itemOutputsRanged(Item.of('gtceu:dusty_raw_pitchblende'), 10, 20)
			.input($HeatRecipeCapability.CAP, new $HeatIngredient(100, 1000))
			.dimension('ad_astra:mars')
			.duration(20 * 120)
			.EUt(GTValues.VA[GTValues.IV])
			.circuit(3);
	
	//#endregion

}