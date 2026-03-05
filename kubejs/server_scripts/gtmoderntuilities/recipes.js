"use strict";

const registerGTModernUtilitiesRecipes = (event) => {

	event.remove({
		not: [
			{ id: 'gtmutils:shaped/ulv_auto_charger_4x' },
			{ id: 'gtmutils:shaped/lv_auto_charger_4x' },
			{ id: 'gtmutils:shaped/mv_auto_charger_4x' },
			{ id: 'gtmutils:shaped/hv_auto_charger_4x' },
			{ id: 'gtmutils:shaped/ev_auto_charger_4x' },
			{ id: 'gtmutils:shaped/iv_auto_charger_4x' },
			{ id: 'gtmutils:shaped/luv_auto_charger_4x' },
			{ id: 'gtmutils:shaped/zpm_auto_charger_4x' },
			{ id: 'gtmutils:shaped/uv_auto_charger_4x' },
			{ id: 'gtmutils:shaped/uhv_auto_charger_4x' },
			{ id: 'gtceu:assembler/omnibreaker' },
			{ id: 'gtceu:shaped/luv_power_unit_lapotronic_energy_orb_cluster' },
			{ id: 'gtceu:shaped/zpm_power_unit_energy_module' },
		], mod: 'gtmutils'
	});

    global.GTM_UTILITIES_DISABLED_ITEMS.forEach(item => {
        event.remove({ output : item })
    })

}
