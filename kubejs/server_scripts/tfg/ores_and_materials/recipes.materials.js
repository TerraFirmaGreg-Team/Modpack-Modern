// priority: 0
"use strict";


/**
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function getFluidRecipeEUt(material) {
	// Special case for bis bronze, black bronze, rose gold and sterling silver because removing the blast property doesn't change the tier of
	// the extractor recipes retroactively
	return material.hasProperty(PropertyKey.BLAST) && material !== GTMaterials.BismuthBronze && material !== GTMaterials.BlackBronze && material !== GTMaterials.RoseGold && material !== GTMaterials.SterlingSilver
		? GTValues.VA[GTValues.MV]
		: GTValues.VA[GTValues.LV];
}

/** 
 * @param {TagPrefix} tagPrefix 
 */
function getMaterialAmount(tagPrefix, material) {
	return tagPrefix.getMaterialAmount(material) / GTValues.M;
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {Internal.ItemStack} inputItem 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material
 * @param {number} mbAmount
 * @param {String} recipeIdSuffix
 */
function addTFCMelting(event, inputItem, material, mbAmount, recipeIdSuffix) {
	const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY);
	const outputMaterial = (tfcProperty.getOutputMaterial() === null) ? material : tfcProperty.getOutputMaterial();

	if (!outputMaterial.hasProperty(PropertyKey.FLUID))
		return;

	event.recipes.tfc.heating(inputItem, tfcProperty.getMeltTemp())
		.resultFluid(Fluid.of(outputMaterial.getFluid(), mbAmount))
		.useDurability(true)
		.id(`tfg:heating/metal/${material.getName()}_${recipeIdSuffix}`);
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {Internal.ItemStack} outputItem 
 * @param {Internal.ItemStack} inputItem 
 * @param {String[]} steps
 * @param {boolean} bonus
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material
 * @param {String} recipeIdSuffix
 */
function addAnvilRecipe(event, outputItem, inputItem, steps, bonus, material, recipeIdSuffix) {
	const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY);
	event.recipes.tfc.anvil(outputItem, inputItem, steps)
		.tier(tfcProperty.getTier())
		.bonus(bonus)
		.id(`tfc:anvil/${material.getName()}_${recipeIdSuffix}`);
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {Internal.ItemStack} inputItem 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material
 * @param {String} tagPrefixName
 * @param {TagPrefix} tagPrefix 
 */
function addMaterialRecycling(event, inputItem, material, tagPrefixName, tagPrefix) {
	const ingotAmount = getMaterialAmount(tagPrefix, material);
	addMaterialRecyclingNoTagPrefix(event, inputItem, material, tagPrefixName, ingotAmount);
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {Internal.ItemStack} inputItem 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material
 * @param {String} recipeSuffix
 * @param {number} ingotAmount
 */
function addMaterialRecyclingNoTagPrefix(event, inputItem, material, recipeSuffix, ingotAmount) {
	const materialName = material.getName();
	const mbAmount = ingotAmount * 144;

	if (material.hasProperty(PropertyKey.FLUID)) {
		if (material.hasProperty(TFGPropertyKey.TFC_PROPERTY)) {
			addTFCMelting(event, inputItem, material, mbAmount, recipeSuffix);
		}

		// Add an extractor recipe
		event.recipes.gtceu.extractor(`gtceu:extract_${materialName}_${recipeSuffix}`)
			.itemInputs(inputItem)
			.outputFluids(Fluid.of(material.getFluid(), mbAmount))
			.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
			.duration(material.getMass() * ingotAmount)
			.EUt(getFluidRecipeEUt(material));
	}

	// Remove existing macerator recipes because Greate
	removeMaceratorRecipe(event, `macerate_${materialName}_${recipeSuffix}`);

	TFGHelpers.registerMaterialInfo(inputItem, [material, ingotAmount]);
}

/**
 * Function to get fluid filling NBT.
 *
 * @param {string} material 
 * Fluid
 * @param {number} amount 
 * mB
 * @returns {{ tank: { FluidName: string; Amount: number; }; }} 
 */
const getFillingNBT = (material, amount) => {
	return {
		tank: {
			FluidName: Fluid.of(material.getFluid()).getId(),
			Amount: amount
		}
	}
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {Internal.ItemStack} outputItem
 * @param {String} ceramicMold 
 * @param {boolean} isFireMold
 * @param {String} gtMold
 * The mold item for the fluid solidifier/alloy smelter.
 * Pass null for built-in GT molds, since GT already generates recipes for those
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material
 * @param {String} tagPrefixName
 * @param {number} mbAmount
 */
function addMaterialCasting(event, outputItem, ceramicMold, isFireMold, gtMold, material, tagPrefixName, mbAmount) {
	const materialName = material.getName();

	// If it's a TFC material, add ceramic mold casting + create spouting
	const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY);
	// Check if the material is a "castable" material (i.e., pre-iron), OR if this is for the ingot mold,
	// which is an exception that everything can cast into
	const canBeCasted = material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED) || tagPrefixName === 'ingot';
	if (canBeCasted
		&& tfcProperty !== null 
		&& ceramicMold !== null
		// Liquid wrought iron doesn't exist in the TFC era
		&& material !== GTMaterials.WroughtIron)
	{
		const outputMaterial = (tfcProperty.getOutputMaterial() === null) ? material : tfcProperty.getOutputMaterial();
		const id = `${materialName}_${tagPrefixName}_${isFireMold ? 'fire' : 'ceramic'}`;
		
		event.recipes.tfc.casting(outputItem, ceramicMold, Fluid.of(outputMaterial.getFluid(), mbAmount), isFireMold ? 0.01 : 0.1)
			.id(`tfg:casting/${id}`);

		event.recipes.create.filling(Item.of(ceramicMold, getFillingNBT(outputMaterial, mbAmount)), [
			Fluid.of(outputMaterial.getFluid(), mbAmount),
			Item.of(ceramicMold).strongNBT()
		]).id(`tfg:filling/${id}`);
	}

	// If there's a gregtech mold, add alloy smelter/fluid solidifier recipes.
	if (gtMold !== null) {
		const ingotAmount = mbAmount / 144;

		event.recipes.gtceu.alloy_smelter(`tfg:cast_${materialName}_${tagPrefixName}`)
			.itemInputs(ChemicalHelper.get(TagPrefix.ingot, material, ingotAmount))
			.notConsumable(gtMold)
			.itemOutputs(outputItem)
			.duration(material.getMass() * 2 * ingotAmount)
			.EUt(getFluidRecipeEUt(material))
			.category(GTRecipeCategories.INGOT_MOLDING)

		event.recipes.gtceu.fluid_solidifier(`tfg:solidify_${materialName}_${tagPrefixName}`)
			.inputFluids(Fluid.of(material.getFluid(), mbAmount))
			.notConsumable(gtMold)
			.itemOutputs(outputItem)
			.duration(material.getMass() * 2 * ingotAmount)
			.EUt(getFluidRecipeEUt(material))
	}
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {Internal.ItemStack} outputItem
 * @param {Internal.ItemStack} inputItem1
 * @param {Internal.ItemStack} inputItem2
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 * @param {number} tierThreshold
 * Should be 4 for everything except double ingots, which should be 5
 * @param {number} nonTfcTier
 * What recipe tier should non-tfc materials use? 0 for ulv, 1 for lv, etc
 */
function addMaterialWelding(event, outputItem, inputItem1, inputItem2, material, tierThreshold, nonTfcTier) {
	const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY);
	const id = `${material.getName()}_${linuxUnfucker(outputItem)}`;
	let compactingTier = nonTfcTier;

	if (tfcProperty !== null) {

		event.recipes.tfc.welding(TFC.isp.of(outputItem).copyHeat(), inputItem1, inputItem2, tfcProperty.getTier() - 1)
			.id(`tfc:welding/${id}`);

		compactingTier = tfcProperty.getTier() < tierThreshold ? 0 : 1;
	}

	event.recipes.greate.compacting(outputItem, [inputItem1, inputItem2, 'tfc:powder/flux'])
		.heated()
		.recipeTier(compactingTier)
		.circuitNumber(0)
		.id(`tfg:compacting/${id}`);

	event.recipes.gtceu.forming_press(`tfg:${id}`)
		.itemInputs(inputItem1, inputItem2, 'tfc:powder/flux')
		.itemOutputs(outputItem)
		.duration(material.getMass() * 2)
		.EUt(GTValues.VA[compactingTier]);
}

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGMaterialRecipes(event) {
	const $GreateMaterials = Java.loadClass("electrolyte.greate.registry.GreateMaterials")

	forEachMaterial(material => {
		// greate moment
		if (material === $GreateMaterials.AndesiteAlloy
			|| material === $GreateMaterials.RefinedRadiance
			|| material === $GreateMaterials.ShadowSteel
			|| material === $GreateMaterials.ChromaticCompound
			|| material === GTMaterials.DamascusSteel)
		{ return; }

		if (material.hasProperty(PropertyKey.DUST)) {
			processDust(event, material)
			processPowder(event, material)
		}

		const toolProperty = material.getProperty(PropertyKey.TOOL)
		if (toolProperty !== null) {
			modifyRecyclingAmounts(material)
			let circuit = 1;
			processGTToolHead(event, GTToolType.SWORD, "sword_head", TFGTagPrefix.toolHeadSword, 'tfg:sword_head_extruder_mold', 'tfc:ceramic/sword_blade_mold', circuit++, material)
			processGTToolHead(event, GTToolType.PICKAXE, "pickaxe_head", TFGTagPrefix.toolHeadPickaxe, 'tfg:pickaxe_head_extruder_mold', 'tfc:ceramic/pickaxe_head_mold', circuit++, material)
			processGTToolHead(event, GTToolType.AXE, "axe_head", TFGTagPrefix.toolHeadAxe, 'tfg:axe_head_extruder_mold', 'tfc:ceramic/axe_head_mold', circuit++, material)
			processGTToolHead(event, GTToolType.SHOVEL, "shovel_head", TFGTagPrefix.toolHeadShovel, 'tfg:shovel_head_extruder_mold', 'tfc:ceramic/shovel_head_mold', circuit++, material)
			processGTToolHead(event, GTToolType.HOE, "hoe_head", TFGTagPrefix.toolHeadHoe, 'tfg:hoe_head_extruder_mold', 'tfc:ceramic/hoe_head_mold', circuit++, material)
			processGTToolHead(event, GTToolType.KNIFE, "knife_head", TFGTagPrefix.toolHeadKnife, 'tfg:knife_head_extruder_mold', 'tfc:ceramic/knife_blade_mold', circuit++, material)
			processGTToolHead(event, GTToolType.FILE, "file_head", TFGTagPrefix.toolHeadFile, 'tfg:file_head_extruder_mold', null, circuit++, material)
			processGTToolHead(event, GTToolType.SAW, "saw_head", TFGTagPrefix.toolHeadSaw, 'tfg:saw_head_extruder_mold', 'tfc:ceramic/saw_blade_mold', circuit++, material)
			processGTToolHead(event, GTToolType.SPADE, "spade_head", TFGTagPrefix.toolHeadSpade, 'tfg:spade_head_extruder_mold', null, circuit++, material)
			processGTToolHead(event, GTToolType.MINING_HAMMER, "mining_hammer_head", TFGTagPrefix.toolHeadMiningHammer, 'tfg:mining_hammer_head_extruder_mold', null, circuit++, material)
			processGTToolHead(event, GTToolType.SCYTHE, "scythe_head", TFGTagPrefix.toolHeadScythe, 'tfg:scythe_head_extruder_mold', 'tfc:ceramic/scythe_blade_mold', circuit++, material)
			processGTToolHead(event, GTToolType.HARD_HAMMER, "hammer_head", TFGTagPrefix.toolHeadHammer, 'tfg:hammer_head_extruder_mold', 'tfc:ceramic/hammer_head_mold', circuit++, material)
			processGTToolHead(event, GTToolType.BUTCHERY_KNIFE, "butchery_knife_head", TFGTagPrefix.toolHeadButcheryKnife, 'tfg:butchery_knife_head_extruder_mold', null, circuit++, material)
			processGTToolHead(event, GTToolType.SCREWDRIVER, "screwdriver_tip", TagPrefix.toolHeadScrewdriver, 'tfg:screwdriver_tip_extruder_mold', null, circuit++, material)
			processGTToolHead(event, GTToolType.WRENCH, "wrench_tip", TagPrefix.toolHeadWrench, 'tfg:wrench_tip_extruder_mold', null, circuit++, material)
			processGTToolHead(event, GTToolType.WIRE_CUTTER, "wire_cutter_head", TagPrefix.toolHeadWireCutter, 'tfg:wire_cutter_head_extruder_mold', null, circuit++, material)

			processToolMortar(event, GTToolType.MORTAR, material)

			processToolHead(event, TFGTagPrefix.toolHeadPropick, "propick_head", 'tfg:propick_head_extruder_mold', 'tfc:ceramic/propick_head_mold', circuit++, material)
			processToolHead(event, TFGTagPrefix.toolHeadJavelin, "javelin_head", 'tfg:javelin_head_extruder_mold', 'tfc:ceramic/javelin_head_mold', circuit++, material)
			processToolHead(event, TFGTagPrefix.toolHeadChisel, "chisel_head", 'tfg:chisel_head_extruder_mold', 'tfc:ceramic/chisel_head_mold', circuit++, material)
			processToolHead(event, TFGTagPrefix.toolHeadMace, "mace_head", 'tfg:mace_head_extruder_mold', 'tfc:ceramic/mace_head_mold', circuit++, material)
			processToolHead(event, TFGTagPrefix.toolHeadMattock, "mattock_head", 'tfg:mattock_head_extruder_mold', null, circuit++, material)
			processToolHead(event, TFGTagPrefix.toolHeadHook, "fish_hook", 'tfg:fish_hook_extruder_mold', null, circuit++, material)
		}
		
		if (material.hasProperty(PropertyKey.INGOT)) {
			processIngot(event, material)
			processIngotDouble(event, material)
			processPlate(event, material)
			processPlateDouble(event, material)
			processBlock(event, material)
			processFoil(event, material)
			processRod(event, material)
			processBars(event, material)
			processBolt(event, material)
			processScrew(event, material)
			processRing(event, material)
			processSpring(event, material)
			processNugget(event, material)
			processSmallGear(event, material)
			processLargeGear(event, material)

			processBuzzsawBlade(event, material)
			processPlatedBlock(event, material)
		}

		if (material.hasProperty(PropertyKey.GEM)) {
			processGems(event, material)
			processPlate(event, material)
			processBlock(event, material)
			processRod(event, material)
			processBolt(event, material)
			processScrew(event, material)
			processSmallGear(event, material)
			processLargeGear(event, material)
			processBuzzsawBlade(event, material)
		}

		if (material.hasProperty(TFGPropertyKey.TFC_PROPERTY)) {
			processAnvil(event, material)
			processLamp(event, material)
			processTrapdoor(event, material)
			processChain(event, material)
			processBell(event, material)
		}

		if (material.hasFlag(TFGMaterialFlags.HAS_TFC_ARMOR)) {
			processTFCArmor(event, material)
		}

		if (material.hasFlag(TFGMaterialFlags.HAS_TFC_TOOL) || material.hasFlag(TFGMaterialFlags.HAS_GT_TOOL)) {
			processTFCTool(event, material)
		}
		
		const oreProperty = material.getProperty(PropertyKey.ORE);
		if (oreProperty !== null) {
			processSmallOre(event, material)
			processPoorRawOre(event, material)
			processNormalRawOre(event, material)
			processRichRawOre(event, material)

			processCrushedOre(event, material)
			processPurifiedOre(event, material)
			processRefinedOre(event, material)
			processImpureDust(event, material)
			processPureDust(event, material)

			// Indicators
			event.replaceInput({ id: `gtceu:shaped/${material.getName()}_surface_indicator` }, 'minecraft:gravel', '#tfc:rock/gravel')
		}
	})
}