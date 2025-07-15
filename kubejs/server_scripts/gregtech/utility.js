// priority: 0

//#region Mixer Recipes
/**
 * Function for generating gtceu mixer recipes.
 * Adding a circuit is optional.
 *
 * @param {*} event 
 * @param {string} input -Item
 * @param {string} fluid_input -Fluid
 * @param {string} output -Item
 * @param {number} circuit -0-32
 * @param {string} fluid_output -Fluid
 * @param {number} duration -Ticks
 * @param {number} EUt -GTValues.VA[]
 * @param {number} rpm -Depreciated
 * @param {string} id -Recipe ID
 */
const generateMixerRecipe = (event, input, fluid_input, output, circuit, fluid_output, duration, EUt, rpm, id) => {
	const recipe = event.recipes.gtceu.mixer(id)
		.itemInputs(input)
		.inputFluids(fluid_input)
		.itemOutputs(output)
		.outputFluids(fluid_output)
		.duration(duration)
		.EUt(EUt)

	/**
	 * Applies if circuit param is not empty
	 */
	if (circuit != null) {
		recipe.circuit(circuit)
	}
}
//#endregion

//#region Cutter Recipes
/**
 * Function for generating gtceu cutter recipes.
 *
 * @param {*} event 
 * @param {string} input -Item
 * @param {string} output -Item
 * @param {number} duration -Ticks
 * @param {number} EUt -GTValues.VA[]
 * @param {string} id -Recipe ID
 */
const generateCutterRecipe = (event, input, output, duration, EUt, id) => {

	event.recipes.gtceu.cutter(`tfg:${id}`)
		.itemInputs(input)
		.itemOutputs(output)
		.duration(duration)
		.EUt(EUt)
}
//#endregion

//#region Green House
/**
 * Function for generating greenhouse recipes.
 *
 * @param {*} event 
 * @param {string} input -Item
 * @param {number} fluid_amount -mB
 * @param {string} output -Item
 * @param {string} id -Recipe ID
 * @param {string} dimension -Dimension ID
 * @param {number} fertiliser_count
 */
const generateGreenHouseRecipe = (event, input, fluid_amount, output, id, dimension, fertiliser_count) => {

	// Без удобрения (Without fertilizer)
	let r = event.recipes.gtceu.greenhouse(id)
		.notConsumable(input)
		.circuit(1)
		.inputFluids(JsonIO.of({ amount: fluid_amount, value: { tag: "tfg:clean_water" }}))
		.itemOutputs(output)
		.chancedOutput(input, 750, 0)
		.chancedOutput(input, 500, 0)
		.duration(36000) // 30 mins
		.EUt(GTValues.VA[GTValues.LV])

	if (dimension != null)
		r.dimension(dimension)

	// С удобрением (With fertilizer)
	r = event.recipes.gtceu.greenhouse(`${id}_fertilized`)
		.notConsumable(input)
		.itemInputs(Item.of('gtceu:fertilizer', fertiliser_count))
		.circuit(2)
		.inputFluids(JsonIO.of({ amount: fluid_amount, value: { tag: "tfg:clean_water" }}))
		.itemOutputs(output)
		.chancedOutput(input, 4000, 0)
		.chancedOutput(input, 3000, 0)
		.duration(12000) // 10 mins
		.EUt(GTValues.VA[GTValues.LV])

	if (dimension != null)
		r.dimension(dimension)
}
//#endregion

//#region Filling NBT
/**
 * Function to get fluid filling NBT.
 *
 * @param {string} material -Fluid
 * @param {number} amount -mB
 * @returns {{ tank: { FluidName: string; Amount: number; }; }} 
 */
const getFillingNBT = (material, amount) => {
	return {
		tank: {
			FluidName: Fluid.of(material.getFluid()).getId(),
			Amount: amount
		}
	}
}
//#endregion

//#region Plated Blocks
/**
 * Function for generating plated block recipes.
 *
 * @param {*} event 
 * @param {GTMaterials} material 
 */
function generatePlatedBlockRecipe(event, material) {
	// firmaciv plated blocks don't have this property
	let tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY)
	let outputMaterial = (tfcProperty == null || tfcProperty.getOutputMaterial() == null) ? material : tfcProperty.getOutputMaterial()

	let plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1);

	let platedBlock = ChemicalHelper.get(TFGTagPrefix.blockPlated, material, 1);
	let platedSlab = ChemicalHelper.get(TFGTagPrefix.slabPlated, material, 1);
	let platedStair = ChemicalHelper.get(TFGTagPrefix.stairPlated, material, 1);

	if (platedBlock == null)
		return

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
//#endregion

//#region forEachMaterial
/**
 * Function for iterating through registered materials
 * {@link https://github.com/GregTechCEu/GregTech-Modern/blob/1.20.1/src/main/java/com/gregtechceu/gtceu/api/data/chemical/material/Material.java}
 *
 * @param {GTCEuAPI.materialManager.getRegisteredMaterials} iterator -Material
 */
function forEachMaterial(iterator) {
	for (var material of GTCEuAPI.materialManager.getRegisteredMaterials()) {
		iterator(material)
	}
}
//#endregion

//#region Add Circuit
/**
 * Function for adding circuit numbers for existing recipes
 * 
 * Constants {@link global.ADD_CIRCUIT}
 *
 * @param {*} event 
 * @param {string} recipeId -Recipe ID
 * @param {number} circuitNumber -0-32
 */
function addCircuitToRecipe(event, recipeId, circuitNumber) {

	event.findRecipes({ id: recipeId }).forEach(recipe => {
			const inputs = recipe.json.get("inputs");
			const itemArray = inputs.has("item") ? Java.from(inputs.get("item")) : [];

			itemArray.push({
				content: {
					type: "gtceu:circuit",
					configuration: circuitNumber
				},
				chance: 0,
				maxChance: 10000,
				tierChanceBoost: 0
			});

			inputs.add("item", itemArray);
			recipe.json.add("inputs", inputs);
		});
}
//#endregion