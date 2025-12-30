// priority: 0
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS_} event 
 */
function registerTFGRPPRecipes(event) {
	
	//Change mixed rhodium palladium dust centrifuging so you don't lose items
	event.remove({id:'gtceu:centrifuge/decomposition_centrifuging__rhodium_plated_palladium'})
	event.recipes.gtceu.centrifuge('tfg:rpp/decomposition_centrifuging_rhodium_plated_palladium')
		.itemInputs('3x #forge:dusts/rhodium_plated_palladium')
		.itemOutputs('3x #forge:dusts/palladium', '1x #forge:dusts/rhodium')
		.duration(630)
		.EUt(GTValues.VA[GTValues.LV])
	
	//Remove all the old recipes
	
	event.remove({id: /.*extractor.*rhodium_plated_palladium.*/ })
	event.remove({id: /.*alloy_smelter.*rhodium_plated_palladium.*/ })
	event.remove({id: /.*vacuum_freezer.*rhodium_plated_palladium.*/ })
	event.remove({id: /.*mixer.*rhodium_plated_palladium/ })
	//EBF + ABS
	event.remove({id: /.*blast.*rhodium_plated_palladium.*/ })
	event.remove({id: /.*fluid_solidifier.*rhodium_plated_palladium.*/ })
	event.remove({id: /.*extruder.*rhodium_plated_palladium.*/ })
	//Crafting table recipes, excluding the buzzsaw tool and turbine blade
	event.remove({not: {id: /(.*rhodium_plated_palladium_buzzsaw.*)|(.*turbine_blade_rhodium_plated_palladium.*)/ } , id: /.*shaped.*rhodium_plated_palladium.*/ })
	event.remove({id: /.*lathe.*rhodium_plated_palladium.*/ })
	event.remove({id: /.*compressor.*rhodium_plated_palladium.*/ })
	event.remove({id: /.*bender.*rhodium_plated_palladium.*/ })
	event.remove({id: /.*forge_hammer.*rhodium_plated_palladium.*/ })
	event.remove({id: /.*cutter.*rhodium_plated_palladium.*/ })
	
	//And add new ones
	
	//rhodium solution
	event.recipes.gtceu.mixer('tfg:rpp/rhodium_solution')
			.itemInputs(Ingredient.of('#forge:dusts/rhodium'))
			.inputFluids(Fluid.of('gtceu:sulfuric_acid', 3000))
			.outputFluids(Fluid.of('tfg:rhodium_solution', 3000))
			.duration(9*20)
			.EUt(GTValues.VA[GTValues.HV])
	
	event.recipes.gtceu.mixer('tfg:rpp/rhodium_solution_small')
			.itemInputs(Ingredient.of('#forge:small_dusts/rhodium'))
			.inputFluids(Fluid.of('gtceu:sulfuric_acid', 750))
			.outputFluids(Fluid.of('tfg:rhodium_solution', 750))
			.duration((9*20)/4)
			.EUt(GTValues.VA[GTValues.HV])
	
	event.recipes.gtceu.centrifuge('tfg:rpp/decomposition_centrifuging_rhodium_solution')
			.inputFluids(Fluid.of('tfg:rhodium_solution', 750))
			.itemOutputs(Ingredient.of('#forge:small_dusts/rhodium'))
			.outputFluids(Fluid.of('gtceu:sulfuric_acid', 750))
			.duration(200)
			.EUt(GTValues.VA[GTValues.LV])
	
	//electroplating
	const item_types = [
		{ input: '#forge:ingots/palladium', fluidQuantity: 1000 , output: 'ingot' , outputPrefix: ''},
		{ input: '#forge:plates/palladium', fluidQuantity: 1000 , output: 'plate' , outputPrefix: ''},
		{ input: '#forge:rods/palladium', fluidQuantity: 500 , output: 'rod' , outputPrefix: ''},
		{ input: '#forge:rings/palladium', fluidQuantity: 250 , output: 'ring' , outputPrefix: ''},
		{ input: '#forge:small_gears/palladium', fluidQuantity: 1000 , output: 'gear' , outputPrefix: 'small_'},
		{ input: '#forge:rods/long/palladium', fluidQuantity: 1000 , output: 'rod' , outputPrefix: 'long_'},
		{ input: '#forge:double_plates/palladium', fluidQuantity: 2000 , output: 'plate' , outputPrefix: 'double_'},
		{ input: '#forge:rotors/palladium', fluidQuantity: 4000 , output: 'rotor' , outputPrefix: ''},
		{ input: '#forge:whisks/palladium', fluidQuantity: 4000 , output: 'whisk' , outputPrefix: ''},
		{ input: '#forge:bolts/palladium', fluidQuantity: 125 , output: 'bolt' , outputPrefix: ''},
		{ input: '#forge:screws/palladium', fluidQuantity: 125 , output: 'screw' , outputPrefix: ''},
		{ input: '#forge:buzz_saw_heads/palladium', fluidQuantity: 2000 , output: 'buzz_saw_blade' , outputPrefix: ''},
		{ input: '#forge:dense_plates/palladium', fluidQuantity: 9000 , output: 'plate' , outputPrefix: 'dense_'}
	];
	item_types.forEach((item) => {
		event.recipes.gtceu.electrolyzer(`tfg:rpp/rpp_${item.outputPrefix}${item.output}`)
			.itemInputs(Ingredient.of(item.input))
			.inputFluids(Fluid.of('tfg:rhodium_solution', item.fluidQuantity))
			.itemOutputs(`gtceu:${item.outputPrefix}rhodium_plated_palladium_${item.output}`)
			.outputFluids(Fluid.of('gtceu:diluted_sulfuric_acid', item.fluidQuantity))
			.duration(item.fluidQuantity*1)
			.EUt(GTValues.VA[GTValues.IV])
	});
	
	//correct recycling counts
	TFGHelpers.registerMaterialInfo('gtceu:rhodium_plated_palladium_whisk', { 'rhodium_plated_palladium': 4 });
	TFGHelpers.registerMaterialInfo('gtceu:rhodium_plated_palladium_buzz_saw_blade', { 'rhodium_plated_palladium': 2 });
	
	//remove greate recycling until registerMaterialInfo + greate recycling works on first load
	//TODO: remove this once greate recycling works properly
	event.remove({id:/.*greate.*integration.*palladium_whisk/})
	event.remove({id:/.*greate.*integration.*rhodium_plated_palladium_buzz_saw_blade/})
	
}