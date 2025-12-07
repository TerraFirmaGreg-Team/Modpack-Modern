"use strict";

function registerTFGConcreteRecipes(event) {

	const recipe = event.recipes.gtceu.mixer('concrete_from_marble')
		.itemInputs(Ingredient.of('#tfg:stone_dusts').subtract('gtceu:marble_dust').withCount(2), 'gtceu:marble_dust', 'gtceu:gypsum_dust')
		.inputFluids("#tfg:clean_water 1000")
		.outputFluids('gtceu:concrete 1152')
		.duration(40)
		.EUt(16)

	generateMixerRecipe(event, ['3x #tfg:stone_dusts', 'gtceu:clay_dust'],
		"#tfg:clean_water 500", [], null, 'gtceu:concrete 576', 20, 16, 64, 'concrete_from_clay')

	generateMixerRecipe(event, ['3x #tfg:stone_dusts', 'gtceu:calcite_dust', 'gtceu:gypsum_dust'],
		"#tfg:clean_water 1000", [], null, 'gtceu:concrete 1152', 40, 16, 64, 'concrete_from_calcite')

	//GT light/dark concrete recipe fix

	event.remove({ id: 'gtceu:fluid_solidifier/solidify_concrete_block' })
	event.remove({ id: 'gtceu:chemical_bath/light_to_dark_concrete' })

	event.recipes.gtceu.fluid_solidifier('gtceu:fluid_solidifier/solidify_light_concrete')
		.inputFluids(Fluid.of('gtceu:concrete', 144))
		.notConsumable('1x gtceu:block_casting_mold')
		.itemOutputs('1x gtceu:light_concrete')
		.duration(98)
		.EUt(7)

	event.recipes.gtceu.chemical_bath('gtceu:chemical_bath/dark_concrete')
		.inputFluids(Fluid.of('tfc:black_dye', 18))
		.itemInputs('1x gtceu:light_concrete')
		.itemOutputs('1x gtceu:dark_concrete')
		.duration(20)
		.EUt(7)

	event.recipes.gtceu.extractor('gtceu:extractor/extract_light_concrete')
		.itemInputs('1x gtceu:light_concrete')
		.outputFluids(Fluid.of('gtceu:concrete', 144))
		.duration(98)
		.EUt(30)

	event.stonecutting('gtceu:light_concrete_bricks', 'gtceu:light_concrete').id('tfg:stonecutting/light_concrete_bricks')
	event.stonecutting('gtceu:chiseled_light_concrete', 'gtceu:light_concrete').id('tfg:stonecutting/chiseled_light_concrete')
	event.stonecutting('gtceu:light_concrete_tile', 'gtceu:light_concrete').id('tfg:stonecutting/light_concrete_tile')
	event.stonecutting('gtceu:light_concrete_small_tile', 'gtceu:light_concrete').id('tfg:stonecutting/light_concrete_small_tile')
	event.stonecutting('gtceu:light_concrete_windmill_a', 'gtceu:light_concrete').id('tfg:stonecutting/light_concrete_windmill_a')
	event.stonecutting('gtceu:light_concrete_windmill_b', 'gtceu:light_concrete').id('tfg:stonecutting/light_concrete_windmill_b')
	event.stonecutting('gtceu:small_light_concrete_bricks', 'gtceu:light_concrete').id('tfg:stonecutting/small_light_concrete_bricks')
	event.stonecutting('gtceu:square_light_concrete_bricks', 'gtceu:light_concrete').id('tfg:stonecutting/square_light_concrete_bricks')

	event.stonecutting('gtceu:dark_concrete_bricks', 'gtceu:dark_concrete').id('tfg:stonecutting/dark_concrete_bricks')
	event.stonecutting('gtceu:chiseled_dark_concrete', 'gtceu:dark_concrete').id('tfg:stonecutting/chiseled_dark_concrete')
	event.stonecutting('gtceu:dark_concrete_tile', 'gtceu:dark_concrete').id('tfg:stonecutting/dark_concrete_tile')
	event.stonecutting('gtceu:dark_concrete_small_tile', 'gtceu:dark_concrete').id('tfg:stonecutting/dark_concrete_small_tile')
	event.stonecutting('gtceu:dark_concrete_windmill_a', 'gtceu:dark_concrete').id('tfg:stonecutting/dark_concrete_windmill_a')
	event.stonecutting('gtceu:dark_concrete_windmill_b', 'gtceu:dark_concrete').id('tfg:stonecutting/dark_concrete_windmill_b')
	event.stonecutting('gtceu:small_dark_concrete_bricks', 'gtceu:dark_concrete').id('tfg:stonecutting/small_dark_concrete_bricks')
	event.stonecutting('gtceu:square_dark_concrete_bricks', 'gtceu:dark_concrete').id('tfg:stonecutting/square_dark_concrete_bricks')

	// Handcrafted artisanal concrete

	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#tfg:stone_dusts', '#tfg:stone_dusts', '#forge:dusts/marble', '#forge:dusts/gypsum'], Fluid.of('minecraft:water', 1000))
		.outputFluid(Fluid.of('gtceu:concrete', 1000))

	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#tfg:stone_dusts', '#tfg:stone_dusts', '#tfg:stone_dusts', '#forge:dusts/clay'], Fluid.of('minecraft:water', 500))
		.outputFluid(Fluid.of('gtceu:concrete', 500))

	event.recipes.firmalife.mixing_bowl()
		.ingredients(['#tfg:stone_dusts', '#tfg:stone_dusts', '#tfg:stone_dusts', '#forge:dusts/calcite', '#forge:dusts/gypsum'], Fluid.of('minecraft:water', 1000))
		.outputFluid(Fluid.of('gtceu:concrete', 1000))

	event.recipes.tfc.barrel_sealed(1000)
		.inputFluid(Fluid.of('gtceu:concrete', 144))
		.inputItem('gtceu:wood_frame')
		.outputItem('gtceu:light_concrete')
		.id('tfg:barrel/light_concrete')

	event.recipes.tfc.barrel_sealed(1000)
		.inputFluid(Fluid.of('gtceu:concrete', 96))
		.inputItem('tfg:rebar_support')
		.outputItem('tfg:reinforced_light_concrete_support')
		.id('tfg:barrel/reinforced_light_concrete_support')

	event.recipes.tfc.barrel_sealed(500)
		.inputItem('gtceu:light_concrete')
		.inputFluid(Fluid.of('tfc:black_dye', 18))
		.outputItem('gtceu:dark_concrete')
		.id('tfg:barrel/dark_concrete')
		
	event.recipes.tfc.barrel_sealed(500)
		.inputItem('tfg:light_concrete_support')
		.inputFluid(Fluid.of('tfc:black_dye', 10))
		.outputItem('tfg:dark_concrete_support')
		.id('tfg:barrel/dark_concrete_support')

	event.recipes.tfc.barrel_sealed(500)
		.inputItem('tfg:reinforced_light_concrete_support')
		.inputFluid(Fluid.of('tfc:black_dye', 10))
		.outputItem('tfg:reinforced_dark_concrete_support')
		.id('tfg:barrel/reinforced_dark_concrete_support')

	// Titanium concrete
	event.recipes.gtceu.assembler('tfg:titanium_concrete')
		.itemInputs('2x #forge:rods/titanium', '#forge:dusts/kaolinite')
		.inputFluids(Fluid.of('gtceu:concrete', 144 * 1.5))
		.itemOutputs('tfg:titanium_concrete')
		.circuit(2)
		.duration(20)
		.EUt(GTValues.VH[GTValues.EV])

	event.recipes.gtceu.laser_engraver('tfg:titanium_concrete_bricks')
		.itemInputs('tfg:polished_titanium_concrete')
		.notConsumable('#forge:lenses/light_blue')
		.itemOutputs('tfg:titanium_concrete_bricks')
		.duration(20 * (2.5))
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.laser_engraver('tfg:titanium_concrete_bricks_small')
		.itemInputs('tfg:polished_titanium_concrete')
		.notConsumable('#forge:lenses/pink')
		.itemOutputs('tfg:titanium_concrete_bricks_small')
		.duration(20 * (2.5))
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.laser_engraver('tfg:titanium_concrete_bricks_square')
		.itemInputs('tfg:polished_titanium_concrete')
		.notConsumable('#forge:lenses/green')
		.itemOutputs('tfg:titanium_concrete_bricks_square')
		.duration(20 * (2.5))
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.laser_engraver('tfg:titanium_concrete_tile')
		.itemInputs('tfg:polished_titanium_concrete')
		.notConsumable('#forge:lenses/red')
		.itemOutputs('tfg:titanium_concrete_tile')
		.duration(20 * (2.5))
		.EUt(GTValues.VA[GTValues.LV])
	event.recipes.gtceu.laser_engraver('tfg:titanium_concrete_tile_small')
		.itemInputs('tfg:polished_titanium_concrete')
		.notConsumable('#forge:lenses/black')
		.itemOutputs('tfg:titanium_concrete_tile_small')
		.duration(20 * (2.5))
		.EUt(GTValues.VA[GTValues.LV])
}