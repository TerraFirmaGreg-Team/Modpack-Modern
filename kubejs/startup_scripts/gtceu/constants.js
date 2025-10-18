// priority: 0
"use strict";

//#region Disabled Items
/** @global */
global.GTCEU_DISABLED_ITEMS = /** @type {const} */ ([
    // Пыль пшеницы (Wheat Dusts)
    "gtceu:wheat_dust",
    "gtceu:small_wheat_dust",
    "gtceu:tiny_wheat_dust",
    "gtceu:dough",

    // Bronze Machines
    "gtceu:bronze_brick_casing",
    "gtceu:lp_steam_miner",
    "gtceu:lp_steam_extractor",
    "gtceu:lp_steam_macerator",
    "gtceu:lp_steam_compressor",
    "gtceu:lp_steam_forge_hammer",
    "gtceu:lp_steam_furnace",
    "gtceu:lp_steam_alloy_smelter",
    "gtceu:lp_steam_rock_crusher",
    "gtceu:lp_steam_solid_boiler",
    "gtceu:lp_steam_liquid_boiler",
    "gtceu:lp_steam_solar_boiler",
    "gtceu:charcoal_pile_igniter",

    // Примитивная помпа (Primitive Pump)
    "gtceu:infinite_water_cover",
    "gtceu:ender_item_link_cover",
    "gtceu:ender_fluid_link_cover",
    "gtceu:pump_deck",
    "gtceu:pump_hatch",
    "gtceu:primitive_pump",

    // Другое (Other)
    "gtceu:flint_mortar",
    "gtceu:flint_knife",
    "gtceu:firebrick",
    "gtceu:firebricks",
    "gtceu:fireclay_dust",
    "gtceu:small_fireclay_dust",
    "gtceu:tiny_fireclay_dust",
    "gtceu:compressed_fireclay",
    "gtceu:wood_drum",
    "gtceu:primitive_blast_furnace",
    "gtceu:iron_pickaxe",
    "gtceu:iron_pickaxe_head",
    "gtceu:brittle_charcoal",

    "gtceu:wood_screwdriver_tip",
    "gtceu:wood_wrench_tip",
    "gtceu:wood_drill_head",
    "gtceu:wood_chainsaw_head",

    "gtceu:stone_drill_head",
    "gtceu:stone_chainsaw_head",
    "gtceu:stone_buzz_saw_blade",
    "gtceu:stone_wrench_tip",

    "gtceu:netherite_nugget",
    "gtceu:tiny_netherite_dust",
    "gtceu:small_netherite_dust",
    "gtceu:netherite_dust",
    "gtceu:blaze_bucket",
    "gtceu:small_blaze_dust",
    "gtceu:tiny_blaze_dust",

    "gtceu:treated_wood_hanging_sign",
    "gtceu:treated_wood_boat",
    "gtceu:treated_wood_chest_boat",
    "gtceu:treated_wood_sign",

    "gtceu:rubber_sapling",
    "gtceu:rubber_log",
    "gtceu:rubber_leaves",
    "gtceu:rubber_planks",
    "gtceu:stripped_rubber_log",
    "gtceu:rubber_wood",
    "gtceu:stripped_rubber_wood",
    "gtceu:rubber_slab",
    "gtceu:rubber_fence",
    "gtceu:rubber_fence_gate",
    "gtceu:rubber_sign",
    "gtceu:rubber_hanging_sign",
    "gtceu:rubber_pressure_plate",
    "gtceu:rubber_trapdoor",
    "gtceu:rubber_door",
    "gtceu:rubber_stairs",
    "gtceu:rubber_button",
    "gtceu:rubber_boat",
    "gtceu:rubber_chest_boat",

    "gtceu:mv_solar_panel",
    "gtceu:hv_solar_panel",
    "gtceu:ev_solar_panel",
    "gtceu:iv_solar_panel",
    "gtceu:luv_solar_panel",
    "gtceu:zpm_solar_panel",
    "gtceu:uv_solar_panel",

    "gtceu:lv_air_scrubber",
    "gtceu:mv_air_scrubber",
    "gtceu:hv_air_scrubber",
    "gtceu:ev_air_scrubber",

    "gtceu:lv_world_accelerator",
    "gtceu:mv_world_accelerator",
    "gtceu:hv_world_accelerator",
    "gtceu:ev_world_accelerator",
    "gtceu:iv_world_accelerator",
    "gtceu:luv_world_accelerator",
    "gtceu:zpm_world_accelerator",
    "gtceu:uv_world_accelerator",

    "gtceu:compressed_clay",

    "gtceu:stone_rod",

    "gtceu:damascus_steel_nugget",
    "gtceu:damascus_steel_ingot",
    "gtceu:damascus_steel_block",
    "gtceu:damascus_steel_plate",
    "gtceu:double_damascus_steel_plate",
    "gtceu:damascus_steel_gear",
    "gtceu:damascus_steel_buzzsaw_blade",
    "gtceu:damascus_steel_drill_head",
    "gtceu:damascus_steel_chainsaw_head",
    "gtceu:damascus_steel_bolt",
    "gtceu:damascus_steel_screw",
    "gtceu:damascus_steel_rod",
    "gtceu:long_damascus_steel_rod",
    "gtceu:damascus_steel_dust",
    "gtceu:small_damascus_steel_dust",
    "gtceu:tiny_damascus_steel_dust",
    "gtceu:lv_damascus_steel_drill",
    "gtceu:mv_damascus_steel_drill",
    "gtceu:hv_damascus_steel_drill",
    "gtceu:ev_damascus_steel_drill",
    "gtceu:iv_damascus_steel_drill",
    "gtceu:lv_damascus_steel_chainsaw",
    "gtceu:damascus_steel_buzzsaw",
    "gtceu:damascus_steel_bucket",

    //armor
    "gtceu:bronze_helmet",
    "gtceu:bronze_chestplate",
    "gtceu:bronze_leggings",
    "gtceu:bronze_boots",
    "gtceu:steel_helmet",
    "gtceu:steel_chestplate",
    "gtceu:steel_leggings",
    "gtceu:steel_boots",
    "gtceu:titanium_helmet",
    "gtceu:titanium_chestplate",
    "gtceu:titanium_leggings",
    "gtceu:titanium_boots",

    // Huh
    "gtceu:wax_dust",
    "gtceu:small_wax_dust",
    "gtceu:tiny_wax_dust",

    // Sculk
    "gtceu:tiny_echo_shard_dust",
    "gtceu:small_echo_shard_dust",
    "gtceu:echo_shard_dust",
    "gtceu:chipped_echo_shard_gem",
    "gtceu:flawed_echo_shard_gem",
    "gtceu:flawless_echo_shard_gem",
    "gtceu:exquisite_echo_shard_gem",
    "gtceu:echo_shard_plate",
    "gtceu:echo_shard_rod",
    "gtceu:echo_shard_block",
    "gtceu:tiny_sculk_dust",
    "gtceu:small_sculk_dust",
    "gtceu:sculk_dust",

    // Ender eye
    "gtceu:ender_eye_plate",
    "gtceu:ender_eye_block",
    "gtceu:ender_eye_dust",
    "gtceu:small_ender_eye_dust",
    "gtceu:tiny_ender_eye_dust",

    // Marble
    "gtceu:marble",
    "gtceu:marble_cobblestone",
    "gtceu:mossy_marble_cobblestone",
    "gtceu:marble_bricks",
    "gtceu:cracked_marble_bricks",
    "gtceu:mossy_marble_bricks",

    // Machine Bedrock Miner
    "gtceu:mv_bedrock_ore_miner",
    "gtceu:hv_bedrock_ore_miner",
    "gtceu:ev_bedrock_ore_miner",

    // Plutonium ores
    "gtceu:raw_plutonium",
    "gtceu:poor_raw_plutonium",
    "gtceu:rich_raw_plutonium",
    "gtceu:raw_plutonium_block",
    "gtceu:refined_plutonium_ore",
    "gtceu:purified_plutonium_ore",
    "gtceu:crushed_plutonium_ore",
    "gtceu:impure_plutonium_dust",
    "gtceu:pure_plutonium_dust",
    "gtceu:plutonium_surface_rock",

    // (Normal) thorium bits
    "gtceu:thorium_nugget",
    "gtceu:thorium_ingot",
    "gtceu:thorium_block",
    "gtceu:thorium_plate",
    "gtceu:double_thorium_plate",
    "gtceu:thorium_rod"
]);
//#endregion

