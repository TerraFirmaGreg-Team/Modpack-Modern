"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerChalkRecipes = (event) => {
	event.remove({ output: "#chalk:chalks" })

	event.shaped('chalk:chalk_box', [
		'ABA',
		' A '
	], {
		A: 'paper',
		B: ['tfc:glue']
	}).id('chalk:chalk_box')

	const CHALK_KNAPPING = [
		{ rock: 'tfc:rock/loose/chalk', color: 'white' },
		{ rock: 'tfc:rock/loose/limestone', color: 'light_gray' },
		{ rock: 'tfc:rock/loose/conglomerate', color: 'light_gray' },
		{ rock: 'tfc:rock/loose/dolomite', color: 'black' },
		{ rock: 'tfc:rock/loose/shale', color: 'gray' },
		{ rock: 'tfg:loose/dripstone', color: 'brown' },
		{ rock: 'tfc:rock/loose/claystone', color: 'orange' },
		{ rock: 'tfg:loose/mars_stone', color: 'orange' },
		{ rock: 'tfc:rock/loose/chert', color: 'red' }
	]

	CHALK_KNAPPING.forEach(x => {

		// only 1/2 durability remaining
		event.recipes.tfc.knapping(
			Item.of(`chalk:${x.color}_chalk`, '{Damage:32}'),
			'tfc:rock',
			[
				'X',
				'X',
				'X',
				'X',
				'X'
			]
		).ingredient(x.rock)
			.outsideSlotRequired(false)
			.id(`tfg:knapping/${linuxUnfucker(x.rock)}_chalk`)

		event.recipes.gtceu.extruder(`tfg:${linuxUnfucker(x.rock)}_chalk`)
			.itemInputs(x.rock)
			.notConsumable('gtceu:rod_extruder_mold')
			.itemOutputs(Item.of(`chalk:${x.color}_chalk`, '{Damage:32}'))
			.duration(50)
			.EUt(2)

		event.recipes.vintageimprovements.curving(Item.of(`chalk:${x.color}_chalk`, '{Damage:32}'), x.rock)
			.head('gtceu:rod_extruder_mold')
			.id(`tfg:vi/curving/${linuxUnfucker(x.rock)}_chalk`)
	})


	//Mix dusts for chalk sticks with clay to make an unfired chalk stick. Greggy or Create lets you use tiny dusts if needed
	event.recipes.firmalife.mixing_bowl()
		.itemIngredients(["minecraft:clay_ball", "tfg:sedimentary_carbonate_dust"])
		.outputItem("tfg:unfired_chalk")
		.id(`chalk:mixing_bowl/unfired_chalk_stick_from_dust`)


	event.recipes.tfc.heating(`tfg:unfired_chalk`, 700)
		.resultItem(`chalk:white_chalk`)
		.id(`chalk:heating/undyed_chalk`)

	global.MINECRAFT_DYE_NAMES.forEach(dyeName => {
		event.recipes.tfc.barrel_sealed(1000)
			.inputItem('#chalk:chalks')
			.inputFluid(Fluid.of(`tfc:${dyeName}_dye`, 25))
			.outputItem(`chalk:${dyeName}_chalk`)
			.id(`chalk:barrel/dye/${dyeName}_chalk`)

		//gt mixer works as is
		event.recipes.gtceu.chemical_bath(`chalk:gt_mixer/${dyeName}_chalk_from_dust`)
			.itemInputs(["minecraft:clay_ball", `tfg:sedimentary_carbonate_dust`])
			.inputFluids([Fluid.of(`tfc:${dyeName}_dye`, 36)])
			.itemOutputs([`chalk:${dyeName}_chalk`])
			.duration(600)
			.EUt(1)
			.category(GTRecipeCategories.CHEM_DYES);

		//create mixer creates the unfired colored stick, unless heated.
		let createIngredients = ["minecraft:clay_ball", `tfg:sedimentary_carbonate_dust`, Fluid.of(`tfc:${dyeName}_dye`, 36)]
		event.recipes.create.mixing(`tfg:wet_${dyeName}_chalk`, createIngredients)
			.id(`chalk:create_mixer/wet_${dyeName}_chalk_from_dust`);

		event.recipes.create.mixing(`chalk:${dyeName}_chalk`, createIngredients)
			.heated()
			.id(`chalk:create_mixer/${dyeName}_chalk_from_dust`);


		//Unfired chalk sticks need to be placed in a barrel full of dye to colorize. Then heated until cured.
		event.recipes.tfc.barrel_instant()
			.inputs(`tfg:unfired_chalk`, TFC.fluidStackIngredient(`tfc:${dyeName}_dye`, 36))
			.outputItem(`tfg:wet_${dyeName}_chalk`)
			.id(`chalk:barrel/dye/wet_${dyeName}_chalk`);

		event.recipes.tfc.heating(`tfg:wet_${dyeName}_chalk`, 700)
			.resultItem(`chalk:${dyeName}_chalk`)
			.id(`chalk:heating/${dyeName}_chalk`)

		event.smelting(
			`chalk:${dyeName}_chalk`,
			`tfg:wet_${dyeName}_chalk`
		).id(`chalk:smelting/${dyeName}_chalk`)
	})
}