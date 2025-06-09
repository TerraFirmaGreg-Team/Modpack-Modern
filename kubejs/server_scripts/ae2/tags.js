// priority: 0

const registerAE2ItemTags = (event) => {
    
    global.AE2_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })

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
		'#create:casing',
		'#dormum_ornamentum:brick_items',
		'#simplylight:any_lamp_on',
		'#simplylight:any_lamp_off',
		'#minecraft:planks',
		'#minecraft:logs',
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
		'create_connected:cherry_window',
		'create_connected:bamboo_window',
		'createdeco:andesite_window',
		'createdeco:copper_window',
		'createdeco:iron_window',
		'createdeco:industrial_iron_window',
		'createdeco:brass_window',
		'createdeco:zinc_window',
		'everycomp:c/domum_ornamentum/cactus_window',
		'everycomp:c/domum_ornamentum/cactus_extra_window',
		
		//create deco
		'createdeco:andesite_sheet_metal',
		'createdeco:brass_sheet_metal',
		'createdeco:iron_sheet_metal',
		'createdeco:copper_sheet_metal',
		'createdeco:industrial_iron_sheet_metal',
		'createdeco:zinc_sheet_metal'
	];
	
	const mc_colors =
	[
	'white',
	'orange',
	'magenta',
	'light_blue',
	'yellow',
	'lime',
	'pink',
	'gray',
	'light_gray',
	'cyan',
	'purple',
	'blue',
	'brown',
	'green',
	'red',
	'black'
	]
	
	const wood_types_tfc = 
	[
	'acacia',
	'ash',
	'aspen',
	'birch',
	'blackwood',
	'chestnut',
	'douglas_fir',
	'hickory',
	'kapok',
	'mangrove',
	'maple',
	'oak',
	'palm',
	'pine',
	'rosewood',
	'sequoia',
	'spruce',
	'sycamore',
	'white_cedar',
	'willow'
	]
	
	const wood_types_afc =
	[
	'baobao',
	'eucalyptus',
	'mahogany',
	'heavea',
	'tualang',
	'teak',
	'cypress',
	'fig',
	'ironwood',
	'ipe'
	]
	
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
	
	const create_rock_types_fm = 
	[
	
	
	
	]
	
	//misc blocks
	facade_materials.forEach(facade_material => {
		event.add('ae2:whitelisted/facades', `${facade_material}`)
	});
	
	//gtceu stonelike stuff
	gtceu_stonelike_fm.forEach(facade_material => {
		if(facade_material != 'marble') 
		{
			event.add('ae2:whitelisted/facades', 'gtceu:' + facade_material + '_cobblestone')
			event.add('ae2:whitelisted/facades', 'gtceu:mossy_' + facade_material + '_cobblestone')
			event.add('ae2:whitelisted/facades', 'gtceu:' + facade_material + '_bricks')
			event.add('ae2:whitelisted/facades', 'gtceu:cracked_' + facade_material + '_bricks')
			event.add('ae2:whitelisted/facades', 'gtceu:mossy_' + facade_material + '_bricks')
		}
		
		event.add('ae2:whitelisted/facades', 'gtceu:polished_' + facade_material)
		event.add('ae2:whitelisted/facades', 'gtceu:chiseled' + facade_material)
		
		event.add('ae2:whitelisted/facades', 'gtceu:small_' + facade_material + '_bricks')
		event.add('ae2:whitelisted/facades', 'gtceu:square_' + facade_material + '_bricks')
		
		event.add('ae2:whitelisted/facades', 'gtceu:' + facade_material + '_tile')
		event.add('ae2:whitelisted/facades', 'gtceu:' + facade_material + '_small_tile')
		event.add('ae2:whitelisted/facades', 'gtceu:' + facade_material + '_windmill_a')
		event.add('ae2:whitelisted/facades', 'gtceu:' + facade_material + '_windmill_b')
	});
	
	//gtceu misc colored blocks
	mc_colors.forEach(facade_material => {
		event.add('ae2:whitelisted/facades', 'gtceu:' + facade_material + '_metal_sheet')
		event.add('ae2:whitelisted/facades', 'gtceu:' + facade_material + '_large_metal_sheet')
		event.add('ae2:whitelisted/facades', 'gtceu:' + facade_material + '_studs')
	});
	
	//rnr shingles
	wood_types_tfc.concat(wood_types_afc).forEach(facade_material => {
		event.add('ae2:whitelisted/facades', 'rnr:wood/shingles/' + facade_material)
	});
	
	//createdeco bricks
	createdeco_bricks_fm.forEach(facade_material => {
		if (facade_material != 'red_bricks') 
		{
			event.add('ae2:whitelisted/facades', 'createdeco:' + facade_material)
		}
		event.add('ae2:whitelisted/facades', 'createdeco:short_' + facade_material)
		event.add('ae2:whitelisted/facades', 'createdeco:long_' + facade_material)
		event.add('ae2:whitelisted/facades', 'createdeco:tiled_' + facade_material)
		event.add('ae2:whitelisted/facades', 'createdeco:corner_' + facade_material)
		event.add('ae2:whitelisted/facades', 'createdeco:cracked_' + facade_material)
		event.add('ae2:whitelisted/facades', 'createdeco:mossy_' + facade_material)
	});
	
	//everycomp windows
	wood_types_tfc.forEach(facade_material => {
		event.add('ae2:whitelisted/facades', 'everycomp:c/tfc/' + facade_material + '_window')
	});
	wood_types_afc.forEach(facade_material => {
		event.add('ae2:whitelisted/facades', 'everycomp:c/afc/' + facade_material + '_window')
	});
}

const registerAE2BlockTags = (event) => {
    
    global.AE2_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}