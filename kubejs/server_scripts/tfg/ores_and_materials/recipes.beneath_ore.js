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

	function processOreGas(material) {
		if (!material.hasProperty(PropertyKey.ORE)) return;

		const crushedOreItem = ChemicalHelper.get(TagPrefix.crushed, material, 1);
		if (crushedOreItem === null || crushedOreItem.isEmpty()) return;

		const materialName = material.getName();
		const oreProperty = material.getProperty(PropertyKey.ORE);

		// Main Output
		const dustOutput = ChemicalHelper.get(TagPrefix.dust, material, 1);
		if (dustOutput === null || dustOutput.isEmpty()) return;

		// Byproduct
		const byproduct0 = ChemicalHelper.get(TagPrefix.dust, oreProperty.getOreByProduct(0, material), 1);
		const byproduct1 = ChemicalHelper.get(TagPrefix.dust, oreProperty.getOreByProduct(1, material), 1);
		const byproduct2 = ChemicalHelper.get(TagPrefix.dust, oreProperty.getOreByProduct(2, material), 1);

		// Recipe
		let recipe = event.recipes.gtceu.ore_processing_gas(`tfg:ore_proc_gas/${materialName}`)
			.itemInputs(crushedOreItem)
			.perTick(true)
			.inputFluids(Fluid.of('gtceu:natural_gas', 5))
			.chancedFluidInput(Fluid.of('gtceu:distilled_water', 10), 5000, 0)
			.perTick(false)
			.itemOutputs(dustOutput)
			.duration(20 * 20)
			.EUt(GTValues.VA[GTValues.LV])
			.dimension("minecraft:the_nether")
			.posY(0, 40);

		// Standart chance outputee
		if (!byproduct0.isEmpty())
			recipe.chancedOutput(byproduct0, 3333, 0);
		if (!byproduct1.isEmpty())
			recipe.chancedOutput(byproduct1, 3333, 0);
		if (!byproduct2.isEmpty())
			recipe.chancedOutput(byproduct2, 1400, 0);
	}

	function processOreGasPoor(material) {
		if (!material.hasProperty(PropertyKey.ORE)) return;

		const oreProperty = material.getProperty(PropertyKey.ORE);
		const materialName = material.getName();

		const poorOreItem = ChemicalHelper.get(TFGTagPrefix.poorRawOre, material, 1);
		if (poorOreItem === null || poorOreItem.isEmpty()) return;

		const dust = ChemicalHelper.get(TagPrefix.dust, material, 1);
		if (dust === null || dust.isEmpty()) return;

		const byproduct0 = ChemicalHelper.get(TagPrefix.dust, oreProperty.getOreByProduct(0, material), 1);
		const byproduct1 = ChemicalHelper.get(TagPrefix.dust, oreProperty.getOreByProduct(1, material), 1);
		const byproduct2 = ChemicalHelper.get(TagPrefix.dust, oreProperty.getOreByProduct(2, material), 1);

		let recipe = event.recipes.gtceu.ore_processing_gas(`tfg:ore_proc_gas/poor/${materialName}`)
			.itemInputs(poorOreItem)
			.perTick(true)
			.inputFluids(Fluid.of('gtceu:natural_gas', 10))
			.chancedFluidInput(Fluid.of('gtceu:distilled_water', 10), 5000, 0)
			.perTick(false)
			.duration(20 * 20)
			.EUt(GTValues.VA[GTValues.LV])
			.dimension("minecraft:the_nether")
			.posY(0, 40);

		recipe.chancedOutput(dust, 8750, 0);
		if (!byproduct0.isEmpty())
			recipe.chancedOutput(byproduct0, 2917, 0);
		if (!byproduct1.isEmpty())
			recipe.chancedOutput(byproduct1, 2917, 0);
		if (!byproduct2.isEmpty())
			recipe.chancedOutput(byproduct2, 1225, 0);
	}

	function processOreGasNormal(material) {
		if (!material.hasProperty(PropertyKey.ORE)) return;

		const oreProperty = material.getProperty(PropertyKey.ORE);
		const materialName = material.getName();

		const oreItem = ChemicalHelper.get(TagPrefix.rawOre, material, 1);
		if (oreItem === null || oreItem.isEmpty()) return;

		const dust = ChemicalHelper.get(TagPrefix.dust, material, 1);
		if (dust === null || dust.isEmpty()) return;

		const byproduct0 = ChemicalHelper.get(TagPrefix.dust, oreProperty.getOreByProduct(0, material), 1);
		const byproduct1 = ChemicalHelper.get(TagPrefix.dust, oreProperty.getOreByProduct(1, material), 1);
		const byproduct2 = ChemicalHelper.get(TagPrefix.dust, oreProperty.getOreByProduct(2, material), 1);

		let recipe = event.recipes.gtceu.ore_processing_gas(`tfg:ore_proc_gas/normal/${materialName}`)
			.itemInputs(oreItem)
			.perTick(true)
			.inputFluids(Fluid.of('gtceu:natural_gas', 10))
			.chancedFluidInput(Fluid.of('gtceu:distilled_water', 10), 5000, 0)
			.perTick(false)
			.itemOutputs(dust)
			.duration(20 * 20)
			.EUt(GTValues.VA[GTValues.LV])
			.dimension("minecraft:the_nether")
			.posY(0, 40);

		recipe.chancedOutput(dust, 8750, 0);
		if (!byproduct0.isEmpty())
			recipe.chancedOutput(byproduct0, 6250, 0);
		if (!byproduct1.isEmpty())
			recipe.chancedOutput(byproduct1, 6250, 0);
		if (!byproduct2.isEmpty())
			recipe.chancedOutput(byproduct2, 2625, 0);
	}

	function processOreGasRich(material) {
		if (!material.hasProperty(PropertyKey.ORE)) return;

		const oreProperty = material.getProperty(PropertyKey.ORE);
		const materialName = material.getName();

		const richOreItem = ChemicalHelper.get(TFGTagPrefix.richRawOre, material, 1);
		if (richOreItem === null || richOreItem.isEmpty()) return;

		const dust = ChemicalHelper.get(TagPrefix.dust, material, 1);
		if (dust === null || dust.isEmpty()) return;

		const byproduct0 = ChemicalHelper.get(TagPrefix.dust, oreProperty.getOreByProduct(0, material), 1);
		const byproduct1 = ChemicalHelper.get(TagPrefix.dust, oreProperty.getOreByProduct(1, material), 1);
		const byproduct2 = ChemicalHelper.get(TagPrefix.dust, oreProperty.getOreByProduct(2, material), 1);

		let recipe = event.recipes.gtceu.ore_processing_gas(`tfg:ore_proc_gas/rich/${materialName}`)
			.itemInputs(richOreItem)
			.perTick(true)
			.inputFluids(Fluid.of('gtceu:natural_gas', 10))
			.chancedFluidInput(Fluid.of('gtceu:distilled_water', 10), 5000, 0)
			.perTick(false)
			.itemOutputs(dust.copyWithCount(2))
			.duration(20 * 20)
			.EUt(GTValues.VA[GTValues.LV])
			.dimension("minecraft:the_nether")
			.posY(0, 40);

		recipe.chancedOutput(dust, 8750, 0);
		if (!byproduct0.isEmpty())
			recipe.chancedOutput(byproduct0, 9583, 0);
		if (!byproduct1.isEmpty())
			recipe.chancedOutput(byproduct1, 9583, 0);
		if (!byproduct2.isEmpty())
			recipe.chancedOutput(byproduct2, 4025, 0);
	}

	forEachMaterial(material => {
		if (material === null || material.isNull()) return;
		if (material.hasProperty(PropertyKey.GEM)) return;

		processOreGas(material);
		processOreGasNormal(material);
		processOreGasPoor(material);
		processOreGasRich(material);
	});
}
