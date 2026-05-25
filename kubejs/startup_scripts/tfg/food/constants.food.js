// priority: 10
"use strict";

//#region Animal Products

/**
 * Array of animal products to run through `function.createGenericMeatItems(meatItem)`
 * Default values are applied for any missing properties.
 * @typedef {Object} AnimalProduct
 * @property {string} name Animal product name. e.g. "limpet", "glider_wings", etc.
 * @property {number} [hunger]
 * @property {number} [saturation]
 * @property {number} [protein]
 * @property {number} [decay] 2 is a good value for meat that should expire quicker like poultry or seafood.
 * @property {number} [parasites] Parasites are only applied to raw meat.
 * @property {number} [toxins]
 * @property {number} [water] Water is only applied to raw meat.
 */

/** @type {AnimalProduct[]} */
const animalProducts = [
	{name: 'limpet', protein: 2.2},
	{name: 'crawlermari', protein: 2.2, decay: 2, parasites: 3},
	{name: 'moon_rabbit', protein: 2.2},
	{name: 'glacian_mutton', protein: 3},
	{name: 'sniffer_beef', protein: 3},
	{name: 'wraptor', protein: 3, decay: 2},
	{name: 'bison_meat', protein: 3},
	{name: 'springling_collar', protein: 3, decay: 2},
	{name: 'walker_steak', saturation: 2.2, protein: 4},
	{name: 'glider_wings', protein: 2.75, decay: 2},
	{name: 'whole_soarer', protein: 3.0, decay: 2},
	{name: 'crusher_meat', protein: 3, parasites: 3},
	{name: 'goober_meat', water: 10, protein: 3, decay: 2},
	{name: 'cruncher_ribs', saturation: 2.2, protein: 4},
	{name: 'surfer_steak', protein: 3},
	{name: 'long_pig_filet', protein: 2, decay: 2, toxins: 3},
];

//#endregion

/**
 * Creates a generic food item with the set properties.
 * Will handle item creation, food data, and heat data.
 * @typedef {Object} TFGCreateGenericFoodItem
 * @property {string} id Item ID
 * @property {string} texture Texture resource location.
 * @property {Object|undefined} [nutrition] Nutrition properties for the food item.
 * @property {number|undefined} [nutrition.hunger] Hunger value. Defaults to 4 if nutrition is defined but hunger undefined. If inedible defaults to null.
 * @property {number|undefined} [nutrition.saturation] Saturation value. No default.
 * @property {number|undefined} [nutrition.water] Water value. No default.
 * @property {number|undefined} [nutrition.decay] Decay modifier value. Defaults to 0 (nonperishable) if nutrition is defined but decay is undefined.
 * @property {number|undefined} [nutrition.dairy] Dairy value. No default.
 * @property {number|undefined} [nutrition.vegetables] Vegetable value. No default.
 * @property {number|undefined} [nutrition.fruit] Fruit value. No default.
 * @property {number|undefined} [nutrition.grain] Grain value. No default.
 * @property {number|undefined} [nutrition.protein] Protein value. No default.
 * @property {number|undefined} [nutrition.toxins] Toxin value. No default.
 * @property {number|undefined} [nutrition.microplastics] Microplastic value. No default.
 * @property {number|undefined} [nutrition.parasites] Parasite value. No default.
 * @property {boolean|undefined} [inedible] If true, the item cannot be eaten and will not have food properties.
 * @property {Object|Object[]|undefined} [effect] Effect or effects applied when the food is eaten. Each effect should have an id, duration, strength, and probability.
 * @property {string|undefined} [returnItem] Item ID of an item returned to the player when the food is eaten.
 * @property {string[]|undefined} [tags] Array of item tags to apply to the food item.
 */
/**
 * @type {TFGCreateGenericFoodItem[]}
 */
