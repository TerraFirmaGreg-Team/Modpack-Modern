// priority: 0
"use strict";

function registerDiggerHelmetRecipes(event) {

	event.remove({ id: 'diggerhelmet:wool_lining' })
	event.remove({ id: 'diggerhelmet:silk_lining' })
	event.remove({ id: 'diggerhelmet:auto_drink_modifier' })

	event.recipes.gtceu.assembler('tfg:mining_speed_modifier')
		.itemInputs('#forge:plates/blue_steel', '#gtceu:circuits/lv', '2x tfg:haste_pill')
		.inputFluids(Fluid.of('tfcagedalcohol:aged_whiskey', 1000))
		.itemOutputs('diggerhelmet:mining_speed_modifier')
		.EUt(16)
		.duration(400)

	event.shaped('diggerhelmet:auto_drink_modifier', [
		' A ',
		'BCB',
		'DCD'
	], {
		A: '#tfc:glass_bottles',
		B: '#forge:string',
		C: 'minecraft:bamboo',
		D: 'tfc:glue'
	}).id('tfg:shaped/auto_drink_modifier_bamboo')

	event.shaped('diggerhelmet:auto_drink_modifier', [
		' A ',
		'BCB',
		' C '
	], {
		A: '#tfc:glass_bottles',
		B: '#forge:screws/wrought_iron',
		C: '#forge:foils/rubber'
	}).id('tfg:shaped/auto_drink_modifier_rubber')

	event.shapeless('diggerhelmet:silk_lining', [
		'tfcambiental:silk_cowl', 
		'#forge:string', 
		'#tfc:sewing_needles'
	])
	.damageIngredient('#tfc:sewing_needles', 1)
	.id('tfg:shapeless/diggerhelmet/silk_lining');
	
	event.shapeless('diggerhelmet:wool_lining', [
		'tfcambiental:wool_hat', 
		'#forge:string', 
		'#tfc:sewing_needles'
	])
	.damageIngredient('#tfc:sewing_needles', 1)
	.id('tfg:shapeless/diggerhelmet/wool_lining');


	// ========================================
	// Кастомные рецепты ремонта шлемов
	// ========================================
	

	// Рецепт ремонта базового (кожаного) шлема
	event.custom({
		type: 'diggerhelmet:helmet_repair',
		pattern: [
			' C ',
			'RHT',
			'BAB'
		],
		key: {
			'H': { item: 'diggerhelmet:digger_helmet' },
			'R': { tag: 'forge:leather' },
			'T': { tag: 'tfc:shears' },
			'C': { tag: 'tfc:candles' },
			'A': { tag: 'forge:tools/screwdrivers'},
			'B': { tag: 'forge:screws/tin' }
		},
		repairPercentage: 0.75,
		toolDamagePercentage: 0.01
	}).id('tfg:diggerhelmet/repair_base_helmet')

	// Рецепт ремонта сломанного базового (кожаного) шлема
	event.custom({
		type: 'diggerhelmet:helmet_repair',
		pattern: [
			' C ',
			'RHT',
			'BAB'
		],
		key: {
			'H': { item: 'diggerhelmet:broken_digger_helmet' },
			'R': { tag: 'forge:leather' },
			'T': { tag: 'tfc:shears' },
			'C': { tag: 'tfc:candles' },
			'A': { tag: 'forge:tools/screwdrivers'},
			'B': { tag: 'forge:screws/tin' }
		},
		repairPercentage: 0.75,
		toolDamagePercentageBroken: 0.02
	}).id('tfg:diggerhelmet/repair_broken_base_helmet')

	// Генерируем рецепты ремонта для каждого металла с НОВЫМ ПАТТЕРНОМ 3x3
	global.TFC_EQUIPMENT_METALS.forEach(metal => {
		// Ремонт поврежденного металлического шлема (используем пластины и паттерн)
		event.custom({
			type: 'diggerhelmet:helmet_repair',
			pattern: [
				' C ',
				'RHT',
				'BAB'
			],
			key: {
				'H': { item: `diggerhelmet:${metal}_digger_helmet` },
				'R': { tag: `forge:plates/${metal}` },
				'T': { tag: 'tfc:hammers' },
				'C': { tag: 'tfc:candles' },
				'A': { tag: 'forge:tools/screwdrivers'},
				'B': { tag: `forge:screws/${metal}`}
			},
			repairPercentage: 0.75,
			toolDamagePercentage: 0.01
		}).id(`tfg:diggerhelmet/repair_${metal}_helmet`)

		// Ремонт сломанного металлического шлема (используем пластины и паттерн)
		event.custom({
			type: 'diggerhelmet:helmet_repair',
			pattern: [
				' C ',
				'RHT',
				'BAB'
			],
			key: {
				'H': { item: `diggerhelmet:broken_${metal}_digger_helmet` },
				'R': { tag: `forge:plates/${metal}` },
				'T': { tag: 'tfc:hammers' },
				'C': { tag: 'tfc:candles' },
				'A': { tag: 'forge:tools/screwdrivers'},
				'B': { tag: `forge:screws/${metal}`}
			},
			repairPercentage: 0.75,
			toolDamagePercentageBroken: 0.02
		}).id(`tfg:diggerhelmet/repair_broken_${metal}_helmet`)
	})
}