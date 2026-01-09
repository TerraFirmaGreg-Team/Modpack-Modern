"use strict";

function registerTFGRefrigeratorRecipes(event) {

	//#region Machine Recipes

	event.remove({ id: 'gtceu:shaped/mv_food_refrigerator' })
	event.remove({ id: 'gtceu:shaped/hv_food_refrigerator' })
	event.remove({ id: 'gtceu:shaped/ev_food_refrigerator' })
	event.remove({ id: 'gtceu:shaped/iv_food_refrigerator' })

	event.recipes.gtceu.assembler('tfg:assembler/mv_food_refrigerator')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.cableGtSingle, GTMaterials.Copper, 2),
			ChemicalHelper.get(TagPrefix.plate, GTMaterials.Polyethylene, 2),
			ChemicalHelper.get(TagPrefix.rotor, GTMaterials.Bronze, 1),
			'2x gtceu:mv_electric_pump',
			'gtceu:mv_hermetic_casing',
			'#gtceu:circuits/mv'
		)
		.inputFluids(Fluid.of('tfg:chlorodifluoromethane', 6000))
		.itemOutputs('1x tfg:mv_food_refrigerator')
		.duration(200)
		.circuit(7)
		.addMaterialInfo(true)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.assembler('tfg:assembler/hv_food_refrigerator')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.cableGtSingle, GTMaterials.Gold, 2),
			ChemicalHelper.get(TagPrefix.plate, GTMaterials.Polyethylene, 2),
			ChemicalHelper.get(TagPrefix.rotor, GTMaterials.Steel, 1),
			'2x gtceu:hv_electric_pump',
			'gtceu:hv_hermetic_casing',
			'#gtceu:circuits/hv'
		)
		.inputFluids(Fluid.of('tfg:1_1_1_2_tetrafluoroethane', 6000))
		.itemOutputs('1x tfg:hv_food_refrigerator')
		.duration(200)
		.circuit(7)
		.addMaterialInfo(true)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.assembler('tfg:assembler/ev_food_refrigerator')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.cableGtSingle, GTMaterials.Aluminium, 2),
			ChemicalHelper.get(TagPrefix.plate, GTMaterials.Polyethylene, 2),
			ChemicalHelper.get(TagPrefix.rotor, GTMaterials.StainlessSteel, 1),
			'2x gtceu:ev_electric_pump',
			'gtceu:ev_hermetic_casing',
			'#gtceu:circuits/ev'
		)
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 6000))
		.itemOutputs('1x tfg:ev_food_refrigerator')
		.duration(200)
		.circuit(7)
		.addMaterialInfo(true)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.assembler('tfg:assembler/iv_food_refrigerator')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.cableGtSingle, GTMaterials.Platinum, 2),
			ChemicalHelper.get(TagPrefix.plate, GTMaterials.Polyethylene, 2),
			ChemicalHelper.get(TagPrefix.rotor, GTMaterials.Titanium, 1),
			'2x gtceu:iv_electric_pump',
			'gtceu:iv_hermetic_casing',
			'#gtceu:circuits/iv'
		)
		.inputFluids(Fluid.of('tfg:solar_coolant_tier2', 6000))
		.itemOutputs('1x tfg:iv_food_refrigerator')
		.duration(200)
		.circuit(7)
		.addMaterialInfo(true)
		.EUt(GTValues.VA[GTValues.LV])

	//#endregion

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
}