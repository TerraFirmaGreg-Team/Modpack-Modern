// priority: 0
"use strict";

const $HeightMap = Java.loadClass("net.minecraft.world.level.levelgen.Heightmap")

const ROCK_LAYER_HEIGHT = 40;

// Bare minimum
TFCEvents.createChunkDataProvider('moon', event => {
    var aquifer = [];
    let i = 0;
    while (i < 16) {
        aquifer.push(32);
        i++;
    }
    var heights = [];
    for (let x = 0 ; x < 16 ; x++) {
        for (let z = 0 ; z < 16 ; z++) {
            heights[x + 16 * z] = 80;
        }
    }

    event.partial((data, chunk) => {
        data.generatePartial(0, 0, 0, 0, 0)
    })
    event.full((data, chunk) => {
        data.generateFull(heights, aquifer)
    })
    event.rocks((x, y, z, surfaceY, cache, rockLayers) => {
        return rockLayers.sampleAtLayer(0, 0)
    })
})

TFCEvents.createChunkDataProvider('mars', event => {

    const rain = TFC.misc.lerpFloatLayer(0, 0, 0, 0);
    const tempLayer = TFC.misc.newOpenSimplex2D(event.worldSeed + 4621678939469)
        .spread(0.2)
        .octaves(3)
        .scaled(70, 90)
    const forestLayer = TFC.misc.newOpenSimplex2D(event.worldSeed + 98713856895664)
        .spread(0.8)
        .terraces(9)
        .affine(6, 12)
        .scaled(6, 18, 0, 1)

    const rockNoise = TFC.misc.newOpenSimplex2D(event.worldSeed + 8008135)
        .octaves(3)
        .scaled(0x80000000, 0x7fffffff) // Integer.MIN_VALUE to Integer.MAX_VALUE
        .spread(0.00001) // spread it out so the vaiance is small

    // Precompute the aquifer heights as constants as this is not used
    var aquifer = [];
    let i = 0;
    while (i < 16) {
        aquifer.push(32);
        i++;
    }

    event.partial((data, chunk) => {
        let x = chunk.pos.minBlockX;
        let z = chunk.pos.minBlockZ;

        let temp = TFC.misc.lerpFloatLayer(
            tempLayer.noise(x, z),
            tempLayer.noise(x, z + 15),
            tempLayer.noise(x + 15, z),
            tempLayer.noise(x + 15, z + 15)
        );

        data.generatePartial(
            rain,
            temp,
            forestLayer.noise(x, z) * 4, // Kube accepts ordinal numbers for enum constants
            forestLayer.noise(x * 78423 + 869, z),
            forestLayer.noise(x, z * 651349 - 698763)
        );
    });

    event.full((data, chunk) => {
        let heights = [];
        for (let z = 0; z < 16; z++) {
            for (let x = 0; x < 16; x++) {
                heights[x + 16 * z] = chunk.getHeight($HeightMap.Types.OCEAN_FLOOR_WG, x, z);
            }
        }
        data.generateFull(heights, aquifer);
    });

    event.rocks((x, y, z, surfaceY, cache, rockLayers) => {
        return rockLayers.sampleAtLayer(rockNoise.noise(x, z), (surfaceY - y) / ROCK_LAYER_HEIGHT);
    });
})
