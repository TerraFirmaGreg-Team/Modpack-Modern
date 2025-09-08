// priority: 0
"use strict";

TFCEvents.worldgenData(event => {

	event.forest('tfg:mars_forest', '#tfg:mars_forest_entries',
		[
			// https://notenoughmail.github.io/kubejs_tfc/1.20.1/worldgen/#forest-types-map-entry
			// type, treeCount, groundcoverCount, perChunkChance, bushCount, hasSpoilerOldGrowth, allowsOldGrowth, leafPileCount

			event.forestTypesMapEntry('none',       [0, 1],  1,  0.1,  0, false, false, 0),
			event.forestTypesMapEntry('sparse',     [1, 3],  10, 0.3,  1, false, false, [0, 1]),
			event.forestTypesMapEntry('edge',       [3, 5],  20, 0.8,  1, true,  false, [1, 2]),
			event.forestTypesMapEntry('normal',     [6, 8],  35, 1,    2, true,  false, [2, 3]),
			event.forestTypesMapEntry('old_growth', [8, 12], 50, 1,    2, true,  true,  [3, 4])
		],
		false, 
		placement => {}
	)

	event.forestEntry('tfg:mars/crimson_forest_entry',
		climate => {
			climate.maxTemp(-20)
			climate.minTemp(-65)
			climate.minRain(-10)
		},
		'beneath:wood/wood/crimson', // bush log
		'beneath:wood/leaves/crimson', // bush leaves
		'beneath:wood/log/crimson', // fallen log
		'beneath:wood/fallen_leaves/crimson', // fallen leaves
		[ // ground cover
			'minecraft:crimson_fungus',
			'beneath:wood/fallen_leaves/crimson',
			'beneath:wood/leaves/crimson',
			'beneath:wood/twig/crimson',
			'tfg:groundcover/wraptor_feather',
			'tfg:groundcover/glider_feather'
		],
		'tfg:mars/tree/crimson', // tree feature
		'tfg:mars/tree/crimson_dead', // dead tree feature
		'tfg:mars/tree/crimson', // old growth tree feature
		null, // krummholz
		null, // chance for old growth
		null, // chance for old growth in non-old growth forests
		null, // chance for a fallen tree
		null, // chance for a dead tree
		null, // true to spawn on ocean floor, false for world surface
		placement => {}
	)

	event.forestEntry('tfg:mars/warped_forest_entry',
		climate => {
			climate.maxTemp(-20)
			climate.minTemp(-65)
			climate.minRain(-20)
			climate.maxRain(0)
		},
		'beneath:wood/wood/warped',
		'beneath:wood/leaves/warped',
		'beneath:wood/log/warped',
		'beneath:wood/fallen_leaves/warped',
		[
			'minecraft:warped_fungus',
			'beneath:wood/fallen_leaves/warped',
			'beneath:wood/leaves/warped',
			'beneath:wood/twig/warped',
			'tfg:groundcover/wraptor_feather',
			'tfg:groundcover/glider_feather'
		],
		'tfg:mars/tree/warped',
		'tfg:mars/tree/warped_dead',
		'tfg:mars/tree/warped',
		null, null, null, null, null, null, 
		placement => {}
	)

	event.forestEntry('tfg:mars/aeronos_forest_entry',
		climate => {
			climate.maxTemp(-30)
			climate.minTemp(-85)
			climate.minRain(-15)
		},
		'ad_astra:aeronos_stem',
		'ad_astra:aeronos_cap',
		'betterend:cave_bush',
		'betterend:cave_bush_fallen',
		[
			"ad_astra:aeronos_mushroom",
			'betterend:cave_bush',
			'betterend:cave_bush_fallen',
			'tfg:groundcover/wraptor_feather',
			'tfg:groundcover/glider_feather',
			'tfg:groundcover/aeronos_stick'
		],
		'tfg:mars/tree/aeronos',
		'tfg:mars/tree/aeronos_dead',
		'tfg:mars/tree/aeronos_old_growth',
		null, null, null, null, null, null,
		placement => {}
	)

	event.forestEntry('tfg:mars/strophar_forest_entry',
		climate => {
			climate.maxTemp(-20)
			climate.minTemp(-80)
			climate.maxRain(5)
		},
		'ad_astra:strophar_stem',
		'ad_astra:strophar_cap',
		'betterend:lucernia_leaves',
		'betterend:lucernia_leaves_fallen',
		[
			"ad_astra:strophar_mushroom",
			'betterend:lucernia_leaves',
			'betterend:lucernia_leaves_fallen',
			'tfg:groundcover/wraptor_feather',
			'tfg:groundcover/glider_feather',
			'tfg:groundcover/strophar_stick'
		],
		'tfg:mars/tree/strophar',
		'tfg:mars/tree/strophar_dead',
		'tfg:mars/tree/strophar_old_growth',
		null, null, null, null, null, null,
		placement => {}
	)

	event.forestEntry('tfg:mars/alphacene_forest_entry',
		climate => {
			climate.minTemp(-40)
		},
		'minecraft:mushroom_stem',
		'species:alphacene_mushroom_block',
		'minecraft:mushroom_stem',
		null,
		[
			"species:alphacene_mushroom",
			'tfg:groundcover/wraptor_feather',
			'tfg:groundcover/glider_feather',
			'tfg:groundcover/alphacene_stick',
			'tfc:groundcover/stick'
		],
		'species:alphacene_mushroom',
		'tfg:mars/tree/alphacene_dead',
		'species:alphacene_mushroom',
		null, null, null, null, null, null,
		placement => {}
	)

	// TODO: glacian
})

function registerTFGForestConfiguredFeatures(event) {
	event.add('tfg:mars_forest_entries', 'tfg:mars/crimson_forest_entry')
	event.add('tfg:mars_forest_entries', 'tfg:mars/warped_forest_entry')
	event.add('tfg:mars_forest_entries', 'tfg:mars/aeronos_forest_entry')
	event.add('tfg:mars_forest_entries', 'tfg:mars/strophar_forest_entry')
	event.add('tfg:mars_forest_entries', 'tfg:mars/alphacene_forest_entry')
}