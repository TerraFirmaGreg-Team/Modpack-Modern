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

	event.recipes.tfc.pot('tfc:powder/charcoal', Fluid.of('tfg:conifer_pitch', 1000), 1200, 300)
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
	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('tfg:airship_balloon', [
			'ABA',
			'BCB',
			'ABA'
		], {
			A: '#forge:string',
			B: 'immersive_aircraft:sail',
			C: 'tfc:bone_needle'
		})
	).id('tfg:shaped/airship_balloon')

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
		.inputFluids(JsonIO.of({ amount: 100, value: { tag: "tfg:clean_water" } }))
		.notConsumable('gtceu:block_casting_mold')
		.itemOutputs('minecraft:ice')
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	event.shapeless('4x firmalife:ice_shavings', ['#forge:dusts/ice', '#forge:tools/hammers'])

	// Cooling water
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
		.circuit(0)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.wiremill('tfg:wiremill/polycaprolactam_string')
		.itemInputs(ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Polycaprolactam, 1))
		.itemOutputs('32x tfg:polycaprolactam_string')
		.duration(100)
		.circuit(0)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('tfg:assembler/phantom_silk')
		.itemInputs('16x tfg:phantom_thread')
		.itemOutputs('1x tfg:phantom_silk')
		.duration(100)
		.circuit(0)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('tfg:assembler/polycaprolactam_fabric')
		.itemInputs('16x tfg:polycaprolactam_string')
		.itemOutputs('1x tfg:polycaprolactam_fabric')
		.duration(100)
		.circuit(0)
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

	event.recipes.gtceu.fluid_solidifier('tfg:fluid_solidifier/dry_ice')
		.inputFluids(Fluid.of('gtceu:carbon_dioxide', 1000))
		.notConsumable('gtceu:block_casting_mold')
		.itemOutputs('2x tfg:dry_ice')
		.duration(100)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.vacuum_freezer('tfg:vacuum_freezer/dry_ice')
		.inputFluids(Fluid.of('gtceu:carbon_dioxide', 1000))
		.notConsumable('gtceu:block_casting_mold')
		.itemOutputs('10x tfg:dry_ice')
		.duration(100)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.chemical_reactor('tfg:chemical_reactor/decompress_dry_ice')
		.outputFluids(Fluid.of('gtceu:carbon_dioxide', 100))
		.itemInputs('1x tfg:dry_ice')
		.duration(20)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.mixer('tfg:clean_foil_pack')
		.itemInputs('1x tfg:used_foil_pack')
		.inputFluids(JsonIO.of({ amount: 100, value: { tag: "tfg:clean_water" } }))
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
		.inputFluids(Fluid.of('gtceu:chloroform', 2000), Fluid.of('gtceu:hydrofluoric_acid', 4000))
		.outputFluids(Fluid.of('tfg:chlorodifluoromethane', 6000))
		.duration(480)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.chemical_reactor('tfg:chemical_reactor/breakdown/chlorodifluoromethane')
		.inputFluids(Fluid.of('tfg:chlorodifluoromethane', 300))
		.outputFluids(Fluid.of('gtceu:tetrafluoroethylene', 100), Fluid.of('gtceu:hydrochloric_acid', 200))
		.duration(100)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('tfg:chemical_reactor/acetylene')
		.inputFluids(Fluid.of('gtceu:methane', 3000), Fluid.of('gtceu:oxygen', 3000))
		.outputFluids(Fluid.of('tfg:acetylene', 100))
		.circuit(4)
		.duration(120)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.chemical_reactor('tfg:chemical_reactor/1_1_1_2_tetrafluoroethane')
		.inputFluids(Fluid.of('tfg:acetylene', 1000), Fluid.of('gtceu:chlorine', 2000), Fluid.of('gtceu:hydrofluoric_acid', 8000))
		.outputFluids(Fluid.of('tfg:1_1_1_2_tetrafluoroethane', 2000), Fluid.of('gtceu:hydrochloric_acid', 6000))
		.circuit(4)
		.duration(480)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.cracker('tfg:cracker/isobutane')
		.inputFluids(Fluid.of('gtceu:butane', 4000))
		.outputFluids(Fluid.of('tfg:isobutane', 1000), Fluid.of('gtceu:lpg', 3000))
		.circuit(4)
		.duration(2400)
		.EUt(GTValues.VA[GTValues.HV])

	// Biodiesel

	event.recipes.gtceu.chemical_reactor(`alcohol_biodiesel`)
		.inputFluids(JsonIO.of({ amount: 1000, value: { tag: "tfc:alcohols" } }))
		.inputFluids(Fluid.of('gtceu:seed_oil', 6000))
		.outputFluids(Fluid.of('gtceu:bio_diesel', 6000))
		.duration(20 * 30)
		.EUt(GTValues.VHA[GTValues.ULV])

	event.recipes.gtceu.extractor(`rapeseed_oil`)
		.itemInputs('tfg:rapeseed_product')
		.outputFluids(Fluid.of('gtceu:seed_oil', 600))
		.duration(20 * 30)
		.EUt(GTValues.VHA[GTValues.ULV])

	event.recipes.gtceu.extractor(`sunflower_oil`)
		.itemInputs('tfg:sunflower_product')
		.outputFluids(Fluid.of('gtceu:seed_oil', 350))
		.duration(20 * 30)
		.EUt(GTValues.VHA[GTValues.ULV])

	event.recipes.tfc.barrel_sealed(1000)
		.inputs('tfg:rapeseed_product', Fluid.of('minecraft:water', 100))
		.outputFluid(Fluid.of('gtceu:seed_oil', 250))
		.id('tfg:barrel/rapeseed_to_oil')

	event.recipes.tfc.barrel_sealed(1000)
		.inputs('tfg:sunflower_product', Fluid.of('minecraft:water', 100))
		.outputFluid(Fluid.of('gtceu:seed_oil', 120))
		.id('tfg:barrel/sunflower_to_oil')
}
