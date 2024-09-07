// priority: 0

const registerGregTechBlocks = (event) => {

    //todo:
    event.create('tfg:copper_coil_block', 'gtceu:coil')
        .temperature(500)
        .level(0)
        .energyDiscount(1)
        .tier(0)
        .coilMaterial(() => GTMaterials.get('copper'))
        .texture('kubejs:block/example_block')
        .hardness(2)
        .requiresTool(true)
        .material('metal')
}