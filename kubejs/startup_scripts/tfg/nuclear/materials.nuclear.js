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

	// Steam

	event.create('dense_steam')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(3730))
		.components('2x hydrogen', '1x oxygen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('critical_steam')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(3730))
		.components('2x hydrogen', '1x oxygen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('radioactive_steam')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(3730))
		.components('1x water', '1x unknown')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('radioactive_waste')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(3730))
		.components('1x unknown')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('irradiated_steam')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(4250))
		.components('1x water', '1x unknown')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	// Coolant

	event.create('tfg:heavy_water')
		.liquid(new GTFluidBuilder().temperature(236))
		.components('2x deuterium', '1x oxygen')
		.color(0xB5B9FF)
		.secondaryColor(0x81FFF9)

	event.create('tfg:semiheavy_water')
		.liquid(new GTFluidBuilder().temperature(213))
		.components('1x deuterium', '1x hydrogen', '1x oxygen')
		.color(0xb5ffff)
		.secondaryColor(0x81FFF9)

	event.create('tfg:boron_enriched_coolant')
		.liquid(new GTFluidBuilder().temperature(213))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x43D6E4)
		.secondaryColor(0x2C9AAF)

	event.create('tfg:hot_boron_enriched_coolant')
		.liquid(new GTFluidBuilder().temperature(2000))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xFF715B)
		.secondaryColor(0xFF9D6E)

	// Fision Waste

	event.create('uranium_waste')
		.liquid(new GTFluidBuilder().customStill().temperature(3850))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xB5B9FF)
		.secondaryColor(0x81FFF9)

	event.create('nuclear_waste')
		.liquid(new GTFluidBuilder().customStill().temperature(3850))
		.components('1x thorium', '1x uranium', '1x unknown')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	// Plutonium Line

	event.create('dirty_hexafluorosilicic_acid')
		.liquid(new GTFluidBuilder().attribute(GTFluidAttributes.ACID))
		.components('2x hydrogen', '1x silicon', '6x fluorine', '1x unknown')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xe6fafb)
		.secondaryColor(0xb5fdff)
		.iconSet(GTMaterialIconSet.getByName('thick_fluid'))

	event.create('martian_sludge')
		.liquid(new GTFluidBuilder().temperature(4239))
		.components('1x unknown')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xd86f27)
		.secondaryColor(0xecd7c9)
		.iconSet(GTMaterialIconSet.getByName('bullshit'))

	event.create('dioxygen_difluoride')
		.liquid(new GTFluidBuilder().temperature(110).attribute(GTFluidAttributes.ACID))
		.components('2x oxygen', '2x fluorine')
		.color(0xfcb603)
		.secondaryColor(0xfc5e03)

	event.create('tritiated_water')
		.fluid()
		.components('2x tritium', '1x oxygen')
		.color(0xb2c3e7)

	// FLiBe Line

	event.create('raw_rich_brine')
		.liquid(new GTFluidBuilder().customStill().temperature(293))

	event.create('hot_iodine_brine')
		.liquid(new GTFluidBuilder().customStill().temperature(293))
		.components('1x hydrogen', '1x iodine', '1x magnesium', '1x chlorine', '1x unknown')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('brominated_iodine_vapor')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(412))
		.components('1x hydrogen', '1x iodine', '1x unknown')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('basic_bromine_exhaust')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(406))
		.components('1x bromine', '1x unknown')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('flibe')
		.liquid(new GTFluidBuilder().customStill().temperature(293))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.components('1x fluorine', '1x lithium', '1x beryllium')

	event.create('dirty_flibe')
		.liquid(new GTFluidBuilder().customStill().temperature(293))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.components('1x flibe', '1x unknown')

	event.create('hot_flibe')
		.liquid(new GTFluidBuilder().customStill().temperature(3293))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.components('1x flibe')

	//#endregion

	//#region Dust

	event.create('tfg:nuclear_residue')
		.dust()
		.components('1x unknown')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.iconSet(GTMaterialIconSet.SHINY)
		.color(0x332816)
		.secondaryColor(0x674c24)
		.iconSet(GTMaterialIconSet.RADIOACTIVE)

	event.create('tfg:oxidized_nuclear_residue')
		.dust()
		.components('1x uranium', '1x oxygen', '2x unknown')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.iconSet(GTMaterialIconSet.SHINY)
		.color(0x286529)
		.secondaryColor(0x012702)
		.iconSet(GTMaterialIconSet.RADIOACTIVE)

	event.create('tfg:refined_nuclear_residue')
		.dust()
		.components('1x uranium', '2x unknown')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x82c383)
		.secondaryColor('0xffffff')
		.iconSet(GTMaterialIconSet.RADIOACTIVE)

	// FLiBe Dusts

	event.create('lithium_carbonate')
		.dust()
		.components('2x lithium', '1x carbon', '3x oxygen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xffffff)
		.secondaryColor(0xb7b9bd)
		.iconSet(GTMaterialIconSet.GLASS)

	event.create('lithium_fluoride')
		.gem()
		.components('1x lithium', '1x fluorine')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0xffffff)
		.secondaryColor(0xb7b9bd)
		.iconSet(GTMaterialIconSet.FLINT)

	event.create('tetrafluoroberyllate')
		.gem()
		.components('1x beryllium', '4x fluorine')
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

	event.create('americium_241')
		.ingot()
		.element(GTElements.get("americium_241"))
		.iconSet(GTMaterialIconSet.RADIOACTIVE)
		.flags(GTMaterialFlags.GENERATE_ROD)
		.color(0x0600ff)
		.secondaryColor(0x1b1d36)
		.radioactiveHazard(1000000)

	event.create('neptunium_237')
		.ingot()
		.element(GTElements.get("neptunium_237"))
		.iconSet(GTMaterialIconSet.RADIOACTIVE)
		.flags(GTMaterialFlags.GENERATE_ROD)
		.color(0x00df98)
		.secondaryColor(0xffffff)
		.radioactiveHazard(5000000)

	event.create('californium_252')
		.ingot()
		.element(GTElements.get("californium_252"))
		.iconSet(GTMaterialIconSet.RADIOACTIVE)
		.flags(GTMaterialFlags.GENERATE_ROD)
		.color(0xffba00)
		.secondaryColor(0xdfffff)
		.radioactiveHazard(10000000)

	event.create("ostrum_iodide")
		.ingot()
		.components('2x ostrum', 'iodine')
		.blastTemp(3700, 'mid', GTValues.VA[GTValues.IV], (20*120))
		.iconSet(GTMaterialIconSet.BRIGHT)
		.flags(GTMaterialFlags.GENERATE_GEAR)
		.color(0xc696f2)
		.secondaryColor(0x9b99ff)

	//#endregion

};

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

