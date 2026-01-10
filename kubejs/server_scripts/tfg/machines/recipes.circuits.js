"use strict";

/** @global */
global.SOLDER_TIERS = /** @type {const} */ {
    "hv": {
        "tin_replacement": "gtceu:soldering_alloy",
        "solder_replacement": "tfg:woods_metal"
    },
    "ev": {
        "tin_replacement": "gtceu:soldering_alloy",
        "solder_replacement": "tfg:woods_metal"
    },
    "iv": {
        "tin_replacement": "tfg:woods_metal",
        "solder_replacement": "tfg:bi_pb_sn_cd_in_tl"
    },
    "luv": {
        "tin_replacement": "tfg:woods_metal",
        "solder_replacement": "tfg:bi_pb_sn_cd_in_tl"
    },
    "zpm": {
        "solder_replacement": "tfg:bi_pb_sn_cd_in_tl"
    }
}

function registerTFGCircuitRecipes(event) {

    //#region Microprocessor mainframe requires nano chips

	event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv_asmd_soldering_alloy'})
	event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv'})
	event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv_soldering_alloy'})
	event.remove({ id: 'gtceu:circuit_assembler/mainframe_iv_asmd'})

	event.recipes.gtceu.circuit_assembler('tfg:circuit_assembler/mainframe_iv')
		.itemInputs('2x gtceu:aluminium_frame', '2x gtceu:micro_processor_computer', '8x #gtceu:inductors', '16x #gtceu:capacitors', 'gtceu:nano_cpu_chip', '16x gtceu:annealed_copper_single_wire')
		.inputFluids(Fluid.of(global.SOLDER_TIERS["hv"]["tin_replacement"], 576))
		.itemOutputs('gtceu:micro_processor_mainframe')
		.duration(20 * 40)
		.EUt(GTValues.VA[GTValues.HV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.circuit_assembler('tfg:circuit_assembler/mainframe_iv_soldering_alloy')
		.itemInputs('2x gtceu:aluminium_frame', '2x gtceu:micro_processor_computer', '8x #gtceu:inductors', '16x #gtceu:capacitors', 'gtceu:nano_cpu_chip', '16x gtceu:annealed_copper_single_wire')
		.inputFluids(Fluid.of(global.SOLDER_TIERS["hv"]["solder_replacement"], 288))
		.itemOutputs('gtceu:micro_processor_mainframe')
		.duration(20 * 40)
		.EUt(GTValues.VA[GTValues.HV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.circuit_assembler('tfg:circuit_assembler/mainframe_iv_asmd')
		.itemInputs('2x gtceu:aluminium_frame', '2x gtceu:micro_processor_computer', '2x gtceu:advanced_smd_inductor', '4x gtceu:advanced_smd_capacitor', 'gtceu:nano_cpu_chip', '16x gtceu:annealed_copper_single_wire')
		.inputFluids(Fluid.of(global.SOLDER_TIERS["hv"]["tin_replacement"], 576))
		.itemOutputs('gtceu:micro_processor_mainframe')
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.HV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.circuit_assembler('tfg:circuit_assembler/mainframe_iv_asmd_soldering_alloy')
		.itemInputs('2x gtceu:aluminium_frame', '2x gtceu:micro_processor_computer', '2x gtceu:advanced_smd_inductor', '4x gtceu:advanced_smd_capacitor', 'gtceu:nano_cpu_chip', '16x gtceu:annealed_copper_single_wire')
		.inputFluids(Fluid.of(global.SOLDER_TIERS["hv"]["solder_replacement"], 288))
		.itemOutputs('gtceu:micro_processor_mainframe')
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.HV])
		.cleanroom(CleanroomType.CLEANROOM)
    
    // #endregion

    // #region Quantum mainframe stack fix.
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
		.inputFluids(Fluid.of(global.SOLDER_TIERS["iv"]["tin_replacement"], 576))
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
		.inputFluids(Fluid.of(global.SOLDER_TIERS["iv"]["solder_replacement"], 288))
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
		.inputFluids(Fluid.of(global.SOLDER_TIERS["iv"]["tin_replacement"], 576))
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
		.inputFluids(Fluid.of(global.SOLDER_TIERS["iv"]["solder_replacement"], 288))
		.itemOutputs('gtceu:quantum_processor_mainframe')
		.duration(800)
		.EUt(7680)

	// #endregion

    // #region Solder tiers

	event.recipes.gtceu.mixer('tfg:woods_metal')
		.itemInputs('4x #forge:dusts/bismuth', '2x #forge:dusts/lead', '1x #forge:dusts/tin', '1x #forge:dusts/cadmium')
		.itemOutputs('8x #forge:dusts/woods_metal')
		.duration(20 * 10)
		.circuit(3)
		.EUt(GTValues.VA[GTValues.HV])
    
    event.recipes.gtceu.mixer('tfg:bi_pb_sn_cd_in_tl')
		.itemInputs('8x #forge:dusts/bismuth', '4x #forge:dusts/lead', '2x #forge:dusts/tin', '3x #forge:dusts/indium', '2x #forge:dusts/cadmium', '1x #forge:dusts/thallium')
		.itemOutputs('20x #forge:dusts/bi_pb_sn_cd_in_tl')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.IV])

    // Circuit assembler recipes

    const CIRCUIT_ASSEMBLER_RECIPE_TIERS = {
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
        // Quantum mainframes handled above

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
        event.replaceInput({ id: `${recipe}_soldering_alloy` }, Fluid.of("gtceu:soldering_alloy"), Fluid.of(global.SOLDER_TIERS[CIRCUIT_ASSEMBLER_RECIPE_TIERS[recipe]]["solder_replacement"]))

		if (global.SOLDER_TIERS[CIRCUIT_ASSEMBLER_RECIPE_TIERS[recipe]]["tin_replacement"]) {
			event.replaceInput({ id: recipe }, Fluid.of("gtceu:tin"), Fluid.of(global.SOLDER_TIERS[CIRCUIT_ASSEMBLER_RECIPE_TIERS[recipe]]["tin_replacement"]))
		} else {
			event.remove({ id: recipe })
		}
    })

    // Assembly line recipes

    const ASSEMBLY_LINE_RECIPE_TIERS = {
        "gtceu:assembly_line/crystal_mainframe_uv": "luv",

        "gtceu:assembly_line/wetware_super_computer_uv": "zpm",
        "gtceu:assembly_line/wetware_mainframe_uhv": "zpm",
        "gtceu:assembly_line/lapotronic_energy_orb_cluster": "zpm",
        "gtceu:assembly_line/energy_module": "zpm",
        "gtceu:assembly_line/energy_cluster": "zpm",
        "gtceu:assembly_line/ultimate_battery": "zpm"
    }

    Object.keys(ASSEMBLY_LINE_RECIPE_TIERS).forEach(recipe => {
        event.replaceInput({ id: recipe }, Fluid.of("gtceu:soldering_alloy"), Fluid.of(global.SOLDER_TIERS[ASSEMBLY_LINE_RECIPE_TIERS[recipe]]["solder_replacement"]))
    })

    // #endregion

}
