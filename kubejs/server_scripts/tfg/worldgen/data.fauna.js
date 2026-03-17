"use strict";


/** @param {Internal.TFCDataEventJS} event */
function registerTFGFauna(event) {

	// EARTH FAUNA
	event.fauna(
		climate => {
			climate.minRain(160)
			climate.maxRain(420)
			climate.minTemp(-10)
			climate.maxTemp(15)
			climate.maxForest('edge')
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"tfg:bison")

	event.fauna(
		climate => {
			climate.maxTemp(-9)
			climate.minRain(105)
		},
		faunaData => {
			faunaData.solidGround(false)
		},
		"tfg:leopard_seal")

	event.fauna(
		climate => {
			climate.minTemp(-12)
			climate.maxTemp(-3)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"tfg:lemming")

	event.fauna(
		climate => {
			climate.minTemp(-3)
			climate.maxRain(160)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"tfg:jerboa")

	event.fauna(
		climate => {
			climate.minTemp(12)
			climate.minRain(160)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"tfg:mongoose")

	// MARS FAUNA
	// -108 is the average at z=-4k to z=-6k, which feels like a big enough band
	event.fauna(
		climate => {
			climate.maxTemp(-108)
			climate.fuzzy(false)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"tfg:glacian_ram")

	event.fauna(
		climate => {
			climate.minTemp(-102)
			climate.maxTemp(-30)
			climate.maxForest('normal')
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"tfg:sniffer")

	event.fauna(
		climate => {
			climate.minTemp(-100)
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"tfg:wraptor")

	event.fauna(
		climate => {
			climate.minTemp(-108)
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"species:springling")

	event.fauna(
		climate => {
			climate.minTemp(-109)
			climate.maxForest('normal')
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"species:goober")

	event.fauna(
		climate => {
			climate.minTemp(-97)
			climate.maxForest('edge')
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"wan_ancient_beasts:walker")

	event.fauna(
		climate => {
			climate.minTemp(-109)
			climate.maxForest('normal')
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"wan_ancient_beasts:eater")

	event.fauna(
		climate => {
			climate.minTemp(-100)
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"wan_ancient_beasts:crusher")

	event.fauna(
		climate => {
			climate.minTemp(-109)
			climate.maxForest('normal')
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"wan_ancient_beasts:raider")

	event.fauna(
		climate => {
			climate.minTemp(-107)
			climate.maxForest('normal')
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"wan_ancient_beasts:charger")

	event.fauna(
		climate => {
			climate.minTemp(-105)
			climate.minForest('edge')
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"wan_ancient_beasts:soarer")

	event.fauna(
		climate => {
			climate.minTemp(-106)
			climate.minForest('edge')
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"wan_ancient_beasts:glider")

	event.fauna(
		climate => {
			climate.minTemp(-105)
			climate.minForest('edge')
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"wan_ancient_beasts:snatcher")
}
