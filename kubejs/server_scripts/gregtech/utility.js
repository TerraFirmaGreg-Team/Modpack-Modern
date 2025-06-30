// priority: 0

const generateMixerRecipe = (event, input, fluid_input, output, circuit, fluid_output, duration, EUt, rpm, id) => {
	const recipe = event.recipes.gtceu.mixer(id)
		.itemInputs(input)
		.inputFluids(fluid_input)
		.itemOutputs(output)
		.outputFluids(fluid_output)
		.duration(duration)
		.EUt(EUt)

	if (circuit != null) {
		recipe.circuit(circuit)
	}
}

const generateCutterRecipe = (event, input, output, duration, EUt, id) => {

	event.recipes.gtceu.cutter(`tfg:${id}`)
		.itemInputs(input)
		.itemOutputs(output)
		.duration(duration)
		.EUt(EUt)
}

const generateGreenHouseRecipe = (event, input, fluid_amount, output, id, dimension, fertiliser_count) => {

	// Без удобрения
	let r = event.recipes.gtceu.greenhouse(id)
		.itemInputs(input)
		.circuit(1)
		.inputFluids(JsonIO.of({ amount: fluid_amount, value: { tag: "tfg:clean_water" }}))
		.itemOutputs(output)
		.chancedOutput(input, 7500, 0)
		.chancedOutput(input, 5000, 0)
		.duration(36000) // 30 mins
		.EUt(GTValues.VA[GTValues.LV])

	if (dimension != null)
		r.dimension(dimension)

	// С удобрением
	r = event.recipes.gtceu.greenhouse(`${id}_fertilized`)
		.itemInputs(input)
		.itemInputs(Item.of('gtceu:fertilizer', fertiliser_count))
		.circuit(2)
		.inputFluids(JsonIO.of({ amount: fluid_amount, value: { tag: "tfg:clean_water" }}))
		.itemOutputs(output)
		.chancedOutput(input, 8500, 0)
		.chancedOutput(input, 6000, 0)
		.duration(12000) // 10 mins
		.EUt(GTValues.VA[GTValues.LV])

	if (dimension != null)
		r.dimension(dimension)
}

const getFillingNBT = (material, amount) => {
	return {
		tank: {
			FluidName: Fluid.of(material.getFluid()).getId(),
			Amount: amount
		}
	}
}

function generatePlatedBlockRecipe(event, material) {
	// firmaciv plated blocks don't have this property
	let tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY)
	let outputMaterial = (tfcProperty == null || tfcProperty.getOutputMaterial() == null) ? material : tfcProperty.getOutputMaterial()

	let plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1);

	let platedBlock = ChemicalHelper.get(TFGTagPrefix.blockPlated, material, 1);
	let platedSlab = ChemicalHelper.get(TFGTagPrefix.slabPlated, material, 1);
	let platedStair = ChemicalHelper.get(TFGTagPrefix.stairPlated, material, 1);

	let tfcMetalName = material.getName();
	if (tfcMetalName == "iron")
		tfcMetalName = "cast_iron";

	event.recipes.create.item_application(platedBlock, ['#forge:stone_bricks', plateItem])
		.id(`tfg:item_application/${material.getName()}_plated_block`)
	event.recipes.createDeploying(platedBlock, ['#forge:stone_bricks', plateItem])
		.id(`tfg:deploying/${material.getName()}_plated_block`)
	event.recipes.gtceu.assembler(`tfg:${material.getName()}_plated_block`)
		.itemInputs('#forge:stone_bricks', plateItem)
		.itemOutputs(platedBlock)
		.circuit(10)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	if (tfcProperty != null) {
		event.recipes.tfc.heating(platedBlock, tfcProperty.getMeltTemp())
			.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
			.id(`tfc:heating/metal/${tfcMetalName}_block`)
	}
	event.recipes.gtceu.macerator(`tfg:${material.getName()}_plated_block`)
		.itemInputs(platedBlock)
		.itemOutputs(ChemicalHelper.get(TagPrefix.dust, material, 1), 'gtceu:stone_dust')
		.duration(material.getMass())
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])
	event.recipes.gtceu.arc_furnace(`tfg:${material.getName()}_plated_block`)
		.itemInputs(platedBlock)
		.itemOutputs(ChemicalHelper.get(TagPrefix.ingot, material, 1), 'gtceu:ash_dust')
		.duration(material.getMass())
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])


	event.recipes.create.item_application(platedSlab, ['#tfg:brick_slabs', plateItem])
		.id(`tfg:item_application/${material.getName()}_plated_slab`)
	event.recipes.createDeploying(platedSlab, ['#tfg:brick_slabs', plateItem])
		.id(`tfg:deploying/${material.getName()}_plated_slab`)
	event.recipes.gtceu.assembler(`tfg:${material.getName()}_plated_slab`)
		.itemInputs('#tfg:brick_slabs', plateItem)
		.itemOutputs(platedSlab)
		.circuit(10)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	if (tfcProperty != null) {
		// Slabs are lossy because it's possible to plate a double slab block with one metal plate
		event.recipes.tfc.heating(platedSlab, tfcProperty.getMeltTemp())
			.resultFluid(Fluid.of(outputMaterial.getFluid(), 72))
			.id(`tfc:heating/metal/${tfcMetalName}_block_slab`)
	}
	event.recipes.gtceu.macerator(`tfg:${material.getName()}_plated_slab`)
		.itemInputs(platedSlab)
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, material, 2), 'gtceu:small_stone_dust')
		.duration(material.getMass())
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])
	event.recipes.gtceu.arc_furnace(`tfg:${material.getName()}_plated_slab`)
		.itemInputs(platedSlab)
		.itemOutputs(ChemicalHelper.get(TagPrefix.nugget, material, 4), 'gtceu:small_ash_dust')
		.duration(material.getMass())
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])


	event.recipes.create.item_application(platedStair, ['#tfg:brick_stairs', plateItem])
		.id(`tfg:item_application/${material.getName()}_plated_stair`)
	event.recipes.createDeploying(platedStair, ['#tfg:brick_stairs', plateItem])
		.id(`tfg:deploying/${material.getName()}_plated_stair`)
	event.recipes.gtceu.assembler(`tfg:${material.getName()}_plated_stair`)
		.itemInputs('#tfg:brick_stairs', plateItem)
		.itemOutputs(platedStair)
		.circuit(10)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	if (tfcProperty != null) {
		event.recipes.tfc.heating(platedStair, tfcProperty.getMeltTemp())
			.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
			.id(`tfc:heating/metal/${tfcMetalName}_block_stairs`)
	}
	event.recipes.gtceu.macerator(`tfg:${material.getName()}_plated_stair`)
		.itemInputs(platedStair)
		.itemOutputs(ChemicalHelper.get(TagPrefix.dust, material, 1), 'gtceu:stone_dust')
		.duration(material.getMass())
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])
	event.recipes.gtceu.arc_furnace(`tfg:${material.getName()}_plated_stair`)
		.itemInputs(platedStair)
		.itemOutputs(ChemicalHelper.get(TagPrefix.ingot, material, 1), 'gtceu:ash_dust')
		.duration(material.getMass())
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])
}

function forEachMaterial(iterator) {
	for (var material of GTCEuAPI.materialManager.getRegisteredMaterials()) {
		iterator(material)
	}
}