// priority: 0

function registerTFGNuclearRecipes(event) {

	//#region Nuclear Pellet

	event.recipes.gtceu.nuclear_fuel_factory('tfg:thorium_pellet')
		.itemInputs('10x #forge:ingots/thorium_230', '90x #forge:ingots/thorium_232', 'tfg:empty_rod')
		.itemOutputs('tfg:thorium_rod')
		.duration(20*100)
		.EUt(GTValues.V[GTValues.HV])

	event.recipes.gtceu.nuclear_fuel_factory('tfg:uranium_pellet')
		.inputFluids(Fluid.of('gtceu:uranium_waste', 10000))
		.itemInputs('10x #forge:ingots/uranium_235', '90x #forge:ingots/uranium', 'tfg:empty_rod')
		.itemOutputs('tfg:uranium_rod')
		.duration(20*300)
		.EUt(GTValues.V[GTValues.HV])

	event.recipes.gtceu.nuclear_fuel_factory('tfg:plutonium_pellet')
		.itemInputs('90x #forge:ingots/plutonium', 'tfg:empty_rod')
		.inputFluids(Fluid.of('gtceu:radon', 100))
		.itemOutputs('tfg:plutonium_rod')
		.duration(20*300)
		.EUt(GTValues.V[GTValues.EV])
	/* REMOVE FOR VENUS COMMENTED OUT
	event.recipes.gtceu.nuclear_fuel_factory('tfg:tbu_232_rod')
		.inputFluids(Fluid.of('gtceu:nuclear_waste', 32000))
		.itemInputs('#forge:ingots/thorium_232', 'tfg:empty_rod')
		.itemOutputs('tfg:tbu-232_rod')
		.duration(20*300)
		.EUt(GTValues.V[GTValues.IV])
	*/
	event.recipes.gtceu.lathe('tfg:empty_rod')
		.itemInputs('gtceu:cobalt_large_restrictive_item_pipe', 'tfg:empty_rod')
		.itemOutputs('tfg:empty_rod')
		.duration(20*15)
		.EUt(GTValues.VA[GTValues.HV])

	//#endregion

	//#region Processing Fuels

	event.recipes.gtceu.centrifuge('thorium_isotope')
		//.inputFluids(Fluid.of('minecraft:water', 50))
		.itemInputs('9x #forge:dusts/thorium')
		.chancedOutput('#forge:dusts/thorium_230', 9000, 0)
		.itemOutputs('8x #forge:dusts/thorium_232')
		.duration(20*30)
		.EUt(GTValues.VA[GTValues.HV])

	//#endregion

	//#region Mars Water

	event.recipes.gtceu.centrifuge('mars_heavy_water')
		.inputFluids(Fluid.of('tfg:heavy_ammoniacal_water', 1000))
		.outputFluids(Fluid.of('tfg:heavy_water', 500))
		.itemOutputs('#forge:dusts/ammonium_chloride', '2x #forge:small_dusts/ammonium_chloride')
		.duration(20*9)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.centrifuge('mars_semiheavy_water')
		.inputFluids(Fluid.of('tfg:semiheavy_ammoniacal_water', 1000))
		.outputFluids(Fluid.of('tfg:semiheavy_water', 500))
		.itemOutputs('2x #forge:tiny_dusts/ammonium_chloride')
		.duration(20*9)
		.EUt(GTValues.VA[GTValues.MV])

	// Martian Sludge

	event.recipes.gtceu.chemical_bath('dirty_hexafluorosilicic_acid')
		.itemInputs('32x #forge:mars_stone_dusts')
		.inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 1000))
		.outputFluids(Fluid.of('gtceu:dirty_hexafluorosilicic_acid', 1000))
		.duration(20*8)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.centrifuge('martian_sludge')
		.inputFluids(Fluid.of('gtceu:dirty_hexafluorosilicic_acid', 1000))
		.outputFluids(Fluid.of('gtceu:martian_sludge', 1000))
		.outputFluids(Fluid.of('gtceu:hydrogen', 1000))
		.outputFluids(Fluid.of('gtceu:fluorine', 1000))
		.duration(20*16)
		.EUt(GTValues.VA[GTValues.IV])

	// Plutonium Process

	event.recipes.gtceu.gas_pressurizer('nuclear_residue')
		.inputFluids(Fluid.of('gtceu:martian_sludge', 1000))
		.inputFluids(Fluid.of('gtceu:formamide', 1000))
		.inputFluids(Fluid.of('gtceu:radioactive_waste', 1000))
		.outputFluids(Fluid.of('gtceu:radon', 1000))
		.itemOutputs('#forge:dusts/nuclear_residue')
		.duration(20*30)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.vacuum_freezer('oxidized_nuclear_residue')
		.itemInputs('#forge:dusts/nuclear_residue')
		.inputFluids(Fluid.of('gtceu:dioxygen_difluoride', 1000))
		.outputFluids(Fluid.of('gtceu:residual_radioactive_concoction', 1000))
		.itemOutputs('#forge:dusts/oxidized_nuclear_residue')
		.duration(20*5)
		.EUt(GTValues.VA[GTValues.IV])

	event.recipes.gtceu.centrifuge('refined_nuclear_residue')
		.inputFluids(Fluid.of('gtceu:distilled_water', 1000))
		.itemInputs('#forge:dusts/oxidized_nuclear_residue')
		.itemOutputs('#forge:dusts/refined_nuclear_residue')
		.outputFluids(Fluid.of('gtceu:hydrofluoric_acid', 2000))
		.outputFluids(Fluid.of('gtceu:oxygen', 1000))
		.duration(20*30)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.large_chemical_reactor('dioxygen_difluoride')
		.inputFluids(Fluid.of('gtceu:oxygen', 2000))
		.inputFluids(Fluid.of('gtceu:fluorine', 2000))
		.outputFluids(Fluid.of('gtceu:dioxygen_difluoride', 1000))
		.duration(20*16)
		.EUt(GTValues.VA[GTValues.IV])

	event.recipes.gtceu.large_chemical_reactor('plutonium_dust')
		.itemInputs('#forge:dusts/refined_nuclear_residue')
		.inputFluids(Fluid.of('gtceu:hydrogen', 2000))
		.itemOutputs('#forge:dusts/plutonium')
		.outputFluids(Fluid.of('gtceu:steam', 1000))
		.duration(20*15)
		.EUt(GTValues.VA[GTValues.IV])

	//#endregion

	//#region Heat Exchanger

	event.recipes.gtceu.heat_exchanger('uranium_steam')
		.perTick(true)
		.inputFluids(Fluid.of('minecraft:water', 10))
		.inputFluids(Fluid.of('gtceu:radioactive_steam', 10))
		.inputFluids(Fluid.of('gtceu:ammonium_formate', 10))
		.outputFluids(Fluid.of('gtceu:dense_steam', 10))
		.outputFluids(Fluid.of('gtceu:formamide', 10))
		.perTick(false)
		.duration(20*10)
		.EUt(1)

	event.recipes.gtceu.heat_exchanger('plutonium_steam')
		.perTick(true)
		.inputFluids(Fluid.of('minecraft:water', 10))
		.inputFluids(Fluid.of('gtceu:irradiated_steam', 10))
		.outputFluids(Fluid.of('gtceu:dense_steam', 10))
		.perTick(false)
		.duration(20*10)
		.EUt(1)

	// Heat Exchanger for Energy

	event.recipes.gtceu.heat_exchanger('flibe_cooling')
		.inputFluids(Fluid.of('gtceu:hot_flibe', 10))
		.inputFluids(Fluid.of('gtceu:distilled_water', 10))
		.chancedFluidInput(Fluid.of('gtceu:hastelloy_c_276', 10), 5000, 0)
		.chancedFluidOutput(Fluid.of('gtceu:flibe', 10), 9500, 0)
		.outputFluids(Fluid.of('gtceu:dense_steam', 10))
		.duration(20*10)
		.EUt(1)

	//#endregion

	//#region Fission Reactor

	// Recipe for Thorium Reactor Just keeping it in case we got mod issues
