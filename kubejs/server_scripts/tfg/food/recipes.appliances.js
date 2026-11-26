"use strict";

function registerTFGAppliancesRecipes(event) {

//#region Baking Dishes

	// Clay Baking Dish
	event.recipes.tfc.knapping('tfg:baking_dish_unfired', 'tfc:clay', [
		' XX  ',
		'X  X ',
		'X  X ',
		'X  X ',
		' XX  '
	]).id('tfg:clay_knapping/baking_dish_unfired');

	// Forming Press
	event.recipes.gtceu.forming_press('tfg:baking_dish_unfired')
		.notConsumable('gtceu:plate_casting_mold')
		.itemInputs('5x minecraft:clay_ball')
		.itemOutputs('tfg:baking_dish_unfired')
		.duration(120)
		.EUt(GTValues.VA[GTValues.ULV]);

	global.MINECRAFT_DYE_NAMES.forEach(color => {
		// Tag Based Barrel Dyeing
		event.recipes.tfc.barrel_sealed(1000)
			.outputItem(`tfg:baking_dish_${color}_unfired`)
			.inputItem(Ingredient.of('#tfg:unfired_baking_dishes').subtract(`tfg:baking_dish_${color}_unfired`))
			.inputFluid(Fluid.of(`tfc:${color}_dye`, 25))
			.id(`tfg:barrel/dyeing/baking_dish_${color}_unfired`);

		// Shapeless and Chem Bath Dyeing
		global.generateDyeingRecipes(event, color, 'tfg:baking_dish_ceramic', `tfg:baking_dish_${color}`, 1, true, false, false);
		global.generateDyeingRecipes(event, color, 'tfg:baking_dish_unfired', `tfg:baking_dish_${color}_unfired`, 1, true, false, true);
		global.generateContextDyeMixing(event, color, 'unfired_baking_dish', c => `tfg:baking_dish_${c}_unfired`);

		// Heating Colored Dishes
		event.recipes.tfc.heating(`tfg:baking_dish_${color}_unfired`, 1399)
			.resultItem(`tfg:baking_dish_${color}`)
			.id(`tfg:heating/baking_dish_${color}_unfired`);

		// Smelting Colored Dishes
		event.smelting(
			`tfg:baking_dish_${color}`,
			`tfg:baking_dish_${color}_unfired`
		).id(`tfg:smelting/baking_dish_${color}`);
	});

	// Bleaching
	global.generateBleachingRecipes(event, '#tfg:baking_dishes', 'tfg:baking_dish_ceramic');
	global.generateBleachingRecipes(event, '#tfg:unfired_baking_dishes', 'tfg:baking_dish_unfired');

	// Smelting Baking Dish
	event.smelting(
		'tfg:baking_dish_ceramic',
		'tfg:baking_dish_unfired'
	).id('tfg:smelting/baking_dish');

	// Heating Baking Dish
	event.recipes.tfc.heating('tfg:baking_dish_unfired', 1399)
		.resultItem('tfg:baking_dish_ceramic')
		.id('tfg:heating/baking_dish_unfired');

	// Recyling
	const bakingDishes = Ingredient.of('#tfg:baking_dishes').itemIds.toArray().map(String);
	bakingDishes.forEach(dish => {
		TFGHelpers.registerMaterialInfo(dish, [GTMaterials.Brick, 5]);
	});

	const unfiredBakingDishes = Ingredient.of('#tfg:unfired_baking_dishes').itemIds.toArray().map(String);
	unfiredBakingDishes.forEach(dish => {
		TFGHelpers.registerMaterialInfo(dish, [GTMaterials.Clay, 5]);
	});

//#endregion
//#region Skillet

	// Welding
	addMaterialWelding(event, 'tfg:skillet', '#forge:rods/iron', '#forge:double_plates/iron', GTMaterials.Iron, 2, 0, 'skillet', 2);
	// Melting
	addTFCMelting(event, 'tfg:skillet', GTMaterials.Iron, 144 * 2.5, 'skillet');
	// Recycling
	TFGHelpers.registerMaterialInfo('tfg:skillet', [GTMaterials.Iron, 2.5]);

//#endregion
//#region Copper Pot

	// Shaped
	event.shaped('tfg:copper_pot', [
		'CBC',
		'DA '
	], {
		A: '#forge:double_ingots/copper',
		B: '#forge:large_fluid_pipes/copper',
		C: '#forge:rings',
		D: '#forge:tools/screwdrivers'
	}).id('tfg:shaped/copper_pot');

	// Assembler
	event.recipes.gtceu.assembler('tfg:copper_pot')
		.itemInputs('#forge:double_ingots/copper', '#forge:large_fluid_pipes/copper', '2x #forge:rings')
		.circuit(1)
		.itemOutputs('tfg:copper_pot')
		.duration(40)
		.EUt(GTValues.VA[GTValues.ULV])
		.addMaterialInfo(false);
		
	// Melting
	addTFCMelting(event, 'tfg:copper_pot', GTMaterials.Copper, 144 * 8, 'copper_pot');
	// Recycling
	TFGHelpers.registerMaterialInfo('tfg:copper_pot', [GTMaterials.Copper, 8]);

//#endregion
//#region Condenser

	// Shapeless
	event.shapeless(
		'tfg:condenser',
		[
			'#forge:quadruple_fluid_pipes/copper',
			'#forge:tiny_fluid_pipes/copper',
			'#forge:tools/wrenches'
		]
	).id('tfg:shapeless/condenser');

	// Assembler
	event.recipes.gtceu.assembler('tfg:condenser')
		.itemInputs('#forge:quadruple_fluid_pipes/copper', '#forge:tiny_fluid_pipes/copper')
		.circuit(1)
		.itemOutputs('tfg:condenser')
		.duration(40)
		.EUt(GTValues.VA[GTValues.ULV])
		.addMaterialInfo(false);

	// Melting
	addTFCMelting(event, 'tfg:condenser', GTMaterials.Copper, 144 * 4.5, 'condenser');
	// Recycling
	TFGHelpers.registerMaterialInfo('tfg:condenser', [GTMaterials.Copper, 4.5]);

//#endregion
//#region Mixing Bowl
	event.remove({id: 'firmalife:crafting/mixing_bowl'});

	// Shaped
	event.shaped('tfg:mixing_bowl', [
		'CDC',
		'ABA',
		'AAA'
	], {
		A: 'firmalife:treated_lumber',
		B: 'tfc:glue',
		C: '#forge:rings/copper',
		D: '#forge:tools/mallets'
	}).id('tfg:shaped/mixing_bowl/glue');

	event.shaped('tfg:mixing_bowl', [
		'CDC',
		'ABA',
		'AAA'
	], {
		A: 'firmalife:treated_lumber',
		B: 'gtceu:sticky_resin',
		C: '#forge:rings/copper',
		D: '#forge:tools/mallets'
	}).id('tfg:shaped/mixing_bowl/sticky_resin');

	// Assembler
	event.recipes.gtceu.assembler('tfg:mixing_bowl')
		.itemInputs('5x firmalife:treated_lumber', '2x #forge:rings/copper')
		.inputFluids(Fluid.of('gtceu:glue', 50))
		.circuit(1)
		.itemOutputs('tfg:mixing_bowl')
		.duration(40)
		.EUt(GTValues.VA[GTValues.ULV]);

	// Recycling
	TFGHelpers.registerMaterialInfo('tfg:mixing_bowl', [GTMaterials.Wood, 10, GTMaterials.Copper, 0.5]);

//#endregion
//#region Fire Box

	// Shaped
	event.shaped('tfg:fire_box', [
		'ADA',
		'DCD',
		'EBE'
	], {
		A: ['tfc:metal/bars/steel', 'createdeco:industrial_iron_bars', 'createdeco:industrial_iron_bars_overlay'],
		B: '#forge:double_plates/steel',
		C: '#forge:storage_blocks/coke',
		D: '#forge:plates/steel',
		E: 'tfc:ceramic/fire_brick'
	}).id('tfg:shaped/fire_box');

	// Melting
	addTFCMelting(event, 'tfg:fire_box', GTMaterials.Steel, 144 * 5.5, 'fire_box');
	// Recycling
	TFGHelpers.registerMaterialInfo('tfg:fire_box', [GTMaterials.Steel, 5.5, GTMaterials.Coke, 9, GTMaterials.get('tfg:refractory_clay'), 2]);

//#endregion
//#region Fire Box Top Oven

	// Shaped
	event.shaped('tfg:fire_box_top_oven', [
		'ADA',
		'D D',
		'EBE'
	], {
		A: ['tfc:metal/bars/steel', 'createdeco:industrial_iron_bars', 'createdeco:industrial_iron_bars_overlay'],
		B: 'tfc:wrought_iron_grill',
		D: '#forge:plates/steel',
		E: 'tfc:ceramic/fire_brick'
	}).id('tfg:shaped/fire_box_top_oven');

	// Melting
	addTFCMelting(event, 'tfg:fire_box', GTMaterials.Steel, 144 * 3.5, 'fire_box_top_oven');
	// Recycling
	TFGHelpers.registerMaterialInfo('tfg:fire_box_top_oven', [GTMaterials.Steel, 5.5, GTMaterials.Iron, 2, GTMaterials.get('tfg:refractory_clay'), 2]);

//#endregion
};