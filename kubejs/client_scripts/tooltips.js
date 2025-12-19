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
	event.addAdvanced(['tfg:antipoison_pill'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.antipoison_pill'))
	})
	event.addAdvanced(['tfg:antipoison_tablet'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.antipoison_tablet'))
	})
	event.addAdvanced(['tfg:electric_greenhouse'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.machine.electric_greenhouse_1'));
		text.add(2, Text.translate('tfg.tooltip.machine.electric_greenhouse_2'));
		text.add(3, Text.translate('tfg.tooltip.machine.perfect_overclock'));
		text.add(4, Text.translate('tfg.tooltip.machine.two_energy_hatches'));
		text.add(5, Text.translate('tfg.tooltip.machine.customize_interior'));
	})
	event.addAdvanced(['tfg:growth_chamber'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.machine.growth_chamber_1'));
		text.add(2, Text.translate('tfg.tooltip.machine.growth_chamber_2'));
		text.add(3, Text.translate('tfg.tooltip.machine.two_energy_hatches'));
	})
	event.addAdvanced(['tfg:evaporation_tower'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.machine.evaporation_tower_1'));
		text.add(2, Text.translate('tfg.tooltip.machine.evaporation_tower_2'));
		text.add(3, Text.translate('tfg.tooltip.machine.two_energy_hatches'));
	})
	event.addAdvanced(['tfg:bioreactor'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.machine.bioreactor_1'));
		text.add(2, Text.translate('tfg.tooltip.machine.bioreactor_2'));
		text.add(3, Text.translate('tfg.tooltip.machine.two_energy_hatches'));
	})
	event.addAdvanced(['tfg:cooling_tower'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.machine.cooling_tower_1'));
		text.add(2, Text.translate('tfg.tooltip.machine.cooling_tower_2'));
		text.add(3, Text.translate('tfg.tooltip.machine.perfect_overclock'));
		text.add(4, Text.translate('tfg.tooltip.machine.subtick'));
		text.add(5, Text.translate('tfg.tooltip.machine.one_energy_hatch'));
	})
	event.addAdvanced(['gtceu:moon_dust_harvester'], (item, advanced, text) => {
		text.add(1, Text.translate('gtceu.tooltip.machine.moon_dust_harvester_1'));
		text.add(2, Text.translate('gtceu.tooltip.machine.moon_dust_harvester_2'));
		text.add(3, Text.translate('tfg.tooltip.machine.coil_energy_discount'));
		text.add(4, Text.translate('tfg.tooltip.machine.two_energy_hatches'));
	})
	event.addAdvanced(['gtceu:ostrum_harvester'], (item, advanced, text) => {
		text.add(1, Text.translate('gtceu.tooltip.machine.ostrum_harvester_1'));
		text.add(2, Text.translate('gtceu.tooltip.machine.ostrum_harvester_2'));
		text.add(3, Text.translate('tfg.tooltip.machine.coil_energy_discount'));
		text.add(4, Text.translate('tfg.tooltip.machine.two_energy_hatches'));
	})
	event.addAdvanced(['tfg:ostrum_linear_accelerator'], (item, advanced, text) => {
		text.add(1, Text.translate('gtceu.tooltip.machine.ostrum_linear_accelerator_1'));
		text.add(2, Text.translate('gtceu.tooltip.machine.ostrum_linear_accelerator_2'));
		text.add(2, Text.translate('gtceu.tooltip.machine.ostrum_linear_accelerator_3'));
		text.add(3, Text.translate('tfg.tooltip.machine.two_energy_hatches'));
	})
	event.addAdvanced(['gtceu:heat_exchanger'], (item, advanced, text) => {
		text.add(1, Text.translate('gtceu.tooltip.machine.heat_exchanger_1'));
		text.add(2, Text.translate('gtceu.tooltip.machine.heat_exchanger_2'));
		text.add(3, Text.translate('tfg.tooltip.machine.perfect_overclock'));
		text.add(4, Text.translate('tfg.tooltip.machine.subtick'));
		text.add(5, Text.translate('tfg.tooltip.machine.one_energy_hatch'));
	})
	event.addAdvanced(['gtceu:nuclear_fuel_factory'], (item, advanced, text) => {
		text.add(1, Text.translate('gtceu.tooltip.machine.nuclear_fuel_factory_1'));
		text.add(2, Text.translate('gtceu.tooltip.machine.nuclear_fuel_factory_2'));
		text.add(3, Text.translate('tfg.tooltip.machine.coil_speed_discount'));
		text.add(4, Text.translate('tfg.tooltip.machine.one_energy_hatch'));
	})
	event.addAdvanced(['gtceu:steam_bloomery'], (item, advanced, text) => {
		text.add(1, Text.translate('gtceu.tooltip.machine.steam_bloomery_1'));
		text.add(2, Text.translate('gtceu.tooltip.machine.steam_bloomery_2'));
		text.add(2, Text.translate('gtceu.tooltip.machine.steam_bloomery_3'));
		text.add(2, Text.translate('gtceu.tooltip.machine.steam_bloomery_4'));
	})
	event.addAdvanced(['gtceu:large_chemical_reactor'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.machine.perfect_overclock'));
		text.add(2, Text.translate('tfg.tooltip.machine.subtick'));
	})
	event.addAdvanced(['gtceu:coal_liquefaction_tower'], (item, advanced, text) => {
		text.add(1, Text.translate('gtceu.tooltip.machine.coal_liquefaction_tower_1'));
		text.add(2, Text.translate('gtceu.tooltip.machine.coal_liquefaction_tower_2'));
		text.add(3, Text.translate('tfg.tooltip.machine.coil_speed_discount'));
		text.add(3, Text.translate('tfg.tooltip.machine.one_energy_hatch'));
	})

	// Hot or not containers
	event.addAdvanced(['#tfg:insulating_container'], (item, advanced, text) => {
		text.add(1, Text.translate("tfg.tooltip.hotornot_container"))
	})
	// Do these in reverse order so the hot one appears on top
	event.addAdvanced(['#tfg:floating_protection_equipment'], (item, advanced, text) => {
		text.add(1, Text.translate("tfg.tooltip.hotornot_floating_equipment"))
	})
	event.addAdvanced(['#tfg:cold_protection_equipment'], (item, advanced, text) => {
		text.add(1, Text.translate("tfg.tooltip.hotornot_cold_equipment"))
	})
	event.addAdvanced(['#tfg:hot_protection_equipment'], (item, advanced, text) => {
		text.add(1, Text.translate("tfg.tooltip.hotornot_hot_equipment"))
	})

	// Insulation
	event.addAdvanced(['create:copper_diving_helmet', 'create:copper_backtank', 'create:copper_diving_boots'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.armor.copper_diving_suit_warmth'));
			text.add(2, Text.translate('tfg.tooltip.armor.copper_diving_suit_insulation'));
	})
	event.addAdvanced(['create:netherite_diving_helmet', 'create:netherite_backtank', 'create:netherite_diving_boots', 'minecraft:netherite_leggings', 'minecraft:netherite_boots'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.armor.netherite_diving_suit_warmth'));
			text.add(2, Text.translate('tfg.tooltip.armor.netherite_diving_suit_insulation'));
		text.add(3, Text.translate('tfg.tooltip.armor.netherite_diving_suit_set'));
	})
	event.addAdvanced(['gtceu:nanomuscle_helmet', 'gtceu:nanomuscle_chestplate', 'gtceu:nanomuscle_leggings', 'gtceu:nanomuscle_boots', 'gtceu:advanced_nanomuscle_chestplate'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.armor.nanomuscle_warmth'));
			text.add(2, Text.translate('tfg.tooltip.armor.nanomuscle_insulation'));
		text.add(3, Text.translate('tfg.tooltip.armor.nanomuscle_set'));
		if (item === 'gtceu:nanomuscle_leggings') {
			text.add(4, Text.translate('tfg.tooltip.armor.nanomuscle_legs_buff'));
		}
	})
	event.addAdvanced(['gtceu:quarktech_helmet', 'gtceu:quarktech_chestplate', 'gtceu:quarktech_leggings', 'gtceu:quarktech_boots', 'gtceu:advanced_quarktech_chestplate'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.armor.quarktech_warmth'));
			text.add(2, Text.translate('tfg.tooltip.armor.quarktech_insulation'));
		text.add(3, Text.translate('tfg.tooltip.armor.quarktech_set'));
	})
	event.addAdvanced([
		'ad_astra:space_helmet', 'ad_astra:space_suit', 'ad_astra:space_pants', 'ad_astra:space_boots',
		'ad_astra:netherite_space_helmet', 'ad_astra:netherite_space_suit', 'ad_astra:netherite_space_pants', 'ad_astra:netherite_space_boots',
		'ad_astra:jet_suit_helmet', 'ad_astra:jet_suit', 'ad_astra:jet_suit_pants', 'ad_astra:jet_suit_boots'
	], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.armor.space_suit_warmth'));
			text.add(2, Text.translate('tfg.tooltip.armor.space_suit_insulation'));
		text.add(3, Text.translate('tfg.tooltip.armor.space_suit_set'));
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
		text.add(1, Text.translate('tfg.tooltip.solar_panel.large_tier3'));
		text.add(2, Text.translate('tfg.tooltip.machine.parallel'))
	})

	// Mars Animals
	event.addAdvanced(['species:petrified_egg'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.petrified_egg'))
	})

	event.addAdvanced(['tfg:sniffer_egg'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.attribution.sniffer'));
			text.add(2, Text.translate('tfg.tooltip.large_egg'))
	})

	event.addAdvanced(['tfg:wraptor_egg'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.attribution.wraptor'));
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

	// Fluid + item containers
	global.LAB_EQUIPMENT_CONTAINERS.forEach(container => {
		event.addAdvanced([`tfg:${container.type}`], (item, advanced, text) => {
			text.add(1, Text.translate('gtceu.universal.tooltip.fluid_storage_capacity', `${container.capacity}`))
		})
	})
	event.addAdvanced(['#firmalife:big_barrels'], (item, advanced, text) => {
		text.add(1, Text.translate("gtceu.universal.tooltip.item_storage_capacity", "36"))
		text.add(2, Text.translate("gtceu.universal.tooltip.fluid_storage_capacity", "80,000"))
	})
	event.addAdvanced(['create:fluid_tank', 'create_connected:fluid_vessel'], (item, advanced, text) => {
		text.add(1, Text.translate("gtceu.universal.tooltip.fluid_storage_capacity", "16,000"))
	})
	event.addAdvanced(['#tfc:barrels'], (item, advanced, text) => {
		text.add(1, Text.translate("gtceu.universal.tooltip.fluid_storage_capacity", "10,000"))
	})
	event.addAdvanced(['tfc:crucible'], (item, advanced, text) => {
		text.add(1, Text.translate("gtceu.universal.tooltip.fluid_storage_capacity", "4,032"))
	})
	event.addAdvanced(['waterflasks:red_steel_flask'], (item, advanced, text) => {
		text.add(1, Text.translate("gtceu.universal.tooltip.fluid_storage_capacity", "2,000"))
	})
	event.addAdvanced(['waterflasks:iron_flask', 'tfc:wooden_bucket', 'firmalife:mixing_bowl'], (item, advanced, text) => {
		text.add(1, Text.translate("gtceu.universal.tooltip.fluid_storage_capacity", "1,000"))
	})
	event.addAdvanced(['waterflasks:leather_flask'], (item, advanced, text) => {
		text.add(1, Text.translate("gtceu.universal.tooltip.fluid_storage_capacity", "500"))
	})
	event.addAdvanced(['tfc:hematitic_glass_bottle', 'tfc:silica_glass_bottle', 'tfc:volcanic_glass_bottle', 'tfc:olivine_glass_bottle'], (item, advanced, text) => {
		text.add(1, Text.translate("gtceu.universal.tooltip.fluid_storage_capacity", "400"))
	})
	event.addAdvanced(['#tfc:lamps'], (item, advanced, text) => {
		text.add(1, Text.translate("gtceu.universal.tooltip.fluid_storage_capacity", "250"))
	})
	event.addAdvanced(['tfc:ceramic/jug', 'firmalife:hollow_shell'], (item, advanced, text) => {
		text.add(1, Text.translate("gtceu.universal.tooltip.fluid_storage_capacity", "100"))
	})
	event.addAdvanced(['#tfcastikorcarts:supply_cart'], (item, advanced, text) => {
		text.add(1, Text.translate("gtceu.universal.tooltip.item_storage_capacity", "54"))
	})
	event.addAdvanced(['framedblocks:framed_chest'], (item, advanced, text) => {
		text.add(1, Text.translate("gtceu.universal.tooltip.item_storage_capacity", "27"))
	})
	event.addAdvanced(['create:item_vault', 'create_connected:item_silo'], (item, advanced, text) => {
		text.add(1, Text.translate("gtceu.universal.tooltip.item_storage_capacity", "20"))
	})
	event.addAdvanced(['#forge:chests/wooden'], (item, advanced, text) => {
		text.add(1, Text.translate("gtceu.universal.tooltip.item_storage_capacity", "18"))
	})
	event.addAdvanced(['#tfc:fired_large_vessels'], (item, advanced, text) => {
		text.add(1, Text.translate("gtceu.universal.tooltip.item_storage_capacity", "9"))
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
		text.add(1, Text.translate("tfg.tooltip.component.nuclear_turbine_1"));
		text.add(2, Text.translate("tfg.tooltip.component.nuclear_turbine_2"));
	})

	event.addAdvanced(['tfg:food/slice_of_cheese'], (item, advanced, text) => {
		if (!event.isShift()) {
			text.add(1, Text.translate("tfg.tooltip.fake_nutrition_info_listener"))
		} else {
			text.add(1, Text.translate("tfg.tooltip.fake_nutrition_info"));
			text.add(2, Text.translate("tfg.tooltip.cheese_slice_microplastics"))
		};
	});


	// AE2
	event.addAdvanced(['tfg:wireless_card'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.wireless_card_1'));
		text.add(2, Text.translate('tfg.tooltip.wireless_card_2'));
		text.add(3, Text.translate('tfg.tooltip.wireless_card_3'));
	})

	// Deprecated Items
	event.addAdvanced(['vintageimprovements:lathe'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.obsolete.depreciated'))
	})

	// Drink effects
	event.addAdvanced(['tfc_gurman:compote_bucket'], (item, advanced, text) => {
		text.add(1, Text.of("Jump Boost II (00:30)").blue());
	})
	event.addAdvanced(['tfc_gurman:kvass_bucket'], (item, advanced, text) => {
		text.add(1, Text.of("Strength (01:20)").blue());
		text.add(2, Text.translate('tfg.tooltip.cooling_foods'));
	})
	event.addAdvanced(['tfc_gurman:lemonade_bucket'], (item, advanced, text) => {
		text.add(1, Text.of("Haste (00:30)").blue());
		text.add(2, Text.translate('tfg.tooltip.cooling_foods'));
	})
	event.addAdvanced(['tfc_gurman:coffee_bucket'], (item, advanced, text) => {
		text.add(1, Text.of("Speed (00:30)").blue());
		text.add(2, Text.translate('tfg.tooltip.warming_foods'));
	})
	event.addAdvanced(['tfc_gurman:cocoa_bucket'], (item, advanced, text) => {
		text.add(1, Text.of("Haste (00:30)").blue());
		text.add(2, Text.translate('tfg.tooltip.warming_foods'));
	})
	event.addAdvanced(['tfc_gurman:tea_mint_bucket'], (item, advanced, text) => {
		text.add(1, Text.of("Regeneration (00:30)").blue());
		text.add(2, Text.translate('tfg.tooltip.warming_foods'));
	})
	event.addAdvanced(['tfc_gurman:tea_chamomile_bucket'], (item, advanced, text) => {
		text.add(1, Text.of("Resistance (00:30)").blue());
		text.add(2, Text.translate('tfg.tooltip.warming_foods'));
	})
	event.addAdvanced(['tfc_gurman:tea_nettle_bucket'], (item, advanced, text) => {
		text.add(1, Text.of("Slow Falling (00:30)").blue());
		text.add(2, Text.translate('tfg.tooltip.warming_foods'));
	})
	event.addAdvanced(['tfc_gurman:tea_rosehip_bucket'], (item, advanced, text) => {
		text.add(1, Text.of("Absorption (00:30)").blue());
		text.add(2, Text.translate('tfg.tooltip.warming_foods'));
	})
	event.addAdvanced(['tfc_gurman:nalivka_bucket'], (item, advanced, text) => {
		text.add(1, Text.of("Strength (02:40)").blue());
		text.add(2, Text.translate('tfg.tooltip.cooling_foods'));
	})
	event.addAdvanced(['tfc:bucket/spring_water'], (item, advanced, text) => {
		text.add(1, Text.translate('tfg.tooltip.warming_foods'));
	})
}
