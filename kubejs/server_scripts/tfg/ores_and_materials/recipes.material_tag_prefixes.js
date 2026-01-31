// priority: 0
"use strict";


/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processDust(event, material) {
	// Melting
	const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY);
	if (tfcProperty !== null) {
		const tinyDust = ChemicalHelper.get(TagPrefix.dustTiny, material, 1);
		addTFCMelting(event, tinyDust, material, global.calcAmountOfMetalProcessed(144 / 9, tfcProperty.getPercentOfMaterial()), 'tiny_dust');
		const smallDust = ChemicalHelper.get(TagPrefix.dustSmall, material, 1);
		addTFCMelting(event, smallDust, material, global.calcAmountOfMetalProcessed(144 / 4, tfcProperty.getPercentOfMaterial()), 'small_dust');
		const dust = ChemicalHelper.get(TagPrefix.dust, material, 1);
		addTFCMelting(event, dust, material, global.calcAmountOfMetalProcessed(144, tfcProperty.getPercentOfMaterial()), 'dust');
	}
}


/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processPowder(event, material) {
	const powderItem = ChemicalHelper.get(TFGTagPrefix.powder, material, 1);

	if (powderItem.isEmpty())
		return;

	const dustItem = ChemicalHelper.get(TagPrefix.dust, material, 1);
	const materialName = material.getName();

	event.recipes.gtceu.macerator(`tfg:${materialName}_to_powder`)
		.itemInputs(dustItem)
		.itemOutputs(powderItem.withCount(4))
		.duration(60)
		.EUt(2)

	event.recipes.tfc.quern(powderItem.withCount(4), dustItem)
		.id(`tfg:quern/${materialName}`)

	const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY);
	if (tfcProperty !== null) {
		addTFCMelting(event, powderItem, material, global.calcAmountOfMetalProcessed(144 / 4, tfcProperty.getPercentOfMaterial()), 'powder');
	}

	if (material.hasProperty(PropertyKey.FLUID)) {
		event.recipes.gtceu.extractor(`tfg:${materialName}_powder`)
			.itemInputs(powderItem)
			.outputFluids(Fluid.of(material.getFluid(), global.calcAmountOfMetalProcessed(144 / 4, tfcProperty.getPercentOfMaterial())))
			.duration(material.getMass() / 4)
			.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
			.EUt(getFluidRecipeEUt(material))
	}
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processIngot(event, material) {
	const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);

	if (ingotItem.isEmpty() 
		|| ingotItem.hasTag('c:hidden_from_recipe_viewers')
		|| material === GTMaterials.Stone) 
		return;

	if (material.hasProperty(TFGPropertyKey.TFC_PROPERTY)) {
		addTFCMelting(event, ingotItem, material, 144, 'ingot');
		addMaterialCasting(event, ingotItem, 'tfc:ceramic/ingot_mold', false, null, material, 'ingot', 144);
		addMaterialCasting(event, ingotItem, 'tfc:ceramic/fire_ingot_mold', true, null, material, 'ingot', 144);
	}
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processIngotDouble(event, material) {
	if (!material.hasFlag(TFGMaterialFlags.GENERATE_DOUBLE_INGOTS))
		return;

	const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);
	const doubleIngotItem = ChemicalHelper.get(TFGTagPrefix.ingotDouble, material, 1);

	addMaterialRecycling(event, doubleIngotItem, material, "double_ingot", TFGTagPrefix.ingotDouble);
	addMaterialWelding(event, doubleIngotItem, ingotItem, ingotItem, material, 5, 1);

	event.recipes.gtceu.bender(`tfg:bend_${material.getName()}_double_ingot_electric_only`)
		.itemInputs(ingotItem.withCount(2))
		.itemOutputs(doubleIngotItem)
		.duration(material.getMass() * 6)
		.EUt(GTValues.VA[GTValues.LV])
		.circuit(3)
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processBlock(event, material) {
	const blockItem = ChemicalHelper.get(TagPrefix.block, material, 1);

	if (blockItem.isEmpty()
		|| blockItem.hasTag('c:hidden_from_recipe_viewers')
		|| GTMaterials.Stone === material
		|| material.hasProperty(PropertyKey.POLYMER)) 
		return;

	const matAmount = getMaterialAmount(TagPrefix.block, material);
	const materialName = material.getName();

	if (material.hasProperty(PropertyKey.INGOT)) {
		const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);
		let ingotArray = [];
		for (let i = 0; i < matAmount; i++)
			ingotArray.push(ingotItem)

		event.recipes.greate.compacting(blockItem, ingotArray)
			.recipeTier(1)
			.circuitNumber(9)
			.heated()
			.id(`greate:compacting/${materialName}_block`)
	}
	else if (material.hasProperty(PropertyKey.GEM)) {
		const gemItem = ChemicalHelper.get(TagPrefix.gem, material, 1);
		let gemArray = [];
		for (let i = 0; i < matAmount; i++)
			gemArray.push(gemItem)

		event.recipes.greate.compacting(blockItem, gemArray)
			.recipeTier(1)
			.circuitNumber(9)
			.id(`greate:compacting/${materialName}_block`)
	}

	if (material.hasProperty(TFGPropertyKey.TFC_PROPERTY)) {
		addTFCMelting(event, blockItem, material, 144 * matAmount, 'block');
	}
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processPlate(event, material) {
	const plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1)
	if (plateItem.isEmpty() || plateItem.hasTag('c:hidden_from_recipe_viewers'))
		return;

	const materialName = material.getName();
	event.remove({ id: `gtceu:shaped/plate_${materialName}` })

	if (material === GTMaterials.Stone
		|| material === GTMaterials.Wood
		|| material === GTMaterials.TreatedWood
		|| material.hasProperty(PropertyKey.POLYMER))
		return;

	const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY);
	if (tfcProperty !== null) {
		addTFCMelting(event, plateItem, material, 144, 'plate');

		const doubleIngotItem = ChemicalHelper.get(TFGTagPrefix.ingotDouble, material, 1);
		addAnvilRecipe(event, plateItem, doubleIngotItem, ['hit_last', 'hit_second_last', 'hit_third_last'], false, material, 'sheet');
	}

	
	const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);
	if (!ingotItem.isEmpty()) {
		event.custom({
			type: "createaddition:rolling",
			input: ingotItem,
			result: plateItem,
			//processingTime: material.getMass() // TODO - controlled by a global config argh
		}).id(`tfg:rolling/${materialName}_plate`)
	}
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processPlateDouble(event, material) {
	const doublePlateItem = ChemicalHelper.get(TagPrefix.plateDouble, material, 1)
	if (doublePlateItem.isEmpty() || doublePlateItem.hasTag('c:hidden_from_recipe_viewers'))
		return;

	const plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1);

	event.remove({ id: `gtceu:shaped/plate_double_${material.getName()}` })

	if (material.hasProperty(TFGPropertyKey.TFC_PROPERTY)) {
		addTFCMelting(event, doublePlateItem, material, 288, 'double_plate');

		// If it's a TFC-era material, allow double plates in LV
		event.remove({ id: `gtceu:bender/bend_${material.getName()}_plate_to_double_plate` })
		event.recipes.gtceu.bender(`tfg:bend_${material.getName()}_plate_to_double_plate_electric_only`)
			.itemInputs(plateItem.withCount(2))
			.itemOutputs(doublePlateItem)
			.circuit(2)
			.duration(material.getMass() * 2)
			.EUt(24)
	}

	addMaterialWelding(event, doublePlateItem, plateItem, plateItem, material, 4, 2);
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processFoil(event, material) {
	const foilItem = ChemicalHelper.get(TagPrefix.foil, material, 4)
	const plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1)

	if (plateItem.isEmpty() || foilItem.isEmpty() || plateItem.hasTag('c:hidden_from_recipe_viewers'))
		return;

	event.custom({
		type: "createaddition:rolling",
		input: plateItem,
		result: foilItem,
		// TODO - processing time is controlled by a global config instead of setting it per-recipe...
		//processingTime: material.getMass()
	}).id(`tfg:rolling/${material.getName()}_foil`)
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processRod(event, material) {
	if (material === GTMaterials.Wood || material === GTMaterials.TreatedWood)
		return;

	// Short rods
	const shortRodItem = ChemicalHelper.get(TagPrefix.rod, material, 1)
	if (shortRodItem.isEmpty() || shortRodItem.hasTag('c:hidden_from_recipe_viewers'))
		return;

	const materialName = material.getName();

	addMaterialCasting(event, shortRodItem, 'tfg:rod_mold', true, null, material, 'rod', 144 / 2);

	const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY);
	if (tfcProperty !== null) {
		addTFCMelting(event, shortRodItem, material, 144 / 2, 'rod');

		const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1)
		addAnvilRecipe(event, shortRodItem.withCount(2), ingotItem, ['draw_last'], false, material, 'rod');
	}
		
	// Every material with a short rod also has a long rod
	const longRodItem = ChemicalHelper.get(TagPrefix.rodLong, material, 1)
	if (longRodItem.isEmpty() || longRodItem.hasTag('c:hidden_from_recipe_viewers'))
		return;

	event.remove({ id: `gtceu:shaped/stick_long_stick_${materialName}` })

	if (tfcProperty !== null) {
		addTFCMelting(event, longRodItem, material, 144, 'long_rod');
	}

	addMaterialWelding(event, longRodItem, shortRodItem, shortRodItem, material, 4, 1);
}


