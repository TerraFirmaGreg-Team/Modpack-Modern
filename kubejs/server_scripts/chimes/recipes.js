"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerChimesRecipes = (event) => {
	if (Platform.isLoaded("chimes")) {
		event.remove({ input: 'string', mod: 'chimes' })

		//TODO: dye recipes in barrel for glass chimes (if possible)

		//bamboo chimes
		event.shaped(
			Item.of('chimes:bamboo_chimes'),
			[
				" A ",
				"CBC",
				"C C"
			], {
			A: "#minecraft:wooden_slabs",
			B: "#forge:string",
			C: "minecraft:bamboo"
		})

		//copper chimes
		event.shaped(
			Item.of('chimes:copper_chimes'),
			[
				" A ",
				"CBC",
				"C C"
			], {
			A: "#minecraft:wooden_slabs",
			B: "#forge:chains",
			C: "#forge:rods/copper"
		})
		//iron chimes
		event.shaped(
			Item.of('chimes:iron_chimes'),
			[
				" A ",
				"CBC",
				"C C"
			], {
			A: "#minecraft:wooden_slabs",
			B: "#forge:chains",
			C: "#forge:rods/iron"
		})
		//carved bamboo chimes
		event.shapeless(
			Item.of('chimes:carved_bamboo_chimes'),
			[
				'chimes:bamboo_chimes',
				'#forge:tools/knives'
			]
		)
		//carved bamboo chimes direct
		event.shaped(
			Item.of('chimes:carved_bamboo_chimes'),
			[
				" A ",
				"CBC",
				"CDC"
			], {
			A: "#minecraft:wooden_slabs",
			B: "#forge:string",
			C: "minecraft:bamboo",
			D: "#forge:tools/knives"
		})
		//amethyst_chime
		event.shaped(
			Item.of('chimes:amethyst_chimes'),
			[
				" A ",
				"CBC",
				"C C"
			], {
			A: "#forge:plates/cast_iron",
			B: "#forge:chains",
			C: "#forge:rods/amethyst"
		})
		//glass_wind_bell
		event.shaped(
			Item.of('chimes:glass_bells'),
			[
				"A",
				"B",
				"C"
			], {
			A: "#tfc:glass_bottles",
			B: "#forge:string",
			C: "#forge:paper"
		})
	}
}