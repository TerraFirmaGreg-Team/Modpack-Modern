function registerTFGHVMaterialRecipes(event) {

	event.recipes.gtceu.mixer('tfg:mo_50_re_dust')
		.itemInputs(
			Item.of('gtceu:rhenium_dust', 1),
			Item.of('gtceu:molybdenum_dust', 1))
		.itemOutputs(Item.of('tfg:mo_50_re_dust', 2))
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.MV])
		.circuit(1)

	// Modify Electronic Component to require Silicon Rubber

	event.replaceInput({ id: 'gtceu:shaped/filter_casing' }, Item.of('gtceu:steel_frame'), Item.of('tfg:mo_50_re_frame'))
	event.remove({ id: 'gtceu:assembler/plascrete'})
	event.remove({ id: 'gtceu:assembler/cleanroom_glass'})

	event.recipes.gtceu.assembler('tfg:plascrete')
		.itemInputs(
			Item.of('tfg:mo_50_re_frame', 1),
			Item.of('gtceu:polyethylene_plate', 6),
			Item.of('gtceu:steel_plate', 2))
		.inputFluids(Fluid.of('gtceu:concrete', 144))
		.itemOutputs(Item.of('gtceu:plascrete', 2))
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.MV])
		.addMaterialInfo(true, true)

	event.recipes.gtceu.assembler('tfg:cleanroom_glass')
		.itemInputs(
			Item.of('tfg:mo_50_re_frame', 1),
			Item.of('gtceu:polyethylene_plate', 6),
			Item.of('gtceu:steel_plate', 2))
		.inputFluids(Fluid.of('gtceu:glass', 144))
		.itemOutputs(Item.of('gtceu:cleanroom_glass', 2))
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.MV])
		.addMaterialInfo(true, true)

	// Allow HV Cutter at HV (Ultimet)

	event.recipes.gtceu.chemical_bath('tfg:ultimet_cool_down')
		.itemInputs(Item.of('#forge:hot_ingots/ultimet', 1))
		.inputFluids(Fluid.of('minecraft:water', 100))
		.itemOutputs(Item.of('#forge:ingots/ultimet', 1))
		.duration(20*36)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.chemical_bath('tfg:ultimet_cool_down_distilled_water')
		.itemInputs(Item.of('#forge:hot_ingots/ultimet', 1))
		.inputFluids(Fluid.of('gtceu:distilled_water', 100))
		.itemOutputs(Item.of('#forge:ingots/ultimet', 1))
		.duration(20*21)
		.EUt(GTValues.VA[GTValues.MV])

	// Rutile changes

	event.remove({ id: 'gtceu:chemical_reactor/titanium_tetrachloride'})
	event.remove({ id: 'gtceu:large_chemical_reactor/titanium_tetrachloride'})
	event.recipes.gtceu.chemical_reactor('tfg:titanium_tetrachloride')
		.itemInputs(Item.of('gtceu:carbon_dust', 2), Item.of('gtceu:rutile_dust', 3))
		.inputFluids(Fluid.of('gtceu:chlorine', 4000))
		.outputFluids(Fluid.of('gtceu:carbon_monoxide', 2000), Fluid.of('gtceu:titanium_tetrachloride', 1000))
		.duration(20*20)
		.EUt(GTValues.VA[GTValues.HV])

	event.remove({ id: 'gtceu:electrolyzer/bauxite_electrolysis'})
	event.recipes.gtceu.electrolyzer('tfg:bauxite_electrolysis')
		.itemInputs(Item.of('gtceu:bauxite_dust', 15))
		.itemOutputs(Item.of('gtceu:aluminium_dust', 6))
		.outputFluids(Fluid.of('gtceu:oxygen', 9000))
		.duration(20*13.5)
		.EUt(GTValues.VA[GTValues.MV])

	//#region Stone dust stuffs

	// Perlite

	event.remove({ id: 'gtceu:extractor/extract_igneous_mafic_dust'})
    event.recipes.gtceu.coal_liquefaction_tower('tfg:molten_mafic_silicate')
        .itemInputs(Item.of('tfg:igneous_mafic_dust', 16))
        .perTick(true)
	    .chancedFluidInput(Fluid.of('gtceu:hydrogen', 1), 1000, 0)
	    .perTick(false)
		.outputFluids(Fluid.of('tfg:igneous_mafic', 144*16))
        .duration(20 * 50)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.mixer('tfg:obsidian_dust')
        .inputFluids(Fluid.of('tfg:igneous_mafic', 144), Fluid.of('gtceu:ice', 1000))
		.itemOutputs(Item.of('gtceu:obsidian_dust', 1))
        .duration(20 * 28)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.gas_pressurizer('tfg:obsidian_dust')
		.itemInputs(Item.of('gtceu:obsidian_dust', 1))
        .inputFluids(Fluid.of('gtceu:steam', 1000))
		.itemOutputs(Item.of('gtceu:perlite_dust', 1))
        .duration(20 * 16)
        .EUt(GTValues.VA[GTValues.HV]);

	// Alumina

	event.recipes.gtceu.large_chemical_reactor('tfg:aluminium_sulfate_lcr')
		.itemInputs(Item.of('tfg:igneous_felsic_dust', 1))
		.inputFluids(Fluid.of('gtceu:sulfuric_acid', 2000))
		.itemOutputs(Item.of('tfg:aluminium_sulfate_dust', 1), Item.of('gtceu:potassium_sulfate_dust', 1), Item.of('gtceu:silicon_dioxide_dust'))
		.outputFluids(Fluid.of('minecraft:water', 1000))
		.duration(20 * 84)
		.EUt(GTValues.VA[GTValues.LV])
		.circuit(2)

	event.recipes.gtceu.chemical_bath('tfg:aluminium_hydroxide_dust')
		.itemInputs(Item.of('tfg:aluminium_sulfate_dust', 1))
		.inputFluids(Fluid.of('tfc:lye', 2000))
		.itemOutputs(Item.of('tfg:aluminium_hydroxide_dust', 2), Item.of('tfg:sodium_sulfate_dust', 1))
		.duration(20 * 16)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.arc_furnace('tfg:alumina_dust')
		.itemInputs(Item.of('tfg:aluminium_hydroxide_dust', 2))
		.inputFluids(Fluid.of('gtceu:oxygen', 100))
		.itemOutputs(Item.of('tfg:alumina_dust', 1))
		.duration(20 * 8)
		.EUt(GTValues.VA[GTValues.HV])

	// Perlite is also a water purifier irl!
	event.recipes.gtceu.distillery('tfg:distilled_water_perlite')
		.itemInputs('#forge:dusts/perlite')
		.inputFluids(Fluid.of('minecraft:water', 2000))
		.outputFluids(Fluid.of('gtceu:distilled_water', 2000))
		.duration(20*5)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.distillery('tfg:distilled_water_zeolite')
		.itemInputs('#forge:dusts/zeolite')
		.inputFluids(Fluid.of('minecraft:water', 2000))
		.outputFluids(Fluid.of('gtceu:distilled_water', 2000))
		.duration(20*5)
		.EUt(GTValues.VA[GTValues.LV])

	// Change Titanium to require Nichrome Coils

	event.remove({ id: 'gtceu:electric_blast_furnace/titanium_from_tetrachloride'})
	event.recipes.gtceu.electric_blast_furnace('tfg:titanium_from_tetrachloride')
		.itemInputs(Item.of('gtceu:magnesium_dust', 2))
		.inputFluids(Fluid.of('gtceu:titanium_tetrachloride', 1000))
		.itemOutputs(Item.of('gtceu:hot_titanium_ingot', 1), Item.of('gtceu:magnesium_chloride_dust', 6))
		.duration(20 * 30)
		.blastFurnaceTemp(2750)
		.EUt(GTValues.VA[GTValues.HV])

	// Let's also do NaqLine here
	event.remove({ id: 'gtceu:electric_blast_furnace/titanium_trifluoride_separation'})
	event.recipes.gtceu.electric_blast_furnace('tfg:titanium_trifluoride_separation')
		.itemInputs(Item.of('gtceu:titanium_trifluoride_dust', 4))
		.inputFluids(Fluid.of('gtceu:hydrogen', 3000))
		.itemOutputs(Item.of('gtceu:hot_titanium_ingot', 1))
		.outputFluids(Fluid.of('gtceu:hydrofluoric_acid', 3000))
		.duration(20 * 30)
		.blastFurnaceTemp(2750)
		.EUt(GTValues.VA[GTValues.HV])

	//#endregion

	//#region Inconel Line

	event.recipes.gtceu.vacuum_freezer('tfg:inert_furnace_atmosphere_dumb')
		.itemInputs(Item.of('tfc:pure_nitrogen', 64))
		.inputFluids(Fluid.of('gtceu:argon', 32000), Fluid.of('gtceu:hydrogen', 64000))
		.outputFluids(Fluid.of('tfg:inert_furnace_atmosphere', 600))
		.duration(20 * 200)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.mixer('tfg:weak_inconel_718')
		.inputFluids(Fluid.of('tfg:inert_furnace_atmosphere', 1200))
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
		.outputFluids(Fluid.of('tfg:inert_furnace_atmosphere', 100))
		.duration(20 * 9.15)
		.EUt(GTValues.VA[GTValues.MV])

	// #endregion
}
