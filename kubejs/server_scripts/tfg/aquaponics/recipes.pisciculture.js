"use strict";

//#region Utility Script

		/**
		 * Function for generating pisciculture recipes.
		 *
		 * @param {*} event
		 * @param {string|null} dimension -Dimension ID.
		 * @param {string|string[]} input -Input Item (roe, fish food, etc).
		 * @param {string|string[]} output -Output Items.
		 * @param {string} id -Recipe ID.
		 */
		function generatePiscicultureRecipe(event, dimension, input, output, id) {

			/**
			 * Dimension setting index provides recipe modifications based on the dimension assigned.
			 *
			 * @typedef {Object} DimensionIndex
			 * @property {string} id - Dimension ID.
			 * @property {string} fluid - Fluid ID or tag.
			 * @property {number} fluid_chance - Chance for fluid consumption per tick out of 100.
			 * @property {string} fluid_out - Output fluid ID.
			 * @property {GTValues.EUt} eut - EUt value for that dimension.
			 * @property {boolean|null} oxygenated - Whether the recipe requires an oxygenated environment.
			 */

			/** @type {DimensionIndex[]} - Dimension settings array */
			const dimension_index = [
				// Overworld settings are also used as the default when no dimension is specified.
				{id: 'minecraft:overworld', fluid: '#tfg:clean_water', fluid_chance: 50, fluid_out: 'tfg:nitrate_rich_water', eut: GTValues.VA[GTValues.LV], oxygenated: true},
				{id: 'minecraft:the_nether', fluid: '#tfg:clean_water', fluid_chance: 50, fluid_out: 'tfg:nitrate_rich_water', eut: GTValues.VA[GTValues.LV], oxygenated: true},
				// The moon has no fish yet :(
				{id: 'ad_astra:mars', fluid: 'tfg:semiheavy_ammoniacal_water', fluid_chance: 50, fluid_out: 'tfg:nitrate_rich_semiheavy_ammoniacal_water', eut: GTValues.VA[GTValues.HV], oxygenated: null}
			];

			// Resolve dimension based modifier defaults by comparing to the `dimension_index` array.
			const dimMods = dimension ? dimension_index.find(d => d.id === dimension) : null;
			const resolvedFluid = dimMods?.fluid ?? '#tfg:clean_water';
			const resolvedFluidOut = dimMods?.fluid_out ?? 'tfg:nitrate_rich_water';
			const resolvedEUt = dimMods ? dimMods.eut : GTValues.VA[GTValues.LV];
			const resolvedChance = dimMods ? (dimMods.fluid_chance * 100) : 5000;
			const requiresOxygen = dimMods ? dimMods.oxygenated : true;

			// Collect errors.
			const errors = [];

			if (input === undefined) {
				errors.push("input is undefined");
			};
			if (output !== undefined && !Array.isArray(output)) {
				output = [output];
			}
			if (output === undefined || output.length === 0 || output.length > 4) {
				errors.push("output is undefined or has invalid length");
			};

			// If there are any errors, log them all and throw once.
			if (errors.length > 0) {
				throw new TypeError(`Pisciculture Fishery recipe errors for recipe ID ${`tfg:pisciculture_fishery/${id}`}\n - ${errors.join("\n - ")}`);
			};

		let a = event.recipes.gtceu.pisciculture_fishery(`tfg:${id}`)
			.itemInputs(input)
			.perTick(true)
			.chancedFluidInput(`${resolvedFluid} 1`, resolvedChance, 0)
			.chancedFluidOutput(`${resolvedFluidOut} 1`, resolvedChance, 0)
			.perTick(false)
			.itemOutputs(output)
			.duration(5 * 1 * 20)
			.EUt(resolvedEUt);

		if (dimension !== null) {
			a.dimension(dimension)
		};

		if (requiresOxygen !== null) {
			TFGRecipeSchemaBindings.isOxygenated(a, requiresOxygen)
		};
	};

//#endregion

/**
 * @param {Internal.RecipesEventJS} event 
 */