global.TFG_CREATE_GENERIC_FOOD_ITEM = /** @type {TFGCreateGenericFoodItem[]} */ ([
	//#region Meat Items.

	// Stackatick
	{
		id: 'tfg:food/raw_stackatick_chunks',
		texture: 'tfg:item/food/raw_stackatick_chunks',
		nutrition: {
			protein: 1.2,
			decay: 3
		},
        effect: {id: 'minecraft:hunger', duration: 600, strength: 3, probability: 0},
		tags: ['tfc:foods/meats', 'tfc:foods/raw_meats']
	},{
		id: 'tfg:food/raw_stickastackatick',
		texture: 'tfg:item/food/raw_stickastackatick',
		nutrition: {
			protein: 1.2,
			decay: 3
		},
        effect: {id: 'minecraft:hunger', duration: 600, strength: 3, probability: 0},
		returnItem: 'minecraft:stick',
		tags: ['tfc:foods/meats', 'tfc:foods/raw_meats']
	},{
		id: 'tfg:food/cooked_stickastackatick',
		texture: 'tfg:item/food/cooked_stickastackatick',
		nutrition: {
			saturation: 2,
			protein: 3,
			decay: 2.25
		},
		returnItem: 'minecraft:stick',
		tags: ['tfc:foods/meats', 'tfc:foods/cooked_meats']
	},
	// Birt
	{
		id: 'tfg:food/cooked_birt',
		texture: 'tfg:item/food/cooked_birt',
		nutrition: {
			saturation: 2,
			protein: 2.2,
			decay: 2.25
		},
		tags: ['tfc:foods/meats', 'tfc:foods/cooked_meats']
	},

	//#endregion
	//#region Crops

	// Sunflower
	{
		id: 'tfg:sunflower_product',
		texture: 'tfg:item/sunflower_product',
		nutrition: {
			hunger: 0,
			decay: 0.5
		}
	},{
		id: 'tfg:roasted_sunflower_seeds',
		texture: 'tfg:item/roasted_sunflower_seeds',
		nutrition: {
			grain: 0.5,
			saturation: 0.5,
			decay: 0.5
		},
		tags: ['tfc:foods/grains', 'tfc:foods/usable_in_salad']
	},
	// Lentil
	{
		id: 'tfg:lentil_product',
		texture: 'tfg:item/lentil_product',
		nutrition: {
			decay: 1
		}
	},{
		id: 'tfg:food/cooked_lentil',
		texture: 'tfg:item/food/cooked_lentil',
		nutrition: {
			vegetables: 2,
			saturation: 1.5,
			decay: 0.8
		},
		tags: ['tfc:foods/vegetables', 'tfg:foods/legumes']
	},
	// Radish
	{
		id: 'tfg:radish_product',
		texture: 'tfg:item/radish_product',
		nutrition: {
			vegetables: 2,
			saturation: 2,
			decay: 0.8
		},
		tags: ['tfc:foods/vegetables']
	},
	// Cucumber
	{
		id: 'tfg:cucumber_product',
		texture: 'tfg:item/cucumber_product',
		nutrition: {
			water: 10,
			vegetables: 2,
			saturation: 1,
			decay: 1
		},
		tags: ['tfc:foods/vegetables']
	},
	// Peanut
	{
		id: 'tfg:peanut_product',
		texture: 'tfg:item/peanut_product',
		nutrition: {
			protein: 0.5,
			vegetables: 1,
			saturation: 1,
			decay: 1
		},
		tags: ['tfc:foods/vegetables', 'tfg:foods/legumes']
	},
	// Cassava
	{
		id: 'tfg:cassava_product',
		texture: 'tfg:item/cassava_product',
		nutrition: {
			decay: 0.8
		}
	},{
		id: 'tfg:food/cooked_cassava',
		texture: 'tfg:item/food/cooked_cassava',
		nutrition: {
			decay: 1,
			vegetables: 2,
			saturation: 2
		},
		tags: ['tfc:foods/vegetables', 'tfg:foods/root_vegetables']
	},
	// Beans
	{
		id: 'tfg:beans_product',
		texture: 'tfg:item/beans_product',
		nutrition: {
			decay: 0.8
		}
	},{
		id: 'tfg:food/cooked_beans',
		texture: 'tfg:item/food/cooked_beans',
		nutrition: {
			decay: 0.8,
			vegetables: 0.5,
			saturation: 1,
			protein: 1
		},
		tags: ['tfc:foods/vegetables', 'tfg:foods/legumes']
	},
	// Amber Root
	{
		id: 'betterend:amber_root_product',
		texture: 'betterend:item/amber_roots',
		nutrition: {
			decay: 1,
			grain: 3,
			saturation: 1
		},
		tags: ['tfg:martian_herbivore_foods', 'tfc:foods/grains', 'tfg:foods/root_vegetables']
	},
	// Blossom Berry
	{
		id: 'betterend:blossom_berry_product',
		texture: 'betterend:item/blossom_berry',
		nutrition: {
			decay: 2,
			saturation: 1,
			water: 7.5,
			fruit: 2.1
		},
		tags: ['tfg:martian_herbivore_foods', 'tfc:foods/fruits']
	},
	// Cave Pumpkin
	{
		id: 'betterend:cave_pumpkin_chunks',
		texture: 'betterend:item/cave_pumpkin_chunks',
		nutrition: {
			decay: 2.5,
			saturation: 1,
			water: 5,
			fruit: 0.8
		},
		tags: ['tfg:martian_herbivore_foods', 'tfc:foods/fruits'],
		effect: {id: 'minecraft:glowing', duration: 200, strength: 0, probability: 1}
	},{
		id: 'betterend:cave_pumpkin_pie_dough',
		texture: 'betterend:item/cave_pumpkin_pie_dough',
		nutrition: {
			decay: 3
		}
	},{
		id: 'betterend:cave_pumpkin_pie_raw',
		texture: 'betterend:item/cave_pumpkin_pie_raw',
		nutrition: {
			decay: 3
		},
		inedible: true,
		tags: ['firmalife:foods/washable']
	},{
		id: 'betterend:cave_pumpkin_pie',
		texture: 'betterend:item/cave_pumpkin_pie',
		nutrition: {
			decay: 1.5,
			saturation: 2.8,
			water: 5,
			protein: 1,
			fruit: 5,
			grain: 4,
			dairy: 1
		},
		returnItem: 'firmalife:pie_pan',
		tags: ['firmalife:foods/washable']
	},
	// Chorus Mushroom
	{
		id: 'betterend:chorus_mushroom_product',
		texture: 'betterend:item/chorus_mushroom_raw',
		nutrition: {
			decay: 3,
			saturation: 1,
			water: 3,
			vegetables: 1.5,
			toxins: 3
		},
		tags: ['tfg:martian_herbivore_foods', 'tfc:foods/vegetables', 'forge:mushrooms', 'tfg:foods/toxins'],
		effect: [
			{id: 'minecraft:hunger', duration: 600, strength: 0, probability: 1},
			{id: 'minecraft:weakness', duration: 600, strength: 0, probability: 1}
		]
	},{
		id: 'betterend:chorus_mushroom_cooked',
		texture: 'betterend:item/chorus_mushroom_cooked',
		nutrition: {
			decay: 1.5,
			saturation: 2.1,
			vegetables: 2.5
		},
		tags: ['tfc:foods/vegetables', 'forge:mushrooms']
	},
	// Shadow Berry
	{
		id: 'betterend:shadow_berry_product',
		texture: 'betterend:item/shadow_berry',
		nutrition: {
			decay: 2,
			saturation: 1,
			water: 5,
			fruit: 1.9,
			toxins: 4
		},
		tags: ['tfg:martian_herbivore_foods', 'tfc:foods/fruits', 'tfg:foods/toxins'],
		effect: {id: 'minecraft:poison', duration: 500, strength: 0, probability: 1}
	},{
		id: 'betterend:shadow_berry_cooked',
		texture: 'betterend:item/shadow_berry_cooked',
		nutrition: {
			decay: 1,
			saturation: 2,
			fruit: 2.2
		},
		tags: ['tfc:foods/fruits']
	},
	// Bolux Mushroom
	{
		id: 'betterend:bolux_mushroom_product',
		texture: 'betterend:item/bolux_mushroom',
		nutrition: {
			decay: 3,
			saturation: 1,
			water: 3,
			vegetables: 1.5,
			toxins: 3
		},
		tags: ['tfg:martian_herbivore_foods', 'tfc:foods/vegetables', 'forge:mushrooms', 'tfg:foods/toxins'],
		effect: [
			{id: 'tfc:thirst', duration: 1200, strength: 0, probability: 1},
			{id: 'minecraft:nausea', duration: 600, strength: 0, probability: 1}
		]
	},{
		id: 'betterend:bolux_mushroom_cooked',
		texture: 'betterend:item/bolux_mushroom_cooked',
		nutrition: {
			decay: 1.5,
			saturation: 2,
			vegetables: 2.4
		},
		tags: ['tfc:foods/vegetables', 'forge:mushrooms']
	},
	// #endregion
	// #region Meals
	// Meal Bag
	{
		id: 'tfg:food/meal_bag',
		texture: 'tfg:item/food/meal_bag',
		mealType: 'dynamic',
		returnItem: 'tfg:used_foil_pack',
		tags: ['tfg:space_food', 'tfg:foods/microplastics']
	},
	// Calorie Paste
	{
		id: 'tfg:food/calorie_paste',
		texture: 'tfg:item/food/calorie_paste',
		nutrition: {
			hunger: 6,
			saturation: 4,
			protein: 0.2,
			grain: 0.1,
			vegetables: 0.2,
			decay: 4.5,
			microplastics: 2.0
		},
		returnItem: 'tfg:used_foil_pack',
		tags: ['tfg:space_food', 'tfg:foods/microplastics']
	},
	// Dino Nuggies
	{
		id: 'tfg:food/raw_dino_nugget',
		texture: 'tfg:item/food/raw_dino_nugget',
		mealType: 'dynamic',
		nutrition: {
			decay: 3
		}
	},{
		id: 'tfg:food/cooked_dino_nugget',
		texture: 'tfg:item/food/cooked_dino_nugget',
		mealType: 'dynamic',
		nutrition: {
			decay: 1.5,
			saturation: 2
		}
	},
	// Popcorn
	{
		id: 'tfg:food/popcorn',
		texture: 'tfg:item/food/popcorn',
		nutrition: {
			decay: 1,
			grain: 0.6,
			saturation: 1
		}
	},{
		id: 'tfg:food/buttered_popcorn',
		texture: 'tfg:item/food/buttered_popcorn',
		nutrition: {
			decay: 1,
			saturation: 2,
			grain: 0.6,
			dairy: 0.3
		}
	},
	// Fries
	{
		id: 'tfg:food/raw_fries',
		texture: 'tfg:item/food/raw_fries',
		nutrition: {
			decay: 2.5,
			vegetables: 0.25
		}
	},{
		id: 'tfg:food/cooked_fries',
		texture: 'tfg:item/food/cooked_fries',
		nutrition: {
			decay: 1.5,
			vegetables: 0.6,
			saturation: 2
		},
		tags: ['tfg:foods/usable_in_burgers']
	},
	// Fried Cheese Curds
	{
		id: 'tfg:food/raw_beer_battered_cheese_curds',
		texture: 'tfg:item/food/raw_beer_battered_cheese_curds',
		nutrition: {
			decay: 1.3,
			dairy: 1,
			saturation: 1
		}
	},{
		id: 'tfg:food/cooked_beer_battered_cheese_curds',
		texture: 'tfg:item/food/cooked_beer_battered_cheese_curds',
		nutrition: {
			decay: 0.8,
			dairy: 1.2,
			saturation: 2,
			grain: 0.5
		},
		tags: ['tfg:foods/usable_in_burgers']
	},
	// Poutine
	{
		id: 'tfg:food/poutine',
		texture: 'tfg:item/food/poutine',
		mealType: 'dynamic_bowl'
	},
	// Oatmeal
	{
		id: 'tfg:food/oatmeal',
		texture: 'tfg:item/food/oatmeal',
		mealType: 'dynamic_bowl'
	},
	// Burgers
	{
		id: 'tfg:food/hamburger',
		texture: 'tfg:item/food/hamburger',
		mealType: 'dynamic'
	},{
		id: 'tfg:food/cheeseburger',
		texture: 'tfg:item/food/cheeseburger',
		mealType: 'dynamic'
	},
	// Brioche
	{
		id: 'tfg:food/brioche_dough',
		texture: 'tfg:item/food/brioche_dough',
		nutrition: {
			decay: 2.3
		}
	},{
		id: 'tfg:food/brioche_bun',
		texture: 'tfg:item/food/brioche_bun',
		nutrition: {
			decay: 1.5,
			grain: 1.5,
			dairy: 0.5,
			saturation: 1.0
		}
	},
	// Patties
	{
		id: 'tfg:food/raw_burger_patty',
		texture: 'tfg:item/food/raw_burger_patty',
		nutrition: {
			decay: 2.3,
			protein: 2
		},
		tags: ['tfc:foods/meats', 'tfc:foods/raw_meats']
	},{
		id: 'tfg:food/cooked_burger_patty',
		texture: 'tfg:item/food/cooked_burger_patty',
		nutrition: {
			decay: 2.0,
			protein: 2.5,
			saturation: 2.0
		},
		tags: ['tfc:foods/meats', 'tfc:foods/cooked_meats', 'tfg:foods/usable_in_burgers']
	},
	// Instant Mac
	{
		id: 'tfg:food/raw_instant_mac',
		texture: 'tfg:item/food/raw_instant_mac',
		nutrition: {
			decay: 0.2
		},
		inedible: true,
		returnItem: 'create:cardboard'
	},{
		id: 'tfg:food/cooked_instant_mac',
		texture: 'tfg:item/food/cooked_instant_mac',
		nutrition: {
			decay: 1.6,
			grain: 1.5,
			dairy: 2.5,
			protein: 0.8,
			saturation: 1.8,
			microplastics: 2.0
		},
		tags: ['tfg:foods/microplastics'],
		returnItem: 'create:cardboard'
	},
	// "Cheese"
	{
		id: 'tfg:food/slice_of_cheese',
		texture: 'tfg:item/food/slice_of_cheese',
		nutrition: {
			decay: 0.1,
			dairy: 0.2,
			microplastics: 0.4
		},
		returnItem: 'gtceu:polyethylene_foil',
		tags: ['tfc:foods/usable_in_jam_sandwich', 'tfc:foods/usable_in_sandwich', 'tfg:foods/usable_in_meal_bag', 'tfc:foods/dairy', 'tfg:foods/microplastics']
	},
	// Crude Gelatin
	{
		id: 'tfg:food/crude_gelatin',
		texture: 'tfg:item/food/crude_gelatin',
		nutrition: {
			decay: 0.2
		},
		inedible: true
	}
	// #endregion
]);

