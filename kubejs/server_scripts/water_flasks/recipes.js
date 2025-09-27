// priority: 0
"use strict";

const registerWaterFlasksRecipes = (event) => {

	// alternative for leather side

	event.recipes.tfc.knapping('waterflasks:leather_side', 'tfc:leather', [
		'     ',
		'   X ',
		' XXXX',
		'XXXXX',
		' XXX '
	]).id('waterflasks/leather_knapping/leather_side_2')

	// Декрафт Unfinished Water Flask
	event.recipes.tfc.heating('waterflasks:unfinished_iron_flask', 1535)
		.resultFluid(Fluid.of('gtceu:iron', 144))
		.id(`waterflasks:heating/wrought_iron_unfinished_iron_flask`)

	// Декрафт Broken Water Flask
	event.recipes.tfc.heating('waterflasks:broken_iron_flask', 1535)
		.resultFluid(Fluid.of('gtceu:iron', 144))
		.id(`waterflasks:heating/wrought_iron_broken_iron_flask`)

	// Декрафт Water Flask
	event.recipes.tfc.heating('waterflasks:iron_flask', 1535)
		.resultFluid(Fluid.of('gtceu:iron', 144))
		.useDurability(true)
		.id(`waterflasks:heating/wrought_iron_iron_flask`)

	// Red steel flask
	event.recipes.tfc.heating('waterflasks:red_steel_flask', 1535)
		.resultFluid(Fluid.of('gtceu:red_steel', 144))
		.useDurability(true)
		.id(`waterflasks:heating/red_steel_flask`)

	event.remove({id: 'waterflasks:heating/red_steel_unfinished_red_steel_flask'})
    event.recipes.tfc.heating('waterflasks:unfinished_red_steel_flask', 1535)
        .resultFluid(Fluid.of('gtceu:red_steel', 144))
		.useDurability(true)
		.id('waterflasks:tfc/heating/unfinished_red_steel_flask')

	//#region Кожанная фласка

	event.recipes.gtceu.assembler('tfg:water_flasks/leather_flask')
		.itemInputs('3x #forge:leather', '2x #forge:string')
		.circuit(1)
		.itemOutputs('waterflasks:leather_flask')
		.duration(250)
		.EUt(16)

	event.recipes.gtceu.assembler('tfg:water_flasks/leather_flask_repair')
		.itemInputs('waterflasks:broken_leather_flask', '#forge:leather', '2x #forge:string')
		.circuit(2)
		.itemOutputs('waterflasks:leather_flask')
		.duration(250)
		.EUt(16)

	//#endregion

	//#region Железная фласка

	// For some reason, replaceInput isn't working on these
	event.remove({ id: 'waterflasks:crafting/iron_flask' })
	event.shaped('waterflasks:iron_flask', [
		' AB',
		'CDC',
		'EFE'
	], {
		A: '#forge:string',
		B: '#forge:tools/knives',
		C: '#forge:cloth',
		D: 'waterflasks:bladder',
		E: 'waterflasks:leather_side',
		F: 'waterflasks:unfinished_iron_flask'
	}).id('tfg:shaped/iron_flask')

	event.remove({ id: 'waterflasks:crafting/repair_broken_iron' })
	event.recipes.tfc.no_remainder_shaped_crafting(
		event.shaped('waterflasks:iron_flask', [
			'AB',
			'C '
		], {
			A: 'waterflasks:broken_iron_flask',
			B: 'waterflasks:bladder',
			C: '#forge:cloth'
		})).id('tfg:shaped/repair_broken_iron')

	event.remove({ id: 'waterflasks:crafting/repair_iron' })
	event.recipes.tfc.no_remainder_shaped_crafting(
		event.shaped('waterflasks:iron_flask', [
			'AB',
			'C '
		], {
			A: 'waterflasks:iron_flask',
			B: 'waterflasks:bladder',
			C: '#forge:cloth'
		})).id('tfg:shaped/repair_iron_bladder')

	event.recipes.tfc.no_remainder_shaped_crafting(
		event.shaped('waterflasks:iron_flask', [
			'AB',
			'C '
		], {
			A: 'waterflasks:iron_flask',
			B: '#forge:foils/rubber',
			C: '#forge:cloth'
		})).id('tfg:shaped/repair_iron_rubber')

	event.remove({ id: 'waterflasks:crafting/red_steel_flask' })
	event.shaped('waterflasks:red_steel_flask', [
		' AB',
		'CDC',
		'EFE'
	], {
		A: '#forge:string',
		B: '#forge:tools/knives',
		C: 'tfg:phantom_silk',
		D: 'waterflasks:bladder',
		E: 'waterflasks:leather_side',
		F: 'waterflasks:unfinished_red_steel_flask'
	}).id('tfg:shaped/red_steel_flask_bladder')

	event.shaped('waterflasks:red_steel_flask', [
		' AB',
		'CDC',
		'DFD'
	], {
		A: '#forge:string',
		B: '#forge:tools/knives',
		C: 'tfg:phantom_silk',
		D: '#forge:foils/rubber',
		F: 'waterflasks:unfinished_red_steel_flask'
	}).id('tfg:shaped/red_steel_flask_rubber')

	event.recipes.gtceu.assembler('tfg:water_flasks/iron_flask')
		.itemInputs('2x #forge:cloth', '#forge:string', '#forge:plates/wrought_iron', '3x #forge:foils/rubber')
		.circuit(5)
		.itemOutputs('waterflasks:iron_flask')
		.duration(250)
		.EUt(16)

	event.recipes.gtceu.assembler('tfg:water_flasks/iron_flask_repair')
		.itemInputs('waterflasks:broken_iron_flask', '#forge:cloth', '#forge:foils/rubber')
		.circuit(6)
		.itemOutputs('waterflasks:iron_flask')
		.duration(250)
		.EUt(16)

	event.recipes.gtceu.assembler('tfg:water_flasks/red_steel_flask')
		.itemInputs('2x tfg:phantom_silk', '#forge:string', '#forge:plates/red_steel', '3x #forge:foils/rubber')
		.circuit(5)
		.itemOutputs('waterflasks:red_steel_flask')
		.duration(250)
		.EUt(16)

	//#endregion
}