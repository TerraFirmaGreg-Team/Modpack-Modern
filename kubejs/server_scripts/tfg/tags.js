"use strict";

const registerTFGItemTags = (event) => {

	registerTFGTrimItemTags(event)
	registerTFGFacadeWhitelistItemTags(event)
	registerBlockInteractionItemTags(event)
	registerTFGStoneItemTags(event)
	registerTFGFoodItemTags(event);
	registerTFGMedicineItemTags(event);
	registerTFGPrimitiveItemTags(event)
	registerTFGEquipmentItemTags(event);
	registerTFGRailgunItemTags(event)
	registerTFGRocketItemTags(event)
	registerTFGGeneralWorldgenItemTags(event);
	registerTFGBeneathItemTags(event)
	registerTFGMoonItemTags(event)
	registerTFGMarsItemTags(event)
	registerTFGVenusItemTags(event)

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

	//Bronze Crates & Drums
	event.add('tfg:any_bronze_crate', 'gtceu:bronze_crate')
	event.add('tfg:any_bronze_crate', 'gtceu:black_bronze_crate')
	event.add('tfg:any_bronze_crate', 'gtceu:bismuth_bronze_crate')
	event.add('tfg:any_bronze_drum', 'gtceu:bronze_drum')
	event.add('tfg:any_bronze_drum', 'gtceu:black_bronze_drum')
	event.add('tfg:any_bronze_drum', 'gtceu:bismuth_bronze_drum')

	//#region Tools
	event.add('tfg:empty_dna_syringes', 'tfg:empty_dna_syringe')
	event.add('tfg:empty_dna_syringes', 'tfg:clean_dna_syringe')

	event.add('tfc:sewing_needles', 'tfg:stainless_steel_needle')
	//#endregion

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
	
	// Steam Bloomery
    event.add("tfg:steam_bloomery_basic_fuels", "minecraft:coal");
    event.add("tfg:steam_bloomery_basic_fuels", "minecraft:charcoal");
    event.add("tfg:steam_bloomery_basic_fuels", "gtceu:rich_raw_coal");
    event.add("tfg:steam_bloomery_basic_fuels", "gtceu:raw_coal");
    event.add("tfg:steam_bloomery_basic_fuels", "gtceu:poor_raw_coal");
    event.add("tfg:steam_bloomery_basic_fuels", "gtceu:coal_dust");
    event.add("tfg:steam_bloomery_basic_fuels", "gtceu:charcoal_dust");
		
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
	//#endregion
}

//#region Blocks
const registerTFGBlockTags = (event) => {

	registerTFGPrimitiveBlockTags(event)
	registerTFGFoodBlockTags(event)
	registerTFGGeneralWorldgenBlockTags(event)
	registerTFGBeneathBlockTags(event)
	registerTFGMoonBlockTags(event)
	registerTFGMarsBlockTags(event)
	registerTFGVenusBlockTags(event)

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
	event.add('forge:mineable/wrench', 'tfg:machine_casing_power_casing')

	event.add('minecraft:mineable/pickaxe', 'tfg:mars_ice')
	event.add('minecraft:mineable/pickaxe', 'tfg:dry_ice')
	event.add('tfcambiental:cold_stuff', 'tfg:mars_ice')
	event.add('tfcambiental:cold_stuff', 'tfg:dry_ice')
	event.add('minecraft:ice', 'tfg:mars_ice')
	event.add('minecraft:ice', 'tfg:dry_ice')
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
	registerTFGOverworldBiomeTags(event)
	registerTFGBeneathBiomeTags(event)
	registerTFGMoonBiomeTags(event)
	registerTFGMarsBiomeTags(event)
	registerTFGVenusBiomeTags(event)
}

function registerTFGConfiguredFeatures(event) {
	registerTFGForestConfiguredFeatures(event)
}

const registerTFGPlacedFeatures = (event) => {
	registerTFGOreVeinFeatures(event);

	registerTFGOverworldPlacedFeatures(event);
	registerTFGBeneathPlacedFeatures(event);
	registerTFGMoonPlacedFeatures(event);
	registerTFGMarsPlacedFeatures(event);
	registerTFGVenusPlacedFeatures(event);
	registerTFGEuropaPlacedFeatures(event);
}

const registerTFGEntityTypeTags = (event) => {

	registerTFGMoonEntityTypeTags(event)
	registerTFGMarsEntityTypeTags(event)
	registerTFGVenusEntityTypeTags(event)
	registerTFGEuropaEntityTypeTags(event)

	event.add('ad_astra:can_survive_in_space', 'railways:conductor')
	event.add('ad_astra:can_survive_in_space', 'endermanoverhaul:pet_enderman')
	event.add('ad_astra:can_survive_in_space', 'endermanoverhaul:axolotl_pet_enderman')
	event.add('ad_astra:can_survive_in_space', 'endermanoverhaul:hammerhead_pet_enderman')
}