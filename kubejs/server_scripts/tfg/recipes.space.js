// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGSpaceRecipes(event) {

	const allowedCombustibleDims = [
		{
			dimension: "minecraft:the_nether",
			type: "dimension"
		},
		{
			dimension: "minecraft:overworld",
			type: "dimension"
		}
	]

	event.findRecipes({ type: "gtceu:large_boiler" }).forEach(recipe => {
		recipe.json.add("recipeConditions", allowedCombustibleDims)
	})
	event.findRecipes({ type: "gtceu:steam_boiler" }).forEach(recipe => {
		recipe.json.add("recipeConditions", allowedCombustibleDims)
	})
	event.findRecipes({ type: "gtceu:combustion_generator" }).forEach(recipe => {
		recipe.json.add("recipeConditions", allowedCombustibleDims)
	})
	event.findRecipes({ type: "gtceu:gas_turbine" }).forEach(recipe => {
		recipe.json.add("recipeConditions", allowedCombustibleDims)
	})

	// Air collector

	event.recipes.gtceu.gas_collector('nether')
		.circuit(2)
		.outputFluids(Fluid.of('gtceu:air', 10000))
		.dimension('minecraft:the_nether')
		.duration(200)
		.EUt(16)

	event.recipes.gtceu.gas_collector('moon')
		.circuit(3)
		.outputFluids(Fluid.of('gtceu:argon', 1))
		.dimension('ad_astra:moon')
		.duration(20*60*30)
		.EUt(16)

	event.recipes.gtceu.gas_collector('mars')
		.circuit(3)
		.outputFluids(Fluid.of('gtceu:carbon_dioxide', 10000))
		.dimension('ad_astra:mars')
		.duration(20*10)
		.EUt(16)

	// Aqueous accumulator
	
	let aaCircuit = 1;

	event.recipes.gtceu.aqueous_accumulator('water')
		.circuit(aaCircuit++)
		.duration(20)
		.EUt(GTValues.VHA[GTValues.ULV])
		['adjacentFluid(net.minecraft.world.level.material.Fluid[])']("minecraft:water")
		.outputFluids(Fluid.of("minecraft:water", 1000))
		
	event.recipes.gtceu.aqueous_accumulator('sea_water')
		.circuit(aaCircuit++)
		.duration(20)
		.EUt(GTValues.VA[GTValues.ULV])
		['adjacentFluid(net.minecraft.world.level.material.Fluid[])']("tfc:salt_water")
		.outputFluids(Fluid.of("tfc:salt_water", 1000))
		
	event.recipes.gtceu.aqueous_accumulator('semiheavy_water_mars')
		.circuit(aaCircuit++)
		.dimension('ad_astra:mars')
		.duration(20)
		.EUt(GTValues.VHA[GTValues.ULV])
		['adjacentFluid(net.minecraft.world.level.material.Fluid[])']("tfg:semiheavy_ammoniacal_water")
		.outputFluids(Fluid.of("tfg:semiheavy_ammoniacal_water", 1000))

	event.recipes.gtceu.aqueous_accumulator('lava_overworld')
		.circuit(aaCircuit++)
		.dimension('minecraft:overworld')
		.duration(20*15)
		.EUt(GTValues.VHA[GTValues.HV])
		['adjacentFluid(net.minecraft.world.level.material.Fluid[])']("minecraft:lava")
		.outputFluids(Fluid.of("minecraft:lava", 1000))

	event.recipes.gtceu.aqueous_accumulator('lava_nether')
		.circuit(aaCircuit++)
		.dimension('minecraft:the_nether')
		.duration(20*15)
		.EUt(GTValues.VHA[GTValues.HV])
		['adjacentFluid(net.minecraft.world.level.material.Fluid[])']("minecraft:lava")
		.outputFluids(Fluid.of("minecraft:lava", 1000))

	event.recipes.gtceu.aqueous_accumulator('spring_water')
		.circuit(aaCircuit++)
		.dimension('minecraft:overworld')
		.duration(20)
		.EUt(GTValues.VA[GTValues.LV])
		['adjacentFluid(net.minecraft.world.level.material.Fluid[])']("tfc:spring_water")
		.outputFluids(Fluid.of("tfc:spring_water", 1000))

	event.recipes.gtceu.aqueous_accumulator('more_water')
		.circuit(aaCircuit++)
		.duration(10)
		.EUt(GTValues.VHA[GTValues.HV])
		['adjacentFluid(net.minecraft.world.level.material.Fluid[])']("minecraft:water")
		.outputFluids(Fluid.of("minecraft:water", 20000))
		

	// Plants - Can't use the default builder here because fertiliser is much harder to get on the moon,
	// and we're using helium-3 as the fertiliser

	// Chorus
	event.recipes.gtceu.greenhouse('tfg:chorus')
		.notConsumable('8x tfg:lunar_chorus_flower')
		.itemOutputs('64x minecraft:chorus_fruit')
		.chancedOutput('8x tfg:lunar_chorus_flower', 750, 0)
		.chancedOutput('8x tfg:lunar_chorus_flower', 500, 0)
		.chancedOutput('8x tfg:lunar_chorus_flower', 750, 0)
		.duration(36000) // 30 mins
		.circuit(1)
		.EUt(GTValues.VA[GTValues.MV])
		.dimension('ad_astra:moon')

	event.recipes.gtceu.greenhouse('tfg:chorus_helium')
		.notConsumable('8x tfg:lunar_chorus_flower')
		.inputFluids(Fluid.of('gtceu:helium_3', 2000))
		.itemOutputs('64x minecraft:chorus_fruit')
		.chancedOutput('8x tfg:lunar_chorus_flower', 4000, 0)
		.chancedOutput('8x tfg:lunar_chorus_flower', 3000, 0)
		.chancedOutput('8x tfg:lunar_chorus_flower', 4000, 0)
		.duration(12000) // 10 mins
		.circuit(2)
		.EUt(GTValues.VA[GTValues.MV])
		.dimension('ad_astra:moon')

	// Replace the built-in greg one to add a circuit
	event.recipes.gtceu.fermenter('fermented_biomass')
		.inputFluids(Fluid.of('gtceu:biomass', 100))
		.outputFluids(Fluid.of('gtceu:fermented_biomass', 100))
		.circuit(1)
		.duration(150)
		.EUt(2)

	event.recipes.gtceu.fermenter('tfg:chorus')
		.itemInputs('minecraft:chorus_fruit')
		.inputFluids(Fluid.of('gtceu:biomass', 20))
		.chancedOutput('ae2:ender_dust', 100, 0)
		.outputFluids(Fluid.of('gtceu:nitrogen', 1000))
		.circuit(2)
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.MV])
		.dimension('ad_astra:moon')

	event.recipes.gtceu.fermenter('tfg:chorus_flower')
		.itemInputs('tfg:lunar_chorus_flower')
		.inputFluids(Fluid.of('gtceu:biomass', 20))
		.chancedOutput('ae2:ender_dust', 100, 0)
		.outputFluids(Fluid.of('gtceu:nitrogen', 1000))
		.circuit(2)
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.MV])
		.dimension('ad_astra:moon')

	// Lightblooms
	event.recipes.gtceu.greenhouse('tfg:lightbloom')
		.notConsumable('8x minecraft:twisting_vines')
		.itemOutputs('16x minecraft:twisting_vines')
		.chancedOutput('minecraft:pearlescent_froglight', 2500, 0)
		.chancedOutput('minecraft:verdant_froglight', 2500, 0)
		.chancedOutput('minecraft:ochre_froglight', 2500, 0)
		.duration(36000) // 30 mins
		.circuit(1)
		.EUt(GTValues.VA[GTValues.LV])
		.dimension('ad_astra:moon')

	event.recipes.gtceu.greenhouse('tfg:lightbloom_helium')
		.notConsumable('8x minecraft:twisting_vines')
		.inputFluids(Fluid.of('gtceu:helium_3', 2000))
		.itemOutputs('16x minecraft:twisting_vines')
		.chancedOutput('minecraft:pearlescent_froglight', 3500, 0)
		.chancedOutput('minecraft:verdant_froglight', 3500, 0)
		.chancedOutput('minecraft:ochre_froglight', 3500, 0)
		.duration(12000) // 30 mins
		.circuit(2)
		.EUt(GTValues.VA[GTValues.LV])
		.dimension('ad_astra:moon')

	event.recipes.gtceu.brewery('biomass_from_twisting_vines')
		.itemInputs('minecraft:twisting_vines')
		.inputFluids("#tfg:clean_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 20))
		.duration(50)
		.EUt(3)

	// Space suit gases

	event.recipes.gtceu.gas_pressurizer('compressed_nitrox')
		.inputFluids(Fluid.of('gtceu:nitrogen', 8000), Fluid.of('gtceu:oxygen', 2000))
		.outputFluids(Fluid.of('tfg:compressed_nitrox', 1000))
		.circuit(1)
		.duration(100)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.gas_pressurizer('compressed_heliox')
		.inputFluids(Fluid.of('gtceu:helium', 8000), Fluid.of('gtceu:oxygen', 2000))
		.outputFluids(Fluid.of('tfg:compressed_heliox', 1000))
		.circuit(1)
		.duration(100)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.gas_pressurizer('compressed_heliox_3')
		.inputFluids(Fluid.of('gtceu:helium_3', 8000), Fluid.of('gtceu:oxygen', 2000))
		.outputFluids(Fluid.of('tfg:compressed_heliox_3', 1000))
		.circuit(1)
		.duration(100)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.gas_pressurizer('compressed_trimix')
		.inputFluids(Fluid.of('gtceu:nitrogen', 5000), Fluid.of('gtceu:oxygen', 3000), Fluid.of('gtceu:helium', 2000))
		.outputFluids(Fluid.of('tfg:compressed_trimix', 1000))
		.circuit(2)
		.duration(100)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.gas_pressurizer('compressed_trimix_3')
		.inputFluids(Fluid.of('gtceu:nitrogen', 5000), Fluid.of('gtceu:oxygen', 3000), Fluid.of('gtceu:helium_3', 2000))
		.outputFluids(Fluid.of('tfg:compressed_trimix_3', 1000))
		.circuit(2)
		.duration(100)
		.EUt(GTValues.VA[GTValues.HV])
		
	//Cryo Fluix Pearl
	event.recipes.gtceu.autoclave('tfg:cryo_fluix_pearl')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 576))
		.itemInputs('tfg:vitrified_pearl')
		.itemOutputs('tfg:cryo_fluix_pearl')
		.duration(300)
		.EUt(GTValues.VA[GTValues.EV])
		.cleanroom(CleanroomType.CLEANROOM)

	// Railgun stuff

	event.recipes.gtceu.assembler('tfg:railgun_ammo_basic')
		.itemInputs('#forge:double_plates/steel', '2x #forge:rods/magnetic_iron', '2x #forge:fine_wires/annealed_copper')
		.inputFluids('gtceu:rocket_fuel 250')
		.itemOutputs('tfg:railgun_ammo_shell')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.assembler('tfg:railgun_ammo_advanced')
		.itemInputs('#forge:double_plates/titanium', '2x #forge:rods/magnetic_steel', '2x #forge:fine_wires/gold')
		.inputFluids('gtceu:rocket_fuel 250')
		.itemOutputs('4x tfg:railgun_ammo_shell')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.assembler('tfg:railgun_ammo_best')
		.itemInputs('#forge:double_plates/tungsten', '2x #forge:rods/magnetic_neodymium', '2x #forge:fine_wires/aluminium')
		.inputFluids('gtceu:rocket_fuel 250')
		.itemOutputs('8x tfg:railgun_ammo_shell')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.assembler('tfg:railgun_ammo_moon')
		.itemInputs('#forge:double_plates/steel', '2x ae2:charged_certus_quartz_crystal', '2x ae2:quartz_fiber')
		.inputFluids('gtceu:rocket_fuel 250')
		.itemOutputs('4x tfg:railgun_ammo_shell')
		.dimension('ad_astra:moon')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.MV])

	event.shaped('tfg:railgun_ammo_loader', [
		'RMR',
		'MBM',
		'CCC'
	], {
		B: 'gtceu:mv_input_bus',
		R: 'gtceu:mv_robot_arm',
		M: 'gtceu:mv_electric_motor',
		C: '#forge:single_cables/annealed_copper'
	}).id('tfg:shaped/railgun_ammo_loader')

	event.shaped('tfg:interplanetary_logistics_monitor', [
		'CDC',
		'SHE',
		'WCW'
	], {
		C: '#gtceu:circuits/hv',
		D: 'gtceu:computer_monitor_cover',
		S: 'gtceu:hv_sensor',
		H: 'gtceu:hv_machine_hull',
		E: 'gtceu:hv_emitter',
		W: '#forge:single_cables/silver'
	}).id('tfg:shaped/interplanetary_logistics_monitor')

	event.shaped('tfg:interplanetary_item_launcher', [
		'NSN',
		'CHC',
		'NEN'
	], {
		C: '#gtceu:circuits/ev',
		S: 'gtceu:hv_sensor',
		E: 'gtceu:hv_emitter',
		H: 'gtceu:ev_machine_hull',
		N: '#forge:plates/hsla_steel'
	}).id('tfg:shaped/interplanetary_item_launcher')

	event.shaped('tfg:interplanetary_item_receiver', [
		'CSC',
		'WHW',
		'CSC'
	], {
		C: '#gtceu:circuits/mv',
		S: 'gtceu:mv_sensor',
		W: '#forge:double_cables/copper',
		H: 'gtceu:mv_machine_hull'
	}).id('tfg:shaped/interplanetary_item_receiver')

	// the railgun inputs and outputs are in tfg-core
}