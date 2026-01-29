// priority: 1
"use strict";

///////////////////////////////////////////////////////////////////////////////////////////////////////
//#region Balancing Values

/** Base duration of recipes in ticks. */
const greenhouse_base_duration = 16 * 60 * 20;
/** Duration multiplier for fertilized recipes. */
const greenhouse_duration_multiplier_fertilized = 0.5;
/** Duration multiplier for aquaponic recipes. */
const greenhouse_duration_multiplier_aquaponics = 0.4;

/** Hydroponic facility chance multiplier. */
const hydroponics_facility_chance_multiplier = 1.25;
/** Base percent chance for chanced outputs (out of 100). */
const greenhouse_chanced_output_base = 7.5;
/** Fertilized percent chance for chanced outputs (out of 100). */
const greenhouse_chanced_output_fertilized = 40;
/** Aquaponics percent chance for chanced outputs (out of 100). */
const greenhouse_chanced_output_aquaponics = 80;

/**
 * Dimension setting index provides recipe modifications based on the dimension assigned.
 *
 * @typedef {Object} DimensionIndex
 * @property {Internal.Dimension} id - Dimension ID.
 * @property {Internal.FluidStackIngredient_} fluid - Fluid ID or tag.
 * @property {number} fluid_chance - Chance for fluid consumption per tick out of 100.
 * @property {Internal.ItemStack|null} fertilizer - Fertilizer item ID or null if fertilizer is not needed on that dimension.
 * @property {GTValues.EUt} eut - EUt value for that dimension.
 * @property {boolean|null} oxygenated - Whether the recipe requires an oxygenated environment.
 */

/** @param {...DimensionIndex[]} - Dimension settings array */
const greenhouse_dimension_index = [
	// Overworld settings are also used as the default when no dimension is specified.
	{id: 'minecraft:overworld', fluid: '#tfg:clean_water', fluid_tier2: 'tfg:nitrate_rich_water', fluid_chance: 10, fertilizer: 'gtceu:fertilizer', eut: GTValues.VA[GTValues.LV], oxygenated: true},
	{id: 'minecraft:the_nether', fluid: '#tfg:clean_water', fluid_tier2: 'tfg:nitrate_rich_water', fluid_chance: 10, fertilizer: 'gtceu:fertilizer', eut: GTValues.VA[GTValues.LV], oxygenated: true},
	{id: 'ad_astra:moon', fluid: 'gtceu:helium_3', fluid_tier2: null, fluid_chance: 2, fertilizer: null, eut: GTValues.VA[GTValues.MV], oxygenated: null},
	{id: 'ad_astra:mars', fluid: 'tfg:semiheavy_ammoniacal_water', fluid_tier2: 'tfg:nitrate_rich_semiheavy_ammoniacal_water', fluid_chance: 10, fertilizer: 'gtceu:fertilizer', eut: GTValues.VA[GTValues.HV], oxygenated: null}
];

//#endregion
///////////////////////////////////////////////////////////////////////////////////////////////////////

//#region Utility Script

/**
 * Function for generating greenhouse recipes.
 *
 * @param {*} event
 * @param {Internal.Dimension|null} dimension -Dimension ID
 * @param {Internal.ItemStack} input -Input Item (seeds, saplings, etc.)
 * @param {Internal.ItemStack|Internal.ItemStack[]} output -Output Items. If array, first item is guaranteed while rest use chanced output. Last item in array is used for the rest of the chance outputs.
 * @param {number|null} chance_multiplier -Multiplies output chances by this value. Defaults to 1.
 */
