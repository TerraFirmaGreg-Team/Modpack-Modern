"use strict";

const registerTFGItemTags = (event) => {

	registerTFGTrimTags(event)
	registerFacadeWhitelistTags(event)
	registerBlockInteractionTags(event)
	registerTFGItemStoneTags(event)

	//crop stuff
	event.add('tfc:seeds', 'tfg:sunflower_seeds')
	event.add('tfc:seeds', 'tfg:rapeseed_seeds')
	event.add('tfc:seeds', 'tfg:flax_seeds')
	event.add('tfc:compost_greens_high', 'tfg:rapeseed_product')
	event.add('tfc:compost_greens_high', 'tfg:sunflower_product')
	event.add('tfc:compost_greens_high', 'tfg:flax_product')
	event.add('tfc:compost_greens_high', 'tfg:lunar_chorus_flower')
	event.add('tfg:water_breathing_ingredients', 'tfg:rapeseed_product')
	event.add('tfg:night_vision_ingredients', 'tfg:sunflower_product')

    event.add("tfg:sugars", "minecraft:sugar");
    event.add("tfg:sugars", "afc:birch_sugar");
    event.add("tfg:sugars", "afc:maple_sugar");

	// Actually "layers", can't rename them without screwing with peoples' worlds
	event.add('c:hidden_from_recipe_viewers', 'tfg:ash_pile')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/black_sand')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/brown_sand')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/green_sand')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/pink_sand')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/red_sand')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/white_sand')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/yellow_sand')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/mars_sand')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/moon_sand')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/venus_sand')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/hematitic_sand')

	// Actually "piles", the kind that can hide plants inside them
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/mars_sand_covering')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/venus_sand_covering')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/hematitic_sand_covering')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/mars_snow_covering')

	// Actually "piles", the kind that can hide plants inside them
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/mars_sand_covering')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/venus_sand_covering')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/hematitic_sand_covering')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/mars_snow_covering')

	event.add('c:hidden_from_recipe_viewers', 'tfg:mars_ice')

	//Decorative Vases
	global.MINECRAFT_DYE_NAMES.forEach(color => {
		event.add('c:hidden_from_recipe_viewers', `tfg:decorative_vase/generated/${color}`)
		event.add('tfg:decorative_vases/generated', `tfg:decorative_vase/generated/${color}`)
		event.add('tfg:decorative_vases', `tfg:decorative_vase/${color}`)
		event.add('tfg:decorative_vases/unfired', `tfg:decorative_vase/unfired/${color}`)
	})
	event.add('tfg:decorative_vases', 'tfg:decorative_vase')
	event.add('tfg:decorative_vases/unfired', 'tfg:decorative_vase/unfired')

	//Knapping
	event.add('tfc:any_knapping', 'minecraft:flint')

	//Circuit Stuff
	event.add('tfg:components/uv_leds', 'tfg:uv_led')
	event.add('tfg:components/uv_leds', 'tfg:smd_uv_led')

	// Platline
	event.add('tfg:platinum_ore_group', 'gtceu:purified_pentlandite_ore')
	event.add('tfg:platinum_ore_group', 'gtceu:purified_chalcopyrite_ore')
	event.add('tfg:platinum_ore_group', 'gtceu:purified_tetrahedrite_ore')
	event.add('tfg:platinum_ore_group', 'gtceu:purified_bornite_ore')
	event.add('tfg:platinum_ore_group', 'gtceu:purified_cooperite_ore')
	event.add('tfg:platinum_ore_group', 'gtceu:purified_chalcocite_ore')

	//#region Tools & Armor
	event.add('forge:tools/fishing_nets', 'tfg:fishing_net/wood')
	event.add('forge:tools/fishing_nets', 'tfg:fishing_net/brass')
	event.add('forge:tools/fishing_nets', 'tfg:fishing_net/rose_gold')
	event.add('forge:tools/fishing_nets', 'tfg:fishing_net/sterling_silver')
	event.add('forge:tools/fishing_nets', 'tfg:fishing_net/invar')
	event.add('forge:tools/fishing_nets', 'tfg:fishing_net/tin_alloy')
	event.add('forge:tools/fishing_nets', 'tfg:fishing_net/cupronickel')
	event.add('forge:tools/fishing_nets', 'tfg:fishing_net/magnalium')

	event.add('minecraft:piglin_loved', 'tfg:piglin_disguise')

	event.add('forge:tools/trowels', 'tfg:trowel')

	event.add('tfg:harvester', 'tfg:harvest_basket')
	event.add('tfg:harvester', 'tfg:aluminium_harvest_basket')

	event.add('tfg:tools/ore_prospectors/copper', 'tfc:metal/propick/copper')
	event.add('tfg:tools/ore_prospectors/bronze', 'tfc:metal/propick/bronze')
	event.add('tfg:tools/ore_prospectors/bronze', 'tfc:metal/propick/bismuth_bronze')
	event.add('tfg:tools/ore_prospectors/bronze', 'tfc:metal/propick/black_bronze')
	event.add('tfg:tools/ore_prospectors/wrought_iron', 'tfc:metal/propick/wrought_iron')
	event.add('tfg:tools/ore_prospectors/steel', 'tfc:metal/propick/steel')
	event.add('tfg:tools/ore_prospectors/black_steel', 'tfc:metal/propick/black_steel')
	event.add('tfg:tools/ore_prospectors/blue_steel', 'tfc:metal/propick/blue_steel')
	event.add('tfg:tools/ore_prospectors/red_steel', 'tfc:metal/propick/red_steel')

	event.add('tfg:empty_dna_syringes', 'tfg:empty_dna_syringe')
	event.add('tfg:empty_dna_syringes', 'tfg:clean_dna_syringe')

	event.add('tfc:sewing_needles', 'tfg:stainless_steel_needle')
	//#endregion

	// #region Paper from wood
	event.add('tfg:hardwood_strips', 'tfg:hardwood_strip')
	event.add('tfg:hardwood_strips', 'tfg:soaked_hardwood_strip')
	//Adding any of these dusts to the forge dusts/wood tag will make it so you can craft softwood pulp using hardwood pulp. which is not ok.
	event.add('tfg:wood_dusts', 'gtceu:hardwood_dust')
	event.add('tfg:tiny_wood_dusts', 'gtceu:tiny_hardwood_dust')
	event.add('tfg:small_wood_dusts', 'gtceu:small_hardwood_dust')
	event.add('tfg:wood_dusts', 'gtceu:wood_dust')
	event.add('tfg:tiny_wood_dusts', 'gtceu:tiny_wood_dust')
	event.add('tfg:small_wood_dusts', 'gtceu:small_wood_dust')

	event.add('forge:wax', 'tfg:paraffin_wax')
	event.add('forge:wax', 'firmalife:beeswax')
	event.add('forge:wax', 'tfg:conifer_rosin')
	event.add('forge:wax', 'tfg:crimsene_gem')
	event.add('forge:wax', 'tfg:warpane_gem')
	// #endregion

	event.add('buildinggadgets2:deny', 'tfg:spice')

	//#region Cloth & String
	event.add('forge:cloth', 'tfg:phantom_silk')
	event.add('forge:cloth', 'tfg:polycaprolactam_fabric')
	event.add('tfc:high_quality_cloth', 'tfg:phantom_silk')
	event.add('tfc:high_quality_cloth', 'tfg:polycaprolactam_fabric')
	event.add('tfc:sewing_light_cloth', 'tfg:phantom_silk')
	event.add('tfc:sewing_dark_cloth', 'tfg:polycaprolactam_fabric')
	event.add('forge:string', 'tfg:phantom_thread')
	event.add('forge:string', 'tfg:polycaprolactam_string')
	event.add('forge:string', 'firmalife:pineapple_yarn')
	//#endregion

	// #region Medicines
	event.add('tfg:antipoison_ingredients', 'tfc:plant/blood_lily')
	event.add('tfg:antipoison_ingredients', 'tfc:plant/pistia')
	event.add('tfg:antipoison_ingredients', 'tfc:powder/bismuthinite')
	event.add('tfg:antipoison_ingredients', 'gtceu:mica_dust')
	event.add('tfg:antipoison_ingredients', 'gtceu:fullers_earth_dust')

	event.add('tfg:poison_ingredients', 'tfc:plant/butterfly_milkweed')
	event.add('tfg:poison_ingredients', 'tfc:plant/grape_hyacinth')
	event.add('tfg:poison_ingredients', 'tfc:plant/lily_of_the_valley')
	event.add('tfg:poison_ingredients', 'tfc:plant/pulsatilla')
	event.add('tfg:poison_ingredients', 'firmalife:food/nightshade_berry')
	event.add('tfg:poison_ingredients', 'minecraft:red_mushroom')

	event.add('tfg:regeneration_ingredients', 'tfc:plant/lilac')
	event.add('tfg:regeneration_ingredients', 'tfc:plant/field_horsetail')
	event.add('tfg:regeneration_ingredients', 'tfc:plant/licorice_fern')
	event.add('tfg:regeneration_ingredients', 'tfc:plant/sacred_datura')

	event.add('tfg:speed_ingredients', 'tfc:plant/labrador_tea')
	event.add('tfg:speed_ingredients', 'firmalife:raw_honey')

	event.add('tfg:slowness_ingredients', 'tfc:plant/marigold')
	event.add('tfg:slowness_ingredients', 'tfc:plant/nasturtium')
	event.add('tfg:slowness_ingredients', 'tfc:plant/snapdragon_red')
	event.add('tfg:slowness_ingredients', 'tfc:plant/snapdragon_white')
	event.add('tfg:slowness_ingredients', 'tfc:plant/snapdragon_yellow')

	event.add('tfg:weakness_ingredients', 'tfc:plant/laminaria')
	event.add('tfg:weakness_ingredients', 'tfc:plant/sea_palm')
	event.add('tfg:weakness_ingredients', 'tfc:plant/sea_lavender')
	event.add('tfg:weakness_ingredients', 'tfc:plant/canna')
	event.add('tfg:weakness_ingredients', 'tfc:plant/water_canna')

	event.add('tfg:haste_ingredients', '#tfg:sugars')

	event.add('tfg:water_breathing_ingredients', 'tfc:powder/saltpeter')
	event.add('tfg:water_breathing_ingredients', 'tfc:powder/charcoal')

	event.add('tfg:night_vision_ingredients', 'tfc:food/carrot')
	event.add('tfg:night_vision_ingredients', 'beneath:gleamflower')

	event.add('tfg:invisibility_ingredients', 'tfc:plant/calendula')
	event.add('tfg:absorption_ingredients', 'beneath:burpflower')

	event.add('tfg:fire_resistance_ingredients', 'tfc:plant/cattail')
	event.add('tfg:fire_resistance_ingredients', 'tfc:plant/meads_milkweed')
	event.add('tfg:fire_resistance_ingredients', 'firmalife:plant/bay_laurel')
	event.add('tfg:fire_resistance_ingredients', 'beneath:ghost_pepper')

	event.add('tfg:resistance_ingredients', 'tfc:plant/hibiscus')
	event.add('tfg:resistance_ingredients', 'gtceu:calcium_dust')

	event.add('tfg:instant_health_ingredients', 'tfc:plant/foxglove')
	event.add('tfg:instant_health_ingredients', 'tfc:plant/artists_conk')

	event.add('tfg:absorption_ingredients', 'tfc:plant/poppy')
	event.add('tfg:invisibility_ingredients', 'tfc:plant/snapdragon_pink')

	event.add('tfg:luck_ingredients', 'tfc:plant/goldenrod')
	event.add('tfg:luck_ingredients', 'tfc:plant/heather')
	// #endregion

	// Airplane Upgrades
	global.AIRCRAFT_UPGRADES.forEach(value => {
		event.add('immersive_aircraft:upgrades', `tfg:${value}`);
	})

	// Universal Circuits
	global.UNIVERSAL_CIRCUIT_TIERS.forEach(tier => {
		event.add(`gtceu:circuits/${tier}`, `tfg:${tier}_universal_circuit`);
	})

	// Crafting components
	event.add('tfg:aluminium_oxide', '#forge:dusts/bauxite')
	event.add('tfg:aluminium_oxide', '#forge:dusts/sapphire')
	event.add('tfg:aluminium_oxide', '#forge:dusts/green_sapphire')

	// Use either cast or wrought iron
	event.add('tfg:any_iron_double_ingot', '#forge:double_ingots/iron')
	event.add('tfg:any_iron_double_ingot', '#forge:double_ingots/wrought_iron')

	// Allow any bronze type
	event.add('tfg:any_bronze_frame', '#forge:frames/bronze')
	event.add('tfg:any_bronze_frame', '#forge:frames/bismuth_bronze')
	event.add('tfg:any_bronze_frame', '#forge:frames/black_bronze')
	
	event.add('forge:rods/any_bronze', '#forge:rods/bronze')
	event.add('forge:rods/any_bronze', '#forge:rods/bismuth_bronze')
	event.add('forge:rods/any_bronze', '#forge:rods/black_bronze')

	event.add('forge:screws/any_bronze', '#forge:screws/bronze')
	event.add('forge:screws/any_bronze', '#forge:screws/bismuth_bronze')
	event.add('forge:screws/any_bronze', '#forge:screws/black_bronze')

	//#region Food
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
		'firmalife:food/shredded_cheese'
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
	//#endregion

	//#region Blacklisted from the railgun
	event.add('tfg:cannot_launch_in_railgun', '#tfc:vessels')
	event.add('tfg:cannot_launch_in_railgun', '#tfc:large_vessels')
	event.add('tfg:cannot_launch_in_railgun', 'ae2:item_storage_cell_1k')
	event.add('tfg:cannot_launch_in_railgun', 'ae2:item_storage_cell_4k')
	event.add('tfg:cannot_launch_in_railgun', 'ae2:item_storage_cell_16k')
	event.add('tfg:cannot_launch_in_railgun', 'ae2:item_storage_cell_64k')
	event.add('tfg:cannot_launch_in_railgun', 'ae2:item_storage_cell_256k')
	event.add('tfg:cannot_launch_in_railgun', 'ae2:fluid_storage_cell_1k')
	event.add('tfg:cannot_launch_in_railgun', 'ae2:fluid_storage_cell_4k')
	event.add('tfg:cannot_launch_in_railgun', 'ae2:fluid_storage_cell_16k')
	event.add('tfg:cannot_launch_in_railgun', 'ae2:fluid_storage_cell_64k')
	event.add('tfg:cannot_launch_in_railgun', 'ae2:fluid_storage_cell_256k')
	event.add('tfg:cannot_launch_in_railgun', 'ae2:spatial_storage_cell_2')
	event.add('tfg:cannot_launch_in_railgun', 'ae2:spatial_storage_cell_16')
	event.add('tfg:cannot_launch_in_railgun', 'ae2:spatial_storage_cell_128')
	event.add('tfg:cannot_launch_in_railgun', 'megacells:item_storage_cell_1m')
	event.add('tfg:cannot_launch_in_railgun', 'megacells:item_storage_cell_4m')
	event.add('tfg:cannot_launch_in_railgun', 'megacells:item_storage_cell_16m')
	event.add('tfg:cannot_launch_in_railgun', 'megacells:item_storage_cell_64m')
	event.add('tfg:cannot_launch_in_railgun', 'megacells:fluid_storage_cell_1m')
	event.add('tfg:cannot_launch_in_railgun', 'megacells:fluid_storage_cell_4m')
	event.add('tfg:cannot_launch_in_railgun', 'megacells:fluid_storage_cell_16m')
	event.add('tfg:cannot_launch_in_railgun', 'megacells:fluid_storage_cell_64m')
	event.add('tfg:cannot_launch_in_railgun', 'create:minecart_contraption')
	event.add('tfg:cannot_launch_in_railgun', 'tfg:railgun_ammo_shell')
	event.add('tfg:cannot_launch_in_railgun', 'create:cardboard_package_12x10')
	event.add('tfg:cannot_launch_in_railgun', 'create:cardboard_package_10x8')
	event.add('tfg:cannot_launch_in_railgun', 'create:cardboard_package_10x12')
	event.add('tfg:cannot_launch_in_railgun', 'create:cardboard_package_12x12')
	event.add('tfg:cannot_launch_in_railgun', 'create_factory_logistics:composite_package')
	event.add('tfg:cannot_launch_in_railgun', 'create_factory_logistics:copper_jar_package_8x8')
	event.add('tfg:cannot_launch_in_railgun', 'sns:ore_sack')
	event.add('tfg:cannot_launch_in_railgun', 'sns:leather_sack')
	event.add('tfg:cannot_launch_in_railgun', 'sns:burlap_sack')
	event.add('tfg:cannot_launch_in_railgun', 'sns:seed_pouch')
	event.add('tfg:cannot_launch_in_railgun', 'sns:straw_basket')
	event.add('tfg:cannot_launch_in_railgun', 'sns:frame_pack')
	event.add('tfg:cannot_launch_in_railgun', 'tfclunchbox:lunchbox')
	event.add('tfg:cannot_launch_in_railgun', 'tfclunchbox:cooling_lunchbox')
	event.add('tfg:cannot_launch_in_railgun', 'tfclunchbox:electric_lunchbox')
	event.add('tfg:cannot_launch_in_railgun', 'sophisticatedbackpacks:backpack')
	event.add('tfg:cannot_launch_in_railgun', 'sophisticatedbackpacks:copper_backpack')
	event.add('tfg:cannot_launch_in_railgun', 'sophisticatedbackpacks:iron_backpack')
	event.add('tfg:cannot_launch_in_railgun', 'sophisticatedbackpacks:gold_backpack')
	event.add('tfg:cannot_launch_in_railgun', 'sophisticatedbackpacks:diamond_backpack')
	event.add('tfg:cannot_launch_in_railgun', 'sophisticatedbackpacks:netherite_backpack')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:wood_crate')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:bronze_crate')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:black_bronze_crate')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:bismuth_bronze_crate')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:steel_crate')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:aluminium_crate')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:stainless_steel_crate')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:titanium_crate')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:tungsten_steel_crate')
	event.add('tfg:cannot_launch_in_railgun', '#create:toolboxes')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:ulv_super_chest')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:lv_super_chest')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:mv_super_chest')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:hv_super_chest')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:ev_super_chest')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:iv_quantum_chest')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:luv_quantum_chest')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:zpm_quantum_chest')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:uv_quantum_chest')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:uhv_quantum_chest')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:ulv_super_tank')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:lv_super_tank')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:mv_super_tank')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:hv_super_tank')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:ev_super_tank')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:iv_quantum_tank')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:luv_quantum_tank')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:zpm_quantum_tank')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:uv_quantum_tank')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:uhv_quantum_tank')
	//#endregion
	
	// #region Dirt
	event.add('tfg:moon_plants', 'tfg:lunar_roots')
	event.add('tfg:moon_plants', 'tfg:lunar_sprouts')

	event.add('minecraft:dirt', 'tfg:grass/mars_dirt')
	event.add('minecraft:dirt', 'tfg:grass/mars_clay_dirt')
	event.add('tfc:dirt', 'tfg:grass/mars_dirt')
	event.add('tfc:dirt', 'tfg:grass/mars_clay_dirt')
	event.add('tfc:grass', 'tfg:grass/amber_mycelium')
	event.add('tfc:grass', 'tfg:grass/amber_clay_mycelium')
	event.add('tfc:grass', 'tfg:grass/rusticus_mycelium')
	event.add('tfc:grass', 'tfg:grass/rusticus_clay_mycelium')
	event.add('tfc:grass', 'tfg:grass/sangnum_mycelium')
	event.add('tfc:grass', 'tfg:grass/sangnum_clay_mycelium')
	event.add('tfc:farmland', 'tfg:grass/mars_farmland')
	event.add('tfc:paths', 'tfg:grass/mars_path')
	event.add('tfc:kaolin_clay', 'tfg:grass/amber_kaolin_mycelium')
	event.add('tfc:kaolin_clay', 'tfg:grass/rusticus_kaolin_mycelium')
	event.add('tfc:kaolin_clay', 'tfg:grass/sangnum_kaolin_mycelium')
	// #endregion

	//Mars animal region
	event.add('tfg:martian_eggs', 'tfg:sniffer_egg')
	event.add('tfg:martian_eggs', 'tfg:wraptor_egg')
	event.add('forge:eggs', '#tfg:martian_eggs')
	event.add('firmalife:foods/raw_eggs', '#tfg:martian_eggs')
	
	event.add('tfg:martian_animal_foods', 'betterend:amber_root_product')
	event.add('tfg:martian_animal_foods', 'betterend:blossom_berry_product')
	event.add('tfg:martian_animal_foods', 'betterend:chorus_mushroom_product')
	event.add('tfg:martian_animal_foods', 'betterend:shadow_berry_product')
	event.add('tfg:martian_animal_foods', 'betterend:bolux_mushroom_product')
	event.add('tfg:martian_animal_foods', 'betterend:cave_pumpkin_chunks')
	
	event.add('tfg:glacian_ram_food', '#tfg:martian_animal_foods')
	event.add('tfg:sniffer_food', '#tfg:martian_animal_foods')
	event.add('tfg:wraptor_food', '#tfg:martian_animal_foods')

	event.add('tfg:mineral_rich_wool', 'tfg:wraptor_wool')
	event.add('tfg:mineral_rich_wool', 'tfg:sniffer_wool')
	//#endregion
	
	//#region holder materials
	event.remove('forge:dusts', 'tfg:nitrocellulose')
	event.remove('forge:dusts/nitrocellulose', 'tfg:nitrocellulose')
	
	event.remove('forge:dusts', 'tfg:cellulose_matrix')
	event.remove('forge:dusts/cellulose_matrix', 'tfg:cellulose_matrix')
	
	event.remove('tfc:pileable_ingots', 'tfg:polycaprolactam_fabric')
	event.remove('forge:ingots', 'tfg:polycaprolactam_fabric')
	event.remove('forge:ingots/tfg_polycaprolactam', 'tfg:polycaprolactam_fabric')
	
	event.remove('forge:nuggets', 'tfg:polycaprolactam_string')	
	event.remove('forge:nuggets/tfg_polycaprolactam', 'tfg:polycaprolactam_string')

}

