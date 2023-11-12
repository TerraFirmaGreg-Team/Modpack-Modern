const registersophisticatedbackpacksRecipes = (event) => {
    // Удаление рецептов мода create 
    event.remove({ mod: 'sophisticatedbackpacks' });

    //изменение крафтов
    //измененный крафт БАЗОВОГО рюкзака
    event.shaped('sophisticatedbackpacks:backpack', [
    'ABD', 
    'ACA',
    'BBB'  
  ], {
    A: 'minecraft:string',
    B: 'minecraft:leather',  
    C: '#forge:chests/wooden',
    D: 'minecraft:name_tag'   
  });

    //измененный крафт ЖЕЛЕЗНОГО рюкзака

   event.shaped('sophisticatedbackpacks:iron_backpack', [// arg 1: output
    'ABA', 
    'BCB', // arg 2: the shape (array of strings)
    'ABA'  
  ], {
    A: 'gtceu:wrought_iron_double_plate', 
    B: 'gtceu:wrought_iron_long_rod',  //arg 3: the mapping object
    C: 'sophisticatedbackpacks:backpack'   
  });

    //измененный крафт ЗОЛОТОГО рюкзака
   event.shaped('sophisticatedbackpacks:gold_backpack', [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: 'gtceu:rose_gold_double_plate',
    B: 'gtceu:sterling_silver_long_rod',
    C: 'gtceu:gold_long_rod',
    D: 'sophisticatedbackpacks:iron_backpack',
    E: 'gtceu:steel_double_plate'
  });


    //измененный крафт АЛМАЗНОГО рюкзака
   event.shaped('sophisticatedbackpacks:diamond_backpack', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:black_steel_double_plate',
        B: 'gtceu:black_steel_long_rod',
        C: 'sophisticatedbackpacks:gold_backpack'
    });
    
    //измененный крафт НЕЗЕРИТОВОГО рюкзака
   event.shaped('sophisticatedbackpacks:netherite_backpack', [
        'ABC',
        'DED',
        'CBA'
        ], {
        A: 'gtceu:blue_steel_double_plate',
        B: 'gtceu:red_steel_long_rod',
        C: 'gtceu:red_steel_double_plate',
        D: 'gtceu:tungsten_steel_long_rod',
        E: 'sophisticatedbackpacks:diamond_backpack'
    });

    //измененный крафт АПГРЕЙД БАЗЫ
   event.shaped('sophisticatedbackpacks:upgrade_base', [
        'ABA',
        'BCB',
        'ADA'
        ], {
        A: '#forge:string',
        B: 'gtceu:wrought_iron_long_rod',
        C: 'minecraft:leather',
        D: 'gtceu:steel_plate'
    });
}