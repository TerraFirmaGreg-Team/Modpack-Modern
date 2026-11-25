// priority: 0
"use strict";

const registerCreateFactoryControllerRecipes = (event) => {
	event.remove({ mod: 'createfactorycontroller' })

	event.shaped('createfactorycontroller:factory_controller', [
		' A ',
		'BCD',
		'EFE'
	], {
		A: 'create:stock_ticker',
		B: 'create:factory_gauge',
		C: 'create:precision_mechanism',
		D: 'fluidlogistics:fluid_factory_gauge',
		E: '#forge:plates/rose_quartz',
		F: 'create:brass_casing'
	})

	event.shaped('createfactorycontroller:controller_remote', [
		' A ',
		'CDE',
		'BFB'
	], {
		A: 'create:transmitter',
		B: '#forge:plates/rose_quartz',
		C: 'gtceu:mv_sensor',
		D: '#gtceu:transistors',
		E: 'gtceu:mv_emitter',
		F: 'create:linked_controller'
	})

	event.shaped('createfactorycontroller:arithmetic_tube', [
		'RER'
	], {
		R: 'minecraft:redstone_torch',
		E: 'create:electron_tube'
	})
}
