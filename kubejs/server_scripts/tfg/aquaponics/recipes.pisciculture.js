"use strict";


/**
 * @param {Internal.RecipesEventJS} event 
 */
const registerTFGPiscicultureRecipes = (event) => {
//#region Utility Script
	const $ISPRecipeLogic = Java.loadClass("su.terrafirmagreg.core.common.data.tfgt.machine.trait.ISPOutputRecipeLogic")
	const $SizedIngredient = Java.loadClass("com.gregtechceu.gtceu.api.recipe.ingredient.SizedIngredient")
	const Sized = (ing, amount) => $SizedIngredient.create(ing, amount)

	/**
	 * @typedef {Object} PiscicultureRecipeData
	 * @property {number?} circuit
	 * @property {Internal.GTRecipeComponents$FluidIngredientJS_[]?} fluidInputs
	 * @property {Internal.FluidStackJS[]?} fluidOutputs
	 * @property {(string | [string, Internal.Ingredient])[]?} itemInputs
	 * @property {string[]?} itemOutputs Ingredient outputs.
	 * @property {Internal.ItemStackProviderJS?} itemOutputProvider ItemStackProvider which provides the recipe output.
	 * @property {boolean?} daytime Daytime Toggle.
	 * @property {boolean|boolean[]?} perTick Per tick toggles.
	 * @property {(string | [string, Internal.GTRecipeSchema$GTRecipeJS.dimension])?} dimension Dimension ID
	 * @property {Internal.GTRecipeSchema$GTRecipeJS.cleanroom?} cleanroom CleanroomType
	 * @property {boolean|null} oxygenated Whether the recipe requires an oxygenated environment.
	 * @property {string[]?} notConsumable
 	 * @property {([string, number, number?] | string | {ingredient: string, chance: number, bonus?: number})[]?} chancedFluidInputs
 	 * @property {([string, number, number?] | string | {ingredient: string, chance: number, bonus?: number})[]?} chancedFluidOutputs
	*
	* **NOTE:** TFC Ingredients do not support item counts higher than 1. Do `Sized(TFCIngredient('item:item'), count)` instead of `TFCIngredient('[count]x item:item')`
	*/

	/**
	 * @param {"pisciculture"} type 
	 * @param {string} id 
	 * @param {number} duration 
	 * @param {number} EUt 
	 * @param {string} text
	 * @param {PiscicultureRecipeData} data 
	 */
	function registerPiscicultureRecipe(type, id, duration, EUt, text, data) {
		if (data.itemInputs === undefined) data.itemInputs = []
		if (data.itemOutputs === undefined) data.itemOutputs = []
		if (data.fluidInputs === undefined) data.fluidInputs = []
		if (data.fluidOutputs === undefined) data.fluidOutputs = []
		if (data.chancedFluidInputs === undefined) data.chancedFluidInputs = []
		if (data.chancedFluidOutputs === undefined) data.chancedFluidOutputs = []
		if (data.notConsumable === undefined) data.notConsumable = []
		let gregInputs = [], inputs = []
		let outputFirstIndex = (data.itemOutputProvider === undefined) ? 0 : 1
		data.itemInputs.forEach(item => {
			if (typeof item === "string") {
				gregInputs.push(item)

				const match = item.match(/^(\d+)\s*x\s*/i);
				let count = 1
				if (match) {
					count = parseInt(match[1]);
					item = item.slice(match[0].length);
				}
				inputs.push($SizedIngredient.create(item, count))
			} else if (Array.isArray(item)) {
				gregInputs.push(item[0])
				inputs.push(item[1])
			} else {
				const ing = TFC.ingredient.notRotten(Ingredient.of(item.strongNBT()));
				inputs.push($SizedIngredient.create(ing, 1))
			}
		})

		$ISPRecipeLogic.RegisterRecipeData(`${type  }/${  id}`, inputs, (data.itemOutputProvider === undefined) ? null : data.itemOutputProvider.asCanonClass(), data.itemOutputs.slice(outputFirstIndex).map(i => Item.of(i)))

		let r = event.recipes.gtceu[type](id)
		.duration(duration)
		.EUt(EUt)

		if (data.circuit) r.circuit(data.circuit)
		if (data.daytime) r.daytime(data.daytime)
		if (data.perTick) r.perTick(data.perTick)
		if (data.dimension !== undefined && data.dimension !== null) { 
			r.dimension(data.dimension) 
		}
		if (data.cleanroom) r.cleanroom(data.cleanroom)
		if (data.oxygenated !== undefined && data.oxygenated !== null) {
			TFGRecipeSchemaBindings.isOxygenated(r, data.oxygenated)
		}
		if (data.notConsumable.length > 0) r.notConsumable(data.notConsumable)
		if (data.itemOutputs.length > 0) r.itemOutputs(data.itemOutputs)
		if (data.itemInputs.length > 0) r.itemInputs(inputs)
		if (data.fluidInputs.length > 0) r.inputFluids(data.fluidInputs);
		if (data.fluidOutputs.length > 0) r.outputFluids(data.fluidOutputs);
		if (data.chancedFluidInputs.length > 0) {
			r.perTick(true);
			data.chancedFluidInputs.forEach(f => {
				let ing, chance, bonus = 0;
				if (Array.isArray(f)) {
					ing = f[0]; chance = (f[1] ?? 1000); bonus = (f[2] ?? 0);
				} else if (typeof f === 'object') {
					ing = f.ingredient; chance = (f.chance ?? 1000); bonus = (f.bonus ?? 0);
				} else {
					ing = f; chance = 1000; bonus = 0;
				}
				r.chancedFluidInput(ing, chance, bonus);
			});
			r.perTick(false);
		}
		if (data.chancedFluidOutputs.length > 0) {
			data.chancedFluidOutputs.forEach(f => {
			r.perTick(true);
				let ing, chance, bonus = 0;
				if (Array.isArray(f)) {
					ing = f[0]; chance = (f[1] ?? 1000); bonus = (f[2] ?? 0);
				} else if (typeof f === 'object') {
					ing = f.ingredient; chance = (f.chance ?? 1000); bonus = (f.bonus ?? 0);
				} else {
					ing = f; chance = 1000; bonus = 0;
				}
				r.chancedFluidOutput(ing, chance, bonus);
			});
			r.perTick(false);
		}
		if (text !== "") r.addDataString("action", text);

		return r;
	}

	/**
	 * @param {string} id 
	 * @param {number} duration 
	 * @param {number} EUt 
	 * @param {FoodRecipeData} data 
	 */
	const piscicultureRecipe = (id, duration, EUt, data) => registerPiscicultureRecipe("pisciculture_fishery", id, duration, EUt, "", data)

	/**
	 * @param {string} id 
	 * @param {number} duration 
	 * @param {number} EUt 
	 * @param {FoodRecipeData} data 
	 * @param {string} text
	 */
	const piscicultureRecipeText = (id, duration, EUt, text, data) => registerPiscicultureRecipe("pisciculture_fishery", id, duration, EUt, text, data)

		/**
		 * Function for generating pisciculture recipes.
		 *
		 * @param {*} event
		 * @param {string|null} dimension -Dimension ID.
		 * @param {string|string[]} input -Input Item (roe, fish food, etc).
		 * @param {string|string[]} output -Output Items.
		 * @param {Internal.$ISPRecipeLogic?} isp -ISP output provider.
		 * @param {string} id -Recipe ID.
		 */
		function generatePiscicultureRecipe(dimension, input, output, isp, id) {

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

			piscicultureRecipe(`tfg:${id}`, 5 * 1 * 20, resolvedEUt, {
				oxygenated: requiresOxygen,
				dimension: dimension,
				chancedFluidInputs: [
					[`${resolvedFluid} 1`, resolvedChance, 0]
				],
				chancedFluidOutputs: [
					[`${resolvedFluidOut} 1`, resolvedChance, 0]
				],
				itemInputs: Array.isArray(input) ? input : [input],
				itemOutputs: output,
				itemOutputProvider: isp
			});
		};


	//#endregion
	// Recipes

	//#region Multiblock Parts


	//#endregion
	//#region Recipes

	global.FISH_INDEX.forEach(fish => {

		// Bucket to Roe.
		if (fish.parent !== null && fish.parent.includes('bucket')) {
			generatePiscicultureRecipe(
				fish.dimension, [
					fish.parent,
					fish.parent,
					'6x #tfg:basic_fish_food'
				], [
					`6x ${fish.item}`,
					Item.of(`3x tfg:fish_roe`, {"mob_type": fish.id}),
					'2x minecraft:bucket'
				], 
				TFC.isp.of(`6x ${fish.item}`).copyOldestFood(),
				`${fish.id.replace(/[/:\s]/g, "_")}/basic_food/bucket_to_roe`
			);

			generatePiscicultureRecipe(
				fish.dimension, [
					fish.parent,
					fish.parent,
					'2x #tfg:advanced_fish_food'
				], [
					`12x ${fish.item}`,
					Item.of(`4x tfg:fish_roe`, {"mob_type": fish.id}),
					'2x minecraft:bucket'
				], 
				TFC.isp.of(`12x ${fish.item}`).copyOldestFood(),
				`${fish.id.replace(/[/:\s]/g, "_")}/advanced_food/bucket_to_roe`
			);
		} else {
			generatePiscicultureRecipe(
				fish.dimension, [
					fish.parent,
					fish.parent,
					'6x #tfg:basic_fish_food'
				], [
					`6x ${fish.item}`,
					Item.of(`3x tfg:fish_roe`, {"mob_type": fish.id})
				], 
				TFC.isp.of(`6x ${fish.item}`).copyOldestFood(),
				`${fish.id.replace(/[/:\s]/g, "_")}/basic_food/parent_to_roe`
			);

			generatePiscicultureRecipe(
				fish.dimension, [
					fish.parent,
					fish.parent,
					'2x #tfg:advanced_fish_food'
				], [
					`12x ${fish.item}`,
					Item.of(`4x tfg:fish_roe`, {"mob_type": fish.id})
				], 
				TFC.isp.of(`12x ${fish.item}`).copyOldestFood(),
				`${fish.id.replace(/[/:\s]/g, "_")}/advanced_food/parent_to_roe`
			);
		};

		// Roe to Roe.
		generatePiscicultureRecipe(
			fish.dimension, [
				Item.of(`tfg:fish_roe`, {"mob_type": fish.id}),
				Item.of(`tfg:fish_roe`, {"mob_type": fish.id}),
				'6x #tfg:basic_fish_food'
			], [
				`10x ${fish.item}`,
				Item.of(`4x tfg:fish_roe`, {"mob_type": fish.id})
			], 
			TFC.isp.of(`10x ${fish.item}`).copyOldestFood(),
			`${fish.id.replace(/[/:\s]/g, "_")}/basic_food/roe_to_roe`
		);

		generatePiscicultureRecipe(
			fish.dimension, [
				Item.of(`tfg:fish_roe`, {"mob_type": fish.id}),
				Item.of(`tfg:fish_roe`, {"mob_type": fish.id}),
				'2x #tfg:advanced_fish_food'
			], [
				`15x ${fish.item}`,
				Item.of(`5x tfg:fish_roe`, {"mob_type": fish.id})
			], 
			TFC.isp.of(`15x ${fish.item}`).copyOldestFood(),
			`${fish.id.replace(/[/:\s]/g, "_")}/advanced_food/roe_to_roe`
		);
	});
	//#endregion
};