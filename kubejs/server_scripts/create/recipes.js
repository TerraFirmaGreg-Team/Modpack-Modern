// priority: 0

const registerCreateRecipes = (event) => {
    // Удаление рецептов мода create 
    event.remove({ mod: 'create' });

    // Деревянная пластина для шестеренки
    event.shaped('gtceu:wood_plate', [
        '  A',
        ' B ',
        '   '
    ], {
        A: '#tfc:chisels',
        B: '#tfc:lumber',
    });

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

    // galvanized_iron
    //customWelding(event, ["forge:ingots/iron", "forge:plates/zinc"], "kubejs:galvanized_iron", 3);
    //customWelding(event, ["forge:ingots/wrought_iron", "forge:plates/zinc"], "kubejs:galvanized_iron", 3);
    //customHeating(event, "forge:ingots/galvanized_iron", ["tfc:metal/wrought_iron", 144], 1400);
    //customHeatLevel(event,"forge:ingots/galvanized_iron", 5.714, 921, 1228);

    //shaft craft
    //customAnvil(event, "forge:ingots/galvanized_iron", ["create:shaft", 4], 3, ["hit_last", "hit_second_last", "hit_third_last"]);
}