// priority: 0
"use strict";

/** @param {Internal.TFCDataEventJS} event */
function registerTFCDataForTFG(event) {
	registerTFGHeatData(event);
	registerTFGItemSize(event);
	registerTFGSupportData(event);
	registerTFGFoodData(event);
	registerTFGCropRanges(event);
	registerTFGFLPlanters(event);
	registerTFGFauna(event);
}

/** @param {Internal.TFCDataEventJS} event */
function registerTFGHeatData(event) {
	event.itemHeat("tfg:latex_soaked_gloves", 1, null, null);

	global.MINECRAFT_DYE_NAMES.forEach((color) => {
		event.itemHeat(`tfg:decorative_vase/unfired/${color}`, 1, null, null);
	});
	event.itemHeat("tfg:decorative_vase/unfired", 1, null, null);

	event.itemHeat("tfg:sunflower_product", 1, null, null);
	event.itemHeat("tfg:roasted_sunflower_seeds", 1, null, null);
	event.itemHeat("tfc:powder/native_copper", 1, null, null);
	event.itemHeat("tfc:powder/native_silver", 1, null, null);
	event.itemHeat("tfc:powder/native_gold", 1, null, null);
	event.itemHeat("tfc:powder/hematite", 1, null, null);
	event.itemHeat("tfc:powder/cassiterite", 1, null, null);
	event.itemHeat("tfc:powder/bismuthinite", 1, null, null);
	event.itemHeat("tfc:powder/garnierite", 1, null, null);
	event.itemHeat("tfc:powder/malachite", 1, null, null);
	event.itemHeat("tfc:powder/magnetite", 1, null, null);
	event.itemHeat("tfc:powder/limonite", 1, null, null);
	event.itemHeat("tfc:powder/sphalerite", 1, null, null);
	event.itemHeat("tfc:powder/tetrahedrite", 1, null, null);

	event.itemHeat('betterend:cave_pumpkin_pie_raw', 1.0, null, null);
    event.itemHeat('betterend:cave_pumpkin_pie', 1.0, null, null);
}

