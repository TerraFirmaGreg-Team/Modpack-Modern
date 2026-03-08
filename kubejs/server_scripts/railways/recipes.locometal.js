"use strict";
// NEW ITEMS:
// Wrapped Smokebox wrapped_locometal_smokebox

const locometalDyeGroups = {
	riveted_locometal: '#railways:palettes/dye_groups/riveted',
	slashed_locometal: '#railways:palettes/dye_groups/slashed',
	locometal_vent: '#railways:palettes/dye_groups/vent',
	flat_riveted_locometal: '#railways:palettes/dye_groups/flat_riveted',
	flat_slashed_locometal: '#railways:palettes/dye_groups/flat_slashed',
	plated_locometal: '#railways:palettes/dye_groups/plated',
	locometal_pillar: '#railways:palettes/dye_groups/pillar',
	locometal_smokebox: '#railways:palettes/dye_groups/smokebox',
	hazard_stripes_diagonal_on_black: '#railways:palettes/dye_groups/hazard_stripes_diagonal_black',
	hazard_stripes_chevron_on_black: '#railways:palettes/dye_groups/hazard_stripes_chevron_black',
	hazard_stripes_diagonal_on_white: '#railways:palettes/dye_groups/hazard_stripes_diagonal_white',
	hazard_stripes_chevron_on_white: '#railways:palettes/dye_groups/hazard_stripes_chevron_white'
}

const locometalBase = {
	slashed_locometal: 'slashed_locometal',
	riveted_locometal: 'riveted_locometal',
	locometal_vent: 'locometal_vent',
	flat_slashed_locometal: 'flat_slashed_locometal',
	flat_riveted_locometal: 'flat_riveted_locometal',
	plated_locometal: 'plated_locometal',
	locometal_pillar: 'locometal_pillar',
	locometal_smokebox: 'locometal_smokebox',
	hazard_stripes_diagonal_on_black: 'hazard_stripes_diagonal_on_black',
	hazard_stripes_chevron_on_black: 'hazard_stripes_chevron_on_black',
	hazard_stripes_diagonal_on_white: 'hazard_stripes_diagonal_on_white',
	hazard_stripes_chevron_on_white: 'hazard_stripes_chevron_on_white'
}

const LOCOMETAL_SPECIAL = [
	{ id: 'locometal_flywheel', dye_group: '#railways:palettes/dye_groups/flywheel', multiplier: 5 },
	{ id: 'locometal_end_ladder', dye_group: '#railways:palettes/dye_groups/end_ladder', multiplier: 0.5 },
	{ id: 'locometal_rung_ladder', dye_group: '#railways:palettes/dye_groups/rung_ladder', multiplier: 0.5 },
	{ id: 'locometal_trapdoor', dye_group: '#railways:palettes/dye_groups/trapdoor', multiplier: 2 },
	{ id: 'hinged_locometal_door', dye_group: '#railways:palettes/dye_groups/hinged_door', multiplier: 4 },
	{ id: 'sliding_locometal_door', dye_group: '#railways:palettes/dye_groups/sliding_door', multiplier: 4 },
	{ id: 'folding_locometal_door', dye_group: '#railways:palettes/dye_groups/folding_door', multiplier: 4 },
	{ id: 'round_pane_locometal_window', dye_group: '#railways:palettes/dye_groups/round_pane_window', multiplier: 1 },
	{ id: 'single_pane_locometal_window', dye_group: '#railways:palettes/dye_groups/single_pane_window', multiplier: 1 },
	{ id: 'two_pane_locometal_window', dye_group: '#railways:palettes/dye_groups/two_pane_window', multiplier: 1 },
	{ id: 'four_pane_locometal_window', dye_group: '#railways:palettes/dye_groups/four_pane_window', multiplier: 1 }
]

