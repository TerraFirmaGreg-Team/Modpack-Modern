"use strict";

const TIN_REPLACEMENT = "tin_replacement"
const SOLDER_REPLACEMENT = "solder_replacement"

/** @global */
global.SOLDER_TIERS = /** @type {const} */ {
	"mv": {
		"tin_replacement": "gtceu:soldering_alloy",
        "solder_replacement": "tfg:woods_metal"
	},
    "hv": {
        "tin_replacement": "gtceu:soldering_alloy",
        "solder_replacement": "tfg:woods_metal"
    },
	"ev": {
        "tin_replacement": "tfg:woods_metal",
		"solder_replacement": "tfg:bi_pb_sn_cd_in_tl"
    },
    "iv": {
        "tin_replacement": "tfg:woods_metal",
		"solder_replacement": "tfg:bi_pb_sn_cd_in_tl"
    },
    "luv": {
        "tin_replacement": "tfg:bi_pb_sn_cd_in_tl",
		"solder_replacement": undefined
    },
    "zpm": {
        "tin_replacement": "tfg:bi_pb_sn_cd_in_tl",
		"solder_replacement": undefined
    },
	"uv": {
        "tin_replacement": "tfg:bi_pb_sn_cd_in_tl",
		"solder_replacement": undefined
    }
}

