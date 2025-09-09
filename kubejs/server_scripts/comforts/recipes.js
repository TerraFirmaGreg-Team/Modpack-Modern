"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerComfortsRecipes = (event) => {
	event.remove({ mod: "comforts" })

	//Rope and Nail
	event.shapeless("comforts:rope_and_nail", ["firmaciv:rope_coil", "gtceu:wrought_iron_screw"])
		.id("comforts:crafting/shaped/rope_and_nail");

	//sleeping bag
	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless("comforts:sleeping_bag_white", [ "3x #tfc:high_quality_cloth", '#tfc:sewing_needles' ])
	).id('comforts:shaped/sleeping_bag_white');

	event.shaped("comforts:hammock_white", [
		"ABA",
		"CCC",
		"ABA"
	], {
		A: "#forge:string",
		B: "gtceu:long_wood_rod",
		C: "#tfc:high_quality_cloth",
	})


	global.MINECRAFT_DYE_NAMES.forEach(dyeName => {
		
		event.recipes.gtceu.chemical_bath(`comforts:chemical_bath/dye_${dyeName}_sleeping_bag`)
			.itemInputs("#comforts:sleeping_bags")
			.inputFluids(Fluid.of(`tfc:${dyeName}_dye`, 144))
			.itemOutputs(`comforts:sleeping_bag_${dyeName}`)
			.duration(20 * 15)
			.category(GTRecipeCategories.CHEM_DYES)
			.EUt(4);

		event.recipes.tfc.barrel_sealed(20 * 60)
			.inputs("#comforts:sleeping_bags", Fluid.of(`tfc:${dyeName}_dye`, 144))
			.outputItem(`comforts:sleeping_bag_${dyeName}`)
			.id(`barrel/comforts/sleeping_bag_${dyeName}`)

		event.recipes.gtceu.chemical_bath(`comforts:chemical_bath/dye_${dyeName}_hammock`)
			.itemInputs("#comforts:hammocks")
			.inputFluids(Fluid.of(`tfc:${dyeName}_dye`, 144))
			.itemOutputs(`comforts:hammock_${dyeName}`)
			.duration(20 * 15)
			.category(GTRecipeCategories.CHEM_DYES)
			.EUt(4);

		event.recipes.tfc.barrel_sealed(20 * 60)
			.inputs("#comforts:hammocks", Fluid.of(`tfc:${dyeName}_dye`, 144))
			.outputItem(`comforts:hammock_${dyeName}`)
			.id(`barrel/comforts/hammock_${dyeName}`)
	})
}