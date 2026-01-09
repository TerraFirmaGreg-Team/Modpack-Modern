"use strict";

const registerExtendedAE2Recipes = (event) => {

	event.remove({
		not: [
			{ id: 'expatternprovider:epp_part' },
			{ id: 'expatternprovider:ei_part' },
			{ id: 'expatternprovider:epp_alt' },
			{ id: 'expatternprovider:ei_alt' },
			{ id: 'expatternprovider:oversize_interface_alt' },
			{ id: 'expatternprovider:oversize_interface_part' },
		], mod: 'expatternprovider'
	});


	//#region Ext Interface

	// IV

	event.recipes.gtceu.assembler('tfg:ex_interface_iv')
		.itemInputs(
			'gtceu:iv_conveyor_module',
			'8x gtceu:laminated_glass',
			'4x #forge:plates/tungsten_steel',
			'4x ae2:annihilation_core',
			'4x ae2:formation_core',
			'2x megacells:accumulation_processor',
			'2x #ae2:interface')
		.inputFluids(Fluid.of('tfg:fluix', 144 * 8))
		.itemOutputs('expatternprovider:ex_interface')
		.duration(300)
		.EUt(GTValues.VA[GTValues.IV])
		.cleanroom(CleanroomType.CLEANROOM)
		.circuit(1)

	// IV Moon Only

	event.recipes.gtceu.assembler('tfg:ex_interface_iv_moon')
		.itemInputs(
			'gtceu:iv_conveyor_module',
			'8x gtceu:laminated_glass',
			'4x #forge:plates/tungsten_steel',
			'4x ae2:annihilation_core',
			'4x ae2:formation_core',
			'2x megacells:accumulation_processor',
			'2x #ae2:interface')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144 * 8))
		.itemOutputs('2x expatternprovider:ex_interface')
		.duration(300)
		.EUt(GTValues.VA[GTValues.IV])
		.dimension('ad_astra:moon')
		.circuit(1)

	// ZPM

	event.recipes.gtceu.assembler('tfg:ex_interface_zpm')
		.itemInputs(
			'gtceu:zpm_conveyor_module',
			'8x gtceu:laminated_glass',
			'4x #forge:plates/naquadah_alloy',
			'16x ae2:annihilation_core',
			'16x ae2:formation_core',
			'8x megacells:accumulation_processor',
			'16x #ae2:interface')
		.inputFluids(Fluid.of('tfg:fluix', 144 * 32))
		.itemOutputs('16x expatternprovider:ex_interface')
		.duration(300)
		.EUt(GTValues.VA[GTValues.ZPM])
		.cleanroom(CleanroomType.CLEANROOM)
		.circuit(1)

	// ZPM Moon Only

	event.recipes.gtceu.assembler('tfg:ex_interface_zpm_moon')
		.itemInputs(
			'gtceu:zpm_conveyor_module',
			'8x gtceu:laminated_glass',
			'4x #forge:plates/naquadah_alloy',
			'16x ae2:annihilation_core',
			'16x ae2:formation_core',
			'8x megacells:accumulation_processor',
			'16x #ae2:interface')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144 * 32))
		.itemOutputs('32x expatternprovider:ex_interface')
		.duration(300)
		.EUt(GTValues.VA[GTValues.ZPM])
		.dimension('ad_astra:moon')
		.circuit(1)

	// Interface Upgrade

	// IV

	event.recipes.gtceu.assembler('expatternprovider:interface_upgrade_iv')
		.itemInputs(
			'gtceu:iv_conveyor_module',
			'8x gtceu:laminated_glass',
			'4x #forge:plates/tungsten_steel',
			'4x ae2:annihilation_core',
			'4x ae2:formation_core',
			'2x megacells:accumulation_processor',
			'1x #ae2:interface')
		.inputFluids(Fluid.of('tfg:fluix', 144 * 8))
		.itemOutputs('expatternprovider:interface_upgrade')
		.duration(300)
		.EUt(GTValues.VA[GTValues.IV])
		.cleanroom(CleanroomType.CLEANROOM)
		.circuit(2)

	// IV Moon Only

	event.recipes.gtceu.assembler('expatternprovider:interface_upgrade_iv_moon')
		.itemInputs(
			'gtceu:iv_conveyor_module',
			'8x gtceu:laminated_glass',
			'4x #forge:plates/tungsten_steel',
			'4x ae2:annihilation_core',
			'4x ae2:formation_core',
			'2x megacells:accumulation_processor')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144 * 8))
		.itemOutputs('2x expatternprovider:interface_upgrade')
		.duration(300)
		.EUt(GTValues.VA[GTValues.IV])
		.dimension('ad_astra:moon')
		.circuit(2)

	// ZPM

	event.recipes.gtceu.assembler('expatternprovider:interface_upgrade_zpm')
		.itemInputs(
			'gtceu:zpm_conveyor_module',
			'8x gtceu:laminated_glass',
			'4x #forge:plates/naquadah_alloy',
			'16x ae2:annihilation_core',
			'16x ae2:formation_core',
			'8x megacells:accumulation_processor',
			'8x #ae2:interface')
		.inputFluids(Fluid.of('tfg:fluix', 144 * 32))
		.itemOutputs('16x expatternprovider:interface_upgrade')
		.duration(300)
		.EUt(GTValues.VA[GTValues.ZPM])
		.cleanroom(CleanroomType.CLEANROOM)
		.circuit(2)

	// ZPM Moon Only

	event.recipes.gtceu.assembler('expatternprovider:interface_upgrade_zpm_moon')
		.itemInputs(
			'gtceu:zpm_conveyor_module',
			'8x gtceu:laminated_glass',
			'4x #forge:plates/naquadah_alloy',
			'16x ae2:annihilation_core',
			'16x ae2:formation_core',
			'8x megacells:accumulation_processor')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144 * 32))
		.itemOutputs('32x expatternprovider:interface_upgrade')
		.duration(300)
		.EUt(GTValues.VA[GTValues.ZPM])
		.dimension('ad_astra:moon')
		.circuit(2)

	//#endregion

	//#region Oversized Interface

	// IV

	event.recipes.gtceu.assembly_line('expatternprovider:oversize_interface_iv')
		.itemInputs(
			'4x #expatternprovider:extended_interface',
			'4x megacells:accumulation_processor',
			'gtceu:iv_robot_arm',
			'gtceu:iv_fluid_regulator',
			'4x #forge:dense_plates/tungsten_steel',
			'#gtceu:circuits/luv')
		.inputFluids(Fluid.of('tfg:fluix', 144 * 9))
		.itemOutputs("expatternprovider:oversize_interface")
		.duration(300)
		.EUt(GTValues.VA[GTValues.IV])
		.cleanroom(CleanroomType.CLEANROOM)

	// IV Moon

	event.recipes.gtceu.assembly_line('expatternprovider:oversize_interface_iv_moon')
		.itemInputs(
			'4x #expatternprovider:extended_interface',
			'4x megacells:accumulation_processor',
			'gtceu:iv_robot_arm',
			'gtceu:iv_fluid_regulator',
			'4x #forge:dense_plates/tungsten_steel',
			'#gtceu:circuits/luv')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144 * 9))
		.itemOutputs("4x expatternprovider:oversize_interface")
		.duration(300)
		.EUt(GTValues.VA[GTValues.IV])
		.dimension('ad_astra:moon')

	// ZPM

	event.recipes.gtceu.assembly_line('expatternprovider:oversize_interface_zpm')
		.itemInputs(
			'8x #expatternprovider:extended_interface',
			'4x megacells:accumulation_processor',
			'gtceu:zpm_robot_arm',
			'gtceu:zpm_fluid_regulator',
			'4x #forge:dense_plates/naquadah_alloy',
			'#gtceu:circuits/uv')
		.inputFluids(Fluid.of('tfg:fluix', 144 * 18))
		.itemOutputs("8x expatternprovider:oversize_interface")
		.duration(300)
		.EUt(GTValues.VA[GTValues.ZPM])
		.cleanroom(CleanroomType.CLEANROOM)

	// ZPM Moon

	event.recipes.gtceu.assembly_line('expatternprovider:oversize_interface_zpm_moon')
		.itemInputs(
			'8x #expatternprovider:extended_interface',
			'4x megacells:accumulation_processor',
			'gtceu:zpm_robot_arm',
			'gtceu:zpm_fluid_regulator',
			'4x #forge:dense_plates/naquadah_alloy',
			'#gtceu:circuits/uv')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144 * 18))
		.itemOutputs("16x expatternprovider:oversize_interface")
		.duration(300)
		.EUt(GTValues.VA[GTValues.ZPM])
		.dimension('ad_astra:moon')

	//#endregion

	//#region Ext Pattern Provider

	// IV

	event.recipes.gtceu.assembler('tfg:ex_pattern_provider_iv')
		.itemInputs(
			'gtceu:iv_robot_arm',
			'8x gtceu:laminated_glass',
			'4x #forge:plates/tungsten_steel',
			'4x ae2:annihilation_core',
			'4x ae2:formation_core',
			'2x megacells:accumulation_processor',
			'2x #ae2:pattern_provider')
		.inputFluids(Fluid.of('tfg:fluix', 144 * 8))
		.itemOutputs('expatternprovider:ex_pattern_provider')
		.duration(300)
		.EUt(GTValues.VA[GTValues.IV])
		.cleanroom(CleanroomType.CLEANROOM)
		.circuit(1)

	// IV Moon Only

	event.recipes.gtceu.assembler('tfg:ex_pattern_provider_iv_moon')
		.itemInputs(
			'gtceu:iv_robot_arm',
			'8x gtceu:laminated_glass',
			'4x #forge:plates/tungsten_steel',
			'4x ae2:annihilation_core',
			'4x ae2:formation_core',
			'2x megacells:accumulation_processor',
			'2x #ae2:pattern_provider')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144 * 8))
		.itemOutputs('2x expatternprovider:ex_pattern_provider')
		.duration(300)
		.EUt(GTValues.VA[GTValues.IV])
		.dimension('ad_astra:moon')
		.circuit(1)

	// ZPM

	event.recipes.gtceu.assembler('tfg:ex_pattern_provider_zpm')
		.itemInputs(
			'gtceu:zpm_robot_arm',
			'8x gtceu:laminated_glass',
			'4x #forge:plates/naquadah_alloy',
			'16x ae2:annihilation_core',
			'16x ae2:formation_core',
			'8x megacells:accumulation_processor',
			'16x #ae2:pattern_provider')
		.inputFluids(Fluid.of('tfg:fluix', 144 * 32))
		.itemOutputs('16x expatternprovider:ex_pattern_provider')
		.duration(300)
		.EUt(GTValues.VA[GTValues.ZPM])
		.cleanroom(CleanroomType.CLEANROOM)
		.circuit(1)

	// ZPM Moon Only

	event.recipes.gtceu.assembler('tfg:ex_pattern_provider_zpm_moon')
		.itemInputs(
			'gtceu:zpm_robot_arm',
			'8x gtceu:laminated_glass',
			'4x #forge:plates/naquadah_alloy',
			'16x ae2:annihilation_core',
			'16x ae2:formation_core',
			'8x megacells:accumulation_processor',
			'16x #ae2:pattern_provider')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144 * 32))
		.itemOutputs('32x expatternprovider:ex_pattern_provider')
		.duration(300)
		.EUt(GTValues.VA[GTValues.ZPM])
		.dimension('ad_astra:moon')
		.circuit(1)

	// Pattern Provider Upgrade

	// IV

	event.recipes.gtceu.assembler('expatternprovider:pattern_provider_upgrade_iv')
		.itemInputs(
			'gtceu:iv_robot_arm',
			'8x gtceu:laminated_glass',
			'4x #forge:plates/tungsten_steel',
			'4x ae2:annihilation_core',
			'4x ae2:formation_core',
			'2x megacells:accumulation_processor',
			'1x #ae2:pattern_provider')
		.inputFluids(Fluid.of('tfg:fluix', 144 * 8))
		.itemOutputs('expatternprovider:pattern_provider_upgrade')
		.duration(300)
		.EUt(GTValues.VA[GTValues.IV])
		.cleanroom(CleanroomType.CLEANROOM)
		.circuit(2)

	// IV Moon Only

	event.recipes.gtceu.assembler('expatternprovider:pattern_provider_upgrade_iv_moon')
		.itemInputs(
			'gtceu:iv_robot_arm',
			'8x gtceu:laminated_glass',
			'4x #forge:plates/tungsten_steel',
			'4x ae2:annihilation_core',
			'4x ae2:formation_core',
			'2x megacells:accumulation_processor')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144 * 8))
		.itemOutputs('2x expatternprovider:pattern_provider_upgrade')
		.duration(300)
		.EUt(GTValues.VA[GTValues.IV])
		.dimension('ad_astra:moon')
		.circuit(2)

	// ZPM

	event.recipes.gtceu.assembler('expatternprovider:pattern_provider_upgrade_zpm')
		.itemInputs(
			'gtceu:zpm_robot_arm',
			'8x gtceu:laminated_glass',
			'4x #forge:plates/naquadah_alloy',
			'16x ae2:annihilation_core',
			'16x ae2:formation_core',
			'8x megacells:accumulation_processor',
			'8x #ae2:pattern_provider')
		.inputFluids(Fluid.of('tfg:fluix', 144 * 32))
		.itemOutputs('16x expatternprovider:pattern_provider_upgrade')
		.duration(300)
		.EUt(GTValues.VA[GTValues.ZPM])
		.cleanroom(CleanroomType.CLEANROOM)
		.circuit(2)

	// ZPM Moon Only

	event.recipes.gtceu.assembler('expatternprovider:pattern_provider_upgrade_zpm_moon')
		.itemInputs(
			'gtceu:zpm_robot_arm',
			'8x gtceu:laminated_glass',
			'4x #forge:plates/naquadah_alloy',
			'16x ae2:annihilation_core',
			'16x ae2:formation_core',
			'8x megacells:accumulation_processor')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144 * 32))
		.itemOutputs('32x expatternprovider:pattern_provider_upgrade')
		.duration(300)
		.EUt(GTValues.VA[GTValues.ZPM])
		.dimension('ad_astra:moon')
		.circuit(2)

	//#endregion

	//#region bus

	//ex import bus part
	event.recipes.gtceu.assembler('expatternprovider:ex_import_bus_part')
		.itemInputs(
			'1x #forge:plates/stainless_steel',
			'2x ae2:annihilation_core',
			'2x gtceu:hv_robot_arm',
			'1x megacells:accumulation_processor')
		.inputFluids(Fluid.of('gtceu:polyvinyl_chloride', 144))
		.itemOutputs('expatternprovider:ex_import_bus_part')
		.circuit(2)
		.duration(200)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true, true)

	//ex export bus part
	event.recipes.gtceu.assembler('expatternprovider:ex_export_bus_part')
		.itemInputs(
			'1x #forge:plates/stainless_steel',
			'2x ae2:formation_core',
			'2x gtceu:hv_robot_arm',
			'1x megacells:accumulation_processor')
		.inputFluids(Fluid.of('gtceu:polyvinyl_chloride', 144))
		.itemOutputs('expatternprovider:ex_export_bus_part')
		.circuit(3)
		.duration(200)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true, true)

	//tag export bus
	event.recipes.gtceu.assembler('expatternprovider:tag_export_bus')
		.itemInputs(
			'ae2:export_bus',
			'2x ae2:logic_processor',
			'#gtceu:circuits/ulv')
		.itemOutputs('expatternprovider:tag_export_bus')
		.duration(100)
		.EUt(480)
		.addMaterialInfo(true)

	//tag storage bus
	event.recipes.gtceu.assembler('expatternprovider:tag_storage_bus')
		.itemInputs(
			'ae2:storage_bus',
			'2x ae2:logic_processor',
			'#gtceu:circuits/ulv')
		.itemOutputs('expatternprovider:tag_storage_bus')
		.duration(100)
		.EUt(480)
		.addMaterialInfo(true)

	//mod export bus
	event.recipes.gtceu.assembler('expatternprovider:mod_export_bus')
		.itemInputs(
			'ae2:export_bus',
			'2x ae2:calculation_processor',
			'#gtceu:circuits/ulv')
		.itemOutputs('expatternprovider:mod_export_bus')
		.duration(100)
		.EUt(480)
		.addMaterialInfo(true)

	//mod storage bus
	event.recipes.gtceu.assembler('expatternprovider:mod_storage_bus')
		.itemInputs(
			'ae2:storage_bus',
			'2x ae2:calculation_processor',
			'#gtceu:circuits/ulv')
		.itemOutputs('expatternprovider:mod_storage_bus')
		.duration(100)
		.EUt(480)
		.addMaterialInfo(true)

	//precise export bus
	event.recipes.gtceu.assembler('expatternprovider:precise_export_bus')
		.itemInputs(
			'ae2:export_bus',
			'2x ae2:engineering_processor',
			'#gtceu:circuits/ulv')
		.itemOutputs('expatternprovider:precise_export_bus')
		.duration(100)
		.EUt(480)
		.addMaterialInfo(true)

	//precise storage bus
	event.recipes.gtceu.assembler('expatternprovider:precise_storage_bus')
		.itemInputs(
			'ae2:storage_bus',
			'2x ae2:engineering_processor',
			'#gtceu:circuits/ulv')
		.itemOutputs('expatternprovider:precise_storage_bus')
		.duration(100)
		.EUt(480)
		.addMaterialInfo(true)

	//threshold export bus
	event.recipes.gtceu.assembler('expatternprovider:threshold_export_bus')
		.itemInputs(
			'ae2:export_bus',
			'2x ae2:logic_processor',
			'ae2:level_emitter')
		.itemOutputs('expatternprovider:threshold_export_bus')
		.duration(100)
		.EUt(480)
		.addMaterialInfo(true)

	//#endregion

	//active formation plane
	event.recipes.gtceu.assembler('expatternprovider:active_formation_plane')
		.itemInputs(
			'ae2:formation_plane',
			'ae2:export_bus',
			'2x ae2:engineering_processor')
		.itemOutputs('expatternprovider:active_formation_plane')
		.duration(100)
		.EUt(480)
		.addMaterialInfo(true)

	//pattern modifier
	event.recipes.gtceu.assembler('expatternprovider:pattern_modifier')
		.itemInputs(
			'ae2:blank_pattern',
			'ae2:logic_processor')
		.inputFluids(Fluid.of('tfc:green_dye', 144))
		.itemOutputs('expatternprovider:pattern_modifier')
		.duration(100)
		.EUt(480)
		.addMaterialInfo(true)

	//threshold level emitter
	event.recipes.gtceu.assembler('expatternprovider:threshold_level_emitter')
		.itemInputs(
			'ae2:level_emitter',
			'2x minecraft:redstone_torch',
			'2x ae2:calculation_processor')
		.itemOutputs('expatternprovider:threshold_level_emitter')
		.duration(100)
		.EUt(480)
		.addMaterialInfo(true)

	//wireless tool
	event.recipes.gtceu.assembler('expatternprovider:wireless_tool')
		.itemInputs(
			'3x #forge:plates/steel',
			'#gtceu:circuits/ev',
			'2x gtceu:ev_emitter',
			'2x ae2:wireless_receiver',
			'ae2:calculation_processor')
		.itemOutputs('expatternprovider:wireless_tool')
		.duration(100)
		.EUt(1920)

	//wireless tool
	event.recipes.gtceu.assembler('expatternprovider:wireless_connect')
		.itemInputs(
			'2x gtceu:iv_machine_casing',
			'4x #gtceu:circuits/iv',
			'8x ae2:wireless_receiver',
			'4x gtceu:iv_emitter',
			'4x gtceu:iv_sensor',
			'8x ae2:engineering_processor',
			'4x megacells:accumulation_processor')
		.itemOutputs('2x expatternprovider:wireless_connect')
		.duration(200)
		.EUt(7580)
		.addMaterialInfo(true)

	//me packing tape
	event.recipes.gtceu.assembler('expatternprovider:me_packing_tape')
		.itemInputs(
			'4x #forge:dusts/fluix',
			'2x #forge:plates/paper')
		.inputFluids(Fluid.of('gtceu:glue', 144))
		.itemOutputs(Item.of('expatternprovider:me_packing_tape', '{Damage:0}'))
		.duration(100)
		.EUt(GTValues.VA[GTValues.MV])

	//ex pattern access
	event.recipes.gtceu.assembler('expatternprovider:ex_pattern_access_part')
		.itemInputs(
			'ae2:pattern_access_terminal',
			'4x ae2:logic_processor',
			'2x megacells:accumulation_processor')
		.itemOutputs('expatternprovider:ex_pattern_access_part')
		.duration(100)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.assembler('expatternprovider:pattern_terminal_upgrade')
		.itemInputs(
			'4x ae2:logic_processor',
			'2x megacells:accumulation_processor')
		.itemOutputs('expatternprovider:pattern_terminal_upgrade')
		.duration(100)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.EV])

	// Wireless Crafting Terminal
	event.recipes.gtceu.assembler('expatternprovider:wireless_ex_pat')
		.itemInputs(
			'2x gtceu:hv_lithium_battery',
			'2x gtceu:iv_sensor',
			'gtceu:iv_emitter',
			'2x #forge:rods/iridium',
			'ae2:wireless_terminal',
			'expatternprovider:ex_pattern_access_part')
		.itemOutputs('expatternprovider:wireless_ex_pat')
		.duration(30)
		.EUt(GTValues.VA[GTValues.IV])

	event.shapeless('ae2wtlib:wireless_universal_terminal', ['expatternprovider:wireless_ex_pat', 'ae2wtlib:wireless_universal_terminal'])
		.modifyResult((grid, result) => {
			let orig = grid.find(Item.of('ae2wtlib:wireless_universal_terminal').ignoreNBT())
			result = result.withNBT(orig.nbt);

			if (orig.nbt == null) {
				result.nbt = { ex_pattern_access: true };
			}
			else {
				result.nbt.put('ex_pattern_access', true);
			}

			return result;
		})

	//#region ex molecular assembler

	// IV
	event.recipes.gtceu.assembler('expatternprovider:ex_molecular_assembler_iv')
		.itemInputs(
			'2x #gtceu:circuits/iv',
			'8x gtceu:cleanroom_glass',
			'4x ae2:annihilation_core',
			'4x ae2:formation_core',
			'2x gtceu:iv_robot_arm',
			'ae2:molecular_assembler')
		.inputFluids(Fluid.of('tfg:fluix', 144 * 4))
		.itemOutputs('expatternprovider:ex_molecular_assembler')
		.duration(200)
		.EUt(GTValues.VA[GTValues.IV])
		.cleanroom(CleanroomType.CLEANROOM)

	// LuV Moon
	event.recipes.gtceu.assembler('expatternprovider:ex_molecular_assembler_luv')
		.itemInputs(
			'2x #gtceu:circuits/luv',
			'8x gtceu:cleanroom_glass',
			'4x ae2:annihilation_core',
			'4x ae2:formation_core',
			'2x gtceu:luv_robot_arm',
			'2x ae2:molecular_assembler')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144 * 4))
		.itemOutputs('4x expatternprovider:ex_molecular_assembler')
		.duration(200)
		.EUt(GTValues.VA[GTValues.LuV])
		.dimension('ad_astra:moon')

	// ZPM
	event.recipes.gtceu.assembler('expatternprovider:ex_molecular_assembler_zpm')
		.itemInputs(
			'2x #gtceu:circuits/zpm',
			'8x gtceu:cleanroom_glass',
			'4x ae2:annihilation_core',
			'4x ae2:formation_core',
			'2x gtceu:zpm_robot_arm',
			'4x ae2:molecular_assembler')
		.inputFluids(Fluid.of('tfg:fluix', 144 * 16))
		.itemOutputs('8x expatternprovider:ex_molecular_assembler')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ZPM])
		.cleanroom(CleanroomType.CLEANROOM)

	//#endregion

	//ex io port
	event.recipes.gtceu.assembler('expatternprovider:ex_io_port')
		.itemInputs(
			'gtceu:ev_machine_casing',
			'ae2:io_port',
			'2x megacells:accumulation_processor',
			'4x ae2:logic_processor',
			'4x ae2:engineering_processor',
			'4x ae2:speed_card')
		.itemOutputs('expatternprovider:ex_io_port')
		.duration(200)
		.EUt(1000)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('expatternprovider:ex_drive')
		.itemInputs(
			'gtceu:ev_machine_casing',
			'ae2:drive',
			'2x megacells:accumulation_processor',
			'4x ae2:logic_processor',
			'4x ae2:engineering_processor',
			'2x ae2:capacity_card')
		.itemOutputs('expatternprovider:ex_drive')
		.duration(200)
		.EUt(1920)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('expatternprovider:drive_upgrade')
		.itemInputs(
			'gtceu:ev_machine_casing',
			'2x megacells:accumulation_processor',
			'4x ae2:logic_processor',
			'4x ae2:engineering_processor',
			'2x ae2:capacity_card')
		.itemOutputs('expatternprovider:drive_upgrade')
		.duration(200)
		.circuit(2)
		.EUt(1920)

	event.recipes.gtceu.assembler('expatternprovider:ingredient_buffer')
		.itemInputs('gtceu:hv_buffer', 'ae2:cell_component_1k')
		.itemOutputs('expatternprovider:ingredient_buffer')
		.duration(200)
		.EUt(1920)
		.addMaterialInfo(true)

	//#endregion

	//#region Matrix

	//Frame

	event.recipes.gtceu.assembly_line('expatternprovider:assembler_matrix_frame')
		.itemInputs(
			'4x gtceu:plascrete',
			'4x gtceu:luv_machine_casing',
			'1x #gtceu:circuits/iv',
			'4x ae2:logic_processor',
			'4x megacells:accumulation_processor',
			'16x #forge:rods/niobium_nitride',
			'1x expatternprovider:ex_molecular_assembler')
		.inputFluids(
			Fluid.of("gtceu:concrete", 144 * 8),
			Fluid.of('tfg:fluix', 144 * 16))
		.itemOutputs('expatternprovider:assembler_matrix_frame')
		.duration(2000)
		.EUt(GTValues.VA[GTValues.LuV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.assembly_line('expatternprovider:assembler_matrix_frame_moon')
		.itemInputs(
			'8x gtceu:plascrete',
			'8x gtceu:iv_machine_casing',
			'1x #gtceu:circuits/iv',
			'4x ae2:logic_processor',
			'4x megacells:accumulation_processor',
			'16x #forge:rods/niobium_nitride',
			'4x expatternprovider:ex_molecular_assembler')
		.inputFluids(
			Fluid.of('gtceu:concrete', 144 * 8),
			Fluid.of('tfg:cryogenized_fluix', 144 * 16))
		.itemOutputs('8x expatternprovider:assembler_matrix_frame')
		.duration(2000)
		.EUt(GTValues.VA[GTValues.IV])
		.dimension('ad_astra:moon')

	//Matrix Wall

	event.recipes.gtceu.assembler('expatternprovider:assembler_matrix_wall_luv')
		.itemInputs(
			'#forge:frames/polytetrafluoroethylene',
			'gtceu:plascrete',
			'6x gtceu:polytetrafluoroethylene_plate')
		.inputFluids(
			Fluid.of('gtceu:concrete', 144 * 4))
		.itemOutputs('expatternprovider:assembler_matrix_wall')
		.duration(800)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true, true)

	//Matrix Glass

	event.recipes.gtceu.assembler("expatternprovider:assembler_matrix_glass")
		.itemInputs(
			'#forge:frames/polytetrafluoroethylene',
			'gtceu:cleanroom_glass',
			'6x gtceu:polytetrafluoroethylene_plate')
		.inputFluids(
			Fluid.of('gtceu:concrete', 144 * 4))
		.itemOutputs("expatternprovider:assembler_matrix_glass")
		.duration(800)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true, true)

	//Matrix Pattern

	event.recipes.gtceu.assembly_line("expatternprovider:assembler_matrix_pattern")
		.itemInputs(
			'#expatternprovider:extended_pattern_provider',
			'8x megacells:accumulation_processor',
			'4x gtceu:luv_robot_arm',
			'2x #forge:dense_plates/rhodium_plated_palladium',
			'#gtceu:circuits/zpm',
			'2x #gtceu:circuits/luv')
		.inputFluids(
			Fluid.of('tfg:fluix', 144 * 16),
			Fluid.of('gtceu:polybenzimidazole', 1430))
		.itemOutputs('expatternprovider:assembler_matrix_pattern')
		.duration(20 * 30)
		.EUt(GTValues.VA[GTValues.LuV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.assembly_line("expatternprovider:assembler_matrix_pattern_moon")
		.itemInputs(
			'2x #expatternprovider:extended_pattern_provider',
			'8x megacells:accumulation_processor',
			'4x gtceu:iv_robot_arm',
			'2x #forge:dense_plates/tungsten_steel',
			'#gtceu:circuits/luv',
			'2x #gtceu:circuits/iv')
		.inputFluids(
			Fluid.of('tfg:cryogenized_fluix', 144 * 8),
			Fluid.of('gtceu:polybenzimidazole', 1430))
		.itemOutputs('2x expatternprovider:assembler_matrix_pattern')
		.duration(20 * 30)
		.EUt(GTValues.VA[GTValues.IV])
		.dimension('ad_astra:moon')

	//Matrix Crafter

	event.recipes.gtceu.assembly_line("expatternprovider:assembler_matrix_crafter")
		.itemInputs(
			"#expatternprovider:oversize_interface",
			'8x megacells:accumulation_processor',
			'4x gtceu:luv_field_generator',
			'2x #forge:dense_plates/rhodium_plated_palladium',
			'#gtceu:circuits/zpm',
			'2x #gtceu:circuits/luv')
		.inputFluids(
			Fluid.of('tfg:fluix', 144 * 16),
			Fluid.of('gtceu:polybenzimidazole', 1430))
		.itemOutputs('expatternprovider:assembler_matrix_crafter')
		.duration(20 * 30)
		.EUt(GTValues.VA[GTValues.LuV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.assembly_line("expatternprovider:assembler_matrix_crafter_moon")
		.itemInputs(
			"2x #expatternprovider:oversize_interface",
			'8x megacells:accumulation_processor',
			'4x gtceu:iv_field_generator',
			'2x #forge:dense_plates/tungsten_steel',
			'#gtceu:circuits/luv',
			'2x #gtceu:circuits/iv')
		.inputFluids(
			Fluid.of('tfg:cryogenized_fluix', 144 * 8),
			Fluid.of('gtceu:polybenzimidazole', 1430))
		.itemOutputs('2x expatternprovider:assembler_matrix_crafter')
		.duration(20 * 30)
		.EUt(GTValues.VA[GTValues.IV])
		.dimension('ad_astra:moon')

	//Matrix Speed

	event.recipes.gtceu.assembly_line("expatternprovider:assembler_matrix_speed_luv")
		.itemInputs(
			"megacells:mega_crafting_accelerator",
			'8x megacells:accumulation_processor',
			'4x gtceu:luv_conveyor_module',
			'2x #forge:dense_plates/rhodium_plated_palladium',
			'#gtceu:circuits/zpm',
			'2x #gtceu:circuits/luv')
		.inputFluids(
			Fluid.of('tfg:fluix', 144 * 16),
			Fluid.of('gtceu:polybenzimidazole', 1430))
		.itemOutputs('expatternprovider:assembler_matrix_speed')
		.duration(20 * 30)
		.EUt(GTValues.VA[GTValues.LuV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.assembly_line("expatternprovider:assembler_matrix_speed_zpm")
		.itemInputs(
			"2x megacells:mega_crafting_accelerator",
			'8x megacells:accumulation_processor',
			'4x gtceu:iv_conveyor_module',
			'2x #forge:dense_plates/tungsten_steel',
			'#gtceu:circuits/luv',
			'2x #gtceu:circuits/iv')
		.inputFluids(
			Fluid.of('tfg:cryogenized_fluix', 144 * 8),
			Fluid.of('gtceu:polybenzimidazole', 1430))
		.itemOutputs('2x expatternprovider:assembler_matrix_speed')
		.duration(20 * 30)
		.EUt(GTValues.VA[GTValues.IV])
		.dimension('ad_astra:moon')

	event.shaped('expatternprovider:fishbig', [
		'CCC',
		'CFC',
		'CCC'
	], {
		C: '#tfc:sewing_light_cloth',
		F: '#minecraft:fishes'
	}).id('tfg:shaped/fishbig')

	//#endregion

}
