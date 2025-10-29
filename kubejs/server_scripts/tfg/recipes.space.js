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

	event.recipes.gtceu.gas_collector('tfg:nether')
		.circuit(2)
		.outputFluids(Fluid.of('gtceu:air', 10000))
		.dimension('minecraft:the_nether')
		.duration(200)
		.EUt(16)

	event.recipes.gtceu.gas_collector('tfg:moon')
		.circuit(3)
		.outputFluids(Fluid.of('gtceu:argon', 1))
		.dimension('ad_astra:moon')
		.duration(20*60*30)
		.EUt(16)

	event.recipes.gtceu.gas_collector('tfg:mars')
		.circuit(4)
		.outputFluids(Fluid.of('tfg:mars_air', 10000))
		.dimension('ad_astra:mars')
		.duration(20*10)
		.EUt(16)

	event.recipes.gtceu.vacuum_freezer('tfg:liquid_mars_air')
		.inputFluids(Fluid.of('tfg:mars_air', 4000))
		.outputFluids(Fluid.of('tfg:liquid_mars_air', 4000))
		.duration(80)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.centrifuge('tfg:centrifuge_mars_air')
		.inputFluids(Fluid.of('tfg:mars_air', 10000))
		.outputFluids(Fluid.of('gtceu:carbon_dioxide', 3900), Fluid.of('gtceu:nitrogen', 1000), Fluid.of('gtceu:argon', 500))
		.duration(1600)
		.EUt(GTValues.VA[GTValues.MV])

	// TODO: move neon and xenon somewhere else
	event.recipes.gtceu.distillation_tower('tfg:distill_liquid_mars_air')
		.inputFluids(Fluid.of('tfg:liquid_mars_air', 100000))
		.outputFluids(Fluid.of('gtceu:carbon_dioxide', 80000))
		.outputFluids(Fluid.of('gtceu:nitrogen', 7000))
		.outputFluids(Fluid.of('gtceu:argon', 5000))
		.outputFluids(Fluid.of('gtceu:oxygen', 3000))
		.outputFluids(Fluid.of('gtceu:krypton', 1000))
		.outputFluids(Fluid.of('gtceu:neon', 1000))
		.outputFluids(Fluid.of('gtceu:xenon', 1000))
		.chancedOutput('gtceu:ammonium_chloride_dust', 2250, 0)
		.disableDistilleryRecipes(true)
		.duration(2000)
		.EUt(GTValues.VA[GTValues.EV])

	// Aqueous accumulator -- use adjacentFluids (plural) to avoid rhino ambiguous method issues
	
	let aaCircuit = 1;

	event.recipes.gtceu.aqueous_accumulator('water')
		.circuit(aaCircuit++)
		.duration(20)
		.EUt(GTValues.VHA[GTValues.ULV])
		.adjacentFluids(["minecraft:water"])
		.outputFluids(Fluid.of("minecraft:water", 1000))
		
	event.recipes.gtceu.aqueous_accumulator('sea_water')
		.circuit(aaCircuit++)
		.duration(20)
		.EUt(GTValues.VA[GTValues.ULV])
		.adjacentFluids(["tfc:salt_water"])
		.outputFluids(Fluid.of("tfc:salt_water", 1000))
		
	event.recipes.gtceu.aqueous_accumulator('semiheavy_water_mars')
		.circuit(aaCircuit++)
		.dimension('ad_astra:mars')
		.duration(20)
		.EUt(GTValues.VHA[GTValues.ULV])
		.adjacentFluids(["tfg:semiheavy_ammoniacal_water"])
		.outputFluids(Fluid.of("tfg:semiheavy_ammoniacal_water", 1000))

	event.recipes.gtceu.aqueous_accumulator('lava_overworld')
		.circuit(aaCircuit++)
		.dimension('minecraft:overworld')
		.duration(20*15)
		.EUt(GTValues.VHA[GTValues.HV])
		.adjacentFluids(["minecraft:lava"])
		.outputFluids(Fluid.of("minecraft:lava", 1000))

	event.recipes.gtceu.aqueous_accumulator('lava_nether')
		.circuit(aaCircuit++)
		.dimension('minecraft:the_nether')
		.duration(20*15)
		.EUt(GTValues.VHA[GTValues.HV])
		.adjacentFluids(["minecraft:lava"])
		.outputFluids(Fluid.of("minecraft:lava", 1000))

	event.recipes.gtceu.aqueous_accumulator('spring_water')
		.circuit(aaCircuit++)
		.dimension('minecraft:overworld')
		.duration(20)
		.EUt(GTValues.VA[GTValues.LV])
		.adjacentFluids(["tfc:spring_water"])
		.outputFluids(Fluid.of("tfc:spring_water", 1000))

	event.recipes.gtceu.aqueous_accumulator('more_water')
		.circuit(aaCircuit++)
		.duration(10)
		.EUt(GTValues.VHA[GTValues.HV])
		.adjacentFluids(["minecraft:water"])
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

	event.recipes.gtceu.mixer('tfg:bio_glowstone')
		.itemInputs('betterend:cave_pumpkin_chunks', '4x species:alphacene_mushroom_block')
		.outputFluids(Fluid.of('gtceu:biomass', 100))
		.itemOutputs('2x minecraft:glowstone_dust')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.EV])
		.dimension('ad_astra:mars')

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
	// (the railgun inputs and outputs are in tfg-core)


	//item bus to railgun item bus conversion recipes
	const GTTiers = ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv']
	GTTiers.forEach(x => {
		event.recipes.gtceu.assembler(`tfg:${x}_input_to_${x}_railgun_input_assembler`)
			.itemInputs(`gtceu:${x}_input_bus`)
			.circuit(4)
			.itemOutputs(`tfg:${x}_railgun_item_loader_in`)
			.duration(20 * 5)
			.EUt(GTValues.VA[GTValues.LV])
		
		event.recipes.gtceu.assembler(`tfg:${x}_output_to_${x}_railgun_output_assembler`)
			.itemInputs(`gtceu:${x}_output_bus`)
			.circuit(4)
			.itemOutputs(`tfg:${x}_railgun_item_loader_out`)
			.duration(20 * 5)
			.EUt(GTValues.VA[GTValues.LV])
	})

	//Railgun ammo
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

	event.recipes.gtceu.assembler('tfg:railgun_ammo_mars')
		.itemInputs('#forge:double_plates/lead', '2x #forge:rods/ostrum', '2x #forge:fine_wires/silver')
		.inputFluids('gtceu:rocket_fuel 250')
		.itemOutputs('8x tfg:railgun_ammo_shell')
		.dimension('ad_astra:mars')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.shaped('tfg:railgun_ammo_loader', [
		'RMR',
		'MBM',
		'CCC'
	], {
		B: 'gtceu:mv_input_bus',
		R: 'gtceu:mv_robot_arm',
		M: 'gtceu:mv_electric_motor',
		C: '#forge:single_cables/annealed_copper'
	}).addMaterialInfo().id('tfg:shaped/railgun_ammo_loader')

	event.recipes.gtceu.shaped('tfg:interplanetary_logistics_monitor', [
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
	}).addMaterialInfo().id('tfg:shaped/interplanetary_logistics_monitor')

	event.recipes.gtceu.shaped('tfg:interplanetary_item_launcher', [
		'NSN',
		'CHC',
		'NEN'
	], {
		C: '#gtceu:circuits/ev',
		S: 'gtceu:hv_sensor',
		E: 'gtceu:hv_emitter',
		H: 'gtceu:ev_machine_hull',
		N: '#forge:plates/hsla_steel'
	}).addMaterialInfo().id('tfg:shaped/interplanetary_item_launcher')

	event.recipes.gtceu.shaped('tfg:interplanetary_item_receiver', [
		'CSC',
		'WHW',
		'CSC'
	], {
		C: '#gtceu:circuits/mv',
		S: 'gtceu:mv_sensor',
		W: '#forge:double_cables/copper',
		H: 'gtceu:mv_machine_hull'
	}).addMaterialInfo().id('tfg:shaped/interplanetary_item_receiver')

	// Mars tree tapping

	event.recipes.gtceu.autoclave('tfg:crimsene')
		.inputFluids(Fluid.of('tfg:crimsene', 144), Fluid.of('gtceu:liquid_carbon_dioxide', 1000))
		.outputFluids(Fluid.of('gtceu:carbon_monoxide', 1000))
		.itemOutputs('#forge:gems/crimsene')
		.duration(20 * 30)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.autoclave('tfg:warpane')
		.inputFluids(Fluid.of('tfg:warpane', 144), Fluid.of('gtceu:liquid_carbon_dioxide', 1000))
		.outputFluids(Fluid.of('gtceu:hydrogen', 1000))
		.itemOutputs('#forge:gems/warpane')
		.duration(20 * 30)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.macerator('tfg:crimsene')
		.itemInputs('#forge:gems/crimsene')
		.itemOutputs('#forge:dusts/crimsene')
		.duration(20 * 5)
		.EUt(2)

	event.recipes.gtceu.macerator('tfg:warpane')
		.itemInputs('#forge:gems/warpane')
		.itemOutputs('#forge:dusts/warpane')
		.duration(20 * 5)
		.EUt(2)

	event.recipes.gtceu.mixer('tfg:mars_sap')
		.itemInputs('#forge:dusts/warpane', '#forge:dusts/crimsene')
		.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 1000), Fluid.of('gtceu:krypton', 500))
		.itemOutputs('#forge:dusts/mycelienzene')
		.duration(30 * 20)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.deafission.fission_reactor_processing('tfg:mars_sap')
		.itemInputs('#forge:dusts/mycelienzene')
		.outputFluids(Fluid.of('tfg:cooked_mycelienzane', 1000))
		// TODO: change these to something appropriate
		.blastFurnaceTemp(100)
		.duration(30 * 10)

	event.recipes.gtceu.centrifuge('mars_sap_separation')
		.inputFluids(Fluid.of('tfg:cooked_mycelienzane', 2000))
		.outputFluids(
			Fluid.of('tfg:iodomethane', 1000),
			Fluid.of('tfg:trideuteroiodomethane', 1000),
			Fluid.of('gtceu:krypton', 1000),
			Fluid.of('gtceu:diluted_hydrochloric_acid', 4000))
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.chemical_reactor('tfg:iodomethane_separation')
		.inputFluids(
			Fluid.of('tfg:iodomethane', 1000), 
			Fluid.of('gtceu:hydrogen', 1000))
		.itemOutputs('#forge:dusts/iodine')
		.outputFluids(Fluid.of('gtceu:methane', 1000))
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.chemical_reactor('tfg:trideuteroiodomethane_separation')
		.inputFluids(
			Fluid.of('tfg:trideuteroiodomethane', 1000),
			Fluid.of('gtceu:oxygen', 1500))
		.itemOutputs('#forge:dusts/iodine', '#forge:dusts/carbon')
		.outputFluids(Fluid.of('tfg:heavy_water', 1500))
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.MV])
}