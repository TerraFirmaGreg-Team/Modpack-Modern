// priority: 0
"use strict";

const $HeightMap = Java.loadClass("net.minecraft.world.level.levelgen.Heightmap")
const $ForestType = Java.loadClass("net.dries007.tfc.world.chunkdata.ForestType")

const ROCK_LAYER_HEIGHT = 40;


// Precompute the aquifer heights as constants as this is not used
let EMPTY_AQUIFER = [];
let aquifer_i = 0;
while (aquifer_i < 16) {
	EMPTY_AQUIFER.push(32);
	aquifer_i++;
}


// Bare minimum
TFCEvents.createChunkDataProvider('moon', event => {
	const emptyLayer = TFC.misc.lerpFloatLayer(0, 0, 0, 0);

	var heights = [];
	for (let x = 0; x < 16; x++) {
		for (let z = 0; z < 16; z++) {
			heights[x + 16 * z] = 80;
		}
	}

	event.partial((data, chunk) => {
		data.generatePartial(emptyLayer, emptyLayer, 0, 0, 0)
	})
	event.full((data, chunk) => {
		data.generateFull(heights, EMPTY_AQUIFER)
	})
	event.rocks((x, y, z, surfaceY, cache, rockLayers) => {
		return rockLayers.sampleAtLayer(0, 0)
	})
})


let tempLayer = TFC.misc.newOpenSimplex2D(4621678939469)
	.octaves(2)
	.spread(0.05)
	.scaled(-10, 10)
let rainLayer = TFC.misc.newOpenSimplex2D(2846746456346)
	.octaves(2)
	.spread(0.05)
	.scaled(-3, 3)
let forestDensityNoise = TFC.misc.newOpenSimplex2D(98713856895664)
	.octaves(4)
	.spread(0.0025)
	.scaled(-0.2, 1.2)
	.clamped(0, 1)
let forestWeirdnessNoise = TFC.misc.newOpenSimplex2D(3210378120)
	.octaves(4)
	.spread(0.0025)
	.map(i => 1.1 * Math.abs(i))
	.clamped(0, 1)

//TFC.misc.register2DNoiseForInspection('temp', tempLayer)
//TFC.misc.register2DNoiseForInspection('rain', rainLayer)
//TFC.misc.register2DNoiseForInspection('forestType', forestDensityNoise)
//TFC.misc.register2DNoiseForInspection('forestWeirdness', forestWeirdnessNoise)

// Forest layer
let forestLayerNoise = TFC.misc.newOpenSimplex2D(3210378120)
	.octaves(2)
	.spread(0.005)
	.scaled(0, 1)

// Rock layer
const rockLayer = TFC.misc.uniformLayeredArea(413567326);
for (let i = 0; i < 3; i++) {
	rockLayer.zoom(true, 19763144126).smooth(79784123632);
}
for (let i = 0; i < 6; i++) {
	rockLayer.zoom(true, 451364589723);
}
rockLayer
	.smooth(71214856214)
	.zoom(true, 854126548632)
	.smooth(145256147896)


