// priority: 0

const registerSBRecipes = (event) => {

    // Удаление рецептов мода sophisticatedBackpacks
    event.remove({ mod: 'sophisticatedbackpacks' });

    // Рюкзаки

    // Базовый рюкзак
    event.shaped('sophisticatedbackpacks:backpack', [
        'ABD', 
        'ACA',
        'BBB'  
    ], {
        A: '#forge:string',
        B: 'minecraft:leather',  
        C: '#forge:chests/wooden',
        D: 'minecraft:name_tag'   
    });

    // Железный рюкзак
    event.shaped('sophisticatedbackpacks:iron_backpack', [// arg 1: output
        'ABA', 
        'BCB', // arg 2: the shape (array of strings)
        'ABA'  
    ], {
        A: '#forge:plates/double/wrought_iron', 
        B: '#forge:rods/long/wrought_iron',  //arg 3: the mapping object
        C: 'sophisticatedbackpacks:backpack'   
    });

    // Золотой рюкзак
    event.shaped('sophisticatedbackpacks:gold_backpack', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#forge:plates/double/rose_gold',
        B: '#forge:rods/long/sterling_silver',
        C: '#forge:rods/long/gold',
        D: 'sophisticatedbackpacks:iron_backpack',
        E: '#forge:plates/double/steel'
    });

    // Алмазный рюкзак
    event.shaped('sophisticatedbackpacks:diamond_backpack', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:plates/double/black_steel',
        B: '#forge:rods/long/black_steel',
        C: 'sophisticatedbackpacks:gold_backpack'
    });
    
    // Незеритовый рюкзак
    event.shaped('sophisticatedbackpacks:netherite_backpack', [
        'ABC',
        'DED',
        'CBA'
    ], {
        A: '#forge:plates/double/blue_steel',
        B: '#forge:rods/long/red_steel',
        C: '#forge:plates/double/red_steel',
        D: '#forge:rods/long/blue_steel',
        E: 'sophisticatedbackpacks:diamond_backpack'
    });


    // Апгрейды

    // База для улучшений
    event.shaped('sophisticatedbackpacks:upgrade_base', [
        'ABA',
        'BCB',
        'ADA'
    ], {
        A: '#forge:string',
        B: '#forge:rods/long/wrought_iron',
        C: 'minecraft:leather',
        D: '#forge:plates/steel'
    });

    // Улучшение - подбиратель
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
        F: '#forge:circuits/hv',
        G: '#forge:batteries/hv'
    });

    // Улучшение - улучшенный подбиратель
    event.shapeless('sophisticatedbackpacks:advanced_pickup_upgrade', [
        'sophisticatedbackpacks:pickup_upgrade',
        '#forge:circuits/ev'
    ]);

    // Улучшение - фильтр
    event.shaped('sophisticatedbackpacks:filter_upgrade', [
        'ABC',
        'DEF',
        'GHG'
    ], {
        A: '#forge:batteries/lv',
        B: 'gtceu:item_filter',
        C: 'gtceu:manganese_phosphide_single_wire',
        D: 'gtceu:lv_conveyor_module',
        E: 'sophisticatedbackpacks:upgrade_base',
        F: 'gtceu:lv_robot_arm',
        G: '#forge:circuits/lv',
        H: 'gtceu:item_tag_filter'
    });

    // Улучшение - улучшенный фильтр
    event.shapeless('sophisticatedbackpacks:advanced_filter_upgrade', [
        'sophisticatedbackpacks:filter_upgrade',
        '#forge:circuits/mv'
    ]);

    // Улучшение - магнит
    event.shaped('sophisticatedbackpacks:magnet_upgrade', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:hv_robot_arm',
        B: 'gtceu:item_filter',
        C: '#forge:circuits/hv',
        D: 'sophisticatedbackpacks:upgrade_base',
        E: '#forge:batteries/hv'
    });

    // Улучшение - улучшенный магнит
    event.shapeless('sophisticatedbackpacks:advanced_magnet_upgrade', [
        'sophisticatedbackpacks:magnet_upgrade',
        '#forge:circuits/ev'
    ]);

    // Улучшение - уничтожитель
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
        G: '#forge:ender_pearls'
    });

    // Улучшение - улучшенный уничтожитель
    event.shapeless('sophisticatedbackpacks:advanced_void_upgrade', [
        'sophisticatedbackpacks:void_upgrade',
        '#forge:circuits/mv'
    ]);

    // Улучшение - Deposit
    event.shaped('sophisticatedbackpacks:deposit_upgrade', [
        'ABC',
        'DED',
        ' F '
    ], {
        A: '#forge:batteries/lv',
        B: 'gtceu:manganese_phosphide_single_wire',
        C: '#forge:circuits/lv',
        D: 'gtceu:lv_conveyor_module',
        E: 'sophisticatedbackpacks:upgrade_base',
        F: 'gtceu:lv_robot_arm'
    });

    // Улучшение - улучшенный Deposit
    event.shapeless('sophisticatedbackpacks:advanced_deposit_upgrade', [
        'sophisticatedbackpacks:deposit_upgrade',
        '#forge:circuits/mv'
    ]);

    // Улучшение - Restock
    event.shaped('sophisticatedbackpacks:restock_upgrade', [
        ' A ',
        'BCB',
        'DEF'
    ], {
        A: 'gtceu:lv_robot_arm',
        B: 'gtceu:lv_conveyor_module',
        C: 'sophisticatedbackpacks:upgrade_base',
        D: '#forge:batteries/lv',
        E: 'gtceu:manganese_phosphide_single_wire',
        F: '#forge:circuits/lv',
    });

    // Улучшение - улучшенный Restock
    event.shapeless('sophisticatedbackpacks:advanced_restock_upgrade', [
        'sophisticatedbackpacks:restock_upgrade',
        '#forge:circuits/mv'
    ]);

    // Улучшение - Refill
    event.shaped('sophisticatedbackpacks:refill_upgrade', [
        'ABC',
        'DED',
        'CBA'
    ], {
        A: 'gtceu:manganese_phosphide_single_wire',
        B: '#forge:circuits/lv',
        C: '#forge:batteries/lv',
        D: 'gtceu:lv_robot_arm',
        E: 'sophisticatedbackpacks:upgrade_base'
    });

    // Улучшение - улучшенный Refill
    event.shapeless('sophisticatedbackpacks:advanced_refill_upgrade', [
        'sophisticatedbackpacks:refill_upgrade',
        '#forge:circuits/mv'
    ]);

    // Улучшение - Everlasting
    event.shaped('sophisticatedbackpacks:everlasting_upgrade', [
        'ABC',
        'BDB',
        'EBA'
    ], {
        A: 'gtceu:zpm_field_generator',
        B: '#forge:plates/neutronium',
        C: '#forge:circuits/zpm',
        D: 'sophisticatedbackpacks:upgrade_base',
        E: '#forge:batteries/zpm'
    });

    // Улучшение - верстак
    event.shaped('sophisticatedbackpacks:crafting_upgrade', [
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: '#forge:rods/steel',
        B: '#tfc:workbenches',
        C: '#forge:plates/steel',
        D: 'sophisticatedbackpacks:upgrade_base',
    });

    // Улучшение - Stack Lvl. 1
    event.shaped('sophisticatedbackpacks:stack_upgrade_tier_1', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#forge:circuits/iv',
        B: 'gtceu:samarium_iron_arsenic_oxide_single_wire',
        C: '#forge:batteries/iv',
        D: 'sophisticatedbackpacks:upgrade_base',
        E: 'gtceu:iv_field_generator'
    });

    // Улучшение - проигрыватель
    event.shaped('sophisticatedbackpacks:jukebox_upgrade', [
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: '#forge:rods/steel',
        B: 'minecraft:jukebox',
        C: '#forge:plates/steel',
        D: 'sophisticatedbackpacks:upgrade_base',
    });

    // Улучшение - ToolSwapper
    event.shaped('sophisticatedbackpacks:tool_swapper_upgrade', [
        'ABC',
        'DEF',
        'CGA'
    ], {
        A: '#forge:circuits/lv',
        B: '#minecraft:pickaxes',
        C: 'gtceu:lv_robot_arm',
        D: '#minecraft:hoes',
        E: 'sophisticatedbackpacks:upgrade_base',
        F: '#minecraft:shovels',
        G: '#minecraft:axes',
    });

    // Улучшение - улучшенный ToolSwapper
    event.shapeless('sophisticatedbackpacks:advanced_tool_swapper_upgrade', [
        'sophisticatedbackpacks:tool_swapper_upgrade',
        '#forge:circuits/mv'
    ]);
}