const registerTFGPiscicultureRecipes = (event) => {


	//#region Multiblock Parts

	// Pisciculture Fishery Controller
	event.recipes.gtceu.shaped('tfg:pisciculture_fishery', [
		'FBF',
		'EAE',
		'CDC'
	], {
		A: 'gtceu:hv_machine_hull',
		B: 'tfg:machine_casing_aluminium_plated_steel',
		C: '#gtceu:circuits/hv',
		D: 'gtceu:stainless_steel_small_fluid_pipe',
		E: 'gtceu:hv_electric_pump',
		F: 'gtceu:fluid_filter'
	}).addMaterialInfo().id('tfg:shaped/pisciculture_fishery');

	// Pisciculture Core
	event.recipes.gtceu.shaped('tfg:pisciculture_core', [
		'CBC',
		'DBD',
		'CAC'
	], {
		A: 'gtceu:hv_rotor_holder',
		B: 'gtceu:stainless_steel_rotor',
		C: 'gtceu:inert_machine_casing',
		D: ChemicalHelper.get(TagPrefix.ring, GTMaterials.PolyvinylChloride, 1)
	}).addMaterialInfo().id('tfg:shaped/pisciculture_core');
	
	//#endregion
	//#region Recipes

	global.FISH_INDEX.forEach(fish => {

		// Bucket to Roe.
		if (fish.parent !== null && fish.parent.includes('bucket')) {
			generatePiscicultureRecipe(event,
				fish.dimension, [
					fish.parent,
					fish.parent,
					'6x #tfc:small_fishing_bait'
				], [
					`6x ${fish.item}`,
					Item.of(`3x tfg:fish_roe`, {"mob_type": fish.id}).strongNBT(),
					'2x minecraft:bucket'
				],
				`${fish.id.replace(/[/:\s]/g, "_")}/basic_food/bucket_to_roe`
			);

			generatePiscicultureRecipe(event,
				fish.dimension, [
					fish.parent,
					fish.parent,
					'2x #tfg:advanced_fish_food'
				], [
					`12x ${fish.item}`,
					Item.of(`4x tfg:fish_roe`, {"mob_type": fish.id}).strongNBT(),
					'2x minecraft:bucket'
				],
				`${fish.id.replace(/[/:\s]/g, "_")}/advanced_food/bucket_to_roe`
			);
		} else {
			generatePiscicultureRecipe(event,
				fish.dimension, [
					fish.parent,
					fish.parent,
					'6x #tfc:small_fishing_bait'
				], [
					`6x ${fish.item}`,
					Item.of(`3x tfg:fish_roe`, {"mob_type": fish.id}).strongNBT()
				],
				`${fish.id.replace(/[/:\s]/g, "_")}/basic_food/parent_to_roe`
			);

			generatePiscicultureRecipe(event,
				fish.dimension, [
					fish.parent,
					fish.parent,
					'2x #tfg:advanced_fish_food'
				], [
					`12x ${fish.item}`,
					Item.of(`4x tfg:fish_roe`, {"mob_type": fish.id}).strongNBT()
				],
				`${fish.id.replace(/[/:\s]/g, "_")}/advanced_food/parent_to_roe`
			);
		};

		// Roe to Roe.
		generatePiscicultureRecipe(event,
			fish.dimension, [
				Item.of(`tfg:fish_roe`, {"mob_type": fish.id}).strongNBT(),
				Item.of(`tfg:fish_roe`, {"mob_type": fish.id}).strongNBT(),
				'6x #tfc:small_fishing_bait'
			], [
				`10x ${fish.item}`,
				Item.of(`4x tfg:fish_roe`, {"mob_type": fish.id}).strongNBT()
			],
			`${fish.id.replace(/[/:\s]/g, "_")}/basic_food/roe_to_roe`
		);

		generatePiscicultureRecipe(event,
			fish.dimension, [
				Item.of(`tfg:fish_roe`, {"mob_type": fish.id}).strongNBT(),
				Item.of(`tfg:fish_roe`, {"mob_type": fish.id}).strongNBT(),
				'2x #tfg:advanced_fish_food'
			], [
				`15x ${fish.item}`,
				Item.of(`5x tfg:fish_roe`, {"mob_type": fish.id}).strongNBT()
			],
			`${fish.id.replace(/[/:\s]/g, "_")}/advanced_food/roe_to_roe`
		);	
		
	});
	//#endregion
};