"use strict";

function registerTFGCoilRecipes(event) {

	// #region Cupronickel Coil

	event.smelting('tfg:refractory_clay_dust', 'tfc:fire_clay')

	event.recipes.gtceu.chemical_reactor('tfg:magnesium_hydroxide')
		.itemInputs('#forge:dusts/magnesium')
		.inputFluids('tfc:lye 2000')
		.itemOutputs('#forge:dusts/magnesium_hydroxide', '2x #forge:dusts/sodium')
		.duration(5 * 20)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.coke_oven('tfg:magnesia')
		.itemInputs('#forge:dusts/magnesium_hydroxide')
		.itemOutputs('#forge:dusts/magnesia')
		.duration(20 * 20)

	event.recipes.gtceu.pyrolyse_oven('tfg:magnesia')
		.itemInputs('#forge:dusts/magnesium_hydroxide')
		.itemOutputs('#forge:dusts/magnesia')
		.duration(20 * 20)
		.EUt(GTValues.VHA[GTValues.MV])

	event.recipes.gtceu.mixer('tfg:magnesia_refractory_brick_dust_sticky')
		.itemInputs('#forge:dusts/magnesia', '#forge:dusts/refractory_clay', '#forge:dusts/graphite', '5x gtceu:sticky_resin')
		.itemOutputs('3x #forge:dusts/magnesia_refractory_brick')
		.duration(5 * 20)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.mixer('tfg:magnesia_refractory_brick_dust_sticky_powder')
		.itemInputs('#forge:dusts/magnesia', '#forge:dusts/refractory_clay', '4x tfc:powder/graphite', '5x gtceu:sticky_resin')
		.itemOutputs('3x #forge:dusts/magnesia_refractory_brick')
		.duration(5 * 20)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.mixer('tfg:magnesia_refractory_brick_dust_phenolic')
		.itemInputs('#forge:dusts/magnesia', '#forge:dusts/refractory_clay', '#forge:dusts/graphite')
		.inputFluids(Fluid.of('tfg:phenolic_resin', 144))
		.itemOutputs('3x #forge:dusts/magnesia_refractory_brick')
		.duration(5 * 20)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.mixer('tfg:magnesia_refractory_brick_dust_phenolic_powder')
		.itemInputs('#forge:dusts/magnesia', '#forge:dusts/refractory_clay', '4x tfc:powder/graphite')
		.inputFluids(Fluid.of('tfg:phenolic_resin', 144))
		.itemOutputs('3x #forge:dusts/magnesia_refractory_brick')
		.duration(5 * 20)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.alloy_smelter('tfg:magnesia_refractory_brick')
		.itemInputs('#forge:dusts/magnesia_refractory_brick')
		.notConsumable('gtceu:ingot_casting_mold')
		.itemOutputs('#forge:ingots/magnesia_refractory_brick')
		.duration(8 * 20)
		.EUt(GTValues.VA[GTValues.LV])
		.category(GTRecipeCategories.INGOT_MOLDING)

	event.recipes.gtceu.forming_press('tfg:magnesia_refractory_brick')
		.itemInputs('#forge:dusts/magnesia_refractory_brick')
		.notConsumable('gtceu:ingot_casting_mold')
		.itemOutputs('#forge:ingots/magnesia_refractory_brick')
		.duration(4 * 20)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.assembler('gtceu:coil_cupronickel')
		.itemInputs('8x #forge:double_wires/cupronickel', '8x #forge:foils/blue_steel', '8x #forge:ingots/magnesia_refractory_brick')
		.inputFluids('gtceu:tin_alloy 144')
		.itemOutputs('gtceu:cupronickel_coil_block')
		.duration(10 * 20)
		.EUt(GTValues.VA[GTValues.LV])
		.addMaterialInfo(true, true)

	// #endregion

	// #region RTM Coil

	event.remove({ id : 'gtceu:assembler/coil_rtm_alloy' })
	event.recipes.gtceu.assembler('tfg:coil_rtm_alloy')
		.itemInputs('8x #forge:double_wires/rtm_alloy', '8x #forge:foils/vanadium_steel', '8x #forge:insulation_t2/sheet')
		.inputFluids('tfg:nichromium_iodomethylate 244')
		.itemOutputs('gtceu:rtm_alloy_coil_block')
		.duration(20 * 25)
		.EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true, true)

	event.recipes.gtceu.mixer('tfg:nichromium_iodomethylate')
		.inputFluids(Fluid.of('gtceu:nichrome', 144), Fluid.of('tfg:iodomethane', 100))
		.outputFluids('tfg:nichromium_iodomethylate 244')
		.duration(20 * 8)
		.EUt(GTValues.VA[GTValues.HV])

	// #endregion

	// #region HSS-G

	event.remove({ id : 'gtceu:assembler/coil_hssg' })
	event.recipes.gtceu.assembler('tfg:coil_hssg')
		.itemInputs('8x #forge:double_wires/hssg', '8x #forge:foils/tungsten_carbide', '2x #forge:insulation_t3/sheet')
		.inputFluids('gtceu:tungsten 144')
		.itemOutputs('gtceu:hssg_coil_block')
		.duration(20 * 30)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true, true)

	// #endregion
}