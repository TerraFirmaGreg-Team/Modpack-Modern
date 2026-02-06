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
	registerTFGAquaponicsItems(event);
	
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
	
	// Add item for BTX Fuel
	event.create('tfg:catalyser_pt_re_zsm')
		.texture('tfg:item/btx/catalyser_zsm')

	event.create('tfg:used_catalyser')
		.texture('tfg:item/btx/used_catalyser')

	event.create('tfg:loaded_resin')
		.texture('tfg:item/btx/loaded_resin')

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

	// Thanks gurman
	event.create('tfc_gurman:raw_margarita_pizza').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:margarita_pizza').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:raw_pepperoni_pizza').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:pepperoni_pizza').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:raw_hawaiian_pizza').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:hawaiian_pizza').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:raw_four_cheeses_pizza').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:four_cheeses_pizza').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:raw_four_meats_pizza').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:four_meats_pizza').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:raw_neapolitano_pizza').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:neapolitano_pizza').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:raw_placinda').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:placinda').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:ramen_with_bacon').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:ramen_with_beef').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:ramen_with_camelidae').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:ramen_with_chevon').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:plant_mix').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:adjika').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:adjika_bread').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:porridge').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:porridge_with_honey').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:porridge_with_fruits').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:pasta_with_adjika').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:zama').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:mamaliga').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:ox_curd').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:sheep_curd').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:alpaca_curd').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:ox_brinza_slice').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:sheep_brinza_slice').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:alpaca_brinza_slice').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:ox_brinza_wheel').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:sheep_brinza_wheel').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:alpaca_brinza_wheel').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:fried_rice').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:curry').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:pho').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:hummus').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:greek_salad').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:tzatziki').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:falafel').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:dolma').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:goulash').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:risotto').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:raw_lavash_wrap').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:lavash_wrap').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:raw_pelmeni').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:pelmeni').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:raw_vareniki').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:vareniki').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:raw_oladyi').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:oladyi').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:raw_syrniki').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:syrniki').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:sliced_cabbage').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:sauerkraut').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:raw_khachapuri').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:khachapuri').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:raw_chebureki').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:chebureki').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:dried_mint_leaves').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:dried_chamomile_leaves').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:dried_rosehip_leaves').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:dried_nettle_leaves').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:borscht').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:schi').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:solyanka').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:raw_kiev_cutlets').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:kiev_cutlets').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:okroshka').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:spaghetti_bolognese').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:pasta_carbonara').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:tiramisu').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:raw_croissants').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:croissants').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:ratatouille').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:raw_quiche').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:quiche').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:bouillabaisse').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:raw_crepes').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:crepes').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:raw_bratwurst').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:bratwurst').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:raw_tonkatsu').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:tonkatsu').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:raw_takoyaki').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:takoyaki').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:kimchi').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:raw_bulgogi').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:bulgogi').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:raw_tandoori_chicken').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:tandoori_chicken').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:biryani').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:fresh_onion_soup_bread').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:lent_soup').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:gazpacho').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:kharcho').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:kholodnik').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:shurpa').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:fish_soup_tomato').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:pea_soup').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:minestrone').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:fish_soup').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
	event.create('tfc_gurman:fresh_onion_soup').texture('tfg:item/deprecated').tag('tfc_gourmet:deprecated_foods');
}
