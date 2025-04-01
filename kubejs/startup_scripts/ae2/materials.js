// priority: 0

const registerAE2Materials = (event) => {
    event.create('tfg:fluix')
        .liquid()
        .gem(1)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(
            GTMaterialFlags.NO_SMELTING, 
            GTMaterialFlags.CRYSTALLIZABLE, 
            GTMaterialFlags.DISABLE_DECOMPOSITION, 
            GTMaterialFlags.FORCE_GENERATE_BLOCK
        )
        .components('1x silicon', '2x oxygen')
        .color(0x6D5BB6)
        .secondaryColor(0x1E1932)
}