// #region Fruits

/**
 * @typedef {Object} Fruit
 * @property {string} name Fruit name. e.g. "red_grapes", "chorus_fruit", etc.
 * @property {string} id Item ID of the fruit.
 * @property {number} color Color of the fruit for automatic texture generation. 0xRRGGBB format.
 * @property {boolean|undefined} genFreezeDried Whether to generate a freeze dried version of this fruit.
 * @property {boolean|undefined} genJam Whether to generate a jam version of this fruit.
 * @property {number} saturation Saturation value.
 * @property {number} water Water value.
 * @property {number} fruit Fruit value.
 * @property {number} decay Decay modifier.
 */
/** @type {Fruit[]} */
global.FOOD_FRUIT = [
	{name: 'red_grapes', id: 'firmalife:food/red_grapes', color: 0x712f75, genFreezeDried: true, saturation: 0.4, water: 2, fruit: 0.5, decay: 2.25},
	{name: 'white_grapes', id: 'firmalife:food/white_grapes', color: 0x819b2c, genFreezeDried: true, saturation: 0.4, water: 2, fruit: 0.5, decay: 2.25},
	{name: 'glow_berries', id: 'minecraft:glow_berries', color: 0xee9444, genFreezeDried: true, genJam: true, saturation: 0, water: 5, fruit: 0.5, decay: 2.25},
	{name: 'chorus_fruit', id: 'minecraft:chorus_fruit', color: 0x8c668b, genFreezeDried: true, genJam: true, saturation: 0, water: 5, fruit: 2, decay: 1.2},
	{name: 'popped_chorus_fruit', id: 'minecraft:popped_chorus_fruit', color: 0x633b63, genFreezeDried: true, genJam: true, saturation: 1, water: 0, fruit: 3, decay: 0.8},
	{name: 'blackberry', id: 'tfc:food/blackberry', color: 0x3e2664, genFreezeDried: true, saturation: 0.2, water: 5, fruit: 0.8, decay: 4.5},
	{name: 'blueberry', id: 'tfc:food/blueberry', color: 0x2f42a3, genFreezeDried: true, saturation: 0.2, water: 5, fruit: 0.8, decay: 4.5},
	{name: 'bunchberry', id: 'tfc:food/bunchberry', color: 0xda1b45, genFreezeDried: true, saturation: 0.4, water: 5, fruit: 0.8, decay: 4.5},
	{name: 'cloudberry', id: 'tfc:food/cloudberry', color: 0xe54e2c, genFreezeDried: true, saturation: 0.4, water: 5, fruit: 0.8, decay: 4.5},
	{name: 'cranberry', id: 'tfc:food/cranberry', color: 0xa3001c, genFreezeDried: true, saturation: 0.2, water: 5, fruit: 1, decay: 2.25},
	{name: 'elderberry', id: 'tfc:food/elderberry', color: 0x580042, genFreezeDried: true, saturation: 0.2, water: 5, fruit: 1, decay: 4.5},
	{name: 'gooseberry', id: 'tfc:food/gooseberry', color: 0x75a62a, genFreezeDried: true, saturation: 0.4, water: 5, fruit: 0.8, decay: 4.5},
	{name: 'raspberry', id: 'tfc:food/raspberry', color: 0xa6314d, genFreezeDried: true, saturation: 0.4, water: 5, fruit: 0.8, decay: 4.5},
	{name: 'snowberry', id: 'tfc:food/snowberry', color: 0xbebebe, genFreezeDried: true, saturation: 0.2, water: 5, fruit: 1, decay: 4.5},
	{name: 'strawberry', id: 'tfc:food/strawberry', color: 0xa6314d, genFreezeDried: true, saturation: 0.4, water: 10, fruit: 0.5, decay: 4.5},
	{name: 'wintergreen_berry', id: 'tfc:food/wintergreen_berry', color: 0x822927, genFreezeDried: true, saturation: 0.2, water: 5, fruit: 1, decay: 2.1},
	{name: 'banana', id: 'tfc:food/banana', color: 0xe6cd47, genFreezeDried: true, saturation: 0.2, water: 0, fruit: 1, decay: 2.25},
	{name: 'cherry', id: 'tfc:food/cherry', color: 0xcf3360, genFreezeDried: true, saturation: 0.2, water: 5, fruit: 1, decay: 3.5},
	{name: 'green_apple', id: 'tfc:food/green_apple', color: 0x789945, genFreezeDried: true, saturation: 0.4, water: 0, fruit: 1, decay: 2.5},
	{name: 'lemon', id: 'tfc:food/lemon', color: 0xd9be38, genFreezeDried: true, saturation: 0.2, water: 5, fruit: 0.08, decay: 2.25},
	{name: 'olive', id: 'tfc:food/olive', color: 0x85a55f, genFreezeDried: true, saturation: 0.2, water: 0, fruit: 1, decay: 2.25},
	{name: 'orange', id: 'tfc:food/orange', color: 0xde8d33, genFreezeDried: true, saturation: 0.4, water: 10, fruit: 0.5, decay: 2.25},
	{name: 'peach', id: 'tfc:food/peach', color: 0xc56954, genFreezeDried: true, saturation: 0.4, water: 10, fruit: 0.5, decay: 2.5},
	{name: 'plum', id: 'tfc:food/plum', color: 0x8a40b7, genFreezeDried: true, saturation: 0.4, water: 5, fruit: 0.8, decay: 2.25},
	{name: 'red_apple', id: 'tfc:food/red_apple', color: 0x9f3131, genFreezeDried: true, saturation: 0.4, water: 0, fruit: 1, decay: 2.25},
	{name: 'pumpkin_chunks', id: 'tfc:food/pumpkin_chunks', color: 0xa97c4c, genFreezeDried: true, saturation: 1, water: 5, fruit: 0.8, decay: 2.25},
	{name: 'melon_slice', id: 'tfc:food/melon_slice', color: 0xad160b, genFreezeDried: true, saturation: 0.2, water: 5, fruit: 0.8, decay: 2.25},
	{name: 'fig', id: 'firmalife:food/fig', color: 0x9e4264, genFreezeDried: true, saturation: 1, water: 5, fruit: 0.9, decay: 1},
	{name: 'pineapple', id: 'firmalife:food/pineapple', color: 0xd5b600, genFreezeDried: true, saturation: 1, water: 1, fruit: 0.8, decay: 4.5},
	{name: 'cave_pumpkin', id: 'betterend:cave_pumpkin_chunks', color: 0xe5e2c0, genFreezeDried: true, genJam: true, saturation: 1, water: 5, fruit: 0.8, decay: 2.25 },
	{name: 'blossom_berry', id: 'betterend:blossom_berry_product', color: 0xcc4db7, genFreezeDried: true, genJam: true, saturation: 1, water: 7.5, fruit: 1.5, decay: 2 },
	{name: 'shadow_berry', id: 'betterend:shadow_berry_cooked', color: 0x2c276f, genFreezeDried: true, genJam: true, saturation: 1, water: 5, fruit: 1.5, decay: 2 },
	{name: 'magmango', id: 'tfg:food/magmango', color: 0xeca345, genFreezeDried: true, saturation: 1, genJam: true, water: 15, fruit: 1.5, decay: 2.25}
];

