const $ICalendar = Java.loadClass('net.dries007.tfc.util.calendar.ICalendar')

const TICKS_IN_HOUR = $ICalendar.TICKS_IN_HOUR;
const TICKS_IN_DAY = $ICalendar.TICKS_IN_DAY;
const SIX_TIMES_TICKS_IN_HOUR = TICKS_IN_HOUR * 6;

const TWO_PI = JavaMath.PI * 2;

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

		// This is taken from TFC/OverworldClimateModel.java
		let elevationTemp = clamp((playerY - seaLevel) * 0.16225, 0, 17.822);
		return averageTemp - elevationTemp + tempDiff;
	}
	else if (playerY > 0) {

		// TODO currently returning NaN
		let currentInfluence = invLerp(seaLevel, 0, playerY);
		return averageTemp + lerp(tempDiff, 0, currentInfluence);
	}
	else {
		// Trend towards the average temp the deeper the player is underground
		// (+60 to account for the -64 bedrock depth)

		// TODO THIS DOESN'T WORK
		let depthPercent = (playerY + 60) / (seaLevel + 60)

		let coreFactor = coreTemp * coreTempMult * (1 - depthPercent);
		let averageFactor = averageTemp * (1 - coreTempMult) * depthPercent;
		let depthFactor = tempDiff * depthPercent;

		return coreFactor + averageFactor + depthFactor;

		//let currentInfluence = invLerp(playerY, 0
		//let depthInfluence = invLerp(playerY, -64, 0);

	}
	//else {
	//	// Get a bit colder the higher up the player is
	//	return averageTemp + tempDiff + ((seaLevel - playerY) / 8);
	//}
}

/**
 * @param {number} playerZ The current Z level of the player
 * @param {number} scale The size of the planet, from the south pole to the north (20k on earth with default TFC settings)
 * @param {number} min The average value at the poles
 * @param {number} max The average value at the equator
 * @returns {number}
 */
function calcAverage(playerZ, scale, min, max) {

	let relative = (playerZ / scale * -1) + 0.5;

	// relative is now 1 for peak -z, 0 for peak +z

	let smoothed = Math.cos(relative * JavaMath.PI);

	// smoothed is now -1 for peak -z, 1 for peak +z

	let halfDiff = (min - max) / -2;

	let temp = (smoothed * halfDiff) - (halfDiff - max);

	return temp;
}


TFCEvents.registerClimateModel(event => {

	event.registerClimateModel('tfg:orbit_climate', model => {

		model.setCurrentTemperatureCalculation((level, pos, calendarTicks, daysInMonth) => {
			return 0
		})
		model.setAverageTemperatureCalculation((level, pos) => {
			return -270
		})
		model.setAverageRainfallCalculation((level, pos) => {
			return 0
		})
		model.setAirFog((level, pos, calendarTicks) => {
			return 0
		})
		model.setWaterFog((level, pos, calendarTicks) => {
			return 0.25
		})
		model.setWindVector((block, calendarTicks) => {
			return event.newVec2(0, 0)
		})
	})

	// This will be fighting between TFC, which wants to melt everything when the average
	// temp is above 0, and Ad Astra, which wants to freeze everything that isn't in an
	// oxygenated bubble.
	// Is there a way to disable TFC's system here?

	event.registerClimateModel('tfg:moon_climate', model => {

		// A source says the moon's equator is 120c at day and -130c at night
		model.setCurrentTemperatureCalculation((level, pos, calendarTicks, daysInMonth) => {
			return calcCurrentTemp(-5, 60, pos.y, calendarTicks, 125, 0, 0)
		})

		model.setAverageTemperatureCalculation((level, pos) => -5)
		model.setAverageRainfallCalculation((level, pos) => 0)
		model.setAirFog((level, pos, calendarTicks) => 0)
		model.setWaterFog((level, pos, calendarTicks) => 0.25)
		model.setWindVector((block, calendarTicks) => event.newVec2(0, 0))
	})

	event.registerClimateModel('tfg:mars_climate', model => {

		model.setCurrentTemperatureCalculation((level, pos, calendarTicks, daysInMonth) => {

			let avgTemp = calcAverage(pos.z, 10000, -110, -15);
			return calcCurrentTemp(avgTemp, 65, pos.y, calendarTicks, 45, -10, 0);
		})

		model.setAverageTemperatureCalculation((level, pos) => {

			// Earth is 10k to each pole, and mars is about half as big as earth, so 5k to each pole sounds good
			return calcAverage(pos.z, 10000, -110, -15);
		})

		model.setAverageRainfallCalculation((level, pos) => {
		
			// irl it's 0.13mm but that's barely noticeable in tfc, so
			return calcAverage(pos.z, 10000, 1.3, -0.25)
		})

		model.setAirFog((level, pos, calendarTicks) => 0)
		model.setWaterFog((level, pos, calendarTicks) => 0.25)
		model.setWindVector((block, calendarTicks) => event.newVec2(0.25, 0.25))
	})
})
