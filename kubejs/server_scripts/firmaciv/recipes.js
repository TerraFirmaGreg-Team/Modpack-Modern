// priority: 0
"use strict";

const registerFirmaCivRecipes = (event) => {

	//#region Удаление рецептов

	event.remove({ id: '/firmaciv:quern/' })
	event.remove({ id: 'firmaciv:anvil/copper_bolt' })
	event.remove({ id: 'firmaciv:crafting/watercraft_frame_angled_2' }) // Как же меня заебал разраб со своими кривыми руками
	event.remove("firmaciv:heating/cleat")
	event.remove("firmaciv:heating/oarlock")
	event.remove("firmaciv:heating/cannonball")

	//#endregion

	//#region Unfinished Sextant
	event.recipes.tfc.heating('firmaciv:unfinished_sextant', 930)
		.resultFluid(Fluid.of('gtceu:brass', 288))
		.id(`firmaciv:heating/unfinished_sextant`)
	//#endregion

	//#region Sextant
	event.recipes.gtceu.assembler('tfg:firmaciv/sextant')
		.itemInputs('#forge:plates/brass', '#forge:small_gears/brass', '#forge:glass_panes')
		.circuit(10)
		.itemOutputs('firmaciv:sextant')
		.duration(75)
		.EUt(4)

	event.recipes.tfc.heating('firmaciv:sextant', 930)
		.resultFluid(Fluid.of('gtceu:brass', 288))
		.id(`firmaciv:heating/sextant`)
	//#endregion

	//#region Unfinished Navigator Timepiece
	event.recipes.tfc.heating('firmaciv:unfinished_nav_clock', 930)
		.resultFluid(Fluid.of('gtceu:brass', 288))
		.id(`firmaciv:heating/unfinished_nav_clock`)

	//#endregion

	//#region Navigator Timepiece
	event.recipes.gtceu.assembler('tfg:firmaciv/nav_clock')
		.itemInputs('2x #forge:plates/brass', '3x #forge:small_gears/brass', '2x #forge:glass_panes')
		.circuit(11)
		.itemOutputs('firmaciv:nav_clock')
		.duration(75)
		.EUt(4)

	event.recipes.tfc.heating('firmaciv:nav_clock', 930)
		.resultFluid(Fluid.of('gtceu:brass', 576))
		.id(`firmaciv:heating/nav_clock`)
	//#endregion

	//#region Unfinished Barometer
	event.recipes.tfc.heating('firmaciv:unfinished_barometer', 930)
		.resultFluid(Fluid.of('gtceu:brass', 144))
		.id(`firmaciv:heating/unfinished_barometer`)
	//#endregion

	//#region Barometer
	event.recipes.gtceu.assembler('tfg:firmaciv/barometer')
		.itemInputs('#forge:plates/brass', '2x #forge:small_gears/brass', '#forge:glass_panes')
		.inputFluids("#tfg:clean_water 1000")
		.circuit(12)
		.itemOutputs('firmaciv:barometer')
		.duration(75)
		.EUt(4)

	event.recipes.tfc.heating('firmaciv:barometer', 930)
		.resultFluid(Fluid.of('gtceu:brass', 216))
		.id(`firmaciv:heating/barometer`)
	//#endregion

	//#region Compass
	event.recipes.gtceu.assembler('tfg:firmaciv/compass')
		.itemInputs('#forge:plates/wrought_iron', '#forge:bolts/magnetic_iron', '#forge:glass_panes')
		.circuit(21)
		.itemOutputs('firmaciv:firmaciv_compass')
		.duration(100)
		.EUt(4)

	event.shapeless('firmaciv:firmaciv_compass', ['tfc:lens', '#tfc:bowls', '#tfc:magnetic_rocks'])
	//#endregion

	//#region Cannon Barrel
	event.recipes.gtceu.assembler('tfg:firmaciv/cannon_barrel')
		.itemInputs('#forge:double_plates/wrought_iron')
		.circuit(11)
		.itemOutputs('firmaciv:cannon_barrel')
		.duration(75)
		.EUt(4)

	event.recipes.tfc.heating('firmaciv:cannon_barrel', 1535)
		.resultFluid(Fluid.of('gtceu:iron', 288))
		.id(`firmaciv:heating/cannon_barrel`)
	//#endregion

	//#region Cannon
	event.recipes.tfc.heating('firmaciv:cannon', 1535)
		.resultFluid(Fluid.of('gtceu:iron', 1008))
		.id(`firmaciv:heating/cannon`)
	//#endregion

	// #region More rope
	event.replaceInput({ output: 'firmaciv:rope_coil'}, 'tfc:jute_fiber', '#tfg:burlap_fiber')

	event.shaped('firmaciv:rope_coil', [
		'A ',
		'AB',
		'A '
	], {
		A: '#forge:cloth',
		B: '#forge:wax'
	}).id('tfg:firmaciv/rope_coil_from_cloth')
	// #endregion

	event.replaceInput({id: 'firmaciv:crafting/small_triangular_sail'}, 'tfc:wool_cloth', '#forge:cloth')
}
