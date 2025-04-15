const locometalDyeGroups = {
	slashed_locometal: '#railways:palettes/dye_groups/slashed',
	riveted_locometal: '#railways:palettes/dye_groups/riveted',
	locometal_pillar: '#railways:palettes/dye_groups/pillar',
	locometal_smokebox: '#railways:palettes/dye_groups/smokebox',
	plated_locometal: '#railways:palettes/dye_groups/plated',
	flat_slashed_locometal: '#railways:palettes/dye_groups/flat_slashed',
	flat_riveted_locometal: '#railways:palettes/dye_groups/flat_riveted'
}

const locometalBase = {
	slashed_locometal: 'slashed_locometal',
	riveted_locometal: 'riveted_locometal',
	locometal_pillar: 'locometal_pillar',
	locometal_smokebox: 'locometal_smokebox',
	plated_locometal: 'plated_locometal',
	flat_slashed_locometal: 'flat_slashed_locometal',
	flat_riveted_locometal: 'flat_riveted_locometal'
}

const railwaysLocometalIntegration = (event) => {
	for (var locometal in locometalBase) {
		event.recipes.create.cutting(`8x railways:${locometal}`, '#forge:storage_blocks/iron').processingTime(200);
		event.recipes.create.cutting(`16x railways:${locometal}`, '#forge:storage_blocks/wrought_iron').processingTime(200);
		event.recipes.create.cutting(`24x railways:${locometal}`, '#forge:storage_blocks/steel').processingTime(200);
		event.recipes.create.cutting(`railways:${locometal}`, `#railways:palettes/cycle_groups/base`).processingTime(20);
		event.recipes.gtceu.chemical_bath(`gpedia:undying/locometal/${locometal}`)
			.itemInputs(Item.of(locometalDyeGroups[`${locometal}`], 1))
			.inputFluids(Fluid.of(`gtceu:chlorine`, 18))
			.itemOutputs(Item.of(`railways:${locometal}`))
			.duration(20)
			.EUt(24)
	}

	event.recipes.create.item_application(`railways:iron_wrapped_locometal`, [`#railways:palettes/cycle_groups/base`, '#forge:plates/wrought_iron']);
	event.recipes.create.item_application(`railways:copper_wrapped_locometal`, [`#railways:palettes/cycle_groups/base`, '#forge:plates/copper']);
	event.recipes.create.item_application(`railways:brass_wrapped_locometal`, [`#railways:palettes/cycle_groups/base`, '#forge:plates/brass'])

	event.recipes.gtceu.chemical_bath(`gpedia:undying/brass_wrapped_locometal`)
		.itemInputs('#railways:palettes/dye_groups/brass_wrapped_slashed')
		.inputFluids(Fluid.of(`gtceu:chlorine`, 18))
		.itemOutputs(`railways:brass_wrapped_locometal`)
		.duration(20)
		.EUt(24);
	event.recipes.gtceu.chemical_bath(`gpedia:undying/copper_wrapped_locometal`)
		.itemInputs('#railways:palettes/dye_groups/copper_wrapped_slashed')
		.inputFluids(Fluid.of(`gtceu:chlorine`, 18))
		.itemOutputs(`railways:copper_wrapped_locometal`)
		.duration(20)
		.EUt(24);
	event.recipes.gtceu.chemical_bath(`gpedia:undying/iron_wrapped_locometal`)
		.itemInputs('#railways:palettes/dye_groups/iron_wrapped_slashed')
		.inputFluids(Fluid.of(`gtceu:chlorine`, 18))
		.itemOutputs(`railways:iron_wrapped_locometal`)
		.duration(20)
		.EUt(24)

	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		for (var locometal in locometalBase) {
			event.recipes.gtceu.chemical_bath(`gpedia:chemical_dying_locometal/${locometal}/${dye}`)
				.itemInputs(Item.of(locometalDyeGroups[`${locometal}`], 1))
				.inputFluids(Fluid.of(`tfc:${dye}_dye`, 18))
				.itemOutputs(Item.of(`railways:${dye}_${locometal}`))
				.duration(20)
				.EUt(24);
			event.shapeless(
				Item.of(`railways:${dye}_${locometal}`, 8),
				[
					Item.of(locometalDyeGroups[`${locometal}`], 8),
					`1x #forge:dyes/${dye}_dye`
				]
			)
		};
		event.recipes.create.item_application(`railways:${dye}_iron_wrapped_locometal`, [`#railways:palettes/cycle_groups/${dye}`, '#forge:plates/wrought_iron']);
		event.recipes.create.item_application(`railways:${dye}_copper_wrapped_locometal`, [`#railways:palettes/cycle_groups/${dye}`, '#forge:plates/copper']);
		event.recipes.create.item_application(`railways:${dye}_brass_wrapped_locometal`, [`#railways:palettes/cycle_groups/${dye}`, '#forge:plates/brass']);
		event.recipes.gtceu.chemical_bath(`gpedia:brass_locometal_bathing/${dye}`)
			.itemInputs('#railways:palettes/dye_groups/brass_wrapped_slashed')
			.inputFluids(Fluid.of(`tfc:${dye}_dye`, 18))
			.itemOutputs(`railways:${dye}_brass_wrapped_locometal`)
			.duration(20)
			.EUt(24);
		event.recipes.gtceu.chemical_bath(`gpedia:copper_locometal_bathing/${dye}`)
			.itemInputs('#railways:palettes/dye_groups/copper_wrapped_slashed')
			.inputFluids(Fluid.of(`tfc:${dye}_dye`, 18))
			.itemOutputs(`railways:${dye}_copper_wrapped_locometal`)
			.duration(20)
			.EUt(24);
		event.recipes.gtceu.chemical_bath(`gpedia:locometal_bathing/${dye}`)
			.itemInputs('#railways:palettes/dye_groups/iron_wrapped_slashed')
			.inputFluids(Fluid.of(`tfc:${dye}_dye`, 18))
			.itemOutputs(`railways:${dye}_iron_wrapped_locometal`)
			.duration(20)
			.EUt(24);
	})
}