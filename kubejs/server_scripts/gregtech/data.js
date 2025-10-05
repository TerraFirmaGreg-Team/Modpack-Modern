// priority: 0
"use strict";

const registerTFCDataForGTCEU = (event) => {
	registerGTCEUHeats(event)
	registerGTCEUMetals(event)
}

/**
 * event.itemHeat(
	ingredient: Ingredient, 
	heatCapacity: number, 
	forgingTemperature: @Nullable number, 
	weldingTemperature: @Nullable number, 
	name?: string
	)
 */
const registerGTCEUHeats = (event) => {
	function makeItemHeatByTagPrefix(tagPrefix, material, tfcProperty, heatCapacity) {
		let item = ChemicalHelper.get(tagPrefix, material, 1)
		if (!item.isEmpty()) event.itemHeat(item, heatCapacity, tfcProperty.getForgingTemp(), tfcProperty.getWeldingTemp())
	}

	function makeItemHeatByToolType(toolType, material, tfcProperty, heatCapacity) {
		let tool = ToolHelper.get(toolType, material)
		if (!tool.isEmpty()) event.itemHeat(tool, heatCapacity, tfcProperty.getForgingTemp(), tfcProperty.getWeldingTemp())
	}

	forEachMaterial(material => {
		let tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY)

		if (tfcProperty !== null) {
			makeItemHeatByTagPrefix(TagPrefix.dustTiny, material, tfcProperty, 0.357)
			makeItemHeatByTagPrefix(TagPrefix.dustSmall, material, tfcProperty, 0.714)
			makeItemHeatByTagPrefix(TagPrefix.dust, material, tfcProperty, 1.429)
			makeItemHeatByTagPrefix(TagPrefix.rod, material, tfcProperty, 0.567)
			makeItemHeatByTagPrefix(TagPrefix.bolt, material, tfcProperty, 0.245)
			makeItemHeatByTagPrefix(TagPrefix.screw, material, tfcProperty, 0.567)
			makeItemHeatByTagPrefix(TagPrefix.nugget, material, tfcProperty, 0.124)
			makeItemHeatByTagPrefix(TagPrefix.block, material, tfcProperty, 20)
			makeItemHeatByTagPrefix(TagPrefix.rodLong, material, tfcProperty, 1.429)
			makeItemHeatByTagPrefix(TagPrefix.gearSmall, material, tfcProperty, 1.429)
			makeItemHeatByTagPrefix(TagPrefix.gear, material, tfcProperty, 2.875)
			makeItemHeatByTagPrefix(TagPrefix.plate, material, tfcProperty, 2.875)
			makeItemHeatByTagPrefix(TagPrefix.plateDouble, material, tfcProperty, 5.75)
			makeItemHeatByTagPrefix(TagPrefix.springSmall, material, tfcProperty, 0.567)
			makeItemHeatByTagPrefix(TagPrefix.spring, material, tfcProperty, 1.429)

			makeItemHeatByTagPrefix(TagPrefix.ingot, material, tfcProperty, 1.429)
			makeItemHeatByTagPrefix(TFGTagPrefix.ingotDouble, material, tfcProperty, 2.875)

			makeItemHeatByTagPrefix(TagPrefix.rawOre, material, tfcProperty, 1.429)
			makeItemHeatByTagPrefix(TFGTagPrefix.richRawOre, material, tfcProperty, 1.429)
			makeItemHeatByTagPrefix(TFGTagPrefix.poorRawOre, material, tfcProperty, 1.429)

			// Ore processing stages
			makeItemHeatByTagPrefix(TagPrefix.dustImpure, material, tfcProperty, 1.429)
			makeItemHeatByTagPrefix(TagPrefix.dustPure, material, tfcProperty, 1.429)
			makeItemHeatByTagPrefix(TagPrefix.crushed, material, tfcProperty, 1.429)
			makeItemHeatByTagPrefix(TagPrefix.crushedPurified, material, tfcProperty, 1.429)
			makeItemHeatByTagPrefix(TagPrefix.crushedRefined, material, tfcProperty, 1.429)

			makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadSword, material, tfcProperty, 2.875)
			makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadShovel, material, tfcProperty, 1.429)
			makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadScythe, material, tfcProperty, 1.429)
			makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadPickaxe, material, tfcProperty, 1.429)
			makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadSaw, material, tfcProperty, 1.429)
			makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadKnife, material, tfcProperty, 1.429)
			makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadHoe, material, tfcProperty, 1.429)
			makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadHammer, material, tfcProperty, 1.429)
			makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadAxe, material, tfcProperty, 1.429)
			makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadFile, material, tfcProperty, 1.429)
			makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadButcheryKnife, material, tfcProperty, 2.875)
			makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadMiningHammer, material, tfcProperty, 2.875)
			makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadSpade, material, tfcProperty, 2.875)

			makeItemHeatByToolType(GTToolType.SWORD, material, tfcProperty, 1.429)
			makeItemHeatByToolType(GTToolType.PICKAXE, material, tfcProperty, 1.429)
			makeItemHeatByToolType(GTToolType.SHOVEL, material, tfcProperty, 1.429)
			makeItemHeatByToolType(GTToolType.AXE, material, tfcProperty, 1.429)
			makeItemHeatByToolType(GTToolType.HOE, material, tfcProperty, 1.429)
			makeItemHeatByToolType(GTToolType.SAW, material, tfcProperty, 1.429)
			makeItemHeatByToolType(GTToolType.HARD_HAMMER, material, tfcProperty, 2.875)
			makeItemHeatByToolType(GTToolType.FILE, material, tfcProperty, 1.429)
			makeItemHeatByToolType(GTToolType.SCYTHE, material, tfcProperty, 1.429)
			makeItemHeatByToolType(GTToolType.KNIFE, material, tfcProperty, 1.429)
			makeItemHeatByToolType(GTToolType.BUTCHERY_KNIFE, material, tfcProperty, 2.875)
			makeItemHeatByToolType(GTToolType.MINING_HAMMER, material, tfcProperty, 1.429)
			makeItemHeatByToolType(GTToolType.SPADE, material, tfcProperty, 2.875)
			makeItemHeatByToolType(GTToolType.WRENCH, material, tfcProperty, 2.875)
			makeItemHeatByToolType(GTToolType.SCREWDRIVER, material, tfcProperty, 1.429)
			makeItemHeatByToolType(GTToolType.MORTAR, material, tfcProperty, 1.429)
			makeItemHeatByToolType(GTToolType.WIRE_CUTTER, material, tfcProperty, 1.429)
			makeItemHeatByToolType(GTToolType.CROWBAR, material, tfcProperty, 1.429)
		}
	})

	event.itemHeat('gtceu:compressed_coke_clay', 0.1242, null, null)
}


