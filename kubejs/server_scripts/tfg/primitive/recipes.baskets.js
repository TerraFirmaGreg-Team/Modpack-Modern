"use strict";

function registerTFGBasketRecipes(event) {
	event.shaped('tfg:harvest_basket', [
		'BDB',
		'ACA',
		'AAA'
	], {
		A: 'tfg:soaked_hardwood_strip',
		B: ChemicalHelper.get(TagPrefix.bolt, GTMaterials.SterlingSilver, 1),
		C: 'tfc:glue',
		D: ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.TreatedWood, 1)
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
		D: ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.TreatedWood, 1)
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

}