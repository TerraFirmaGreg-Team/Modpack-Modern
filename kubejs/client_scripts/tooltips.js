"use strict";

/**
 * @param {Internal.ItemTooltipEventJS} event 
 */
const registerTooltips = (event) => {
	//Your IDE may say that "item" and "advanced" are never used, but they are required! So dont remove them <3
	
	event.addAdvanced(['minecraft:name_tag'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.nametag'))
	})
	event.addAdvanced(['firmalife:bucket/yeast_starter'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.yeast_starter'))
	})
	event.addAdvanced(['firmalife:beehive'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.beehive'))
	})
	event.addAdvanced(['create:blaze_burner'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.blaze_burner'))
	})
	event.addAdvanced(['tfg:electric_greenhouse'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.machine.perfect_overclock')),
		text.add(2, Text.translate('tfg.tooltip.machine.customize_interior'))
	})
	event.addAdvanced(['gtceu:large_chemical_reactor'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.machine.perfect_overclock'))
	})

	// Insulation
	event.addAdvanced(['create:copper_diving_helmet', 'create:copper_backtank', 'create:copper_diving_boots'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.armor.copper_diving_suit_warmth')),
		text.add(2, Text.translate('tfg.tooltip.armor.copper_diving_suit_insulation'))
	})
	event.addAdvanced(['create:netherite_diving_helmet', 'create:netherite_backtank', 'create:netherite_diving_boots', 'minecraft:netherite_leggings'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.armor.netherite_diving_suit_warmth')),
		text.add(2, Text.translate('tfg.tooltip.armor.netherite_diving_suit_insulation'))
		text.add(3, Text.translate('tfg.tooltip.armor.netherite_diving_suit_set'))
	})
	event.addAdvanced(['gtceu:nanomuscle_helmet', 'gtceu:nanomuscle_chestplate', 'gtceu:nanomuscle_leggings', 'gtceu:nanomuscle_boots', 'gtceu:advanced_nanomuscle_chestplate'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.armor.nanomuscle_warmth')),
		text.add(2, Text.translate('tfg.tooltip.armor.nanomuscle_insulation'))
		text.add(3, Text.translate('tfg.tooltip.armor.nanomuscle_set'))
		if (item == 'gtceu:nanomuscle_leggings') {
			text.add(4, Text.translate('tfg.tooltip.armor.nanomuscle_legs_buff'))
		}
	})
	event.addAdvanced(['gtceu:quarktech_helmet', 'gtceu:quarktech_chestplate', 'gtceu:quarktech_leggings', 'gtceu:quarktech_boots', 'gtceu:advanced_quarktech_chestplate'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.armor.quarktech_warmth')),
		text.add(2, Text.translate('tfg.tooltip.armor.quarktech_insulation'))
		text.add(3, Text.translate('tfg.tooltip.armor.quarktech_set'))
	})
	event.addAdvanced([
		'ad_astra:space_helmet', 'ad_astra:space_suit', 'ad_astra:space_pants', 'ad_astra:space_boots',
		'ad_astra:netherite_space_helmet', 'ad_astra:netherite_space_suit', 'ad_astra:netherite_space_pants', 'ad_astra:netherite_space_boots',
		'ad_astra:jet_suit_helmet', 'ad_astra:jet_suit', 'ad_astra:jet_suit_pants', 'ad_astra:jet_suit_boots'
	], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.armor.space_suit_warmth')),
		text.add(2, Text.translate('tfg.tooltip.armor.space_suit_insulation'))
		text.add(3, Text.translate('tfg.tooltip.armor.space_suit_set'))
	})

	// Supports
	global.TFC_WOOD_TYPES.forEach(wood => {
		event.addAdvanced([`tfc:wood/support/${wood}`], (item, advanced, text) => {
			text.add(1, Text.translate('tfg.tooltip.support.tier1'))
		})
	})
	global.AFC_WOOD_TYPES.forEach(wood => {
		event.addAdvanced([`afc:wood/support/${wood}`], (item, advanced, text) => {
			text.add(1, Text.translate('tfg.tooltip.support.tier1'))
		})
	})
	global.AD_ASTRA_WOOD.forEach(wood => {
		event.addAdvanced([`tfg:${wood.name}_support`], (item, advanced, text) => {
			text.add(1, Text.translate('tfg.tooltip.support.tier1'))
		})
	})
	event.addAdvanced(['tfg:light_concrete_support', 'tfg:dark_concrete_support', 'tfg:rebar_support'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.support.tier2'))
	})
	event.addAdvanced(['tfg:reinforced_light_concrete_support', 'tfg:reinforced_dark_concrete_support', 'tfg:steel_support'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.support.tier3'))
	})
	const other_stone = ['migmatite', 'pyroxenite', 'travertine', 'keratophyre', 'anorthosite', 'norite', 'argillite', 'trachyte', 'komatiite', 'phonolite', 'permafrost', 'red_granite', 'stone']
	const stone_types = global.TFC_STONE_TYPES.concat(other_stone)

	stone_types.forEach(stone => {
		event.addAdvanced([`tfg:${stone}_support`], (item, advanced, text) => {
			text.add(1, Text.translate('tfg.tooltip.support.tier1'))
		})
	})

	// Vessels
	event.addAdvanced(['#tfc:fired_vessels'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.vessels'))

	})

	// Solar Panel
	event.addAdvanced(['ad_astra:solar_panel'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.solar_panel.single'))
	})

	event.addAdvanced(['gtceu:large_solar_panel'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.solar_panel.large_tier1'))
	})

	event.addAdvanced(['gtceu:large_solar_panel_tier2'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.solar_panel.large_tier2'))
	})

	event.addAdvanced(['gtceu:large_solar_panel_tier3'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.solar_panel.large_tier3'))
	})

	// Mars Animals
	event.addAdvanced(['species:petrified_egg'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.petrified_egg'))
	})
	
	event.addAdvanced(['tfg:sniffer_egg'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.attribution.sniffer')),
		text.add(2, Text.translate('tfg.tooltip.large_egg'))
	})
	
	event.addAdvanced(['tfg:wraptor_egg'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.attribution.wraptor')),
		text.add(2, Text.translate('tfg.tooltip.large_egg'))
	})
	
	event.addAdvanced(['tfg:sniffer_wool'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.sniffer_wool'))
	})
	
	event.addAdvanced(['tfg:wraptor_wool'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.wraptor_wool'))
	})
	
	event.addAdvanced(['tfg:wraptor_sugar'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.wraptor_sugar'))
	})
	
	// Temperature changing foods
	event.addAdvanced(['#tfg:cooling_foods'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.cooling_foods'))
	})
	
	event.addAdvanced(['#tfg:cooling_foods_strong'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.cooling_foods_strong'))
	})
	
	event.addAdvanced(['#tfg:warming_foods'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.warming_foods'))
	})

	// Greate tooltips on Create things
	event.addAdvanced(['create:water_wheel'], (item, advanced, text) => {
		text.add(1, Text.translate("greate.tooltip.max_capacity").append(Text.translate("tfg.greate.uls_limit")))
	})
	event.addAdvanced(['create:large_water_wheel', 'create:windmill_bearing'], (item, advanced, text) => {
		text.add(1, Text.translate("greate.tooltip.max_capacity").append(Text.translate("tfg.greate.ls_limit")))
	})

	global.LAB_EQUIPMENT_CONTAINERS.forEach(container => {
		event.addAdvanced([`tfg:${container.type}`], (item, advanced, text) => {
			text.add(1, Text.translate('tfg.tooltip.lab_equipment.part').append(`§e${container.capacity.toString()}mB`))
		})
	})

	//Nuclear Fission Tooltips

	event.addAdvanced(['minecraft:blue_ice'], (item, advanced, text) => {
		text.add(1, Text.translate("tfg.tooltip.component.blue_ice"))
	})
	event.addAdvanced(['tfg:glacian_wool_frame'], (item, advanced, text) => {
		text.add(1, Text.translate("tfg.tooltip.component.glacian_fur"))
	})
	event.addAdvanced(['tfg:aes_insulation_frame'], (item, advanced, text) => {
		text.add(1, Text.translate("tfg.tooltip.component.aes_insulation_frame"))
	})
	event.addAdvanced(['tfg:moderate_core_frame'], (item, advanced, text) => {
		text.add(1, Text.translate("tfg.tooltip.component.moderate_core_frame"))
	})
	event.addAdvanced(['tfg:impure_moderate_core_frame'], (item, advanced, text) => {
		text.add(1, Text.translate("tfg.tooltip.component.impure_moderate_core_frame"))
	})
	event.addAdvanced(['tfg:dry_ice'], (item, advanced, text) => {
		text.add(1, Text.translate("tfg.tooltip.component.dry_ice"))
	})
	event.addAdvanced(['tfg:refrigerant_pellet'], (item, advanced, text) => {
		text.add(1, Text.translate("tfg.tooltip.component.refrigerant_pellet"))
	})

	event.addAdvanced(['tfg:nuclear_turbine'], (item, advanced, text) => {
		text.add(1, Text.translate("tfg.tooltip.component.nuclear_turbine_1"))
		text.add(2, Text.translate("tfg.tooltip.component.nuclear_turbine_2"))
	})

	// AE2
	event.addAdvanced(['tfg:wireless_card'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.wireless_card_1'))
		text.add(2, Text.translate('tfg.tooltip.wireless_card_2'))
		text.add(3, Text.translate('tfg.tooltip.wireless_card_3'))
	})

	// Deprecated Items
	event.addAdvanced(['vintageimprovements:lathe'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.obsolete.depreciated'))
	})
}