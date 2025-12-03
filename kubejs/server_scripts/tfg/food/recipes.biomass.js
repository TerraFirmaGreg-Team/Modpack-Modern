"use strict";

function registerTFGBiomassRecipes(event) {

	//#region Biomass

	event.recipes.gtceu.brewery('biomass_from_tfc_seeds')
		.itemInputs('#tfc:seeds')
		.inputFluids("#tfc:any_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 100))
		.duration(100)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_tfc_food')
		.itemInputs('#tfc:foods')
		.inputFluids("#tfc:any_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 100))
		.duration(100)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_tfc_plants')
		.itemInputs('#tfc:plants')
		.inputFluids("#tfc:any_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 100))
		.duration(100)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_moon_plants')
		.itemInputs('#tfg:moon_plants')
		.inputFluids("#tfc:any_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 100))
		.duration(100)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_mars_plants')
		.itemInputs('#tfg:mars_plants')
		.inputFluids("#tfc:any_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 100))
		.duration(100)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_tfc_corals')
		.itemInputs('#tfc:corals')
		.inputFluids("#tfc:any_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 100))
		.duration(100)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_spider_eyes')
		.itemInputs('minecraft:spider_eye')
		.inputFluids("#tfc:any_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 100))
		.duration(100)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_leaves')
		.itemInputs('#minecraft:leaves')
		.inputFluids("#tfc:any_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 20))
		.duration(100)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_fallen_leaves')
		.itemInputs('#tfc:fallen_leaves')
		.inputFluids("#tfc:any_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 20))
		.duration(100)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_minecraft_plants')
		.itemInputs('#createaddition:plants')
		.inputFluids("#tfc:any_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 100))
		.duration(100)
		.EUt(3)

	event.recipes.gtceu.brewery('biomass_from_wart_blocks')
		.itemInputs('#minecraft:wart_blocks')
		.inputFluids("#tfc:any_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 50))
		.duration(100)
		.EUt(3)

	event.replaceOutput({ id: 'gtceu:distillery/distill_biomass_to_water' }, 'gtceu:wood_dust', 'gtceu:carbon_dust')
	event.replaceOutput({ id: 'gtceu:distillery/distill_biomass_to_ethanol' }, 'gtceu:wood_dust', 'gtceu:carbon_dust')
	event.replaceOutput({ id: 'gtceu:distillation_tower/distill_biomass' }, 'gtceu:wood_dust', 'gtceu:carbon_dust')

	//#endregion

	//#region Plant ball

	event.recipes.gtceu.compressor('plant_ball_from_tfc_seeds')
		.itemInputs('4x #tfc:seeds')
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	let food = Ingredient.of('#tfc:foods')
		.subtract('minecraft:brown_mushroom')
		.subtract('minecraft:red_mushroom')
		.withCount(8)

	event.recipes.gtceu.compressor('plant_ball_from_tfc_food')
		.itemInputs(food)
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	event.recipes.gtceu.compressor('plant_ball_from_tfc_plants')
		.itemInputs('4x #tfc:plants')
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	event.recipes.gtceu.compressor('plant_ball_from_moon_plants')
		.itemInputs('4x #tfg:moon_plants')
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	event.recipes.gtceu.compressor('plant_ball_from_mars_plants')
		.itemInputs('4x #tfg:mars_plants')
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	event.recipes.gtceu.compressor('plant_ball_from_tfc_corals')
		.itemInputs('4x #tfc:corals')
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	event.recipes.gtceu.compressor('plant_ball_from_misc_plants')
		.itemInputs('4x #createaddition:plants')
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	event.recipes.gtceu.compressor('plant_ball_from_wart_blocks')
		.itemInputs('4x #minecraft:wart_blocks')
		.itemOutputs('gtceu:plant_ball')
		.duration(300)
		.EUt(2)

	//#endregion

	// Sugar
	event.recipes.gtceu.centrifuge('sugar_from_sugarcane')
		.itemInputs('tfc:food/sugarcane')
		.inputFluids("#tfg:clean_water 600")
		.itemOutputs('minecraft:sugar', 'gtceu:plant_ball')
		.duration(800)
		.EUt(6)

	event.recipes.gtceu.centrifuge('sugar_from_honey')
		.itemInputs('firmalife:raw_honey')
		.itemOutputs('minecraft:sugar')
		.duration(400)
		.EUt(6)

	event.recipes.gtceu.centrifuge('tfg:beets_to_sugar')
		.itemInputs('5x tfc:food/beet')
		.inputFluids(Fluid.of('tfc:salt_water', 1000))
		.itemOutputs('3x minecraft:sugar', '3x gtceu:plant_ball', '1x #forge:dusts/salt')
		.outputFluids(Fluid.of('minecraft:water', 1000))
		.duration(800)
		.EUt(7)
		.circuit(3)

	// Misc
	event.recipes.gtceu.macerator('macerate_cocoa')
		.itemInputs('firmalife:food/roasted_cocoa_beans')
		.itemOutputs('gtceu:cocoa_dust')
		.duration(100)
		.EUt(2)

	event.recipes.gtceu.macerator('macerate_meat_to_dust')
		.itemInputs('#tfc:foods/meats')
		.itemOutputs('gtceu:meat_dust', 'gtceu:tiny_bone_dust')
		.duration(100)
		.EUt(2)
}