/** @param {Internal.TFCDataEventJS} event */
function registerTFGItemSize(event) {
	/**
	 * Turns an array of items into an ingredient that is an alternative of items in the array.
	 * @param {Internal.Ingredient_[]} items Items to to take.
	 * @returns {Internal.Ingredient}
	 */
	function orArray(items) {
		// I hate type wrapping
		return /** @type {Internal.Ingredient[]} */ (items).reduce(
			(/** @type {Internal.Ingredient} */ previous, current) => previous.or(current),
			Ingredient.none
		);
	}

	global.MINECRAFT_DYE_NAMES.forEach((color) => {
		event.itemSize(`tfg:decorative_vase/${color}`, "normal", "medium", `decorative_vase/${color}`);
		event.itemSize(`tfg:decorative_vase/unfired/${color}`, "normal", "medium", `decorative_vase/unfired/${color}`);
	});
	event.itemSize("tfg:decorative_vase", "normal", "medium", "decorative_vase");
	event.itemSize("tfg:decorative_vase/unfired", "normal", "medium", "decorative_vase/unfired");

	event.itemSize("tfg:fishing_net/wood", "large", "medium", "wood_fishing_net");
	event.itemSize("tfg:fishing_net/brass", "large", "medium", "brass_fishing_net");
	event.itemSize("tfg:fishing_net/rose_gold", "large", "medium", "rose_gold_fishing_net");
	event.itemSize("tfg:fishing_net/sterling_silver", "large", "medium", "sterling_silver_fishing_net");
	event.itemSize("tfg:fishing_net/invar", "large", "medium", "invar_fishing_net");
	event.itemSize("tfg:fishing_net/cupronickel", "large", "medium", "cupronickel_fishing_net");
	event.itemSize("tfg:fishing_net/tin_alloy", "large", "medium", "tin_alloy_fishing_net");
	event.itemSize("tfg:fishing_net/magnalium", "large", "medium", "magnalium_fishing_net");

	event.itemSize("tfg:trowel", "large", "medium", "trowel");

	event.itemSize("tfg:railgun_ammo_shell", "large", "heavy", "trowel");

	event.itemSize("tfg:harvest_basket", "large", "medium", "harvest_basket");
	event.itemSize("tfg:aluminium_harvest_basket", "large", "medium", "aluminium_harvest_basket");

	event.itemSize("tfg:rapeseed_product", "small", "light", "rapeseed_product");
	event.itemSize("tfg:sunflower_product", "small", "light", "sunflower_product");
	event.itemSize("betterend:amber_root_product", "small", "light", "amber_roots");
	event.itemSize("betterend:blossom_berry_product", "small", "light", "amber_roots");
	event.itemSize("betterend:cave_pumpkin", "small", "light", "amber_roots");
	event.itemSize("betterend:chorus_mushroom_product", "small", "light", "amber_roots");
	event.itemSize("betterend:shadow_berry_product", "small", "light", "amber_roots");

	event.itemSize(Ingredient.of("#minecraft:buttons"), "very_small", "very_light", "buttons");
	event.itemSize(Ingredient.of("#forge:buzz_saw_heads"), "large", "heavy", "buzz_saw_blades");
	event.itemSize(
		Ingredient.of("#minecraft:wool_carpets").or("#domum_ornamentum:floating_carpet"),
		"small",
		"very_light",
		"carpets"
	);
	event.itemSize("create:chain_conveyor", "large", "medium", "chain_conveyor");
	event.itemSize("create:flywheel", "large", "medium", "flywheel");
	event.itemSize("create:large_water_wheel", "very_large", "heavy", "large_water_wheel");
	event.itemSize("create:water_wheel", "large", "medium", "water_wheel");
	event.itemSize(Ingredient.of("#forge:double_plates"), "large", "medium", "double_plates");
	event.itemSize(Ingredient.of("#forge:dense_plates"), "large", "medium", "dense_plates");
	event.itemSize(Ingredient.of("#forge:dusts"), "small", "very_light", "dusts");
	event.itemSize(Ingredient.of("#forge:pure_dusts"), "small", "very_light", "pure_dusts");
	event.itemSize(Ingredient.of("#forge:impure_dusts"), "small", "very_light", "impure_dusts");
	event.itemSize(orArray(global.FRAMED_HALF_BLOCKS), "small", "very_light", "framed_half_blocks");
	event.itemSize(orArray(global.FRAMED_TINY_BLOCKS), "very_small", "very_light", "framed_tiny_blocks");
	event.itemSize(Ingredient.of("#forge:gears"), "large", "heavy", "gears");
	event.itemSize(Ingredient.of("#forge:glass_panes"), "small", "very_light", "glass_panes");
	event.itemSize(Ingredient.of("#greate:crushing_wheels"), "large", "medium", "crushing_wheels");
	event.itemSize(Ingredient.of("#gtceu:molds"), "large", "heavy", "gregtech_molds");
	event.itemSize(Ingredient.of("#forge:hot_ingots"), "large", "medium", "hot_ingots");
	event.itemSize(Ingredient.of("#forge:rods/long"), "large", "medium", "long_rods");
	event.itemSize(Ingredient.of("#tfg:metal_bars"), "small", "very_light", "metal_bars");
	event.itemSize(
		Ingredient.of("#tfc:dry_mud_bricks").or("#tfc:wet_mud_bricks"),
		"very_small",
		"very_light",
		"mud_bricks"
	);
	event.itemSize(Ingredient.of("#forge:rotors"), "normal", "medium", "rotors");
	event.itemSize(Ingredient.of("#forge:small_gears"), "normal", "medium", "small_gears");
	event.itemSize(Ingredient.of("#forge:small_springs"), "small", "very_light", "small_springs");
	event.itemSize(Ingredient.of("#forge:springs"), "large", "medium", "springs");
	event.itemSize(
		Ingredient.of("#forge:storage_blocks").subtract(
			orArray([
				"minecraft:stone",
				"minecraft:bricks",
				"minecraft:quartz_block",
				"minecraft:amethyst_block",
				"minecraft:glass",
				"minecraft:clay",
				"minecraft:ice",
				"minecraft:bone_block",
				"minecraft:obsidian",
				"minecraft:glowstone",
				"ae2:quartz_block",
				"gtceu:red_granite",
				"gtceu:light_concrete",
				"gtceu:dark_concrete",
				"create:cardboard_block",
			])
		),
		"large",
		"medium",
		"storage_blocks"
	);
	event.itemSize(Ingredient.of("#forge:turbine_blades"), "large", "heavy", "turbine_blades");
	event.itemSize("gtceu:turbine_rotor", "very_large", "very_heavy", "turbine_rotors");
	event.itemSize("vintageimprovements:centrifuge", "very_large", "heavy", "vintage_centrifuge");
	event.itemSize("vintageimprovements:helve_hammer", "large", "medium", "vintage_helve_hammer");
	event.itemSize("vintageimprovements:lathe", "normal", "medium", "vintage_lathe");
	event.itemSize(Ingredient.of("#forge:whisks"), "large", "medium", "whisks");

	// Fluid pipes
	event.itemSize(Ingredient.of("#forge:tiny_fluid_pipes"), "tiny", "very_light", "tiny_fluid_pipes");
	event.itemSize(Ingredient.of("#forge:small_fluid_pipes"), "very_small", "very_light", "small_fluid_pipes");
	event.itemSize(Ingredient.of("#forge:large_fluid_pipes"), "normal", "light", "large_fluid_pipes");
	event.itemSize(Ingredient.of("#forge:huge_fluid_pipes"), "normal", "medium", "huge_fluid_pipes");
	event.itemSize(
		Ingredient.of("#forge:quadruple_fluid_pipes").or("#forge:nonuple_fluid_pipes"),
		"normal",
		"medium",
		"multiple_fluid_pipes"
	);

	// Item pipes
	event.itemSize(
		Ingredient.of("#forge:small_item_pipes").or("#forge:small_restrictive_pipes"),
		"very_small",
		"very_light",
		"small_item_pipes"
	);
	event.itemSize(
		Ingredient.of("#forge:large_item_pipes").or("#forge:large_restrictive_pipes"),
		"normal",
		"light",
		"large_item_pipes"
	);
	event.itemSize(
		Ingredient.of("#forge:huge_item_pipes").or("#forge:huge_restrictive_pipes"),
		"normal",
		"medium",
		"huge_item_pipes"
	);

	// Air ducts
	event.itemSize("gtceu:small_duct_pipe", "very_small", "very_light", "small_duct_pipe");
	event.itemSize("gtceu:large_duct_pipe", "normal", "light", "large_duct_pipe");
	event.itemSize("gtceu:huge_duct_pipe", "normal", "medium", "huge_duct_pipe");

	// Nuclear Rod
	event.itemSize(Ingredient.of("#tfg:fission_rods"), "very_large", "heavy");

	// Cables
	event.itemSize(Ingredient.of("#forge:single_cables").or("#forge:single_wires"), "tiny", "very_light", "cables_1x");
	event.itemSize(
		Ingredient.of("#forge:double_cables").or("#forge:double_wires"),
		"very_small",
		"very_light",
		"cables_2x"
	);
	event.itemSize(Ingredient.of("#forge:octal_cables").or("#forge:octal_wires"), "normal", "light", "cables_8x");
	event.itemSize(Ingredient.of("#forge:hex_cables").or("#forge:hex_wires"), "normal", "medium", "cables_16x");
	event.itemSize("computercraft:cable", "tiny", "very_light", "networking_cable");
	event.itemSize("gtceu:normal_optical_pipe", "very_small", "very_light", "optical_fiber_cable");
	event.itemSize(
		Ingredient.of("#ae2:glass_cable").or("#ae2:covered_cable").or("#ae2:smart_cable"),
		"very_small",
		"very_light",
		"me_cables"
	);
	event.itemSize(
		Ingredient.of("#ae2:covered_dense_cable").or("#ae2:smart_dense_cable"),
		"normal",
		"light",
		"me_dense_cables"
	);
	event.itemSize(
		orArray([
			"ae2:quartz_fixture",
			"ae2:light_detector",
			"ae2:wireless_access_point",
			"ae2:quartz_fiber",
			"ae2:toggle_bus",
			"ae2:inverted_toggle_bus",
			"ae2:cable_anchor",
			"ae2:level_emitter",
			"ae2:energy_level_emitter",
			"expatternprovider:threshold_level_emitter",
		]),
		"tiny",
		"very_light",
		"ae2_tiny_parts"
	);
	event.itemSize(
		orArray([
			"ae2:monitor",
			"ae2:semi_dark_monitor",
			"ae2:dark_monitor",
			"ae2:storage_bus",
			"ae2:import_bus",
			"ae2:export_bus",
			"ae2:annihilation_plane",
			"ae2:formation_plane",
			"ae2:pattern_encoding_terminal",
			"ae2:crafting_terminal",
			"ae2:terminal",
			"ae2:storage_monitor",
			"ae2:conversion_monitor",
			"ae2:cable_pattern_provider",
			"ae2:cable_interface",
			"ae2:pattern_access_terminal",
			"ae2:cable_energy_acceptor",
			"ae2:me_p2p_tunnel",
			"ae2:redstone_p2p_tunnel",
			"ae2:item_p2p_tunnel",
			"ae2:fluid_p2p_tunnel",
			"ae2:light_p2p_tunnel",
			"ae2:facade",
			"expatternprovider:ex_interface_part",
			"expatternprovider:ex_export_bus_part",
			"expatternprovider:ex_import_bus_part",
			"expatternprovider:ex_pattern_access_part",
			"expatternprovider:tag_storage_bus",
			"expatternprovider:tag_export_bus",
			"expatternprovider:mod_storage_bus",
			"expatternprovider:mod_export_bus",
			"expatternprovider:active_formation_plane",
			"expatternprovider:precise_export_bus",
			"expatternprovider:precise_storage_bus",
			"expatternprovider:threshold_export_bus",
			"expatternprovider:oversize_interface_part",
		]),
		"very_small",
		"very_light",
		"ae2_small_parts"
	);

	event.itemSize("tfg:lab_equipment", "normal", "medium", "lab_equipment/lab_equipment");
	event.itemSize("tfg:dirty_lab_equipment", "normal", "medium", "lab_equipment/dirty_lab_equipment");
	event.itemSize("gtceu:petri_dish", "tiny", "light", "gtceu/petri_dish");

	// These items don't like to have their size changed for some reason. 
	// This is the only combination that I could get to work. V
	event.itemSize("tfg:beaker", "large", "heavy", "tfg/beaker");
	event.itemSize("tfg:flask", "normal", "medium", "tfg/flask");
	event.itemSize("tfg:vial", "tiny", "light", "tfg/vial");
}

