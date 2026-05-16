// priority: -100
"use strict";

global.AD_ASTRA_DISABLED_ITEMS = 
[
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
	'ad_astra:calorite_tank'
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
	{
		name: 'aeronos',
		logs: '#ad_astra:aeronos_caps', log: 'ad_astra:aeronos_stem', stripped_log: null,
		log_wood: null, stripped_wood: null,
		lumber: 'tfg:wood/lumber/aeronos', plank: 'ad_astra:aeronos_planks',
		stair: 'ad_astra:aeronos_stairs', slab: 'ad_astra:aeronos_slab',
		fence: 'ad_astra:aeronos_fence', fence_gate: 'ad_astra:aeronos_fence_gate',
		door: 'ad_astra:aeronos_door', trapdoor: 'ad_astra:aeronos_trapdoor',
		button: null, pressure_plate: null,
		support: 'tfg:aeronos_support',
		isHardwood: false
	},
	{
		name: 'strophar',
		logs: '#ad_astra:strophar_caps', log: 'ad_astra:strophar_stem', stripped_log: null,
		log_wood: null, stripped_wood: null,
		lumber: 'tfg:wood/lumber/strophar', plank: 'ad_astra:strophar_planks',
		stair: 'ad_astra:strophar_stairs', slab: 'ad_astra:strophar_slab',
		fence:'ad_astra:strophar_fence', fence_gate: 'ad_astra:strophar_fence_gate',
		door:'ad_astra:strophar_door', trapdoor: 'ad_astra:strophar_trapdoor',
		button: null, pressure_plate: null,
		support: 'tfg:strophar_support',
		isHardwood: false
	},
	{
		name: 'glacian',
		logs: '#ad_astra:glacian_logs', log: 'ad_astra:glacian_log', stripped_log: 'ad_astra:stripped_glacian_log',
		log_wood: 'tfg:glacian_wood', stripped_wood: 'tfg:glacian_wood_stripped',
		lumber: 'tfg:wood/lumber/glacian', plank: 'ad_astra:glacian_planks',
		stair: 'ad_astra:glacian_stairs', slab: 'ad_astra:glacian_slab',
		fence: 'ad_astra:glacian_fence', fence_gate: 'ad_astra:glacian_fence_gate',
		door: 'ad_astra:glacian_door', trapdoor: 'ad_astra:glacian_trapdoor',
		button: 'ad_astra:glacian_button', pressure_plate: 'ad_astra:glacian_pressure_plate',
		support: 'tfg:glacian_support',
		isHardwood: true
	}
]