// priority: 0
"use strict";

function registerTFCTextileRecipes(event) {

	// Cloth

	const cloths = [
		{ name: "phantom_silk", material: "tfg:phantom_silk" },
		{ name: "linen", material: "tfg:linen_cloth" },
		{ name: "cotton", material: "tfc_textile:cotton_cloth" }
	]

	cloths.forEach(cloth => {

		event.shaped(`tfc_textile:${cloth.name}_hat`, [
			"AAA",
			"A A",
			"   "
		], {
			A: cloth.material
		}).id(`tfg:shaped/${cloth.name}_hat`)

		event.shaped(`tfc_textile:${cloth.name}_shirt`, [
			"A A",
			"AAA",
			"AAA"
		], {
			A: cloth.material
		}).id(`tfg:shaped/${cloth.name}_shirt`)

		event.shaped(`tfc_textile:${cloth.name}_pants`, [
			"AAA",
			"A A",
			"A A"
		], {
			A: cloth.material
		}).id(`tfg:shaped/${cloth.name}_pants`)

		event.shaped(`tfc_textile:${cloth.name}_socks`, [
			"   ",
			"A A",
			"A A"
		], {
			A: cloth.material
		}).id(`tfg:shaped/${cloth.name}_socks`)
	})

	// Animal clothes

	// Cooling

	const cooling_hides = [
		{ animal: "crocodile", material: "tfc_textile:crocodile_leather" },
		{ animal: "lion", material: "tfc_textile:lion_fur" },
		{ animal: "tiger", material: "tfc_textile:tiger_fur" }
	]

	cooling_hides.forEach(hide => {
		event.shaped(`tfc_textile:${hide.animal}_hat`, [
			'ABA',
			'ACA',
			'   '
		], {
			A: '#forge:string',
			B: hide.material,
			C: ['tfcambiental:burlap_cowl', 'tfcambiental:silk_cowl', 'tfc_textile:linen_hat']
		}).id(`tfg:shaped/${hide.animal}_hat`)

		event.shaped(`tfc_textile:${hide.animal}_shirt`, [
			'A A',
			'ACA',
			'ABA'
		], {
			A: '#forge:string',
			B: hide.material,
			C: ['tfcambiental:burlap_shirt', 'tfcambiental:silk_shirt', 'tfc_textile:linen_shirt']
		}).id(`tfg:shaped/${hide.animal}_shirt`)

		event.shaped(`tfc_textile:${hide.animal}_pants`, [
			'ABA',
			'ACA',
			'A A'
		], {
			A: '#forge:string',
			B: hide.material,
			C: ['tfcambiental:burlap_pants', 'tfcambiental:silk_pants', 'tfc_textile:linen_pants']
		}).id(`tfg:shaped/${hide.animal}_pants`)

		event.shaped(`tfc_textile:${hide.animal}_boots`, [
			'ACA',
			'ABA',
			'   '
		], {
			A: '#forge:string',
			B: hide.material,
			C: ['tfcambiental:burlap_shoes', 'tfcambiental:silk_shoes', 'tfc_textile:linen_socks']
		}).id(`tfg:shaped/${hide.animal}_boots`)
	})

	// Warming

	const warming_hides = [
		"direwolf",
		"panther",
		"cougar",
		"black_bear",
		"grizzly_bear"
	];

	warming_hides.forEach(hide => {
		event.shaped(`tfc_textile:${hide}_hat`, [
			'ABA',
			'ACA',
			'   '
		], {
			A: '#forge:string',
			B: `tfc_textile:${hide}_fur`,
			C: ['tfcambiental:wool_hat', 'tfc_textile:cotton_hat']
		}).id(`tfg:shaped/${hide}_hat`)

		event.shaped(`tfc_textile:${hide}_shirt`, [
			'A A',
			'ACA',
			'ABA'
		], {
			A: '#forge:string',
			B: `tfc_textile:${hide}_fur`,
			C: ['tfcambiental:wool_sweater', 'tfc_textile:cotton_shirt']
		}).id(`tfg:shaped/${hide}_shirt`)

		event.shaped(`tfc_textile:${hide}_pants`, [
			'ABA',
			'ACA',
			'A A'
		], {
			A: '#forge:string',
			B: `tfc_textile:${hide}_fur`,
			C: ['tfcambiental:wool_pants', 'tfc_textile:cotton_pants']
		}).id(`tfg:shaped/${hide}_pants`)

		event.shaped(`tfc_textile:${hide}_boots`, [
			'ACA',
			'ABA',
			'   '
		], {
			A: '#forge:string',
			B: `tfc_textile:${hide}_fur`,
			C: ['tfcambiental:wool_boots', 'tfc_textile:cotton_socks']
		}).id(`tfg:shaped/${hide}_boots`)
	})

	const very_warming_hides = [
		"caribou",
		"sabertooth",
		"polar_bear"
	];

	very_warming_hides.forEach(hide => {
		event.shaped(`tfc_textile:${hide}_hat`, [
			'ABA',
			'ACA',
			'DDD'
		], {
			A: '#forge:string',
			B: `tfc_textile:${hide}_fur`,
			C: ['tfcambiental:wool_hat', 'tfc_textile:cotton_hat'],
			D: ['minecraft:feather', 'tfg:wraptor_wool', 'wan_ancient_beasts:glider_feather']
		}).id(`tfg:shaped/${hide}_hat`)

		event.shaped(`tfc_textile:${hide}_shirt`, [
			'ADA',
			'DCD',
			'ABA'
		], {
			A: '#forge:string',
			B: `tfc_textile:${hide}_fur`,
			C: ['tfcambiental:wool_sweater', 'tfc_textile:cotton_shirt'],
			D: ['minecraft:feather', 'tfg:wraptor_wool', 'wan_ancient_beasts:glider_feather']
		}).id(`tfg:shaped/${hide}_shirt`)

		event.shaped(`tfc_textile:${hide}_pants`, [
			'ABA',
			'DCD',
			'ADA'
		], {
			A: '#forge:string',
			B: `tfc_textile:${hide}_fur`,
			C: ['tfcambiental:wool_pants', 'tfc_textile:cotton_pants'],
			D: ['minecraft:feather', 'tfg:wraptor_wool', 'wan_ancient_beasts:glider_feather']
		}).id(`tfg:shaped/${hide}_pants`)

		event.shaped(`tfc_textile:${hide}_boots`, [
			'ACA',
			'ABA',
			'DDD'
		], {
			A: '#forge:string',
			B: `tfc_textile:${hide}_fur`,
			C: ['tfcambiental:wool_boots', 'tfc_textile:cotton_socks'],
			D: ['minecraft:feather', 'tfg:wraptor_wool', 'wan_ancient_beasts:glider_feather']
		}).id(`tfg:shaped/${hide}_boots`)
	})


	// Red elk

	event.shaped(`tfc_textile:red_elk_hat`, [
		'ABA',
		'ACA',
		' D '
	], {
		A: '#forge:string',
		B: 'beneath:cursed_hide',
		C: 'tfc_textile:phantom_silk_hat',
		D: ['species:werefang', 'species:ghoul_tongue']
	}).id(`tfg:shaped/red_elk_hat`)

	event.shaped(`tfc_textile:red_elk_shirt`, [
		'ADA',
		'ACA',
		'ABA'
	], {
		A: '#forge:string',
		B: 'beneath:cursed_hide',
		C: 'tfc_textile:phantom_silk_shirt',
		D: ['species:werefang', 'species:ghoul_tongue']
	}).id(`tfg:shaped/red_elk_shirt`)

	event.shaped(`tfc_textile:red_elk_pants`, [
		'ABA',
		'ACA',
		'ADA'
	], {
		A: '#forge:string',
		B: 'beneath:cursed_hide',
		C: 'tfc_textile:phantom_silk_pants',
		D: ['species:werefang', 'species:ghoul_tongue']
	}).id(`tfg:shaped/red_elk_pants`)

	event.shaped(`tfc_textile:red_elk_boots`, [
		'ACA',
		'ABA',
		' D '
	], {
		A: '#forge:string',
		B: 'beneath:cursed_hide',
		C: 'tfc_textile:phantom_silk_socks',
		D: ['species:werefang', 'species:ghoul_tongue']
	}).id(`tfg:shaped/red_elk_boots`)


	// Primitive

	event.shapeless('tfc:large_raw_hide', ['#tfc_textile:animal_furs', '#forge:tools/knives'])
	event.shapeless('tfc:medium_raw_hide', ['species:ghoul_tongue', '#forge:tools/knives'])

	event.shapeless('4x tfc_textile:primitive_insulation', ['tfc:large_raw_hide', '3x tfc:straw'])
		.id('tfg:shapeless/primitive_insulation_large')

	event.shapeless('2x tfc_textile:primitive_insulation', ['tfc:medium_raw_hide', '3x tfc:straw'])
		.id('tfg:shapeless/primitive_insulation_medium')

	event.shapeless('tfc_textile:primitive_insulation', ['tfc:small_raw_hide', '3x tfc:straw'])
		.id('tfg:shapeless/primitive_insulation_small')

	event.recipes.tfc.knapping("tfc_textile:raw_hat", "tfc_textile:raw_hide", [
		"XXXXX",
		"X   X",
		"X   X"
	]).outsideSlotRequired(false).id("tfg:knapping/raw_hat")

	event.recipes.tfc.knapping("tfc_textile:raw_shirt", "tfc_textile:raw_hide", [
		"X   X",
		"XXXXX",
		"XXXXX",
		"XXXXX",
		"XXXXX"
	]).id("tfg:knapping/raw_shirt")

	event.recipes.tfc.knapping("tfc_textile:raw_pants", "tfc_textile:raw_hide", [
		"XXXXX",
		"XXXXX",
		"XX XX",
		"XX XX",
		"XX XX"
	]).id("tfg:knapping/raw_pants")

	event.recipes.tfc.knapping("tfc_textile:raw_socks", "tfc_textile:raw_hide", [
		"XX   ",
		"XX   ",
		"XX   ",
		"XXXX ",
		"XXXXX"
	]).id("tfg:knapping/raw_socks")
}