//#region Hidden Items
/** @global */
global.GTCEU_HIDED_ITEMS = /** @type {const} */ ([
  	"gtceu:lv_damascus_steel_wirecutter",
	  "gtceu:hv_damascus_steel_wirecutter",
	  "gtceu:iv_damascus_steel_wirecutter",
	  "gtceu:damascus_steel_wrench_tip",
	  "gtceu:lv_damascus_steel_wrench",
	  "gtceu:hv_damascus_steel_wrench",
	  "gtceu:iv_damascus_steel_wrench",
	  "gtceu:lv_damascus_steel_screwdriver",

	  "gtceu:sus_record",
]);
//#endregion

//#region Armor
/** @global */
global.GTCEU_ARMORS = /** @type {const} */ ([
    "gtceu:hazmat_chestpiece",
    "gtceu:hazmat_leggings",
    "gtceu:hazmat_boots",
    "gtceu:hazmat_headpiece",
    "gtceu:nanomuscle_chestplate",
    "gtceu:nanomuscle_leggings",
    "gtceu:nanomuscle_boots",
    "gtceu:nanomuscle_helmet",
    "gtceu:advanced_nanomuscle_chestplate",
    "gtceu:quarktech_chestplate",
    "gtceu:quarktech_leggings",
    "gtceu:quarktech_boots",
    "gtceu:quarktech_helmet",
    "gtceu:advanced_quarktech_chestplate",
]);
//#endregion

