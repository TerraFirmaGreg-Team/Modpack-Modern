// priority: 0
"use strict";
const registerHandGliderRecipes = (event) => {

	event.remove({ id: 'hangglider:glider_framework' })
	event.remove({ id: 'hangglider:glider_wing' })
	event.remove({ id: 'hangglider:reinforced_hang_glider' })

	// Glider Framework
	event.shaped('hangglider:glider_framework', [
		' A ',
		'A A',
		'DCD'
	], {
		A: '#forge:rods/any_bronze',
		C: '#forge:screws/any_bronze',
		D: '#forge:rings'
	}).id('hangglider:shaped/glider_framework')

	// Glider Wing
	event.shaped('hangglider:glider_wing', [
		'  C',
		' BA',
		'BAA'
	], {
		A: '#forge:cloth',
		B: '#forge:rods/any_bronze',
		C: '#forge:screws/any_bronze',
	}).id('hangglider:shaped/glider_wing')

	//Reinforced Hang Glider Stuff
	event.shaped('hangglider:reinforced_hang_glider', [
		' A ',
		'ABA',
		' C '
	], {
		A: 'sns:reinforced_fabric',
		B: 'hangglider:hang_glider',
		C: '#forge:rods/long/steel'
	}).id('hangglider:shaped/reinforced_hang_glider')

	event.shaped('hangglider:reinforced_hang_glider', [
		' A ',
		'ABA',
		' C '
	], {
		A: '#tfg:lightweight_cloth',
		B: 'hangglider:hang_glider',
		C: '#forge:rods/long/steel'
	}).id('hangglider:shaped/reinforced_hang_glider2')
}
