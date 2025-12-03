"use strict";

function registerTFGBoilerRecipes(event) {
	
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

	// fish oil (aka tallowate) extraction
	event.recipes.gtceu.extractor(`tfg:fish_oil`)
		.itemInputs('#minecraft:fishes')
		.outputFluids(Fluid.of('gtceu:fish_oil', 200))
		.duration(40)
		.EUt(4)

	event.recipes.gtceu.extractor(`tfg:tallow`)
		.itemInputs('tfc:blubber')
		.outputFluids(Fluid.of('tfc:tallow', 200))
		.duration(40)
		.EUt(4)

	// you get tallow from killing things like orcas, so this seems close enough
	event.recipes.gtceu.mixer('tallow_to_fish_oil')
		.inputFluids('tfc:tallow 100', 'tfc:lye 100')
		.outputFluids('gtceu:fish_oil 200')
		.duration(100)
		.EUt(4)

	// Seed oil
	event.recipes.gtceu.extractor(`tfg:seed_oil`)
		.itemInputs('#tfc:seeds')
		.outputFluids(Fluid.of('gtceu:seed_oil', 50))
		.duration(32)
		.EUt(2)

	event.recipes.gtceu.extractor(`rapeseed_oil`)
		.itemInputs('tfg:rapeseed_product')
		.outputFluids(Fluid.of('gtceu:seed_oil', 600))
		.duration(20 * 5)
		.EUt(GTValues.VHA[GTValues.ULV])

	event.recipes.gtceu.extractor(`sunflower_oil`)
		.itemInputs('tfg:sunflower_product')
		.outputFluids(Fluid.of('gtceu:seed_oil', 350))
		.duration(20 * 5)
		.EUt(GTValues.VHA[GTValues.ULV])

	event.recipes.tfc.barrel_sealed(1000)
		.inputs('tfg:rapeseed_product', Fluid.of('minecraft:water', 100))
		.outputFluid(Fluid.of('gtceu:seed_oil', 250))
		.id('tfg:barrel/rapeseed_to_oil')

	event.recipes.tfc.barrel_sealed(1000)
		.inputs('tfg:sunflower_product', Fluid.of('minecraft:water', 100))
		.outputFluid(Fluid.of('gtceu:seed_oil', 120))
		.id('tfg:barrel/sunflower_to_oil')
}