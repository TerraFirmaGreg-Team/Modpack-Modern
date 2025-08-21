 function registerTFGMarsRecipes(event) {
 
const $ChanceLogic = Java.loadClass('com.gregtechceu.gtceu.api.recipe.chance.logic.ChanceLogic')

/*
    event.recipes.gtceu.chemical_reactor("test_and")
        .itemInputs('1x minecraft:stone')
        .chancedItemOutputLogic($ChanceLogic.XOR)
        .chancedOutput('2x minecraft:dirt', 5000, 100)
        .chancedOutput('4x minecraft:dirt', 2500, 600)
        .duration(400)
        .EUt(25)

    event.recipes.gtceu.chemical_reactor("test_xor")
        .itemInputs('1x minecraft:stone')
        .chancedFluidOutputLogic($ChanceLogic.XOR)
        .chancedFluidOutput('gtceu:oxygen 500', 5000, 0)
        .chancedFluidOutput('gtceu:fluorine 500', 2500, 0)
        .duration(400)
        .EUt(25)
*/

/* event.recipes.gtceu.void_miner(`voidmap_earth`)
    .perTick(true)
    .inputFluids('gtceu:drilling_fluid 150')
    .perTick(false)
    .dimension('ad_astra:mars')
    .posY(70,80)
    .chancedItemOutputLogic($ChanceLogic.XOR)
    .chancedOutput('gtceu:raw_nickel',1000,0)
    .chancedOutput('gtceu:raw_graphite',1000,0)
    .chancedOutput('gtceu:raw_diamond',1000,0)
    .chancedOutput('gtceu:raw_coal',1000,0)
    .chancedOutput('gtceu:raw_redstone',1000,0)
    .chancedOutput('gtceu:raw_lapis',1000,0)
    .chancedOutput('minecraft:raw_gold',1000,0)
    .chancedOutput('minecraft:raw_copper',1000,0)
    .chancedOutput('minecraft:raw_iron',5000,0)
    //.itemOutputsRanged('gtceu:raw_sapphire',1,3)
    .duration(20*5)
    .EUt(GTValues.VA[GTValues.ZPM],4);*/

    // Ostrum Harvester

 event.recipes.gtceu.ostrum_harvester(`ostrum_harvesting`)
    .perTick(true)
    .inputFluids('gtceu:drilling_fluid 4')
    .perTick(false)
    .dimension('ad_astra:mars')
    .itemOutputsRanged('gtceu:ostrum_dust',1,5)
    .duration(20*5)
    .EUt(GTValues.VA[GTValues.LV]);

    // Large Centrifuge Ostrum dust - SCRAP FROM MARS GOING TO VENUS

    /*

 event.recipes.gtceu.centrifuge(`ostrum_harvesting`)
    .inputFluids('gtceu:bromine 100')
    .itemInputs('#forge:dusts/ostrum')
    .dimension('ad_astra:mars')
    .chancedFluidOutputLogic($ChanceLogic.XOR)
    .chancedFluidOutput('gtceu:lightweight_ostrum_vapor',6000,0)
    .chancedFluidOutput('gtceu:ostrum_vapor',3000,0)
    .chancedFluidOutput('gtceu:dense_ostrum_vapor',1000,0)
    .duration(20*58)
    .EUt(GTValues.VA[GTValues.EV], 4);

event.recipes.gtceu.extraterrestrial_ore_fabricator('lightweight_ostrum')
    .inputFluids('gtceu:lightweight_ostrum_vapor 1000')
    .inputFluids(Fluid.of('gtceu:radon', 1000))
    .itemOutputsRanged('#forge:crushed_ores/tantalite',1,10)
    .itemOutputsRanged('#forge:crushed_ores/bauxite',1,10)
    //.itemOutputsRanged('#forge:crushed_ores/pyrope',1,10)
    //.itemOutputsRanged('#forge:crushed_ores/rose_quartz',1,10)
    .itemOutputsRanged('#forge:crushed_ores/thorium',1,10)
    //.itemOutputsRanged(Item.of('gtceu:crushed_ruby_ore'),1,10)
    .dimension('ad_astra:venus')
    .duration(20*5)
    .EUt(GTValues.VA[GTValues.IV]);

event.recipes.gtceu.extraterrestrial_ore_fabricator('ostrum')
    .inputFluids('gtceu:ostrum_vapor 1000')
    .inputFluids(Fluid.of('gtceu:residual_radioactive_concoction', 1000))
    .itemOutputsRanged(Item.of('gtceu:crushed_chromite_ore'),1,10)
    //.itemOutputsRanged(Item.of('gtceu:crushed_malachite_ore'),1,10)
    .itemOutputsRanged(Item.of('gtceu:crushed_quartzite_ore'),1,10)
    //.itemOutputsRanged(Item.of('gtceu:crushed_gypsum_ore'),1,10)
    .itemOutputsRanged(Item.of('gtceu:crushed_electrotine_ore'),1,10)
    //.itemOutputsRanged(Item.of('gtceu:crushed_barite_ore'),1,10)
    .dimension('ad_astra:venus')
    .duration(20*5)
    .EUt(GTValues.VA[GTValues.IV]);

event.recipes.gtceu.extraterrestrial_ore_fabricator('dense_ostrum')
    .inputFluids('gtceu:dense_ostrum_vapor 1000')
    .inputFluids(Fluid.of('gtceu:tritiated_water', 500))
    .itemOutputsRanged('#forge:crushed_ores/uraninite',1,10)
    .itemOutputsRanged(Item.of('gtceu:crushed_certus_quartz_ore'),1,10)
    .itemOutputsRanged(Item.of('gtceu:crushed_beryllium_ore'),1,10)
    //.itemOutputsRanged(Item.of('gtceu:crushed_bastnasite_ore'),1,10)
    //.itemOutputsRanged(Item.of('gtceu:crushed_spessartine_ore'),1,10)
    //.itemOutputsRanged(Item.of('gtceu:crushed_silver_ore'),1,10)
    .dimension('ad_astra:venus')
    .duration(20*5)
    .EUt(GTValues.VA[GTValues.IV]);

    */

 }