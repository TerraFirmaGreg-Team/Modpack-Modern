"use strict";

function registerTFGCasingRecipes(event) {

	event.recipes.gtceu.assembler('steel_machine_casing')
		.itemInputs(ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 4))
		.itemOutputs('gtceu:steel_machine_casing')
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(16)

	event.shaped('2x tfg:casings/sterling_silver_casing', [
		'ABA',
		'ACA',
		'ADA'
	], {
		A: '#forge:plates/sterling_silver',
		B: '#forge:tools/hammers',
		C: '#forge:frames/invar',
		D: '#forge:tools/wrenches'
	}).id('tfg:shaped/sterling_silver_casing')

	event.recipes.gtceu.assembler('sterling_silver_casing')
		.itemInputs('6x #forge:plates/sterling_silver', '#forge:frames/invar')
		.itemOutputs('2x tfg:casings/sterling_silver_casing')
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(16)
		.addMaterialInfo(true)

	// Railgun
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
			.circuit(6)
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
			.circuit(6)
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
		.addMaterialInfo(true)

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
		.addMaterialInfo(true, true)

	// Solar
	event.recipes.gtceu.assembler('basic_solar_casing')
		.itemInputs('gtceu:steel_machine_casing', 'tfg:photo_cell_t1')
		.itemOutputs('8x tfg:casings/machine_casing_blue_solar_panel')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(16)

	event.recipes.gtceu.assembler('advanced_solar_casing')
		.itemInputs('8x tfg:casings/machine_casing_blue_solar_panel', 'ad_astra:photovoltaic_etrium_cell')
		.itemOutputs('8x tfg:casings/machine_casing_green_solar_panel')
		.inputFluids(Fluid.of('tfg:woods_metal', 288))
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(16)

	event.recipes.gtceu.assembler('elite_solar_casing')
		.itemInputs('8x tfg:casings/machine_casing_green_solar_panel', 'ad_astra:photovoltaic_vesnium_cell')
		.itemOutputs('8x tfg:casings/machine_casing_red_solar_panel')
		.inputFluids(Fluid.of('tfg:bi_pb_sn_cd_in_tl', 288))
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(16)

	event.recipes.gtceu.assembler('tfg:reflector_from_lens')
		.itemInputs(
			'24x gtceu:glass_lens',
			ChemicalHelper.get(TagPrefix.frameGt, GTMaterials.BlackSteel, 1)
		)
		.inputFluids(Fluid.of('gtceu:silver', 1296))
		.itemOutputs('1x tfg:reflector')
		.circuit(6)
		.duration(20 * (60))
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

	// Moon
	event.recipes.gtceu.assembler('iron_desh_casing')
		.itemInputs(ChemicalHelper.get(TagPrefix.plate, GTMaterials.Steel, 6), 'gtceu:desh_frame')
		.itemOutputs('2x tfg:casings/machine_casing_iron_desh')
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(16)
		.addMaterialInfo(true)

	// Evaporation
	event.recipes.gtceu.assembler('tfg:casings/machine_casing_stainless_evaporation')
		.itemInputs('gtceu:clean_machine_casing', '4x gtceu:annealed_copper_double_wire')
		.inputFluids(Fluid.of('gtceu:polyvinyl_chloride', 288))
		.itemOutputs('tfg:casings/machine_casing_stainless_evaporation')
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true, true)

	// Ostrum Linear Acclerator
	event.recipes.gtceu.assembler('tfg:casings/machine_casing_mars')
		.itemInputs('gtceu:clean_machine_casing', '4x #forge:double_wires/kanthal')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 288))
		.itemOutputs('tfg:casings/machine_casing_mars')
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true, true)

	event.recipes.gtceu.assembler('gtceu:atomic_casing')
		.itemInputs('4x #forge:dense_plates/lead', '2x #forge:plates/rtm_alloy', '#forge:frames/titanium')
		.inputFluids(Fluid.of('gtceu:polyvinyl_butyral', 288))
		.itemOutputs('2x gtceu:atomic_casing')
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true, true)

	// Heat Battery deafission:battery_heat_port_ev

	event.recipes.gtceu.assembler('tfg:battery_heat_port_ev')
		.itemInputs(Item.of('gtceu:ev_machine_hull', 1), Item.of('gtceu:rtm_alloy_coil_block'), Item.of('gtceu:silicon_plate', 6))
		.inputFluids(Fluid.of('gtceu:mercury', 4000))
		.itemOutputs('deafission:battery_heat_port_ev')
		//.circuit(6)
		.duration(2.5 * 20)
		.EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true, true)

	event.recipes.gtceu.assembler('tfg:heat_input_hatch_ev')
		.itemInputs(Item.of('gtceu:ev_machine_hull', 1), Item.of('gtceu:rtm_alloy_coil_block'), Item.of('gtceu:beryllium_plate', 6))
		.inputFluids(Fluid.of('gtceu:mercury', 4000))
		.itemOutputs(Item.of('deafission:heat_input_hatch_ev', 1))
		//.circuit(6)
		.duration(2.5 * 20)
		.EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true, true)

	// Small Modular Turbine 

	event.recipes.gtceu.assembler('tfg:machine_casing_desh_ptfe')
		.itemInputs('4x #forge:dense_plates/desh', '2x #forge:dense_plates/lead', Item.of('gtceu:hsla_steel_frame'))
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 288))
		.itemOutputs('tfg:casings/machine_casing_desh_ptfe')
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true, true)

	event.recipes.gtceu.assembler('tfg:uv_smr_fluid_import_hatch')
		.itemInputs('4x #forge:dense_plates/desh', '2x #forge:dense_plates/lead', Item.of('gtceu:iv_input_hatch', 1))
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 288))
		.itemOutputs('tfg:uv_smr_fluid_import_hatch')
		//.circuit(6)
		.duration(2.5 * 20)
		.EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true, true)

	// Vacuum Intake
	event.shaped('tfg:casings/machine_casing_vacuum_engine_intake', [
		'USU',
		'WZW',
		'UTU'
	], {
		S: '#forge:tools/hammers',
		T: '#forge:tools/wrenches',
		W: '#forge:rotors/ultimet',
		U: 'gtceu:ultimet_normal_item_pipe',
		Z: 'gtceu:inert_machine_casing'
	}).id('tfg:shaped/casing_machine_casing_vacuum_engine_intake')

	event.recipes.gtceu.assembler('tfg:casings/machine_casing_vacuum_engine_intake')
		.itemInputs(
			'2x #forge:rotors/ultimet',
			'4x gtceu:ultimet_normal_item_pipe',
			'1x gtceu:inert_machine_casing')
		.itemOutputs('tfg:casings/machine_casing_vacuum_engine_intake')
		.duration(50)
		.EUt(GTValues.VH[GTValues.LV])
		.circuit(2)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('tfg:casings/machine_casing_power_casing')
		.itemInputs('gtceu:ostrum_frame', '4x #forge:plates/titanium_tungsten_carbide', '16x #forge:fine_wires/copper',
					'16x #forge:fine_wires/tungsten_bismuth_oxide_composite')
		.inputFluids(Fluid.of('gtceu:reinforced_epoxy_resin', 288))
		.itemOutputs('4x tfg:machine_casing_power_casing')
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true, true)

	event.recipes.gtceu.assembler('tfg:casings/machine_casing_ptfe_black')
		.itemInputs('6x #forge:plates/black_steel', Item.of('gtceu:black_steel_frame'))
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 216))
		.itemOutputs(Item.of('tfg:casings/machine_casing_ptfe_black', 2))
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(GTValues.VA[GTValues.LV])
		.addMaterialInfo(true, true)

	event.recipes.gtceu.assembler('tfg:casings/machine_casing_ae2')
		.itemInputs('6x #forge:plates/certus_quartz', Item.of('gtceu:stainless_steel_frame'))
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144))
		.itemOutputs(Item.of('tfg:casings/machine_casing_ae2', 2))
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(GTValues.VA[GTValues.LV])
		.addMaterialInfo(true, true)

	event.shaped('2x tfg:casings/machine_casing_pressure_dark', [
		'ACA',
		'ABA',
		'ADA'
	], {
		A: '#forge:plates/black_steel',
		B: '#forge:frames/aluminium',
		C: '#forge:tools/hammers',
		D: '#forge:tools/wrenches'
	});

	event.recipes.gtceu.assembler('machine_casing_pressure_dark')
		.itemInputs('6x #forge:plates/black_steel', '#forge:frames/aluminium')
		.itemOutputs('2x tfg:casings/machine_casing_pressure_dark')
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(16)
		.addMaterialInfo(true)

	//#region Machine Casings Rework

	// Maldonite Alloy Recipes

	event.recipes.gtceu.mixer('tfg:maldonite_dust')
		.itemInputs(Item.of('gtceu:gold_dust', 2), Item.of('gtceu:bismuth_dust', 1))
		.itemOutputs(Item.of('tfg:maldonite_dust', 3))
		.circuit(1)
		.duration(20 * 15)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.alloy_smelter('tfg:maldonite_both_dust')
		.itemInputs(Item.of('gtceu:gold_dust', 2), Item.of('gtceu:bismuth_dust', 1))
		.itemOutputs(Item.of('tfg:maldonite_ingot', 3))
		.duration(20 * 10)
		.EUt(GTValues.VH[GTValues.LV])

	event.recipes.gtceu.alloy_smelter('tfg:maldonite_gold_dust')
		.itemInputs(Item.of('gtceu:gold_dust', 2), Item.of('gtceu:bismuth_ingot', 1))
		.itemOutputs(Item.of('tfg:maldonite_ingot', 3))
		.duration(20 * 10)
		.EUt(GTValues.VH[GTValues.LV])

	event.recipes.gtceu.alloy_smelter('tfg:maldonite_bismuth_dust')
		.itemInputs(Item.of('minecraft:gold_ingot', 2), Item.of('gtceu:bismuth_dust', 1))
		.itemOutputs(Item.of('tfg:maldonite_ingot', 3))
		.duration(20 * 10)
		.EUt(GTValues.VH[GTValues.LV])

	event.recipes.gtceu.alloy_smelter('tfg:maldonite_both_ingot')
		.itemInputs(Item.of('minecraft:gold_ingot', 2), Item.of('gtceu:bismuth_ingot', 1))
		.itemOutputs(Item.of('tfg:maldonite_ingot', 3))
		.duration(20 * 10)
		.EUt(GTValues.VH[GTValues.LV])

	event.shaped('tfg:casings/machine_casing_maldonite', [
		'ACA',
		'ABA',
		'ADA'
	], {
		A: '#forge:plates/maldonite',
		B: 'gtceu:coke_oven_bricks',
		C: '#forge:tools/hammers',
		D: '#forge:tools/wrenches'
	});

	event.recipes.gtceu.assembler('machine_casing_maldonite')
		.itemInputs('6x #forge:plates/maldonite', 'gtceu:coke_oven_bricks')
		.itemOutputs('tfg:casings/machine_casing_maldonite')
		.circuit(6)
		.duration(2.5 * 20)
		.EUt(16)
		.addMaterialInfo(true)

	// Blue Steel and Red Steel Shortcut recipes
	/* Ratio issue, I'm not sure it's really doable
	event.recipes.gtceu.mixer('tfg:red_steel_shortcut')
		.itemInputs(Item.of('gtceu:copper_dust', 4), Item.of('gtceu:gold_dust', 4), Item.of('gtceu:zinc_dust', 1), Item.of('gtceu:steel_dust', 2), Item.of('gtceu:black_steel_dust', 4))
		.itemOutputs(Item.of('tfg:red_steel_dust', 3))
		.circuit(4)
		.duration(20 * 15)
		.EUt(GTValues.VHA[GTValues.LV])
	*/

	// Move the Steels to Arc Furnace

	event.remove({ id: 'gtceu:electric_blast_furnace/steel_from_iron' })
	event.remove({ id: 'gtceu:electric_blast_furnace/steel_from_wrought_iron' })

	event.recipes.gtceu.arc_furnace('tfg:steel_from_wrought')
		.itemInputs(Item.of('gtceu:wrought_iron_ingot', 1))
		.inputFluids(Fluid.of('gtceu:oxygen', 63))
		.itemOutputs(Item.of('gtceu:steel_ingot', 1))
		.duration(20 * 4.2)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.arc_furnace('tfg:steel_from_dust')
		.itemInputs(Item.of('gtceu:steel_dust', 1))
		.inputFluids(Fluid.of('gtceu:oxygen', 63))
		.itemOutputs(Item.of('gtceu:steel_ingot', 1))
		.duration(20 * 4.2)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.arc_furnace('tfg:black_steel')
		.itemInputs(Item.of('gtceu:black_steel_dust', 1))
		.inputFluids(Fluid.of('gtceu:oxygen', 70))
		.itemOutputs(Item.of('tfc:metal/ingot/black_steel', 1))
		.duration(20 * 5.2)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.arc_furnace('tfg:red_steel')
		.itemInputs(Item.of('gtceu:red_steel_dust', 1))
		.inputFluids(Fluid.of('gtceu:oxygen', 70))
		.itemOutputs(Item.of('tfc:metal/ingot/red_steel', 1))
		.duration(20 * 6)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.arc_furnace('tfg:blue_steel')
		.itemInputs(Item.of('gtceu:blue_steel_dust', 1))
		.inputFluids(Fluid.of('gtceu:oxygen', 70))
		.itemOutputs(Item.of('tfc:metal/ingot/blue_steel', 1))
		.duration(20 * 6)
		.EUt(GTValues.VA[GTValues.LV])

	// Machine Hulls

	// ULV Machine Hull

	event.remove({ id: 'gtceu:shaped/ulv_machine_hull' })
	event.shaped('gtceu:ulv_machine_hull', [
		'EBA',
		'DCD',
		'ABE'
	], {
		A: '#forge:plates/maldonite',
		B: '#forge:plates/wrought_iron',
		C: 'gtceu:ulv_machine_casing',
		D: 'gtceu:red_alloy_single_cable',
		E: '#forge:plates/maldonite'
	}).id('tfg:shaped/ulv_machine_hull')

	event.recipes.gtceu.assembler('tfg:ulv_hull_bakelite')
		.itemInputs('gtceu:ulv_machine_casing', '2x #forge:single_cables/red_alloy')
		.inputFluids('tfg:bakelite 288')
		.itemOutputs('gtceu:ulv_machine_hull')
		.duration(25)
		.EUt(16)

	TFGHelpers.registerMaterialInfo('gtceu:ulv_machine_hull',
		[
			TFGHelpers.getMaterial('maldonite'), 4,
			GTMaterials.WroughtIron, 4,
			GTMaterials.RedAlloy, 1
		])

	// LV Machine Hull

	event.remove({ id: 'gtceu:shaped/lv_machine_hull' })
	event.shaped('gtceu:lv_machine_hull', [
		'EBA',
		'DCD',
		'ABE'
	], {
		A: '#forge:plates/red_steel',
		B: '#forge:plates/steel',
		C: 'gtceu:lv_machine_casing',
		D: 'gtceu:tin_single_cable',
		E: '#forge:plates/red_steel'
	}).id('tfg:shaped/lv_machine_hull')

	event.recipes.gtceu.assembler('tfg:lv_hull_bakelite')
		.itemInputs('gtceu:lv_machine_casing', '2x #forge:single_cables/tin')
		.inputFluids('tfg:bakelite 288')
		.itemOutputs('gtceu:lv_machine_hull')
		.duration(50)
		.EUt(16)

	TFGHelpers.registerMaterialInfo('gtceu:lv_machine_hull',
		[
			GTMaterials.RedSteel, 4,
			GTMaterials.Steel, 4,
			GTMaterials.Tin, 1
		])

	// MV Machine Hull

	event.remove({ id: 'gtceu:shaped/mv_machine_hull'})
	event.shaped('gtceu:mv_machine_hull', [
		'EBA',
		'DCD',
		'ABE'
	], {
		A: '#forge:plates/aluminum',
		B: '#forge:plates/bakelite',
		C: 'gtceu:mv_machine_casing',
		D: 'gtceu:copper_single_cable',
		E: '#forge:plates/blue_steel'
	}).id('tfg:shaped/mv_machine_hull')

	event.remove({ id: 'gtceu:assembler/hull_mv_annealed'})
	event.recipes.gtceu.assembler('tfg:mv_machine_hull')
		.itemInputs('gtceu:mv_machine_casing', '2x gtceu:copper_single_cable')
		.inputFluids('tfg:bakelite 288')
		.itemOutputs('gtceu:mv_machine_hull')
		.duration(20*2.5)
		.EUt(GTValues.VH[GTValues.LV])

	TFGHelpers.registerMaterialInfo('gtceu:mv_machine_hull',
		[
			GTMaterials.BlueSteel, 4,
			GTMaterials.Aluminium, 4,
			GTMaterials.Copper, 1
		])

	// HV Machine Hull

	event.remove({ id: 'gtceu:shaped/hv_machine_hull'})
	event.shaped('gtceu:hv_machine_hull', [
		'EBA',
		'DCD',
		'ABE'
	], {
		A: '#forge:plates/stainless_steel',
		B: '#forge:plates/polyethylene',
		C: 'gtceu:hv_machine_casing',
		D: 'gtceu:gold_single_cable',
		E: '#forge:plates/platinum'
	}).id('tfg:shaped/hv_machine_hull')

	TFGHelpers.registerMaterialInfo('gtceu:hv_machine_hull',
		[
			GTMaterials.Platinum, 8,
			GTMaterials.StainlessSteel, 8,
			GTMaterials.Gold, 1
		])

	// EV Machine Hull

	event.remove({ id: 'gtceu:shaped/ev_machine_hull'})
	event.shaped('gtceu:ev_machine_hull', [
		'EBA',
		'DCD',
		'ABE'
	], {
		A: '#forge:plates/titanium',
		B: '#forge:plates/polyethylene',
		C: 'gtceu:ev_machine_casing',
		D: 'gtceu:aluminium_single_cable',
		E: '#forge:plates/palladium'
	}).id('tfg:shaped/ev_machine_hull')

	TFGHelpers.registerMaterialInfo('gtceu:ev_machine_hull',
		[
			GTMaterials.Palladium, 8,
			GTMaterials.Titanium, 8,
			GTMaterials.Aluminium, 1
		])
	// IV Machine Hull

	event.remove({ id: 'gtceu:shaped/iv_machine_hull'})
	event.shaped('gtceu:iv_machine_hull', [
		'EBA',
		'DCD',
		'ABE'
	], {
		A: '#forge:plates/telluride_tungstensteel',
		B: '#forge:plates/polytetrafluoroethylene',
		C: 'gtceu:iv_machine_casing',
		D: 'gtceu:platinum_single_cable',
		E: '#forge:plates/ni-cr-al-y'
	}).id('tfg:shaped/iv_machine_hull')

	TFGHelpers.registerMaterialInfo('gtceu:iv_machine_hull',
		[
			TFGHelpers.getMaterial('telluride_tungstensteel'), 8,
			TFGHelpers.getMaterial('ni-cr-al-y'), 8,
			GTMaterials.Platinum, 1
		])

	// Machine Casings

	modifyMachineCasing(event, 'ulv', 'plates/wrought_iron', 'plates/maldonite')
	modifyMachineCasing(event, 'lv', 'plates/steel', 'plates/red_steel')
	modifyMachineCasing(event, 'mv', 'plates/aluminium', 'plates/blue_steel')
	modifyMachineCasing(event, 'hv', 'double_plates/stainless_steel', 'double_plates/platinum')
	modifyMachineCasing(event, 'ev', 'double_plates/titanium', 'double_plates/palladium')
	modifyMachineCasing(event, 'iv', 'double_plates/telluride_tungstensteel', 'double_plates/ni-cr-al-y', 'tungsten_steel')

	function modifyMachineCasing(event, tier, base, added, original) {
		var originalPlate = `forge:plates/${original || base.split('/')[1]}`
		var basePlate = `#forge:${base}`
		var addedPlate = `#forge:${added}`

		event.remove({ id: `gtceu:shaped/casing_${tier}` })
		event.recipes.gtceu.shaped(`gtceu:${tier}_machine_casing`, [
			'ABA',
			'BCB',
			'ABA'
		], {
			A: basePlate,
			B: addedPlate,
			C: '#forge:tools/wrenches'
		}).addMaterialInfo().id(`tfg:shaped/${tier}_machine_casing`)

		global.modifyRecipe(event, `gtceu:assembler/casing_${tier}`, {
			newId: `tfg:casing_${tier}`,
			removeItemInputs: [originalPlate],
			addItemInputs: [`4x ${basePlate}`, `4x ${addedPlate}`]
		})
	}

}