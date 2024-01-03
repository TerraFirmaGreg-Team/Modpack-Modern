// priority: 0

const registerGTCEuBlocks = (event) => {
    event.create('terrafirmagreg:copper_coil_block', 'gtceu:coil')
        .temperature(1100)
        .level(0)
        .energyDiscount(1)
        .tier(0)
        .coilMaterial(GTMaterials.get('copper'))
        .texture('terrafirmagreg:block/copper_coil_block')
        .hardness(4)
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .mapColor('metal')
        .soundType('metal')
}