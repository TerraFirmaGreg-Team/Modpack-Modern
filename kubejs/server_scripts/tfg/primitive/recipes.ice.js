"use strict";

function registerTFGIceRecipes(event) {

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

	event.shapeless('8x minecraft:snowball', ['minecraft:snow_block'])
		.id('tfg:shapeless/snowball')

	event.shapeless('8x minecraft:snow', ['minecraft:snow_block', '#forge:tools/saws'])
		.id('tfg:shapeless/snow')
}