//up, down, horizontal
/** @param {Internal.TFCDataEventJS} event */
function registerTFGSupportData(event) {
	event.support("tfg:light_concrete_support_horizontal", 4, 4, 8, "light_concrete_support");
	event.support("tfg:dark_concrete_support_horizontal", 4, 4, 8, "dark_concrete_support");
	event.support("tfg:reinforced_light_concrete_support_horizontal", 6, 6, 16, "reinforced_light_concrete_support");
	event.support("tfg:reinforced_dark_concrete_support_horizontal", 6, 6, 16, "reinforced_dark_concrete_support");
	event.support("tfg:rebar_support_horizontal", 4, 4, 8, "rebar_support");
	event.support("tfg:steel_support_horizontal", 6, 6, 16, "steel_support");

	const other_stone = ["pyroxenite", "migmatite", "travertine"];
	const stone_types = global.TFC_STONE_TYPES.concat(other_stone);

	stone_types.forEach((stone) => {
		event.support(`tfg:${stone}_support_horizontal`, 2, 2, 4, `${stone}_support`);
	});

	global.AD_ASTRA_WOOD.forEach((wood) => {
		event.support(`tfg:${wood.name}_support_horizontal`, 2, 2, 4, `${wood.name}_support`);
	});
}
/** @param {Internal.TFCDataEventJS} event */
function registerTFGFoodData(event) {
	// meats

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

	// crops

	event.foodItem("tfg:roasted_sunflower_seeds", (food) => {
		food.hunger(4);
		food.decayModifier(0.5);
		food.grain(0.1);
		food.saturation(0.5);
	});

	event.foodItem("tfg:sunflower_product", (food) => {
		food.decayModifier(0.5);
	});

	event.foodItem("betterend:amber_root_product", (food) => {
		food.hunger(4);
		food.decayModifier(1);
		food.saturation(1);
		food.grain(3);
	});

	event.foodItem("betterend:blossom_berry_product", (food) => {
		food.hunger(5);
		food.decayModifier(2);
		food.saturation(1);
		food.water(7.5);
		food.fruit(2.1);
	});

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

	// misc

	event.foodItem("tfg:food/ice_soup", (food) => {
		food.hunger(1);
		food.water(20);
		food.decayModifier(0);
	});

	event.drinkable("tfg:semiheavy_ammoniacal_water", (data) => {
		data.thirst(10);
		data.effect("minecraft:nausea", (effect) => {
			effect.chance(0.5);
			effect.duration(200);
		});
	});
}

