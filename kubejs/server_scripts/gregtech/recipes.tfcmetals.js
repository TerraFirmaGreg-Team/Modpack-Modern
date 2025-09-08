// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerGTCEuTFCMetalsRecipes(event) {
	//#region LV hull

	event.replaceInput('gtceu:shaped/lv_machine_hull', '#forge:plates/wrought_iron', '#forge:plates/red_steel')

	//#endregion

	//#region make colored steel a bit easier to compensate

	event.recipes.gtceu.arc_furnace('tfg:black_steel_dust_to_ingot')
		.itemInputs('gtceu:black_steel_dust')
		.itemOutputs('tfc:metal/ingot/black_steel')
		.inputFluids(Fluid.of('gtceu:oxygen', 72))
		.duration(500)
		.EUt(24)

	event.recipes.gtceu.arc_furnace('tfg:red_steel_dust_to_ingot')
		.itemInputs('gtceu:red_steel_dust')
		.itemOutputs('tfc:metal/ingot/red_steel')
		.inputFluids(Fluid.of('gtceu:oxygen', 72))
		.duration(700)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.arc_furnace('tfg:blue_steel_dust_to_ingot')
		.itemInputs('gtceu:blue_steel_dust')
		.itemOutputs('tfc:metal/ingot/blue_steel')
		.inputFluids(Fluid.of('gtceu:oxygen', 72))
		.duration(700)
		.EUt(GTValues.VA[GTValues.LV])

	//#endregion

	//#region add regular furnace recipes for other tfc alloys

	event.remove({ id: 'gtceu:electric_blast_furnace/blast_bismuth_bronze' })
	event.remove({ id: 'gtceu:electric_blast_furnace/blast_bismuth_bronze_gas' })
	event.remove({ id: 'gtceu:electric_blast_furnace/blast_black_bronze' })
	event.remove({ id: 'gtceu:electric_blast_furnace/blast_black_bronze_gas' })
	event.remove({ id: 'gtceu:vacuum_freezer/cool_hot_black_bronze_ingot' })
	event.remove({ id: 'gtceu:electric_blast_furnace/blast_sterling_silver' })
	event.remove({ id: 'gtceu:electric_blast_furnace/blast_sterling_silver_gas' })
	event.remove({ id: 'gtceu:electric_blast_furnace/blast_rose_gold' })
	event.remove({ id: 'gtceu:electric_blast_furnace/blast_rose_gold_gas' })

	event.smelting('gtceu:bismuth_bronze_ingot', '#forge:dusts/bismuth_bronze')
		.id('tfg:smelting/bismuth_bronze_ingot')
	event.smelting('gtceu:black_bronze_ingot', '#forge:dusts/black_bronze')
		.id('tfg:smelting/black_bronze_ingot')
	event.smelting('gtceu:sterling_silver_ingot', '#forge:dusts/sterling_silver')
		.id('tfg:smelting/sterling_silver_ingot')
	event.smelting('gtceu:rose_gold_ingot', '#forge:dusts/rose_gold')
		.id('tfg:smelting/rose_gold_ingot')

	//#endregion

	// red alloy, because crucible always makes 4+1=5

	event.recipes.gtceu.alloy_blast_smelter('red_alloy')
		.itemInputs('1x gtceu:copper_dust', '4x minecraft:redstone')
		.outputFluids(Fluid.of('gtceu:red_alloy', 720))
		.circuit(5)
		.duration(75)
		.EUt(GTValues.VA[GTValues.LV])

	event.remove({ id: 'gtceu:mixer/red_alloy' })
	// incorrect on purpose to prevent a greate duplicate recipe (the id becomes mixer/mixer/red_alloy)
	event.recipes.gtceu.mixer('gtceu:mixer/red_alloy')
		.itemInputs('1x gtceu:copper_dust', '4x minecraft:redstone')
		.itemOutputs('5x gtceu:red_alloy_dust')
		.circuit(2)
		.duration(100)
		.EUt(7)

	event.recipes.gtceu.centrifuge('red_alloy_separation')
		.itemInputs('5x gtceu:red_alloy_dust')
		.itemOutputs('1x gtceu:copper_dust', '4x minecraft:redstone')
		.duration(900)
		.EUt(30)

	event.recipes.gtceu.alloy_smelter('copper_dust_and_redstone_dust_into_red_alloy')
		.itemInputs('1x gtceu:copper_dust', '4x minecraft:redstone')
		.itemOutputs('5x gtceu:red_alloy_ingot')
		.duration(50)
		.EUt(16)

	event.recipes.gtceu.alloy_smelter('annealed_copper_dust_and_redstone_dust_into_red_alloy')
		.itemInputs('1x gtceu:annealed_copper_dust', '4x minecraft:redstone')
		.itemOutputs('5x gtceu:red_alloy_ingot')
		.duration(50)
		.EUt(16)

	event.recipes.gtceu.alloy_smelter('copper_ingot_and_redstone_dust_into_red_alloy')
		.itemInputs('1x minecraft:copper_ingot', '4x minecraft:redstone')
		.itemOutputs('5x gtceu:red_alloy_ingot')
		.duration(50)
		.EUt(16)

	event.recipes.gtceu.alloy_smelter('annealed_copper_ingot_and_redstone_dust_into_red_alloy')
		.itemInputs('1x gtceu:annealed_copper_ingot', '4x minecraft:redstone')
		.itemOutputs('5x gtceu:red_alloy_ingot')
		.duration(50)
		.EUt(16)
}
