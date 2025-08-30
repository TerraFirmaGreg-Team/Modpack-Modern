 function registerTFGMarsRecipes(event) {
 
const $ChanceLogic = Java.loadClass('com.gregtechceu.gtceu.api.recipe.chance.logic.ChanceLogic')

    // Ostrum Harvester

 event.recipes.gtceu.ostrum_harvester(`ostrum_harvesting`)
    .perTick(true)
    .inputFluids('gtceu:drilling_fluid 4')
    .perTick(false)
    .dimension('ad_astra:mars')
    .itemOutputsRanged('gtceu:ostrum_dust',1,5)
    .duration(20*30)
    .EUt(GTValues.VA[GTValues.LV]);


    // Ostrum Linear Accelerator Recipes

event.recipes.gtceu.ostrum_linear_accelerator('ostrum_transformation')
    .inputFluids('gtceu:residual_radioactive_concoction 1000')
    .itemInputs('32x #forge:dusts/ostrum')
    .dimension('ad_astra:mars')
    .chancedFluidOutputLogic($ChanceLogic.XOR)
    .chancedFluidOutput('gtceu:lightweight_ostrum_vapor',6000,0)
    .chancedFluidOutput('gtceu:ostrum_vapor',3000,0)
    .chancedFluidOutput('gtceu:dense_ostrum_vapor',1000,0)
    .duration(20*5)
    .EUt(GTValues.VA[GTValues.EV]);

event.recipes.gtceu.ostrum_linear_accelerator('lightweight_ostrum')
    .inputFluids('gtceu:lightweight_ostrum_vapor 1000')
    .inputFluids('gtceu:residual_radioactive_concoction 100')
    .inputFluids(Fluid.of('gtceu:heavy_water', 1000))
    .itemOutputsRanged('#forge:dusty_raw_materials/pitchblende',1,10)
    .itemOutputsRanged('#forge:dusty_raw_materials/silver',1,10)
    .itemOutputsRanged('#forge:dusty_raw_materials/tricalcium_phosphate',1,10)
    .dimension('ad_astra:mars')
    .duration(20*5)
    .EUt(GTValues.VA[GTValues.IV]);

event.recipes.gtceu.ostrum_linear_accelerator('ostrum')
    .inputFluids('gtceu:ostrum_vapor 1000')
    .inputFluids('gtceu:residual_radioactive_concoction 100')
    .inputFluids(Fluid.of('gtceu:radon', 100))
    .itemOutputsRanged(Item.of('#forge:dusty_raw_materials/bauxite'),1,10)
    .itemOutputsRanged(Item.of('#forge:dusty_raw_materials/lead'),1,10)
    .itemOutputsRanged(Item.of('#forge:dusty_raw_materials/beryllium'),1,10)
    .dimension('ad_astra:mars')
    .duration(20*5)
    .EUt(GTValues.VA[GTValues.IV]);

event.recipes.gtceu.ostrum_linear_accelerator('dense_ostrum')
    .inputFluids('gtceu:dense_ostrum_vapor 1000')
    .inputFluids('gtceu:residual_radioactive_concoction 100')
    .inputFluids(Fluid.of('gtceu:tritiated_water', 500))
    .itemOutputsRanged(Item.of('#forge:dusty_raw_materials/thorium'),1,10)
    .itemOutputsRanged(Item.of('#forge:dusty_raw_materials/uraninite'),1,10)
    .dimension('ad_astra:mars')
    .duration(20*5)
    .EUt(GTValues.VA[GTValues.IV]);

    //#endregion

    //#region Centrifuge Dusty Ores

 event.recipes.gtceu.centrifuge('tfg:dusty_to_dust_pitchblende')
	.itemInputs('#forge:dusty_raw_materials/pitchblende')
	.itemOutputs('gtceu:pitchblende_dust')
    .duration(20*45)
    .EUt(GTValues.VA[GTValues.MV])

 event.recipes.gtceu.centrifuge('tfg:dusty_to_dust_silver')
	.itemInputs('#forge:dusty_raw_materials/silver')
	.itemOutputs('gtceu:silver_dust')
    .duration(20*45)
    .EUt(GTValues.VA[GTValues.MV])

 event.recipes.gtceu.centrifuge('tfg:dusty_to_dust_tricalcium_phosphate')
	.itemInputs('#forge:dusty_raw_materials/tricalcium_phosphate')
	.itemOutputs('gtceu:tricalcium_phosphate')
    .duration(20*45)
    .EUt(GTValues.VA[GTValues.MV])

 event.recipes.gtceu.centrifuge('tfg:dusty_to_dust_bauxite')
	.itemInputs('#forge:dusty_raw_materials/bauxite')
	.itemOutputs('gtceu:aluminium_dust')
    .duration(20*45)
    .EUt(GTValues.VA[GTValues.MV])

 event.recipes.gtceu.centrifuge('tfg:dusty_to_dust_lead')
	.itemInputs('#forge:dusty_raw_materials/lead')
	.itemOutputs('gtceu:lead_dust')
    .duration(20*45)
    .EUt(GTValues.VA[GTValues.MV])

 event.recipes.gtceu.centrifuge('tfg:dusty_to_dust_beryllium')
	.itemInputs('#forge:dusty_raw_materials/beryllium')
	.itemOutputs('gtceu:beryllium_dust')
    .duration(20*45)
    .EUt(GTValues.VA[GTValues.MV])

 event.recipes.gtceu.centrifuge('tfg:dusty_to_dust_thorium')
	.itemInputs('#forge:dusty_raw_materials/thorium')
	.itemOutputs('gtceu:thorium_dust')
    .duration(20*45)
    .EUt(GTValues.VA[GTValues.MV])

 event.recipes.gtceu.centrifuge('tfg:dusty_to_dust_uraninite')
	.itemInputs('#forge:dusty_raw_materials/uraninite')
	.itemOutputs('gtceu:uraninite_dust')
    .duration(20*45)
    .EUt(GTValues.VA[GTValues.MV])

 }