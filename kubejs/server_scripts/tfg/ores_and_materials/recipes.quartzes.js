"use strict";

function registerTFGQuartzRecipes(event) {

	//#region Rose Quartz fabrication + decomposition
	event.remove({ id: 'gtceu:autoclave/autoclave_dust_rose_quartz_water' })
	event.remove({ id: 'gtceu:autoclave/autoclave_dust_rose_quartz_distilled' })

	generateMixerRecipe(event, ['gtceu:nether_quartz_dust', '8x minecraft:redstone'], [], '9x #forge:dusts/rose_quartz', 2, [], 180, 60, 64, 'rose_quartz_dust_mixing')
	generateMixerRecipe(event, ['gtceu:tiny_nether_quartz_dust', '8x gtceu:tiny_redstone_dust'], [], '#forge:dusts/rose_quartz', 2, [], 20, 60, 64, 'tiny_rose_quartz_dust_mixing')

	event.recipes.gtceu.autoclave("autoclave_dust_rose_quartz_ice")
		.itemInputs('#forge:dusts/rose_quartz')
		.inputFluids(Fluid.of("gtceu:ice", 144))
		.itemOutputs("#forge:gems/rose_quartz")
		.duration(2000)
		.EUt(120)

	event.recipes.gtceu.electrolyzer('electrolyze_rose_quartz_dust')
		.itemInputs('9x #forge:dusts/rose_quartz')
		.itemOutputs('1x #forge:dusts/nether_quartz', '8x minecraft:redstone')
		.duration(7 * 20)
		.EUt(60)
	//#endregion

	//#region Glass

	event.recipes.gtceu.arc_furnace('glass_from_sand')
		.itemInputs('#forge:sand')
		.itemOutputs('2x minecraft:glass')
		.duration(20)
		.EUt(30)

	const TFC_BATCH_TO_BOTTLE_ASSEMBLING_RECIPE_COMPONENTS = /** @type {const} */ ([
		{ input: "tfc:silica_glass_batch", output: "tfc:silica_glass_bottle", name: "silica_glass_bottle" },
		{ input: "tfc:hematitic_glass_batch", output: "tfc:hematitic_glass_bottle", name: "hematitic_glass_bottle" },
		{ input: "tfc:olivine_glass_batch", output: "tfc:olivine_glass_bottle", name: "olivine_glass_bottle" },
		{ input: "tfc:volcanic_glass_batch", output: "tfc:volcanic_glass_bottle", name: "volcanic_glass_bottle" }
	]);

	TFC_BATCH_TO_BOTTLE_ASSEMBLING_RECIPE_COMPONENTS.forEach(element => {
		event.recipes.gtceu.alloy_smelter(`tfg:tfc/${element.name}`)
			.itemInputs(element.input)
			.notConsumable('gtceu:bottle_casting_mold')
			.itemOutputs(element.output)
			.duration(100)
			.EUt(2)
			.category(GTRecipeCategories.INGOT_MOLDING)
	})

	// Lamp Glass
	event.recipes.gtceu.alloy_smelter(`tfg:tfc/lamp_glass`)
		.itemInputs('#tfc:glass_batches')
		.notConsumable('#tfg:unfinished_lamps')
		.itemOutputs('tfc:lamp_glass')
		.duration(100)
		.EUt(2)

	event.recipes.gtceu.alloy_smelter(`tfg:tfc/lamp_glass_from_dust`)
		.itemInputs('#forge:dusts/glass')
		.notConsumable('#tfg:unfinished_lamps')
		.itemOutputs('tfc:lamp_glass')
		.duration(100)
		.EUt(2)

	// Empty Jar
	event.recipes.gtceu.alloy_smelter('tfc:jar_alloying')
		.itemInputs('#tfc:glass_batches_tier_2')
		.notConsumable('gtceu:ball_casting_mold')
		.itemOutputs('tfc:empty_jar')
		.duration(100)
		.EUt(2)
		.category(GTRecipeCategories.INGOT_MOLDING)

	event.recipes.gtceu.fluid_solidifier('tfc:jar_solidification')
		.inputFluids(Fluid.of('gtceu:glass', 144))
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('tfc:empty_jar')
		.duration(100)
		.EUt(2)

	event.recipes.gtceu.extractor('tfc:jar_extraction')
		.itemInputs('#tfc:jars')
		.outputFluids(Fluid.of('gtceu:glass', 144))
		.duration(50)
		.EUt(2)

	event.recipes.gtceu.extractor('tfc:glass_batch_extraction')
		.itemInputs('#tfc:glass_batches')
		.outputFluids(Fluid.of('gtceu:glass', 144))
		.duration(50)
		.EUt(2)

	event.recipes.gtceu.lathe('tfc:lens')
		.itemInputs('#forge:glass')
		.itemOutputs('tfc:lens')
		.duration(100)
		.EUt(16)

	// Add all glass colors to macerator/hammer
	removeMaceratorRecipe(event, 'macerate_glass');
	event.recipes.gtceu.macerator("gtceu:macerator/macerate_glass")
		.itemInputs(
			"#forge:glass"
		)
		.itemOutputs("gtceu:glass_dust")
		.duration(20)
		.EUt(2);

	removeMaceratorRecipe(event, 'macerate_glass_pane');
	event.recipes.gtceu.macerator("gtceu:macerator/macerate_glass_pane")
		.itemInputs(
			"#forge:glass_panes"
		)
		.itemOutputs("3x gtceu:tiny_glass_dust")
		.duration(6)
		.EUt(2)

	event.replaceInput({ id: "gtceu:shaped/glass_dust_hammer" },
		"minecraft:glass",
		"#forge:glass"
	);

	
	event.recipes.gtceu.alloy_smelter('glass_bottle')
		.itemInputs('#forge:dusts/glass')
		.itemOutputs('tfc:silica_glass_bottle')
		.notConsumable('gtceu:bottle_casting_mold')
		.EUt(2)
		.duration(20 * 5)
		.category(GTRecipeCategories.INGOT_MOLDING)

	
	// Glass Tube
	event.recipes.tfc.glassworking('gtceu:glass_tube', '#tfc:glass_batches_tier_3', ['blow', 'stretch', 'stretch'])
		.id('tfg:gtceu/glassworking/glass_tube')

	//#endregion
}