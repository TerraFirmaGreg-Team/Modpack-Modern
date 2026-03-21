"use strict";

const LOCOMETAL_BASE = [
	{ id: 'slashed_locometal', dye_group: '#railways:palettes/dye_groups/slashed' },
	{ id: 'riveted_locometal', dye_group: '#railways:palettes/dye_groups/riveted' },
	{ id: 'locometal_vent', dye_group: '#railways:palettes/dye_groups/vent' },
	{ id: 'flat_slashed_locometal', dye_group: '#railways:palettes/dye_groups/flat_riveted' },
	{ id: 'flat_riveted_locometal', dye_group: '#railways:palettes/dye_groups/flat_slashed' },
	{ id: 'plated_locometal', dye_group: '#railways:palettes/dye_groups/plated' },
	{ id: 'locometal_pillar', dye_group: '#railways:palettes/dye_groups/pillar' },
	{ id: 'locometal_smokebox', dye_group: '#railways:palettes/dye_groups/smokebox' },
	{ id: 'hazard_stripes_diagonal_on_black', dye_group: '#railways:palettes/dye_groups/hazard_stripes_diagonal_black' },
	{ id: 'hazard_stripes_chevron_on_black', dye_group: '#railways:palettes/dye_groups/hazard_stripes_chevron_black' },
	{ id: 'hazard_stripes_diagonal_on_white', dye_group: '#railways:palettes/dye_groups/hazard_stripes_diagonal_white' },
	{ id: 'hazard_stripes_chevron_on_white', dye_group: '#railways:palettes/dye_groups/hazard_stripes_chevron_white' }
]

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

