// priority: 0

const registerExtendedCraftingRecipes = (event) => {

    event.remove({ mod: 'extendedcrafting' });

    // Продвинутый верстак 3x3
    event.shaped('extendedcrafting:basic_table', [
        'ABA',
        'C C',
        'DDD'
    ], {
        A: 'gtceu:black_steel_double_plate',
        B: 'minecraft:crafting_table',
        C: 'gtceu:black_steel_long_rod',
        D: 'gtceu:black_steel_plate',
    });

    // Продвинутый верстак 5x5
    event.shaped('extendedcrafting:advanced_table', [
        'ABC',
        'DEF',
        'GHJ'
    ], {
        A: '#forge:tools/files',
        B: '#forge:tools/knives',
        C: '#forge:tools/hammers',
        D: 'minecraft:crafting_table',
        E: 'extendedcrafting:basic_table',
        F: 'create:wrench',
        G: '#forge:tools/saws',
        H: '#forge:tools/wrenches',
        J: '#forge:tools/screwdrivers',
    });
}