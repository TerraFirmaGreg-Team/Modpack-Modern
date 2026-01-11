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

	event.create('tfg:critical_steam')
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
		.liquid(new GTFluidBuilder())
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

	event.create('tfg:tetrafluoroethane')
		.fluid()
		.gem()
		.flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.DISABLE_DECOMPOSITION)
		.iconSet(GTMaterialIconSet.QUARTZ)
		.components('2x carbon', '2x hydrogen', '4x fluorine')
		.color(0x46702e)

	event.create('tfg:booster_t3')
		.fluid()
		.color(0xb2c3e7)

	event.create('tfg:polyalkylene_lubricant')
		.fluid()
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

	event.create('tfg:americium_241')
		.ingot()
		.element(GTElements.get("americium_241"))
		.iconSet(GTMaterialIconSet.RADIOACTIVE)
		.flags(GTMaterialFlags.GENERATE_ROD)
		.color(0x0600ff)
		.secondaryColor(0x1b1d36)
		.radioactiveHazard(1000000)

	event.create('tfg:neptunium_237')
		.ingot()
		.element(GTElements.get("neptunium_237"))
		.iconSet(GTMaterialIconSet.RADIOACTIVE)
		.flags(GTMaterialFlags.GENERATE_ROD)
		.color(0x00df98)
		.secondaryColor(0xffffff)
		.radioactiveHazard(5000000)

	event.create('tfg:californium_252')
		.ingot()
		.element(GTElements.get("californium_252"))
		.iconSet(GTMaterialIconSet.RADIOACTIVE)
		.flags(GTMaterialFlags.GENERATE_ROD)
		.color(0xffba00)
		.secondaryColor(0xdfffff)
		.radioactiveHazard(10000000)

	//#endregion
	
	//#region Epoxidized Isosorbide Linolenate
	event.create('tfg:glucose')
		.dust()
		.components('6x carbon', '12x hydrogen', '6x oxygen')
		.color(0xFFE9E3)
	event.create('tfg:galactose')
		.dust()
		.components('6x carbon', '12x hydrogen', '6x oxygen')
		.color(0xEBE3FF)
	event.create('tfg:fructose')
		.dust()
		.components('6x carbon', '12x hydrogen', '6x oxygen')
		.iconSet(GTMaterialIconSet.SHINY)
		.color(0xE6FFE3)
	event.create('tfg:sorbitol')
		.dust()
		.components('6x carbon', '14x hydrogen', '6x oxygen')
		.iconSet(GTMaterialIconSet.FINE)
		.color(0xDEFEFF)
	event.create('tfg:14_sorbitan')
		.dust()
		.components('6x carbon', '12x hydrogen', '5x oxygen')
		.iconSet(GTMaterialIconSet.FINE)
		.color(0xB1F1F2)
	event.create('tfg:isosorbide')
		.dust()
		.components('6x carbon', '10x hydrogen', '4x oxygen')
		.iconSet(GTMaterialIconSet.FINE)
		.color(0x84D6DB)
	event.create('tfg:linolenic_acid')
		.liquid()
		.components('18x carbon', '30x hydrogen', '2x oxygen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xF5D478)
	event.create('tfg:isosorbide_ln')
		.liquid()
		.components('42x carbon', '66x hydrogen', '6x oxygen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xDB5178)
	event.create('tfg:epox_isosorbide_ln')
		.liquid()
		.components('42x carbon', '66x hydrogen', '12x oxygen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xAB2748)
	
	//#endregion

	//#region Isotopic Solvent

	// Organic Stabilizer
	event.create('tfg:organic_stabilizer')
    	.dust()
    	.components('49x carbon', '64x hydrogen', '6x oxygen', '1x nitrogen', '1x chlorine')
    	.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    	.color(0xd8c9b5)
    	.secondaryColor(0xb8a896)
		.iconSet(GTMaterialIconSet.BRIGHT)

	// Trace Catalyst Salt - E
	event.create('tfg:trace_catalyst_salt_e')
    	.dust()
    	.components(
        	'2x carbon',
        	'9x hydrogen',
        	'8x oxygen',
        	'1x copper',
        	'1x sodium',
        	'1x chlorine',
        	'1x magnesium',
        	'1x fluorine',
        	'1x sulfur')
    	.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    	.color(0xcad4cf)
    	.secondaryColor(0x9eb1a9)
		.iconSet(GTMaterialIconSet.EMERALD)

	// Sodium Fluoride
	event.create('tfg:sodium_fluoride')
    	.dust()
    	.components('1x sodium', '1x fluorine')
    	.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    	.color(0xffffff)
    	.secondaryColor(0xb7b9bd)
		.iconSet(GTMaterialIconSet.ROUGH)

	// Copper Trace Catalyst Dust
	event.create('tfg:copper_trace_catalyst_dust')
    	.dust()
    	.components('1x copper', '1x sodium', '1x chlorine', '1x magnesium', '1x fluorine', '1x sulfur', '6x oxygen', '1x hydrogen')
    	.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    	.color(0x4a2e1a)
    	.secondaryColor(0x7a5c47)
		.iconSet(GTMaterialIconSet.FINE)

	// Isotopic Solvent
	event.create('tfg:isotopic_solvent')
    	.liquid(new GTFluidBuilder().temperature(320))
    	.components(
        	'51x carbon',
        	'75x hydrogen',
        	'15x oxygen',
        	'1x nitrogen',
        	'2x chlorine',
        	'2x sodium',
        	'2x fluorine',
        	'1x copper',
        	'1x magnesium',
        	'1x sulfur',
        	'1x argon')
    	.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    	.color(0xd4b464)
    	.secondaryColor(0xa88e55)

	// Degraded Solvent Stream
	event.create('tfg:degraded_solvent_stream')
		.liquid(new GTFluidBuilder().temperature(350))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x8b4513)
		.secondaryColor(0xd2b48c)

	// Inert Dust Fraction
	event.create('tfg:inert_dust_fraction')
		.dust()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xaaaaaa)
		.secondaryColor(0x555555)
		.iconSet(GTMaterialIconSet.RADIOACTIVE)
		.radioactiveHazard(10000)

	// Residual Sludge
	event.create('tfg:residual_sludge')
		.liquid(new GTFluidBuilder().temperature(300))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x4b0082)
		.secondaryColor(0x8a2be2)

	// Gas Fraction
	event.create('tfg:gas_fraction')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(400))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xcccccc)
		.secondaryColor(0x999999)

	// Organic Degradation Slurry
	event.create('tfg:organic_degradation_slurry')
		.liquid(new GTFluidBuilder().temperature(300))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x556b2f)
		.secondaryColor(0x8fbc8f)

	// Recovered Ionic Complex
	event.create('tfg:recovered_ionic_complex')
		.dust()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xffff00)
		.secondaryColor(0xffa500)
		.iconSet(GTMaterialIconSet.SAND)

	// Mixed Radioactive Fluid
	event.create('tfg:mixed_radioactive_fluid')
		.liquid(new GTFluidBuilder().temperature(300))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xff4500)
		.secondaryColor(0xff6347)



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

  fuel("thorium_rod", 5000, 1, 0.7, false);		// Max Heat 139 - 1 Fuel
  fuel("uranium_rod", 20000, 1, 2.2, false);	// Max Heat 435 - 1 Fuel
  fuel("plutonium_rod", 30000, 4, 3, false);	// Max Heat 595 - 1 Fuel
  fuel("tbu_232_rod", 10000, 1, 2);				// Max Heat 396 - 1 Fuel

  fuel("americium_241_rod", 1000000, 1, 0.5);
  fuel("neptunium_237_rod", 50000, 1, 2);
  fuel("californium_252_rod", 500000, 1, 4);
});
