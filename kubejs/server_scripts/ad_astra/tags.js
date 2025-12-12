// priority: 0
"use strict";

const registerAdAstraFluidTags = (event) => {

	global.AD_ASTRA_DISABLED_FLUIDS.forEach(fluid => {
		event.removeAllTagsFrom(fluid)
		event.add('c:hidden_from_recipe_viewers', fluid)
	})

	// Using this to represent 'breathable air' instead of oxygen
	event.removeAllTagsFrom('ad_astra:oxygen')

	event.removeAll('ad_astra:fuel')
	event.removeAll('ad_astra:efficient_fuel')

	event.add('ad_astra:tier_1_rocket_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_2_rocket_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_3_rocket_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_4_rocket_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_5_rocket_fuel', 'gtceu:rocket_fuel')

	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:diesel')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:bio_diesel')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:cetane_boosted_diesel')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:gasoline')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:high_octane_gasoline')

	event.add('ad_astra:freezes_in_space', 'tfc:salt_water')
	event.add('ad_astra:freezes_in_space', 'tfc:spring_water')
	event.add('ad_astra:evaporates_in_space', 'tfc:salt_water')
	event.add('ad_astra:evaporates_in_space', 'tfc:spring_water')
	event.add('ad_astra:evaporates_in_space', '#tfg:alcohols')
	event.add('ad_astra:evaporates_in_space', '#tfc:milks')
	event.add('ad_astra:evaporates_in_space', '#tfc:dyes')
	event.add('ad_astra:evaporates_in_space', '#tfc:drinkables')

	global.BREATHABLE_COMPRESSED_AIRS.forEach(x => {
		event.add('ad_astra:zip_gun_propellants', x)
	})
}

const registerAdAstraItemTags = (event) => {

	global.AD_ASTRA_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	event.add('c:hidden_from_recipe_viewers', 'ad_astra:alphacene_mushroom')
	event.add('c:hidden_from_recipe_viewers', 'ad_astra:strophar_mushroom')
	
	// Deco blocks
	const DECO_BLOCKS = [ 'iron', 'steel', 'desh', 'calorite', 'ostrum' ];
	DECO_BLOCKS.forEach(block => {
		event.add(`tfg:ad_astra_${block}_blocks`, `ad_astra:${block}_factory_block`)
		event.add(`tfg:ad_astra_${block}_blocks`, `ad_astra:${block}_plating`)
		event.add(`tfg:ad_astra_${block}_blocks`, `ad_astra:${block}_panel`)
		event.add(`tfg:ad_astra_${block}_blocks`, `ad_astra:${block}_pillar`)
		event.add(`tfg:ad_astra_${block}_blocks`, `ad_astra:${block}_plateblock`)
		event.add(`tfg:ad_astra_${block}_blocks`, `ad_astra:encased_${block}_block`)
	})

	event.add('forge:storage_blocks/etrium', 'ad_astra:etrium_block')
	event.add('tfg:ad_astra_etrium_blocks', 'ad_astra:etrium_factory_block')
	event.add('tfg:ad_astra_etrium_blocks', 'ad_astra:encased_etrium_block')
	event.add('tfg:ad_astra_etrium_blocks', 'ad_astra:etrium_plateblock')
	event.add('tfg:ad_astra_etrium_blocks', 'ad_astra:etrium_panel')
		
	global.AD_ASTRA_WOOD.forEach(wood => {

		if (wood.log) {
			event.add('minecraft:logs', wood.log)
			event.add('minecraft:logs_that_burn', wood.log)
		}

		if (wood.stripped_log) {
			event.add('minecraft:logs', wood.stripped_log)
			event.add('minecraft:logs_that_burn', wood.stripped_log)
		}

		if (wood.isHardwood === true) {
			event.add('tfg:hardwood', wood.logs)
		} else {
			event.add('tfg:softwood', wood.logs)
		}
	})
}

const registerAdAstraBlockTags = (event) => {

	global.AD_ASTRA_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	global.AD_ASTRA_WOOD.forEach(wood => {

		if (wood.log) {
			event.add('minecraft:logs', wood.log)
			event.add('minecraft:logs_that_burn', wood.log)
		}

		if (wood.stripped_log) {
			event.add('minecraft:logs', wood.stripped_log)
			event.add('minecraft:logs_that_burn', wood.stripped_log)
		}
	})
}

const registerAdAstraBiomeTags = (event) => {
	event.removeAll('ad_astra:has_structure/oil_well')
}
