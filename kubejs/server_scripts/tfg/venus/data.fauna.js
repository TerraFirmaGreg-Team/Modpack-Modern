"use strict";

/** @param {Internal.TFCDataEventJS} event */
function registerVenusFauna(event) {

	event.fauna(
		climate => {
			climate.minTemp(400)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"minecraft:strider")

	event.fauna(
		climate => {
			climate.minTemp(400)
			climate.minForest('edge')
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"arthropocolypse:prairie_grasshopper")
		
	event.fauna(
		climate => {
			climate.minTemp(400)
			climate.minForest('edge')
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"arthropocolypse:field_cricket")

	event.fauna(
		climate => {
			climate.minTemp(400)
			climate.minForest('normal')
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"arthropocolypse:mealworm_beetle")

	event.fauna(
		climate => {
			climate.minTemp(400)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"arthropocolypse:ice_crawler")

	event.fauna(
		climate => {
			climate.minTemp(400)
			climate.maxForest('edge')
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"arthropocolypse:worker_ant")

	event.fauna(
		climate => {
			climate.minTemp(400)
			climate.maxForest('edge')
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"arthropocolypse:soldier_ant")

	event.fauna(
		climate => {
			climate.minTemp(400)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"arthropocolypse:stag_beetle")

	event.fauna(
		climate => {
			climate.minTemp(400)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"arthropocolypse:wharf_roach")

	event.fauna(
		climate => {
			climate.minTemp(400)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"arthropocolypse:platerodrilus")

	event.fauna(
		climate => {
			climate.minTemp(400)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"arthropocolypse:millipede_head")
}
