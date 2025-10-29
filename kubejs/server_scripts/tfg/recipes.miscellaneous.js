// priority: 0
"use strict";

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

	event.recipes.tfc.pot('tfc:powder/charcoal', Fluid.of('tfg:conifer_pitch', 1000), 1200, 300)
		.itemOutput('tfg:conifer_rosin')
		.id('tfg:pot/conifer_pitch_to_rosin')

	event.recipes.gtceu.fluid_solidifier('tfg:pitch_to_rosin')
		.inputFluids(Fluid.of('tfg:conifer_pitch', 1000))
		.itemInputs('tfc:powder/charcoal')
		.itemOutputs('tfg:conifer_rosin')
		.duration(20 * 12)
		.EUt(GTValues.VA[GTValues.LV])

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
			' A ',
			'ABA',
			' A '
		],
		{
			A: '#forge:rods/wood',
			B: '#forge:cloth'
		}).id('tfg:shaped/scaffolding_frame');

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
		'BAB',
		'ABA'
	], {
		A: '#forge:string',
		B: 'immersive_aircraft:sail'
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
	], {
		A: 'tfg:flint_arrow_head',
		B: '#forge:rods/wooden',
		C: 'tfg:fletching'
	}).id('tfg:shaped/arrow')

	// Ice
	event.remove({ id: 'gtceu:compressor/ice_from_dust' })
	event.remove({ id: 'gtceu:compressor/ice_from_snow' })

	event.shapeless('#forge:dusts/ice', ['#forge:tools/mortars', '4x firmalife:ice_shavings'])
		.id('tfg:shaped/ice_shavings')

	event.recipes.tfc.quern('#forge:small_dusts/ice', 'firmalife:ice_shavings')
		.id('tfg:quern/ice_dust')

	event.recipes.gtceu.macerator('tfg:macerating_ice_shavings')
		.itemInputs('firmalife:ice_shavings')
		.itemOutputs('#forge:small_dusts/ice')
		.duration(10)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.macerator('tfg:macerating_ice_shavings_reverse')
		.itemInputs('#forge:dusts/ice')
		.itemOutputs('4x firmalife:ice_shavings')
		.duration(20)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.fluid_solidifier('tfg:ice')
		.inputFluids("#tfg:clean_water 144")
		.notConsumable('gtceu:block_casting_mold')
		.itemOutputs('minecraft:ice')
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	event.shapeless('4x firmalife:ice_shavings', ['#forge:dusts/ice', '#forge:tools/hammers'])

	event.recipes.gtceu.mixer('tfg:ice_slush_from_dry_ice')
		.itemInputs('1x tfg:dry_ice')
		.inputFluids("#tfc:water 8000")
		.outputFluids(Fluid.of('gtceu:ice', 8000))
		.duration(80)
		.EUt(GTValues.VA[GTValues.ULV])

	// Cooling water
	event.recipes.tfc.barrel_sealed(250)
		.inputItem('1x tfg:dry_ice')
		.inputFluid(Fluid.of('minecraft:water', 5000))
		.outputFluid(Fluid.of('gtceu:ice', 5000))
		.id('tfg:barrel/cooling_water_0')

	event.recipes.tfc.barrel_sealed(1000)
		.inputItem('1x #forge:dusts/ice')
		.inputFluid(Fluid.of('minecraft:water', 144))
		.outputFluid(Fluid.of('gtceu:ice', 144))
		.id('tfg:barrel/cooling_water_1')

	event.recipes.tfc.barrel_sealed(1000)
		.inputItem('16x minecraft:snowball')
		.inputFluid(Fluid.of('minecraft:water', 144))
		.outputFluid(Fluid.of('gtceu:ice', 144))
		.id('tfg:barrel/cooling_water_2')

	event.recipes.tfc.barrel_sealed(2000)
		.inputItem('1x #forge:dusts/ice')
		.inputFluid(Fluid.of('tfc:salt_water', 144))
		.outputFluid(Fluid.of('gtceu:ice', 144))
		.id('tfg:barrel/cooling_water_3')

	event.recipes.tfc.barrel_sealed(2000)
		.inputItem('16x minecraft:snowball')
		.inputFluid(Fluid.of('tfc:salt_water', 144))
		.outputFluid(Fluid.of('gtceu:ice', 144))
		.id('tfg:barrel/cooling_water_4')

	// Freezing it
	event.recipes.tfc.barrel_sealed(3000)
		.inputItem('9x #forge:dusts/ice')
		.inputFluid(Fluid.of('gtceu:ice', 144))
		.outputItem('minecraft:packed_ice')
		.id('tfg:barrel/packed_ice')

	// Heating it back up
	event.recipes.tfc.pot([], Fluid.of('gtceu:ice', 144), 300, 100)
		.fluidOutput(Fluid.of('minecraft:water', 144))

	event.recipes.firmalife.vat()
		.inputFluid(Fluid.of('gtceu:ice', 144))
		.outputFluid(Fluid.of('minecraft:water', 144))
		.length(300)
		.temperature(100)

	// Snow
	event.recipes.firmalife.stomping('minecraft:snow', 'minecraft:snowball',
		'minecraft:block/snow', 'minecraft:block/snow', 'minecraft:block.snow.place')
		.id('tfg:stomping/snow_layer')

	event.shapeless('minecraft:snow_block', ['8x minecraft:snow'])
		.id('tfg:shapeless/snow_block')

	event.shapeless('8x minecraft:snowball', ['minecraft:snow_block'])
		.id('tfg:shapeless/snowball')

	event.shapeless('8x minecraft:snow', ['minecraft:snow_block', '#forge:tools/saws'])
		.id('tfg:shapeless/snow')

	//Cloth & String
	event.recipes.gtceu.wiremill('tfg:wiremill/phantom_thread')
		.itemInputs('1x minecraft:phantom_membrane')
		.itemOutputs('16x tfg:phantom_thread')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.wiremill('tfg:wiremill/polycaprolactam_string')
		.itemInputs(ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Polycaprolactam, 1))
		.itemOutputs('32x tfg:polycaprolactam_string')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('tfg:assembler/phantom_silk')
		.itemInputs('16x tfg:phantom_thread')
		.itemOutputs('1x tfg:phantom_silk')
		.duration(100)
		.circuit(3)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('tfg:assembler/polycaprolactam_fabric')
		.itemInputs('16x tfg:polycaprolactam_string')
		.itemOutputs('1x tfg:polycaprolactam_fabric')
		.duration(100)
		.circuit(3)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.chemical_bath('tfg:chemical_bath/bleaching/polycaprolactam_string')
		.itemInputs('tfg:polycaprolactam_string')
		.inputFluids(Fluid.of('gtceu:chlorine', 16))
		.itemOutputs('minecraft:string')
		.duration(80)
		.EUt(GTValues.VA[GTValues.ULV])
		.category(GTRecipeCategories.CHEM_DYES)

	event.recipes.tfc.loom(
		'1x tfg:phantom_silk',
		'16x tfg:phantom_thread',
		8,
		'tfg:block/phantom_silk_block'
	)

	event.recipes.tfc.loom(
		'1x tfg:polycaprolactam_fabric',
		'16x tfg:polycaprolactam_string',
		8,
		'tfg:block/polycaprolactam_fabric_block'
	)

	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless('16x tfg:phantom_thread', [
			'minecraft:phantom_membrane',
			'tfc:spindle'
		]).id('tfg:shapeless/phantom_thread'))

	// Universal Circuit
	global.UNIVERSAL_CIRCUIT_TIERS.forEach(tier => {
		event.shapeless(Item.of(`tfg:${tier}_universal_circuit`, 1), [Ingredient.of([`#gtceu:circuits/${tier}`]).subtract([`tfg:${tier}_universal_circuit`])]
		).id(`universal_circuits_${tier}`);
	});


	event.shapeless('1x tfg:armor_stand_arms', [
		'minecraft:armor_stand'
	]).id(`tfg:shapeless/armor_stand_arms`)

	event.shapeless('1x minecraft:armor_stand', [
		'tfg:armor_stand_arms'
	]).id(`tfg:shapeless/armor_stand`)

	event.recipes.tfc.sewing(
		'1x tfg:piglin_disguise',
		[
			0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 1, 1, 0, 0, 0, 1, 1, 0,
			0, 1, 1, 1, 0, 1, 1, 1, 0,
			0, 0, 1, 1, 0, 1, 1, 0, 0,
			0, 0, 1, 1, 0, 1, 1, 0, 0
		], [
		1, 1, 1, 1, 1, 1, 1, 1,
		1, 0, 1, 0, 0, 1, 0, 1,
		1, -1, 0, 0, 0, 0, -1, 1,
		1, -1, 0, 0, 0, 0, -1, 1
	]
	).id('tfg:sewing/piglin_disguise')

	//trowel
	event.shaped('tfg:trowel', [
		'DBC',
		'AA ',
		'   '
	], {
		A: ChemicalHelper.get(TagPrefix.plate, GTMaterials.Invar, 1),
		B: '#forge:screws',
		C: '#tfc:lumber',
		D: '#forge:tools/screwdrivers'
	}).id('tfg:shaped/trowel')

	event.recipes.gtceu.assembler('tfg:assembler/trowel')
		.itemInputs(ChemicalHelper.get(TagPrefix.plate, GTMaterials.Invar, 2), '1x #forge:screws', '1x #tfc:lumber')
		.itemOutputs('1x tfg:trowel')
		.duration(40)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.ULV])

	// Food related
	event.recipes.gtceu.forming_press('tfg:forming_press/foil_pack')
		.itemInputs(ChemicalHelper.get(TagPrefix.foil, GTMaterials.Aluminium, 1), ChemicalHelper.get(TagPrefix.foil, GTMaterials.Polyethylene, 1))
		.itemOutputs('1x tfg:foil_pack')
		.duration(100)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.gas_pressurizer('tfg:fluid_solidifier/dry_ice')
		.inputFluids(Fluid.of('gtceu:carbon_dioxide', 1000))
		.notConsumable('gtceu:block_casting_mold')
		.itemOutputs('2x tfg:dry_ice')
		.duration(100)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.vacuum_freezer('tfg:vacuum_freezer/liq_co2')
		.inputFluids(Fluid.of('gtceu:carbon_dioxide', 1000))
		.outputFluids(Fluid.of('gtceu:liquid_carbon_dioxide', 1000))
		.duration(160)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.vacuum_freezer('tfg:vacuum_freezer/dry_ice')
		.inputFluids(Fluid.of('gtceu:liquid_carbon_dioxide', 1000))
		.notConsumable('gtceu:block_casting_mold')
		.itemOutputs('10x tfg:dry_ice')
		.duration(60)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.fluid_heater('tfg:fluid_heater/decompress_liq_co2')
		.itemInputs('1x tfg:dry_ice')
		.outputFluids(Fluid.of('gtceu:carbon_dioxide', 100))
		.duration(20)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.fluid_heater('tfg:fluid_heater/decompress_dry_ice')
		.inputFluids(Fluid.of('gtceu:liquid_carbon_dioxide', 100))
		.outputFluids(Fluid.of('gtceu:carbon_dioxide', 100))
		.duration(20)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.mixer('tfg:clean_foil_pack')
		.itemInputs('1x tfg:used_foil_pack')
		.inputFluids("#tfg:clean_water 100")
		.itemOutputs('1x tfg:clean_foil_pack')
		.duration(200)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.ore_washer('tfg:ore_washer/distilled/clean_foil_pack')
		.itemInputs('1x tfg:used_foil_pack')
		.inputFluids(Fluid.of('gtceu:distilled_water', 10))
		.itemOutputs('1x tfg:clean_foil_pack')
		.duration(200)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.ULV])

	event.custom({
		type: "ae2:transform",
		circumstance: {
			type: "fluid",
			tag: "tfc:water"
		},
		ingredients: [
			{ item: 'tfg:used_foil_pack' }],
		result: { item: 'tfg:clean_foil_pack' }
	}).id('tfg:ae_transform/clean_foil_pack')

	event.recipes.greate.splashing(['tfg:clean_foil_pack'], 'tfg:used_foil_pack')
		.id('tfg:splashing/clean_foil_pack')

	event.shapeless('1x tfg:used_foil_pack', [
		'tfg:food/calorie_paste'
	]).id('tfg:shapeless/emptying/calorie_paste')

	event.shapeless('1x tfg:used_foil_pack', [
		'tfg:food/meal_bag'
	]).id('tfg:shapeless/emptying/meal_bag')

	global.FOOD_FRUIT.forEach(fruit => {
		event.shapeless('1x tfg:used_foil_pack', [
			`tfg:food/freeze_dried/${fruit.name}`
		]).id(`tfg:shapeless/emptying/freeze_dried/${fruit.name}`)
	})

	// Refrigerants

	event.recipes.gtceu.chemical_reactor('tfg:chemical_reactor/chlorodifluoromethane')
		.inputFluids(Fluid.of('gtceu:chloroform', 1000), Fluid.of('gtceu:hydrofluoric_acid', 2000))
		.outputFluids(Fluid.of('tfg:chlorodifluoromethane', 1000), Fluid.of('gtceu:hydrochloric_acid', 2000))
		.duration(480)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.chemical_reactor('tfg:chemical_reactor/breakdown/chlorodifluoromethane')
		.inputFluids(Fluid.of('tfg:chlorodifluoromethane', 200))
		.outputFluids(Fluid.of('gtceu:tetrafluoroethylene', 100), Fluid.of('gtceu:hydrochloric_acid', 200))
		.duration(100)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('tfg:chemical_reactor/acetylene')
		.inputFluids(Fluid.of('gtceu:methane', 2000), Fluid.of('gtceu:oxygen', 3000))
		.outputFluids(Fluid.of('tfg:acetylene', 1000), Fluid.of('minecraft:water', 3000))
		.circuit(4)
		.duration(120)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.chemical_reactor('tfg:chemical_reactor/1_1_1_2_tetrafluoroethane')
		.inputFluids(Fluid.of('tfg:acetylene', 1000), Fluid.of('gtceu:chlorine', 4000), Fluid.of('gtceu:hydrofluoric_acid', 4000))
		.outputFluids(Fluid.of('tfg:1_1_1_2_tetrafluoroethane', 1000), Fluid.of('gtceu:hydrochloric_acid', 4000))
		.circuit(4)
		.duration(480)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.cracker('tfg:cracker/isobutane')
		.inputFluids(Fluid.of('gtceu:butane', 4000))
		.outputFluids(Fluid.of('tfg:isobutane', 1000), Fluid.of('gtceu:lpg', 3000))
		.circuit(4)
		.duration(2400)
		.EUt(GTValues.VA[GTValues.HV])

	// Biofuels

	event.recipes.gtceu.chemical_reactor(`seed_oil_alcohol_biodiesel`)
		.inputFluids("#tfc:alcohols 1000", Fluid.of('gtceu:seed_oil', 6000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:bio_diesel', 6000))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.ULV])

	// So you can craft Biodiesel without Chemical Reactor
	event.recipes.gtceu.mixer(`tfg:seed_oil_alcohol_biodiesel`)
		.inputFluids("#tfc:alcohols 1000", Fluid.of('gtceu:seed_oil', 1000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:bio_diesel', 500))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.ULV])

	event.recipes.gtceu.chemical_reactor(`olive_oil_alcohol_biodiesel`)
		.inputFluids("#tfc:alcohols 1000", Fluid.of('tfc:olive_oil', 4000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:bio_diesel', 6000))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.ULV])

	// So you can craft Biodiesel without Chemical Reactor
	event.recipes.gtceu.mixer(`tfg:olive_oil_alcohol_biodiesel`)
		.inputFluids("#tfc:alcohols 1000", Fluid.of('tfc:olive_oil', 1000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:bio_diesel', 500))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.ULV])

	event.recipes.gtceu.chemical_reactor(`soybean_oil_alcohol_biodiesel`)
		.inputFluids("#tfc:alcohols 1000", Fluid.of('firmalife:soybean_oil', 4000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:bio_diesel', 6000))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.ULV])

	// So you can craft Biodiesel without Chemical Reactor
	event.recipes.gtceu.mixer(`tfg:soybean_oil_alcohol_biodiesel`)
		.inputFluids("#tfc:alcohols 1000", Fluid.of('firmalife:soybean_oil', 1000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:bio_diesel', 500))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.ULV])

	event.recipes.gtceu.chemical_reactor(`fish_oil_alcohol_biodiesel`)
		.inputFluids("#tfc:alcohols 1000", Fluid.of('gtceu:fish_oil', 6000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:bio_diesel', 6000))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.ULV])

	// So you can craft Biodiesel without Chemical Reactor
	event.recipes.gtceu.mixer(`tfg:fish_oil_alcohol_biodiesel`)
		.inputFluids("#tfc:alcohols 1000", Fluid.of('gtceu:fish_oil', 1000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:bio_diesel', 500))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.ULV])

	event.recipes.gtceu.chemical_reactor(`olive_oil_ethanol_biodiesel`)
		.inputFluids(Fluid.of('tfc:olive_oil', 4000), Fluid.of('gtceu:ethanol', 1000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:glycerol'), Fluid.of('gtceu:bio_diesel', 6000))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.chemical_reactor(`olive_oil_methanol_biodiesel`)
		.inputFluids(Fluid.of('tfc:olive_oil', 4000), Fluid.of('gtceu:methanol', 1000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:glycerol'), Fluid.of('gtceu:bio_diesel', 6000))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.chemical_reactor(`soybean_oil_ethanol_biodiesel`)
		.inputFluids(Fluid.of('firmalife:soybean_oil', 4000), Fluid.of('gtceu:ethanol', 1000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:glycerol'), Fluid.of('gtceu:bio_diesel', 6000))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.chemical_reactor(`soybean_oil_methanol_biodiesel`)
		.inputFluids(Fluid.of('firmalife:soybean_oil', 4000), Fluid.of('gtceu:methanol', 1000))
		.itemInputs('#forge:tiny_dusts/sodium_hydroxide')
		.outputFluids(Fluid.of('gtceu:glycerol'), Fluid.of('gtceu:bio_diesel', 6000))
		.duration(20 * 10)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.extractor(`rapeseed_oil`)
		.itemInputs('tfg:rapeseed_product')
		.outputFluids(Fluid.of('gtceu:seed_oil', 600))
		.duration(20 * 5)
		.EUt(GTValues.VHA[GTValues.ULV])

	event.recipes.gtceu.extractor(`sunflower_oil`)
		.itemInputs('tfg:sunflower_product')
		.outputFluids(Fluid.of('gtceu:seed_oil', 350))
		.duration(20 * 5)
		.EUt(GTValues.VHA[GTValues.ULV])

	event.recipes.tfc.barrel_sealed(1000)
		.inputs('tfg:rapeseed_product', Fluid.of('minecraft:water', 100))
		.outputFluid(Fluid.of('gtceu:seed_oil', 250))
		.id('tfg:barrel/rapeseed_to_oil')

	event.recipes.tfc.barrel_sealed(1000)
		.inputs('tfg:sunflower_product', Fluid.of('minecraft:water', 100))
		.outputFluid(Fluid.of('gtceu:seed_oil', 120))
		.id('tfg:barrel/sunflower_to_oil')

	// Not-ender pearl stuff

	event.recipes.gtceu.chemical_reactor('kaolinite')
		.itemInputs('5x #tfg:aluminium_oxide', '2x #forge:dusts/silicon')
		.inputFluids(Fluid.of('gtceu:distilled_water', 6000), Fluid.of('gtceu:chlorine', 8000))
		.itemOutputs('17x tfc:powder/kaolinite')
		.outputFluids(Fluid.of('gtceu:hydrochloric_acid', 8000))
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('kaolinite_ruby')
		.itemInputs('6x #forge:dusts/ruby', '2x #forge:dusts/silicon')
		.inputFluids(Fluid.of('gtceu:distilled_water', 6000), Fluid.of('gtceu:chlorine', 8000))
		.itemOutputs('17x tfc:powder/kaolinite', '1x #forge:dusts/chromium')
		.outputFluids(Fluid.of('gtceu:hydrochloric_acid', 8000))
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.pyrolyse_oven('vitrified_ender_dust')
		.itemInputs('minecraft:ender_pearl', '2x tfc:powder/kaolinite', '4x #forge:insulation_t1')
		.inputFluids(Fluid.of('gtceu:nitrogen', 100))
		.itemOutputs('tfg:vitrified_pearl')
		.chancedOutput('gtceu:ash_dust', 2500, 0)
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.implosion_compressor('vitrified_ender_pearl_dynamite')
		.itemInputs('4x #forge:dusts/vitrified_pearl', '2x gtceu:dynamite')
		.itemOutputs('3x tfg:vitrified_pearl')
		.chancedOutput('#forge:dusts/dark_ash', 2500, 0)
		.duration(20)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.implosion_compressor('vitrified_ender_pearl_powderbarrel')
		.itemInputs('4x #forge:dusts/vitrified_pearl', '8x gtceu:powderbarrel')
		.itemOutputs('3x tfg:vitrified_pearl')
		.chancedOutput('#forge:dusts/dark_ash', 2500, 0)
		.duration(20)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.implosion_compressor('vitrified_ender_pearl_tnt')
		.itemInputs('4x #forge:dusts/vitrified_pearl', '4x minecraft:tnt')
		.itemOutputs('3x tfg:vitrified_pearl')
		.chancedOutput('#forge:dusts/dark_ash', 2500, 0)
		.duration(20)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.implosion_compressor('vitrified_ender_pearl_itnt')
		.itemInputs('4x #forge:dusts/vitrified_pearl', 'gtceu:industrial_tnt')
		.itemOutputs('3x tfg:vitrified_pearl')
		.chancedOutput('#forge:dusts/dark_ash', 2500, 0)
		.duration(20)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.macerator('vitrified_ender_pearl')
		.itemInputs('tfg:vitrified_pearl')
		.itemOutputs('#forge:dusts/vitrified_pearl')
		.duration(40)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.shaped('gtceu:mv_field_generator', [
		'ABA',
		'CDC',
		'ABA'
	], {
		A: ChemicalHelper.get(TagPrefix.wireGtQuadruple, GTMaterials.MagnesiumDiboride, 1),
		B: ChemicalHelper.get(TagPrefix.plate, GTMaterials.Aluminium, 1),
		C: '#gtceu:circuits/mv',
		D: 'tfg:vitrified_pearl'
	}).addMaterialInfo().id('gtceu:shaped/field_generator_mv')

	event.recipes.gtceu.assembler('field_generator_mv')
		.itemInputs('tfg:vitrified_pearl', '2x #forge:plates/aluminium', '2x #gtceu:circuits/mv', '4x #forge:quadruple_wires/magnesium_diboride')
		.itemOutputs('gtceu:mv_field_generator')
		.duration(100)
		.EUt(30)

	// Harvest Baskets

	event.shaped('tfg:harvest_basket', [
		'BDB',
		'ACA',
		'AAA'
	], {
		A: 'tfg:soaked_hardwood_strip',
		B: ChemicalHelper.get(TagPrefix.bolt, GTMaterials.SterlingSilver, 1),
		C: 'tfc:glue',
		D: ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.TreatedWood, 1),
	}).id('tfg:shaped/harvest_basket_from_wood')

	event.recipes.gtceu.assembler('tfg:assembler/harvest_basket_from_wood')
		.itemInputs(
			'5x tfg:soaked_hardwood_strip',
			ChemicalHelper.get(TagPrefix.bolt, GTMaterials.SterlingSilver, 2),
			ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.TreatedWood, 1)
		)
		.inputFluids(Fluid.of('gtceu:glue', 50))
		.itemOutputs('tfg:harvest_basket')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.shaped('tfg:harvest_basket', [
		'BDB',
		'ACA',
		'AAA'
	], {
		A: 'tfc:soaked_papyrus_strip',
		B: ChemicalHelper.get(TagPrefix.bolt, GTMaterials.SterlingSilver, 1),
		C: 'tfc:glue',
		D: ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.TreatedWood, 1),
	}).id('tfg:shaped/harvest_basket_from_papyrus')

	event.recipes.gtceu.assembler('tfg:assembler/harvest_basket_from_papyrus')
		.itemInputs(
			'5x tfc:soaked_papyrus_strip',
			ChemicalHelper.get(TagPrefix.bolt, GTMaterials.SterlingSilver, 2),
			ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.TreatedWood, 1)
		)
		.inputFluids(Fluid.of('gtceu:glue', 50))
		.itemOutputs('tfg:harvest_basket')
		.circuit(2)
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('tfg:assembler/aluminium_harvest_basket')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.plate, GTMaterials.Aluminium, 3),
			ChemicalHelper.get(TagPrefix.foil, GTMaterials.Aluminium, 2),
			ChemicalHelper.get(TagPrefix.bolt, GTMaterials.Steel, 2),
			ChemicalHelper.get(TagPrefix.rodLong,
				GTMaterials.Aluminium, 1)
		)
		.inputFluids(Fluid.of('gtceu:cobalt_brass', 144))
		.itemOutputs('tfg:aluminium_harvest_basket')
		.duration(200)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.LV])
		.addMaterialInfo(true)

	//Rock-wool stuff
	event.recipes.gtceu.mixer('tfg:aes_mix')
		.itemInputs('5x gtceu:silicon_dioxide_dust', '4x gtceu:quicklime_dust', 'gtceu:magnesia_dust')
		.itemOutputs('10x tfg:aes_mix_dust')
		.duration(160)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.electric_blast_furnace('tfg:molten_aes')
		.itemInputs('2x tfg:aes_mix_dust')
		.outputFluids(Fluid.of('tfg:molten_aes', 1000))
		.chancedOutput('gtceu:ash_dust', 3000, 0)
		.circuit(1)
		.duration(400)
		.blastFurnaceTemp(3000)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.electric_blast_furnace('tfg:molten_aes_he')
		.itemInputs('2x tfg:aes_mix_dust')
		.inputFluids(Fluid.of('gtceu:helium', 200))
		.outputFluids(Fluid.of('tfg:molten_aes', 1000))
		.circuit(2)
		.duration(140)
		.blastFurnaceTemp(3000)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.centrifuge('tfg:aes_wool')
		.inputFluids(Fluid.of('tfg:molten_aes', 200))
		.itemOutputs('tfg:aes_wool')
		.duration(30)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.forming_press('tfg:aes_compressed_wool')
		.itemInputs('4x tfg:aes_wool')
		.notConsumable('gtceu:ingot_casting_mold')
		.itemOutputs('tfg:aes_compressed_wool')
		.duration(40)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.chemical_bath('tfg:aes_insulation_sheet')
		.itemInputs('tfg:aes_compressed_wool')
		.inputFluids(Fluid.of('gtceu:epoxy', 72))
		.circuit(1)
		.itemOutputs('tfg:aes_insulation_sheet')
		.duration(80)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.chemical_bath('tfg:aes_insulation_roll')
		.itemInputs('9x tfg:aes_compressed_wool')
		.inputFluids(Fluid.of('gtceu:epoxy', 648))
		.itemOutputs('tfg:aes_insulation_roll')
		.circuit(9)
		.duration(400)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.assembler('tfg:aes_insulation_roll')
		.itemInputs('9x tfg:aes_insulation_sheet')
		.itemOutputs('tfg:aes_insulation_roll')
		.circuit(0)
		.duration(20)
		.EUt(GTValues.VA[GTValues.LV])

	event.shaped('tfg:aes_insulation_roll', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'tfg:aes_insulation_sheet',
	}).id('tfg:shaped/aes_insulation_roll')

	event.recipes.gtceu.assembler('tfg:aes_insulation_sheet')
		.itemInputs('9x tfg:aes_insulation_sheet')
		.itemOutputs('tfg:aes_insulation_roll')
		.circuit(0)
		.duration(20)
		.EUt(GTValues.VA[GTValues.LV])

	event.shapeless('9x tfg:aes_insulation_sheet', [
		'tfg:aes_insulation_roll'
	]).id('tfg:shapeless/aes_insulation_sheet')

	event.recipes.gtceu.electric_blast_furnace('tfg:smelt_aes_sheet')
		.itemInputs('tfg:aes_insulation_sheet')
		.inputFluids(Fluid.of('gtceu:helium', 200))
		.outputFluids(Fluid.of('tfg:molten_aes', 800))
		.chancedOutput('gtceu:ash_dust', 2500, 0)
		.circuit(1)
		.duration(140)
		.blastFurnaceTemp(3000)
		.EUt(GTValues.VA[GTValues.EV])
	event.recipes.gtceu.electric_blast_furnace('tfg:smelt_aes_roll')
		.itemInputs('tfg:aes_insulation_roll')
		.inputFluids(Fluid.of('gtceu:helium', 1000))
		.itemOutputs('2x gtceu:ash_dust')
		.outputFluids(Fluid.of('tfg:molten_aes', 7200))
		.circuit(9)
		.duration(1000)
		.blastFurnaceTemp(3000)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.electric_blast_furnace('tfg:smelt_sniffer_wool')
		.itemInputs('tfg:sniffer_wool')
		.chancedOutput('gtceu:ash_dust', 7500, 0)
		.outputFluids(Fluid.of('tfg:molten_aes', 200))
		.circuit(4)
		.duration(80)
		.blastFurnaceTemp(3000)
		.EUt(GTValues.VA[GTValues.EV])
	event.recipes.gtceu.electric_blast_furnace('tfg:smelt_wraptor_wool')
		.itemInputs('tfg:wraptor_wool')
		.chancedOutput('gtceu:ash_dust', 5000, 0)
		.outputFluids(Fluid.of('tfg:molten_aes', 100))
		.circuit(8)
		.duration(60)
		.blastFurnaceTemp(3000)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless('8x tfc:wool_yarn', [
			'tfc:spindle',
			'tfg:glacian_wool'
		]).id('tfg:shapeless/glacian_wool_to_yarn'))

	event.recipes.gtceu.wiremill('tfg:glacian_wool_yarn')
		.itemInputs('tfg:glacian_wool')
		.itemOutputs('8x tfc:wool_yarn')
		.duration(100)
		.EUt(4)

	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless('4x tfg:fletching', [
			'tfg:wraptor_wool',
			'#forge:tools/knives'
		]).id('tfg:shapeless/wraptor_feather_fletching'))

	event.recipes.gtceu.assembler('tfg:assembler/wraptor_feather_fletching')
		.itemInputs('1x tfg:wraptor_wool')
		.itemOutputs('4x tfg:fletching')
		.duration(20)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.ULV])


	//endregion

	//#region Casings
	global.GTCEU_SUPERCONDUCTORS.forEach((type, index) => {
		const multiplier = index + 1

		event.recipes.gtceu.assembler(`tfg:assembler/superconductor_coil_small_from_${type.name}`)
			.itemInputs(
				ChemicalHelper.get(TagPrefix.plate, GTMaterials.HSLASteel, 4),
				ChemicalHelper.get(TagPrefix.rod, GTMaterials.Steel, 2),
				ChemicalHelper.get(TagPrefix.rod, GTMaterials.SteelMagnetic, 1),
				ChemicalHelper.get(TagPrefix.wireFine, GTMaterials[type.materialId], 4)
			)
			.inputFluids(Fluid.of('gtceu:epoxy', 144))
			.itemOutputs(Item.of('tfg:superconductor_coil_small', 4 * multiplier))
			.circuit(4)
			.duration(400)
			.EUt(GTValues.VA[GTValues.MV])

		event.recipes.gtceu.assembler(`tfg:assembler/superconductor_coil_large_from_${type.name}`)
			.itemInputs(
				ChemicalHelper.get(TagPrefix.plate, GTMaterials.HSLASteel, 4),
				ChemicalHelper.get(TagPrefix.rod, GTMaterials.Steel, 2),
				ChemicalHelper.get(TagPrefix.rod, GTMaterials.SteelMagnetic, 1),
				ChemicalHelper.get(TagPrefix.wireGtSingle, GTMaterials[type.materialId], 4))
			.inputFluids(Fluid.of('gtceu:epoxy', 144))
			.itemOutputs(Item.of('tfg:superconductor_coil_large', 4 * multiplier))
			.circuit(7)
			.duration(600)
			.EUt(GTValues.VA[GTValues.MV])
	})

	event.recipes.gtceu.assembler('tfg:assembler/electromagnetic_accelerator')
		.itemInputs(
			'2x #forge:plates/desh',
			'gtceu:mv_voltage_coil',
			'5x tfg:dry_ice',
			'gtceu:nonconducting_casing'
		)
		.inputFluids(Fluid.of('gtceu:blue_alloy', 288))
		.itemOutputs('6x tfg:electromagnetic_accelerator')
		.circuit(4)
		.duration(800)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.assembler('tfg:assembler/machine_casing_aluminium_plated_steel')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.plate, GTMaterials.Aluminium, 6),
			ChemicalHelper.get(TagPrefix.frameGt, GTMaterials.Steel, 1)
		)
		.inputFluids(Fluid.of('gtceu:silicon', 72))
		.itemOutputs('2x tfg:machine_casing_aluminium_plated_steel')
		.circuit(6)
		.duration(20 * (2.5))
		.EUt(GTValues.VH[GTValues.LV])

	event.recipes.gtceu.assembler('tfg:reflector_from_lens')
		.itemInputs(
			'24x #forge:lenses',
			ChemicalHelper.get(TagPrefix.frameGt, GTMaterials.BlackSteel, 1)
		)
		.inputFluids(Fluid.of('gtceu:silver', 1296))
		.itemOutputs('1x tfg:reflector')
		.circuit(6)
		.duration(20 * (60))
		.EUt(GTValues.VH[GTValues.HV])

	event.recipes.gtceu.assembler('tfg:reflector_from_inr')
		.itemInputs(
			'1x gtceu:neutron_reflector',
			ChemicalHelper.get(TagPrefix.frameGt, GTMaterials.BlackSteel, 1)
		)
		.itemOutputs('2x tfg:reflector')
		.circuit(9)
		.duration(20 * (20))
		.EUt(GTValues.VH[GTValues.MV])

	event.recipes.gtceu.assembler('tfg:reflector_from_certus')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.plate, GTMaterials.CertusQuartz, 12),
			ChemicalHelper.get(TagPrefix.frameGt, GTMaterials.BlackSteel, 1)
		)
		.inputFluids(Fluid.of('gtceu:silver', 488))
		.itemOutputs('1x tfg:reflector')
		.circuit(6)
		.dimension('ad_astra:moon')
		.duration(20 * (60))
		.EUt(GTValues.VH[GTValues.MV])

	//#endregion

	//region ammonia borane
	event.recipes.gtceu.chemical_reactor('tfg:sodium_hydride_synthesis')
		.itemInputs('#forge:dusts/sodium')
		.inputFluids(Fluid.of('gtceu:hydrogen', 1000))
		.itemOutputs('2x #forge:dusts/sodium_hydride')
		.duration(400)
		.EUt(GTValues.VA[GTValues.HV])
	event.recipes.gtceu.chemical_reactor('tfg:boric_acid_synthesis')
		.itemInputs('#forge:dusts/borax')
		.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 2000))
		.itemOutputs('4x #forge:dusts/boric_acid', '2x #forge:dusts/salt')
		.outputFluids(Fluid.of('minecraft:water', 5000))
		.duration(400)
		.EUt(GTValues.VA[GTValues.HV])
	event.recipes.gtceu.chemical_reactor('tfg:trimethyl_borate_synthesis')
		.itemInputs('#forge:dusts/boric_acid')
		.inputFluids(Fluid.of('gtceu:methanol', 3000), Fluid.of('gtceu:sulfuric_acid', 100))
		.outputFluids(Fluid.of('tfg:trimethyl_borate', 1000), Fluid.of('minecraft:water', 3000))
		.duration(300)
		.EUt(GTValues.VA[GTValues.EV])
	event.recipes.gtceu.chemical_reactor('tfg:sodium_borohydride_synthesis')
		.itemInputs('4x #forge:dusts/sodium_hydride')
		.inputFluids(Fluid.of('tfg:trimethyl_borate', 1000))
		.itemOutputs('#forge:dusts/sodium_borohydride', '3x #forge:dusts/sodium_methoxide')
		.duration(160)
		.EUt(GTValues.VA[GTValues.EV])
	event.recipes.gtceu.chemical_reactor('tfg:ammonia_borane_synthesis')
		.itemInputs('#forge:dusts/sodium_borohydride', '#forge:dusts/ammonium_chloride')
		.itemOutputs('#forge:dusts/ammonia_borane', '#forge:dusts/salt')
		.outputFluids(Fluid.of('gtceu:hydrogen', 2000))
		.duration(100)
		.EUt(GTValues.VA[GTValues.IV])
	//endregion

	//region polyurethane
	event.recipes.gtceu.chemical_reactor('tfg:aniline_synthesis')
		.inputFluids(Fluid.of('gtceu:nitrobenzene', 1000), Fluid.of('gtceu:hydrogen', 6000))
		.notConsumable('#forge:dusts/iron')
		.outputFluids(Fluid.of('tfg:aniline', 1000), Fluid.of('minecraft:water', 2000))
		.duration(140)
		.EUt(GTValues.VA[GTValues.EV])
	event.recipes.gtceu.chemical_reactor('tfg:dimethyl_carbonate_synthesis')
		.inputFluids(Fluid.of('gtceu:carbon_monoxide', 1000), Fluid.of('gtceu:oxygen', 500), Fluid.of('gtceu:methanol', 2000))
		.outputFluids(Fluid.of('tfg:dimethyl_carbonate', 1000), Fluid.of('minecraft:water', 1000))
		.duration(120)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.HV])
	event.recipes.gtceu.chemical_reactor('tfg:methyl_phenylcarbamate_synthesis')
		.inputFluids(Fluid.of('tfg:aniline', 1000), Fluid.of('tfg:dimethyl_carbonate', 1000))
		.outputFluids(Fluid.of('tfg:methyl_phenylcarbamate', 1000), Fluid.of('gtceu:methanol', 1000))
		.duration(200)
		.EUt(GTValues.VA[GTValues.EV])
	event.recipes.gtceu.chemical_reactor('tfg:mpc_synthesis')
		.inputFluids(Fluid.of('tfg:methyl_phenylcarbamate', 2000), Fluid.of('gtceu:formaldehyde', 1000))
		.outputFluids(Fluid.of('tfg:methylene_diphenyl_dicarbamate', 1000), Fluid.of('minecraft:water', 1000))
		.duration(200)
		.EUt(GTValues.VA[GTValues.EV])
	event.recipes.gtceu.chemical_reactor('tfg:mpi_synthesis')
		.inputFluids(Fluid.of('tfg:methylene_diphenyl_dicarbamate', 1000))
		.itemOutputs('#forge:dusts/methylene_diphenyl_diisocyanate')
		.outputFluids(Fluid.of('gtceu:methanol', 2000))
		.duration(80)
		.EUt(GTValues.VA[GTValues.IV])
	event.recipes.gtceu.mixer('tfg:aes_polyurethane_electric_only')
		.itemInputs('2x #tfg:mineral_rich_wool', 'tfg:aes_compressed_wool', '#forge:dusts/methylene_diphenyl_diisocyanate')
		.inputFluids(Fluid.of('gtceu:diethylenetriamine', 250), Fluid.of('gtceu:acetone', 1000))
		.itemOutputs('tfg:aes_polyurethane')
		.duration(80)
		.EUt(GTValues.VA[GTValues.IV])

	//endregion

	//Aerogel
	event.recipes.gtceu.chemical_reactor('tfg:tmos_synthesis')
		.inputFluids(Fluid.of('tfg:dimethyl_carbonate', 2000))
		.itemInputs('#forge:dusts/silicon_dioxide')
		.notConsumable('#forge:small_dusts/potassium_hydroxide')
		.outputFluids(Fluid.of('tfg:tmos', 1000), Fluid.of('gtceu:carbon_dioxide', 2000))
		.duration(100)
		.EUt(GTValues.VA[GTValues.IV])
	event.recipes.gtceu.chemical_reactor('tfg:tmos_hydrolysis')
		.inputFluids(Fluid.of('tfg:tmos', 1000), Fluid.of('gtceu:distilled_water', 2000))
		.outputFluids(Fluid.of('gtceu:methanol', 4000))
		.itemOutputs('#forge:dusts/silicon_dioxide')
		.duration(100)
		.EUt(GTValues.VA[GTValues.MV])
	event.recipes.gtceu.large_chemical_reactor('tfg:silica_gel_synthesis')
		.inputFluids(Fluid.of('tfg:tmos', 1000), Fluid.of('gtceu:ethanol', 2000), Fluid.of('gtceu:distilled_water', 500),
			Fluid.of('gtceu:hydrochloric_acid', 100))
		.outputFluids(Fluid.of('tfg:silica_gel', 1000))
		.duration(300)
		.EUt(GTValues.VA[GTValues.IV])
	event.recipes.gtceu.chemical_reactor('tfg:silica_gel_soaking')
		.inputFluids(Fluid.of('tfg:silica_gel', 1000), Fluid.of('gtceu:acetone', 2000))
		.outputFluids(Fluid.of('tfg:soaked_silica_gel', 1000))
		.duration(400)
		.EUt(GTValues.VA[GTValues.EV])
	event.recipes.gtceu.large_chemical_reactor('tfg:silica_aerogel')
		.inputFluids(Fluid.of('tfg:soaked_silica_gel', 1000), Fluid.of('gtceu:liquid_carbon_dioxide', 3000))
		.outputFluids(Fluid.of('gtceu:carbon_dioxide', 3000), Fluid.of('gtceu:acetone', 1000))
		.itemOutputs('tfg:silica_aerogel')
		.duration(400)
		.EUt(GTValues.VA[GTValues.IV])
	//endregion

	//Tier 3 insulation
	event.recipes.gtceu.forming_press('tfg:mli_shielding')
		.itemInputs('4x #forge:plates/ammonia_borane', '2x tfg:aes_polyurethane', '4x gtceu:carbon_fiber_plate')
		.itemOutputs('tfg:mli_shielding')
		.duration(100)
		.EUt(GTValues.VA[GTValues.IV])
	//endregion

	//#region Universal compost

	//Greens
	// Lows via crafting with mortar
	event.shaped(Item.of('tfg:universal_compost_greens', 1), [
		'AB'
	], {
		A: Ingredient.of(['#tfc:compost_greens_low']).subtract(['tfg:universal_compost_greens']),
		B: '#forge:tools/mortars'
	}).id('tfg:shaped/universal_compost_greens_from_low')

	// Mediums via crafting with mortar
	event.shaped(Item.of('tfg:universal_compost_greens', 2), [
		'AB'
	], {
		A: '#tfc:compost_greens',
		B: '#forge:tools/mortars'
	}).id('tfg:shaped/universal_compost_greens_from_medium')

	// Highs via crafting with mortar
	event.shaped(Item.of('tfg:universal_compost_greens', 4), [
		'AB'
	], {
		A: '#tfc:compost_greens_high',
		B: '#forge:tools/mortars'
	}).id('tfg:shaped/universal_compost_greens_from_high')

	// Filters
	const greens_low = Ingredient.of('#tfc:compost_greens_low')
	const browns_low = Ingredient.of('#tfc:compost_browns_low').itemIds
	const greens_medium = Ingredient.of('#tfc:compost_greens')
	const browns_medium = Ingredient.of('#tfc:compost_browns').itemIds
	const greens_high = Ingredient.of('#tfc:compost_greens_high')
	const browns_high = Ingredient.of('#tfc:compost_browns_high').itemIds

	let low_filtered = greens_low
	let medium_filtered = greens_medium
	let high_filtered = greens_high

	browns_low.forEach(item => {
		low_filtered = low_filtered.subtract(item)
		low_filtered = low_filtered.subtract('tfg:universal_compost_greens')
	})
	browns_medium.forEach(item => {
		medium_filtered = medium_filtered.subtract(item)
	})
	browns_high.forEach(item => {
		high_filtered = high_filtered.subtract(item)
	})

	// Lows via forge hammer
	event.recipes.gtceu.forge_hammer('tfg:universal_compost_greens_low')
		.itemInputs(low_filtered)
		.itemOutputs('tfg:universal_compost_greens')
		.duration(20)
		.EUt(8)

	// Mediums via forge hammer
	event.recipes.gtceu.forge_hammer('tfg:universal_compost_greens_medium')
		.itemInputs(medium_filtered)
		.itemOutputs(Item.of('tfg:universal_compost_greens', 2))
		.duration(20)
		.EUt(8)

	// Highs via forge hammer
	event.recipes.gtceu.forge_hammer('tfg:universal_compost_greens_high')
		.itemInputs(high_filtered)
		.itemOutputs(Item.of('tfg:universal_compost_greens', 4))
		.duration(20)
		.EUt(8)

	//Browns
	// Lows via crafting with mortar
	event.shaped(Item.of('tfg:universal_compost_browns', 1), [
		'BA'
	], {
		A: Ingredient.of(['#tfc:compost_browns_low']).subtract(['tfg:universal_compost_browns']),
		B: '#forge:tools/mortars'
	}).id('tfg:shaped/universal_compost_browns_from_low')

	// Mediums via crafting with mortar
	event.shaped(Item.of('tfg:universal_compost_browns', 2), [
		'BA'
	], {
		A: '#tfc:compost_browns',
		B: '#forge:tools/mortars'
	}).id('tfg:shaped/universal_compost_browns_from_medium')

	// Highs via crafting with mortar
	event.shaped(Item.of('tfg:universal_compost_browns', 4), [
		'BA'
	], {
		A: '#tfc:compost_browns_high',
		B: '#forge:tools/mortars'
	}).id('tfg:shaped/universal_compost_browns_from_high')

	// Lows via forge hammer
	event.recipes.gtceu.forge_hammer('tfg:universal_compost_browns_low')
		.itemInputs('#tfc:compost_browns_low')
		.itemOutputs('tfg:universal_compost_browns')
		.duration(20)
		.EUt(8)

	// Mediums via forge hammer
	event.recipes.gtceu.forge_hammer('tfg:universal_compost_browns_medium')
		.itemInputs('#tfc:compost_browns')
		.itemOutputs(Item.of('tfg:universal_compost_browns', 2))
		.duration(20)
		.EUt(8)

	// Highs via forge hammer
	event.recipes.gtceu.forge_hammer('tfg:universal_compost_browns_high')
		.itemInputs('#tfc:compost_browns_high')
		.itemOutputs(Item.of('tfg:universal_compost_browns', 4))
		.duration(20)
		.EUt(8)

	//#endregion

	// Etching Tip
	event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless('tfg:etching_diamond_tip', [
		'#forge:tools/hammers',
		'#tfc:chisels',
		'minecraft:diamond'
	]));

	event.replaceInput({ id: "minecraft:jukebox" }, 'minecraft:diamond', 'tfg:etching_diamond_tip');

	//Large Nest
	event.shaped('tfg:large_nest_box',
		[
			'B B',
			'ABA',
			'AAA'
		], {
		A: 'beneath:crimson_thatch',
		B: 'beneath:crimson_straw'
	}).id('tfg:shaped_large_nest_crimson')

	event.shaped('tfg:large_nest_box_warped',
		[
			'B B',
			'ABA',
			'AAA'
		], {
		A: 'beneath:warped_thatch',
		B: 'beneath:warped_straw'
	}).id('tfg:shaped_large_nest_warped')

	//#endregion

	//#region flax stuff

	event.shapeless('1x tfg:flax_bundle', ['9x tfg:flax_product'])
	event.recipes.gtceu.packer('tfg:packer/flax_bundle')
		.itemInputs('9x tfg:flax_product')
		.itemOutputs('tfg:flax_bundle')
		.duration('100')
		.EUt(GTValues.VA[GTValues.ULV])	

	event.shapeless('1x tfg:bundled_scraped_flax', ['9x tfg:flax_waste'])
	event.recipes.gtceu.packer('tfg:packer/bundled_scraped_flax')
		.itemInputs('9x tfg:flax_waste')
		.itemOutputs('tfg:bundled_scraped_flax')
		.duration('100')
		.EUt(GTValues.VA[GTValues.ULV])		

	event.recipes.tfc.scraping(
		'tfg:flax_waste',
		'tfg:flax_product',
		'tfg:item/flax_waste',
		'tfg:item/flax_product',
		'2x tfg:flax_line'
	).id('tfg:scraping/flax_line')

	event.recipes.tfc.scraping(
		'tfg:bundled_scraped_flax',
		'tfg:flax_bundle',
		'tfg:item/bundled_scraped_flax',
		'tfg:item/flax_bundle',
		'18x tfg:flax_line'
	).id('tfg:scraping/flax_line_from_bundle')	

	event.recipes.tfc.scraping(
		'tfc:groundcover/humus',
		'tfg:flax_waste',
		'tfc:item/groundcover/humus',
		'tfg:item/flax_waste',
		'tfg:flax_tow'
	).id('tfg:scraping/flax_tow')

	event.recipes.tfc.scraping(
		'9x tfc:groundcover/humus',
		'tfg:bundled_scraped_flax',
		'tfc:item/groundcover/humus',
		'tfg:item/bundled_scraped_flax',
		'9x tfg:flax_tow'
	).id('tfg:scraping/flax_tow_from_pile')

	event.recipes.gtceu.cutter('tfg:flax_line_in_cutter')
		.itemInputs('tfg:flax_product')
		.itemOutputs('2x tfg:flax_line', 'tfg:flax_waste')
		.duration(60)
		.EUt(2)

	event.recipes.gtceu.cutter('tfg:flax_line_from_bundle_in_cutter')
		.itemInputs('tfg:flax_bundle')
		.itemOutputs('18x tfg:flax_line', 'tfg:bundled_scraped_flax')
		.duration(540)
		.EUt(2)	

	event.recipes.gtceu.cutter('tfg:flax_tow_in_cutter')
		.itemInputs('tfg:flax_waste')
		.itemOutputs('1x tfg:flax_tow', '1x tfc:groundcover/humus')
		.duration(60)
		.EUt(2)
	
	event.recipes.gtceu.cutter('tfg:flax_tow_from_bundle_in_cutter')
		.itemInputs('tfg:bundled_scraped_flax')
		.itemOutputs('9x tfg:flax_tow', '9x tfc:groundcover/humus')
		.duration(540)
		.EUt(2)

	event.recipes.gtceu.centrifuge('tfg:flax_product')
		.itemInputs('tfg:flax_product')
		.itemOutputs('2x tfg:flax_line', 'tfg:flax_tow', 'tfc:groundcover/humus')
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.centrifuge('tfg:flax_product_from_bundle')
		.itemInputs('tfg:flax_bundle')
		.itemOutputs('18x tfg:flax_line', '9x tfg:flax_tow', '9x tfc:groundcover/humus')
		.duration(1800)
		.EUt(GTValues.VA[GTValues.LV])	

	event.custom({
		type: 'vintageimprovements:centrifugation',
		ingredients: [{ item: 'tfg:flax_product' }],
		results: [{ item: 'tfg:flax_line', count: 2 }, { item: 'tfg:flax_tow' }, { item: 'tfc:groundcover/humus' }],
		processingTime: 40 * 10 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
	}).id('tfg:vi_seperate_flax')

	event.custom({
		type: 'vintageimprovements:centrifugation',
		ingredients: [{ item: 'tfg:flax_bundle' }],
		results: [{ item: 'tfg:flax_line', count: 18 }, { item: 'tfg:flax_tow', count: 9 }, { item: 'tfc:groundcover/humus', count: 9 }],
		processingTime: 360 * 90 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
	}).id('tfg:vi_seperate_flax_from_bundle')

	//#region flax line spining
	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless('4x tfg:linen_thread', [
			'tfg:flax_line',
			'tfc:spindle'
		]).id('tfg:shapeless/linen_thread')
	)

	event.custom({
		type: 'vintageimprovements:coiling',
		ingredients: [{ item: 'tfg:flax_line' }],
		results: [{ item: 'tfg:linen_thread', count: 4 }],
		processingTime: 2 * 10 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
	}).id('tfg:vi_spin_flax_line')

	event.recipes.gtceu.wiremill('tfg:spin_flax_line')
		.itemInputs('tfg:flax_line')
		.itemOutputs('4x tfg:linen_thread')
		.duration(80)
		.EUt(GTValues.VA[GTValues.LV])

	//#region flax looming
	event.recipes.tfc.loom(
		'1x tfg:linen_cloth',
		'16x tfg:linen_thread',
		8,
		'tfc:block/burlap'
	)

	event.recipes.tfc.loom(
		'1x tfc:burlap_cloth',
		'16x tfg:flax_tow',
		12,
		'tfc:block/burlap'
	)

	event.recipes.gtceu.assembler('tfg:assembler/linen_cloth')
		.itemInputs('16x tfg:linen_thread')
		.circuit(10)
		.itemOutputs('tfg:linen_cloth')
		.duration(100)
		.EUt(4)

	event.recipes.gtceu.assembler('tfg:assembler/flax_burlap')
		.itemInputs('16x tfg:flax_tow')
		.circuit(10)
		.itemOutputs('tfc:burlap_cloth')
		.duration(100)
		.EUt(4)

	

	event.recipes.gtceu.assembler('tfg:titanium_concrete')
		.itemInputs('2x #forge:rods/titanium', '#forge:dusts/kaolinite')
		.inputFluids(Fluid.of('gtceu:concrete', 144 * 1.5))
		.itemOutputs('tfg:titanium_concrete')
		.circuit(2)
		.duration(20)
		.EUt(GTValues.VH[GTValues.EV])

	event.recipes.gtceu.laser_engraver('tfg:titanium_concrete_bricks')
		.itemInputs('tfg:polished_titanium_concrete')
		.notConsumable('#forge:lenses/light_blue')
		.itemOutputs('tfg:titanium_concrete_bricks')
		.duration(20 * (2.5))
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.laser_engraver('tfg:titanium_concrete_bricks_small')
		.itemInputs('tfg:polished_titanium_concrete')
		.notConsumable('#forge:lenses/pink')
		.itemOutputs('tfg:titanium_concrete_bricks_small')
		.duration(20 * (2.5))
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.laser_engraver('tfg:titanium_concrete_bricks_square')
		.itemInputs('tfg:polished_titanium_concrete')
		.notConsumable('#forge:lenses/green')
		.itemOutputs('tfg:titanium_concrete_bricks_square')
		.duration(20 * (2.5))
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.laser_engraver('tfg:titanium_concrete_tile')
		.itemInputs('tfg:polished_titanium_concrete')
		.notConsumable('#forge:lenses/red')
		.itemOutputs('tfg:titanium_concrete_tile')
		.duration(20 * (2.5))
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.laser_engraver('tfg:titanium_concrete_tile_small')
		.itemInputs('tfg:polished_titanium_concrete')
		.notConsumable('#forge:lenses/black')
		.itemOutputs('tfg:titanium_concrete_tile_small')
		.duration(20 * (2.5))
		.EUt(GTValues.VA[GTValues.LV])

	// Interplanetary ae2 card

	event.recipes.gtceu.assembler('tfg:wireless_card')
		.itemInputs(
			'ae2:advanced_card',
			'4x ae2:wireless_booster',
			'ae2:cell_component_16k',
			'2x ae2:wireless_receiver',
			'2x gtceu:ev_emitter',
			'#forge:exquisite_gems/fluix',
			'2x #forge:plates/ruthenium')
		.inputFluids(Fluid.of('gtceu:epoxy', 144))
		.itemOutputs('tfg:wireless_card')
		.duration(300)
		.EUt(GTValues.VA[GTValues.EV])
	
}
