"use strict";

function registerTFGClayRecipes(event) {

	event.shapeless('tfc:crucible', ['tfc:crucible']).id('tfg:empty_crucible')

	event.shaped('minecraft:clay', [
		'AA',
		'AA'
	], {
		A: 'minecraft:clay_ball'
	}).id('tfg:shaped/clay_balls_to_block')

	event.shapeless('4x minecraft:clay_ball', ['minecraft:clay'])
		.id('tfg:shapeless/clay_block_to_balls')

	global.TFC_FURNACE_MOLD_RECIPE_COMPONENTS.forEach(element => {
		event.smelting(element.output, element.input)
			.id(`tfg:smelting/${element.name}`)
	})

	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		event.smelting(`tfc:ceramic/${dye}_glazed_vessel`, `tfc:ceramic/${dye}_unfired_vessel`)
			.id(`tfg:smelting/${dye}_glazed_vessel`)

		event.smelting(`tfc:ceramic/large_vessel/${dye}`, `tfc:ceramic/unfired_large_vessel/${dye}`)
			.id(`tfg:smelting/${dye}_large_vessel`)
	})

	for (let i = 0; i < global.TFC_CLAY_TO_UNFIRED_MOLD_RECIPE_COMPONENTS.length; i++) {
		let element = global.TFC_CLAY_TO_UNFIRED_MOLD_RECIPE_COMPONENTS[i];

		event.recipes.gtceu.assembler(`tfg:tfc/${element.name}`)
			.itemInputs(element.input)
			.circuit(i)
			.itemOutputs(element.output)
			.duration(450)
			.EUt(2)
	}

	for (let i = 0; i < global.TFC_FIRE_CLAY_TO_UNFIRED_MOLD_RECIPE_COMPONENTS.length; i++) {
		let element = global.TFC_FIRE_CLAY_TO_UNFIRED_MOLD_RECIPE_COMPONENTS[i];

		event.recipes.gtceu.assembler(`tfg:tfc/${element.name}`)
			.itemInputs(element.input)
			.circuit(i)
			.itemOutputs(element.output)
			.duration(450)
			.EUt(2)
	}

	event.shapeless('3x tfc:ceramic/unfired_brick', ['4x minecraft:clay_ball', 'gtceu:brick_wooden_form', 'minecraft:clay_ball'])
		.id('tfg:shapeless/unfired_brick_via_wooden_form')

	event.shapeless('3x tfc:ceramic/unfired_fire_brick', ['4x tfc:fire_clay', 'gtceu:brick_wooden_form', 'tfc:fire_clay'])
		.id('tfg:shapeless/unfired_fire_brick_via_wooden_form')

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

	// Kaolinite Clay - regular smelting recipes can't have multiple inputs
	event.recipes.gtceu.alloy_smelter('tfg:kaolinite')
		.itemInputs('tfc:kaolin_clay')
		.circuit(1)
		.chancedOutput('tfc:powder/kaolinite', 2000, 0)
		.duration(100)
		.EUt(16)

	// Fire Clay
	event.recipes.gtceu.alloy_smelter('tfg:cheaper_fire_clay')
		.itemInputs('#forge:dusts/graphite', '4x tfc:kaolin_clay')
		.itemOutputs('2x tfc:fire_clay')
		.duration(600)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.alloy_smelter('tfg:oops_i_smelted_all_my_kaolin')
		.itemInputs('minecraft:clay_ball', 'tfc:powder/kaolinite')
		.itemOutputs('tfc:kaolin_clay')
		.duration(600)
		.EUt(GTValues.VA[GTValues.ULV])

	// Compressed Coke Clay
	event.shaped('gtceu:compressed_coke_clay', [
		'AAA',
		'BCB',
		'BBB'
	], {
		A: 'minecraft:clay_ball',
		B: '#minecraft:sand',
		C: 'gtceu:brick_wooden_form'
	}).replaceIngredient('gtceu:brick_wooden_form', 'gtceu:brick_wooden_form').id('gtceu:shaped/compressed_coke_clay')

	// Coke Oven Brick
	event.recipes.tfc.heating('gtceu:compressed_coke_clay', 1399)
		.resultItem('gtceu:coke_oven_brick')
		.id('tfg:heating/coke_oven_bricks')

	event.recipes.gtceu.alloy_smelter('gtceu:coke_oven_brick')
		.itemInputs('3x #minecraft:sand', '2x minecraft:clay_ball')
		.itemOutputs('gtceu:coke_oven_brick')
		.duration(7.5 * 20)
		.EUt(GTValues.VA[GTValues.ULV])

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

	// Renewable clay
	
	event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_clay' })

	event.recipes.gtceu.rock_breaker("clay_duping")
		.notConsumable('minecraft:clay')
		.itemOutputs('minecraft:clay')
		.adjacentFluids(["tfc:salt_water", "tfc:spring_water"])
		.duration(50)
		.EUt(GTValues.VA[GTValues.LV])
}