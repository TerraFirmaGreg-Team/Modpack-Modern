// priority: 0
"use strict";

function registerTFGLeatherRecipes(event) {

	// Limewater
	event.recipes.gtceu.mixer('tfg:limewater_from_lime')
		.itemInputs('tfc:powder/lime')
		.inputFluids(Fluid.of('water', 500))
		.outputFluids(Fluid.of('tfc:limewater', 500))
		.duration(20)
		.EUt(16)

	event.recipes.gtceu.mixer('tfg:limewater_from_flux')
		.itemInputs('tfc:powder/flux')
		.inputFluids(Fluid.of('water', 500))
		.outputFluids(Fluid.of('tfc:limewater', 500))
		.duration(20)
		.EUt(16)

	// Tannin
	event.recipes.gtceu.chemical_bath('tfg:tannin')
		.itemInputs('#tfc:makes_tannin')
		.inputFluids(Fluid.of('water', 1000))
		.outputFluids(Fluid.of('tfc:tannin', 1000))
		.duration(2400)
		.EUt(16)

	// Soaked hides
	event.recipes.gtceu.chemical_bath('tfg:small_soaked_hide')
		.itemInputs('tfc:small_raw_hide')
		.inputFluids(Fluid.of('tfc:limewater', 300))
		.itemOutputs('tfc:small_soaked_hide')
		.duration(1600)
		.EUt(16)

	event.recipes.gtceu.chemical_bath('tfg:medium_soaked_hide')
		.itemInputs('tfc:medium_raw_hide')
		.inputFluids(Fluid.of('tfc:limewater', 400))
		.itemOutputs('tfc:medium_soaked_hide')
		.duration(2400)
		.EUt(16)

	event.recipes.gtceu.chemical_bath('tfg:large_soaked_hide')
		.itemInputs('tfc:large_raw_hide')
		.inputFluids(Fluid.of('tfc:limewater', 500))
		.itemOutputs('tfc:large_soaked_hide')
		.duration(3200)
		.EUt(16)

	// Scraped Hides
	event.recipes.gtceu.cutter('tfg:small_scraped_hide')
		.itemInputs('tfc:small_soaked_hide')
		.itemOutputs('tfc:small_scraped_hide')
		.duration(100)
		.EUt(7)

	event.recipes.gtceu.cutter('tfg:medium_scraped_hide')
		.itemInputs('tfc:medium_soaked_hide')
		.itemOutputs('tfc:medium_scraped_hide')
		.duration(100)
		.EUt(7)

	event.recipes.gtceu.cutter('tfg:large_scraped_hide')
		.itemInputs('tfc:large_soaked_hide')
		.itemOutputs('tfc:large_scraped_hide')
		.duration(100)
		.EUt(7)

	// Prepared hides
	event.recipes.gtceu.chemical_bath('tfg:small_prepared_hide')
		.itemInputs('tfc:small_soaked_hide')
		.inputFluids(Fluid.of('water', 300))
		.itemOutputs('tfc:small_prepared_hide')
		.duration(1600)
		.EUt(16)

	event.recipes.gtceu.chemical_bath('tfg:medium_prepared_hide')
		.itemInputs('tfc:medium_soaked_hide')
		.inputFluids(Fluid.of('water', 400))
		.itemOutputs('tfc:medium_prepared_hide')
		.duration(2400)
		.EUt(16)

	event.recipes.gtceu.chemical_bath('tfg:large_prepared_hide')
		.itemInputs('tfc:large_soaked_hide')
		.inputFluids(Fluid.of('water', 500))
		.itemOutputs('tfc:large_prepared_hide')
		.duration(3200)
		.EUt(16)

	// Leather
	event.recipes.gtceu.chemical_bath('tfg:small_leather')
		.itemInputs('tfc:small_prepared_hide')
		.inputFluids(Fluid.of('tfc:tannin', 300))
		.itemOutputs('minecraft:leather')
		.duration(1600)
		.EUt(16)

	event.recipes.gtceu.chemical_bath('tfg:medium_leather')
		.itemInputs('tfc:medium_prepared_hide')
		.inputFluids(Fluid.of('tfc:tannin', 400))
		.itemOutputs('2x minecraft:leather')
		.duration(2400)
		.EUt(16)

	event.recipes.gtceu.chemical_bath('tfg:large_leather')
		.itemInputs('tfc:large_prepared_hide')
		.inputFluids(Fluid.of('tfc:tannin', 500))
		.itemOutputs('3x minecraft:leather')
		.duration(3200)
		.EUt(16)

	// 1x Small SheepSkin -> 1x Wool
	event.recipes.gtceu.assembler('tfg:tfc/wool_1')
		.itemInputs('tfc:small_sheepskin_hide')
		.itemOutputs('tfc:wool')
		.duration(100)
		.circuit(3)
		.EUt(4)

	// 1x Medium SheepSkin -> 1x Wool
	event.recipes.gtceu.assembler('tfg:tfc/wool_2')
		.itemInputs('tfc:medium_sheepskin_hide')
		.itemOutputs('2x tfc:wool')
		.duration(100)
		.circuit(3)
		.EUt(4)

	// 1x Large SheepSkin -> 1x Wool
	event.recipes.gtceu.assembler('tfg:tfc/wool_3')
		.itemInputs('tfc:large_sheepskin_hide')
		.itemOutputs('3x tfc:wool')
		.duration(100)
		.circuit(3)
		.EUt(4)

	//Hide Sewing
	const stages = [
		'raw',
		'soaked',
		'scraped',
		'prepared',
		'sheepskin'
	];

	stages.forEach(stage => {
		//Combining
		event.recipes.tfc.damage_inputs_shapeless_crafting(
			event.shapeless(`1x tfc:medium_${stage}_hide`, [
				`2x tfc:small_${stage}_hide`,
				'#tfc:sewing_needles',
				'#forge:string',
				'tfc:glue'
			]).id(`tfg:tfc/small_to_medium_${stage}_hide`)
		)
		event.recipes.tfc.damage_inputs_shapeless_crafting(
			event.shapeless(`1x tfc:large_${stage}_hide`, [
				`3x tfc:small_${stage}_hide`,
				'#tfc:sewing_needles',
				'#forge:string',
				'tfc:glue'
			]).id(`tfg:tfc/small_to_large_${stage}_hide`)
		)

		event.recipes.gtceu.assembler(`tfg:gtceu/assembler/small_to_medium_${stage}_hide`)
			.inputFluids(Fluid.of('gtceu:glue', 25))
			.itemOutputs(`1x tfc:medium_${stage}_hide`)
			.itemInputs(`2x tfc:small_${stage}_hide`)
			.duration(60)
			.circuit(7)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.assembler(`tfg:gtceu/assembler/small_to_large_${stage}_hide`)
			.inputFluids(Fluid.of('gtceu:glue', 25))
			.itemOutputs(`1x tfc:large_${stage}_hide`)
			.itemInputs(`3x tfc:small_${stage}_hide`)
			.duration(60)
			.circuit(9)
			.EUt(GTValues.VA[GTValues.ULV])

		//Cutting
		event.recipes.tfc.damage_inputs_shapeless_crafting(
			event.shapeless(`2x tfc:small_${stage}_hide`, [
				`1x tfc:medium_${stage}_hide`,
				'#forge:shears'
			]).id(`tfg:tfc/medium_to_small_${stage}_hide`)
		)

		event.recipes.tfc.damage_inputs_shapeless_crafting(
			event.shapeless(`3x tfc:small_${stage}_hide`, [
				`1x tfc:large_${stage}_hide`,
				'#forge:shears'
			]).id(`tfg:tfc/large_to_small_${stage}_hide`)
		)

		event.recipes.gtceu.assembler(`tfg:gtceu/assembler/medium_to_small_${stage}_hide`)
			.itemOutputs(`2x tfc:small_${stage}_hide`)
			.itemInputs(`1x tfc:medium_${stage}_hide`)
			.duration(60)
			.circuit(4)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.assembler(`tfg:gtceu/assembler/large_to_small_${stage}_hide`)
			.itemOutputs(`3x tfc:small_${stage}_hide`)
			.itemInputs(`1x tfc:large_${stage}_hide`)
			.duration(60)
			.circuit(6)
			.EUt(GTValues.VA[GTValues.ULV])
	});

}
