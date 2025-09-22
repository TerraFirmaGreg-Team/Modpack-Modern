	
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

	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless('4x tfg:fletching', [
			'wan_ancient_beasts:glider_feather',
			'#forge:tools/knives'
		]).id('tfg:shapeless/glider_feather_fletching'))

	event.recipes.gtceu.assembler('tfg:assembler/glider_feather_fletching')
		.itemInputs('1x wan_ancient_beasts:glider_feather')
		.itemOutputs('4x tfg:fletching')
		.duration(20)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.ULV])

	event.shaped('wan_ancient_beasts:reinforced_shield', [
		'BAB',
		'ACA',
		'BAB'
	], {
		A: '#forge:plates/bismuth_bronze',
		B: 'wan_ancient_beasts:crusher_spike',
		C: 'wan_ancient_beasts:eater_tooth'
	}).id('tfg:shaped/reinforced_shield')

	event.shaped('wan_ancient_beasts:reinforced_shield', [
		'BAB',
		' C ',
		'B B'
	], {
		A: 'wan_ancient_beasts:eater_tooth',
		B: 'wan_ancient_beasts:crusher_spike',
		C: 'tfc:metal/shield/bismuth_bronze'
	}).id('tfg:shaped/reinforced_shield_from_shield')
}

const registerWABFoodData = (event) => {
	
	event.foodItem('wan_ancient_beasts:toxlacanth', food => {
		food.hunger(2)
		food.protein(1.5)
		food.decayModifier(3)
	})

	event.foodItem('wan_ancient_beasts:cooked_toxlacanth', food => {
		food.hunger(4)
		food.saturation(2)
		food.protein(2.5)
		food.decayModifier(2.25)
	})
	
	// Eater meat
	event.foodItem('wan_ancient_beasts:raw_ancient_meat', food => {
		food.hunger(2)
		food.protein(2)
		food.decayModifier(3)
	})

	event.foodItem('wan_ancient_beasts:cooked_ancient_meat', food => {
		food.hunger(4)
		food.saturation(3)
		food.protein(5)
		food.decayModifier(2.25)
	})
}