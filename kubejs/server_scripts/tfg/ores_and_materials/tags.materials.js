// priority: 0
"use strict";

function registerTFGMaterialItemTags(event) {
	
	// Platline
	event.add('tfg:platinum_ore_group', 'gtceu:purified_pentlandite_ore')
	event.add('tfg:platinum_ore_group', 'gtceu:purified_chalcopyrite_ore')
	event.add('tfg:platinum_ore_group', 'gtceu:purified_tetrahedrite_ore')
	event.add('tfg:platinum_ore_group', 'gtceu:purified_bornite_ore')
	event.add('tfg:platinum_ore_group', 'gtceu:purified_cooperite_ore')
	event.add('tfg:platinum_ore_group', 'gtceu:purified_chalcocite_ore')
	
	// Crafting components
	event.add('tfg:aluminium_oxide', '#forge:dusts/alumina')
	event.add('tfg:aluminium_oxide', '#forge:dusts/bauxite')
	event.add('tfg:aluminium_oxide', '#forge:dusts/sapphire')
	event.add('tfg:aluminium_oxide', '#forge:dusts/green_sapphire')

	event.remove('forge:raw_materials/cursecoal', 'beneath:cursecoal')
	event.add('forge:raw_materials/anthracite', 'beneath:cursecoal')
	event.add('forge:raw_materials/lignite', 'tfc:ore/lignite')
	event.add('forge:raw_materials/coal', 'tfc:ore/bituminous_coal')
}

function registerTFGMaterialBlockTags(event) {

	// Hide cast iron and vanilla stone ores from ALI
	event.removeAllTagsFrom('minecraft:raw_iron_block')
	
	let stone_ores = Ingredient.of('#forge:ores_in_ground/stone').itemIds.toArray().map(String);
	stone_ores.forEach(item => 
	{
		event.removeAllTagsFrom(item)
	})

	let iron_ores = Ingredient.of('#forge:ores/iron').itemIds.toArray().map(String);
	iron_ores.forEach(item => 
	{
		event.removeAllTagsFrom(item)
	})
}