//#region Extruder Molds
/** @global */
global.TFG_EXTRUDER_MOLDS = /** @type {const} */ ([
    "tfg:mining_hammer_head_extruder_mold",
    "tfg:sword_head_extruder_mold",
    "tfg:pickaxe_head_extruder_mold",
    "tfg:shovel_head_extruder_mold",
    "tfg:axe_head_extruder_mold",
    "tfg:hoe_head_extruder_mold",
    "tfg:scythe_head_extruder_mold",
    "tfg:file_head_extruder_mold",
    "tfg:hammer_head_extruder_mold",
    "tfg:saw_head_extruder_mold",
    "tfg:knife_head_extruder_mold",
    "tfg:butchery_knife_head_extruder_mold",
    "tfg:spade_head_extruder_mold",
    "tfg:propick_head_extruder_mold",
    "tfg:javelin_head_extruder_mold",
    "tfg:chisel_head_extruder_mold",
    "tfg:mace_head_extruder_mold",
    "tfg:mattock_head_extruder_mold",
    "tfg:fish_hook_extruder_mold",
    "tfg:whisk_extruder_mold",
    "tfg:screwdriver_tip_extruder_mold",
    "tfg:wrench_tip_extruder_mold",
    "tfg:wire_cutter_head_extruder_mold",
    "tfg:small_casing_extruder_mold",
    "tfg:shell_casing_extruder_mold",
    "tfg:large_casing_extruder_mold"
]);

global.GTCEU_EXTRUDER_MOLDS = /** @type {const} */ ([
    "gtceu:plate_extruder_mold",
    "gtceu:rod_extruder_mold",
    "gtceu:bolt_extruder_mold",
    "gtceu:ring_extruder_mold",
    "gtceu:cell_extruder_mold",
    "gtceu:ingot_extruder_mold",
    "gtceu:wire_extruder_mold",
    "gtceu:tiny_pipe_extruder_mold",
    "gtceu:small_pipe_extruder_mold",
    "gtceu:normal_pipe_extruder_mold",
    "gtceu:large_pipe_extruder_mold",
    "gtceu:huge_pipe_extruder_mold",
    "gtceu:block_extruder_mold",
    "gtceu:gear_extruder_mold",
    "gtceu:bottle_extruder_mold",
    "gtceu:foil_extruder_mold",
    "gtceu:small_gear_extruder_mold",
    "gtceu:rotor_extruder_mold"
]);
//#endregion

//#region Casting Molds
/** @global */
global.TFG_CASTING_MOLDS = /** @type {const} */ ([
    "tfg:lamp_casting_mold",
    "tfg:trapdoor_casting_mold",
    "tfg:chain_casting_mold",
    "tfg:bell_casting_mold",
]);

