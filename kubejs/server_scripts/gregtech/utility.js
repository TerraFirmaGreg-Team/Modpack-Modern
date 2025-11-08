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
 * @param {string} fluid -Fluid ID or tag
 * @param {number} fluid_amount -Fluid amount, in mB
 * @param {string} output -Item (Chanced output uses input item)
 * @param {string} id -Recipe ID
 * @param {string} dimension -Dimension ID
 * @param {number} fertiliser_count
 * @param {string|null} output_seconday -Item (Optional, if there should be a third output)
 * @param {number} EUt
 */
function generateGreenHouseRecipe(event, input, fluid, fluid_amount, output, id, dimension, fertiliser_count, output_secondary, EUt) {
	if (EUt === undefined || output_secondary === undefined || fertiliser_count === undefined || dimension === undefined) {
		throw new TypeError(`Call to generateGreenHouseRecipe for id ${id} is missing args`);
	}
	let r = event.recipes.gtceu.greenhouse(id)
		.notConsumable(input)
		.circuit(1)
		.inputFluids(`${fluid} ${fluid_amount}`)
		.itemOutputs(output)
		.chancedOutput(input, 750, 0)
		.chancedOutput(input, 500, 0)
		.duration(36000) // 30 mins
		.EUt(EUt)

	if (dimension !== null)
		r.dimension(dimension)
	if (output_secondary !== null) 
		r.chancedOutput(output_secondary, 750, 0)
	

	// С удобрением (With fertilizer)
	r = event.recipes.gtceu.greenhouse(`${id}_fertilized`)
		.notConsumable(input)
		.itemInputs(Item.of('gtceu:fertilizer', fertiliser_count))
		.circuit(2)
		.inputFluids(`${fluid} ${fluid_amount}`)
		.itemOutputs(output)
		.chancedOutput(input, 4000, 0)
		.chancedOutput(input, 3000, 0)
		.duration(12000) // 10 mins
		.EUt(EUt)

	if (dimension !== null)
		r.dimension(dimension)
	if (output_secondary !== null) 
		r.chancedOutput(output_secondary, 4000, 0)
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

	event.shapeless(platedBlock, ['#forge:stone_bricks', plateItem, '#forge:tools/hammers'])
		.id(`tfg:shapeless/${material.getName()}_plated_block`)
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
		.itemOutputs(ChemicalHelper.get(TagPrefix.dust, material, 1))
		.duration(material.getMass())
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])
	event.recipes.gtceu.arc_furnace(`tfg:${material.getName()}_plated_block`)
		.itemInputs(platedBlock)
		.itemOutputs(ChemicalHelper.get(TagPrefix.ingot, material, 1))
		.duration(material.getMass())
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])


	event.shapeless(platedSlab.withCount(2), ['2x #tfg:brick_slabs', plateItem, '#forge:tools/hammers'])
		.id(`tfg:item_application/${material.getName()}_plated_slab`)
	event.recipes.gtceu.assembler(`tfg:${material.getName()}_plated_slab`)
		.itemInputs('2x #tfg:brick_slabs', plateItem)
		.itemOutputs(platedSlab.withCount(2))
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
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, material, 2))
		.duration(material.getMass())
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])
	event.recipes.gtceu.arc_furnace(`tfg:${material.getName()}_plated_slab`)
		.itemInputs(platedSlab)
		.itemOutputs(ChemicalHelper.get(TagPrefix.nugget, material, 4))
		.duration(material.getMass())
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])


	event.shapeless(platedStair, ['#tfg:brick_stairs', plateItem, '#forge:tools/hammers'])
		.id(`tfg:item_application/${material.getName()}_plated_stair`)
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
		.itemOutputs(ChemicalHelper.get(TagPrefix.dust, material, 1))
		.duration(material.getMass())
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])
	event.recipes.gtceu.arc_furnace(`tfg:${material.getName()}_plated_stair`)
		.itemInputs(platedStair)
		.itemOutputs(ChemicalHelper.get(TagPrefix.ingot, material, 1))
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
 * 1) Preserves existing `inputs.item` entries.
 * 2) Adds a circuit entry to the `inputs.item` array.
 * 3) If `inputs.item` is missing, create it.
 * 4) If a circuit already exists, update its number.
 * 
 * Constants {@link global.ADD_CIRCUIT}
 *
 * @param {*} event 
 * @param {string} recipeId -Recipe ID
 * @param {number} circuitNumber -0-32
 */
