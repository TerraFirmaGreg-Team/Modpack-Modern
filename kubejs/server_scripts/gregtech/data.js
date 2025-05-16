// priority: 0

const registerTFCDataForGTCEU = (event) => {
    registerGTCEUHeats(event)
}

/**
 * event.itemHeat(
    ingredient: Ingredient, 
    heatCapacity: number, 
    forgingTemperature: @Nullable number, 
    weldingTemperature: @Nullable number, 
    name?: string
    )
 */
const registerGTCEUHeats = (event) => {
    event.itemHeat('gtceu:compressed_coke_clay', 0.1242, null, null)
}


const registerGTCEUBedrockOreVeins = (event) => {

    // Tin
        event.add('tfg:moon_tin', vein => {
        vein.weight(800)
            .size(1)
            .yield(1, 4)
            .material(GTMaterials.Cassiterite, 5)
            .material(GTMaterials.Tin, 2)
            .dimensions('ad_astra:moon')
    })

    // Iron and Gold
        event.add('tfg:moon_magnetite', vein => {
        vein.weight(10)
            .size(1)
            .yield(1)
            .material(GTMaterials.Magnetite, 100)
            .material(GTMaterials.Gold, 1)
            .dimensions('ad_astra:moon')
    })

    // Copper and Arsenic
        event.add('tfg:moon_copper', vein => {
        vein.weight(800)
            .size(1)
            .yield(1, 4)
            .material(GTMaterials.Chalcopyrite, 10)
            .material(GTMaterials.Zeolite, 4)
            .material(GTMaterials.Cassiterite, 3)
            .material(GTMaterials.Realgar, 2)
            .dimensions('ad_astra:moon')
    })
    
    // Certus Quartz
        event.add('tfg:moon_certus', vein => {
        vein.weight(10)
            .size(1)
            .yield(1, 2)
            .material(GTMaterials.CertusQuartz, 6)
            .material(GTMaterials.Barite, 2)
            .material(GTMaterials.Quartzite, 7)
            .dimensions('ad_astra:moon')
    })

        // Asbestos
        event.add('tfg:moon_asbestos', vein => {
        vein.weight(1000)
            .size(1)
            .yield(1, 10)
            .material(GTMaterials.Asbestos, 3)
            .dimensions('ad_astra:moon')
    })

        // Mica - Talc Silicon Aluminium Potassium Fluorine Caesium
        event.add('tfg:moon_mica', vein => {
        vein.weight(500)
            .size(1)
            .yield(1, 3)
            .material(GTMaterials.Mica, 55)
            .material(GTMaterials.Kyanite, 25)
            .material(GTMaterials.Pollucite, 15)
            .dimensions('ad_astra:moon')
    })

    // TODO: helium ore
}