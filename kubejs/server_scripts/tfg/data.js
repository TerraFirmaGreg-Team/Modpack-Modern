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
	registerTFGEquipmentData(event);
}

//#region Heat Data

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

	event.itemHeat('tfg:food/raw_beer_battered_cheese_curds', 1.0, null, null);
	event.itemHeat('tfg:food/cooked_beer_battered_cheese_curds', 1.0, null, null);
	event.itemHeat('tfg:food/raw_fries', 1.0, null, null);
	event.itemHeat('tfg:food/cooked_fries', 1.0, null, null);
	event.itemHeat('tfg:food/brioche_dough', 1.0, null, null);
	event.itemHeat('tfg:food/brioche_bun', 1.0, null, null);
	event.itemHeat('tfg:food/raw_burger_patty', 1.0, null, null);
	event.itemHeat('tfg:food/cooked_burger_patty', 1.0, null, null);

	event.itemHeat('tfg:unfired_rod_mold', 1.0, null, null);
	event.itemHeat('tfg:unfired_small_gear_mold', 1.0, null, null);
	event.itemHeat('tfg:unfired_nugget_mold', 1.0, null, null);
}

//#endregion
//#region Item Size

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

	event.itemSize("tfg:railgun_ammo_shell", "large", "medium", "railgun_ammo_shell");

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
				"create:cardboard_block"
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
			"expatternprovider:threshold_level_emitter"
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
			"expatternprovider:oversize_interface_part"
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

	
	event.itemSize('#tfc:ore_pieces', 'very_small', 'very_light', 'tfc_ores')

	event.itemSize('#tfc:foods/sealed_preserves', 'tiny', 'medium', 'sealed_preserves')
	event.itemSize('#tfc:foods/preserves', 'tiny', 'medium', 'preserves')

	event.itemSize('#forge:tools/wrenches', 'very_large', 'very_heavy', 'wrenches')
	event.itemSize('#forge:tools/mining_hammers', 'very_large', 'very_heavy', 'mining_hammers')
	event.itemSize('#forge:tools/spades', 'very_large', 'very_heavy', 'spades')

	event.itemSize(
		orArray([
			"tfg:unfired_rod_mold",
			"tfg:unfired_small_gear_mold",
			"tfg:unfired_nugget_mold",
			"tfg:rod_mold",
			"tfg:small_gear_mold",
			"tfg:nugget_mold"
		]),
		"normal",
		"medium",
		"Molds"
	)
}

//#endregion
//#region Support Data

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

//#endregion