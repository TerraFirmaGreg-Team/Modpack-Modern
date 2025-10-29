// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGMedicineRecipes(event) {

	//#region Antipoison

	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#forge:wax', '#tfg:antipoison_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1)], Fluid.of('tfc:spring_water', 250))
		.outputItem('1x tfg:antipoison_pill')
		.id(`tfg:mixing_bowl/pill_antipoison`)

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_antipoison`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:antipoison_pill')
		.itemInputs('#forge:wax', '#tfg:antipoison_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_antipoison`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:antipoison_pill')
		.itemInputs('#forge:wax', '#tfg:antipoison_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_antipoison`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:antipoison_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:antipoison_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_antipoison`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:antipoison_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:antipoison_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	//#endregion

	//#region Poison
	
	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#forge:wax', '#tfg:poison_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.Sulfur, 1)], Fluid.of('tfc:spring_water', 250))
		.outputItem('1x tfg:poison_pill')
		.id(`tfg:mixing_bowl/pill_poison`)

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_poison`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:poison_pill')
		.itemInputs('#forge:wax', '#tfg:poison_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.Sulfur, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_poison`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:poison_pill')
		.itemInputs('#forge:wax', '#tfg:poison_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.Sulfur, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_poison`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:poison_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:poison_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.Sulfur, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_poison`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:poison_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:poison_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.Sulfur, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	// Arrow
	event.shapeless(Item.of('8x minecraft:tipped_arrow', '{Potion:"minecraft:poison"}'),
		['4x minecraft:arrow', 'tfg:poison_pill', '4x minecraft:arrow'])

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/arrow/poison_1`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:ethanol', 25))
		.itemOutputs(Item.of('16x minecraft:tipped_arrow', '{Potion:"minecraft:poison"}'))
		.itemInputs('16x minecraft:arrow', 'tfg:poison_pill')
		.duration(200)
		.EUt(GTValues.VA[GTValues.MV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/arrow/poison_2`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:ethanol', 25))
		.itemOutputs(Item.of('16x minecraft:tipped_arrow', '{Potion:"minecraft:long_poison"}'))
		.itemInputs('16x minecraft:arrow', 'tfg:poison_tablet')
		.duration(200)
		.EUt(GTValues.VA[GTValues.MV])

	//#endregion

	//#region Regeneration
	
	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#forge:wax', '#tfg:regeneration_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1)], Fluid.of('tfc:spring_water', 250))
		.outputItem('1x tfg:regeneration_pill')
		.id(`tfg:mixing_bowl/pill_regeneration`)

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_regeneration`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:regeneration_pill')
		.itemInputs('#forge:wax', '#tfg:regeneration_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_regeneration`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:regeneration_pill')
		.itemInputs('#forge:wax', '#tfg:regeneration_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_regeneration`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:regeneration_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:regeneration_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_regeneration`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:regeneration_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:regeneration_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	// Arrow
	event.shapeless(Item.of('8x minecraft:tipped_arrow', '{Potion:"minecraft:regeneration"}'),
		['4x minecraft:arrow', 'tfg:regeneration_pill', '4x minecraft:arrow'])

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/arrow/regeneration_1`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:ethanol', 25))
		.itemOutputs(Item.of('16x minecraft:tipped_arrow', '{Potion:"minecraft:regeneration"}'))
		.itemInputs('16x minecraft:arrow', 'tfg:regeneration_pill')
		.duration(200)
		.EUt(GTValues.VA[GTValues.MV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/arrow/regeneration_2`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:ethanol', 25))
		.itemOutputs(Item.of('16x minecraft:tipped_arrow', '{Potion:"minecraft:long_regeneration"}'))
		.itemInputs('16x minecraft:arrow', 'tfg:regeneration_tablet')
		.duration(200)
		.EUt(GTValues.VA[GTValues.MV])

	//#endregion

	//#region Speed
	
	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#forge:wax', '#tfg:speed_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1)], Fluid.of('tfc:spring_water', 250))
		.outputItem('1x tfg:speed_pill')
		.id(`tfg:mixing_bowl/pill_speed`)

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_speed`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:speed_pill')
		.itemInputs('#forge:wax', '#tfg:speed_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_speed`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:speed_pill')
		.itemInputs('#forge:wax', '#tfg:speed_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_speed`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:speed_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:speed_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_speed`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:speed_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:speed_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	// Arrow
	event.shapeless(Item.of('8x minecraft:tipped_arrow', '{Potion:"minecraft:swiftness"}'),
		['4x minecraft:arrow', 'tfg:speed_pill', '4x minecraft:arrow'])

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/arrow/swiftness_1`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:ethanol', 25))
		.itemOutputs(Item.of('16x minecraft:tipped_arrow', '{Potion:"minecraft:swiftness"}'))
		.itemInputs('16x minecraft:arrow', 'tfg:speed_pill')
		.duration(200)
		.EUt(GTValues.VA[GTValues.MV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/arrow/swiftness_2`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:ethanol', 25))
		.itemOutputs(Item.of('16x minecraft:tipped_arrow', '{Potion:"minecraft:long_swiftness"}'))
		.itemInputs('16x minecraft:arrow', 'tfg:speed_tablet')
		.duration(200)
		.EUt(GTValues.VA[GTValues.MV])

	//#endregion

	//#region Slowness
	
	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#forge:wax', '#tfg:slowness_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.Sulfur, 1)], Fluid.of('tfc:spring_water', 250))
		.outputItem('1x tfg:slowness_pill')
		.id(`tfg:mixing_bowl/pill_slowness`)

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_slowness`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:slowness_pill')
		.itemInputs('#forge:wax', '#tfg:slowness_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.Sulfur, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_slowness`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:slowness_pill')
		.itemInputs('#forge:wax', '#tfg:slowness_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.Sulfur, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_slowness`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:slowness_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:slowness_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.Sulfur, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_slowness`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:slowness_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:slowness_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.Sulfur, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	// Arrow
	event.shapeless(Item.of('8x minecraft:tipped_arrow', '{Potion:"minecraft:slowness"}'),
		['4x minecraft:arrow', 'tfg:slowness_pill', '4x minecraft:arrow'])

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/arrow/slowness_1`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:ethanol', 25))
		.itemOutputs(Item.of('16x minecraft:tipped_arrow', '{Potion:"minecraft:slowness"}'))
		.itemInputs('16x minecraft:arrow', 'tfg:slowness_pill')
		.duration(200)
		.EUt(GTValues.VA[GTValues.MV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/arrow/slowness_2`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:ethanol', 25))
		.itemOutputs(Item.of('16x minecraft:tipped_arrow', '{Potion:"minecraft:long_slowness"}'))
		.itemInputs('16x minecraft:arrow', 'tfg:slowness_tablet')
		.duration(200)
		.EUt(GTValues.VA[GTValues.MV])

	//#endregion

	//#region Weakness

	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#forge:wax', '#tfg:weakness_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.Sulfur, 1)], Fluid.of('tfc:spring_water', 250))
		.outputItem('1x tfg:weakness_pill')
		.id(`tfg:mixing_bowl/pill_weakness`)

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_weakness`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:weakness_pill')
		.itemInputs('#forge:wax', '#tfg:weakness_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.Sulfur, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_weakness`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:weakness_pill')
		.itemInputs('#forge:wax', '#tfg:weakness_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.Sulfur, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_weakness`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:weakness_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:weakness_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.Sulfur, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_weakness`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:weakness_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:weakness_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.Sulfur, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	// Arrow
	event.shapeless(Item.of('8x minecraft:tipped_arrow', '{Potion:"minecraft:weakness"}'),
		['4x minecraft:arrow', 'tfg:weakness_pill', '4x minecraft:arrow'])

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/arrow/weakness_1`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:ethanol', 25))
		.itemOutputs(Item.of('16x minecraft:tipped_arrow', '{Potion:"minecraft:weakness"}'))
		.itemInputs('16x minecraft:arrow', 'tfg:weakness_pill')
		.duration(200)
		.EUt(GTValues.VA[GTValues.MV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/arrow/weakness_2`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:ethanol', 25))
		.itemOutputs(Item.of('16x minecraft:tipped_arrow', '{Potion:"minecraft:long_weakness"}'))
		.itemInputs('16x minecraft:arrow', 'tfg:weakness_tablet')
		.duration(200)
		.EUt(GTValues.VA[GTValues.MV])

	//#endregion

	//#region Haste

	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#forge:wax', '#tfg:haste_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1)], Fluid.of('tfc:spring_water', 250))
		.outputItem('1x tfg:haste_pill')
		.id(`tfg:mixing_bowl/pill_haste`)

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_haste`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:haste_pill')
		.itemInputs('#forge:wax', '#tfg:haste_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_haste`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:haste_pill')
		.itemInputs('#forge:wax', '#tfg:haste_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_haste`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:haste_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:haste_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_haste`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:haste_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:haste_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	//#endregion

	//#region Water Breathing

	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#forge:wax', '#tfg:water_breathing_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1)], Fluid.of('tfc:spring_water', 250))
		.outputItem('1x tfg:water_breathing_pill')
		.id(`tfg:mixing_bowl/pill_water_breathing`)

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_water_breathing`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:water_breathing_pill')
		.itemInputs('#forge:wax', '#tfg:water_breathing_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_water_breathing`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:water_breathing_pill')
		.itemInputs('#forge:wax', '#tfg:water_breathing_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_water_breathing`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:water_breathing_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:water_breathing_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_water_breathing`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:water_breathing_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:water_breathing_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	// Arrow
	event.shapeless(Item.of('8x minecraft:tipped_arrow', '{Potion:"minecraft:water_breathing"}'),
		['4x minecraft:arrow', 'tfg:water_breathing_pill', '4x minecraft:arrow'])

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/arrow/water_breathing_1`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:ethanol', 25))
		.itemOutputs(Item.of('16x minecraft:tipped_arrow', '{Potion:"minecraft:water_breathing"}'))
		.itemInputs('16x minecraft:arrow', 'tfg:water_breathing_pill')
		.duration(200)
		.EUt(GTValues.VA[GTValues.MV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/arrow/water_breathing_2`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:ethanol', 25))
		.itemOutputs(Item.of('16x minecraft:tipped_arrow', '{Potion:"minecraft:long_water_breathing"}'))
		.itemInputs('16x minecraft:arrow', 'tfg:water_breathing_tablet')
		.duration(200)
		.EUt(GTValues.VA[GTValues.MV])

	//#endregion

	//#region Night Vision

	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#forge:wax', '#tfg:night_vision_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1)], Fluid.of('tfc:spring_water', 250))
		.outputItem('1x tfg:night_vision_pill')
		.id(`tfg:mixing_bowl/pill_night_vision`)

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_night_vision`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:night_vision_pill')
		.itemInputs('#forge:wax', '#tfg:night_vision_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_night_vision`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:night_vision_pill')
		.itemInputs('#forge:wax', '#tfg:night_vision_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_night_vision`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:night_vision_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:night_vision_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_night_vision`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:night_vision_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:night_vision_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	// Arrow
	event.shapeless(Item.of('8x minecraft:tipped_arrow', '{Potion:"minecraft:night_vision"}'),
		['4x minecraft:arrow', 'tfg:night_vision_pill', '4x minecraft:arrow'])

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/arrow/night_vision_1`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:ethanol', 25))
		.itemOutputs(Item.of('16x minecraft:tipped_arrow', '{Potion:"minecraft:night_vision"}'))
		.itemInputs('16x minecraft:arrow', 'tfg:night_vision_pill')
		.duration(200)
		.EUt(GTValues.VA[GTValues.MV])
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/arrow/night_vision_2`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:ethanol', 25))
		.itemOutputs(Item.of('16x minecraft:tipped_arrow', '{Potion:"minecraft:long_night_vision"}'))
		.itemInputs('16x minecraft:arrow', 'tfg:night_vision_tablet')
		.duration(200)
		.EUt(GTValues.VA[GTValues.MV])

	//#endregion

	//#region Invisibility

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/salvo_invisibility`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:phenol', 250))
		.itemOutputs('1x tfg:invisibility_salvo')
		.itemInputs('gtceu:sticky_resin', '#tfg:invisibility_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	//#endregion

	//#region Fire Resistance

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/salvo_fire_resistance`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:phenol', 250))
		.itemOutputs('1x tfg:fire_resistance_salvo')
		.itemInputs('gtceu:sticky_resin', '#tfg:fire_resistance_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	//#endregion

	//#region Resistance

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/salvo_resistance`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:phenol', 250))
		.itemOutputs('1x tfg:resistance_salvo')
		.itemInputs('gtceu:sticky_resin', '#tfg:resistance_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	//#endregion

	//#region Instant Health
	
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/salvo_instant_health`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:phenol', 250))
		.itemOutputs('1x tfg:instant_health_salvo')
		.itemInputs('gtceu:sticky_resin', '#tfg:instant_health_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	//#endregion

	//#region Absorption

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/salvo_absorption`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:phenol', 250))
		.itemOutputs('1x tfg:absorption_salvo')
		.itemInputs('gtceu:sticky_resin', '#tfg:absorption_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	//#endregion

	//#region Luck

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/salvo_luck`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:phenol', 250))
		.itemOutputs('1x tfg:luck_salvo')
		.itemInputs('gtceu:sticky_resin', '#tfg:luck_ingredients', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	//#endregion

	//#region Paracetamol

	event.recipes.firmalife.mixing_bowl()
		.ingredients(['tfg:regeneration_pill', 'tfg:weakness_pill', 'tfg:antipoison_pill', 'tfg:slowness_pill'], Fluid.of('tfc:vinegar', 250))
		.outputItem('4x gtceu:paracetamol_pill')
		.id(`tfg:mixing_bowl/paracetamol`)

	//#endregion
}