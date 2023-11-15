// priority: 0

const registerTFCRecipes = (event) => {
    // event.remove({ id: /tfc:anvil.*/ })
    // event.remove({ id: /tfc:welding.*/ })
    // event.remove({ id: /tfc:casting.*/ })
    event.remove({ id: /tfc:heating\/metal.*/ })
    event.remove({ id: /tfc:heating\/ore.*/ })

    registerTFCHeatingRecipes(event)
    registerTFCCastingRecipes(event)

    event.remove({ id: 'tfc:crafting/vanilla/lapis_block' })

    event.remove({ id: 'tfc:quern/amethyst' })
    event.remove({ id: 'tfc:quern/diamond' })
    event.remove({ id: 'tfc:quern/lapis_lazuli' })
    event.remove({ id: 'tfc:quern/emerald' })
    event.remove({ id: 'tfc:quern/pyrite' })
    event.remove({ id: 'tfc:quern/opal' })
    event.remove({ id: 'tfc:quern/ruby' })
    event.remove({ id: 'tfc:quern/sapphire' })
    event.remove({ id: 'tfc:quern/topaz' })

    event.remove({ id: 'tfc:quern/graphite' })
    event.remove({ id: 'tfc:quern/sulfur' })
    event.remove({ id: 'tfc:quern/cinnabar' })
    event.remove({ id: 'tfc:quern/cryolite' })
    event.remove({ id: 'tfc:quern/saltpeter' })
    event.remove({ id: 'tfc:quern/borax' })
    event.remove({ id: 'tfc:quern/sylvite' })
    event.remove({ id: 'tfc:quern/salt' })

    event.remove({ id: 'tfc:quern/small_magnetite' })
    event.remove({ id: 'tfc:quern/small_tetrahedrite' })
    event.remove({ id: 'tfc:quern/small_malachite' })
    event.remove({ id: 'tfc:quern/small_limonite' })
    event.remove({ id: 'tfc:quern/small_hematite' })
    event.remove({ id: 'tfc:quern/small_native_copper' })
    event.remove({ id: 'tfc:quern/small_native_gold' })
    event.remove({ id: 'tfc:quern/small_native_silver' })
    event.remove({ id: 'tfc:quern/small_cassiterite' })
    event.remove({ id: 'tfc:quern/small_bismuthinite' })
    event.remove({ id: 'tfc:quern/small_garnierite' })
    event.remove({ id: 'tfc:quern/small_sphalerite' })

    // Fire Charge
    event.remove({ id: 'tfc:crafting/vanilla/fire_charge' })
    event.shapeless('3x minecraft:fire_charge', [
        '#forge:dusts/gunpowder',
        '#minecraft:coals',
        'tfc:firestarter'
    ])

    // 2x Coke Powder
    addQuernRecipe(event, 
        { tag: "forge:gems/coke" },
        { item: "tfc:powder/coke", count: 2 }
    )

    // 4x Amethyst Powder
    addQuernRecipe(event, 
        { tag: "forge:raw_materials/amethyst" },
        { item: "tfc:powder/amethyst", count: 4 }
    )

    // 4x Diamond Powder
    addQuernRecipe(event, 
        { tag: "forge:raw_materials/diamond" },
        { item: "tfc:powder/diamond", count: 4 }
    )

    // 4x Emerald Powder
    addQuernRecipe(event, 
        { tag: "forge:raw_materials/emerald" },
        { item: "tfc:powder/emerald", count: 4 }
    )

    // 4x LapisLazuli Powder
    addQuernRecipe(event, 
        { tag: "forge:raw_materials/lapis" },
        { item: "tfc:powder/lapis_lazuli", count: 4 }
    )

    // 4x Opal Powder
    addQuernRecipe(event, 
        { tag: "forge:raw_materials/opal" },
        { item: "tfc:powder/opal", count: 4 }
    )

    // 4x Pyrite Powder
    addQuernRecipe(event, 
        { tag: "forge:raw_materials/pyrite" },
        { item: "tfc:powder/pyrite", count: 4 }
    )
    
    // 4x Ruby Powder
    addQuernRecipe(event, 
        { tag: "forge:raw_materials/ruby" },
        { item: "tfc:powder/ruby", count: 4 }
    )

    // 4x Sapphire Powder
    addQuernRecipe(event, 
        { tag: "forge:raw_materials/sapphire" },
        { item: "tfc:powder/sapphire", count: 4 }
    )

    // 4x Topaz Powder
    addQuernRecipe(event, 
        { tag: "forge:raw_materials/topaz" },
        { item: "tfc:powder/topaz", count: 4 }
    )

    // 2x Gold Powder
    addQuernRecipe(event, 
        { tag: "forge:poor_raw_materials/gold" },
        { item: "tfc:powder/native_gold", count: 2 }
    )

    // 4x Gold Powder
    addQuernRecipe(event, 
        { tag: "forge:raw_materials/gold" },
        { item: "tfc:powder/native_gold", count: 4 }
    )

    // 6x Gold Powder
    addQuernRecipe(event, 
        { tag: "forge:rich_raw_materials/gold" },
        { item: "tfc:powder/native_gold", count: 6 }
    )

    // 2x Silver Powder
    addQuernRecipe(event, 
        { tag: "forge:poor_raw_materials/silver" },
        { item: "tfc:powder/native_silver", count: 2 }
    )

    // 4x Silver Powder
    addQuernRecipe(event, 
        { tag: "forge:raw_materials/silver" },
        { item: "tfc:powder/native_silver", count: 4 }
    )

    // 6x Silver Powder
    addQuernRecipe(event, 
        { tag: "forge:rich_raw_materials/silver" },
        { item: "tfc:powder/native_silver", count: 6 }
    )

    // 2x Cassiterite Powder
    addQuernRecipe(event, 
        { tag: "forge:poor_raw_materials/cassiterite" },
        { item: "tfc:powder/cassiterite", count: 2 }
    )

    // 4x Cassiterite Powder
    addQuernRecipe(event, 
        { tag: "forge:raw_materials/cassiterite" },
        { item: "tfc:powder/cassiterite", count: 4 }
    )

    // 6x Cassiterite Powder
    addQuernRecipe(event, 
        { tag: "forge:rich_raw_materials/cassiterite" },
        { item: "tfc:powder/cassiterite", count: 6 }
    )

    // 2x Bismuth Powder
    addQuernRecipe(event, 
        { tag: "forge:poor_raw_materials/bismuth" },
        { item: "tfc:powder/bismuthinite", count: 2 }
    )

    // 4x Bismuth Powder
    addQuernRecipe(event, 
        { tag: "forge:raw_materials/bismuth" },
        { item: "tfc:powder/bismuthinite", count: 4 }
    )

    // 6x Bismuth Powder
    addQuernRecipe(event, 
        { tag: "forge:rich_raw_materials/bismuth" },
        { item: "tfc:powder/bismuthinite", count: 6 }
    )

    // 2x Garnierite Powder
    addQuernRecipe(event, 
        { tag: "forge:poor_raw_materials/garnierite" },
        { item: "tfc:powder/garnierite", count: 1 }
    )

    // 4x Garnierite Powder
    addQuernRecipe(event, 
        { tag: "forge:raw_materials/garnierite" },
        { item: "tfc:powder/garnierite", count: 3 }
    )

    // 6x Garnierite Powder
    addQuernRecipe(event, 
        { tag: "forge:rich_raw_materials/garnierite" },
        { item: "tfc:powder/garnierite", count: 5 }
    )

    // 2x Nickel Powder
    addQuernRecipe(event, 
        { tag: "forge:poor_raw_materials/nickel" },
        { item: "tfc:powder/garnierite", count: 2 }
    )

    // 4x Nickel Powder
    addQuernRecipe(event, 
        { tag: "forge:raw_materials/nickel" },
        { item: "tfc:powder/garnierite", count: 4 }
    )

    // 6x Nickel Powder
    addQuernRecipe(event, 
        { tag: "forge:rich_raw_materials/nickel" },
        { item: "tfc:powder/garnierite", count: 6 }
    )

    // 2x Sphalerite Powder
    addQuernRecipe(event, 
        { tag: "forge:poor_raw_materials/sphalerite" },
        { item: "tfc:powder/sphalerite", count: 2 }
    )

    // 4x Sphalerite Powder
    addQuernRecipe(event, 
        { tag: "forge:raw_materials/sphalerite" },
        { item: "tfc:powder/sphalerite", count: 4 }
    )

    // 6x Sphalerite Powder
    addQuernRecipe(event, 
        { tag: "forge:rich_raw_materials/sphalerite" },
        { item: "tfc:powder/sphalerite", count: 6 }
    )

    // 2x Sulfur Powder
    addQuernRecipe(event, 
        { tag: "forge:poor_raw_materials/sulfur" },
        { item: "tfc:powder/sulfur", count: 2 }
    )

    // 4x Sulfur Powder
    addQuernRecipe(event, 
        { tag: "forge:raw_materials/sulfur" },
        { item: "tfc:powder/sulfur", count: 4 }
    )

    // 6x Sulfur Powder
    addQuernRecipe(event, 
        { tag: "forge:rich_raw_materials/sulfur" },
        { item: "tfc:powder/sulfur", count: 6 }
    )

    // 2x Saltpeter Powder
    addQuernRecipe(event, 
        { tag: "forge:poor_raw_materials/saltpeter" },
        { item: "tfc:powder/saltpeter", count: 2 }
    )

    // 4x Saltpeter Powder
    addQuernRecipe(event, 
        { tag: "forge:raw_materials/saltpeter" },
        { item: "tfc:powder/saltpeter", count: 4 }
    )

    // 6x Saltpeter Powder
    addQuernRecipe(event, 
        { tag: "forge:rich_raw_materials/saltpeter" },
        { item: "tfc:powder/saltpeter", count: 6 }
    )

    // 2x Salt Powder
    addQuernRecipe(event, 
        { tag: "forge:poor_raw_materials/salt" },
        { item: "tfc:powder/salt", count: 2 }
    )

    // 4x Salt Powder
    addQuernRecipe(event, 
        { tag: "forge:raw_materials/salt" },
        { item: "tfc:powder/salt", count: 4 }
    )

    // 6x Salt Powder
    addQuernRecipe(event, 
        { tag: "forge:rich_raw_materials/salt" },
        { item: "tfc:powder/salt", count: 6 }
    )

    // 2x Graphite Powder
    addQuernRecipe(event, 
        { tag: "forge:poor_raw_materials/graphite" },
        { item: "tfc:powder/graphite", count: 2 }
    )

    // 4x Graphite Powder
    addQuernRecipe(event, 
        { tag: "forge:raw_materials/graphite" },
        { item: "tfc:powder/graphite", count: 4 }
    )

    // 6x Graphite Powder
    addQuernRecipe(event, 
        { tag: "forge:rich_raw_materials/graphite" },
        { item: "tfc:powder/graphite", count: 6 }
    )

    // 2x Sylvite Powder
    addQuernRecipe(event, 
        { tag: "forge:poor_raw_materials/sylvite" },
        { item: "tfc:powder/sylvite", count: 2 }
    )

    // 4x Sylvite Powder
    addQuernRecipe(event, 
        { tag: "forge:raw_materials/sylvite" },
        { item: "tfc:powder/sylvite", count: 4 }
    )

    // 6x Sylvite Powder
    addQuernRecipe(event, 
        { tag: "forge:rich_raw_materials/sylvite" },
        { item: "tfc:powder/sylvite", count: 6 }
    )

    // 2x Flux
    addQuernRecipe(event, 
        { tag: "forge:poor_raw_materials/borax" },
        { item: "tfc:powder/flux", count: 2 }
    )

    // 4x Flux
    addQuernRecipe(event, 
        { tag: "forge:raw_materials/borax" },
        { item: "tfc:powder/flux", count: 4 }
    )

    // 6x Flux
    addQuernRecipe(event, 
        { tag: "forge:rich_raw_materials/borax" },
        { item: "tfc:powder/flux", count: 6 }
    )
}