//#region Blocks
const registerTFGBlockTags = (event) => {

	event.add('minecraft:mineable/shovel', 'tfg:ash_pile')
	//crop stuff
	event.add('tfc:crops', 'tfg:rapeseed')
	event.add('tfc:mineable_with_sharp_tool', 'tfg:rapeseed')

	event.add('tfc:crops', 'tfg:sunflower')
	event.add('tfc:mineable_with_sharp_tool', 'tfg:sunflower')
	
	event.add('tfc:crops', 'tfg:flax')
	event.add('tfc:mineable_with_sharp_tool', 'tfg:flax')

	// Spice unmovable

	event.add('buildinggadgets2:deny', 'tfg:spice')
	event.add('ae2:blacklisted/spatial', 'tfg:spice')

	event.add('buildinggadgets2:deny', 'tfg:geyser_source')
	event.add('ae2:blacklisted/spatial', 'tfg:geyser_source')

	event.add('buildinggadgets2:deny', 'tfg:geyser_source_small')
	event.add('ae2:blacklisted/spatial', 'tfg:geyser_source_small')

	// Spice unmovable

	event.add('buildinggadgets2:deny', 'tfg:spice')
	event.add('ae2:blacklisted/spatial', 'tfg:spice')

	event.add('buildinggadgets2:deny', 'tfg:geyser_source')
	event.add('ae2:blacklisted/spatial', 'tfg:geyser_source')

	event.add('buildinggadgets2:deny', 'tfg:geyser_source_small')
	event.add('ae2:blacklisted/spatial', 'tfg:geyser_source_small')

	//#endregion

	// #region Nether blocks
	event.add('minecraft:nether_carver_replaceables', 'tfg:rock/hardened_deepslate')
	event.add('minecraft:moss_replaceable', 'tfg:rock/hardened_deepslate')
	event.add('minecraft:base_stone_nether', 'tfg:rock/hardened_deepslate')
	event.add('beneath:nether_bush_plantable_on', 'tfg:rock/hardened_deepslate')
	event.add('tfc:grass_plantable_on', 'tfg:rock/hardened_deepslate')
	event.add('tfc:creeping_plantable_on', 'tfg:rock/hardened_deepslate')
	event.add('tfc:rock/hardened', 'tfg:rock/hardened_deepslate')

	event.add('minecraft:nether_carver_replaceables', 'tfg:rock/hardened_blackstone')
	event.add('minecraft:moss_replaceable', 'tfg:rock/hardened_blackstone')
	event.add('minecraft:base_stone_nether', 'tfg:rock/hardened_blackstone')
	event.add('beneath:nether_bush_plantable_on', 'tfg:rock/hardened_blackstone')
	event.add('tfc:creeping_plantable_on', 'tfg:rock/hardened_blackstone')
	event.add('tfc:rock/hardened', 'tfg:rock/hardened_blackstone')

	event.add('minecraft:nether_carver_replaceables', 'tfg:rock/hardened_dripstone')
	event.add('minecraft:base_stone_nether', 'tfg:rock/hardened_dripstone')
	event.add('tfc:rock/hardened', 'tfg:rock/hardened_dripstone')
	// #endregion
	
	// #region Mars blocks
	event.add('minecraft:dirt', 'tfg:grass/mars_dirt')
	event.add('minecraft:dirt', 'tfg:grass/mars_clay_dirt')
	event.add('minecraft:dirt', 'tfg:grass/amber_mycelium')
	event.add('minecraft:dirt', 'tfg:grass/rusticus_mycelium')
	event.add('minecraft:dirt', 'tfg:grass/sangnum_mycelium')
	event.add('minecraft:dirt', 'tfg:grass/amber_clay_mycelium')
	event.add('minecraft:dirt', 'tfg:grass/rusticus_clay_mycelium')
	event.add('minecraft:dirt', 'tfg:grass/sangnum_clay_mycelium')
	event.add('minecraft:dirt', 'tfg:grass/amber_kaolin_mycelium')
	event.add('minecraft:dirt', 'tfg:grass/rusticus_kaolin_mycelium')
	event.add('minecraft:dirt', 'tfg:grass/sangnum_kaolin_mycelium')
	event.add('tfc:dirt', 'tfg:grass/mars_dirt')
	event.add('tfc:dirt', 'tfg:grass/mars_clay_dirt')
	event.add('tfc:farmland', 'tfg:grass/mars_farmland')
	event.add('tfc:paths', 'tfg:grass/mars_path')
	event.add('tfc:grass', 'tfg:grass/amber_mycelium')
	event.add('tfc:grass', 'tfg:grass/rusticus_mycelium')
	event.add('tfc:grass', 'tfg:grass/sangnum_mycelium')
	event.add('tfc:grass', 'tfg:grass/amber_clay_mycelium')
	event.add('tfc:grass', 'tfg:grass/rusticus_clay_mycelium')
	event.add('tfc:grass', 'tfg:grass/sangnum_clay_mycelium')
	event.add('tfc:grass', 'tfg:grass/amber_kaolin_mycelium')
	event.add('tfc:grass', 'tfg:grass/rusticus_kaolin_mycelium')
	event.add('tfc:grass', 'tfg:grass/sangnum_kaolin_mycelium')
	event.add('tfc:kaolin_clay', 'tfg:grass/amber_kaolin_mycelium')
	event.add('tfc:kaolin_clay', 'tfg:grass/rusticus_kaolin_mycelium')
	event.add('tfc:kaolin_clay', 'tfg:grass/sangnum_kaolin_mycelium')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/amber_mycelium')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/rusticus_mycelium')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/sangnum_mycelium')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/amber_clay_mycelium')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/rusticus_clay_mycelium')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/sangnum_clay_mycelium')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/amber_kaolin_mycelium')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/rusticus_kaolin_mycelium')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/sangnum_kaolin_mycelium')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/mars_farmland')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/mars_path')
	event.add('tfc:can_landslide', 'tfg:grass/mars_dirt')
	event.add('tfc:can_landslide', 'tfg:grass/mars_clay_dirt')
	event.add('tfc:can_landslide', 'tfg:grass/mars_farmland')
	event.add('tfc:can_landslide', 'tfg:grass/mars_path')
	event.add('tfc:can_landslide', 'tfg:grass/amber_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/rusticus_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/sangnum_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/amber_clay_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/rusticus_clay_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/sangnum_clay_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/amber_kaolin_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/rusticus_kaolin_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/sangnum_kaolin_mycelium')
	event.add('minecraft:mineable/shovel', 'tfg:grass/mars_dirt')
	event.add('minecraft:mineable/shovel', 'tfg:grass/mars_clay_dirt')
	event.add('minecraft:mineable/shovel', 'tfg:grass/mars_path')
	event.add('minecraft:mineable/shovel', 'tfg:grass/mars_farmland')
	event.add('minecraft:mineable/shovel', 'tfg:grass/amber_mycelium')
	event.add('minecraft:mineable/shovel', 'tfg:grass/amber_clay_mycelium')
	event.add('minecraft:mineable/shovel', 'tfg:grass/amber_kaolin_mycelium')
	event.add('minecraft:mineable/shovel', 'tfg:grass/rusticus_mycelium')
	event.add('minecraft:mineable/shovel', 'tfg:grass/rusticus_clay_mycelium')
	event.add('minecraft:mineable/shovel', 'tfg:grass/rusticus_kaolin_mycelium')
	event.add('minecraft:mineable/shovel', 'tfg:grass/sangnum_mycelium')
	event.add('minecraft:mineable/shovel', 'tfg:grass/sangnum_clay_mycelium')
	event.add('minecraft:mineable/shovel', 'tfg:grass/sangnum_kaolin_mycelium')
	event.add('tfc:bush_plantable_on', 'tfg:grass/mars_farmland')
	event.add('tfc:grass_plantable_on', 'tfg:grass/mars_farmland')
	event.add('tfc:creeping_plantable_on', 'tfg:grass/mars_farmland')

	event.add('minecraft:mushroom_grow_block', '#tfc:dirt')
	event.add('minecraft:mushroom_grow_block', '#tfc:grass')
	event.add('minecraft:mushroom_grow_block', '#forge:sand')
	event.add('minecraft:mushroom_grow_block', '#forge:gravel')
	// #endregion

	event.add('tfg:harvester_harvestable', '#tfc:fruit_tree_leaves')
	event.add('tfg:harvester_harvestable', '#tfc:berry_bushes')
	event.add('tfg:harvester_harvestable', '#tfc:any_spreading_bush')
	event.add('tfg:harvester_harvestable', '#firmalife:grape_strings')
	event.add('tfg:harvester_harvestable', '#firmalife:grape_trellis_posts_plant')
	//added for QOL but doesnt harvest anything
	event.add('tfg:harvester_harvestable', 'firmalife:grape_fluff_red')
	event.add('tfg:harvester_harvestable', 'firmalife:grape_fluff_white')

	event.add('minecraft:mineable/pickaxe', 'tfg:superconductor_coil_large')
	event.add('minecraft:mineable/pickaxe', 'tfg:superconductor_coil_small')
	event.add('minecraft:mineable/pickaxe', 'tfg:electromagnetic_accelerator')
	event.add('minecraft:mineable/pickaxe', 'tfg:reflector')
	event.add('minecraft:mineable/pickaxe', 'tfg:machine_casing_aluminium_plated_steel')
	event.add('forge:mineable/wrench', 'tfg:superconductor_coil_large')
	event.add('forge:mineable/wrench', 'tfg:superconductor_coil_small')
	event.add('forge:mineable/wrench', 'tfg:electromagnetic_accelerator')
	event.add('forge:mineable/wrench', 'tfg:reflector')
	event.add('forge:mineable/wrench', 'tfg:machine_casing_aluminium_plated_steel')

	event.add('tfg:decorative_plant_attachable', '#minecraft:logs')
	event.add('tfg:decorative_plant_attachable', 'minecraft:mushroom_stem')
	event.add('tfg:decorative_plant_attachable', 'species:alphacene_mushroom_block')
	event.add('tfg:decorative_plant_attachable', 'species:alphacene_moss_block')
	event.add('tfg:decorative_plant_attachable', 'ad_astra:aeronos_cap')
	event.add('tfg:decorative_plant_attachable', 'ad_astra:strophar_cap')
	event.add('tfg:decorative_plant_attachable', 'tfg:glacian_leaves')
	event.add('tfg:decorative_plant_attachable', 'minecraft:nether_wart_block')
	event.add('tfg:decorative_plant_attachable', 'minecraft:warped_wart_block')
	event.add('tfg:decorative_plant_attachable', 'betterend:cave_bush')
	event.add('tfg:decorative_plant_attachable', 'betterend:lucernia_leaves')

	event.add('minecraft:mineable/pickaxe', 'tfg:mars_ice')
	event.add('minecraft:mineable/pickaxe', 'tfg:dry_ice')
	event.add('tfcambiental:cold_stuff', 'tfg:mars_ice')
	event.add('tfcambiental:cold_stuff', 'tfg:dry_ice')
	event.add('minecraft:ice', 'tfg:mars_ice')
	event.add('minecraft:ice', 'tfg:dry_ice')

	event.add('minecraft:mineable/shovel', 'tfg:ash_pile')
	event.add('minecraft:mineable/shovel', 'tfg:pile/black_sand')
	event.add('minecraft:mineable/shovel', 'tfg:pile/white_sand')
	event.add('minecraft:mineable/shovel', 'tfg:pile/brown_sand')
	event.add('minecraft:mineable/shovel', 'tfg:pile/red_sand')
	event.add('minecraft:mineable/shovel', 'tfg:pile/yellow_sand')
	event.add('minecraft:mineable/shovel', 'tfg:pile/pink_sand')
	event.add('minecraft:mineable/shovel', 'tfg:pile/green_sand')
	event.add('minecraft:mineable/shovel', 'tfg:pile/moon_sand')
	event.add('minecraft:mineable/shovel', 'tfg:pile/mars_sand')
	event.add('minecraft:mineable/shovel', 'tfg:pile/venus_sand')
	event.add('minecraft:mineable/shovel', 'tfg:pile/hematitic_sand')
	event.add('minecraft:mineable/shovel', 'tfg:pile/mars_sand_covering')
	event.add('minecraft:mineable/shovel', 'tfg:pile/venus_sand_covering')
	event.add('minecraft:mineable/shovel', 'tfg:pile/hematitic_sand_covering')

	event.add('tfc:can_landslide', 'tfg:sand/fluorapatite/blue')
	event.add('tfc:can_landslide', 'tfg:sand/fluorapatite/green')
	event.add('tfc:can_landslide', 'tfg:sand/fluorapatite/brown')
	event.add('tfc:can_landslide', 'tfg:sand/fluorapatite/orange')
	event.add('tfc:can_landslide', 'tfg:sand/fluorapatite/white')
	event.add('tfc:can_landslide', 'tfg:sand/fluorapatite/yellow')
}
//#endregion

