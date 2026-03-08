"use strict";

const registerTFGItemTags = (event) => {

	registerTFGTrimItemTags(event)
	registerTFGFacadeWhitelistItemTags(event)
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
	registerTFGAquaponicsItemTags(event)
	registerTFGMaterialItemTags(event)
	registerTFGMaterialHiddenPipesTags(event)

	// Disable auto generation for Vintage Recipes

	event.add('tfg:no_vintage_gen', 'tfg:basalt_fiber_plate')
	
	//Circuit Stuff
	event.add('tfg:components/uv_leds', 'tfg:uv_led')
	event.add('tfg:components/uv_leds', 'tfg:smd_uv_led')

	//Bronze Crates & Drums
	event.add('tfg:any_bronze_crate', 'gtceu:bronze_crate')
	event.add('tfg:any_bronze_crate', 'gtceu:black_bronze_crate')
	event.add('tfg:any_bronze_crate', 'gtceu:bismuth_bronze_crate')
	event.add('tfg:any_bronze_drum', 'gtceu:bronze_drum')
	event.add('tfg:any_bronze_drum', 'gtceu:black_bronze_drum')
	event.add('tfg:any_bronze_drum', 'gtceu:bismuth_bronze_drum')

	// Tools
	event.add('tfg:empty_dna_syringes', 'tfg:empty_dna_syringe')
	event.add('tfg:empty_dna_syringes', 'tfg:clean_dna_syringe')

	event.add('tfc:sewing_needles', 'tfg:stainless_steel_needle')

	// Airplane Upgrades
	global.AIRCRAFT_UPGRADES.forEach(value => {
		event.add('immersive_aircraft:upgrades', `tfg:${value}`);
	})

	// Universal Circuits
	global.UNIVERSAL_CIRCUIT_TIERS.forEach(tier => {
		event.add(`gtceu:circuits/${tier}`, `tfg:${tier}_universal_circuit`);
	})

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
    event.add("tfg:bloomery_basic_fuels", "minecraft:coal");
    event.add("tfg:bloomery_basic_fuels", "minecraft:charcoal");
    event.add("tfg:bloomery_basic_fuels", "gtceu:rich_raw_coal");
    event.add("tfg:bloomery_basic_fuels", "gtceu:raw_coal");
    event.add("tfg:bloomery_basic_fuels", "gtceu:poor_raw_coal");
		
	// Holder materials
	event.remove('forge:dusts', 'tfg:nitrocellulose')
	event.remove('forge:dusts/nitrocellulose', 'tfg:nitrocellulose')
	
	event.remove('forge:dusts', 'tfg:cellulose_matrix')
	event.remove('forge:dusts/cellulose_matrix', 'tfg:cellulose_matrix')
	
	event.remove('tfc:pileable_ingots', 'tfg:polycaprolactam_fabric')
	event.remove('forge:ingots', 'tfg:polycaprolactam_fabric')
	event.remove('forge:ingots/tfg_polycaprolactam', 'tfg:polycaprolactam_fabric')
	
	event.remove('forge:nuggets', 'tfg:polycaprolactam_string')	
	event.remove('forge:nuggets/tfg_polycaprolactam', 'tfg:polycaprolactam_string')
	
	// Tags for the precision fabricator renderer
	event.add('tfg:precision_fabricator_dipped_items', 'tfg:silicon_seed_crystal')
	event.add('tfg:precision_fabricator_dipped_items', 'tfg:worked_optical_borosilicate_blank')
	event.add('tfg:precision_fabricator_dipped_items', 'tfg:mo_50_re_ingot')
	event.add('tfg:precision_fabricator_holder_rods', '#forge:rods/amethyst')
	event.add('tfg:precision_fabricator_holder_rods', '#forge:rods/opal')
	event.add('tfg:precision_fabricator_holder_rods', '#forge:rods/diamond')
	event.add('tfg:precision_fabricator_holder_rods', '#forge:rods/sapphire')
	event.add('tfg:precision_fabricator_holder_rods', '#forge:rods/green_sapphire')
	event.add('tfg:precision_fabricator_holder_rods', '#forge:rods/ruby')
	event.add('tfg:precision_fabricator_holder_rods', '#forge:rods/red_garnet')
	event.add('tfg:precision_fabricator_holder_rods', '#forge:rods/yellow_garnet')
	event.add('tfg:precision_fabricator_holder_rods', '#forge:rods/lapis')
	event.add('tfg:precision_fabricator_holder_rods', '#forge:rods/sodalite')
	event.add('tfg:precision_fabricator_holder_rods', '#forge:rods/lazurite')
	event.add('tfg:precision_fabricator_holder_rods', '#forge:rods/blue_topaz')
	event.add('tfg:precision_fabricator_holder_rods', '#forge:rods/topaz')
	event.add('tfg:precision_fabricator_holder_rods', '#forge:rods/emerald')
	event.add('tfg:precision_fabricator_holder_rods', '#forge:rods/olivine')
	
	event.add('tfcambiental:cold_stuff', 'minecraft:packed_ice')
	event.add('tfcambiental:cold_stuff', 'tfc:sea_ice')
	event.add('tfcambiental:cold_stuff', 'tfg:mars_ice')
	event.add('tfcambiental:cold_stuff', 'tfg:dry_ice')
}

