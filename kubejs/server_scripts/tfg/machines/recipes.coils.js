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
		.itemInputs('#forge:dusts/magnesia', '#forge:dusts/refractory_clay', '#forge:dusts/graphite', '10x gtceu:sticky_resin')
		.itemOutputs('3x #forge:dusts/magnesia_refractory_brick')
		.duration(5 * 20)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.mixer('tfg:magnesia_refractory_brick_dust_sticky_powder')
		.itemInputs('#forge:dusts/magnesia', '#forge:dusts/refractory_clay', '4x tfc:powder/graphite', '10x gtceu:sticky_resin')
		.itemOutputs('3x #forge:dusts/magnesia_refractory_brick')
		.duration(5 * 20)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.mixer('tfg:magnesia_refractory_brick_dust_phenolic')
		.itemInputs('#forge:dusts/magnesia', '#forge:dusts/refractory_clay', '#forge:dusts/graphite')
		.inputFluids(Fluid.of('tfg:phenolic_resin', 72))
		.itemOutputs('3x #forge:dusts/magnesia_refractory_brick')
		.duration(5 * 20)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.mixer('tfg:magnesia_refractory_brick_dust_phenolic_powder')
		.itemInputs('#forge:dusts/magnesia', '#forge:dusts/refractory_clay', '4x tfc:powder/graphite')
		.inputFluids(Fluid.of('tfg:phenolic_resin', 72))
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
		.itemInputs('8x #forge:double_wires/cupronickel', '8x #forge:foils/blue_steel', '4x #forge:ingots/magnesia_refractory_brick')
		.inputFluids('gtceu:tin_alloy 144')
		.itemOutputs('gtceu:cupronickel_coil_block')
		.duration(10 * 20)
		.EUt(GTValues.VA[GTValues.LV])
		.addMaterialInfo(true, true)

	// #endregion

	// #region Kanthal Coil

	event.remove({ id: 'gtceu:assembler/coil_kanthal' })
	event.recipes.gtceu.assembler('tfg:coil_kanthal')
		.itemInputs('8x #forge:double_wires/kanthal', '8x #forge:foils/rene_41', '1x #forge:ingots/silicon_carbide')
		.inputFluids('gtceu:cobalt 144')
		.itemOutputs('gtceu:kanthal_coil_block')
		.duration(20 * 15)
		.EUt(GTValues.VA[GTValues.MV])
		.addMaterialInfo(true, true)

	// #endregion

	// #region Nichrome Coil

	event.recipes.gtceu.gas_pressurizer('tfg:blue_alloy_desh_foil')
		.itemInputs('2x #forge:foils/desh', '2x #forge:foils/blue_alloy', 'tfc:powder/flux')
		.inputFluids('gtceu:regolith_vapor 1000')
		.itemOutputs('tfg:blue_alloy_desh_foil')
		.duration(10 * 20)
		.EUt(GTValues.VA[GTValues.HV])

	TFGHelpers.registerMaterialInfo('tfg:blue_alloy_desh_foil', [GTMaterials.BlueAlloy, 0.5, GTMaterials.get('gtceu:desh'), 0.25])

	event.recipes.gtceu.implosion_compressor('tfg:chorus_ceramic_insulation_dynamite')
		.itemInputs('ae2:sky_dust', '#forge:dusts/perlite', '#forge:dusts/kaolinite', 'minecraft:popped_chorus_fruit', 'ae2:fluix_dust', '2x gtceu:dynamite')
		.itemOutputs('tfg:chorus_ceramic_insulation')
		.chancedOutput('#forge:dusts/dark_ash', 2500, 0)
		.duration(20)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.implosion_compressor('tfg:chorus_ceramic_insulation_powderbarrel')
		.itemInputs('ae2:sky_dust', '#forge:dusts/perlite', '#forge:dusts/kaolinite', 'minecraft:popped_chorus_fruit', 'ae2:fluix_dust', '8x gtceu:powderbarrel')
		.itemOutputs('tfg:chorus_ceramic_insulation')
		.chancedOutput('#forge:dusts/dark_ash', 2500, 0)
		.duration(20)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.implosion_compressor('tfg:chorus_ceramic_insulation_tnt')
		.itemInputs('ae2:sky_dust', '#forge:dusts/perlite', '#forge:dusts/kaolinite', 'minecraft:popped_chorus_fruit', 'ae2:fluix_dust', '4x minecraft:tnt')
		.itemOutputs('tfg:chorus_ceramic_insulation')
		.chancedOutput('#forge:dusts/dark_ash', 2500, 0)
		.duration(20)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.implosion_compressor('tfg:chorus_ceramic_insulation_itnt')
		.itemInputs('ae2:sky_dust', '#forge:dusts/perlite', '#forge:dusts/kaolinite', 'minecraft:popped_chorus_fruit', 'ae2:fluix_dust', 'gtceu:industrial_tnt')
		.itemOutputs('tfg:chorus_ceramic_insulation')
		.chancedOutput('#forge:dusts/dark_ash', 2500, 0)
		.duration(20)
		.EUt(GTValues.VA[GTValues.LV])

	event.smelting('tfg:fired_chorus_ceramic_insulation', 'tfg:chorus_ceramic_insulation')
		.id('tfg:smelting/chorus_ceramic_insulation')
	
	event.remove({ id: 'gtceu:assembler/coil_nichrome' })
	event.recipes.gtceu.assembler('tfg:coil_nichrome')
		.itemInputs('8x #forge:double_wires/nichrome', '8x tfg:blue_alloy_desh_foil', '4x tfg:fired_chorus_ceramic_insulation')
		.inputFluids(Fluid.of('gtceu:magnalium', 144 * 4))
		.itemOutputs('gtceu:nichrome_coil_block')
		.duration(20 * 15)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true, true)

	// #endregion

	// #region RTM Coil

	event.remove({ id : 'gtceu:assembler/coil_rtm_alloy' })
	event.recipes.gtceu.assembler('tfg:coil_rtm_alloy')
		.itemInputs('8x #forge:double_wires/rtm_alloy', '8x #forge:foils/palladium', '4x #forge:insulation_t2/sheet')
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
		// TODO: Replace the tungsten carbide foil with zirconium diboride
		.itemInputs('8x #forge:double_wires/hssg', '8x #forge:foils/tungsten_carbide', '#forge:insulation_t3/sheet')
		// TODO: Replace tungsten liquid with something else from venus
		.inputFluids('gtceu:tungsten 144')
		.itemOutputs('gtceu:hssg_coil_block')
		.duration(20 * 30)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true, true)

	// #endregion
}