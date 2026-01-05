"use strict";

/**
 * @param {Internal.TagEventJS} event 
 */
const registerTFGAquaponicsItemTags = (event) => {
    event.add('tfg:treated_wood_greenhouse_casings', 'firmalife:treated_wood_greenhouse_wall');
    event.add('tfg:all_greenhouse_casings', 'firmalife:treated_wood_greenhouse_wall');

    event.add('tfg:copper_greenhouse_casings', 'firmalife:copper_greenhouse_wall');
    event.add('tfg:all_greenhouse_casings', 'firmalife:copper_greenhouse_wall');

    event.add('tfg:iron_greenhouse_casings', 'firmalife:iron_greenhouse_wall');
    event.add('tfg:all_greenhouse_casings', 'firmalife:iron_greenhouse_wall');
    
    event.add('tfg:stainless_steel_greenhouse_casings', 'firmalife:stainless_steel_greenhouse_wall');
    event.add('tfg:all_greenhouse_casings', 'firmalife:stainless_steel_greenhouse_wall');


    event.add('tfc:foods/usable_in_salad', 'tfg:fish_roe');
    event.add('tfc:foods/usable_in_jam_sandwich', 'tfg:fish_roe');
    event.add('tfc:foods/usable_in_sandwich', 'tfg:fish_roe');
    event.add('tfc:foods/can_be_salted', 'tfg:fish_roe');
    event.add('tfc:foods', 'tfg:fish_roe');
    event.add('firmalife:foods/raw_fish', 'tfg:fish_roe');
    event.add('minecraft:fishes', 'tfg:fish_roe');

    const bait = Ingredient.of('#tfc:small_fishing_bait').itemIds.toArray().map(String);
    const basic_fish_food = bait.filter(id => id !== 'tfg:flora_pellets');

    basic_fish_food.forEach(item => {
        event.add('tfg:basic_fish_food', item);
    });

    event.add('tfc:small_fishing_bait', 'tfg:flora_pellets');
    event.add('tfg:advanced_fish_food', 'tfg:flora_pellets');
	event.add('create:blaze_burner_fuel/regular', "tfg:flora_pellets");
};

/**
 * @param {Internal.TagEventJS} event 
 */
const registerTFGAquaponicsBlockTags = (event) => {
    event.add('tfg:treated_wood_greenhouse_casings', 'firmalife:treated_wood_greenhouse_wall');
    event.add('tfg:all_greenhouse_casings', 'firmalife:treated_wood_greenhouse_wall');

    event.add('tfg:copper_greenhouse_casings', 'firmalife:copper_greenhouse_wall');
    event.add('tfg:all_greenhouse_casings', 'firmalife:copper_greenhouse_wall');

    event.add('tfg:iron_greenhouse_casings', 'firmalife:iron_greenhouse_wall');
    event.add('tfg:all_greenhouse_casings', 'firmalife:iron_greenhouse_wall');
    
    event.add('tfg:stainless_steel_greenhouse_casings', 'firmalife:stainless_steel_greenhouse_wall');
    event.add('tfg:all_greenhouse_casings', 'firmalife:stainless_steel_greenhouse_wall');
};

/**
 * @param {Internal.TagEventJS} event 
 */
const registerTFGAquaponicsFluidTags = (event) => {
	event.add('tfg:pisciculture_fishery_fluids', 'minecraft:water')
	event.add('tfg:pisciculture_fishery_fluids', 'tfc:salt_water')
	event.add('tfg:pisciculture_fishery_fluids', 'tfg:semiheavy_ammoniacal_water')
};