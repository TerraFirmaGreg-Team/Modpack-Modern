// priority: 0
"use strict";

function registerTFCAmbientalRecipes(event) {

	event.shaped('tfcambiental:house_tester', [
        "LX",
        "XL"
	], {
		X: '#forge:dusts/redstone',
		L: '#tfc:lumber'
	}).id('tfg:shaped/house_tester')


	// Clothes
	const clothes = [
		{ name: 'silk', material: 'tfc:silk_cloth', parts: ['cowl', 'shirt', 'pants', 'shoes' ]},
		{ name: 'wool', material: 'tfc:wool_cloth', parts: ['hat', 'sweater', 'pants', 'boots' ]},
		{ name: 'burlap', material: 'tfc:burlap_cloth', parts: ['cowl', 'shirt', 'pants', 'shoes' ]}
	]
	
	clothes.forEach(cloth => {
		event.shaped(`tfcambiental:${cloth.name}_${cloth.parts[0]}`, [
			"AAA",
			"A A",
			"   "
		], {
			A: cloth.material
		}).id(`tfg:shaped/${cloth.name}_${cloth.parts[0]}`)

		event.shaped(`tfcambiental:${cloth.name}_${cloth.parts[1]}`, [
			"A A",
			"AAA",
			"AAA"
		], {
			A: cloth.material
		}).id(`tfg:shaped/${cloth.name}_${cloth.parts[1]}`)

		event.shaped(`tfcambiental:${cloth.name}_${cloth.parts[2]}`, [
			"AAA",
			"A A",
			"A A"
		], {
			A: cloth.material
		}).id(`tfg:shaped/${cloth.name}_${cloth.parts[2]}`)

		event.shaped(`tfcambiental:${cloth.name}_${cloth.parts[3]}`, [
			"   ",
			"A A",
			"A A"
		], {
			A: cloth.material
		}).id(`tfg:shaped/${cloth.name}_${cloth.parts[3]}`)
	})

	// Insulated leather

	event.shaped("tfcambiental:insulated_leather_tunic", [
		'BBB',
		'BAB',
		'BBB'
	], {
		A: "minecraft:leather_chestplate",
		B: ['#forge:string', 'minecraft:feather', 'tfg:wraptor_wool', 'wan_ancient_beasts:glider_feather', 'tfc:wool']
	}).id('tfg:shaped/insulated_leather_tunic')

	event.shaped("tfcambiental:insulated_leather_hat", [
		'BBB',
		'BAB',
		'BBB'
	], {
		A: "minecraft:leather_helmet",
		B: ['#forge:string', 'minecraft:feather', 'tfg:wraptor_wool', 'wan_ancient_beasts:glider_feather', 'tfc:wool']
	}).id('tfg:shaped/insulated_leather_hat')

	event.shaped("tfcambiental:insulated_leather_pants", [
		'BBB',
		'BAB',
		'BBB'
	], {
		A: "minecraft:leather_leggings",
		B: ['#forge:string', 'minecraft:feather', 'tfg:wraptor_wool', 'wan_ancient_beasts:glider_feather', 'tfc:wool']
	}).id('tfg:shaped/insulated_leather_pants')

	event.shaped("tfcambiental:insulated_leather_boots", [
		'BBB',
		'BAB',
		'BBB'
	], {
		A: "minecraft:leather_boots",
		B: ['#forge:string', 'minecraft:feather', 'tfg:wraptor_wool', 'wan_ancient_beasts:glider_feather', 'tfc:wool']
	}).id('tfg:shaped/insulated_leather_boots')


	// Apron

	event.recipes.tfc.knapping("tfcambiental:leather_apron", "tfc:leather", [
        "XXXXX",
        " XXX ",
        " XXX ",
        " XXX ",
        "  X  "
	]).id("tfg:knapping/leather_apron")
}