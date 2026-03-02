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

  // Stonecutting
  event.stonecutting("4x copycats:copycat_block", "#forge:ingots/zinc")
  event.stonecutting("8x copycats:copycat_slab", "#forge:ingots/zinc")
  event.stonecutting("4x copycats:copycat_stairs", "#forge:ingots/zinc")
  event.stonecutting("4x copycats:copycat_vertical_stairs", "#forge:ingots/zinc")
  event.stonecutting("4x copycats:copycat_fence", "#forge:ingots/zinc")
  event.stonecutting("4x copycats:copycat_wall", "#forge:ingots/zinc")
  event.stonecutting("16x copycats:copycat_vertical_step", "#forge:ingots/zinc")
  event.stonecutting("16x copycats:copycat_beam", "#forge:ingots/zinc")
  event.stonecutting("64x copycats:copycat_slice", "#forge:ingots/zinc")
  event.stonecutting("64x copycats:copycat_vertical_slice", "#forge:ingots/zinc")
  event.stonecutting("64x copycats:copycat_corner_slice", "#forge:ingots/zinc")
  event.stonecutting("4x copycats:copycat_ghost_block", "#forge:ingots/zinc")
  event.stonecutting("32x copycats:copycat_layer", "#forge:ingots/zinc")
  event.stonecutting("32x copycats:copycat_half_panel", "#forge:ingots/zinc")
  event.stonecutting("32x copycats:copycat_pane", "#forge:ingots/zinc")
  event.stonecutting("32x copycats:copycat_flat_pane", "#forge:ingots/zinc")
  event.stonecutting("32x copycats:copycat_byte", "#forge:ingots/zinc")
  event.stonecutting("64x copycats:copycat_byte_panel", "#forge:ingots/zinc")
  event.stonecutting("32x copycats:copycat_board", "#forge:ingots/zinc")
  event.stonecutting("64x copycats:copycat_half_layer", "#forge:ingots/zinc")
  event.stonecutting("64x copycats:copycat_vertical_half_layer", "#forge:ingots/zinc")
  event.stonecutting("64x copycats:copycat_stacked_half_layer", "#forge:ingots/zinc")
  event.stonecutting("8x copycats:copycat_slope", "#forge:ingots/zinc")
  event.stonecutting("8x copycats:copycat_vertical_slope", "#forge:ingots/zinc")
  event.stonecutting("32x copycats:copycat_slope_layer", "#forge:ingots/zinc")
  event.stonecutting("copycats:copycat_door", "#forge:ingots/zinc")
  event.stonecutting("copycats:copycat_sliding_door", "#forge:ingots/zinc")
  event.stonecutting("copycats:copycat_folding_door", "#forge:ingots/zinc")
  event.stonecutting("copycats:copycat_trapdoor", "#forge:ingots/zinc")
  event.stonecutting("4x copycats:copycat_fence_gate", "#forge:ingots/zinc")
  event.stonecutting("24x copycats:copycat_ladder", "#forge:ingots/zinc")

  // GT Assembler
  event.recipes.gtceu.assembler('tfg:copycats/copycat_fluid_pipe')
		.itemInputs('2x #forge:plates/zinc')
		.circuit(3)
		.itemOutputs('copycats:copycat_fluid_pipe')
		.duration(200)
		.EUt(20)
		.addMaterialInfo(true)
}