const registerGTCEUMetals = (event) => {
	event.metal('gtceu:copper', 1080, 0.00857, '#forge:ingots/copper', '#forge:double_ingots/copper', '#forge:plates/copper', 1, 'tfc:copper')
	event.metal('gtceu:bismuth_bronze', 985, 0.00857, '#forge:ingots/bismuth_bronze', '#forge:double_ingots/bismuth_bronze', '#forge:plates/bismuth_bronze', 2, 'tfc:bismuth_bronze')
	event.metal('gtceu:bronze', 950, 0.00857, '#forge:ingots/bronze', '#forge:double_ingots/bronze', '#forge:plates/bronze', 2, 'tfc:bronze')
	event.metal('gtceu:black_bronze', 1070, 0.00857, '#forge:ingots/black_bronze', '#forge:double_ingots/black_bronze', '#forge:plates/black_bronze', 2, 'tfc:black_bronze')
	event.metal('gtceu:wrought_iron', 1535, 0.00857, '#forge:ingots/wrought_iron', '#forge:double_ingots/wrought_iron', '#forge:plates/wrought_iron', 3, 'tfc:wrought_iron')
	event.metal('gtceu:steel', 1540, 0.00857, '#forge:ingots/steel', '#forge:double_ingots/steel', '#forge:plates/steel', 4, 'tfc:steel')
	event.metal('gtceu:black_steel', 1485, 0.00857, '#forge:ingots/black_steel', '#forge:double_ingots/black_steel', '#forge:plates/black_steel', 5, 'tfc:black_steel')
	event.metal('gtceu:blue_steel', 1540, 0.00857, '#forge:ingots/blue_steel', '#forge:double_ingots/blue_steel', '#forge:plates/blue_steel', 6, 'tfc:blue_steel')
	event.metal('gtceu:red_steel', 1540, 0.00857, '#forge:ingots/red_steel', '#forge:double_ingots/red_steel', '#forge:plates/red_steel', 6, 'tfc:red_steel')

	event.metal('gtceu:iron', 1535, 0.00857, '#forge:ingots/iron', '#forge:double_ingots/iron', '#forge:plates/iron', 3, 'tfc:cast_iron')
	event.metal('gtceu:tin', 230, 0.02143, '#forge:ingots/tin', '#forge:double_ingots/tin', '#forge:plates/tin', 1, 'tfc:tin')
	event.metal('gtceu:bismuth', 270, 0.02143, '#forge:ingots/bismuth', '#forge:double_ingots/bismuth', '#forge:plates/bismuth', 1, 'tfc:bismuth')
	event.metal('gtceu:zinc', 420, 0.01429, '#forge:ingots/zinc', '#forge:double_ingots/zinc', '#forge:plates/zinc', 1, 'tfc:zinc')
	event.metal('gtceu:sterling_silver', 950, 0.00857, '#forge:ingots/sterling_silver', '#forge:double_ingots/sterling_silver', '#forge:plates/sterling_silver', 1, 'tfc:sterling_silver')
	event.metal('gtceu:rose_gold', 960, 0.00857, '#forge:ingots/rose_gold', '#forge:double_ingots/rose_gold', '#forge:plates/rose_gold', 1, 'tfc:rose_gold')
	event.metal('gtceu:silver', 961, 0.00625, '#forge:ingots/silver', '#forge:double_ingots/silver', '#forge:plates/silver', 1, 'tfc:silver')
	event.metal('gtceu:gold', 1060, 0.005, '#forge:ingots/gold', '#forge:double_ingots/gold', '#forge:plates/gold', 1, 'tfc:gold')
	event.metal('gtceu:nickel', 1453, 0.00625, '#forge:ingots/nickel', '#forge:double_ingots/nickel', '#forge:plates/nickel', 1, 'tfc:nickel')
	event.metal('gtceu:brass', 930, 0.00857, '#forge:ingots/brass', '#forge:double_ingots/brass', '#forge:plates/brass', 2, 'tfc:brass')

	event.metal('gtceu:redstone', 460, 0.01729, null, null, null, 1, 'tfg:redstone')
	event.metal('gtceu:red_alloy', 740, 0.01529, '#forge:ingots/red_alloy', '#forge:double_ingots/red_alloy', '#forge:plates/red_alloy', 2, 'tfg:red_alloy')
	event.metal('gtceu:tin_alloy', 1250, 0.00829, '#forge:ingots/tin_alloy', '#forge:double_ingots/tin_alloy', '#forge:plates/tin_alloy', 3, 'tfg:tin_alloy')
	event.metal('gtceu:lead', 330, 0.01729, '#forge:ingots/lead', '#forge:double_ingots/lead', '#forge:plates/lead', 1, 'tfg:lead')
	event.metal('gtceu:invar', 1494, 0.00741, '#forge:ingots/invar', '#forge:double_ingots/invar', '#forge:plates/invar', 3, 'tfg:invar')
	event.metal('gtceu:potin', 807, 0.0124, '#forge:ingots/potin', '#forge:double_ingots/potin', '#forge:plates/potin', 2, 'tfg:potin')
	event.metal('gtceu:cobalt', 1495, 0.00857, '#forge:ingots/cobalt', '#forge:double_ingots/cobalt', '#forge:plates/cobalt', 3, 'tfg:cobalt')
	event.metal('gtceu:cobalt_brass', 1060, 0.00857, '#forge:ingots/cobalt_brass', '#forge:double_ingots/cobalt_brass', '#forge:plates/cobalt_brass', 3, 'tfg:cobalt_brass')
	event.metal('gtceu:aluminium_silicate', 1540, 0.00857, '#forge:ingots/aluminium_silicate', null, null, 3, 'tfg:aluminium_silicate')
}

