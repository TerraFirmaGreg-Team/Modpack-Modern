	// priority: 0

function registerTFGNOstrumRecipes(event) {

    var $HeatRecipeCapability = Java.loadClass("fi.dea.mc.deafission.common.data.recipe.HeatRecipeCapability");
    var $HeatIngredient = Java.loadClass("fi.dea.mc.deafission.common.data.recipe.HeatIngredient");
	const $ChanceLogic = Java.loadClass('com.gregtechceu.gtceu.api.recipe.chance.logic.ChanceLogic')

    // Ostrum Linear Accelerator Recipes

    // .input($HeatRecipeCapability.CAP, new $HeatIngredient(X, Y)) where X is Minimal Temperature to run and where Y is HU consummed per craft
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

    event.recipes.gtceu.ostrum_linear_accelerator('tfg:lightweight_ostrum_vapor_t1')
        .perTick(true)
		.inputFluids('gtceu:residual_radioactive_concoction 1')
        .perTick(false)
		.inputFluids(Fluid.of('gtceu:lightweight_ostrum_vapor',1000))
		.inputFluids(Fluid.of('gtceu:radon', 10))
		.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/thorium'), 1, 10)
		.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/silver'), 1, 10)
		.itemOutputsRanged(Item.of('gtceu:dusty_raw_tricalcium_phosphate'), 1, 10)
        .itemOutputsRanged(Item.of('#forge:dusty_raw_materials/bauxite'), 1, 10)
        .itemOutputsRanged(Item.of('#forge:dusty_raw_materials/lead'), 1, 10)
        //.input($HeatRecipeCapability.CAP, new $HeatIngredient(100, 500))
		.dimension('ad_astra:mars')
		.duration(20 * 20)
        .circuit(1);

    event.recipes.gtceu.ostrum_linear_accelerator('tfg:lightweight_ostrum_vapor_t2')
        .perTick(true)
		.inputFluids('gtceu:residual_radioactive_concoction 1')
        .inputFluids(Fluid.of('tfg:semiheavy_water', 1))
        .perTick(false)
		.inputFluids(Fluid.of('gtceu:lightweight_ostrum_vapor',1000))
		.inputFluids(Fluid.of('gtceu:radon', 10))
        .inputFluids(Fluid.of('gtceu:krypton', 10))
		.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/thorium'), 10, 20)
		.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/silver'), 1, 10)
		.itemOutputsRanged(Item.of('gtceu:dusty_raw_tricalcium_phosphate'), 1, 10)
        .itemOutputsRanged(Item.of('#forge:dusty_raw_materials/bauxite'), 1, 10)
        .itemOutputsRanged(Item.of('#forge:dusty_raw_materials/lead'), 1, 10)
        .itemOutputsRanged(Item.of('gtceu:dusty_raw_pitchblende'), 1, 10)
        //.input($HeatRecipeCapability.CAP, new $HeatIngredient(100, 500))
		.dimension('ad_astra:mars')
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.IV])
        .circuit(2);

    event.recipes.gtceu.ostrum_linear_accelerator('tfg:lightweight_ostrum_vapor_t3')
        .perTick(true)
		.inputFluids('gtceu:residual_radioactive_concoction 1')
        .inputFluids(Fluid.of('tfg:semiheavy_water', 1))
        .perTick(false)
		.inputFluids(Fluid.of('gtceu:lightweight_ostrum_vapor',1000))
		.inputFluids(Fluid.of('gtceu:radon', 10))
        .inputFluids(Fluid.of('gtceu:krypton', 10))
        .inputFluids(Fluid.of('gtceu:tritiated_water', 10))
		.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/thorium'), 10, 20)
		.itemOutputsRanged(Item.of('#forge:dusty_raw_materials/silver'), 1, 10)
		.itemOutputsRanged(Item.of('gtceu:dusty_raw_tricalcium_phosphate'), 1, 10)
        .itemOutputsRanged(Item.of('#forge:dusty_raw_materials/bauxite'), 1, 10)
        .itemOutputsRanged(Item.of('#forge:dusty_raw_materials/lead'), 10, 10)
        .itemOutputsRanged(Item.of('gtceu:dusty_raw_pitchblende'), 10, 20)
        .input($HeatRecipeCapability.CAP, new $HeatIngredient(100, 500))
		.dimension('ad_astra:mars')
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.IV])
        .circuit(3);
*/
	//#endregion

}