const registerTFCHeatingRecipes = (event) => {
    for (const [tfcMetalName, metalSpecifications] of Object.entries(Metals)) {
        metalSpecifications.props.forEach(propertyName => {
            let jsonRecipePath = `tfc:recipes/metal/${tfcMetalName}_${propertyName}`
            let itemTypeSpecifications = ItemHeats[propertyName]

            if (itemTypeSpecifications.heat_capacity != null) {
                let ingredientInput = itemTypeSpecifications.input(tfcMetalName)
                
                let json

                if (typeof(itemTypeSpecifications.metal_amount) == "object")
                {
                    if (itemTypeSpecifications.metal_amount[tfcMetalName] != undefined)
                    {
                        json = {
                            id: jsonRecipePath,
                            type: "tfc:heating",
                            ingredient: ingredientInput,
                            result_fluid: {
                                fluid: metalSpecifications.fluidName,
                                amount: itemTypeSpecifications.metal_amount[tfcMetalName]
                            },
                            temperature: metalSpecifications.melt_temp,
                            use_durability: (itemTypeSpecifications.hasDur != undefined) ? itemTypeSpecifications.hasDur : false
                        }
                    }
                    else
                    {
                        json = {
                            id: jsonRecipePath,
                            type: "tfc:heating",
                            ingredient: ingredientInput,
                            result_fluid: {
                                fluid: metalSpecifications.fluidName,
                                amount: itemTypeSpecifications.metal_amount["default"]
                            },
                            temperature: metalSpecifications.melt_temp,
                            use_durability: (itemTypeSpecifications.hasDur != undefined) ? itemTypeSpecifications.hasDur : false
                        }
                    }
                }
                else {
                    json = {
                        id: jsonRecipePath,
                        type: "tfc:heating",
                        ingredient: ingredientInput,
                        result_fluid: {
                          fluid: metalSpecifications.fluidName,
                          amount: itemTypeSpecifications.metal_amount
                        },
                        temperature: metalSpecifications.melt_temp,
                        use_durability: (itemTypeSpecifications.hasDur != undefined) ? itemTypeSpecifications.hasDur : false
                    }

                    
                }

                event.custom(json)
            }
            
        })
    }


}

const registerTFCCastingRecipes = (event) => {

}