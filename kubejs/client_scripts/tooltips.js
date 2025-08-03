"use strict";

const registerTooltips = (event) => {
	event.addAdvanced(['gtceu:lv_macerator', 'gtceu:mv_macerator', 'gtceu:hp_steam_macerator'], (item, advanced, text) => {
		text.add(1, [text.of('§7Only outputs the first slot shown in EMI/JEI until HV.')])
	})
	event.addAdvanced(['minecraft:name_tag'], (item, advanced, text) => {
		text.add(1, [text.of('§7Used on a Scribing Table along with an item to name it, or with black dye to name the tag.')])
	})
	event.addAdvanced(['toolbelt:belt'], (item, advanced, text) => {
		text.add(1, [text.of('§7Press the §o§6Swap Tool§7 keybind to open the radial menu.')]),
		text.add(2, [text.of(`§7You can also right click with it in hand to add or remove tools.`)])
		text.add(3, [text.of(`§cDo not dye this or you won't be able to upgrade.`)])
	})
	event.addAdvanced(['toolbelt:pouch'], (item, advanced, text) => {
		text.add(1, [text.of('§7Used to upgrade your toolbelt to add more slots')]),
		text.add(2, [text.of(`§7Can't be used with §cd§ey§ae§9d §rbelts or belts that have tools inside.`)])
	})
	event.addAdvanced(['firmalife:bucket/yeast_starter'], (item, advanced, text) => {
		text.add(1, [text.of('§7Created with dried fruit')])
	})
	event.addAdvanced(['firmalife:beehive'], (item, advanced, text) => {
		text.add(1, [text.of('§7Needs to be filled with empty frames and surrounded by flowers to attract bees.')])
	})
	event.addAdvanced(["treetap:tap"], (item, advanced, text) => {
		text.add(1, [text.of("§4Obsolete§f: Replaced by the AFC TreeTap, you can craft it from this one by placing this in a crafting table!")])
	})
	event.addAdvanced(["tfcea:refrigerator"], (item, advanced, text) => {
		text.add(1, [text.of("§4Obsolete§f: Replaced by the GregTech Refrigerator, you can craft it from this one by placing this in a crafting table!")])
	})
	event.addAdvanced(['create:blaze_burner'], (item, advanced, text) => {
		text.add(1, text.of('§cSuperheat§r §7with Coke, Anthracite, or Flawless and Exquisite coal gems.'))
	})
	event.addAdvanced(['tfg:electric_greenhouse'], (item, advanced, text) => {
		text.add(1, text.of('This machine has a §2Perfect Overclock§r!')),
		text.add(2, text.of(`The interior is customizable! Check the multiblock preview in JEI.`))
	})
	event.addAdvanced(['gtceu:nether_dome'], (item, advanced, text) => {
		text.add(1, text.of('§7Artificial enviroment to simulate the Nether.')),
		text.add(2, text.of(`§7The interior is customizable! Check the multiblock preview in JEI.`))
	})
	event.addAdvanced(['gtceu:end_dome'], (item, advanced, text) => {
		text.add(1, text.of('§7Artificial enviroment to simulate the End.')),
		text.add(2, text.of(`§7The interior is customizable! Check the multiblock preview in JEI.`))
	})

	// Insulation
	event.addAdvanced(['create:copper_diving_helmet', 'create:copper_backtank', 'create:copper_diving_boots'], (item, advanced, text) => {
		text.add(1, text.of('§7Warmth: -1')),
		text.add(2, text.of('§7Insulation: +1'))
	})
	event.addAdvanced(['create:netherite_diving_helmet', 'create:netherite_backtank', 'create:netherite_diving_boots', 'minecraft:netherite_leggings'], (item, advanced, text) => {
		text.add(1, text.of('§7Warmth: -2')),
		text.add(2, text.of('§7Insulation: +9'))
		text.add(3, text.of('§7Wear the full set to be §eHeatproof§7 from ambient temperatures.'))
	})
	event.addAdvanced(['gtceu:nanomuscle_helmet', 'gtceu:nanomuscle_chestplate', 'gtceu:nanomuscle_leggings', 'gtceu:nanomuscle_boots', 'gtceu:advanced_nanomuscle_chestplate'], (item, advanced, text) => {
		text.add(1, text.of('§7Warmth: 0')),
		text.add(2, text.of('§7Insulation: +10'))
		text.add(3, text.of('§7Wear the full set to be §eFully Insulated§7 from ambient temperatures.'))
	})
	event.addAdvanced(['gtceu:quarktech_helmet', 'gtceu:quarktech_chestplate', 'gtceu:quarktech_leggings', 'gtceu:quarktech_boots', 'gtceu:advanced_quarktech_chestplate'], (item, advanced, text) => {
		text.add(1, text.of('§7Warmth: 0')),
		text.add(2, text.of('§7Insulation: +10'))
		text.add(3, text.of('§7Wear the full set to be §eFully Insulated§7 from ambient temperatures.'))
	})
	event.addAdvanced([
		'ad_astra:space_helmet', 'ad_astra:space_suit', 'ad_astra:space_pants', 'ad_astra:space_boots',
		'ad_astra:netherite_space_helmet', 'ad_astra:netherite_space_suit', 'ad_astra:netherite_space_pants', 'ad_astra:netherite_space_boots',
		'ad_astra:jet_suit_helmet', 'ad_astra:jet_suit', 'ad_astra:jet_suit_pants', 'ad_astra:jet_suit_boots'
	], (item, advanced, text) => {
		text.add(1, text.of('§7Warmth: 0')),
		text.add(2, text.of('§7Insulation: +10'))
		text.add(3, text.of('§7Wear the full set to be §eFully Insulated§7 from ambient temperatures.'))
	})

	// Supports
	global.TFC_WOOD_TYPES.forEach(wood => {
		event.addAdvanced([`tfc:wood/support/${wood}`], (item, advanced, text) => {
			text.add(1, text.of('§79 x 5 x 9'))
		})
	})
	global.AFC_WOOD_TYPES.forEach(wood => {
		event.addAdvanced([`afc:wood/support/${wood}`], (item, advanced, text) => {
			text.add(1, text.of('§79 x 5 x 9'))
		})
	})
	global.AD_ASTRA_WOOD.forEach(wood => {
		event.addAdvanced([`tfg:${wood.name}_support`], (item, advanced, text) => {
			text.add(1, text.of('§79 x 5 x 9'))
		})
	})
	event.addAdvanced(['tfg:light_concrete_support', 'tfg:dark_concrete_support', 'tfg:rebar_support'], (item, advanced, text) => {
		text.add(1, text.of('§717 x 9 x 17'))
	})
	event.addAdvanced(['tfg:reinforced_light_concrete_support', 'tfg:reinforced_dark_concrete_support', 'tfg:steel_support'], (item, advanced, text) => {
		text.add(1, text.of('§733 x 13 x 33'))
	})
	const other_stone = ['pyroxenite', 'migmatite', 'travertine']
	const stone_types = global.TFC_STONE_TYPES.concat(other_stone)

	stone_types.forEach(stone => {
		event.addAdvanced([`tfg:${stone}_support`], (item, advanced, text) => {
			text.add(1, text.of('§79 x 5 x 9'))
		})
	})

	// Vessels
	event.addAdvanced(['#tfc:fired_vessels'], (item, advanced, text) => {
		text.add(1, text.of('§cMax: 3024mB'))

	})

	// Solar Panel
	event.addAdvanced(['ad_astra:solar_panel'], (item, advanced, text) => {
		text.add(1, text.of('Produces §6256 FE/t§r (64 EU/t) on the §6moon§r during the §6day§r'))
	})

	event.addAdvanced(['gtceu:large_solar_panel'], (item, advanced, text) => {
		text.add(1, text.of('Massive structure producing from §61024 to 4096 EU/t§r on the §6moon§r during the §6day§r'))
	})

	event.addAdvanced(['gtceu:large_solar_panel_tier2'], (item, advanced, text) => {
		text.add(1, text.of('Massive structure producing from §64096 to 16384 EU/t§r on the §6moon§r during the §6day§r'))
	})

	event.addAdvanced(['gtceu:large_solar_panel_tier3'], (item, advanced, text) => {
		text.add(1, text.of('Massive structure producing from §616384 to 65536 EU/t§r on the §6moon§r during the §6day§r'))
	})

	// MEGA Deprecated 0.10
	event.addAdvanced(['#megacells:mega_interface'], (item, advanced, text) => {
		text.add(1, text.of('§cDeprecated, cannot be crafted any more'))
	})
	event.addAdvanced(['#megacells:mega_pattern_provider'], (item, advanced, text) => {
		text.add(1, text.of('§cDeprecated, cannot be crafted any more'))
	})
}