/** @param {Internal.TFCDataEventJS} event */
function registerTFGCropRanges(event) {
	// Earth
	event.climateRange((climate) => {
		climate.minHydration(20);
		climate.maxHydration(80);
		climate.minTemperature(5);
		climate.maxTemperature(40);
		climate.hydrationWiggle(7.5);
		climate.temperatureWiggle(5.5);
	}, "tfg:sunflower");

	event.climateRange((climate) => {
		climate.minHydration(10);
		climate.maxHydration(60);
		climate.minTemperature(-5);
		climate.maxTemperature(25);
		climate.hydrationWiggle(7.5);
		climate.temperatureWiggle(1.5);
	}, "tfg:rapeseed");

	event.climateRange((climate) => {
		climate.minHydration(15);
		climate.maxHydration(65);
		climate.minTemperature(-8);
		climate.maxTemperature(25);
		climate.hydrationWiggle(6.5);
		climate.temperatureWiggle(3);
	}, "tfg:flax");

	// Mars
	event.climateRange((climate) => {
		climate.minHydration(0);
		climate.maxHydration(40);
		climate.minTemperature(-150);
		climate.maxTemperature(15);
		climate.hydrationWiggle(7.5);
		climate.temperatureWiggle(5.5);
	}, "betterend:amber_root");

	event.climateRange((climate) => {
		climate.minHydration(70);
		climate.maxHydration(100);
		climate.minTemperature(-80);
		climate.maxTemperature(30);
		climate.hydrationWiggle(7.5);
		climate.temperatureWiggle(5.5);
	}, "betterend:blossom_berry");

	event.climateRange((climate) => {
		climate.minHydration(0);
		climate.maxHydration(40);
		climate.minTemperature(-150);
		climate.maxTemperature(15);
		climate.hydrationWiggle(7.5);
		climate.temperatureWiggle(5.5);
	}, "betterend:bolux_mushroom");

	event.climateRange((climate) => {
		climate.minHydration(0);
		climate.maxHydration(60);
		climate.minTemperature(-100);
		climate.maxTemperature(30);
		climate.hydrationWiggle(7.5);
		climate.temperatureWiggle(5.5);
	}, "betterend:cave_pumpkin_plant");

	event.climateRange((climate) => {
		climate.minHydration(0);
		climate.maxHydration(40);
		climate.minTemperature(-150);
		climate.maxTemperature(15);
		climate.hydrationWiggle(7.5);
		climate.temperatureWiggle(5.5);
	}, "betterend:chorus_mushroom");

	event.climateRange((climate) => {
		climate.minHydration(50);
		climate.maxHydration(100);
		climate.minTemperature(-80);
		climate.maxTemperature(30);
		climate.hydrationWiggle(7.5);
		climate.temperatureWiggle(5.5);
	}, "betterend:shadow_berry");
}

