// priority: 0
"use strict";

function registerTFCMachineRecipes(event) {
	
	// Бумага
	event.recipes.gtceu.cutter('tfg:unrefined_paper')
		.itemInputs('tfc:unrefined_paper')
		.itemOutputs('minecraft:paper')
		.duration(100)
		.EUt(7)

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

	//#region Молды в ассемблере

	for (let i = 0; i < global.TFC_CLAY_TO_UNFIRED_MOLD_RECIPE_COMPONENTS.length; i++) {
		let element = global.TFC_CLAY_TO_UNFIRED_MOLD_RECIPE_COMPONENTS[i];

		event.recipes.gtceu.assembler(`tfg:tfc/${element.name}`)
			.itemInputs(element.input)
			.circuit(i)
			.itemOutputs(element.output)
			.duration(450)
			.EUt(2)
	}

	event.recipes.gtceu.extruder('tfg:unfired_clay_brick')
		.itemInputs('minecraft:clay_ball')
		.notConsumable('gtceu:ingot_extruder_mold')
		.itemOutputs('tfc:ceramic/unfired_brick')
		.duration(20)
		.EUt(2)

	event.recipes.gtceu.extruder('tfg:unfired_fire_clay_brick')
		.itemInputs('tfc:fire_clay')
		.notConsumable('gtceu:ingot_extruder_mold')
		.itemOutputs('tfc:ceramic/unfired_fire_brick')
		.duration(20)
		.EUt(2)

	//#endregion

	//#region Стеклянные смеси в бутылки в ассемблере

	global.TFC_BATCH_TO_BOTTLE_ASSEMBLING_RECIPE_COMPONENTS.forEach(element => {
		event.recipes.gtceu.alloy_smelter(`tfg:tfc/${element.name}`)
			.itemInputs(element.input)
			.notConsumable('gtceu:bottle_casting_mold')
			.itemOutputs(element.output)
			.duration(100)
			.EUt(2)
			.category(GTRecipeCategories.INGOT_MOLDING)
	})

	//#endregion

	//#region СЫЫЫР 0_0

	// Rennet
	event.recipes.gtceu.fermenter('tfg:fermenter/vegetable_rennet')
		.itemInputs('#tfg:ferments_to_rennet')
		.itemOutputs('firmalife:rennet')
		.duration(400)
		.EUt(16)

	event.recipes.gtceu.fermenter('tfg:fermenter/biomass_rennet')
		.inputFluids(Fluid.of('gtceu:fermented_biomass', 100))
		.itemOutputs('firmalife:rennet')
		.duration(2400)
		.EUt(16)

	//#endregion

	// Brine

	event.recipes.gtceu.mixer('tfg:tfc/brine')
		.inputFluids(Fluid.of('tfc:salt_water', 900))
		.inputFluids(Fluid.of('tfc:vinegar', 100))
		.outputFluids(Fluid.of('tfc:brine', 1000))
		.duration(100)
		.EUt(16)

	//#endregion
	
	// Lamp Glass
	event.recipes.gtceu.alloy_smelter(`tfg:tfc/lamp_glass`)
		.itemInputs('#tfc:glass_batches')
		.notConsumable('#tfg:unfinished_lamps')
		.itemOutputs('tfc:lamp_glass')
		.duration(100)
		.EUt(2)

	event.recipes.gtceu.alloy_smelter(`tfg:tfc/lamp_glass_from_dust`)
		.itemInputs('#forge:dusts/glass')
		.notConsumable('#tfg:unfinished_lamps')
		.itemOutputs('tfc:lamp_glass')
		.duration(100)
		.EUt(2)

	// Empty Jar
	event.recipes.gtceu.alloy_smelter('tfc:jar_alloying')
		.itemInputs('#tfc:glass_batches_tier_2')
		.notConsumable('gtceu:ball_casting_mold')
		.itemOutputs('tfc:empty_jar')
		.duration(100)
		.EUt(2)
		.category(GTRecipeCategories.INGOT_MOLDING)

	event.recipes.gtceu.fluid_solidifier('tfc:jar_solidification')
		.inputFluids(Fluid.of('gtceu:glass', 144))
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('tfc:empty_jar')
		.duration(100)
		.EUt(2)

	event.recipes.gtceu.extractor('tfc:jar_extraction')
		.itemInputs('#tfc:jars')
		.outputFluids(Fluid.of('gtceu:glass', 144))
		.duration(50)
		.EUt(2)

	event.recipes.gtceu.extractor('tfc:glass_batch_extraction')
		.itemInputs('#tfc:glass_batches')
		.outputFluids(Fluid.of('gtceu:glass', 144))
		.duration(50)
		.EUt(2)

	event.recipes.gtceu.lathe('tfc:lens')
		.itemInputs('#forge:glass')
		.itemOutputs('tfc:lens')
		.duration(100)
		.EUt(16)

	// Wool Yarn
	event.recipes.gtceu.macerator('macerate_wool')
		.itemInputs('#minecraft:wool')
		.itemOutputs('tfc:wool_yarn')
		.chancedOutput('tfc:wool_yarn', 9000, 0)
		.chancedOutput('tfc:wool_yarn', 5000, 0)
		.chancedOutput('tfc:wool_yarn', 2000, 0)
		.duration(200)
		.EUt(2)

	// LimeWater + Sand -> Mortar
	event.recipes.gtceu.mixer('mortar')
		.itemInputs('#forge:sand')
		.inputFluids(Fluid.of('tfc:limewater', 100))
		.itemOutputs('16x tfc:mortar')
		.duration(800)
		.EUt(8)


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

	// Wool Yarn
	event.recipes.gtceu.wiremill('tfg:tfc/wool_yarn')
		.itemInputs('tfc:wool')
		.itemOutputs('8x tfc:wool_yarn')
		.duration(100)
		.EUt(4)

	// Burlap Cloth
	event.recipes.gtceu.assembler('tfg:tfc/burlap_cloth')
		.itemInputs('12x tfc:jute_fiber')
		.circuit(0)
		.itemOutputs('tfc:burlap_cloth')
		.duration(100)
		.EUt(4)

	// Silk Cloth
	event.recipes.gtceu.assembler('tfg:tfc/silk_cloth')
		.itemInputs('24x minecraft:string')
		.circuit(0)
		.itemOutputs('tfc:silk_cloth')
		.duration(100)
		.EUt(4)

	// Wool Cloth
	event.recipes.gtceu.assembler('tfg:tfc/wool_cloth')
		.itemInputs('16x tfc:wool_yarn')
		.circuit(0)
		.itemOutputs('tfc:wool_cloth')
		.duration(100)
		.EUt(4)

	// Cloths to Wool
	event.recipes.gtceu.assembler('tfg:tfc/cloth_to_wool')
		.itemInputs('4x #tfc:sewing_light_cloth')
		.itemOutputs('8x minecraft:white_wool')
		.circuit(16)
		.duration(100)
		.EUt(4)

	// Jute Fiber
	generateMixerRecipe(event, 'tfc:jute', "#tfg:clean_water 200",
		'tfc:jute_fiber', null, [], 100, 4, 16, 'tfg:tfc/jute_fiber')

	// Ceramic Recycling
	event.recipes.gtceu.macerator('tfg:sherd_to_brick_dust')
		.itemInputs('firmalife:pottery_sherd')
		.itemOutputs('#forge:dusts/brick')
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.duration(20)
		.EUt(2)

	event.recipes.gtceu.macerator('tfg:ceramic_molds')
		.itemInputs('#tfc:fired_molds')
		.itemOutputs('2x #forge:dusts/brick')
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.duration(20)
		.EUt(2)

	event.recipes.gtceu.macerator('tfg:large_vessels')
		.itemInputs('#tfc:fired_large_vessels')
		.itemOutputs('5x #forge:dusts/brick')
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.duration(20)
		.EUt(2)

	event.recipes.gtceu.macerator('tfg:casting_channel')
		.itemInputs('tfcchannelcasting:channel')
		.itemOutputs('1x #forge:dusts/brick')
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.duration(20)
		.EUt(2)

	event.recipes.gtceu.macerator('tfg:mold_table')
		.itemInputs('tfcchannelcasting:mold_table')
		.itemOutputs('5x #forge:dusts/brick')
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.duration(20)
		.EUt(2)

	// Humus and compost
	event.recipes.gtceu.extractor('tfg:humus_from_leaves')
		.itemInputs('#minecraft:leaves')
		.itemOutputs('tfc:groundcover/humus')
		.duration(600)
		.EUt(2)

	event.recipes.gtceu.extractor('tfg:humus_from_fallen_leaves')
		.itemInputs('#tfc:fallen_leaves')
		.itemOutputs('tfc:groundcover/humus')
		.duration(600)
		.EUt(2)

	event.recipes.gtceu.fermenter('tfg:fertilizer_to_compost')
		.itemInputs('4x gtceu:fertilizer')
		.itemOutputs('tfc:compost')
		.duration(1200)
		.EUt(2)

	const BROWNS = [ '16x #tfc:compost_browns_low', '8x #tfc:compost_browns', '4x #tfc:compost_browns_high' ];
	const GREENS = [ '16x #tfc:compost_greens_low', '8x #tfc:compost_greens', '4x #tfc:compost_greens_high' ];

	let i = 0;
	BROWNS.forEach(brown => {
		GREENS.forEach(green => {
			event.recipes.gtceu.mixer(`tfg:compost_${i++}`)
				.itemInputs(brown, green)
				.itemOutputs('tfc:compost')
				.duration(1200)
				.EUt(2)
		})
	})

	event.recipes.gtceu.centrifuge('tfg:soot')
		.itemInputs('tfc:soot')
		.itemOutputs('#forge:dusts/carbon')
		.duration(20)
		.EUt(2)

	// Stripped logs

	global.TFC_WOOD_TYPES.forEach(wood => {
		event.recipes.gtceu.lathe(`tfg:stripping_${wood}_log`)
			.itemInputs(`tfc:wood/log/${wood}`)
			.itemOutputs(`tfc:wood/stripped_log/${wood}`)
			.duration(50)
			.EUt(2)

		event.recipes.gtceu.lathe(`tfg:stripping_${wood}_wood`)
			.itemInputs(`tfc:wood/wood/${wood}`)
			.itemOutputs(`tfc:wood/stripped_wood/${wood}`)
			.duration(50)
			.EUt(2)

		event.custom({
			type: 'vintageimprovements:polishing',
			ingredients: [{ item: `tfc:wood/log/${wood}` }],
			results: [{ item: `tfc:wood/stripped_log/${wood}` }],
			speed_limits: 0,
			processingTime: 50
		}).id(`tfg:vi/lathe/stripping_${wood}_log`)

		event.custom({
			type: 'vintageimprovements:polishing',
			ingredients: [{ item: `tfc:wood/wood/${wood}` }],
			results: [{ item: `tfc:wood/stripped_wood/${wood}` }],
			speed_limits: 0,
			processingTime: 50
		}).id(`tfg:vi/lathe/stripping_${wood}_wood`)
	})

	
	event.recipes.gtceu.extruder('tfg:wrought_iron_grill_electric_only')
		.itemInputs('2x #forge:plates/wrought_iron')
		.notConsumable('tfg:large_casing_extruder_mold')
		.itemOutputs('tfc:wrought_iron_grill')
		.duration(60)
		.EUt(8)
}
