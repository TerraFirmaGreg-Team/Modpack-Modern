"use strict";

/**
 * This file is for recipes related to the processing of crops and meat for further use.
 */
function registerTFGBasicProcessingFoodRecipes(event) {

	//#region Plant Cutting
	
	/**
	 * Object array of crops to be cut up. `{input, output, genShapelessKnife, genShapelessHammer, genShapelessMortar}`
	 * @type {{String, String, Boolean, Boolean, Boolean}[]}
	 */
	const plantCutting = [
		{input: 'minecraft:brown_mushroom_block', output: '4x minecraft:brown_mushroom'},
		{input: 'minecraft:red_mushroom_block', output: '4x minecraft:red_mushroom'},
		{input: 'tfc:pumpkin', output: '4x tfc:food/pumpkin_chunks'},
		{input: 'tfc:melon', output: '4x tfc:food/melon_slice'},
		{input: 'betterend:cave_pumpkin', output: '4x betterend:cave_pumpkin_chunks', genShapelessKnife: true, genShapelessHammer: true},
	];

	plantCutting.forEach(block => {
		global.generateCuttingFoodRecipes(event, block.input, block.output, block.genShapelessKnife, block.genShapelessHammer, block.genShapelessMortar);
	});

	global.SPICES.forEach((spice, i) => {
		if (i === 0) {
			global.generateCuttingFoodRecipes(event, spice.plant, `2x ${spice.product}`);
		}

		if (i > 1) {
			global.generateCuttingFoodRecipes(event, spice.plant, `2x ${spice.product}`, true);
		}
	});

	//#endregion
	//#region Soy Processing

	// Soy Processing
	event.recipes.tfc.advanced_shaped_crafting(
		TFC.isp.of(`firmalife:food/soybean_paste`).copyFood(), ['A', 'B'], {
			A: TFC.ingredient.notRotten(`firmalife:food/dehydrated_soybeans`),
			B: '#forge:tools/mortars'
		}, 0, 0).id(`tfg:mortar/soybean_paste`);

	global.processorRecipe(event, 'soybean_paste', 60, 8, {
		itemInputs: ['firmalife:food/dehydrated_soybeans'],
		itemOutputs: ['firmalife:food/soybean_paste'],
		itemOutputProvider: TFC.isp.of('firmalife:food/soybean_paste').copyOldestFood()
	});

	global.processorRecipe(event, 'soy_mixture', 300, 8, {
		circuit: 1,
		itemInputs: ['tfc:food/soybean', 'tfc:powder/salt'],
		fluidInputs: ['#tfg:clean_water 50'],
		itemOutputs: ['firmalife:food/soy_mixture'],
		itemOutputProvider: TFC.isp.of('firmalife:food/soy_mixture').copyFood()
	});

	global.processorRecipe(event, 'soy_mixture_sea_water', 300, 8, {
		circuit: 1,
		itemInputs: ['tfc:food/soybean'],
		fluidInputs: ['tfc:salt_water 50'],
		itemOutputs: ['firmalife:food/soy_mixture'],
		itemOutputProvider: TFC.isp.of('firmalife:food/soy_mixture').copyFood()
	});

	global.processorRecipe(event, 'soy_mixture_salt_water', 300, 8, {
		circuit: 1,
		itemInputs: ['tfc:food/soybean'],
		fluidInputs: ['gtceu:salt_water 25'],
		itemOutputs: ['firmalife:food/soy_mixture'],
		itemOutputProvider: TFC.isp.of('firmalife:food/soy_mixture').copyFood()
	});

	//#endregion
	//#region Olive Processing

	event.recipes.tfc.advanced_shaped_crafting(
		TFC.isp.of(`2x tfc:olive_paste`).copyFood(), ['A', 'B'], {
			A: TFC.ingredient.notRotten(`tfc:food/olive`),
			B: '#forge:tools/mortars'
		}, 0, 0).id(`tfg:mortar/olive_paste`);

	global.processorRecipe(event, 'olive_paste', 60, 8, {
		itemInputs: ['tfc:food/olive'],
		itemOutputs: ['2x tfc:olive_paste'],
		itemOutputProvider: TFC.isp.of('2x tfc:olive_paste'),
		circuit: 3
	});

	event.recipes.gtceu.mixer('tfg:tfc/olive_oil_water')
		.inputFluids(Fluid.of('water', 200))
		.itemInputs('1x tfc:olive_paste')
		.outputFluids(Fluid.of('tfc:olive_oil_water', 200))
		.duration(200)
		.EUt(28);

	event.recipes.gtceu.distillery('tfg:tfc/olive_oil')
		.inputFluids(Fluid.of('tfc:olive_oil_water', 250))
		.outputFluids(Fluid.of('tfc:olive_oil', 50))
		.duration(600)
		.EUt(28);

	event.recipes.gtceu.fermenter('tfg:soybean_oil')
		.itemInputs('firmalife:food/soybean_paste')
		.inputFluids("#tfg:clean_water 100")
		.outputFluids(Fluid.of('firmalife:soybean_oil', 250))
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(600);
	
	//#endregion
	//#region Misc Plants
	
	// Golden Apple
	global.processorRecipe(event, 'golden_apple', 30 * 20, GTValues.VA[GTValues.HV], {
		itemInputs: ['#tfc:foods/apples'],
		fluidInputs: [Fluid.of('gtceu:gold', 144 * 8)],
		itemOutputs: ['minecraft:golden_apple'],
		circuit: 5,
		itemOutputProvider: TFC.isp.of('minecraft:golden_apple').resetFood()
	});

	// Fries
	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.itemStackProvider.of('4x tfg:food/raw_fries').copyFood(),
		[TFC.ingredient.notRotten('tfc:food/potato'), '#tfc:knives'],
		'tfc:food/potato'
	).id(`tfg:crafting/raw_fries_knife`);

	global.processorRecipe(event, 'raw_fries', 20*1, 8, {
		itemInputs: ['tfc:food/potato'],
		itemOutputs: ['4x tfg:food/raw_fries'],
		circuit: 7,
		itemOutputProvider: TFC.isp.of('4x tfg:food/raw_fries').copyFood()
	});

	global.generateOilBoilingFoodRecipes(event, 'tfg:food/raw_fries', 'tfg:food/cooked_fries', true, true, true);
	
    // Pineapple fiber
    global.processorRecipe(event, 'firmalife:crafting/pineapple_fiber', 300, 16, {
        circuit: 3,
        itemInputs: ['firmalife:food/pineapple'],
        fluidInputs: [Fluid.of('gtceu:nitrogen', 100)],
        itemOutputs: ['firmalife:pineapple_fiber']
    });

	//#endregion
	//#region Meat Processing

	// Stackatick
	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.itemStackProvider.of('tfg:food/raw_stickastackatick').copyFood(),
		[TFC.ingredient.notRotten('tfg:food/raw_stackatick_chunks'), '#forge:rods/wood'], 'tfg:food/raw_stackatick_chunks')
		.id(`tfg:crafting/raw_stickastackatick`);

	// Bacon
	global.processorRecipe(event, 'bacon', 300, 8, {
		circuit: 1,
		itemInputs: ['tfc:food/pork', 'tfc:powder/salt'],
		itemOutputs: ['4x firmalife:food/bacon'],
		fluidInputs: ['gtceu:wood_gas 5', 'tfc:brine 100'],
		itemOutputProvider: TFC.isp.of('4x firmalife:food/bacon')
			.addTrait('firmalife:smoked')
			.addTrait('tfc:brined')
			.addTrait('tfc:salted')
			.copyFood()
	});

	// Eggs.
	for (let i = 1; i <= 6; i++) {
		event.remove({ id: `tfc:pot/boiled_egg_${i}` });
	};
	event.remove({ id: 'tfc:heating/cooked_egg' });
	
	global.processorRecipe(event, 'pickled_egg', 1000, 8, {
		circuit: 1,
		itemInputs: ['minecraft:clay_ball', 'tfc:powder/wood_ash', 'tfc:powder/salt', 'tfc:food/boiled_egg'],
		itemOutputs: ['firmalife:food/pickled_egg'],
		itemOutputProvider: TFC.isp.of('firmalife:food/pickled_egg').copyFood()
	});
	
	global.generateFoodCookingRecipes(event, '#forge:eggs', 'tfc:food/cooked_egg', true, true, false, 1);
	global.generateWaterBoilingFoodRecipes(event, '#forge:eggs', 'tfc:food/boiled_egg', true, false, true, 2);

	//#endregion
	//#region Chemicals

	// Vinegar
	global.processorRecipe(event, 'vinegar_alcohol', 600, GTValues.VA[GTValues.LV], {
		circuit: 5,
		itemInputs: ['#tfc:foods/fruits'],
		fluidInputs: ['#tfg:alcohols 250'],
		fluidOutputs: [Fluid.of('tfc:vinegar', 250)]
	});

	// Salt
	event.shapeless('4x tfc:powder/salt', ['#forge:dusts/salt', '#forge:tools/mortars'])
		.id(`tfg:mortar/salt`);
		
	// Sodium Dihydrogen Citrate
	event.recipes.gtceu.chemical_reactor('tfg:sodium_dihydrogen_citrate')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.dust, 'tfg:citric_acid', 1),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.SodiumBicarbonate, 1)
		)
		.itemOutputs('tfg:sodium_dihydrogen_citrate_dust')
		.outputFluids(
			Fluid.of('minecraft:water', 1000),
			Fluid.of('gtceu:carbon_dioxide', 1000)
		)
		.duration(20*10)
		.EUt(GTValues.VA[GTValues.HV]);

	// Citric Acid
	global.processorRecipe(event, 'citric_acid', 20*20, GTValues.VA[GTValues.HV], {
		itemInputs: [
			'#tfg:foods/citrus_fruits',
			'gtceu:calcium_hydroxide_dust'
		],
		fluidInputs: ['gtceu:sulfuric_acid 100'],
		itemOutputs: ['2x tfg:citric_acid_dust' ],
		itemOutputProvider: TFC.isp.of('2x tfg:citric_acid_dust')
	});

	//#endregion
};