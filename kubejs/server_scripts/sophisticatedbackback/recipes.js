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
    A: '#forge:string',
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
    A: '#forge:plates/double/wrought_iron', 
    B: '#forge:rods/long/wrought_iron',  //arg 3: the mapping object
    C: 'sophisticatedbackpacks:backpack'   
  });

    //измененный крафт ЗОЛОТОГО рюкзака
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


    //измененный крафт АЛМАЗНОГО рюкзака
   event.shaped('sophisticatedbackpacks:diamond_backpack', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:plates/double/black_steel',
        B: '#forge:rods/long/black_steel',
        C: 'sophisticatedbackpacks:gold_backpack'
    });
    
    //измененный крафт НЕЗЕРИТОВОГО рюкзака
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

    //измененный крафт АПГРЕЙД БАЗЫ
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
}