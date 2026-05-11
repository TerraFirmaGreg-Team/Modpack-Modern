// priority: -100
"use strict";

global.CF_DISABLED_STORAGES = [
    // Create
    'create:item_vault',
    'create:packager',
    'create:repackager',
    'create:portable_storage_interface',
    'create:basin',
    'create:deployer',
    'create:mechanical_crafter',
    'create:package_frogport',
    'create:stock_ticker',
    'create:fluid_tank',

    // Create: Connected
    'create_connected:item_silo',
    'create_connected:inventory_access_port',
    'create_connected:inventory_bridge',
    'create_connected:fluid_vessel',

    // Create: Deco
    'createdeco:shipping_container',

    // Create: Vintage Improvements
    'vintageimprovements:belt_grinder',
    'vintageimprovements:centrifuge',
    'vintageimprovements:helve_hammer',
    'vintageimprovements:spring_coiling_machine',
    'vintageimprovements:vibrating_table',

     // TODO: Change once migration finishes
    'create_factory_logistics:jar_packager',

    // CC: Tweaked
    'computercraft:printer',
    'computercraft:disk_drive',

    // Advanced Peripherals
    // NOTE: All of these cause crashes, do not remove.
    'advancedperipherals:environment_detector',
    'advancedperipherals:chat_box',
    'advancedperipherals:player_detector',
    'advancedperipherals:me_bridge',
    'advancedperipherals:inventory_manager',
    'advancedperipherals:block_reader',
    'advancedperipherals:geo_scanner',
    'advancedperipherals:nbt_storage',

    // Applied Energistics 2
    'ae2:spatial_io_port',
    'ae2:controller',
    'ae2:drive',
    'ae2:chest',
    'ae2:io_port',
    'ae2:condenser',
    'ae2:energy_acceptor',
    'ae2:molecular_assembler',

    // ExtendedAE
    'expatternprovider:ex_drive',
    'expatternprovider:ex_molecular_assembler',
    'expatternprovider:ex_io_port',
    'expatternprovider:assembler_matrix_frame',
    'expatternprovider:assembler_matrix_wall',
    'expatternprovider:assembler_matrix_pattern',
    'expatternprovider:assembler_matrix_crafter',
    'expatternprovider:assembler_matrix_speed',
    'expatternprovider:assembler_matrix_glass',

    // Building Gadgets 2
    'buildinggadgets2:template_manager',

    // Exposure
    'exposure:lightroom',

    // Minecraft
    'minecraft:chiseled_bookshelf',

    // TFC
    'tfc:molten',
    'tfc:bloom',
    'tfc:jars',
    'tfc:log_pile',
    'tfc:placed_item',
    'tfc:quern',
    'tfc:firepit',
    'tfc:grill',
    'tfc:pot',
    'tfc:blast_furnace',
    'tfc:crucible',
    'tfc:large_vessel',
    'tfc:tool_rack',
    'tfc:loom',
    'tfc:sluice',
    'tfc:barrel',

    // TFC: Groomer
    'tfcgroomer:grooming_station', // TEST

    // TFC Casting with Channels
    'tfcchannelcasting:mold_table',

    // Firmalife
    'firmalife:oven_bottom',
    'firmalife:insulated_oven_bottom',
    'firmalife:oven_top',
    'firmalife:oven_hopper',
    'firmalife:ashtray',
    'firmalife:stovetop_pot',
    'firmalife:stovetop_grill',
    'firmalife:stovetop_vat',
    'firmalife:drying_mat',
    'firmalife:solar_drier',
    'firmalife:beehive',
    'firmalife:mixing_bowl',
    'firmalife:vat',
    'firmalife:jarring_station',
    'firmalife:plate',
    'firmalife:large_planter',
    'firmalife:quad_planter',
    'firmalife:hydroponic_planter',
    'firmalife:bonsai_planter',
    'firmalife:hanging_planter',
    'firmalife:trellis_planter',
    'firmalife:string',
    'firmalife:hanger',
    'firmalife:food_shelf',
    'firmalife:jarbnet',
    'firmalife:big_barrel',
    'firmalife:stomping_barrel',
    'firmalife:barrel_press',
    'firmalife:wine_shelf',

    // Sophisticated Backpacks
    'sophisticatedbackpacks:backpack',

    // GTceu Super Chests
    'gtceu:ulv_super_chest',
    'gtceu:lv_super_chest',
    'gtceu:mv_super_chest',
    'gtceu:hv_super_chest',
    'gtceu:ev_super_chest',
    'gtceu:iv_quantum_chest',
    'gtceu:luv_quantum_chest',
    'gtceu:zpm_quantum_chest',
    'gtceu:uv_quantum_chest',
    'gtceu:uhv_quantum_chest',

    // GTceu Super Tanks
    'gtceu:ulv_super_tank',
    'gtceu:lv_super_tank',
    'gtceu:mv_super_tank',
    'gtceu:hv_super_tank',
    'gtceu:ev_super_tank',
    'gtceu:iv_quantum_tank',
    'gtceu:luv_quantum_tank',
    'gtceu:zpm_quantum_tank',
    'gtceu:uv_quantum_tank',
    'gtceu:uhv_quantum_tank',

    // GTceu Drums
    'gtceu:bronze_drum',
    'gtceu:steel_drum',
    'gtceu:aluminium_drum',
    'gtceu:stainless_steel_drum',
    'gtceu:gold_drum',
    'gtceu:titanium_drum',
    'gtceu:tungsten_steel_drum',
    'gtceu:bismuth_bronze_drum',
    'gtceu:black_bronze_drum',

    // TFG
    'tfg:artisan_table',
    
    // Sophisticated Backpacks
    'sophisticatedbackpacks:backpack',
    'sophisticatedbackpacks:iron_backpack',
    'sophisticatedbackpacks:gold_backpack',
    'sophisticatedbackpacks:diamond_backpack',
    'sophisticatedbackpacks:netherite_backpack'
]
