// priority: 0

/**
 * 
 * @param {Internal.RecipesEventJS_} event 
 */
function registerTFGMiscellaneousRecipes(event) {

	//tfc:moss
	event.replaceInput({}, 'minecraft:vine', '#tfc:moss')

	//forge:wax
	event.replaceInput({}, 'firmalife:beeswax', '#forge:wax')

	//Moss
	event.shapeless('1x minecraft:moss_block', [
		'#tfc:dirt',
		'#tfc:moss'
	]).id(`tfg:shapeless/moss_block`)

	event.shaped('6x minecraft:moss_carpet', [
		'AA'
	], {
		A: 'minecraft:moss_block'
	}).id(`tfg:shaped/moss_carpet`)

	//paraffin
	event.recipes.gtceu.chemical_reactor('tfg:paraffin_wax_from_lubricant')
		.circuit(7)
		.itemOutputs('6x tfg:paraffin_wax')
		.outputFluids(Fluid.of('gtceu:oil_light', 25))
		.inputFluids(Fluid.of('gtceu:lubricant', 250), Fluid.of('gtceu:acetone', 25))
		.duration(500)
		.EUt(GTValues.VA[GTValues.LV])

	// Rosin
	event.recipes.firmalife.vat()
		.inputs('tfc:powder/charcoal', Fluid.of('tfg:conifer_pitch', 1000))
		.outputItem('tfg:conifer_rosin')
		.id('tfg:vat/conifer_pitch_to_rosin');

	event.recipes.tfc.pot('tfc:powder/charcoal', Fluid.of('tfg:conifer_pitch', 1000), 5000, 300)
		.itemOutput('tfg:conifer_rosin')
		.id('tfg:pot/conifer_pitch_to_rosin')

	// Decorative Vases
	global.MINECRAFT_DYE_NAMES.forEach(color => {
		event.recipes.gtceu.chemical_bath(`tfg:chemical_bath/dyeing/decorative_vase/unfired/${color}`)
			.itemInputs('#tfg:decorative_vases/unfired')
			.inputFluids(Fluid.of(`tfc:${color}_dye`, 25))
			.itemOutputs(`tfg:decorative_vase/unfired/${color}`)
			.duration(80)
			.EUt(GTValues.VA[GTValues.ULV])
			.category(GTRecipeCategories.CHEM_DYES)

		event.recipes.tfc.heating(`tfg:decorative_vase/unfired/${color}`, 1399)
			.resultItem(`tfg:decorative_vase/${color}`)
			.id(`tfg:heating/decorative_vase/unfired/${color}`)

		event.recipes.tfc.barrel_sealed(1000)
			.outputItem(`tfg:decorative_vase/unfired/${color}`)
			.inputItem(Ingredient.of('#tfg:decorative_vases/unfired').subtract(`tfg:decorative_vase/unfired/${color}`))
			.inputFluid(Fluid.of(`tfc:${color}_dye`, 25))
			.id(`tfg:barrel/dyeing/decorative_vase/${color}`)

		event.smelting(
			`1x tfg:decorative_vase/${color}`,
			`tfg:decorative_vase/unfired/${color}`
		).id(`tfg:smelting/decorative_vase/${color}`)
	})

	event.recipes.gtceu.chemical_bath(`tfg:chemical_bath/bleaching/decorative_vase/unfired`)
		.itemInputs('#tfg:decorative_vases/unfired')
		.inputFluids(Fluid.of('gtceu:chlorine', 72))
		.itemOutputs('tfg:decorative_vase/unfired')
		.duration(80)
		.EUt(GTValues.VA[GTValues.ULV])
		.category(GTRecipeCategories.CHEM_DYES)

	event.smelting(
		'1x tfg:decorative_vase',
		'tfg:decorative_vase/unfired'
	).id('tfg:smelting/decorative_vase')

	event.recipes.tfc.heating('tfg:decorative_vase/unfired', 1399)
		.resultItem('tfg:decorative_vase')
		.id('tfg:heating/decorative_vase/unfired')

	event.recipes.tfc.knapping(
		'tfg:decorative_vase/unfired',
		'tfc:clay',
		[
			' X X ',
			'XX XX',
			'X   X',
			'X   X',
			'XXXXX'
		]
	).outsideSlotRequired(false)
		.id('tfg:knapping/decorative_vase/unfired')


	// lactose & curd
	event.recipes.gtceu.mixer('lactose_milk_cow')
		.circuit(1)
		.inputFluids(Fluid.of('minecraft:milk', 1000), Fluid.of('gtceu:acetic_acid', 25))
		.itemOutputs('1x gtceu:lactose_dust')
		.outputFluids(Fluid.of('tfc:curdled_milk', 1000))
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.mixer('lactose_milk_yak')
		.circuit(1)
		.inputFluids(Fluid.of('firmalife:yak_milk', 1000), Fluid.of('gtceu:acetic_acid', 25))
		.itemOutputs('1x gtceu:lactose_dust')
		.outputFluids(Fluid.of('firmalife:curdled_yak_milk', 1000))
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.mixer('lactose_milk_goat')
		.circuit(1)
		.inputFluids(Fluid.of('firmalife:goat_milk', 1000), Fluid.of('gtceu:acetic_acid', 25))
		.itemOutputs('1x gtceu:lactose_dust')
		.outputFluids(Fluid.of('firmalife:curdled_goat_milk', 1000))
		.duration(300)
		.EUt(GTValues.VA[GTValues.LV])

	//Scaffolding Frame
	event.shaped('tfg:scaffolding_frame',
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: '#forge:rods/wood',
			B: '#forge:cloth'
		}).id('tfg:shaped/scaffolding_frame');

	event.recipes.gtceu.assembler('tfg:assembler/scaffolding_frame')
		.itemInputs('8x #forge:rods/wood', '#forge:cloth')
		.itemOutputs('tfg:scaffolding_frame')
		.duration(10)
		.EUt(GTValues.VA[GTValues.ULV]);

	//Airship Hull
	event.shaped('tfg:airship_hull', [
		'A B',
		'C C',
		'CCC'
	], {
		A: '#forge:tools/screwdrivers',
		B: '#forge:tools/hammers',
		C: 'immersive_aircraft:hull'
	}).id('tfg:shaped/airship_hull');
	event.recipes.gtceu.assembler('tfg:assembler/airship_hull')
		.itemInputs('5x immersive_aircraft:hull')
		.itemOutputs('tfg:airship_hull')
		.duration(40)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.ULV]);

	//Airship Balloon
	event.shaped('tfg:airship_balloon', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: '#forge:string',
		B: 'immersive_aircraft:sail',
		C: 'tfc:bone_needle'
	}).id('tfg:shaped/airship_balloon')
	event.recipes.gtceu.assembler('tfg:assembler/airship_balloon')
		.itemInputs('4x immersive_aircraft:sail', '4x #forge:string')
		.itemOutputs('tfg:airship_balloon')
		.duration(40)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.ULV])

	// Steam bloomery
	event.shaped('gtceu:steam_bloomery', [
		'CEC',
		'DAD',
		'CBC'
	], {
		A: 'tfc:bloomery',
		B: '#forge:frames/bronze',
		C: '#forge:rods/black_steel',
		D: '#forge:screws/wrought_iron',
		E: '#forge:tools/wrenches'
	})

	// Arrow Parts
	event.recipes.tfc.knapping(
		'4x tfg:flint_arrow_head',
		'tfg:flint',
		[
			'  XXX',
			' XXXX',
			'XXXXX',
			' XXX ',
			'  X  '
		]
	).outsideSlotRequired(false)
		.id('tfg:knapping/flint_arrow_head')

	event.recipes.gtceu.assembler('tfg:assembler/flint_arrow_head')
		.itemInputs('1x minecraft:flint')
		.itemOutputs('4x tfg:flint_arrow_head')
		.duration(20)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless('4x tfg:fletching', [
			'minecraft:feather',
			'#forge:tools/knives'
		]).id('tfg:shapeless/fletching'))

	event.recipes.gtceu.assembler('tfg:assembler/fletching')
		.itemInputs('1x minecraft:feather')
		.itemOutputs('4x tfg:fletching')
		.duration(20)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.ULV])

	event.shaped('4x minecraft:arrow', [
		' A ',
		' B ',
		' C '
	],{
		A: 'tfg:flint_arrow_head',
		B: '#forge:rods/wooden',
		C: 'tfg:fletching'
	}).id('tfg:shaped/arrow')
}