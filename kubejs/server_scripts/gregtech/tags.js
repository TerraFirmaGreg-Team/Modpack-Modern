// priority: 0

const registerGTCEUItemTags = (event) => {

	// Удаление тегов у отключенных предметов
	global.GTCEU_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	global.GTCEU_HIDED_ITEMS.forEach(item => {
		event.add('c:hidden_from_recipe_viewers', item)
	})

	global.GTCEU_ARMORS.forEach(item => {
		event.add('minecraft:trimmable_armor', item)
	})

	// Добавление тега EMI для скрытия всех руд
	event.add('c:hidden_from_recipe_viewers', '#forge:ores')

	//#region Пыли стоунтайпов в один тэг
	event.add('tfg:stone_dusts', 'tfg:gabbro_dust')
	event.add('tfg:stone_dusts', 'tfg:shale_dust')
	event.add('tfg:stone_dusts', 'tfg:claystone_dust')
	event.add('tfg:stone_dusts', 'tfg:limestone_dust')
	event.add('tfg:stone_dusts', 'tfg:conglomerate_dust')
	event.add('tfg:stone_dusts', 'tfg:dolomite_dust')
	event.add('tfg:stone_dusts', 'tfg:chert_dust')
	event.add('tfg:stone_dusts', 'tfg:chalk_dust')
	event.add('tfg:stone_dusts', 'tfg:rhyolite_dust')
	event.add('tfg:stone_dusts', 'tfg:dacite_dust')
	event.add('tfg:stone_dusts', 'gtceu:quartzite_dust')
	event.add('tfg:stone_dusts', 'tfg:slate_dust')
	event.add('tfg:stone_dusts', 'tfg:phyllite_dust')
	event.add('tfg:stone_dusts', 'tfg:schist_dust')
	event.add('tfg:stone_dusts', 'tfg:gneiss_dust')
	event.add('tfg:stone_dusts', 'gtceu:marble_dust')
	event.add('tfg:stone_dusts', 'gtceu:basalt_dust')
	event.add('tfg:stone_dusts', 'gtceu:diorite_dust')
	event.add('tfg:stone_dusts', 'gtceu:andesite_dust')
	event.add('tfg:stone_dusts', 'gtceu:granite_dust')
	event.add('tfg:stone_dusts', 'gtceu:deepslate_dust')
	event.add('tfg:stone_dusts', 'gtceu:blackstone_dust')
	event.add('tfg:stone_dusts', 'tfg:dripstone_dust')

	event.add('tfg:stone_dusts', 'gtceu:stone_dust')
	//#endregion

	event.remove('minecraft:planks', 'gtceu:treated_wood_planks')
}

const registerGTCEUBlockTags = (event) => {

	// Удаление тегов у отключенных предметов
	global.GTCEU_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
	})

	// TODO: Ores all broke for some reason? This is a workaround for now
	event.add('minecraft:mineable/pickaxe', '#forge:ores')
	event.add('minecraft:needs_iron_tool', '#forge:ores')

	// Let GT indicators be covered by snow
	GTMaterialRegistry.getRegisteredMaterials().forEach(material => {
		const oreProperty = material.getProperty(PropertyKey.ORE)

		if (oreProperty != null) {
			let indicator = `gtceu:${material.getName()}_indicator`;

			event.add('tfg:dust_ore_indicators', indicator)
			event.add('tfc:can_be_snow_piled', indicator)
			event.add('tfc:can_be_ice_piled', indicator)
		}
	})
}
