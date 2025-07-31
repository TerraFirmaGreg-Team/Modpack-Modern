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

 event.recipes.gtceu.void_miner(`voidmap_earth`)
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
    .EUt(GTValues.VA[GTValues.ZPM],4);

 }