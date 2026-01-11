"use strict";

function registerTFGVaseRecipes(event) {

	global.MINECRAFT_DYE_NAMES.forEach(color => {
		event.recipes.gtceu.chemical_bath(`tfg:chemical_bath/dyeing/decorative_vase/unfired/${color}`)
			.itemInputs('#tfg:decorative_vases/unfired')
			.inputFluids(Fluid.of(`tfc:${color}_dye`, 25))
			.itemOutputs(`tfg:decorative_vase/unfired/${color}`)
			.duration(80)
			.EUt(GTValues.VA[GTValues.ULV])
			.category(GTRecipeCategories.CHEM_DYES)

		event.recipes.tfc.heating(`tfg:decorative_vase/unfired/${color}`, 1399)
			.resultItem(`tfg:decorative_vase/${color}`)
			.id(`tfg:heating/decorative_vase/unfired/${color}`)

		event.recipes.tfc.barrel_sealed(1000)
			.outputItem(`tfg:decorative_vase/unfired/${color}`)
			.inputItem(Ingredient.of('#tfg:decorative_vases/unfired').subtract(`tfg:decorative_vase/unfired/${color}`))
			.inputFluid(Fluid.of(`tfc:${color}_dye`, 25))
			.id(`tfg:barrel/dyeing/decorative_vase/${color}`)

		event.smelting(
			`1x tfg:decorative_vase/${color}`,
			`tfg:decorative_vase/unfired/${color}`
		).id(`tfg:smelting/decorative_vase/${color}`)
	})

	event.recipes.gtceu.chemical_bath(`tfg:chemical_bath/bleaching/decorative_vase/unfired`)
		.itemInputs('#tfg:decorative_vases/unfired')
		.inputFluids(Fluid.of('gtceu:chlorine', 72))
		.itemOutputs('tfg:decorative_vase/unfired')
		.duration(80)
		.EUt(GTValues.VA[GTValues.ULV])
		.category(GTRecipeCategories.CHEM_DYES)

	event.smelting(
		'1x tfg:decorative_vase',
		'tfg:decorative_vase/unfired'
	).id('tfg:smelting/decorative_vase')

	event.recipes.tfc.heating('tfg:decorative_vase/unfired', 1399)
		.resultItem('tfg:decorative_vase')
		.id('tfg:heating/decorative_vase/unfired')

	event.recipes.tfc.knapping(
		'tfg:decorative_vase/unfired',
		'tfc:clay',
		[
			' X X ',
			'XX XX',
			'X   X',
			'X   X',
			'XXXXX'
		]
	)
		.ingredient('5x minecraft:clay_ball')
		.outsideSlotRequired(false)
		.id('tfg:knapping/decorative_vase/unfired')
}