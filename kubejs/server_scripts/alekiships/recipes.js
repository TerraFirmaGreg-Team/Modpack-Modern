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

	//#region Oarlock
	event.recipes.gtceu.assembler('tfg:alekiships/oarlock')
		.itemInputs('2x #forge:ingots/wrought_iron')
		.circuit(13)
		.itemOutputs('alekiships:oarlock')
		.duration(75)
		.EUt(4)
		.addMaterialInfo(true)

	event.recipes.tfc.heating('alekiships:oarlock', 1535)
		.resultFluid(Fluid.of('gtceu:iron', 288))
		.id(`alekiships:heating/oarlock`)
	//#endregion

	//#region Cleat
	event.recipes.gtceu.assembler('tfg:firmaciv/cleat')
		.itemInputs('2x #forge:ingots/steel')
		.circuit(14)
		.itemOutputs('alekiships:cleat')
		.duration(75)
		.EUt(4)
		.addMaterialInfo(true)

	event.recipes.tfc.heating('alekiships:cleat', 1535)
		.resultFluid(Fluid.of('gtceu:steel', 288))
		.id(`alekiships:heating/cleat`)
	//#endregion

	//#region Anchor
	event.recipes.gtceu.assembler('tfg:alekiships/anchor')
		.itemInputs('2x #forge:plates/steel')
		.circuit(10)
		.itemOutputs('alekiships:anchor')
		.duration(75)
		.EUt(4)
		.addMaterialInfo(true)

	event.recipes.tfc.heating('alekiships:anchor', 1535)
		.resultFluid(Fluid.of('gtceu:steel', 288))
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
}