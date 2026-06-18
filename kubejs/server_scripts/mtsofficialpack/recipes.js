// priority: 0
"use strict";

/** @param {Internal.RecipesEventJS_} event */
const registerMTSOCPRecipes = (event) => {

	if (!Platform.isLoaded('mts') || !Item.exists('mts:mtsofficialpack.trafficcone')) return;
	
	event.remove({mod: 'mtsofficialpack' })

	//#region Parts

	event.recipes.gtceu.assembler('mts:mtsofficialpack.headlight')
		.itemInputs('1x #forge:plates/glowstone', '1x gtceu:glass_tube', '4x #forge:fine_wires/copper')
		.itemOutputs('mts:mtsofficialpack.headlight')
		.duration(100)
		.EUt(16);
		
	event.recipes.gtceu.assembler('mts:mtsofficialpack.sparkplug')
		.itemInputs('1x #forge:rings/rubber', '2x #forge:foils/rubber', '2x #forge:fine_wires/copper', '1x #forge:bolts/wrought_iron')
		.itemOutputs('mts:mtsofficialpack.sparkplug')
		.duration(60)
		.EUt(16);
		
	event.recipes.gtceu.assembler('mts:mtsofficialpack.piston')
		.itemInputs('1x #forge:rods/wrought_iron', '1x #forge:rings/rubber', '1x #forge:double_plates/wrought_iron', '2x #forge:bolts/wrought_iron')
		.inputFluids(Fluid.of('gtceu:lubricant', 100))
		.itemOutputs('mts:mtsofficialpack.piston')
		.duration(60)
		.EUt(16);
		
	event.recipes.gtceu.assembler('mts:mtsofficialpack.hydraulics')
		.itemInputs('1x #forge:rods/wrought_iron', '4x #forge:rings/rubber', '1x #forge:double_plates/wrought_iron', '2x #forge:bolts/wrought_iron')
		.inputFluids(Fluid.of('gtceu:oil', 100))
		.itemOutputs('mts:mtsofficialpack.hydraulics')
		.duration(60)
		.EUt(16);
		
	//#endregion
	
	//#region Usable Items
	
	event.shaped('mts:mtsofficialpack.repairkit', [
		'DED',
		'ABC',
		'DDD'
	], {
		A: '#forge:tools/wrenches',
		B: '#forge:tools/screwdrivers',
		C: '#forge:tools/crowbars',
		D: '#forge:plates/brass',
		E: '#forge:screws'
	}).id('mts:mtsofficialpack.repairkit')
	
	//#endregion
	
	//#region Blocks
	
	event.shaped('mts:mtsofficialpack.fuelpump', [
		' E ',
		'ACD',
		'ABA'
	], {
		A: '#forge:plates/wrought_iron',
		B: 'gtceu:ulv_machine_hull',
		C: 'minecraft:cauldron',
		D: 'mts:mts.fuelhose',
		E: '#forge:glass_panes'
	}).id('mts:mtsofficialpack.fuelpump')
	
	//#endregion
	
}
