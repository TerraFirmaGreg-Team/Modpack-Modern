"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerChalkRecipes = (evt) => {
	evt.remove({ output: "#chalk:chalks" })
	evt.replaceInput({ id: "chalk:chalk_box" }, "minecraft:slime_ball", "tfc:glue")

	//Mix dusts for chalk sticks with clay to make an unfired chalk stick. Greggy or Create lets you use tiny dusts if needed
	evt.recipes.firmalife.mixing_bowl()
		.itemIngredients(["minecraft:clay_ball", "#chalk:dusts_for_chalks"])
		.outputItem("tfg:unfired_chalk")
		.id(`chalk:mixing_bowl/unfired_chalk_stick_from_dust`)

	global.MINECRAFT_DYE_NAMES.forEach(dyeName => {
		//gt mixer works as is
		evt.recipes.gtceu.chemical_bath(`chalk:gt_mixer/${dyeName}_chalk_from_dust`)
			.itemInputs(["minecraft:clay_ball", `#chalk:dusts_for_chalks`])
			.inputFluids([Fluid.of(`tfc:${dyeName}_dye`, 36)])
			.itemOutputs([`chalk:${dyeName}_chalk`])
			.duration(600)
			.EUt(1)
			.category(GTRecipeCategories.CHEM_DYES);

		//create mixer creates the unfired colored stick, unless heated.
		let createIngredients = ["minecraft:clay_ball", `#chalk:dusts_for_chalks`, Fluid.of(`tfc:${dyeName}_dye`, 36)]
		evt.recipes.create.mixing(`tfg:wet_${dyeName}_chalk`, createIngredients)
			.id(`chalk:create_mixer/wet_${dyeName}_chalk_from_dust`);

		evt.recipes.create.mixing(`chalk:${dyeName}_chalk`, createIngredients)
			.heated()
			.id(`chalk:create_mixer/${dyeName}_chalk_from_dust`);
	

		//Unfired chalk sticks need to be placed in a barrel full of dye to colorize. Then heated until cured.
		evt.recipes.tfc.barrel_sealed(20 * 50)
			.inputs(`tfg:unfired_chalk`, TFC.fluidStackIngredient(`tfc:${dyeName}_dye`, 36))
			.outputItem(`tfg:wet_${dyeName}_chalk`)
			.id(`chalk:barrel/dye/wet_${dyeName}_chalk`);

		evt.recipes.tfc.heating(`tfg:wet_${dyeName}_chalk`, 700)
			.resultItem(`chalk:${dyeName}_chalk`)
			.id(`chalk:heating/${dyeName}_chalk`)
			
		evt.smelting(
			`chalk:${dyeName}_chalk`,
			`tfg:wet_${dyeName}_chalk`
		).id(`chalk:smelting/${dyeName}_chalk`)
	})
}