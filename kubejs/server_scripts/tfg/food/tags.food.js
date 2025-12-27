"use strict";

function registerTFGFoodItemTags(event) {

	// Crops
	event.add('tfc:seeds', 'tfg:sunflower_seeds')
	event.add('tfc:seeds', 'tfg:rapeseed_seeds')
	event.add('tfc:seeds', 'tfg:flax_seeds')

	event.add('tfc:compost_greens_high', 'tfg:rapeseed_product')
	event.add('tfc:compost_greens_high', 'tfg:sunflower_product')
	event.add('tfc:compost_greens_high', 'tfg:flax_product')
	event.add('tfc:compost_greens_high', 'tfg:lunar_chorus_flower')

	event.add("tfg:sugars", "minecraft:sugar");
	event.add("tfg:sugars", "afc:birch_sugar");
	event.add("tfg:sugars", "afc:maple_sugar");

	const RAW_MEATS = [
		'tfg:food/raw_birt',
		'tfg:food/raw_crawlermari',
		'tfg:food/raw_limpet'
	]
	RAW_MEATS.forEach(meat => {
		event.add('tfc:foods', meat)
		event.add('tfc:foods/meats', meat)
		event.add('tfc:foods/raw_meats', meat)
	})

	const COOKED_MEATS = [
		'tfg:food/cooked_birt',
		'tfg:food/cooked_crawlermari',
		'tfg:food/cooked_limpet'
	]
	COOKED_MEATS.forEach(meat => {
		event.add('tfc:foods', meat)
		event.add('tfc:foods/meats', meat)
		event.add('tfc:foods/cooked_meats', meat)
	})

	//These tags are used to add the tooltips and for searchability
	global.COOLING_FOODS.forEach(food => { event.add('tfg:cooling_foods', food) })

	event.add('tfg:cooling_foods_strong', 'tfg:food/ice_soup')

	global.WARMING_FOODS.forEach(food => { event.add('tfg:warming_foods', food) })

	//jam sandwhich stuff
	const usable_in_jam_sandwich = Ingredient.of('#tfc:foods/usable_in_jam_sandwich').itemIds.toArray().map(String);
	const preserves = Ingredient.of('#tfc:foods/preserves').itemIds.toArray().map(String);

	const usable_in_jam_sandwich_2 = usable_in_jam_sandwich.filter(item => !preserves.includes(item));

	usable_in_jam_sandwich_2.forEach(item => {
		event.add('tfc:foods/usable_in_jam_sandwich_2', item);
	});

	event.add('tfg:raw_dinosaur_meat', 'tfg:food/raw_sniffer_beef')
	event.add('tfg:raw_dinosaur_meat', 'tfg:food/raw_wraptor')
	event.add('tfg:raw_dinosaur_meat', 'tfg:food/raw_springling_collar')
	event.add('tfg:raw_dinosaur_meat', 'tfg:food/raw_walker_steak')
	event.add('tfg:raw_dinosaur_meat', 'tfg:food/raw_glider_wings')
	event.add('tfg:raw_dinosaur_meat', 'tfg:food/raw_whole_soarer')
	event.add('tfg:raw_dinosaur_meat', 'tfg:food/raw_crusher_meat')
	event.add('tfg:raw_dinosaur_meat', 'tfg:food/raw_goober_meat')
	event.add('tfg:raw_dinosaur_meat', 'tfg:food/raw_cruncher_ribs')
	event.add('tfg:raw_dinosaur_meat', 'tfg:food/raw_surfer_steak')
	event.add('tfg:raw_dinosaur_meat', 'wan_ancient_beasts:raw_ancient_meat')

	/**
	 * List of items that can make light stock.
	 * @type {string[]}
	 */
	const makesLightStock = [
		'tfc:food/chicken',
		'tfc:food/cooked_chicken',
		'tfc:food/quail',
		'tfc:food/cooked_quail',
		'tfc:food/pheasant',
		'tfc:food/cooked_pheasant',
		'tfc:food/grouse',
		'tfc:food/cooked_grouse',
		'tfc:food/turkey',
		'tfc:food/cooked_turkey',
		'tfc:food/peafowl',
		'tfc:food/cooked_peafowl',
		'tfc:food/rabbit',
		'tfc:food/cooked_rabbit',
		'tfc:food/duck',
		'tfc:food/cooked_duck',
		'tfg:food/raw_birt',
		'tfg:food/cooked_birt',
		'tfg:food/raw_moon_rabbit',
		'tfg:food/cooked_moon_rabbit',
		'tfg:food/raw_wraptor',
		'tfg:food/cooked_wraptor',
		'tfg:food/raw_glider_wings',
		'tfg:food/cooked_glider_wings',
		'tfg:food/raw_whole_soarer',
		'tfg:food/cooked_whole_soarer'
	];
	makesLightStock.forEach(item => {
		event.add('tfg:foods/makes_light_stock', item);
	});

	/**
	 * List of items that can make rich stock.
	 * @type {string[]}
	 */
	const makesRichStock = [
		'tfc:food/beef',
		'tfc:food/cooked_beef',
		'tfc:food/mutton',
		'tfc:food/cooked_mutton',
		'tfc:food/bear',
		'tfc:food/cooked_bear',
		'tfc:food/horse_meat',
		'tfc:food/cooked_horse_meat',
		'tfc:food/venison',
		'tfc:food/cooked_venison',
		'tfc:food/chevon',
		'tfc:food/cooked_chevon',
		'tfc:food/gran_feline',
		'tfc:food/cooked_gran_feline',
		'tfc:food/turtle',
		'tfc:food/cooked_turtle',
		'tfc:food/camelidae',
		'tfc:food/cooked_camelidae',
		'tfg:food/raw_glacian_mutton',
		'tfg:food/cooked_glacian_mutton',
		'tfg:food/raw_sniffer_beef',
		'tfg:food/cooked_sniffer_beef',
		'tfg:food/raw_walker_steak',
		'tfg:food/cooked_walker_steak',
		'tfg:food/raw_crusher_meat',
		'tfg:food/cooked_crusher_meat',
		'wan_ancient_beasts:raw_ancient_meat',
		'wan_ancient_beasts:cooked_ancient_meat'
	];
	makesRichStock.forEach(item => {
		event.add('tfg:foods/makes_rich_stock', item);
	});

	/**
	 * @type {string[]} - List of cheese curd item IDs.
	 */
	const cheeseCurds = [
		'firmalife:food/yak_curd',
		'firmalife:food/goat_curd',
		'firmalife:food/milk_curd',
		'tfc_gurman:ox_curd',
		'tfc_gurman:sheep_curd',
		'tfc_gurman:alpaca_curd'
	];
	cheeseCurds.forEach(item => {
		event.add('tfg:foods/cheese_curds', item);
	});

	/**
	 * @type {string[]} - List of item tags and item IDs that can be used on burgers.
	 */
	const usable_in_burgers = [
		'#tfc:foods/vegetables',
		'firmalife:food/cooked_bacon',
		'tfc:food/cooked_egg',
		'firmalife:food/tofu'
	];
	usable_in_burgers.forEach(item => {
		event.add('tfg:foods/usable_in_burgers', item);
	});

	/**
	 * @type {string[]} - List of cheese tags and item IDs that can be used on a cheeseburger.
	 */
	const cheeses = [
		'#firmalife:foods/cheeses',
		'tfg:food/slice_of_cheese',
		'firmalife:food/shredded_cheese',
		'#tfc_gurman:foods/brinza'
	];
	cheeses.forEach(item => {
		event.add('tfg:foods/cheeses', item);
	});

	/**
	 * @type {string[]} - List of item IDs that can be used as burger meats.
	 */
	const burgerMeats = [
		'tfc:food/beef',
		'tfc:food/turkey',
		'tfc:food/venison',
		'tfg:food/raw_sniffer_beef',
		'tfg:food/raw_crusher_meat',
		'wan_ancient_beasts:raw_ancient_meat'
	];
	burgerMeats.forEach(item => {
		event.add('tfg:foods/burger_meats', item);
	});

	// Spice tags
	global.SPICES.forEach(spice => {
		event.add('tfg:foods/spices', spice.product);
		event.add('tfg:foods/spice_plants', spice.plant);
	});

	/**
	 * @type {string[]} - List of item tags and item IDs that are allowed to be used in oatmeal.
	 */
	const usable_in_oatmeal = [
		'#tfc:foods/fruits',
		'tfc:food/oat_grain',
		'#firmalife:foods/chocolate'
	];
	usable_in_oatmeal.forEach(item => {
		event.add('tfg:foods/usable_in_oatmeal', item);
	});

	/**
	 * @type {string[]} - List of citrus fruit item IDs.
	 */
	const citrus_fruits = [
		'tfc:food/orange',
		'tfc:jar/orange_unsealed',
		'tfg:food/freeze_dried/orange',
		'tfc:food/lemon',
		'tfc:jar/lemon_unsealed',
		'tfg:food/freeze_dried/lemon',
		'minecraft:glow_berries',
		'tfg:food/freeze_dried/glow_berries'
	];
	citrus_fruits.forEach(item => {
		event.add('tfg:foods/citrus_fruits', item);
	});

	/**
	 * List of item tags and item IDs that are allowed to be used in a meal bag.
	 * @type {string[]}
	 */
	const usable_in_meal_bag = [
		'#tfc:foods/meats',
		'#tfc:foods/grains',
		'#tfc:foods/vegetables',
		'#tfc:foods/fruits',
		'#tfc:foods/dairy',
		'#tfc:foods/preserves',
		'#firmalife:foods/chocolate',
		'#tfcchannelcasting:foods/chocolate_sweet',
		'firmalife:food/sugar_cookie',
		'firmalife:food/chocolate_chip_cookie',
		'firmalife:food/vanilla_ice_cream',
		'firmalife:food/strawberry_ice_cream',
		'firmalife:food/chocolate_ice_cream',
		'tfc:food/cooked_egg',
		'tfc:food/boiled_egg',
		'firmalife:food/pickled_egg',
		'tfc:food/cooked_rice',
		'firmalife:food/cooked_pasta',
		'firmalife:food/pasta_with_tomato_sauce',
		'firmalife:food/cooked_rice_noodles',
		'firmalife:food/tortilla_chips',
		'firmalife:food/shredded_cheese',
		'firmalife:food/salsa',
		'firmalife:food/tomato_sauce',
		'tfg:roasted_sunflower_seeds',
		'tfg:food/cooked_dino_nugget',
		'firmalife:food/toast',
		'firmalife:food/toast_with_butter',
		'firmalife:food/toast_with_jam',
		'firmalife:food/butter',
		'tfc_gurman:adjika',
		'tfc_gurman:tzatziki',
		'tfc_gurman:falafel',
		'tfc_gurman:hummus',
		'tfc_gurman:sauerkraut',
		'tfc_gurman:bratwurst'
	];
	usable_in_meal_bag.forEach(item => {
		event.add('tfg:foods/usable_in_meal_bag', item);
	});
	event.add('tfg:foil_packs', 'tfg:foil_pack');
	event.add('tfg:foil_packs', 'tfg:clean_foil_pack')

	event.add('tfg:solid_fats', 'firmalife:food/butter')
	event.add('tfg:solid_fats', 'tfc:blubber')

	// Space foods
	event.add('tfc:foods', 'minecraft:red_mushroom')
	event.add('tfc:foods', 'minecraft:brown_mushroom')
	event.add('tfc:foods', 'minecraft:glow_berries')
	event.add('tfc:foods', 'minecraft:chorus_fruit')
	event.add('tfc:foods', 'minecraft:popped_chorus_fruit')

	event.add('tfc:foods/vegetables', 'minecraft:red_mushroom')
	event.add('tfc:foods/vegetables', 'minecraft:brown_mushroom')
	event.add('tfc:foods/fruits', 'minecraft:glow_berries')
	event.add('tfc:foods/fruits', 'minecraft:chorus_fruit')
	event.add('tfc:foods/fruits', 'minecraft:popped_chorus_fruit')

	event.add('beneath:usable_in_juicer', 'minecraft:glow_berries')
	event.add('beneath:usable_in_juicer', 'minecraft:chorus_fruit')
	event.add('beneath:usable_in_juicer', 'minecraft:red_mushroom')
	event.add('beneath:usable_in_juicer', 'minecraft:brown_mushroom')

	event.add('tfc:foods/usable_in_soup', 'minecraft:red_mushroom')
	event.add('tfc:foods/usable_in_soup', 'minecraft:brown_mushroom')
	event.add('tfc:foods/usable_in_soup', 'minecraft:glow_berries')
	event.add('tfc:foods/usable_in_soup', 'minecraft:chorus_fruit')
	event.add('tfc:foods/usable_in_soup', 'minecraft:popped_chorus_fruit')
	
	// Make eggs not useless
    event.add('tfc:foods/usable_in_salad', 'firmalife:food/pickled_egg')
    event.add("tfc:foods/usable_in_salad", "tfc:food/cooked_egg");
    event.add("tfc:foods/usable_in_salad", "tfc:food/boiled_egg");
    event.add("tfc:foods/usable_in_jam_sandwich", "tfc:food/cooked_egg");
    event.add("tfc:foods/usable_in_jam_sandwich", "tfc:food/boiled_egg");
    event.add("tfc:foods/usable_in_sandwich", "tfc:food/cooked_egg");
    event.add("tfc:foods/usable_in_sandwich", "tfc:food/boiled_egg");
	
	event.add('tfc:foods/usable_in_salad', 'minecraft:red_mushroom')
	event.add('tfc:foods/usable_in_salad', 'minecraft:brown_mushroom')
	event.add('tfc:foods/usable_in_salad', 'minecraft:glow_berries')
	event.add('tfc:foods/usable_in_salad', 'minecraft:chorus_fruit')
	event.add('tfc:foods/usable_in_salad', 'minecraft:popped_chorus_fruit')

	event.add('tfc:rabbit_food', 'minecraft:chorus_fruit')
	event.add('tfc:rabbit_food', 'minecraft:popped_chorus_fruit')

	event.add('tfc:foods', 'ad_astra:cheese')
	event.add('tfc:foods/dairy', 'ad_astra:cheese')
	event.add('tfc:foods/usable_in_sandwich', 'ad_astra:cheese')
	event.add('tfc:foods/usable_in_jam_sandwich', 'ad_astra:cheese')
	event.add('tfc:foods/usable_in_jam_sandwich_2', 'ad_astra:cheese')
	event.add('firmalife:foods/cheeses', 'ad_astra:cheese')

	// Auto-eat blacklist for backpack feeding upgrade and quarktech helmet
	const AUTO_EAT_BLACKLIST = [
		'#tfg:medicine',
		'minecraft:rotten_flesh',
		'#beneath:poisonous_mushrooms'
	]
	AUTO_EAT_BLACKLIST.forEach(food => {
		event.add('tfg:auto_eat_blacklist', food)
	})
}

function registerTFGFoodBlockTags(event) {
	//crop stuff
	event.add('tfc:crops', 'tfg:rapeseed')
	event.add('tfc:mineable_with_sharp_tool', 'tfg:rapeseed')

	event.add('tfc:crops', 'tfg:sunflower')
	event.add('tfc:mineable_with_sharp_tool', 'tfg:sunflower')
	
	event.add('tfc:crops', 'tfg:flax')
	event.add('tfc:mineable_with_sharp_tool', 'tfg:flax')

	event.add('ad_astra:destroyed_in_space', '#tfc:wild_fruits')
	event.add('ad_astra:destroyed_in_space', '#minecraft:saplings')
}