const $FuelCellItem = Java.loadClass("fi.dea.mc.deafission.common.data.items.FuelCellItem");
const $DepletedFuelCellItem = Java.loadClass("fi.dea.mc.deafission.common.data.items.DepletedFuelCellItem");

//const $ComponentTotals = Java.loadClass("fi.dea.mc.deafission.core.components.ComponentTotals");
//const $ReactorBaseStats = Java.loadClass("fi.dea.mc.deafission.core.ReactorBaseStats");
//$ReactorBaseStats.Smr1 = new $ComponentTotals(200, 0, 0);

StartupEvents.registry("item", (event) => {
  const fuel = function(id, durability, rods, heat, createDepleted) {

    if (createDepleted === undefined) createDepleted = true;

    event.createCustom("tfg:" + id, () => {
      return new $FuelCellItem(
        durability,
        rods,
        heat
      );
    });

    if (createDepleted) {
      event.createCustom("tfg:depleted_" + id, () => {
        return new $DepletedFuelCellItem();
      });
    }
  };

  fuel("thorium_rod", 5000, 1, 0.7, false);// Max Heat 139 - 1 Fuel
  fuel("uranium_rod", 20000, 1, 2.2, false);// Max Heat 435 - 1 Fuel
  fuel("plutonium_rod", 30000, 4, 3, false);// Max Heat 595 - 1 Fuel
  fuel("tbu_232_rod", 10000, 1, 2);

  fuel("americium_241_rod", 1000000, 1, 0.5);
  fuel("neptunium_237_rod", 50000, 1, 2);
  fuel("californium_252_rod", 500000, 1, 4);
});
