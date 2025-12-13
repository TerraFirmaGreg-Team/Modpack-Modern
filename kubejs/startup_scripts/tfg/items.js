// priority: 0
"use strict";

/**
 * 
 * @param {Registry.Item} event 
 */
const registerTFGItems = (event) => {

	registerTFGFoodItems(event)
	registerTFGPrimitiveItems(event);
	registerTFGNuclearItems(event);
	registerTFGWoodItems(event);
	registerTFGAircraftItems(event);
	registerTFGSpaceItems(event);
	registerTFGMarsItems(event);
	registerTFGDimensionMarkerItems(event);
	registerTFGBiotechItems(event);
	registerTFGWeaponItems(event);
	registerTFGRockItems(event);
	
	event.create('tfg:terra_firma_greg')
		.tag('c:hidden_from_recipe_viewers')

	// Electronics
	event.create('tfg:unfinished_electron_tube', 'create:sequenced_assembly')
	event.create('tfg:unfinished_vacuum_tube', 'create:sequenced_assembly')
	event.create('tfg:unfinished_basic_electronic_circuit', 'create:sequenced_assembly')
	event.create('tfg:unfinished_good_electronic_circuit', 'create:sequenced_assembly')
	event.create('tfg:unfinished_inscriber_accumulation_press')
	event.create('tfg:vitrified_pearl')
	event.create('tfg:cryo_fluix_pearl')
	event.create('tfg:uv_led')
	event.create('tfg:smd_uv_led')

	// Molds
	global.TFG_EXTRUDER_MOLDS.forEach(id => event.create(id))
	global.TFG_CASTING_MOLDS.forEach(id => event.create(id))

	// Universal Circuits
    event.create('tfg:ulv_universal_circuit')
    event.create('tfg:lv_universal_circuit')
    event.create('tfg:mv_universal_circuit')
    event.create('tfg:hv_universal_circuit')
    event.create('tfg:ev_universal_circuit')
    event.create('tfg:iv_universal_circuit')
    event.create('tfg:luv_universal_circuit')
    event.create('tfg:zpm_universal_circuit')
    event.create('tfg:uv_universal_circuit')
    event.create('tfg:uhv_universal_circuit')
}
