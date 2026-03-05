// priority: 0
"use strict";

const registerCreateExtraGaugesRecipes = (event) => {
	if (Platform.isLoaded("extra_gauges")) {
		event.remove({ mod: 'extra_gauges' });

		event.shaped(
			Item.of('extra_gauges:logic_gauge'),
			[
				'AEA',
				'ECE',
				' F '
			],
			{
				A: 'minecraft:redstone_torch',
				C: 'create:factory_gauge',
				E: 'gtceu:fine_red_alloy_wire',
				F: 'create:electron_tube'
			}
		)

		event.shaped(
			Item.of('extra_gauges:integer_gauge'),
			[
				'ADA',
				'ECE',
				' B '
			],
			{
				A: 'minecraft:redstone_torch',
				B: 'minecraft:quartz',
				C: 'create:factory_gauge',
				D: 'minecraft:redstone',
				E: 'gtceu:fine_red_alloy_wire'
			}
		)
		
		event.shaped(
			Item.of('extra_gauges:integer_gauge'),
			[
				'ADA',
				'ECE',
				' B '
			],
			{
				A: 'minecraft:redstone_torch',
				B: 'gtceu:quartzite_gem',
				C: 'create:factory_gauge',
				D: 'minecraft:redstone',
				E: 'gtceu:fine_red_alloy_wire'
			}
		)
		
		event.shaped(
			Item.of('extra_gauges:integer_gauge'),
			[
				'ADA',
				'ECE',
				' B '
			],
			{
				A: 'minecraft:redstone_torch',
				B: '#forge:gems/certus_quartz',
				C: 'create:factory_gauge',
				D: 'minecraft:redstone',
				E: 'gtceu:fine_red_alloy_wire'
			}
		)
		
		event.shaped(
			Item.of('extra_gauges:comparator_gauge'),
			[
				' G ',
				'ECE',
				' E '
			],
			{
				C: 'create:factory_gauge',
				E: 'gtceu:fine_red_alloy_wire',
				G: 'minecraft:comparator'
			}
		)
		
		event.shaped(
			Item.of('extra_gauges:counter_gauge', 2),
			[
				'FHF',
				'ECE',
				' E '
			],
			{
				C: 'create:factory_gauge',
				E: 'gtceu:fine_red_alloy_wire',
				F: 'create:electron_tube',
				H: 'create:precision_mechanism'
			}
		)
		

		event.shapeless(
			Item.of('extra_gauges:passive_gauge'),
			['create:factory_gauge','#forge:tools/hammers']
		)
		
		event.recipes.gtceu.assembler('tfg:passive_gauge_percussive_recalibration')
			.itemInputs('create:factory_gauge')
			.itemOutputs('extra_gauges:passive_gauge')
			.duration(10)
			.EUt(GTValues.VA[GTValues.ULV])

		event.shapeless(
			Item.of('create:factory_gauge'),
			['extra_gauges:passive_gauge','#forge:tools/screwdrivers']
		)

		event.recipes.gtceu.assembler('tfg:passive_gauge_repair')
			.itemInputs('extra_gauges:passive_gauge')
			.itemOutputs('create:factory_gauge')
			.duration(200)
			.EUt(GTValues.VA[GTValues.ULV])
		
		event.shaped(
			Item.of('extra_gauges:string_gauge'),
			[
				'FQF',
				'EJE',
				' E '
			],
			{
				E: 'gtceu:fine_red_alloy_wire',
				F: 'create:electron_tube',
				J: 'extra_gauges:integer_gauge',
				Q: 'minecraft:name_tag'
			}
		)
		event.shaped(
			Item.of('extra_gauges:integer_selector', 2),
			[
				' E ',
				'MLM',
				' E '
			],
			{
				E: 'gtceu:fine_red_alloy_wire',
				L: 'create:analog_lever',
				M: 'greate:rose_quartz_plate'
			}
		)
		
		event.shapeless(
			Item.of('extra_gauges:display_collector'),
			['create:display_link']
		)
		
		event.shapeless(
			Item.of('create:display_link'),
			['extra_gauges:display_collector']
		)
	}
}
