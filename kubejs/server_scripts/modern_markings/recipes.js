"use strict";

const registerModernMarkingRecipes = (event) => {
	event.remove({mod: 'ags_modernmarkings'})

	event.shaped('16x ags_modernmarkings:wall_marking_hazard_diamond', [
		' B ',
		'AEC',
		' D '
	], {
		A: '#forge:dyes/blue',
		B: '#forge:dyes/red',
		C: '#forge:dyes/yellow',
		D: '#forge:dyes/white',
		E: ChemicalHelper.get(TagPrefix.plate, GTMaterials.Steel, 1)
	}).id('tfg:shaped/wall_marking_hazard_diamond')

	event.recipes.gtceu.large_chemical_reactor('tfg:large_chemical_reactor/wall_marking_hazard_diamond')
        .inputFluids(Fluid.of('tfc:blue_dye', 144), Fluid.of('tfc:red_dye', 144), Fluid.of('tfc:yellow_dye', 144), Fluid.of('tfc:white_dye', 144))
		.itemInputs(ChemicalHelper.get(TagPrefix.plate, GTMaterials.Steel, 1))
        .itemOutputs('32x ags_modernmarkings:wall_marking_hazard_diamond')
        .duration(240)
        .EUt(GTValues.VA[GTValues.LV])

	const markings = Ingredient.of('#ags_modernmarkings:markings').itemIds.toArray().map(String);

	markings.forEach(item => {
		event.stonecutting(item, 
			Ingredient.of('#ags_modernmarkings:markings').subtract(item)
		).id(`tfg:stonecutter/${item.replace(/:/g, "/")}`)

		event.stonecutting(item, 'ags_modernmarkings:wall_marking_hazard_diamond')
			.id(`tfg:stonecutter/${item.replace(/:/g, "/")}_from_diamond`)
	})
};