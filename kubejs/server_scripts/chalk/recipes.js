"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerChalkRecipes = (evt) => {
	evt.remove({ output: "#chalk:chalks" })

	evt.shaped('chalk:chalk_box', [
		'ABA',
		' A '
	], {
		A: 'paper',
		B: ['tfc:glue']
	}).id('chalk:chalk_box')

	// only 1/2 durability remaining
	evt.recipes.tfc.knapping(
		Item.of('chalk:white_chalk', '{Damage:32}'),
		'tfc:rock',
		[
			'X',
			'X',
			'X',
			'X',
			'X'
		]
	).ingredient('tfc:rock/loose/chalk')
		.outsideSlotRequired(false)
		.id('tfg:knapping/chalk')

	evt.recipes.tfc.knapping(
		Item.of('chalk:light_gray_chalk'),
		'tfc:rock',
		[
			'X',
			'X',
			'X',
			'X',
			'X'
		]
	).ingredient('tfc:rock/loose/limestone')
		.outsideSlotRequired(false)
		.id('tfg:knapping/limestone_chalk')

	evt.recipes.tfc.knapping(
		Item.of('chalk:light_gray_chalk', '{Damage:48}'),
		'tfc:rock',
		[
			'X',
			'X',
			'X',
			'X',
			'X'
		]
	).ingredient('tfc:rock/loose/conglomerate')
		.outsideSlotRequired(false)
		.id('tfg:knapping/conglomerate_chalk')

	evt.recipes.tfc.knapping(
		Item.of('chalk:black_chalk'),
		'tfc:rock',
		[
			'X',
			'X',
			'X',
			'X',
			'X'
		]
	).ingredient('tfc:rock/loose/dolomite')
		.outsideSlotRequired(false)
		.id('tfg:knapping/dolomite_chalk')

	evt.recipes.tfc.knapping(
		Item.of('chalk:gray_chalk'),
		'tfc:rock',
		[
			'X',
			'X',
			'X',
			'X',
			'X'
		]
	).ingredient('tfc:rock/loose/shale')
		.outsideSlotRequired(false)
		.id('tfg:knapping/shale_chalk')

	evt.recipes.tfc.knapping(
		Item.of('chalk:brown_chalk'),
		'tfc:rock',
		[
			'X',
			'X',
			'X',
			'X',
			'X'
		]
	).ingredient('tfg:loose/dripstone')
		.outsideSlotRequired(false)
		.id('tfg:knapping/travertine_chalk')

	evt.recipes.tfc.knapping(
		Item.of('chalk:orange_chalk'),
		'tfc:rock',
		[
			'X',
			'X',
			'X',
			'X',
			'X'
		]
	).ingredient('tfc:rock/loose/claystone')
		.outsideSlotRequired(false)
		.id('tfg:knapping/claystone_chalk')

	evt.recipes.tfc.knapping(
		Item.of('chalk:orange_chalk'),
		'tfc:rock',
		[
			'X',
			'X',
			'X',
			'X',
			'X'
		]
	).ingredient('tfg:loose/mars_stone')
		.outsideSlotRequired(false)
		.id('tfg:knapping/mars_chalk')


	//Mix dusts for chalk sticks with clay to make an unfired chalk stick. Greggy or Create lets you use tiny dusts if needed
	evt.recipes.firmalife.mixing_bowl()
		.itemIngredients(["minecraft:clay_ball", "tfg:sedimentary_carbonate_dust"])
		.outputItem("tfg:unfired_chalk")
		.id(`chalk:mixing_bowl/unfired_chalk_stick_from_dust`)


	evt.recipes.tfc.heating(`tfg:unfired_chalk`, 700)
		.resultItem(`chalk:white_chalk`)
		.id(`chalk:heating/undyed_chalk`)

	global.MINECRAFT_DYE_NAMES.forEach(dyeName => {
		evt.recipes.tfc.barrel_sealed(1000)
			.inputItem('#chalk:chalks')
			.inputFluid(Fluid.of(`tfc:${dyeName}_dye`, 25))
			.outputItem(`chalk:${dyeName}_chalk`)
			.id(`chalk:barrel/dye/${dyeName}_chalk`)

		//gt mixer works as is
		evt.recipes.gtceu.chemical_bath(`chalk:gt_mixer/${dyeName}_chalk_from_dust`)
			.itemInputs(["minecraft:clay_ball", `tfg:sedimentary_carbonate_dust`])
			.inputFluids([Fluid.of(`tfc:${dyeName}_dye`, 36)])
			.itemOutputs([`chalk:${dyeName}_chalk`])
			.duration(600)
			.EUt(1)
			.category(GTRecipeCategories.CHEM_DYES);

		//create mixer creates the unfired colored stick, unless heated.
		let createIngredients = ["minecraft:clay_ball", `tfg:sedimentary_carbonate_dust`, Fluid.of(`tfc:${dyeName}_dye`, 36)]
		evt.recipes.create.mixing(`tfg:wet_${dyeName}_chalk`, createIngredients)
			.id(`chalk:create_mixer/wet_${dyeName}_chalk_from_dust`);

		evt.recipes.create.mixing(`chalk:${dyeName}_chalk`, createIngredients)
			.heated()
			.id(`chalk:create_mixer/${dyeName}_chalk_from_dust`);


		//Unfired chalk sticks need to be placed in a barrel full of dye to colorize. Then heated until cured.
		evt.recipes.tfc.barrel_instant()
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