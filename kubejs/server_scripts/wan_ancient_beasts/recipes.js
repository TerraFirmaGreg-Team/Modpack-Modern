// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS_} event 
 */
const registerWABRecipes = (event) => {
	
	event.remove({ mod: 'wan_ancient_beasts'})


	event.shapeless('wan_ancient_beasts:quick_sand_bucket',
	[
		'#tfc:dirt',
		'#tfc:mud',
		'tfc:sand/yellow',
		'minecraft:bucket'
	])
	
	event.shapeless('wan_ancient_beasts:quick_red_sand_bucket',
	[
		'#tfc:dirt',
		'#tfc:mud',
		'minecraft:red_sand',
		'minecraft:bucket'
	])
	
	event.recipes.tfc.heating('wan_ancient_beasts:toxlacanth', 200)
		.resultItem(TFC.isp.of('wan_ancient_beasts:cooked_toxlacanth').copyFood())

	event.recipes.tfc.heating('wan_ancient_beasts:raw_ancient_meat', 200)
		.resultItem(TFC.isp.of('wan_ancient_beasts:cooked_ancient_meat').copyFood())
	
	event.recipes.gtceu.macerator('wan_ancient_beasts:skull_crush')
		.itemInputs('#wan_ancient_beasts:ancient_skull')
		.itemOutputs('32x #forge:dusts/bone')
		.duration(400)
		.EUt(30)

	event.shaped('wan_ancient_beasts:reinforced_shield', [
		'BAB',
		'DCD',
		'BAB'
	], {
		A: 'wan_ancient_beasts:eater_tooth',
		B: 'wan_ancient_beasts:crusher_spike',
		C: '#tfc:shields',
		D: '#forge:plates/titanium'
	}).id('tfg:shaped/reinforced_shield_from_shield')

	event.shapeless('wan_ancient_beasts:fearsome_horn', [
		'wan_ancient_beasts:raider_horn',
		'wan_ancient_beasts:eater_tooth',
		'wan_ancient_beasts:crusher_spike',
		'endermanoverhaul:enderman_tooth'
	]).id('tfg:shapeless/fearsome_horn')

	event.shaped('wan_ancient_beasts:white_charger_armor', [
		'ABA',
		'CCC'
	], {
		A: 'firmaciv:rope_coil',
		B: 'minecraft:leather_horse_armor',
		C: '#forge:double_plates/steel'
	}).id('tfg:shaped/white_charger_armor')

	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		event.recipes.tfc.barrel_sealed(1000)
			.inputs('#wan_ancient_beasts:charger_armors', Fluid.of(`tfc:${dye}_dye`, 288))
			.outputItem(`wan_ancient_beasts:${dye}_charger_armor`)
			.id(`tfg:barrel/dyeing/charger_armor_${dye}`)

		event.recipes.gtceu.chemical_bath(`tfg:wan_ancient_beasts/${dye}_charger_armor`)
			.itemInputs('#wan_ancient_beasts:charger_armors')
			.inputFluids(Fluid.of(`tfc:${dye}_dye`, 288))
			.itemOutputs(`wan_ancient_beasts:${dye}_charger_armor`)
			.duration(200)
			.EUt(4)
			.category(GTRecipeCategories.CHEM_DYES)
	})
}
