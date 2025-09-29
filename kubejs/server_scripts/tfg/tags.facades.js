// priority: 0
"use strict";

function registerFacadeWhitelistTags(event) {
    
    const facade_materials = [
		//tags
		'#tfc:rock/bricks',
		'#tfc:rock/smooth',
		'#tfc:rock/gravel',
		'#tfc:rock/cracked_bricks',
		'#tfc:rock/chiseled',
		'#tfc:rock/raw',
		'#tfc:metal_plated_blocks',
		
		'#tfc:colored_raw_alabaster',
		'#tfc:colored_bricks_alabaster',
		'#tfc:colored_polished_alabaster',
		'#tfc:mud_bricks',
		'#forge:sandstone',
		'#forge:storage_blocks',
		'#forge:glass',
		'#minecraft:terracotta',
		'#forge:concretes',
		'#create:casing',
		'#dormum_ornamentum:brick_items',
		'#simplylight:any_lamp_on',
		'#simplylight:any_lamp_off',
		'#minecraft:planks',
		'#minecraft:logs',
		'#forge:cobblestone',
		'#railways:palettes/cycle_groups/base',

		'#tfg:ad_astra_iron_blocks',
		'#tfg:ad_astra_steel_blocks',
		'#tfg:ad_astra_desh_blocks',
		'#tfg:ad_astra_ostrum_blocks',
		'#tfg:ad_astra_calorite_blocks',
		'#tfg:ad_astra_etrium_blocks',
		'#tfg:titanium_concrete',
	    
		//rnr shingles
		'rnr:ceramic_roof',
		'rnr:terracotta_roof',
		
		//tfc blocks
		'tfc:fire_bricks',
		'tfc:aggregate',
		'tfc:alabaster/raw',
		'tfc:alabaster/bricks',
		'tfc:alabaster/polished',
		
		//firmalife blocks
		'firmalife:metal/blocks/stainless_steel',
		'firmalife:metal/blocks/chromium',
		'firmalife:sealed_bricks',
		'firmalife:chiseled_sealed_bricks',
		'firmalife:polished_sealed_bricks',
		
		//gtceu blocks
		'gtceu:coke_oven_bricks',
		'gtceu:firebricks',
		'gtceu:wood_wall',
		'gtceu:tempered_glass',
		'gtceu:laminated_glass',
		'gtceu:plascrete',
		'gtceu:cleanroom_glass',
		
		//gtceu casing
		'gtceu:steam_machine_casing',
		'gtceu:heatproof_machine_casing',
		'gtceu:frostproof_machine_casing',
		'gtceu:solid_machine_casing',
		'gtceu:clean_machine_casing',
		'gtceu:stable_machine_casing',
		'gtceu:robust_machine_casing',
		'gtceu:inert_machine_casing',
		'gtceu:sturdy_machine_casing',
		'gtceu:stainless_evaporation_casing',
		'gtceu:nonconducting_casing',
		'gtceu:vibration_safe_casing',
		'gtceu:watertight_casing',
		'gtceu:secure_maceration_casing',
		'gtceu:high_temperature_smelting_casing',
		'gtceu:laser_safe_engraving_casing',
		'gtceu:large_scale_assembler_casing',
		'gtceu:shock_proof_cutting_casing',
		'gtceu:stress_proof_casing',
		'gtceu:corrosion_proof_casing',
		'gtceu:reaction_safe_mixing_casing',
		'gtceu:assembly_line_casing',
		'gtceu:titanium_turbine_casing',
		'gtceu:stainless_turbine_casing',
		'gtceu:tungstensteel_turbine_casing',
		'gtceu:computer_casing',
		'gtceu:advanced_computer_casing',
		'gtceu:high_power_casing',
		
		//gtceu hazard signs
		'gtceu:acid_hazard_sign_block',
		'gtceu:antimatter_hazard_sign_block',
		'gtceu:bio_hazard_sign_block',
		'gtceu:boss_hazard_sign_block',
		'gtceu:causality_hazard_sign_block',
		'gtceu:explosion_hazard_sign_block',
		'gtceu:fire_hazard_sign_block',
		'gtceu:frost_hazard_sign_block',
		'gtceu:generic_hazard_sign_block',
		'gtceu:gregification_hazard_sign_block',
		'gtceu:high_pressure_hazard_sign_block',
		'gtceu:high_voltage_hazard_sign_block',
		'gtceu:laser_hazard_sign_block',
		'gtceu:magic_hazard_sign_block',
		'gtceu:magnetic_hazard_sign_block',
		'gtceu:mob_infestation_hazard_sign_block',
		'gtceu:mob_spawner_hazard_sign_block',
		'gtceu:noise_hazard_sign_block',
		'gtceu:radioactive_hazard_sign_block',
		'gtceu:spatial_storage_hazard_sign_block',
		'gtceu:turret_hazard_sign_block',
		'gtceu:void_hazard_sign_block',
		'gtceu:yellow_stripes_block_a',
		'gtceu:yellow_stripes_block_b',
		
		//windows
		'create:dark_oak_window',
		'create:mangrove_window',
		'create:ornate_iron_window',
		'create:industrial_iron_window',
		'create:weathered_iron_window',
		'create:cherry_window',
		'create:bamboo_window',
		'createdeco:andesite_window',
		'createdeco:copper_window',
		'createdeco:iron_window',
		'createdeco:industrial_iron_window',
		'createdeco:brass_window',
		'createdeco:zinc_window',
		'everycomp:c/domum_ornamentum/cactus_window',
		'everycomp:c/domum_ornamentum/cactus_extra_window',
		'ae2:quartz_glass',
		
		//create deco
		'createdeco:andesite_sheet_metal',
		'createdeco:brass_sheet_metal',
		'createdeco:iron_sheet_metal',
		'createdeco:copper_sheet_metal',
		'createdeco:industrial_iron_sheet_metal',
		'createdeco:zinc_sheet_metal'
	];
	
	const createdeco_bricks_fm = 
	[
		'pearl_bricks',
		'verdant_bricks',
		'red_bricks',
		'dean_bricks',
		'umber_bricks',
		'dusk_bricks',
		'blue_bricks',
		'scarlet_bricks'
	]
	
	const gtceu_stonelike_fm = 
	[
		'light_concrete', 
		'dark_concrete',
		'red_granite',
		'marble'
	]
	
	const create_copper_fm = 
	[
		'copper',
		'exposed_copper',
		'weathered_copper',
		'oxidized_copper'
	]
	
	const create_rock_types_fm = 
	[
		'granite',
		'diorite',
		'andesite',
		'calcite',
		'dripstone',
		'deepslate',
		'limestone'
		//'ochrum',
		//'scoria',
		//'scorchia',
		//'veridium'
		//'tuff',
		//'asurine',
		//'crimsite',
	]
	
	//misc blocks
	facade_materials.forEach(facade_material => {
		event.add('tfg:whitelisted/facades', `${facade_material}`)
	});
	
	//gtceu stonelike stuff
	gtceu_stonelike_fm.forEach(facade_material => {
		if (facade_material !== 'marble') {
			event.add('tfg:whitelisted/facades', `gtceu:${  facade_material  }_cobblestone`)
			event.add('tfg:whitelisted/facades', `gtceu:mossy_${  facade_material  }_cobblestone`)
			event.add('tfg:whitelisted/facades', `gtceu:${  facade_material  }_bricks`)
			event.add('tfg:whitelisted/facades', `gtceu:cracked_${  facade_material  }_bricks`)
			event.add('tfg:whitelisted/facades', `gtceu:mossy_${  facade_material  }_bricks`)
		}
		
		event.add('tfg:whitelisted/facades', `gtceu:polished_${  facade_material}`)
		event.add('tfg:whitelisted/facades', `gtceu:chiseled${  facade_material}`)
		
		event.add('tfg:whitelisted/facades', `gtceu:small_${  facade_material  }_bricks`)
		event.add('tfg:whitelisted/facades', `gtceu:square_${  facade_material  }_bricks`)
		
		event.add('tfg:whitelisted/facades', `gtceu:${  facade_material  }_tile`)
		event.add('tfg:whitelisted/facades', `gtceu:${  facade_material  }_small_tile`)
		event.add('tfg:whitelisted/facades', `gtceu:${  facade_material  }_windmill_a`)
		event.add('tfg:whitelisted/facades', `gtceu:${  facade_material  }_windmill_b`)
	});
	
	//gtceu misc colored blocks + locometal
	global.MINECRAFT_DYE_NAMES.forEach(facade_material => {
		event.add('tfg:whitelisted/facades', `gtceu:${  facade_material  }_metal_sheet`)
		event.add('tfg:whitelisted/facades', `gtceu:${  facade_material  }_large_metal_sheet`)
		event.add('tfg:whitelisted/facades', `gtceu:${  facade_material  }_studs`)
		event.add('tfg:whitelisted/facades', `#railways:palettes/cycle_groups/${  facade_material  }`)
	});
	
	//create copper
	create_copper_fm.forEach(facade_material => {
		event.add('tfg:whitelisted/facades', `create:${  facade_material  }_shingles`)
		event.add('tfg:whitelisted/facades', `create:${  facade_material  }_tiles`)
	});
	
	//create rocks
	create_rock_types_fm.forEach(facade_material => {
		
		if (facade_material === 'limestone') {
			event.add('tfg:whitelisted/facades', `create:${  facade_material}`)
		}
		
		event.add('tfg:whitelisted/facades', `create:cut_${  facade_material}`)
		event.add('tfg:whitelisted/facades', `create:polished_cut_${  facade_material}`)
		event.add('tfg:whitelisted/facades', `create:cut_${  facade_material  }_bricks`)
		event.add('tfg:whitelisted/facades', `create:small_${  facade_material  }_bricks`)
		event.add('tfg:whitelisted/facades', `create:layered_${  facade_material}`)
		event.add('tfg:whitelisted/facades', `create:${  facade_material  }_pillar`)
	});
	
	//rnr shingles
	global.TFC_WOOD_TYPES.concat(global.AFC_WOOD_TYPES).forEach(facade_material => {
		event.add('tfg:whitelisted/facades', `rnr:wood/shingles/${  facade_material}`)
	});
	
	//createdeco bricks
	createdeco_bricks_fm.forEach(facade_material => {
		if (facade_material !== 'red_bricks') {
			event.add('tfg:whitelisted/facades', `createdeco:${  facade_material}`)
		}
		event.add('tfg:whitelisted/facades', `createdeco:short_${  facade_material}`)
		event.add('tfg:whitelisted/facades', `createdeco:long_${  facade_material}`)
		event.add('tfg:whitelisted/facades', `createdeco:tiled_${  facade_material}`)
		event.add('tfg:whitelisted/facades', `createdeco:corner_${  facade_material}`)
		event.add('tfg:whitelisted/facades', `createdeco:cracked_${  facade_material}`)
		event.add('tfg:whitelisted/facades', `createdeco:mossy_${  facade_material}`)
	});

	//createdeco catwalks
	global.CREATE_DECO_CATWALK_TYPES.forEach(facade_material => {
		event.add('tfg:whitelisted/facades', `createdeco:${  facade_material  }_catwalk`)
	})
	
	//everycomp windows
	global.TFC_WOOD_TYPES.forEach(facade_material => {
		event.add('tfg:whitelisted/facades', `everycomp:c/tfc/${  facade_material  }_window`)
	});
	global.AFC_WOOD_TYPES.forEach(facade_material => {
		event.add('tfg:whitelisted/facades', `everycomp:c/afc/${  facade_material  }_window`)
	});
}
