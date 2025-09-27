"use strict";

const locometalDyeGroups = {
	slashed_locometal: '#railways:palettes/dye_groups/slashed',
	riveted_locometal: '#railways:palettes/dye_groups/riveted',
	locometal_pillar: '#railways:palettes/dye_groups/pillar',
	locometal_smokebox: '#railways:palettes/dye_groups/smokebox',
	plated_locometal: '#railways:palettes/dye_groups/plated',
	flat_slashed_locometal: '#railways:palettes/dye_groups/flat_slashed',
	flat_riveted_locometal: '#railways:palettes/dye_groups/flat_riveted'
}

const locometalBase = {
	slashed_locometal: 'slashed_locometal',
	riveted_locometal: 'riveted_locometal',
	locometal_pillar: 'locometal_pillar',
	locometal_smokebox: 'locometal_smokebox',
	plated_locometal: 'plated_locometal',
	flat_slashed_locometal: 'flat_slashed_locometal',
	flat_riveted_locometal: 'flat_riveted_locometal'
}

const registerRailwaysLocometalRecipes = (event) => {
	for (let locometal in locometalBase) {
		event.stonecutting(`8x railways:${locometal}`, '#forge:storage_blocks/iron');
		event.stonecutting(`16x railways:${locometal}`, '#forge:storage_blocks/wrought_iron');
		event.stonecutting(`24x railways:${locometal}`, '#forge:storage_blocks/steel');
		event.stonecutting(`railways:${locometal}`, `#railways:palettes/cycle_groups/base`);
		event.recipes.gtceu.chemical_bath(`tfg:undying/locometal/${locometal}`)
			.itemInputs(Item.of(locometalDyeGroups[`${locometal}`], 1))
			.inputFluids(Fluid.of(`gtceu:chlorine`, 18))
			.itemOutputs(Item.of(`railways:${locometal}`))
			.duration(20)
			.EUt(24)
			.category(GTRecipeCategories.CHEM_DYES)
	}

	event.recipes.gtceu.chemical_bath(`railways:iron_wrapped_locometal`)
		.itemInputs(`#railways:palettes/cycle_groups/base`)
		.inputFluids('gtceu:wrought_iron 18')
		.itemOutputs('railways:iron_wrapped_locometal')
		.duration(20)
		.EUt(24)
		.category(GTRecipeCategories.CHEM_DYES);
	event.recipes.gtceu.chemical_bath(`railways:copper_wrapped_locometal`)
		.itemInputs(`#railways:palettes/cycle_groups/base`)
		.inputFluids('gtceu:copper 18')
		.itemOutputs('railways:copper_wrapped_locometal')
		.duration(20)
		.EUt(24)
		.category(GTRecipeCategories.CHEM_DYES);
	event.recipes.gtceu.chemical_bath(`railways:brass_wrapped_locometal`)
		.itemInputs(`#railways:palettes/cycle_groups/base`)
		.inputFluids('gtceu:brass 18')
		.itemOutputs('railways:brass_wrapped_locometal')
		.duration(20)
		.EUt(24)
		.category(GTRecipeCategories.CHEM_DYES);

	event.recipes.gtceu.chemical_bath(`tfg:undying/brass_wrapped_locometal`)
		.itemInputs('#railways:palettes/dye_groups/brass_wrapped_slashed')
		.inputFluids(Fluid.of(`gtceu:chlorine`, 18))
		.itemOutputs(`railways:brass_wrapped_locometal`)
		.duration(20)
		.EUt(24)
		.category(GTRecipeCategories.CHEM_DYES);
	event.recipes.gtceu.chemical_bath(`tfg:undying/copper_wrapped_locometal`)
		.itemInputs('#railways:palettes/dye_groups/copper_wrapped_slashed')
		.inputFluids(Fluid.of(`gtceu:chlorine`, 18))
		.itemOutputs(`railways:copper_wrapped_locometal`)
		.duration(20)
		.EUt(24)
		.category(GTRecipeCategories.CHEM_DYES);
	event.recipes.gtceu.chemical_bath(`tfg:undying/iron_wrapped_locometal`)
		.itemInputs('#railways:palettes/dye_groups/iron_wrapped_slashed')
		.inputFluids(Fluid.of(`gtceu:chlorine`, 18))
		.itemOutputs(`railways:iron_wrapped_locometal`)
		.duration(20)
		.EUt(24)
		.category(GTRecipeCategories.CHEM_DYES)
	event.recipes.gtceu.chemical_bath('tfg:undying/boiler')
		.itemInputs('#railways:palettes/dye_groups/boiler')
		.inputFluids(Fluid.of(`gtceu:chlorine`, 72))
		.itemOutputs(`railways:locometal_boiler`)
		.duration(20)
		.EUt(24)
		.category(GTRecipeCategories.CHEM_DYES)
	event.recipes.gtceu.chemical_bath(`tfg:undying/brass_wrapped_boiler`)
		.itemInputs('#railways:palettes/dye_groups/brass_wrapped_boiler')
		.inputFluids(Fluid.of(`gtceu:chlorine`, 72))
		.itemOutputs(`railways:brass_wrapped_locometal_boiler`)
		.duration(20)
		.EUt(24)
		.category(GTRecipeCategories.CHEM_DYES)
	event.recipes.gtceu.chemical_bath(`tfg:undying/copper_wrapped_boiler`)
		.itemInputs('#railways:palettes/dye_groups/copper_wrapped_boiler')
		.inputFluids(Fluid.of(`gtceu:chlorine`, 72))
		.itemOutputs(`railways:copper_wrapped_locometal_boiler`)
		.duration(20)
		.EUt(24)
		.category(GTRecipeCategories.CHEM_DYES)
	event.recipes.gtceu.chemical_bath(`tfg:undying/iron_wrapped_boiler`)
		.itemInputs('#railways:palettes/dye_groups/iron_wrapped_boiler')
		.inputFluids(Fluid.of(`gtceu:chlorine`, 72))
		.itemOutputs(`railways:iron_wrapped_locometal_boiler`)
		.duration(20)
		.EUt(24)
		.category(GTRecipeCategories.CHEM_DYES)

	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		for (let locometal in locometalBase) {
			event.recipes.gtceu.chemical_bath(`tfg:chemical_dying_locometal/${locometal}/${dye}`)
				.itemInputs(Item.of(locometalDyeGroups[`${locometal}`], 1))
				.inputFluids(Fluid.of(`tfc:${dye}_dye`, 18))
				.itemOutputs(Item.of(`railways:${dye}_${locometal}`))
				.duration(20)
				.EUt(24)
				.category(GTRecipeCategories.CHEM_DYES);
		};

		event.recipes.gtceu.chemical_bath(`railways:${dye}_iron_wrapped_locometal`)
			.itemInputs(`#railways:palettes/cycle_groups/${dye}`)
			.inputFluids('gtceu:wrought_iron 18')
			.itemOutputs(`railways:${dye}_iron_wrapped_locometal`)
			.duration(20)
			.EUt(24)
			.category(GTRecipeCategories.CHEM_DYES);
		event.recipes.gtceu.chemical_bath(`railways:${dye}_copper_wrapped_locometal`)
			.itemInputs(`#railways:palettes/cycle_groups/${dye}`)
			.inputFluids('gtceu:copper 18')
			.itemOutputs(`railways:${dye}_copper_wrapped_locometal`)
			.duration(20)
			.EUt(24)
			.category(GTRecipeCategories.CHEM_DYES);
		event.recipes.gtceu.chemical_bath(`railways:${dye}_brass_wrapped_locometal`)
			.itemInputs(`#railways:palettes/cycle_groups/${dye}`)
			.inputFluids('gtceu:brass 18')
			.itemOutputs(`railways:${dye}_brass_wrapped_locometal`)
			.duration(20)
			.EUt(24)
			.category(GTRecipeCategories.CHEM_DYES);

		event.recipes.gtceu.chemical_bath(`tfg:brass_locometal_bathing/${dye}`)
			.itemInputs('#railways:palettes/dye_groups/brass_wrapped_slashed')
			.inputFluids(Fluid.of(`tfc:${dye}_dye`, 18))
			.itemOutputs(`railways:${dye}_brass_wrapped_locometal`)
			.duration(20)
			.EUt(24)
			.category(GTRecipeCategories.CHEM_DYES);
		event.recipes.gtceu.chemical_bath(`tfg:copper_locometal_bathing/${dye}`)
			.itemInputs('#railways:palettes/dye_groups/copper_wrapped_slashed')
			.inputFluids(Fluid.of(`tfc:${dye}_dye`, 18))
			.itemOutputs(`railways:${dye}_copper_wrapped_locometal`)
			.duration(20)
			.EUt(24)
			.category(GTRecipeCategories.CHEM_DYES);
		event.recipes.gtceu.chemical_bath(`tfg:locometal_bathing/${dye}`)
			.itemInputs('#railways:palettes/dye_groups/iron_wrapped_slashed')
			.inputFluids(Fluid.of(`tfc:${dye}_dye`, 18))
			.itemOutputs(`railways:${dye}_iron_wrapped_locometal`)
			.duration(20)
			.EUt(24)
			.category(GTRecipeCategories.CHEM_DYES);
		event.recipes.gtceu.chemical_bath(`tfg:railways/locometal_boiler/color/${dye}`)
			.itemInputs('#railways:palettes/dye_groups/boiler')
			.inputFluids(Fluid.of(`tfc:${dye}_dye`, 72))
			.itemOutputs(`railways:${dye}_locometal_boiler`)
			.duration(300)
			.EUt(4)
			.category(GTRecipeCategories.CHEM_DYES)
		event.recipes.gtceu.chemical_bath(`tfg:railways/brass_wrapped_locometal_boiler/color/${dye}`)
			.itemInputs('#railways:palettes/dye_groups/brass_wrapped_boiler')
			.inputFluids(Fluid.of(`tfc:${dye}_dye`, 72))
			.itemOutputs(`railways:${dye}_brass_wrapped_locometal_boiler`)
			.duration(300)
			.EUt(4)
			.category(GTRecipeCategories.CHEM_DYES)
		event.recipes.gtceu.chemical_bath(`tfg:railways/copper_wrapped_locometal_boiler/color/${dye}`)
			.itemInputs('#railways:palettes/dye_groups/copper_wrapped_boiler')
			.inputFluids(Fluid.of(`tfc:${dye}_dye`, 72))
			.itemOutputs(`railways:${dye}_copper_wrapped_locometal_boiler`)
			.duration(300)
			.EUt(4)
			.category(GTRecipeCategories.CHEM_DYES)
		event.recipes.gtceu.chemical_bath(`tfg:railways/iron_wrapped_locometal_boiler/color/${dye}`)
			.itemInputs('#railways:palettes/dye_groups/iron_wrapped_boiler')
			.inputFluids(Fluid.of(`tfc:${dye}_dye`, 72))
			.itemOutputs(`railways:${dye}_iron_wrapped_locometal_boiler`)
			.duration(300)
			.EUt(4)
			.category(GTRecipeCategories.CHEM_DYES)
	})

	// Locometal Boiler
	event.recipes.gtceu.assembler(`tfg:railways/locometal_boiler`)
		.itemInputs('#railways:palettes/cycle_groups/base', `create:fluid_tank`)
		.circuit(1)
		.itemOutputs(`railways:locometal_boiler`)
		.duration(200)
		.EUt(28)

	// Brass Wrapped Locometal Boiler
	event.recipes.gtceu.assembler(`tfg:railways/brass_wrapped_locometal_boiler`)
		.itemInputs(`railways:brass_wrapped_locometal`, `create:fluid_tank`)
		.circuit(1)
		.itemOutputs(`railways:brass_wrapped_locometal_boiler`)
		.duration(200)
		.EUt(28)

	// Copper Wrapped Locometal Boiler
	event.recipes.gtceu.assembler(`tfg:railways/copper_wrapped_locometal_boiler`)
		.itemInputs(`railways:copper_wrapped_locometal`, `create:fluid_tank`)
		.circuit(1)
		.itemOutputs(`railways:copper_wrapped_locometal_boiler`)
		.duration(200)
		.EUt(28)

	// Iron Wrapped Locometal Boiler
	event.recipes.gtceu.assembler(`tfg:railways/iron_wrapped_locometal_boiler`)
		.itemInputs(`railways:iron_wrapped_locometal`, `create:fluid_tank`)
		.circuit(1)
		.itemOutputs(`railways:iron_wrapped_locometal_boiler`)
		.duration(200)
		.EUt(28)
}