// #endregion
// #region Food Effects

/** @type {string[]} - List of foods that apply the cooling effect */
global.COOLING_FOODS = [
	'firmalife:food/vanilla_ice_cream',
	'firmalife:food/chocolate_ice_cream',
	'firmalife:food/strawberry_ice_cream',
	'firmalife:food/cookie_dough_ice_cream',
	'firmalife:food/banana_split'
];

/** @type {string[]} - List of foods that apply a strong cooling effect */
global.COOLING_FOODS_STRONG = [
	'tfg:ice_soup'
];

/** @type {string[]} - List of foods that apply a warming effect */
global.WARMING_FOODS = [
	'tfc:food/grain_soup',
	'tfc:food/fruit_soup',
	'tfc:food/vegetables_soup',
	'tfc:food/protein_soup',
	'tfc:food/dairy_soup',
	'tfg:food/poutine'
];

// #endregion
// #region Spices

/**
 * Any registry after vanilla will have spice product items generated.
 * @typedef {Object} spices
 * @property {string} plant - Spice Plant
 * @property {string} product - Spice Product
 */
/** @type {spices[]} - Item IDs */
global.SPICES = [
	// Cinnamon is not obtainable so im not including it yet.
	{ plant: 'firmalife:plant/basil', product: 'firmalife:spice/basil_leaves' },
	{ plant: 'firmalife:plant/vanilla', product: 'firmalife:spice/vanilla' },
	// New spices V
	{ plant: 'firmalife:plant/bay_laurel', product: 'tfg:spice/bay_leaf' },
	{ plant: 'firmalife:plant/cardamom', product: 'tfg:spice/cardamom_pods' },
	{ plant: 'firmalife:plant/cilantro', product: 'tfg:spice/cilantro_leaves' },
	{ plant: 'firmalife:plant/cumin', product: 'tfg:spice/cumin_seeds' },
	{ plant: 'firmalife:plant/oregano', product: 'tfg:spice/oregano_leaves' },
	{ plant: 'firmalife:plant/pimento', product: 'tfg:spice/allspice' }
];

