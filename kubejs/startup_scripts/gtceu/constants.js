// priority: -100
"use strict";

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

	"gtceu:creative_energy",
	"gtceu:creative_computation_provider",
	"gtceu:creative_tank",
	"gtceu:creative_chest",
	"gtceu:creative_data_access_hatch"
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
	"gtceu:advanced_quarktech_chestplate"
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
	"tfg:bell_casting_mold"
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
	"gtceu:huge_pipe_casting_mold"
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
	"tuff",

	"moon_stone",
	"moon_deepslate",
	"mars_stone",
	"venus_stone",
	"mercury_stone",
	"glacio_stone",
	"red_granite",
	"flavolite",
	"sandy_jadestone"
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
	{ recipeId: "gtceu:large_chemical_reactor/acetic_acid_from_methanol", circuitNumber: 1 },

	{ recipeId: "gtceu:chemical_reactor/butyraldehyde", circuitNumber: 5 },
	{ recipeId: "gtceu:large_chemical_reactor/butyraldehyde", circuitNumber: 5 },

	{ recipeId: "gtceu:chemical_reactor/saltpeter", circuitNumber: 2 },
	{ recipeId: "gtceu:large_chemical_reactor/saltpeter", circuitNumber: 2 },

	{ recipeId: "gtceu:chemical_reactor/biphenyl_from_toluene", circuitNumber: 2 },
	{ recipeId: "gtceu:large_chemical_reactor/biphenyl_from_toluene", circuitNumber: 2 },

	{ recipeId: "gtceu:chemical_reactor/polydimethylsiloxane_from_silicon", circuitNumber: 3 },
	{ recipeId: "gtceu:large_chemical_reactor/polydimethylsiloxane_from_silicon", circuitNumber: 3 },

	{ recipeId: "gtceu:mixer/molybdenum_disilicide", circuitNumber: 2 }
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
	{ name: "ruthenium_trinium_americium_neutronate", materialId: "RutheniumTriniumAmericiumNeutronate" }
]);
//#endregion

//#region Concrete Blocks
/**
 * Concrete block groups keyed by type [type, ids].
 *
 * @global
 * @type {Record<string, (string[] & { name: string })>}
 */
global.GTCEU_CONCRETE_BLOCKS = (() => {
	/**
	 * Attach a name to an array of concrete block item IDs.
	 * @param {string} name
	 * @param {string[]} items
	 * @returns {string[] & { name: string }}
	 */
	function group(name, items) {
		items.name = name;
		return items;
	}

	return {
		light_concrete: group('light_concrete', [
			'gtceu:light_concrete',
			'gtceu:light_concrete_cobblestone',
			'gtceu:mossy_light_concrete_cobblestone',
			'gtceu:polished_light_concrete',
			'gtceu:light_concrete_bricks',
			'gtceu:cracked_light_concrete_bricks',
			'gtceu:mossy_light_concrete_bricks',
			'gtceu:chiseled_light_concrete',
			'gtceu:light_concrete_tile',
			'gtceu:light_concrete_small_tile',
			'gtceu:light_concrete_windmill_a',
			'gtceu:light_concrete_windmill_b',
			'gtceu:small_light_concrete_bricks',
			'gtceu:square_light_concrete_bricks'
		]),
		dark_concrete: group('dark_concrete', [
			'gtceu:dark_concrete',
			'gtceu:dark_concrete_cobblestone',
			'gtceu:mossy_dark_concrete_cobblestone',
			'gtceu:polished_dark_concrete',
			'gtceu:dark_concrete_bricks',
			'gtceu:cracked_dark_concrete_bricks',
			'gtceu:mossy_dark_concrete_bricks',
			'gtceu:chiseled_dark_concrete',
			'gtceu:dark_concrete_tile',
			'gtceu:dark_concrete_small_tile',
			'gtceu:dark_concrete_windmill_a',
			'gtceu:dark_concrete_windmill_b',
			'gtceu:small_dark_concrete_bricks',
			'gtceu:square_dark_concrete_bricks'

		]),
		titanium_concrete: group('titanium_concrete', [
			'tfg:titanium_concrete',
			'tfg:polished_titanium_concrete',
			'tfg:titanium_concrete_tile',
			'tfg:titanium_concrete_tile_small',
			'tfg:titanium_concrete_bricks',
			'tfg:titanium_concrete_bricks_small',
			'tfg:titanium_concrete_bricks_square'
		])
	};
})();
//#endregion
