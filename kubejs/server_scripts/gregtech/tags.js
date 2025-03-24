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

	// Piglin things
	event.add('minecraft:piglin_loved', 'gtceu:gold_plate')
	event.add('minecraft:piglin_loved', 'gtceu:long_gold_rod')
	event.add('minecraft:piglin_loved', 'gtceu:double_gold_plate')
	event.add('minecraft:piglin_loved', 'gtceu:gold_double_ingot')
	event.add('minecraft:piglin_loved', 'gtceu:gold_dust')
	event.add('minecraft:piglin_loved', 'gtceu:gold_double_wire')
	event.add('minecraft:piglin_loved', 'gtceu:gold_quadruple_wire')
	event.add('minecraft:piglin_loved', 'gtceu:gold_octal_wire')
	event.add('minecraft:piglin_loved', 'gtceu:gold_hex_wire')
	event.add('minecraft:piglin_loved', 'gtceu:gold_double_cable')
	event.add('minecraft:piglin_loved', 'gtceu:gold_quadruple_cable')
	event.add('minecraft:piglin_loved', 'gtceu:gold_octal_cable')
	event.add('minecraft:piglin_loved', 'gtceu:gold_hex_cable')
	event.add('minecraft:piglin_loved', 'gtceu:gold_small_fluid_pipe')
	event.add('minecraft:piglin_loved', 'gtceu:gold_normal_fluid_pipe')
	event.add('minecraft:piglin_loved', 'gtceu:gold_large_fluid_pipe')
	event.add('minecraft:piglin_loved', 'gtceu:gold_huge_fluid_pipe')
	event.add('minecraft:piglin_loved', 'gtceu:gold_quadruple_fluid_pipe')
	event.add('minecraft:piglin_loved', 'gtceu:gold_nonuple_fluid_pipe')
	event.add('minecraft:piglin_loved', 'gtceu:gold_drum')
	event.add('minecraft:piglin_loved', 'gtceu:purified_gold_ore')
	event.add('minecraft:piglin_loved', 'gtceu:crushed_gold_ore')
	event.add('minecraft:piglin_loved', 'gtceu:refined_gold_ore')
	event.add('minecraft:piglin_loved', 'gtceu:impure_gold_dust')

	event.add('minecraft:piglin_loved', 'gtceu:rose_gold_ingot')
	event.add('minecraft:piglin_loved', 'gtceu:long_rose_gold_rod')
	event.add('minecraft:piglin_loved', 'gtceu:rose_gold_plate')
	event.add('minecraft:piglin_loved', 'gtceu:double_rose_gold_plate')
	event.add('minecraft:piglin_loved', 'gtceu:rose_gold_double_ingot')
	event.add('minecraft:piglin_loved', 'gtceu:rose_gold_gear')
	event.add('minecraft:piglin_loved', 'gtceu:rose_gold_block')
	event.add('minecraft:piglin_loved', 'gtceu:rose_gold_small_item_pipe')
	event.add('minecraft:piglin_loved', 'gtceu:rose_gold_normal_item_pipe')
	event.add('minecraft:piglin_loved', 'gtceu:rose_gold_large_item_pipe')
	event.add('minecraft:piglin_loved', 'gtceu:rose_gold_huge_item_pipe')
	event.add('minecraft:piglin_loved', 'gtceu:rose_gold_small_restrictive_item_pipe')
	event.add('minecraft:piglin_loved', 'gtceu:rose_gold_normal_restrictive_item_pipe')
	event.add('minecraft:piglin_loved', 'gtceu:rose_gold_large_restrictive_item_pipe')
	event.add('minecraft:piglin_loved', 'gtceu:rose_gold_huge_restrictive_item_pipe')
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
		
		if (material.hasProperty(PropertyKey.ORE)) {
			let indicator = `gtceu:${material.getName()}_indicator`;

			event.add('tfg:dust_ore_indicators', indicator)
			event.add('tfc:can_be_snow_piled', indicator)
			event.add('tfc:can_be_ice_piled', indicator)

			if (material.hasProperty(PropertyKey.GEM)) {

				let bud = `gtceu:${material.getName()}_bud_indicator`;
				
				event.add('tfg:bud_ore_indicators', bud)
				event.add('tfc:can_be_snow_piled', bud)
				event.add('tfc:can_be_ice_piled', bud)

				event.add('minecraft:mineable/pickaxe', bud)
			}
		}
	})
}


const registerGTCEUFluidTags = (event) => {

	event.add('c:hidden_from_recipe_viewers', /gtceu.*potion.*/)

}