/*	event.recipes.gtceu.fission_reactor('thorium_uranium_waste')
		.itemInputs('#forge:bolts/thorium_rod')
		.inputFluids(Fluid.of('minecraft:water', 100))
		.outputFluids(Fluid.of('gtceu:dense_steam', 100))
		.outputFluids(Fluid.of('gtceu:uranium_waste', 20))
		.duration(20*50)
		.EUt(32)*/

    event.recipes.deafission.fission_reactor_fuel('tfg:thorium')
		.itemInputs(Item.of('tfg:thorium_rod'))
		.outputFluids(Fluid.of('gtceu:uranium_waste', 2500))
		.itemOutputs(Item.of('tfg:empty_rod'))
        .hideDuration(true);
    
    event.recipes.deafission.fission_reactor_coolant('tfg:thorium_coolant')
		.notConsumable(Item.of('tfg:thorium_rod'))
		.perTick(true)
		.inputFluids(Fluid.of('minecraft:water', 400))
		.outputFluids(Fluid.of('gtceu:dense_steam', 2))
		.perTick(false)
        .duration(1);

	// Recipe for energy only reactor Just keeping it in case we got mod issues
/*	event.recipes.gtceu.fission_reactor('thorium_nuclear_waste')
		.itemInputs('#forge:bolts/thorium_pellet')
		.inputFluids(Fluid.of('gtceu:distilled_water', 200))
		.outputFluids(Fluid.of('gtceu:dense_steam', 200))
		.outputFluids(Fluid.of('gtceu:nuclear_waste', 10))
		.duration(20*100)
		.EUt(32)*/

	// Recipe for Uranium Reactor Just keeping it in case we got mod issues
