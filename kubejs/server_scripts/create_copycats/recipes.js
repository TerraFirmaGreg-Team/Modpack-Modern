// priority: 0
"use strict";

const registerCreateCopycatsRecipes = (event) => {
  event.remove({ mod: "copycats" })

  // Shapeless
  event.shapeless("copycats:copycat_stairs", [
    "copycats:copycat_vertical_stairs"
  ]).id("tfg:copycat_stairs")

  event.shapeless("copycats:copycat_vertical_stairs", [
    "copycats:copycat_stairs"
  ]).id("tfg:copycat_vertical_stairs")

  event.shapeless("copycats:copycat_slice", [
    "copycats:copycat_vertical_slice"
  ]).id("tfg:copycat_slice")

  event.shapeless("copycats:copycat_vertical_slice", [
    "copycats:copycat_slice"
  ]).id("tfg:copycat_vertical_slice")

  event.shapeless("copycats:copycat_pane", [
    "copycats:copycat_flat_pane"
  ]).id("tfg:copycat_pane")

  event.shapeless("copycats:copycat_flat_pane", [
    "copycats:copycat_pane"
  ]).id("tfg:copycat_flat_pane")

  event.shapeless("copycats:copycat_half_layer", [
    "copycats:copycat_vertical_half_layer"
  ]).id("tfg:copycat_half_layer")

  event.shapeless("copycats:copycat_vertical_half_layer", [
    "copycats:copycat_half_layer"
  ]).id("tfg:copycat_vertical_half_layer")

  event.shapeless("copycats:copycat_slope", [
    "copycats:copycat_vertical_slope"
  ]).id("tfg:copycat_slope")

  event.shapeless("copycats:copycat_vertical_slope", [
    "copycats:copycat_slope"
  ]).id("tfg:copycat_vertical_slope")

  event.shapeless("copycats:copycat_vertical_step", [
    "create:copycat_step"
  ]).id("tfg:copycat_vertical_step")

  // Shaped
  event.shaped("copycats:copycat_catwalk", [
    "A A",
    " A ",
    "   "
  ], {
    A: "copycats:copycat_board"
  }).id("tfg:copycat_catwalk")

  event.shaped("copycats:copycat_box", [
    "AA ",
    "A A",
    " AA"
  ], {
    A: "copycats:copycat_board"
  }).id("tfg:copycat_box")
  
  event.shaped('copycats:copycat_fluid_pipe', [
		'BAB'
	], {
		A: '#forge:tools/hammers',
		B: '#forge:plates/zinc'
	}).id('tfg:copycats/shaped/copycat_fluid_pipe')

  event.shaped('copycats:copycat_wooden_pressure_plate', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'copycats:copycat_block',
    B: '#minecraft:wooden_pressure_plates'
  }).id('tfg:copycats/shaped/copycat_wooden_pressure_plate')

  event.shaped('copycats:copycat_stone_pressure_plate', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'copycats:copycat_block',
    B: '#minecraft:stone_pressure_plates'
  }).id('tfg:copycats/shaped/copycat_stone_pressure_plate')

  const COPYCAT_DATA = [
    { id: 'copycat_block', multiplier: '4', extract_count: '1' },
    { id: 'copycat_slab', multiplier: '8', extract_count: '1' },
    { id: 'copycat_stairs', multiplier: '4', extract_count: '1' },
    { id: 'copycat_vertical_stairs', multiplier: '4', extract_count: '1' },
    { id: 'copycat_fence', multiplier: '4', extract_count: '1' },
    { id: 'copycat_wall', multiplier: '4', extract_count: '1' },
    { id: 'copycat_vertical_step', multiplier: '16', extract_count: '1' },
    { id: 'copycat_beam', multiplier: '16', extract_count: '1' },
    { id: 'copycat_slice', multiplier: '64', extract_count: '4' },
    { id: 'copycat_vertical_slice', multiplier: '64', extract_count: '4' },
    { id: 'copycat_corner_slice', multiplier: '64', extract_count: '4' },
    { id: 'copycat_ghost_block', multiplier: '4', extract_count: '1' },
    { id: 'copycat_layer', multiplier: '32', extract_count: '2' },
    { id: 'copycat_half_panel', multiplier: '32', extract_count: '2' },
    { id: 'copycat_pane', multiplier: '32', extract_count: '2' },
    { id: 'copycat_flat_pane', multiplier: '32', extract_count: '2' },
    { id: 'copycat_byte', multiplier: '32', extract_count: '2' },
    { id: 'copycat_byte_panel', multiplier: '64', extract_count: '4' },
    { id: 'copycat_board', multiplier: '32', extract_count: '2' },
    { id: 'copycat_half_layer', multiplier: '64', extract_count: '4' },
    { id: 'copycat_vertical_half_layer', multiplier: '64', extract_count: '4' },
    { id: 'copycat_stacked_half_layer', multiplier: '64', extract_count: '4' },
    { id: 'copycat_slope', multiplier: '8', extract_count: '1' },
    { id: 'copycat_vertical_slope', multiplier: '8', extract_count: '1' },
    { id: 'copycat_slope_layer', multiplier: '32', extract_count: '2' },
    { id: 'copycat_door', multiplier: '1', extract_count: '1' },
    { id: 'copycat_sliding_door', multiplier: '1', extract_count: '1' },
    { id: 'copycat_folding_door', multiplier: '1', extract_count: '1' },
    { id: 'copycat_trapdoor', multiplier: '1', extract_count: '1' },
    { id: 'copycat_fence_gate', multiplier: '4', extract_count: '1' },
    { id: 'copycat_ladder', multiplier: '24', extract_count: '1' }
  ]
  
  COPYCAT_DATA.forEach(copycat => {
    // Stonecutter Recipes
    event.stonecutting(`${copycat.multiplier}x copycats:${copycat.id}`, "#forge:ingots/zinc")

    // Recycling Recipes
    event.recipes.gtceu.extractor(`tfg:copycats/${copycat.id}_recyle`)
      .itemInputs(`${copycat.extract_count}x copycats:${copycat.id}`)
      .outputFluids(Fluid.of('gtceu:zinc', 144 / copycat.multiplier * copycat.extract_count))
      .duration(20)
      .EUt(GTValues.VA[GTValues.LV])
      .category(GTRecipeCategories.EXTRACTOR_RECYCLING)
  })

  // Copycat Fluid Pipe Assembler
  event.recipes.gtceu.assembler('tfg:copycats/copycat_fluid_pipe')
		.itemInputs('2x #forge:plates/zinc')
		.circuit(3)
		.itemOutputs('copycats:copycat_fluid_pipe')
		.duration(200)
		.EUt(20)
		.addMaterialInfo(true)

  // Other Recycling Recipes
  event.recipes.gtceu.extractor('tfg:copycats/copycat_catwalk_recyle')
    .itemInputs('2x copycats:copycat_catwalk')
    .outputFluids(Fluid.of('gtceu:zinc', 27))
    .duration(20)
    .EUt(GTValues.VA[GTValues.LV])
    .category(GTRecipeCategories.EXTRACTOR_RECYCLING)

  event.recipes.gtceu.extractor('tfg:copycats/copycat_box_recyle')
    .itemInputs('copycats:copycat_box')
    .outputFluids(Fluid.of('gtceu:zinc', 27))
    .duration(20)
    .EUt(GTValues.VA[GTValues.LV])
    .category(GTRecipeCategories.EXTRACTOR_RECYCLING)

  event.recipes.gtceu.extractor('tfg:copycats/copycat_fluid_pipe_recyle')
    .itemInputs('copycats:copycat_fluid_pipe')
    .outputFluids(Fluid.of('gtceu:zinc', 288))
    .duration(20)
    .EUt(GTValues.VA[GTValues.LV])
    .category(GTRecipeCategories.EXTRACTOR_RECYCLING)

  event.recipes.gtceu.extractor('tfg:copycats/copycat_wooden_pressure_plate_recyle')
    .itemInputs('copycats:copycat_wooden_pressure_plate')
    .outputFluids(Fluid.of('gtceu:zinc', 144))
    .duration(20)
    .EUt(GTValues.VA[GTValues.LV])
    .category(GTRecipeCategories.EXTRACTOR_RECYCLING)

  event.recipes.gtceu.extractor('tfg:copycats/copycat_stone_pressure_plate_recyle')
    .itemInputs('copycats:copycat_stone_pressure_plate')
    .outputFluids(Fluid.of('gtceu:zinc', 144))
    .duration(20)
    .EUt(GTValues.VA[GTValues.LV])
    .category(GTRecipeCategories.EXTRACTOR_RECYCLING)
}