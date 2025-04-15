// priority: 0

const registerWaterFlasksRecipes = (event) => {

	// Декрафт Unfinished Water Flask
	event.recipes.tfc.heating('waterflasks:unfinished_iron_flask', 1535)
		.resultFluid(Fluid.of('gtceu:iron', 144))
		.id(`waterflasks:heating/wrought_iron_unfinished_iron_flask`)

	// Декрафт Broken Water Flask
	event.recipes.tfc.heating('waterflasks:broken_iron_flask', 1535)
		.resultFluid(Fluid.of('gtceu:iron', 144))
		.id(`waterflasks:heating/wrought_iron_broken_iron_flask`)

	// Декрафт Water Flask
	event.recipes.tfc.heating('waterflasks:iron_flask', 1535)
		.resultFluid(Fluid.of('gtceu:iron', 144))
		.useDurability(true)
		.id(`waterflasks:heating/wrought_iron_iron_flask`)

	// Red steel flask
	event.recipes.tfc.heating('waterflasks:red_steel_flask', 1535)
		.resultFluid(Fluid.of('gtceu:red_steel', 144))
		.useDurability(true)
		.id(`waterflasks:heating/red_steel_flask`)

	//#region Кожанная фласка

	event.recipes.gtceu.assembler('tfg:water_flasks/leather_flask')
		.itemInputs('3x #forge:leather', '2x #forge:string')
		.circuit(1)
		.itemOutputs('waterflasks:leather_flask')
		.duration(250)
		.EUt(16)

	event.recipes.gtceu.assembler('tfg:water_flasks/leather_flask_repair')
		.itemInputs('waterflasks:broken_leather_flask', '#forge:leather', '2x #forge:string')
		.circuit(2)
		.itemOutputs('waterflasks:leather_flask')
		.duration(250)
		.EUt(16)

	//#endregion

	//#region Железная фласка

	event.replaceInput({ mod: 'waterflasks' }, 'tfc:burlap_cloth', '#forge:cloth')

	event.recipes.gtceu.assembler('tfg:water_flasks/iron_flask')
		.itemInputs('2x #forge:cloth', '#forge:string', '#forge:leather', '#forge:plates/wrought_iron')
		.circuit(5)
		.itemOutputs('waterflasks:iron_flask')
		.duration(250)
		.EUt(16)

	event.recipes.gtceu.assembler('tfg:water_flasks/iron_flask_repair')
		.itemInputs('waterflasks:broken_iron_flask', '#forge:cloth', '#forge:string', '#forge:leather')
		.circuit(6)
		.itemOutputs('waterflasks:iron_flask')
		.duration(250)
		.EUt(16)

	event.recipes.gtceu.assembler('tfg:water_flasks/red_steel_flask')
		.itemInputs('2x tfc:silk_cloth', '#forge:string', '#forge:leather', '#forge:plates/red_steel')
		.circuit(5)
		.itemOutputs('waterflasks:red_steel_flask')
		.duration(250)
		.EUt(16)

	//#endregion
}