// priority: 0

const registerTFCRecipes = (event) => {
    event.remove({ id: /tfc:quern\/poor.*/ }) 
    event.remove({ id: /tfc:quern\/normal.*/ }) 
    event.remove({ id: /tfc:quern\/rich.*/ }) 
    event.remove({ id: /tfc:heating\/ore.*/ })    
    event.remove({ id: /tfc:heating\/metal.*/ })
    event.remove({ id: /tfc:casting\/.*/ })
    event.remove({ id: /tfc:anvil\/.*/ })
    // event.remove({ id: /tfc:welding.*/ }) // todo
    
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

    registerAutoTFCHeatingRecipes(event)
    registerAutoTFCCastingRecipes(event)
    registerAutoTFCAnvilRecipes(event)

    // Black Steel Ingot
    addAnvilRecipe(event, 
        'tfc:recipes/anvil/tfg/high_carbon_black_steel',
        { item: "tfc:metal/ingot/high_carbon_black_steel" },
        { item: "gtceu:black_steel_ingot" },
        4,
        [ "hit_last", "hit_second_last", "hit_third_last" ]
    )

    // Blowpipe
    addAnvilRecipe(event, 
        'tfc:recipes/anvil/tfg/blowpipe',
        { tag: "forge:rods/brass" },
        { item: "tfc:blowpipe" },
        2,
        [ "draw_last", "draw_second_last", "hit_third_last" ]
    )

    // Blue Steel Bucket
    addAnvilRecipe(event, 
        'tfc:recipes/anvil/tfg/blue_steel_bucket',
        { tag: "forge:plates/blue_steel" },
        { item: "tfc:metal/bucket/blue_steel" },
        6,
        [ "bend_last", "bend_second_last", "bend_third_last" ]
    )

    // Blue Steel Ingot
    addAnvilRecipe(event, 
        'tfc:recipes/anvil/tfg/blue_steel_ingot',
        { item: "tfc:metal/ingot/high_carbon_blue_steel" },
        { item: "gtceu:blue_steel_ingot" },
        5,
        [ "hit_last", "hit_second_last", "hit_third_last" ]
    )

    // Brass Mechanisms
    addAnvilRecipe(event, 
        'tfc:recipes/anvil/tfg/brass_mechanisms',
        { tag: "forge:ingots/brass" },
        { item: "tfc:brass_mechanisms", count: 2 },
        2,
        [ "punch_last", "hit_second_last", "punch_third_last" ]
    )

    // High Carbon Steel Ingot
    addAnvilRecipe(event, 
        'tfc:recipes/anvil/tfg/high_carbon_steel_ingot',
        { item: "tfc:metal/ingot/pig_iron" },
        { item: "tfc:metal/ingot/high_carbon_steel" },
        3,
        [ "hit_last", "hit_second_last", "hit_third_last" ]
    )

    // Iron Door
    addAnvilRecipe(event, 
        'tfc:recipes/anvil/tfg/iron_door',
        { tag: "forge:plates/wrought_iron" },
        { item: "minecraft:iron_door" },
        3,
        [ "hit_last", "draw_not_last", "punch_not_last" ]
    )

    // Jar Lid
    addAnvilRecipe(event, 
        'tfc:recipes/anvil/tfg/jar_lid',
        { tag: "forge:ingots/tin" },
        { item: "tfc:jar_lid", count: 16 },
        1,
        [ "hit_last", "hit_second_last", "punch_third_last" ]
    )

    // Red Steel Bucket
    addAnvilRecipe(event, 
        'tfc:recipes/anvil/tfg/red_steel_bucket',
        { tag: "forge:plates/red_steel" }, 
        { item: "tfc:metal/bucket/red_steel" },
        6,
        [ "bend_last", "bend_second_last", "bend_third_last" ]
    )

    // High Carbon Red Steel
    addAnvilRecipe(event, 
        'tfc:recipes/anvil/tfg/high_carbon_red_steel',
        { item: "tfc:metal/ingot/high_carbon_red_steel" }, 
        { item: "gtceu:red_steel_ingot" },
        5,
        [ "hit_last", "hit_second_last", "hit_third_last" ]
    )

    // Refined Iron Bloom
    addAnvilRecipe(event,
        'tfc:recipes/anvil/tfg/refined_iron_bloom',
        { item: "tfc:raw_iron_bloom" }, 
        { item: "tfc:refined_iron_bloom" },
        2,
        [ "hit_last", "hit_second_last", "hit_third_last" ]
    )

    // High Carbon Steel
    addAnvilRecipe(event,
        'tfc:recipes/anvil/tfg/high_carbon_steel',
        { "item": "tfc:metal/ingot/high_carbon_steel" }, 
        { "item": "gtceu:steel_ingot" },
        3,
        [ "hit_last", "hit_second_last", "hit_third_last" ]
    )

    // Wrought Iron From Bloom
    addAnvilRecipe(event,
        'tfc:recipes/anvil/tfg/wrought_iron_from_bloom',
        { "item": "tfc:refined_iron_bloom" }, 
        { "item": "gtceu:wrought_iron_ingot" },
        2,
        [ "hit_last", "hit_second_last", "hit_third_last" ]
    )

    // Wrought Iron Grill
    addAnvilRecipe(event,
        'tfc:recipes/anvil/tfg/wrought_iron_grill',
        { "tag": "forge:plates/double/wrought_iron" }, 
        { "item": "tfc:wrought_iron_grill" },
        3,
        [ "draw_any", "punch_last", "punch_not_last" ]
    )

    // Gold Bell
    addCastingRecipe(event, 
        'tfc:recipes/casting/tfg/gold_bell',
        { item: "tfc:ceramic/bell_mold"},
        { ingredient: "gtceu:gold", amount: 144 },
        { item: "minecraft:bell" },
        1
    )

    // Brass Bell
    addCastingRecipe(event, 
        'tfc:recipes/casting/tfg/brass_bell',
        { item: "tfc:ceramic/bell_mold"},
        { ingredient: "gtceu:brass", amount: 144 },
        { item: "tfc:brass_bell" },
        1
    )

    // Bronze Bell
    addCastingRecipe(event, 
        'tfc:recipes/casting/tfg/bronze_bell',
        { item: "tfc:ceramic/bell_mold"},
        { ingredient: "gtceu:bronze", amount: 144 },
        { item: "tfc:bronze_bell" },
        1
    )

    // Fire Charge
    event.remove({ id: 'tfc:crafting/vanilla/fire_charge' })
    event.shapeless('3x minecraft:fire_charge', [
        '#forge:dusts/gunpowder',
        '#minecraft:coals',
        'tfc:firestarter'
    ])

    // 2x Coke Powder
    addQuernRecipe(event,
        'tfc:recipes/quern/tfg/coke_powder',
        { tag: "forge:gems/coke" },
        { item: "tfc:powder/coke", count: 2 }
    )

    // 4x Amethyst Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/amethyst_powder',
        { tag: "forge:raw_materials/amethyst" },
        { item: "tfc:powder/amethyst", count: 4 }
    )

    // 4x Diamond Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/diamond_powder',
        { tag: "forge:raw_materials/diamond" },
        { item: "tfc:powder/diamond", count: 4 }
    )

    // 4x Emerald Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/emerald_powder',
        { tag: "forge:raw_materials/emerald" },
        { item: "tfc:powder/emerald", count: 4 }
    )

    // 4x LapisLazuli Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/lapis_powder',
        { tag: "forge:raw_materials/lapis" },
        { item: "tfc:powder/lapis_lazuli", count: 4 }
    )

    // 4x Opal Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/opal_powder',
        { tag: "forge:raw_materials/opal" },
        { item: "tfc:powder/opal", count: 4 }
    )

    // 4x Pyrite Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/pyrite_powder',
        { tag: "forge:raw_materials/pyrite" },
        { item: "tfc:powder/pyrite", count: 4 }
    )
    
    // 4x Ruby Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/ruby_powder',
        { tag: "forge:raw_materials/ruby" },
        { item: "tfc:powder/ruby", count: 4 }
    )

    // 4x Sapphire Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/sapphire_powder',
        { tag: "forge:raw_materials/sapphire" },
        { item: "tfc:powder/sapphire", count: 4 }
    )

    // 4x Topaz Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/topaz_powder',
        { tag: "forge:raw_materials/topaz" },
        { item: "tfc:powder/topaz", count: 4 }
    )

    // 2x Gold Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/2x_gold_powder',
        { tag: "forge:poor_raw_materials/gold" },
        { item: "tfc:powder/native_gold", count: 2 }
    )

    // 4x Gold Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/4x_coke_powder',
        { tag: "forge:raw_materials/gold" },
        { item: "tfc:powder/native_gold", count: 4 }
    )

    // 6x Gold Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/6x_coke_powder',
        { tag: "forge:rich_raw_materials/gold" },
        { item: "tfc:powder/native_gold", count: 6 }
    )

    // 2x Silver Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/2x_silver_powder',
        { tag: "forge:poor_raw_materials/silver" },
        { item: "tfc:powder/native_silver", count: 2 }
    )

    // 4x Silver Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/4x_silver_powder',
        { tag: "forge:raw_materials/silver" },
        { item: "tfc:powder/native_silver", count: 4 }
    )

    // 6x Silver Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/6x_silver_powder',
        { tag: "forge:rich_raw_materials/silver" },
        { item: "tfc:powder/native_silver", count: 6 }
    )

    // 2x Cassiterite Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/2x_cassiterite_powder',
        { tag: "forge:poor_raw_materials/cassiterite" },
        { item: "tfc:powder/cassiterite", count: 2 }
    )

    // 4x Cassiterite Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/4x_cassiterite_powder',
        { tag: "forge:raw_materials/cassiterite" },
        { item: "tfc:powder/cassiterite", count: 4 }
    )

    // 6x Cassiterite Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/6x_cassiterite_powder',
        { tag: "forge:rich_raw_materials/cassiterite" },
        { item: "tfc:powder/cassiterite", count: 6 }
    )

    // 2x Bismuth Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/2x_bismuth_powder',
        { tag: "forge:poor_raw_materials/bismuth" },
        { item: "tfc:powder/bismuthinite", count: 2 }
    )

    // 4x Bismuth Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/4x_bismuth_powder',
        { tag: "forge:raw_materials/bismuth" },
        { item: "tfc:powder/bismuthinite", count: 4 }
    )

    // 6x Bismuth Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/6x_bismuth_powder',
        { tag: "forge:rich_raw_materials/bismuth" },
        { item: "tfc:powder/bismuthinite", count: 6 }
    )

    // 2x Garnierite Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/2x_garnierite_powder',
        { tag: "forge:poor_raw_materials/garnierite" },
        { item: "tfc:powder/garnierite", count: 1 }
    )

    // 4x Garnierite Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/4x_garnierite_powder',
        { tag: "forge:raw_materials/garnierite" },
        { item: "tfc:powder/garnierite", count: 3 }
    )

    // 6x Garnierite Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/6x_garnierite_powder',
        { tag: "forge:rich_raw_materials/garnierite" },
        { item: "tfc:powder/garnierite", count: 5 }
    )

    // 2x Nickel Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/2x_nickel_powder',
        { tag: "forge:poor_raw_materials/nickel" },
        { item: "tfc:powder/garnierite", count: 2 }
    )

    // 4x Nickel Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/4x_nickel_powder',
        { tag: "forge:raw_materials/nickel" },
        { item: "tfc:powder/garnierite", count: 4 }
    )

    // 6x Nickel Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/6x_nickel_powder',
        { tag: "forge:rich_raw_materials/nickel" },
        { item: "tfc:powder/garnierite", count: 6 }
    )

    // 2x Sphalerite Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/2x_sphalerite_powder',
        { tag: "forge:poor_raw_materials/sphalerite" },
        { item: "tfc:powder/sphalerite", count: 2 }
    )

    // 4x Sphalerite Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/4x_sphalerite_powder',
        { tag: "forge:raw_materials/sphalerite" },
        { item: "tfc:powder/sphalerite", count: 4 }
    )

    // 6x Sphalerite Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/6x_sphalerite_powder',
        { tag: "forge:rich_raw_materials/sphalerite" },
        { item: "tfc:powder/sphalerite", count: 6 }
    )

    // 2x Sulfur Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/2x_sulfur_powder',
        { tag: "forge:poor_raw_materials/sulfur" },
        { item: "tfc:powder/sulfur", count: 2 }
    )

    // 4x Sulfur Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/4x_sulfur_powder',
        { tag: "forge:raw_materials/sulfur" },
        { item: "tfc:powder/sulfur", count: 4 }
    )

    // 6x Sulfur Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/6x_sulfur_powder',
        { tag: "forge:rich_raw_materials/sulfur" },
        { item: "tfc:powder/sulfur", count: 6 }
    )

    // 2x Saltpeter Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/2x_saltpeter_powder',
        { tag: "forge:poor_raw_materials/saltpeter" },
        { item: "tfc:powder/saltpeter", count: 2 }
    )

    // 4x Saltpeter Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/4x_saltpeter_powder',
        { tag: "forge:raw_materials/saltpeter" },
        { item: "tfc:powder/saltpeter", count: 4 }
    )

    // 6x Saltpeter Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/6x_saltpeter_powder',
        { tag: "forge:rich_raw_materials/saltpeter" },
        { item: "tfc:powder/saltpeter", count: 6 }
    )

    // 2x Salt Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/2x_salt_powder',
        { tag: "forge:poor_raw_materials/salt" },
        { item: "tfc:powder/salt", count: 2 }
    )

    // 4x Salt Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/4x_salt_powder',
        { tag: "forge:raw_materials/salt" },
        { item: "tfc:powder/salt", count: 4 }
    )

    // 6x Salt Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/6x_salt_powder',
        { tag: "forge:rich_raw_materials/salt" },
        { item: "tfc:powder/salt", count: 6 }
    )

    // 2x Graphite Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/2x_graphite_powder',
        { tag: "forge:poor_raw_materials/graphite" },
        { item: "tfc:powder/graphite", count: 2 }
    )

    // 4x Graphite Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/4x_graphite_powder',
        { tag: "forge:raw_materials/graphite" },
        { item: "tfc:powder/graphite", count: 4 }
    )

    // 6x Graphite Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/6x_graphite_powder',
        { tag: "forge:rich_raw_materials/graphite" },
        { item: "tfc:powder/graphite", count: 6 }
    )

    // 2x Sylvite Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/2x_sylvite_powder',
        { tag: "forge:poor_raw_materials/sylvite" },
        { item: "tfc:powder/sylvite", count: 2 }
    )

    // 4x Sylvite Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/4x_sylvite_powder',
        { tag: "forge:raw_materials/sylvite" },
        { item: "tfc:powder/sylvite", count: 4 }
    )

    // 6x Sylvite Powder
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/6x_sylvite_powder',
        { tag: "forge:rich_raw_materials/sylvite" },
        { item: "tfc:powder/sylvite", count: 6 }
    )

    // 2x Flux
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/2x_borax_powder',
        { tag: "forge:poor_raw_materials/borax" },
        { item: "tfc:powder/flux", count: 2 }
    )

    // 4x Flux
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/4x_borax_powder',
        { tag: "forge:raw_materials/borax" },
        { item: "tfc:powder/flux", count: 4 }
    )

    // 6x Flux
    addQuernRecipe(event, 
        'tfc:recipes/quern/tfg/6x_borax_powder',
        { tag: "forge:rich_raw_materials/borax" },
        { item: "tfc:powder/flux", count: 6 }
    )
}

