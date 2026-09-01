// priority: 0
"use strict";

const registerMTSItemTags = (event) => {
   
	if (!Item.exists('mts:oamp.camaro_red') || !Item.exists('mts:mtsofficialpack.trafficcone')) return;

    event.add('mts:camaro', ['mts:oamp.camaro_red', 'mts:oamp.camaro_seagreen', 'mts:oamp.camaro_skyblue', 'mts:oamp.camaro_white', 'mts:oamp.camaro_yellow', 'mts:oamp.camaro_black', 'mts:oamp.camaro_blue', 'mts:oamp.camaro_bluestriped', 'mts:oamp.camaro_brown', 'mts:oamp.camaro_extravagant', 'mts:oamp.camaro_gray', 'mts:oamp.camaro_lime', 'mts:oamp.camaro_maroon', 'mts:oamp.camaro_orange']);
	event.add('mts:escargot', ['mts:oamp.escargot_red', 'mts:oamp.escargot_salmon', 'mts:oamp.escargot_seagreen', 'mts:oamp.escargot_skyblue', 'mts:oamp.escargot_white', 'mts:oamp.escargot_yellow', 'mts:oamp.escargot_black', 'mts:oamp.escargot_blue', 'mts:oamp.escargot_brown', 'mts:oamp.escargot_gray', 'mts:oamp.escargot_joepeach', 'mts:oamp.escargot_lightyellow', 'mts:oamp.escargot_maroon', 'mts:oamp.escargot_mint', 'mts:oamp.escargot_pink']);
	event.add('mts:luxorama', ['mts:oamp.luxorama_police', 'mts:oamp.luxorama_purple', 'mts:oamp.luxorama_red', 'mts:oamp.luxorama_royal', 'mts:oamp.luxorama_salmon', 'mts:oamp.luxorama_seagreen', 'mts:oamp.luxorama_white', 'mts:oamp.luxorama_yellow', 'mts:oamp.luxorama_black', 'mts:oamp.luxorama_blue', 'mts:oamp.luxorama_desertglow', 'mts:oamp.luxorama_jadegreen', 'mts:oamp.luxorama_joepeach', 'mts:oamp.luxorama_lightblue', 'mts:oamp.luxorama_maroon', 'mts:oamp.luxorama_mint', 'mts:oamp.luxorama_pink']);
	event.add('mts:stationmerc', ['mts:oamp.stationmerc_black', 'mts:oamp.stationmerc_blue', 'mts:oamp.stationmerc_brown', 'mts:oamp.stationmerc_gray', 'mts:oamp.stationmerc_maroon', 'mts:oamp.stationmerc_red', 'mts:oamp.stationmerc_seagreen', 'mts:oamp.stationmerc_white']);
	event.add('mts:carseats', ['mts:oamp.vintageseat_gray', 'mts:oamp.vintageseat_green', 'mts:oamp.vintageseat_joepeach', 'mts:oamp.vintageseat_light', 'mts:oamp.vintageseat_maroon', 'mts:oamp.vintageseat_purple', 'mts:oamp.vintageseat_red', 'mts:oamp.sportseat_beige', 'mts:oamp.sportseat_blackbrown', 'mts:oamp.sportseat_brown', 'mts:oamp.sportseat_coffee', 'mts:oamp.sportseat_cream', 'mts:oamp.sportseat_gray', 'mts:oamp.sportseat_red', 'mts:oamp.vintageseat_beige', 'mts:oamp.vintageseat_blue', 'mts:oamp.vintageseat_brown']);
	
	event.add('mts:wheels', 'mts:oamp.wheeloffroad_default')
	event.add('mts:engine_big', 'mts:oamp.enginecamarov8')
	event.add('mts:engine_big', 'mts:oamp.engineescargoti6')
}