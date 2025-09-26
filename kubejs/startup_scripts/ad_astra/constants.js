// priority: 0
"use strict";

global.AD_ASTRA_DISABLED_ITEMS = 
[
	// Always disabled

	'ad_astra:nasa_workbench',
	'ad_astra:etrionic_capacitor',
	'ad_astra:etrionic_core',
	'ad_astra:energizer',
	'ad_astra:desh_fluid_pipe',
	'ad_astra:ostrum_fluid_pipe',
	'ad_astra:coal_generator',
	'ad_astra:compressor',
	'ad_astra:etrionic_blast_furnace',
	'ad_astra:fuel_refinery',
	'ad_astra:oxygen_loader',
	'ad_astra:water_pump',
	'ad_astra:cryo_freezer',
	'ad_astra:wrench',
	'ad_astra:cheese_block',
	'ad_astra:engine_frame',
	'ad_astra:fan',
	'ad_astra:steel_tank',
	'ad_astra:desh_tank',
	'ad_astra:ice_shard',
	'ad_astra:oxygen_bucket',
	'ad_astra:hydrogen_bucket',
	'ad_astra:oil_bucket',
	'ad_astra:fuel_bucket',
	'ad_astra:cryo_fuel_bucket',
	'ad_astra:cable_duct',
	'ad_astra:fluid_pipe_duct',
	'ad_astra:iron_plate',
	'ad_astra:iron_rod',
	'ad_astra:steel_ingot',
	'ad_astra:steel_nugget',
	'ad_astra:steel_plate',
	'ad_astra:steel_rod',
	'ad_astra:ti_69',
	'ad_astra:steel_cable',
	'ad_astra:desh_cable',
	'ad_astra:glacian_leaves',
	'ad_astra:raw_ostrum_block',
	'ad_astra:raw_ostrum',

	// Don't tag prefix these, several systems rely on all ore blocks being gregtech's generated ones
	'ad_astra:moon_ice_shard_ore',
	'ad_astra:deepslate_ice_shard_ore',
	'ad_astra:mars_ice_shard_ore',
	'ad_astra:moon_iron_ore',
	'ad_astra:mars_iron_ore',
	'ad_astra:mercury_iron_ore',
	'ad_astra:moon_desh_ore',
	'ad_astra:deepslate_desh_ore',
	'ad_astra:mars_diamond_ore',
	'ad_astra:mars_ostrum_ore',
	'ad_astra:deepslate_ostrum_ore',
	'ad_astra:venus_calorite_ore',
	'ad_astra:deepslate_calorite_ore',
	'ad_astra:venus_coal_ore',
	'ad_astra:venus_gold_ore',
	'ad_astra:venus_diamond_ore',
	'ad_astra:glacio_ice_shard_ore',
	'ad_astra:glacio_coal_ore',
	'ad_astra:glacio_copper_ore',
	'ad_astra:glacio_iron_ore',
	'ad_astra:glacio_lapis_ore',

	// Disabled until IV planets

	'ad_astra:tier_3_rocket',
	'ad_astra:ostrum_engine',
	'ad_astra:ostrum_tank',
	'tfg:rocket_fin_t3',
	'tfg:rocket_cone_t3',
	'tfg:elite_power_thruster',	

	// Disabled until LuV planet
	
	'ad_astra:tier_4_rocket',
	'ad_astra:calorite_engine',
	'ad_astra:calorite_tank',
	'ad_astra:jet_suit_helmet',
	'ad_astra:jet_suit',
	'ad_astra:jet_suit_pants',
	'ad_astra:jet_suit_boots'
];

global.AD_ASTRA_DISABLED_FLUIDS =
[
	'ad_astra:hydrogen',
	'ad_astra:oil',
	'ad_astra:fuel',
	'ad_astra:cryo_fuel',

	'gtceu:molten_desh',
	'gtceu:molten_ostrum',
	'gtceu:molten_calorite'
];

global.BREATHABLE_COMPRESSED_AIRS =
[
	'tfg:compressed_nitrox',
	'tfg:compressed_heliox',
	'tfg:compressed_heliox_3',
	'tfg:compressed_trimix',
	'tfg:compressed_trimix_3'
];

global.AD_ASTRA_WOOD = [
	{name: 'aeronos', logs: '#ad_astra:aeronos_caps', log: 'ad_astra:aeronos_stem', stripped_log: null, lumber: 'tfg:wood/lumber/aeronos', plank: 'ad_astra:aeronos_planks', stair: 'ad_astra:aeronos_stairs', slab: 'ad_astra:aeronos_slab', fence: 'ad_astra:aeronos_fence', fence_gate: 'ad_astra:aeronos_fence_gate', door: 'ad_astra:aeronos_door', trapdoor: 'ad_astra:aeronos_trapdoor', button: null, pressure_plate: null, support: 'tfg:aeronos_support', isHardwood: false},
	{name: 'strophar', logs: '#ad_astra:strophar_caps', log: 'ad_astra:strophar_stem', stripped_log: null, lumber: 'tfg:wood/lumber/strophar', plank: 'ad_astra:strophar_planks', stair: 'ad_astra:strophar_stairs', slab: 'ad_astra:strophar_slab', fence:'ad_astra:strophar_fence', fence_gate: 'ad_astra:strophar_fence_gate', door:'ad_astra:strophar_door', trapdoor: 'ad_astra:strophar_trapdoor', button: null, pressure_plate: null, support: 'tfg:strophar_support', isHardwood: false},
	{name: 'glacian', logs: '#ad_astra:glacian_logs', log: 'ad_astra:glacian_log', stripped_log: 'ad_astra:stripped_glacian_log', lumber: 'tfg:wood/lumber/glacian', plank: 'ad_astra:glacian_planks', stair: 'ad_astra:glacian_stairs', slab: 'ad_astra:glacian_slab', fence: 'ad_astra:glacian_fence', fence_gate: 'ad_astra:glacian_fence_gate', door: 'ad_astra:glacian_door', trapdoor: 'ad_astra:glacian_trapdoor', button: 'ad_astra:glacian_button', pressure_plate: 'ad_astra:glacian_pressure_plate', support: 'tfg:glacian_support', isHardwood: true},
]