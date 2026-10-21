"use strict";

function registerTFGGasBurnerRecipes(event) {

const $Heat = Java.loadClass('net.dries007.tfc.common.capabilities.heat.Heat')

//#region Fuel Registry

/**
 * @typedef {Object} GasBurnerFuels.
 * @property {Internal.FluidStackJS} fluid - Fluid or Fluid Tag.
 * @property {number} qty - Amount of fluid to burn per cycle in mB.
 * @property {number} duration - How long the burn cycle lasts in ticks.
 * @property {Heat} temp - The fuel burn temp in Celsius.
 */
/**
 * @type {GasBurnerFuels[]}
 */
const gasBurnerFuels = [
	// ========== HOT ============
	{
		fluid: 'gtceu:wood_gas',
		qty: 20,
		duration: 100,
		temp: $Heat.HOT.getMin()
	},
	{
		fluid: 'gtceu:sulfuric_gas',
		qty: 15,
		duration: 80,
		temp: $Heat.HOT.getMin()
	},
	{
		fluid: 'gtceu:sulfuric_naphtha',
		qty: 10,
		duration: 80,
		temp: $Heat.HOT.getMin()
	},
	{
		fluid: 'gtceu:biomass',
		qty: 25,
		duration: 100,
		temp: $Heat.HOT.getMin()
	},
	// ========== VERY HOT ============
	{
		fluid: 'tfc:tallow',
		qty: 10,
		duration: 100,
		temp: $Heat.VERY_HOT.getMin()
	},
	{
		fluid: '#tfc:alcohols',
		qty: 10,
		duration: 100,
		temp: $Heat.VERY_HOT.getMin()
	},
	{
		fluid: '#tfcagedalcohol:aged_alcohols',
		qty: 10,
		duration: 200,
		temp: $Heat.VERY_HOT.getMin()
	},
	{
		fluid: '#tfg:vintage_alcohols',
		qty: 10,
		duration: 300,
		temp: $Heat.VERY_HOT.getMin()
	},
	// ========== FAINT RED ============
	{
		fluid: 'gtceu:oil_heavy',
		qty: 10,
		duration: 160,
		temp: $Heat.FAINT_RED.getMin()
	},
	{
		fluid: 'gtceu:creosote',
		qty: 25,
		duration: 80,
		temp: $Heat.FAINT_RED.getMin()
	},
	{
		fluid: 'gtceu:lpg',
		qty: 10,
		duration: 100,
		temp: $Heat.FAINT_RED.getMin()
	},
	{
		fluid: 'gtceu:methane',
		qty: 10,
		duration: 80,
		temp: $Heat.FAINT_RED.getMin()
	},
	{
		fluid: 'gtceu:methanol',
		qty: 25,
		duration: 80,
		temp: $Heat.FAINT_RED.getMin()
	},
	{
		fluid: 'gtceu:naphtha',
		qty: 25,
		duration: 80,
		temp: $Heat.FAINT_RED.getMin()
	},
	{
		fluid: 'gtceu:octane',
		qty: 15,
		duration: 80,
		temp: $Heat.FAINT_RED.getMin()
	},
	{
		fluid: 'gtceu:phenol',
		qty: 10,
		duration: 100,
		temp: $Heat.FAINT_RED.getMin()
	},
	// ========== DARK RED ============
	{
		fluid: 'tfg:syngas',
		qty: 10,
		duration: 160,
		temp: $Heat.DARK_RED.getMin()
	},
	{
		fluid: 'gtceu:oil',
		qty: 10,
		duration: 100,
		temp: $Heat.DARK_RED.getMin()
	},
	{
		fluid: 'gtceu:oil_medium',
		qty: 10,
		duration: 100,
		temp: $Heat.DARK_RED.getMin()
	},
	// ========== BRIGHT RED ============
	{
		fluid: 'gtceu:heavy_fuel',
		qty: 10,
		duration: 140,
		temp: $Heat.BRIGHT_RED.getMin()
	},
	{
		fluid: 'gtceu:sulfuric_heavy_fuel',
		qty: 10,
		duration: 140,
		temp: $Heat.BRIGHT_RED.getMin()
	},
	{
		fluid: 'gtceu:oil_light',
		qty: 10,
		duration: 80,
		temp: $Heat.BRIGHT_RED.getMin()
	},
	{
		fluid: 'gtceu:ethylene',
		qty: 10,
		duration: 80,
		temp: $Heat.BRIGHT_RED.getMin()
	},
	{
		fluid: 'gtceu:toluene',
		qty: 10,
		duration: 100,
		temp: $Heat.BRIGHT_RED.getMin()
	},
    // ========== ORANGE ============
	{
		fluid: '#firmalife:oils',
		qty: 10,
		duration: 80,
		temp: $Heat.ORANGE.getMin()
	},
	{
		fluid: 'gtceu:ethane',
		qty: 10,
		duration: 80,
		temp: $Heat.ORANGE.getMin()
	},
	// ========== YELLOW ============
	{
		fluid: 'gtceu:coal_gas',
		qty: 25,
		duration: 80,
		temp: $Heat.YELLOW.getMin()
	},
	{
		fluid: 'gtceu:refinery_gas',
		qty: 10,
		duration: 80,
		temp: $Heat.YELLOW.getMin()
	},
	// ========== YELLOW WHITE ============
	{
		fluid: 'gtceu:ethanol',
		qty: 20,
		duration: 100,
		temp: $Heat.YELLOW_WHITE.getMin()
	},
	{
		fluid: 'gtceu:benzene',
		qty: 10,
		duration: 80,
		temp: $Heat.YELLOW_WHITE.getMin()
	},
	{
		fluid: 'gtceu:bio_diesel',
		qty: 10,
		duration: 80,
		temp: $Heat.WHITE.getMin()
	},
	{
		fluid: 'gtceu:diesel',
		qty: 10,
		duration: 100,
		temp: $Heat.WHITE.getMin()
	},
	{
		fluid: 'gtceu:nitrobenzene',
		qty: 10,
		duration: 100,
		temp: $Heat.YELLOW_WHITE.getMin()
	},
	// ========== WHITE ============
	{
		fluid: 'gtceu:butadiene',
		qty: 15,
		duration: 80,
		temp: $Heat.WHITE.getMin()
	},
	{
		fluid: 'gtceu:butane',
		qty: 10,
		duration: 100,
		temp: $Heat.WHITE.getMin()
	},
	{
		fluid: 'gtceu:butene',
		qty: 10,
		duration: 80,
		temp: $Heat.WHITE.getMin()
	},
	{
		fluid: 'gtceu:natural_gas',
		qty: 25,
		duration: 20,
		temp: $Heat.WHITE.getMin()
	},
	{
		fluid: 'gtceu:propene',
		qty: 10,
		duration: 80,
		temp: $Heat.WHITE.getMin()
	},
	// ========== BRILLIANT WHITE ============
	{
		fluid: 'tfg:btx_fuel',
		qty: 10,
		duration: 220,
		temp: $Heat.BRILLIANT_WHITE.getMin()
	},
	{
		fluid: 'gtceu:cetane_boosted_diesel',
		qty: 10,
		duration: 180,
		temp: $Heat.BRILLIANT_WHITE.getMin()
	},
	{
		fluid: 'gtceu:gasoline',
		qty: 10,
		duration: 200,
		temp: $Heat.BRILLIANT_WHITE.getMin()
	},
	{
		fluid: 'gtceu:high_octane_gasoline',
		qty: 10,
		duration: 400,
		temp: $Heat.BRILLIANT_WHITE.getMin()
	},
	{
		fluid: 'gtceu:propane',
		qty: 10,
		duration: 80,
		temp: $Heat.BRILLIANT_WHITE.getMin()
	},
	{
		fluid: 'tfg:reformate_gas',
		qty: 10,
		duration: 80,
		temp: $Heat.BRILLIANT_WHITE.getMin()
	},
	{
		fluid: 'gtceu:rocket_fuel',
		qty: 10,
		duration: 80,
		temp: $Heat.BRILLIANT_WHITE.getMin()
	},
];

//#endregion
//#region Recipes

	// Fuel Recipes
    gasBurnerFuels.forEach(fuel => {

        event.recipes.tfg.gas_burner_fuel()
            .id(`tfg:gas_burner/${global.linuxUnfucker(fuel.fluid)}`)
            .fluid(`${fuel.fluid} ${fuel.qty}`)
            .duration(fuel.duration)
            .temperature(fuel.temp);
    });

	// Gas Burner
	event.recipes.gtceu.shaped('tfg:gas_burner', [
		'ACA',
		'ABA',
		'EDE'
	], {
		A: 'tfc:metal/bars/black_steel',
		B: '#forge:double_plates/blue_steel',
		C: 'minecraft:flint_and_steel',
		D: 'vintageimprovements:redstone_module',
		E: '#forge:plates/cupronickel',
	}).addMaterialInfo().id('tfg:shaped/gas_burner');

//#endregion
}
 