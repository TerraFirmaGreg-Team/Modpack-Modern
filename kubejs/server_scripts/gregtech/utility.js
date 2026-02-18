// priority: 0
"use strict";

const JsonObject = Java.loadClass('com.google.gson.JsonObject');
const JsonArray = Java.loadClass('com.google.gson.JsonArray');
const JsonParser = Java.loadClass('com.google.gson.JsonParser');
const JsonElement = Java.loadClass('com.google.gson.JsonElement');

// Helper to call `JsonArray.add(JsonElement)` explicitly because "Rhino Moment".
const addJsonElement = (jsonArray, jsonElement) => {
	jsonArray.getClass().getMethod("add", JsonElement).invoke(jsonArray, jsonElement);
};

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

//#region forEachMaterial
/**
 * Function for iterating through registered materials
 * {@link https://github.com/GregTechCEu/GregTech-Modern/blob/1.20.1/src/main/java/com/gregtechceu/gtceu/api/data/chemical/material/Material.java}
 *
 * @param {(material: com.gregtechceu.gtceu.api.data.chemical.material.Material_) => void} iterator 
 */
function forEachMaterial(iterator) {
	for (const material of GTCEuAPI.materialManager.getRegisteredMaterials()) {
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

	event.findRecipes({ id: recipeId }).forEach(recipe => {
		const inputsEl = recipe.json.get("inputs");
		let inputsObj;
		if (inputsEl === null || inputsEl.isJsonNull()) {
			inputsObj = new JsonObject();
		} else if (inputsEl.isJsonObject()) {
			inputsObj = inputsEl.getAsJsonObject();
		} else {
			return;
		}

		// Cache existing item inputs.
		const itemEl = inputsObj.get("item");
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
			if (!el.isJsonObject()) { continue; }
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
		const message = `sterilizeItem errors:\n - ${errors.join("\n - ")}`;
		throw new TypeError(message);
	};

	// Set default multiplier.
	let recipe_multiplier = 1;
	if (multiplier !== undefined) {
		recipe_multiplier = multiplier;
	}

	// Create recipes.
	const ethanol_recipe = event.recipes.gtceu.chemical_bath(`tfg:ethanol_cleaning/${linuxUnfucker(input)}_to_${linuxUnfucker(output)}`)
		.itemInputs(input)
		.inputFluids(Fluid.of('gtceu:ethanol', 500 * recipe_multiplier))
		.itemOutputs(output)
		.duration(10 * 20 * recipe_multiplier)
		.EUt(GTValues.VA[GTValues.MV]);

	const hydrogen_peroxide_recipe = event.recipes.gtceu.chemical_bath(`tfg:hydrogen_peroxide_cleaning/${linuxUnfucker(input)}_to_${linuxUnfucker(output)}`)
		.itemInputs(input)
		.inputFluids(Fluid.of('gtceu:hydrogen_peroxide', 200 * recipe_multiplier))
		.itemOutputs(output)
		.duration(10 * 20 * recipe_multiplier)
		.EUt(GTValues.VA[GTValues.MV]);

	const sodium_dodecyl_sulfate_recipe = event.recipes.gtceu.chemical_bath(`tfg:sodium_dodecyl_sulfate_cleaning/${linuxUnfucker(input)}_to_${linuxUnfucker(output)}`)
		.itemInputs(input)
		.inputFluids(Fluid.of('tfg:sodium_dodecyl_sulfate', 50 * recipe_multiplier))
		.itemOutputs(output)
		.duration(10 * 20 * recipe_multiplier)
		.EUt(GTValues.VA[GTValues.MV]);

	const autoclave_recipe = event.recipes.gtceu.autoclave(`tfg:autoclave_cleaning/${linuxUnfucker(input)}_to_${linuxUnfucker(output)}`)
		.itemInputs(input)
		.perTick(true)
		.inputFluids(Fluid.of('gtceu:steam', 100 * recipe_multiplier))
		.perTick(false)
		.itemOutputs(output)
		.duration(240 * 20 * recipe_multiplier)
		.EUt(GTValues.VA[GTValues.MV]);

	if (cleanroom) {
		ethanol_recipe.cleanroom(cleanroom);
		hydrogen_peroxide_recipe.cleanroom(cleanroom);
		sodium_dodecyl_sulfate_recipe.cleanroom(cleanroom);
		autoclave_recipe.cleanroom(cleanroom);
	};
};

//#endregion
//#region Cleanroom Tool

/**
 * Ensures recipes have a cleanroom recipe condition set to the specified type.
 *
 * * For each recipe:
 * * * If `recipeConditions` is an array, finds an object with `type` === `cleanroom`.
 * * * If found, updates its `cleanroom` property to the given `cleanroomType`.
 * * * If not found, appends a new condition object `{ type: "cleanroom", cleanroom: cleanroomType }` to the array.
 * * * If `recipeConditions` is absent or not an array, creates a new JSON array containing the cleanroom condition.
 * 
 * @throws This function will not work with other recipe conditions present besides `CleanroomType`.
 *
 * @param {event} event
 * @param {string} recipeId - recipe ID.
 * @param {'cleanroom'|'sterile_cleanroom'} cleanroomType - Cleanroom type to be assigned.
 */
function addCleanroom(event, recipeId, cleanroomType) {
	event.findRecipes({ id: recipeId }).forEach(recipe => {
		// Ensure recipe has a cleanroom condition matching the cleanroomType string.
		// Replace existing cleanroom condition or add new one if absent.
		const desiredCleanroom = cleanroomType;
		const conditions = recipe.json.get("recipeConditions");
		let conditionArray;
		if (conditions && conditions.isJsonArray && conditions.isJsonArray()) {
			conditionArray = conditions.getAsJsonArray();
		} else {
			conditionArray = new JsonArray();
			recipe.json.add("recipeConditions", conditionArray);
		}

		let hasCleanroom = false;
		for (let i = 0; i < conditionArray.size(); i++) {
			let element = conditionArray.get(i).getAsJsonObject();
			if (element.has("type") && element.get("type").getAsString() === "cleanroom") {
				element.addProperty("cleanroom", desiredCleanroom);
				hasCleanroom = true;
				break;
			}
		}
		if (!hasCleanroom) {
			let cond = new JsonObject();
			cond.addProperty("type", "cleanroom");
			cond.addProperty("cleanroom", desiredCleanroom);
			addJsonElement(conditionArray, cond);
		}
	});
};

//#endregion