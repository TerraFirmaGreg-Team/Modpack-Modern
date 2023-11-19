// priority: 0

const registerCreateRecipes = (event) => {

    // Удаление рецептов мода create 
    event.remove({ mod: 'create' });

    // Деревянная шестеренка ( маленькая )
    event.shaped('create:cogwheel', [
        ' A ',
        ' B ',
        '   '
    ], {
        A: '#tfc:saws',
        B: 'create:large_cogwheel',
    });

    // Деревянная шестеренка ( большая )
    event.shaped('create:large_cogwheel', [
        ' A ',
        ' B ',
        '   '
    ], {
        A: 'create:shaft',
        B: 'gtceu:wood_gear',
    });

    // Крафт оцинковоного корпуса Create ( база )
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            'ABBBA',
            'BCDCB',
            'BDEDB',
            'BCDCB',
            'ABBBA',
        ],
        key: {
            A:{item : 'gtceu:wrought_iron_plate'},
            B:{tag : 'minecraft:planks'},
            C:{item : 'gtceu:wrought_iron_bolt'},
            D:{item : 'gtceu:wrought_iron_rod'},
            E:{item : 'gtceu:wrought_iron_gear'},
        },
        result: {
            item: 'create:andesite_casing',
            count: 1
        }
    });

    // Крафт мех пресса
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            'ABBBA',
            'BEHEB',
            'BCECB',
            'BDFDB',
            'ABGBA',
        ],
        key: {
            A:{item : 'gtceu:wrought_iron_plate'},
            B:{tag : 'minecraft:planks'},
            C:{item : 'gtceu:wrought_iron_bolt'},
            D:{item : 'create:shaft'},
            E:{item : 'gtceu:wrought_iron_gear'},
            F:{item : 'create:andesite_casing'},
            G:{item : 'tfc:metal/anvil/wrought_iron'},
            H:{item : 'gtceu:wrought_iron_screw'},
        },
        result: {
            item: 'create:mechanical_press',
            count: 1
        }
    });

    // Крафт водянного колеса
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            ' AAA ',
            'ABDBA',
            'ACECA',
            'ABDBA',
            ' AAA ',
        ],
        key: {
            A:{tag : 'minecraft:planks'},
            B:{tag : 'forge:rods/long/steel'},
            C:{tag : 'forge:gears/small/steel'},
            D:{tag : 'forge:gears/steel'},
            E:{item : 'create:gearbox'},
        },
        result: {
            item: 'create:large_water_wheel',
            count: 1
        }
    });

    // Крафт горизонтального gearbox
    event.shaped('create:gearbox', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'create:shaft',
        B: 'create:andesite_casing',
    });

    // Крафт пропелера
    event.shaped('create:propeller', [
        'AB ',
        'BCB',
        ' BA'
    ], {
        A: '#forge:rings/wrought_iron',
        B: '#forge:plates/wrought_iron',
        C: '#forge:bolts/wrought_iron',
    });

    /* Ждем обьяснения Димы как это работает, точнее нет. Хз где ошибся
    addItemHeat(
        event,
        "galvanized_iron",
        {tag:"forge:ingots/galvanized_iron"},
        5.714,
        921,
        1228
    );
    addHeatingItemToFluidRecipe(
        event,
        "galvanized_to_wrought_iron",
        {tag:"forge:ingots/galvanized_iron"},
        {fluid: "tfc:metal/wrought_iron",amount: 144},
        1400,
        true
    );
    addWeldingRecipe(
        event,
        "iron_to_galvanized",
        {tag : "forge:ingots/iron"},
        {tag : "forge:plates/zinc"},
        {item: "kubejs:galvanized_iron"},
        3
    );
    addWeldingRecipe(
        event,
        "wrought_iron_to_galvanized",
        {tag : "forge:ingots/wrought_iron"},
        {tag : "forge:plates/zinc"},
        {item: "kubejs:galvanized_iron"},
        3
    );

    addAnvilRecipe(
        event,
        "galvanized_iron_to_shaft ",
        {tag:"forge:ingots/galvanized_iron"},
        {item: "create:shaft", count: 4},
        3,
        ["hit_last", "hit_second_last", "hit_third_last"]
    );
     */

    // todo: использовать ютилити методы для создания рецептов ниже (порядок, heatItem -> heatRecipe -> любые другие тфкшные)
    // galvanized_iron
    //addWeldingRecipe(event, ["forge:ingots/iron", "forge:plates/zinc"], "kubejs:galvanized_iron", 3);
    //addWeldingRecipe(event, ["forge:ingots/wrought_iron", "forge:plates/zinc"], "kubejs:galvanized_iron", 3);
    //customHeating(event, "forge:ingots/galvanized_iron", ["tfc:metal/wrought_iron", 144], 1400);
    //customHeatLevel(event,"forge:ingots/galvanized_iron", 5.714, 921, 1228);

    //shaft craft
    //customAnvil(event, "forge:ingots/galvanized_iron", ["create:shaft", 4], 3, ["hit_last", "hit_second_last", "hit_third_last"]);
}