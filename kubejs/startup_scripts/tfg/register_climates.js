"use strict";


const $ICalendar = Java.loadClass('net.dries007.tfc.util.calendar.ICalendar')
const $LerpFloatLayer = Java.loadClass('net.dries007.tfc.world.chunkdata.LerpFloatLayer')

const TICKS_IN_HOUR = $ICalendar.TICKS_IN_HOUR;
const TICKS_IN_DAY = $ICalendar.TICKS_IN_DAY;
const SIX_TIMES_TICKS_IN_HOUR = TICKS_IN_HOUR * 6;

const TWO_PI = JavaMath.PI * 2;

const OXYGENATED_TEMP = 15;

global.MARS_PLANET_SIZE = 10000;
global.MARS_MIN_AVG_TEMP = -110;
global.MARS_MAX_AVG_TEMP = -15;
global.MARS_MIN_AVG_RAIN = -25;
global.MARS_MAX_AVG_RAIN = 13;

global.GLACIO_PLANET_SIZE = 5000;

function clamp(val, min, max) {
	return Math.min(Math.max(val, min), max);
}

function lerp(x, y, a) {
	return (1 - a) * x + y * a;
}

function invLerp(x, y, a) {
	return (a - x) / (y - x);
}

/**
 * allows runtime control of wind vector; called every tick
 * @returns {Object} singleton manager object
 */
global.getMarsClimateController = function () {
	if (!global._MARS_CLIMATE_CONTROLLER) {
		console.info("Initializing MARS_CLIMATE_CONTROLLER...");
		global._MARS_CLIMATE_CONTROLLER = {
			windX: 0,
			windZ: 0,

			getWind: function () {
				return { x: this.windX, z: this.windZ };
			},

			setWind: function (vector) {
				this.windX = vector.x;
				this.windZ = vector.z;
			},

			createWindCallback: function (builder) {
				var self = this;
				return function (level, pos, calendarTicks) {
					const strength = Math.max(0, Math.sin(calendarTicks / 10000) -0.6);

					const newX = Math.cos(calendarTicks / 2400) * strength;
					const newZ = Math.sin(calendarTicks / 2400) * strength;

					self.setWind({x: newX, z: newZ});
					return builder.vector(newX, newZ);
				};
			},

			createFogCallback: function (builder) {
				var self = this;
				return function (level, pos, calendarTicks) {
					const wind = self.getWind();
					const strength = Math.hypot(wind.x, wind.z);
					if (strength < 0.2)
						return 0;
					else
						return Math.max(0, strength);
				}
			}
		};
	}
	return global._MARS_CLIMATE_CONTROLLER;
};


/**
 * @param {number} averageTemp Output from calcAverageTemp
 * @param {number} seaLevel The average Y level of the planet surface
 * @param {number} playerY The current Y level of the player
 * @param {number} calendarTicks Pass from the callback
 * @param {number} tempRange Difference between the min/max temp at this latitude and the average.
 * (ex: if average is 0c and min is -15 and max is 15, tempRange should be 15)
 * @param {number} coreTemp Constant temperature at bedrock level
 * @param {number} coreTempMult How much the coreTemp affects the bedrock level. 0 for a dead planet, 1 for the earth.
 * @returns {number}
 */
function calcCurrentTemp(averageTemp, seaLevel, playerY, calendarTicks, tempRange, coreTemp, coreTempMult) {

	let dayTicks = ((calendarTicks - SIX_TIMES_TICKS_IN_HOUR) % TICKS_IN_DAY);
	let dayPercent = dayTicks / TICKS_IN_DAY

	let tempDiff = Math.sin(dayPercent * TWO_PI) * tempRange;

	if (playerY > seaLevel) {

		// This is taken from TFC's OverworldClimateModel.java
		let elevationTemp = clamp((playerY - seaLevel) * 0.16225, 0, 17.822);
		return averageTemp - elevationTemp + tempDiff;
	} else if (playerY > 20) {

		return averageTemp + (tempDiff * (playerY / seaLevel));
	} else {

		let depthPercent = 1 - (playerY / 20);

		let bedrockTemp = lerp(averageTemp, coreTemp, coreTempMult);

		return lerp(bedrockTemp, averageTemp, depthPercent);
	}
}

