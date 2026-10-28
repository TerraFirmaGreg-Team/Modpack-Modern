"use strict";

function registerTFGIceRecipes(event) {
	// Dirty water
	event.recipes.tfc.barrel_instant()
		.inputs('tfc:jute_net', Fluid.of('tfg:muddy_water', 1000))
		.outputs('tfc:dirty_jute_net', Fluid.of('minecraft:water', 1000))

	event.recipes.gtceu.centrifuge('tfg:muddy_water')
		.inputFluids(Fluid.of('tfg:muddy_water', 1000))
		.outputFluids(Fluid.of('minecraft:water', 1000))
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	// Ice
	event.remove({ id: 'gtceu:compressor/ice_from_dust' })
	event.remove({ id: 'gtceu:compressor/ice_from_snow' })

	event.shapeless('#forge:dusts/ice', ['#forge:tools/mortars', '4x firmalife:ice_shavings'])
		.id('tfg:shaped/ice_shavings')

	event.recipes.tfc.quern('#forge:small_dusts/ice', 'firmalife:ice_shavings')
		.id('tfg:quern/ice_dust')

	event.recipes.gtceu.macerator('tfg:macerating_ice_shavings')
		.itemInputs('firmalife:ice_shavings')
		.itemOutputs('#forge:small_dusts/ice')
		.duration(10)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.macerator('tfg:macerating_ice_shavings_reverse')
		.itemInputs('#forge:dusts/ice')
		.itemOutputs('4x firmalife:ice_shavings')
		.duration(20)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.fluid_solidifier('tfg:ice')
		.inputFluids("#tfg:clean_water 144")
		.notConsumable('gtceu:block_casting_mold')
		.itemOutputs('minecraft:ice')
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	event.shapeless('4x firmalife:ice_shavings', ['#forge:dusts/ice', '#forge:tools/hammers'])

	event.recipes.gtceu.mixer('tfg:ice_slush_from_dry_ice')
		.itemInputs('1x tfg:dry_ice')
		.inputFluids("#tfc:water 8000")
		.outputFluids(Fluid.of('gtceu:ice', 8000))
		.duration(80)
		.EUt(GTValues.VA[GTValues.ULV])

	// Cooling water
	event.recipes.tfc.barrel_sealed(250)
		.inputItem('1x tfg:dry_ice')
		.inputFluid(Fluid.of('minecraft:water', 5000))
		.outputFluid(Fluid.of('gtceu:ice', 5000))
		.id('tfg:barrel/cooling_water_0')

	event.recipes.tfc.barrel_sealed(1000)
		.inputItem('1x #forge:dusts/ice')
		.inputFluid(Fluid.of('minecraft:water', 144))
		.outputFluid(Fluid.of('gtceu:ice', 144))
		.id('tfg:barrel/cooling_water_1')

	event.recipes.tfc.barrel_sealed(1000)
		.inputItem('16x minecraft:snowball')
		.inputFluid(Fluid.of('minecraft:water', 144))
		.outputFluid(Fluid.of('gtceu:ice', 144))
		.id('tfg:barrel/cooling_water_2')

	event.recipes.tfc.barrel_sealed(2000)
		.inputItem('1x #forge:dusts/ice')
		.inputFluid(Fluid.of('tfc:salt_water', 144))
		.outputFluid(Fluid.of('gtceu:ice', 144))
		.id('tfg:barrel/cooling_water_3')

	event.recipes.tfc.barrel_sealed(2000)
		.inputItem('16x minecraft:snowball')
		.inputFluid(Fluid.of('tfc:salt_water', 144))
		.outputFluid(Fluid.of('gtceu:ice', 144))
		.id('tfg:barrel/cooling_water_4')

	// Freezing it
	event.recipes.tfc.barrel_sealed(3000)
		.inputItem('9x #forge:dusts/ice')
		.inputFluid(Fluid.of('gtceu:ice', 144))
		.outputItem('minecraft:packed_ice')
		.id('tfg:barrel/packed_ice')

	// Heating it back up
	event.recipes.tfc.pot([], Fluid.of('gtceu:ice', 144), 300, 100)
		.fluidOutput(Fluid.of('minecraft:water', 144))

	event.recipes.firmalife.vat()
		.inputFluid(Fluid.of('gtceu:ice', 144))
		.outputFluid(Fluid.of('minecraft:water', 144))
		.length(300)
		.temperature(100)

	// Snow
	event.recipes.firmalife.stomping('minecraft:snow', 'minecraft:snowball',
		'minecraft:block/snow', 'minecraft:block/snow', 'minecraft:block.snow.place')
		.id('tfg:stomping/snow_layer')

	event.shapeless('minecraft:snow_block', ['8x minecraft:snow'])
		.id('tfg:shapeless/snow_block')

	event.shaped('minecraft:snow_block', [
		'AA',
		'AA'
	], {
		A: 'minecraft:snowball'
	}).id('tfg:shaped/snowball_to_snow_block_manual_only')

	event.shapeless('4x minecraft:snowball', ['minecraft:snow_block'])
		.id('tfg:shapeless/snowball')

	event.shapeless('8x minecraft:snow', ['minecraft:snow_block', '#forge:tools/saws'])
		.id('tfg:shapeless/snow')

	event.recipes.greate.compacting('minecraft:snow_block', [
			'minecraft:snowball', 'minecraft:snowball', 'minecraft:snowball', 'minecraft:snowball'
		])
		.circuitNumber(1)
		.recipeTier(0)
		.id('tfg:compacting/snowball_to_block')

	event.recipes.greate.compacting('tfg:snow_bricks', [
			'minecraft:snow_block', 'minecraft:snow_block', 'minecraft:snow_block', 'minecraft:snow_block'
		])
		.circuitNumber(2)
		.recipeTier(0)
		.id('tfg:compacting/snow_blocks_to_bricks')

	event.recipes.gtceu.compressor('tfg:snow_block')
		.itemInputs('4x minecraft:snowball')
		.itemOutputs('minecraft:snow_block')
		.duration(40)
		.EUt(2)

	// Snow bricks
	event.shaped('tfg:snow_bricks', [
		'AA',
		'AA'
	], {
		A: 'minecraft:snow_block'
	}).id('tfg:shaped/snow_bricks_manual_only')
	
	event.shaped('tfg:snow_brick_stairs', [
		'A ',
		'AA'
	], {
		A: 'minecraft:snow_block'
	}).id('tfg:shaped/snow_brick_stairs')
	
	event.shaped('tfg:snow_brick_slab', [
		'AA'
	], {
		A: 'minecraft:snow_block'
	}).id('tfg:shaped/snow_brick_slab')
	
	event.shaped('tfg:snow_brick_wall', [
		'A',
		'A'
	], {
		A: 'minecraft:snow_block'
	}).id('tfg:shaped/snow_brick_wall')

	event.recipes.gtceu.compressor('tfg:snow_bricks')
		.itemInputs('4x minecraft:snow_block')
		.itemOutputs('tfg:snow_bricks')
		.duration(40)
		.EUt(2)

	event.recipes.gtceu.extractor('tfg:snow_bricks')
		.itemInputs("#tfg:stone_types/snow")
		.itemOutputs('4x minecraft:snow_block')
		.duration(40)
		.EUt(2)

	event.recipes.gtceu.extractor('tfg:snow_bricks_half')
		.itemInputs("#tfg:stone_types/snow_half")
		.itemOutputs('2x minecraft:snow_block')
		.duration(40)
		.EUt(2)

	// Ice bricks
	event.recipes.greate.compacting('minecraft:packed_ice', [
			'minecraft:ice', 'minecraft:ice', 'minecraft:ice', 'minecraft:ice', 'minecraft:ice',
			'minecraft:ice', 'minecraft:ice', 'minecraft:ice', 'minecraft:ice'
		])
		.circuitNumber(1)
		.recipeTier(0)
		.id('tfg:compacting/ice_to_packed_ice')
		
	event.recipes.greate.compacting('minecraft:blue_ice', [
			'minecraft:packed_ice', 'minecraft:packed_ice', 'minecraft:packed_ice', 'minecraft:packed_ice',
			'minecraft:packed_ice', 'minecraft:packed_ice', 'minecraft:packed_ice', 'minecraft:packed_ice',
			'minecraft:packed_ice'])
		.circuitNumber(1)
		.recipeTier(0)
		.id('tfg:compacting/packed_ice_to_blue_ice')

	event.recipes.gtceu.macerator('tfg:macerate_ice_bricks')
		.itemInputs('#tfg:stone_types/packed_ice')
		.itemOutputs('9x gtceu:ice_dust')
		.duration(40)
		.EUt(2)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)

	event.recipes.gtceu.macerator('tfg:macerate_ice_bricks_half')
		.itemInputs('#tfg:stone_types/packed_ice_half')
		.itemOutputs('18x gtceu:small_ice_dust')
		.duration(40)
		.EUt(2)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		
	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless('tfg:packed_ice_bricks', ['minecraft:packed_ice', '#tfc:chisels'])
	).id('tfg:chisel_packed_ice_to_bricks')

	event.recipes.tfc.chisel('tfg:packed_ice_bricks', 'minecraft:packed_ice', 'smooth')
		.id('tfg:chisel/packed_ice_bricks')
}