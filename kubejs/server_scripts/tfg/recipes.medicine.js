// priority: 0

function registerTFGMedicineRecipes(event) {

	//#region Antipoison

	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#forge:wax', '#tfg:antipoison_ingredients', 'gtceu:tricalcium_phosphate_dust'], Fluid.of('tfc:spring_water', 250))
		.outputItem('1x tfg:antipoison_pill')
		.id(`tfg:mixing_bowl/pill_antipoison`)

	event.recipes.create.mixing(
		'1x tfg:antipoison_pill',
		['#forge:wax', '#tfg:antipoison_ingredients', 'gtceu:tricalcium_phosphate_dust', Fluid.of('tfc:spring_water', 250)])
		.id(`tfg:create/mixer/spring_water/pill_antipoison`)
	event.recipes.create.mixing(
		'1x tfg:antipoison_pill',
		['#forge:wax', '#tfg:antipoison_ingredients', 'gtceu:tricalcium_phosphate_dust', Fluid.of('gtceu:distilled_water', 50)])
		.id(`tfg:create/mixer/distilled_water/pill_antipoison`)

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_antipoison`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:antipoison_pill')
		.itemInputs('#forge:wax', '#tfg:antipoison_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_antipoison`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:antipoison_pill')
		.itemInputs('#forge:wax', '#tfg:antipoison_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_antipoison`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:antipoison_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:antipoison_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_antipoison`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:antipoison_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:antipoison_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)

	// TODO: mixing bowl recipes? https://notenoughmail.github.io/kubejs_tfc/1.20.1/recipes/#firmalife-mixing-bowl

	//#endregion

	//#region Poison
	
	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#forge:wax', '#tfg:poison_ingredients', 'tfc:powder/sulfur'], Fluid.of('tfc:spring_water', 250))
		.outputItem('1x tfg:poison_pill')
		.id(`tfg:mixing_bowl/pill_poison`)
	
	event.recipes.create.mixing(
		'1x tfg:poison_pill',
		['#forge:wax', '#tfg:poison_ingredients', 'tfc:powder/sulfur', Fluid.of('tfc:spring_water', 250)])
		.id(`tfg:create/mixer/spring_water/pill_poison`)
	event.recipes.create.mixing(
		'1x tfg:poison_pill',
		['#forge:wax', '#tfg:poison_ingredients', 'tfc:powder/sulfur', Fluid.of('gtceu:distilled_water', 50)])
		.id(`tfg:create/mixer/distilled_water/pill_poison`)

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_poison`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:poison_pill')
		.itemInputs('#forge:wax', '#tfg:poison_ingredients', 'tfc:powder/sulfur')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_poison`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:poison_pill')
		.itemInputs('#forge:wax', '#tfg:poison_ingredients', 'tfc:powder/sulfur')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_poison`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:poison_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:poison_ingredients', 'tfc:powder/sulfur')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_poison`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:poison_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:poison_ingredients', 'tfc:powder/sulfur')
		.duration(200)
		.EUt(21)

	//#endregion

	//#region Regeneration
	
	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#forge:wax', '#tfg:regeneration_ingredients', 'gtceu:tricalcium_phosphate_dust'], Fluid.of('tfc:spring_water', 250))
		.outputItem('1x tfg:regeneration_pill')
		.id(`tfg:mixing_bowl/pill_regeneration`)

	event.recipes.create.mixing(
		'1x tfg:regeneration_pill',
		['#forge:wax', '#tfg:regeneration_ingredients', 'gtceu:tricalcium_phosphate_dust', Fluid.of('tfc:spring_water', 250)])
		.id(`tfg:create/mixer/spring_water/pill_regeneration`)
	event.recipes.create.mixing(
		'1x tfg:regeneration_pill',
		['#forge:wax', '#tfg:regeneration_ingredients', 'gtceu:tricalcium_phosphate_dust', Fluid.of('gtceu:distilled_water', 50)])
		.id(`tfg:create/mixer/distilled_water/pill_regeneration`)

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_regeneration`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:regeneration_pill')
		.itemInputs('#forge:wax', '#tfg:regeneration_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_regeneration`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:regeneration_pill')
		.itemInputs('#forge:wax', '#tfg:regeneration_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_regeneration`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:regeneration_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:regeneration_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_regeneration`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:regeneration_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:regeneration_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)

	//#endregion

	//#region Speed
	
	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#forge:wax', '#tfg:speed_ingredients', 'gtceu:tricalcium_phosphate_dust'], Fluid.of('tfc:spring_water', 250))
		.outputItem('1x tfg:speed_pill')
		.id(`tfg:mixing_bowl/pill_speed`)

	event.recipes.create.mixing(
		'1x tfg:speed_pill',
		['#forge:wax', '#tfg:speed_ingredients', 'gtceu:tricalcium_phosphate_dust', Fluid.of('tfc:spring_water', 250)])
		.id(`tfg:create/mixer/spring_water/pill_speed`)
	event.recipes.create.mixing(
		'1x tfg:speed_pill',
		['#forge:wax', '#tfg:speed_ingredients', 'gtceu:tricalcium_phosphate_dust', Fluid.of('gtceu:distilled_water', 50)])
		.id(`tfg:create/mixer/distilled_water/pill_speed`)

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_speed`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:speed_pill')
		.itemInputs('#forge:wax', '#tfg:speed_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_speed`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:speed_pill')
		.itemInputs('#forge:wax', '#tfg:speed_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_speed`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:speed_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:speed_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_speed`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:speed_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:speed_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)

	//#endregion

	//#region Slowness
	
	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#forge:wax', '#tfg:slowness_ingredients', 'tfc:powder/sulfur'], Fluid.of('tfc:spring_water', 250))
		.outputItem('1x tfg:slowness_pill')
		.id(`tfg:mixing_bowl/pill_slowness`)

	event.recipes.create.mixing(
		'1x tfg:slowness_pill',
		['#forge:wax', '#tfg:slowness_ingredients', 'tfc:powder/sulfur', Fluid.of('tfc:spring_water', 250)])
		.id(`tfg:create/mixer/spring_water/pill_slowness`)
	event.recipes.create.mixing(
		'1x tfg:slowness_pill',
		['#forge:wax', '#tfg:slowness_ingredients', 'tfc:powder/sulfur', Fluid.of('gtceu:distilled_water', 50)])
		.id(`tfg:create/mixer/distilled_water/pill_slowness`)

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_slowness`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:slowness_pill')
		.itemInputs('#forge:wax', '#tfg:slowness_ingredients', 'tfc:powder/sulfur')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_slowness`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:slowness_pill')
		.itemInputs('#forge:wax', '#tfg:slowness_ingredients', 'tfc:powder/sulfur')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_slowness`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:slowness_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:slowness_ingredients', 'tfc:powder/sulfur')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_slowness`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:slowness_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:slowness_ingredients', 'tfc:powder/sulfur')
		.duration(200)
		.EUt(21)

	//#endregion

	//#region Weakness

	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#forge:wax', '#tfg:weakness_ingredients', 'tfc:powder/sulfur'], Fluid.of('tfc:spring_water', 250))
		.outputItem('1x tfg:weakness_pill')
		.id(`tfg:mixing_bowl/pill_weakness`)

	event.recipes.create.mixing(
		'1x tfg:weakness_pill',
		['#forge:wax', '#tfg:weakness_ingredients', 'tfc:powder/sulfur', Fluid.of('tfc:spring_water', 250)])
		.id(`tfg:create/mixer/spring_water/pill_weakness`)
	event.recipes.create.mixing(
		'1x tfg:weakness_pill',
		['#forge:wax', '#tfg:weakness_ingredients', 'tfc:powder/sulfur', Fluid.of('gtceu:distilled_water', 50)])
		.id(`tfg:create/mixer/distilled_water/pill_weakness`)

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_weakness`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:weakness_pill')
		.itemInputs('#forge:wax', '#tfg:weakness_ingredients', 'tfc:powder/sulfur')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_weakness`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:weakness_pill')
		.itemInputs('#forge:wax', '#tfg:weakness_ingredients', 'tfc:powder/sulfur')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_weakness`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:weakness_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:weakness_ingredients', 'tfc:powder/sulfur')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_weakness`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:weakness_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:weakness_ingredients', 'tfc:powder/sulfur')
		.duration(200)
		.EUt(21)

	//#endregion

	//#region Haste

	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#forge:wax', '#tfg:haste_ingredients', 'gtceu:tricalcium_phosphate_dust'], Fluid.of('tfc:spring_water', 250))
		.outputItem('1x tfg:haste_pill')
		.id(`tfg:mixing_bowl/pill_haste`)

	event.recipes.create.mixing(
		'1x tfg:haste_pill',
		['#forge:wax', '#tfg:haste_ingredients', 'gtceu:tricalcium_phosphate_dust', Fluid.of('tfc:spring_water', 250)])
		.id(`tfg:create/mixer/spring_water/pill_haste`)
	event.recipes.create.mixing(
		'1x tfg:haste_pill',
		['#forge:wax', '#tfg:haste_ingredients', 'gtceu:tricalcium_phosphate_dust', Fluid.of('gtceu:distilled_water', 50)])
		.id(`tfg:create/mixer/distilled_water/pill_haste`)

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_haste`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:haste_pill')
		.itemInputs('#forge:wax', '#tfg:haste_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_haste`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:haste_pill')
		.itemInputs('#forge:wax', '#tfg:haste_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_haste`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:haste_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:haste_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_haste`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:haste_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:haste_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)

	//#endregion

	//#region Water Breathing

	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#forge:wax', '#tfg:water_breathing_ingredients', 'gtceu:tricalcium_phosphate_dust'], Fluid.of('tfc:spring_water', 250))
		.outputItem('1x tfg:water_breathing_pill')
		.id(`tfg:mixing_bowl/pill_water_breathing`)

	event.recipes.create.mixing(
		'1x tfg:water_breathing_pill',
		['#forge:wax', '#tfg:water_breathing_ingredients', 'gtceu:tricalcium_phosphate_dust', Fluid.of('tfc:spring_water', 250)])
		.id(`tfg:create/mixer/spring_water/pill_water_breathing`)
	event.recipes.create.mixing(
		'1x tfg:water_breathing_pill',
		['#forge:wax', '#tfg:water_breathing_ingredients', 'gtceu:tricalcium_phosphate_dust', Fluid.of('gtceu:distilled_water', 50)])
		.id(`tfg:create/mixer/distilled_water/pill_water_breathing`)

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_water_breathing`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:water_breathing_pill')
		.itemInputs('#forge:wax', '#tfg:water_breathing_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_water_breathing`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:water_breathing_pill')
		.itemInputs('#forge:wax', '#tfg:water_breathing_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_water_breathing`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:water_breathing_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:water_breathing_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_water_breathing`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:water_breathing_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:water_breathing_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)

	//#endregion

	//#region Night Vision

	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#forge:wax', '#tfg:night_vision_ingredients', 'gtceu:tricalcium_phosphate_dust'], Fluid.of('tfc:spring_water', 250))
		.outputItem('1x tfg:night_vision_pill')
		.id(`tfg:mixing_bowl/pill_night_vision`)

	event.recipes.create.mixing(
		'1x tfg:night_vision_pill',
		['#forge:wax', '#tfg:night_vision_ingredients', 'gtceu:tricalcium_phosphate_dust', Fluid.of('tfc:spring_water', 250)])
		.id(`tfg:create/mixer/spring_water/pill_night_vision`)
	event.recipes.create.mixing(
		'1x tfg:night_vision_pill',
		['#forge:wax', '#tfg:night_vision_ingredients', 'gtceu:tricalcium_phosphate_dust', Fluid.of('gtceu:distilled_water', 50)])
		.id(`tfg:create/mixer/distilled_water/pill_night_vision`)

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_night_vision`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:night_vision_pill')
		.itemInputs('#forge:wax', '#tfg:night_vision_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_night_vision`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:night_vision_pill')
		.itemInputs('#forge:wax', '#tfg:night_vision_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_night_vision`)
		.circuit(4)
		.inputFluids(Fluid.of('tfc:spring_water', 250))
		.itemOutputs('2x tfg:night_vision_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:night_vision_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_night_vision`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:distilled_water', 50))
		.itemOutputs('2x tfg:night_vision_tablet')
		.notConsumable('gtceu:pill_casting_mold')
		.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', '#tfg:night_vision_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)

	//#endregion

	//#region Invisibility

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/salvo_invisibility`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:aminophenol', 250))
		.itemOutputs('1x tfg:invisibility_salvo')
		.itemInputs('gtceu:sticky_resin', '#tfg:invisibility_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)

	//#endregion

	//#region Fire Resistance

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/salvo_fire_resistance`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:aminophenol', 250))
		.itemOutputs('1x tfg:fire_resistance_salvo')
		.itemInputs('gtceu:sticky_resin', '#tfg:fire_resistance_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)

	//#endregion

	//#region Resistance

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/salvo_resistance`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:aminophenol', 250))
		.itemOutputs('1x tfg:resistance_salvo')
		.itemInputs('gtceu:sticky_resin', '#tfg:resistance_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)

	//#endregion

	//#region Instant Health
	
	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/salvo_instant_health`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:aminophenol', 250))
		.itemOutputs('1x tfg:instant_health_salvo')
		.itemInputs('gtceu:sticky_resin', '#tfg:instant_health_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)

	//#endregion

	//#region Absorption

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/salvo_absorption`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:aminophenol', 250))
		.itemOutputs('1x tfg:absorption_salvo')
		.itemInputs('gtceu:sticky_resin', '#tfg:absorption_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)

	//#endregion

	//#region Luck

	event.recipes.gtceu.mixer(`tfg:gtceu/mixer/salvo_luck`)
		.circuit(4)
		.inputFluids(Fluid.of('gtceu:phenol', 250))
		.itemOutputs('1x tfg:luck_salvo')
		.itemInputs('gtceu:sticky_resin', '#tfg:luck_ingredients', 'gtceu:tricalcium_phosphate_dust')
		.duration(200)
		.EUt(21)

	//#endregion

}