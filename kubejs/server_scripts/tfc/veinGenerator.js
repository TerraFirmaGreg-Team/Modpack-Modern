// priority: 0

const addOreVeins = (event) => {
    const veinsJson = {
        replace: true,
        values: []
    }
    
    global.veins.forEach(vein => {
        
        const placedFeatureVeinJson = {
            feature: `tfc:vein/${vein.random_name}`,
            placement: []
        }

        const configuredFeatureVeinJson = {
            type: vein.veinType,
            config: {
                rarity: vein.rarity,
                min_y: {
                  absolute: vein.minY
                },
                max_y: {
                  absolute: vein.maxY
                },
                size: vein.size,
                density: vein.density,
                blocks: [],
                random_name: vein.random_name,

                // may be empty
                indicator: vein.indicator,
                biomes: vein.biomes, // not work (maybe tfc bug)
                
                // disc vein stuff
                height: vein.height,

                // pipe vein stuff
                radius: vein.radius,
                minSkew: vein.minSkew,
                maxSkew: vein.maxSkew,
                minSlant: vein.minSlant,
                maxSlant: vein.maxSlant
            }
        }
        
        vein.stoneTypes.forEach(stoneType => {
            const someJson = {
                replace: [
                    `tfc:rock/raw/${stoneType}`
                ],
                with: []
            }

            vein.ores.forEach(ore => {
                someJson.with.push({
                    weight: ore.weight,
                    block: `gtceu:tfc_${stoneType}_${ore.material}_ore`
                })
            })

            configuredFeatureVeinJson.config.blocks.push(someJson);
        })

        veinsJson.values.push(`tfc:vein/${vein.random_name}`)
        console.log(configuredFeatureVeinJson)
        event.addJson(`tfc:worldgen/configured_feature/vein/${vein.random_name}`, configuredFeatureVeinJson)
        event.addJson(`tfc:worldgen/placed_feature/vein/${vein.random_name}`, placedFeatureVeinJson)
    })

    event.addJson(`tfc:tags/worldgen/placed_feature/in_biome/veins`, veinsJson)
}