// #endregion
// #region Alcohols

/**
 * Index of alcohols.
 * @typedef {Object} alcohols
 * ------------------------------------------------------------------------------
 * @property {Fluid} id Fluid id. eg. 'tfc:whiskey'
 * @property {boolean} genBase Whether to generate a base version of this alcohol.
 * @property {Object[]} effects List of effects applied by the base version. eg. `[{id: 'minecraft:haste', strength: 1, duration: 2400}]`
 * ------------------------------------------------------------------------------
 * @property {Fluid} agedId Fluid id of the aged version. eg. 'tfcagedalcohol:aged_whiskey'
 * @property {boolean} genAged Whether to generate an aged version of this alcohol. Requires base version.
 * @property {Object[]} agedEffects List of effects applied by the aged version. eg. `[{id: 'minecraft:haste', strength: 2, duration: 3200}]`
 * ------------------------------------------------------------------------------
 * @property {Fluid} vintageId Fluid id of the vintage version. eg. 'tfg:vintage_whiskey'
 * @property {boolean} genVintage Whether to generate a vintage version of this alcohol. Requires aged version.
 * @property {Object[]} vintageEffects List of effects applied by the vintage version. eg. `[{id: 'minecraft:haste', strength: 3, duration: 4800}]`
 * ------------------------------------------------------------------------------
 * @property {Item|Item<tag>} ingredient Ingredient. eg. 'tfc:food/wheat_flour'
 * @property {string} name Alcohol Name. eg. 'whiskey'
 * @property {number} color Alcohol Color eg. 0x392e14
 */
