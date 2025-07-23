// priority: 0
"use strict";

function registerCreateHorsePowerBlockRecipes(event) {

	event.remove({id: 'createhorsepower:horse_crank' })

	event.shaped('createhorsepower:horse_crank', [
		' A ',
		'EBD',
		'CCC'
	], {
		A: '#forge:fences/wooden',
		B: '#forge:small_gears/bronze',
		C: '#tfc:rock/raw',
		D: '#forge:tools/hammers',
		E: '#forge:tools/saws'
	}).id('tfg:shaped/horse_crank_bronze')

	event.shaped('createhorsepower:horse_crank', [
		' A ',
		'EBD',
		'CCC'
	], {
		A: '#forge:fences/wooden',
		B: '#forge:small_gears/bismuth_bronze',
		C: '#tfc:rock/raw',
		D: '#forge:tools/hammers',
		E: '#forge:tools/saws'
	}).id('tfg:shaped/horse_crank_bismuth_bronze')

	event.shaped('createhorsepower:horse_crank', [
		' A ',
		'EBD',
		'CCC'
	], {
		A: '#forge:fences/wooden',
		B: '#forge:small_gears/black_bronze',
		C: '#tfc:rock/raw',
		D: '#forge:tools/hammers',
		E: '#forge:tools/saws'
	}).id('tfg:shaped/horse_crank_black_bronze')
}