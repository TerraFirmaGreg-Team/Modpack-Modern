// priority: 0

const registerTFCRecipes = (event) => {
    // - Удаление рецептов рецептов, которые были удалены
    
    event.remove({ id: /tfc:quern\/poor.*/ }) 
    event.remove({ id: /tfc:quern\/normal.*/ }) 
    event.remove({ id: /tfc:quern\/rich.*/ }) 
    event.remove({ id: /tfc:heating\/ore.*/ })    
    event.remove({ id: /tfc:heating\/metal.*/ })
    event.remove({ id: /tfc:casting\/.*/ })
    event.remove({ id: /tfc:anvil\/.*/ })
    // event.remove({ id: /tfc:welding.*/ }) // todo
    
    // Удаляет все рецепты металлических блоков 
    // с полублоками и ступеньками
    event.remove({ id: /tfc:crafting\/metal\/block\/.*/ })

    event.remove({ id: 'tfc:quern/cryolite' })

    // - Регистрация автоматических рецептов

    registerAutoTFCHeatingRecipes(event)
    registerAutoTFCCastingRecipes(event)
    registerAutoTFCAnvilRecipes(event)

    // - Дублирование рецептов, которые были удалены

    // Gold Bell
    addCastingRecipe(event, 
        'tfg:recipes/casting/gold_bell',
        { item: "tfc:ceramic/bell_mold"},
        { ingredient: "gtceu:gold", amount: 144 },
        { item: "minecraft:bell" },
        1
    )

    // Brass Bell
    addCastingRecipe(event, 
        'tfg:recipes/casting/brass_bell',
        { item: "tfc:ceramic/bell_mold"},
        { ingredient: "gtceu:brass", amount: 144 },
        { item: "tfc:brass_bell" },
        1
    )

    // Bronze Bell
    addCastingRecipe(event, 
        'tfg:recipes/casting/bronze_bell',
        { item: "tfc:ceramic/bell_mold"},
        { ingredient: "gtceu:bronze", amount: 144 },
        { item: "tfc:bronze_bell" },
        1
    )

    // Black Steel Ingot
    addAnvilRecipe(event, 
        'tfg:recipes/anvil/high_carbon_black_steel',
        { item: "tfc:metal/ingot/high_carbon_black_steel" },
        { item: "gtceu:black_steel_ingot" },
        4,
        [ "hit_last", "hit_second_last", "hit_third_last" ]
    )

    // Blowpipe
    addAnvilRecipe(event, 
        'tfg:recipes/anvil/blowpipe',
        { tag: "forge:rods/brass" },
        { item: "tfc:blowpipe" },
        2,
        [ "draw_last", "draw_second_last", "hit_third_last" ]
    )

    // Blue Steel Ingot
    addAnvilRecipe(event, 
        'tfg:recipes/anvil/blue_steel_ingot',
        { item: "tfc:metal/ingot/high_carbon_blue_steel" },
        { item: "gtceu:blue_steel_ingot" },
        5,
        [ "hit_last", "hit_second_last", "hit_third_last" ]
    )

    // Brass Mechanisms
    addAnvilRecipe(event, 
        'tfg:recipes/anvil/brass_mechanisms',
        { tag: "forge:ingots/brass" },
        { item: "tfc:brass_mechanisms", count: 2 },
        2,
        [ "punch_last", "hit_second_last", "punch_third_last" ]
    )

    // High Carbon Steel Ingot
    addAnvilRecipe(event, 
        'tfg:recipes/anvil/high_carbon_steel_ingot',
        { item: "tfc:metal/ingot/pig_iron" },
        { item: "tfc:metal/ingot/high_carbon_steel" },
        3,
        [ "hit_last", "hit_second_last", "hit_third_last" ]
    )

    // Iron Door
    addAnvilRecipe(event, 
        'tfg:recipes/anvil/iron_door',
        { tag: "forge:plates/wrought_iron" },
        { item: "minecraft:iron_door" },
        3,
        [ "hit_last", "draw_not_last", "punch_not_last" ]
    )

    // Jar Lid
    addAnvilRecipe(event, 
        'tfg:recipes/anvil/jar_lid',
        { tag: "forge:ingots/tin" },
        { item: "tfc:jar_lid", count: 16 },
        1,
        [ "hit_last", "hit_second_last", "punch_third_last" ]
    )

    // High Carbon Red Steel
    addAnvilRecipe(event, 
        'tfg:recipes/anvil/high_carbon_red_steel',
        { item: "tfc:metal/ingot/high_carbon_red_steel" }, 
        { item: "gtceu:red_steel_ingot" },
        5,
        [ "hit_last", "hit_second_last", "hit_third_last" ]
    )

    // Refined Iron Bloom
    addAnvilRecipe(event,
        'tfg:recipes/anvil/refined_iron_bloom',
        { item: "tfc:raw_iron_bloom" }, 
        { item: "tfc:refined_iron_bloom" },
        2,
        [ "hit_last", "hit_second_last", "hit_third_last" ]
    )

    // High Carbon Steel
    addAnvilRecipe(event,
        'tfg:recipes/anvil/high_carbon_steel',
        { "item": "tfc:metal/ingot/high_carbon_steel" }, 
        { "item": "gtceu:steel_ingot" },
        3,
        [ "hit_last", "hit_second_last", "hit_third_last" ]
    )

    // Wrought Iron From Bloom
    addAnvilRecipe(event,
        'tfg:recipes/anvil/wrought_iron_from_bloom',
        { "item": "tfc:refined_iron_bloom" }, 
        { "item": "gtceu:wrought_iron_ingot" },
        2,
        [ "hit_last", "hit_second_last", "hit_third_last" ]
    )

    // Wrought Iron Grill
    addAnvilRecipe(event,
        'tfg:recipes/anvil/wrought_iron_grill',
        { "tag": "forge:plates/double/wrought_iron" }, 
        { "item": "tfc:wrought_iron_grill" },
        3,
        [ "draw_any", "punch_last", "punch_not_last" ]
    )

    // - Рецепты порошков TFC

    // 2x Coke Powder
    addQuernRecipe(event,
        'tfg:recipes/quern/coke_powder',
        { tag: "forge:gems/coke" },
        { item: "tfc:powder/coke", count: 2 }
    )

    // 4x Amethyst Powder
    addQuernRecipe(event, 
        'tfc:quern/amethyst',
        { tag: "forge:raw_materials/amethyst" },
        { item: "tfc:powder/amethyst", count: 4 }
    )

    // 4x Diamond Powder
    addQuernRecipe(event, 
        'tfc:quern/diamond',
        { tag: "forge:raw_materials/diamond" },
        { item: "tfc:powder/diamond", count: 4 }
    )

    // 4x Emerald Powder
    addQuernRecipe(event, 
        'tfc:quern/emerald',
        { tag: "forge:raw_materials/emerald" },
        { item: "tfc:powder/emerald", count: 4 }
    )

    // 4x LapisLazuli Powder
    addQuernRecipe(event, 
        'tfc:quern/lapis_lazuli',
        { tag: "forge:raw_materials/lapis" },
        { item: "tfc:powder/lapis_lazuli", count: 4 }
    )

    // 4x Opal Powder
    addQuernRecipe(event, 
        'tfc:quern/opal',
        { tag: "forge:raw_materials/opal" },
        { item: "tfc:powder/opal", count: 4 }
    )

    // 4x Pyrite Powder
    addQuernRecipe(event, 
        'tfc:quern/pyrite',
        { tag: "forge:raw_materials/pyrite" },
        { item: "tfc:powder/pyrite", count: 4 }
    )
    
    // 4x Ruby Powder
    addQuernRecipe(event, 
        'tfc:quern/ruby',
        { tag: "forge:raw_materials/ruby" },
        { item: "tfc:powder/ruby", count: 4 }
    )

    // 4x Sapphire Powder
    addQuernRecipe(event, 
        'tfc:quern/sapphire',
        { tag: "forge:raw_materials/sapphire" },
        { item: "tfc:powder/sapphire", count: 4 }
    )

    // 4x Topaz Powder
    addQuernRecipe(event, 
        'tfc:quern/topaz',
        { tag: "forge:raw_materials/topaz" },
        { item: "tfc:powder/topaz", count: 4 }
    )

    // Gold Powder
    addQuernRecipe(event, 
        'tfc:quern/small_native_gold',
        { tag: "forge:poor_raw_materials/gold" },
        { item: "tfc:powder/native_gold", count: 2 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_native_gold_2',
        { tag: "forge:raw_materials/gold" },
        { item: "tfc:powder/native_gold", count: 4 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_native_gold_3',
        { tag: "forge:rich_raw_materials/gold" },
        { item: "tfc:powder/native_gold", count: 6 }
    )

    // Silver Powder
    addQuernRecipe(event, 
        'tfc:quern/small_native_silver',
        { tag: "forge:poor_raw_materials/silver" },
        { item: "tfc:powder/native_silver", count: 2 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_native_silver_2',
        { tag: "forge:raw_materials/silver" },
        { item: "tfc:powder/native_silver", count: 4 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_native_silver_3',
        { tag: "forge:rich_raw_materials/silver" },
        { item: "tfc:powder/native_silver", count: 6 }
    )

    // Cassiterite Powder
    addQuernRecipe(event, 
        'tfc:quern/small_cassiterite',
        { tag: "forge:poor_raw_materials/cassiterite" },
        { item: "tfc:powder/cassiterite", count: 2 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_cassiterite_2',
        { tag: "forge:raw_materials/cassiterite" },
        { item: "tfc:powder/cassiterite", count: 4 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_cassiterite_3',
        { tag: "forge:rich_raw_materials/cassiterite" },
        { item: "tfc:powder/cassiterite", count: 6 }
    )

    // Bismuth Powder
    addQuernRecipe(event, 
        'tfc:quern/small_bismuthinite',
        { tag: "forge:poor_raw_materials/bismuth" },
        { item: "tfc:powder/bismuthinite", count: 2 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_bismuthinite_2',
        { tag: "forge:raw_materials/bismuth" },
        { item: "tfc:powder/bismuthinite", count: 4 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_bismuthinite_3',
        { tag: "forge:rich_raw_materials/bismuth" },
        { item: "tfc:powder/bismuthinite", count: 6 }
    )

    // Garnierite Powder
    addQuernRecipe(event, 
        'tfc:quern/small_garnierite',
        { tag: "forge:poor_raw_materials/garnierite" },
        { item: "tfc:powder/garnierite", count: 1 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_garnierite_2',
        { tag: "forge:raw_materials/garnierite" },
        { item: "tfc:powder/garnierite", count: 3 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_garnierite_3',
        { tag: "forge:rich_raw_materials/garnierite" },
        { item: "tfc:powder/garnierite", count: 5 }
    )

    // Nickel Powder
    addQuernRecipe(event, 
        'tfg:recipes/quern/small_nickel_1',
        { tag: "forge:poor_raw_materials/nickel" },
        { item: "tfc:powder/garnierite", count: 2 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_nickel_2',
        { tag: "forge:raw_materials/nickel" },
        { item: "tfc:powder/garnierite", count: 4 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_nickel_3',
        { tag: "forge:rich_raw_materials/nickel" },
        { item: "tfc:powder/garnierite", count: 6 }
    )

    // Sphalerite Powder
    addQuernRecipe(event, 
        'tfc:quern/small_sphalerite',
        { tag: "forge:poor_raw_materials/sphalerite" },
        { item: "tfc:powder/sphalerite", count: 2 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_sphalerite_2',
        { tag: "forge:raw_materials/sphalerite" },
        { item: "tfc:powder/sphalerite", count: 4 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_sphalerite_3',
        { tag: "forge:rich_raw_materials/sphalerite" },
        { item: "tfc:powder/sphalerite", count: 6 }
    )

    // Magnetite Powder
    addQuernRecipe(event, 
        'tfc:quern/small_magnetite',
        { tag: "forge:poor_raw_materials/magnetite" },
        { item: "tfc:powder/magnetite", count: 2 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_magnetite_2',
        { tag: "forge:raw_materials/magnetite" },
        { item: "tfc:powder/magnetite", count: 4 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_magnetite_3',
        { tag: "forge:rich_raw_materials/magnetite" },
        { item: "tfc:powder/magnetite", count: 6 }
    )

    // Tetrahedrite Powder
    addQuernRecipe(event, 
        'tfc:quern/small_tetrahedrite',
        { tag: "forge:poor_raw_materials/tetrahedrite" },
        { item: "tfc:powder/tetrahedrite", count: 2 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_tetrahedrite_2',
        { tag: "forge:raw_materials/tetrahedrite" },
        { item: "tfc:powder/tetrahedrite", count: 4 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_tetrahedrite_3',
        { tag: "forge:rich_raw_materials/tetrahedrite" },
        { item: "tfc:powder/tetrahedrite", count: 6 }
    )

    // Malachite Powder
    addQuernRecipe(event, 
        'tfc:quern/small_malachite',
        { tag: "forge:poor_raw_materials/malachite" },
        { item: "tfc:powder/malachite", count: 2 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_malachite_2',
        { tag: "forge:raw_materials/malachite" },
        { item: "tfc:powder/malachite", count: 4 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_malachite_3',
        { tag: "forge:rich_raw_materials/malachite" },
        { item: "tfc:powder/malachite", count: 6 }
    )
    
    // Limonite Powder
    addQuernRecipe(event, 
        'tfc:quern/small_limonite',
        { tag: "forge:poor_raw_materials/yellow_limonite" },
        { item: "tfc:powder/limonite", count: 2 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_limonite_2',
        { tag: "forge:raw_materials/yellow_limonite" },
        { item: "tfc:powder/limonite", count: 4 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_limonite_3',
        { tag: "forge:rich_raw_materials/yellow_limonite" },
        { item: "tfc:powder/limonite", count: 6 }
    )
    
    // Hematite Powder
    addQuernRecipe(event, 
        'tfc:quern/small_hematite',
        { tag: "forge:poor_raw_materials/hematite" },
        { item: "tfc:powder/hematite", count: 2 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_hematite_2',
        { tag: "forge:raw_materials/hematite" },
        { item: "tfc:powder/hematite", count: 4 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_hematite_3',
        { tag: "forge:rich_raw_materials/hematite" },
        { item: "tfc:powder/hematite", count: 6 }
    )

    // Copper Powder
    addQuernRecipe(event, 
        'tfc:quern/small_native_copper',
        { tag: "forge:poor_raw_materials/copper" },
        { item: "tfc:powder/native_copper", count: 2 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_native_copper_2',
        { tag: "forge:raw_materials/copper" },
        { item: "tfc:powder/native_copper", count: 4 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/small_native_copper_3',
        { tag: "forge:rich_raw_materials/copper" },
        { item: "tfc:powder/native_copper", count: 6 }
    )

    // Cinnabar Powder
    addQuernRecipe(event, 
        'tfc:quern/cinnabar',
        { tag: "forge:poor_raw_materials/cinnabar" },
        { item: 'minecraft:redstone', count: 2 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/cinnabar_2',
        { tag: "forge:raw_materials/cinnabar" },
        { item: 'minecraft:redstone', count: 4 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/cinnabar_3',
        { tag: "forge:rich_raw_materials/cinnabar" },
        { item: 'minecraft:redstone', count: 6 }
    )
    
    // Sulfur Powder
    addQuernRecipe(event, 
        'tfc:quern/sulfur',
        { tag: "forge:poor_raw_materials/sulfur" },
        { item: "tfc:powder/sulfur", count: 2 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/sulfur_2',
        { tag: "forge:raw_materials/sulfur" },
        { item: "tfc:powder/sulfur", count: 4 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/sulfur_3',
        { tag: "forge:rich_raw_materials/sulfur" },
        { item: "tfc:powder/sulfur", count: 6 }
    )

    // Saltpeter Powder
    addQuernRecipe(event, 
        'tfc:quern/saltpeter',
        { tag: "forge:poor_raw_materials/saltpeter" },
        { item: "tfc:powder/saltpeter", count: 2 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/saltpeter_2',
        { tag: "forge:raw_materials/saltpeter" },
        { item: "tfc:powder/saltpeter", count: 4 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/saltpeter_3',
        { tag: "forge:rich_raw_materials/saltpeter" },
        { item: "tfc:powder/saltpeter", count: 6 }
    )

    // Salt Powder
    addQuernRecipe(event, 
        'tfc:quern/salt',
        { tag: "forge:poor_raw_materials/salt" },
        { item: "tfc:powder/salt", count: 2 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/salt_2',
        { tag: "forge:raw_materials/salt" },
        { item: "tfc:powder/salt", count: 4 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/salt_3',
        { tag: "forge:rich_raw_materials/salt" },
        { item: "tfc:powder/salt", count: 6 }
    )

    // Graphite Powder
    addQuernRecipe(event, 
        'tfc:quern/graphite',
        { tag: "forge:poor_raw_materials/graphite" },
        { item: "tfc:powder/graphite", count: 2 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/graphite_2',
        { tag: "forge:raw_materials/graphite" },
        { item: "tfc:powder/graphite", count: 4 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/graphite_3',
        { tag: "forge:rich_raw_materials/graphite" },
        { item: "tfc:powder/graphite", count: 6 }
    )

    // Sylvite Powder
    addQuernRecipe(event, 
        'tfc:quern/sylvite',
        { tag: "forge:poor_raw_materials/sylvite" },
        { item: "tfc:powder/sylvite", count: 2 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/sylvite_2',
        { tag: "forge:raw_materials/sylvite" },
        { item: "tfc:powder/sylvite", count: 4 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/sylvite_3',
        { tag: "forge:rich_raw_materials/sylvite" },
        { item: "tfc:powder/sylvite", count: 6 }
    )

    // Flux
    addQuernRecipe(event, 
        'tfc:quern/borax',
        { tag: "forge:poor_raw_materials/borax" },
        { item: "tfc:powder/flux", count: 2 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/borax_2',
        { tag: "forge:raw_materials/borax" },
        { item: "tfc:powder/flux", count: 4 }
    )

    addQuernRecipe(event, 
        'tfg:recipes/quern/borax_3',
        { tag: "forge:rich_raw_materials/borax" },
        { item: "tfc:powder/flux", count: 6 }
    )

    // Pumpkin -> Pumpkin Slices
    event.shaped('5x tfc:food/pumpkin_chunks', [
        'AB' 
    ], {
        A: '#tfc:knives',
        B: 'tfc:pumpkin'  
    }).id('tfg:recipes/crafting/pumpkin_chunks_knife')

    // Blast Furnace
    event.shaped('tfc:blast_furnace', [
        'AAA',
        'ABA',
        'AAA' 
    ], {
        A: '#forge:sheets/wrought_iron',
        B: 'tfc:crucible'  
    }).id('tfc:crafting/blast_furnace')

    // Декрафт деревянной херни в деревянную пыль
    Object.entries(global.TFC_WOOD_ITEM_TYPES_TO_WOOD_DUST).forEach(pair => {
        
        let typeName = pair[1].name
        let typeOutput = pair[1].output
        
        event.recipes.gtceu.macerator(`tfg/macerate_${typeName}`)             
            .itemInputs(pair[0])
            .itemOutputs(typeOutput)
            .duration(600)
            .EUt(2)
    })

    // Copper Anvil из Слитков
    event.recipes.gtceu.alloy_smelter('ingots_to_copper_anvil')             
        .itemInputs('14x #forge:ingots/copper')
        .notConsumable('gtceu:anvil_casting_mold')
        .itemOutputs('tfc:metal/anvil/copper')
        .duration(1680)
        .EUt(16)

    // Copper Anvil в отвердителе
    event.recipes.gtceu.fluid_solidifier('solidify_copper_anvil')             
        .inputFluids(Fluid.of('gtceu:copper', 2016))
        .notConsumable('gtceu:anvil_casting_mold')
        .itemOutputs('tfc:metal/anvil/copper')
        .duration(1680)
        .EUt(16)
    
    // BismuthBronze Anvil из Слитков
    event.recipes.gtceu.alloy_smelter('ingots_to_bismuth_bronze_anvil')             
        .itemInputs('14x #forge:ingots/bismuth_bronze')
        .notConsumable('gtceu:anvil_casting_mold')
        .itemOutputs('tfc:metal/anvil/bismuth_bronze')
        .duration(1680)
        .EUt(16)

    // BismuthBronze Anvil в отвердителе
    event.recipes.gtceu.fluid_solidifier('solidify_bismuth_bronze_anvil')             
        .inputFluids(Fluid.of('gtceu:bismuth_bronze', 2016))
        .notConsumable('gtceu:anvil_casting_mold')
        .itemOutputs('tfc:metal/anvil/bismuth_bronze')
        .duration(1680)
        .EUt(16)
    
    // Bronze Anvil из Слитков
    event.recipes.gtceu.alloy_smelter('ingots_to_bronze_anvil')             
        .itemInputs('14x #forge:ingots/bronze')
        .notConsumable('gtceu:anvil_casting_mold')
        .itemOutputs('tfc:metal/anvil/bronze')
        .duration(1680)
        .EUt(16)

    // Bronze Anvil в отвердителе
    event.recipes.gtceu.fluid_solidifier('solidify_bronze_anvil')             
        .inputFluids(Fluid.of('gtceu:bronze', 2016))
        .notConsumable('gtceu:anvil_casting_mold')
        .itemOutputs('tfc:metal/anvil/bronze')
        .duration(1680)
        .EUt(16)

    // Black Bronze Anvil из Слитков
    event.recipes.gtceu.alloy_smelter('ingots_to_black_bronze_anvil')             
        .itemInputs('14x #forge:ingots/black_bronze')
        .notConsumable('gtceu:anvil_casting_mold')
        .itemOutputs('tfc:metal/anvil/black_bronze')
        .duration(1680)
        .EUt(16)

    // Black Bronze Anvil в отвердителе
    event.recipes.gtceu.fluid_solidifier('solidify_black_bronze_anvil')             
        .inputFluids(Fluid.of('gtceu:black_bronze', 2016))
        .notConsumable('gtceu:anvil_casting_mold')
        .itemOutputs('tfc:metal/anvil/black_bronze')
        .duration(1680)
        .EUt(16)

        
    // Wrought Iron Anvil из Слитков
    event.recipes.gtceu.alloy_smelter('ingots_to_wrought_iron_anvil')             
        .itemInputs('14x #forge:ingots/wrought_iron')
        .notConsumable('gtceu:anvil_casting_mold')
        .itemOutputs('tfc:metal/anvil/wrought_iron')
        .duration(1680)
        .EUt(16)

    // Wrought Iron Anvil в отвердителе
    event.recipes.gtceu.fluid_solidifier('solidify_wrought_iron_anvil')             
        .inputFluids(Fluid.of('gtceu:wrought_iron', 2016))
        .notConsumable('gtceu:anvil_casting_mold')
        .itemOutputs('tfc:metal/anvil/wrought_iron')
        .duration(1680)
        .EUt(16)

    // Steel Anvil из Слитков
    event.recipes.gtceu.alloy_smelter('ingots_to_steel_anvil')             
        .itemInputs('14x #forge:ingots/steel')
        .notConsumable('gtceu:anvil_casting_mold')
        .itemOutputs('tfc:metal/anvil/steel')
        .duration(1680)
        .EUt(16)

    // Steel Anvil в отвердителе
    event.recipes.gtceu.fluid_solidifier('solidify_steel_anvil')             
        .inputFluids(Fluid.of('gtceu:steel', 2016))
        .notConsumable('gtceu:anvil_casting_mold')
        .itemOutputs('tfc:metal/anvil/steel')
        .duration(1680)
        .EUt(16)

    // Black Steel Anvil из Слитков
    event.recipes.gtceu.alloy_smelter('ingots_to_black_steel_anvil')             
        .itemInputs('14x #forge:ingots/black_steel')
        .notConsumable('gtceu:anvil_casting_mold')
        .itemOutputs('tfc:metal/anvil/black_steel')
        .duration(1680)
        .EUt(16)

    // Black Steel Anvil в отвердителе
    event.recipes.gtceu.fluid_solidifier('solidify_black_steel_anvil')             
        .inputFluids(Fluid.of('gtceu:black_steel', 2016))
        .notConsumable('gtceu:anvil_casting_mold')
        .itemOutputs('tfc:metal/anvil/black_steel')
        .duration(1680)
        .EUt(16)

    // Red Steel Anvil из Слитков
    event.recipes.gtceu.alloy_smelter('ingots_to_red_steel_anvil')             
        .itemInputs('14x #forge:ingots/red_steel')
        .notConsumable('gtceu:anvil_casting_mold')
        .itemOutputs('tfc:metal/anvil/red_steel')
        .duration(1680)
        .EUt(16)

    // Red Steel Anvil в отвердителе
    event.recipes.gtceu.fluid_solidifier('solidify_red_steel_anvil')             
        .inputFluids(Fluid.of('gtceu:red_steel', 2016))
        .notConsumable('gtceu:anvil_casting_mold')
        .itemOutputs('tfc:metal/anvil/red_steel')
        .duration(1680)
        .EUt(16)

    // Blue Steel Anvil из Слитков
    event.recipes.gtceu.alloy_smelter('ingots_to_blue_steel_anvil')             
        .itemInputs('14x #forge:ingots/blue_steel')
        .notConsumable('gtceu:anvil_casting_mold')
        .itemOutputs('tfc:metal/anvil/blue_steel')
        .duration(1680)
        .EUt(16)

    // Blue Steel Anvil в отвердителе
    event.recipes.gtceu.fluid_solidifier('solidify_blue_steel_anvil')             
        .inputFluids(Fluid.of('gtceu:blue_steel', 2016))
        .notConsumable('gtceu:anvil_casting_mold')
        .itemOutputs('tfc:metal/anvil/blue_steel')
        .duration(1680)
        .EUt(16)

    // LimeWater + Sand -> Mortar
    event.recipes.gtceu.centrifuge('mortar')             
        .itemInputs('#forge:sand')
        .inputFluids(Fluid.of('tfc:limewater', 100))
        .itemOutputs('16x tfc:mortar')
        .duration(800)
        .EUt(8)

    // Barley Grain -> Barley Floor
    event.recipes.gtceu.macerator('barley_flour')             
        .itemInputs('tfc:food/barley_grain')
        .itemOutputs('2x tfc:food/barley_flour')
        .duration(400)
        .EUt(16)

    // Maize Grain -> Maize Floor
    event.recipes.gtceu.macerator('maize_flour')             
        .itemInputs('tfc:food/maize_grain')
        .itemOutputs('2x tfc:food/maize_flour')
        .duration(400)
        .EUt(16)

    // Oat Grain -> Oat Floor
    event.recipes.gtceu.macerator('oat_flour')             
        .itemInputs('tfc:food/oat_grain')
        .itemOutputs('2x tfc:food/oat_flour')
        .duration(400)
        .EUt(16)

    // Rye Grain -> Rye Floor
    event.recipes.gtceu.macerator('rye_flour')             
        .itemInputs('tfc:food/rye_grain')
        .itemOutputs('2x tfc:food/rye_flour')
        .duration(400)
        .EUt(16)

    // Rice Grain -> Rice Floor
    event.recipes.gtceu.macerator('rice_flour')             
        .itemInputs('tfc:food/rice_grain')
        .itemOutputs('2x tfc:food/rice_flour')
        .duration(400)
        .EUt(16)

    // Wheat Grain -> Wheat Floor
    event.recipes.gtceu.macerator('wheat_flour')             
        .itemInputs('tfc:food/wheat_grain')
        .itemOutputs('2x tfc:food/wheat_flour')
        .duration(400)
        .EUt(16)

    // Kapok Log -> Sticky Resin (Centriguge)
    event.recipes.gtceu.centrifuge('rubber_log_separation')             
        .itemInputs('#tfc:kapok_logs')
        .chancedOutput('gtceu:sticky_resin', 5000, 1200)
        .chancedOutput('gtceu:plant_ball', 3750, 900)
        .chancedOutput('gtceu:carbon_dust', 2500, 600)
        .chancedOutput('gtceu:wood_dust', 2500, 700)
        .outputFluids(Fluid.of('gtceu:methane', 60))
        .duration(200)
        .EUt(20)

    // Kapok Log -> Raw Rubber Dust
    event.recipes.gtceu.extractor('raw_rubber_from_log')             
        .itemInputs('#tfc:kapok_logs')
        .itemOutputs('gtceu:raw_rubber_dust')
        .duration(300)
        .EUt(2)

    // Kapok Sapling -> Raw Rubber Dust
    event.recipes.gtceu.extractor('raw_rubber_from_sapling')             
        .itemInputs('tfc:wood/sapling/kapok')
        .itemOutputs('gtceu:raw_rubber_dust')
        .duration(300)
        .EUt(2)

    // Kapok Leaves -> Raw Rubber Dust
    event.recipes.gtceu.extractor('raw_rubber_from_leaves')             
        .itemInputs('16x tfc:wood/leaves/kapok')
        .itemOutputs('gtceu:raw_rubber_dust')
        .duration(300)
        .EUt(2)

    // TFC Plants -> Plant Ball (Centrifuge)
    event.recipes.gtceu.centrifuge('grass_block_separation')             
        .itemInputs('#tfc:plants')
        .chancedOutput('gtceu:plant_ball', 3000, 1200)
        .chancedOutput('gtceu:clay_tiny_dust', 5000, 900)
        .duration(250)
        .EUt(30)

    // TFC Dirt -> Plant Ball (Centrifuge)
    event.recipes.gtceu.centrifuge('dirt_separation')             
        .itemInputs('#tfc:dirt')
        .chancedOutput('gtceu:plant_ball', 1250, 700)
        .chancedOutput('gtceu:clay_tiny_dust', 4000, 900)
        .duration(250)
        .EUt(30)

    // 8x Ванильная растительность -> Plant Ball (Compressor)
    event.remove({id: 'gtceu:compressor/plant_ball_from_wheat'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_warped_stem'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_crimson_stem'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_tube_coral'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_sugar_cane'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_red_mushroom'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_potato'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_nether_wart'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_horn_coral'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_fire_coral'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_carrot'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_cactus'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_bubble_coral'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_brown_mushroom'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_brain_coral'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_beetroot'})

    event.recipes.gtceu.compressor('plant_ball_from_tfc_seeds')             
        .itemInputs('8x #tfc:seeds')
        .itemOutputs('gtceu:plant_ball')
        .duration(300)
        .EUt(2)

    event.recipes.gtceu.compressor('plant_ball_from_tfc_food')             
        .itemInputs('8x #tfc:foods')
        .itemOutputs('gtceu:plant_ball')
        .duration(300)
        .EUt(2)

    event.recipes.gtceu.compressor('plant_ball_from_tfc_plants')             
        .itemInputs('8x #tfc:plants')
        .itemOutputs('gtceu:plant_ball')
        .duration(300)
        .EUt(2)

    event.recipes.gtceu.compressor('plant_ball_from_tfc_corals')             
        .itemInputs('8x #tfc:corals')
        .itemOutputs('gtceu:plant_ball')
        .duration(300)
        .EUt(2)

    // Ванильная растительность -> Биомасса (Brewery)
    event.remove({id: 'gtceu:brewery/biomass_from_sugar_cane'})
    event.remove({id: 'gtceu:brewery/biomass_from_red_mushroom'})
    event.remove({id: 'gtceu:brewery/biomass_from_potato'})
    event.remove({id: 'gtceu:brewery/biomass_from_carrot'})
    event.remove({id: 'gtceu:brewery/biomass_from_cactus'})
    event.remove({id: 'gtceu:brewery/biomass_from_brown_mushroom'})
    event.remove({id: 'gtceu:brewery/biomass_from_beetroot'})

    event.recipes.gtceu.brewery('biomass_from_tfc_seeds')             
        .itemInputs('#tfc:seeds')
        .outputFluids(Fluid.of('gtceu:biomass', 20))
        .duration(128)
        .EUt(3)

    event.recipes.gtceu.brewery('biomass_from_tfc_food')             
        .itemInputs('#tfc:foods')
        .outputFluids(Fluid.of('gtceu:biomass', 20))
        .duration(128)
        .EUt(3)

    event.recipes.gtceu.brewery('biomass_from_tfc_plants')             
        .itemInputs('#tfc:plants')
        .outputFluids(Fluid.of('gtceu:biomass', 20))
        .duration(128)
        .EUt(3)

    event.recipes.gtceu.brewery('biomass_from_tfc_corals')             
        .itemInputs('#tfc:corals')
        .outputFluids(Fluid.of('gtceu:biomass', 20))
        .duration(128)
        .EUt(3)

    

    // Fertilizer
    event.recipes.gtceu.mixer('fertilizer')             
        .itemInputs(
            '#tfc:dirt',
            '2x #forge:dusts/wood',
            '4x #forge:sand'
        )
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .itemOutputs('4x gtceu:fertilizer')
        .duration(300)
        .EUt(30)

    // Исправления рецептов связанных с песком
    event.recipes.gtceu.centrifuge('oilsands_ore_separation')             
        .itemInputs('#forge:ores/oilsands')
        .chancedOutput('tfc:sand/yellow', 5000, 5000)
        .outputFluids(Fluid.of('gtceu:oil', 2000))
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.centrifuge('oilsands_dust_separation')             
        .itemInputs('#forge:dusts/oilsands')
        .chancedOutput('tfc:sand/yellow', 5000, 5000)
        .outputFluids(Fluid.of('gtceu:heavy_oil', 2000))
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.centrifuge('red_sand_separation')             
        .itemInputs('tfc:sand/red')
        .chancedOutput('gtceu:iron_dust', 5000, 500)
        .chancedOutput('gtceu:diamond_tiny_dust', 100, 100)
        .chancedOutput('tfc:sand/yellow', 5000, 500)
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.forge_hammer('gravel_to_sand')             
        .itemInputs('#tfc:rock/gravel')
        .itemOutputs('tfc:sand/yellow')
        .duration(10)
        .EUt(16)

    event.recipes.gtceu.electrolyzer('sand_electrolysis')             
        .itemInputs('8x #forge:sand')
        .itemOutputs('gtceu:silicon_dioxide_dust')
        .duration(500)
        .EUt(25)
    
    // Рецепты кварц. песка из песка
    event.shaped('gtceu:quartz_sand_dust', [
        'A', 
        'B'
    ], {
        A: '#forge:sand',
        B: '#forge:tools/mortars'
    }).id('gtceu:shaped/quartz_sand')

    event.recipes.gtceu.macerator('quartz_sand_from_sand')             
        .itemInputs('#forge:sand')
        .itemOutputs('gtceu:quartz_sand_dust')
        .duration(30)
        .EUt(2)

    global.SAND_COLORS.forEach(sandColor => {
        // Raw SandStone -> Sand
        event.recipes.gtceu.forge_hammer(`raw_${sandColor}_sandstone_to_sand`)             
            .itemInputs(`tfc:raw_sandstone/${sandColor}`)
            .itemOutputs(`tfc:sand/${sandColor}`)
            .duration(400)
            .EUt(2)

        // Smooth SandStone -> Sand
        event.recipes.gtceu.forge_hammer(`smooth_${sandColor}_sandstone_to_sand`)             
            .itemInputs(`tfc:smooth_sandstone/${sandColor}`)
            .itemOutputs(`tfc:sand/${sandColor}`)
            .duration(400)
            .EUt(2)

        // Cut SandStone -> Sand
        event.recipes.gtceu.forge_hammer(`cut_${sandColor}_sandstone_to_sand`)             
            .itemInputs(`tfc:cut_sandstone/${sandColor}`)
            .itemOutputs(`tfc:sand/${sandColor}`)
            .duration(400)
            .EUt(2)

        // Sand -> Raw SandStone
        event.recipes.gtceu.compressor(`${sandColor}_sandstone`)             
            .itemInputs(`4x tfc:sand/${sandColor}`)
            .itemOutputs(`tfc:raw_sandstone/${sandColor}`)
            .duration(300)
            .EUt(2)
        
        // Raw SandStone -> Smooth SandStone
        event.recipes.gtceu.laser_engraver(`raw_${sandColor}_sandstone_to_smooth`)             
            .itemInputs(`tfc:raw_sandstone/${sandColor}`)
            .notConsumable('gtceu:magenta_glass_lens')
            .itemOutputs(`tfc:smooth_sandstone/${sandColor}`)
            .duration(60)
            .EUt(32)

        // Raw SandStone -> Cut SandStone
        event.recipes.gtceu.laser_engraver(`raw_${sandColor}_sandstone_to_cut`)             
            .itemInputs(`tfc:raw_sandstone/${sandColor}`)
            .notConsumable('gtceu:orange_glass_lens')
            .itemOutputs(`tfc:cut_sandstone/${sandColor}`)
            .duration(60)
            .EUt(32)
    })

    // Удобрение
    event.recipes.gtceu.create_mixer('fertilizer')             
        .itemInputs(
            '#tfc:dirt',
            '2x #forge:dusts/wood',
            '4x #forge:sand'
        )
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .itemOutputs('4x gtceu:fertilizer')
        .duration(300)
        .EUt(30)
        .rpm(96)

    // Рецепты бесконечного камня в RockBreaker
    global.TFC_STONE_TYPES.forEach(stoneTypeName => {
        event.recipes.gtceu.rock_breaker(`raw_${stoneTypeName}`)             
            .notConsumable(`tfc:rock/raw/${stoneTypeName}`)
            .itemOutputs(`tfc:rock/raw/${stoneTypeName}`)
            .duration(16)
            .EUt(7)

        event.recipes.gtceu.rock_breaker(`cobble_${stoneTypeName}`)             
            .notConsumable(`tfc:rock/cobble/${stoneTypeName}`)
            .itemOutputs(`tfc:rock/cobble/${stoneTypeName}`)
            .duration(16)
            .EUt(7)
    })
}

const registerAutoTFCHeatingRecipes = (event) => {
    Object.entries(global.METAL_TO_SPECS).forEach(pair => {
        let tfcMetalName = pair[0]
        let metalSpecifications = pair[1]

        metalSpecifications.props.forEach(propertyName => {
            let jsonRecipePath = `tfc:recipes/heating/tfg/${tfcMetalName}_${propertyName}`
            let itemTypeSpecifications = global.ITEM_TAG_TO_HEAT[propertyName]

            if (itemTypeSpecifications.heat_capacity != null) {
                let ingredientInput = itemTypeSpecifications.input(tfcMetalName)

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
    })
}

const registerAutoTFCCastingRecipes = (event) => {
    Object.entries(global.METAL_TO_SPECS).forEach(pair => {
        let tfcMetalName = pair[0]
        let metalSpecifications = pair[1]

        metalSpecifications.props.forEach(propertyName => {
            let property = global.ITEM_TAG_TO_HEAT[propertyName]
            
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
    })
}

const registerAutoTFCAnvilRecipes = (event) => {
    Object.entries(global.METAL_TO_SPECS).forEach(pair => {
        let tfcMetalName = pair[0]
        let metalSpecifications = pair[1]

        metalSpecifications.props.forEach(propertyName => {
            let property = global.ITEM_TAG_TO_HEAT[propertyName]

            if (property.rules != undefined)
            {
                let recipeId = `tfc:recipes/anvil/tfg/${propertyName}_${tfcMetalName}`

                let innerProp = global.ITEM_TAG_TO_HEAT[property.anvilFrom]
                let input = innerProp.input(tfcMetalName)
                let output = property.output(tfcMetalName)

                output['count'] = (property.outputCount != undefined) ? property.outputCount : 1

                addAnvilRecipe(event, recipeId, input, output, metalSpecifications.tier, property.rules)
            }
        })
    })
}