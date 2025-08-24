// priority: 0

function registerTFGMoonOres(event) {
	
//#region Moon Harvester

 event.recipes.gtceu.moon_dust_harvester('tfg:lunar_assurine_harvester')
	.biome('tfg:moon/lunar_asurine_dense')
    .itemOutputsRanged('#forge:dusts/certus_regolith',1,5)
    .duration(20*80)
    .EUt(GTValues.VA[GTValues.LV])
	.circuit(1)

 event.recipes.gtceu.moon_dust_harvester('tfg:lunar_chorus_dense')
	.biome('tfg:moon/lunar_chorus_dense')
    .itemOutputsRanged('#forge:dusts/goethe_regolith',1,5)
    .duration(20*80)
    .EUt(GTValues.VA[GTValues.LV])
	.circuit(2)

 event.recipes.gtceu.moon_dust_harvester('tfg:lunar_corals_dense')
	.biome('tfg:moon/lunar_corals_dense')
    .itemOutputsRanged('#forge:dusts/bright_regolith',1,5)
    .duration(20*80)
    .EUt(GTValues.VA[GTValues.LV])
	.circuit(3)

 event.recipes.gtceu.moon_dust_harvester('tfg:lunar_lights_dense')
	.biome('tfg:moon/lunar_lights_dense')
    .itemOutputsRanged('#forge:dusts/cassiterite_regolith',1,5)
    .duration(20*80)
    .EUt(GTValues.VA[GTValues.LV])
	.circuit(4)

	//#endregion

	//#region Regolith Vapor Processing

 event.recipes.gtceu.mixer('tfg:regolith_slurry_suspension')
	.itemInputs('ad_astra:moon_sand', 'tfg:dry_ice')
	.itemOutputs('#forge:dusts/regolith_mush')
	.dimension('ad_astra:moon')
    .duration(20*60)
    .EUt(GTValues.VA[GTValues.LV])

 event.recipes.gtceu.chemical_bath('tfg:regolith_vapor')
	.itemInputs('#forge:dusts/regolith_mush')
	.inputFluids('gtceu:nitrogen 1000')
	.itemOutputs('#forge:dusts/silicon_dioxide')
	.outputFluids('gtceu:regolith_vapor 1000')
	.dimension('ad_astra:moon')
    .duration(20*28)
    .EUt(GTValues.VHA[GTValues.LV])

	//#endregion

	//#region Making Dusty Ores

const $ChanceLogic = Java.loadClass('com.gregtechceu.gtceu.api.recipe.chance.logic.ChanceLogic')

 event.recipes.gtceu.chemical_reactor('tfg:dusty_certus_reactor')
	.itemInputs('#forge:dusts/certus_regolith')
	.inputFluids('gtceu:regolith_vapor 100')
	.itemOutputs('gtceu:dusty_raw_certus_quartz')
	.dimension('ad_astra:moon')
    .duration(20*68)
    .EUt(GTValues.VHA[GTValues.ULV])

 event.recipes.gtceu.chemical_reactor('tfg:dusty_goethite_reactor')
	.itemInputs('#forge:dusts/goethe_regolith')
	.inputFluids('gtceu:regolith_vapor 100')
	.itemOutputs('gtceu:dusty_raw_goethite')
	.dimension('ad_astra:moon')
    .duration(20*68)
    .EUt(GTValues.VHA[GTValues.ULV])

 event.recipes.gtceu.chemical_reactor('tfg:dusty_shiny_reactor')
	.itemInputs('#forge:dusts/bright_regolith')
	.inputFluids('gtceu:regolith_vapor 100')
    .chancedItemOutputLogic($ChanceLogic.XOR)
    .chancedOutput('gtceu:dusty_raw_diamond',2000,0)
    .chancedOutput('gtceu:dusty_raw_gold',8000,0)
	.dimension('ad_astra:moon')
    .duration(20*68)
    .EUt(GTValues.VHA[GTValues.ULV])

 event.recipes.gtceu.chemical_reactor('tfg:dusty_cassiterite_reactor')
	.itemInputs('#forge:dusts/cassiterite_regolith')
	.inputFluids('gtceu:regolith_vapor 100')
	.itemOutputs('gtceu:dusty_raw_cassiterite')
	.dimension('ad_astra:moon')
    .duration(20*68)
    .EUt(GTValues.VHA[GTValues.ULV])

	//#endregion

	//#region Dusty to Dust through centrifuge

 event.recipes.gtceu.centrifuge('tfg:dusty_to_dust_certus_quartz')
	.itemInputs('gtceu:dusty_raw_certus_quartz')
	.itemOutputs('ae2:certus_quartz_dust')
    .duration(20*45)
    .EUt(GTValues.VA[GTValues.MV])

 event.recipes.gtceu.centrifuge('tfg:dusty_to_dust_goethite')
	.itemInputs('gtceu:dusty_raw_goethite')
    .chancedItemOutputLogic($ChanceLogic.XOR)
    .chancedOutput('gtceu:iron_dust',5000,0)
    .chancedOutput('gtceu:copper_dust',5000,0)
    .duration(20*45)
    .EUt(GTValues.VA[GTValues.MV])

 event.recipes.gtceu.centrifuge('tfg:dusty_to_dust_diamond')
	.itemInputs('gtceu:dusty_raw_diamond')
	.itemOutputs('gtceu:diamond_dust')
    .duration(20*45)
    .EUt(GTValues.VA[GTValues.MV])

 event.recipes.gtceu.centrifuge('tfg:dusty_to_dust_gold')
	.itemInputs('gtceu:dusty_raw_gold')
	.itemOutputs('gtceu:gold_dust')
    .duration(20*45)
    .EUt(GTValues.VA[GTValues.MV])

 event.recipes.gtceu.centrifuge('tfg:dusty_to_dust_tin')
	.itemInputs('gtceu:dusty_raw_cassiterite')
	.itemOutputs('gtceu:tin_dust')
    .duration(20*45)
    .EUt(GTValues.VA[GTValues.MV])

}