"use strict";

function registerTFGMarsOstrumRecipes(event) {

	const $HeatRecipeCapability = Java.loadClass("fi.dea.mc.deafission.common.data.recipe.HeatRecipeCapability");
	const $HeatIngredient = Java.loadClass("fi.dea.mc.deafission.common.data.recipe.HeatIngredient");
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

	//#region Light Ostrum Vapor
	
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
			.input($HeatRecipeCapability.CAP, new $HeatIngredient(10, 100))	
			.dimension('ad_astra:mars')
			.duration(20 * 120)
			.EUt(GTValues.VA[GTValues.EV])
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
			.input($HeatRecipeCapability.CAP, new $HeatIngredient(10, 100))
			.dimension('ad_astra:mars')
			.duration(20 * 120)
			.EUt(GTValues.VA[GTValues.EV])
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
			.input($HeatRecipeCapability.CAP, new $HeatIngredient(10, 100))
			.dimension('ad_astra:mars')
			.duration(20 * 120)
			.EUt(GTValues.VA[GTValues.EV])
			.circuit(3);

	//#endregion

	//#region Ostrum Vapor

		event.recipes.gtceu.ostrum_linear_accelerator('tfg:polyalkylene_lubricant')
			.perTick(true)
			.inputFluids(Fluid.of('gtceu:residual_radioactive_concoction', 1))
			.perTick(false)
			.inputFluids(Fluid.of('gtceu:ostrum_vapor', 1000))
			.inputFluids(Fluid.of('gtceu:ethylene', 1000))
			.inputFluids(Fluid.of('gtceu:lubricant', 1000))
			.outputFluids(Fluid.of('tfg:polyalkylene_lubricant', 1000))
			.input($HeatRecipeCapability.CAP, new $HeatIngredient(100, 1500))
			.dimension('ad_astra:mars')
			.duration(20 * 150)
			.EUt(GTValues.VA[GTValues.IV])
			//.circuit(3);

		event.recipes.gtceu.ostrum_linear_accelerator('tfg:caesium_137')
			.perTick(true)
			.inputFluids(Fluid.of('gtceu:residual_radioactive_concoction', 1))
			.perTick(false)
			.inputFluids(Fluid.of('gtceu:ostrum_vapor', 1000))
			.inputFluids(Fluid.of('gtceu:radon', 1000))
			.itemInputs(Item.of('gtceu:caesium_dust', 64))
			.itemOutputs(Item.of('#forge:dusts/caesium_137'))
			.input($HeatRecipeCapability.CAP, new $HeatIngredient(100, 1500))
			.dimension('ad_astra:mars')
			.duration(20 * 150)
			.EUt(GTValues.VA[GTValues.IV])

		event.recipes.gtceu.ostrum_linear_accelerator('tfg:terrafirmaguard_pa6')
			.perTick(true)
			.inputFluids(Fluid.of('gtceu:residual_radioactive_concoction', 1))
			.perTick(false)
			.inputFluids(Fluid.of('gtceu:ostrum_vapor', 1000))
			.itemInputs(Item.of('tfg:polycaprolactam_fabric', 64))
			.itemInputs(Item.of('tfg:refrigerant_pellet', 8))
			.itemInputs(Item.of('gtceu:iodine_dust', 1))
			.itemOutputs(Item.of('tfg:terrafirmaguard_pa6', 32))
			.input($HeatRecipeCapability.CAP, new $HeatIngredient(100, 100))
			.dimension('ad_astra:mars')
			.duration(20 * 120)
			.EUt(GTValues.VA[GTValues.IV])
	
	//#endregion

	//#region Dense Ostrum Vapor

		event.recipes.gtceu.ostrum_linear_accelerator('tfg:radioactive_effluent')
			.perTick(true)
			.inputFluids(Fluid.of('gtceu:residual_radioactive_concoction', 1))
			.perTick(false)
			.inputFluids(Fluid.of('gtceu:dense_ostrum_vapor', 1000))
			.itemInputs(Item.of('#forge:dusts/caesium_137', 1))
			.itemInputs(Item.of('gtceu:cobalt_dust', 8))
			.outputFluids(Fluid.of('tfg:radioactive_effluent', 512))
			.input($HeatRecipeCapability.CAP, new $HeatIngredient(500, 1600))
			.dimension('ad_astra:mars')
			.duration(20 * 240)
			.EUt(GTValues.VA[GTValues.LuV])

		event.recipes.gtceu.ostrum_linear_accelerator('tfg:tbu_232_rod_ola')
			.perTick(true)
			.inputFluids(Fluid.of('gtceu:residual_radioactive_concoction', 1))
			.perTick(false)
			.inputFluids(Fluid.of('gtceu:dense_ostrum_vapor', 1000))
			.inputFluids(Fluid.of('gtceu:radioactive_waste', 128000))
			.inputFluids(Fluid.of('gtceu:tritiated_water', 41472))
			.itemInputs('16x #forge:rods/long/thorium_230')
			.itemInputs('16x #forge:rods/long/thorium_230')
			.itemInputs('16x #forge:rods/long/thorium_230')
			.itemInputs('16x #forge:rods/long/thorium_230')
			.itemInputs('16x #forge:rods/long/thorium_230')
			.itemInputs(Item.of('tfg:empty_rod_t2', 1))
			.itemOutputs(Item.of('tfg:tbu_232_rod', 1))
			.input($HeatRecipeCapability.CAP, new $HeatIngredient(100, 500))
			.dimension('ad_astra:mars')
			.duration(20 * 640)
			.EUt(GTValues.VA[GTValues.IV])

		event.recipes.gtceu.ostrum_linear_accelerator('tfg:dense_to_light')
			.perTick(true)
			.inputFluids(Fluid.of('gtceu:residual_radioactive_concoction', 1))
			.perTick(false)
			.inputFluids(Fluid.of('gtceu:dense_ostrum_vapor', 1000))
			.outputFluids(Fluid.of('gtceu:lightweight_ostrum_vapor', 1000))
			.input($HeatRecipeCapability.CAP, new $HeatIngredient(100, 100))
			.dimension('ad_astra:mars')
			.duration(20 * 240)
			.EUt(GTValues.VA[GTValues.IV])
			.circuit(4)

}