const LOCOMETAL_COLORS = [
	{ dye: 'tfc:brown_dye', colors: [ 'brown', 'maroon' ] },
	{ dye: 'tfc:red_dye', colors: [ 'red', 'vermilion' ] },
	{ dye: 'tfc:orange_dye', colors: [ 'orange', 'granite' ] },
	{ dye: 'tfc:yellow_dye', colors: [ 'yellow', 'ochrum', 'dripstone' ] },
	{ dye: 'tfc:lime_dye', colors: [ 'lime', 'olive_green', 'chartreuse' ] },
	{ dye: 'tfc:green_dye', colors: [ 'green', 'pine_green' ] },
	{ dye: 'tfc:cyan_dye', colors: [ 'cyan', 'sea_green' ] },
	{ dye: 'tfc:light_blue_dye', colors: [ 'light_blue', 'turquoise' ] },
	{ dye: 'tfc:blue_dye', colors: [ 'blue', 'royal_blue' ] },
	{ dye: 'tfc:purple_dye', colors: [ 'purple' ] },
	{ dye: 'tfc:magenta_dye', colors: [ 'magenta' ] },
	{ dye: 'tfc:pink_dye', colors: [ 'pink' ] },
	{ dye: 'tfc:white_dye', colors: [ 'white', 'diorite' ] },
	{ dye: 'tfc:light_gray_dye', colors: [ 'light_gray', 'limestone' ] },
	{ dye: 'tfc:gray_dye', colors: [ 'gray', 'tuff' ] },
	{ dye: 'tfc:black_dye', colors: [ 'black', 'scorchia' ] }
]

