"use strict";

function registerTFGBoilerRecipes(event) {
	
	//Remove boiler recipes that are unlikely to be used and pollute the recipe tab (most everything excluding coke/charcoal)
	event.remove({ id: /gtceu:....._boiler\/mcw.+/ })
	event.remove({ id: /gtceu:....._boiler\/.*button.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*trapdoor.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*banner.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*wool.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*fence.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*treated.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*cardboard.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*pressure_plate.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*carpet.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*stairs.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*sign.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*door.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*planks.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*slab.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*biomass.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*bio_chaff.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*chest.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*bundle.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*lectern.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*cartography.*/})
	event.remove({ id: /gtceu:....._boiler\/.*ladder.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*crossbow.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*jukebox.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*resin.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*daylight_detector.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*bow.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*scaffolding.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*loom.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*bowl.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*sticky_resin.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*plant_ball.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*note_block.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*smithing_table.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*fiberboard.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*wood.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*sapling.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*log.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*stem.*/ })
	event.remove({ id: /gtceu:....._boiler\/.*mosaic.*/ })

	//Re-add some recipes to the boiler under tags
	event.recipes.gtceu.steam_boiler('tfg:logs')
		.itemInputs('#minecraft:logs')
		.duration(300)
		.dimension('minecraft:overworld')

	event.recipes.gtceu.steam_boiler('tfg:saplings')
		.itemInputs('#minecraft:saplings')
		.duration(100)
		.dimension('minecraft:overworld')

	event.recipes.gtceu.steam_boiler('tfg:planks')
		.itemInputs('#minecraft:planks')
		.duration(75)
		.dimension('minecraft:overworld')

	// Small nerf to charcoal

	event.forEachRecipe({ id: /gtceu:(steam_boiler|large_boiler)\/.*charcoal.*/ }, recipe => {
        var newDuration = recipe.get("duration")
        recipe.set("duration", newDuration/4*3)
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

	event.recipes.gtceu.steam_boiler('tfg:tallow')
		.inputFluids(Fluid.of('tfc:tallow', 160))
		.duration(200)
		.dimension('minecraft:overworld')

	// fish oil extraction
	event.recipes.gtceu.extractor(`tfg:fish_oil`)
		.itemInputs('#minecraft:fishes')
		.outputFluids(Fluid.of('gtceu:fish_oil', 400))
		.duration(40)
		.EUt(4)

	event.recipes.gtceu.extractor(`tfg:tallow`)
		.itemInputs('tfc:blubber')
		.outputFluids(Fluid.of('tfc:tallow', 400))
		.duration(40)
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