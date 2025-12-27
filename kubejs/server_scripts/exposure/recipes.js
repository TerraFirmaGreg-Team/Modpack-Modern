// priority: 0
"use strict";

const registerExposureRecipes = (event) => {

	event.remove({ id: 'exposure:sequenced_color_film_developing' })

	// Lightroom
	event.shaped('exposure:lightroom', [
		'AB',
		'CC',
		'CC'
	], {
		A: '#tfc:lamps',
		B: 'minecraft:redstone_torch',
		C: '#minecraft:planks'
	}).id('exposure:lightroom')

	// Camera
	event.shaped('exposure:camera', [
		'ABC',
		'DED',
		'FDF'
	], {
		A: 'minecraft:lever',
		B: 'gtceu:wrought_iron_gear',
		C: '#minecraft:wooden_buttons',
		D: '#forge:plates/wrought_iron',
		E: 'tfc:lens',
		F: '#forge:screws/wrought_iron'
	}).id('exposure:camera')

	// Album
	event.shapeless('exposure:album', [
		'minecraft:writable_book', 'minecraft:paper', 'minecraft:paper'
	]).id('exposure:album')

	// Black and White Film
	event.shaped('exposure:black_and_white_film', [
		'ABB',
		'CDD',
		'CEE'
	], {
		A: '#forge:rings/wrought_iron',
		B: '#forge:dyes/white',
		C: '#forge:foils/wrought_iron',
		D: '#forge:dusts/gunpowder',
		E: 'tfc:food/dried_kelp',
	}).id('exposure:black_and_white_film')

	event.recipes.tfc.barrel_sealed(8000)
		.inputs('exposure:black_and_white_film', Fluid.of('minecraft:water', 250))
		.outputItem(TFC.isp.of('exposure:developed_black_and_white_film').simpleModifier('tfg:copy_nbt'))
		.id('tfg:develop_black_and_white_film')

	// Colored Film
	event.shaped('exposure:color_film', [
		'ABB',
		'CDD',
		'CEE'
	], {
		A: '#forge:rings/wrought_iron',
		B: '#forge:dyes/blue',
		C: '#forge:foils/wrought_iron',
		D: '#forge:foils/gold',
		E: 'tfc:food/dried_kelp',
	}).id('exposure:color_film')

	event.recipes.tfc.barrel_sealed(8000)
		.inputs('exposure:color_film', Fluid.of('tfc:spring_water', 250))
		.outputItem(TFC.isp.of('exposure:developed_color_film').simpleModifier('tfg:copy_nbt'))
		.id('tfg:develop_color_film')

	// Developed Black and White Film
	event.custom({
		type: "exposure:film_developing",
		film: {
			item: "exposure:black_and_white_film"
		},
		ingredients: [
			{
				type: "tfc:fluid_item",
				fluid_ingredient: {
					ingredient: "minecraft:water",
					amount: 1000
				}
			},
		],
		result: {
			item: "exposure:developed_black_and_white_film"
		}
	}).id('exposure:developing_black_and_white_film')

	// Developed Color Film
	event.custom({
		type: "exposure:film_developing",
		film: {
			item: "exposure:color_film"
		},
		ingredients: [
			{
				type: "tfc:fluid_item",
				fluid_ingredient: {
					ingredient: "tfc:spring_water",
					amount: 1000
				}
			},
			{
				type: "tfc:fluid_item",
				fluid_ingredient: {
					ingredient: "tfc:spring_water",
					amount: 1000
				}
			},
			{
				type: "tfc:fluid_item",
				fluid_ingredient: {
					ingredient: "tfc:spring_water",
					amount: 1000
				}
			},
		],
		result: {
			item: "exposure:developed_color_film"
		}
	}).id('exposure:developing_color_film')

	event.replaceInput({ id: 'exposure:interplanar_projector' }, 'minecraft:ender_eye', '#forge:foils/silver')
}