/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processBolt(event, material) {
	if (material === GTMaterials.Wood || material === GTMaterials.TreatedWood)
		return;

	const boltItem = ChemicalHelper.get(TagPrefix.bolt, material, 1);
	if (boltItem.isEmpty())
		return;

	const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY);
	if (tfcProperty !== null) {
		addTFCMelting(event, boltItem, material, getMaterialAmount(TagPrefix.bolt, material) * 144, 'bolt');

		const rodItem = ChemicalHelper.get(TagPrefix.rod, material, 1)
		addAnvilRecipe(event, boltItem.withCount(4), rodItem, ['punch_last', 'draw_second_last', 'draw_third_last'], false, material, 'bolt');
	}
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processScrew(event, material) {
	if (material === GTMaterials.Wood || material === GTMaterials.TreatedWood)
		return;
		
	const screwItem = ChemicalHelper.get(TagPrefix.screw, material, 1);
	if (screwItem.isEmpty())
		return;

	const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY);
	if (tfcProperty !== null) {
		addTFCMelting(event, screwItem, material, getMaterialAmount(TagPrefix.screw, material) * 144, 'screw');
		
		const rodItem = ChemicalHelper.get(TagPrefix.rod, material, 1);
		addAnvilRecipe(event, screwItem.withCount(4), rodItem, ['punch_last', 'punch_second_last', 'shrink_third_last'], false, material, 'screw');
	}
}

