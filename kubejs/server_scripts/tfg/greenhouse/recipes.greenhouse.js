"use strict";

//#region Utility Script
/**
 * Function for generating greenhouse recipes.
 *
 * @param {*} event
 * @param {string|null} dimension -Dimension ID
 * @param {string} input -Input Item (seeds, saplings, etc.)
 * @param {string|string[]} output -Output Items. If array, first item is guaranteed while rest use chanced output. Last item in array is used for the rest of the chance outputs.
 * @param {number|null} chance_multiplier -Multiplies output chances by this value. Defaults to 1.
 */
function generateGreenHouseRecipe(event, dimension, input, output, chance_multiplier) {

	/**
	 * Dimension setting index provides recipe modifications based on the dimension assigned.
	 *
	 * @typedef {Object} DimensionIndex
	 * @property {string} id - Dimension ID.
	 * @property {string} fluid - Fluid ID or tag.
	 * @property {number} fluid_chance - Chance for fluid consumption per tick out of 100.
	 * @property {string|null} fertilizer - Fertilizer item ID or null if fertilizer is not needed on that dimension.
	 * @property {GTValues.EUt} eut - EUt value for that dimension.
	 */

	/** @type {DimensionIndex[]} - Dimension settings array */
	const dimension_index = [
		// Overworld settings are also used as the default when no dimension is specified.
		{id: 'minecraft:overworld', fluid: '#tfg:clean_water', fluid_chance: 10, fertilizer: 'gtceu:fertilizer', eut: GTValues.VA[GTValues.LV], oxygenated: true},
		{id: 'minecraft:the_nether', fluid: '#tfg:clean_water', fluid_chance: 10, fertilizer: 'gtceu:fertilizer', eut: GTValues.VA[GTValues.LV], oxygenated: true},
		{id: 'ad_astra:moon', fluid: 'gtceu:helium_3', fluid_chance: 2, fertilizer: null, eut: GTValues.VA[GTValues.MV], oxygenated: null},
		{id: 'ad_astra:mars', fluid: 'tfg:semiheavy_ammoniacal_water', fluid_chance: 10, fertilizer: 'gtceu:fertilizer', eut: GTValues.VA[GTValues.HV], oxygenated: null}
	];

	// Resolve dimension based modifier defaults by comparing to the `dimension_index` array.
	const dimMods = dimension ? dimension_index.find(d => d.id === dimension) : null;
	const resolvedFluid = dimMods?.fluid ?? '#tfg:clean_water';
	const resolvedFertilizer = dimMods ? dimMods.fertilizer : 'gtceu:fertilizer';
	const canFertilize = resolvedFertilizer !== null;
	const resolvedEUt = dimMods ? dimMods.eut : GTValues.VA[GTValues.LV];
	const resolvedChance = dimMods ? (dimMods.fluid_chance * 100) : 1000;
	const requiresOxygen = dimMods ? dimMods.oxygenated : true;

	// Collect errors.
	const errors = [];

	if (input === undefined || Array.isArray(input)) {
		errors.push("input is undefined or is an array");
	};
	if (output !== undefined && !Array.isArray(output)) {
		output = [output];
	}
	if (output === undefined || output.length === 0 || output.length > 4) {
		errors.push("output is undefined or has invalid length");
	};

	// If there are any errors, log them all and throw once.
	if (errors.length > 0) {
		throw new TypeError(`Greenhouse recipe errors for recipe ID ${`tfg:greenhouse/${input.toString().replace(/[/:\s]/g, "_")}`}\n - ${errors.join("\n - ")}`);
	};

	// Normalize outputs to an array of 4 items.
	// index 0 is guaranteed output, indexes 1-3 are chanced outputs.
	// Last item in output array is used for any missing chanced outputs.
	let outputs_array = [];
	const guaranteed_output = output[0];
	const last_output = output[output.length - 1];
	for (let i = 0; i < 4; i++) {
		if (i === 0) outputs_array[i] = guaranteed_output;
		else outputs_array[i] = (output[i] !== undefined) ? output[i] : last_output;
	};
	// Calculate chances.
	chance_multiplier = chance_multiplier ?? 1;
	chance_multiplier = chance_multiplier * 1000;
	const base_chance = Math.min(10000, Math.max(1, Math.round(0.75 * chance_multiplier)));
	const fertilizer_chance = Math.min(10000, Math.max(1, Math.round(4 * chance_multiplier)));
	
	// Recipe scripts
	if (canFertilize) {
		let a = event.recipes.gtceu.greenhouse(`tfg:${input.toString().replace(/[/:\s]/g, "_")}`)
			.notConsumable(input)
			.circuit(1)
			.itemOutputs(outputs_array[0])
			.perTick(true)
			.chancedFluidInput(`${resolvedFluid} 1`, resolvedChance, 0)
			.perTick(false)
			.duration(20 * 60 * 20)
			.EUt(resolvedEUt)
		if (dimension !== null) {
			a.dimension(dimension)
		};
		if (requiresOxygen !== null) {
			TFGRecipeSchemaBindings.isOxygenated(a, requiresOxygen)
		};
		if (outputs_array[1] !== null) {
			a.chancedOutput(outputs_array[1], base_chance, 0)
			a.chancedOutput(outputs_array[2], base_chance, 0)
			a.chancedOutput(outputs_array[3], base_chance, 0)
		};

		let b = event.recipes.gtceu.greenhouse(`tfg:${input.toString().replace(/[/:\s]/g, "_")}_fertilized`)
			.notConsumable(input)
			.circuit(2)
			.itemOutputs(outputs_array[0])
			.perTick(true)
			.chancedFluidInput(`${resolvedFluid} 1`, resolvedChance, 0)
			.perTick(false)
			.duration(10 * 60 * 20)
			.EUt(resolvedEUt)
		if (dimension !== null) {
			b.dimension(dimension)
		};
		if (requiresOxygen !== null) {
			TFGRecipeSchemaBindings.isOxygenated(b, requiresOxygen)
		};
		if (outputs_array[1] !== null) {
			b.chancedOutput(outputs_array[1], fertilizer_chance, 0)
			b.chancedOutput(outputs_array[2], fertilizer_chance, 0)
			b.chancedOutput(outputs_array[3], fertilizer_chance, 0)
			b.itemInputs(Item.of(resolvedFertilizer, 8))
		};
	// Base recipe boosted if no fertilization needed.
	} else {
		let a = event.recipes.gtceu.greenhouse(`tfg:${input.toString().replace(/[/:\s]/g, "_")}`)
			.notConsumable(input)
			.circuit(1)
			.itemOutputs(outputs_array[0])
			.perTick(true)
			.chancedFluidInput(`${resolvedFluid} 1`, resolvedChance, 0)
			.perTick(false)
			.duration(10 * 60 * 20)
			.EUt(resolvedEUt)
		if (dimension !== null) {
			a.dimension(dimension)
		};
		if (requiresOxygen !== null) {
			TFGRecipeSchemaBindings.isOxygenated(a, requiresOxygen)
		};
		if (outputs_array[1] !== null) {
			a.chancedOutput(outputs_array[1], fertilizer_chance, 0)
			a.chancedOutput(outputs_array[2], fertilizer_chance, 0)
			a.chancedOutput(outputs_array[3], fertilizer_chance, 0)
		};
	};
};