/** @param {Internal.TFCDataEventJS} event */
function registerTFGFLPlanters(event) {
	event.firmalifePlantable(
		"tfg:sunflower_seeds",
		"large",
		0,
		3,
		0.15,
		"tfg:sunflower_seeds",
		"tfg:sunflower_product",
		"nitrogen",
		[
			"tfg:block/crop/sunflower_greenhouse_0",
			"tfg:block/crop/sunflower_greenhouse_1",
			"tfg:block/crop/sunflower_greenhouse_2",
			"tfg:block/crop/sunflower_greenhouse_3",
		],
		null
	);

	event.firmalifePlantable(
		"tfg:rapeseed_seeds",
		"large",
		0,
		3,
		0.15,
		"tfg:rapeseed_seeds",
		"tfg:rapeseed_product",
		"phosphorous",
		[
			"tfg:block/crop/rapeseed_greenhouse_0",
			"tfg:block/crop/rapeseed_greenhouse_1",
			"tfg:block/crop/rapeseed_greenhouse_2",
			"tfg:block/crop/rapeseed_greenhouse_3",
		],
		null
	);

	event.firmalifePlantable(
		"tfg:flax_seeds",
		"large",
		0,
		3,
		0.2,
		"tfg:flax_seeds",
		"tfg:flax_product",
		"nitrogen",
		[
			"tfg:block/crop/flax_age_0",
			"tfg:block/crop/flax_age_1",
			"tfg:block/crop/flax_age_5_top",
			"tfg:block/crop/flax_age_6_top",
		],
		null
	);

	event.firmalifePlantable(
		"betterend:amber_root_seeds",
		"large",
		0,
		3,
		0.15,
		"betterend:amber_root_seeds",
		"betterend:amber_root_product",
		"phosphorous",
		[
			"betterend:block/amber_root_0",
			"betterend:block/amber_root_1",
			"betterend:block/amber_root_2",
			"betterend:block/amber_root_3",
		],
		null
	);

	event.firmalifePlantable(
		"betterend:blossom_berry_seeds",
		"large",
		0,
		3,
		0.15,
		"betterend:blossom_berry_seeds",
		"betterend:blossom_berry_product",
		"potassium",
		[
			"betterend:block/blossom_berry_seed_0",
			"betterend:block/blossom_berry_seed_1",
			"betterend:block/blossom_berry_seed_2",
			"betterend:block/blossom_berry_seed_3",
		],
		null
	);

	event.firmalifePlantable(
		"betterend:bolux_mushroom_seeds",
		"quad",
		1,
		3,
		0.15,
		"betterend:bolux_mushroom_seeds",
		"betterend:bolux_mushroom_product",
		"phosphorous",
		[
			"betterend:block/bolux_mushroom_greenhouse_0",
			"betterend:block/bolux_mushroom_greenhouse_1",
			"betterend:block/bolux_mushroom_greenhouse_2",
			"betterend:block/bolux_mushroom_greenhouse_3",
		],
		null
	);

	event.firmalifePlantable(
		"betterend:chorus_mushroom_seeds",
		"quad",
		1,
		3,
		0.15,
		"betterend:chorus_mushroom_seeds",
		"betterend:chorus_mushroom_product",
		"phosphorous",
		[
			"betterend:block/chorus_mushroom_0",
			"betterend:block/chorus_mushroom_1",
			"betterend:block/chorus_mushroom_2",
			"betterend:block/chorus_mushroom_3",
		],
		null
	);

	event.firmalifePlantable(
		"betterend:cave_pumpkin_plant_seeds",
		"hanging",
		2,
		3,
		0.15,
		"betterend:cave_pumpkin_plant_seeds",
		"betterend:cave_pumpkin",
		"phosphorous",
		[
			"betterend:block/cave_pumpkin_greenhouse_0",
			"betterend:block/cave_pumpkin_greenhouse_1",
			"betterend:block/cave_pumpkin_greenhouse_2",
			"betterend:block/cave_pumpkin_greenhouse_3",
		],
		"betterend:block/cave_pumpkin_top"
	);

	event.firmalifePlantable(
		"betterend:shadow_berry_seeds",
		"quad",
		1,
		3,
		0.15,
		"betterend:shadow_berry_seeds",
		"betterend:shadow_berry_product",
		"potassium",
		[
			"betterend:block/shadow_berry_greenhouse_0",
			"betterend:block/shadow_berry_greenhouse_1",
			"betterend:block/shadow_berry_greenhouse_2",
			"betterend:block/shadow_berry_greenhouse_3",
		],
		null
	);
}


