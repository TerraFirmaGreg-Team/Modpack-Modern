// priority: 0

function registerTFGEarlyPower(event) {

	const $ChanceLogic = Java.loadClass('com.gregtechceu.gtceu.api.recipe.chance.logic.ChanceLogic')

	// New Fuels

	// Syngas

	event.custom({
		type: 'vintageimprovements:vacuumizing',
		ingredients: [{ item: 'minecraft:charcoal' }, { fluid: 'gtceu:creosote', amount: 250 }],
		results: [{ fluid: 'tfg:syngas', amount: 100 }],
		heatRequirement: "heated",
		processingTime: 750
	}).id('tfg:vi/vacuumizing/syngas_from_charcoal')

	event.custom({
		type: 'vintageimprovements:vacuumizing',
		ingredients: [{ item: 'minecraft:coal' }, { fluid: 'gtceu:creosote', amount: 250 }],
		results: [{ fluid: 'tfg:syngas', amount: 200 }],
		heatRequirement: "heated",
		processingTime: 750
	}).id('tfg:vi/vacuumizing/syngas_from_coal')

	event.custom({
		type: 'vintageimprovements:vacuumizing',
		ingredients: [{ item: 'gtceu:coke_gem' }, { fluid: 'gtceu:creosote', amount: 250 }],
		results: [{ fluid: 'tfg:syngas', amount: 400 }],
		heatRequirement: "heated",
		processingTime: 750
	}).id('tfg:vi/vacuumizing/syngas_from_coke')

	event.custom({
		type: 'vintageimprovements:vacuumizing',
		ingredients: [{ item: 'beneath:cursecoal' }, { fluid: 'gtceu:creosote', amount: 250 }],
		results: [{ fluid: 'tfg:syngas', amount: 400 }],
		heatRequirement: "heated",
		processingTime: 750
	}).id('tfg:vi/vacuumizing/syngas_from_anthracite')

	event.recipes.gtceu.brewery('tfg:syngas_from_charcoal')
		.itemInputs('minecraft:charcoal')
		.inputFluids('gtceu:creosote 250')
		.outputFluids('tfg:syngas 100')
		.duration(20*10)
		.EUt(2)

	event.recipes.gtceu.brewery('tfg:syngas_from_coal')
		.itemInputs('minecraft:coal')
		.inputFluids('gtceu:creosote 250')
		.outputFluids('tfg:syngas 200')
		.duration(20*10)
		.EUt(2)

	event.recipes.gtceu.brewery('tfg:syngas_from_coke')
		.itemInputs('gtceu:coke_gem')
		.inputFluids('gtceu:creosote 250')
		.outputFluids('tfg:syngas 400')
		.duration(20*10)
		.EUt(2)

	event.recipes.gtceu.brewery('tfg:syngas_from_anthracite')
		.itemInputs('beneath:cursecoal')
		.inputFluids('gtceu:creosote 250')
		.outputFluids('tfg:syngas 400')
		.duration(20*10)
		.EUt(2)

	//#region Reformate Gas

	// Charcoal

	event.recipes.gtceu.coal_liquefaction_tower('tfg:raw_aromatic_mix_charcoal')
		.itemInputs(Item.of('minecraft:charcoal', 24))
		.inputFluids(Fluid.of('gtceu:creosote', 1000))
		.outputFluids(Fluid.of('gtceu:coal_tar', 500), Fluid.of('tfg:syngas', 3200), Fluid.of('tfg:raw_aromatic_mix', 1000))
		.duration(20*600)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.coal_liquefaction_tower('tfg:raw_aromatic_mix_charcoal_hydrogen')
		.itemInputs(Item.of('minecraft:charcoal', 24))
		.inputFluids(Fluid.of('gtceu:creosote', 1000))
		.perTick(true)
		.chancedFluidInput(Fluid.of('gtceu:hydrogen', 1), 1000, 0)
		.perTick(false)
		.outputFluids(Fluid.of('gtceu:coal_tar', 500), Fluid.of('tfg:syngas', 3200), Fluid.of('tfg:raw_aromatic_mix', 1000))
		.duration(20*200)
		.circuit(2)
		.EUt(GTValues.VHA[GTValues.LV])

	// Coal

	event.recipes.gtceu.coal_liquefaction_tower('tfg:raw_aromatic_mix_coal')
		.itemInputs(Item.of('minecraft:coal', 10))
		.inputFluids(Fluid.of('gtceu:creosote', 1000))
		.outputFluids(Fluid.of('gtceu:coal_tar', 1000), Fluid.of('tfg:syngas', 6400), Fluid.of('tfg:raw_aromatic_mix', 1000))
		.duration(20*600)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.coal_liquefaction_tower('tfg:raw_aromatic_mix_coal_hydrogen')
		.itemInputs(Item.of('minecraft:coal', 10))
		.inputFluids(Fluid.of('gtceu:creosote', 1000))
		.perTick(true)
		.chancedFluidInput(Fluid.of('gtceu:hydrogen', 1), 1000, 0)
		.perTick(false)
		.outputFluids(Fluid.of('gtceu:coal_tar', 1000), Fluid.of('tfg:syngas', 6400), Fluid.of('tfg:raw_aromatic_mix', 1000))
		.duration(20*200)
		.circuit(2)
		.EUt(GTValues.VHA[GTValues.LV])

	// Coke

	event.recipes.gtceu.coal_liquefaction_tower('tfg:raw_aromatic_mix_coke')
		.itemInputs(Item.of('gtceu:coke_gem', 5))
		.inputFluids(Fluid.of('gtceu:creosote', 1000))
		.outputFluids(Fluid.of('gtceu:coal_tar', 2000), Fluid.of('tfg:syngas', 12800), Fluid.of('tfg:raw_aromatic_mix', 1000))
		.duration(20*600)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.LV])
	
	event.recipes.gtceu.coal_liquefaction_tower('tfg:raw_aromatic_mix_coke_hydrogen')
		.itemInputs(Item.of('gtceu:coke_gem', 5))
		.inputFluids(Fluid.of('gtceu:creosote', 1000))
		.perTick(true)
		.chancedFluidInput(Fluid.of('gtceu:hydrogen', 1), 1000, 0)
		.perTick(false)
		.outputFluids(Fluid.of('gtceu:coal_tar', 2000), Fluid.of('tfg:syngas', 12800), Fluid.of('tfg:raw_aromatic_mix', 1000))
		.duration(20*200)
		.circuit(2)
		.EUt(GTValues.VHA[GTValues.LV])

	// Anthracite

	event.recipes.gtceu.coal_liquefaction_tower('tfg:raw_aromatic_mix_anthracite')
		.itemInputs(Item.of('beneath:cursecoal', 5))
		.inputFluids(Fluid.of('gtceu:creosote', 1000))
		.outputFluids(Fluid.of('gtceu:coal_tar', 2000), Fluid.of('tfg:syngas', 12800), Fluid.of('tfg:raw_aromatic_mix', 1000))
		.duration(20*600)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.LV])
	
	event.recipes.gtceu.coal_liquefaction_tower('tfg:raw_aromatic_mix_anthracite_hydrogen')
		.itemInputs(Item.of('beneath:cursecoal', 5))
		.inputFluids(Fluid.of('gtceu:creosote', 1000))
		.perTick(true)
		.chancedFluidInput(Fluid.of('gtceu:hydrogen', 1), 1000, 0)
		.perTick(false)
		.outputFluids(Fluid.of('gtceu:coal_tar', 2000), Fluid.of('tfg:syngas', 12800), Fluid.of('tfg:raw_aromatic_mix', 1000))
		.duration(20*200)
		.circuit(2)
		.EUt(GTValues.VHA[GTValues.LV])

	// Aromatic Processing

	event.recipes.gtceu.chemical_reactor('tfg:aromatic_feedstock')
		.inputFluids(Fluid.of('tfg:raw_aromatic_mix', 1000), Fluid.of('gtceu:benzene', 525), Fluid.of('gtceu:steam', 1000))
		.outputFluids(Fluid.of('tfg:aromatic_feedstock', 1000))
		.duration(20*30)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.chemical_reactor('tfg:reformed_aromatic_feedstock')
		.chancedInput(Item.of('gtceu:tiny_rhenium_dust'), 100, 0) // 1% chance
		.inputFluids(Fluid.of('tfg:aromatic_feedstock', 1000))
		.outputFluids(Fluid.of('tfg:reformed_aromatic_feedstock', 1000))
		.duration(20*18)
		.EUt(GTValues.VA[GTValues.MV])

	// Reformate Gas Alternative Step

	event.recipes.gtceu.cracker('tfg:reformate_gas_cracker')
		.inputFluids(Fluid.of('tfg:reformed_aromatic_feedstock', 1000), Fluid.of('gtceu:steam', 2000))
		.outputFluids(Fluid.of('tfg:reformate_gas', 2000))
		.outputFluids(Fluid.of('tfg:cracker_off_gas', 1000))
		.duration(20*60)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.chemical_reactor('tfg:reformate_gas')
		.inputFluids(Fluid.of('tfg:reformed_aromatic_feedstock', 1000), Fluid.of('gtceu:steam', 1000))
		.outputFluids(Fluid.of('tfg:reformate_gas', 2000))
		.duration(20*60)
		.EUt(GTValues.VA[GTValues.MV])

	// Recycling

	event.recipes.gtceu.electrolyzer('tfg:cracker_off_gas_recycling')
		.inputFluids(Fluid.of('tfg:cracker_off_gas', 1000))
		.outputFluids(Fluid.of('gtceu:carbon_dioxide', 500), Fluid.of('gtceu:hydrogen', 500))
		.chancedOutput(Item.of('gtceu:tiny_rhenium_dust'), 100, 0) // 1% chance
		.duration(20*4.5)
		.EUt(GTValues.VA[GTValues.HV])

	// Modify Recipe to balance new line

	event.remove({ id: 'gtceu:extractor/charcoal_extraction' })
	event.recipes.gtceu.extractor('tfg:charcoal_extraction')
		.itemInputs(Item.of('minecraft:charcoal'))
		.outputFluids(Fluid.of('gtceu:wood_tar', 100))
		.duration(20*6.4)
		.EUt(GTValues.VA[GTValues.MV])

	//#endregion

	//#region Rebalance Fuel

	// Change

	// The 9x buff for large boiler recipes above does not apply to this for some reason, so it gets 3x duration for an effective 1/3 reduction instead

	event.forEachRecipe({ id: /gtceu:large_boiler\/(minecraft_ladder|gtceu_wood_frame)/ }, recipe => {
        var newDuration = recipe.get("duration")
        recipe.set("duration", newDuration*3)
    })

	event.forEachRecipe({ id: /gtceu:steam_boiler\/(minecraft_ladder|gtceu_wood_frame)/ }, recipe => {
        var newDuration = recipe.get("duration")
        recipe.set("duration", newDuration/3)
	})

	// Allow oil in small boilers

	event.remove({ id: "gtceu:large_boiler/gtceu_oil" })
	event.remove({ id: "gtceu:large_boiler/gtceu_oil_heavy" })
	event.remove({ id: "gtceu:large_boiler/gtceu_fish_oil" })
	// This generates both a small boiler and large boiler recipe. Remove it above to avoid a duplicate
	event.recipes.gtceu.steam_boiler('tfg:oil')
		.inputFluids(Fluid.of('gtceu:oil', 200))
		.duration(200)
		.dimension('minecraft:overworld')

	event.recipes.gtceu.steam_boiler('tfg:heavy_oil')
		.inputFluids(Fluid.of('gtceu:oil_heavy', 32))
		.duration(200)
		.dimension('minecraft:overworld')

	event.recipes.gtceu.steam_boiler('tfg:fish_oil')
		.inputFluids(Fluid.of('gtceu:fish_oil', 160))
		.duration(200)
		.dimension('minecraft:overworld')

	// These aren't in base GT, but they have the same stats as oil
	event.recipes.gtceu.steam_boiler('tfg:raw_oil')
		.inputFluids(Fluid.of('gtceu:oil_medium', 200))
		.duration(200)
		.dimension('minecraft:overworld')

	event.recipes.gtceu.steam_boiler('tfg:light_oil')
		.inputFluids(Fluid.of('gtceu:oil_light', 200))
		.duration(200)
		.dimension('minecraft:overworld')

	// Same stats as fish oil
	event.recipes.gtceu.steam_boiler('tfg:olive_oil')
		.inputFluids(Fluid.of('tfc:olive_oil', 160))
		.duration(200)
		.dimension('minecraft:overworld')

	event.recipes.gtceu.steam_boiler('tfg:seed_oil')
		.inputFluids(Fluid.of('gtceu:seed_oil', 160))
		.duration(200)
		.dimension('minecraft:overworld')

	event.recipes.gtceu.steam_boiler('tfg:soybean_oil')
		.inputFluids(Fluid.of('firmalife:soybean_oil', 160))
		.duration(200)
		.dimension('minecraft:overworld')

	//#region New Power Generation
	
	// Add Syngas

	event.recipes.gtceu.steam_boiler('tfg:syngas') // Small Boiler and Large Boiler divided by 4
		.inputFluids(Fluid.of('tfg:syngas', 100))
		.duration(40*20*4)
		.dimension('minecraft:overworld')

	event.recipes.gtceu.gas_turbine('tfg:syngas') // Gas Turbine
		.inputFluids(Fluid.of('tfg:syngas', 1))
		.EUt(-(32))
		.duration(20*0.2)

	// Reformate Gas

	event.recipes.gtceu.gas_turbine('tfg:reformate_gas') // Gas Turbine
		.inputFluids(Fluid.of('tfg:reformate_gas', 1))
		.EUt(-(32))
		.duration(20*1)

}