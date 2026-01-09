"use strict";

function registerTFGElectronicComponentsRecipes(event) {

	// Electron tubes
	event.shaped('1x create:electron_tube', [
		'FAG',
		'BCB',
		'DED'
	], {
		A: 'gtceu:glass_tube',
		B: '#forge:bolts/steel',
		C: 'gtceu:wood_plate',
		D: 'gtceu:red_alloy_single_wire',
		E: '#forge:plates/wrought_iron',
		F: '#forge:tools/screwdrivers',
		G: '#forge:tools/wire_cutters'
	}).id('tfg:create/shaped/electron_tube')

	event.recipes.createSequencedAssembly([
		'2x create:electron_tube',
	], 'gtceu:wood_plate', [
		event.recipes.createDeploying('tfg:unfinished_electron_tube', ['tfg:unfinished_electron_tube', '#forge:plates/wrought_iron']),
		event.recipes.createDeploying('tfg:unfinished_electron_tube', ['tfg:unfinished_electron_tube', 'gtceu:red_alloy_single_wire']),
		event.recipes.createDeploying('tfg:unfinished_electron_tube', ['tfg:unfinished_electron_tube', 'gtceu:red_alloy_single_wire']),
		event.recipes.createDeploying('tfg:unfinished_electron_tube', ['tfg:unfinished_electron_tube', 'gtceu:glass_tube']),
	]).transitionalItem('tfg:unfinished_electron_tube').loops(1).id('tfg:create/sequenced_assembly/electron_tube')

	event.recipes.gtceu.assembler('create:electron_tube')
		.itemInputs('#forge:plates/wrought_iron', 'gtceu:glass_tube', '2x gtceu:red_alloy_single_wire')
		.itemOutputs('2x create:electron_tube')
		.duration(50)
		.EUt(7)
		.circuit(14)

	event.shaped('4x create:electron_tube', [
		'FAG',
		'DCD'
	], {
		A: 'gtceu:glass_tube',
		C: 'gtceu:plastic_circuit_board',
		D: 'gtceu:red_alloy_single_wire',
		F: '#forge:tools/screwdrivers',
		G: '#forge:tools/wire_cutters'
	}).id('tfg:create/shaped/electron_tube2')

	event.recipes.gtceu.assembler('create:electron_tube2')
		.itemInputs('gtceu:plastic_circuit_board', 'gtceu:glass_tube', '2x gtceu:red_alloy_single_wire')
		.itemOutputs('4x create:electron_tube')
		.duration(50)
		.EUt(7)

	event.shaped('4x create:electron_tube', [
		' A ',
		' B ',
		' C '
	], {
		A: '#forge:tools/screwdrivers',
		B: 'gtceu:nand_chip',
		C: 'gtceu:plastic_circuit_board'
	}).id('tfg:create/shaped/electron_tube3')

	event.recipes.gtceu.assembler('create:electron_tube3')
		.itemInputs('gtceu:plastic_circuit_board', 'gtceu:nand_chip')
		.itemOutputs('4x create:electron_tube')
		.duration(50)
		.EUt(7)

	// Vacuum Tubes
	event.remove({ id: 'gtceu:shaped/vacuum_tube' })
	event.replaceInput({ id: 'gtceu:assembler/vacuum_tube_plain' }, 'gtceu:steel_bolt', 'gtceu:resin_circuit_board')
	event.replaceInput({ id: 'gtceu:assembler/vacuum_tube_red_alloy' }, 'gtceu:steel_bolt', 'gtceu:resin_circuit_board')
	event.replaceInput({ id: 'gtceu:assembler/vacuum_tube_red_alloy_annealed' }, 'gtceu:steel_bolt', 'gtceu:resin_circuit_board')

	event.recipes.createSequencedAssembly([
		'gtceu:vacuum_tube',
	], 'gtceu:resin_circuit_board', [
		event.recipes.createDeploying('tfg:unfinished_vacuum_tube', ['tfg:unfinished_vacuum_tube', '#forge:bolts/steel']),
		event.recipes.createDeploying('tfg:unfinished_vacuum_tube', ['tfg:unfinished_vacuum_tube', 'gtceu:copper_single_wire']),
		event.recipes.createDeploying('tfg:unfinished_vacuum_tube', ['tfg:unfinished_vacuum_tube', 'gtceu:copper_single_wire']),
		event.recipes.createDeploying('tfg:unfinished_vacuum_tube', ['tfg:unfinished_vacuum_tube', 'gtceu:glass_tube']),
		event.custom({ type: 'vintageimprovements:vacuumizing', ingredients: [{ item: 'tfg:unfinished_vacuum_tube' }], results: [{ item: 'tfg:unfinished_vacuum_tube' }], processingTime: 80 })
	]).transitionalItem('tfg:unfinished_vacuum_tube').loops(1).id('tfg:gtceu/sequenced_assembly/vacuum_tube')

	// ULV Coil
	event.recipes.createSequencedAssembly([
		'gtceu:ulv_voltage_coil',
	], 'gtceu:magnetic_iron_rod', [
		event.recipes.createDeploying('gtceu:magnetic_iron_rod', ['gtceu:magnetic_iron_rod', '#forge:fine_wires/lead'])
	]).transitionalItem('gtceu:magnetic_iron_rod').loops(32).id('tfg:sequenced_assembly/ulv_voltage_coil')

	// LV basic circuit
	event.remove({ id: 'gtceu:shaped/electronic_circuit_lv' })

	event.recipes.createSequencedAssembly([
		'gtceu:basic_electronic_circuit',
	], 'gtceu:resin_printed_circuit_board', [
		event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', 'gtceu:resistor']),
		event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', 'gtceu:resistor']),
		event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', 'gtceu:vacuum_tube']),
		event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', 'gtceu:vacuum_tube']),
		event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', 'create:electron_tube']),
		event.recipes.createFilling('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', Fluid.of('gtceu:glue', 50)]),
		event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', '#forge:plates/steel']),
	]).transitionalItem('tfg:unfinished_basic_electronic_circuit').loops(1).id('tfg:gtceu/sequenced_assembly/basic_electronic_circuit')

	// MV basic circuit
	event.remove({ id: 'gtceu:shaped/electronic_circuit_mv' })

	event.recipes.createSequencedAssembly([
		'gtceu:good_electronic_circuit',
	], 'gtceu:phenolic_printed_circuit_board', [
		event.recipes.createDeploying('tfg:unfinished_good_electronic_circuit', ['tfg:unfinished_good_electronic_circuit', 'gtceu:diode']),
		event.recipes.createDeploying('tfg:unfinished_good_electronic_circuit', ['tfg:unfinished_good_electronic_circuit', 'gtceu:diode']),
		event.recipes.createDeploying('tfg:unfinished_good_electronic_circuit', ['tfg:unfinished_good_electronic_circuit', '#forge:single_wires/copper']),
		event.recipes.createDeploying('tfg:unfinished_good_electronic_circuit', ['tfg:unfinished_good_electronic_circuit', '#forge:single_wires/copper']),
		event.recipes.createDeploying('tfg:unfinished_good_electronic_circuit', ['tfg:unfinished_good_electronic_circuit', 'gtceu:basic_electronic_circuit']),
		event.recipes.createDeploying('tfg:unfinished_good_electronic_circuit', ['tfg:unfinished_good_electronic_circuit', 'gtceu:basic_electronic_circuit']),
		event.recipes.createDeploying('tfg:unfinished_good_electronic_circuit', ['tfg:unfinished_good_electronic_circuit', 'gtceu:basic_electronic_circuit']),
		event.recipes.createDeploying('tfg:unfinished_good_electronic_circuit', ['tfg:unfinished_good_electronic_circuit', '#forge:plates/steel']),
	]).transitionalItem('tfg:unfinished_good_electronic_circuit').loops(1).id('tfg:gtceu/sequenced_assembly/good_electronic_circuit')

	// Vitrified Pearl
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

	// Cryo Fluix Pearl
	event.replaceInput({ id: 'gtceu:assembler/field_generator_hv' }, 'gtceu:quantum_eye', 'tfg:cryo_fluix_pearl')

	event.recipes.gtceu.shaped('gtceu:hv_field_generator', [
		'ABA',
		'CDC',
		'ABA'
	], {
		A: ChemicalHelper.get(TagPrefix.wireGtQuadruple, GTMaterials.MercuryBariumCalciumCuprate, 1),
		B: ChemicalHelper.get(TagPrefix.plate, GTMaterials.StainlessSteel, 1),
		C: '#gtceu:circuits/hv',
		D: 'tfg:cryo_fluix_pearl'
	}).addMaterialInfo().id('gtceu:shaped/field_generator_hv')

	// Change recipes to want EV circuit instead of IV
	event.replaceInput({ id: 'gtceu:shaped/large_combustion_engine' }, '#gtceu:circuits/iv', '#gtceu:circuits/ev')
	event.replaceInput({ id: 'gtceu:shaped/nano_chestplate_advanced' }, '#gtceu:circuits/iv', '#gtceu:circuits/ev')
	event.replaceInput({ id: 'gtceu:assembler/ev_large_miner' }, '#gtceu:circuits/iv', '#gtceu:circuits/ev')

	// Nano wafer
	event.remove({ id: 'gtceu:chemical_reactor/nano_cpu_wafer' })
	event.remove({ id: 'gtceu:large_chemical_reactor/nano_cpu_wafer' })
		
	event.recipes.gtceu.chemical_reactor('tfg:nano_cpu_wafer')
		.inputFluids(Fluid.of('gtceu:tritiated_water', 576))
		.itemInputs('gtceu:cpu_wafer', '16x gtceu:carbon_fibers')
		.itemOutputs('gtceu:nano_cpu_wafer')
		.duration(20*60)
		.EUt(GTValues.VA[GTValues.EV])
		.cleanroom(CleanroomType.CLEANROOM)

	// Change components of IV mainframe to nano chip
	event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv_asmd_soldering_alloy'})
	event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv'})
	event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv_soldering_alloy'})
	event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv_asmd'})

	event.recipes.gtceu.circuit_assembler('tfg:circuit_assembler/mainframe_iv')
		.itemInputs('2x gtceu:aluminium_frame', '2x gtceu:micro_processor_computer', '8x #gtceu:inductors', '16x #gtceu:capacitors', 'gtceu:nano_cpu_chip', '16x gtceu:annealed_copper_single_wire')
		.inputFluids(Fluid.of('gtceu:tin', 576))
		.itemOutputs('gtceu:micro_processor_mainframe')
		.duration(20 * 40)
		.EUt(GTValues.VA[GTValues.HV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.circuit_assembler('tfg:circuit_assembler/mainframe_iv_soldering_alloy')
		.itemInputs('2x gtceu:aluminium_frame', '2x gtceu:micro_processor_computer', '8x #gtceu:inductors', '16x #gtceu:capacitors', 'gtceu:nano_cpu_chip', '16x gtceu:annealed_copper_single_wire')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
		.itemOutputs('gtceu:micro_processor_mainframe')
		.duration(20 * 40)
		.EUt(GTValues.VA[GTValues.HV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.circuit_assembler('tfg:circuit_assembler/mainframe_iv_asmd')
		.itemInputs('2x gtceu:aluminium_frame', '2x gtceu:micro_processor_computer', '2x gtceu:advanced_smd_inductor', '4x gtceu:advanced_smd_capacitor', 'gtceu:nano_cpu_chip', '16x gtceu:annealed_copper_single_wire')
		.inputFluids(Fluid.of('gtceu:tin', 576))
		.itemOutputs('gtceu:micro_processor_mainframe')
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.HV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.circuit_assembler('tfg:circuit_assembler/mainframe_iv_asmd_soldering_alloy')
		.itemInputs('2x gtceu:aluminium_frame', '2x gtceu:micro_processor_computer', '2x gtceu:advanced_smd_inductor', '4x gtceu:advanced_smd_capacitor', 'gtceu:nano_cpu_chip', '16x gtceu:annealed_copper_single_wire')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
		.itemOutputs('gtceu:micro_processor_mainframe')
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.HV])
		.cleanroom(CleanroomType.CLEANROOM)

	// Quantum Eye
	event.replaceInput({ id: 'gtceu:assembler/field_generator_ev' }, 'minecraft:nether_star', 'gtceu:quantum_eye')

	event.recipes.gtceu.shaped('gtceu:ev_field_generator', [
		'ABA',
		'CDC',
		'ABA'
	], {
		A: ChemicalHelper.get(TagPrefix.wireGtQuadruple, GTMaterials.UraniumTriplatinum, 1),
		B: ChemicalHelper.get(TagPrefix.plateDouble, GTMaterials.Titanium, 1),
		C: '#gtceu:circuits/ev',
		D: 'gtceu:quantum_eye'
	}).addMaterialInfo().id('gtceu:shaped/field_generator_ev')

	event.remove({ id: 'gtceu:chemical_bath/quantum_eye' })
	event.recipes.gtceu.chemical_bath('tfg:quantum_eye')
		.itemInputs('tfg:cryo_fluix_pearl')
		.inputFluids(Fluid.of('gtceu:radon', 250))
		.itemOutputs('gtceu:quantum_eye')
		.duration(20 * 24)
		.EUt(GTValues.VA[GTValues.HV])

	// Nether Star
	event.replaceInput({ id: 'gtceu:assembler/field_generator_iv' }, 'gtceu:quantum_star', 'minecraft:nether_star')

	event.recipes.gtceu.shaped('gtceu:iv_field_generator', [
		'ABA',
		'CDC',
		'ABA'
	], {
		A: ChemicalHelper.get(TagPrefix.wireGtQuadruple, GTMaterials.SamariumIronArsenicOxide, 1),
		B: ChemicalHelper.get(TagPrefix.plateDouble, GTMaterials.TungstenSteel, 1),
		C: '#gtceu:circuits/iv',
		D: 'minecraft:nether_star'
	}).addMaterialInfo().id('gtceu:shaped/field_generator_iv')

	event.recipes.gtceu.chemical_reactor('tfg:gtceu/nether_star_dust')
		.itemInputs('2x #forge:dusts/iridium', '#forge:dusts/diamond')
		.circuit(10)
		.itemOutputs('gtceu:nether_star_dust')
		// TODO: change to something else with venus
		.inputFluids(Fluid.of('gtceu:neon', 1000))
		.duration(700)
		.EUt(2720)
}