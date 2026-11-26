// priority: 0
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFCDyeRecipes(event) {

	//#region Utility

	/**
	 * Generates chlorine gas and sodium_hypochlorite (bleach) recipes for undyeing inputs.
	 * @param {*} event
	 * @param {Ingredient} input Input colored item or tag.
	 * @param {ItemStack} output Output base item.
	 * @param {Number|null} multiplier Multiplies fluid amount by this number. Defaults to 1.
	 */
	global.generateBleachingRecipes = function(event, input, output, multiplier) {
		let mult = multiplier ? multiplier : 1;

		event.recipes.gtceu.chemical_bath(`tfg:${global.linuxUnfucker(input)}_decolor/chlorine`)
			.itemInputs(input)
			.inputFluids(Fluid.of('gtceu:chlorine', 100 * mult))
			.itemOutputs(output)
			.duration(300)
			.EUt(4)
			.category(GTRecipeCategories.CHEM_DYES);

		event.recipes.gtceu.chemical_bath(`tfg:${global.linuxUnfucker(input)}_decolor/bleach`)
			.itemInputs(input)
			.inputFluids(Fluid.of('tfg:sodium_hypochlorite', 25 * mult), )
			.itemOutputs(output)
			.duration(200)
			.EUt(4)
			.category(GTRecipeCategories.CHEM_DYES);
	};

	/**
	 * Generates Chem Bath, Instant Barrel, and Shapeless recipes for dyeing items.
	 * @param {*} event
	 * @param {String} dye Ouput dye color.
	 * @param {Ingredient} input Input base item or tag.
	 * @param {ItemStack} output Output colored item.
	 * @param {Number|null} multiplier Multiplies fluid amount and dye item amount by this number. Defaults to 1.
	 * @param {Boolean|null} genChemBath Wether to generate Chem Bath recipes. Defaults to true.
	 * @param {Boolean|null} genBarrel Wether to generate Instant Barrel recipes. Defaults to true.
	 * @param {Boolean|null} genShapeless Wether to generate Shapeless recipes. Defaults to true.
	 */
	global.generateDyeingRecipes = function(event, dye, input, output, multiplier, genChemBath, genBarrel, genShapeless){
		if (input == null || output == null) {
			throw new Error('Missing input or output for generateDyeingRecipes');
		}
		let mult = multiplier ? multiplier : 1;
		genChemBath = genChemBath !== false;
		genBarrel = genBarrel !== false;
		genShapeless = genShapeless !== false;

		let recipeIdSuffix = `dyeing/${global.linuxUnfucker(String(output))}`
		if (genChemBath) {
			event.recipes.gtceu.chemical_bath(`tfg:${recipeIdSuffix}`)
				.itemInputs(input)
				.inputFluids(Fluid.of(`tfc:${dye}_dye`, 25 * mult))
				.itemOutputs(output)
				.duration(150)
				.EUt(4)
				.category(GTRecipeCategories.CHEM_DYES);
		}
		if (genBarrel) {
			event.recipes.tfc.barrel_sealed(1000)
				.outputItem(output)
				.inputItem(input)
				.inputFluid(Fluid.of(`tfc:${color}_dye`, 25 * mult))
				.id(`tfg:barrel/${recipeIdSuffix}`);
		}
		if (genShapeless) {
			let inputArray = Array(Math.max(1, Math.floor(mult))).fill(`#forge:dyes/${dye}`);
			event.shapeless(
				output,
				inputArray.concat(input)
			).id(`tfg:shapeless/${recipeIdSuffix}`);
		}
	};

	/**
	 * Registers shapeless dye-mixing recipes for a given item pattern.
	 *
	 * Example if given 'purple' and c => `tfc:ceramic/${c}_unfired_vessel` it will produce recipes:
	 * - `tfc:ceramic/blue_unfired_vessel` + `#forge:dyes/red` = `tfc:ceramic/purple_unfired_vessel`
	 * - `tfc:ceramic/red_unfired_vessel` + `#forge:dyes/blue` = `tfc:ceramic/purple_unfired_vessel`
	 * @param {*} event
	 * @param {string} dye The target output dye color. (ex. 'light_blue')
	 * @param {string} type The item category segment used in the recipe ID.
	 * @param {function(string): string} patternFn - A callback that takes a color name and returns the item ID.
	 */
	global.generateContextDyeMixing = function(event, dye, type, patternFn) {
		const mix = global.getDyeMixObject(dye);
		if (mix) {
			[
				[mix.in1, mix.in2],
				[mix.in2, mix.in1]
			].forEach(([a, b]) => {
				event.shapeless(
					patternFn(dye),
					[patternFn(a), `#forge:dyes/${b}`]
				).id(`tfg:shapeless/color_mixing/${type}/${dye}/from_${a}_and_${b}`);
			});
		}
	}
	//#endregion

	//=====================================================================================================
	
	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		// Replacing
		event.replaceInput({id: `gtceu:chemical_bath/dye_terracotta_to_${dye}`}, 'minecraft:terracotta', '#minecraft:terracotta');
		event.remove(`tfc:pot/${dye}_dye`);
		event.remove({id: `gtceu:chemical_reactor/chemical_dye_${dye}`});
		event.remove({id: `gtceu:large_chemical_reactor/chemical_dye_${dye}`});
		event.remove({id: `firmalife:vat/${dye}_dye`});
		event.remove({id: `tfc:crafting/ceramic/${dye}_unfired_vessel`});
		event.remove({id: `tfc:crafting/ceramic/${dye}_unfired_large_vessel`});

		//#region Dyeing
		// Chem Bath Dyeing
		global.generateDyeingRecipes(event, dye, 'tfc:ceramic/unfired_vessel', `tfc:ceramic/${dye}_unfired_vessel`, 1, true, false, true);
		global.generateDyeingRecipes(event, dye, 'tfc:ceramic/vessel', `tfc:ceramic/${dye}_glazed_vessel`, 1, true, false, false);
		global.generateDyeingRecipes(event, dye, 'tfc:candle', `tfc:candle/${dye}`, 1, true, false, true);
		global.generateDyeingRecipes(event, dye, 'tfc:ceramic/unfired_large_vessel', `tfc:ceramic/unfired_large_vessel/${dye}`, 1, true, false, true);
		global.generateDyeingRecipes(event, dye, 'tfc:ceramic/large_vessel', `tfc:ceramic/large_vessel/${dye}`, 1, true, false, false);
		global.generateDyeingRecipes(event, dye, 'tfg:decorative_vase/unfired', `tfg:decorative_vase/unfired/${dye}`, 1, true, false, true);
		
		global.generateContextDyeMixing(event, dye, 'unfired_vessel', c => `tfc:ceramic/${c}_unfired_vessel`);
		global.generateContextDyeMixing(event, dye, 'unfired_large_vessel', c => `tfc:ceramic/unfired_large_vessel/${c}`);
		global.generateContextDyeMixing(event, dye, 'unfired_decorative_vase', c => `tfg:decorative_vase/unfired/${c}`);	
		//#endregion
		
		//#region Dye Production
		// Dye Hammering
		event.shapeless(
			Item.of(`minecraft:${dye}_dye`, 1),
			[
				`#tfc:makes_${dye}_dye`,
				'#tfc:hammers'
			]
		).damageIngredient('#tfc:hammers', 1)
		.id(`tfg:shapeless/hammering_${dye}_dye`);

		// Pot Dyes
		for (let i = 1; i < 5; i++) {
			let inputArray = Array(i).fill(`#forge:dyes/${dye}`);

			event.recipes.tfc.pot(inputArray, Fluid.of('tfc:vinegar', 100 * i), 200, 200)
				.fluidOutput(Fluid.of(`tfc:${dye}_dye`, 288 * i))
				.id(`tfc:pot/${i}x_${dye}_dye_vinegar`);

			event.recipes.tfc.pot(inputArray, Fluid.of('tfc:lye', 100 * i), 200, 200)
				.fluidOutput(Fluid.of(`tfc:${dye}_dye`, 144 * i))
				.id(`tfc:pot/${i}x_${dye}_dye_lye`);
		};

		event.recipes.tfg.copper_pot()
			.itemInputs(`#forge:dyes/${dye}`)
			.fluidInputs('gtceu:ammonia 25', '#tfg:clean_water 475')
			.fluidOutputs(Fluid.of(`tfc:${dye}_dye`, 288 * 5))
			.duration(100)
			.temperature(200)
			.id(`firmalife:copper_pot/${dye}_dye_ammonia`);

		event.recipes.tfg.copper_pot()
			.itemInputs(`#forge:dyes/${dye}`)
			.fluidInputs('gtceu:acetic_acid 25', '#tfg:clean_water 475')
			.fluidOutputs(Fluid.of(`tfc:${dye}_dye`, 288 * 5))
			.duration(100)
			.temperature(200)
			.id(`firmalife:copper_pot/${dye}_dye_acetic`);

		event.recipes.tfg.copper_pot()
			.itemInputs(`#forge:dyes/${dye}`)
			.fluidInputs('tfc:vinegar 100')
			.fluidOutputs(Fluid.of(`tfc:${dye}_dye`, 288))
			.duration(100)
			.temperature(200)
			.id(`firmalife:copper_pot/${dye}_dye_vinegar`);

		event.recipes.tfg.copper_pot()
			.itemInputs(`#forge:dyes/${dye}`)
			.fluidInputs('tfc:lye 100')
			.fluidOutputs(Fluid.of(`tfc:${dye}_dye`, 144))
			.duration(100)
			.temperature(200)
			.id(`tfg:copper_pot/${dye}_dye_lye`);

		// Chemical Reactor Dyes
		event.recipes.gtceu.chemical_reactor(`chemical_dye_${dye}_ammonia`)
			.itemInputs(`#forge:dyes/${dye}`)
			.inputFluids('gtceu:ammonia 25', '#tfg:clean_water 475')
			.outputFluids(Fluid.of(`tfc:${dye}_dye`, 288 * 5))
			.duration(15 * 20)
			.EUt(24);

		event.recipes.gtceu.chemical_reactor(`chemical_dye_${dye}_acetic`)
			.itemInputs(`#forge:dyes/${dye}`)
			.inputFluids('gtceu:acetic_acid 25', '#tfg:clean_water 475')
			.outputFluids(Fluid.of(`tfc:${dye}_dye`, 288 * 5))
			.duration(15 * 20)
			.EUt(24);

		event.recipes.gtceu.chemical_reactor(`chemical_dye_${dye}_vinegar`)
			.itemInputs(`#forge:dyes/${dye}`)
			.inputFluids(Fluid.of('tfc:vinegar', 100))
			.outputFluids(Fluid.of(`tfc:${dye}_dye`, 288))
			.duration(15 * 20)
			.EUt(24);

		event.recipes.gtceu.chemical_reactor(`chemical_dye_${dye}_lye`)
			.itemInputs(`#forge:dyes/${dye}`)
			.inputFluids(Fluid.of('tfc:lye', 100))
			.outputFluids(Fluid.of(`tfc:${dye}_dye`, 144))
			.duration(15 * 20)
			.EUt(24);
		//#endregion

		//#region Dye Mixing
		const mix = global.getDyeMixObject(dye);
		if (mix) {
			// Mixer Recipes
			event.recipes.gtceu.mixer(`mixer_dye_${dye}`)
				.inputFluids(
					Fluid.of(mix.fluid1, 144),
					Fluid.of(mix.fluid2, 144)
				)
				.outputFluids(
					Fluid.of(mix.outFluid, 288)
				)
				.duration(20)
				.EUt(7);

			// Barrel Recipes
			[
				[mix.in1, mix.in2],
				[mix.in2, mix.in1]
			].forEach(([a, b]) => {
				event.recipes.tfc.barrel_instant_fluid(
					Fluid.of(mix.outFluid, 2),
					TFC.fluidStackIngredient(Fluid.of(`tfc:${a}_dye`, 1)),
					TFC.fluidStackIngredient(Fluid.of(`tfc:${b}_dye`, 1))
				).id(`tfg:barrel/dye_mixing/${dye}_dye/from_${a}_dye_and_${b}_dye`);
			});
		};
		//#endregion
	});

	//#region Bleaching
	event.replaceInput({id: 'tfc:barrel/dye/bleach_terracotta'}, '#tfc:colored_terracotta', 'minecraft:terracotta');
	event.replaceInput({id: 'gtceu:chemical_bath/decolor_terracotta'}, '#minecraft:terracotta', '#tfc:colored_terracotta');

	const bleaching = {
		candles: ['#tfc:colored_candles', 'tfc:candle'],
		unfired_vessels: ['#tfg:colorized_unfired_vessels', 'tfc:ceramic/unfired_vessel'],
		vessels: ['#tfg:colorized_fired_vessels', 'tfc:ceramic/vessel'],
		unfired_large_vessel: ['#tfg:colorized_unfired_large_vessels', 'tfc:ceramic/unfired_large_vessel'],
		large_vessels: ['#tfg:colorized_fired_large_vessels', 'tfc:ceramic/large_vessel'],
		unfired_vases: ['#tfg:decorative_vases/unfired', 'tfg:decorative_vase/unfired'],
		vases: ['#tfg:decorative_vases', 'tfg:decorative_vase']
	};
	Object.values(bleaching).forEach(set => {
		global.generateBleachingRecipes(event, set[0], set[1]);
	});

	//#endregion
};
