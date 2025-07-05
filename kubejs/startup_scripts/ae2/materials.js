// priority: 0

const registerAE2Materials = (event) => {
    event.create('tfg:fluix')
        .liquid()
        .gem(1)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(
            GTMaterialFlags.NO_SMELTING, 
            GTMaterialFlags.CRYSTALLIZABLE, 
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )
        .components('1x nether_quartz', '1x certus_quartz', '1x ruby')
        .color(0x6D5BB6)
        .secondaryColor(0x1E1932)
}