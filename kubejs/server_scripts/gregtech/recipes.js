// priority: 0

const registerGTCEURecipes = (event) => {
    
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

    // Удаление рецептов связанных с BioChaff
    event.remove({id: 'gtceu:macerator/dirt_from_bio_chaff'})
    
    // Удаление других рецептов
    //
    
    // Treated Wood Planks
    event.shaped('8x gtceu:treated_wood_planks', [
        'AAA', 
        'ABA',
        'AAA'
    ], {
        A: '#minecraft:planks',
        B: Item.of('tfc:wooden_bucket', '{fluid:{Amount:1000,FluidName:"gtceu:creosote"}}').strongNBT()
    }).id('tfg:shaped/treated_wood_planks_wood_bucket')

    event.shaped('8x gtceu:treated_wood_planks', [
        'AAA', 
        'ABA',
        'AAA'
    ], {
        A: '#minecraft:planks',
        B: Item.of('tfc:metal/bucket/red_steel', '{fluid:{Amount:1000,FluidName:"gtceu:creosote"}}').strongNBT()
    }).id('tfg:shaped/treated_wood_planks_red_steel_bucket')

    event.shaped('8x gtceu:treated_wood_planks', [
        'AAA', 
        'ABA',
        'AAA'
    ], {
        A: '#minecraft:planks',
        B: Item.of('tfc:metal/bucket/blue_steel', '{fluid:{Amount:1000,FluidName:"gtceu:creosote"}}').strongNBT()
    }).id('tfg:shaped/treated_wood_planks_blue_steel_bucket')


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

    // Electric Blast Furnace
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
}