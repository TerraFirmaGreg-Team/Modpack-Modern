/**
 * 
 * @param {Internal.RecipesEventJS} evt 
 */
const registerChalkRecipes = (evt) => {
	evt.remove({ output: "#chalk:chalks" })
	evt.replaceInput({ id: "chalk:chalk_box" }, "minecraft:slime_ball", "tfc:glue")

	//Mix dusts for chalk sticks with clay to make an unfired chalk stick. Greggy or Create lets you use tiny dusts if needed
	let sizes = ["tiny_", "small_", "regular_"]
	let count = [9, 4, 1]

	for (let i = 0; i < 3; i++) {

		var sizeComputed = i < 2 ? sizes[i] : "";
		var amount = count[i];

		if (i != 0) {

			let itemIngredients = new Array("minecraft:clay_ball");
			for (let j = 0; j < amount; j++) {
				itemIngredients.push(`#chalk:${sizeComputed}dusts_for_chalks`);
			}

			evt.recipes.firmalife.mixing_bowl()
				.itemIngredients(itemIngredients)
				.outputItem("tfg:unfired_chalk")
				.id(`chalk:mixing_bowl/unfired_chalk_stick_from_${sizeComputed}dust`)
		}

		global.MINECRAFT_DYE_NAMES.forEach(dyeName => {

			//gt mixer works as is
			evt.recipes.gtceu.chemical_bath(`chalk:gt_mixer/${dyeName}_chalk_from_${sizeComputed}dust`)
				.itemInputs(["minecraft:clay_ball", `${count[i]}x #chalk:${sizeComputed}dusts_for_chalks`])
				.inputFluids([Fluid.of(`tfc:${dyeName}_dye`, 36)])
				.itemOutputs([`chalk:${dyeName}_chalk`])
				.duration(600)
				.EUt(1)
				.category(GTRecipeCategories.CHEM_DYES);

			//create mixer creates the unfired colored stick, unless heated.
			let createIngredients = ["minecraft:clay_ball", `${count[i]}x #chalk:${sizeComputed}dusts_for_chalks`, Fluid.of(`tfc:${dyeName}_dye`, 36)]
			evt.recipes.create.mixing(`tfg:wet_${dyeName}_chalk`, createIngredients)
				.id(`chalk:create_mixer/wet_${dyeName}_chalk_from_${sizeComputed}dust`);

			evt.recipes.create.mixing(`chalk:${dyeName}_chalk`, createIngredients)
				.heated()
				.id(`chalk:create_mixer/${dyeName}_chalk_from_${sizeComputed}dust`);
		})
	}

	//Unfired chalk sticks need to be placed in a barrel full of dye to colorize. Then heated until cured.
	global.MINECRAFT_DYE_NAMES.forEach(dyeName => {
		evt.recipes.tfc.barrel_sealed(20 * 50)
			.inputs(`tfg:unfired_chalk`, TFC.fluidStackIngredient(`tfc:${dyeName}_dye`, 72))
			.outputItem(`tfg:wet_${dyeName}_chalk`)
			.id(`chalk:barrel/dye/wet_${dyeName}_chalk`);

		evt.recipes.tfc.heating(`tfg:wet_${dyeName}_chalk`, 700)
			.resultItem(`chalk:${dyeName}_chalk`)
			.id(`chalk:heating/${dyeName}_chalk`)
	})
}