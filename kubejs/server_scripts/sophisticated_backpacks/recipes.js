// priority: 0
"use strict";

const registerSophisticatedBackpacksRecipes = (event) => {

    event.remove({ mod: 'sophisticatedbackpacks', not: {type: 'sophisticatedbackpacks:backpack_dye'} })


    event.shaped('sophisticatedbackpacks:backpack', [
        'AED', 
        'BCB',
        'BBB'  
    ], {
        A: 'sns:reinforced_fiber',
        B: 'sns:bound_leather_strip',  
        C: 'sns:pack_frame',
        D: 'minecraft:name_tag',
		E: 'sns:reinforced_fabric'
    }).id('tfg:sophisticated_backpacks/shaped/backpack')

    event.custom({
        type: "sophisticatedbackpacks:backpack_upgrade",
        conditions: [
            {
                type: "sophisticatedcore:item_enabled",
                itemRegistryName: "sophisticatedbackpacks:iron_backpack"
            }
        ],
        key: {
            B: {
                "item": "sophisticatedbackpacks:backpack"
            },
            I: {
                "tag": "forge:plates/red_steel"
            },
            C: {
                "tag": 'forge:chests/wooden'
            },
            F: {
                "tag": 'forge:rods/red_steel'
            }
        },
        pattern: [
            "IFI",
            "FCF",
            "IBI"
        ],
        result: {
          item: "sophisticatedbackpacks:iron_backpack"
        }
    }).id('tfg:sophisticated_backpacks/shaped/iron_backpack')


    event.custom({
        type: "sophisticatedbackpacks:backpack_upgrade",
        conditions: [
            {
                type: "sophisticatedcore:item_enabled",
                itemRegistryName: "sophisticatedbackpacks:gold_backpack"
            }
        ],
        key: {
            B: {
                "item": "sophisticatedbackpacks:iron_backpack"
            },
            I: {
                "tag": "forge:plates/aluminium"
            },
            C: {
                "tag": 'forge:chests/wooden'
            },
            F: {
                "tag": 'forge:rods/aluminium'
            }
        },
        pattern: [
            "IFI",
            "FCF",
            "IBI"
        ],
        result: {
          item: "sophisticatedbackpacks:gold_backpack"
        }
    }).id('tfg:sophisticated_backpacks/shaped/gold_backpack')


    event.custom({
        type: "sophisticatedbackpacks:backpack_upgrade",
        conditions: [
            {
                type: "sophisticatedcore:item_enabled",
                itemRegistryName: "sophisticatedbackpacks:diamond_backpack"
            }
        ],
        key: {
            B: {
                "item": "sophisticatedbackpacks:gold_backpack"
            },
            I: {
                "tag": "forge:plates/titanium"
            },
            C: {
                "tag": 'forge:chests/wooden'
            },
            F: {
                "tag": 'forge:rods/titanium'
            }
        },
        pattern: [
            "IFI",
            "FCF",
            "IBI"
        ],
        result: {
          item: "sophisticatedbackpacks:diamond_backpack"
        }
    }).id('tfg:sophisticated_backpacks/shaped/diamond_backpack')
    

    event.custom({
        type: "sophisticatedbackpacks:backpack_upgrade",
        conditions: [
            {
                type: "sophisticatedcore:item_enabled",
                itemRegistryName: "sophisticatedbackpacks:netherite_backpack"
            }
        ],
        key: {
            B: {
                "item": "sophisticatedbackpacks:diamond_backpack"
            },
            I: {
                "tag": "forge:plates/tungsten_steel"
            },
            C: {
                "tag": 'forge:chests/wooden'
            },
            F: {
                "tag": 'forge:rods/tungsten_steel'
            }
        },
        pattern: [
            "IFI",
            "FCF",
            "IBI"
        ],
        result: {
          item: "sophisticatedbackpacks:netherite_backpack"
        }
    }).id('tfg:sophisticated_backpacks/shaped/netherite_backpack')


    // Upgrades

    event.shaped('sophisticatedbackpacks:upgrade_base', [
        'ABA',
        'BCB',
        'ADA'
    ], {
        A: '#forge:string',
        B: '#forge:rods/long/wrought_iron',
        C: '#forge:leather',
        D: '#forge:plates/steel'
    }).id('tfg:sophisticated_backpacks/shaped/upgrade_base')

    event.shaped('sophisticatedbackpacks:upgrade_base', [
        'ABA',
        'BCB',
        'ADA'
    ], {
        A: '#forge:string',
        B: '#forge:rods/long/wrought_iron',
        C: '#forge:plates/rubber',
        D: '#forge:plates/steel'
    }).id('tfg:sophisticated_backpacks/shaped/upgrade_base_rubber')

    event.shaped('sophisticatedbackpacks:pickup_upgrade', [
        'ABA',
        'CDE',
        'FGF'
    ], {
        A: 'gtceu:hv_electric_motor',
        B: 'gtceu:mercury_barium_calcium_cuprate_single_wire',
        C: 'gtceu:hv_conveyor_module',
        D: 'sophisticatedbackpacks:upgrade_base',
        E: 'gtceu:hv_robot_arm',
        F: '#gtceu:circuits/hv',
        G: '#gtceu:batteries/hv'
    }).id('tfg:sophisticated_backpacks/shaped/pickup_upgrade')

    event.shapeless('sophisticatedbackpacks:advanced_pickup_upgrade', [
        'sophisticatedbackpacks:pickup_upgrade',
        '#gtceu:circuits/ev'
    ]).id('tfg:sophisticated_backpacks/shapeless/advanced_pickup_upgrade')

    event.shaped('sophisticatedbackpacks:filter_upgrade', [
        'ABC',
        'DEF',
        'GHG'
    ], {
        A: '#gtceu:batteries/lv',
        B: 'gtceu:item_filter',
        C: 'gtceu:manganese_phosphide_single_wire',
        D: 'gtceu:lv_conveyor_module',
        E: 'sophisticatedbackpacks:upgrade_base',
        F: 'gtceu:lv_robot_arm',
        G: '#gtceu:circuits/lv',
        H: 'gtceu:item_tag_filter'
    }).id('tfg:sophisticated_backpacks/shaped/filter_upgrade')

    event.shapeless('sophisticatedbackpacks:advanced_filter_upgrade', [
        'sophisticatedbackpacks:filter_upgrade',
        '#gtceu:circuits/mv'
    ]).id('tfg:sophisticated_backpacks/shapeless/advanced_filter_upgrade')

    event.shaped('sophisticatedbackpacks:magnet_upgrade', [
        'ABA',
        'CDC',
        'FEG'
    ], {
        A: 'gtceu:lv_robot_arm',
        B: 'gtceu:item_filter',
        C: '#gtceu:circuits/lv',
        D: 'sophisticatedbackpacks:upgrade_base',
        E: 'gtceu:lv_item_magnet',
        F: '#forge:tools/wrenches',
        G: '#forge:tools/screwdrivers'
    }).id('tfg:sophisticated_backpacks/shaped/magnet_upgrade')

    event.shapeless('sophisticatedbackpacks:advanced_magnet_upgrade', [
        'sophisticatedbackpacks:magnet_upgrade',
        'gtceu:hv_item_magnet'
    ]).id('tfg:sophisticated_backpacks/shapeless/advanced_magnet_upgrade')

    event.shaped('sophisticatedbackpacks:void_upgrade', [
        'ABA',
        'CDE',
        'FGF'
    ], {
        A: '#forge:screws/steel',
        B: 'gtceu:item_detector_cover',
        C: '#forge:tools/screwdrivers',
        D: 'sophisticatedbackpacks:upgrade_base',
        E: '#forge:tools/wrenches',
        F: 'gtceu:brass_normal_item_pipe',
        G: 'ae2:ender_dust'
    }).id('tfg:sophisticated_backpacks/shaped/void_upgrade')

    event.shapeless('sophisticatedbackpacks:advanced_void_upgrade', [
        'sophisticatedbackpacks:void_upgrade',
        '#gtceu:circuits/mv'
    ]).id('tfg:sophisticated_backpacks/shapeless/advanced_void_upgrade')

    event.shaped('sophisticatedbackpacks:deposit_upgrade', [
        'ABC',
        'DED',
        ' F '
    ], {
        A: '#gtceu:batteries/lv',
        B: 'gtceu:manganese_phosphide_single_wire',
        C: '#gtceu:circuits/lv',
        D: 'gtceu:lv_conveyor_module',
        E: 'sophisticatedbackpacks:upgrade_base',
        F: 'gtceu:lv_robot_arm'
    }).id('tfg:sophisticated_backpacks/shaped/deposit_upgrade')

    event.shapeless('sophisticatedbackpacks:advanced_deposit_upgrade', [
        'sophisticatedbackpacks:deposit_upgrade',
        '#gtceu:circuits/mv'
    ]).id('tfg:sophisticated_backpacks/shapeless/advanced_deposit_upgrade')

    event.shaped('sophisticatedbackpacks:restock_upgrade', [
        ' A ',
        'BCB',
        'DEF'
    ], {
        A: 'gtceu:lv_robot_arm',
        B: 'gtceu:lv_conveyor_module',
        C: 'sophisticatedbackpacks:upgrade_base',
        D: '#gtceu:batteries/lv',
        E: 'gtceu:manganese_phosphide_single_wire',
        F: '#gtceu:circuits/lv',
    }).id('tfg:sophisticated_backpacks/shaped/restock_upgrade')

    event.shapeless('sophisticatedbackpacks:advanced_restock_upgrade', [
        'sophisticatedbackpacks:restock_upgrade',
        '#gtceu:circuits/mv'
    ]).id('tfg:sophisticated_backpacks/shapeless/advanced_restock_upgrade')

    event.shaped('sophisticatedbackpacks:refill_upgrade', [
        'ABC',
        'DED',
        'CBA'
    ], {
        A: 'gtceu:manganese_phosphide_single_wire',
        B: '#gtceu:circuits/lv',
        C: '#gtceu:batteries/lv',
        D: 'gtceu:lv_robot_arm',
        E: 'sophisticatedbackpacks:upgrade_base'
    }).id('tfg:sophisticated_backpacks/shaped/refill_upgrade')

    event.shapeless('sophisticatedbackpacks:advanced_refill_upgrade', [
        'sophisticatedbackpacks:refill_upgrade',
        '#gtceu:circuits/mv'
    ]).id('tfg:sophisticated_backpacks/shapeless/advanced_refill_upgrade')

    event.shaped('sophisticatedbackpacks:everlasting_upgrade', [
        'ABC',
        'BDB',
        'EBA'
    ], {
        A: 'gtceu:hv_field_generator',
        B: '#forge:plates/titanium',
        C: '#gtceu:circuits/ev',
        D: 'sophisticatedbackpacks:upgrade_base',
        E: '#gtceu:batteries/ev'
    }).id('tfg:sophisticated_backpacks/shaped/everlasting_upgrade')

    event.shaped('sophisticatedbackpacks:crafting_upgrade', [
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: '#forge:rods/steel',
        B: '#tfc:workbenches',
        C: '#forge:plates/steel',
        D: 'sophisticatedbackpacks:upgrade_base',
    }).id('tfg:sophisticated_backpacks/shaped/crafting_upgrade')

    event.shaped('sophisticatedbackpacks:stack_upgrade_starter_tier', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#gtceu:circuits/hv',
        B: 'gtceu:mercury_barium_calcium_cuprate_single_wire',
        C: '#gtceu:batteries/hv',
        D: 'sophisticatedbackpacks:upgrade_base',
        E: 'gtceu:mv_field_generator'
    }).id('tfg:sophisticated_backpacks/shaped/stack_upgrade_starter_tier')

    event.shaped('sophisticatedbackpacks:stack_upgrade_tier_1', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#gtceu:circuits/iv',
        B: 'gtceu:samarium_iron_arsenic_oxide_single_wire',
        C: '#gtceu:batteries/iv',
        D: 'sophisticatedbackpacks:upgrade_base',
        E: 'gtceu:ev_field_generator'
    }).id('tfg:sophisticated_backpacks/shaped/stack_upgrade_tier_1')

    event.shaped('sophisticatedbackpacks:jukebox_upgrade', [
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: '#forge:rods/steel',
        B: 'minecraft:jukebox',
        C: '#forge:plates/steel',
        D: 'sophisticatedbackpacks:upgrade_base',
    }).id('tfg:sophisticated_backpacks/shaped/jukebox_upgrade')

    event.shapeless('sophisticatedbackpacks:advanced_jukebox_upgrade', [
        'sophisticatedbackpacks:jukebox_upgrade',
        '#gtceu:circuits/mv'
    ]).id('tfg:sophisticated_backpacks/shaped/advanced_jukebox_upgrade')

    event.shaped('sophisticatedbackpacks:tool_swapper_upgrade', [
        'ABC',
        'DEF',
        'CGA'
    ], {
        A: '#gtceu:circuits/lv',
        B: '#tfc:pickaxes',
        C: 'gtceu:lv_robot_arm',
        D: '#tfc:hoes',
        E: 'sophisticatedbackpacks:upgrade_base',
        F: '#tfc:shovels',
        G: '#tfc:axes',
    }).id('tfg:sophisticated_backpacks/shaped/tool_swapper_upgrade')

    event.shapeless('sophisticatedbackpacks:advanced_tool_swapper_upgrade', [
        'sophisticatedbackpacks:tool_swapper_upgrade',
        '#gtceu:circuits/mv'
    ]).id('tfg:sophisticated_backpacks/shapeless/advanced_tool_swapper_upgrade')

    event.shaped('sophisticatedbackpacks:tank_upgrade', [
        'ABC',
        'DEF',
        'CGA'
    ], {
        A: '#gtceu:circuits/mv',
        B: 'gtceu:fluid_filter',
        C: 'gtceu:mv_electric_pump',
        D: '#forge:tools/screwdrivers',
        E: 'sophisticatedbackpacks:upgrade_base',
        F: '#forge:tools/wrenches',
        G: 'gtceu:aluminium_drum',
    }).id('tfg:sophisticated_backpacks/shaped/tank_upgrade')

    event.shaped('sophisticatedbackpacks:stonecutter_upgrade', [
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: '#forge:rods/steel',
        B: 'minecraft:stonecutter',
        C: '#forge:plates/steel',
        D: 'sophisticatedbackpacks:upgrade_base',
    }).id('tfg:sophisticated_backpacks/shaped/stonecutter_upgrade')

    event.recipes.tfc.no_remainder_shaped_crafting(
        event.shaped('sophisticatedbackpacks:feeding_upgrade', [
            'ADA',
            'BEF',
            'CGC'
        ], {
            A: '#gtceu:circuits/lv',
            B: 'firmalife:spoon',
            C: 'gtceu:lv_robot_arm',
            D: '#tfc:bowls',
            E: 'sophisticatedbackpacks:upgrade_base',
            F: '#forge:tools/knives',
            G: '#forge:rods/steel'
    })).id('tfg:sophisticated_backpacks/shaped/feeding_upgrade')

    event.shapeless('sophisticatedbackpacks:advanced_feeding_upgrade', [
        'sophisticatedbackpacks:feeding_upgrade',
        '#gtceu:circuits/mv'
    ]).id('tfg:sophisticated_backpacks/shapeless/advanced_feeding_upgrade')
}