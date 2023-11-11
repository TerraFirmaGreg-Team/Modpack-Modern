const newCreateRecipes = (event) => {
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
}