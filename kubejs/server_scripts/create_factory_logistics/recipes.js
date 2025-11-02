// priority: 0
"use strict";

function registerCreateFactoryLogisticsRecipes(event) {

	event.remove({
		not: [
			{ id: 'create_factory_logistics:network_link_qualification_create_factory_abstractions_empty' },
			{ id: 'create_factory_logistics:network_link_qualification_create_factory_abstractions_item' },
			{ id: 'create_factory_logistics:network_link_qualification_create_factory_logistics_fluid' },
		], mod: 'create_factory_logistics' })


	event.recipes.createSequencedAssembly([
		'create_factory_logistics:fluid_mechanism',
	], '#forge:plates/copper', [
		event.recipes.createDeploying('create_factory_logistics:incomplete_fluid_mechanism', ['create_factory_logistics:incomplete_fluid_mechanism', '#forge:small_springs/copper']),
		event.recipes.createDeploying('create_factory_logistics:incomplete_fluid_mechanism', ['create_factory_logistics:incomplete_fluid_mechanism', '#forge:small_gears/brass']),
		event.recipes.createDeploying('create_factory_logistics:incomplete_fluid_mechanism', ['create_factory_logistics:incomplete_fluid_mechanism', '#forge:bolts/wrought_iron']),
	]).transitionalItem('create_factory_logistics:incomplete_fluid_mechanism').loops(3).id('tfg:create_factory_logistics/sequenced_assembly/fluid_mechanism')

	event.recipes.gtceu.assembler('create_factory_logistics:fluid_mechanism')
		.itemInputs('#forge:plates/copper', '2x #forge:small_springs/copper', '2x #forge:small_gears/brass', '2x #forge:bolts/wrought_iron')
		.itemOutputs('create_factory_logistics:fluid_mechanism')
		.duration(20 * 20)
		.EUt(20)
		.addMaterialInfo(true)


	event.recipes.gtceu.shaped('2x create_factory_logistics:jar_packager', [
		'AAA',
		'BCD',
		'EFE'
	], {
		A: '#forge:rods/copper',
		B: '#forge:springs/copper',
		C: 'gtceu:ulv_machine_casing',
		D: 'create:fluid_tank',
		E: 'create:electron_tube',
		F: '#tfg:metal_bars'
	}).addMaterialInfo().id('create_factory_logistics:shaped/jar_packager')

		
	event.shapeless('create_factory_logistics:factory_fluid_gauge', ['create_factory_logistics:factory_fluid_gauge'])
		.id('create_factory_logistics:shapeless/factory_fluid_gauge_clear')

	event.shaped('2x create_factory_logistics:factory_fluid_gauge', [
		'ABA',
		'CDE',
		'FGF'
	], {
		A: '#forge:screws/aluminium',
		B: 'create_factory_logistics:fluid_mechanism',
		C: '#gtceu:diodes',
		D: 'create:stock_link',
		E: '#gtceu:circuits/lv',
		F: '#forge:plates/rose_quartz',
		G: '#forge:tools/wrenches'
	}).id('create_factory_logistics:shaped/factory_fluid_gauge')

	event.recipes.gtceu.assembler('create_factory_logistics:factory_fluid_gauge')
		.itemInputs('create_factory_logistics:fluid_mechanism', '2x #forge:screws/aluminium', '#gtceu:diodes', 'create:stock_link', '#gtceu:circuits/lv', '2x #forge:plates/rose_quartz')
		.itemOutputs('2x create_factory_logistics:factory_fluid_gauge')
		.duration(150)
		.EUt(16)
		.addMaterialInfo(true)


	event.shapeless('create_factory_logistics:network_link', ['create_factory_logistics:network_link'])
		.id('create_factory_logistics:shapeless/network_link_clear')

	event.shaped('create_factory_logistics:network_link', [
		'ABC',
		'DEB',
		'FG '
	], {
		A: '#forge:tools/wrenches',
		B: '#forge:screws/steel',
		C: 'gtceu:fluid_detector_cover',
		D: 'create:transmitter',
		E: 'create:brass_casing',
		F: '#forge:tools/screwdrivers',
		G: '#gtceu:circuits/lv'
	}).id('create_factory_logistics:shaped/network_link')

	event.recipes.gtceu.assembler('create_factory_logistics:network_link')
		.itemInputs('create:brass_casing', 'gtceu:fluid_detector_cover', '#gtceu:circuits/lv', 'create:transmitter')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
		.itemOutputs('create_factory_logistics:network_link')
		.duration(150)
		.EUt(16)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('create_factory_logistics:network_link_tin')
		.itemInputs('create:brass_casing', 'gtceu:fluid_detector_cover', '#gtceu:circuits/lv', 'create:transmitter')
		.inputFluids(Fluid.of('gtceu:tin', 144))
		.itemOutputs('create_factory_logistics:network_link')
		.duration(150)
		.EUt(16)
}