//#region Fluids
const registerTFGFluidTags = (event) => {

	event.add('tfg:clean_water', 'minecraft:water')
	event.add('tfg:clean_water', 'tfc:river_water')
	event.add('tfg:clean_water', 'tfc:spring_water')

	event.add('tfc:any_water', 'tfg:semiheavy_ammoniacal_water')
	event.add('tfc:hydrating', 'tfg:semiheavy_ammoniacal_water')
	event.add('tfc:drinkables', 'tfg:semiheavy_ammoniacal_water')
	event.add('tfc:any_drinkables', 'tfg:semiheavy_ammoniacal_water')
	event.add('tfc:ingredients', 'tfg:semiheavy_ammoniacal_water')
	event.add('minecraft:water', 'tfg:semiheavy_ammoniacal_water')

	event.add('tfc:drinkables', 'tfg:proto_growth_medium')
	event.add('tfc:any_drinkables', 'tfg:proto_growth_medium')

	event.add('tfc:drinkables', 'tfg:brown_gravy')
	event.add('tfc:any_drinkables', 'tfg:brown_gravy')

	event.add('minecraft:water', 'tfg:rich_stock')
	event.add('tfc:drinkables', 'tfg:rich_stock')
	event.add('tfc:any_drinkables', 'tfg:rich_stock')
	
	event.add('minecraft:water', 'tfg:light_stock')
	event.add('tfc:drinkables', 'tfg:light_stock')
	event.add('tfc:any_drinkables', 'tfg:light_stock')

	global.BREATHABLE_COMPRESSED_AIRS.forEach(x => {
		event.add('tfg:breathable_compressed_air', x)
	})
	
	// Platline tags
	event.add('tfg:sulfuric_metal_solution', 'gtceu:sulfuric_copper_solution')
	event.add('tfg:sulfuric_metal_solution', 'gtceu:sulfuric_nickel_solution')
}
//#endregion


