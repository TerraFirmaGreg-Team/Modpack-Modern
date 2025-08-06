// priority: 0
"use strict";

function registerTFCAlabasterRecipes(event) {

	event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless('4x tfc:alabaster_brick', ['#forge:raw_materials/gypsum', '#tfc:chisels']))
		.id('tfc:crafting/alabaster_brick/raw_gypsum')

	event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless('2x tfc:alabaster_brick', ['#forge:poor_raw_materials/gypsum', '#tfc:chisels']))
		.id('tfc:crafting/alabaster_brick/poor_raw_gypsum')

	event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless('6x tfc:alabaster_brick', ['#forge:rich_raw_materials/gypsum', '#tfc:chisels']))
		.id('tfc:crafting/alabaster_brick/rich_raw_gypsum')

	// Alabaster Brick
	event.recipes.gtceu.assembler('tfc:alabaster/bricks')
		.itemInputs('5x tfc:alabaster_brick')
		.inputFluids(Fluid.of('gtceu:concrete', 72))
		.itemOutputs('4x tfc:alabaster/bricks')
		.duration(50)
		.EUt(2)

	event.recipes.gtceu.chemical_bath('tfc:alabaster/bricks')
		.itemInputs('#tfc:colored_bricks_alabaster')
		.inputFluids(Fluid.of('gtceu:chlorine', 72))
		.itemOutputs('tfc:alabaster/bricks')
		.duration(400)
		.EUt(2)
		.category(GTRecipeCategories.CHEM_DYES)

	for (let i = 0; i < 16; i++) {
		event.recipes.gtceu.chemical_bath(`tfg:tfc/alabaster/bricks/${global.MINECRAFT_DYE_NAMES[i]}`)
			.itemInputs('tfc:alabaster/bricks')
			.inputFluids(Fluid.of(`tfc:${global.MINECRAFT_DYE_NAMES[i]}_dye`, 72))
			.itemOutputs(`tfc:alabaster/bricks/${global.MINECRAFT_DYE_NAMES[i]}`)
			.duration(20)
			.EUt(7)
			.category(GTRecipeCategories.CHEM_DYES)
	}

	// Raw Alabaster

	event.remove({ id: 'tfc:barrel/raw_alabaster' })
	event.recipes.tfc.barrel_sealed(1000)
		.inputs('gtceu:poor_raw_gypsum', TFC.fluidStackIngredient('tfc:limewater', 50))
		.outputItem('tfc:alabaster/raw')
		.id('tfg:barrel/poor_raw_ore_alabaster')
	event.recipes.tfc.barrel_sealed(1000)
		.inputs('gtceu:raw_gypsum', TFC.fluidStackIngredient('tfc:limewater', 100))
		.outputItem('2x tfc:alabaster/raw')
		.id('tfg:barrel/raw_ore_alabaster')
	event.recipes.tfc.barrel_sealed(1000)
		.inputs('gtceu:rich_raw_gypsum', TFC.fluidStackIngredient('tfc:limewater', 150))
		.outputItem('3x tfc:alabaster/raw')
		.id('tfg:barrel/rich_raw_ore_alabaster')
	
	event.recipes.gtceu.chemical_bath('tfc:alabaster/raw/poor_raw_gypsum')
		.itemInputs('gtceu:poor_raw_gypsum')
		.inputFluids(Fluid.of('tfc:limewater', 50))
		.itemOutputs('tfc:alabaster/raw')
		.duration(400)
		.EUt(2)

	event.recipes.gtceu.chemical_bath('tfc:alabaster/raw/raw_gypsum')
		.itemInputs('gtceu:raw_gypsum')
		.inputFluids(Fluid.of('tfc:limewater', 100))
		.itemOutputs('2x tfc:alabaster/raw')
		.duration(400)
		.EUt(2)

	event.recipes.gtceu.chemical_bath('tfc:alabaster/raw/rich_raw_gypsum')
		.itemInputs('gtceu:rich_raw_gypsum')
		.inputFluids(Fluid.of('tfc:limewater', 150))
		.itemOutputs('3x tfc:alabaster/raw')
		.duration(400)
		.EUt(2)

	event.recipes.gtceu.chemical_bath('tfc:alabaster/raw')
		.itemInputs('#tfc:colored_bricks_alabaster')
		.inputFluids(Fluid.of('gtceu:chlorine', 72))
		.itemOutputs('tfc:alabaster/raw')
		.duration(400)
		.EUt(2)
		.category(GTRecipeCategories.CHEM_DYES)

	for (let i = 0; i < 16; i++) {
		event.recipes.gtceu.chemical_bath(`tfg:alabaster/raw/${global.MINECRAFT_DYE_NAMES[i]}`)
			.itemInputs('tfc:alabaster/raw')
			.inputFluids(Fluid.of(`tfc:${global.MINECRAFT_DYE_NAMES[i]}_dye`, 36))
			.itemOutputs(`tfc:alabaster/raw/${global.MINECRAFT_DYE_NAMES[i]}`)
			.duration(20)
			.EUt(7)
			.category(GTRecipeCategories.CHEM_DYES)

		event.recipes.gtceu.chemical_bath(`tfg:alabaster/polished/${global.MINECRAFT_DYE_NAMES[i]}`)
			.itemInputs('tfc:alabaster/polished')
			.inputFluids(Fluid.of(`tfc:${global.MINECRAFT_DYE_NAMES[i]}_dye`, 36))
			.itemOutputs(`tfc:alabaster/polished/${global.MINECRAFT_DYE_NAMES[i]}`)
			.duration(20)
			.EUt(7)
			.category(GTRecipeCategories.CHEM_DYES)

		event.recipes.gtceu.chemical_bath(`tfg:alabaster/bricks/${global.MINECRAFT_DYE_NAMES[i]}`)
			.itemInputs('tfc:alabaster/bricks')
			.inputFluids(Fluid.of(`tfc:${global.MINECRAFT_DYE_NAMES[i]}_dye`, 36))
			.itemOutputs(`tfc:alabaster/bricks/${global.MINECRAFT_DYE_NAMES[i]}`)
			.duration(20)
			.EUt(7)
			.category(GTRecipeCategories.CHEM_DYES)
	}
}
