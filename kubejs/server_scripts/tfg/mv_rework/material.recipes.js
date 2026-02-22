function registerTFGMVMaterialRecipes(event) {

	event.recipes.gtceu.mixer('tfg:weak_inconel_718')
		.inputFluids(Fluid.of('tfg:inert_furnace_atmosphere', 12000))
		.itemInputs(
			Item.of('gtceu:nickel_dust', 5),
			Item.of('gtceu:chromium_dust', 2),
			Item.of('gtceu:molybdenum_dust', 2),
			Item.of('gtceu:niobium_dust', 1),
			Item.of('gtceu:aluminium_dust', 1),
			Item.of('gtceu:titanium_dust', 1))
		.itemOutputs(Item.of('tfg:weak_inconel_718_dust', 12))
		.outputFluids(Fluid.of('tfg:metal_desorption_gas', 12000))
		.duration(20 * 48)
		.EUt(GTValues.VA[GTValues.HV])
		.circuit(4)

	event.recipes.gtceu.chemical_reactor('tfg:homogenized_inconel_718')
		.inputFluids(Fluid.of('tfg:metal_desorption_gas', 1000))
		.itemInputs(Item.of('tfg:weak_inconel_718_ingot', 1))
		.itemOutputs(Item.of('tfg:homogenized_inconel_718_ingot', 1))
		.outputFluids(Fluid.of('tfg:reducing_process_gas', 1000))
		.duration(20 * 16)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.electric_blast_furnace('tfg:homogenized_inconel_718')
		.inputFluids(Fluid.of('tfg:reducing_process_gas', 1000))
		.itemInputs(Item.of('tfg:homogenized_inconel_718_ingot', 1))
		.itemOutputs(Item.of('tfg:hot_inconel_718_ingot', 1))
		.blastFurnaceTemp(2810)
		.duration(20 * 40)
		.EUt(GTValues.VA[GTValues.EV])
	/*
	event.forEachRecipe(
		{ id: 'gtceu:vacuum_freezer/cool_hot_inconel_718_ingot' },
		recipe => {recipe.outputFluids(Fluid.of('tfg:inert_furnace_atmosphere', 1000))})
	*/

	event.remove({ id: 'gtceu:vacuum_freezer/cool_hot_inconel_718_ingot' })

	event.recipes.gtceu.vacuum_freezer('tfg:cool_hot_inconel_718_ingot')
		.itemInputs('tfg:hot_inconel_718_ingot')
		.itemOutputs('tfg:inconel_718_ingot')
		.outputFluids(Fluid.of('tfg:inert_furnace_atmosphere', 1000))
		.duration(20 * 9.15)
		.EUt(GTValues.VA[GTValues.MV])

	// SiC

	event.remove({ id: 'gtceu:electric_blast_furnace/blast_rough_silicon_carbide' })
	event.remove({ id: 'gtceu:electric_blast_furnace/blast_rough_silicon_carbide_gas' })

	event.recipes.gtceu.electric_blast_furnace('tfg:rough_sic_gem')
		.itemInputs(Item.of('gtceu:quartzite_gem', 9), Item.of('gtceu:graphite_dust', 27))
		.itemOutputs(Item.of('tfg:hot_rough_silicon_carbide_ingot', 1))
		.outputFluids(Fluid.of('gtceu:carbon_monoxide', 18000))
		.blastFurnaceTemp(1760)
		.duration(20 * 180)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.electric_blast_furnace('tfg:flawless_rough_sic_gem')
		.itemInputs(Item.of('gtceu:flawless_quartzite_gem', 9), Item.of('gtceu:graphite_dust', 27))
		.itemOutputs(Item.of('tfg:hot_rough_silicon_carbide_ingot', 5))
		.outputFluids(Fluid.of('gtceu:carbon_monoxide', 18000))
		.blastFurnaceTemp(1760)
		.duration(20 * 140)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.electric_blast_furnace('tfg:exquisite_rough_sic_gem')
		.itemInputs(Item.of('gtceu:exquisite_quartzite_gem', 9), Item.of('gtceu:graphite_dust', 27))
		.itemOutputs(Item.of('tfg:hot_rough_silicon_carbide_ingot', 9))
		.outputFluids(Fluid.of('gtceu:carbon_monoxide', 18000))
		.blastFurnaceTemp(1760)
		.duration(20 * 100)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.chemical_bath('tfg:silicon_carbide')
		.itemInputs(Item.of('tfg:rough_silicon_carbide_dust',1))
		.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 1000))
		.itemOutputs(Item.of('tfg:silicon_carbide_ingot', 1))
		.duration(20*16)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.chemical_bath('tfg:silicon_carbide_cool_down')
		.itemInputs(Item.of('#forge:hot_ingots/rough_silicon_carbide', 1))
		.inputFluids(Fluid.of('minecraft:water', 100))
		.itemOutputs(Item.of('#forge:ingots/rough_silicon_carbide', 1))
		.duration(20*36)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.chemical_bath('tfg:silicon_carbide_cool_down_distilled_water')
		.itemInputs(Item.of('#forge:hot_ingots/rough_silicon_carbide', 1))
		.inputFluids(Fluid.of('gtceu:distilled_water', 100))
		.itemOutputs(Item.of('#forge:ingots/rough_silicon_carbide', 1))
		.duration(20*21)
		.EUt(GTValues.VA[GTValues.MV])

	// Rene 41

	event.recipes.gtceu.mixer('tfg:rene_41_dust')
		.itemInputs(
			Item.of('gtceu:nickel_dust', 5),
			Item.of('gtceu:chromium_dust', 3),
			Item.of('gtceu:cobalt_dust', 2),
			Item.of('gtceu:molybdenum_dust', 1),
			Item.of('gtceu:aluminium_dust', 1),
			Item.of('gtceu:boron_dust', 1))
		.inputFluids(Fluid.of('gtceu:carbon_monoxide', 1000))
		.itemOutputs(Item.of('tfg:rene_41_dust', 7))
		.outputFluids(Fluid.of('gtceu:oxygen', 1000))
		.duration(20*46)
		.EUt(GTValues.VA[GTValues.MV])
		.circuit(4)

	event.recipes.gtceu.chemical_bath('tfg:rene_41_cool_down')
		.itemInputs(Item.of('#forge:hot_ingots/rene_41', 1))
		.inputFluids(Fluid.of('minecraft:water', 100))
		.itemOutputs(Item.of('#forge:ingots/rene_41', 1))
		.duration(20*23)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.chemical_bath('tfg:rene_41_cool_down_distilled_water')
		.itemInputs(Item.of('#forge:hot_ingots/rene_41', 1))
		.inputFluids(Fluid.of('gtceu:distilled_water', 100))
		.itemOutputs(Item.of('#forge:ingots/rene_41', 1))
		.duration(20*14)
		.EUt(GTValues.VA[GTValues.MV])

	//#region Modify Electronic Component to require Silicon Rubber

	event.replaceInput({ id: 'gtceu:assembler/transistor' }, Fluid.of('gtceu:polyethylene'), Fluid.of('gtceu:silicone_rubber'))
	event.replaceInput({ id: 'gtceu:assembler/capacitor' }, Item.of('gtceu:polyethylene_foil'), Item.of('gtceu:silicone_rubber_foil'))


}