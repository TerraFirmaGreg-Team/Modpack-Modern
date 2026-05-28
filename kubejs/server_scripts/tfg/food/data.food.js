"use strict";

/** @param {Internal.TFCDataEventJS} event */
function registerTFGFoodData(event) {

	// Load nutrient types.
	const $Nutrient = Java.loadClass('net.dries007.tfc.common.capabilities.food.Nutrient');
	const $INutrientExtension = Java.loadClass('su.terrafirmagreg.core.common.food.nutrient.INutrientExtension');

	/**
	 * Registers food items from the `TFG_CREATE_GENERIC_FOOD_ITEM` array. 
	 * Each item should have an id, and either nutrition or mealType defined.
	 */
	global.TFG_CREATE_GENERIC_FOOD_ITEM.forEach((foodItem) => {	
		
		event.itemHeat(foodItem.id, 1, null, null);

		if (!foodItem.nutrition && !foodItem.mealType) return;
		
		event.foodItem(foodItem.id, (food) => {
			// Set meal type.
			if (foodItem.mealType) {
				food.type(foodItem.mealType);
				return;
			}
			// Set basic properties.
			// Hunger defaults to 4 if not specified, but if its 0 it wont set any value.
			if (foodItem.nutrition.hunger !== 0 && !foodItem.inedible) {
				food.hunger(foodItem.nutrition.hunger !== undefined && foodItem.nutrition.hunger !== null ? foodItem.nutrition.hunger : 4);
			};
			foodItem.nutrition.saturation && food.saturation(foodItem.nutrition.saturation);
			foodItem.nutrition.water && food.water(foodItem.nutrition.water);
			// Decay defaults to 0 (non-perishable).
			food.decayModifier(foodItem.nutrition.decay || 0);

			// Set nutrition dynamically using enum entries. Defaults to none.
			$Nutrient.VALUES.forEach(nutrient => {
				const nutrientName = nutrient.getSerializedName();
				if (foodItem.nutrition[nutrientName]) {
					food[nutrientName](foodItem.nutrition[nutrientName]);
				}
			});
		});
	});

	/**
	 * Registers freeze dried fruits from the `FOOD_FRUIT` array. Each fruit should have a name, saturation, decay, and fruit value defined.
	 */
	global.FOOD_FRUIT.forEach((fruit) => {
		event.foodItem(`tfg:food/freeze_dried/${fruit.name}`, (food) => {
			food.hunger(4);
			food.saturation(fruit.saturation);
			food.water(0);
			food.microplastics(0.5);
			food.fruit(fruit.fruit);
			food.decayModifier(fruit.decay);
		});
	});

	// Ice shavings
	event.foodItem('firmalife:ice_shavings', food => {
		food.water(5)
		food.decayModifier(0)
	})

	// Cave Pumpkin
	event.foodItem("betterend:cave_pumpkin", (food) => {
		food.hunger(4);
		food.saturation(0);
		food.decayModifier(0.5);
	});

	// Ice Soup
	event.foodItem("tfg:food/ice_soup", (food) => {
		food.hunger(1);
		food.water(20);
		food.decayModifier(0);
	});

	// Honeyed Apple
	event.foodItem('create:honeyed_apple', (food) => {
		food.hunger(4.0);
		food.decayModifier(0.8);
		food.water(5);
		food.fruit(2);
		food.saturation(1);
	});

	// Food Items registered in core.
	// Lavacado
	event.foodItem('tfg:food/lavacado', (food) => {
		food.hunger(4.0);
		food.decayModifier(2);
		food.vegetables(1.5);
		food.saturation(1);
	});

	// Magmango
	event.foodItem('tfg:food/magmango', (food) => {
		food.hunger(4.0);
		food.decayModifier(2.25);
		food.water(15);
		food.fruit(1.5);
		food.saturation(1);
	});

	// Fly Agaric
	event.foodItem('tfg:food/fly_agaric', (food) => {
		food.hunger(4.0);
		food.decayModifier(2.1);
		food.water(2);
		food.vegetables(1.0);
		food.nauseating(2.0);
	});

	// Eggs
	/**
	 * Array of egg items to get food data. 
	 * Do not register eggs that can be fertilized here. Those items dynamically change expiration time.
	 * @type {{String<Item>}}
	 */
	const eggItems = [
		'wan_ancient_beasts:charger_egg',
		'wan_ancient_beasts:crusher_egg',
		'wan_ancient_beasts:eater_egg',
		'wan_ancient_beasts:glider_egg',
		'wan_ancient_beasts:petrified_egg',
		'wan_ancient_beasts:raider_egg',
		'wan_ancient_beasts:snatcher_egg',
		'wan_ancient_beasts:soarer_egg',
		'wan_ancient_beasts:surfer_egg',
		'wan_ancient_beasts:walker_egg',
		'species:cruncher_egg',
		'species:birt_egg',
		'species:petrified_egg',
		'species:springling_egg'
	];
	eggItems.forEach(egg => {
		event.foodItem(egg, food => {
			food.decayModifier(2)
		});
	});

	event.foodItem('species:cracked_wraptor_egg', food => {
		food.hunger(4)
		food.saturation(1)
		food.water(5)
		food.decayModifier(3)
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

	// Muddy Water
	event.drinkable('tfg:muddy_water', (data) => {
		data.thirst(10);
		data.food(food => {
			food.parasites(0.25);
			food.nauseating(10);
		});
		data.effect("tfc:thirst", (effect) => {
			effect.chance(1);
			effect.duration(20*10);
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
