"use strict";

/** @param {Internal.TFCDataEventJS} event */
function registerTFGFoodData(event) {

	// Ice shavings
	event.foodItem('firmalife:ice_shavings', food => {
		food.water(5)
		food.decayModifier(0)
	})

	// Birt
	event.foodItem("tfg:food/raw_birt", (food) => {
		food.hunger(2);
		food.protein(1.2);
		food.decayModifier(3);
	});

	event.foodItem("tfg:food/cooked_birt", (food) => {
		food.hunger(4);
		food.saturation(2);
		food.protein(2.2);
		food.decayModifier(2.25);
	});

	// Crawlermari
	event.foodItem("tfg:food/raw_crawlermari", (food) => {
		food.hunger(2);
		food.water(5);
		food.protein(1.2);
		food.decayModifier(3);
	});

	event.foodItem("tfg:food/cooked_crawlermari", (food) => {
		food.hunger(4);
		food.saturation(2);
		food.protein(2.2);
		food.decayModifier(2.25);
	});

	// Limpet
	event.foodItem("tfg:food/raw_limpet", (food) => {
		food.hunger(2);
		food.water(5);
		food.protein(1.2);
		food.decayModifier(3);
	});

	event.foodItem("tfg:food/cooked_limpet", (food) => {
		food.hunger(4);
		food.saturation(2);
		food.protein(2.2);
		food.decayModifier(2.25);
	});

	// Moon Rabbit
	event.foodItem("tfg:food/raw_moon_rabbit", (food) => {
		food.hunger(2);
		food.protein(1.2);
		food.decayModifier(3);
	});

	event.foodItem("tfg:food/cooked_moon_rabbit", (food) => {
		food.hunger(4);
		food.saturation(2);
		food.protein(2.2);
		food.decayModifier(2.25);
	});

	// Glacian Mutton
	event.foodItem("tfg:food/raw_glacian_mutton", (food) => {
		food.hunger(2);
		food.protein(1.5);
		food.decayModifier(3);
	});

	event.foodItem("tfg:food/cooked_glacian_mutton", (food) => {
		food.hunger(4);
		food.saturation(2);
		food.protein(3);
		food.decayModifier(2.25);
	});

	// Sniffer Beef
	event.foodItem("tfg:food/raw_sniffer_beef", (food) => {
		food.hunger(2);
		food.protein(1.5);
		food.decayModifier(3);
	});

	event.foodItem("tfg:food/cooked_sniffer_beef", (food) => {
		food.hunger(4);
		food.saturation(2);
		food.protein(3);
		food.decayModifier(2.25);
	});

	// Wraptor
	event.foodItem("tfg:food/raw_wraptor", (food) => {
		food.hunger(2);
		food.protein(1.5);
		food.decayModifier(3);
	});

	event.foodItem("tfg:food/cooked_wraptor", (food) => {
		food.hunger(4);
		food.saturation(2);
		food.protein(3);
		food.decayModifier(2.25);
	});

	// Springling Collar
	event.foodItem("tfg:food/raw_springling_collar", (food) => {
		food.hunger(2);
		food.protein(1.5);
		food.decayModifier(3);
	});

	event.foodItem("tfg:food/cooked_springling_collar", (food) => {
		food.hunger(4);
		food.saturation(2);
		food.protein(3);
		food.decayModifier(2.25);
	});

	// Surfer Steak
	event.foodItem("tfg:food/raw_surfer_steak", (food) => {
		food.hunger(2);
		food.protein(1.5);
		food.decayModifier(3);
	});

	event.foodItem("tfg:food/cooked_surfer_steak", (food) => {
		food.hunger(4);
		food.saturation(2);
		food.protein(3);
		food.decayModifier(2.25);
	});

	// Cruncher Ribs
	event.foodItem("tfg:food/raw_cruncher_ribs", (food) => {
		food.hunger(2);
		food.protein(2.0);
		food.decayModifier(3);
	});

	event.foodItem("tfg:food/cooked_cruncher_ribs", (food) => {
		food.hunger(4);
		food.saturation(2.2);
		food.protein(4);
		food.decayModifier(2.25);
	});

	// Long Pig Filet
	event.foodItem("tfg:food/raw_long_pig_filet", (food) => {
		food.hunger(2);
		food.protein(1.5);
		food.decayModifier(3);
	});

	event.foodItem("tfg:food/cooked_long_pig_filet", (food) => {
		food.hunger(2);
		food.saturation(2);
		food.protein(2);
		food.decayModifier(2.25);
	});

	// Stackatick Chunks
	event.foodItem("tfg:food/raw_stackatick_chunks", (food) => {
		food.hunger(2);
		food.protein(1.2);
		food.decayModifier(3);
	});

	event.foodItem("tfg:food/raw_stickastackatick", (food) => {
		food.hunger(2);
		food.protein(1.2);
		food.decayModifier(3);
	});

	event.foodItem("tfg:food/cooked_stickastackatick", (food) => {
		food.hunger(4);
		food.saturation(2);
		food.protein(3);
		food.decayModifier(2.25);
	});

	// Walker Steak
	event.foodItem("tfg:food/raw_walker_steak", (food) => {
		food.hunger(2);
		food.protein(2.0);
		food.decayModifier(3);
	});

	event.foodItem("tfg:food/cooked_walker_steak", (food) => {
		food.hunger(4);
		food.saturation(2.2);
		food.protein(4);
		food.decayModifier(2.25);
	});

	// Glider Wings
	event.foodItem("tfg:food/raw_glider_wings", (food) => {
		food.hunger(2);
		food.protein(1.5);
		food.decayModifier(3);
	});

	event.foodItem("tfg:food/cooked_glider_wings", (food) => {
		food.hunger(4);
		food.saturation(2);
		food.protein(2.75);
		food.decayModifier(2.25);
	});

	// Soarer
	event.foodItem("tfg:food/raw_whole_soarer", (food) => {
		food.hunger(2);
		food.protein(1.5);
		food.decayModifier(3);
	});

	event.foodItem("tfg:food/cooked_whole_soarer", (food) => {
		food.hunger(4);
		food.saturation(2);
		food.protein(3.1);
		food.decayModifier(2.25);
	});

	// Crusher Meat
	event.foodItem("tfg:food/raw_crusher_meat", (food) => {
		food.hunger(2);
		food.protein(1.5);
		food.decayModifier(3);
	});

	event.foodItem("tfg:food/cooked_crusher_meat", (food) => {
		food.hunger(4);
		food.saturation(2);
		food.protein(3);
		food.decayModifier(2.25);
	});

	// Goober Meat
	event.foodItem("tfg:food/raw_goober_meat", (food) => {
		food.hunger(2);
		food.protein(1.5);
		food.decayModifier(3);
		food.water(1);
	});

	event.foodItem("tfg:food/cooked_goober_meat", (food) => {
		food.hunger(4);
		food.saturation(2);
		food.protein(3);
		food.decayModifier(2.25);
	});

	// high-tech food
	global.FOOD_FRUIT.forEach((fruit) => {
		event.foodItem(`tfg:food/freeze_dried/${fruit.name}`, (food) => {
			food.hunger(4);
			food.saturation(fruit.saturation);
			food.water(0);
			food.fruit(fruit.fruit);
			food.decayModifier(fruit.decay);
		});
	});

	event.foodItem("tfg:food/calorie_paste", (food) => {
		food.hunger(6);
		food.saturation(4);
		food.decayModifier(4.5);
		food.grain(0.1);
		food.vegetables(0.2);
		food.protein(0.2);
	});

	event.foodItem("tfg:food/meal_bag", (food) => {
		food.type("dynamic");
	});

	// Sunflower products
	event.foodItem("tfg:roasted_sunflower_seeds", (food) => {
		food.hunger(4);
		food.decayModifier(0.5);
		food.grain(0.1);
		food.saturation(0.5);
	});

	event.foodItem("tfg:sunflower_product", (food) => {
		food.decayModifier(0.5);
	});

	// Amber Roots
	event.foodItem("betterend:amber_root_product", (food) => {
		food.hunger(4);
		food.decayModifier(1);
		food.saturation(1);
		food.grain(3);
	});

	// Blossom Berries
	event.foodItem("betterend:blossom_berry_product", (food) => {
		food.hunger(5);
		food.decayModifier(2);
		food.saturation(1);
		food.water(7.5);
		food.fruit(2.1);
	});

	// Cave Pumpkin
	event.foodItem("betterend:cave_pumpkin", (food) => {
		food.hunger(4);
		food.saturation(0);
		food.decayModifier(0.5);
	});

	event.foodItem("betterend:cave_pumpkin_chunks", (food) => {
		food.hunger(4);
		food.saturation(1);
		food.decayModifier(2.5);
		food.water(5);
		food.fruit(0.8);
	});

	event.foodItem("betterend:cave_pumpkin_pie_dough", (food) => {
		food.hunger(2);
		food.decayModifier(3);
	});

	event.foodItem("betterend:cave_pumpkin_pie_raw", (food) => {
		food.hunger(2);
		food.decayModifier(3);
	});

	event.foodItem("betterend:cave_pumpkin_pie", (food) => {
		food.hunger(4);
		food.saturation(2.8);
		food.decayModifier(1.5);
		food.water(5);
		food.protein(1);
		food.fruit(5);
		food.grain(4);
		food.dairy(1);
	});

	// Chorus Mushroom
	event.foodItem("betterend:chorus_mushroom_product", (food) => {
		food.hunger(2);
		food.saturation(1);
		food.decayModifier(3);
		food.water(3);
		food.vegetables(1.5);
	});

	event.foodItem("betterend:chorus_mushroom_cooked", (food) => {
		food.hunger(2);
		food.saturation(2.1);
		food.decayModifier(1.5);
		food.vegetables(2.5);
	});

	// Shadow Berry
	event.foodItem("betterend:shadow_berry_product", (food) => {
		food.hunger(5);
		food.decayModifier(2);
		food.saturation(1);
		food.water(5);
		food.fruit(1.9);
	});

	event.foodItem("betterend:shadow_berry_cooked", (food) => {
		food.hunger(5);
		food.decayModifier(1);
		food.saturation(2);
		food.fruit(2.2);
	});

	// Bolux Mushroom
	event.foodItem("betterend:bolux_mushroom_product", (food) => {
		food.hunger(2);
		food.saturation(1);
		food.decayModifier(3);
		food.water(3);
		food.vegetables(1.5);
	});

	event.foodItem("betterend:bolux_mushroom_cooked", (food) => {
		food.hunger(2);
		food.saturation(2);
		food.decayModifier(1.5);
		food.vegetables(2.4);
	});

	// Dino Nuggets
	event.foodItem('tfg:food/raw_dino_nugget', (food) => {
		food.type("dynamic");
		food.hunger(1);
		food.decayModifier(3);
	});

	event.foodItem('tfg:food/cooked_dino_nugget', (food) => {
		food.type("dynamic");
		food.hunger(3);
		food.saturation(2);
		food.decayModifier(1.5);
	});

	// Ice Soup
	event.foodItem("tfg:food/ice_soup", (food) => {
		food.hunger(1);
		food.water(20);
		food.decayModifier(0);
	});

	// Fries
	event.foodItem('tfg:food/raw_fries', (food) => {
		food.hunger(1);
		food.decayModifier(3);
		food.vegetables(0.25);
	});

	event.foodItem('tfg:food/cooked_fries', (food) => {
		food.hunger(2);
		food.decayModifier(1.5);
		food.vegetables(0.6);
		food.saturation(2);
	});

	// Cheese Curds
	event.foodItem('tfg:food/raw_beer_battered_cheese_curds', (food) => {
		food.hunger(1);
		food.decayModifier(1.3);
		food.dairy(1);
		food.saturation(1);
	});
	
	event.foodItem('tfg:food/cooked_beer_battered_cheese_curds', (food) => {
		food.hunger(3);
		food.decayModifier(0.8);
		food.dairy(1.2);
		food.saturation(2);
		food.grain(0.5);
	});

	// Hamburgers
	event.foodItem('tfg:food/raw_burger_patty', (food) => {
		food.hunger(2);
		food.decayModifier(2.3);
		food.protein(2);
	});
	
	event.foodItem('tfg:food/cooked_burger_patty', (food) => {
		food.hunger(4);
		food.decayModifier(2);
		food.protein(2.5);
		food.saturation(2);
	});

	event.foodItem('tfg:food/brioche_dough', (food) => {
		food.hunger(1.5);
		food.decayModifier(2.3);
	});

	event.foodItem('tfg:food/brioche_bun', (food) => {
		food.hunger(3.5);
		food.decayModifier(1.5);
		food.grain(1.5);
		food.dairy(0.5);
		food.saturation(1);
	});

	event.foodItem('tfg:food/hamburger', (food) => {
		food.type("dynamic");
	});

	event.foodItem('tfg:food/cheeseburger', (food) => {
		food.type("dynamic");
	});

	// Poutine
	event.foodItem('tfg:food/poutine', (food) => {
		food.type("dynamic_bowl");
	});

	// Oatmeal
	event.foodItem('tfg:food/oatmeal', (food) => {
		food.type("dynamic_bowl");
	});

	// Biochem Items
	event.foodItem("tfg:progenitor_cells", (food) => {
		food.decayModifier(1);
	});
	event.foodItem("tfg:rough_endoplasmic_reticula", (food) => {
		food.decayModifier(0.5);
	});
	event.foodItem("tfg:smooth_endoplasmic_reticula", (food) => {
		food.decayModifier(0.5);
	});

	// Instant Mac
	event.foodItem('tfg:food/raw_instant_mac', (food) => {
		food.hunger(2);
		food.decayModifier(0.2);
	});

	event.foodItem('tfg:food/cooked_instant_mac', (food) => {
		food.hunger(3.5);
		food.decayModifier(1.6);
		food.grain(1.5);
		food.dairy(2.5);
		food.protein(0.8);
		food.saturation(1.8);
	});

	//#region Drinkables
	// Proto Growth Medium
	event.drinkable("tfg:proto_growth_medium", (data) => {
		data.thirst(10);
		data.food(food => {
			food.dairy(5);
			food.protein(1);
		});
		data.effect("minecraft:absorption", (effect) => {
			effect.amplifier(2);
			effect.chance(0.25);
			effect.duration(1200);
		});
	});

	// Semiheavy Ammoniacal Water
	event.drinkable("tfg:semiheavy_ammoniacal_water", (data) => {
		data.thirst(10);
		data.effect("minecraft:nausea", (effect) => {
			effect.chance(0.5);
			effect.duration(200);
		});
	});

	// Rich Stock
	event.drinkable('tfg:rich_stock', (data) => {
		data.thirst(4);
		data.effect("tfc:thirst", (effect) => {
			effect.chance(0.2);
			effect.duration(20*5);
		});
		data.food(food => {
			food.protein(0.25);
			food.vegetables(0.25);
		});
	});

	// Light Stock
	event.drinkable('tfg:light_stock', (data) => {
		data.thirst(4);
		data.effect("tfc:thirst", (effect) => {
			effect.chance(0.2);
			effect.duration(20*5);
		});
		data.food(food => {
			food.protein(0.25);
			food.vegetables(0.25);
		});
	});

	// Brown Gravy
	event.drinkable('tfg:brown_gravy', (data) => {
		data.thirst(2);
		data.effect("tfc:thirst", (effect) => {
			effect.chance(0.3);
			effect.duration(20*5);
		});
		data.food(food => {
			food.protein(0.5);
			food.vegetables(0.5);
			food.grain(0.25);
		});
	});

	//#endregion
}
