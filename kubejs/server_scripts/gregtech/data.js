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

    event.add('tfg:bedrock_olivine_vein', vein => {
        
        vein.dimensions('ad_astra:moon')
        vein.material(GTMaterials.Olivine, 100)
        vein.weight(1000)
        vein.yield(30)
        vein.depletedYield(1)
        vein.depletionChance(2)
        vein.depletionAmount(1)
    })

    event.add('tfg:bedrock_magnetite_vein', vein => {
        
        vein.dimensions('ad_astra:moon')
        vein.material(GTMaterials.Magnetite, 100)
        vein.weight(500)
        vein.yield(20)
        vein.depletedYield(1)
        vein.depletionChance(2)
        vein.depletionAmount(1)
    })

    event.add('tfg:bedrock_asbestos_vein', vein => {
        
        vein.dimensions('ad_astra:moon')
        vein.material(GTMaterials.Asbestos, 100)
        vein.weight(800)
        vein.yield(20)
        vein.depletedYield(1)
        vein.depletionChance(2)
        vein.depletionAmount(1)
    })

    // TODO: helium ore
}