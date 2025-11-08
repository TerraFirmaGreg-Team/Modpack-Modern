// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS_} event 
 */
const registerAdAstraRecipes = (event) => {

	event.remove({ mod: 'ad_astra' })

	//#region Rocket parts

	event.recipes.gtceu.shaped('ad_astra:launch_pad', [
		'BAB',
		'AAA',
		'BAB'
	], {
		A: '#forge:plates/steel',
		B: '#forge:rods/steel'
	}).addMaterialInfo().id('tfg:launch_pad')

	//#region Tier 1 rocket

	event.recipes.gtceu.assembler('tfg:rocket_nose_cone_t1')
		.itemInputs(
			'gtceu:hv_emitter',
			ChemicalHelper.get(TagPrefix.plateDense, TFGHelpers.getMaterial('rocket_alloy_t1'), 1),
			ChemicalHelper.get(TagPrefix.plateDouble, GTMaterials.StainlessSteel, 3))
		.inputFluids(Fluid.of('gtceu:polyethylene', 144 * 16))
		.itemOutputs('ad_astra:rocket_nose_cone')
		.duration(1200)
		.circuit(2)
		.EUt(480)
		.addMaterialInfo(true, true)


	event.recipes.gtceu.pyrolyse_oven('tfg:pyrolyse_vitrified_asbestos_dust')
		.inputFluids(Fluid.of('gtceu:nitrogen', 100))
		.itemInputs('gtceu:asbestos_dust')
		.itemOutputs('gtceu:vitrified_asbestos_dust')
		.duration(80)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.mixer('tfg:rocket_alloy_t1')
		.itemInputs('6x #forge:dusts/aluminium', '2x #forge:dusts/stainless_steel')
		.inputFluids(Fluid.of('gtceu:red_steel', 144))
		.itemOutputs('9x #forge:dusts/rocket_alloy_t1')
		.duration(580)
		.circuit(2)
		.EUt(480)

	event.recipes.gtceu.chemical_bath('tfg:rocket_alloy_cool_down_water')
		.itemInputs('#forge:hot_ingots/rocket_alloy_t1')
		.inputFluids(Fluid.of('minecraft:water', 100))
		.itemOutputs('#forge:ingots/rocket_alloy_t1')
		.duration(400)
		.EUt(120)

	event.recipes.gtceu.chemical_bath('tfg:rocket_alloy_cool_down_distilled_water')
		.itemInputs('#forge:hot_ingots/rocket_alloy_t1')
		.inputFluids(Fluid.of('gtceu:distilled_water', 100))
		.itemOutputs('#forge:ingots/rocket_alloy_t1')
		.duration(250)
		.EUt(120)

	event.recipes.gtceu.assembler(`tfg:rocket_fin_t1`)
		.itemInputs(
			ChemicalHelper.get(TagPrefix.plate, TFGHelpers.getMaterial('rocket_alloy_t1'), 1),
			ChemicalHelper.get(TagPrefix.plateDouble, GTMaterials.StainlessSteel, 1)
		)
		.itemOutputs('ad_astra:rocket_fin')
		.duration(150)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true)


	event.recipes.gtceu.assembler('tfg:rocket_steel_engine')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.plateDouble, GTMaterials.StainlessSteel, 2),
			'2x #gtceu:circuits/hv',
			'gtceu:hv_electric_pump',
			'2x gtceu:power_thruster',
			ChemicalHelper.get(TagPrefix.rotor, GTMaterials.StainlessSteel, 1)
		)
		.inputFluids(Fluid.of('gtceu:blue_steel', 144 * 8))
		.itemOutputs('ad_astra:steel_engine')
		.duration(600)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true, true)

	event.recipes.gtceu.assembler('ad_astra:assembler_tier_1_rocket')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.plateDense, TFGHelpers.getMaterial('rocket_alloy_t1'), 8),
			'4x ad_astra:rocket_fin',
			'1x ad_astra:steel_engine',
			'1x ad_astra:rocket_nose_cone',
			'16x #forge:insulation_t1',
			'4x #gtceu:circuits/hv'
		)
		.inputFluids(Fluid.of('gtceu:silicon', 144 * 16))
		.itemOutputs('ad_astra:tier_1_rocket')
		.duration(1200)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true, true)

	//#endregion


	//region tier 2 rocket
	
	event.remove({ mod: 'gtceu', input: 'gtceu:hot_rocket_alloy_t2_ingot' })

	event.recipes.gtceu.alloy_blast_smelter('gtceu:alloy_blast_smelter/rocket_alloy_t2')
		.itemInputs('19x #forge:dusts/titanium', '3x #forge:dusts/chromium', '3x #forge:dusts/tin', '3x #forge:dusts/aluminium')
		.inputFluids(Fluid.of('gtceu:vanadium', 144 * 4), Fluid.of('gtceu:distilled_water', 16000))
		.outputFluids(Fluid.of('gtceu:molten_rocket_alloy_t2', 144 * 32))
		.duration(1320 * 20)
		.circuit(2)
		.blastFurnaceTemp(3200)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.alloy_blast_smelter('gtceu:alloy_blast_smelter/rocket_alloy_t2_gas')
		.itemInputs('19x #forge:dusts/titanium', '3x #forge:dusts/chromium', '3x #forge:dusts/tin', '3x #forge:dusts/aluminium')
		.inputFluids(Fluid.of('gtceu:vanadium', 144 * 4), Fluid.of('gtceu:distilled_water', 16000), Fluid.of('gtceu:helium', 3200))
		.outputFluids(Fluid.of('gtceu:molten_rocket_alloy_t2', 144 * 32))
		.duration(17688)
		.circuit(12)
		.blastFurnaceTemp(3200)
		.EUt(GTValues.VA[GTValues.EV])

		event.recipes.gtceu.vacuum_freezer('tfg:vacuum_freezer/cool_molten_rocket_alloy_t2')
		.notConsumable('gtceu:ingot_casting_mold')
		.inputFluids(Fluid.of('gtceu:molten_rocket_alloy_t2', 144), Fluid.of('tfg:cryogenized_fluix', 288))
		.itemOutputs('#forge:ingots/rocket_alloy_t2')
		.duration(120)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.mixer('tfg:rocket_alloy_t2')
		.itemInputs('19x #forge:dusts/titanium', '3x #forge:dusts/chromium', '3x #forge:dusts/tin', '3x #forge:dusts/aluminium')
		.inputFluids(Fluid.of('gtceu:vanadium', 144 * 4))
		.itemOutputs('32x #forge:dusts/rocket_alloy_t2')
		.duration(15 * 20)
		.circuit(5)
		.EUt(GTValues.VA[GTValues.EV])
	
	event.recipes.gtceu.vacuum_freezer('tfg:vacuum_freezer/cool_rocket_alloy_t2')
		.itemInputs('#forge:hot_ingots/rocket_alloy_t2')
		.inputFluids(Fluid.of('gtceu:distilled_water', 500), Fluid.of('tfg:cryogenized_fluix', 288))
		.itemOutputs('#forge:ingots/rocket_alloy_t2')
		.duration(120)
		.EUt(GTValues.VA[GTValues.HV])
		
	event.recipes.gtceu.assembler('tfg:rocket_fin_t2')
		.itemInputs('#forge:plates/rocket_alloy_t2', 
					'#forge:double_plates/titanium')
		.itemOutputs('tfg:rocket_fin_t2')
		.duration(180)
		.circuit(3)
		.EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true)
		
	event.recipes.gtceu.assembler('tfg:rocket_cone_t2')
		.itemInputs('gtceu:ev_emitter', '#forge:dense_plates/rocket_alloy_t2', '#forge:double_plates/titanium', 
					'#forge:double_plates/desh')
		.itemOutputs('tfg:rocket_cone_t2')
		.duration(1440)
		.circuit(3)
		.EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true)

	
	event.recipes.gtceu.assembler('tfg:rocket_desh_engine')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.plateDouble, GTMaterials.Titanium, 4),
			'2x #gtceu:circuits/ev',
			'gtceu:ev_electric_pump',
			'3x gtceu:advanced_power_thruster',
			ChemicalHelper.get(TagPrefix.rod, GTMaterials.NeodymiumMagnetic, 4),
			ChemicalHelper.get(TagPrefix.rotor, GTMaterials.Titanium, 1))
		.inputFluids(Fluid.of('gtceu:desh', 144 * 12))
		.itemOutputs('ad_astra:desh_engine')
		.duration(800)
		.circuit(3)
		.EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true, true)
	
	event.recipes.gtceu.assembler('ad_astra:tier_2_rocket')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.plateDense, TFGHelpers.getMaterial('rocket_alloy_t2'), 12),
			'4x tfg:rocket_fin_t2',
			'1x ad_astra:desh_engine',
			'1x tfg:rocket_cone_t2',
			'12x #forge:insulation_t2/roll',
			'4x #gtceu:circuits/ev'
		)
		.inputFluids(Fluid.of('gtceu:titanium', 144 * 16))
		.itemOutputs('ad_astra:tier_2_rocket')
		.duration(1440)
		.circuit(3)
		.EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true, true)

	//#endregion

	//region Tier 3 DISABLED UNTIL IV
	event.remove({ id: "gtceu:vacuum_freezer/cool_hot_rocket_alloy_t3_ingot" })
	event.remove({ id: "gtceu:vacuum_freezer/rocket_alloy_t3" })
	/*
	event.recipes.gtceu.vacuum_freezer('tfg:cool_rocket_alloy_t3')
		.inputFluids(Fluid.of('gtceu:molten_rocket_alloy_t3', 144), Fluid.of('gtceu:ice', 4000))
		.notConsumable('gtceu:ingot_casting_mold')
		.itemOutputs('#forge:ingots/rocket_alloy_t3')
		.duration(800)
		.EUt(GTValues.VA[GTValues.HV])
	event.recipes.gtceu.vacuum_freezer('tfg:cool_hot_rocket_alloy_t3')
		.itemInputs('#forge:hot_ingots/rocket_alloy_t3')
		.inputFluids(Fluid.of('gtceu:liquid_helium', 500))
		.itemOutputs('#forge:ingots/rocket_alloy_t3')
		.outputFluids(Fluid.of('gtceu:helium', 250))
		.duration(400)
		.EUt(GTValues.VA[GTValues.HV])
		
	//Add some unique cooling thing for molten ingots
	
	event.recipes.gtceu.assembler('tfg:rocket_fin_t3')
		.itemInputs('#forge:plates/rocket_alloy_t3', '#forge:double_plates/tungsten_steel')
		.itemOutputs('tfg:rocket_fin_t3')
		.duration(220)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true)
		
	event.recipes.gtceu.assembler('tfg:rocket_cone_t3')
		.itemInputs('gtceu:iv_emitter', '#forge:dense_plates/rocket_alloy_t3', '#forge:double_plates/tungsten_steel', 
					'#forge:double_plates/ostrum', 'gtceu:plutonium_nugget') //change this to the pellet
		.itemOutputs('tfg:rocket_cone_t3')
		.duration(1700)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true)
	
	event.recipes.gtceu.assembler('tfg:elite_power_thruster')
		.itemInputs('gtceu:ev_electric_motor', '2x #forge:rings/titanium', '#forge:rods/titanium',
					'gtceu:ultimet_rotor', '2x gtceu:aluminium_single_cable')
		.itemOutputs('tfg:elite_power_thruster')
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
		.addMaterialInfo(true)
	
	event.recipes.gtceu.assembler('tfg:rocket_ostrum_engine')
		.itemInputs(
			'6x #forge:double_plates/tungsten_steel',
			'4x #gtceu:circuits/iv',
			'gtceu:iv_electric_pump',
			'3x tfg:elite_power_thruster',
			'4x #forge:insulation_t3/cryo',
			'6x #forge:rods/magnetic_neodymium',
			'#forge:rotors/tungsten_steel')
		.inputFluids(Fluid.of('gtceu:ostrum', 144 * 16))
		.itemOutputs('ad_astra:ostrum_engine')
		.duration(960)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true, true)
		
	event.recipes.gtceu.assembler('tfg:rocket_ostrum_tank')
		.itemInputs(
			'4x #forge:double_plates/rocket_alloy_t3',
			'gtceu:iv_electric_pump',
			'tfg:elite_power_thruster',
			'2x #forge:insulation_t3/cryo')
		.inputFluids(Fluid.of('gtceu:ostrum', 144 * 4))
		.itemOutputs('ad_astra:ostrum_tank')
		.duration(400)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true, true)
	
	event.recipes.gtceu.assembler('ad_astra:tier_3_rocket')
		.itemInputs(
			'16x #forge:dense_plates/rocket_alloy_t3',
			'4x tfg:rocket_fin_t3',
			'1x ad_astra:ostrum_engine',
			'2x ad_astra:ostrum_tank',
			'1x tfg:rocket_cone_t3',
			'8x #forge:insulation_t3/sheet'
		)
		.inputFluids(Fluid.of('gtceu:bromine', 1000 * 16))
		.itemOutputs('ad_astra:tier_3_rocket')
		.duration(1700)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true, true)
	
	//#endregion
*/
	//#region space suits NETHERITE STUFF DISABLED UNTIL IV

	event.recipes.gtceu.forming_press('space_suit_fabric')
		.itemInputs(
			'#forge:foils/aluminium',
			'gtceu:carbon_fiber_mesh',
			'#forge:foils/silicone_rubber',
			'tfg:polycaprolactam_fabric'
		)
		.itemOutputs('2x tfg:space_suit_fabric')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true)
	
	event.recipes.gtceu.forming_press('better_space_suit_fabric')
		.itemInputs(
			'#forge:foils/polybenzimidazole',
			'gtceu:carbon_fiber_mesh',
			'#forge:aerogels',
			'tfg:glacian_wool'
		)
		.itemOutputs('2x tfg:better_space_suit_fabric')
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true)

	event.recipes.gtceu.shaped('ad_astra:space_helmet', [
		'AAA',
		'ADA',
		'BBB'
	], {
		A: 'gtceu:tempered_glass',
		B: 'tfg:space_suit_fabric',
		D: '#forge:small_fluid_pipes/polyethylene'
	}).addMaterialInfo().id('tfg:space_helmet')

	event.recipes.gtceu.assembler('ad_astra:netherite_space_helmet')
		.itemInputs(
			'ad_astra:space_helmet',
			'2x #forge:plates/tungsten_steel',
			'1x #forge:plates/ostrum',
			'3x tfg:better_space_suit_fabric',
			'5x gtceu:laminated_glass'
		)
		.itemOutputs('ad_astra:netherite_space_helmet')
		.duration(400)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true)

	event.recipes.gtceu.shaped('ad_astra:space_suit', [
		'B B',
		'BDB',
		'BBB'
	], {
		B: 'tfg:space_suit_fabric',
		D: 'ad_astra:oxygen_gear'
	}).addMaterialInfo().id('tfg:space_suit')

	event.shapeless('ad_astra:space_suit', ['ad_astra:space_suit'])
		.id('tfg:empty_space_suit')

	event.recipes.gtceu.assembler('ad_astra:netherite_space_suit')
		.itemInputs(
			'ad_astra:space_suit',
			'3x #forge:plates/tungsten_steel',
			'2x #forge:plates/ostrum',
			'5x tfg:better_space_suit_fabric'
		)
		.itemOutputs('ad_astra:netherite_space_suit')
		.duration(400)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true)

	event.shapeless('ad_astra:netherite_space_suit', ['ad_astra:netherite_space_suit'])
		.id('tfg:empty_netherite_space_suit')

	event.recipes.gtceu.shaped('ad_astra:space_pants', [
		'BAB',
		'B B',
		'B B'
	], {
		A: 'gtceu:hv_electric_motor',
		B: 'tfg:space_suit_fabric',
	}).addMaterialInfo().id('tfg:space_pants')

	event.recipes.gtceu.assembler('ad_astra:netherite_space_pants')
		.itemInputs(
			'ad_astra:space_pants', 
			'2x #forge:plates/tungsten_steel', 
			'2x #forge:plates/ostrum',
			'4x tfg:better_space_suit_fabric'
		)
		.itemOutputs('ad_astra:netherite_space_pants')
		.duration(400)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true)

	event.recipes.gtceu.shaped('ad_astra:space_boots', [
		'B B',
		'A A'
	], {
		A: '#forge:plates/polyphenylene_sulfide',
		B: 'tfg:space_suit_fabric'
	}).addMaterialInfo().id('tfg:space_boots')

	event.recipes.gtceu.assembler('ad_astra:netherite_space_boots')
		.itemInputs(
			'ad_astra:space_boots', 
			'1x #forge:plates/tungsten_steel', 
			'1x #forge:plates/ostrum',
			'2x tfg:better_space_suit_fabric'
		)
		.itemOutputs('ad_astra:netherite_space_boots')
		.duration(400)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true)


	event.recipes.gtceu.shaped('ad_astra:oxygen_gear', [
		'BAB',
		'ECE',
		'BDB'
	], {
		A: '#gtceu:circuits/hv',
		B: '#forge:tiny_fluid_pipes/stainless_steel',
		C: 'gtceu:hv_electric_pump',
		D: 'gtceu:fluid_detector_cover',
		E: 'ad_astra:gas_tank'
	}).addMaterialInfo().id('tfg:oxygen_gear')

	//#endregion

	//#region Gas tanks

	event.recipes.gtceu.shaped('ad_astra:gas_tank', [
		'ABA',
		'ACA',
		'AAA'
	], {
		A: '#forge:foils/polyphenylene_sulfide',
		B: '#forge:tiny_fluid_pipes/polyethylene',
		C: 'gtceu:aluminium_fluid_cell'
	}).addMaterialInfo().id('tfg:gas_tank')

	event.shapeless('ad_astra:gas_tank', ['ad_astra:gas_tank'])
		.id('tfg:empty_gas_tank')

	event.recipes.gtceu.shaped('ad_astra:large_gas_tank', [
		'ABA',
		'ACA',
		'AAA'
	], {
		A: '#forge:sheets/polyphenylene_sulfide',
		B: '#forge:small_fluid_pipes/polyethylene',
		C: 'gtceu:stainless_steel_fluid_cell'
	}).addMaterialInfo().id('tfg:large_gas_tank')

	event.shapeless('ad_astra:large_gas_tank', ['ad_astra:large_gas_tank'])
		.id('tfg:empty_large_gas_tank')

	//#endregion

	//#region Machines
	event.recipes.gtceu.shaped('ad_astra:oxygen_distributor', [
		'DBD',
		'ACA',
		'DBD'
	], {
		A: '#forge:plates/stainless_steel',
		B: '#gtceu:circuits/hv',
		C: 'gtceu:hv_machine_hull',
		D: 'gtceu:filter_casing'
	}).addMaterialInfo().id('tfg:oxygen_distributor')

	event.recipes.gtceu.shaped('ad_astra:gravity_normalizer', [
		'A A',
		'CBC',
		'ADA'
	], {
		A: '#forge:rods/magnetic_neodymium',
		B: 'gtceu:mv_field_generator',
		C: '#forge:plates/titanium',
		D: 'gtceu:ev_polarizer',
	}).addMaterialInfo().id('tfg:gravity_normalizer')

	event.recipes.gtceu.shaped('ad_astra:oxygen_sensor', [
		'AEA',
		'BDC',
		'AAA'
	], {
		A: '#forge:plates/red_alloy',
		B: 'gtceu:activity_detector_cover',
		C: 'gtceu:fluid_detector_cover',
		D: 'gtceu:mv_machine_hull',
		E: '#gtceu:circuits/mv'
	}).addMaterialInfo().id('tfg:oxygen_sensor')

	event.recipes.gtceu.laser_engraver('ad_astra:photovoltaic_etrium_cell_silicon')
		.itemInputs('gtceu:silicon_wafer', '#forge:glass_panes', 'gtceu:carbon_fiber_plate')
		.itemOutputs('tfg:photo_cell_t1')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(100)

	event.recipes.gtceu.laser_engraver('ad_astra:photovoltaic_etrium_cell_phosphorous')
		.itemInputs('gtceu:phosphorus_wafer', '#forge:glass_panes', 'gtceu:carbon_fiber_plate')
		.itemOutputs('2x tfg:photo_cell_t1')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(100)

	event.recipes.gtceu.laser_engraver('ad_astra:photovoltaic_etrium_cell_naquadah')
		.itemInputs('gtceu:naquadah_wafer', '#forge:glass_panes', 'gtceu:carbon_fiber_plate')
		.itemOutputs('4x tfg:photo_cell_t1')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(100)

	event.recipes.gtceu.laser_engraver('ad_astra:photovoltaic_etrium_cell_neutronium')
		.itemInputs('gtceu:neutronium_wafer', '#forge:glass_panes', 'gtceu:carbon_fiber_plate')
		.itemOutputs('8x tfg:photo_cell_t1')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(100)

	event.recipes.gtceu.shaped('2x ad_astra:solar_panel', [
		'AAA',
		' C ',
		'BFE'
	], {
		A: 'tfg:photo_cell_t1',
		B: '#gtceu:batteries/mv',
		C: '#forge:rods/long/aluminium',
		E: '#gtceu:circuits/mv',
		F: 'gtceu:mv_machine_hull'
	}).addMaterialInfo().id('tfg:solar_panel')

	//#endregion

	//#region Радио

	event.recipes.gtceu.shaped('ad_astra:radio', [
		'AB ',
		'CDC',
		'CCC'
	], {
		A: 'gtceu:lv_sensor',
		B: '#forge:tools/screwdrivers',
		C: '#forge:plates/polyethylene',
		D: '#gtceu:circuits/lv'
	}).addMaterialInfo().id('tfg:radio')

	//#endregion

	//#region Rover

	event.recipes.gtceu.shaped('ad_astra:wheel', [
		' A ',
		'ABA',
		' A '
	], {
		A: '#forge:plates/polyphenylene_sulfide',
		B: '#forge:rings/stainless_steel',
	}).addMaterialInfo().id('tfg:ad_astra_wheel')

	event.recipes.gtceu.assembler('tfg:tier_1_rover')
		.itemInputs(
			'gtceu:mv_sensor',
			'ad_astra:radio',
			'ad_astra:gas_tank',
			'4x ad_astra:wheel',
			'2x gtceu:hv_electric_motor',
			'4x #forge:plates/stainless_steel',
			'4x #forge:frames/stainless_steel')
		.itemOutputs('ad_astra:tier_1_rover')
		.duration(400)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true)

	//#endregion


	//#region Колесо

	event.shaped('ad_astra:white_flag', [
		'ABB',
		'ABB',
		'A  '
	], {
		A: '#forge:rods/long/steel',
		B: '#tfc:high_quality_cloth',
	}).id('tfg:white_flag')

	event.recipes.gtceu.chemical_bath(`tfg:ad_astra_flag_bleaching`)
		.itemInputs('#ad_astra:flags')
		.inputFluids(Fluid.of(`gtceu:chlorine`, 36))
		.itemOutputs(`ad_astra:white_flag`)
		.duration(150)
		.EUt(4)
		.category(GTRecipeCategories.CHEM_DYES)

	global.MINECRAFT_DYE_NAMES.forEach(color => {
		if (color !== "white") {
			event.recipes.gtceu.chemical_bath(`tfg:ad_astra_${color}_flag`)
				.itemInputs('ad_astra:white_flag')
				.inputFluids(Fluid.of(`tfc:${color}_dye`, 36))
				.itemOutputs(`ad_astra:${color}_flag`)
				.duration(150)
				.EUt(4)
				.category(GTRecipeCategories.CHEM_DYES)
		}
	})

	//#endregion

	// #region Ingots

	event.recipes.gtceu.chemical_bath('tfg:desh_cool_down_water')
		.itemInputs('#forge:hot_ingots/desh')
		.inputFluids(Fluid.of('minecraft:water', 100))
		.itemOutputs('#forge:ingots/desh')
		.duration(400)
		.EUt(120)

	event.recipes.gtceu.chemical_bath('tfg:desh_cool_down_distilled_water')
		.itemInputs('#forge:hot_ingots/desh')
		.inputFluids(Fluid.of('gtceu:distilled_water', 100))
		.itemOutputs('#forge:ingots/desh')
		.duration(250)
		.EUt(120)

	// #endregion

	//#region Воздушный пистолет

	event.shaped('ad_astra:zip_gun', [
		'ACC',
		'DB ',
		'   '
	], {
		A: 'gtceu:lv_electric_pump',
		B: '#forge:bolts/steel',
		C: '#forge:tiny_fluid_pipes/steel',
		D: 'ad_astra:gas_tank',
	}).id('tfg:zip_gun')

	//#endregion

	//#region Космо картина

	event.shaped('ad_astra:space_painting', [
		'AAA',
		'ACA',
		'AAA'
	], {
		A: '#forge:rods/desh',
		C: '#tfc:high_quality_cloth',
	}).id('tfg:space_painting')

	//#endregion

	//#region Convert whatever fluids we want into the breathable gas needed for the Oxygen Distributor

	event.custom({
		type: 'ad_astra:oxygen_loading',
		cookingtime: 1,
		energy: 30,
		input: {
			ingredient: {
				fluid: 'gtceu:air'
			},
			millibuckets: 1
		},
		result: {
			fluid: 'ad_astra:oxygen',
			millibuckets: 100
		}
	}).id('ad_astra:oxygen_loading/air_from_air')

	global.BREATHABLE_COMPRESSED_AIRS.forEach(x => {
		event.custom({
			type: 'ad_astra:oxygen_loading',
			cookingtime: 1,
			energy: 30,
			input: {
				ingredient: {
					fluid: x
				},
				millibuckets: 1
			},
			result: {
				fluid: 'ad_astra:oxygen',
				millibuckets: 1000
			}
		}).id(`ad_astra:oxygen_loading/air_from_${x.split(':')[1]}`)
	})

	//#endregion

	//#region Misc blocks

	event.shaped('ad_astra:vent', [
		' B ',
		'BAB',
		' B '
	], {
		A: 'gtceu:steel_frame',
		B: '#tfg:metal_bars'
	}).id('tfg:shaped/ad_astra_vent')

	//#endregion

	//#region Decoration blocks

	global.MINECRAFT_DYE_NAMES.forEach(color => {
		event.shaped(`ad_astra:${color}_industrial_lamp`, [
			' N ',
			'DTD',
			' P '
		], {
			N: '#forge:rods/steel',
			T: 'minecraft:glowstone',
			D: `minecraft:${color}_stained_glass_pane`,
			P: '#forge:plates/steel'
		})
			.id(`tfg:shaped/ad_astra_${color}_industrial_lamp`);

		event.shaped(`ad_astra:small_${color}_industrial_lamp`, [
			' N ',
			'DTD',
			' P '
		], {
			N: '#forge:bolts/steel',
			T: 'minecraft:glowstone',
			D: `minecraft:${color}_stained_glass_pane`,
			P: '#forge:rods/steel'
		})
			.id(`tfg:shaped/ad_astra_small_${color}_industrial_lamp`);
	})

	const DECO_BLOCKS = [
		{ type: 'iron', material: 'wrought_iron' },
		{ type: 'steel', material: 'steel' },
		{ type: 'desh', material: 'desh' },
		{ type: 'calorite', material: 'calorite' },
		{ type: 'ostrum', material: 'ostrum' }
	]

	DECO_BLOCKS.forEach(x => {

		event.recipes.gtceu.assembler(`tfg:ad_astra_${x.type}_plating`)
			.itemInputs(`#forge:storage_blocks/${x.material}`)
			.inputFluids(Fluid.of('gtceu:polyethylene', 36))
			.itemOutputs(`16x ad_astra:${x.type}_plating`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.LV])
			.circuit(1)

		event.recipes.gtceu.chemical_bath(`tfg:ad_astra_glowing_${x.type}_pillar`)
			.itemInputs(`ad_astra:${x.type}_pillar`)
			.inputFluids(Fluid.of('gtceu:glowstone', 144))
			.itemOutputs(`ad_astra:glowing_${x.type}_pillar`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.LV])

		event.recipes.gtceu.assembler(`tfg:ad_astra_${x.type}_factory_block`)
			.itemInputs(`#forge:storage_blocks/${x.material}`)
			.inputFluids(Fluid.of('gtceu:polyethylene', 36))
			.itemOutputs(`16x ad_astra:${x.type}_factory_block`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.LV])
			.circuit(2)

		event.recipes.gtceu.assembler(`tfg:ad_astra_${x.type}_panel`)
			.itemInputs(`#forge:storage_blocks/${x.material}`)
			.inputFluids(Fluid.of('gtceu:polyethylene', 36))
			.itemOutputs(`16x ad_astra:${x.type}_panel`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.LV])
			.circuit(3)

		event.recipes.gtceu.assembler(`tfg:ad_astra_${x.type}_pillar`)
			.itemInputs(`#forge:storage_blocks/${x.material}`)
			.inputFluids(Fluid.of('gtceu:polyethylene', 36))
			.itemOutputs(`16x ad_astra:${x.type}_pillar`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.LV])
			.circuit(4)

		event.recipes.gtceu.assembler(`tfg:ad_astra_${x.type}_plateblock`)
			.itemInputs(`#forge:storage_blocks/${x.material}`)
			.inputFluids(Fluid.of('gtceu:polyethylene', 36))
			.itemOutputs(`16x ad_astra:${x.type}_plateblock`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.LV])
			.circuit(5)

		event.recipes.gtceu.assembler(`tfg:ad_astra_encased_${x.type}_block`)
			.itemInputs(`#forge:storage_blocks/${x.material}`)
			.inputFluids(Fluid.of('gtceu:polyethylene', 36))
			.itemOutputs(`16x ad_astra:encased_${x.type}_block`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.LV])
			.circuit(6)

		// Stonecutter recipes as well, so you can switch between them
		event.stonecutting(`ad_astra:${x.type}_plating`, `#tfg:ad_astra_${x.type}_blocks`)
		event.stonecutting(`ad_astra:${x.type}_factory_block`, `#tfg:ad_astra_${x.type}_blocks`)
		event.stonecutting(`ad_astra:${x.type}_panel`, `#tfg:ad_astra_${x.type}_blocks`)
		event.stonecutting(`ad_astra:${x.type}_pillar`, `#tfg:ad_astra_${x.type}_blocks`)
		event.stonecutting(`ad_astra:${x.type}_plateblock`, `#tfg:ad_astra_${x.type}_blocks`)
		event.stonecutting(`ad_astra:encased_${x.type}_block`, `#tfg:ad_astra_${x.type}_blocks`)

		// Stairs n slabs
		event.stonecutting(`ad_astra:${x.type}_plating_stairs`, `ad_astra:${x.type}_plating`)
		event.stonecutting(`2x ad_astra:${x.type}_plating_slab`, `ad_astra:${x.type}_plating`)

		// Pressure plates
		event.shaped(`ad_astra:${x.type}_plating_pressure_plate`, [
			' B ',
			'CDC',
			' E '
		], {
			B: '#tfc:hammers',
			C: `ad_astra:${x.type}_plating_slab`,
			D: '#forge:small_springs',
			E: '#forge:tools/screwdrivers'
		}).id(`tfg:shaped/ad_astra_${x.type}_pressure_plate`)

		event.recipes.gtceu.assembler(`tfg:ad_astra_${x.type}_pressure_plate`)
			.itemInputs('#forge:small_springs', `2x ad_astra:${x.type}_plating_slab`)
			.itemOutputs(`ad_astra:${x.type}_plating_pressure_plate`)
			.circuit(3)
			.duration(50)
			.EUt(2)

		// Buttons
		generateCutterRecipe(event, `ad_astra:${x.type}_plating_pressure_plate`, `6x ad_astra:${x.type}_plating_button`, 50, 7, `ad_astra_${x.type}_button`)

		// Doors
		event.recipes.gtceu.assembler(`tfg:ad_astra_${x.type}_sliding_door`)
			.itemInputs(`9x #forge:plates/${x.material}`, '2x #forge:glass_panes')
			.inputFluids(Fluid.of('gtceu:polyethylene', 36))
			.itemOutputs(`ad_astra:${x.type}_sliding_door`)
			.duration(100)
			.EUt(GTValues.VA[GTValues.LV])
			.circuit(20)
			.addMaterialInfo(true, true)
	})

	event.shapeless('ad_astra:marked_iron_pillar', ['ad_astra:iron_pillar', '#forge:dyes/yellow', '#forge:dyes/black'])
		.id('tfg:shapeless/marked_iron_pillar')

	event.recipes.gtceu.assembler(`tfg:ad_astra_reinforced_door`)
		.itemInputs(`9x #forge:plates/steel`, '2x #forge:glass_panes')
		.inputFluids(Fluid.of('gtceu:polyethylene', 36))
		.itemOutputs(`ad_astra:reinforced_door`)
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
		.circuit(21)
		.addMaterialInfo(true, true)

	event.recipes.gtceu.assembler(`tfg:ad_astra_airlock`)
		.itemInputs(`9x #forge:plates/steel`)
		.inputFluids(Fluid.of('gtceu:polyethylene', 36))
		.itemOutputs(`ad_astra:airlock`)
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
		.circuit(22)
		.addMaterialInfo(true, true)

	event.recipes.gtceu.assembler(`tfg:ad_astra_steel_door`)
		.itemInputs('createdeco:industrial_iron_door', '#forge:glass_panes')
		.inputFluids(Fluid.of('gtceu:polyethylene', 36))
		.itemOutputs('ad_astra:steel_door')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
		.addMaterialInfo(true, true)

	event.recipes.gtceu.assembler(`tfg:ad_astra_steel_trapdoor`)
		.itemInputs('tfc:metal/trapdoor/steel', '#forge:glass_panes')
		.inputFluids(Fluid.of('gtceu:polyethylene', 36))
		.itemOutputs('ad_astra:steel_trapdoor')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
		.addMaterialInfo(true, true)

	// Etrium only has factory block, encased block, plateblock, panel, and (storage) block

	event.recipes.gtceu.assembler(`tfg:ad_astra_etrium_panel`)
		.itemInputs(`#forge:storage_blocks/etrium`)
		.inputFluids(Fluid.of('gtceu:polyethylene', 36))
		.itemOutputs(`16x ad_astra:etrium_panel`)
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
		.circuit(3)

	event.recipes.gtceu.assembler(`tfg:ad_astra_etrium_factory_block`)
		.itemInputs(`#forge:storage_blocks/etrium`)
		.inputFluids(Fluid.of('gtceu:polyethylene', 36))
		.itemOutputs(`16x ad_astra:etrium_factory_block`)
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
		.circuit(2)

	event.recipes.gtceu.assembler(`tfg:ad_astra_etrium_plateblock`)
		.itemInputs(`#forge:storage_blocks/etrium`)
		.inputFluids(Fluid.of('gtceu:polyethylene', 36))
		.itemOutputs(`16x ad_astra:etrium_plateblock`)
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
		.circuit(5)

	event.recipes.gtceu.assembler(`tfg:ad_astra_encased_etrium_block`)
		.itemInputs(`#forge:storage_blocks/etrium`)
		.inputFluids(Fluid.of('gtceu:polyethylene', 36))
		.itemOutputs(`16x ad_astra:encased_etrium_block`)
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
		.circuit(6)

	event.stonecutting('ad_astra:etrium_panel', '#tfg:ad_astra_etrium_blocks')
	event.stonecutting('ad_astra:etrium_factory_block', '#tfg:ad_astra_etrium_blocks')
	event.stonecutting('ad_astra:encased_etrium_block', '#tfg:ad_astra_etrium_blocks')
	event.stonecutting('ad_astra:etrium_plateblock', '#tfg:ad_astra_etrium_blocks')

	event.recipes.tfc.loom(
		'8x ad_astra:glacian_fur',
		'8x tfg:glacian_wool',
		8,
		'ad_astra:block/glacian_fur'
	)

	event.recipes.gtceu.assembler('tfg:assembler/glacian_fur')
		.itemInputs('tfg:glacian_wool')
		.circuit(10)
		.itemOutputs('ad_astra:glacian_fur')
		.duration(100)
		.EUt(4)

	event.shaped('minecraft:pink_bed', [
		'AAA',
		'BBB'
	], {
		A: 'ad_astra:glacian_fur',
		B: '#tfc:lumber'
	}).id('tfg:shaped/glacian_bed')

	//#endregion

	//#region Space stations

	event.custom({
		type: "ad_astra:space_station_recipe",
		dimension: "ad_astra:earth_orbit",
		ingredients: [
			{ count: 43, ingredient: { item: "gtceu:aluminium_frame" }},
			{ count: 24, ingredient: { item: "gtceu:glass_plate" }},
			{ count: 4, ingredient: { item: "minecraft:glowstone_dust" }},
			{ count: 1, ingredient: { item: "ad_astra:launch_pad" }}
		],
		structure: "tfg:orbit/space_station"
	})

	event.custom({
		type: "ad_astra:space_station_recipe",
		dimension: "ad_astra:moon_orbit",
		ingredients: [
			{ count: 43, ingredient: { item: "gtceu:aluminium_frame" }},
			{ count: 24, ingredient: { item: "gtceu:glass_plate" }},
			{ count: 4, ingredient: { item: "minecraft:glowstone_dust" }},
			{ count: 1, ingredient: { item: "ad_astra:launch_pad" }}
		],
		structure: "tfg:orbit/space_station"
	})

	event.custom({
		type: "ad_astra:space_station_recipe",
		dimension: "ad_astra:mars_orbit",
		ingredients: [
			{ count: 43, ingredient: { item: "gtceu:aluminium_frame" }},
			{ count: 24, ingredient: { item: "gtceu:glass_plate" }},
			{ count: 4, ingredient: { item: "minecraft:glowstone_dust" }},
			{ count: 1, ingredient: { item: "ad_astra:launch_pad" }}
		],
		structure: "tfg:orbit/space_station"
	})

	//#endregion

	//#region Wood
		event.remove({ type: 'greate:cutting', input: '#ad_astra:aeronos_caps' })
		event.remove({ type: 'greate:cutting', input: 'ad_astra:aeronos_planks' })
		event.remove({ type: 'greate:cutting', input: '#ad_astra:strophar_caps' })
		event.remove({ type: 'greate:cutting', input: 'ad_astra:glacian_log' })
		event.remove({ type: 'greate:cutting', input: 'ad_astra:stripped_glacian_log' })
		event.remove({ type: 'greate:cutting', input: 'ad_astra:strophar_planks' })
		event.remove({ type: 'greate:cutting', input: 'ad_astra:glacian_planks' })

		global.AD_ASTRA_WOOD.forEach(wood => {
			woodBuilder(event, wood.name, wood.lumber, wood.logs, wood.log, wood.stripped_log, wood.plank, wood.stair, wood.slab, wood.door, wood.trapdoor, wood.fence, wood.fence_gate, wood.support, wood.pressure_plate, wood.button)
		})
		
		event.shaped('16x ad_astra:aeronos_ladder', [
			'A A',
			'ABA',
			'A A'
		], {
			A: 'tfg:wood/lumber/aeronos',
			B: ChemicalHelper.get(TagPrefix.rod, GTMaterials.Wood, 1),
		}).id('tfg:shaped/aeronos_ladder')
		
		event.shaped('16x ad_astra:strophar_ladder', [
			'A A',
			'ABA',
			'A A'
		], {
			A: 'tfg:wood/lumber/strophar',
			B: ChemicalHelper.get(TagPrefix.rod, GTMaterials.Wood, 1),
		}).id('tfg:shaped/strophar_ladder')


		generateGreenHouseRecipe(event, '8x tfg:saplings/strophar', 'tfg:semiheavy_ammoniacal_water', 16000,
			'64x ad_astra:strophar_stem', 'tfg:green_house/strophar_mushroom', 'ad_astra:mars', 8, 
			'16x ad_astra:strophar_cap', GTValues.VA[GTValues.MV])
		generateGreenHouseRecipe(event, '8x tfg:saplings/aeronos', 'tfg:semiheavy_ammoniacal_water', 16000, 
			'64x ad_astra:aeronos_stem', 'tfg:green_house/aeronos_mushroom', 'ad_astra:mars', 8,
			'16x ad_astra:aeronos_cap', GTValues.VA[GTValues.MV])
		generateGreenHouseRecipe(event, '8x tfg:saplings/glacian', 'tfg:semiheavy_ammoniacal_water', 16000,
			'64x ad_astra:glacian_log', 'tfg:green_house/glacian_tree', 'ad_astra:mars', 8,
			'8x species:alphacene_moss_block', GTValues.VA[GTValues.MV])
	//#endregion
}
