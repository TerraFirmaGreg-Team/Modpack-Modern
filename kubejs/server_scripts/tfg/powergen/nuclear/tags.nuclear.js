"use strict";

const registerTFGNuclearItemTags = (event) => {

	//Fission Nucleat Fuel
	event.add('deafission:fuels', 'tfg:thorium_rod')
	event.add('deafission:fuels', 'tfg:uranium_rod')
	event.add('deafission:fuels', 'tfg:plutonium_rod')
	event.add('tfg:fission_rods', '#deafission:fuels')

	let FISSION_ROD_TAG = 'tfg:fission_rods';

	event.add(FISSION_ROD_TAG, 'tfg:tbu_232_rod');
	event.add(FISSION_ROD_TAG, 'tfg:americium_241_rod');
    event.add(FISSION_ROD_TAG, 'tfg:neptunium_237_rod');
	event.add(FISSION_ROD_TAG, 'tfg:californium_252_rod');

}

const registerTFGBlockTagsNuclear = (event) => {

	//#region Fision Components
    let COMPONENTS_FR = 'deafission:components_fr';
    
	// Max Heating
    event.add(COMPONENTS_FR, 'tfg:glacian_wool_frame'); // Max Heat 2
	event.add(COMPONENTS_FR, 'minecraft:blue_ice'); // Max Heat 0.5
    event.add(COMPONENTS_FR, 'tfg:aes_insulation_frame'); // Max Heat 1
	event.add(COMPONENTS_FR, 'tfg:moderate_core_frame'); // Max Heat 10
	event.add(COMPONENTS_FR, 'tfg:impure_moderate_core_frame'); // Max Heat 5
	//event.add(COMPONENTS, 'minecraft:blue_ice'); // Max Heat 0.5

	//event.add(COMPONENTS_FR, 'minecraft:bedrock'); // Max Heat 10000 CREATIVE BLOCK

	// Increase Throttle
    //event.add(COMPONENTS_FR, 'minecraft:iron_block');
    
	// Increase Effiency
    //event.add(COMPONENTS_FR, 'minecraft:packed_ice');

	event.add('tfg:fission_coolant','deafission:components')

	// Heat Battery Components

	let COMPONENTS_HB = 'deafission:components_hb';

    //event.add(COMPONENTS_HB, 'minecraft:sand');
    event.add(COMPONENTS_HB, 'tfg:copper_sandy_frame');
	event.add(COMPONENTS_HB, 'tfg:beryllium_sandy_frame');
    //event.add(COMPONENTS_HB, 'minecraft:bedrock'); // For Creative usage only

	//#endregion

}
//#endregion

//#region Fluids
const registerTFGFluidTagsNuclear = (event) => {
	
	// Fluid allowed for the SMR Hatch

	let SMR_FLUIDS = 'tfg:smr_fluids';

    event.add(SMR_FLUIDS, 'gtceu:lubricant');
    event.add(SMR_FLUIDS, 'tfg:polyalkylene_lubricant');
	event.add(SMR_FLUIDS, 'tfg:spent_ticl4_doped_supercritical_co2');
    event.add(SMR_FLUIDS, 'tfg:ozone');
	event.add(SMR_FLUIDS, 'tfg:cyclohex_diperoxide');
	event.add(SMR_FLUIDS, 'tfg:booster_t3');

	//#endregion
	
}