function registerTFGCircuitRecipes(event) {

    //#region Microprocessor mainframe requires nano chips

	event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv_asmd_soldering_alloy'})
	event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv'})
	event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv_soldering_alloy'})
	event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv_asmd'})

	event.recipes.gtceu.circuit_assembler('tfg:mainframe_iv')
		.itemInputs('2x gtceu:aluminium_frame', '2x gtceu:micro_processor_computer', '8x #gtceu:inductors', '16x #gtceu:capacitors', 'gtceu:nano_cpu_chip', '16x gtceu:annealed_copper_single_wire')
		.inputFluids(Fluid.of(global.SOLDER_TIERS["hv"][TIN_REPLACEMENT], 576))
		.itemOutputs('gtceu:micro_processor_mainframe')
		.duration(20 * 40)
		.EUt(GTValues.VA[GTValues.HV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.circuit_assembler('tfg:mainframe_iv_soldering_alloy')
		.itemInputs('2x gtceu:aluminium_frame', '2x gtceu:micro_processor_computer', '8x #gtceu:inductors', '16x #gtceu:capacitors', 'gtceu:nano_cpu_chip', '16x gtceu:annealed_copper_single_wire')
		.inputFluids(Fluid.of(global.SOLDER_TIERS["hv"][SOLDER_REPLACEMENT], 288))
		.itemOutputs('gtceu:micro_processor_mainframe')
		.duration(20 * 40)
		.EUt(GTValues.VA[GTValues.HV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.circuit_assembler('tfg:mainframe_iv_asmd')
		.itemInputs('2x gtceu:aluminium_frame', '2x gtceu:micro_processor_computer', '2x gtceu:advanced_smd_inductor', '4x gtceu:advanced_smd_capacitor', 'gtceu:nano_cpu_chip', '16x gtceu:annealed_copper_single_wire')
		.inputFluids(Fluid.of(global.SOLDER_TIERS["hv"][TIN_REPLACEMENT], 576))
		.itemOutputs('gtceu:micro_processor_mainframe')
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.HV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.circuit_assembler('tfg:mainframe_iv_asmd_soldering_alloy')
		.itemInputs('2x gtceu:aluminium_frame', '2x gtceu:micro_processor_computer', '2x gtceu:advanced_smd_inductor', '4x gtceu:advanced_smd_capacitor', 'gtceu:nano_cpu_chip', '16x gtceu:annealed_copper_single_wire')
		.inputFluids(Fluid.of(global.SOLDER_TIERS["hv"][SOLDER_REPLACEMENT], 288))
		.itemOutputs('gtceu:micro_processor_mainframe')
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.HV])
		.cleanroom(CleanroomType.CLEANROOM)
    
    //#endregion

    //#region Replace solders

    // Circuit assembler recipes

    const CIRCUIT_ASSEMBLER_RECIPE_TIERS = {
		"gtceu:circuit_assembler/integrated_circuit_lv": "mv",
		"gtceu:circuit_assembler/integrated_circuit_mv": "mv",
		"gtceu:circuit_assembler/integrated_circuit_hv": "mv",

        "gtceu:circuit_assembler/nand_chip_ulv_good_board": "hv",
        "gtceu:circuit_assembler/nand_chip_ulv_plastic_board": "hv",
        "gtceu:circuit_assembler/microprocessor_lv": "hv",
        "gtceu:circuit_assembler/microprocessor_lv_soc": "hv",
        "gtceu:circuit_assembler/processor_mv": "hv",
        "gtceu:circuit_assembler/processor_mv_soc": "hv",
        "gtceu:circuit_assembler/processor_assembly_hv": "hv",
        "gtceu:circuit_assembler/workstation_ev": "hv",
        // Microprocessor mainframes handled above
        "gtceu:circuit_assembler/data_stick": "hv",

        "gtceu:circuit_assembler/nano_processor_hv": "ev",
        "gtceu:circuit_assembler/nano_processor_hv_asmd": "ev",
        "gtceu:circuit_assembler/nano_processor_hv_soc": "ev",
        "gtceu:circuit_assembler/nano_processor_assembly_ev": "ev",
        "gtceu:circuit_assembler/nano_processor_assembly_ev_asmd": "ev",
        "gtceu:circuit_assembler/nano_computer_iv": "ev",
        "gtceu:circuit_assembler/nano_computer_iv_asmd": "ev",
        "gtceu:circuit_assembler/nano_mainframe_luv": "ev",
        "gtceu:circuit_assembler/nano_mainframe_luv_asmd": "ev",
        "gtceu:circuit_assembler/lapotronic_energy_orb": "ev",
        "gtceu:circuit_assembler/data_orb": "ev",

        "gtceu:circuit_assembler/quantum_processor_ev": "iv",
        "gtceu:circuit_assembler/quantum_processor_ev_asmd": "iv",
        "gtceu:circuit_assembler/quantum_processor_ev_soc": "iv",
        "gtceu:circuit_assembler/quantum_assembly_iv": "iv",
        "gtceu:circuit_assembler/quantum_assembly_iv_asmd": "iv",
        "gtceu:circuit_assembler/quantum_computer_luv": "iv",
        "gtceu:circuit_assembler/quantum_computer_luv_asmd": "iv",
		"gtceu:circuit_assembler/quantum_mainframe_zpm": "iv",
		"gtceu:circuit_assembler/quantum_mainframe_zpm_asmd": "iv",

        "gtceu:circuit_assembler/crystal_processor_iv": "luv",
        "gtceu:circuit_assembler/crystal_processor_iv_soc": "luv",
        "gtceu:circuit_assembler/crystal_assembly_luv": "luv",
        "gtceu:circuit_assembler/crystal_computer_zpm": "luv",

        "gtceu:circuit_assembler/wetware_processor_luv": "zpm",
        "gtceu:circuit_assembler/wetware_processor_luv_soc": "zpm",
        "gtceu:circuit_assembler/wetware_processor_assembly_zpm": "zpm",
        "gtceu:circuit_assembler/wetware_processor_luv_soc": "zpm",
        "gtceu:circuit_assembler/data_module": "zpm"
    }

    Object.keys(CIRCUIT_ASSEMBLER_RECIPE_TIERS).forEach(recipe => {
		if (global.SOLDER_TIERS[CIRCUIT_ASSEMBLER_RECIPE_TIERS[recipe]][TIN_REPLACEMENT]) {
			event.replaceInput({ id: recipe }, Fluid.of("gtceu:tin"), Fluid.of(global.SOLDER_TIERS[CIRCUIT_ASSEMBLER_RECIPE_TIERS[recipe]][TIN_REPLACEMENT]))
		} else {
			event.remove({ id: recipe })
		}

		if (global.SOLDER_TIERS[CIRCUIT_ASSEMBLER_RECIPE_TIERS[recipe]][SOLDER_REPLACEMENT]) {
			event.replaceInput({ id: `${recipe}_soldering_alloy` }, Fluid.of("gtceu:soldering_alloy"), Fluid.of(global.SOLDER_TIERS[CIRCUIT_ASSEMBLER_RECIPE_TIERS[recipe]][SOLDER_REPLACEMENT]))
		} else {
			event.remove({ id: `${recipe}_soldering_alloy` })
		}
    })

    // Assembly line recipes

    const ASSEMBLY_LINE_RECIPE_TIERS = {
        "gtceu:assembly_line/crystal_mainframe_uv": "luv",
		"gtceu:assembly_line/lapotronic_energy_orb_cluster": "luv",
		"gtceu:assembly_line/electric_motor_luv": "luv",
		"gtceu:assembly_line/electric_pump_luv": "luv",
		"gtceu:assembly_line/conveyor_module_luv": "luv",
		"gtceu:assembly_line/electric_piston_luv": "luv",
		"gtceu:assembly_line/robot_arm_luv": "luv",
		"gtceu:assembly_line/field_generator_luv": "luv",
		"gtceu:assembly_line/emitter_luv": "luv",
		"gtceu:assembly_line/sensor_luv": "luv",
		"gtceu:assembly_line/energy_hatch_luv": "luv",
		"gtceu:assembly_line/dynamo_hatch_luv": "luv",
		"gtceu:assembly_line/me_pattern_buffer": "luv",
		"gtceu:assembly_line/advanced_data_access_hatch": "luv",
		"gtceu:assembly_line/fusion_reactor_mk1": "luv",
		
        "gtceu:assembly_line/wetware_super_computer_uv": "zpm",
        "gtceu:assembly_line/energy_module": "zpm",
		"gtceu:assembly_line/electric_motor_zpm": "zpm",
		"gtceu:assembly_line/electric_pump_zpm": "zpm",
		"gtceu:assembly_line/conveyor_module_zpm": "zpm",
		"gtceu:assembly_line/electric_piston_zpm": "zpm",
		"gtceu:assembly_line/robot_arm_zpm": "zpm",
		"gtceu:assembly_line/field_generator_zpm": "zpm",
		"gtceu:assembly_line/emitter_zpm": "zpm",
		"gtceu:assembly_line/sensor_zpm": "zpm",
		"gtceu:assembly_line/energy_hatch_zpm": "zpm",
		"gtceu:assembly_line/dynamo_hatch_zpm": "zpm",
		"gtceu:assembly_line/object_holder": "zpm",
		"gtceu:assembly_line/data_bank": "zpm",
		"gtceu:assembly_line/high_performance_computing_array": "zpm",
		"gtceu:assembly_line/network_switch": "zpm",
		"gtceu:assembly_line/research_station": "zpm",
		"gtceu:assembly_line/fusion_reactor_mk2": "zpm",

		"gtceu:assembly_line/wetware_mainframe_uhv": "uv",
		"gtceu:assembly_line/energy_cluster": "uv",
        "gtceu:assembly_line/ultimate_battery": "uv",
		"gtceu:assembly_line/electric_motor_uv": "uv",
		"gtceu:assembly_line/electric_pump_uv": "uv",
		"gtceu:assembly_line/conveyor_module_uv": "uv",
		"gtceu:assembly_line/electric_piston_uv": "uv",
		"gtceu:assembly_line/robot_arm_uv": "uv",
		"gtceu:assembly_line/field_generator_uv": "uv",
		"gtceu:assembly_line/emitter_uv": "uv",
		"gtceu:assembly_line/sensor_uv": "uv",
		"gtceu:assembly_line/energy_hatch_uv": "uv",
		"gtceu:assembly_line/energy_hatch_uhv": "uv",
		"gtceu:assembly_line/dynamo_hatch_uv": "uv",
		"gtceu:assembly_line/dynamo_hatch_uhv": "uv",
		"gtceu:assembly_line/fusion_reactor_mk3": "uv"
    }

	Object.keys(ASSEMBLY_LINE_RECIPE_TIERS).forEach(recipe => {
		if (global.SOLDER_TIERS[ASSEMBLY_LINE_RECIPE_TIERS[recipe]][SOLDER_REPLACEMENT]) {
			event.replaceInput({ id: recipe }, Fluid.of("gtceu:soldering_alloy"), Fluid.of(global.SOLDER_TIERS[ASSEMBLY_LINE_RECIPE_TIERS[recipe]][SOLDER_REPLACEMENT]))
		} else if (global.SOLDER_TIERS[ASSEMBLY_LINE_RECIPE_TIERS[recipe]][TIN_REPLACEMENT]) {
			// Use tin replacement instead if the solder replacement is undefined
			event.replaceInput({ id: recipe }, Fluid.of("gtceu:soldering_alloy"), Fluid.of(global.SOLDER_TIERS[ASSEMBLY_LINE_RECIPE_TIERS[recipe]][TIN_REPLACEMENT]))
		} else {
			event.remove({ id: recipe })
		}
    })

	//#endregion

	//#region Solder recipes

	// Woods metal

	event.remove({ id: 'gtceu:extractor/extract_woods_metal_dust' })
	event.remove({ id: 'gtceu:extractor/extract_woods_metal_ingot' })
	event.remove({ id: 'gtceu:extractor/extract_woods_metal_nugget' })
	event.remove({ id: 'gtceu:extractor/extract_woods_metal_block' })

	event.recipes.gtceu.mixer('tfg:woods_metal')
		.itemInputs('4x #forge:dusts/bismuth', '2x #forge:dusts/lead', '1x #forge:dusts/tin', '1x #forge:dusts/cadmium')
		.itemOutputs('8x #forge:dusts/woods_metal')
		.duration(20 * 10)
		.circuit(3)
		.EUt(GTValues.VA[GTValues.MV])
	
	event.recipes.gtceu.pyrolyse_oven('tfg:liquid_woods_metal')
		.itemInputs('8x #forge:dusts/woods_metal')
		.outputFluids(Fluid.of('tfg:woods_metal', 1152))
		.duration(20 * 96)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.MV])
	
	event.recipes.gtceu.pyrolyse_oven('tfg:liquid_woods_metal_boosted')
		.itemInputs('8x #forge:dusts/woods_metal')
		.inputFluids(Fluid.of('gtceu:nitrogen', 1000))
		.outputFluids(Fluid.of('tfg:woods_metal', 1152))
		.duration(20 * 48)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.MV])
    
	// BiPbSnCdInTl

	 event.recipes.gtceu.large_chemical_reactor('tfg:lorandite_to_thallium_sulfate')
	 	.itemInputs('8x #forge:dusts/lorandite')
	 	.inputFluids(Fluid.of('gtceu:sulfuric_acid', 2000))
	 	.itemOutputs('7x #forge:dusts/thallium_sulfate', '5x #forge:dusts/arsenic_trioxide', '4x #forge:dusts/sulfur')
	 	.outputFluids(Fluid.of('minecraft:water', 1000), Fluid.of('gtceu:hydrogen_sulfide', 1000))
	 	.duration(20 * 20)
	 	.EUt(GTValues.VA[GTValues.EV])

	 event.recipes.gtceu.chemical_reactor('tfg:thallium_sulfate_to_zinc_sulfate')
	 	.itemInputs('7x #forge:dusts/thallium_sulfate', '1x #forge:dusts/zinc')
	 	.itemOutputs('2x #forge:dusts/thallium', '6x #forge:dusts/zinc_sulfate')
	 	.duration(20 * 20)
	 	.EUt(GTValues.VA[GTValues.EV])

     event.recipes.gtceu.alloy_blast_smelter('tfg:bi_pb_sn_cd_in_tl')
	 	.itemInputs('8x #forge:dusts/bismuth', '4x #forge:dusts/lead', '2x #forge:dusts/tin', '3x #forge:dusts/indium', '2x #forge:dusts/cadmium', '1x #forge:dusts/thallium')
	 	.outputFluids(Fluid.of('tfg:bi_pb_sn_cd_in_tl', 2880))
	 	.duration(20 * 480)
	 	.blastFurnaceTemp(3700)
	 	.EUt(GTValues.VA[GTValues.EV])

	 event.recipes.gtceu.alloy_blast_smelter('tfg:bi_pb_sn_cd_in_tl_boosted')
	 	.itemInputs('8x #forge:dusts/bismuth', '4x #forge:dusts/lead', '2x #forge:dusts/tin', '3x #forge:dusts/indium', '2x #forge:dusts/cadmium', '1x #forge:dusts/thallium')
	 	.inputFluids(Fluid.of('gtceu:helium', 2000))
	 	.outputFluids(Fluid.of('tfg:bi_pb_sn_cd_in_tl', 2880))
	 	.duration(20 * 321.6)
	 	.blastFurnaceTemp(3700)
	 	.EUt(GTValues.VA[GTValues.EV])

	//#endregion
}
