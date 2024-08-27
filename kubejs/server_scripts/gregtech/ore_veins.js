// priority: 0

// Я правда не тупой, я знаю, что это можно было сделать перебором списка, но это сделано
// для удобного изменения значения каждой жилы, допустим редкости спавна и тд.

const registerGTMOreVeins = (event) => {

    // Перемещение - End -> Overworld

    event.modify("gtceu:bauxite_vein_end", vein => {
        vein.layer('tfg_tfc_s')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Bauxite).size(1, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Ilmenite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Aluminium).size(1, 1))
            )
        )
    })

    event.modify("gtceu:magnetite_vein_end", vein => {
        vein.layer('tfg_tfc_s')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:naquadah_vein", vein => {
        vein.layer('tfg_tfc_m')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:pitchblende_vein_end", vein => {
        vein.layer('tfg_tfc_ii_m')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:scheelite_vein", vein => {
        vein.layer('tfg_tfc_ii')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:sheldonite_vein", vein => {
        vein.layer('tfg_tfc_m')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    // Nether -> Overworld

    event.modify("gtceu:banded_iron_vein", vein => {
        vein.layer('tfg_tfc_ie')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:beryllium_vein", vein => {
        vein.layer('tfg_tfc_ie')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:certus_quartz", vein => {
        vein.layer('tfg_tfc_m')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:manganese_vein", vein => {
        vein.layer('tfg_tfc_ie_s')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:molybdenum_vein", vein => {
        vein.layer('tfg_tfc_ie_ii')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:monazite_vein", vein => {
        vein.layer('tfg_tfc_ii')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:nether_quartz_vein", vein => {
        vein.layer('tfg_tfc_s_q_s_g')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:redstone_vein", vein => {
        vein.layer('tfg_tfc_granite')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:saltpeter_vein", vein => {
        vein.layer('tfg_tfc_ie_m')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Saltpeter).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Diatomite).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.Electrotine).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Alunite).size(1, 1))
            )
        )
    })

    event.modify("gtceu:sulfur_vein", vein => {
        vein.layer('tfg_tfc_ie')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:tetrahedrite_vein", vein => {
        vein.layer('tfg_tfc_m')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:topaz_vein", vein => {
        vein.layer('tfg_tfc_m')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    // Перемещение - Overworld -> Overworld

    event.modify("gtceu:apatite_vein", vein => {
        vein.layer('tfg_tfc_ii_m')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:cassiterite_vein", vein => {
        vein.layer('tfg_tfc_ii')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:coal_vein", vein => {
        vein.layer('tfg_tfc_s')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:copper_tin_vein", vein => {
        vein.layer('tfg_tfc_ie')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:galena_vein", vein => {
        vein.layer('tfg_tfc_g_g')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:garnet_tin_vein", vein => {
        vein.layer('tfg_tfc_all')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:garnet_vein", vein => {
        vein.layer('tfg_tfc_m_s')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })
    event.modify("gtceu:iron_vein", vein => {
        vein.layer('tfg_tfc_ii')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:lubricant_vein", vein => {
        vein.layer('tfg_tfc_ii')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:magnetite_vein_ow", vein => {
        vein.layer('tfg_tfc_s')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:mineral_sand_vein", vein => {
        vein.layer('tfg_tfc_g_b')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:nickel_vein", vein => {
        vein.layer('tfg_tfc_gabbro')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:salts_vein", vein => {
        vein.layer('tfg_tfc_s_c_l')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:oilsands_vein", vein => {
        vein.layer('tfg_tfc_s')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    // Перемещение - Deepslate Overworld -> Overworld

    event.modify("gtceu:copper_vein", vein => {
        vein.layer('tfg_tfc_ie')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:diamond_vein", vein => {
        vein.layer('tfg_tfc_gabbro')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:lapis_vein", vein => {
        vein.layer('tfg_tfc_m')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:manganese_vein_ow", vein => {
        vein.layer('tfg_tfc_s')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:mica_vein", vein => {
        vein.layer('tfg_tfc_ii_m')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:olivine_vein", vein => {
        vein.layer('tfg_tfc_ie_ii')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:redstone_vein_ow", vein => {
        vein.layer('tfg_tfc_granite')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    event.modify("gtceu:sapphire_vein", vein => {
        vein.layer('tfg_tfc_ie')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')
    })

    // Перемещение - Custom

    event.add("tfg:bismuth", vein => {
        vein.weight(80)
        vein.clusterSize(40)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)

        vein.layer('tfg_tfc_ii_s')
        vein.dimensions('minecraft:overworld')
        vein.biomes('#tfg:is_tfc_overworld')

        vein.heightRangeUniform(0, 60)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Cobalt).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.Nickel).size(1, 1))
                .layer(l => l.weight(3).mat(GTMaterials.Bismuth).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Silver).size(1, 1))
            )
        )

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Bismuth)
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })
}