const registerRailwaysLocometalRecipes = (event) => {
	// Base & Wrapped Locometal Boiler
	event.recipes.gtceu.assembler(`tfg:railways/locometal_boiler`)
		.itemInputs('#railways:palettes/cycle_groups/netherite/base', `create:fluid_tank`)
		.circuit(1)
		.itemOutputs(`railways:locometal_boiler`)
		.duration(200)
		.EUt(28)
	event.recipes.gtceu.assembler(`tfg:railways/brass_wrapped_locometal_boiler`)
		.itemInputs(`railways:brass_wrapped_locometal`, `create:fluid_tank`)
		.circuit(1)
		.itemOutputs(`railways:brass_wrapped_locometal_boiler`)
		.duration(200)
		.EUt(28)
	event.recipes.gtceu.assembler(`tfg:railways/copper_wrapped_locometal_boiler`)
		.itemInputs(`railways:copper_wrapped_locometal`, `create:fluid_tank`)
		.circuit(1)
		.itemOutputs(`railways:copper_wrapped_locometal_boiler`)
		.duration(200)
		.EUt(28)
	event.recipes.gtceu.assembler(`tfg:railways/iron_wrapped_locometal_boiler`)
		.itemInputs(`railways:iron_wrapped_locometal`, `create:fluid_tank`)
		.circuit(1)
		.itemOutputs(`railways:iron_wrapped_locometal_boiler`)
		.duration(200)
		.EUt(28)
	
	// Wrapped Locometal Recipes
	event.recipes.gtceu.chemical_bath(`railways:brass_wrapped_locometal`)
		.itemInputs(`railways:slashed_locometal`)
		.inputFluids('gtceu:brass 18')
		.itemOutputs('railways:brass_wrapped_locometal')
		.duration(20)
		.EUt(24)
		.category(GTRecipeCategories.CHEM_DYES);
	event.recipes.gtceu.chemical_bath(`railways:copper_wrapped_locometal`)
		.itemInputs(`railways:slashed_locometal`)
		.inputFluids('gtceu:copper 18')
		.itemOutputs('railways:copper_wrapped_locometal')
		.duration(20)
		.EUt(24)
		.category(GTRecipeCategories.CHEM_DYES);
	event.recipes.gtceu.chemical_bath(`railways:iron_wrapped_locometal`)
		.itemInputs(`railways:slashed_locometal`)
		.inputFluids('gtceu:wrought_iron 18')
		.itemOutputs('railways:iron_wrapped_locometal')
		.duration(20)
		.EUt(24)
		.category(GTRecipeCategories.CHEM_DYES);

	// Wrapped Smokebox Recipes
	event.recipes.gtceu.chemical_bath(`railways:brass_wrapped_locometal_smokebox`)
		.itemInputs(`railways:locometal_smokebox`)
		.inputFluids('gtceu:brass 18')
		.itemOutputs('railways:wrapped_locometal_smokebox')
		.duration(20)
		.EUt(24)
		.category(GTRecipeCategories.CHEM_DYES);
	event.recipes.gtceu.chemical_bath(`railways:copper_wrapped_locometal_smokebox`)
		.itemInputs(`railways:locometal_smokebox`)
		.inputFluids('gtceu:copper 18')
		.itemOutputs('railways:copper_wrapped_locometal_smokebox')
		.duration(20)
		.EUt(24)
		.category(GTRecipeCategories.CHEM_DYES);
	event.recipes.gtceu.chemical_bath(`railways:iron_wrapped_locometal_smokebox`)
		.itemInputs(`railways:locometal_smokebox`)
		.inputFluids('gtceu:wrought_iron 18')
		.itemOutputs('railways:iron_wrapped_locometal_smokebox')
		.duration(20)
		.EUt(24)
		.category(GTRecipeCategories.CHEM_DYES);

	// Base Locometal Regular & Undying Recipes
	for (let locometal in locometalBase) {
		event.stonecutting(`8x railways:${locometal}`, '#forge:storage_blocks/iron');
		event.stonecutting(`16x railways:${locometal}`, '#forge:storage_blocks/wrought_iron');
		event.stonecutting(`32x railways:${locometal}`, '#forge:storage_blocks/steel');
		event.stonecutting(`railways:${locometal}`, `#railways:palettes/cycle_groups/netherite/base`);
		event.recipes.gtceu.chemical_bath(`tfg:undying/locometal/${locometal}`)
			.itemInputs(Item.of(locometalDyeGroups[`${locometal}`], 1))
			.inputFluids(Fluid.of(`gtceu:chlorine`, 18))
			.itemOutputs(Item.of(`railways:${locometal}`))
			.duration(20)
			.EUt(24)
			.category(GTRecipeCategories.CHEM_DYES)
	}

	// Base Functional Decorative Block Recipes
	event.stonecutting(`16x railways:locometal_end_ladder`, '#forge:storage_blocks/iron');
	event.stonecutting(`32x railways:locometal_end_ladder`, '#forge:storage_blocks/wrought_iron');
	event.stonecutting(`64x railways:locometal_end_ladder`, '#forge:storage_blocks/steel');

	event.stonecutting(`16x railways:locometal_rung_ladder`, '#forge:storage_blocks/iron');
	event.stonecutting(`32x railways:locometal_rung_ladder`, '#forge:storage_blocks/wrought_iron');
	event.stonecutting(`64x railways:locometal_rung_ladder`, '#forge:storage_blocks/steel');

	event.stonecutting(`4x railways:locometal_trapdoor`, '#forge:storage_blocks/iron');
	event.stonecutting(`8x railways:locometal_trapdoor`, '#forge:storage_blocks/wrought_iron');
	event.stonecutting(`16x railways:locometal_trapdoor`, '#forge:storage_blocks/steel');

	event.stonecutting(`2x railways:hinged_locometal_door`, '#forge:storage_blocks/iron');
	event.stonecutting(`4x railways:hinged_locometal_door`, '#forge:storage_blocks/wrought_iron');
	event.stonecutting(`8x railways:hinged_locometal_door`, '#forge:storage_blocks/steel');

	event.stonecutting(`2x railways:sliding_locometal_door`, '#forge:storage_blocks/iron');
	event.stonecutting(`4x railways:sliding_locometal_door`, '#forge:storage_blocks/wrought_iron');
	event.stonecutting(`8x railways:sliding_locometal_door`, '#forge:storage_blocks/steel');

	event.stonecutting(`2x railways:folding_locometal_door`, '#forge:storage_blocks/iron');
	event.stonecutting(`4x railways:folding_locometal_door`, '#forge:storage_blocks/wrought_iron');
	event.stonecutting(`8x railways:folding_locometal_door`, '#forge:storage_blocks/steel');

	// Base RNR Flywheel Recipes
	event.shapeless('railways:locometal_flywheel', [
		'create:flywheel'
	]).id('tfg:shapeless/create_flywheel_to_snr_flywheel')
	event.shapeless('create:flywheel', [
		'railways:locometal_flywheel'
	]).id('tfg:shapeless/snr_flywheel_to_create_flywheel')

	// Locometal Glass Block Recipes
	event.stonecutting(`railways:round_pane_locometal_window`, '#forge:glass/colorless');
	event.stonecutting(`railways:single_pane_locometal_window`, '#forge:glass/colorless');
	event.stonecutting(`railways:two_pane_locometal_window`, '#forge:glass/colorless');
	event.stonecutting(`railways:four_pane_locometal_window`, '#forge:glass/colorless');

	// Wrapped Locometal Undying Recipes
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

	// Base & Wrapped Boiler Undying Recipes
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

	// Wrapped Smokebox Undying Recipes
	event.recipes.gtceu.chemical_bath(`tfg:undying/brass_wrapped_locometal_smokebox`)
		.itemInputs('#railways:palettes/dye_groups/brass_wrapped_smokebox')
		.inputFluids(Fluid.of(`gtceu:chlorine`, 18))
		.itemOutputs(`railways:wrapped_locometal_smokebox`)
		.duration(20)
		.EUt(24)
		.category(GTRecipeCategories.CHEM_DYES);
	event.recipes.gtceu.chemical_bath(`tfg:undying/copper_wrapped_locometal_smokebox`)
		.itemInputs('#railways:palettes/dye_groups/copper_wrapped_smokebox')
		.inputFluids(Fluid.of(`gtceu:chlorine`, 18))
		.itemOutputs(`railways:copper_wrapped_locometal_smokebox`)
		.duration(20)
		.EUt(24)
		.category(GTRecipeCategories.CHEM_DYES);
	event.recipes.gtceu.chemical_bath(`tfg:undying/iron_wrapped_locometal_smokebox`)
		.itemInputs('#railways:palettes/dye_groups/iron_wrapped_smokebox')
		.inputFluids(Fluid.of(`gtceu:chlorine`, 18))
		.itemOutputs(`railways:iron_wrapped_locometal_smokebox`)
		.duration(20)
		.EUt(24)
		.category(GTRecipeCategories.CHEM_DYES)

	// Functional Decorative Block Undying Recipes
	LOCOMETAL_SPECIAL.forEach(locometal => {
		event.recipes.gtceu.chemical_bath(`tfg:undying/locometal/${locometal.id}`)
			.itemInputs(`${locometal.dye_group}`)
			.inputFluids(Fluid.of(`gtceu:chlorine`, 18 * locometal.multiplier))
			.itemOutputs(`railways:${locometal.id}`)
			.duration(20 * locometal.multiplier)
			.EUt(24)
			.category(GTRecipeCategories.CHEM_DYES)
	})

	LOCOMETAL_COLORS.forEach(x => {
		x.colors.forEach((color, i) => {
			// Base Colored Recipes
			for (let locometal in locometalBase) {
				event.recipes.gtceu.chemical_bath(`tfg:chemical_dying_locometal/${locometal}/${color}`)
					.itemInputs(Item.of(locometalDyeGroups[`${locometal}`], 1))
					.inputFluids(Fluid.of(`${x.dye}`, 18))
					.itemOutputs(Item.of(`railways:${color}_${locometal}`))
					.circuit(i + 1)
					.duration(20)
					.EUt(24)
					.category(GTRecipeCategories.CHEM_DYES)
				}
				
			// Wrapped Locometal Colored Recipes
			event.recipes.gtceu.chemical_bath(`tfg:brass_locometal_bathing/${color}`)
				.itemInputs('#railways:palettes/dye_groups/brass_wrapped_slashed')
				.inputFluids(Fluid.of(`${x.dye}`, 18))
				.itemOutputs(`railways:${color}_brass_wrapped_locometal`)
				.circuit(i + 1)
				.duration(20)
				.EUt(24)
				.category(GTRecipeCategories.CHEM_DYES)
			event.recipes.gtceu.chemical_bath(`tfg:copper_locometal_bathing/${color}`)
				.itemInputs('#railways:palettes/dye_groups/copper_wrapped_slashed')
				.inputFluids(Fluid.of(`${x.dye}`, 18))
				.itemOutputs(`railways:${color}_copper_wrapped_locometal`)
				.circuit(i + 1)
				.duration(20)
				.EUt(24)
				.category(GTRecipeCategories.CHEM_DYES)
			event.recipes.gtceu.chemical_bath(`tfg:locometal_bathing/${color}`)
				.itemInputs('#railways:palettes/dye_groups/iron_wrapped_slashed')
				.inputFluids(Fluid.of(`${x.dye}`, 18))
				.itemOutputs(`railways:${color}_iron_wrapped_locometal`)
				.circuit(i + 1)
				.duration(20)
				.EUt(24)
				.category(GTRecipeCategories.CHEM_DYES)

			// Base & Wrapped Boiler Colored Recipes
			event.recipes.gtceu.chemical_bath(`tfg:railways/locometal_boiler/color/${color}`)
				.itemInputs('#railways:palettes/dye_groups/boiler')
				.inputFluids(Fluid.of(`${x.dye}`, 72))
				.itemOutputs(`railways:${color}_locometal_boiler`)
				.circuit(i + 1)
				.duration(300)
				.EUt(4)
				.category(GTRecipeCategories.CHEM_DYES)
			event.recipes.gtceu.chemical_bath(`tfg:railways/brass_wrapped_locometal_boiler/color/${color}`)
				.itemInputs('#railways:palettes/dye_groups/brass_wrapped_boiler')
				.inputFluids(Fluid.of(`${x.dye}`, 72))
				.itemOutputs(`railways:${color}_brass_wrapped_locometal_boiler`)
				.circuit(i + 1)
				.duration(300)
				.EUt(4)
				.category(GTRecipeCategories.CHEM_DYES)
			event.recipes.gtceu.chemical_bath(`tfg:railways/copper_wrapped_locometal_boiler/color/${color}`)
				.itemInputs('#railways:palettes/dye_groups/copper_wrapped_boiler')
				.inputFluids(Fluid.of(`${x.dye}`, 72))
				.itemOutputs(`railways:${color}_copper_wrapped_locometal_boiler`)
				.circuit(i + 1)
				.duration(300)
				.EUt(4)
				.category(GTRecipeCategories.CHEM_DYES)
			event.recipes.gtceu.chemical_bath(`tfg:railways/iron_wrapped_locometal_boiler/color/${color}`)
				.itemInputs('#railways:palettes/dye_groups/iron_wrapped_boiler')
				.inputFluids(Fluid.of(`${x.dye}`, 72))
				.itemOutputs(`railways:${color}_iron_wrapped_locometal_boiler`)
				.circuit(i + 1)
				.duration(300)
				.EUt(4)
				.category(GTRecipeCategories.CHEM_DYES)

			// Wrapped Smokebox Colored Recipes
			event.recipes.gtceu.chemical_bath(`tfg:brass_locometal_smokebox_bathing/${color}`)
				.itemInputs('#railways:palettes/dye_groups/brass_wrapped_smokebox')
				.inputFluids(Fluid.of(`${x.dye}`, 18))
				.itemOutputs(`railways:${color}_wrapped_locometal_smokebox`)
				.circuit(i + 1)
				.duration(20)
				.EUt(24)
				.category(GTRecipeCategories.CHEM_DYES)
			event.recipes.gtceu.chemical_bath(`tfg:copper_locometal_smokebox_bathing/${color}`)
				.itemInputs('#railways:palettes/dye_groups/copper_wrapped_smokebox')
				.inputFluids(Fluid.of(`${x.dye}`, 18))
				.itemOutputs(`railways:${color}_copper_wrapped_locometal_smokebox`)
				.circuit(i + 1)
				.duration(20)
				.EUt(24)
				.category(GTRecipeCategories.CHEM_DYES)
			event.recipes.gtceu.chemical_bath(`tfg:iron_locometal_smokebox_bathing/${color}`)
				.itemInputs('#railways:palettes/dye_groups/iron_wrapped_smokebox')
				.inputFluids(Fluid.of(`${x.dye}`, 18))
				.itemOutputs(`railways:${color}_iron_wrapped_locometal_smokebox`)
				.circuit(i + 1)
				.duration(20)
				.EUt(24)
				.category(GTRecipeCategories.CHEM_DYES)

			LOCOMETAL_SPECIAL.forEach(locometal => {
				event.recipes.gtceu.chemical_bath(`tfg:chemical_dying_locometal/${locometal.id}/${color}`)
				.itemInputs(`${locometal.dye_group}`)
				.inputFluids(Fluid.of(`${x.dye}`, 18 * locometal.multiplier))
				.itemOutputs(`railways:${color}_${locometal.id}`)
				.circuit(i + 1)
				.duration(20 * locometal.multiplier)
				.EUt(24)
				.category(GTRecipeCategories.CHEM_DYES)
			})
		})
	})
}