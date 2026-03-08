function registerTFGCircuitBoardsRecipes(event) {

	//event.remove({ input: 'gtceu:plastic_printed_circuit_board' }, Item.of('gtceu:plastic_printed_circuit_board'), Item.of('tfg:ceramic_printed_circuit_board'))

	const toRemove = [
		'gtceu:chemical_reactor/plastic_board_pbi',
		'gtceu:chemical_reactor/plastic_board_polyethylene',
		'gtceu:chemical_reactor/plastic_board_ptfe',
		'gtceu:chemical_reactor/plastic_board_pvc',
		'gtceu:large_chemical_reactor/plastic_board_pbi',
		'gtceu:large_chemical_reactor/plastic_board_polyethylene',
		'gtceu:large_chemical_reactor/plastic_board_pvc',
		'gtceu:large_chemical_reactor/plastic_board_ptfe',
		'gtceu:chemical_reactor/plastic_circuit_board_iron3',
		'gtceu:chemical_reactor/plastic_circuit_board_persulfate',
		'gtceu:large_chemical_reactor/plastic_circuit_board_iron3',
		'gtceu:large_chemical_reactor/plastic_circuit_board_persulfate'
	];
	toRemove.forEach(id => event.remove({ id: id }));

	event.recipes.gtceu.arc_furnace('tfg:mo_activated_sic_substrate')
		.itemInputs(Item.of('tfg:silicon_carbide_plate'), Item.of('gtceu:molybdenum_foil', 4))
		.inputFluids(Fluid.of('gtceu:oxygen', 1000))
		.itemOutputs(Item.of('tfg:mo_activated_sic_substrate'))
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.chemical_bath('tfg:ceramic_circuit_board')
		.itemInputs(Item.of('tfg:mo_activated_sic_substrate'), Item.of('gtceu:nickel_dust', 1))
		.inputFluids(Fluid.of('gtceu:sulfuric_acid', 250))
		.itemOutputs(Item.of('gtceu:plastic_circuit_board', 4))
		.duration(20 * 25)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.chemical_bath('tfg:ceramic_circuit_board_t3')
		.itemInputs(Item.of('tfg:chromium_bonded_beo_pcb'), Item.of('gtceu:nickel_dust', 1))
		.inputFluids(Fluid.of('gtceu:sulfuric_acid', 250))
		.itemOutputs(Item.of('gtceu:plastic_circuit_board', 12))
		.duration(20 * 25)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.chemical_reactor('tfg:ceramic_printed_circuit_board_iron_iii_chloride')
		.itemInputs(Item.of('gtceu:plastic_circuit_board'), Item.of('gtceu:annealed_copper_foil', 6))
		.inputFluids(Fluid.of('gtceu:iron_iii_chloride', 500))
		.itemOutputs(Item.of('gtceu:plastic_printed_circuit_board'))
		.duration(20 * 30)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.chemical_reactor('tfg:ceramic_printed_circuit_board_redstone_tri_p_toluenesulfonate')
		.itemInputs(Item.of('gtceu:plastic_circuit_board'), Item.of('gtceu:annealed_copper_foil', 6))
		.inputFluids(Fluid.of('tfg:redstone_tri_p_toluenesulfonate', 250))
		.itemOutputs(Item.of('gtceu:plastic_printed_circuit_board'))
		.duration(20 * 30)
		.EUt(GTValues.VA[GTValues.LV])

	// Alumina Copper Bonded Circuit Boards

	event.recipes.gtceu.arc_furnace('tfg:copper_bonded_al2o3_pcb')
		.itemInputs(Item.of('tfg:alumina_plate'), Item.of('gtceu:cupronickel_foil', 4))
		.inputFluids(Fluid.of('gtceu:oxygen', 1000))
		.itemOutputs(Item.of('tfg:copper_bonded_al2o3_pcb'))
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.chemical_bath('tfg:ceramic_circuit_board_t2')
		.itemInputs(Item.of('tfg:copper_bonded_al2o3_pcb'), Item.of('gtceu:nickel_dust', 1))
		.inputFluids(Fluid.of('gtceu:sulfuric_acid', 250))
		.itemOutputs(Item.of('gtceu:plastic_circuit_board', 8))
		.duration(20 * 25)
		.EUt(GTValues.VA[GTValues.LV])

	// Lenses

	event.recipes.gtceu.alloy_smelter('tfg:optical_borosilicate_blank')
		.itemInputs(Item.of('gtceu:borosilicate_glass_dust', 1))
		.notConsumable(Item.of('gtceu:cylinder_casting_mold'))
		.itemOutputs(Item.of('tfg:optical_borosilicate_blank', 1))
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.MV])

	function lensPolishing(event, fluid, colour, temp) {
		event.recipes.gtceu.high_temperature_precision_fabricator(`tfg:lens_${fluid}_${colour}`)
			.itemInputs('tfg:worked_optical_borosilicate_blank', '#tfg:precision_fabricator_holder_rods')
			.inputFluids(Fluid.of(`tfg:dirty_${fluid}_slurry`, 1000))
			.itemOutputs(Item.of(`#forge:lenses/${colour}`, 1))
			.addData("ebf_temp", temp)
			.duration(20 * 120)
			.EUt(GTValues.VA[GTValues.MV]);
	}

	const LENS_POLISHING = [
		['emerald', 'green', 1530],
		['sapphire', 'blue', 1530],
		['ruby', 'red', 1530],
		['diamond', 'light_blue', 1530],
		['apatite', 'cyan', 1810],
		['spessartine', 'orange', 1810],
	];

	LENS_POLISHING.forEach(([fluid, colour]) => event.remove({ output: `#forge:lenses/${colour}` }));
	LENS_POLISHING.forEach(([fluid, colour, temp]) => lensPolishing(event, fluid, colour, temp));

	// Printed Circuit boards

	const FLUID_REPLACEMENTS = [
		
		// Minimal T4 - EV
		{
			recipe: "advanced_circuit_board_persulfate",
			old: "forge:sodium_persulfate",
			new: "gtceu:iron_iii_chloride"
		},
		// Best T4 - EV
		{
			recipe: "advanced_circuit_board_iron3",
			old: "forge:iron_iii_chloride",
			new: "tfg:redstone_tri_p_toluenesulfonate"
		},
		// Minimal T5 - IV
		{
			recipe: "extreme_circuit_board_persulfate",
			old: "forge:sodium_persulfate",
			new: "tfg:redstone_tri_p_toluenesulfonate"
		},
		// Best T5 - IV
		{
			recipe: "extreme_circuit_board_iron3",
			old: "forge:iron_iii_chloride",
			new: undefined
		},
		// Minimal T6 - LuV
		{
			recipe: "elite_circuit_board_persulfate",
			old: "forge:sodium_persulfate",
			new: "tfg:redstone_tri_p_toluenesulfonate" // Redstone Etching
		},
		// Best T6 - LuV
		{ 
			recipe: "elite_circuit_board_iron3",
			old: "forge:iron_iii_chloride",
			new: undefined // New when Venus is Out
		},
		// Minimal T7 - ZPM
		{
			recipe: "wetware_circuit_board_persulfate",
			old: "forge:sodium_persulfate",
			new: "tfg:redstone_tri_p_toluenesulfonate" // New when Venus is Out
		},
		// Best T7 - ZPM
		{ 
			recipe: "wetware_circuit_board_iron3",
			old: "forge:iron_iii_chloride",
			new: undefined // New when ZPM Planet is Out
		},
	]

    var REACTOR_PREFIXES = ["gtceu:chemical_reactor", "gtceu:large_chemical_reactor"]

    FLUID_REPLACEMENTS.forEach(function(replacement) {
        REACTOR_PREFIXES.forEach(function(prefix) {
            var recipeId = replacement.recipe
            if (replacement.new !== undefined) {
                var fluidReplacements = {}
                fluidReplacements[replacement.old] = replacement.new
                global.modifyRecipe(event, recipeId, {
                    fluidReplacements: fluidReplacements
                })
            } else {
                event.remove({ id: recipeId })
            }
        })
    })
}