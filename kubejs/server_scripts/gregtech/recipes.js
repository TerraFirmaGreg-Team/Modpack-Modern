// priority: 0

const registerGTRecipes = (event) => {
    // Удаление рецептов связанных с наковальней
    event.remove({id: 'gtceu:arc_furnace/arc_anvil'})
    event.remove({id: 'gtceu:macerator/macerate_anvil'})
    event.remove({id: 'gtceu:alloy_smelter/anvil'})
    event.remove({id: 'gtceu:fluid_solidifier/solidify_anvil'})

    event.remove({id: 'gtceu:arc_furnace/arc_damaged_anvil'})
    event.remove({id: 'gtceu:macerator/macerate_damaged_anvil'})
    event.remove({id: 'gtceu:arc_furnace/arc_chipped_anvil'})
    event.remove({id: 'gtceu:macerator/macerate_chipped_anvil'})
    
    // Удаление рецептов связанных с печкой
    event.remove({id: 'gtceu:assembler/furnace'})
    event.remove({id: 'gtceu:macerator/macerate_furnace'})
    event.remove({id: 'gtceu:assembler/furnace_minecart'})

    // Удаление рецептов связанных с вагонеткой с печкой
    event.remove({id: 'gtceu:arc_furnace/arc_furnace_minecart'})
    event.remove({id: 'gtceu:macerate/macerate_furnace_minecart'})

    // Удаление рецептов связанных с Primitive Blast Furnace
    event.remove({id: 'gtceu:arc_furnace/arc_primitive_blast_furnace'})
    event.remove({id: 'gtceu:macerator/macerate_primitive_blast_furnace'})

    // Удаление рецептов связанных с Barrel
    event.remove({id: 'gtceu:shaped/wooden_barrel'})
    event.remove({id: 'gtceu:assembler/wood_barrel'})
    event.remove({id: 'gtceu:arc_furnace/arc_wood_drum'})
    event.remove({id: 'gtceu:macerator/macerate_wood_drum'})

    // Удаление рецептов связанных с FireBricks
    event.remove({id: 'gtceu:shaped/casing_primitive_bricks'})
    event.remove({id: 'gtceu:macerator/macerate_firebricks'})
    event.remove({id: 'gtceu:extractor/extract_primitive_bricks'})

    // Удаление рецептов связанных с FireBrick
    event.remove({id: 'gtceu:smelting/fireclay_brick'})
    event.remove({id: 'gtceu:macerator/macerate_firebrick'})

    // Удаление рецептов связанных с Кольчугой
    event.remove({id: 'gtceu:shaped/chainmail_boots'})
    event.remove({id: 'gtceu:shaped/chainmail_leggings'})
    event.remove({id: 'gtceu:shaped/chainmail_chestplate'})
    event.remove({id: 'gtceu:shaped/chainmail_helmet'})
    event.remove({id: 'gtceu:arc_furnace/arc_chainmail_boots'})
    event.remove({id: 'gtceu:arc_furnace/arc_chainmail_leggings'})
    event.remove({id: 'gtceu:arc_furnace/arc_chainmail_chestplate'})
    event.remove({id: 'gtceu:arc_furnace/arc_chainmail_helmet'})
    event.remove({id: 'gtceu:macerator/macerate_chainmail_boots'})
    event.remove({id: 'gtceu:macerator/macerate_chainmail_leggings'})
    event.remove({id: 'gtceu:macerator/macerate_chainmail_chestplate'})
    event.remove({id: 'gtceu:macerator/macerate_chainmail_helmet'})
    event.remove({id: 'minecraft:iron_nugget_from_smelting'})
    event.remove({id: 'minecraft:iron_nugget_from_blasting'})

    // Удаление рецептов связанных с Железной броней
    event.remove({id: 'gtceu:arc_furnace/arc_iron_boots'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_leggings'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_chestplate'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_helmet'})
    event.remove({id: 'gtceu:macerator/macerate_iron_boots'})
    event.remove({id: 'gtceu:macerator/macerate_iron_leggings'})
    event.remove({id: 'gtceu:macerator/macerate_iron_chestplate'})
    event.remove({id: 'gtceu:macerator/macerate_iron_helmet'})
    event.remove({id: 'gtceu:shaped/iron_horse_armor'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_horse_armor'})
    event.remove({id: 'gtceu:macerator/macerate_iron_horse_armor'})

    // Удаление рецептов связанных с Золотой броней
    event.remove({id: 'gtceu:arc_furnace/arc_golden_boots'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_leggings'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_chestplate'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_helmet'})
    event.remove({id: 'gtceu:macerator/macerate_golden_boots'})
    event.remove({id: 'gtceu:macerator/macerate_golden_leggings'})
    event.remove({id: 'gtceu:macerator/macerate_golden_chestplate'})
    event.remove({id: 'gtceu:macerator/macerate_golden_helmet'})
    event.remove({id: 'gtceu:shaped/golden_horse_armor'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_horse_armor'})
    event.remove({id: 'gtceu:macerator/macerate_golden_horse_armor'})
    event.remove({id: 'minecraft:gold_nugget_from_smelting'})
    event.remove({id: 'minecraft:gold_nugget_from_blasting'})

    // Удаление рецептов связанных с Алмазной броней
    event.remove({id: 'gtceu:macerator/macerate_diamond_boots'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_leggings'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_chestplate'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_helmet'})
    event.remove({id: 'gtceu:shaped/diamond_horse_armor'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_horse_armor'})

    // Удаление рецептов связанных с Деревянными инструментами
    event.remove({id: 'gtceu:macerator/macerate_wooden_sword'})
    event.remove({id: 'gtceu:macerator/macerate_wooden_pickaxe'})
    event.remove({id: 'gtceu:macerator/macerate_wooden_axe'})
    event.remove({id: 'gtceu:macerator/macerate_wooden_shovel'})
    event.remove({id: 'gtceu:macerator/macerate_wooden_hoe'})

    // Удаление рецептов связанных с Каменными инструментами
    event.remove({id: 'gtceu:macerator/macerate_stone_sword'})
    event.remove({id: 'gtceu:macerator/macerate_stone_pickaxe'})
    event.remove({id: 'gtceu:macerator/macerate_stone_axe'})
    event.remove({id: 'gtceu:macerator/macerate_stone_shovel'})
    event.remove({id: 'gtceu:macerator/macerate_stone_hoe'})

    // Удаление рецептов связанных с Железными инструментами
    event.remove({id: 'gtceu:macerator/macerate_iron_sword'})
    event.remove({id: 'gtceu:macerator/macerate_iron_pickaxe'})
    event.remove({id: 'gtceu:macerator/macerate_iron_axe'})
    event.remove({id: 'gtceu:macerator/macerate_iron_shovel'})
    event.remove({id: 'gtceu:macerator/macerate_iron_hoe'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_sword'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_pickaxe'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_axe'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_shovel'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_hoe'})

    // Удаление рецептов связанных с Золотыми инструментами
    event.remove({id: 'gtceu:macerator/macerate_golden_sword'})
    event.remove({id: 'gtceu:macerator/macerate_golden_pickaxe'})
    event.remove({id: 'gtceu:macerator/macerate_golden_axe'})
    event.remove({id: 'gtceu:macerator/macerate_golden_shovel'})
    event.remove({id: 'gtceu:macerator/macerate_golden_hoe'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_sword'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_pickaxe'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_axe'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_shovel'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_hoe'})

    // Удаление рецептов связанных с Алмазными инструментами
    event.remove({id: 'gtceu:macerator/macerate_diamond_sword'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_pickaxe'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_axe'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_shovel'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_hoe'})
    event.remove({id: 'gtceu:arc_furnace/arc_diamond_sword'})
    event.remove({id: 'gtceu:arc_furnace/arc_diamond_pickaxe'})
    event.remove({id: 'gtceu:arc_furnace/arc_diamond_axe'})
    event.remove({id: 'gtceu:arc_furnace/arc_diamond_shovel'})
    event.remove({id: 'gtceu:arc_furnace/arc_diamond_hoe'})

    // Удаление рецептов связанных с BioChaff
    event.remove({id: 'gtceu:macerator/dirt_from_bio_chaff'})

    // Удаление рецептов связанных с Paper
    event.remove({id: 'gtceu:shaped/paper'})

    // Удаление других рецептов
    //
    
    // Low Pressure Steam Forge Hammer
    event.shaped('gtceu:lp_steam_forge_hammer', [
        'ABA', 
        'ACA',
        'ADA' 
    ], {
        A: 'gtceu:bronze_small_fluid_pipe',
        B: '#forge:pistons',
        C: 'gtceu:bronze_machine_casing',
        D: 'tfc:metal/anvil/wrought_iron'
    }).id('gtceu:shaped/steam_hammer_bronze')

    // LV Forge Hammer
    event.shaped('gtceu:lv_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:tin_single_cable',
        B: 'gtceu:lv_electric_piston',
        C: '#forge:circuits/lv',
        D: 'gtceu:lv_machine_hull',
        E: 'tfc:metal/anvil/steel',
    }).id('gtceu:shaped/lv_forge_hammer')

    // MV Forge Hammer
    event.shaped('gtceu:mv_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:copper_single_cable',
        B: 'gtceu:mv_electric_piston',
        C: '#forge:circuits/mv',
        D: 'gtceu:mv_machine_hull',
        E: 'tfc:metal/anvil/steel',
    }).id('gtceu:shaped/mv_forge_hammer')

    // HV Forge Hammer
    event.shaped('gtceu:hv_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:gold_single_cable',
        B: 'gtceu:hv_electric_piston',
        C: '#forge:circuits/hv',
        D: 'gtceu:hv_machine_hull',
        E: 'tfc:metal/anvil/steel',
    }).id('gtceu:shaped/hv_forge_hammer')

    // EV Forge Hammer
    event.shaped('gtceu:ev_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:aluminium_single_cable',
        B: 'gtceu:ev_electric_piston',
        C: '#forge:circuits/ev',
        D: 'gtceu:ev_machine_hull',
        E: 'tfc:metal/anvil/black_steel',
    }).id('gtceu:shaped/ev_forge_hammer')

    // IV Forge Hammer
    event.shaped('gtceu:iv_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:platinum_single_cable',
        B: 'gtceu:iv_electric_piston',
        C: '#forge:circuits/iv',
        D: 'gtceu:iv_machine_hull',
        E: 'tfc:metal/anvil/black_steel',
    }).id('gtceu:shaped/iv_forge_hammer')

    // LuV Forge Hammer
    event.shaped('gtceu:luv_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:niobium_titanium_single_cable',
        B: 'gtceu:luv_electric_piston',
        C: '#forge:circuits/luv',
        D: 'gtceu:luv_machine_hull',
        E: 'tfc:metal/anvil/black_steel',
    }).id('gtceu:shaped/luv_forge_hammer')

    // ZPM Forge Hammer
    event.shaped('gtceu:zpm_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:vanadium_gallium_single_cable',
        B: 'gtceu:zpm_electric_piston',
        C: '#forge:circuits/zpm',
        D: 'gtceu:zpm_machine_hull',
        E: '#tfc:red_or_blue_anvil',
    }).id('gtceu:shaped/zpm_forge_hammer')

    // UV Forge Hammer
    event.shaped('gtceu:uv_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:yttrium_barium_cuprate_single_cable',
        B: 'gtceu:uv_electric_piston',
        C: '#forge:circuits/uv',
        D: 'gtceu:uv_machine_hull',
        E: '#tfc:red_or_blue_anvil',
    }).id('gtceu:shaped/uv_forge_hammer')

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

    // 8x Vanilla Shit -> Plant Ball (Compressor)
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

    // Vanilla Shit -> Biomass (Brewery)
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

    // Sugar Cane (Papyrus) -> Paper
    event.remove({id: 'gtceu:chemical_bath/paper_from_sugar_cane_distilled'})
    event.remove({id: 'gtceu:chemical_bath/paper_from_sugar_cane'})

    event.recipes.gtceu.chemical_bath('paper_from_papyrus_distilled')             
        .itemInputs('tfc:papyrus')
        .inputFluids(Fluid.of('gtceu:distilled_water', 100))
        .itemOutputs('minecraft:paper')
        .duration(100)
        .EUt(7)

    event.recipes.gtceu.chemical_bath('paper_from_papyrus')             
        .itemInputs('tfc:papyrus')
        .inputFluids(Fluid.of('minecraft:water', 100))
        .itemOutputs('minecraft:paper')
        .duration(100)
        .EUt(7)

    // Fire Brick
    event.smelting('tfc:ceramic/fire_brick', 'gtceu:compressed_fireclay').id('tfg:smelting/fireclay_brick')

    // TFC FireBrick -> FireBrick dust
    event.recipes.gtceu.macerator('macerate_firebrick')             
        .itemInputs('tfc:ceramic/fire_brick')
        .itemOutputs('gtceu:fireclay_dust')
        .duration(15)
        .EUt(2)

    // Compressed Coke Clay -> Coke Oven Brick
    addHeatingItemToItemRecipe(event,
        'tfg:recipes/coke_oven_bricks',
        { item: "gtceu:compressed_coke_clay" },
        { item: 'gtceu:coke_oven_brick' },
        1399
    )

    // Pump Deck
    event.shaped('gtceu:pump_deck', [
        'ABA', 
        'CDE'  
    ], {
        A: '#forge:screws/wrought_iron',
        B: 'gtceu:treated_wood_planks',  
        C: '#forge:tools/hammers',
        D: '#tfc:rock_slabs',
        E: '#forge:tools/screwdrivers'
    }).id('gtceu:shaped/pump_deck')

    // Pump Hatch
    event.shaped('gtceu:pump_hatch', [
        'ABC', 
        'DED',
        'FBF'  
    ], {
        A: '#forge:screws/wrought_iron',
        B: '#forge:rings/wrought_iron',
        C: '#forge:tools/screwdrivers',
        D: 'gtceu:treated_wood_planks',
        E: 'gtceu:wood_large_fluid_pipe',
        F: '#tfc:rock_slabs'

    }).id('gtceu:shaped/pump_hatch')

    // Primitive Pump
    event.shaped('gtceu:primitive_pump', [
        'ABC', 
        'DEF',
        'GHG'  
    ], {
        A: '#forge:rings/wrought_iron',
        B: 'gtceu:wood_normal_fluid_pipe',
        C: '#forge:screws/wrought_iron',
        D: '#forge:rotors/wrought_iron',
        E: 'gtceu:treated_wood_planks',
        F: '#forge:tools/screwdrivers',
        G: '#tfc:rock_slabs',
        H: 'gtceu:wood_large_fluid_pipe'

    }).id('gtceu:shaped/primitive_pump')

    // Coke Oven
    event.shaped('gtceu:coke_oven', [
        'ABA', 
        'BCB',
        'ABA'  
    ], {
        A: 'gtceu:coke_oven_bricks',
        B: '#forge:plates/wrought_iron',  
        C: '#forge:tools/wrenches'  
    }).id('gtceu:shaped/coke_oven')

    // Coke Oven Hatch
    event.shaped('gtceu:coke_oven_hatch', [
        'AB'  
    ], {
        A: 'gtceu:coke_oven_bricks',
        B: '#tfc:barrels' 
    }).id('gtceu:shaped/coke_oven_hatch')

    // Bronze Steam Furnace
    event.shaped('gtceu:lp_steam_furnace', [
        'AAA', 
        'ABA',
        'ACA'  
    ], {
        A: 'gtceu:bronze_small_fluid_pipe',
        B: 'gtceu:bronze_brick_casing',  
        C: 'tfc:blast_furnace'  
    }).id('gtceu:shaped/steam_furnace_bronze')

    // Steel Steam Boiler
    event.shaped('gtceu:hp_steam_solid_boiler', [
        'AAA', 
        'ACA',
        'BDB'  
    ], {
        A: '#forge:plates/steel',
        B: 'minecraft:bricks',  
        C: '#forge:tools/wrenches',
        D: 'tfc:blast_furnace'
    }).id('gtceu:shaped/steam_boiler_coal_steel')

    // Bronze Steam Boiler
    event.shaped('gtceu:lp_steam_solid_boiler', [
        'AAA', 
        'ACA',
        'BDB'  
    ], {
        A: '#forge:plates/bronze',
        B: 'minecraft:bricks',  
        C: '#forge:tools/wrenches',
        D: 'tfc:blast_furnace'
    }).id('gtceu:shaped/steam_boiler_coal_bronze')

    // Bronze Alloy Smelter
    event.shaped('gtceu:lp_steam_alloy_smelter', [
        'AAA', 
        'BCB',
        'AAA'  
    ], {
        A: 'gtceu:bronze_small_fluid_pipe',
        B: 'tfc:blast_furnace',  
        C: 'gtceu:bronze_brick_casing'
    }).id('gtceu:shaped/steam_alloy_smelter_bronze')

    // Multi-Smelter
    event.shaped('gtceu:multi_smelter', [
        'AAA', 
        'BCB',
        'DBD'  
    ], {
        A: 'gtceu:hp_steam_furnace',
        B: '#forge:circuits/hv',  
        C: 'gtceu:heatproof_machine_casing',
        D: 'gtceu:copper_single_cable'
    }).id('gtceu:shaped/multi_furnace')

    // Multi-Smelter
    event.shaped('gtceu:electric_blast_furnace', [
        'AAA', 
        'BCB',
        'DBD'
    ], {
        A: 'gtceu:hp_steam_furnace',
        B: '#forge:circuits/lv',  
        C: 'gtceu:heatproof_machine_casing',
        D: 'gtceu:tin_single_cable'
    }).id('gtceu:shaped/electric_blast_furnace')

    // LimeWater + Sand -> Mortar
    event.recipes.gtceu.centrifuge('mortar')             
        .itemInputs('#forge:sand')
        .inputFluids(Fluid.of('tfc:limewater', 100))
        .itemOutputs('16x tfc:mortar')
        .duration(800)
        .EUt(8)

    // White Dye Recipes
    event.remove({id: 'gtceu:extractor/lily_of_the_valley_dye'})
    event.recipes.gtceu.extractor('white_dye')             
        .itemInputs('1x #tfc:makes_white_dye')
        .itemOutputs('2x minecraft:white_dye')
        .duration(200)
        .EUt(2)

    // Red Dye Recipes
    event.remove({id: 'gtceu:extractor/rose_bush_dye'})
    event.remove({id: 'gtceu:extractor/red_tulip_dye'})
    event.remove({id: 'gtceu:extractor/poppy_dye'})
    event.remove({id: 'gtceu:extractor/beetroot_dye'})
    event.recipes.gtceu.extractor('red_dye')             
        .itemInputs('1x #tfc:makes_red_dye')
        .itemOutputs('2x minecraft:red_dye')
        .duration(200)
        .EUt(2)

    // Lime Dye Recipes
    event.remove({id: 'gtceu:extractor/rose_bush_dye'})
    event.remove({id: 'gtceu:extractor/red_tulip_dye'})
    event.remove({id: 'gtceu:extractor/poppy_dye'})
    event.remove({id: 'gtceu:extractor/beetroot_dye'})
    event.recipes.gtceu.extractor('lime_dye')             
        .itemInputs('1x tfc:plant/moss')
        .itemOutputs('2x minecraft:lime_dye')
        .duration(200)
        .EUt(2)

    // Light Blue Dye Recipes
    event.remove({id: 'gtceu:extractor/blue_orchid_dye'})
    event.recipes.gtceu.extractor('light_blue_dye')             
        .itemInputs('1x #tfc:makes_light_blue_dye')
        .itemOutputs('2x minecraft:light_blue_dye')
        .duration(200)
        .EUt(2)

    // Green Dye Recipes
    event.recipes.gtceu.extractor('green_dye')             
        .itemInputs('1x #tfc:makes_green_dye')
        .itemOutputs('2x minecraft:green_dye')
        .duration(200)
        .EUt(2)

    // Magenta Dye Recipes
    event.remove({id: 'gtceu:extractor/lilac_dye'})
    event.remove({id: 'gtceu:extractor/allium_dye'})
    event.recipes.gtceu.extractor('magenta_dye')             
        .itemInputs('1x #tfc:makes_magenta_dye')
        .itemOutputs('2x minecraft:magenta_dye')
        .duration(200)
        .EUt(2)

    // Orange Dye Recipes
    event.remove({id: 'gtceu:extractor/orange_tulip_dye'})
    event.recipes.gtceu.extractor('orange_dye')             
        .itemInputs('1x #tfc:makes_orange_dye')
        .itemOutputs('2x minecraft:orange_dye')
        .duration(200)
        .EUt(2)

    // Purple Dye Recipes
    event.recipes.gtceu.extractor('purple_dye')             
        .itemInputs('1x #tfc:makes_purple_dye')
        .itemOutputs('2x minecraft:purple_dye')
        .duration(200)
        .EUt(2)

    // Brown Dye Recipes
    event.recipes.gtceu.extractor('brown_dye')             
        .itemInputs('1x #tfc:makes_brown_dye')
        .itemOutputs('2x minecraft:brown_dye')
        .duration(200)
        .EUt(2)

    // Light Gray Dye Recipes
    event.recipes.gtceu.extractor('light_gray_dye')             
        .itemInputs('1x tfc:plant/yucca')
        .itemOutputs('2x minecraft:light_gray_dye')
        .duration(200)
        .EUt(2)

    // Yellow Dye Recipes
    event.remove({id: 'gtceu:extractor/sunflower_dye'})
    event.remove({id: 'gtceu:extractor/dandelion_dye'})
    event.recipes.gtceu.extractor('yellow_dye')             
        .itemInputs('1x #tfc:makes_yellow_dye')
        .itemOutputs('2x minecraft:yellow_dye')
        .duration(200)
        .EUt(2)

    // Blue Dye Recipes
    event.remove({id: 'gtceu:extractor/cornflower_dye'})
    event.recipes.gtceu.extractor('blue_dye')             
        .itemInputs('1x #tfc:makes_blue_dye')
        .itemOutputs('2x minecraft:blue_dye')
        .duration(200)
        .EUt(2)

    // Pink Dye Recipes
    event.remove({id: 'gtceu:extractor/pink_tulip_dye'})
    event.remove({id: 'gtceu:extractor/peony_dye'})
    event.recipes.gtceu.extractor('pink_dye')             
        .itemInputs('1x #tfc:makes_pink_dye')
        .itemOutputs('2x minecraft:pink_dye')
        .duration(200)
        .EUt(2)
}