/** @type {alcohols[]} - Item IDs */
global.ALCOHOLS = [
	{
		id: 'tfc:beer',
		agedId: 'tfcagedalcohol:aged_beer', agedEffects: [{id: 'minecraft:absorption', strength: 2, duration: 6400}], //5:20
		vintageId: 'tfg:vintage_beer', genVintage: true, vintageEffects: [{id: 'minecraft:absorption', strength: 3, duration: 9600}], //8:00
		ingredient: 'tfc:food/barley_flour', name: 'beer', color: 0x6b5d21
	},{
		id: 'tfc:cider',
		agedId: 'tfcagedalcohol:aged_cider', agedEffects: [{id: 'minecraft:speed', strength: 1, duration: 6400}],
		vintageId: 'tfg:vintage_cider', genVintage: true, vintageEffects: [{id: 'minecraft:speed', strength: 2, duration: 9600}],
		ingredient: '#tfc:foods/apples', name: 'cider', color: 0x62651f
	},{
		id: 'tfc:rum',
		agedId: 'tfcagedalcohol:aged_rum', agedEffects: [{id: 'minecraft:speed', strength: 2, duration: 3200}], //2:40
		vintageId: 'tfg:vintage_rum', genVintage: true, vintageEffects: [{id: 'minecraft:speed', strength: 3, duration: 4800}], // 4:00
		ingredient: '#tfg:sugars', name: 'rum', color: 0x461519
	},{
		id: 'tfc:sake',
		agedId: 'tfcagedalcohol:aged_sake', agedEffects: [{id: 'minecraft:resistance', strength: 1, duration: 6400}],
		vintageId: 'tfg:vintage_sake', genVintage: true, vintageEffects: [{id: 'minecraft:resistance', strength: 2, duration: 9600}],
		ingredient: 'tfc:food/rice_flour', name: 'sake', color: 0x65785e
	},{
		id: 'tfc:vodka',
		agedId: 'tfcagedalcohol:aged_vodka', agedEffects: [{id: 'minecraft:resistance', strength: 2, duration: 3200}],
		vintageId: 'tfg:vintage_vodka', genVintage: true, vintageEffects: [{id: 'minecraft:resistance', strength: 3, duration: 4800}],
		ingredient: 'tfc:food/potato', name: 'vodka', color: 0x76796d
	},{
		id: 'tfc:whiskey',
		agedId: 'tfcagedalcohol:aged_whiskey', agedEffects: [{id: 'minecraft:haste', strength: 2, duration: 3200}],
		vintageId: 'tfg:vintage_whiskey', genVintage: true, vintageEffects: [{id: 'minecraft:haste', strength: 3, duration: 4800}],
		ingredient: 'tfc:food/wheat_flour', name: 'whiskey', color: 0x392e14
	},{
		id: 'tfc:corn_whiskey',
		agedId: 'tfcagedalcohol:aged_corn_whiskey', agedEffects: [{id: 'minecraft:haste', strength: 1, duration: 6400}],
		vintageId: 'tfg:vintage_corn_whiskey', genVintage: true, vintageEffects: [{id: 'minecraft:haste', strength: 2, duration: 9600}],
		ingredient: 'tfc:food/maize_flour', name: 'corn_whiskey', color: 0x75705c
	},{
		id: 'tfc:rye_whiskey',
		agedId: 'tfcagedalcohol:aged_rye_whiskey', agedEffects: [{id: 'minecraft:haste', strength: 1, duration: 6400}],
		vintageId: 'tfg:vintage_rye_whiskey', genVintage: true, vintageEffects: [{id: 'minecraft:haste', strength: 2, duration: 9600}],
		ingredient: 'tfc:food/rye_flour', name: 'rye_whiskey', color: 0x6c4e2d
	},{
		id: 'firmalife:mead',
		agedId: 'tfcagedalcohol:aged_mead', agedEffects: [{id: 'minecraft:regeneration', strength: 1, duration: 6400}],
		vintageId: 'tfg:vintage_mead', genVintage: true, vintageEffects: [{id: 'minecraft:regeneration', strength: 2, duration: 9600}],
		ingredient: 'firmalife:raw_honey', name: 'mead', color: 0x6c5d1a
	}
];

// #endregion
// #region Crop Climate Data

/**
 * @typedef {Object} CropClimateData
 * @property {string} id - Crop block ID.
 * @property {string} seed - Seed Item ID. For tooltip info.
 * @property {string} dimension - Dimension ID. For tooltip info.
 * @property {'NITROGEN'|'POTASSIUM'|'PHOSPHOROUS'|null} fertilizer - Fertilizer type. For tooltip info.
 * @property {string} moreInfo - Additional info lines to add to the tooltip, or null.
 * @property {number} minHydration - Minimum hydration.
 * @property {number} maxHydration - Maximum hydration.
 * @property {number} minTemp - Minimum temperature.
 * @property {number} maxTemp - Maximum temperature.
 * @property {number} hydrationWiggle - Hydration wiggle.
 * @property {number} tempWiggle - Temperature wiggle.
 * @property {boolean} genData - Generates data in data.crops.js
 * @property {boolean} genTooltip - Generate tooltip info.
 */
