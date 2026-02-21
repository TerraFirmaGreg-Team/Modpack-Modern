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
}