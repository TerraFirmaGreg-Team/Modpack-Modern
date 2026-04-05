"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerAlekishipsRecipes = (event) => {
	//remove recipes
	event.remove("alekiships:crafting/oarlock")
	event.remove("alekiships:crafting/cleat")
	event.remove("alekiships:crafting/anchor")
	event.remove("alekiships:crafting/cannon")
	event.remove("alekiships:crafting/cannonball")
	event.remove("firmaciv:anvil/oarlock")
	event.remove("firmaciv:anvil/cleat")
	event.remove("firmaciv:anvil/anchor")

	//#region Oarlock
	event.recipes.tfc.anvil(
		'alekiships:oarlock',
		'#forge:double_ingots/bronze',
		[
			'bend_last',
			'hit_second_last',
			'hit_third_last'
		]
	).tier(2).id('tfg:anvil/alekiships/oarlock/bronze')

	event.recipes.tfc.anvil(
		'alekiships:oarlock',
		'#forge:double_ingots/bismuth_bronze',
		[
			'bend_last',
			'hit_second_last',
			'hit_third_last'
		]
	).tier(2).id('tfg:anvil/alekiships/oarlock/bismuth_bronze')

	event.recipes.tfc.anvil(
		'alekiships:oarlock',
		'#forge:double_ingots/black_bronze',
		[
			'bend_last',
			'hit_second_last',
			'hit_third_last'
		]
	).tier(2).id('tfg:anvil/alekiships/oarlock/black_bronze')

	event.recipes.gtceu.assembler('tfg:alekiships/oarlock/bronze')
		.itemInputs('2x #forge:ingots/bronze')
		.circuit(13)
		.itemOutputs('alekiships:oarlock')
		.duration(75)
		.EUt(4)

	event.recipes.gtceu.assembler('tfg:alekiships/oarlock/bismuth_bronze')
		.itemInputs('2x #forge:ingots/bismuth_bronze')
		.circuit(13)
		.itemOutputs('alekiships:oarlock')
		.duration(75)
		.EUt(4)

	event.recipes.gtceu.assembler('tfg:alekiships/oarlock/black_bronze')
		.itemInputs('2x #forge:ingots/black_bronze')
		.circuit(13)
		.itemOutputs('alekiships:oarlock')
		.duration(75)
		.EUt(4)
	//#endregion

	//#region Cleat
	event.recipes.tfc.anvil(
		'alekiships:cleat',
		'#forge:double_ingots/wrought_iron',
		[
			'bend_last',
			'bend_second_last',
			'bend_third_last'
		]
	).tier(3).id('tfg:anvil/alekiships/cleat')

	event.recipes.gtceu.assembler('tfg:firmaciv/cleat')
		.itemInputs('2x #forge:ingots/wrought_iron')
		.circuit(14)
		.itemOutputs('alekiships:cleat')
		.duration(75)
		.EUt(4)
		.addMaterialInfo(true)

	event.recipes.tfc.heating('alekiships:cleat', 1535)
		.resultFluid(Fluid.of('gtceu:iron', 288))
		.id(`alekiships:heating/cleat`)
	//#endregion

	//#region Anchor
	event.recipes.tfc.anvil(
		'alekiships:anchor',
		'#forge:double_plates/wrought_iron',
		[
			'hit_last',
			'punch_second_last',
			'bend_third_last'
		]
	).tier(3).id('tfg:anvil/alekiships/anchor')

	event.recipes.gtceu.assembler('tfg:alekiships/anchor')
		.itemInputs('2x #forge:plates/wrought_iron')
		.circuit(10)
		.itemOutputs('alekiships:anchor')
		.duration(75)
		.EUt(4)
		.addMaterialInfo(true)

	event.recipes.tfc.heating('alekiships:anchor', 1535)
		.resultFluid(Fluid.of('gtceu:iron', 288))
		.id(`firmaciv:heating/anchor`)
	//#endregion

	//#region cannonball
	event.recipes.gtceu.fluid_solidifier('tfg:solidify_cannonball')
		.inputFluids(Fluid.of('gtceu:iron', 288))
		.notConsumable('gtceu:ball_casting_mold')
		.itemOutputs('alekiships:cannonball')
		.duration(75)
		.EUt(4)

	event.recipes.gtceu.alloy_smelter('tfg:cast_cannonball')
		.itemInputs('2x #forge:ingots/iron')
		.notConsumable('gtceu:ball_casting_mold')
		.itemOutputs('alekiships:cannonball')
		.duration(75)
		.category(GTRecipeCategories.INGOT_MOLDING)
		.EUt(4)
		.addMaterialInfo(true)

	event.recipes.tfc.heating('alekiships:cannonball', 1535)
		.resultFluid(Fluid.of('gtceu:iron', 288))
		.id(`alekiships:heating/cannonball`)
	//#endregion

	// Remove Oarlock Recycle Recipe
	TFGHelpers.clearMaterialInfo('alekiships:oarlock')
}