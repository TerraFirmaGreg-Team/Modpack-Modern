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


	// Temporary
	event.create('gtceu:rose_quartz_dust').texture('tfg:item/deprecated')
	event.create('gtceu:tiny_rose_quartz_dust').texture('tfg:item/deprecated')
	event.create('gtceu:small_rose_quartz_dust').texture('tfg:item/deprecated')
	event.create('gtceu:poor_raw_rose_quartz').texture('tfg:item/deprecated')
	event.create('gtceu:raw_rose_quartz').texture('tfg:item/deprecated')
	event.create('gtceu:rich_raw_rose_quartz').texture('tfg:item/deprecated')
	event.create('gtceu:chipped_rose_quartz_gem').texture('tfg:item/deprecated')
	event.create('gtceu:flawed_rose_quartz_gem').texture('tfg:item/deprecated')
	event.create('gtceu:flawless_rose_quartz_gem').texture('tfg:item/deprecated')
	event.create('gtceu:exquisite_rose_quartz_gem').texture('tfg:item/deprecated')
	event.create('gtceu:pure_rose_quartz_dust').texture('tfg:item/deprecated')
	event.create('gtceu:impure_rose_quartz_dust').texture('tfg:item/deprecated')
	event.create('gtceu:purified_rose_quartz_ore').texture('tfg:item/deprecated')
	event.create('gtceu:crushed_rose_quartz_ore').texture('tfg:item/deprecated')
	event.create('gtceu:refined_rose_quartz_ore').texture('tfg:item/deprecated')
	event.create('gtceu:rose_quartz_lens').texture('tfg:item/deprecated')
	event.create('gtceu:rose_quartz_plate').texture('tfg:item/deprecated')

	// Add item for BTX Fuel

	event.create('tfg:catalyser_pt_re_zsm')
		.translationKey('item.tfg.catalyser_pt_re_zsm')
		.texture('tfg:item/btx/catalyser_zsm')

	event.create('tfg:used_catalyser')
		.translationKey('item.tfg.used_catalyser')
		.texture('tfg:item/btx/used_catalyser')

	event.create('tfg:loaded_resin')
		.translationKey('item.tfg.loaded_resin')
		.texture('tfg:item/btx/loaded_resin')
}