/** @type {CropClimateData[]} - Index of crop climate data */
global.CROP_CLIMATE_DATA = [
	// ============== Earth =================
	{ 
		id: 'tfg:sunflower', seed: 'tfg:sunflower_seeds', dimension: 'minecraft:overworld', fertilizer: 'NITROGEN',
		minHydration: 20, maxHydration: 80, minTemp: 5, maxTemp: 40, hydrationWiggle: 7.5, tempWiggle: 5.5, genData: true, genTooltip: true 
	},
	{ 
		id: 'tfg:rapeseed', seed: 'tfg:rapeseed_seeds', dimension: 'minecraft:overworld', fertilizer: 'PHOSPHOROUS',
		minHydration: 10, maxHydration: 60, minTemp: -5, maxTemp: 25, hydrationWiggle: 7.5, tempWiggle: 1.5, genData: true, genTooltip: true 
	},
	{ 
		id: 'tfg:flax', seed: 'tfg:flax_seeds', dimension: 'minecraft:overworld', fertilizer: 'NITROGEN',
		minHydration: 15, maxHydration: 65, minTemp: -8, maxTemp: 25, hydrationWiggle: 6.5, tempWiggle: 3, genData: true, genTooltip: true 
	},
	{ 
		id: 'tfg:radish', seed: 'tfg:radish_seeds', dimension: 'minecraft:overworld', fertilizer: 'POTASSIUM',
		minHydration: 15, maxHydration: 65, minTemp: -20, maxTemp: 20, hydrationWiggle: 7, tempWiggle: 2, genData: true, genTooltip: true 
	},
	{ 
		id: 'tfg:lentil', seed: 'tfg:lentil_seeds', dimension: 'minecraft:overworld', fertilizer: 'PHOSPHOROUS',
		minHydration: 50, maxHydration: 100, minTemp: -20, maxTemp: 18, hydrationWiggle: 7, tempWiggle: 3, genData: true, genTooltip: true 
	},
	{ 
		id: 'tfg:cucumber', seed: 'tfg:cucumber_seeds', dimension: 'minecraft:overworld', fertilizer: 'NITROGEN', moreInfo: 'tfg.tooltip.crop.stick',
		minHydration: 70, maxHydration: 100, minTemp: 5, maxTemp: 40, hydrationWiggle: 6.5, tempWiggle: 2, genData: true, genTooltip: true 
	},
	// ============== Beneath =================
	{ 
		id: 'tfg:peanut', seed: 'tfg:peanut_seeds', dimension: 'minecraft:the_nether', fertilizer: 'POTASSIUM',
		minHydration: 20, maxHydration: 80, minTemp: 10, maxTemp: 80, hydrationWiggle: 7.5, tempWiggle: 5.5, genData: true, genTooltip: true 
	},
	{ 
		id: 'tfg:cassava', seed: 'tfg:cassava_seeds', dimension: 'minecraft:the_nether', fertilizer: 'NITROGEN',
		minHydration: 50, maxHydration: 100, minTemp: 10, maxTemp: 80, hydrationWiggle: 7.5, tempWiggle: 5.5, genData: true, genTooltip: true 
	},
	{ 
		id: 'tfg:beans', seed: 'tfg:beans_seeds', dimension: 'minecraft:the_nether', fertilizer: 'POTASSIUM',
		minHydration: 20, maxHydration: 80, minTemp: 10, maxTemp: 80, hydrationWiggle: 7.5, tempWiggle: 5.5, genData: true, genTooltip: true 
	},
	{ 
		id: 'tfg:ghost_pepper', seed: 'tfg:ghost_pepper_seeds', dimension: 'minecraft:the_nether', fertilizer: 'NITROGEN',
		minHydration: 20, maxHydration: 80, minTemp: 10, maxTemp: 80, hydrationWiggle: 7.5, tempWiggle: 5.5, genData: true, genTooltip: true 
	},
	{ 
		id: 'tfg:fruit_tree/lavacado',
		minHydration: 20, maxHydration: 100, minTemp: 8, maxTemp: 80, hydrationWiggle: 5.5, tempWiggle: 4, genData: true, genTooltip: true
	},
	{ 
		id: 'tfg:fruit_tree/magmango',
		minHydration: 30, maxHydration: 100, minTemp: 8, maxTemp: 80, hydrationWiggle: 8, tempWiggle: 5, genData: true, genTooltip: true
	},
	// ============== Mars =================
	{ 
		id: 'betterend:amber_root', seed: 'betterend:amber_root_seeds', dimension: 'ad_astra:mars', fertilizer: 'PHOSPHOROUS',
		minHydration: 0, maxHydration: 40, minTemp: -150, maxTemp: 15, hydrationWiggle: 7.5, tempWiggle: 5.5, genData: true, genTooltip: true 
	},
	{ 
		id: 'betterend:blossom_berry', seed: 'betterend:blossom_berry_seeds', dimension: 'ad_astra:mars', fertilizer: 'POTASSIUM',
		minHydration: 70, maxHydration: 100, minTemp: -80, maxTemp: 30, hydrationWiggle: 7.5, tempWiggle: 5.5, genData: true, genTooltip: true 
	},
	{ 
		id: 'betterend:bolux_mushroom', seed: 'betterend:bolux_mushroom_seeds', dimension: 'ad_astra:mars', fertilizer: 'PHOSPHOROUS',
		minHydration: 0, maxHydration: 40, minTemp: -150, maxTemp: 15, hydrationWiggle: 7.5, tempWiggle: 5.5, genData: true, genTooltip: true 
	},
	{ 
		id: 'betterend:cave_pumpkin_plant', seed: 'betterend:cave_pumpkin_plant_seeds', dimension: 'ad_astra:mars', fertilizer: 'NITROGEN',
		minHydration: 0, maxHydration: 60, minTemp: -100, maxTemp: 30, hydrationWiggle: 7.5, tempWiggle: 5.5, genData: true, genTooltip: true 
	},
	{ 
		id: 'betterend:chorus_mushroom', seed: 'betterend:chorus_mushroom_seeds', dimension: 'ad_astra:mars', fertilizer: 'PHOSPHOROUS',
		minHydration: 0, maxHydration: 40, minTemp: -150, maxTemp: 15, hydrationWiggle: 7.5, tempWiggle: 5.5, genData: true, genTooltip: true 
	},
	{ 
		id: 'betterend:shadow_berry', seed: 'betterend:shadow_berry_seeds', dimension: 'ad_astra:mars', fertilizer: 'POTASSIUM',
		minHydration: 50, maxHydration: 100, minTemp: -80, maxTemp: 30, hydrationWiggle: 7.5, tempWiggle: 5.5, genData: true, genTooltip: true 
	}

];

