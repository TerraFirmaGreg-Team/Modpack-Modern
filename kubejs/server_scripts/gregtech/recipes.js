// priority: 0
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerGTCEURecipes = (event) => {

	registerGTCEUMetalRecipes(event)
	registerGTCEURecyclingRecipes(event)
	registerGTCEuMachineRecipes(event)

	removeGTCEURecipes(event)


	// Drilling fluid from all stone dusts
	generateMixerRecipe(event, ['2x #tfg:stone_dusts'], ['gtceu:lubricant 20', "#tfg:clean_water 4000"],
		[], null, Fluid.of('gtceu:drilling_fluid', 5000), 40, 16, 64, 'drilling_fluid')

	//#region Quantum mainframe stack fix.
	//
	// Quantum Mainframes need 48x annealed copper wire but
	// the stacking limit is 32 so instead allow 24x 2x.
	//
	// Frustratingly event.replaceInput doesn't allow for
	// changing item counts, only types.
	event.remove(/gtceu:circuit_assembler\/quantum_mainframe_zpm.*/)
	event.recipes.gtceu.circuit_assembler('quantum_mainframe_zpm')
		.itemInputs(
			'2x gtceu:hssg_frame',
			'2x gtceu:quantum_processor_computer',
			'48x gtceu:smd_capacitor',
			'24x gtceu:smd_inductor',
			'24x gtceu:ram_chip',
			'24x gtceu:annealed_copper_double_wire')
		.inputFluids(Fluid.of('gtceu:tin', 576))
		.itemOutputs('gtceu:quantum_processor_mainframe')
		.duration(800)
		.EUt(7680)

	event.recipes.gtceu.circuit_assembler('quantum_mainframe_zpm_soldering_alloy')
		.itemInputs(
			'2x gtceu:hssg_frame',
			'2x gtceu:quantum_processor_computer',
			'48x gtceu:smd_capacitor',
			'24x gtceu:smd_inductor',
			'24x gtceu:ram_chip',
			'24x gtceu:annealed_copper_double_wire')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
		.itemOutputs('gtceu:quantum_processor_mainframe')
		.duration(800)
		.EUt(7680)

	event.recipes.gtceu.circuit_assembler('quantum_mainframe_zpm_asmd')
		.itemInputs(
			'2x gtceu:hssg_frame',
			'2x gtceu:quantum_processor_computer',
			'12x gtceu:advanced_smd_capacitor',
			'6x gtceu:advanced_smd_inductor',
			'24x gtceu:ram_chip',
			'24x gtceu:annealed_copper_double_wire')
		.inputFluids(Fluid.of('gtceu:tin', 576))
		.itemOutputs('gtceu:quantum_processor_mainframe')
		.duration(800)
		.EUt(7680)

	event.recipes.gtceu.circuit_assembler('quantum_mainframe_zpm_asmd_soldering_alloy')
		.itemInputs(
			'2x gtceu:hssg_frame',
			'2x gtceu:quantum_processor_computer',
			'12x gtceu:advanced_smd_capacitor',
			'6x gtceu:advanced_smd_inductor',
			'24x gtceu:ram_chip',
			'24x gtceu:annealed_copper_double_wire')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
		.itemOutputs('gtceu:quantum_processor_mainframe')
		.duration(800)
		.EUt(7680)
	//#endregion


	// #region Move MV superconductor to early HV instead of post-vac freezer

	event.remove({ id: 'gtceu:shaped/hv_chemical_bath' })
	event.shaped('gtceu:hv_chemical_bath', [
		'ABC',
		'DEA',
		'FGF'
	], {
		A: 'gtceu:hv_conveyor_module',
		B: 'gtceu:tempered_glass',
		C: 'gtceu:gold_single_cable',
		D: 'gtceu:hv_electric_pump',
		// swap one of the tempered glass for a PE pipe to ensure they've finished the plastic part of MV
		E: 'gtceu:polyethylene_normal_fluid_pipe',
		F: '#gtceu:circuits/hv',
		G: 'gtceu:hv_machine_hull'
	}).id('tfg:shaped/hv_chemical_bath')

	event.recipes.gtceu.chemical_bath('tfg:magnesium_diboride_cool_down_distilled_water')
		.itemInputs('gtceu:hot_magnesium_diboride_ingot')
		.inputFluids(Fluid.of('gtceu:distilled_water', 100))
		.itemOutputs('gtceu:magnesium_diboride_ingot')
		.duration(250)
		.EUt(480)

	event.recipes.gtceu.chemical_bath('tfg:magnesium_diboride_cool_down')
		.itemInputs('gtceu:hot_magnesium_diboride_ingot')
		.inputFluids(Fluid.of('minecraft:water', 100))
		.itemOutputs('gtceu:magnesium_diboride_ingot')
		.duration(400)
		.EUt(480)

	// #endregion

	//#region Voiding covers

	event.replaceInput({ id: 'gtceu:shaped/cover_fluid_voiding' },
		'minecraft:ender_pearl', 'ae2:ender_dust');

	event.replaceInput({ id: 'gtceu:assembler/cover_fluid_voiding' },
		'minecraft:ender_pearl', 'ae2:ender_dust');

	event.replaceInput({ id: 'gtceu:shaped/cover_item_voiding' },
		'minecraft:ender_pearl', 'ae2:ender_dust');

	event.replaceInput({ id: 'gtceu:assembler/cover_item_voiding' },
		'minecraft:ender_pearl', 'ae2:ender_dust');

	//#endregion


	event.replaceInput({ id: 'gtceu:shaped/nightvision_goggles' }, 'gtceu:glass_lens', 'tfc:lens')
	event.replaceInput({ id: 'gtceu:shaped/nightvision_goggles' }, 'gtceu:lv_sodium_battery', '#gtceu:batteries/lv')

	event.replaceInput({ id: 'gtceu:shaped/note_block' }, 'minecraft:iron_bars', '#tfg:metal_bars')
	event.replaceInput({ id: 'gtceu:shaped/note_block' }, 'gtceu:wood_plate', '#tfc:lumber')

	event.replaceInput({ mod: 'gtceu' }, 'minecraft:sugar', '#tfg:sugars')
	event.replaceInput({ mod: 'gtceu' }, 'minecraft:string', '#forge:string')

	event.replaceInput({ id: 'gtceu:shaped/blacklight' }, 'gtceu:tungsten_carbide_screw', '#tfg:components/uv_leds')


	// Fix Snow in Compressor

	event.remove({ id: 'gtceu:compressor/snowballs_to_snow' })
	event.recipes.gtceu.compressor('gtceu:compressor/snowballs_to_snow_fixed')
		.itemInputs('8x minecraft:snowball')
		.itemOutputs('minecraft:snow_block')
		.duration(20 * 10)
		.EUt(2)

	// Tape
	event.shaped('gtceu:basic_tape', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'minecraft:paper',
		B: 'tfc:glue'
	}).id('tfg:shaped/basic_tape_from_glue')

	event.recipes.gtceu.assembler('basic_tape_from_glue')
		.itemInputs('2x minecraft:paper', 'tfc:glue')
		.itemOutputs('2x gtceu:basic_tape')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])


	// GT Facades
	event.remove({ id: 'gtceu:crafting/facade_cover' })

	event.shapeless(Item.of('gtceu:facade_cover', 8, '{Facade: {Count:1b,id:"minecraft:stone"}}'), ['3x #forge:plates/iron', "#tfg:whitelisted/facades"])
		.modifyResult((craftingGrid, result) => {
			let blockID = craftingGrid.find(Ingredient.of("#tfg:whitelisted/facades")).id

			let facadeNBT = `{Facade: {Count:1b,id:` + `'${blockID}'` + `}}`
			result.nbt = facadeNBT
			return result;
		}).id('gtceu:facade_cover');

	event.shapeless(Item.of('gtceu:facade_cover', 32, '{Facade: {Count:1b,id:"minecraft:stone"}}'), ['3x #forge:plates/titanium', "#tfg:whitelisted/facades"])
		.modifyResult((craftingGrid, result) => {
			let blockID = craftingGrid.find(Ingredient.of("#tfg:whitelisted/facades")).id

			let facadeNBT = `{Facade: {Count:1b,id:` + `'${blockID}'` + `}}`
			result.nbt = facadeNBT
			return result;
		}).id('gtceu:facade_cover32');

	event.shapeless(Item.of('gtceu:facade_cover', 8, '{Facade: {Count:1b,id:"minecraft:stone"}}'), ['4x gtceu:facade_cover', "#tfg:whitelisted/facades", '4x gtceu:facade_cover'])
		.modifyResult((craftingGrid, result) => {
			let blockID = craftingGrid.find(Ingredient.of("#tfg:whitelisted/facades")).id

			let facadeNBT = `{Facade: {Count:1b,id:` + `'${blockID}'` + `}}`
			result.nbt = facadeNBT
			return result;
		}).id('gtceu:facade_cover_recycle');

	// Diamond gear
	event.recipes.gtceu.laser_engraver('tfg:diamond_gear')
		.itemInputs('4x #forge:plates/diamond')
		.itemOutputs('#forge:gears/diamond')
		.notConsumable('gtceu:glass_lens')
		.duration(200)
		.EUt(GTValues.VA[GTValues.MV])

	//#region Multiblock Tanks

	event.recipes.gtceu.assembler('tfg:assembler/wood_wall')
		.itemInputs('4x #forge:treated_wood', ChemicalHelper.get(TagPrefix.plate, GTMaterials.Copper, 1))
		.itemOutputs('gtceu:wood_wall')
		.circuit(4)
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('tfg:assembler/wooden_multiblock_tank')
		.itemInputs('gtceu:wood_wall', ChemicalHelper.get(TagPrefix.ring, GTMaterials.Copper, 2))
		.itemOutputs('gtceu:wooden_multiblock_tank')
		.circuit(4)
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('tfg:assembler/wooden_tank_valve')
		.itemInputs('gtceu:wood_wall', ChemicalHelper.get(TagPrefix.ring, GTMaterials.Copper, 1), ChemicalHelper.get(TagPrefix.rotor, GTMaterials.Copper, 1))
		.itemOutputs('gtceu:wooden_tank_valve')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('tfg:assembler/steel_multiblock_tank')
		.itemInputs('gtceu:solid_machine_casing', ChemicalHelper.get(TagPrefix.ring, GTMaterials.Steel, 2))
		.itemOutputs('gtceu:steel_multiblock_tank')
		.circuit(4)
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('tfg:assembler/steel_tank_valve')
		.itemInputs('gtceu:solid_machine_casing', ChemicalHelper.get(TagPrefix.ring, GTMaterials.Steel, 1), ChemicalHelper.get(TagPrefix.rotor, GTMaterials.Steel, 1))
		.itemOutputs('gtceu:steel_tank_valve')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

	//#endregion

	//#region Circuit Fixes

	global.ADD_CIRCUIT.forEach(item => {
		addCircuitToRecipe(event, item.recipeId, item.circuitNumber)
	})

	//#endregion

	// Matches

	event.shapeless('4x gtceu:matches', ['#forge:dusts/phosphorus', 'tfc:glue', '4x #forge:bolts/wood'])
		.id('tfg:shapeless/phosphorus_matches')

	event.shapeless('4x gtceu:matches', ['#forge:dusts/tricalcium_phosphate', 'tfc:glue', '4x #forge:bolts/wood'])
		.id('tfg:shapeless/tricalcium_phosphate_matches')

	event.shapeless(Item.of('gtceu:matchbox', '{usesLeft:8}'), ['minecraft:paper', '8x gtceu:matches'])
		.id('tfg:shapeless/matchbox')

	event.recipes.gtceu.implosion_compressor('tfg:dense_lead_plate')
		.itemInputs('16x #forge:ingots/lead', '16x #forge:ingots/lead', '6x #forge:ingots/lead')
		.itemInputs('gtceu:industrial_tnt')
		.itemOutputs('4x #forge:dense_plates/lead')
		.duration(20 * 1)
		.EUt(GTValues.VA[GTValues.LV])
	
	// Remove Plutonium from centrifuging Uranium dust
	
	event.remove({ id: 'gtceu:centrifuge/uranium_238_separation' })
	
	event.recipes.gtceu.centrifuge('tfg:uranium_238_separation')
		.itemInputs('#forge:dusts/uranium')
		.chancedOutput('#forge:tiny_dusts/uranium_235', 2300, 0)
		.duration(20*40)
		.EUt(GTValues.VA[GTValues.HV])
	
	// Change the Large Centrifugal Unit to be craftable at EV

	event.remove({ id: 'gtceu:shaped/large_centrifuge' })

	event.shaped('gtceu:large_centrifuge', [
		'EFE',
		'ADA',
		'BCB'
	], {
		A: '#gtceu:circuits/ev',
		B: 'gtceu:ev_electric_motor',
		C: 'gtceu:aluminium_single_cable',
		D: 'gtceu:ev_centrifuge',
		E: 'gtceu:molybdenum_disilicide_spring',
		F: 'gtceu:stainless_steel_huge_fluid_pipe'
	}).id('tfg:shaped/large_centrifuge')

	// ME Pattern Buffer
	event.remove({ id: 'gtceu:assembly_line/me_pattern_buffer_proxy' })
	event.recipes.gtceu.assembly_line('tfg:me_pattern_buffer_proxy')
		.itemInputs(
			'gtceu:luv_machine_hull',
			'2x gtceu:luv_sensor',
			'#gtceu:circuits/luv',
			'gtceu:fusion_glass',
			'2x ae2:quantum_ring',
			// tom insists on keeping this jank, it feels like a bug to me but apparently it's "intended base gt behaviour"
			'32x gtceu:fine_europium_wire',
			'32x gtceu:fine_europium_wire',
			'16x megacells:accumulation_processor')
		.inputFluids(Fluid.of('gtceu:lubricant', 500))
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144 * 4))
		.stationResearch(b => b.researchStack(Item.of('gtceu:me_pattern_buffer')).EUt(GTValues.VA[GTValues.LuV]).CWUt(32))
		.itemOutputs('gtceu:me_pattern_buffer_proxy')
		.duration(30 * 20)
		.EUt(GTValues.VA[GTValues.ZPM])

	event.replaceInput({ id: 'gtceu:assembly_line/me_pattern_buffer' }, 'ae2:pattern_provider', '3x expatternprovider:ex_pattern_provider')
	event.replaceInput({ id: 'gtceu:assembly_line/me_pattern_buffer' }, 'ae2:interface', '3x expatternprovider:oversize_interface')


	// Modify Rotor Holder to require an Assembler

	event.remove({ id: 'gtceu:shaped/rotor_holder_hv' })
	event.remove({ id: 'gtceu:shaped/rotor_holder_ev' })
	event.remove({ id: 'gtceu:shaped/rotor_holder_iv' })
	event.remove({ id: 'gtceu:shaped/rotor_holder_luv' })
	event.remove({ id: 'gtceu:shaped/rotor_holder_zpm' })
	event.remove({ id: 'gtceu:shaped/rotor_holder_uv' })

	event.recipes.gtceu.assembler('tfg:rotor_holder_hv')
		.itemInputs('4x #forge:gears/black_steel', '4x #forge:small_gears/stainless_steel', 'gtceu:hv_machine_hull')
		.itemOutputs('gtceu:hv_rotor_holder')
		.duration(20 * 6)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.assembler('tfg:rotor_holder_ev')
		.itemInputs('4x #forge:gears/ultimet', '4x #forge:small_gears/titanium', 'gtceu:ev_machine_hull')
		.itemOutputs('gtceu:ev_rotor_holder')
		.duration(20 * 6)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.assembler('tfg:rotor_holder_iv')
		.itemInputs('4x #forge:gears/hssg', '4x #forge:small_gears/tungsten_steel', 'gtceu:iv_machine_hull')
		.itemOutputs('gtceu:iv_rotor_holder')
		.duration(20 * 6)
		.EUt(GTValues.VA[GTValues.IV])

	event.recipes.gtceu.assembler('tfg:rotor_holder_luv')
		.itemInputs('4x #forge:gears/ruthenium', '4x #forge:small_gears/rhodium_plated_palladium', 'gtceu:luv_machine_hull')
		.itemOutputs('gtceu:luv_rotor_holder')
		.duration(20 * 6)
		.EUt(GTValues.VA[GTValues.LuV])

	event.recipes.gtceu.assembler('tfg:rotor_holder_zpm')
		.itemInputs('4x #forge:gears/trinium', '4x #forge:small_gears/naquadah_alloy', 'gtceu:zpm_machine_hull')
		.itemOutputs('gtceu:zpm_rotor_holder')
		.duration(20 * 6)
		.EUt(GTValues.VA[GTValues.ZPM])

	event.recipes.gtceu.assembler('tfg:rotor_holder_uv')
		.itemInputs('4x #forge:gears/tritanium', '4x #forge:small_gears/darmstadtium', 'gtceu:uv_machine_hull')
		.itemOutputs('gtceu:uv_rotor_holder')
		.duration(20 * 6)
		.EUt(GTValues.VA[GTValues.UV])


	event.replaceInput( {output: 'gtceu:nano_saber'}, 'gtceu:ruridit_plate', '#forge:plates/ostrum_iodide' )

}