global.GTCEU_CASTING_MOLDS = /** @type {const} */ ([
    "gtceu:plate_casting_mold",
    "gtceu:gear_casting_mold",
    "gtceu:bottle_casting_mold",
    "gtceu:ingot_casting_mold",
    "gtceu:ball_casting_mold",
    "gtceu:block_casting_mold",
    "gtceu:nugget_casting_mold",
    "gtceu:cylinder_casting_mold",
    "gtceu:anvil_casting_mold",
    "gtceu:name_casting_mold",
    "gtceu:small_gear_casting_mold",
    "gtceu:rotor_casting_mold",
    "gtceu:pill_casting_mold",
    "gtceu:tiny_pipe_casting_mold",
    "gtceu:small_pipe_casting_mold",
    "gtceu:normal_pipe_casting_mold",
    "gtceu:large_pipe_casting_mold",
    "gtceu:huge_pipe_casting_mold",
]);
//#endregion

//#region Ore Bearing Stone
/** @global */
global.ORE_BEARING_STONES = /** @type {const} */ ([
    "gabbro",
    "shale",
    "claystone",
    "limestone",
    "conglomerate",
    "dolomite",
    "chert",
    "chalk",
    "rhyolite",
    "dacite",
    "quartzite",
    "slate",
    "phyllite",
    "schist",
    "gneiss",
    "marble",
    "basalt",
    "diorite",
    "andesite",
    "granite",

    "deepslate",
    "pyroxenite",
    "dripstone",

    "moon_stone",
    "moon_deepslate",
    "mars_stone",
    "venus_stone",
    "mercury_stone",
    "glacio_stone",
]);
//#endregion

//#region Add Circuits
/** @global */
global.ADD_CIRCUIT = /** @type {const} */ ([
    { recipeId: "gtceu:chemical_reactor/tetrafluoroethylene_from_chloroform", circuitNumber: 1 },
    { recipeId: "gtceu:large_chemical_reactor/tetrafluoroethylene_from_chloroform", circuitNumber: 1 },

    { recipeId: "gtceu:chemical_reactor/hydrofluoric_acid_from_elements", circuitNumber: 2 },
    { recipeId: "gtceu:large_chemical_reactor/hydrofluoric_acid_from_elements", circuitNumber: 2 },

    { recipeId: "gtceu:chemical_reactor/formic_acid", circuitNumber: 1 },
    { recipeId: "gtceu:large_chemical_reactor/formic_acid", circuitNumber: 1 },

    { recipeId: "gtceu:chemical_reactor/sodium_bicarbonate_from_salt", circuitNumber: 2 },
    { recipeId: "gtceu:large_chemical_reactor/sodium_bicarbonate_from_salt", circuitNumber: 2 },
    
    { recipeId: "gtceu:chemical_reactor/acetic_acid_from_methanol", circuitNumber: 1 },
    { recipeId: "gtceu:large_chemical_reactor/acetic_acid_from_methanol", circuitNumber: 1 }
]);
//#endregion

//#region Superconductors
/** @global */
global.GTCEU_SUPERCONDUCTORS = /** @type {const} */ ([
    { name: "manganese_phosphide", materialId: "ManganesePhosphide" },
    { name: "magnesium_diboride", materialId: "MagnesiumDiboride" },
    { name: "mercury_barium_calcium_cuprate", materialId: "MercuryBariumCalciumCuprate" },
    { name: "uranium_triplatinum", materialId: "UraniumTriplatinum" },
    { name: "samarium_iron_arsenic_oxide", materialId: "SamariumIronArsenicOxide" },
    { name: "indium_tin_barium_titanium_cuprate", materialId: "IndiumTinBariumTitaniumCuprate" },
    { name: "uranium_rhodium_dinaquadide", materialId: "UraniumRhodiumDinaquadide" },
    { name: "enriched_naquadah_trinium_europium_duranide", materialId: "EnrichedNaquadahTriniumEuropiumDuranide" },
    { name: "ruthenium_trinium_americium_neutronate", materialId: "RutheniumTriniumAmericiumNeutronate" },
]);
//#endregion
