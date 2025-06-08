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
		'#minecraft:planks',
		'#minecraft:logs',
		'#tfc:colored_raw_alabaster',
		'#tfc:colored_bricks_alabaster',
		'#tfc:colored_polished_alabaster',
		'#tfc:mud_bricks',
		'#forge:sandstone',
		'#forge:storage_blocks',
		'#forge:glass',
		'#minecraft:terracotta',
		'#create:casing',
		//rnr shingles
		'rnr:ceramic_roof',
		'rnr:terracotta_roof',
		'rnr:wood/shingles/teak',
		'rnr:wood/shingles/cypress',
		'rnr:wood/shingles/fig',
		'rnr:wood/shingles/ironwood',
		'rnr:wood/shingles/ipe',
		'rnr:wood/shingles/chestnut',
		'rnr:wood/shingles/blackwood',
		'rnr:wood/shingles/birch',
		'rnr:wood/shingles/aspen',
		'rnr:wood/shingles/ash',
		'rnr:wood/shingles/acacia',
		'rnr:wood/shingles/douglas_fir',
		'rnr:wood/shingles/hickory',
		'rnr:wood/shingles/kapok',
		'rnr:wood/shingles/mangrove',
		'rnr:wood/shingles/maple',
		'rnr:wood/shingles/oak',
		'rnr:wood/shingles/palm',
		'rnr:wood/shingles/pine',
		'rnr:wood/shingles/rosewood',
		'rnr:wood/shingles/sequoia',
		'rnr:wood/shingles/spruce',
		'rnr:wood/shingles/sycamore',
		'rnr:wood/shingles/white_cedar',
		'rnr:wood/shingles/willow',
		'rnr:wood/shingles/baobab',
		'rnr:wood/shingles/eucalyptus',
		'rnr:wood/shingles/mahogany',
		'rnr:wood/shingles/hevea',
		'rnr:wood/shingles/tualang',
		//tfc blocks
		'tfc:fire_bricks',
		'tfc:aggregate',
		'tfc:alabaster/raw',
		'tfc:alabaster/bricks',
		'tfc:alabaster/polished',
		//gtceu blocks
		'gtceu:coke_oven_bricks',
		'gtceu:firebricks',
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
		'gtceu:square_light_concrete_bricks',
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
		'gtceu:square_dark_concrete_bricks',
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
		'everycomp:c/domum_ornamentum/cactus_extra_window'
	];
	
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

	facade_materials.forEach(facade_material => {
		event.add('ae2:whitelisted/facades', `${facade_material}`)
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