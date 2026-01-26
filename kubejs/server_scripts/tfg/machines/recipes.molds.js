// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGMoldRecipes(event) {

	/** @type {['huge'|'large'|'normal'|'small'|'tiny']}*/
	const pipe_sizes = [
		'huge',
		'large',
		'normal',
		'small',
		'tiny'
	];
	
	let prev_size;
	pipe_sizes.forEach((size) => {
		if (size !== 'huge'){
			event.shaped(`gtceu:${size}_pipe_casting_mold`, [
				'ABC'
			], {
				A: '#forge:tools/hammers',
				B: `gtceu:${prev_size}_pipe_casting_mold`,
				C: '#forge:tools/mallets'
			}).id(`tfg:shaped/${prev_size}_${size}_casting_mold`)

			event.shaped(`gtceu:${size}_pipe_extruder_mold`, [
				'ABC'
			], {
				A: '#forge:tools/hammers',
				B: `gtceu:${prev_size}_pipe_extruder_mold`,
				C: '#forge:tools/mallets'
			}).id(`tfg:shaped/${prev_size}_${size}_extruder_mold`)
		}
		prev_size = size;
	});
	
	pipe_sizes.reverse().forEach((size) => {
		if (size !== 'tiny'){
			event.shaped(`gtceu:${size}_pipe_casting_mold`, [
				'ABC'
			], {
				A: '#forge:tools/mallets',
				B: `gtceu:${prev_size}_pipe_casting_mold`,
				C: '#forge:tools/hammers'
			}).id(`tfg:shaped/${prev_size}_${size}_casting_mold`)

			event.shaped(`gtceu:${size}_pipe_extruder_mold`, [
				'ABC'
			], {
				A: '#forge:tools/mallets',
				B: `gtceu:${prev_size}_pipe_extruder_mold`,
				C: '#forge:tools/hammers'
			}).id(`tfg:shaped/${prev_size}_${size}_extruder_mold`)
		}
		prev_size = size;
	});

	global.TFG_EXTRUDER_MOLDS.forEach(mold => {

		TFGHelpers.registerMaterialInfo(mold, [GTMaterials.Steel, 4])

		event.recipes.gtceu.forming_press(`copy_shape_${linuxUnfucker(mold)}`)
			.itemInputs('gtceu:empty_mold')
			.notConsumable(mold)
			.itemOutputs(mold)
			.duration(120)
			.EUt(GTValues.VA[GTValues.LV])
	});

	global.TFG_CASTING_MOLDS.forEach(mold => {
		
		TFGHelpers.registerMaterialInfo(mold, [GTMaterials.Steel, 4])

		event.recipes.gtceu.forming_press(`copy_shape_${linuxUnfucker(mold)}`)
			.itemInputs('gtceu:empty_mold')
			.notConsumable(mold)
			.itemOutputs(mold)
			.duration(120)
			.EUt(GTValues.VA[GTValues.LV])
	});

};
