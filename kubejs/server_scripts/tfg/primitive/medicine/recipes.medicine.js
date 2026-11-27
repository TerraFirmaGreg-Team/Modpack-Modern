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
	];

	function generatePillMixing(name, extra) {
		let suffix, waterFluid, multiplier, typeInput;

		for (let i = 0; i < 3; i++) {
			switch (i) {
				case 0:
					suffix = 'spring';
					waterFluid = Fluid.of('tfc:spring_water', 250);
					multiplier = 1;
					typeInput = ChemicalHelper.get(TagPrefix.dust, extra, 1);
					break;
				case 1:
					suffix = 'distilled';
					waterFluid = Fluid.of('gtceu:distilled_water', 50);
					multiplier = 2;
					typeInput = ChemicalHelper.get(TagPrefix.dust, extra, 1);
					break;
				case 2:
					suffix = 'jellie';
					waterFluid = null;
					multiplier = 4;
					typeInput = 'jellies:jellie/slime_ball/herbal';
					break;
			}

			// Mixing Bowl Pills
			for (const spoon of [true, false]) {
				let spoonSuffix = spoon ? 'spoon' : 'mixer';

				let a = event.recipes.tfg.mixing_bowl()
					.id(`tfg:mixing_bowl/${name}_pill/${spoonSuffix}/${suffix}`)
					.itemInputs(`#tfg:${name}_ingredients`, '#forge:wax', typeInput)
					.itemOutputs(`${multiplier}x tfg:${name}_pill`)
					.duration(200);

				if (waterFluid != null) {
					a.fluidInputs(waterFluid);
				}

				if (spoon) {
					a.tool('firmalife:spoon');
				} else {
					a.attachment('mixer', x => x.circuit(4));
				}
			}
			
			// GT Mixer Pills
			let b = event.recipes.gtceu.mixer(`tfg:${name}_pill/${suffix}`)
				.circuit(4)
				.itemOutputs(`${multiplier}x tfg:${name}_pill`)
				.itemInputs(`#tfg:${name}_ingredients`, '#forge:wax', typeInput)
				.duration(200)
				.EUt(GTValues.VHA[GTValues.ULV])

				if (waterFluid != null) {
					b.inputFluids(waterFluid);
				}

			// Mixing Bowl Tablets
			let c = event.recipes.tfg.mixing_bowl()
				.id(`tfg:mixing_bowl/${name}_tablet/${suffix}`)
				.itemInputs('gtceu:lactose_dust', `#tfg:${name}_ingredients`, typeInput)
				.fluidInputs(Fluid.of('gtceu:wax', 144))
        		.catalyst('gtceu:pill_casting_mold', 0)
				.itemOutputs(`${multiplier}x tfg:${name}_tablet`)
				.attachment('mixer', x => x
					.rpm(32)
					.circuit(4)
				)
				.duration(200);
				
			if (waterFluid != null) {
				c.fluidInputs(waterFluid);
			}

			// GT Mixer Tablets
			let d = event.recipes.gtceu.mixer(`tfg:${name}_tablet/${suffix}`)
				.circuit(4)
				.itemOutputs(`${multiplier}x tfg:${name}_tablet`)
				.itemInputs('gtceu:lactose_dust', `#tfg:${name}_ingredients`, typeInput)
				.inputFluids(Fluid.of('gtceu:wax', 144))
				.notConsumable('gtceu:pill_casting_mold')
				.duration(200)
				.EUt(GTValues.VHA[GTValues.LV])

				if (waterFluid != null) {
					d.inputFluids(waterFluid);
				}
		};
	};

	pillTypes.forEach(type => {

		generatePillMixing(type.name, type.extra);

		// Arrow
		if (type.makeArrow) {
			event.shapeless(Item.of('8x minecraft:tipped_arrow', `{Potion:"minecraft:${type.name}"}`),
				['4x minecraft:arrow', `tfg:${type.name}_pill`, '4x minecraft:arrow'])

			event.recipes.gtceu.mixer(`tfg:gtceu/mixer/arrow/${type.name}_1`)
				.circuit(4)
				.inputFluids(Fluid.of('gtceu:ethanol', 25))
				.itemOutputs(Item.of('16x minecraft:tipped_arrow', `{Potion:"minecraft:${type.name}"}`).strongNBT())
				.itemInputs('16x minecraft:arrow', `tfg:${type.name}_pill`)
				.duration(200)
				.EUt(GTValues.VHA[GTValues.LV]);

			event.recipes.gtceu.mixer(`tfg:gtceu/mixer/arrow/${type.name}_2`)
				.circuit(4)
				.inputFluids(Fluid.of('gtceu:ethanol', 25))
				.itemOutputs(Item.of('16x minecraft:tipped_arrow', `{Potion:"minecraft:long_${type.name}"}`).strongNBT())
				.itemInputs('16x minecraft:arrow', `tfg:${type.name}_tablet`)
				.duration(200)
				.EUt(GTValues.VHA[GTValues.LV]);
		}
	});

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
		
		for (const spoon of [true, false]) {
			let spoonSuffix = spoon ? 'spoon' : 'mixer';

			// Regular
			let a = event.recipes.tfg.mixing_bowl()
				.itemInputs('gtceu:sticky_resin', `#tfg:${type}_ingredients`, ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
				.fluidInputs(Fluid.of('gtceu:creosote', 500))
				.itemOutputs(`1x tfg:${type}_salvo`)
				.duration(200)
				.id(`tfg:mixing_bowl/${type}_salvo/${spoonSuffix}`);
			
			// Jellie
			let b = event.recipes.tfg.mixing_bowl()
				.itemInputs('gtceu:sticky_resin', `#tfg:${type}_ingredients`, 'jellies:jellie/slime_ball/herbal')
				.itemOutputs(`2x tfg:${type}_salvo`)
				.duration(200)
				.id(`tfg:mixing_bowl/${type}_salvo/jellie/${spoonSuffix}`);

			if (spoon) {
				a.tool('firmalife:spoon');
				b.tool('firmalife:spoon');
			} else {
				a.attachment('mixer', x => x.circuit(4));
				b.attachment('mixer', x => x.circuit(4));
			}
		};

		// Regular
		event.recipes.gtceu.mixer(`tfg:gtceu/mixer/${type}_salvo`)
			.circuit(4)
			.inputFluids(Fluid.of('gtceu:creosote', 500))
			.itemOutputs(`1x tfg:${type}_salvo`)
			.itemInputs('gtceu:sticky_resin', `#tfg:${type}_ingredients`, ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
			.duration(200)
			.EUt(GTValues.VHA[GTValues.ULV])

		// Jellie
		event.recipes.gtceu.mixer(`tfg:gtceu/mixer/${type}_salvo_with_herbal_slime_ball`)
			.circuit(4)
			.itemOutputs(`2x tfg:${type}_salvo`)
			.itemInputs('gtceu:sticky_resin', `#tfg:${type}_ingredients`, 'jellies:jellie/slime_ball/herbal')
			.duration(200)
			.EUt(GTValues.VHA[GTValues.ULV])
	});

	//#endregion

	//#region Powders

	const powderTypes = [
		//type			ingredient one		ingredient two
		['mining', 		'haste', 			'night_vision'],
		['acrobat', 	'jump_boost', 		'slow_fall'],
		['recovery',	'instant_health',	'regeneration'],
		['combat',		'strength', 		'resistance']
	];

	powderTypes.forEach(type => {
		for (const spoon of [true, false]) {
			let spoonSuffix = spoon ? 'spoon' : 'mixer';

			// Conifer
			let a = event.recipes.tfg.mixing_bowl()
				.itemInputs(`#tfg:${type[1]}_ingredients`, `#tfg:${type[2]}_ingredients`, 'minecraft:bone_meal')
				.fluidInputs(Fluid.of('tfg:conifer_pitch', 250))
				.itemOutputs(`1x tfg:${type[0]}_powder`)
				.duration(200)
				.id(`tfg:mixing_bowl/${type[0]}_powder_conifer/${spoonSuffix}`);

			// Wax
			let b = event.recipes.tfg.mixing_bowl()
				.itemInputs(`#tfg:${type[1]}_ingredients`, `#tfg:${type[2]}_ingredients`, 'minecraft:bone_meal')
				.fluidInputs(Fluid.of('gtceu:wax', 144))
				.itemOutputs(`1x tfg:${type[0]}_powder`)
				.duration(200)
				.id(`tfg:mixing_bowl/${type[0]}_powder_wax/${spoonSuffix}`);

			// Jellie
			let c = event.recipes.tfg.mixing_bowl()
				.itemInputs(`#tfg:${type[1]}_ingredients`, `#tfg:${type[2]}_ingredients`, 'jellies:jellie/slime_ball/herbal')
				.itemOutputs(`2x tfg:${type[0]}_powder`)
				.duration(200)
				.id(`tfg:mixing_bowl/${type[0]}_powder_jellie/${spoonSuffix}`);

			if (spoon) {
				a.tool('firmalife:spoon');
				b.tool('firmalife:spoon');
				c.tool('firmalife:spoon');
			} else {
				a.attachment('mixer', x => x.circuit(4));
				b.attachment('mixer', x => x.circuit(4));
				c.attachment('mixer', x => x.circuit(4));
			}
		};
		// Conifer
		event.recipes.gtceu.mixer(`tfg:gtceu/mixer/${type[0]}_powder`)
			.circuit(4)
			.inputFluids(Fluid.of('tfg:conifer_pitch', 100))
			.itemOutputs(`1x tfg:${type[0]}_powder`)
			.itemInputs(`#tfg:${type[1]}_ingredients`, `#tfg:${type[2]}_ingredients`, 'minecraft:bone_meal')
			.duration(200)
			.EUt(GTValues.VHA[GTValues.ULV]);

		// Wax
		event.recipes.gtceu.mixer(`tfg:gtceu/mixer/${type[0]}_powder_with_wax`)
			.circuit(4)
			.itemInputs(`#tfg:${type[1]}_ingredients`, `#tfg:${type[2]}_ingredients`, 'minecraft:bone_meal', 'gtceu:wax_nugget')
			.itemOutputs(`1x tfg:${type[0]}_powder`)
			.duration(200)
			.EUt(GTValues.VHA[GTValues.ULV]);

		// Jellie
		event.recipes.gtceu.mixer(`tfg:gtceu/mixer/${type[0]}_powder_with_herbal_slime_ball`)
			.circuit(4)
			.itemOutputs(`2x tfg:${type[0]}_powder`)
			.itemInputs(`#tfg:${type[1]}_ingredients`, `#tfg:${type[2]}_ingredients`, 'jellies:jellie/slime_ball/herbal')
			.duration(200)
			.EUt(GTValues.VHA[GTValues.ULV]);
	});

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
		.EUt(GTValues.VHA[GTValues.LV]);

	event.recipes.gtceu.forming_press('tfg:gtceu/forming_press/empty_capsule_from_gelatin')
		.notConsumable('gtceu:pill_casting_mold')
		.itemOutputs('10x tfg:empty_capsule')
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Gelatin, 1), 'gtceu:sticky_resin', ChemicalHelper.get(TagPrefix.dust, GTMaterials.TricalciumPhosphate, 1))
		.duration(20 * 30)
		.cleanroom(CleanroomType.STERILE_CLEANROOM)
		.EUt(GTValues.VHA[GTValues.HV]);

	//#endregion
}