TFCEvents.createChunkDataProvider('mars', event => {
	event.partial((data, chunk) => {
		let x = chunk.pos.minBlockX;
		let z = chunk.pos.minBlockZ;

		const avgTemp1 = calcAverage(z, global.MARS_PLANET_SIZE, global.MARS_MIN_AVG_TEMP, global.MARS_MAX_AVG_TEMP)
		const avgTemp2 = calcAverage(z + 15, global.MARS_PLANET_SIZE, global.MARS_MIN_AVG_TEMP, global.MARS_MAX_AVG_TEMP)
		const avgRain1 = calcAverage(x, global.MARS_PLANET_SIZE, global.MARS_MIN_AVG_RAIN, global.MARS_MAX_AVG_RAIN)
		const avgRain2 = calcAverage(x + 15, global.MARS_PLANET_SIZE, global.MARS_MIN_AVG_RAIN, global.MARS_MAX_AVG_RAIN)

		let rain = TFC.misc.lerpFloatLayer(
			avgRain1 + rainLayer.noise(x, z),
			avgRain1 + rainLayer.noise(x, z + 15),
			avgRain2 + rainLayer.noise(x + 15, z),
			avgRain2 + rainLayer.noise(x + 15, z + 15)
		);
		let temp = TFC.misc.lerpFloatLayer(
			avgTemp1 + tempLayer.noise(x, z),
			avgTemp1 + tempLayer.noise(x, z + 15),
			avgTemp2 + tempLayer.noise(x + 15, z),
			avgTemp2 + tempLayer.noise(x + 15, z + 15)
		);

		data.generatePartial(
			rain,
			temp,
			floatToForestType(forestLayerNoise.noise(x, z)),
			forestWeirdnessNoise.noise(x, z), // forest weirdness
			forestDensityNoise.noise(x, z) // forest density
		);
	});

	event.full((data, chunk) => {
		let heights = [];
		for (let z = 0; z < 16; z++) {
			for (let x = 0; x < 16; x++) {
				heights[x + 16 * z] = chunk.getHeight($HeightMap.Types.OCEAN_FLOOR_WG, x, z);
			}
		}
		data.generateFull(heights, EMPTY_AQUIFER);
	});

	event.rocks((x, y, z, surfaceY, cache, rockSettings) => {
		return rockSettings.sampleAtLayer(rockLayer.getAt(x, z), (surfaceY - y) / ROCK_LAYER_HEIGHT);
	});
})

TFCEvents.createChunkDataProvider('glacio', event => {
	event.partial((data, chunk) => {
		let x = chunk.pos.minBlockX;
		let z = chunk.pos.minBlockZ;

		const avgTemp1 = calcAverage(z, global.GLACIO_PLANET_SIZE, 0, 100)
		const avgTemp2 = calcAverage(z + 15, global.GLACIO_PLANET_SIZE, 0, 100)
		const avgRain1 = calcAverage(x, global.GLACIO_PLANET_SIZE, 0, 100)
		const avgRain2 = calcAverage(x + 15, global.GLACIO_PLANET_SIZE, 0, 100)

		let rain = TFC.misc.lerpFloatLayer(
			avgRain1 + rainLayer.noise(x, z),
			avgRain1 + rainLayer.noise(x, z + 15),
			avgRain2 + rainLayer.noise(x + 15, z),
			avgRain2 + rainLayer.noise(x + 15, z + 15)
		);
		let temp = TFC.misc.lerpFloatLayer(
			avgTemp1 + tempLayer.noise(x, z),
			avgTemp1 + tempLayer.noise(x, z + 15),
			avgTemp2 + tempLayer.noise(x + 15, z),
			avgTemp2 + tempLayer.noise(x + 15, z + 15)
		);

		data.generatePartial(
			rain,
			temp,
			floatToForestType(forestLayerNoise.noise(x, z)),
			forestWeirdnessNoise.noise(x, z), // forest weirdness
			forestDensityNoise.noise(x, z) // forest density
		);
	});

	event.full((data, chunk) => {
		let heights = [];
		for (let z = 0; z < 16; z++) {
			for (let x = 0; x < 16; x++) {
				heights[x + 16 * z] = chunk.getHeight($HeightMap.Types.OCEAN_FLOOR_WG, x, z);
			}
		}
		data.generateFull(heights, EMPTY_AQUIFER);
	});

	event.rocks((x, y, z, surfaceY, cache, rockSettings) => {
		return rockSettings.sampleAtLayer(rockLayer.getAt(x, z), (surfaceY - y) / ROCK_LAYER_HEIGHT);
	});
})

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


/**
 * @param {number} float A number between 0 and 1
 * @returns {$ForestType}
 */
// Rhino moment
function floatToForestType(float) {
	if (float < 0.2)
		return $ForestType.OLD_GROWTH;
	else if (float < 0.4)
		return $ForestType.NORMAL;
	else if (float < 0.6)
		return $ForestType.EDGE;
	else if (float < 0.8)
		return $ForestType.SPARSE;
	else
		return $ForestType.NONE;
}