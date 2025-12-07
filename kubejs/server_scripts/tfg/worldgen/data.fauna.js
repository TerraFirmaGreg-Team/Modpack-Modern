"use strict";


/** @param {Internal.TFCDataEventJS} event */
function registerTFGFauna(event) {

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
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"species:goober")

	event.fauna(
		climate => {
			climate.minTemp(-97)
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"wan_ancient_beasts:walker")

	event.fauna(
		climate => {
			climate.minTemp(-109)
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
			climate.minTemp(-105)
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"wan_ancient_beasts:soarer")

	event.fauna(
		climate => {
			climate.minTemp(-106)
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"wan_ancient_beasts:glider")
}
