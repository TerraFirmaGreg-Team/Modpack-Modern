// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGMedicineRecipes(event) {
	//#region Pills & Tables

	const pillTypes = [
		{ name: 'antipoison', extra: GTMaterials.TricalciumPhosphate, makeArrow: false },
		{ name: 'water_breathing', extra: GTMaterials.TricalciumPhosphate, makeArrow: true },
		{ name: 'poison', extra: GTMaterials.Sulfur, makeArrow: true },
		{ name: 'slowness', extra: GTMaterials.Sulfur, makeArrow: true },
		{ name: 'weakness', extra: GTMaterials.Sulfur, makeArrow: true },
		{ name: 'haste', extra: GTMaterials.TricalciumPhosphate, makeArrow: false },
		{ name: 'night_vision', extra: GTMaterials.TricalciumPhosphate, makeArrow: true },
		{ name: 'regeneration', extra: GTMaterials.TricalciumPhosphate, makeArrow: true },
		{ name: 'speed', extra: GTMaterials.TricalciumPhosphate, makeArrow: true }
	]

	pillTypes.forEach(type => {
		// Regular
		event.recipes.firmalife.mixing_bowl()
			.ingredients(['#forge:wax', `#tfg:${type.name}_ingredients`, ChemicalHelper.get(TagPrefix.dust, type.extra, 1)], Fluid.of('tfc:spring_water', 250))
			.outputItem(`1x tfg:${type.name}_pill`)
			.id(`tfg:mixing_bowl/pill_${type.name}`)

		event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_${type.name}`)
			.circuit(4)
			.inputFluids(Fluid.of('tfc:spring_water', 250))
			.itemOutputs(`2x tfg:${type.name}_pill`)
			.itemInputs('#forge:wax', `#tfg:${type.name}_ingredients`, ChemicalHelper.get(TagPrefix.dust, type.extra, 1))
			.duration(200)
			.EUt(GTValues.VA[GTValues.LV])
		event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_${type.name}`)
			.circuit(4)
			.inputFluids(Fluid.of('gtceu:distilled_water', 50))
			.itemOutputs(`2x tfg:${type.name}_pill`)
			.itemInputs('#forge:wax', `#tfg:${type.name}_ingredients`, ChemicalHelper.get(TagPrefix.dust, type.extra, 1))
			.duration(200)
			.EUt(GTValues.VA[GTValues.LV])
		event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_${type.name}`)
			.circuit(4)
			.inputFluids(Fluid.of('tfc:spring_water', 250))
			.itemOutputs(`2x tfg:${type.name}_tablet`)
			.notConsumable('gtceu:pill_casting_mold')
			.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `#tfg:${type.name}_ingredients`, ChemicalHelper.get(TagPrefix.dust, type.extra, 1))
			.duration(200)
			.EUt(GTValues.VA[GTValues.LV])
		event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_${type.name}`)
			.circuit(4)
			.inputFluids(Fluid.of('gtceu:distilled_water', 50))
			.itemOutputs(`2x tfg:${type.name}_tablet`)
			.notConsumable('gtceu:pill_casting_mold')
			.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `#tfg:${type.name}_ingredients`, ChemicalHelper.get(TagPrefix.dust, type.extra, 1))
			.duration(200)
			.EUt(GTValues.VA[GTValues.LV])

		// With Herbal Slime Ball
		event.recipes.firmalife.mixing_bowl()
			.itemIngredients(['#forge:wax', `#tfg:${type.name}_ingredients`, 'jellies:jellie/slime_ball/herbal'])
			.outputItem(`2x tfg:${type.name}_pill`)
			.id(`tfg:mixing_bowl/pill_${type.name}_with_herbal_slime_ball`)

		event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/pill_${type.name}_with_herbal_slime_ball`)
			.circuit(4)
			.itemOutputs(`4x tfg:${type.name}_pill`)
			.itemInputs('#forge:wax', `#tfg:${type.name}_ingredients`, 'jellies:jellie/slime_ball/herbal')
			.duration(200)
			.EUt(GTValues.VA[GTValues.LV])
		event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/pill_${type.name}_with_herbal_slime_ball`)
			.circuit(4)
			.itemOutputs(`4x tfg:${type.name}_pill`)
			.itemInputs('#forge:wax', `#tfg:${type.name}_ingredients`, 'jellies:jellie/slime_ball/herbal')
			.duration(200)
			.EUt(GTValues.VA[GTValues.LV])
		event.recipes.gtceu.mixer(`tfg:gtceu/mixer/spring_water/tablet_${type.name}_with_herbal_slime_ball`)
			.circuit(4)
			.itemOutputs(`4x tfg:${type.name}_tablet`)
			.notConsumable('gtceu:pill_casting_mold')
			.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `#tfg:${type.name}_ingredients`, 'jellies:jellie/slime_ball/herbal')
			.duration(200)
			.EUt(GTValues.VA[GTValues.LV])
		event.recipes.gtceu.mixer(`tfg:gtceu/mixer/distilled_water/tablet_${type.name}_with_herbal_slime_ball`)
			.circuit(4)
			.itemOutputs(`4x tfg:${type.name}_tablet`)
			.notConsumable('gtceu:pill_casting_mold')
			.itemInputs('gtceu:sodium_bicarbonate_dust', 'gtceu:lactose_dust', `#tfg:${type.name}_ingredients`, 'jellies:jellie/slime_ball/herbal')
			.duration(200)
			.EUt(GTValues.VA[GTValues.LV])

		// Arrow
		if(type.makeArrow) {
			event.shapeless(Item.of('8x minecraft:tipped_arrow', `{Potion:"minecraft:${type.name}"}`),
				['4x minecraft:arrow', `tfg:${type.name}_pill`, '4x minecraft:arrow'])

			event.recipes.gtceu.mixer(`tfg:gtceu/mixer/arrow/${type.name}_1`)
				.circuit(4)
				.inputFluids(Fluid.of('gtceu:ethanol', 25))
				.itemOutputs(Item.of('16x minecraft:tipped_arrow', `{Potion:"minecraft:${type.name}"}`))
				.itemInputs('16x minecraft:arrow', `tfg:${type.name}_pill`)
				.duration(200)
				.EUt(GTValues.VA[GTValues.MV])

			event.recipes.gtceu.mixer(`tfg:gtceu/mixer/arrow/${type.name}_2`)
				.circuit(4)
				.inputFluids(Fluid.of('gtceu:ethanol', 25))
				.itemOutputs(Item.of('16x minecraft:tipped_arrow', `{Potion:"minecraft:long_${type.name}"}`))
				.itemInputs('16x minecraft:arrow', `tfg:${type.name}_tablet`)
				.duration(200)
				.EUt(GTValues.VA[GTValues.MV])
		}
	})

	//#region Salvos

	const salvoTypes = [
		'luck',
		'fire_resistance',
		'resistance',
		'absorption',
		'instant_health',
		'invisibility'
	]

	salvoTypes.forEach(type => {
		// Regular
		event.recipes.firmalife.mixing_bowl()
			.ingredients(['gtceu:sticky_resin', `#tfg:${type}_ingredients`, ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1)], Fluid.of('gtceu:creosote', 500))
			.outputItem(`1x tfg:${type}_salvo`)
			.id(`tfg:mixing_bowl/${type}_salvo`)

		event.recipes.gtceu.mixer(`tfg:gtceu/mixer/${type}_salvo`)
			.circuit(4)
			.inputFluids(Fluid.of('gtceu:creosote', 500))
			.itemOutputs(`1x tfg:${type}_salvo`)
			.itemInputs('gtceu:sticky_resin', `#tfg:${type}_ingredients`, ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
			.duration(200)
			.EUt(GTValues.VA[GTValues.LV])

		// With Herbal Slime Ball
		event.recipes.firmalife.mixing_bowl()
			.itemIngredients(['gtceu:sticky_resin', `#tfg:${type}_ingredients`, 'jellies:jellie/slime_ball/herbal'])
			.outputItem(`2x tfg:${type}_salvo`)
			.id(`tfg:mixing_bowl/${type}_salvo_with_herbal_slime_ball`)

		event.recipes.gtceu.mixer(`tfg:gtceu/mixer/${type}_salvo_with_herbal_slime_ball`)
			.circuit(4)
			.itemOutputs(`2x tfg:${type}_salvo`)
			.itemInputs('gtceu:sticky_resin', `#tfg:${type}_ingredients`, 'jellies:jellie/slime_ball/herbal')
			.duration(200)
			.EUt(GTValues.VA[GTValues.LV])
	})

	//#endregion

	//#region Powders

	const powderTypes = [
		//type			ingredient one		ingredient two
		['mining', 		'haste', 			'night_vision'],
		['acrobat', 	'jump_boost', 		'slow_fall'],
		['recovery',	'instant_health',	'regeneration'],
		['combat',		'strength', 		'resistance']
	]

	powderTypes.forEach(type => {
		// Regular
		event.recipes.firmalife.mixing_bowl()
		.ingredients([`#tfg:${type[1]}_ingredients`, `#tfg:${type[2]}_ingredients`, 'minecraft:bone_meal'], Fluid.of('tfg:conifer_pitch', 100))
		.outputItem(`1x tfg:${type[0]}_powder`)
		.id(`tfg:mixing_bowl/${type[0]}_powder`)

		event.recipes.gtceu.mixer(`tfg:gtceu/mixer/${type[0]}_powder`)
		.circuit(4)
		.inputFluids(Fluid.of('tfg:conifer_pitch', 100))
		.itemOutputs(`1x tfg:${type[0]}_powder`)
		.itemInputs(`#tfg:${type[1]}_ingredients`, `#tfg:${type[2]}_ingredients`, 'minecraft:bone_meal')
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

		// With Herbal Slime Ball
		event.recipes.firmalife.mixing_bowl()
		.itemIngredients([`#tfg:${type[1]}_ingredients`, `#tfg:${type[2]}_ingredients`, 'jellies:jellie/slime_ball/herbal'])
		.outputItem(`2x tfg:${type[0]}_powder`)
		.id(`tfg:mixing_bowl/${type[0]}_powder_with_herbal_slime_ball`)

		event.recipes.gtceu.mixer(`tfg:gtceu/mixer/${type[0]}_powder_with_herbal_slime_ball`)
		.circuit(4)
		.itemOutputs(`2x tfg:${type[0]}_powder`)
		.itemInputs(`#tfg:${type[1]}_ingredients`, `#tfg:${type[2]}_ingredients`, 'jellies:jellie/slime_ball/herbal')
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
	})

	//#endregion
	//#region Capsules
	
	/**
	 * Function to generate capsule recipes.
	 * @param event
	 * @param {Internal.Ingredient} inputItem
	 * @param {Internal.Item} outputItem
	 */
	function generateCapsules(event, inputItem, outputItem) {
		event.recipes.gtceu.canner(`tfg:gtceu/canner/${global.linuxUnfucker(outputItem)}`)
			.itemOutputs(outputItem)
			.itemInputs('tfg:empty_capsule', inputItem)
			.inputFluids('gtceu:phenol 200')
			.duration(20 * 10)
			.EUt(GTValues.VA[GTValues.LV]);
	};

	// Parasiticide
	generateCapsules(event, '#tfg:antiparasitic_ingredients', 'tfg:parasiticide_capsule');
	// Detox
	generateCapsules(event, '#tfg:detox_ingredients', 'tfg:detox_capsule');
	// Nanofiltration
	generateCapsules(event, '#tfg:filtering_ingredients', 'tfg:nanofiltration_capsule');

	//#endregion
	//#region Ingredients

	event.recipes.gtceu.forming_press('tfg:gtceu/forming_press/empty_capsule_from_crude_gelatin')
		.notConsumable('gtceu:pill_casting_mold')
		.itemOutputs('tfg:empty_capsule')
		.itemInputs('tfg:food/crude_gelatin', 'gtceu:sticky_resin', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(20 * 30)
		.EUt(GTValues.VA[GTValues.LV]);

	event.recipes.gtceu.forming_press('tfg:gtceu/forming_press/empty_capsule_from_gelatin')
		.notConsumable('gtceu:pill_casting_mold')
		.itemOutputs('10x tfg:empty_capsule')
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Gelatin, 1), 'gtceu:sticky_resin', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(20 * 30)
		.cleanroom(CleanroomType.STERILE_CLEANROOM)
		.EUt(GTValues.VA[GTValues.HV]);

	//#endregion
}