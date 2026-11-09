"use strict";

function registerTFGBatteriesRecipes(event) {
	
	// Use vacuum chamber to fill batteries pre-canner

	event.recipes.vintageimprovements.pressurizing(
		'gtceu:lv_sodium_battery',
		['gtceu:lv_battery_hull', '#forge:dusts/sodium', '#forge:dusts/sodium', Fluid.of('gtceu:glue', 50)])
		.processingTime(50 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)

	event.recipes.vintageimprovements.pressurizing(
		'gtceu:lv_cadmium_battery',
		['gtceu:lv_battery_hull', '#forge:dusts/cadmium', '#forge:dusts/cadmium', Fluid.of('gtceu:glue', 50)])
		.processingTime(50 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)

	event.recipes.vintageimprovements.pressurizing(
		'gtceu:lv_lithium_battery',
		['gtceu:lv_battery_hull', '#forge:dusts/lithium', '#forge:dusts/lithium', Fluid.of('gtceu:glue', 50)])
		.processingTime(50 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)

	// ULV sodium

	const carbonDusts = ['tfc:soot', '#forge:dusts/charcoal', '#forge:dusts/coal', '#forge:dusts/coke', '#forge:dusts/carbon'];

	event.recipes.vintageimprovements.vacuumizing(
		[Fluid.of('gtceu:carbon_dioxide', 1000), 'gtceu:sodium_dust'],
		['#forge:dusts/soda_ash', '#forge:dusts/soda_ash', '#forge:dusts/soda_ash', carbonDusts])
		.secondaryFluidOutput(0)
		.processingTime(50 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
		.heated()
		.id('tfg:vacuumizing/sodium_from_soda_ash_dust')
}