/*	event.recipes.gtceu.fission_reactor('uranium_radioactive')
		.itemInputs('#forge:bolts/uranium_rod')
		.inputFluids(Fluid.of('tfg:heavy_water', 75))
		.outputFluids(Fluid.of('gtceu:radioactive_steam', 75))
		.outputFluids(Fluid.of('gtceu:radioactive_waste', 50))
		.duration(20*100)
		.EUt(32)*/

    event.recipes.deafission.fission_reactor_fuel('tfg:uranium')
		.itemInputs(Item.of('tfg:uranium_rod'))
		.outputFluids(Fluid.of('gtceu:radioactive_waste', 50000))
		.itemOutputs(Item.of('tfg:empty_rod'))
        .hideDuration(true);
    
    event.recipes.deafission.fission_reactor_coolant('tfg:uranium_coolant')
		.notConsumable(Item.of('tfg:uranium_rod'))
		.perTick(true)
		.inputFluids(Fluid.of('tfg:heavy_water', 25))
		.outputFluids(Fluid.of('gtceu:radioactive_steam', 10))
		.perTick(false)
        .duration(1);

	// Recipe for Plutonium Reactor Just keeping it in case we got mod issues
/*	event.recipes.gtceu.fission_reactor('plutonium_irradiated')
		.itemInputs('#forge:bolts/plutonium_rod')
		.inputFluids(Fluid.of('tfg:heavy_water', 2000))
		.outputFluids(Fluid.of('gtceu:irradiated_steam', 2000))
		.outputFluids(Fluid.of('gtceu:tritiated_water', 50))
		.duration(20*100)
		.EUt(32)*/

    event.recipes.deafission.fission_reactor_fuel('tfg:plutonium')
		.itemInputs(Item.of('tfg:plutonium_rod'))
		.outputFluids(Fluid.of('gtceu:tritiated_water', 5000))
		.itemOutputs(Item.of('tfg:empty_rod'))
        .hideDuration(true);
    
    event.recipes.deafission.fission_reactor_coolant('tfg:plutonium_coolant')
		.notConsumable(Item.of('tfg:plutonium_rod'))
		.perTick(true)
		.inputFluids(Fluid.of('tfg:heavy_water', 50))
		.outputFluids(Fluid.of('gtceu:irradiated_steam', 10))
		.perTick(false)
        .duration(1);

	// Fission Reactor for Energy Just keeping it in case we got mod issues