const registerTFGBiomeTags = (event) => {

	// #region TFG Structure Biomes

	event.add('tfg:has_structure/plains_temperate_0', 'tfc:plains')
	event.add('tfg:has_structure/plains_temperate_0', 'tfc:plateau')
	event.add('tfg:has_structure/plains_temperate_0', 'tfc:highlands')

	event.add('tfg:has_structure/aqueduct', 'tfc:plains')
	event.add('tfg:has_structure/aqueduct', 'tfc:highlands')
	event.add('tfg:has_structure/aqueduct', 'tfc:lowlands')
	event.add('tfg:has_structure/aqueduct', 'tfc:badlands')

	event.add('tfg:has_structure/ocean_moai_0', 'tfc:volcanic_oceanic_mountains')
	event.add('tfg:has_structure/ocean_moai_0', 'tfc:volcanic_mountains')

	event.add('tfg:has_structure/illages', 'tfc:plains')
	event.add('tfg:has_structure/illages', 'tfc:hills')
	event.add('tfg:has_structure/illages', 'tfc:rolling_hills')
	event.add('tfg:has_structure/illages', 'tfc:badlands')
	event.add('tfg:has_structure/illages', 'tfc:plateau')
	event.add('tfg:has_structure/illages', 'tfc:old_mountains')

	event.add('tfg:never_has_structure/illages', '#tfc:is_lake')
	event.add('tfg:never_has_structure/illages', '#tfc:is_ocean')
	event.add('tfg:never_has_structure/illages', '#tfc:is_river')

	// #endregion

	// #region Nether biomes
	event.add('tfg:nether_biomes', 'tfg:nether/lush_hollow')
	event.add('minecraft:allows_surface_slime_spawns', 'tfg:nether/lush_hollow')
	event.add('minecraft:spawns_cold_variant_frogs', 'tfg:nether/lush_hollow')
	
	event.add('tfg:nether_biomes', 'tfg:nether/decaying_caverns')
	event.add('minecraft:allows_surface_slime_spawns', 'tfg:nether/decaying_caverns')
	event.add('minecraft:spawns_warm_variant_frogs', 'tfg:nether/decaying_caverns')
	event.add('minecraft:has_closer_water_fog', 'tfg:nether/decaying_caverns')
	
	event.add('tfg:nether_biomes', 'tfg:nether/basalt_deltas')
	event.add('tfg:nether_biomes', 'tfg:nether/ash_forest')
	event.add('tfg:nether_biomes', 'tfg:nether/lava_floes')
	event.add('tfg:nether_biomes', 'tfg:nether/webbed_lair')
	event.add('tfg:nether_biomes', 'tfg:nether/gneiss_caves')
	event.add('tfg:nether_biomes', 'tfg:nether/diorite_caves')
	event.add('tfg:nether_biomes', 'tfg:nether/gabbro_caves')
	event.add('tfg:nether_biomes', 'tfg:nether/granite_caves')
	event.add('tfg:nether_biomes', 'tfg:nether/schist_caves')

	event.add('minecraft:has_structure/nether_fossil', '#tfg:nether_biomes')
	event.add('minecraft:has_structure/bastion_remnant', '#tfg:nether_biomes')
	// #endregion
}

function registerTFGConfiguredFeatures(event) {
	registerTFGForestConfiguredFeatures(event)
}

// Other space decoration is in ad_astra/tags.js
const registerTFGPlacedFeatures = (event) => {

	// #region Earth biomes

	event.add('tfc:in_biome/surface_decoration/ocean', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/ocean_reef', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/deep_ocean', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/deep_ocean_trench', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/shore', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/tidal_flats', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/lowlands', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/salt_marsh', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/plains', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/lake', 'tfg:earth/rose_quartz/rose_quartz')

	// #endregion 

	registerTFGOreVeinFeatures(event);

	// #region Nether

	event.add('tfg:nether_veins', 'beneath:vein/crackrack_pipe')

	event.add('tfg:nether_underground_decoration', 'minecraft:spring_open')
	event.add('tfg:nether_underground_decoration', 'minecraft:spring_closed')
	event.add('tfg:nether_underground_decoration', 'tfg:nether/terrain/magma_blob')

	// #endregion
	
}
