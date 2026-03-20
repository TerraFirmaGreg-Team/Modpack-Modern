"use strict";

function registerTFGRocketRecipes(event) {

	//#region Tier 1 rocket

	event.recipes.gtceu.assembler('tfg:rocket_nose_cone_t1')
		.itemInputs(
			'gtceu:hv_emitter',
			ChemicalHelper.get(TagPrefix.plateDense, TFGHelpers.getMaterial('rocket_alloy_t1'), 1),
			ChemicalHelper.get(TagPrefix.plateDouble, GTMaterials.StainlessSteel, 3))
		.inputFluids(Fluid.of('gtceu:polyethylene', 144 * 16))
		.itemOutputs('ad_astra:rocket_nose_cone')
		.duration(1200)
		.circuit(2)
		.EUt(480)
		.addMaterialInfo(true, true)


	event.recipes.gtceu.pyrolyse_oven('tfg:pyrolyse_vitrified_asbestos_dust')
		.inputFluids(Fluid.of('gtceu:nitrogen', 100))
		.itemInputs('gtceu:asbestos_dust')
		.itemOutputs('gtceu:vitrified_asbestos_dust')
		.duration(80)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.mixer('tfg:rocket_alloy_t1')
		.itemInputs('6x #forge:dusts/aluminium', '2x #forge:dusts/stainless_steel')
		.inputFluids(Fluid.of('gtceu:red_steel', 144))
		.itemOutputs('9x #forge:dusts/rocket_alloy_t1')
		.duration(580)
		.circuit(2)
		.EUt(480)

	event.recipes.gtceu.chemical_bath('tfg:rocket_alloy_cool_down_water')
		.itemInputs('#forge:hot_ingots/rocket_alloy_t1')
		.inputFluids(Fluid.of('minecraft:water', 100))
		.itemOutputs('#forge:ingots/rocket_alloy_t1')
		.duration(400)
		.EUt(120)

	event.recipes.gtceu.chemical_bath('tfg:rocket_alloy_cool_down_distilled_water')
		.itemInputs('#forge:hot_ingots/rocket_alloy_t1')
		.inputFluids(Fluid.of('gtceu:distilled_water', 100))
		.itemOutputs('#forge:ingots/rocket_alloy_t1')
		.duration(250)
		.EUt(120)

	event.recipes.gtceu.assembler(`tfg:rocket_fin_t1`)
		.itemInputs(
			ChemicalHelper.get(TagPrefix.plateDense, TFGHelpers.getMaterial('rocket_alloy_t1'), 1),
			ChemicalHelper.get(TagPrefix.plateDouble, GTMaterials.StainlessSteel, 1)
		)
		.itemOutputs('ad_astra:rocket_fin')
		.duration(150)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true)


	event.recipes.gtceu.assembler('tfg:rocket_steel_engine')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.plateDouble, GTMaterials.StainlessSteel, 8),
			Item.of('tfg:double_mo_50_re_plate', 4),
			'2x #gtceu:circuits/hv',
			'4x gtceu:hv_fluid_regulator',
			'2x gtceu:power_thruster',
			ChemicalHelper.get(TagPrefix.rotor, GTMaterials.StainlessSteel, 1)
		)
		.inputFluids(Fluid.of('gtceu:blue_steel', 144 * 16))
		.itemOutputs('ad_astra:steel_engine')
		.duration(600)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true, true)

	event.recipes.gtceu.assembler('ad_astra:assembler_tier_1_rocket')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.plateDense, TFGHelpers.getMaterial('rocket_alloy_t1'), 16),
			'4x ad_astra:rocket_fin',
			'1x ad_astra:steel_engine',
			'1x ad_astra:rocket_nose_cone',
			'16x #forge:plates/basalt_fiber',
			'4x #gtceu:circuits/hv'
		)
		.inputFluids(Fluid.of('gtceu:silicon', 144 * 16))
		.itemOutputs('ad_astra:tier_1_rocket')
		.duration(1200)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true, true)
		
	event.recipes.gtceu.assembler('ad_astra:assembler_tier_1_double_rocket')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.plateDense, TFGHelpers.getMaterial('rocket_alloy_t1'), 24),
			'4x ad_astra:rocket_fin',
			'1x ad_astra:steel_engine',
			'1x ad_astra:rocket_nose_cone',
			'24x #forge:plates/basalt_fiber',
			'6x #gtceu:circuits/hv'
		)
		.inputFluids(Fluid.of('gtceu:silicon', 144 * 24))
		.itemOutputs('tfg:tier_1_double_rocket')
		.duration(1800)
		.circuit(3)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true, true)


	// Basalt Plating for Rocket

	event.recipes.gtceu.chemical_reactor(`tfg:dichloropropane`)
		.inputFluids(Fluid.of('gtceu:propene', 1000), Fluid.of('gtceu:chlorine', 2000))
		.outputFluids(Fluid.of('tfg:dichloropropane', 1000))
		.duration(20 * 12)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.chemical_reactor(`tfg:3_chloropropylamine`)
		.inputFluids(Fluid.of('tfg:dichloropropane', 1000), Fluid.of('gtceu:ammonia', 2000))
		.itemOutputs(Item.of('gtceu:ammonium_chloride_dust', 1))
		.outputFluids(Fluid.of('tfg:3_chloropropylamine', 1000))
		.duration(20 * 20)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor(`tfg:aminopropyl_chlorosilane`)
		.inputFluids(Fluid.of('tfg:3_chloropropylamine', 1000), Fluid.of('tfg:silicon_tetrachloride', 1000))
		.outputFluids(Fluid.of('tfg:aminopropyl_chlorosilane', 1000), Fluid.of('gtceu:hydrochloric_acid', 1000))
		.duration(20 * 24)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor(`tfg:3_aminopropyltriethoxysilane`)
		.inputFluids(Fluid.of('tfg:aminopropyl_chlorosilane', 1000), Fluid.of('gtceu:ethanol', 3000))
		.outputFluids(Fluid.of('tfg:3_aminopropyltriethoxysilane', 1000), Fluid.of('gtceu:hydrochloric_acid', 3000))
		.duration(20 * 32)
		.circuit(3)
		.EUt(GTValues.VA[GTValues.HV])
	
	event.recipes.gtceu.extruder('tfg:forge:fine_wires_basalt_fiber')
		.itemInputs(Item.of('tfc:brick/basalt'))
		.notConsumable(Item.of('gtceu:wire_extruder_mold'))
		.itemOutputs(Item.of('#forge:fine_wires/basalt_fiber', 8))
		.duration(20 * 8)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.chemical_bath(`tfg:foils_basalt_fiber`)
		.itemInputs(Item.of('#forge:fine_wires/basalt_fiber', 64))
		.inputFluids(Fluid.of('tfg:3_aminopropyltriethoxysilane', 500))
		.itemOutputs(Item.of('#forge:foils/basalt_fiber'))
		.duration(20 * 16)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.compressor(`tfg:3_aminopropyltriethoxysilane`)
		.itemInputs(Item.of('#forge:foils/basalt_fiber', 4))
		.itemOutputs(Item.of('#forge:plates/basalt_fiber'))
		.duration(20 * 48)
		.EUt(GTValues.VA[GTValues.MV])
	
	//#endregion


	//region tier 2 rocket

	event.remove({ mod: 'gtceu', input: 'gtceu:hot_rocket_alloy_t2_ingot' })

	event.recipes.gtceu.alloy_blast_smelter('gtceu:alloy_blast_smelter/rocket_alloy_t2')
		.itemInputs('19x #forge:dusts/titanium', '3x #forge:dusts/chromium', '3x #forge:dusts/tin', '3x #forge:dusts/aluminium')
		.inputFluids(Fluid.of('gtceu:vanadium', 144 * 4), Fluid.of('gtceu:distilled_water', 16000))
		.outputFluids(Fluid.of('gtceu:molten_rocket_alloy_t2', 144 * 32))
		.duration(1320 * 20)
		.circuit(2)
		.blastFurnaceTemp(3200)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.alloy_blast_smelter('gtceu:alloy_blast_smelter/rocket_alloy_t2_gas')
		.itemInputs('19x #forge:dusts/titanium', '3x #forge:dusts/chromium', '3x #forge:dusts/tin', '3x #forge:dusts/aluminium')
		.inputFluids(Fluid.of('gtceu:vanadium', 144 * 4), Fluid.of('gtceu:distilled_water', 16000), Fluid.of('gtceu:helium', 3200))
		.outputFluids(Fluid.of('gtceu:molten_rocket_alloy_t2', 144 * 32))
		.duration(17688)
		.circuit(12)
		.blastFurnaceTemp(3200)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.vacuum_freezer('tfg:vacuum_freezer/cool_molten_rocket_alloy_t2')
		.notConsumable('gtceu:ingot_casting_mold')
		.inputFluids(Fluid.of('gtceu:molten_rocket_alloy_t2', 144), Fluid.of('tfg:cryogenized_fluix', 288))
		.itemOutputs('#forge:ingots/rocket_alloy_t2')
		.duration(120)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.mixer('tfg:rocket_alloy_t2')
		.itemInputs('19x #forge:dusts/titanium', '3x #forge:dusts/chromium', '3x #forge:dusts/tin', '3x #forge:dusts/aluminium')
		.inputFluids(Fluid.of('gtceu:vanadium', 144 * 4))
		.itemOutputs('32x #forge:dusts/rocket_alloy_t2')
		.duration(15 * 20)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.vacuum_freezer('tfg:vacuum_freezer/cool_rocket_alloy_t2')
		.itemInputs('#forge:hot_ingots/rocket_alloy_t2')
		.inputFluids(Fluid.of('gtceu:distilled_water', 500), Fluid.of('tfg:cryogenized_fluix', 288))
		.itemOutputs('#forge:ingots/rocket_alloy_t2')
		.duration(120)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.assembler('tfg:rocket_fin_t2')
		.itemInputs('#forge:plates/rocket_alloy_t2',
			'#forge:double_plates/titanium')
		.itemOutputs('tfg:rocket_fin_t2')
		.duration(180)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('tfg:rocket_cone_t2')
		.itemInputs('gtceu:ev_emitter', '#forge:dense_plates/rocket_alloy_t2', '#forge:double_plates/titanium',
			'#forge:double_plates/desh')
		.itemOutputs('tfg:rocket_cone_t2')
		.duration(1440)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true)


	event.recipes.gtceu.assembler('tfg:rocket_desh_engine')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.plateDouble, GTMaterials.Titanium, 4),
			'2x #gtceu:circuits/ev',
			'4x gtceu:ev_fluid_regulator',
			'3x gtceu:advanced_power_thruster',
			ChemicalHelper.get(TagPrefix.rod, GTMaterials.NeodymiumMagnetic, 4),
			ChemicalHelper.get(TagPrefix.rotor, GTMaterials.Titanium, 1))
		.inputFluids(Fluid.of('gtceu:desh', 144 * 12))
		.itemOutputs('ad_astra:desh_engine')
		.duration(800)
		.circuit(3)
		.EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true, true)

	event.recipes.gtceu.assembler('ad_astra:tier_2_rocket')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.plateDense, TFGHelpers.getMaterial('rocket_alloy_t2'), 24),
			'4x tfg:rocket_fin_t2',
			'1x ad_astra:desh_engine',
			'1x tfg:rocket_cone_t2',
			'12x #forge:insulation_t2/roll',
			'4x #gtceu:circuits/ev'
		)
		.inputFluids(Fluid.of('gtceu:titanium', 144 * 16))
		.itemOutputs('ad_astra:tier_2_rocket')
		.duration(1440)
		.circuit(3)
		.EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true, true)
		
	event.recipes.gtceu.assembler('ad_astra:tier_2_double_rocket')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.plateDense, TFGHelpers.getMaterial('rocket_alloy_t2'), 32),
			'4x tfg:rocket_fin_t2',
			'1x ad_astra:desh_engine',
			'1x tfg:rocket_cone_t2',
			'18x #forge:insulation_t2/roll',
			'6x #gtceu:circuits/ev'
		)
		.inputFluids(Fluid.of('gtceu:titanium', 144 * 24))
		.itemOutputs('tfg:tier_2_double_rocket')
		.duration(2166)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true, true)

	//#endregion

	//region Tier 3 DISABLED UNTIL IV
	event.remove({ id: "gtceu:vacuum_freezer/cool_hot_rocket_alloy_t3_ingot" })
	event.remove({ id: "gtceu:vacuum_freezer/rocket_alloy_t3" })
	/*
	event.recipes.gtceu.vacuum_freezer('tfg:cool_rocket_alloy_t3')
		.inputFluids(Fluid.of('gtceu:molten_rocket_alloy_t3', 144), Fluid.of('gtceu:ice', 4000))
		.notConsumable('gtceu:ingot_casting_mold')
		.itemOutputs('#forge:ingots/rocket_alloy_t3')
		.duration(800)
		.EUt(GTValues.VA[GTValues.HV])
	event.recipes.gtceu.vacuum_freezer('tfg:cool_hot_rocket_alloy_t3')
		.itemInputs('#forge:hot_ingots/rocket_alloy_t3')
		.inputFluids(Fluid.of('gtceu:liquid_helium', 500))
		.itemOutputs('#forge:ingots/rocket_alloy_t3')
		.outputFluids(Fluid.of('gtceu:helium', 250))
		.duration(400)
		.EUt(GTValues.VA[GTValues.HV])
		
	//Add some unique cooling thing for molten ingots
	
	event.recipes.gtceu.assembler('tfg:rocket_fin_t3')
		.itemInputs('#forge:plates/rocket_alloy_t3', '#forge:double_plates/tungsten_steel')
		.itemOutputs('tfg:rocket_fin_t3')
		.duration(220)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true)
		
	event.recipes.gtceu.assembler('tfg:rocket_cone_t3')
		.itemInputs('gtceu:iv_emitter', '#forge:dense_plates/rocket_alloy_t3', '#forge:double_plates/tungsten_steel', 
					'#forge:double_plates/ostrum', 'gtceu:plutonium_nugget') //change this to the pellet
		.itemOutputs('tfg:rocket_cone_t3')
		.duration(1700)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true)
	
	event.recipes.gtceu.assembler('tfg:elite_power_thruster')
		.itemInputs('gtceu:ev_electric_motor', '2x #forge:rings/titanium', '#forge:rods/titanium',
					'gtceu:ultimet_rotor', '2x gtceu:aluminium_single_cable')
		.itemOutputs('tfg:elite_power_thruster')
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])
		.addMaterialInfo(true)
	
	event.recipes.gtceu.assembler('tfg:rocket_ostrum_engine')
		.itemInputs(
			'6x #forge:double_plates/tungsten_steel',
			'4x #gtceu:circuits/iv',
			'4x gtceu:iv_fluid_regulator',
			'3x tfg:elite_power_thruster',
			'4x #forge:insulation_t3/cryo',
			'6x #forge:rods/magnetic_neodymium',
			'#forge:rotors/tungsten_steel')
		.inputFluids(Fluid.of('gtceu:ostrum', 144 * 16))
		.itemOutputs('ad_astra:ostrum_engine')
		.duration(960)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true, true)
		
	event.recipes.gtceu.assembler('tfg:rocket_ostrum_tank')
		.itemInputs(
			'4x #forge:double_plates/rocket_alloy_t3',
			'4x gtceu:iv_fluid_regulator',
			'tfg:elite_power_thruster',
			'2x #forge:insulation_t3/cryo')
		.inputFluids(Fluid.of('gtceu:ostrum', 144 * 4))
		.itemOutputs('ad_astra:ostrum_tank')
		.duration(400)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true, true)
	
	event.recipes.gtceu.assembler('ad_astra:tier_3_rocket')
		.itemInputs(
			'16x #forge:dense_plates/rocket_alloy_t3',
			'4x tfg:rocket_fin_t3',
			'1x ad_astra:ostrum_engine',
			'2x ad_astra:ostrum_tank',
			'1x tfg:rocket_cone_t3',
			'8x #forge:insulation_t3/sheet'
		)
		.inputFluids(Fluid.of('gtceu:bromine', 1000 * 16))
		.itemOutputs('ad_astra:tier_3_rocket')
		.duration(1700)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true, true)
	
	event.recipes.gtceu.assembler('ad_astra:tier_3_double_rocket')
		.itemInputs(
			'24x #forge:dense_plates/rocket_alloy_t3',
			'4x tfg:rocket_fin_t3',
			'1x ad_astra:ostrum_engine',
			'2x ad_astra:ostrum_tank',
			'1x tfg:rocket_cone_t3',
			'12x #forge:insulation_t3/sheet'
		)
		.inputFluids(Fluid.of('gtceu:bromine', 1000 * 24))
		.itemOutputs('tfg:tier_3_double_rocket')
		.duration(2550)
		.circuit(5)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true, true)
	
	//#endregion
*/
}