/*
	event.recipes.gtceu.fission_reactor('tbu_reactor')
		.itemInputs('tfg:tbu_232_rod')
		.inputFluids(Fluid.of('gtceu:flibe', 1000))
		.outputFluids(Fluid.of('gtceu:hot_flibe', 1000))
		.outputFluids(Fluid.of('gtceu:nuclear_waste', 500))
		.duration(20*100)
		.EUt(32)
*/
	//#endregion

	//#region Fission Recipes for cooling

	event.recipes.deafission.fission_reactor_processing('tfg:dry_ice')
		.itemInputs('tfg:dry_ice')
		.itemOutputs('minecraft:coal')
        .blastFurnaceTemp(100)
		.duration(20)
		.EUt(1)

	//#endregion

	//#region Power Generation

	event.recipes.gtceu.nuclear_turbine('dense_steam')
		.inputFluids(Fluid.of('gtceu:dense_steam', 1))
		.EUt(-(32))
		.duration(20*1.5)

	//#endregion

	//#region FLiBe Line - SCRAP FROM MARS TO VENUS

	/*

	event.recipes.gtceu.evaporation_tower('raw_rich_brine_earth')
		.inputFluids(Fluid.of('tfc:spring_water', 20000))
		.outputFluids(Fluid.of('gtceu:raw_rich_brine', 1000))
		.duration(20*50)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.evaporation_tower('raw_rich_brine_mars')
		.inputFluids(Fluid.of('tfg:heavy_ammoniacal_water', 20000))
		.outputFluids(Fluid.of('gtceu:raw_rich_brine', 1000))
		.duration(20*50)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.chemical_reactor('hydrogen_iodide_to_hot_iodine_brine')
		.inputFluids(Fluid.of('gtceu:hydrogen_iodide', 1000))
		.inputFluids(Fluid.of('gtceu:raw_rich_brine', 1000))
		.outputFluids(Fluid.of('gtceu:sodium_potassium', 1000))
		.outputFluids(Fluid.of('gtceu:hot_iodine_brine', 1000))
		.duration(20*24)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.large_chemical_reactor('basic_bromine_exhaust_to_hot_iodine_brine')
		.inputFluids(Fluid.of('gtceu:basic_bromine_exhaust', 1000))
		.inputFluids(Fluid.of('gtceu:raw_rich_brine', 1000))
		.outputFluids(Fluid.of('gtceu:sodium_potassium', 1000))
		.outputFluids(Fluid.of('gtceu:hot_iodine_brine', 1000))
		.outputFluids(Fluid.of('gtceu:steam', 1000))
		.duration(20*30)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.evaporation_tower('brominated_iodine_vapor')
		.inputFluids(Fluid.of('gtceu:hot_iodine_brine', 10000))
		.itemOutputs('#forge:dusts/magnesium_chloride')
		.outputFluids(Fluid.of('gtceu:brominated_iodine_vapor', 1000))
		.duration(20*50)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.chemical_reactor('lithium_carbonate')
		.inputFluids(Fluid.of('gtceu:brominated_iodine_vapor', 1000))
		.itemInputs('#forge:dusts/sodium_hydroxide')
		.itemOutputs('#forge:dusts/lithium_carbonate')
		.outputFluids(Fluid.of('gtceu:basic_bromine_exhaust', 1000))
		.duration(20*54)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('lithium_fluoride')
		.inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 1000))
		.itemInputs('#forge:dusts/lithium_carbonate')
		.itemOutputs('#forge:gems/lithium_fluoride')
		.outputFluids(Fluid.of('gtceu:carbon_dioxide', 1000))
		.outputFluids(Fluid.of('minecraft:water', 1000))
		.duration(20*36)
		.EUt(GTValues.VA[GTValues.IV])

	event.recipes.gtceu.chemical_reactor('tetrafluoroberyllate')
		.inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 1000))
		.itemInputs('#forge:purified_ores/beryllium')
		.itemOutputs('#forge:gems/tetrafluoroberyllate')
		.outputFluids(Fluid.of('minecraft:water', 1000))
		.duration(20*36)
		.EUt(GTValues.VA[GTValues.IV])

	event.recipes.gtceu.alloy_blast_smelter('dirty_flibe')
		.inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 1000))
		.inputFluids(Fluid.of('gtceu:helium', 1000))
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.itemInputs('#forge:gems/lithium_fluoride')
		.itemInputs('#forge:gems/tetrafluoroberyllate')
		.outputFluids(Fluid.of('gtceu:dirty_flibe', 1000))
		.blastFurnaceTemp(3600)
		.duration(20*36)
		.EUt(GTValues.VA[GTValues.IV])

	event.recipes.gtceu.electrolyzer('flibe')
		.inputFluids(Fluid.of('gtceu:dirty_flibe', 1000))
		.outputFluids(Fluid.of('gtceu:flibe', 1000))
		.itemOutputs('#forge:dusts/chromium')
		.itemOutputs('gtceu:nickel_dust')
		.itemOutputs('gtceu:iron_dust')
		.duration(20*36)
		.EUt(GTValues.VA[GTValues.IV])

	*/

	//#endregion

	//#region Bromine Line - SCRAP FROM MARS TO VENUS

	/*

	event.recipes.gtceu.evaporation_tower('evaporation_brine')
		.inputFluids(Fluid.of('tfc:salt_water', 20000))
		.outputFluids(Fluid.of('gtceu:raw_brine', 1000))
		.duration(20*50)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.evaporation_tower('evaporation_brine_mars')
		.inputFluids(Fluid.of('tfg:semiheavy_ammoniacal_water', 20000))
		.outputFluids(Fluid.of('gtceu:raw_brine', 1000))
		.duration(20*50)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.fluid_heater('heat_brine')
		.inputFluids(Fluid.of("gtceu:raw_brine", 1000))
		.outputFluids(Fluid.of("gtceu:hot_brine", 1000))
		.duration(20*600)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.heat_exchanger('heat_brine_nuclear')
		.inputFluids(Fluid.of("gtceu:raw_brine", 1000))
		.inputFluids(Fluid.of("gtceu:irradiated_steam", 1000))
		.outputFluids(Fluid.of("gtceu:hot_brine", 1000))
		.outputFluids(Fluid.of("gtceu:dense_steam", 1000))
		.duration(20*100)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('debrominated_brine_raw_brine_mixing')
		.inputFluids(Fluid.of("gtceu:raw_brine", 1000))
		.inputFluids(Fluid.of('gtceu:hot_debrominated_brine', 1000))
		.outputFluids(Fluid.of('gtceu:hot_brine', 2000))
		.outputFluids(Fluid.of('gtceu:debrominated_brine', 1000))
		.duration(20*10)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('brine_acidification')
		.inputFluids(Fluid.of("gtceu:hot_brine", 2000))
		.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 1000))
		.outputFluids(Fluid.of('gtceu:hot_alkaline_debrominated_brine', 2000))
		.outputFluids(Fluid.of('gtceu:hydrogen_iodide', 1000))
		.duration(20*5)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('aciditic_bromine_exhaust_heating')
		.inputFluids(Fluid.of("gtceu:hot_brine", 1000))
		.inputFluids(Fluid.of('gtceu:acidic_bromine_exhaust', 1000))
		.outputFluids(Fluid.of('gtceu:hot_chlorinated_brominated_brine', 1000))
		.outputFluids(Fluid.of('gtceu:steam', 3000))
		.duration(20*5)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('brine_chloroination')
		.inputFluids(Fluid.of("gtceu:hot_brine", 1000))
		.inputFluids(Fluid.of('gtceu:chlorine', 1000))
		.outputFluids(Fluid.of('gtceu:hot_chlorinated_brominated_brine', 1000))
		.duration(20*5)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('brine_neutralization')
		.inputFluids(Fluid.of("gtceu:hot_alkaline_debrominated_brine", 3000))
		.itemInputs('gtceu:potassium_dust')
		.outputFluids(Fluid.of('gtceu:hot_debrominated_brine', 2000))
		.itemOutputs(Item.of('2x gtceu:rock_salt_dust'))
		.duration(20*5)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.centrifuge('debrominated_brine_decomposition')
		.inputFluids(Fluid.of('gtceu:debrominated_brine', 2000))
		.outputFluids(Fluid.of('tfc:salt_water'), 1000)
		.duration(20*3)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.chemical_reactor('brine_filtration')
		.inputFluids(Fluid.of('gtceu:hot_chlorinated_brominated_brine', 1000))
		.inputFluids(Fluid.of('gtceu:chlorine', 1000))
		.inputFluids(Fluid.of('gtceu:steam', 1000))
		.outputFluids(Fluid.of('gtceu:hot_alkaline_debrominated_brine', 1000))
		.outputFluids(Fluid.of('gtceu:brominated_chlorine_vapor', 2000))
		.duration(20*15)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('brominated_chlorine_vapor_condensation')
		.inputFluids(Fluid.of('gtceu:brominated_chlorine_vapor', 1000))
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.outputFluids(Fluid.of('gtceu:acidic_bromine_solution', 1000))
		.outputFluids(Fluid.of('minecraft:water', 2000))
		.duration(20*15)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('bromine_vapor_concentration')
		.inputFluids(Fluid.of('gtceu:acidic_bromine_solution', 1000))
		.inputFluids(Fluid.of('gtceu:steam', 1000))
		.outputFluids(Fluid.of('gtceu:concentrated_bromine_solution', 1000))
		.outputFluids(Fluid.of('gtceu:acidic_bromine_exhaust', 1000))
		.duration(20*5)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.distillery('bromine_distillation_to_chlorine')
		.inputFluids(Fluid.of('gtceu:concentrated_bromine_solution', 100))
		.outputFluids(Fluid.of('gtceu:chlorine', 50))
		.duration(20*5)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.distillery('bromine_distillation_to_bromine')
		.inputFluids(Fluid.of('gtceu:concentrated_bromine_solution', 40))
		.outputFluids(Fluid.of('gtceu:bromine', 40))
		.duration(20*2)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.distillation_tower('bromine_distillation')
		.inputFluids(Fluid.of('gtceu:concentrated_bromine_solution', 1000))
		.outputFluids(Fluid.of('gtceu:chlorine', 500))
		.outputFluids(Fluid.of('gtceu:bromine', 1000))
		.duration(20*25)
		.EUt(GTValues.VA[GTValues.HV])

	*/

}