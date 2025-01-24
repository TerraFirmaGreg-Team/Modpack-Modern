// priority: 0

const registerAdAstraFluidTags = (event) => 
{
    event.removeAll('ad_astra:fuel')
	event.removeAll('ad_astra:efficient_fuel')
	event.add('ad_astra:tier_1_rocket_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_2_rocket_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_3_rocket_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_4_rocket_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_5_rocket_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:diesel')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:cetane_boosted_diesel')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:gasoline')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:high_octane_gasoline')
}

const registerAdAstraItemTags = (event) => 
{
    
	
}

const registerAdAstraBlockTags = (event) =>
{
	// Moon
    event.add('minecraft:rabbits_spawnable_on', 'ad_astra:moon_stone')
    event.add('minecraft:rabbits_spawnable_on', 'ad_astra:moon_sand')
    event.add('minecraft:rabbits_spawnable_on', 'tfc:sand/black')
    event.add('minecraft:rabbits_spawnable_on', 'tfc:sand/white')
    event.add('minecraft:rabbits_spawnable_on', 'tfc:rock/raw/diorite')
    event.add('minecraft:rabbits_spawnable_on', 'tfc:rock/raw/gabbro')
    event.add('minecraft:rabbits_spawnable_on', 'tfc:rock/raw/basalt')
    event.add('minecraft:rabbits_spawnable_on', 'tfc:rock/gravel/diorite')
    event.add('minecraft:rabbits_spawnable_on', 'tfc:rock/gravel/gabbro')
    event.add('minecraft:rabbits_spawnable_on', 'tfc:rock/gravel/basalt')
	
	event.add('ad_astra:moon_stone_replaceables', 'ad_astra:moon_deepslate')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/basalt')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/basalt')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/gabbro')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/gabbro')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/diorite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/diorite')
	
	event.add('tfc:can_landslide', 'ad_astra:moon_sand')
	event.add('tfc:can_landslide', 'ad_astra:moon_cobblestone')
	event.add('tfc:can_landslide', 'ad_astra:moon_cobblestone_slab')
	event.add('forge:cobblestone', 'ad_astra:moon_cobblestone')
	event.add('tfc:can_start_collapse', 'ad_astra:moon_cobblestone_slab')
	event.add('tfg:rock_slabs', 'ad_astra:moon_cobblestone_slab')
}

const registerAdAstraBiomeTags = (event) => 
{
    event.removeAll('ad_astra:has_structure/oil_well')

	global.MOON_BIOMES.forEach(biome => 
	{
		event.add('tfg:moon_biomes', biome)
	})
}

const registerAdAstraEntityTypeTags = (event) => 
{
    event.add('ad_astra:can_survive_extreme_cold', 'minecraft:rabbit')
	event.add('ad_astra:lives_without_oxygen', 'minecraft:rabbit')
	event.add('tfc:hunted_by_land_predators', 'minecraft:rabbit')
	event.add('tfc:hunts_land_prey', 'ad_astra:star_crawler')
	event.add('tfc:deals_crushing_damage', 'ad_astra:star_crawler')
}

const registerAdAstraPlacedFeatures = (event) => 
{
	global.MOON_VEINS.forEach(vein => {

		event.add('tfg:moon_veins', vein)
		event.add('tfc:in_biome/veins', vein)
	})
}