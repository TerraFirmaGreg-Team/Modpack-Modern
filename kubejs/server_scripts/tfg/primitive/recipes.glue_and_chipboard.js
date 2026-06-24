"use strict";

function registerTFGChipboardRecipes(event) {

	// Glue from resin
	event.recipes.gtceu.extractor('tfg:glue_from_tfc_glue')
		.itemInputs('tfc:glue')
		.outputFluids(Fluid.of('gtceu:glue', 50))
		.duration(20 * 10)
		.EUt(5)

	event.recipes.gtceu.extractor('tfg:glue_from_sticky_resin')
		.itemInputs('gtceu:sticky_resin')
		.outputFluids(Fluid.of('gtceu:glue', 100))
		.duration(20 * 10)
		.EUt(5)

	event.recipes.gtceu.extractor('tfg:glue_from_conifer_resin')
		.itemInputs('tfg:conifer_rosin')
		.outputFluids(Fluid.of('gtceu:glue', 50))
		.duration(20 * 10)
		.EUt(5)

	event.recipes.gtceu.mixer('tfg:glue_from_bone_meal')
		.itemInputs('minecraft:bone_meal')
		.inputFluids(Fluid.of('tfc:limewater', 500))
		.outputFluids(Fluid.of('gtceu:glue', 50))
		.duration(100)
		.EUt(5)

	event.recipes.gtceu.compressor('tfg:glue_from_anemones')
		.itemInputs('#tfg:anemones')
		.itemOutputs('tfc:glue')
		.duration(100)
		.EUt(5)

	event.recipes.firmalife.stomping('tfc:glue', '#tfg:anemones', 
		'tfg:block/plant/anemone_purple/anemone_1', 'tfc:block/glue_block', 'minecraft:entity.slime.squish')
		.id('tfg:stomping/anemones')

	event.recipes.gtceu.compressor('tfg:glue_from_starfish')
		.itemInputs("tfg:plant/starfish")
		.itemOutputs('tfc:glue')
		.duration(100)
		.EUt(5)

	event.recipes.firmalife.stomping('tfc:glue', 'tfg:plant/starfish', 
		'tfc:block/powder/hematite', 'tfc:block/glue_block', 'minecraft:entity.slime.squish')
		.id('tfg:stomping/starfish')
		
	event.smelting('tfc:glue', 'minecraft:slime_ball')
		.id('tfg:smelting/slime_to_glue')

	event.recipes.firmalife.stomping('tfc:glue', 'minecraft:slime_ball', 
		'minecraft:block/slime_block', 'tfc:block/glue_block', 'minecraft:entity.slime.squish')
		.id('tfg:stomping/slime_ball')

	event.smelting('tfc:glue', 'minecraft:magma_cream')
		.id('tfg:smelting/magma_cream_to_glue')
		
	event.recipes.firmalife.stomping('tfc:glue', 'minecraft:magma_cream', 
		'minecraft:block/slime_block', 'tfc:block/glue_block', 'minecraft:entity.slime.squish')
		.id('tfg:stomping/magma_cream')

	// Chipboard
	event.recipes.firmalife.mixing_bowl()
		.itemIngredients(['#tfg:wood_dusts', '#tfg:wood_dusts', 'tfc:glue'])
		.outputItem('2x tfg:chipboard_composite')
		.id('tfg:mixing_bowl/chipboard_composite_glue')

	event.recipes.firmalife.mixing_bowl()
		.itemIngredients(['#tfg:wood_dusts', '#tfg:wood_dusts', '#tfg:wood_dusts', '#tfg:wood_dusts', 'gtceu:sticky_resin'])
		.outputItem('4x tfg:chipboard_composite')
		.id('tfg:mixing_bowl/chipboard_composite_resin')

	event.recipes.firmalife.mixing_bowl()
		.itemIngredients(['#tfg:wood_dusts', '#tfg:wood_dusts', '#forge:wax'])
		.outputItem('2x tfg:chipboard_composite')
		.id('tfg:mixing_bowl/chipboard_composite_wax')

	event.recipes.gtceu.mixer('gtceu:chipboard_composite_wax')
		.itemInputs('2x #tfg:wood_dusts',
			'1x #forge:wax')
		.itemOutputs('2x tfg:chipboard_composite')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.mixer('gtceu:chipboard_composite_resin')
		.itemInputs('4x #tfg:wood_dusts',
			'1x gtceu:sticky_resin')
		.itemOutputs('4x tfg:chipboard_composite')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.mixer('gtceu:chipboard_composite_glue')
		.itemInputs('2x #tfg:wood_dusts',
			'1x tfc:glue')
		.itemOutputs('2x tfg:chipboard_composite')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.mixer('gtceu:chipboard_composite_fluid_glue')
		.itemInputs('1x #tfg:wood_dusts')
		.inputFluids(Fluid.of('gtceu:glue', 25))
		.itemOutputs('1x tfg:chipboard_composite')
		.duration(10)
		.EUt(GTValues.VA[GTValues.LV])

	// Pre-treated chipboard
	event.recipes.firmalife.mixing_bowl()
		.itemIngredients(['gtceu:treated_wood_dust', 'gtceu:treated_wood_dust', 'tfc:glue'])
		.outputItem('2x tfg:treated_chipboard_composite')
		.id('tfg:mixing_bowl/treated_chipboard_composite_glue')

	event.recipes.firmalife.mixing_bowl()
		.itemIngredients(['gtceu:treated_wood_dust', 'gtceu:treated_wood_dust', 'gtceu:treated_wood_dust', 'gtceu:treated_wood_dust', 'gtceu:sticky_resin'])
		.outputItem('4x tfg:treated_chipboard_composite')
		.id('tfg:mixing_bowl/treated_chipboard_composite_resin')

	event.recipes.firmalife.mixing_bowl()
		.itemIngredients(['gtceu:treated_wood_dust', 'gtceu:treated_wood_dust', '#forge:wax'])
		.outputItem('2x tfg:treated_chipboard_composite')
		.id('tfg:mixing_bowl/treated_chipboard_composite_wax')

	event.recipes.gtceu.mixer('gtceu:treated_chipboard_composite_wax')
		.itemInputs('2x gtceu:treated_wood_dust', '1x #forge:wax')
		.itemOutputs('2x tfg:treated_chipboard_composite')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.mixer('gtceu:treated_chipboard_composite_resin')
		.itemInputs('4x gtceu:treated_wood_dust', '1x gtceu:sticky_resin')
		.itemOutputs('4x tfg:treated_chipboard_composite')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.mixer('gtceu:treated_chipboard_composite_glue')
		.itemInputs('2x gtceu:treated_wood_dust', '1x tfc:glue')
		.itemOutputs('2x tfg:treated_chipboard_composite')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.mixer('gtceu:treated_chipboard_composite_fluid_glue')
		.itemInputs('1x gtceu:treated_wood_dust')
		.inputFluids(Fluid.of('gtceu:glue', 25))
		.itemOutputs('1x tfg:treated_chipboard_composite')
		.duration(10)
		.EUt(GTValues.VA[GTValues.LV])


	// 
	event.recipes.gtceu.compressor('gtceu:wood_mdf')
		.itemInputs('1x tfg:chipboard_composite')
		.itemOutputs('gtceu:wood_plate')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.chemical_bath('gtceu:treated_chipboard_composite')
		.itemInputs('1x tfg:chipboard_composite')
		.inputFluids(Fluid.of('gtceu:creosote', 50))
		.itemOutputs('tfg:treated_chipboard_composite')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.chemical_bath('gtceu:bath_treated_wood_dust')
		.itemInputs('#tfg:wood_dusts')
		.inputFluids(Fluid.of('gtceu:creosote', 50))
		.itemOutputs('gtceu:treated_wood_dust')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('tfg:resin_circuit_assembler')
		.itemInputs('gtceu:wood_plate', '2x gtceu:sticky_resin')
		.itemOutputs('gtceu:resin_circuit_board')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.ULV])
}