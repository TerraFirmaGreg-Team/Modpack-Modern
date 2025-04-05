// priority: 0

function registerCreateHorsePowerBlockRecipes(event) {

	event.remove({id: 'createhorsepower:horse_crank' })

	event.shaped('createhorsepower:horse_crank', [
		' A ',
		'EBD',
		'CCC'
	], {
		A: '#forge:fences/wooden',
		B: '#forge:gears/bronze',
		C: '#tfc:rock/raw',
		D: '#forge:tools/hammers',
		E: '#tfc:chisels'
	}).id('tfg:shaped/horse_crank_bronze')

	event.shaped('createhorsepower:horse_crank', [
		' A ',
		'EBD',
		'CCC'
	], {
		A: '#forge:fences/wooden',
		B: '#forge:gears/bismuth_bronze',
		C: '#tfc:rock/raw',
		D: '#forge:tools/hammers',
		E: '#tfc:chisels'
	}).id('tfg:shaped/horse_crank_bismuth_bronze')

	event.shaped('createhorsepower:horse_crank', [
		' A ',
		'EBD',
		'CCC'
	], {
		A: '#forge:fences/wooden',
		B: '#forge:gears/black_bronze',
		C: '#tfc:rock/raw',
		D: '#forge:tools/hammers',
		E: '#tfc:chisels'
	}).id('tfg:shaped/horse_crank_black_bronze')

}