// priority: 0
"use strict";

const registerSimplylightRecipes = (event) => {

	// remove old recipes
	global.MINECRAFT_DYE_NAMES.forEach(color => {
		event.remove({ id: `simplylight:illuminant_${color}_block_on_dyed` })
		event.remove({ id: `simplylight:illuminant_${color}_block_dyed` })
	})
	event.remove({ id: `simplylight:illuminant_block_on_dyed` })
	event.remove({ id: `simplylight:illuminant_block_dyed` })
	event.remove({ id: 'simplylight:illuminant_slab' })
	event.remove({ id: 'simplylight:walllamp' })
	event.remove({ id: 'simplylight:rodlamp' })
	event.remove({ id: 'simplylight:bulb' })
	event.remove({ id: 'simplylight:edge_light' })
	event.remove({ id: 'simplylight:lamp_post' })
	event.remove({ id: 'simplylight:illuminant_block_on' })
	event.remove({ id: 'simplylight:illuminant_block' })

	// new recipes
	global.MINECRAFT_DYE_NAMES.forEach(color => {

		//exeption for white lamps because who needs consistency?
		if (color !== 'white') {
			event.recipes.gtceu.chemical_bath(`simplylight:chemical_bath/dyeing/illuminant_${color}_block_on`)
				.itemInputs('#simplylight:any_lamp_on')
				.inputFluids(Fluid.of(`tfc:${color}_dye`, 25))
				.itemOutputs(`simplylight:illuminant_${color}_block_on`)
				.duration(80)
				.EUt(20)
				.category(GTRecipeCategories.CHEM_DYES)

			event.recipes.gtceu.chemical_bath(`simplylight:chemical_bath/dyeing/illuminant_${color}_block`)
				.itemInputs('#simplylight:any_lamp_off')
				.inputFluids(Fluid.of(`tfc:${color}_dye`, 25))
				.itemOutputs(`simplylight:illuminant_${color}_block`)
				.duration(80)
				.EUt(20)
				.category(GTRecipeCategories.CHEM_DYES)

			event.recipes.tfc.barrel_sealed(1000)
				.outputItem(`simplylight:illuminant_${color}_block_on`)
				.inputItem(Ingredient.of('#simplylight:any_lamp_on').subtract(`simplylight:illuminant_${color}_block_on`))
				.inputFluid(Fluid.of(`tfc:${color}_dye`, 25))
				.id(`simplylight:barrel/dyeing/illuminant_${color}_block_on`)

			event.recipes.tfc.barrel_sealed(1000)
				.outputItem(`simplylight:illuminant_${color}_block`)
				.inputItem(Ingredient.of('#simplylight:any_lamp_off').subtract(`simplylight:illuminant_${color}_block`))
				.inputFluid(Fluid.of(`tfc:${color}_dye`, 25))
				.id(`simplylight:barrel/dyeing/illuminant_${color}_block`)
		}
	})

	event.recipes.tfc.barrel_sealed(1000)
		.outputItem(`simplylight:illuminant_block_on`)
		.inputItem(Ingredient.of('#simplylight:any_lamp_on').subtract(`simplylight:illuminant_block_on`))
		.inputFluid(Fluid.of(`tfc:white_dye`, 25))
		.id(`simplylight:barrel/dyeing/illuminant_block_on`)

	event.recipes.tfc.barrel_sealed(1000)
		.outputItem(`simplylight:illuminant_block`)
		.inputItem(Ingredient.of('#simplylight:any_lamp_off').subtract(`simplylight:illuminant_block`))
		.inputFluid(Fluid.of(`tfc:white_dye`, 25))
		.id(`simplylight:barrel/dyeing/illuminant_block`)

	event.recipes.gtceu.chemical_bath(`simplylight:chemical_bath/bleaching/illuminant_block_on`)
		.itemInputs(Ingredient.of('#simplylight:any_lamp_on').subtract(`simplylight:illuminant_block_on`))
		.inputFluids(Fluid.of('gtceu:chlorine', 72))
		.itemOutputs('simplylight:illuminant_block_on')
		.duration(80)
		.EUt(20)
		.category(GTRecipeCategories.CHEM_DYES)

	event.recipes.gtceu.chemical_bath(`simplylight:chemical_bath/bleaching/illuminant_block`)
		.itemInputs(Ingredient.of('#simplylight:any_lamp_off').subtract(`simplylight:illuminant_block`))
		.inputFluids(Fluid.of('gtceu:chlorine', 72))
		.itemOutputs('simplylight:illuminant_block')
		.duration(80)
		.EUt(20)
		.category(GTRecipeCategories.CHEM_DYES)

	event.recipes.gtceu.shaped('6x simplylight:illuminant_slab', [
		'AAA',
		'BBB',
		'   '
	], {
		A: 'minecraft:glowstone',
		B: '#forge:plates/tin_alloy'
	}).addMaterialInfo().id('tfg:simplylight/illuminant_slab')

	event.recipes.gtceu.shaped('4x simplylight:wall_lamp', [
		'BB ',
		'BA ',
		'BA '
	], {
		A: 'minecraft:glowstone',
		B: '#forge:plates/tin_alloy'
	}).addMaterialInfo().id('tfg:simplylight/wall_lamp')

	event.recipes.gtceu.shaped('12x simplylight:rodlamp', [
		'ACA',
		'ABA',
		'ACA'
	], {
		A: 'minecraft:glowstone',
		B: '#forge:rods/tin_alloy',
		C: '#forge:bolts/tin_alloy'
	}).addMaterialInfo().id('tfg:simplylight/rod_lamp')

	event.recipes.gtceu.shaped('2x simplylight:lightbulb', [
		' A ',
		'BBB',
		'   '
	], {
		A: 'minecraft:glowstone',
		B: '#forge:plates/tin_alloy'
	}).addMaterialInfo().id('tfg:simplylight/light_bulb')

	event.recipes.gtceu.shaped('6x simplylight:edge_light', [
		'AAA',
		'CBC',
		'   '
	], {
		A: 'minecraft:glowstone',
		B: '#forge:rods/tin_alloy',
		C: '#forge:bolts/tin_alloy'
	}).addMaterialInfo().id('tfg:simplylight/edge_light')

	event.recipes.gtceu.shaped('4x simplylight:lamp_post', [
		' A ',
		' B ',
		' C '
	], {
		A: '#simplylight:any_lamp_on',
		B: '#forge:rods/long/tin_alloy',
		C: '#forge:plates/tin_alloy',
	}).addMaterialInfo().id('tfg:simplylight/lamp_post')

	event.recipes.gtceu.shaped('8x simplylight:illuminant_block_on', [
		'BAB',
		'ACA',
		'BAB'
	], {
		A: 'minecraft:glowstone',
		B: '#forge:plates/tin_alloy',
		C: '#forge:fine_wires/red_alloy',
	}).addMaterialInfo().id('tfg:simplylight/illuminant_block_on')

	event.recipes.gtceu.shaped('8x simplylight:illuminant_block', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'minecraft:glowstone',
		B: '#forge:plates/tin_alloy',
		C: '#forge:fine_wires/red_alloy',
	}).addMaterialInfo().id('tfg:simplylight/illuminant_block')
}
