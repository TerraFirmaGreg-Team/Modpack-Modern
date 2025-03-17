// priority: 0

const registerTFCMaterials = (event) => {
    const registerOreMaterial = (rockType, color) => 
        event.create(`tfg:${rockType}`)
            .dust()
            .color(color)
            .iconSet(GTMaterialIconSet.ROUGH)
            .flags(
                GTMaterialFlags.MORTAR_GRINDABLE, 
                GTMaterialFlags.NO_SMASHING, 
                GTMaterialFlags.NO_SMELTING
            )

    /* TFC Stone Types Materials */
    registerOreMaterial('gabbro', 0x7F8081)
    registerOreMaterial('shale', 0x686567)
    registerOreMaterial('claystone', 0xAF9377)
    registerOreMaterial('limestone', 0xA09885)
    registerOreMaterial('conglomerate', 0xA3977F)
    registerOreMaterial('dolomite', 0x515155)
    registerOreMaterial('chert', 0x7A6756)
    registerOreMaterial('chalk', 0xA4A39F)
    registerOreMaterial('rhyolite', 0x726D69)
    registerOreMaterial('dacite', 0x979797)
    registerOreMaterial('slate', 0x989287)
    registerOreMaterial('phyllite', 0x706B61)
    registerOreMaterial('schist', 0x6E735C)
    registerOreMaterial('gneiss', 0x6A6D60)
    
    /* Specific Materials */
    event.create('tfg:latex')
        .liquid()
        .color(0xFBB982)
}