function processRing(event, material) {
	const ringItem = ChemicalHelper.get(TagPrefix.ring, material, 1)
	if (ringItem.isEmpty())
		return;

	const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY);
	if (tfcProperty !== null) {
		addTFCMelting(event, ringItem, material, getMaterialAmount(TagPrefix.ring, material) * 144, 'ring');

		const rodItem = ChemicalHelper.get(TagPrefix.rod, material, 1);
		addAnvilRecipe(event, ringItem.withCount(2), rodItem, ['hit_last', 'hit_second_last', 'hit_third_last'], false, material, 'ring');
	}
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processAnvil(event, material) {
	const anvilItem = ChemicalHelper.get(TFGTagPrefix.anvil, material, 1)
	if (anvilItem.isEmpty())
		return;

	addMaterialRecycling(event, anvilItem, material, 'anvil', TFGTagPrefix.anvil);
	addMaterialCasting(event, anvilItem, null, false, 'gtceu:anvil_casting_mold', material, 'anvil', getMaterialAmount(TFGTagPrefix.anvil, material) * 144);
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processLamp(event, material) {
	const finishedLampItem = ChemicalHelper.get(TFGTagPrefix.lamp, material, 1)
	const unfinishedLampItem = ChemicalHelper.get(TFGTagPrefix.lampUnfinished, material, 1)
	if (finishedLampItem.isEmpty() || unfinishedLampItem.isEmpty())
		return;
		
	const materialName = material.getName();

	// Unfinished lamp
	TFGHelpers.registerMaterialInfo(finishedLampItem, [material, 1, GTMaterials.Glass, 1]);
	addTFCMelting(event, finishedLampItem, material, 144, 'lamp');

	addMaterialRecycling(event, unfinishedLampItem, material, 'unfinished_lamp', TFGTagPrefix.lampUnfinished);
	addMaterialCasting(event, unfinishedLampItem, null, false, 'tfg:lamp_casting_mold', material, 'unfinished_lamp', getMaterialAmount(TFGTagPrefix.lampUnfinished, material) * 144);

	// Finished lamp
	event.recipes.gtceu.packer(`tfg:${materialName}_lamp`)
		.itemInputs("tfc:lamp_glass", unfinishedLampItem)
		.itemOutputs(finishedLampItem)
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.fluid_solidifier(`tfg:${materialName}_lamp_from_liquid`)
		.itemInputs(unfinishedLampItem)
		.inputFluids(Fluid.of(GTMaterials.Glass.getFluid(), 144))
		.itemOutputs(finishedLampItem)
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processTrapdoor(event, material) {
	const trapdoorItem = ChemicalHelper.get(TFGTagPrefix.trapdoor, material, 1)
	if (trapdoorItem.isEmpty())
		return;

	addMaterialRecycling(event, trapdoorItem, material, 'trapdoor', TFGTagPrefix.trapdoor);
	addMaterialCasting(event, trapdoorItem, null, false, 'tfg:trapdoor_casting_mold', material, 'trapdoor', getMaterialAmount(TFGTagPrefix.trapdoor, material) * 144);

	if (material.hasProperty(TFGPropertyKey.TFC_PROPERTY)) {
		const plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1);
		addAnvilRecipe(event, trapdoorItem, plateItem, ['bend_last', 'draw_second_last', 'draw_third_last'], false, material, 'trapdoor');
	}
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processBell(event, material) {
	const bellItem = ChemicalHelper.get(TFGTagPrefix.bell, material, 1)
	if (bellItem.isEmpty())
		return;
		
	const materialName = material.getName();

	event.remove({ id: `tfc:heating/${materialName}_bell` })

	addMaterialRecycling(event, bellItem, material, 'bell', TFGTagPrefix.bell);
	addMaterialCasting(event, bellItem, 'tfc:ceramic/bell_mold', false, 'tfg:bell_casting_mold', material, 'bell', getMaterialAmount(TFGTagPrefix.bell, material) * 144);
}

function processChain(event, material) {
	const chainItem = ChemicalHelper.get(TFGTagPrefix.chain, material, 1);
	if (chainItem.isEmpty())
		return;

	addMaterialRecycling(event, chainItem, material, 'chain', TFGTagPrefix.chain);
	addMaterialCasting(event, chainItem.withCount(16), null, false, 'tfg:chain_casting_mold', material, 'chain', 144);
}

function processBars(event, material) {
	const barsItem = ChemicalHelper.get(TFGTagPrefix.bars, material, 1);
	if (barsItem.isEmpty())
		return;

	addMaterialRecycling(event, barsItem, material, 'bars', TFGTagPrefix.bars);

	const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);
	event.stonecutting(barsItem.withCount(4), ingotItem);

	if (material.hasProperty(TFGPropertyKey.TFC_PROPERTY)) {
		addAnvilRecipe(event, barsItem.withCount(4), ingotItem, ['upset_last', 'punch_second_last', 'punch_third_last'], false, material, 'bars');

		const doubleIngotItem = ChemicalHelper.get(TFGTagPrefix.ingotDouble, material, 1);
		addAnvilRecipe(event, barsItem.withCount(8), doubleIngotItem, ['upset_last', 'punch_second_last', 'punch_third_last'], false, material, 'bars_double');
	}
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processBuzzsawBlade(event, material) {
	const buzzsawBladeItem = ChemicalHelper.get(TagPrefix.toolHeadBuzzSaw, material, 1)
	const doublePlateItem = ChemicalHelper.get(TagPrefix.plateDouble, material, 1)
	if (buzzsawBladeItem.isEmpty() || doublePlateItem.isEmpty())
		return;

	const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY);
	const materialName = material.getName();

	event.recipes.gtceu.lathe(`buzzsaw_gear_${materialName}`)
		.itemInputs(doublePlateItem)
		.itemOutputs(buzzsawBladeItem)
		.duration(material.getMass() * 6)
		.EUt(GTValues.VA[tfcProperty !== null ? GTValues.LV : GTValues.MV])

	if (tfcProperty !== null) {
		addAnvilRecipe(event, buzzsawBladeItem, doublePlateItem, ['bend_last', 'hit_second_last', 'draw_third_last'], false, material, 'buzzsaw_blade');

		event.recipes.vintageimprovements.polishing(buzzsawBladeItem, doublePlateItem)
			.speedLimits(0)
			.processingTime(material.getMass() * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
			.id(`tfg:vi/lathe/${materialName}_buzzsaw`)
	}

	addMaterialRecycling(event, buzzsawBladeItem, material, 'buzz_saw_blade', TagPrefix.toolHeadBuzzSaw);

	event.remove({ id: `gtceu:shaped/buzzsaw_blade_${materialName}` })
}


/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processSpring(event, material) {
	const springItem = ChemicalHelper.get(TagPrefix.spring, material, 1);
	const materialName = material.getName();
	
	const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY);
	
	if (springItem !== null) {
		event.remove({ id: `gtceu:shaped/spring_${materialName}` });

		if (tfcProperty !== null) {
			addTFCMelting(event, springItem, material, getMaterialAmount(TagPrefix.spring, material) * 144, 'spring');

			const longRodItem = ChemicalHelper.get(TagPrefix.rodLong, material, 1);
			addAnvilRecipe(event, springItem, longRodItem, ['hit_last', 'bend_second_last', 'bend_third_last'], false, material, 'spring');
		}
	}
	
	const smallSpringItem = ChemicalHelper.get(TagPrefix.springSmall, material, 1);
	if (smallSpringItem !== null) {
		event.remove({ id: `gtceu:shaped/spring_small_${materialName}` });

		if (tfcProperty !== null) {
			addTFCMelting(event, smallSpringItem, material, getMaterialAmount(TagPrefix.springSmall, material) * 144, 'spring_small');

			const rodItem = ChemicalHelper.get(TagPrefix.rod, material, 1);
			addAnvilRecipe(event, smallSpringItem, rodItem, ['hit_last', 'bend_second_last', 'bend_third_last'], false, material, 'small_spring');
		}
	}
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processNugget(event, material) {
	const nuggetItem = ChemicalHelper.get(TagPrefix.nugget, material, 1);
	if (nuggetItem.isEmpty())
		return;
		
	const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY)
	if (tfcProperty !== null) {
		addTFCMelting(event, nuggetItem, material, 144 / 9, 'nugget');
		addMaterialCasting(event, nuggetItem.withCount(4), 'tfg:nugget_mold', false, null, material, 'nugget', 144 * (4/9));
		
		const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);
		addAnvilRecipe(event, nuggetItem.withCount(9), ingotItem, ['punch_last', 'hit_second_last', 'punch_third_last'], false, material, 'nugget');
	}
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processSmallGear(event, material) {
	const smallGearItem = ChemicalHelper.get(TagPrefix.gearSmall, material, 1);
	if (smallGearItem.isEmpty()) 
		return;
		
	const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY)
	if (tfcProperty !== null) {
		addTFCMelting(event, smallGearItem, material, 144, 'small_gear');
		addMaterialCasting(event, smallGearItem, 'tfg:small_gear_mold', true, null, material, 'small_gear', 144);

		const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);
		addAnvilRecipe(event, smallGearItem, ingotItem, ['hit_last', 'shrink_second_last', 'draw_third_last'], false, material, 'small_gear');
	}
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processLargeGear(event, material) {
	const gearItem = ChemicalHelper.get(TagPrefix.gear, material, 1);
	if (gearItem.isEmpty()) 
		return;
		
	const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY)
	if (tfcProperty !== null) {
		addTFCMelting(event, gearItem, material, 144 * 4, 'gear');
		
		let doublePlateItem = ChemicalHelper.get(TagPrefix.plateDouble, material, 1)
		addMaterialWelding(event, gearItem, doublePlateItem, doublePlateItem, material, 4, 1);
	}
}