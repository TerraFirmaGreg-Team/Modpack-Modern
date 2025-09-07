// priority: 0
"use strict";

const $HeightMap = Java.loadClass("net.minecraft.world.level.levelgen.Heightmap")
const $ForestType = Java.loadClass("net.dries007.tfc.world.chunkdata.ForestType")

const ROCK_LAYER_HEIGHT = 40;


// Bare minimum
TFCEvents.createChunkDataProvider('moon', event => {
    const emptyLayer = TFC.misc.lerpFloatLayer(0, 0, 0, 0);

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
        data.generatePartial(emptyLayer, emptyLayer, 0, 0, 0)
    })
    event.full((data, chunk) => {
        data.generateFull(heights, aquifer)
    })
    event.rocks((x, y, z, surfaceY, cache, rockLayers) => {
        return rockLayers.sampleAtLayer(0, 0)
    })
})

TFCEvents.createChunkDataProvider('mars', event => {
    
    let tempLayer = TFC.misc.newOpenSimplex2D(event.worldSeed + 4621678939469)
        .octaves(2)
        .spread(0.15)
        .scaled(-155, 30)
    let rainLayer = TFC.misc.newOpenSimplex2D(event.worldSeed + 2846746456346)
        .octaves(2)
        .spread(0.15)
        .scaled(-200, 100)
    let forestDensityNoise = TFC.misc.newOpenSimplex2D(event.worldSeed + 98713856895664)
        .octaves(4)
        .spread(0.0025)
        .scaled(-0.2, 1.2)
        .clamped(0, 1)
    let forestWeirdnessNoise = TFC.misc.newOpenSimplex2D(event.worldSeed + 3210378120)
        .octaves(4)
        .spread(0.0025)
        .map(i => 1.1 * Math.abs(i))
        .clamped(0, 1)

    TFC.misc.register2DNoiseForInspection('temp', tempLayer)
    TFC.misc.register2DNoiseForInspection('rain', rainLayer)
    TFC.misc.register2DNoiseForInspection('forestType', forestDensityNoise)
    TFC.misc.register2DNoiseForInspection('forestWeirdness', forestWeirdnessNoise)

    const forestTypeLayer = TFC.misc.uniformLayeredArea(event.worldSeed + 45245235242); 
    for (let i = 0 ; i < 3 ; i++) {
        forestTypeLayer.zoom(true, event.worldSeed + 19763144126).smooth(event.worldSeed + 79784123632);
    }
    for (let i = 0 ; i < 6 ; i++) {
        forestTypeLayer.zoom(true, event.worldSeed + 451364589723);
    }
    forestTypeLayer
        .smooth(event.worldSeed + 71214856214)
        .zoom(true, event.worldSeed + 854126548632)
        .smooth(event.worldSeed + 145256147896)

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

        let rain = TFC.misc.lerpFloatLayer(
            rainLayer.noise(x, z),
            rainLayer.noise(x, z + 15),
            rainLayer.noise(x + 15, z),
            rainLayer.noise(x + 15, z + 15)
        );
        let temp = TFC.misc.lerpFloatLayer(
            tempLayer.noise(x, z),
            tempLayer.noise(x, z + 15),
            tempLayer.noise(x + 15, z),
            tempLayer.noise(x + 15, z + 15)
        );

        let forestType = $ForestType.NONE;
        const forestTypeNoise = forestTypeLayer.getAt(x, z);
        if (forestTypeNoise < 0.2)
            forestType = $ForestType.OLD_GROWTH;
        else if (forestTypeNoise < 0.4)
            forestType = $ForestType.NORMAL;
        else if (forestTypeNoise < 0.6)
            forestType = $ForestType.EDGE;
        else if (forestTypeNoise < 0.8)
            forestType = $ForestType.SPARSE;

        data.generatePartial(
            rain,
            temp,
            forestType,
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
        data.generateFull(heights, aquifer);
    });


    // Rocks

    const rockLayer = TFC.misc.uniformLayeredArea(event.worldSeed + 413567326);

    for (let i = 0 ; i < 3 ; i++) {
        rockLayer.zoom(true, event.worldSeed + 19763144126).smooth(event.worldSeed + 79784123632);
    }
    for (let i = 0 ; i < 6 ; i++) {
        rockLayer.zoom(true, event.worldSeed + 451364589723);
    }
    rockLayer
        .smooth(event.worldSeed + 71214856214)
        .zoom(true, event.worldSeed + 854126548632)
        .smooth(event.worldSeed + 145256147896)

    event.rocks((x, y, z, surfaceY, cache, rockSettings) => {

        return rockSettings.sampleAtLayer(rockLayer.getAt(x, z), (surfaceY - y) / ROCK_LAYER_HEIGHT);
    });
})
