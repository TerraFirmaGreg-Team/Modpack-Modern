// priority: 0
"use strict";

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
	if (circuit !== null) {
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
 * @param {string} input -Item (Not consumed)
 * @param {number} fluid_amount -mB (uses #tfg:clean_water)
 * @param {string} output -Item (Chanced output uses input item)
 * @param {string} id -Recipe ID
 * @param {string} dimension -Dimension ID
 * @param {number} fertiliser_count
 * @param {string|null} output_seconday -Item (Optional, if there should be a third output)
 * @param {number} EUt
 */
function generateGreenHouseRecipe(event, input, fluid_amount, output, id, dimension, fertiliser_count, output_secondary, EUt) {
	if (EUt === undefined || output_secondary === undefined || fertiliser_count === undefined || dimension === undefined) {
		throw new TypeError(`Call to generateGreenHouseRecipe for id ${id} is missing args`);
	}
	let r = event.recipes.gtceu.greenhouse(id)
		.notConsumable(input)
		.circuit(1)
		.inputFluids(JsonIO.of({ amount: fluid_amount, value: { tag: "tfg:clean_water" }}))
		.itemOutputs(output)
		.chancedOutput(input, 750, 0)
		.chancedOutput(input, 500, 0)
		.duration(36000) // 30 mins


	if (dimension !== null)r.dimension(dimension)
	if (output_secondary !== null) r.chancedOutput(output_secondary, 750, 0)
	
		r.EUt(EUt)

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

	if (dimension !== null) r.dimension(dimension)
	if (output_secondary !== null) r.chancedOutput(output_secondary, 4000, 0)
	r.EUt(EUt)
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
 * @param {GTMaterial} material 
 */
function generatePlatedBlockRecipe(event, material) {
	// firmaciv plated blocks don't have this property
	let tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY)
	let outputMaterial = (tfcProperty === null || tfcProperty.getOutputMaterial() === null) ? material : tfcProperty.getOutputMaterial()

	let plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1);

	let platedBlock = ChemicalHelper.get(TFGTagPrefix.blockPlated, material, 1);
	let platedSlab = ChemicalHelper.get(TFGTagPrefix.slabPlated, material, 1);
	let platedStair = ChemicalHelper.get(TFGTagPrefix.stairPlated, material, 1);

	if (platedBlock === null)
		return

	let tfcMetalName = material.getName();
	if (tfcMetalName === "iron")
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

	if (tfcProperty !== null) {
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

	if (tfcProperty !== null) {
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

	if (tfcProperty !== null) {
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
 * @param {(material: com.gregtechceu.gtceu.api.data.chemical.material.Material_) => void} iterator 
 */
function forEachMaterial(iterator) {
	for (let material of GTCEuAPI.materialManager.getRegisteredMaterials()) {
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

//#region Wood Builder

/**
 * Generates most basic wooden recipes. 
 * 
 * All parameters are optional. Name is used for the ID.
 *
 * @param {*} event 
 * @param {string} name -Name of the wood.
 * @param {string} lumber -ID for the lumber.
 * @param {string} logs -Tag or ID for all the logs.
 * @param {string} log -ID for the regular log.
 * @param {string} stripped_log -ID for the stripped log.
 * @param {string} plank -ID for planks.
 * @param {string} stair -ID for stairs.
 * @param {string} slab -ID for slabs.
 * @param {string} door -ID for the door.
 * @param {string} trapdoor -ID for the trapdoor.
 * @param {string} fence -ID for the fence.
 * @param {string} fence_gate -ID for the fence gate.
 * @param {string} support -ID for the support.
 * @param {string} pressure_plate -ID for the pressure plate.
 * @param {string} button -ID for the button.
 */
function woodBuilder(event, name, lumber, logs, log, stripped_log, plank, stair, slab, door, trapdoor, fence, fence_gate, support, pressure_plate, button) {

	if (log && stripped_log && name) {
		event.recipes.gtceu.lathe(`tfg:cutter/${name}_stripped_log_from_log`)
			.itemInputs(log)
			.itemOutputs(stripped_log)
			.duration(50)
			.EUt(GTValues.VA[GTValues.ULV])
	}

	if (logs && lumber && name) {
		event.shapeless(`8x ${lumber}`, 
			[logs, '#forge:tools/saws']
		).id(`tfg:shapeless/${name}_lumber_from_log`)

		generateCutterRecipe(event, logs, `16x ${lumber}`, 50, 7, `cutter_${name}_lumber_from_log`)
	}

	if (plank && lumber && name) {
		event.shapeless(`4x ${lumber}`, 
			[plank, '#forge:tools/saws']
		).id(`tfg:shapeless/${name}_lumber_from_plank`)

		generateCutterRecipe(event, plank, `4x ${lumber}`, 50, 7, `cutter_${name}_lumber_from_plank`)

		event.shaped(plank, [
			'AA',
			'AA'
		], {
			A: lumber,
		}).id(`tfg:shaped/${name}_plank_from_lumber`)
	}

	if (slab && lumber && name) {
		event.shapeless(`2x ${lumber}`, 
			[slab, '#forge:tools/saws']
		).id(`tfg:shapeless/${name}_lumber_from_slab`)
		
		generateCutterRecipe(event, slab, `2x ${lumber}`, 50, 7, `cutter_${name}_lumber_from_slab`)
	}

	if (slab && plank && name) {
		event.shaped(`6x ${slab}`, [
			'AAA'
		], {
			A: plank,
		}).id(`tfg:shaped/${name}_slab_from_plank`)
	}

	if (stair && lumber && name) {
		event.shapeless(`3x ${lumber}`, 
			[stair, '#forge:tools/saws']
		).id(`tfg:shapeless/${name}_lumber_from_stair`)

		generateCutterRecipe(event, stair, `3x ${lumber}`, 50, 7, `cutter_${name}_lumber_from_stair`)
	}

	if (stair && plank && name) {
		event.shaped(`8x ${stair}`, [
			'A  ',
			'AA ',
			'AAA'
		], {
			A: plank,
		}).id(`tfg:shaped/${name}_stair_from_plank`)
	}
	
	if (door && lumber && name) {
		event.shaped(`2x ${door}`, [
			'AA',
			'AA',
			'AA'
		], {
			A: lumber,
		}).id(`tfg:shaped/${name}_door_from_lumber`)
	}
	
	if (trapdoor && lumber && name) {
		event.shaped(`3x ${trapdoor}`, [
			'AAA',
			'AAA'
		], {
			A: lumber,
		}).id(`tfg:shaped/${name}_trapdoor_from_lumber_and_plank`)
	}
	
	if (fence && lumber && plank && name) {
		event.shaped(`8x ${fence}`, [
			'ABA',
			'ABA'
		], {
			A: lumber,
			B: plank,
		}).id(`tfg:shaped/${name}_fence_from_lumber_and_plank`)
	}
	
	if (fence_gate && lumber && plank && name) {
		event.shaped(`2x ${fence_gate}`, [
			'ABA',
			'ABA'
		], {
			A: plank,
			B: lumber,
		}).id(`tfg:shaped/${name}_fence_gate_from_lumber_and_plank`)
	}
	
	if (support && logs && name) {
		event.shapeless(`8x ${support}`, 
			[`2x ${logs}`, '#forge:tools/saws']
		).id(`tfg:shapeless/${name}_support_from_logs`)

		event.recipes.gtceu.assembler(`tfg:assembler/${name}_support_from_logs`)
			.itemInputs(`2x ${logs}`)
			.itemOutputs(`8x ${support}`)
			.duration(50)
			.circuit(4)
			.EUt(GTValues.VA[GTValues.ULV])
	}
	
	if (pressure_plate && slab && name) {
		event.shaped(pressure_plate, [
			' B ',
			'ACA',
			' D '
		], {
			A: slab,
			B: '#forge:tools/hammers',
			C: '#forge:springs',
			D: '#forge:tools/screwdrivers',
		}).id(`tfg:shaped/${name}_pressure_plate`)

		event.recipes.gtceu.assembler(`tfg:assembler/${name}_pressure_plate`)
			.itemInputs(`2x ${slab}`, '#forge:springs')
			.itemOutputs(`2x ${pressure_plate}`)
			.duration(50)
			.circuit(0)
			.EUt(GTValues.VA[GTValues.ULV])
	}

	if (button && pressure_plate && name) {
		event.recipes.gtceu.cutter(`tfg:cutter/${name}_button_from_pressure_plate`)
			.itemInputs(pressure_plate)
			.itemOutputs(`6x ${button}`)
			.duration(50)
			.EUt(GTValues.VA[GTValues.ULV])
	}
}
//#endregion