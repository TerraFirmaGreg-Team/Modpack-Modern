"use strict";


/** @param {Internal.TFCDataEventJS} event */
function registerOverworldFauna(event) {

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
			climate.minRain(160)
			climate.maxRain(500)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"tfg:lemming")

	event.fauna(
		climate => {
			climate.minTemp(-3)
			climate.maxTemp(25)
			climate.minRain(0)
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
			climate.maxRain(500)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"tfg:mongoose")

	event.fauna(
		climate => {
			climate.minTemp(-5)
			climate.maxRain(100)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"tfg:dromedary_camel")

	event.fauna(
		climate => {
			climate.maxTemp(0)
			climate.maxRain(100)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"tfg:bactrian_camel")

	// Jellies
	event.fauna(
		climate => {
			climate.minTemp(1)
			climate.maxTemp(10)
			climate.minRain(150)
			climate.minForest('normal')
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"jellies:herbal")

	event.fauna(
		climate => {
			climate.minTemp(-10)
			climate.maxTemp(0)
			climate.minRain(150)
			climate.minForest('normal')
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"jellies:phosphorum")

	// Fowl Play

	const BIRD_CHANCE = 1;

	event.fauna(
		climate => {
			climate.minRain(200)
			climate.maxRain(400)
			climate.minTemp(-10)
			climate.maxTemp(10)
			climate.minForest('edge')
		},
		faunaData => {
			faunaData.chance(BIRD_CHANCE)
		},
		"fowlplay:blue_jay")

	event.fauna(
		climate => {
			climate.minRain(200)
			climate.maxRain(400)
			climate.minTemp(-5)
			climate.maxTemp(15)
			climate.minForest('edge')
		},
		faunaData => {
			faunaData.chance(BIRD_CHANCE)
		},
		"fowlplay:cardinal")
		
	event.fauna(
		climate => {
			climate.minRain(90)
			climate.maxRain(350)
			climate.minTemp(-11)
			climate.maxTemp(5)
			climate.minForest('edge')
		},
		faunaData => {
			faunaData.chance(BIRD_CHANCE)
		},
		"fowlplay:chickadee")

	event.fauna(
		climate => {
			climate.minRain(80)
			climate.maxRain(400)
			climate.minTemp(-7)
			climate.maxTemp(12)
			climate.minForest('sparse')
		},
		faunaData => {
			faunaData.chance(BIRD_CHANCE)
		},
		"fowlplay:crow")

	event.fauna(
		climate => {
			climate.minRain(150)
			climate.maxRain(450)
			climate.minTemp(-12)
			climate.maxTemp(5)
			climate.maxForest('edge')
		},
		faunaData => {
			faunaData.chance(BIRD_CHANCE)
		},
		"fowlplay:goose")

	event.fauna(
		climate => {
			climate.minRain(50)
			climate.minTemp(-8)
			climate.maxTemp(20)
		},
		faunaData => {
			faunaData.chance(BIRD_CHANCE)
		},
		"fowlplay:gull")

	event.fauna(
		climate => {
			climate.minRain(50)
			climate.maxRain(400)
			climate.minTemp(-12)
			climate.maxTemp(15)
			climate.maxForest('normal')
		},
		faunaData => {
			faunaData.chance(BIRD_CHANCE)
		},
		"fowlplay:hawk")

	event.fauna(
		climate => {
			climate.minRain(75)
			climate.maxTemp(-14)
		},
		faunaData => {
			faunaData.chance(BIRD_CHANCE)
			faunaData.solidGround(true)
		},
		"fowlplay:penguin")

	event.fauna(
		climate => {
			climate.minRain(80)
			climate.maxRain(500)
			climate.minTemp(-8)
			climate.maxTemp(17)
			climate.maxForest('sparse')
		},
		faunaData => {
			faunaData.chance(BIRD_CHANCE)
		},
		"fowlplay:pigeon")

	event.fauna(
		climate => {
			climate.minRain(50)
			climate.maxRain(250)
			climate.minTemp(-8)
			climate.maxTemp(7)
			climate.minForest('sparse')
		},
		faunaData => {
			faunaData.chance(BIRD_CHANCE)
		},
		"fowlplay:raven")

	event.fauna(
		climate => {
			climate.minRain(300)
			climate.maxRain(500)
			climate.minTemp(-12)
			climate.maxTemp(7)
			climate.minForest('edge')
		},
		faunaData => {
			faunaData.chance(BIRD_CHANCE)
		},
		"fowlplay:robin")

	event.fauna(
		climate => {
			climate.minRain(100)
			climate.maxRain(400)
			climate.minTemp(-8)
			climate.maxTemp(10)
			climate.minForest('edge')
		},
		faunaData => {
			faunaData.chance(BIRD_CHANCE)
		},
		"fowlplay:sparrow")
}