// #endregion
// #region Const Utility

/**
 * Function to create generic raw and cooked meat items.
 * Pass in parameters for the cooked item and the raw item will be automatically generated with adjusted values.
 * @param {Object} meatItem
 * @param {string} meatItem.name Animal product name. e.g. "limpet", "glider_wings", etc.
 * @param {number} [meatItem.hunger=4] Hunger value. Default: 4.
 * @param {number} [meatItem.saturation=2] Saturation value. Default: 2.
 * @param {number} [meatItem.protein=2.5] Protein value. Default: 2.5.
 * @param {number} [meatItem.decay=2] Decay value. Default: 2 (10 Days).
 * @param {number} [meatItem.parasites=0] Parasite value. Default: 0.
 * @param {number} [meatItem.toxins=0] Toxin value. Default: 0.
 * @param {number} [meatItem.microplastics=0] Microplastics value. Default: 0.
 * @param {number} [meatItem.water=0] Water value. Default: 0.
 */
function createGenericMeatItems(meatItem) {
    const name = meatItem.name;
    const hunger = meatItem.hunger || 4;
    const saturation = meatItem.saturation || 2;
    const protein = meatItem.protein || 2.5;
    const decay = meatItem.decay || 1.4;
    const parasites = meatItem.parasites || 0;
    const toxins = meatItem.toxins || 0;
    const microplastics = meatItem.microplastics || 0;
    const water = meatItem.water || 0;

	let rawTags = ['tfc:foods/meats', 'tfc:foods/raw_meats'];
	let cookedTags = ['tfc:foods/meats', 'tfc:foods/cooked_meats'];

	if (parasites) rawTags.push('tfg:foods/parasites');
	if (toxins) {
		rawTags.push('tfg:foods/toxins');
		cookedTags.push('tfg:foods/toxins');
	}
	if (microplastics) {
		rawTags.push('tfg:foods/microplastics');
		cookedTags.push('tfg:foods/microplastics');
	}

    global.TFG_CREATE_GENERIC_FOOD_ITEM.push(
        {
            id: `tfg:food/raw_${name}`,
            texture: `tfg:item/food/raw_${name}`,
            nutrition: {
                hunger: hunger,
                water: water,
                protein: Number((protein / 1.5).toFixed(1)),
                toxins: toxins,
                parasites: parasites,
                decay: Number((decay * 1.5).toFixed(1))
            },
            effect: {id: 'minecraft:hunger', duration: 600, strength: 3, probability: 0},
            tags: rawTags
        },
        {
            id: `tfg:food/cooked_${name}`,
            texture: `tfg:item/food/cooked_${name}`,
            nutrition: {
                hunger: hunger,
                saturation: saturation,
                protein: protein,
                toxins: toxins,
                decay: decay
            },
            tags: cookedTags
        }
    );
};

animalProducts.forEach(meat => createGenericMeatItems(meat));

/**
 * @typedef {Object} FoodCooking
 * @property {Item} input Input item ID.
 * @property {Item} output Output item ID.
 */
global.TFG_FOOD_COOKING = /** @type {FoodCooking[]} */ ([
	{ input: 'minecraft:chorus_fruit', output: 'minecraft:popped_chorus_fruit', },
	{ input: 'tfg:food/raw_birt', output: 'tfg:food/cooked_birt' },
	{ input: 'tfg:sunflower_product', output: 'tfg:roasted_sunflower_seeds' },
	{ input: 'betterend:bolux_mushroom_product', output: 'betterend:bolux_mushroom_cooked' },
	{ input: 'betterend:chorus_mushroom_product', output: 'betterend:chorus_mushroom_cooked' },
	{ input: 'betterend:shadow_berry_product', output: 'betterend:shadow_berry_cooked' },
	{ input: 'betterend:cave_pumpkin_pie_raw', output: 'betterend:cave_pumpkin_pie' },
	{ input: 'wan_ancient_beasts:toxlacanth', output: 'wan_ancient_beasts:cooked_toxlacanth' },
	{ input: 'wan_ancient_beasts:raw_ancient_meat', output: 'wan_ancient_beasts:cooked_ancient_meat' },
	{ input: 'tfg:food/raw_stickastackatick', output: 'tfg:food/cooked_stickastackatick' },
	{ input: 'tfg:food/raw_burger_patty', output: 'tfg:food/cooked_burger_patty' },
	{ input: 'tfg:lentil_product', output: 'tfg:food/cooked_lentil' },
	{ input: 'tfg:cassava_product', output: 'tfg:food/cooked_cassava' },
	{ input: 'tfg:beans_product', output: 'tfg:food/cooked_beans' }
]);

animalProducts.forEach(meat => {
    global.TFG_FOOD_COOKING.push({
        input: `tfg:food/raw_${meat.name}`,
        output: `tfg:food/cooked_${meat.name}`
    });
});

// #endregion
