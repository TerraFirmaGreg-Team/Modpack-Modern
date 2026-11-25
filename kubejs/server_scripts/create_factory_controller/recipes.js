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
		'BCB',
		'DED'
	], {
		A: 'create:transmitter',
		B: '#forge:plates/rose_quartz',
		C: '#gtceu:transistors',
		D: 'create:precision_mechanism',
		E: 'create:linked_controller'
	})
}
