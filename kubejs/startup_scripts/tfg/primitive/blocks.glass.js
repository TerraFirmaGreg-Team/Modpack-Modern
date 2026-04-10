"use strict";

function registerTFGGlassBlocks(event) {
    createGlassBlock(event, 'glass', false)
    createGlassBlock(event, 'tinted_glass', true)

    global.MINECRAFT_DYE_NAMES.forEach(color => {
        createGlassBlock(event, `${color}_stained_glass`, false)
    })
}

function createGlassBlock(event, name, opaque) {
    event.create(`tfg:glass/smooth_${name}`)
        .textureAll(`tfg:block/glass/smooth_${name}`)
        .hardness(0.3)
        .glassSoundType()
        .transparent(true)
        .opaque(opaque)
        .defaultTranslucent()
        .noValidSpawns(true)
        .redstoneConductor(false)
        .suffocating(false)
        .viewBlocking(false)
        .requiresTool(true)
        .tagBoth('forge:glass')
        .tagBlock('tfc:mineable_with_gem_saw')
        .tagBlock('minecraft:impermeable')
        .tagItem('tfg:whitelisted/facades')
}