function addCircuitToRecipe(event, recipeId, circuitNumber) {

	const JsonObject = Java.loadClass('com.google.gson.JsonObject');
	const JsonArray = Java.loadClass('com.google.gson.JsonArray');
	const JsonParser = Java.loadClass('com.google.gson.JsonParser');
	const JsonElementClass = Java.loadClass('com.google.gson.JsonElement');

	// Helper to call JsonArray.add(JsonElement) explicitly because "Rhino Moment".
	const addJsonElement = (jsonArray, jsonElement) => {
		jsonArray.getClass().getMethod("add", JsonElementClass).invoke(jsonArray, jsonElement);
	};

	event.findRecipes({ id: recipeId }).forEach(recipe => {
		let inputsEl = recipe.json.get("inputs");
		let inputsObj;
		if (inputsEl === null || inputsEl.isJsonNull()) {
			inputsObj = new JsonObject();
		} else if (inputsEl.isJsonObject()) {
			inputsObj = inputsEl.getAsJsonObject();
		} else {
			return;
		}

		// Cache existing item inputs.
		let itemEl = inputsObj.get("item");
		let itemArray;
		if (itemEl === null || itemEl === undefined || itemEl.isJsonNull()) {
			itemArray = new JsonArray();
		} else if (itemEl.isJsonArray()) {
			itemArray = itemEl.getAsJsonArray();
		} else if (itemEl.isJsonObject()) {
			itemArray = new JsonArray();
			addJsonElement(itemArray, JsonParser.parseString(itemEl.getAsJsonObject().toString()));
		} else {
			return;
		}

		// Build circuit entry as a JsonElement using JsonParser.
		const circuitElement = JsonParser.parseString(JSON.stringify({
			content: { type: "gtceu:circuit", configuration: circuitNumber },
			chance: 0,
			maxChance: 10000,
			tierChanceBoost: 0
		}));

		// Dont duplicate circuit if one already exists. 
		// If it exists, just update it.
		let hasCircuit = false;
		for (let i = 0; i < itemArray.size(); i++) {
			const el = itemArray.get(i);
			if (!el.isJsonObject()) continue;
			const obj = el.getAsJsonObject();
			const content = obj.get("content");
			if (content && content.isJsonObject()) {
				const typeEl = content.getAsJsonObject().get("type");
				if (typeEl && typeEl.isJsonPrimitive() && typeEl.getAsString() === "gtceu:circuit") {
					hasCircuit = true;
					content.getAsJsonObject().addProperty("configuration", circuitNumber);
					break;
				}
			}
		}

		if (!hasCircuit) {
			addJsonElement(itemArray, circuitElement);
		}

		inputsObj.add("item", itemArray);
		recipe.json.add("inputs", inputsObj);
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

		event.custom({
			type: 'vintageimprovements:polishing',
			ingredients: [{ item: log }],
			results: [{ item: stripped_log }],
			speed_limits: 0,
			processingTime: 50
		}).id(`tfg:vi/lathe/stripping_${name}_log`)
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
			.itemInputs(`2x ${slab}`, '#forge:small_springs')
			.itemOutputs(`2x ${pressure_plate}`)
			.duration(50)
			.circuit(3)
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

//#region Sterilization
/**
 * Creates recipes for sterilizing an item using chemicals or the autoclave.
 *
 * @param {*} event
 * @param {string} input - The input item to be sterilized.
 * @param {string} output - The output item after sterilization.
 * @param {number} multiplier - Multiplies the fluid amounts and recipe duration. Default multiplier = 1.
 * @param {string} [cleanroom] - For if a cleanroom is required. Can be null.
 * 
 * @throws {TypeError} Throws an error if input, output, or multiplier is invalid.
 */
function sterilizeItem(event, input, output, multiplier, cleanroom) {
    // Collect errors.
    const errors = [];

	if (input === undefined || (Array.isArray(input) && input.length !== 1) || output === undefined || (Array.isArray(output) && output.length !== 1)) {
		errors.push("input or output is undefined or not equal to one item");
	};
    if (multiplier <= 0) {
        errors.push(`invalid multiplier (${multiplier})`);
    };

    // If there are any errors, log them all and throw once.
    if (errors.length > 0) {
        const message = "sterilizeItem errors:\n - " + errors.join("\n - ");
        throw new TypeError(message);
    };

	// Set default multiplier.
	let recipe_multiplier = 1;
	if (multiplier !== undefined) recipe_multiplier = multiplier;

	// Create recipes.
	let ethanol_recipe = event.recipes.gtceu.chemical_bath(`tfg:ethanol_cleaning/${input.replace(':', '_')}_to_${output.replace(':', '_')}`)
		.itemInputs(input)
		.inputFluids(Fluid.of('gtceu:ethanol', 500*recipe_multiplier))
		.itemOutputs(output)
		.duration(10*20*recipe_multiplier)
		.EUt(GTValues.VA[GTValues.MV]);

	let hydrogen_peroxide_recipe = event.recipes.gtceu.chemical_bath(`tfg:hydrogen_peroxide_cleaning/${input.replace(':', '_')}_to_${output.replace(':', '_')}`)
		.itemInputs(input)
		.inputFluids(Fluid.of('gtceu:hydrogen_peroxide', 200*recipe_multiplier))
		.itemOutputs(output)
		.duration(10*20*recipe_multiplier)
		.EUt(GTValues.VA[GTValues.MV]);

	let autoclave_recipe = event.recipes.gtceu.autoclave(`tfg:autoclave_cleaning/${input.replace(':', '_')}_to_${output.replace(':', '_')}`)
		.itemInputs(input)
		.perTick(true)
		.inputFluids(Fluid.of('gtceu:steam', 100*recipe_multiplier))
		.perTick(false)
		.itemOutputs(output)
		.duration(240*20*recipe_multiplier)
		.EUt(GTValues.VA[GTValues.MV]);

	if (cleanroom) {
		ethanol_recipe.cleanroom(cleanroom);
		hydrogen_peroxide_recipe.cleanroom(cleanroom);
		autoclave_recipe.cleanroom(cleanroom);
	};
};
//#endregion