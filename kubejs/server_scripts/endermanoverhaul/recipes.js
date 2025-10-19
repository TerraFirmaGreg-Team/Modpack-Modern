// priority: 0
"use strict";

function registerEndermanOverhaulRecipes(event) {

	event.remove({ id: 'endermanoverhaul:corrupted_shield' })
	event.remove({ id: 'endermanoverhaul:corrupted_blade' })
	
	event.shapeless('ae2:ender_dust', ['#forge:ender_pearls', '#forge:tools/mortars'])
		.id('tfg:shapeless/mortar_ender_pearls')

	event.recipes.gtceu.macerator('tfg:macerate_ender_pearls')
		.itemInputs('#forge:ender_pearls')
		.itemOutputs('ae2:ender_dust')
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.shaped('endermanoverhaul:corrupted_shield', [
		'ABA',
		'ECE',
		'ADA'
	], {
		A: 'endermanoverhaul:enderman_tooth',
		B: 'endermanoverhaul:corrupted_pearl',
		C: 'tfc:metal/shield/blue_steel',
		D: '#forge:plates/ender_pearl',
		E: '#forge:plates/titanium'
	}).id('tfg:shaped/corrupted_shield_blue')

	event.shaped('endermanoverhaul:corrupted_shield', [
		'ABA',
		'ECE',
		'ADA'
	], {
		A: 'endermanoverhaul:enderman_tooth',
		B: 'endermanoverhaul:corrupted_pearl',
		C: 'tfc:metal/shield/red_steel',
		D: '#forge:plates/ender_pearl',
		E: '#forge:plates/titanium'
	}).id('tfg:shaped/corrupted_shield_red')
}