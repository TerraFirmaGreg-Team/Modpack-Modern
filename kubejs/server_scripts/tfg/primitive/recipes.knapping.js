// priority: 0
"use strict";

function registerTFGKnappingRecipes(event) {

	//#region Топор

	// Инструмент
	event.remove({ id: `tfc:crafting/stone/axe_igneous_extrusive` })
	event.remove({ id: `tfc:crafting/stone/axe_igneous_intrusive` })
	event.remove({ id: `tfc:crafting/stone/axe_metamorphic` })
	event.remove({ id: `tfc:crafting/stone/axe_sedimentary` })

	// Оголовья
	event.remove({ id: `tfc:rock_knapping/axe_head_igneous_extrusive` })
	event.remove({ id: `tfc:rock_knapping/axe_head_igneous_intrusive` })
	event.remove({ id: `tfc:rock_knapping/axe_head_metamorphic` })
	event.remove({ id: `tfc:rock_knapping/axe_head_sedimentary` })

	event.recipes.tfc.knapping('gtceu:stone_axe_head', 'tfc:rock', [
		" X   ",
		"XXXX ",
		"XXXXX",
		"XXXX ",
		" X   "
	])
		.ingredient('#tfc:rock_knapping')
		.outsideSlotRequired(false)
		.id('tfg:rock_knapping/stone_axe_head')

	//#endregion

	//#region Молот

	// Инструмент
	event.remove({ id: `tfc:crafting/stone/hammer_igneous_extrusive` })
	event.remove({ id: `tfc:crafting/stone/hammer_igneous_intrusive` })
	event.remove({ id: `tfc:crafting/stone/hammer_metamorphic` })
	event.remove({ id: `tfc:crafting/stone/hammer_sedimentary` })

	// Оголовья
	event.remove({ id: `tfc:rock_knapping/hammer_head_igneous_extrusive` })
	event.remove({ id: `tfc:rock_knapping/hammer_head_igneous_intrusive` })
	event.remove({ id: `tfc:rock_knapping/hammer_head_metamorphic` })
	event.remove({ id: `tfc:rock_knapping/hammer_head_sedimentary` })

	event.recipes.tfc.knapping('gtceu:stone_hammer_head', 'tfc:rock', [
		"XXXXX",
		"XXXXX",
		"  X  "
	])
		.ingredient('#tfc:rock_knapping')
		.outsideSlotRequired(false)
		.id('tfg:rock_knapping/stone_hammer_head')

	//#endregion

	//#region Мотыга

	// Инструмент
	event.remove({ id: `tfc:crafting/stone/hoe_igneous_extrusive` })
	event.remove({ id: `tfc:crafting/stone/hoe_igneous_intrusive` })
	event.remove({ id: `tfc:crafting/stone/hoe_metamorphic` })
	event.remove({ id: `tfc:crafting/stone/hoe_sedimentary` })

	// Оголовья
	event.remove({ id: `tfc:rock_knapping/hoe_head_igneous_extrusive` })
	event.remove({ id: `tfc:rock_knapping/hoe_head_1_igneous_extrusive` })
	event.remove({ id: `tfc:rock_knapping/hoe_head_2_igneous_extrusive` })
	event.remove({ id: `tfc:rock_knapping/hoe_head_igneous_intrusive` })
	event.remove({ id: `tfc:rock_knapping/hoe_head_1_igneous_intrusive` })
	event.remove({ id: `tfc:rock_knapping/hoe_head_2_igneous_intrusive` })
	event.remove({ id: `tfc:rock_knapping/hoe_head_metamorphic` })
	event.remove({ id: `tfc:rock_knapping/hoe_head_1_metamorphic` })
	event.remove({ id: `tfc:rock_knapping/hoe_head_2_metamorphic` })
	event.remove({ id: `tfc:rock_knapping/hoe_head_sedimentary` })
	event.remove({ id: `tfc:rock_knapping/hoe_head_1_sedimentary` })
	event.remove({ id: `tfc:rock_knapping/hoe_head_2_sedimentary` })

	event.recipes.tfc.knapping('gtceu:stone_hoe_head', 'tfc:rock', [
		"XXXXX",
		"   XX"
	])
		.ingredient('#tfc:rock_knapping')
		.outsideSlotRequired(false)
		.id('tfg:rock_knapping/stone_hoe_head')

	event.recipes.tfc.knapping('2x gtceu:stone_hoe_head', 'tfc:rock', [
		"XXXXX",
		"XX   ",
		"     ",
		"XXXXX",
		"XX   "
	])
		.ingredient('#tfc:rock_knapping')
		.outsideSlotRequired(false)
		.id('tfg:rock_knapping/stone_hoe_head_1')

	event.recipes.tfc.knapping('2x gtceu:stone_hoe_head', 'tfc:rock', [
		"XXXXX",
		"XX   ",
		"     ",
		"XXXXX",
		"   XX"
	])
		.ingredient('#tfc:rock_knapping')
		.outsideSlotRequired(false)
		.id('tfg:rock_knapping/stone_hoe_head_2')

	//#endregion

	//#region Нож

	// Инструмент
	event.remove({ id: `tfc:crafting/stone/knife_igneous_extrusive` })
	event.remove({ id: `tfc:crafting/stone/knife_igneous_intrusive` })
	event.remove({ id: `tfc:crafting/stone/knife_metamorphic` })
	event.remove({ id: `tfc:crafting/stone/knife_sedimentary` })

	// Оголовья
	event.remove({ id: `tfc:rock_knapping/knife_head_igneous_extrusive` })
	event.remove({ id: `tfc:rock_knapping/knife_head_1_igneous_extrusive` })
	event.remove({ id: `tfc:rock_knapping/knife_head_2_igneous_extrusive` })
	event.remove({ id: `tfc:rock_knapping/knife_head_3_igneous_extrusive` })
	event.remove({ id: `tfc:rock_knapping/knife_head_igneous_intrusive` })
	event.remove({ id: `tfc:rock_knapping/knife_head_1_igneous_intrusive` })
	event.remove({ id: `tfc:rock_knapping/knife_head_2_igneous_intrusive` })
	event.remove({ id: `tfc:rock_knapping/knife_head_3_igneous_intrusive` })
	event.remove({ id: `tfc:rock_knapping/knife_head_metamorphic` })
	event.remove({ id: `tfc:rock_knapping/knife_head_1_metamorphic` })
	event.remove({ id: `tfc:rock_knapping/knife_head_2_metamorphic` })
	event.remove({ id: `tfc:rock_knapping/knife_head_3_metamorphic` })
	event.remove({ id: `tfc:rock_knapping/knife_head_sedimentary` })
	event.remove({ id: `tfc:rock_knapping/knife_head_1_sedimentary` })
	event.remove({ id: `tfc:rock_knapping/knife_head_2_sedimentary` })
	event.remove({ id: `tfc:rock_knapping/knife_head_3_sedimentary` })

	event.recipes.tfc.knapping('gtceu:stone_knife_head', 'tfc:rock', [
		"X ",
		"XX",
		"XX",
		"XX",
		"XX"
	])
		.ingredient('#tfc:rock_knapping')
		.outsideSlotRequired(false)
		.id('tfg:rock_knapping/stone_knife_head')

	event.recipes.tfc.knapping('2x gtceu:stone_knife_head', 'tfc:rock', [
		"X  X ",
		"XX XX",
		"XX XX",
		"XX XX",
		"XX XX"
	])
		.ingredient('#tfc:rock_knapping')
		.outsideSlotRequired(false)
		.id('tfg:rock_knapping/stone_knife_head_1')

	event.recipes.tfc.knapping('2x gtceu:stone_knife_head', 'tfc:rock', [
		"X   X",
		"XX XX",
		"XX XX",
		"XX XX",
		"XX XX"
	])
		.ingredient('#tfc:rock_knapping')
		.outsideSlotRequired(false)
		.id('tfg:rock_knapping/stone_knife_head_2')

	event.recipes.tfc.knapping('2x gtceu:stone_knife_head', 'tfc:rock', [
		" X X ",
		"XX XX",
		"XX XX",
		"XX XX",
		"XX XX"
	])
		.ingredient('#tfc:rock_knapping')
		.outsideSlotRequired(false)
		.id('tfg:rock_knapping/stone_knife_head_3')

	//#endregion

	//#region Лопата

	// Инструмент
	event.remove({ id: `tfc:crafting/stone/shovel_igneous_extrusive` })
	event.remove({ id: `tfc:crafting/stone/shovel_igneous_intrusive` })
	event.remove({ id: `tfc:crafting/stone/shovel_metamorphic` })
	event.remove({ id: `tfc:crafting/stone/shovel_sedimentary` })

	// Оголовья
	event.remove({ id: `tfc:rock_knapping/shovel_head_igneous_extrusive` })
	event.remove({ id: `tfc:rock_knapping/shovel_head_igneous_intrusive` })
	event.remove({ id: `tfc:rock_knapping/shovel_head_metamorphic` })
	event.remove({ id: `tfc:rock_knapping/shovel_head_sedimentary` })

	event.recipes.tfc.knapping('gtceu:stone_shovel_head', 'tfc:rock', [
		"XXX",
		"XXX",
		"XXX",
		"XXX",
		" X "
	])
		.ingredient('#tfc:rock_knapping')
		.outsideSlotRequired(false)
		.id('tfg:rock_knapping/stone_shovel_head')

	//#endregion
	
	event.recipes.tfc.knapping('tfc:thatch', 'tfg:straw', [
		"XXX",
		"XXX",
		"XXX"
	])
		.ingredient('tfc:straw')
		.outsideSlotRequired(false)
		.id('tfc:straw_knapping/thatch_block')
		
	event.remove({ id: 'tfcambiental:crafting/straw_hat'})
	
	event.recipes.tfc.knapping('tfcambiental:straw_hat', 'tfg:straw', [
		" XXX ",
		"XXXXX"
	])
		.ingredient('tfc:straw')
		.outsideSlotRequired(false)
		.id('sns:straw_knapping/straw_hat')
	
	// Molds
	event.recipes.tfc.knapping('tfg:unfired_rod_mold', 'tfc:fire_clay', [
		"XXXXX",
		"XXX X",
		"XX XX",
		"X XXX",
		"XXXXX"
	])
		.ingredient('5x tfc:fire_clay')
		.id('tfg:fire_clay_knapping/unfired_rod_mold')
	
	event.recipes.tfc.knapping('tfg:unfired_small_gear_mold', 'tfc:fire_clay', [
		"XX XX",
		"X   X",
		"  X  ",
		"X   X",
		"XX XX"
	])
		.ingredient('5x tfc:fire_clay')
		.id('tfg:fire_clay_knapping/unfired_small_gear_mold')
	
	event.recipes.tfc.knapping('tfg:unfired_nugget_mold', 'tfc:clay', [
		"XXXXX",
		"X X X",
		"XXXXX",
		"X X X",
		"XXXXX"
	])
		.ingredient('5x minecraft:clay_ball')
		.id('tfg:fire_clay_knapping/unfired_nugget_mold')

}
