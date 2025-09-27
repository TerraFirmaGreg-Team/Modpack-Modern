"use strict";

const registerTFGItemTags = (event) => {

	registerTFGTrimTags(event)
	registerFacadeWhitelistTags(event)
	registerBlockInteractionTags(event)
	//crop stuff
	event.add('tfc:seeds', 'tfg:sunflower_seeds')
	event.add('tfc:seeds', 'tfg:rapeseed_seeds')
	event.add('tfc:seeds', 'tfg:flax_seeds')
	event.add('tfc:foods', 'tfg:roasted_sunflower_seeds')
	event.add('tfc:compost_greens_high', 'tfg:rapeseed_product')
	event.add('tfc:compost_greens_high', 'tfg:sunflower_product')
	event.add('tfc:compost_greens_high', 'tfg:flax_product')
	event.add('tfc:compost_greens_high', 'tfg:lunar_chorus_flower')
	event.add('tfg:water_breathing_ingredients', 'tfg:rapeseed_product')
	event.add('tfg:night_vision_ingredients', 'tfg:sunflower_product')

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

	//temporary hidden items
	event.add('c:hidden_from_recipe_viewers', 'tfg:geyser_source_small')
	event.add('c:hidden_from_recipe_viewers', 'tfg:geyser_source')
	event.add('c:hidden_from_recipe_viewers', 'tfg:stromatolite_cluster_small')
	event.add('c:hidden_from_recipe_viewers', 'tfg:stromatolite_cluster_medium')

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

	//Fission Nucleat Fuel
	event.add('deafission:fuels', 'tfg:thorium_rod')
	event.add('deafission:fuels', 'tfg:uranium_rod')
	event.add('deafission:fuels', 'tfg:plutonium_rod')
	event.add('tfg:fission_rods', '#deafission:fuels')

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
	event.add('tfc:usable_on_tool_rack', 'tfg:trowel')

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

	event.add('tfc:fluxstone', 'tfg:loose/dripstone')
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

	// Brick Index
	const BRICK_KEYS = [
		"brick",
		"brick_stairs",
		"brick_slab",
		"brick_wall",
		"cracked_brick",
		"cracked_stairs",
		"cracked_slab",
		"cracked_wall",
		"mossy_brick",
		"mossy_stairs",
		"mossy_slab",
		"mossy_wall",
		"smooth_brick",
		"smooth_stairs",
		"smooth_slab",
		"smooth_wall",
		"chiseled_brick"
	];

	global.BRICK_INDEX.forEach(brickObj => {
		BRICK_KEYS.forEach(key => {
			const id = brickObj[key];
			if (typeof id === 'string' && id) {
				event.add('tfg:brick_index', id);
			}
		});
	});

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

	//#region Meal Bag
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
		'#firmalife:foods/chocolate',
		'#tfcchannelcasting:foods/chocolate_sweet',
		'firmalife:food/chocolate_chip_cookie',
		'firmalife:food/vanilla_ice_cream',
		'firmalife:food/strawberry_ice_cream',
		'firmalife:food/chocolate_ice_cream',
		'firmalife:food/banana_split',
		'tfc:food/cooked_egg',
		'tfc:food/boiled_egg',
		'tfc:food/cooked_rice',
		'firmalife:food/cooked_pasta',
		'firmalife:food/pasta_with_tomato_sauce',
		'firmalife:food/cooked_rice_noodles',
		'tfg:roasted_sunflower_seeds'
	];
	usable_in_meal_bag.forEach(item => {
		event.add('tfg:foods/usable_in_meal_bag', item);
	});
	event.add('tfg:foil_packs', 'tfg:foil_pack');
	event.add('tfg:foil_packs', 'tfg:clean_foil_pack')
	//#endregion
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
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:lv_super_chest')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:mv_super_chest')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:hv_super_chest')
	event.add('tfg:cannot_launch_in_railgun', 'gtceu:ev_super_chest')
	//#endregion

	const SHAPES =    ['stairs', 'slab', 'wall']
	const SHAPES_AA = ['stairs', 'slab']

	const STONE_TYPES = {
		deepslate:      "metamorphic",
		blackstone:     "igneous_intrusive",
		dripstone:      "sedimentary",
		crackrack:      "igneous_intrusive",
		basalt:         "igneous_extrusive",
		moon:           "igneous_intrusive",
		moon_deepslate: "igneous_intrusive",
		mars:           "sedimentary",
		venus:          "igneous_extrusive",
		mercury:        "igneous_intrusive",
		glacio:         "igneous_extrusive",
		red_granite:    "igneous_intrusive"
	}

	function getStoneType(stone) {
		const stoneType = STONE_TYPES[stone.toLowerCase()];
		return stoneType ? stoneType : `Stone "${stone}" not found`;
	}

	const AA_REGULAR_STONES = ['moon', 'mars', 'venus', 'mercury', 'glacio']

	// #region Nether blocks
	 
	// Deepslate (Migmatite) [Metamorphic]
	const create_deepslate_blocks = Ingredient.of('#create:stone_types/deepslate').itemIds.toArray().map(String);
	create_deepslate_blocks.forEach(block => {
		event.add(`tfc:${STONE_TYPES.deepslate}_items`, block)
	})

	event.add(`tfc:${STONE_TYPES.deepslate}_items`, 'minecraft:deepslate')

	event.add(`tfc:${STONE_TYPES.deepslate}_items`, 'minecraft:cobbled_deepslate')

	SHAPES.forEach(shape => {
		event.add(`tfc:${STONE_TYPES.deepslate}_items`, `minecraft:cobbled_deepslate_${shape}`)
		event.add(`tfg:rock_${shape}`.replace(/ss/g, 's'), `minecraft:cobbled_deepslate_${shape}`)
	})

	event.add('forge:smooth_stone', 'minecraft:polished_deepslate')
	event.add(`tfc:${STONE_TYPES.deepslate}_items`, 'minecraft:polished_deepslate')	
	event.add('tfc:rock/smooth', 'minecraft:polished_deepslate')
	event.add('create:stone_types/deepslate', 'minecraft:polished_deepslate')

	SHAPES.forEach(shape => {
		event.add(`tfc:${STONE_TYPES.deepslate}_items`, `minecraft:polished_deepslate_${shape}`)
		event.add(`tfg:rock_${shape}`.replace(/ss/g, 's'), `minecraft:polished_deepslate_${shape}`)
	})

	event.add('forge:stone_bricks', 'minecraft:deepslate_bricks')
	event.add(`tfc:${STONE_TYPES.deepslate}_items`, 'minecraft:deepslate_bricks')
	event.add('tfc:rock/bricks', 'minecraft:deepslate_bricks')

	event.add('forge:stone_bricks', 'minecraft:deepslate_tiles')
	event.add(`tfc:${STONE_TYPES.deepslate}_items`, 'minecraft:deepslate_tiles')
	event.add('tfc:rock/bricks', 'minecraft:deepslate_tiles')
	event.add('tfc:rock/chiseled_bricks', 'minecraft:deepslate_tiles')

	SHAPES.forEach(shape => {
		event.add(`tfc:${STONE_TYPES.deepslate}_items`, `minecraft:deepslate_tile_${shape}`)
		event.add(`tfg:brick_${shape}`.replace(/ss/g, 's'), `minecraft:deepslate_tile_${shape}`)
	})

	event.add('forge:stone_bricks', 'minecraft:cracked_deepslate_tiles')
	event.add(`tfc:${STONE_TYPES.deepslate}_items`, 'minecraft:cracked_deepslate_tiles')
	event.add('tfc:rock/bricks', 'minecraft:cracked_deepslate_tiles')
	event.add('tfc:rock/chiseled_bricks', 'minecraft:cracked_deepslate_tiles')

	event.add('forge:stone_bricks', 'minecraft:chiseled_deepslate')
	event.add(`tfc:${STONE_TYPES.deepslate}_items`, 'minecraft:chiseled_deepslate')
	event.add('tfc:rock/bricks', 'minecraft:chiseled_deepslate')
	event.add('tfc:rock/chiseled_bricks', 'minecraft:chiseled_deepslate')

	// Blackstone (Pyroxenite) [Igneous Intrusive]
	event.remove('tfc:metamorphic_rock', 'beneath:blackstone_pebble')
	event.add(`tfc:${STONE_TYPES.blackstone}_rock`, 'beneath:blackstone_pebble')
	event.add(`tfc:${STONE_TYPES.blackstone}_items`, 'beneath:blackstone_pebble')
	event.add('rnr:loose_rock_items', 'beneath:blackstone_pebble')

	event.add(`tfc:${STONE_TYPES.blackstone}_items`, 'beneath:blackstone_brick')

	event.add('forge:stone', 'minecraft:blackstone')
	event.add(`tfc:${STONE_TYPES.blackstone}_items`, 'minecraft:blackstone')

	SHAPES.forEach(shape => {
		event.add(`tfc:${STONE_TYPES.blackstone}_items`, `minecraft:blackstone_${shape}`)
		event.add(`tfg:rock_${shape}`.replace(/ss/g, 's'), `minecraft:blackstone_${shape}`)
	})

	event.add(`tfc:${STONE_TYPES.blackstone}_items`, 'minecraft:gilded_blackstone')

	event.add('forge:smooth_stone', 'minecraft:polished_blackstone')
	event.add(`tfc:${STONE_TYPES.blackstone}_items`, 'minecraft:polished_blackstone')
	event.add('tfc:rock/smooth', 'minecraft:polished_blackstone')

	event.add('forge:stone_bricks', 'minecraft:polished_blackstone_bricks')
	event.add(`tfc:${STONE_TYPES.blackstone}_items`, 'minecraft:polished_blackstone_bricks')
	event.add('tfc:rock/bricks', 'minecraft:polished_blackstone_bricks')

	SHAPES.forEach(shape => {
		event.add(`tfc:${STONE_TYPES.blackstone}_items`, `minecraft:polished_blackstone_${shape}`)
		event.add(`tfg:rock_${shape}`.replace(/ss/g, 's'), `minecraft:polished_blackstone_${shape}`)
	})

	event.add('forge:stone_bricks', 'minecraft:cracked_polished_blackstone_bricks')
	event.add(`tfc:${STONE_TYPES.blackstone}_items`, 'minecraft:cracked_polished_blackstone_bricks')
	event.add('tfc:rock/bricks', 'minecraft:cracked_polished_blackstone_bricks')
	event.add('tfc:rock/cracked_bricks', 'minecraft:cracked_polished_blackstone_bricks')

	SHAPES.forEach(shape => {
		event.add(`tfc:${STONE_TYPES.blackstone}_items`, `minecraft:polished_blackstone_brick_${shape}`)
		event.add(`tfg:brick_${shape}`.replace(/ss/g, 's'), `minecraft:polished_blackstone_brick_${shape}`)
	})

	event.add('forge:stone_bricks', 'minecraft:polished_blackstone_bricks')
	event.add(`tfc:${STONE_TYPES.blackstone}_items`, 'minecraft:polished_blackstone_bricks')
	event.add('tfc:rock/bricks', 'minecraft:polished_blackstone_bricks')

	event.add('forge:stone_bricks', 'minecraft:chiseled_polished_blackstone')
	event.add(`tfc:${STONE_TYPES.blackstone}_items`, 'minecraft:chiseled_polished_blackstone')
	event.add('tfc:rock/bricks', 'minecraft:chiseled_polished_blackstone')
	event.add('tfc:rock/chiseled_bricks', 'minecraft:chiseled_polished_blackstone')

	event.add(`tfc:${STONE_TYPES.blackstone}_items`, 'beneath:blackstone_aqueduct')	

	// Dripstone (Travertine) [Sedimentary]
	const create_dripstone_blocks = Ingredient.of('#create:stone_types/dripstone').itemIds.toArray().map(String);
	create_dripstone_blocks.forEach(block => {
		event.add(`tfc:${STONE_TYPES.dripstone}_items`, block)
	})

	event.add('forge:stone', 'minecraft:dripstone_block')
	event.add(`tfc:${STONE_TYPES.dripstone}_items`, 'minecraft:dripstone_block')

	event.add('forge:smooth_stone', 'create:cut_dripstone')
	event.add(`tfc:${STONE_TYPES.dripstone}_items`, 'create:cut_dripstone')
	event.add('tfc:rock/smooth', 'create:cut_dripstone')

	SHAPES.forEach(shape => {
		event.add(`tfc:${STONE_TYPES.dripstone}_items`, `create:cut_dripstone_${shape}`)
		event.add(`tfg:rock_${shape}`.replace(/ss/g, 's'), `create:cut_dripstone_${shape}`)
	})

	event.add('forge:smooth_stone', 'ad_astra:polished_cut_dripstone')
	event.add('tfc:rock/smooth', 'create:polished_cut_dripstone')

	SHAPES.forEach(shape => {
		event.add(`tfc:${STONE_TYPES.dripstone}_items`, `create:polished_cut_dripstone_${shape}`)
		event.add(`tfg:rock_${shape}`.replace(/ss/g, 's'), `create:polished_cut_dripstone_${shape}`)
	})

	event.add('forge:stone_bricks', 'create:cut_dripstone_bricks')
	event.add(`tfc:${STONE_TYPES.dripstone}_items`, 'create:cut_dripstone_bricks')
	event.add('tfc:rock/bricks', 'create:cut_dripstone_bricks')

	SHAPES.forEach(shape => {
		event.add(`tfc:${STONE_TYPES.dripstone}_items`, `create:cut_dripstone_brick_${shape}`)
		event.add(`tfg:brick_${shape}`.replace(/ss/g, 's'), `create:cut_dripstone_brick_${shape}`)
	})

	event.add('forge:stone_bricks', 'create:small_dripstone_bricks')
	event.add(`tfc:${STONE_TYPES.dripstone}_items`, 'create:small_dripstone_bricks')
	event.add('tfc:rock/bricks', 'create:small_dripstone_bricks')
	event.add('tfc:rock/chiseled_bricks', 'create:small_dripstone_bricks')

	SHAPES.forEach(shape => {
		event.add(`tfc:${STONE_TYPES.dripstone}_items`, `create:small_dripstone_brick_${shape}`)
		event.add(`tfg:brick_${shape}`.replace(/ss/g, 's'), `create:small_dripstone_brick_${shape}`)
	})
 
	// Crackrack / "Nether" (Keratophyre) [Igneous Intrusive]
	event.add('forge:stone', 'beneath:crackrack')
	event.add(`tfc:${STONE_TYPES.crackrack}_items`, 'beneath:crackrack')
	
	event.add('forge:stone_bricks', 'minecraft:nether_bricks')
	event.add(`tfc:${STONE_TYPES.crackrack}_items`, 'minecraft:nether_bricks')
	event.add('tfc:rock/bricks', 'minecraft:nether_bricks')

	SHAPES.forEach(shape => {
		event.add(`tfc:${STONE_TYPES.crackrack}_items`, `minecraft:nether_brick_${shape}`)
		event.add(`tfg:brick_${shape}`.replace(/ss/g, 's'), `minecraft:nether_brick_${shape}`)
	})

	event.add('forge:stone_bricks', 'minecraft:cracked_nether_bricks')
	event.add(`tfc:${STONE_TYPES.crackrack}_items`, 'minecraft:cracked_nether_bricks')
	event.add('tfc:rock/bricks', 'minecraft:cracked_nether_bricks')
	event.add('tfc:rock/cracked_bricks', 'minecraft:cracked_nether_bricks')

	event.add('forge:stone_bricks', 'minecraft:chiseled_nether_bricks')
	event.add(`tfc:${STONE_TYPES.crackrack}_items`, 'minecraft:chiseled_nether_bricks')
	event.add('tfc:rock/bricks', 'minecraft:chiseled_nether_bricks')
	event.add('tfc:rock/chiseled_bricks', 'minecraft:chiseled_nether_bricks')

	// Basalt
	event.add('forge:stone', 'minecraft:basalt')
	event.add(`tfc:${STONE_TYPES.basalt}_items`, 'minecraft:basalt')

	event.add('forge:smooth_stone', 'minecraft:smooth_basalt')
	event.add(`tfc:${STONE_TYPES.basalt}_items`, 'minecraft:smooth_basalt')	
	event.add('tfc:rock/smooth', 'minecraft:smooth_basalt')

	event.add('forge:smooth_stone', 'minecraft:polished_basalt')
	event.add(`tfc:${STONE_TYPES.basalt}_items`, 'minecraft:polished_basalt')	
	event.add('tfc:rock/smooth', 'minecraft:polished_basalt')
	// #endregion

	// #region Space blocks
	AA_REGULAR_STONES.forEach(stone => {
		event.add('forge:stone', `ad_astra:${stone}_stone`)
		event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:${stone}_stone`)

		SHAPES_AA.forEach(shape => {
			event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:${stone}_stone_${shape}`)
			event.add(`tfg:rock_${shape}`.replace(/ss/g, 's'), `ad_astra:${stone}_stone_${shape}`)
		})

		event.add('forge:cobblestone', `ad_astra:${stone}_cobblestone`)
		event.add('forge:cobblestone/normal',  `ad_astra:${stone}_cobblestone`)
		event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:${stone}_cobblestone`)

		SHAPES_AA.forEach(shape => {
			event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:${stone}_cobblestone_${shape}`)
			event.add(`tfg:rock_${shape}`.replace(/ss/g, 's'), `ad_astra:${stone}_cobblestone_${shape}`)
		})

		event.add('forge:smooth_stone', `ad_astra:polished_${stone}_stone`)
		event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:polished_${stone}_stone`)
		event.add('tfc:rock/smooth', `ad_astra:polished_${stone}_stone`)

		SHAPES_AA.forEach(shape => {
			event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:polished_${stone}_stone_${shape}`)
			event.add(`tfg:rock_${shape}`.replace(/ss/g, 's'), `ad_astra:polished_${stone}_stone_${shape}`)
		})

		event.add('forge:stone_bricks', `ad_astra:${stone}_stone_bricks`)
		event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:${stone}_stone_bricks`)
		event.add('tfc:rock/bricks', `ad_astra:${stone}_stone_bricks`)
		
		SHAPES.forEach(shape => {
			event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:${stone}_stone_brick_${shape}`)
			event.add(`tfg:brick_${shape}`.replace(/ss/g, 's'), `ad_astra:${stone}_stone_brick_${shape}`)
		})

		event.add('forge:stone_bricks', `ad_astra:cracked_${stone}_stone_bricks`)
		event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:cracked_${stone}_stone_bricks`)
		event.add('tfc:rock/bricks', `ad_astra:cracked_${stone}_stone_bricks`)
		event.add('tfc:rock/cracked_bricks', `ad_astra:cracked_${stone}_stone_bricks`)

		event.add('forge:stone_bricks', `ad_astra:chiseled_${stone}_stone_bricks`)
		event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:chiseled_${stone}_stone_bricks`)
		event.add('tfc:rock/bricks', `ad_astra:chiseled_${stone}_stone_bricks`)
		event.add('tfc:rock/chiseled_bricks', `ad_astra:chiseled_${stone}_stone_bricks`)

		SHAPES_AA.forEach(shape => {
			event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:chiseled_${stone}_stone_brick_${shape}`)
			event.add(`tfg:brick_${shape}`.replace(/ss/g, 's'), `ad_astra:chiseled_${stone}_stone_brick_${shape}`)
		})

		event.add(`tfc:${getStoneType(stone)}_items`, `ad_astra:${stone}_pillar`)
	})

	// Moon Deepslate (Norite) [Igneous Intrusive]
	event.add('forge:stone', 'ad_astra:moon_deepslate')
	event.add(`tfc:${STONE_TYPES.moon_deepslate}_items`, 'ad_astra:moon_deepslate')
	
	// Red Granite [Igneous Intrusive]
	event.add('forge:stone', 'gtceu:red_granite')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:red_granite')

	event.add('forge:cobblestone', 'gtceu:red_granite_cobblestone')
	event.add('forge:cobblestone/normal', 'gtceu:red_granite_cobblestone')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:red_granite_cobblestone')

	event.add('forge:cobblestone', 'gtceu:mossy_red_granite_cobblestone')
	event.add('forge:cobblestone/normal', 'gtceu:mossy_red_granite_cobblestone')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:mossy_red_granite_cobblestone')

	event.add('forge:smooth_stone', 'gtceu:polished_red_granite')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:polished_red_granite')
	event.add('tfc:rock/smooth', 'gtceu:polished_red_granite')

	event.add('forge:stone_bricks', 'gtceu:red_granite_bricks')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:red_granite_bricks')
	event.add('tfc:rock/bricks', 'gtceu:red_granite_bricks')
	event.add('tfg:red_granite_cutter_set', 'gtceu:red_granite_bricks')

	event.add('forge:stone_bricks', 'gtceu:mossy_red_granite_bricks')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:mossy_red_granite_bricks')
	event.add('tfc:rock/bricks', 'gtceu:mossy_red_granite_bricks')
	event.add('tfc:rock/mossy_bricks', 'gtceu:mossy_red_granite_bricks')

	event.add('forge:stone_bricks', 'gtceu:cracked_red_granite_bricks')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:cracked_red_granite_bricks')
	event.add('tfc:rock/bricks', 'gtceu:cracked_red_granite_bricks')
	event.add('tfc:rock/cracked_bricks', 'gtceu:cracked_red_granite_bricks')

	event.add('forge:stone_bricks', 'gtceu:red_granite_tile')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:red_granite_tile')
	event.add('tfc:rock/bricks', 'gtceu:red_granite_tile')
	event.add('tfc:rock/chiseled_bricks', 'gtceu:red_granite_tile')
	event.add('tfg:red_granite_cutter_set', 'gtceu:red_granite_tile')

	event.add('forge:stone_bricks', 'gtceu:square_red_granite_bricks')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:square_red_granite_bricks')
	event.add('tfc:rock/bricks', 'gtceu:square_red_granite_bricks')
	event.add('tfc:rock/chiseled_bricks', 'gtceu:square_red_granite_bricks')
	event.add('tfg:red_granite_cutter_set', 'gtceu:square_red_granite_bricks')

	event.add('forge:stone_bricks', 'gtceu:red_granite_windmill_a')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:red_granite_windmill_a')
	event.add('tfc:rock/bricks', 'gtceu:red_granite_windmill_a')
	event.add('tfc:rock/chiseled_bricks', 'gtceu:red_granite_windmill_a')
	event.add('tfg:red_granite_cutter_set', 'gtceu:red_granite_windmill_a')

	event.add('forge:stone_bricks', 'gtceu:red_granite_windmill_b')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:red_granite_windmill_b')
	event.add('tfc:rock/bricks', 'gtceu:red_granite_windmill_b')
	event.add('tfc:rock/chiseled_bricks', 'gtceu:red_granite_windmill_b')
	event.add('tfg:red_granite_cutter_set', 'gtceu:red_granite_windmill_b')

	event.add('forge:stone_bricks', 'gtceu:small_red_granite_bricks')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:small_red_granite_bricks')
	event.add('tfc:rock/bricks', 'gtceu:small_red_granite_bricks')
	event.add('tfc:rock/chiseled_bricks', 'gtceu:small_red_granite_bricks')
	event.add('tfg:red_granite_cutter_set', 'gtceu:small_red_granite_bricks')

	event.add('forge:stone_bricks', 'gtceu:red_granite_small_tile')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:red_granite_small_tile')
	event.add('tfc:rock/bricks', 'gtceu:red_granite_small_tile')
	event.add('tfc:rock/chiseled_bricks', 'gtceu:red_granite_small_tile')
	event.add('tfg:red_granite_cutter_set', 'gtceu:red_granite_small_tile')

	event.add('forge:stone_bricks', 'gtceu:chiseled_red_granite')
	event.add(`tfc:${STONE_TYPES.red_granite}_items`, 'gtceu:chiseled_red_granite')
	event.add('tfc:rock/bricks', 'gtceu:chiseled_red_granite')
	event.add('tfc:rock/chiseled_bricks', 'gtceu:chiseled_red_granite')
	event.add('tfg:red_granite_cutter_set', 'gtceu:chiseled_red_granite')	
	
	// Permafrost (???) [NA]
	event.remove('tfc:metamorphic_rock', 'tfg:loose/permafrost')
	event.add('forge:stone', 'ad_astra:permafrost')
	
	event.add('forge:smooth_stone', 'ad_astra:polished_permafrost')
	event.add('tfc:rock/smooth', 'ad_astra:polished_permafrost')

	event.add('forge:stone_bricks', 'ad_astra:permafrost_bricks')
	event.add('tfc:rock/bricks', 'ad_astra:permafrost_bricks')

	event.add('forge:stone_bricks', 'ad_astra:cracked_permafrost_bricks')
	event.add('tfc:rock/bricks', 'ad_astra:cracked_permafrost_bricks')
	event.add('tfc:rock/cracked_bricks', 'ad_astra:cracked_permafrost_bricks')

	event.add('forge:stone_bricks', 'ad_astra:chiseled_permafrost_bricks')
	event.add('tfc:rock/bricks', 'ad_astra:chiseled_permafrost_bricks')
	event.add('tfc:rock/chiseled_bricks', 'ad_astra:chiseled_permafrost_bricks')
	
	// Dirt
	event.add('tfg:moon_plants', 'tfg:lunar_roots')
	event.add('tfg:moon_plants', 'tfg:lunar_sprouts')

	event.add('minecraft:dirt', 'tfg:grass/mars_dirt')
	event.add('tfc:dirt', 'tfg:grass/mars_dirt')
	event.add('tfc:grass', 'tfg:grass/amber_mycelium')
	event.add('tfc:grass', 'tfg:grass/rusticus_mycelium')
	event.add('tfc:grass', 'tfg:grass/sangnum_mycelium')
	event.add('tfc:farmland', 'tfg:grass/mars_farmland')
	event.add('minecraft:mineable/shovel', 'tfg:grass/mars_dirt')
	event.add('minecraft:mineable/shovel', 'tfg:grass/amber_mycelium')
	event.add('minecraft:mineable/shovel', 'tfg:grass/rusticus_mycelium')
	event.add('minecraft:mineable/shovel', 'tfg:grass/sangnum_mycelium')

	// #endregion

	// Mars stone dust
	event.add('forge:mars_stone_dusts', 'tfg:venus_stone_dust')
	event.add('forge:mars_stone_dusts', 'gtceu:granite_red_dust')
	event.add('forge:mars_stone_dusts', 'tfg:mars_stone_dust')

	//Mars animal region
	event.add('tfg:martian_eggs', 'tfg:sniffer_egg')
	event.add('tfg:martian_eggs', 'tfg:wraptor_egg')
	event.add('tfc:eggs', '#tfg:martian_eggs')
	
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
		
	//#region Stone Dusts Tag
	event.add('tfg:stone_dusts', 'tfg:gabbro_dust')
	event.add('tfg:stone_dusts', 'tfg:shale_dust')
	event.add('tfg:stone_dusts', 'tfg:claystone_dust')
	event.add('tfg:stone_dusts', 'tfg:limestone_dust')
	event.add('tfg:stone_dusts', 'tfg:conglomerate_dust')
	event.add('tfg:stone_dusts', 'tfg:dolomite_dust')
	event.add('tfg:stone_dusts', 'tfg:chert_dust')
	event.add('tfg:stone_dusts', 'tfg:chalk_dust')
	event.add('tfg:stone_dusts', 'tfg:rhyolite_dust')
	event.add('tfg:stone_dusts', 'tfg:dacite_dust')
	event.add('tfg:stone_dusts', 'gtceu:quartzite_dust')
	event.add('tfg:stone_dusts', 'tfg:slate_dust')
	event.add('tfg:stone_dusts', 'tfg:phyllite_dust')
	event.add('tfg:stone_dusts', 'tfg:schist_dust')
	event.add('tfg:stone_dusts', 'tfg:gneiss_dust')
	event.add('tfg:stone_dusts', 'gtceu:marble_dust')
	event.add('tfg:stone_dusts', 'gtceu:basalt_dust')
	event.add('tfg:stone_dusts', 'gtceu:diorite_dust')
	event.add('tfg:stone_dusts', 'gtceu:andesite_dust')
	event.add('tfg:stone_dusts', 'gtceu:granite_dust')
	event.add('tfg:stone_dusts', 'gtceu:deepslate_dust')
	event.add('tfg:stone_dusts', 'gtceu:blackstone_dust')
	event.add('tfg:stone_dusts', 'tfg:dripstone_dust')
	event.add('tfg:stone_dusts', 'tfg:moon_stone_dust')
	event.add('tfg:stone_dusts', 'tfg:moon_deepslate_dust')
	event.add('tfg:stone_dusts', 'tfg:mars_stone_dust')
	event.add('tfg:stone_dusts', 'tfg:venus_stone_dust')
	event.add('tfg:stone_dusts', 'tfg:mercury_stone_dust')
	event.add('tfg:stone_dusts', 'tfg:glacio_stone_dust')
	event.add('tfg:stone_dusts', 'gtceu:stone_dust')
	event.add('tfg:stone_dusts', 'gtceu:red_granite_dust')
	event.add('tfg:stone_dusts', 'gtceu:netherrack_dust')
	//#endregion

	// #region 0.7.19 -> 0.9 conversion
	event.add('c:hidden_from_recipe_viewers', 'treetap:tap')
	event.add('c:hidden_from_recipe_viewers', 'tfcea:refrigerator')

	event.add('c:hidden_from_recipe_viewers', 'gtceu:zinc_ingot')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:brass_ingot')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:vanadium_ingot')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:black_steel_ingot')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:red_steel_ingot')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:blue_steel_ingot')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:iron_double_ingot')

	event.add('c:hidden_from_recipe_viewers', 'gtceu:black_steel_double_ingot')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:red_steel_double_ingot')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:blue_steel_double_ingot')

	event.add('c:hidden_from_recipe_viewers', 'gtceu:zinc_nugget')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:brass_nugget')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:copper_nugget')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:vanadium_nugget')

	event.add('c:hidden_from_recipe_viewers', 'gtceu:copper_plate')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:brass_plate')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:gold_plate')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:iron_plate')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:cobalt_plate')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:rose_gold_plate')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:aluminium_plate')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:invar_plate')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:lead_plate')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:nickel_plate')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:osmium_plate')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:palladium_plate')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:platinum_plate')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:rhodium_plate')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:silver_plate')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:vanadium_plate')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:zinc_plate')

	event.add('c:hidden_from_recipe_viewers', 'gtceu:vanadium_block')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:zinc_block')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:brass_block')

	event.add('c:hidden_from_recipe_viewers', 'gtceu:gold_purified_ore')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:copper_purified_ore')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:zinc_purified_ore')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:silver_purified_ore')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:tin_purified_ore')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:lead_purified_ore')

	event.add('c:hidden_from_recipe_viewers', 'gtceu:rich_raw_copper')
	event.add('c:hidden_from_recipe_viewers', 'minecraft:raw_copper')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:poor_raw_copper')

	event.add('c:hidden_from_recipe_viewers', 'gtceu:rich_raw_gold')
	event.add('c:hidden_from_recipe_viewers', 'minecraft:raw_gold')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:poor_raw_gold')

	event.add('c:hidden_from_recipe_viewers', 'gtceu:rich_raw_tetrahedrite')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:raw_tetrahedrite')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:poor_raw_tetrahedrite')

	event.add('c:hidden_from_recipe_viewers', 'gtceu:rich_raw_malachite')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:raw_malachite')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:poor_raw_malachite')

	event.add('c:hidden_from_recipe_viewers', 'gtceu:rich_raw_hematite')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:raw_hematite')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:poor_raw_hematite')

	event.add('c:hidden_from_recipe_viewers', 'gtceu:rich_raw_cassiterite')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:raw_cassiterite')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:poor_raw_cassiterite')

	event.add('c:hidden_from_recipe_viewers', 'gtceu:rich_raw_bismuth')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:raw_bismuth')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:poor_raw_bismuth')

	event.add('c:hidden_from_recipe_viewers', 'gtceu:rich_raw_magnetite')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:raw_magnetite')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:poor_raw_magnetite')

	event.add('c:hidden_from_recipe_viewers', 'gtceu:rich_raw_yellow_limonite')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:raw_yellow_limonite')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:poor_raw_yellow_limonite')

	event.add('c:hidden_from_recipe_viewers', 'gtceu:rich_raw_sphalerite')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:raw_sphalerite')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:poor_raw_sphalerite')

	event.add('c:hidden_from_recipe_viewers', 'gtceu:rich_raw_garnierite')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:raw_garnierite')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:poor_raw_garnierite')

	event.add('c:hidden_from_recipe_viewers', 'gtceu:rich_raw_silver')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:raw_silver')
	event.add('c:hidden_from_recipe_viewers', 'gtceu:poor_raw_silver')
	//#endregion
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

	// Fision Components
    var COMPONENTS = 'deafission:components';
    
    event.add(COMPONENTS, 'minecraft:white_wool');
    event.add(COMPONENTS, 'minecraft:black_wool');
    event.add(COMPONENTS, 'minecraft:pink_wool');
    event.add(COMPONENTS, 'minecraft:white_wool');
    event.add(COMPONENTS, 'minecraft:bedrock');

    event.add(COMPONENTS, 'minecraft:iron_block');
    event.add(COMPONENTS, 'minecraft:emerald_block');
    event.add(COMPONENTS, 'minecraft:netherite_block');
    event.add(COMPONENTS, 'minecraft:nether_portal');
    
    event.add(COMPONENTS, 'minecraft:packed_ice');

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
	event.add('tfc:grass', 'tfg:grass/amber_mycelium')
	event.add('tfc:grass', 'tfg:grass/rusticus_mycelium')
	event.add('tfc:grass', 'tfg:grass/sangnum_mycelium')
	event.add('tfc:grass', 'tfg:grass/amber_clay_mycelium')
	event.add('tfc:grass', 'tfg:grass/rusticus_clay_mycelium')
	event.add('tfc:grass', 'tfg:grass/sangnum_clay_mycelium')
	event.add('tfc:grass', 'tfg:grass/amber_kaolin_mycelium')
	event.add('tfc:grass', 'tfg:grass/rusticus_kaolin_mycelium')
	event.add('tfc:grass', 'tfg:grass/sangnum_kaolin_mycelium')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/amber_mycelium')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/rusticus_mycelium')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/sangnum_mycelium')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/mars_farmland')
	event.add('tfc:can_landslide', 'tfg:grass/mars_dirt')
	event.add('tfc:can_landslide', 'tfg:grass/mars_clay_dirt')
	event.add('tfc:can_landslide', 'tfg:grass/mars_farmland')
	event.add('tfc:can_landslide', 'tfg:grass/amber_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/rusticus_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/sangnum_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/amber_clay_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/rusticus_clay_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/sangnum_clay_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/amber_kaolin_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/rusticus_kaolin_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/sangnum_kaolin_mycelium')
	event.add('minecraft:mushroom_grow_block', '#tfc:dirt')
	event.add('minecraft:mushroom_grow_block', '#tfc:grass')
	event.add('minecraft:mineable/shovel', 'tfg:grass/mars_farmland')
	event.add('tfc:bush_plantable_on', 'tfg:grass/mars_farmland')
	event.add('tfc:grass_plantable_on', 'tfg:grass/mars_farmland')
	event.add('tfc:creeping_plantable_on', 'tfg:grass/mars_farmland')
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
}
//#endregion

//#region Fluids
const registerTFGFluidTags = (event) => {

	event.add('tfc:usable_in_pot', 'tfg:latex')
	event.add('tfc:usable_in_barrel', 'tfg:latex')
	event.add('tfc:usable_in_wooden_bucket', 'tfg:latex')
	event.add('tfc:usable_in_red_steel_bucket', 'tfg:latex')
	event.add('tfc:usable_in_blue_steel_bucket', 'tfg:latex')

	event.add('tfc:usable_in_pot', 'tfg:vulcanized_latex')
	event.add('tfc:usable_in_barrel', 'tfg:vulcanized_latex')
	event.add('tfc:usable_in_wooden_bucket', 'tfg:vulcanized_latex')
	event.add('tfc:usable_in_red_steel_bucket', 'tfg:vulcanized_latex')
	event.add('tfc:usable_in_blue_steel_bucket', 'tfg:vulcanized_latex')

	event.add('tfc:usable_in_pot', 'tfg:conifer_pitch')
	event.add('tfc:usable_in_barrel', 'tfg:conifer_pitch')
	event.add('tfc:usable_in_wooden_bucket', 'tfg:conifer_pitch')
	event.add('tfc:usable_in_red_steel_bucket', 'tfg:conifer_pitch')
	event.add('tfc:usable_in_blue_steel_bucket', 'tfg:conifer_pitch')

	event.add('tfg:clean_water', 'minecraft:water')
	event.add('tfg:clean_water', 'tfc:river_water')
	event.add('tfg:clean_water', 'tfc:spring_water')

	event.add('tfc:usable_in_barrel', 'gtceu:seed_oil')
	
	event.add('forge:liquid', 'tfg:semiheavy_ammoniacal_water')
	event.add('waves:has_waves', 'tfg:semiheavy_ammoniacal_water')
	event.add('tfc:any_water', 'tfg:semiheavy_ammoniacal_water')
	event.add('tfc:hydrating', 'tfg:semiheavy_ammoniacal_water')
	event.add('tfc:drinkables', 'tfg:semiheavy_ammoniacal_water')
	event.add('tfc:any_drinkables', 'tfg:semiheavy_ammoniacal_water')
	event.add('tfc:ingredients', 'tfg:semiheavy_ammoniacal_water')
	event.add('tfc:usable_in_pot', 'tfg:semiheavy_ammoniacal_water')
	event.add('tfc:usable_in_wooden_bucket', 'tfg:semiheavy_ammoniacal_water')
	event.add('tfc:usable_in_barrel', 'tfg:semiheavy_ammoniacal_water')
	event.add('firmalife:usable_in_mixing_bowl', 'tfg:semiheavy_ammoniacal_water')
	event.add('firmalife:mixable', 'tfg:semiheavy_ammoniacal_water')
	event.add('firmalife:usable_in_vat', 'tfg:semiheavy_ammoniacal_water')
	event.add('minecraft:water', 'tfg:semiheavy_ammoniacal_water')

	global.BREATHABLE_COMPRESSED_AIRS.forEach(x => {
		event.add('tfg:breathable_compressed_air', x)
	})
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
	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/lush_hollow')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/lush_hollow')
	event.add('minecraft:allows_surface_slime_spawns', 'tfg:nether/lush_hollow')
	event.add('minecraft:spawns_cold_variant_frogs', 'tfg:nether/lush_hollow')
	
	event.add('tfg:nether_biomes', 'tfg:nether/decaying_caverns')
	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/decaying_caverns')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/decaying_caverns')
	event.add('minecraft:allows_surface_slime_spawns', 'tfg:nether/decaying_caverns')
	event.add('minecraft:spawns_warm_variant_frogs', 'tfg:nether/decaying_caverns')
	event.add('minecraft:has_closer_water_fog', 'tfg:nether/decaying_caverns')
	
	event.add('tfg:nether_biomes', 'tfg:nether/basalt_deltas')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/basalt_deltas')
	
	event.add('tfg:nether_biomes', 'tfg:nether/ash_forest')
	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/ash_forest')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/ash_forest')
	
	event.add('tfg:nether_biomes', 'tfg:nether/lava_floes')
	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/lava_floes')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/lava_floes')
	
	event.add('tfg:nether_biomes', 'tfg:nether/webbed_lair')
	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/webbed_lair')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/webbed_lair')
	
	event.add('tfg:nether_biomes', 'tfg:nether/gneiss_caves')
	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/gneiss_caves')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/gneiss_caves')
	
	event.add('tfg:nether_biomes', 'tfg:nether/diorite_caves')
	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/diorite_caves')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/diorite_caves')
	
	event.add('tfg:nether_biomes', 'tfg:nether/gabbro_caves')
	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/gabbro_caves')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/gabbro_caves')
	
	event.add('tfg:nether_biomes', 'tfg:nether/granite_caves')
	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/granite_caves')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/granite_caves')
	
	event.add('tfg:nether_biomes', 'tfg:nether/schist_caves')
	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/schist_caves')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/schist_caves')

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