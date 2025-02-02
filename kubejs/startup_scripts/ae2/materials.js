// priority: 0

const registerAE2Materials = (event) => {
    event.create('tfg:fluix')
        .liquid()
        .gem(1)
        .color(0xD2D2E6)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
            GTMaterialFlags.NO_SMELTING, 
            GTMaterialFlags.CRYSTALLIZABLE, 
            GTMaterialFlags.DISABLE_DECOMPOSITION, 
            GTMaterialFlags.FORCE_GENERATE_BLOCK
        )
        .components('1x silicon', '2x oxygen')
        .color(0x57448d)
}