// priority: 0
"use strict";

TFCEvents.worldgenData(event => {

	event.forest('tfg:mars_forest', '#tfg:mars_forest_entries',
		[
			// https://notenoughmail.github.io/kubejs_tfc/1.20.1/worldgen/#forest-types-map-entry
			// type, treeCount, groundcoverCount, perChunkChance, bushCount, hasSpoilerOldGrowth, allowsOldGrowth, leafPileCount

			event.forestTypesMapEntry('none',       [0, 1],   1,  0.1,  0, false, false, 0),
			event.forestTypesMapEntry('sparse',     [0, 3],   10, 0.3,  1, false, false, [0, 1]),
			event.forestTypesMapEntry('edge',       [2, 5],   20, 0.8,  2, true,  false, [1, 2]),
			event.forestTypesMapEntry('normal',     [7, 10],  35, 1,    3, true,  false, [4, 6]),
			event.forestTypesMapEntry('old_growth', [10, 13], 50, 1,    4, true,  true,  [5, 8])
		],
		false, 
		placement => {}
	)

	event.forestEntry('tfg:mars/crimson_forest_entry',
		climate => {
			climate.maxTemp(-13)
			climate.minTemp(-109)
			climate.minRain(-12)
			climate.fuzzy(true)
		},
		'beneath:wood/wood/crimson', // bush log
		'beneath:wood/leaves/crimson', // bush leaves
		'beneath:wood/log/crimson', // fallen log
		'beneath:wood/fallen_leaves/crimson', // fallen leaves
		[ // ground cover
			'minecraft:crimson_fungus',
			'beneath:wood/fallen_leaves/crimson',
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
		null, // false (default) to spawn with the ocean floor heightmap, true for world surface
		placement => {}
	)

	event.forestEntry('tfg:mars/warped_forest_entry',
		climate => {
			climate.maxTemp(-13)
			climate.minTemp(-109)
			climate.maxRain(0)
			climate.fuzzy(true)
		},
		'beneath:wood/wood/warped',
		'beneath:wood/leaves/warped',
		'beneath:wood/log/warped',
		'beneath:wood/fallen_leaves/warped',
		[
			'minecraft:warped_fungus',
			'beneath:wood/fallen_leaves/warped',
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
			climate.minTemp(-100)
			climate.minRain(-14)
			climate.fuzzy(true)
		},
		'ad_astra:aeronos_stem',
		'ad_astra:aeronos_cap',
		null,
		null,
		[
			"ad_astra:aeronos_mushroom",
			'tfg:groundcover/aeronos_stick',
			'tfg:groundcover/wraptor_feather',
			'tfg:groundcover/glider_feather'
		],
		'tfg:mars/tree/aeronos',
		'tfg:mars/tree/aeronos_dead',
		'tfg:mars/tree/aeronos_old_growth',
		null, null, null, null, null, null,
		placement => {}
	)

	event.forestEntry('tfg:mars/strophar_forest_entry',
		climate => {
			climate.minTemp(-100)
			climate.maxRain(2)
			climate.fuzzy(true)
		},
		'ad_astra:strophar_stem',
		'ad_astra:strophar_cap',
		null,
		null,
		[
			"ad_astra:strophar_mushroom",
			'tfg:groundcover/strophar_stick',
			'tfg:groundcover/wraptor_feather',
			'tfg:groundcover/glider_feather'
		],
		'tfg:mars/tree/strophar',
		'tfg:mars/tree/strophar_dead',
		'tfg:mars/tree/strophar_old_growth',
		null, null, null, null, null, null,
		placement => {}
	)

	event.forestEntry('tfg:mars/alphacene_forest_entry',
		climate => {
			climate.minTemp(-85)
			climate.fuzzy(true)
		},
		null,
		null,
		null,
		null,
		[
			"species:alphacene_mushroom",
			'tfg:groundcover/alphacene_stick',
			'tfg:groundcover/wraptor_feather',
			'tfg:groundcover/glider_feather'
		],
		'species:alphacene_mushroom',
		'tfg:mars/tree/alphacene_dead',
		'species:alphacene_mushroom',
		null, null, null, null, null, null,
		placement => {}
	)

	event.forestEntry('tfg:mars/glacian_forest_entry',
		climate => {
			climate.maxTemp(-107)
			climate.fuzzy(true)
		},
		'tfg:glacian_wood_stripped',
		'tfg:glacian_leaves',
		null,
		null,
		[
			"tfg:glacian_leaves_fallen",
			'tfg:groundcover/glacian_stick'
		],
		'tfg:mars/tree/glacian',
		'tfg:mars/tree/glacian_dead',
		'tfg:mars/tree/glacian',
		null, null, null, null, null, null,
		placement => {}
	)
})

function registerTFGForestConfiguredFeatures(event) {
	event.add('tfg:mars_forest_entries', 'tfg:mars/crimson_forest_entry')
	event.add('tfg:mars_forest_entries', 'tfg:mars/warped_forest_entry')
	event.add('tfg:mars_forest_entries', 'tfg:mars/aeronos_forest_entry')
	event.add('tfg:mars_forest_entries', 'tfg:mars/strophar_forest_entry')
	event.add('tfg:mars_forest_entries', 'tfg:mars/alphacene_forest_entry')
	event.add('tfg:mars_forest_entries', 'tfg:mars/glacian_forest_entry')
}