/** @param {Internal.TFCDataEventJS} event */
function registerTFGFauna(event) {

	// -108 is the average at z=-4k to z=-6k, which feels like a big enough band
	event.fauna(
		climate => {
			climate.maxTemp(-108)
			climate.fuzzy(false)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"tfg:glacian_ram")

	event.fauna(
		climate => {
			climate.minTemp(-102)
			climate.maxTemp(-30)
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"tfg:sniffer")

	event.fauna(
		climate => {
			climate.minTemp(-100)
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"tfg:wraptor")

	event.fauna(
		climate => {
			climate.minTemp(-108)
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"species:springling")

	event.fauna(
		climate => {
			climate.minTemp(-109)
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"species:goober")

	event.fauna(
		climate => {
			climate.minTemp(-97)
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"wan_ancient_beasts:walker")

	event.fauna(
		climate => {
			climate.minTemp(-109)
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"wan_ancient_beasts:eater")

	event.fauna(
		climate => {
			climate.minTemp(-100)
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"wan_ancient_beasts:crusher")

	event.fauna(
		climate => {
			climate.minTemp(-105)
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"wan_ancient_beasts:soarer")

	event.fauna(
		climate => {
			climate.minTemp(-106)
			climate.fuzzy(true)
		},
		faunaData => {
			faunaData.solidGround(true)
		},
		"wan_ancient_beasts:glider")
}