function registerGTCEUBedrockFluidVeins(event) {

	event.add('tfg:moon_helium_3', vein => {
		vein.dimensions('ad_astra:moon')
		vein.fluid(() => Fluid.of('gtceu:helium_3').fluid)
		vein.weight(100)
		vein.minimumYield(200)
		vein.maximumYield(400)
		vein.depletionAmount(1)
		vein.depletionChance(1)
		vein.depletedYield(200)
	})

	event.add('tfg:moon_helium', vein => {
		vein.dimensions('ad_astra:moon')
		vein.fluid(() => Fluid.of('gtceu:helium').fluid)
		vein.weight(10)
		vein.minimumYield(20)
		vein.maximumYield(50)
		vein.depletionAmount(1)
		vein.depletionChance(1)
		vein.depletedYield(50)
	})

	event.add('tfg:moon_argon', vein => {
		vein.dimensions('ad_astra:moon')
		vein.fluid(() => Fluid.of('gtceu:argon').fluid)
		vein.weight(5)
		vein.minimumYield(10)
		vein.maximumYield(30)
		vein.depletionAmount(1)
		vein.depletionChance(1)
		vein.depletedYield(10)
	})

	// Mars Fluid Vein - Credit to Monifactory

	const Registries = Java.loadClass("net.minecraft.core.registries.Registries")
	const ResourceKey = Java.loadClass("net.minecraft.resources.ResourceKey")
	const martianAmberHillsResourceKey = ResourceKey.create(Registries.BIOME, "tfg:mars/amber_hills")
	const martianAmberPlainsResourceKey = ResourceKey.create(Registries.BIOME, "tfg:mars/amber_plains")
	const martianMountainsResourceKey = ResourceKey.create(Registries.BIOME, "tfg:mars/martian_mountains")
	const martianRusticusHillsResourceKey = ResourceKey.create(Registries.BIOME, "tfg:mars/rusticus_hills")
	const martianRusticusPlainsResourceKey = ResourceKey.create(Registries.BIOME, "tfg:mars/rusticus_plains")
	const martianSangnumHillsResourceKey = ResourceKey.create(Registries.BIOME, "tfg:mars/sangnum_hills")
	const martianSangnumPlainsResourceKey = ResourceKey.create(Registries.BIOME, "tfg:mars/sangnum_plains")

	event.add('tfg:semiheavy_ammoniacal_water', vein => {
		vein.dimensions('ad_astra:mars')
		vein.fluid(() => Fluid.of('tfg:semiheavy_ammoniacal_water').fluid)
		vein.weight(100)
		vein.minimumYield(200)
		vein.maximumYield(400)
		vein.depletionAmount(1)
		vein.depletionChance(20)
		vein.depletedYield(15)
	})

	event.add('tfg:liquid_carbon_dioxide', vein => {
		vein.dimensions('ad_astra:mars')
		vein.fluid(() => Fluid.of('gtceu:liquid_carbon_dioxide').fluid)
		vein.weight(30)
		vein.minimumYield(20)
		vein.maximumYield(350)
		vein.depletionAmount(1)
		vein.depletionChance(20)
		vein.depletedYield(5)
	})

	event.add('tfg:liquid_ice', vein => {
		vein.dimensions('ad_astra:mars')
		vein.fluid(() => Fluid.of('gtceu:ice').fluid)
		vein.weight(20)
		vein.minimumYield(20)
		vein.maximumYield(200)
		vein.depletionAmount(1)
		vein.depletionChance(20)
		vein.depletedYield(5)
	})

	// Heavy Ammonical Water in Specific Biome Credit to Monifactory from https://github.com/ThePansmith/Monifactory/blob/main/kubejs/server_scripts/worldgen/fluidVeins.js

	event.add('tfg:heavy_ammoniacal_water', vein => {
		vein.dimensions('ad_astra:mars')
		vein.fluid(() => Fluid.of('tfg:heavy_ammoniacal_water').fluid)
		vein.biomes(20, martianAmberHillsResourceKey)
		vein.biomes(20, martianAmberPlainsResourceKey)
		vein.biomes(20, martianRusticusHillsResourceKey)
		vein.biomes(20, martianRusticusPlainsResourceKey)
		vein.biomes(20, martianSangnumHillsResourceKey)
		vein.biomes(20, martianSangnumPlainsResourceKey)
		// This one is exclusively far inland, so it's ok to buff it a bit in case the player has bad luck
		vein.biomes(50, martianMountainsResourceKey)
		vein.weight(0)
		vein.minimumYield(100)
		vein.maximumYield(650)
		vein.depletionAmount(1)
		vein.depletionChance(20)
		vein.depletedYield(5)
	})

}
