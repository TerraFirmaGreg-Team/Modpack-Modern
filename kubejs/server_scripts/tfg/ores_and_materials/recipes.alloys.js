// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGAlloyingRecipes(event) {

	// #region Colored steels

	event.replaceInput('gtceu:shaped/lv_machine_hull', '#forge:plates/wrought_iron', '#forge:plates/red_steel')

	event.remove({id:'gtceu:electric_blast_furnace/blast_black_steel_gas'})
	event.remove({id:'gtceu:electric_blast_furnace/blast_black_steel'})
	event.remove({id:'gtceu:electric_blast_furnace/blast_red_steel_gas'})
	event.remove({id:'gtceu:electric_blast_furnace/blast_red_steel'})
	event.remove({id:'gtceu:electric_blast_furnace/blast_blue_steel_gas'})
	event.remove({id:'gtceu:electric_blast_furnace/blast_blue_steel'})

	event.recipes.gtceu.electric_blast_furnace('blast_black_steel_gas_mv')
		.itemInputs('gtceu:black_steel_dust')
		.itemOutputs('tfc:metal/ingot/black_steel')
		.inputFluids(Fluid.of('gtceu:nitrogen', 1000))
		.duration(469)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.MV])
		.blastFurnaceTemp(1000)

	event.recipes.gtceu.electric_blast_furnace('blast_black_steel_mv')
		.itemInputs('gtceu:black_steel_dust')
		.itemOutputs('tfc:metal/ingot/black_steel')
		.duration(700)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.MV])
		.blastFurnaceTemp(1000)

	event.recipes.gtceu.electric_blast_furnace('blast_red_steel_gas_mv')
		.itemInputs('gtceu:red_steel_dust')
		.itemOutputs('tfc:metal/ingot/red_steel')
		.inputFluids(Fluid.of('gtceu:nitrogen', 1000))
		.duration(670)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.MV])
		.blastFurnaceTemp(1000)

	event.recipes.gtceu.electric_blast_furnace('blast_red_steel_mv')
		.itemInputs('gtceu:red_steel_dust')
		.itemOutputs('tfc:metal/ingot/red_steel')
		.duration(1000)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.MV])
		.blastFurnaceTemp(1000)

	event.recipes.gtceu.electric_blast_furnace('blast_blue_steel_gas_mv')
		.itemInputs('gtceu:blue_steel_dust')
		.itemOutputs('tfc:metal/ingot/blue_steel')
		.inputFluids(Fluid.of('gtceu:nitrogen', 1000))
		.duration(670)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.MV])
		.blastFurnaceTemp(1000)

	event.recipes.gtceu.electric_blast_furnace('blast_blue_steel_mv')
		.itemInputs('gtceu:blue_steel_dust')
		.itemOutputs('tfc:metal/ingot/blue_steel')
		.duration(1000)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.MV])
		.blastFurnaceTemp(1000)
		
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

	// Rose Gold + Sterling Silver
	const copper_types = [
		"#forge:ingots/copper",
		"#forge:dusts/copper",
		"#forge:ingots/annealed_copper",
		"#forge:dusts/annealed_copper"
	];
	const gold_types = [
		"#forge:ingots/gold",
		"#forge:dusts/gold"
	];
	const silver_types = [
		"#forge:ingots/silver",
		"#forge:dusts/silver"
	];

	copper_types.forEach(copper_types_array => {
		gold_types.forEach(gold_types_array => {
			event.recipes.gtceu.alloy_smelter(`rose_gold_from_${copper_types_array.replace(/:/g, "/").replace(/#/g, "")}_and_${gold_types_array.replace(/:/g, "/").replace(/#/g, "")}`)
				.itemInputs(Ingredient.of(copper_types_array).withCount(1), Ingredient.of(gold_types_array).withCount(4))
				.itemOutputs(ChemicalHelper.get(TagPrefix.ingot, GTMaterials.RoseGold, 5))
				.duration(20*10)
				.EUt(GTValues.VA[GTValues.LV])
		});
		silver_types.forEach(silver_types_array => {
			event.recipes.gtceu.alloy_smelter(`sterling_silver_from_${copper_types_array.replace(/:/g, "/").replace(/#/g, "")}_and_${silver_types_array.replace(/:/g, "/").replace(/#/g, "")}`)
				.itemInputs(Ingredient.of(copper_types_array).withCount(1), Ingredient.of(silver_types_array).withCount(4))
				.itemOutputs(ChemicalHelper.get(TagPrefix.ingot, GTMaterials.SterlingSilver, 5))
				.duration(20*10)
				.EUt(GTValues.VA[GTValues.LV])
		});
	});

	// Red alloy, because crucible always makes 4+1=5

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

	event.remove({ id: 'gtceu:mixer/sterling_silver' })
	generateMixerRecipe(event, ['#forge:dusts/copper', '4x #forge:dusts/silver'], [], '5x gtceu:sterling_silver_dust',
		1, [], 500, 7, 64, 'gtceu:mixer/sterling_silver')

	event.remove({ id: 'gtceu:mixer/rose_gold' })
	generateMixerRecipe(event, ['#forge:dusts/copper', '4x #forge:dusts/gold'], [], '5x gtceu:rose_gold_dust',
		3, [], 500, 7, 64, 'gtceu:mixer/rose_gold')

	// Glowstone
	event.recipes.gtceu.mixer('tfg:lv_glowstone')
		.itemInputs('gtceu:gold_dust', 'minecraft:redstone', 'gtceu:sulfur_dust')
		.itemOutputs('2x minecraft:glowstone_dust')
		.circuit(8)
		.duration(1200)
		.EUt(30)

	event.recipes.gtceu.alloy_blast_smelter('tfg:liquid_glowstone')
		.itemInputs('10x #forge:dusts/gold', '10x #forge:dusts/redstone', '10x #forge:dusts/sulfur')
		.outputFluids(Fluid.of('gtceu:glowstone', 2880))
		.duration(12000)
		.EUt(GTValues.VA[GTValues.LV])
		.blastFurnaceTemp(1064)
		.circuit(9)

    event.recipes.gtceu.implosion_compressor('tfg:glowstone_block_dynamite')
        .itemInputs('5x #forge:dusts/glowstone', '2x gtceu:dynamite')
        .itemOutputs('1x minecraft:glowstone')
        .chancedOutput('#forge:dusts/ash', 2500, 0)
        .duration(20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.implosion_compressor('tfg:glowstone_block_tnt')
        .itemInputs('5x #forge:dusts/glowstone', '4x minecraft:tnt')
        .itemOutputs('1x minecraft:glowstone')
        .chancedOutput('#forge:dusts/ash', 2500, 0)
        .duration(20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.implosion_compressor('tfg:glowstone_block_industrial_tnt')
        .itemInputs('5x #forge:dusts/glowstone', '1x gtceu:industrial_tnt')
        .itemOutputs('1x minecraft:glowstone')
        .chancedOutput('#forge:dusts/ash', 2500, 0)
        .duration(20)
        .EUt(GTValues.VA[GTValues.LV])

	// New Alloys

	event.recipes.gtceu.mixer('tfg:ostrum_iodide')
		.itemInputs('1x #forge:dusts/iodine', '2x #forge:dusts/ostrum')
		.itemOutputs('3x #forge:dusts/ostrum_iodide')
		.duration(20 * 12)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.mixer('tfg:tungsten_bismuth_oxide_composite')
		.itemInputs('2x #forge:dusts/bismuth', 'gtceu:tungsten_dust')
		.inputFluids(Fluid.of('gtceu:oxygen', 3000))
		.itemOutputs('3x tfg:tungsten_bismuth_oxide_composite_dust')
		.duration(20 * 12)
		.EUt(GTValues.VA[GTValues.EV])
}
