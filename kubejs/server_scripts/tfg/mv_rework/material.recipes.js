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

    event.remove({ id: 'gtceu:electric_blast_furnace/blast_rough_sic' })
    event.remove({ id: 'gtceu:electric_blast_furnace/blast_rough_sic_gas' })

    event.recipes.gtceu.electric_blast_furnace('tfg:rough_sic_gem')
		.itemInputs(Item.of('gtceu:quartzite_gem', 9), Item.of('gtceu:graphite_dust', 27))
        .itemOutputs(Item.of('tfg:hot_rough_sic_ingot', 1))
        .outputFluids(Fluid.of('gtceu:carbon_monoxide', 18000))
        .blastFurnaceTemp(1760)
		.duration(20 * 180)
		.EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.electric_blast_furnace('tfg:flawless_rough_sic_gem')
		.itemInputs(Item.of('gtceu:flawless_quartzite_gem', 9), Item.of('gtceu:graphite_dust', 27))
        .itemOutputs(Item.of('tfg:hot_rough_sic_ingot', 5))
        .outputFluids(Fluid.of('gtceu:carbon_monoxide', 18000))
        .blastFurnaceTemp(1760)
		.duration(20 * 140)
		.EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.electric_blast_furnace('tfg:exquisite_rough_sic_gem')
		.itemInputs(Item.of('gtceu:exquisite_quartzite_gem', 9), Item.of('gtceu:graphite_dust', 27))
        .itemOutputs(Item.of('tfg:hot_rough_sic_ingot', 9))
        .outputFluids(Fluid.of('gtceu:carbon_monoxide', 18000))
        .blastFurnaceTemp(1760)
		.duration(20 * 100)
		.EUt(GTValues.VA[GTValues.MV])



}