const registerAutoTFCHeatingRecipes = (event) => {
    for (const [tfcMetalName, metalSpecifications] of Object.entries(Metals)) {
        metalSpecifications.props.forEach(propertyName => {
            let jsonRecipePath = `tfc:recipes/heating/tfg/${tfcMetalName}_${propertyName}`
            let itemTypeSpecifications = ItemHeats[propertyName]

            if (itemTypeSpecifications.heat_capacity != null) {
                let ingredientInput = itemTypeSpecifications.input(tfcMetalName)
                
                let json

                if (typeof(itemTypeSpecifications.metal_amount) == "object")
                {
                    if (itemTypeSpecifications.metal_amount[tfcMetalName] != undefined)
                    {
                        addHeatingItemToFluidRecipe(
                            event, 
                            jsonRecipePath, 
                            ingredientInput, 
                            { fluid: metalSpecifications.fluidName, amount: itemTypeSpecifications.metal_amount[tfcMetalName] },
                            metalSpecifications.melt_temp,
                            (itemTypeSpecifications.hasDur != undefined) ? itemTypeSpecifications.hasDur : false
                        )
                    }
                    else
                    {
                        addHeatingItemToFluidRecipe(
                            event, 
                            jsonRecipePath, 
                            ingredientInput, 
                            { fluid: metalSpecifications.fluidName, amount: itemTypeSpecifications.metal_amount["default"] },
                            metalSpecifications.melt_temp,
                            (itemTypeSpecifications.hasDur != undefined) ? itemTypeSpecifications.hasDur : false
                        )
                    }
                }
                else {
                    addHeatingItemToFluidRecipe(
                        event, 
                        jsonRecipePath, 
                        ingredientInput, 
                        { fluid: metalSpecifications.fluidName, amount: itemTypeSpecifications.metal_amount },
                        metalSpecifications.melt_temp,
                        (itemTypeSpecifications.hasDur != undefined) ? itemTypeSpecifications.hasDur : false
                    )
                }
            }
        })
    }
}

