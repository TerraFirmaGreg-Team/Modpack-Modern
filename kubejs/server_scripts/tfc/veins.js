// priority: 0

ServerEvents.highPriorityData(event => {
    
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
                indicator: vein.indicator,
                random_name: vein.random_name
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

        event.addJson(`tfc:worldgen/configured_feature/vein/${vein.random_name}`, configuredFeatureVeinJson)
        event.addJson(`tfc:worldgen/placed_feature/vein/${vein.random_name}`, placedFeatureVeinJson)
    })

    event.addJson(`tfc:tags/worldgen/placed_feature/in_biome/veins`, veinsJson)
})