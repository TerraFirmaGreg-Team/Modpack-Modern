// priority: 0
"use strict";

function registerTFGRepairRecipes(event) {
	const ELECTRIC_TOOLS = ['drill', 'buzzsaw', 'wrench', 'chainsaw', 'wire_cutter', 'screwdriver']
	const MANUAL_TOOLS = ['knife', 'hoe', 'scythe', 'hammer', 'file', 'sword', 'butchery_knife', 'crowbar']
	const ONLY_MANUAL_TOOLS = ['spade', 'pickaxe', 'shovel', 'axe', 'wrench', 'mortar', 'saw', 'screwdriver', 'wire_cutter', 'mining_hammer']
	const ONLY_COLORED_TOOLS = ['buzzsaw']
	const TFC_EQUIPMENT_METAL_GEAR = ['propick', 'chisel', 'mace', 'fishing_rod', 'shears', 'helmet', 'chestplate', 'greaves', 'boots', 'shield', 'horse_armor', 'javelin']
	const SNS_METALS = ['steel', 'black_steel', 'blue_steel', "red_steel"]

	const LEATHER_REPAIR_GEAR = [
		'tfcambiental:leather_apron',
		'minecraft:leather_helmet',
		'minecraft:leather_chestplate',
		'minecraft:leather_leggings',
		'minecraft:leather_boots',
		'minecraft:leather_horse_armor',
		'tfcambiental:insulated_leather_hat',
		'tfcambiental:insulated_leather_tunic',
		'tfcambiental:insulated_leather_pants',
		'tfcambiental:insulated_leather_boots'
	]

	const TFC_TEXTILE_TYPES = ['hat', 'shirt', 'pants', 'boots']
	const TFC_TEXTILE_LEATHER_REPAIR = [
		'caribou',
		'polar_bear',
		'cougar',
		'tiger',
		'panther',
		'sabertooth',
		'black_bear',
		'grizzly_bear',
		'direwolf',
		'lion'
	]

	const SPECIAL_REPAIRS = [
		{ item: "grapplemod:grapplinghook", material: "gtceu:repair_kit_wrought_iron" },

		{ item: "constructionwand:stone_wand", material: "gtceu:repair_kit_copper" },
		{ item: "constructionwand:iron_wand", material: "gtceu:repair_kit_wrought_iron" },
		{ item: "constructionwand:diamond_wand", material: "gtceu:repair_kit_blue_steel" },

		{ item: "tfg:fishing_net/brass", material: "gtceu:brass_bolt" },
		{ item: "tfg:fishing_net/rose_gold", material: "gtceu:rose_gold_bolt" },
		{ item: "tfg:fishing_net/sterling_silver", material: "gtceu:sterling_silver_bolt" },
		{ item: "tfg:fishing_net/invar", material: "gtceu:invar_bolt" },
		{ item: "tfg:fishing_net/tin_alloy", material: "gtceu:tin_alloy_bolt" },
		{ item: "tfg:fishing_net/cupronickel", material: "gtceu:cupronickel_bolt" },
		{ item: "tfg:fishing_net/magnalium", material: "gtceu:magnalium_bolt" },

		{ item: "create:netherite_diving_boots", material: "gtceu:repair_kit_blue_steel" },
		{ item: "create:netherite_diving_helmet", material: "gtceu:repair_kit_blue_steel" },
		{ item: "create:netherite_backtank", material: "gtceu:repair_kit_blue_steel" },
		{ item: "minecraft:netherite_leggings", material: "gtceu:repair_kit_blue_steel" },
		{ item: "minecraft:netherite_boots", material: "gtceu:repair_kit_blue_steel" },

		{ item: "create:copper_diving_boots", material: "gtceu:repair_kit_copper" },
		{ item: "create:copper_diving_helmet", material: "gtceu:repair_kit_copper" },
		{ item: "create:copper_backtank", material: "gtceu:repair_kit_copper" },

		{ item: "ad_astra:space_helmet", material: "tfg:space_suit_fabric" },
		{ item: "ad_astra:space_suit", material: "tfg:space_suit_fabric" },
		{ item: "ad_astra:space_pants", material: "tfg:space_suit_fabric" },
		{ item: "ad_astra:space_boots", material: "tfg:space_suit_fabric" },

		{ item: "ad_astra:netherite_space_helmet", material: "gtceu:repair_kit_tungsten_carbide" },
		{ item: "ad_astra:netherite_space_suit", material: "gtceu:repair_kit_tungsten_carbide" },
		{ item: "ad_astra:netherite_space_pants", material: "gtceu:repair_kit_tungsten_carbide" },
		{ item: "ad_astra:netherite_space_boots", material: "gtceu:repair_kit_tungsten_carbide" },

		{ item: "tfcambiental:wool_hat", material: "tfc:wool_cloth" },
		{ item: "tfcambiental:wool_sweater", material: "tfc:wool_cloth" },
		{ item: "tfcambiental:wool_pants", material: "tfc:wool_cloth" },
		{ item: "tfcambiental:wool_boots", material: "tfc:wool_cloth" },

		{ item: "tfcambiental:silk_cowl", material: "tfc:silk_cloth" },
		{ item: "tfcambiental:silk_shirt", material: "tfc:silk_cloth" },
		{ item: "tfcambiental:silk_pants", material: "tfc:silk_cloth" },
		{ item: "tfcambiental:silk_shoes", material: "tfc:silk_cloth" },

		{ item: "tfcambiental:burlap_cowl", material: "tfc:burlap_cloth" },
		{ item: "tfcambiental:burlap_shirt", material: "tfc:burlap_cloth" },
		{ item: "tfcambiental:burlap_pants", material: "tfc:burlap_cloth" },
		{ item: "tfcambiental:burlap_shoes", material: "tfc:burlap_cloth" },

		{ item: "tfc_textile:crocodile_hat", material: "tfc:burlap_cloth" },
		{ item: "tfc_textile:crocodile_shirt", material: "tfc:burlap_cloth" },
		{ item: "tfc_textile:crocodile_pants", material: "tfc:burlap_cloth" },
		{ item: "tfc_textile:crocodile_boots", material: "tfc:burlap_cloth" },
	]

	repairColoredSteel('gtceu', 'red_steel');
	repairColoredSteel('gtceu', 'blue_steel');

	repairElectricTools('tfg', 'hv', 'boron_carbide');
	repairElectricTools('tfg', 'mv', 'diamond_tipped_mo_50_re');
	repairElectricTools('gtceu', 'iv', 'hsse');
	repairElectricTools('gtceu', 'iv', 'naquadah_alloy');
	repairElectricTools('gtceu', 'iv', 'duranium');
	repairElectricTools('gtceu', 'ev', 'ostrum_iodide');
	repairElectricTools('gtceu', 'ev', 'tungsten_carbide');
	repairElectricTools('gtceu', 'hv', 'ultimet');
	repairElectricTools('gtceu', 'lv', 'blue_steel');
	repairElectricTools('gtceu', 'lv', 'red_steel');
	repairElectricTools('gtceu', 'mv', 'vanadium_steel');

	repairManualTools('tfg', 'boron_carbide');
	repairManualTools('tfg', 'diamond_tipped_mo_50_re');
	repairManualTools('gtceu', 'hsse');
	repairManualTools('gtceu', 'naquadah_alloy');
	repairManualTools('gtceu', 'duranium');
	repairManualTools('gtceu', 'ostrum_iodide');
	repairManualTools('gtceu', 'tungsten_carbide');
	repairManualTools('gtceu', 'ultimet');
	repairManualTools('gtceu', 'blue_steel');
	repairManualTools('gtceu', 'red_steel');
	repairManualTools('gtceu', 'vanadium_steel');
	repairManualTools('gtceu', 'black_bronze');
	repairManualTools('gtceu', 'black_steel');
	repairManualTools('gtceu', 'steel');
	repairManualTools('gtceu', 'wrought_iron');
	repairManualTools('gtceu', 'bronze');
	repairManualTools('gtceu', 'copper');
	repairManualTools('gtceu', 'bismuth_bronze');

	repairOnlyManualTools('gtceu', 'black_bronze');
	repairOnlyManualTools('gtceu', 'black_steel');
	repairOnlyManualTools('gtceu', 'steel');
	repairOnlyManualTools('gtceu', 'wrought_iron');
	repairOnlyManualTools('gtceu', 'bronze');
	repairOnlyManualTools('gtceu', 'copper');
	repairOnlyManualTools('gtceu', 'bismuth_bronze');
	repairOnlyManualTools('gtceu', 'blue_steel');
	repairOnlyManualTools('gtceu', 'red_steel');

	TFC_EQUIPMENT_METAL_GEAR.forEach(gear => {
		global.TFC_EQUIPMENT_METALS.forEach(metal => {
			event.custom({
				type: 'tfg:item_repair',
				pattern: [
					"RH",
				],
				key: {
					R: { item: `gtceu:repair_kit_${metal}` },
					H: { item: `tfc:metal/${gear}/${metal}` },
					// T: { tag: "forge:tools/hammers" }
				},
				repairPercentage: 0.25
			}).id(`tfg:item_repair/${gear}_${metal}`)
		})
	})

	global.TFC_EQUIPMENT_METALS.forEach(metal => {
		event.custom({
			type: 'tfg:item_repair',
			pattern: [
				"RH",
			],
			key: {
				R: { item: `gtceu:repair_kit_${metal}` },
				H: { item: `rnr:metal/mattock/${metal}` },
				// T: { tag: "forge:tools/hammers" }
			},
			repairPercentage: 0.25
		}).id(`tfg:item_repair/${metal}_mattock`)

		event.custom({
			type: 'tfg:item_repair',
			pattern: [
				"RH",
			],
			key: {
				R: { item: `gtceu:repair_kit_${metal}` },
				H: { item: `tfcscraping:metal/scraping_knife/${metal}` },
			},
			repairPercentage: 0.25
		}).id(`tfg:item_repair/${metal}_scraping_knife`)
	})

	// Sacks 'n' Such Repairs
	SNS_METALS.forEach(metal => {
		event.custom({
			type: 'tfg:item_repair',
			pattern: [
				"RH",
			],
			key: {
				R: { item: `gtceu:repair_kit_${metal}` },
				H: { item: `sns:${metal}_toe_hiking_boots` },
				// T: { tag: "forge:tools/hammers" }
			},
			repairPercentage: 0.25
		}).id(`tfg:item_repair/${metal}_hiking_boots`)

		event.custom({
			type: 'tfg:item_repair',
			pattern: [
				"RH",
			],
			key: {
				R: { item: `gtceu:repair_kit_${metal}` },
				H: { item: `sns:metal/horseshoes/${metal}` },
				// T: { tag: "forge:tools/hammers" }
			},
			repairPercentage: 0.25
		}).id(`tfg:item_repair/${metal}_horseshoes`)
	})

	// For Specific Repairs
	SPECIAL_REPAIRS.forEach(repair => {
		event.custom({
			type: 'tfg:item_repair',
			pattern: [
				"RH",
			],
			key: {
				R: { item: `${repair.material}` },
				H: { item: `${repair.item}` },
				// T: { tag: "forge:tools/hammers" }
			},
			repairPercentage: 0.25
		}).id(`tfg:item_repair/${linuxUnfucker(repair.item)}`)
	})

	// Simpler Leather Gear
	LEATHER_REPAIR_GEAR.forEach(gear => {
		event.custom({
			type: 'tfg:item_repair',
			pattern: [
				"RH",
			],
			key: {
				R: { item: `sns:leather_strip` },
				H: { item: `${gear}` },
				// T: { tag: "forge:tools/hammers" }
			},
			repairPercentage: 0.25
		}).id(`tfg:item_repair/${linuxUnfucker(gear)}`)
	})

	// TFC Textile Leather Clothes
	TFC_TEXTILE_LEATHER_REPAIR.forEach(item => {
		TFC_TEXTILE_TYPES.forEach(type => {
			event.custom({
				type: 'tfg:item_repair',
				pattern: [
					"RH",
				],
				key: {
					R: { item: `sns:leather_strip` },
					H: { item: `tfc_textile:${item}_${type}` },
					// T: { tag: "forge:tools/hammers" }
				},
				repairPercentage: 0.25
			}).id(`tfg:item_repair/${item}_${type}`)
		})
	})

	// Tongs
	global.TFC_METALS.forEach(metal => {
		event.custom({
			type: 'tfg:item_repair',
			pattern: [
				"RH",
			],
			key: {
				R: { tag: `forge:rods/${(metal == "cast_iron" ? "iron" : metal)}` },
				H: { item: `tfchotornot:tongs/${metal}` },
				// T: { tag: "forge:tools/hammers" }
			},
			repairPercentage: 0.5
		}).id(`tfg:item_repair/${metal}_tongs`)
	})

	function repairColoredSteel(namespace, material) {
		ONLY_COLORED_TOOLS.forEach(tool => {
			event.custom({
				type: 'tfg:item_repair',
				pattern: [
					"RH",
				],
				key: {
					R: { item: `${namespace}:repair_kit_${material}` },
					H: { item: `${namespace}:${material}_${tool}` },
					// T: { tag: "forge:tools/hammers" }
				},
				repairPercentage: 0.25
			}).id(`tfg:item_repair/${material}_${tool}`)
		})
	}

	function repairElectricTools(namespace, tierMaterial, repairKitMaterial) {
		ELECTRIC_TOOLS.forEach(tool => {
			if (tool === 'buzzsaw' && (repairKitMaterial === 'red_steel' || repairKitMaterial === 'blue_steel'))
				return

			event.custom({
				type: 'tfg:item_repair',
				pattern: [
					"RH",
				],
				key: {
					R: { item: `${namespace}:repair_kit_${repairKitMaterial}` },
					H: { item: `${namespace}:${tierMaterial}_${repairKitMaterial}_${tool}` },
					// T: { tag: "forge:tools/hammers" }
				},
				repairPercentage: 0.25
			}).id(`tfg:item_repair/${tierMaterial}_${repairKitMaterial}_${tool}`)
		})
	}

	function repairManualTools(namespace, material) {
		MANUAL_TOOLS.forEach(tool => {
			event.custom({
				type: 'tfg:item_repair',
				pattern: [
					"RH",
				],
				key: {
					R: { item: `${namespace}:repair_kit_${material}` },
					H: { item: `${namespace}:${material}_${tool}` },
					// T: { tag: "forge:tools/hammers" }
				},
				repairPercentage: 0.25
			}).id(`tfg:item_repair/${material}_${tool}`)
		})
	}

	function repairOnlyManualTools(namespace, material) {
		ONLY_MANUAL_TOOLS.forEach(tool => {
			if (tool === 'mortar' && (material === 'copper' || material === 'red_steel' || material === 'blue_steel'))
				return

			event.custom({
				type: 'tfg:item_repair',
				pattern: [
					"RH",
				],
				key: {
					R: { item: `${namespace}:repair_kit_${material}` },
					H: { item: `${namespace}:${material}_${tool}` },
					// T: { tag: "forge:tools/hammers" }
				},
				repairPercentage: 0.25
			}).id(`tfg:item_repair/${material}_${tool}`)
		})
	}

	// Generate recipe for Repair Kit

	forEachMaterial(material => {
		if (!material.hasProperty(PropertyKey.TOOL))
			return;

		var unfiredKit = ChemicalHelper.get(TFGTagPrefix.unfiredRepairKit, material, 1);
		var firedKit = ChemicalHelper.get(TFGTagPrefix.repairKit, material, 1);

		if (unfiredKit.isEmpty() || firedKit.isEmpty())
			return;

		let materialInput = ChemicalHelper.get(material == GTMaterials.get('tfg:diamond_tipped_mo_50_re')
			? TagPrefix.ingot : TagPrefix.dust, material, 1);

		event.shapeless(unfiredKit.withCount(16), [
			'gtceu:brick_wooden_form',
			'#tfg:stone_dusts',
			'tfc:ceramic/unfired_brick',
			materialInput
		]).id(`tfg:shapeless/unfired_repair_kit_${material.getName()}`)

		event.recipes.gtceu.forming_press(`tfg:unfired_repair_kit_${material.getName()}`)
			.notConsumable('gtceu:ingot_casting_mold')
			.itemInputs(
				'#tfg:stone_dusts',
				['minecraft:clay_ball', 'tfc:ceramic/unfired_brick'],
				materialInput)
			.itemOutputs(unfiredKit.withCount(16))
			.duration(20 * 5)
			.EUt(GTValues.VHA[GTValues.LV])

		event.smelting(firedKit, unfiredKit)
			.id(`tfg:smelting/repair_kit_${material.getName()}`)

		if (material.hasProperty(TFGPropertyKey.TFC_PROPERTY)) {
			event.recipes.tfc.heating(unfiredKit, 1399)
				.resultItem(firedKit)
				.id(`tfg:heating/repair_kit_${material.getName()}`)
		}
	})
}