const registerAutoTFCCastingRecipes = (event) => {
    for (const [tfcMetalName, metalSpecifications] of Object.entries(Metals)) {
        metalSpecifications.props.forEach(propertyName => {
            let property = ItemHeats[propertyName]
            
            if (property.hasMold != undefined)
            {
                let recipeId = `tfc:recipes/casting/tfg/${propertyName}_${tfcMetalName}`
                
                if (metalSpecifications.canBeUnmolded != undefined || propertyName == "ingot")
                {
                    addCastingRecipe(event, 
                        recipeId, 
                        { item: `tfc:ceramic/${propertyName}_mold` },  
                        { ingredient: metalSpecifications.fluidName, amount: property.metal_amount}, 
                        property.output(tfcMetalName),
                        (propertyName.includes("blade") || propertyName.includes("head") ? 1 : 0.01)
                    )

                    if (propertyName == "ingot") {
                    
                        let recipeId2 = `tfc:recipes/casting_tfg/fire_${propertyName}_${tfcMetalName}`
    
                        addCastingRecipe(event, 
                            recipeId2, 
                            { item: `tfc:ceramic/fire_${propertyName}_mold` },  
                            { ingredient: metalSpecifications.fluidName, amount: property.metal_amount}, 
                            property.output(tfcMetalName),
                            0.01
                        )
                    }
                }
            }
        })
    }
}

const registerAutoTFCAnvilRecipes = (event) => {
    for (const [tfcMetalName, metalSpecifications] of Object.entries(Metals)) {
        metalSpecifications.props.forEach(propertyName => {
            let property = ItemHeats[propertyName]

            if (property.rules != undefined)
            {
                let recipeId = `tfc:recipes/anvil/tfg/${propertyName}_${tfcMetalName}`

                let innerProp = ItemHeats[property.anvilFrom]
                let input = innerProp.input(tfcMetalName)
                let output = property.output(tfcMetalName)

                addAnvilRecipe(event, recipeId, input, output, metalSpecifications.tier, property.rules)
            }
        })
    }
}