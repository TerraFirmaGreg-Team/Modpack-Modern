"use strict";


/** @param {Internal.TFCDataEventJS} event */
function registerTFGCropRanges(event) {
	// Earth
	event.climateRange((climate) => {
		climate.minHydration(20);
		climate.maxHydration(80);
		climate.minTemperature(5);
		climate.maxTemperature(40);
		climate.hydrationWiggle(7.5);
		climate.temperatureWiggle(5.5);
	}, "tfg:sunflower");

	event.climateRange((climate) => {
		climate.minHydration(10);
		climate.maxHydration(60);
		climate.minTemperature(-5);
		climate.maxTemperature(25);
		climate.hydrationWiggle(7.5);
		climate.temperatureWiggle(1.5);
	}, "tfg:rapeseed");

	event.climateRange((climate) => {
		climate.minHydration(15);
		climate.maxHydration(65);
		climate.minTemperature(-8);
		climate.maxTemperature(25);
		climate.hydrationWiggle(6.5);
		climate.temperatureWiggle(3);
	}, "tfg:flax");

	// Mars
	event.climateRange((climate) => {
		climate.minHydration(0);
		climate.maxHydration(40);
		climate.minTemperature(-150);
		climate.maxTemperature(15);
		climate.hydrationWiggle(7.5);
		climate.temperatureWiggle(5.5);
	}, "betterend:amber_root");

	event.climateRange((climate) => {
		climate.minHydration(70);
		climate.maxHydration(100);
		climate.minTemperature(-80);
		climate.maxTemperature(30);
		climate.hydrationWiggle(7.5);
		climate.temperatureWiggle(5.5);
	}, "betterend:blossom_berry");

	event.climateRange((climate) => {
		climate.minHydration(0);
		climate.maxHydration(40);
		climate.minTemperature(-150);
		climate.maxTemperature(15);
		climate.hydrationWiggle(7.5);
		climate.temperatureWiggle(5.5);
	}, "betterend:bolux_mushroom");

	event.climateRange((climate) => {
		climate.minHydration(0);
		climate.maxHydration(60);
		climate.minTemperature(-100);
		climate.maxTemperature(30);
		climate.hydrationWiggle(7.5);
		climate.temperatureWiggle(5.5);
	}, "betterend:cave_pumpkin_plant");

	event.climateRange((climate) => {
		climate.minHydration(0);
		climate.maxHydration(40);
		climate.minTemperature(-150);
		climate.maxTemperature(15);
		climate.hydrationWiggle(7.5);
		climate.temperatureWiggle(5.5);
	}, "betterend:chorus_mushroom");

	event.climateRange((climate) => {
		climate.minHydration(50);
		climate.maxHydration(100);
		climate.minTemperature(-80);
		climate.maxTemperature(30);
		climate.hydrationWiggle(7.5);
		climate.temperatureWiggle(5.5);
	}, "betterend:shadow_berry");
}
