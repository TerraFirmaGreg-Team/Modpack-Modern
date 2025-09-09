"use strict";

const registerSNSRecipes = (event) => {
	global.SNS_DISABLED_ITEMS.forEach(item => {
		event.remove({ input: item })
		event.remove({ output: item })
	})
	
	event.remove({ mod: 'sns', type: 'tfc:heating' })
	event.remove({ output: 'sns:buckle'})
	
	event.remove({ id: 'sns:crafting/ore_sack'})
	event.remove({ id: 'sns:crafting/leather_sack'})
	event.remove({ id: 'sns:crafting/burlap_sack'})
	event.remove({ id: 'sns:crafting/seed_pouch'})
	event.remove({ id: 'sns:crafting/straw_basket'})
	event.remove({ id: 'sns:crafting/frame_pack'})
	
	event.remove({ output: 'sns:pack_frame'})
	
	event.remove({ id: 'sns:crafting/reinforced_fiber'})
	
	event.recipes.tfc.sewing(
		'sns:burlap_sack',
		[
			0, 0, 1, 0, 0, 1, 0, 0, 1,
			0, 0, 1, 1, 0, 1, 0, 1, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 1, 1, 0, 1, 0, 1, 0,
			0, 0, 1, 0, 0, 1, 0, 0, 1
		], 
		[
		-1, -1, 0, 0, 0, 0, 0, 0,
		-1, 0, 0,  -1,  -1,  -1, -1, 0,
		-1, 0, 0,  -1,  -1,  -1, -1, 0,
		-1,  -1, 0, 0, 0, 0, 0, 0
		]
	).id('sns:sewing/burlap_sack')
	
	event.recipes.tfc.sewing(
		'sns:seed_pouch',
		[
			0, 0, 1, 0, 0, 1, 0, 0, 1,
			0, 0, 1, 1, 1, 1, 1, 1, 0,
			0, 0, 0, 0, 0, 0, 0, 1, 0,
			0, 0, 1, 1, 1, 1, 1, 1, 0,
			0, 0, 1, 0, 0, 1, 0, 0, 1
		], 
		[
		-1, -1, 1, 1, 1, 1, 1, 1,
		-1, 1, 1, 0, 0, 0, 0, 1,
		-1, 1, 1, 0, 0, 0, 0, 1,
		-1,  -1, 1, 1, 1, 1, 1, 1
		]
	).id('sns:sewing/seed_pouch')

	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('sns:leather_sack', [
				'AAA',
				'BCB',
				' BE'
			], {
				A: '#tfg:burlap_fiber',
				B: 'sns:leather_strip',
				C: 'sns:unfinished_leather_sack',
				//D: 'minecraft:name_tag',
				E: '#tfc:sewing_needles'
			}
		)
	).id('sns:crafting/leather_sack')
	
	/*event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('sns:leather_sack', [
				' A ',
				'BCB',
				'DBE'
			], {
				A: '#forge:rope',
				B: 'sns:leather_strip',
				C: 'sns:unfinished_leather_sack',
				D: 'minecraft:name_tag',
				E: '#tfc:sewing_needles'
			}
		)
	).id('sns:crafting/leather_sack_coil')*/
	
	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('sns:ore_sack', [
				'AAA',
				'BCB',
				'DBE'
			], {
				A: 'sns:reinforced_fiber',
				B: '#forge:leather',
				C: 'sns:unfinished_leather_sack',
				D: 'minecraft:name_tag',
				E: '#tfc:sewing_needles'
			}
		)
	).id('sns:crafting/ore_sack')
	
	event.recipes.tfc.knapping('sns:straw_basket', 'tfg:straw', [
		" XXX ",
		"X   X",
		"X   X",
		"XXXXX",
		" XXX "
	])
		.ingredient('tfc:straw')
		.outsideSlotRequired(false)
		.id('sns:straw_knapping/straw_basket')
	
	
	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('sns:frame_pack', [
				'ABA',
				'ACA',
				'DBE'
			], {
				A: 'sns:bound_leather_strip',
				B: 'sns:reinforced_fabric',
				C: 'sns:pack_frame',
				D: 'minecraft:name_tag',
				E: '#tfc:sewing_needles'
			}
		)
	).id('sns:crafting/frame_pack')
	
	//#region helper items	
		
	event.recipes.tfc.anvil(
        'sns:buckle',
        '#forge:plates/wrought_iron',
        [
            'upset_last',
			'hit_second_last',
            'shrink_any'
        ]
    ).tier(3)
	.id('sns:anvil/buckle')
	
	event.recipes.tfc.anvil(
        '2x sns:buckle',
        '#forge:plates/steel',
        [
            'upset_last',
			'hit_second_last',
            'shrink_any'
        ]
    ).tier(4)
	.id('sns:anvil/buckle2')
	
	event.recipes.gtceu.extruder('sns:buckle')
		.itemInputs('#forge:plates/wrought_iron')
		.notConsumable('gtceu:small_pipe_extruder_mold')
		.itemOutputs('sns:buckle')
		.duration(40)
		.EUt(GTValues.VA[GTValues.LV])
		
	event.custom({
		type: 'vintageimprovements:curving',
		ingredients: [{ tag: 'forge:plates/wrought_iron' }],
		itemAsHead: 'gtceu:small_pipe_extruder_mold',
		results: [{ item: 'sns:buckle' }],
		processingTime: 50 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
	}).id('sns:vi/curving/buckle')
		
	event.recipes.gtceu.extruder('sns:buckle2')
		.itemInputs('#forge:plates/steel')
		.notConsumable('gtceu:small_pipe_extruder_mold')
		.itemOutputs('2x sns:buckle')
		.duration(80)
		.EUt(GTValues.VA[GTValues.LV])
		
	event.custom({
		type: 'vintageimprovements:curving',
		ingredients: [{ tag: 'forge:plates/steel' }],
		itemAsHead: 'gtceu:small_pipe_extruder_mold',
		results: [{ item: 'sns:buckle', count: 2 }],
		processingTime: 80 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
	}).id('sns:vi/curving/buckle2')

	event.shaped('sns:pack_frame', [
			'AAA',
			'A A',
			'AAA'
		], {
			A: '#forge:rods/any_bronze'
			
		}).id('sns:shaped/pack_frame')

	event.shaped('sns:pack_frame', [
			' A ',
			'A A',
			' A '
		], {
			A: '#forge:rods/wrought_iron'
			
		}).id('sns:shaped/pack_frame_iron')

	event.recipes.gtceu.assembler('sns:pack_frame')
		.itemInputs('4x #forge:rods/wrought_iron')
		.itemOutputs('sns:pack_frame')
		.circuit(4)
		.duration(80)
		.EUt(GTValues.VA[GTValues.LV])

	event.shaped('3x sns:reinforced_fiber', [
			'AAA',
			'BBB',
			'AAA'
		], {
			A: '#tfg:burlap_fiber',
			B: '#forge:string'
			
		}).id('sns:shaped/reinforced_fiber')
	/*
	event.shaped('2x sns:reinforced_fiber', [
			' A ',
			'BBB',
			' C '
		], {
			A: '#forge:rope',
			B: '#forge:string',
			C: '#forge:tools/knives'
			
		}).id('sns:shaped/reinforced_fiber_rope')*/
		
	event.recipes.gtceu.assembler('sns:reinforced_fiber')
		.itemInputs('2x #tfg:burlap_fiber', '#forge:string')
		.itemOutputs('sns:reinforced_fiber')
		.duration(40)
		.EUt(GTValues.VA[GTValues.LV])
		
	event.recipes.gtceu.assembler('sns:reinforced_fabric')
		.itemInputs('16x sns:reinforced_fiber')
		.itemOutputs('sns:reinforced_fabric')
		.circuit(16)
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])	
			
	generateCutterRecipe(event, '#forge:leather', '4x sns:leather_strip', 80, GTValues.VA[GTValues.LV], 'sns_leather_strip_cut')
	
	event.recipes.gtceu.assembler('sns:bound_leather_strip')
		.itemInputs('2x sns:leather_strip', 'sns:reinforced_fiber')
		.itemOutputs('sns:bound_leather_strip')
		.circuit(3)
		.duration(120)
		.EUt(GTValues.VA[GTValues.LV])
		
	event.recipes.gtceu.bender('sns:horseshoe_steel_electric_only')
		.itemInputs('#forge:rods/steel')
		.itemOutputs('sns:metal/horseshoe/steel')
		.circuit(4)
		.duration(40)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.bender('sns:horseshoe_black_steel_electric_only')
		.itemInputs('#forge:rods/black_steel')
		.itemOutputs('sns:metal/horseshoe/black_steel')
		.circuit(4)
		.duration(40)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.bender('sns:horseshoe_blue_steel_electric_only')
		.itemInputs('#forge:rods/blue_steel')
		.itemOutputs('sns:metal/horseshoe/blue_steel')
		.circuit(4)
		.duration(40)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.bender('sns:horseshoe_red_steel_electric_only')
		.itemInputs('#forge:rods/red_steel')
		.itemOutputs('sns:metal/horseshoe/red_steel')
		.circuit(4)
		.duration(40)
		.EUt(GTValues.VA[GTValues.LV])
	
}