function generateGreenHouseRecipe(event, dimension, input, output, chance_multiplier) {

	// Resolve dimension based modifier defaults by comparing to the `greenhouse_dimension_index` array.

	/** @type {DimensionIndex|null} */
	const dimMods = dimension ? greenhouse_dimension_index.find(d => d.id === dimension) : null;

	/** @type {Internal.FluidStackIngredient_} - Resolved fluid ID or tag. Defaults to `#tfg:clean_water` */
	const resolvedFluid = dimMods?.fluid ?? '#tfg:clean_water';

	/** @type {Internal.FluidStackIngredient_} - Resolved aquaponic loop fluid ID or tag. Defaults to `tfg:nitrate_rich_water` */
	const resolvedFluidTier2 = dimMods?.fluid_tier2 ?? 'tfg:nitrate_rich_water';

	/** @type {Internal.ItemStack|null} - Resolved fertilizer item ID. Defaults to `gtceu:fertilizer` */
	const resolvedFertilizer = dimMods ? dimMods.fertilizer : 'gtceu:fertilizer';

	/** @type {boolean} - Whether fertilization is possible for this dimension. */
	const canFertilize = resolvedFertilizer !== null;

	/** @type {GTValues.EUt} - Resolved EUt value. Defaults to LV */
	const resolvedEUt = dimMods ? dimMods.eut : GTValues.VA[GTValues.LV];

	/** @type {number} - Resolved fluid chance multiplied by 100. Defaults to 1000. */
	const resolvedChance = dimMods ? (dimMods.fluid_chance * 100) : 1000;

	/** @type {boolean|null} - Whether the recipe requires an oxygenated environment. Defaults to true. */
	const requiresOxygen = dimMods ? dimMods.oxygenated : true;

	/////////////////////////////////////////////////////////////////////////////////////////////////////

	/** Collect errors. */

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
		throw new TypeError(`Greenhouse recipe errors for recipe ID ${`tfg:greenhouse/${linuxUnfucker(input)}`}\n - ${errors.join("\n - ")}`);
	};

	////////////////////////////////////////////////////////////////////////////////////////////////////////

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

	////////////////////////////////////////////////////////////////////////////////////////////////////////

	// Math Section :D

	/**
	 * Function to keep calculated duration values above 0 (minimum 1 tick).
	 * 
	 * @param {number} value - Number to validate.
	 * @returns {number} - Validated Number.
	 */
	function validate_duration(value) {
		return Math.max(1, Math.round(value));
	};

	const fertilizer_duration = validate_duration(greenhouse_base_duration * greenhouse_duration_multiplier_fertilized);
	const aquaponic_duration = validate_duration(greenhouse_base_duration * greenhouse_duration_multiplier_aquaponics);

	/**
	 * Function to keep percent values within valid range (1 to 10000).
	 * 
	 * @param {number} value - Number to validate.
	 * @returns {number} - Validated Number.
	 */
	function validate_percent(value) {
		return Math.min(10000, Math.max(1, Math.round(value)));
	};

	chance_multiplier = chance_multiplier ?? 1;
	chance_multiplier = chance_multiplier * 100;
	const base_chance = validate_percent(greenhouse_chanced_output_base * chance_multiplier);
	const fertilizer_chance = validate_percent(greenhouse_chanced_output_fertilized * chance_multiplier);
	const aquaponic_chance = validate_percent(greenhouse_chanced_output_aquaponics * chance_multiplier);
	const hydroponics_base_chance = validate_percent(greenhouse_chanced_output_base * chance_multiplier);
	const hydroponics_fertilizer_chance = validate_percent(greenhouse_chanced_output_fertilized * chance_multiplier * hydroponics_facility_chance_multiplier);
	const hydroponics_aquaponic_chance = validate_percent(greenhouse_chanced_output_aquaponics * chance_multiplier * hydroponics_facility_chance_multiplier);

	////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	// Recipe Scripts.

	if (canFertilize) {

		//======================== Greenhouse Recipes ========================

		// Base recipe.
		let a = event.recipes.gtceu.greenhouse(`tfg:${linuxUnfucker(input)}`)
			.notConsumable(input)
			.circuit(1)
			.itemOutputs(outputs_array[0])
			.perTick(true)
			.chancedFluidInput(`${resolvedFluid} 1`, resolvedChance, 0)
			.perTick(false)
			.duration(greenhouse_base_duration)
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

		// Fertilized Recipe.
		let b = event.recipes.gtceu.greenhouse(`tfg:${linuxUnfucker(input)}_fertilized`)
			.notConsumable(input)
			.circuit(2)
			.itemOutputs(outputs_array[0])
			.perTick(true)
			.chancedFluidInput(`${resolvedFluid} 1`, resolvedChance, 0)
			.perTick(false)
			.duration(fertilizer_duration)
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

		// Aquaponics Recipe.
		let c = event.recipes.gtceu.greenhouse(`tfg:${linuxUnfucker(input)}_aquaponic`)
			.notConsumable(input)
			.circuit(3)
			.itemOutputs(outputs_array[0])
			.perTick(true)
			.chancedFluidInput(`${resolvedFluidTier2} 1`, resolvedChance, 0)
			.perTick(false)
			.duration(aquaponic_duration)
			.EUt(resolvedEUt)
		if (dimension !== null) {
			c.dimension(dimension)
		};
		if (requiresOxygen !== null) {
			TFGRecipeSchemaBindings.isOxygenated(c, requiresOxygen)
		};
		if (outputs_array[1] !== null) {
			c.chancedOutput(outputs_array[1], aquaponic_chance, 0)
			c.chancedOutput(outputs_array[2], aquaponic_chance, 0)
			c.chancedOutput(outputs_array[3], aquaponic_chance, 0)
		};
		c.itemOutputs('tfg:flora_pellets');

		//======================== Hydroponic Facility Recipes ========================

		// Base recipe.
		let d = event.recipes.gtceu.hydroponics_facility(`tfg:${linuxUnfucker(input)}`)
			.notConsumable(input)
			.circuit(1)
			.itemOutputs(outputs_array[0])
			.perTick(true)
			.chancedFluidInput(`${resolvedFluid} 1`, resolvedChance, 0)
			.perTick(false)
			.duration(greenhouse_base_duration)
			.EUt(resolvedEUt)
		if (dimension !== null) {
			d.dimension(dimension)
		};
		if (outputs_array[1] !== null) {
			d.chancedOutput(outputs_array[1], hydroponics_base_chance, 0)
			d.chancedOutput(outputs_array[2], hydroponics_base_chance, 0)
			d.chancedOutput(outputs_array[3], hydroponics_base_chance, 0)
		};

		// Fertilized Recipe.
		let e = event.recipes.gtceu.hydroponics_facility(`tfg:${linuxUnfucker(input)}_fertilized`)
			.notConsumable(input)
			.circuit(2)
			.itemOutputs(outputs_array[0])
			.perTick(true)
			.chancedFluidInput(`${resolvedFluid} 1`, resolvedChance, 0)
			.perTick(false)
			.duration(fertilizer_duration)
			.EUt(resolvedEUt)
		if (dimension !== null) {
			e.dimension(dimension)
		};
		if (outputs_array[1] !== null) {
			e.chancedOutput(outputs_array[1], hydroponics_fertilizer_chance, 0)
			e.chancedOutput(outputs_array[2], hydroponics_fertilizer_chance, 0)
			e.chancedOutput(outputs_array[3], hydroponics_fertilizer_chance, 0)
			e.itemInputs(Item.of(resolvedFertilizer, 8))
		};

		// Aquaponics Recipe.
		let f = event.recipes.gtceu.hydroponics_facility(`tfg:${linuxUnfucker(input)}_aquaponic`)
			.notConsumable(input)
			.circuit(3)
			.itemOutputs(outputs_array[0])
			.perTick(true)
			.chancedFluidInput(`${resolvedFluidTier2} 1`, resolvedChance, 0)
			.perTick(false)
			.duration(aquaponic_duration)
			.EUt(resolvedEUt)
		if (dimension !== null) {
			f.dimension(dimension)
		};
		if (outputs_array[1] !== null) {
			f.chancedOutput(outputs_array[1], hydroponics_aquaponic_chance, 0)
			f.chancedOutput(outputs_array[2], hydroponics_aquaponic_chance, 0)
			f.chancedOutput(outputs_array[3], hydroponics_aquaponic_chance, 0)
		};
		f.itemOutputs('tfg:flora_pellets');

	} else {
	// Base recipe boosted if no fertilization needed.

		//======================== Greenhouse Recipes ========================

		let a = event.recipes.gtceu.greenhouse(`tfg:${linuxUnfucker(input)}`)
			.notConsumable(input)
			.circuit(1)
			.itemOutputs(outputs_array[0])
			.perTick(true)
			.chancedFluidInput(`${resolvedFluid} 1`, resolvedChance, 0)
			.perTick(false)
			.duration(fertilizer_duration)
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
		
		//======================== Hydroponics Facility Recipes ========================

		let b = event.recipes.gtceu.hydroponics_facility(`tfg:${linuxUnfucker(input)}`)
			.notConsumable(input)
			.circuit(1)
			.itemOutputs(outputs_array[0])
			.perTick(true)
			.chancedFluidInput(`${resolvedFluid} 1`, resolvedChance, 0)
			.perTick(false)
			.duration(fertilizer_duration)
			.EUt(resolvedEUt)
		if (dimension !== null) {
			b.dimension(dimension)
		};
		if (outputs_array[1] !== null) {
			b.chancedOutput(outputs_array[1], hydroponics_fertilizer_chance, 0)
			b.chancedOutput(outputs_array[2], hydroponics_fertilizer_chance, 0)
			b.chancedOutput(outputs_array[3], hydroponics_fertilizer_chance, 0)
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
 * @param {Internal.RecipesEventJS} event
 * @param {Internal.Dimension|null} dimension -Dimension ID
 * @param {Internal.Ingredient} input -Input Item. (seed, bush, etc.)
 * @param {Internal.ItemStack} output -Output Item. (vegetable, fruit, etc.)
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
 * @param {Internal.RecipesEventJS} event
 * @param {Internal.Dimension|null} dimension -Dimension ID
 * @param {Internal.Ingredient} input -Input Item. (sapling)
 * @param {Internal.ItemStack} output -Output Item. (wood)
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

	/** @type {string[]} - Tier names of greenhouse casings. */
	const greenhouse_tiers = ['treated_wood', 'copper', 'iron', 'stainless_steel'];
	
	greenhouse_tiers.forEach(tier => {

		const tier_tag = Ingredient.of(`#tfg:${tier}_greenhouse_casings`).itemIds.toArray().map(String);

        tier_tag.forEach(item => {
            event.stonecutting(item,
                Ingredient.of(`#tfg:${tier}_greenhouse_casings`).subtract(item)
            ).id(`tfg:stonecutter/${linuxUnfucker(item)}`)
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
	// TODO: Venus; swap the frame to calorite.
	event.recipes.gtceu.assembler('tfg:casings/machine_casing_egh')
		.itemInputs('gtceu:plascrete', '#forge:frames/ostrum')
		.inputFluids(Fluid.of('tfg:chloroplasts', 100))
		.itemOutputs('2x tfg:casings/machine_casing_egh')
		.duration(8*20)
		.circuit(6)
		.EUt(GTValues.VA[GTValues.EV])
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
		'64x ad_astra:strophar_stem', '4x tfg:saplings/strophar', '32x ad_astra:strophar_stem', '16x ad_astra:strophar_cap'
	], 1);
	generateGreenHouseRecipe(event, 'ad_astra:mars', '8x tfg:saplings/aeronos', [
		'64x ad_astra:aeronos_stem', '4x tfg:saplings/aeronos', '32x ad_astra:aeronos_stem', '16x ad_astra:aeronos_cap'
	], 1);
	generateGreenHouseRecipe(event, 'ad_astra:mars', '8x tfg:saplings/glacian', [
		'64x ad_astra:glacian_log', '4x tfg:saplings/glacian', '32x ad_astra:glacian_log', '16x species:alphacene_moss_block'
	], 1);
	generateGreenHouseRecipe(event, 'ad_astra:mars', '8x tfg:saplings/alphacene', [
		'64x species:alphacene_mushroom_block', '4x tfg:saplings/alphacene', '16x minecraft:mushroom_stem', '16x minecraft:mushroom_stem'
	], 1);
	generateGreenHouseRecipe(event, 'ad_astra:mars', '8x tfg:saplings/warped', [
		'64x beneath:wood/log/warped', '4x tfg:saplings/warped', '32x beneath:wood/log/warped', '16x minecraft:warped_wart_block'
	], 1);
	generateGreenHouseRecipe(event, 'ad_astra:mars', '8x tfg:saplings/crimson', [
		'64x beneath:wood/log/crimson', '4x tfg:saplings/crimson', '32x beneath:wood/log/crimson', '16x minecraft:nether_wart_block'
	], 1);

	// Mars Plants
	Ingredient.of('#tfg:mars_plants').stacks.forEach(element => {
		generateGreenHouseRecipe(event, 'ad_astra:mars', `8x ${element.id}`, [element.withCount(24), element.withCount(8)], 1);
	});

	generateCropGreenHouseRecipe(event, 'ad_astra:mars', 'betterend:amber_root_seeds', 'betterend:amber_root_product', 1);
	generateCropGreenHouseRecipe(event, 'ad_astra:mars', 'betterend:blossom_berry_seeds', 'betterend:blossom_berry_product', 1);
	generateCropGreenHouseRecipe(event, 'ad_astra:mars', 'betterend:bolux_mushroom_seeds', 'betterend:bolux_mushroom_product', 1);
	generateCropGreenHouseRecipe(event, 'ad_astra:mars', 'betterend:cave_pumpkin_plant_seeds', 'betterend:cave_pumpkin', 1);
	generateCropGreenHouseRecipe(event, 'ad_astra:mars', 'betterend:chorus_mushroom_seeds', 'betterend:chorus_mushroom_product', 1);
	generateCropGreenHouseRecipe(event, 'ad_astra:mars', 'betterend:shadow_berry_seeds', 'betterend:shadow_berry_product', 1);

	// Moon Plants
	generateGreenHouseRecipe(event, 'ad_astra:moon', '8x tfg:lunar_chorus_flower', [
		'64x minecraft:chorus_fruit', '8x minecraft:chorus_fruit', '8x tfg:lunar_chorus_flower', '8x tfg:lunar_chorus_flower'
	], 1);
	generateGreenHouseRecipe(event, 'ad_astra:moon', '8x minecraft:twisting_vines', [
		'16x minecraft:twisting_vines', '8x minecraft:pearlescent_froglight', '8x minecraft:verdant_froglight', '8x minecraft:ochre_froglight'
	], 1);

	Ingredient.of('#tfg:moon_plants').stacks.forEach(element => {
		generateGreenHouseRecipe(event, 'ad_astra:moon', `8x ${element.id}`, [element.withCount(24), element.withCount(8)], 1);
	});

	//#endregion
};