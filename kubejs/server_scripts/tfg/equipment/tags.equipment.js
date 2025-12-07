"use strict";

function registerTFGEquipmentItemTags(event) {
	
	event.add('minecraft:trimmable_armor', 'create:copper_diving_helmet')
	event.add('minecraft:trimmable_armor', 'create:copper_diving_boots')
	event.add('minecraft:trimmable_armor', 'create:netherite_diving_helmet')
	event.add('minecraft:trimmable_armor', 'create:netherite_diving_boots')
    event.add('minecraft:trimmable_armor', 'tfcambiental:wool_hat')
    event.add('minecraft:trimmable_armor', 'tfcambiental:wool_sweater')
    event.add('minecraft:trimmable_armor', 'tfcambiental:wool_pants')
    event.add('minecraft:trimmable_armor', 'tfcambiental:wool_boots')
    event.add('minecraft:trimmable_armor', 'tfcambiental:silk_cowl')
    event.add('minecraft:trimmable_armor', 'tfcambiental:silk_shirt')
    event.add('minecraft:trimmable_armor', 'tfcambiental:silk_pants')
    event.add('minecraft:trimmable_armor', 'tfcambiental:silk_shoes')
    event.add('minecraft:trimmable_armor', 'tfcambiental:burlap_cowl')
    event.add('minecraft:trimmable_armor', 'tfcambiental:burlap_shirt')
    event.add('minecraft:trimmable_armor', 'tfcambiental:burlap_pants')
    event.add('minecraft:trimmable_armor', 'tfcambiental:burlap_shoes')
    event.add('minecraft:trimmable_armor', 'tfcambiental:insulated_leather_hat')
    event.add('minecraft:trimmable_armor', 'tfcambiental:insulated_leather_tunic')
    event.add('minecraft:trimmable_armor', 'tfcambiental:insulated_leather_pants')
    event.add('minecraft:trimmable_armor', 'tfcambiental:insulated_leather_boots')
    event.add('minecraft:trimmable_armor', '#firmalife:beekeeper_armor')	

    global.GTCEU_ARMORS.forEach((item) => {
        event.add("minecraft:trimmable_armor", item);
    });
	
	event.add('gtceu:ppe_armor', '#ad_astra:space_suit_items')
	event.add('minecraft:trimmable_armor', '#ad_astra:space_suit_items')

	event.add('ad_astra:space_suit_items', 'gtceu:quarktech_helmet')
	event.add('ad_astra:space_suit_items', 'gtceu:quarktech_chestplate')
	event.add('ad_astra:space_suit_items', 'gtceu:advanced_quarktech_chestplate')
	event.add('ad_astra:space_suit_items', 'gtceu:quarktech_leggings')
	event.add('ad_astra:space_suit_items', 'gtceu:quarktech_boots')

	event.add('ad_astra:freeze_resistant_armor', 'gtceu:quarktech_helmet')
	event.add('ad_astra:freeze_resistant_armor', 'gtceu:quarktech_chestplate')
	event.add('ad_astra:freeze_resistant_armor', 'gtceu:advanced_quarktech_chestplate')
	event.add('ad_astra:freeze_resistant_armor', 'gtceu:quarktech_leggings')
	event.add('ad_astra:freeze_resistant_armor', 'gtceu:quarktech_boots')
	
	event.add('ad_astra:heat_resistant_armor', 'gtceu:quarktech_helmet')
	event.add('ad_astra:heat_resistant_armor', 'gtceu:quarktech_chestplate')
	event.add('ad_astra:heat_resistant_armor', 'gtceu:advanced_quarktech_chestplate')
	event.add('ad_astra:heat_resistant_armor', 'gtceu:quarktech_leggings')
	event.add('ad_astra:heat_resistant_armor', 'gtceu:quarktech_boots')

}