//#region Blocks
const registerTFGBlockTags = (event) => {

	registerTFGPrimitiveBlockTags(event)
	registerTFGFoodBlockTags(event)
	registerTFGStoneBlockTags(event)
	registerTFGGeneralWorldgenBlockTags(event)
	registerTFGBeneathBlockTags(event)
	registerTFGMoonBlockTags(event)
	registerTFGMarsBlockTags(event)
	registerTFGVenusBlockTags(event)
	registerTFGAquaponicsBlockTags(event)

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
	event.add('minecraft:ice', 'tfg:mars_ice')
	event.add('minecraft:mineable/pickaxe', 'tfg:dry_ice')
}
//#endregion

//#region Fluids
const registerTFGFluidTags = (event) => {

	registerTFGAquaponicsFluidTags(event)
	registerTFGPrimitiveFluidTags(event)

	event.add('tfg:clean_water', 'minecraft:water')
	event.add('tfg:clean_water', 'tfc:river_water')
	event.add('tfg:clean_water', 'tfc:spring_water')

	event.add('tfg:water_boiler', 'minecraft:water')

	event.add('tfc:any_water', 'tfg:semiheavy_ammoniacal_water')
	event.add('tfc:hydrating', 'tfg:semiheavy_ammoniacal_water')
	event.add('tfc:drinkables', 'tfg:semiheavy_ammoniacal_water')
	event.add('tfc:any_drinkables', 'tfg:semiheavy_ammoniacal_water')
	event.add('tfc:ingredients', 'tfg:semiheavy_ammoniacal_water')
	event.add('minecraft:water', 'tfg:semiheavy_ammoniacal_water')
	
	event.add('tfc:any_water', 'tfg:semiheavy_water')
	event.add('tfc:hydrating', 'tfg:semiheavy_water')
	event.add('tfc:drinkables', 'tfg:semiheavy_water')
	event.add('tfc:any_drinkables', 'tfg:semiheavy_water')
	event.add('tfc:ingredients', 'tfg:semiheavy_water')
	event.add('minecraft:water', 'tfg:semiheavy_water')

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

	event.add('tfc:drinkables', 'gtceu:ethanol')
	event.add('tfc:any_drinkables', 'gtceu:ethanol')
	event.add('tfc:drinkables', 'gtceu:methanol')
	event.add('tfc:any_drinkables', 'gtceu:methanol')
	event.add('tfc:drinkables', 'gtceu:concrete')
	event.add('tfc:any_drinkables', 'gtceu:concrete')
	event.add('tfc:drinkables', 'rnr:concrete')
	event.add('tfc:any_drinkables', 'gtceu:concrete')
	
	event.add('tfc:drinkables', 'gtceu:ice')
	event.add('tfc:any_drinkables', 'gtceu:ice')

	event.add('tfg:oils', 'gtceu:oil')
	event.add('tfg:oils', 'gtceu:oil_light')
	event.add('tfg:oils', 'gtceu:oil_medium')
	event.add('tfg:oils', 'gtceu:oil_heavy')

	global.BREATHABLE_COMPRESSED_AIRS.forEach(x => {
		event.add('tfg:breathable_compressed_air', x)
	})
	
	// Platline tags
	event.add('tfg:sulfuric_metal_solution', 'gtceu:sulfuric_copper_solution')
	event.add('tfg:sulfuric_metal_solution', 'gtceu:sulfuric_nickel_solution')

	// GT fluid input recipe modification bug workaround
	// GT adds these tags by itself already but not in time for our recipe modification to apply properly.
	event.add('forge:polyethylene',      'gtceu:polyethylene')
	event.add('forge:sodium_persulfate', 'gtceu:sodium_persulfate')
	event.add('forge:iron_iii_chloride', 'gtceu:iron_iii_chloride')
	event.add('forge:tin',               'gtceu:tin')
	event.add('forge:soldering_alloy',   'gtceu:soldering_alloy')
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

	event.add('tfg:ignores_gravity', 'firmalife:bee')
	event.add('ad_astra:can_survive_in_space', 'railways:conductor')
	event.add('ad_astra:can_survive_in_space', 'endermanoverhaul:pet_enderman')
	event.add('ad_astra:can_survive_in_space', 'endermanoverhaul:axolotl_pet_enderman')
	event.add('ad_astra:can_survive_in_space', 'endermanoverhaul:hammerhead_pet_enderman')

}