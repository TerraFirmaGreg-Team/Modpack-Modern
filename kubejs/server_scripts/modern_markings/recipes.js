"use strict";

const registerModernMarkingRecipes = (event) => {
	event.remove({mod: 'ags_modernmarkings'})

	event.shaped('ags_modernmarkings:wall_marking_hazard_diamond', [
		'AB',
		'CD'
	], {
		A: '#forge:dyes/red',
		B: '#forge:dyes/yellow',
		C: '#forge:dyes/blue',
		D: '#forge:dyes/white'
	}).id('tfg:shaped/hazard_diamond')

	const markings = {
		"white": [
			'floor_marking_nostep', 
			'floor_marking_white_arrow',
			'floor_marking_white_lane',
			'floor_marking_white_double_arrow',
			'floor_marking_white_square',
			'floor_marking_white_singleline',
			'floor_marking_white_corner',
			'floor_marking_white_lane_cross',
			'floor_marking_red_hazardline',
			'floor_marking_whiteblack_hazardline',
			'wall_marking_number_0',
			'wall_marking_number_1',
			'wall_marking_number_2',
			'wall_marking_number_3',
			'wall_marking_number_4',
			'wall_marking_number_5',
			'wall_marking_number_6',
			'wall_marking_number_7',
			'wall_marking_number_8',
			'wall_marking_number_9',
			'wall_marking_number_no',
			'wall_marking_number_numero',
			'wall_marking_number_dash',
			'wall_marking_number_comma',
			'wall_marking_number_period',
			'wall_marking_exclamation_mark',
			'wall_marking_question_mark'
		],
		"yellow": [
			'floor_marking_yellow_arrow',
			'floor_marking_yellow_sideline',
			'floor_marking_yellow_square',
			'floor_marking_yellow_stripes',
			'floor_marking_yellow_singleline',
			'floor_marking_yellow_corner',
			'floor_marking_yellow_hazardline',
			'floor_marking_danger_yellow',
			'floor_marking_yellow_lane',
			'floor_marking_yellow_hazardline',
			'wall_marking_symbol_yellow_chemical',
			'wall_marking_symbol_yellow_electric',
			'wall_marking_symbol_yellow_fire',
			'wall_marking_symbol_yellow_fluid',
			'wall_marking_symbol_yellow_frost',
			'wall_marking_symbol_yellow_gears',
			'wall_marking_symbol_yellow_laser',
			'wall_marking_symbol_yellow_magic',
			'wall_marking_symbol_yellow_mob',
			'wall_marking_symbol_yellow_pinch',
			'wall_marking_symbol_yellow_production',
			'wall_marking_symbol_yellow_radiation',
			'wall_marking_symbol_yellow_storage',
			'wall_marking_warning_danger',
			'wall_marking_hazardline_left',
			'wall_marking_hazardline_right'
		],
		"light_gray": [
			'floor_marking_exit',
			'wall_marking_arrowleft',
			'wall_marking_arrowright',
			'wall_marking_exit',
			'wall_marking_symbol_chemical',
			'wall_marking_symbol_electric',
			'wall_marking_symbol_fire',
			'wall_marking_symbol_fluid',
			'wall_marking_symbol_frost',
			'wall_marking_symbol_gears',
			'wall_marking_symbol_laser',
			'wall_marking_symbol_magic',
			'wall_marking_symbol_mob',
			'wall_marking_symbol_pinch',
			'wall_marking_symbol_production',
			'wall_marking_symbol_radiation',
			'wall_marking_symbol_storage',
			'wall_marking_symbol_jeo'
		],
		"red": [
			'floor_marking_redx',
			'floor_marking_noentry',
			'floor_marking_red_singleline',
			'floor_marking_red_corner',
			'floor_marking_danger_red'
		],
		"green": [
			'floor_marking_green_singleline',
			'floor_marking_green_corner'
		], 
		"blue": [
			'floor_marking_blue_singleline',
			'floor_marking_blue_corner'
		],
		"orange": [
			'floor_marking_orange_singleline',
			'floor_marking_orange_corner'
		],
		"black": [
			'floor_marking_black_singleline',
			'floor_marking_black_corner'
		],
		"gray": [
			'wall_marking_voltage_eu',
			'wall_marking_voltage_ev',
			'wall_marking_voltage_fe',
			'wall_marking_voltage_hv',
			'wall_marking_voltage_iv',
			'wall_marking_voltage_luv',
			'wall_marking_voltage_lv',
			'wall_marking_voltage_max',
			'wall_marking_voltage_mv',
			'wall_marking_voltage_pert',
			'wall_marking_voltage_rf',
			'wall_marking_voltage_uev',
			'wall_marking_voltage_uhv',
			'wall_marking_voltage_uiv',
			'wall_marking_voltage_umv',
			'wall_marking_voltage_uv',
			'wall_marking_voltage_uxv',
			'wall_marking_voltage_zpm',
			'wall_marking_voltage_ulv',
			'wall_marking_voltage_steam'
		]
	};

	for (var color in markings) {
		markings[color].forEach(item => {
			console.log(`ags_modernmarkings:${item}: #forge:dyes/${color}`)
			event.stonecutting(`ags_modernmarkings:${item}`, `#forge:dyes/${color}`);
		})
	}
};