/**
 * @param {number} playerZ The current Z level of the player
 * @param {number} scale The size of the planet, from the south pole to the north (20k on earth with default TFC settings)
 * @param {number} min The average value at the poles
 * @param {number} max The average value at the equator
 * @returns {number}
 */
function calcAverage(playerZ, scale, min, max) {

	let relative = (playerZ / (scale * -1)) + 0.5;

	// relative is now 1 for peak -z, 0 for peak +z

	let smoothed = Math.cos(relative * JavaMath.PI);

	// smoothed is now -1 for peak -z, 1 for peak +z

	let halfDiff = (min - max) / -2;

	let temp = (smoothed * halfDiff) - (halfDiff - max);

	return temp;
}


TFCEvents.registerClimateModel(event => {

	event.register('tfg:nether_climate', builder => {

		builder.setCurrentTemperatureCalculation((level, pos, calendarTicks, daysInMonth) => {
			return lerp(100, 25, pos.y / 128);
		})

		builder.setAverageTemperatureCalculation((level, pos) => {
			return lerp(100, 25, pos.y / 128);
		})

		builder.setAverageRainfallCalculation((level, pos) => {
			return lerp(-200, 200, pos.y / 128);
		})

		builder.setAirFog((level, pos, calendarTicks) => 0)
		builder.setWaterFog((level, pos, calendarTicks) => 0.6)
		builder.setWindVector((level, block, calendarTicks) => builder.vector(0, 0))
	})

	event.register('tfg:orbit_climate', builder => {
		builder.setCurrentTemperatureCalculation((level, pos, calendarTicks, daysInMonth) => {
			if (OxygenAPI.hasOxygen(level, pos.above())) {
				return OXYGENATED_TEMP;
			}
			return -270;
		})
		builder.setAverageTemperatureCalculation((level, pos) => -270)
		builder.setAverageRainfallCalculation((level, pos) => 0)
		builder.setAirFog((level, pos, calendarTicks) => 0)
		builder.setWaterFog((level, pos, calendarTicks) => 0.25)
		builder.setWindVector((level, block, calendarTicks) => builder.vector(0, 0))
	})

	event.register('tfg:moon_climate', builder => {
		// A source says the moon's equator is 120c at day and -130c at night
		builder.setCurrentTemperatureCalculation((level, pos, calendarTicks, daysInMonth) => {
			if (OxygenAPI.hasOxygen(level, pos.above())) {
				return OXYGENATED_TEMP;
			}
			return calcCurrentTemp(-5, 60, pos.y, calendarTicks, 125, 0, 0)
		})

		builder.setAverageTemperatureCalculation((level, pos) => -5)
		builder.setAverageRainfallCalculation((level, pos) => 0)
		builder.setAirFog((level, pos, calendarTicks) => 0)
		builder.setWaterFog((level, pos, calendarTicks) => 0.25)
		builder.setWindVector((level, block, calendarTicks) => builder.vector(0, 0))
	})

	event.register('tfg:mars_climate', builder => {

		builder.setCurrentTemperatureCalculation((level, pos, calendarTicks, daysInMonth) => {
			if (OxygenAPI.hasOxygen(level, pos.above())) {
				return OXYGENATED_TEMP;
			}

			// average of -110 at night, -15 at day
			let avgTemp = calcAverage(pos.z, global.MARS_PLANET_SIZE, -110, -15);
			// +- 45 based on latitude, down to -10 at bedrock
			return calcCurrentTemp(avgTemp, 88, pos.y, calendarTicks, 45, -10, 0.5);
		})

		builder.setAverageTemperatureCalculation((level, pos) => {
			// Earth is 10k to each pole, and mars is about half as big as earth, so 5k to each pole sounds good
			return calcAverage(pos.z, global.MARS_PLANET_SIZE, -110, -15);
		})

		builder.setAverageRainfallCalculation((level, pos) => {
			// irl mars' poles have a snowfall of 0.13mm but that's barely noticeable here.
			// Use a negative rainfall to stop it snowing closer to the equator. TFC clamps negatives to zero so it's fine
			return calcAverage(pos.x, global.MARS_PLANET_SIZE, -25, 13)
		})

		builder.setWaterFog((level, pos, calendarTicks) => 0.02);

		const controller = global.getMarsClimateController();
		builder.setAirFog(controller.createFogCallback(builder));
		builder.setWindVector(controller.createWindCallback(builder));
	})
})