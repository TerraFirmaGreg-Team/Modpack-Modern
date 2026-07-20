// priority: 0

function registerTFGBeneathOreProcRecipes(event) {

	// Phlogopite

	event.recipes.gtceu.chemical_bath('tfg:hydrofluoric_acid_from_phlogopite_dust')
		.itemInputs(Item.of('gtceu:phlogopite_dust', 20))
		.inputFluids(Fluid.of('gtceu:sulfuric_acid', 4000))
		.outputFluids(Fluid.of('gtceu:hydrofluoric_acid', 4000))
		.itemOutputs(Item.of('gtceu:potassium_sulfate_dust', 7), Item.of('gtceu:silicon_dioxide_dust', 9))
		.duration(20 * 12)
		.EUt(GTValues.VA[GTValues.MV])

	//#region Molybdenum Line

	// Remove Recipe - Done with Material Flag and Ore Properties

	// Molybdenite Line

	event.recipes.gtceu.electric_blast_furnace('tfg:molybdenum_trioxide_dust_from_molybdenite_dust')
		.itemInputs(Item.of('gtceu:molybdenite_dust', 6))
		.inputFluids(Fluid.of('gtceu:oxygen', 14000))
		.outputFluids(Fluid.of('gtceu:sulfur_dioxide', 4000))
		.itemOutputs(Item.of('tfg:molybdenum_trioxide_dust', 8))
		.duration(32 * 20)
        .EUt(GTValues.VA[GTValues.MV])
        .blastFurnaceTemp(1070)

	event.recipes.gtceu.chemical_reactor('tfg:molybdenum_dust_from_molybdenum_trioxide_dust')
		.itemInputs(Item.of('tfg:molybdenum_trioxide_dust', 4))
		.inputFluids(Fluid.of('gtceu:hydrogen', 6000))
		.outputFluids(Fluid.of('minecraft:water', 3000))
		.itemOutputs(Item.of('gtceu:molybdenum_dust', 1))
		.duration(14 * 20)
        .EUt(GTValues.VA[GTValues.MV])

	// Powellite

	event.recipes.gtceu.chemical_reactor('tfg:molybdenum_trioxide_dust_from_powellite_dust')
		.itemInputs(Item.of('gtceu:powellite_dust', 6))
		.inputFluids(Fluid.of('gtceu:sulfuric_acid', 1000))
		.outputFluids(Fluid.of('minecraft:water', 1000))
		.itemOutputs(Item.of('tfg:calcium_sulfate_dust', 6), Item.of('tfg:molybdenum_trioxide_dust', 4))
		.duration(18 * 20)
        .EUt(GTValues.VA[GTValues.MV])

	// Wulfenite

	event.recipes.gtceu.chemical_reactor('tfg:sodium_molybdate_dust')
		.itemInputs(Item.of('gtceu:wulfenite_dust', 6), Item.of('gtceu:sodium_hydroxide_dust', 6))
		.itemOutputs(Item.of('tfg:lead_hydroxide_dust', 5), Item.of('tfg:sodium_molybdate_dust', 7))
		.duration(24 * 20)
        .EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.chemical_reactor('tfg:molybdenum_trioxide_dust_from_sodium_molybdate_dust')
		.itemInputs(Item.of('tfg:sodium_molybdate_dust', 7))
		.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 2000))
		.outputFluids(Fluid.of('minecraft:water', 1000))
		.itemOutputs(Item.of('gtceu:salt_dust', 4), Item.of('tfg:molybdenum_trioxide_dust', 4))
		.duration(16 * 20)
        .EUt(GTValues.VA[GTValues.MV])

	// Custom Centrifuge for new PSG Ores

	event.recipes.gtceu.centrifuge('tfg:ferhodsite_dust')
		.itemInputs(Item.of('gtceu:ferhodsite_dust', 6))
		.itemOutputs(Item.of('gtceu:iron_dust', 2), Item.of('gtceu:nickel_dust', 3), Item.of('gtceu:copper_dust', 1))
		.duration(12 * 20)
        .EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.centrifuge('tfg:ruarsite_dust')
		.itemInputs(Item.of('gtceu:ruarsite_dust', 2))
		.itemOutputs(Item.of('gtceu:arsenic_dust', 1), Item.of('gtceu:sulfur_dust', 1))
		.duration(12 * 20)
        .EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.centrifuge('tfg:irarsite_dust')
		.itemInputs(Item.of('gtceu:irarsite_dust', 2))
		.itemOutputs(Item.of('gtceu:arsenic_dust', 1), Item.of('gtceu:sulfur_dust', 1))
		.duration(12 * 20)
        .EUt(GTValues.VA[GTValues.LV])

	// Custom PSG for new Ores - PLACE HOLDER

	event.recipes.gtceu.chemical_reactor('tfg:platinum_group_sludge_dust_from_ferhodsite')
		.itemInputs(Item.of('gtceu:purified_ferhodsite_ore', 1))
		.inputFluids(Fluid.of('gtceu:nitric_acid', 100))
		.itemOutputs(Item.of('gtceu:platinum_group_sludge_dust', 4))
		.outputFluids(Fluid.of('gtceu:sulfuric_nickel_solution', 1000))
		.duration(2.5 * 20)
        .EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.chemical_reactor('tfg:platinum_group_sludge_dust_from_ruarsite')
		.itemInputs(Item.of('gtceu:purified_ruarsite_ore', 1))
		.inputFluids(Fluid.of('gtceu:nitric_acid', 100))
		.itemOutputs(Item.of('gtceu:platinum_group_sludge_dust', 4))
		.outputFluids(Fluid.of('gtceu:sulfuric_copper_solution', 1000))
		.duration(2.5 * 20)
        .EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.chemical_reactor('tfg:platinum_group_sludge_dust_from_irarsite')
		.itemInputs(Item.of('gtceu:purified_irarsite_ore', 1))
		.inputFluids(Fluid.of('gtceu:nitric_acid', 100))
		.itemOutputs(Item.of('gtceu:platinum_group_sludge_dust', 4))
		.outputFluids(Fluid.of('gtceu:sulfuric_copper_solution', 1000))
		.duration(2.5 * 20)
        .EUt(GTValues.VA[GTValues.LV])

	// Ore processing recipes in the Ore Processing Multiblock

	// Byproduct chances per crushed ore (from the standard processing chain)
	const BYPRODUCT0_RATE = 0.3333;
	const BYPRODUCT1_RATE = 0.3333;
	const BYPRODUCT2_RATE = 0.14;

	function processOreGasTier(material, tier, inputTagPrefix, gasAmount) {
		if (!material.hasProperty(PropertyKey.ORE)) return;

		const oreProperty = material.getProperty(PropertyKey.ORE);
		const multiplier = oreProperty.getOreMultiplier();
		const materialName = material.getName();

		const inputItem = ChemicalHelper.get(inputTagPrefix, material, 1);
		if (inputItem === null || inputItem.isEmpty()) return;

		const dust = ChemicalHelper.get(TagPrefix.dust, material, 1);
		if (dust === null || dust.isEmpty()) return;

		const byproduct0 = ChemicalHelper.get(TagPrefix.dust, oreProperty.getOreByProduct(0, material), 1);
		const byproduct1 = ChemicalHelper.get(TagPrefix.dust, oreProperty.getOreByProduct(1, material), 1);
		const byproduct2 = ChemicalHelper.get(TagPrefix.dust, oreProperty.getOreByProduct(2, material), 1);

		const crushedExpectation = getCrushedExpectation(tier, multiplier);

		const recipeId = tier === 'crushed'
			? `tfg:ore_proc_gas/${materialName}`
			: `tfg:ore_proc_gas/${tier}/${materialName}`;

		let recipe = event.recipes.gtceu.ore_processing_gas(recipeId)
			.itemInputs(inputItem)
			.perTick(true)
			.inputFluids(Fluid.of('gtceu:natural_gas', gasAmount))
			.chancedFluidInput(Fluid.of('gtceu:distilled_water', 5), 1000, 0)
			.perTick(false)
			.duration(20 * 20)
			.EUt(GTValues.VA[GTValues.LV])
			.dimension("minecraft:the_nether")
			.posY(0, 40);

		addExpectedOutput(recipe, dust, crushedExpectation);
		addExpectedOutput(recipe, byproduct0, crushedExpectation * BYPRODUCT0_RATE);
		addExpectedOutput(recipe, byproduct1, crushedExpectation * BYPRODUCT1_RATE);
		addExpectedOutput(recipe, byproduct2, crushedExpectation * BYPRODUCT2_RATE);
	}

	forEachMaterial(material => {
		if (material === null || material.isNull()) return;
		if (material.hasProperty(PropertyKey.GEM)) return;

		processOreGasTier(material, 'crushed', TagPrefix.crushed, 1);
		processOreGasTier(material, 'poor', TFGTagPrefix.poorRawOre, 5);
		processOreGasTier(material, 'normal', TagPrefix.rawOre, 5);
		processOreGasTier(material, 'rich', TFGTagPrefix.richRawOre, 5);
	});

	// Ore Processing Gas — Helpers

	/*
	Calculate the expected crushed ore amount for a given tier and multiplier
	Poor: (multiplier > 1 ? multiplier / 2 : 0.5) + 0.25 + 0.125
	Normal: multiplier + 0.5 + 0.25 + 0.125
	Rich: (multiplier * 2) + 0.5 + 0.25 + 0.125
	Crushed: 1 (input is already crushed so no multiplier)
	*/

	function getCrushedExpectation(tier, multiplier) {
		switch (tier) {
			case 'poor':
				return (multiplier > 1 ? multiplier / 2 : 0.5) + 0.25 + 0.125;
			case 'normal':
				return multiplier + 0.5 + 0.25 + 0.125;
			case 'rich':
				return (multiplier * 2) + 0.5 + 0.25 + 0.125;
			case 'crushed':
			default:
				return 1.0;
		}
	}

	/*
	Splits a total expectation into guaranteed count + chanced remainder (scale /10000 for gregtech)
	*/

	function splitExpectation(expectation) {
		const guaranteed = Math.floor(expectation);
		const chance = Math.round((expectation - guaranteed) * 10000);
		return { guaranteed: guaranteed, chance: chance };
	}

	/*
	Adds an output (guaranteed part + chanced part) to a recipe
	*/

	function addExpectedOutput(recipe, item, expectation) {
		if (item === null || item.isEmpty()) return;
		const split = splitExpectation(expectation);
		if (split.guaranteed > 0)
			recipe.itemOutputs(item.copyWithCount(split.guaranteed));
		if (split.chance > 0)
			recipe.chancedOutput(item, split.chance, 0);
	}
}
