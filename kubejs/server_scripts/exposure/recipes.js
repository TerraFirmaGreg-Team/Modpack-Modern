// priority: 0
"use strict";

const registerExposureRecipes = (event) => {

	const $ISPRecipeLogic = Java.loadClass("su.terrafirmagreg.core.common.data.tfgt.machine.trait.ISPOutputRecipeLogic")

	event.remove({ id: 'exposure:sequenced_color_film_developing' })

	event.replaceInput({ id: 'exposure:interplanar_projector' }, 'minecraft:ender_eye', '#forge:foils/silver')

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
		B: '#forge:small_gears',
		C: '#minecraft:wooden_buttons',
		D: '#forge:plates/wrought_iron',
		E: 'tfc:lens',
		F: '#forge:screws/any_bronze'
	}).id('exposure:camera')

	// Album
	event.shapeless('exposure:album', [
		'minecraft:writable_book', 'minecraft:paper', 'minecraft:paper'
	]).id('exposure:album')

	// Film
	event.shaped('exposure:black_and_white_film', [
		'ABB',
		'CDD',
		' EE'
	], {
		A: '#forge:rings/wrought_iron',
		B: '#forge:dyes/white',
		C: '#forge:foils/wrought_iron',
		D: '#forge:dusts/gunpowder',
		E: 'tfc:food/dried_kelp',
	}).id('exposure:black_and_white_film')

	event.shaped('exposure:color_film', [
		'ABB',
		'CDD',
		' EE'
	], {
		A: '#forge:rings/wrought_iron',
		B: '#forge:dyes/blue',
		C: '#forge:foils/wrought_iron',
		D: '#forge:foils/gold',
		E: 'tfc:food/dried_kelp',
	}).id('exposure:color_film')

	// Creating the developer

	// Pyrogallol
	event.recipes.tfc.pot(['tfc:powder/saltpeter'], Fluid.of('tfc:tannin', 500), 30 * 20, 750)
		.itemOutput('tfg:pyrogallol_dust')
		.id('tfg:pot/tannin_to_pyrogallol_saltpeter')

	event.recipes.tfc.pot(['tfc:powder/soda_ash'], Fluid.of('tfc:tannin', 500), 30 * 20, 750)
		.itemOutput('tfg:pyrogallol_dust')
		.id('tfg:pot/tannin_to_pyrogallol_soda_ash')

	event.recipes.firmalife.vat()
		.inputs('tfc:powder/saltpeter', Fluid.of('tfc:tannin', 500))
		.length(30 * 20)
		.temperature(750)
		.outputItem('tfg:pyrogallol_dust')
		.id('tfg:vat/tannin_to_pyrogallol_saltpeter')

	event.recipes.firmalife.vat()
		.inputs('tfc:powder/soda_ash', Fluid.of('tfc:tannin', 500))
		.length(30 * 20)
		.temperature(750)
		.outputItem('tfg:pyrogallol_dust')
		.id('tfg:vat/tannin_to_soda_ash')

	event.recipes.gtceu.chemical_reactor('tfg:tannin_to_pyrogallol_saltpeter')
		.itemInputs('tfc:powder/saltpeter')
		.inputFluids(Fluid.of('tfc:tannin', 500))
		.itemOutputs('tfg:pyrogallol_dust')
		.duration(200)
		.EUt(7)

	event.recipes.gtceu.chemical_reactor('tfg:tannin_to_pyrogallol_soda_ash')
		.itemInputs('tfc:powder/soda_ash')
		.inputFluids(Fluid.of('tfc:tannin', 500))
		.itemOutputs('tfg:pyrogallol_dust')
		.duration(200)
		.EUt(7)

	// Developer
	event.recipes.tfc.pot(['#forge:dusts/pyrogallol', 'tfc:powder/soda_ash', 'tfc:powder/sulfur', '#exposure:black_printing_dyes'], Fluid.of('tfc:lye', 1000), 30 * 20, 750)
		.fluidOutput(Fluid.of('tfg:bw_photographic_developer', 1000))
		.id('tfg:pot/bw_developer')

	event.recipes.gtceu.mixer('tfg:bw_developer')
		.itemInputs('#forge:dusts/pyrogallol', 'tfc:powder/soda_ash', 'tfc:powder/sulfur', '#exposure:black_printing_dyes')
		.inputFluids(Fluid.of('tfc:lye', 1000))
		.outputFluids(Fluid.of('tfg:bw_photographic_developer', 1000))
		.duration(200)
		.EUt(7)

	event.recipes.gtceu.mixer('tfg:color_developer')
		.itemInputs('#forge:dusts/pyrogallol', 'tfc:powder/soda_ash', 'tfc:powder/sulfur', '#exposure:cyan_printing_dyes', '#exposure:yellow_printing_dyes', '#exposure:magenta_printing_dyes')
		.inputFluids(Fluid.of('tfc:lye', 1000))
		.outputFluids(Fluid.of('tfg:color_photographic_developer', 1000))
		.duration(200)
		.EUt(7)

	// Developing film
	event.recipes.tfc.barrel_sealed(4000)
		.inputs('exposure:black_and_white_film', Fluid.of('tfg:bw_photographic_developer', 250))
		.outputItem(TFC.isp.of('exposure:developed_black_and_white_film').simpleModifier('tfg:copy_nbt').asCanonClass())
		.id('tfg:barrel/develop_black_and_white_film')

	event.recipes.gtceu.food_processor('black_and_white_film')
		.itemInputs('exposure:black_and_white_film')
		.inputFluids(Fluid.of('tfg:bw_photographic_developer', 250))
		.itemOutputs('exposure:developed_black_and_white_film')
		.duration(60 * 20)
		.EUt(2)

	$ISPRecipeLogic.RegisterRecipeData('food_processor/black_and_white_film',
		[Ingredient.of('exposure:black_and_white_film')],
		TFC.isp.of('exposure:developed_black_and_white_film').simpleModifier('tfg:copy_nbt').asCanonClass(),
		[])

	// Developing color film
	event.recipes.tfc.barrel_sealed(4000)
		.inputs('exposure:color_film', Fluid.of('tfg:color_photographic_developer', 250))
		.outputItem(TFC.isp.of('exposure:developed_color_film').simpleModifier('tfg:copy_nbt'))
		.id('tfg:barrel/develop_color_film')

	event.recipes.gtceu.food_processor('color_film')
		.itemInputs('exposure:color_film')
		.inputFluids(Fluid.of('tfg:color_photographic_developer', 250))
		.itemOutputs('exposure:developed_color_film')
		.duration(60 * 20)
		.EUt(2)

	$ISPRecipeLogic.RegisterRecipeData('food_processor/color_film',
		[Ingredient.of('exposure:color_film')],
		TFC.isp.of('exposure:developed_color_film').simpleModifier('tfg:copy_nbt').asCanonClass(),
		[])
}