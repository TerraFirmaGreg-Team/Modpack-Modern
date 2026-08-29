// priority: 0
"use strict";

function registerCreateSoundOfSteamRecipes(event) {
	if (Platform.isLoaded("pipeorgans")) {
		event.remove({ mod: 'pipeorgans' })

		//Piccolo
		event.shaped('pipeorgans:piccolo', [
			'ABC',
			' D ',
			' E '
		], {
			A: '#forge:tools/saws',
			B: '#tfg:hardwood',
			C: '#forge:tools/hammers',
			D: '#forge:ingots/wrought_iron',
			E: 'pipeorgans:base'
		}).id('tfg:shaped/piccolo')

		//Diapason
		event.remove({ id: 'pipeorgans:diapason' })

		event.shaped('pipeorgans:diapason', [
			'ABC',
			' B ',
			' D '
		], {
			A: '#forge:tools/saws',
			B: '#forge:ingots/zinc',
			C: '#forge:tools/hammers',
			D: 'pipeorgans:base'
		}).id('tfg:shaped/diapason')

		//Trompette
		event.shaped('pipeorgans:trompette', [
			'ABC',
			' D ',
			' E '
		], {
			A: '#forge:tools/saws',
			B: '#forge:sheets/brass',
			C: '#forge:tools/hammers',
			D: 'pipeorgans:brass_boot',
			E: 'pipeorgans:base'
		}).id('tfg:shaped/trompette')

		//Gedeckt
		event.shaped('pipeorgans:gedeckt', [
			'ABC',
			' D ',
			' E '
		], {
			A: '#forge:tools/saws',
			B: '#tfc:lumber',
			C: '#forge:tools/hammers',
			D: '#minecraft:wooden_slabs',
			E: 'pipeorgans:base'
		}).id('tfg:shaped/gedeckt')

		//Gamba
		event.shaped('pipeorgans:gamba', [
			'ABC',
			' D ',
			' E '
		], {
			A: '#forge:tools/saws',
			B: '#forge:ingots/wrought_iron',
			C: '#forge:tools/hammers',
			D: '#forge:plates/wrought_iron',
			E: 'pipeorgans:base'
		}).id('tfg:shaped/gamba')

		//Nasard
		event.shaped('pipeorgans:nasard', [
			'ABC',
			' B ',
			' D '
		], {
			A: '#forge:tools/saws',
			B: '#forge:ingots/copper',
			C: '#forge:tools/hammers',
			D: 'pipeorgans:base'
		}).id('tfg:shaped/nasard')

		//Subbass
		event.shaped('pipeorgans:subbass', [
			'ABC',
			' D ',
			' E '
		], {
			A: '#forge:tools/saws',
			B: '#minecraft:planks',
			C: '#forge:tools/hammers',
			D: '#minecraft:wooden_slabs',
			E: 'pipeorgans:base'
		}).id('tfg:shaped/subbass')

		//Posaune FIX
		event.shaped('pipeorgans:posaune', [
			'ABC',
			' D ',
			' E '
		], {
			A: '#forge:tools/saws',
			B: '#forge:sheets/brass',
			C: '#forge:tools/hammers',
			D: 'pipeorgans:dark_oak_boot',
			E: 'pipeorgans:base'
		}).id('tfg:shaped/posaune')

		//Humana
		event.shaped('pipeorgans:vox_humana', [
			'ABC',
			' D ',
			' E '
		], {
			A: '#forge:tools/saws',
			B: '#forge:sheets/brass',
			C: '#forge:tools/hammers',
			D: 'pipeorgans:copper_boot',
			E: 'pipeorgans:base'
		}).id('tfg:shaped/vox_humana')

		//Prestant
		event.shaped('pipeorgans:prestant', [
			'ABC',
			' B ',
			' D '
		], {
			A: '#forge:tools/saws',
			B: '#forge:ingots/tin_alloy',
			C: '#forge:tools/hammers',
			D: 'pipeorgans:base'
		}).id('tfg:shaped/prestant')

		//English Horn
		event.shaped('pipeorgans:english_horn', [
			'ABC',
			' D ',
			' E '
		], {
			A: '#forge:tools/saws',
			B: '#forge:plates/wrought_iron',
			C: '#forge:tools/hammers',
			D: 'pipeorgans:iron_boot',
      E: 'pipeorgans:base'
		}).id('tfg:shaped/english_horn')

    //Krummhorn
    event.shaped('pipeorgans:krummhorn',[
      'ABC',
      ' D ',
      ' E '
    ], {
			A: '#forge:tools/saws',
			B: '#forge:sheets/copper',
			C: '#forge:tools/hammers',
			D: 'pipeorgans:reinforced_copper_boot',
      E: 'pipeorgans:base'
    }).id('tfg:shaped/krummhorn')

    //Rohrflote
    event.shaped('pipeorgans:rohrflote',[
      'ABC',
      ' D ',
      ' E '
    ], {
			A: '#forge:tools/saws',
			B: '#forge:plates/wrought_iron',
			C: '#forge:tools/hammers',
			D: '#forge:ingots/wrought_iron',
      E: 'pipeorgans:base'
    }).id('tfg:shaped/rohrflote')

		//Tierce
		event.shaped('pipeorgans:tierce', [
			'ABC',
			' B ',
			' D '
		], {
			A: '#forge:tools/saws',
			B: '#forge:ingots/gold',
			C: '#forge:tools/hammers',
			D: 'pipeorgans:base'
		}).id('tfg:shaped/tierce')

  	//Bassoon
		event.shaped('pipeorgans:bassoon', [
			'ABC',
			' D ',
			' E '
		], {
			A: '#forge:tools/saws',
			B: '#forge:ingots/gold',
			C: '#forge:tools/hammers',
      D: 'pipeorgans:brassbound_boot',
			E: 'pipeorgans:base'
		}).id('tfg:shaped/bassoon')

    //Haunted Whistle
    event.shapeless('pipeorgans:haunted_whistle', [
        'create:steam_whistle',
        'minecraft:cobweb'
    ]
    ).id('tfg:shapeless/haunted_whistle');

    //Viola
    event.remove({ id: 'greate:splashing/integration/pipeorgans/washing/vox_celeste_washing' })
    event.shaped('pipeorgans:viola', [
			'ABC',
			' B ',
			' D '
		], {
			A: '#forge:tools/saws',
			B: '#forge:ingots/iron',
			C: '#forge:tools/hammers',
			D: 'pipeorgans:base'
		}).id('tfg:shaped/viola')

    //Vox Celeste
    event.shaped('pipeorgans:vox_celeste', [
			'ABC',
			' D ',
			' E '
		], {
			A: '#forge:tools/saws',
			B: '#forge:ingots/iron',
			C: '#forge:tools/hammers',
      D: '#forge:sheets/iron',
			E: 'pipeorgans:base'
		}).id('tfg:shaped/vox_celeste')

    //Open Wood
    event.shaped('pipeorgans:open_wood', [
			'ABC',
			' B ',
			' D '
		], {
			A: '#forge:tools/saws',
			B: '#tfc:lumber',
			C: '#forge:tools/hammers',
			D: 'pipeorgans:base'
		}).id('tfg:shaped/open_wood')

    //Hohlflute
    event.shaped('pipeorgans:hohlflute', [
			'ABC',
			' D ',
			' E '
		], {
			A: '#forge:tools/saws',
			B: '#tfc:lumber',
			C: '#forge:tools/hammers',
      D: '#minecraft:planks',
			E: 'pipeorgans:base'
		}).id('tfg:shaped/hohlflute')

		//Pipe Base
		event.recipes.tfc.welding('pipeorgans:base', 'create:fluid_pipe', '#forge:double_plates/copper', 1)

		//Windchest Controller
		event.shaped('pipeorgans:windchest_master', [
			'ABC',
			'DEC',
			'FBC'
		], {
			A: '#forge:tools/saws',
			B: '#minecraft:planks',
			C: '#forge:ingots/zinc',
			D: '#minecraft:wooden_slabs',
			E: '#forge:dusts/redstone',
			F: '#forge:tools/hammers'
		}).id('tfg:shaped/windchest_master')

		//Windchest
		event.shaped('6x pipeorgans:windchest', [
			'AB ',
			'CD ',
			'EF '
		], {
			A: '#forge:tools/saws',
			B: 'create:fluid_pipe',
			C: '#minecraft:wooden_slabs',
			D: '#forge:dusts/redstone',
			E: '#forge:tools/hammers',
			F: '#minecraft:planks'
		}).id('tfg:shaped/windchest')

		//Brass Boot
		event.recipes.tfc.anvil('pipeorgans:brass_boot', '#forge:double_plates/brass', ['bend_last', 'shrink_second_last', 'shrink_third_last'])
			.tier(3)
			.id('tfc:anvil/brass_boot')

		//Dark Oak Boot
		event.shaped('pipeorgans:dark_oak_boot', [
			'ABA',
			'ACA',
			'AAA'
		], {
			A: '#minecraft:planks',
			B: '#forge:tools/saws',
			C: '#forge:tools/hammers'
		}).id('tfg:shaped/dark_oak_boot')

		//Copper Boot
		event.recipes.tfc.anvil('pipeorgans:copper_boot', '#forge:double_plates/copper', ['bend_last', 'shrink_second_last', 'shrink_third_last'])
			.tier(3)
			.id('tfc:anvil/copper_boot')

    //Iron Boot
		event.recipes.tfc.anvil('pipeorgans:iron_boot', '#forge:double_plates/wrought_iron', ['bend_last', 'shrink_second_last', 'shrink_third_last'])
			.tier(3)
			.id('tfc:anvil/iron_boot')

    //Reinforced Copper Boot
		event.recipes.tfc.welding('pipeorgans:reinforced_copper_boot', 'pipeorgans:copper_boot', '#forge:double_plates/wrought_iron', 1)

    //Brassbound Boot
    event.shapeless('pipeorgans:brassbound_boot', [
        'pipeorgans:dark_oak_boot',
        '#forge:sheets/brass'
    ]
    ).id('tfg:shapeless/brassbound_boot')

		//Keyboard Relay
		event.shaped('pipeorgans:keyboard_relay', [
			'ABC',
			'DEC',
			'FGC'
		], {
			A: 'create:transmitter',
			B: '#forge:dusts/redstone',
			C: '#minecraft:buttons',
			D: '#forge:ingots/wrought_iron',
			E: 'create:precision_mechanism',
			F: '#forge:tools/screwdrivers',
			G: 'create:brass_casing'
		}).id('tfg:shaped/keyboard_relay')

    //Tracker Bar
    event.shaped('pipeorgans:tracker_bar', [
			'AAA',
			'BCB',
			'DEF'
		], {
			A: '#forge:bolts/brass',
			B: 'create:precision_mechanism',
			C: 'create:brass_casing',
			D: '#forge:tools/screwdrivers',
			E: '#forge:paper',
			F: 'create:transmitter',
		}).id('tfg:shaped/tracker_bar')

    //Roll Authoring Table
    event.shaped('pipeorgans:roll_puncher', [
			'AB ',
			'CCC',
			'DE '
		], {
			A: '#forge:feathers',
			B: '#forge:dyes/black',
			C: '#minecraft:wooden_slabs',
			D: '#forge:tools/saws',
			E: '#minecraft:logs',
		}).id('tfg:shaped/roll_puncher')

    //Note Link
    event.shapeless('pipeorgans:note_link', [
      'create:redstone_link',
      'pipeorgans:tuning_wire'
    ]
    ).id('tfg:shapeless/note_link')
	}
}
