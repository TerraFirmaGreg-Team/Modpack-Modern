"use strict";

function registerTFGBoilerRecipes(event) {
	
	function removeBoilerRecipe(id) {
		event.remove({ id: `gtceu:steam_boiler/${id}` })
		event.remove({ id: `gtceu:large_boiler/${id}` })
	}

	removeBoilerRecipe('minecraft_chest')
	removeBoilerRecipe('minecraft_cartography_table')
	removeBoilerRecipe('minecraft_smithing_table')
	removeBoilerRecipe('minecraft_note_block')
	removeBoilerRecipe('minecraft_crossbow')
	removeBoilerRecipe('minecraft_lectern')
	removeBoilerRecipe('minecraft_daylight_detector')
	removeBoilerRecipe('minecraft_ladder')
	removeBoilerRecipe('minecraft_bamboo_mosaic')
	removeBoilerRecipe('minecraft_bamboo_mosaic_slab')
	removeBoilerRecipe('minecraft_bamboo_mosaic_stairs')
	removeBoilerRecipe('minecraft_bow')
	removeBoilerRecipe('minecraft_bowl')
	removeBoilerRecipe('minecraft_scaffolding')
	removeBoilerRecipe('minecraft_cartography_table')
	removeBoilerRecipe('minecraft_jukebox')
	removeBoilerRecipe('minecraft_loom')
	removeBoilerRecipe('minecraft_bamboo')
	removeBoilerRecipe('minecraft_stick')
	removeBoilerRecipe('create_cardboard')
	removeBoilerRecipe('create_cardboard_block')
	removeBoilerRecipe('create_bound_cardboard_block')
	removeBoilerRecipe('create_cardboard_sword')
	removeBoilerRecipe('create_cardboard_helmet')
	removeBoilerRecipe('create_cardboard_chestplate')
	removeBoilerRecipe('create_cardboard_leggings')
	removeBoilerRecipe('create_cardboard_boots')
	removeBoilerRecipe('gtceu_bio_chaff')
	removeBoilerRecipe('gtceu_plant_ball')
	removeBoilerRecipe('gtceu_wood_plate')
	removeBoilerRecipe('gtceu_treated_wood_plate')
	removeBoilerRecipe('gtceu_sticky_resin')
	removeBoilerRecipe('gtceu_small_wood_dust')
	removeBoilerRecipe('gtceu_small_treated_wood_dust')
	removeBoilerRecipe('gtceu_tiny_wood_dust')
	removeBoilerRecipe('gtceu_tiny_treated_wood_dust')
	removeBoilerRecipe('gtceu_wood_bolt')
	removeBoilerRecipe('gtceu_wood_frame')
	removeBoilerRecipe('gtceu_wood_screw')
	removeBoilerRecipe('gtceu_treated_wood_rod')
	removeBoilerRecipe('gtceu_treated_wood_frame')
	removeBoilerRecipe('gtceu_long_wood_rod')
	removeBoilerRecipe('gtceu_long_treated_wood_rod')
	removeBoilerRecipe('gtceu_small_wood_gear')
	removeBoilerRecipe('gtceu_wood_gear')
	removeBoilerRecipe('gtceu_wood_dust')
	removeBoilerRecipe('gtceu_treated_wood_dust')
	removeBoilerRecipe('gtceu_small_coke_dust')
	removeBoilerRecipe('gtceu_small_charcoal_dust')
	removeBoilerRecipe('gtceu_small_coal_dust')
	removeBoilerRecipe('gtceu_tiny_coke_dust')
	removeBoilerRecipe('gtceu_tiny_coal_dust')
	removeBoilerRecipe('gtceu_tiny_charcoal_dust')
	removeBoilerRecipe('gtceu_pure_coal_dust')
	removeBoilerRecipe('gtceu_impure_coal_dust')
	removeBoilerRecipe('createaddition_biomass_pellet')
	removeBoilerRecipe('createaddition_biomass_pellet_block')

	//Re-add some recipes to the boiler under tags
	event.recipes.gtceu.steam_boiler('tfg:logs')
		.itemInputs('#minecraft:logs')
		.duration(300)
		.dimension('minecraft:overworld')
		.dimension('minecraft:the_nether')

	event.recipes.gtceu.steam_boiler('tfg:saplings')
		.itemInputs('#minecraft:saplings')
		.duration(100)
		.dimension('minecraft:overworld')
		.dimension('minecraft:the_nether')

	event.recipes.gtceu.steam_boiler('tfg:planks')
		.itemInputs('#minecraft:planks')
		.duration(75)
		.dimension('minecraft:overworld')
		.dimension('minecraft:the_nether')

	event.recipes.gtceu.steam_boiler('tfg:anthracite')
		.itemInputs('beneath:cursecoal')
		.duration(160 * 20)
		.dimension('minecraft:overworld')
		.dimension('minecraft:the_nether')

	event.recipes.gtceu.steam_boiler('tfg:flora_pellets')
		.itemInputs('tfg:flora_pellets')
		.duration(1200)
		.dimension('minecraft:overworld')
		.dimension('minecraft:the_nether')

	// Small nerf to charcoal

	event.forEachRecipe({ id: /gtceu:(steam_boiler|large_boiler)\/.*charcoal.*/ }, recipe => {
        let newDuration = recipe.get("duration")
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
		.dimension('minecraft:the_nether')

	event.recipes.gtceu.steam_boiler('tfg:heavy_oil')
		.inputFluids(Fluid.of('gtceu:oil_heavy', 32))
		.duration(200)
		.dimension('minecraft:overworld')
		.dimension('minecraft:the_nether')

	event.recipes.gtceu.steam_boiler('tfg:fish_oil')
		.inputFluids(Fluid.of('gtceu:fish_oil', 160))
		.duration(200)
		.dimension('minecraft:overworld')
		.dimension('minecraft:the_nether')

	// These aren't in base GT, but they have the same stats as oil
	event.recipes.gtceu.steam_boiler('tfg:raw_oil')
		.inputFluids(Fluid.of('gtceu:oil_medium', 200))
		.duration(200)
		.dimension('minecraft:overworld')
		.dimension('minecraft:the_nether')

	event.recipes.gtceu.steam_boiler('tfg:light_oil')
		.inputFluids(Fluid.of('gtceu:oil_light', 200))
		.duration(200)
		.dimension('minecraft:overworld')
		.dimension('minecraft:the_nether')

	// Same stats as fish oil
	event.recipes.gtceu.steam_boiler('tfg:olive_oil')
		.inputFluids(Fluid.of('tfc:olive_oil', 160))
		.duration(200)
		.dimension('minecraft:overworld')
		.dimension('minecraft:the_nether')

	event.recipes.gtceu.steam_boiler('tfg:seed_oil')
		.inputFluids(Fluid.of('gtceu:seed_oil', 160))
		.duration(200)
		.dimension('minecraft:overworld')
		.dimension('minecraft:the_nether')

	event.recipes.gtceu.steam_boiler('tfg:soybean_oil')
		.inputFluids(Fluid.of('firmalife:soybean_oil', 160))
		.duration(200)
		.dimension('minecraft:overworld')
		.dimension('minecraft:the_nether')

	event.recipes.gtceu.steam_boiler('tfg:tallow')
		.inputFluids(Fluid.of('tfc:tallow', 160))
		.duration(200)
		.dimension('minecraft:overworld')
		.dimension('minecraft:the_nether')

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