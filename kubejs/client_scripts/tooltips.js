const registerTooltips = (event) =>
{
	event.addAdvanced(['gtceu:lv_macerator', 'gtceu:mv_macerator', 'gtceu:hp_steam_macerator'], (item, advanced, text) => {
		text.add(1, [text.of('Only outputs the first slot shown in EMI/JEI until HV.')])
	})
	event.addAdvanced(['minecraft:name_tag'], (item, advanced, text) => {
		text.add(1, [text.of('Used on a Scribing Table along with an item to name it, or with black dye to name the tag.')])
	})
	event.addAdvanced(['toolbelt:belt'], (item, advanced, text) => {
		text.add(1, [text.of('Press the §o§6Swap Tool§r keybind to open the radial menu.')]),
		text.add(2, [text.of(`You can also right click with it in hand to add or remove tools.`)])
		text.add(3, [text.of(`§cDo not dye this or you won't be able to upgrade.`)])
	})
	event.addAdvanced(['toolbelt:pouch'], (item, advanced, text) => {
		text.add(1, [text.of('Used to upgrade your toolbelt to add more slots')]),
		text.add(2, [text.of(`Can't be used with §cd§ey§ae§9d §rbelts or belts that have tools inside.`)])
	})
	event.addAdvanced(['firmalife:bucket/yeast_starter'], (item, advanced, text) => {
		text.add(1, [text.of('Created with dried fruit')])
	})
	event.addAdvanced(['firmalife:beehive'], (item, advanced, text) => {
		text.add(1, [text.of('Needs to be filled with empty frames and surrounded by flowers to attract bees.')])
	})
	event.addAdvanced(["treetap:tap"], (item, advanced, text) => {
		text.add(1, [text.of("§4Obsolete§f: Replaced by the AFC TreeTap, you can craft it from this one by placing this in a crafting table!")])
	})
	event.addAdvanced(['create:blaze_burner'], (item, advanced, text) => {
		text.add(1, text.of('§cSuperheat§r with Coke, Anthracite, or Flawless and Exquisite coal gems.'))
	})
	event.addAdvanced(['tfg:electric_greenhouse'], (item, advanced, text) => {
		text.add(1, text.of('This machine has a §2Perfect Overclock§r!')),
		text.add(3, text.of(`The interior is customizable! Check the multiblock preview in JEI.`))
	})
	event.addAdvanced(['gtceu:nether_dome'], (item, advanced, text) => {
		text.add(1, text.of('Artificial enviroment to simulate the Nether.')),
		text.add(2, text.of(`The interior is customizable! Check the multiblock preview in JEI.`))
	})
	event.addAdvanced(['gtceu:end_dome'], (item, advanced, text) => {
		text.add(1, text.of('Artificial enviroment to simulate the End.')),
		text.add(2, text.of(`The interior is customizable! Check the multiblock preview in JEI.`))
	})

	// Insulation
	event.addAdvanced(['create:copper_diving_helmet', 'create:copper_backtank', 'create:copper_diving_boots'], (item, advanced, text) => {
		text.add(1, text.of('§7Warmth: -1')),
		text.add(2, text.of('§7Insulation: +1'))
	})
	event.addAdvanced(['create:netherite_diving_helmet', 'create:netherite_backtank', 'create:netherite_diving_boots', 'minecraft:netherite_leggings'], (item, advanced, text) => {
		text.add(1, text.of('§7Warmth: -2')),
		text.add(2, text.of('§7Insulation: +9'))
		text.add(3, text.of('Wear the full set to be §eHeatproof§r from ambient temperatures.'))
	})
	event.addAdvanced(['gtceu:nanomuscle_helmet', 'gtceu:nanomuscle_chestplate', 'gtceu:nanomuscle_leggings', 'gtceu:nanomuscle_boots', 'gtceu:avanced_nanomuscle_chestplate'], (item, advanced, text) => {
		text.add(1, text.of('§7Warmth: -0.5')),
		text.add(2, text.of('§7Insulation: +10'))
		text.add(3, text.of('Wear the full set to be §eFully Insulated§r from ambient temperatures.'))
	})
	event.addAdvanced(['gtceu:quarktech_helmet', 'gtceu:quarktech_chestplate', 'gtceu:quarktech_leggings', 'gtceu:quarktech_boots', 'gtceu:advanced_quarktech_chestplate'], (item, advanced, text) => {
		text.add(1, text.of('§7Warmth: -0.5')),
		text.add(2, text.of('§7Insulation: +10'))
		text.add(3, text.of('Wear the full set to be §eFully Insulated§r from ambient temperatures.'))
	})

	//supports
	global.TFC_WOOD_TYPES.forEach(wood => {
		event.addAdvanced([`tfc:wood/support/${wood}`], (item, advanced, text) => {
			text.add(1, text.of('9 x 5 x 9'))
		})
	})
	global.AFC_WOOD_TYPES.forEach(wood => {
		event.addAdvanced([`afc:wood/support/${wood}`], (item, advanced, text) => {
			text.add(1, text.of('9 x 5 x 9'))
		})
	})
	event.addAdvanced(['tfg:light_concrete_support', 'tfg:dark_concrete_support', 'tfg:rebar_support'], (item, advanced, text) => {
		text.add(1, text.of('17 x 9 x 17'))
	})
	event.addAdvanced(['tfg:reinforced_light_concrete_support', 'tfg:reinforced_dark_concrete_support', 'tfg:steel_support'], (item, advanced, text) => {
		text.add(1, text.of('33 x 13 x 33'))
	})
	const other_stone = ['pyroxenite', 'migmatite', 'travertine']
	const stone_types = global.TFC_STONE_TYPES.concat(other_stone)

	stone_types.forEach(stone => {
		event.addAdvanced([`tfg:${stone}_support`], (item, advanced, text) => {
			text.add(1, text.of('9 x 5 x 9'))
		})
	})

	// Vessels
	event.addAdvanced(['#tfc:fired_vessels'], (item, advanced, text) => {
		text.add(1, text.of('§cMax: 3024mB'))
	})
}