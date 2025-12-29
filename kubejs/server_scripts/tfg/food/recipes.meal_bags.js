"use strict";

function registerTFGMealBagRecipes(event) {

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
		.EUt(GTValues.VA[GTValues.LV])

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

	event.recipes.gtceu.chemical_bath('tfg:ore_washer/distilled/clean_foil_pack')
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

	// Recycling
	event.recipes.gtceu.macerator('gtceu:macerator/recycling/clean_foil_pack')
		.itemInputs('tfg:clean_foil_pack')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.Aluminium, 1),
			ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.Polyethylene, 1)
		)
		.duration(GTMaterials.Aluminium.getMass() * 1)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('gtceu:arc_furnace/recycling/clean_foil_pack')
		.itemInputs('tfg:clean_foil_pack')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.nugget, GTMaterials.Aluminium, 2),
			ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.Ash, 1)
		)
		.duration(GTMaterials.Aluminium.getMass() * 1)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])
}