const registerRailwaysLocometalRecipes = (event) => {
	// Base & Wrapped Locometal Boiler
	event.shapeless('railways:locometal_boiler', [
		'#railways:palettes/cycle_groups/netherite/base',
		'create:fluid_tank',
		'#forge:tools/screwdrivers'
	]).id('tfg:shapeless/locometal_boiler')

	event.recipes.createItemApplication(['railways:brass_wrapped_locometal_boiler'], ['railways:locometal_boiler', '#forge:plates/brass'])
		.id('tfg:railways/item_application/brass_wrapped_locometal_boiler')
	event.recipes.createItemApplication(['railways:copper_wrapped_locometal_boiler'], ['railways:locometal_boiler', '#forge:plates/copper'])
		.id('tfg:railways/item_application/copper_wrapped_locometal_boiler')
	event.recipes.createItemApplication(['railways:iron_wrapped_locometal_boiler'], ['railways:locometal_boiler', '#forge:plates/wrought_iron'])
		.id('tfg:railways/item_application/iron_wrapped_locometal_boiler')

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
	event.recipes.createItemApplication(['railways:brass_wrapped_locometal'], ['railways:slashed_locometal', '#forge:bolts/brass'])
		.id('tfg:railways/item_application/brass_wrapped_locometal')
	event.recipes.createItemApplication(['railways:copper_wrapped_locometal'], ['railways:slashed_locometal', '#forge:bolts/copper'])
		.id('tfg:railways/item_application/copper_wrapped_locometal')
	event.recipes.createItemApplication(['railways:iron_wrapped_locometal'], ['railways:slashed_locometal', '#forge:bolts/wrought_iron'])
		.id('tfg:railways/item_application/iron_wrapped_locometal')

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
	event.recipes.createItemApplication(['railways:wrapped_locometal_smokebox'], ['railways:locometal_smokebox', '#forge:bolts/brass'])
		.id('tfg:railways/item_application/wrapped_locometal_smokebox')
	event.recipes.createItemApplication(['railways:copper_wrapped_locometal_smokebox'], ['railways:locometal_smokebox', '#forge:bolts/copper'])
		.id('tfg:railways/item_application/copper_wrapped_locometal_smokebox')
	event.recipes.createItemApplication(['railways:iron_wrapped_locometal_smokebox'], ['railways:locometal_smokebox', '#forge:bolts/wrought_iron'])
		.id('tfg:railways/item_application/iron_wrapped_locometal_smokebox')

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
	LOCOMETAL_BASE.forEach(locometal => {
		event.stonecutting(`8x railways:${locometal.id}`, '#forge:storage_blocks/iron');
		event.stonecutting(`16x railways:${locometal.id}`, '#forge:storage_blocks/wrought_iron');
		event.stonecutting(`32x railways:${locometal.id}`, '#forge:storage_blocks/steel');
		event.stonecutting(`railways:${locometal.id}`, `#railways:palettes/cycle_groups/netherite/base`);
		event.recipes.gtceu.chemical_bath(`tfg:undying/locometal/${locometal.id}`)
			.itemInputs(`${locometal.dye_group}`)
			.inputFluids(Fluid.of(`gtceu:chlorine`, 18))
			.itemOutputs(Item.of(`railways:${locometal.id}`))
			.duration(20)
			.EUt(24)
			.category(GTRecipeCategories.CHEM_DYES)
	})

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
		'create:flywheel',
		'#forge:tools/screwdrivers'
	]).id('tfg:shapeless/create_flywheel_to_snr_flywheel')
	event.shapeless('create:flywheel', [
		'railways:locometal_flywheel',
		'#forge:tools/screwdrivers'
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

	global.LOCOMETAL_COLORS.forEach(x => {
		x.colors.forEach((color, i) => {
			// Base Colored Recipes
			LOCOMETAL_BASE.forEach(locometal => {
				event.stonecutting(`railways:${color}_${locometal.id}`, `#railways:palettes/cycle_groups/${color}/base`);
				event.recipes.gtceu.chemical_bath(`tfg:chemical_dying_locometal/${locometal.id}/${color}`)
					.itemInputs(`${locometal.dye_group}`)
					.inputFluids(Fluid.of(`${x.dye}`, 18))
					.itemOutputs(Item.of(`railways:${color}_${locometal.id}`))
					.circuit(i + 1)
					.duration(20)
					.EUt(24)
					.category(GTRecipeCategories.CHEM_DYES)
			})
				
			// Wrapped Locometal Colored Recipes
			event.recipes.createItemApplication([`railways:${color}_brass_wrapped_locometal`], [`railways:${color}_slashed_locometal`, '#forge:bolts/brass'])
				.id(`tfg:railways/item_application/${color}_brass_wrapped_locometal`)
			event.recipes.createItemApplication([`railways:${color}_copper_wrapped_locometal`], [`railways:${color}_slashed_locometal`, '#forge:bolts/copper'])
				.id(`tfg:railways/item_application/${color}_copper_wrapped_locometal`)
			event.recipes.createItemApplication([`railways:${color}_iron_wrapped_locometal`], [`railways:${color}_slashed_locometal`, '#forge:bolts/wrought_iron'])
				.id(`tfg:railways/item_application/${color}_iron_wrapped_locometal`)

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
			event.shapeless(`railways:${color}_locometal_boiler`, [
				`#railways:palettes/cycle_groups/${color}/base`,
				`create:fluid_tank`,
				`#forge:tools/screwdrivers`
			]).id(`tfg:shapeless/${color}_locometal_boiler`)

			event.recipes.createItemApplication([`railways:${color}_brass_wrapped_locometal_boiler`], [`railways:${color}_locometal_boiler`, '#forge:plates/brass'])
				.id(`tfg:railways/item_application/${color}_brass_wrapped_locometal_boiler`)
			event.recipes.createItemApplication([`railways:${color}_copper_wrapped_locometal_boiler`], [`railways:${color}_locometal_boiler`, '#forge:plates/copper'])
				.id(`tfg:railways/item_application/${color}_copper_wrapped_locometal_boiler`)
			event.recipes.createItemApplication([`railways:${color}_iron_wrapped_locometal_boiler`], [`railways:${color}_locometal_boiler`, '#forge:plates/wrought_iron'])
				.id(`tfg:railways/item_application/${color}_iron_wrapped_locometal_boiler`)

			event.recipes.gtceu.assembler(`tfg:railways/${color}_locometal_boiler`)
				.itemInputs(`#railways:palettes/cycle_groups/${color}/base`, `create:fluid_tank`)
				.circuit(1)
				.itemOutputs(`railways:${color}_locometal_boiler`)
				.duration(200)
				.EUt(28)

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
			event.recipes.createItemApplication([`railways:${color}_wrapped_locometal_smokebox`], [`railways:${color}_locometal_smokebox`, '#forge:bolts/brass'])
				.id(`tfg:railways/item_application/${color}_wrapped_locometal_smokebox`)
			event.recipes.createItemApplication([`railways:${color}_copper_wrapped_locometal_smokebox`], [`railways:${color}_locometal_smokebox`, '#forge:bolts/copper'])
				.id(`tfg:railways/item_application/${color}_copper_wrapped_locometal_smokebox`)
			event.recipes.createItemApplication([`railways:${color}_iron_wrapped_locometal_smokebox`], [`railways:${color}_locometal_smokebox`, '#forge:bolts/wrought_iron'])
				.id(`tfg:railways/item_application/${color}_iron_wrapped_locometal_smokebox`)

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