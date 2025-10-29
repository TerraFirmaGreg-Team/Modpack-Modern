// priority: 0
"use strict";

const registerTFGNuclearMaterials = (event) => {

	/*    event.create('mysterious_ooze')
			.fluid()
			.color(0x500bbf)
			.fluidTemp(69420)
			.dust()
			.cableProperties(GTValues.V[GTValues.LV], 69, 0, true) // Voltage, Amperage, EU loss, Is Superconductor.
			.gem(2, 4000) 
			.element(GTElements.C) 
			.ore(2, 3) 
			.color(0x7D2DDB)
			.iconSet(GTMaterialIconSet.LIGNITE)
			.ingot()
			.components('1x andesite', '1x iron')
			.color(0x839689)
			.iconSet(GTMaterialIconSet.DULL)
			.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR)
	*/

	//#region Fluid

	event.create('dense_steam')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(3730))
		.components('2x hydrogen', '1x oxygen')
		.flags(
			GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('radioactive_steam')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(3730))
		.components('2x hydrogen', '1x oxygen')
		.formula('H2O(?)')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('radioactive_waste')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(3730))
		.formula("(?)")
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('irradiated_steam')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(4250))
		.formula("(?)")
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:heavy_water')
		.liquid(new GTFluidBuilder().temperature(236))
		.components('2x deuterium', '1x oxygen')
		.iconSet(GTMaterialIconSet.FINE)
		.color(0xB5B9FF)
		.secondaryColor(0x81FFF9)

	event.create('tfg:semiheavy_water')
		.liquid(new GTFluidBuilder().temperature(213))
		.components('1x deuterium', '1x hydrogen', '1x oxygen')
		.iconSet(GTMaterialIconSet.FINE)
		.color(0xb5ffff)
		.secondaryColor(0x81FFF9)

	event.create('uranium_waste')
		.liquid(new GTFluidBuilder().customStill().temperature(3850))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.iconSet(GTMaterialIconSet.FINE)
		.color(0xB5B9FF)
		.secondaryColor(0x81FFF9)

	event.create('nuclear_waste')
		.liquid(new GTFluidBuilder().customStill().temperature(3850))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.formula('ThU(?)')

	event.create('dirty_hexafluorosilicic_acid')
		.liquid(new GTFluidBuilder().attribute(GTFluidAttributes.ACID))
		//.liquid(320)
		.formula('H2SiF6(?)')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xe6fafb)
		.secondaryColor(0xb5fdff)
		.iconSet(GTMaterialIconSet.getByName('thick_fluid'))

	event.create('martian_sludge')
		.liquid(new GTFluidBuilder().temperature(4239))
		.formula('(?)')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xd86f27)
		.secondaryColor(0xecd7c9)
		.iconSet(GTMaterialIconSet.getByName('bullshit'))

	event.create('dioxygen_difluoride')
		.fluid()
		.components('2x oxygen', '2x fluorine')
		.iconSet(GTMaterialIconSet.FINE)
		.color(0xfcb603)
		.secondaryColor(0xfc5e03)

	event.create('tritiated_water')
		.fluid()
		.components('2x tritium', '1x oxygen')
		.iconSet(GTMaterialIconSet.FINE)
		.color(0xb2c3e7)

	// FLiBe Line

	event.create('raw_rich_brine')
		.liquid(new GTFluidBuilder().customStill().temperature(293))

	event.create('hot_iodine_brine')
		.liquid(new GTFluidBuilder().customStill().temperature(293))
		.formula('HIMgCl(?)')

	event.create('brominated_iodine_vapor')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(412))
		.formula('HI(?)')

	event.create('basic_bromine_exhaust')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(406))

	event.create('dirty_flibe')
		.liquid(new GTFluidBuilder().customStill().temperature(293))
		.formula('FLiBe(?)')

	event.create('flibe')
		.liquid(new GTFluidBuilder().customStill().temperature(293))
		.formula('FLiBe')

	event.create('hot_flibe')
		.liquid(new GTFluidBuilder().customStill().temperature(3293))
		.formula('FLiBe')

	//#endregion

	//#region Dust

	event.create('tfg:nuclear_residue')
		.dust()
		.formula('(?)')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.iconSet(GTMaterialIconSet.SHINY)
		.color(0x332816)
		.secondaryColor(0x674c24)
		.iconSet(GTMaterialIconSet.RADIOACTIVE)

	event.create('tfg:oxidized_nuclear_residue')
		.dust()
		.formula('U?O?(?)')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.iconSet(GTMaterialIconSet.SHINY)
		.color(0x286529)
		.secondaryColor(0x012702)
		.iconSet(GTMaterialIconSet.RADIOACTIVE)

	event.create('tfg:refined_nuclear_residue')
		.dust()
		.formula('U?(?)')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x82c383)
		.secondaryColor('0xffffff')
		.iconSet(GTMaterialIconSet.RADIOACTIVE)

	// FLiBe Dusts

	event.create('lithium_carbonate')
		.dust()
		.components('2x lithium', '1x carbon', '3x oxygen')
		.formula('Li2CO3')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xffffff)
		.secondaryColor(0xb7b9bd)
		.iconSet(GTMaterialIconSet.GLASS)

	event.create('lithium_fluoride')
		.gem()
		.components('1x lithium', '1x fluorine')
		.formula('LiF')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0xffffff)
		.secondaryColor(0xb7b9bd)
		.iconSet(GTMaterialIconSet.FLINT)

	event.create('tetrafluoroberyllate')
		.gem()
		.components('1x beryllium', '4x fluorine')
		.formula('BeF4')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0xdcdee1)
		.secondaryColor(0xb7b9bd)
		.iconSet(GTMaterialIconSet.OPAL)

	//#endregion

	//#region Ingots

	event.create('thorium_230')
		.ingot()
		.element(GTElements.get("thorium_230"))
		.iconSet(GTMaterialIconSet.RADIOACTIVE)
		.flags(GTMaterialFlags.GENERATE_ROD)
		.color(0xf8a8c0)
		.secondaryColor(0xcd8dbc)
		.radioactiveHazard(1000000)

	event.create("thorium_232")
		.ingot()
		.element(GTElements.get("thorium_232"))
		.iconSet(GTMaterialIconSet.RADIOACTIVE)
		.flags(GTMaterialFlags.GENERATE_ROD)
		.color(0x694c66)
		.radioactiveHazard(1000)

	event.create("ostrum_iodide")
		.ingot()
		.components('2x ostrum', 'iodine')
		.blastTemp(3700, 'mid', GTValues.VA[GTValues.IV], (20*120))
		.iconSet(GTMaterialIconSet.BRIGHT)
		.flags(GTMaterialFlags.GENERATE_GEAR)
		.color(0xc696f2)
		.secondaryColor(0x9b99ff)

	//#endregion

	//#region Fuel Pellet

	/*
	Adding the Fuel Rod, the textures are applied through a model.json
	Durability
	Number of rod unused for now
	%Heat
	In ReactorCurve getHeating returns fuelHeat * 200.0d * throttle and getCooling returns _state.Heat() * (coolantConversion + 0.01).
	Where coolantConversion is 1.00 if enough coolant is present. Solving that equation for a steady-state: heating + cooling = 0.
	When throttle=coolantConversion=1:heat = fuelHeat * 200.0d / 1.01
	So one 100% cell is 198.0198 heat it should reach. Simulation accuracy might of course throw that off by a small margin.
	So purely passively it reaches 20000.0 heat.
	*/

}

const $FuelCellItem = Java.loadClass("fi.dea.mc.deafission.common.data.items.FuelCellItem");

StartupEvents.registry("item", (event) => {
	event.createCustom("tfg:thorium_rod", () => {
		return new $FuelCellItem(
			5000,
			1,
			0.7 // Max Heat 139 - 1 Fuel
		);
	})
	event.createCustom("tfg:uranium_rod", () => {
		return new $FuelCellItem(
			20000,
			1,
			2.2 // Max Heat 435 - 1 Fuel
		);
	})
	event.createCustom("tfg:plutonium_rod", () => {
		return new $FuelCellItem(
			30000,
			1,
			3.0 // Max Heat 595 - 1 Fuel
		);
	})

	event.createCustom("tfg:tbu_232_rod", () => {
		return new $FuelCellItem(
			20000,
			1,
			2.0
		);
	})
});
