"use strict";

const registerModernMarkingsItemTags = (event) => {

	global.MODERN_MARKINGS_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	});

	const floor_markings = [
		'ags_modernmarkings:floor_marking_nostep', 
		'ags_modernmarkings:floor_marking_white_arrow', 
		'ags_modernmarkings:floor_marking_white_lane', 
		'ags_modernmarkings:floor_marking_white_double_arrow', 
		'ags_modernmarkings:floor_marking_white_square', 
		'ags_modernmarkings:floor_marking_yellow_arrow', 
		'ags_modernmarkings:floor_marking_yellow_sideline', 
		'ags_modernmarkings:floor_marking_yellow_square', 
		'ags_modernmarkings:floor_marking_yellow_stripes', 
		'ags_modernmarkings:floor_marking_redx', 
		'ags_modernmarkings:floor_marking_noentry', 
		'ags_modernmarkings:floor_marking_black_singleline', 
		'ags_modernmarkings:floor_marking_white_singleline', 
		'ags_modernmarkings:floor_marking_red_singleline', 
		'ags_modernmarkings:floor_marking_yellow_singleline', 
		'ags_modernmarkings:floor_marking_green_singleline', 
		'ags_modernmarkings:floor_marking_blue_singleline', 
		'ags_modernmarkings:floor_marking_orange_singleline', 
		'ags_modernmarkings:floor_marking_yellow_hazardline', 
		'ags_modernmarkings:floor_marking_red_hazardline', 
		'ags_modernmarkings:floor_marking_whiteblack_hazardline', 
		'ags_modernmarkings:floor_marking_danger_yellow', 
		'ags_modernmarkings:floor_marking_danger_red', 
		'ags_modernmarkings:floor_marking_exit', 
		'ags_modernmarkings:floor_marking_white_lane_cross', 
		'ags_modernmarkings:floor_marking_yellow_lane', 
		'ags_modernmarkings:floor_marking_black_corner', 
		'ags_modernmarkings:floor_marking_blue_corner', 
		'ags_modernmarkings:floor_marking_green_corner', 
		'ags_modernmarkings:floor_marking_orange_corner', 
		'ags_modernmarkings:floor_marking_white_corner', 
		'ags_modernmarkings:floor_marking_yellow_corner', 
		'ags_modernmarkings:floor_marking_red_corner'
	];

	const wall_markings = [
		'ags_modernmarkings:wall_marking_number_0', 
		'ags_modernmarkings:wall_marking_number_1', 
		'ags_modernmarkings:wall_marking_number_2',
		'ags_modernmarkings:wall_marking_number_3', 
		'ags_modernmarkings:wall_marking_number_4', 
		'ags_modernmarkings:wall_marking_number_5', 
		'ags_modernmarkings:wall_marking_number_6', 
		'ags_modernmarkings:wall_marking_number_7', 
		'ags_modernmarkings:wall_marking_number_8', 
		'ags_modernmarkings:wall_marking_number_9', 
		'ags_modernmarkings:wall_marking_number_no', 
		'ags_modernmarkings:wall_marking_number_numero', 
		'ags_modernmarkings:wall_marking_number_dash', 
		'ags_modernmarkings:wall_marking_number_comma', 
		'ags_modernmarkings:wall_marking_number_period', 
		'ags_modernmarkings:wall_marking_exclamation_mark', 
		'ags_modernmarkings:wall_marking_question_mark', 
		'ags_modernmarkings:wall_marking_hazard_diamond', 
		'ags_modernmarkings:wall_marking_arrowleft', 
		'ags_modernmarkings:wall_marking_arrowright', 
		'ags_modernmarkings:wall_marking_exit', 
		'ags_modernmarkings:wall_marking_hazardline_left', 
		'ags_modernmarkings:wall_marking_hazardline_right', 
		'ags_modernmarkings:wall_marking_symbol_chemical', 
		'ags_modernmarkings:wall_marking_symbol_electric', 
		'ags_modernmarkings:wall_marking_symbol_fire', 
		'ags_modernmarkings:wall_marking_symbol_fluid', 
		'ags_modernmarkings:wall_marking_symbol_frost', 
		'ags_modernmarkings:wall_marking_symbol_gears', 
		'ags_modernmarkings:wall_marking_symbol_laser', 
		'ags_modernmarkings:wall_marking_symbol_magic', 
		'ags_modernmarkings:wall_marking_symbol_mob', 
		'ags_modernmarkings:wall_marking_symbol_pinch', 
		'ags_modernmarkings:wall_marking_symbol_production', 
		'ags_modernmarkings:wall_marking_symbol_radiation', 
		'ags_modernmarkings:wall_marking_symbol_storage', 
		'ags_modernmarkings:wall_marking_symbol_yellow_chemical', 
		'ags_modernmarkings:wall_marking_symbol_yellow_electric', 
		'ags_modernmarkings:wall_marking_symbol_yellow_fire', 
		'ags_modernmarkings:wall_marking_symbol_yellow_fluid', 
		'ags_modernmarkings:wall_marking_symbol_yellow_frost', 
		'ags_modernmarkings:wall_marking_symbol_yellow_gears', 
		'ags_modernmarkings:wall_marking_symbol_yellow_laser', 
		'ags_modernmarkings:wall_marking_symbol_yellow_magic', 
		'ags_modernmarkings:wall_marking_symbol_yellow_mob', 
		'ags_modernmarkings:wall_marking_symbol_yellow_pinch', 
		'ags_modernmarkings:wall_marking_symbol_yellow_production', 
		'ags_modernmarkings:wall_marking_symbol_yellow_radiation', 
		'ags_modernmarkings:wall_marking_symbol_yellow_storage', 
		'ags_modernmarkings:wall_marking_symbol_jeo', 
		'ags_modernmarkings:wall_marking_warning_danger', 
		'ags_modernmarkings:wall_marking_voltage_eu', 
		'ags_modernmarkings:wall_marking_voltage_ev', 
		'ags_modernmarkings:wall_marking_voltage_fe', 
		'ags_modernmarkings:wall_marking_voltage_hv', 
		'ags_modernmarkings:wall_marking_voltage_iv', 
		'ags_modernmarkings:wall_marking_voltage_luv', 
		'ags_modernmarkings:wall_marking_voltage_lv', 
		'ags_modernmarkings:wall_marking_voltage_max', 
		'ags_modernmarkings:wall_marking_voltage_mv', 
		'ags_modernmarkings:wall_marking_voltage_pert', 
		'ags_modernmarkings:wall_marking_voltage_rf', 
		'ags_modernmarkings:wall_marking_voltage_uev', 
		'ags_modernmarkings:wall_marking_voltage_uhv', 
		'ags_modernmarkings:wall_marking_voltage_uiv', 
		'ags_modernmarkings:wall_marking_voltage_umv', 
		'ags_modernmarkings:wall_marking_voltage_uv', 
		'ags_modernmarkings:wall_marking_voltage_uxv', 
		'ags_modernmarkings:wall_marking_voltage_zpm', 
		'ags_modernmarkings:wall_marking_voltage_ulv', 
		'ags_modernmarkings:wall_marking_voltage_steam'
	];

	floor_markings.forEach(marking => {
		event.add('ags_modernmarkings:floor_markings', marking)
	})

	wall_markings.forEach(marking => {
		event.add('ags_modernmarkings:wall_markings', marking)
	})

	event.add('ags_modernmarkings:markings', '#ags_modernmarkings:floor_markings')
	event.add('ags_modernmarkings:markings', '#ags_modernmarkings:wall_markings')
};