/**
 * Function for generating standard crop greenhouse recipes.
 * Uses the following defaults:
 * - 4x seed inputs
 * - 20x crop output
 * - 1x seed chanced output
 * - 4x crop chanced output
 *
 * @param {*} event
 * @param {string|null} dimension -Dimension ID
 * @param {string} input -Input Item. (seed, bush, etc.)
 * @param {string} output -Output Item. (vegetable, fruit, etc.)
 * @param {number|null} chance_multiplier -Multiplies output chances by this value. Defaults to 1.
 */
function generateCropGreenHouseRecipe(event, dimension, input, output, chance_multiplier) {
	generateGreenHouseRecipe(event, dimension, `4x ${input}`, [Item.of(output, 20), Item.of(input, 1), Item.of(output, 4)], chance_multiplier);
};

/**
 * Function for generating standard tree greenhouse recipes.
 * Uses the following defaults:
 * - 8x sapling inputs
 * - 64x wood output
 * - 4x sapling chanced output
 * - 16x wood chanced output
 *
 * @param {*} event
 * @param {string|null} dimension -Dimension ID
 * @param {string} input -Input Item. (sapling)
 * @param {string} output -Output Item. (wood)
 * @param {number|null} chance_multiplier -Multiplies output chances by this value. Defaults to 1.
 */
function generateTreeGreenHouseRecipe(event, dimension, input, output, chance_multiplier) {
	generateGreenHouseRecipe(event, dimension, `8x ${input}`, [Item.of(output, 64), Item.of(input, 4), Item.of(output, 16)], chance_multiplier);
};

//#endregion
// Recipes

/**
 * @param {Internal.RecipesEventJS} event 
 */
const registerTFGGreenhouseRecipes = (event) => {

    //#region Multiblock Parts

	/**
	 * @type {string[]} - Tier names of greenhouse casings.
	 */
	const greenhouse_tiers = ['treated_wood', 'copper', 'iron', 'stainless_steel'];
	/**
	 * @type {Object.<string, string[]>} - Mapping of tier names to item IDs.
	 */
	const greenhouse_tier_items = {};
	greenhouse_tiers.forEach(tier => {

		const tier_tag = Ingredient.of(`#tfg:${tier}_greenhouse_casings`).itemIds.toArray().map(String);
		greenhouse_tier_items[tier] = tier_tag;

        tier_tag.forEach(item => {
            event.stonecutting(item,
                Ingredient.of(`#tfg:${tier}_greenhouse_casings`).subtract(item)
            ).id(`tfg:stonecutter/${item.replace(/[/:\s]/g, "_")}`)
        });
    });

	// Cultivation Monitor
	event.recipes.gtceu.shaped('tfg:cultivation_monitor', [
		'CEC',
		'DBD',
		'CAC'
	], {
		A: 'gtceu:ev_scanner',
		B: 'gtceu:computer_monitor_cover',
		C: ChemicalHelper.get(TagPrefix.plateDense, GTMaterials.TungstenSteel, 1),
		D: '#gtceu:circuits/luv',
		E: '#forge:lenses/emerald'
	}).addMaterialInfo().id('tfg:shaped/cultivation_monitor');
	
	// Hydroponics Facility Controller
	event.recipes.gtceu.shaped('tfg:hydroponics_facility', [
		'FBF',
		'EAE',
		'CDC'
	], {
		A: 'gtceu:iv_machine_hull',
		B: 'tfg:cultivation_monitor',
		C: '#gtceu:circuits/iv',
		D: 'gtceu:platinum_single_cable',
		E: 'gtceu:iv_electric_pump',
		F: 'tfg:grow_light'
	}).addMaterialInfo().id('tfg:shaped/hydroponics_facility');
	
	// Grow Lights
	event.recipes.gtceu.shaped('2x tfg:grow_light', [
		'ABA',
		'CDC'
	], {
		A: ChemicalHelper.get(TagPrefix.plate, GTMaterials.TinAlloy, 1),
		B: 'gtceu:annealed_copper_single_cable',
		C: 'minecraft:glowstone',
		D: 'gtceu:tin_alloy_small_fluid_pipe'
	}).addMaterialInfo().id('tfg:shaped/grow_light');
	
	// Horticulture Planters
	event.recipes.gtceu.shaped('tfg:egh_planter', [
		'BAB',
		'BDB',
		'CCC'
	], {
		A: 'firmalife:hydroponic_planter',
		B: ChemicalHelper.get(TagPrefix.plate, GTMaterials.TungstenSteel, 1),
		C: 'tfg:grow_light',
		D: 'gtceu:iv_hermetic_casing'
	}).addMaterialInfo().id('tfg:shaped/egh_planter');
	
	// Horticulture Casings
	event.recipes.gtceu.assembler('tfg:casings/machine_casing_egh')
		.itemInputs('gtceu:plascrete', '#forge:frames/calorite')
		.inputFluids(Fluid.of('tfg:chloroplasts', 100))
		.itemOutputs('2x tfg:casings/machine_casing_egh')
		.duration(8*20)
		.circuit(6)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true);

    //#endregion
	//#region Recipes

	// Mushrooms
	Ingredient.of('#beneath:mushrooms').stacks.forEach(element => {
		generateGreenHouseRecipe(event, 'minecraft:the_nether', `8x ${element.id}`, [element.withCount(24), element.withCount(8)], 1);
	});

	generateGreenHouseRecipe(event, 'minecraft:the_nether', '8x minecraft:red_mushroom', ['24x minecraft:red_mushroom', '8x minecraft:red_mushroom'], 1);
	generateGreenHouseRecipe(event, 'minecraft:the_nether', '8x minecraft:brown_mushroom', ['24x minecraft:brown_mushroom', '8x minecraft:brown_mushroom'], 1);

	// Crops
	global.FIRMALIFE_GREENHOUSE_FRUIT_RECIPE_COMPONENTS.forEach(element => {
		generateCropGreenHouseRecipe(event, null, element.input, element.output, 1);
	});

	global.TFC_GREENHOUSE_FRUIT_RECIPE_COMPONENTS.forEach(element => {
		generateCropGreenHouseRecipe(event, null, element.input, element.output, 1);
	});
	global.TFC_GREENHOUSE_VEGETABLE_RECIPE_COMPONENTS.forEach(element => {
		generateCropGreenHouseRecipe(event, null, element.input, element.output, 1);
	});
	global.TFC_GREENHOUSE_BERRY_RECIPE_COMPONENTS.forEach(element => {
		generateCropGreenHouseRecipe(event, null, element.input, element.output, 1);
	});

	// Wood
	global.TFC_WOOD_TYPES.forEach(element => {
		generateTreeGreenHouseRecipe(event, null, `tfc:wood/sapling/${element}`, `tfc:wood/log/${element}`, 1);
	});
	global.AFC_SAPLINGS.forEach(element => {
		generateTreeGreenHouseRecipe(event, null, `afc:wood/sapling/${element.sapling}`, element.log, 1);
	});

	// Plants
	Ingredient.of('#tfc:plants').subtract('#tfc:wild_fruits').stacks.forEach(element => {
		generateGreenHouseRecipe(event, null, `8x ${element.id}`, [element.withCount(24), element.withCount(8)], 1);
	});

	generateGreenHouseRecipe(event, null, '8x minecraft:bamboo', ['64x minecraft:bamboo', '8x minecraft:bamboo'], 1);

	// Mars Wood
	generateGreenHouseRecipe(event, 'ad_astra:mars', '8x tfg:saplings/strophar', [
		'64x ad_astra:strophar_stem', '4x tfg:saplings/strophar', '16x ad_astra:strophar_cap', '16x ad_astra:strophar_cap'
	], 1);
	generateGreenHouseRecipe(event, 'ad_astra:mars', '8x tfg:saplings/aeronos', [
		'64x ad_astra:aeronos_stem', '4x tfg:saplings/aeronos', '16x ad_astra:aeronos_cap', '16x ad_astra:aeronos_cap'
	], 1);
	generateGreenHouseRecipe(event, 'ad_astra:mars', '8x tfg:saplings/glacian', [
		'64x ad_astra:glacian_log', '4x tfg:saplings/glacian', '16x species:alphacene_moss_block', '16x species:alphacene_moss_block'
	], 1);
	generateGreenHouseRecipe(event, 'ad_astra:mars', '8x tfg:saplings/alphacene', [
		'64x species:alphacene_mushroom_block', '4x tfg:saplings/alphacene', '16x minecraft:mushroom_stem', '16x minecraft:mushroom_stem'
	], 1);
	generateGreenHouseRecipe(event, 'ad_astra:mars', '8x tfg:saplings/warped', [
		'64x beneath:wood/log/warped', '4x tfg:saplings/warped', '16x minecraft:warped_wart_block', '16x minecraft:warped_wart_block'
	], 1);
	generateGreenHouseRecipe(event, 'ad_astra:mars', '8x tfg:saplings/crimson', [
		'64x beneath:wood/log/crimson', '4x tfg:saplings/crimson', '16x minecraft:nether_wart_block', '16x minecraft:nether_wart_block'
	], 1);

	// Mars Plants
	Ingredient.of('#tfg:mars_plants').stacks.forEach(element => {
		generateGreenHouseRecipe(event, null, `8x ${element.id}`, [element.withCount(24), element.withCount(8)], 1);
	});

	generateCropGreenHouseRecipe(event, 'ad_astra:mars', 'betterend:amber_root_seeds', 'betterend:amber_root_product', 1);
	generateCropGreenHouseRecipe(event, 'ad_astra:mars', 'betterend:blossom_berry_seeds', 'betterend:blossom_berry_product', 1);
	generateCropGreenHouseRecipe(event, 'ad_astra:mars', 'betterend:bolux_mushroom_seeds', 'betterend:bolux_mushroom_product', 1);
	generateCropGreenHouseRecipe(event, 'ad_astra:mars', 'betterend:cave_pumpkin_plant_seeds', 'betterend:cave_pumpkin', 1);
	generateCropGreenHouseRecipe(event, 'ad_astra:mars', 'betterend:chorus_mushroom_seeds', 'betterend:chorus_mushroom_product', 1);
	generateCropGreenHouseRecipe(event, 'ad_astra:mars', 'betterend:shadow_berry_seeds', 'betterend:shadow_berry_product', 1);

	// Moon Crops
	generateCropGreenHouseRecipe(event, 'ad_astra:moon', 'tfg:lunar_chorus_flower', 'minecraft:chorus_fruit', 2);

	// Moon Plants
	generateGreenHouseRecipe(event, 'ad_astra:moon', '8x minecraft:twisting_vines', [
		'16x minecraft:twisting_vines', '8x minecraft:pearlescent_froglight', '8x minecraft:verdant_froglight', '8x minecraft:ochre_froglight'
	], 1);

	Ingredient.of('#tfg:moon_plants').stacks.forEach(element => {
		generateGreenHouseRecipe(event, 'ad_astra:moon', `8x ${element.id}`, [element.withCount(24), element.withCount(8)], 1);
	});
};