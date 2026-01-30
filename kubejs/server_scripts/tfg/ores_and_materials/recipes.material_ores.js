// priority: 0
"use strict";

// TODO: merge these two tag prefixes

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
*/
function processSmallOre(event, material) {
	if (!material.hasFlag(TFGMaterialFlags.HAS_SMALL_TFC_ORE))
		return;

	const smallOre = ChemicalHelper.get(TFGTagPrefix.oreSmall, material, 1);
	const smallDust = ChemicalHelper.get(TagPrefix.dustSmall, material, 1);

	let materialName = material.getName();
	event.recipes.gtceu.macerator(`tfg:macerate_${materialName}_small_ore`)
		.itemInputs(smallOre)
		.itemOutputs(smallDust)
		.duration(material.getMass())
		.category(GTRecipeCategories.ORE_CRUSHING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.tfc.quern(smallDust, smallOre)
		.id(`tfg:quern/small_${materialName}`)

	if (material.hasProperty(TFGPropertyKey.TFC_PROPERTY)) {
		addTFCMelting(event, smallOre, material, 16, 'small_ore');
	}
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 * @param {*} oreProperty
 * The material's ore property
 * @param {number} multiplier
 * How many ingots/gems/dusts each ore item should smelt into.
 * Can be a non-integer, in which case it'll smelt into nuggets/small dusts etc.
 * @param {Internal.ItemStack} oreItem
 * The input item to be smelted
 * @param {string} type
 * The type of ore being smelted, used for recipe IDs
 */
function smeltOre(event, material, oreProperty, multiplier, oreItem, type) {
	const smeltingMaterial = oreProperty.getDirectSmeltResult().isNull() ? material : oreProperty.getDirectSmeltResult();
	if (!material.hasProperty(PropertyKey.BLAST) && !material.hasFlag(MaterialFlags.NO_ORE_SMELTING)) {
		let ingotItem;
		if (smeltingMaterial.hasProperty(PropertyKey.INGOT)) {
			ingotItem = ChemicalHelper.getIngot(smeltingMaterial, GTValues.M * multiplier)
		}
		else if (smeltingMaterial.hasProperty(PropertyKey.GEM)) {
			if (multiplier >= 1) {
				ingotItem = ChemicalHelper.get(TagPrefix.gem, smeltingMaterial, multiplier)
			}
			else {
				ingotItem = ChemicalHelper.get(TagPrefix.gemFlawed, smeltingMaterial, 1)
			}
		}
		else {
			ingotItem = ChemicalHelper.getDust(smeltingMaterial, GTValues.M * multiplier)
		}

		if (!ingotItem.isEmpty()) {
			event.smelting(ingotItem, oreItem).id(`gtceu:smelting/smelt_${type}_${material.getName()}_ore_to_ingot`)
		}
	}
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processPoorRawOre(event, material) {
	const poorOreItem = ChemicalHelper.get(TFGTagPrefix.poorRawOre, material, 1)
	const crushedOreItem = ChemicalHelper.get(TagPrefix.crushed, material, 1)

	if (poorOreItem === null || crushedOreItem === null)
		return;

	const materialName = material.getName();
	const oreProperty = material.getProperty(PropertyKey.ORE)
	const multiplier = oreProperty.getOreMultiplier();
	crushedOreItem.setCount(crushedOreItem.getCount() * multiplier)

	// Forge hammer
	let hammerRecipe = event.recipes.gtceu.forge_hammer(`hammer_poor_raw_${materialName}_to_crushed_ore`)
		.itemInputs(poorOreItem)
		.category(GTRecipeCategories.ORE_FORGING)
		.duration(100)
		.EUt(16)

	if (material.hasProperty(PropertyKey.GEM)) {
		const gemItem = ChemicalHelper.get(TagPrefix.gem, material, crushedOreItem.getCount());
		hammerRecipe.chancedOutput(gemItem, 7500, 950)

		event.recipes.greate.pressing(Item.of(gemItem).withChance(0.75), poorOreItem)
			.recipeTier(1)
			.id(`greate:pressing/poor_raw_${materialName}_to_gem`)

		let polishingCount = Math.max(crushedOreItem.getCount() / 2, 1);
		event.recipes.create.sandpaper_polishing(gemItem.copyWithCount(polishingCount), poorOreItem)
			.id(`tfg:polishing/poor_raw_${materialName}_to_gem`)
	} else {
		hammerRecipe.chancedOutput(crushedOreItem, 7500, 950)

		event.recipes.greate.pressing(Item.of(crushedOreItem).withChance(0.75), poorOreItem)
			.recipeTier(1)
			.id(`greate:pressing/poor_raw_${materialName}_to_crushed_ore`)
	}

	// Macerator
	let maceratorRecipe = event.recipes.gtceu.macerator(`macerate_poor_raw_${materialName}_ore_to_crushed_ore`)
		.itemInputs(poorOreItem)
		.category(GTRecipeCategories.ORE_CRUSHING)
		.duration(40)
		.EUt(2)

	if (multiplier > 1) {
		maceratorRecipe.itemOutputs(crushedOreItem.copyWithCount(multiplier / 2))
	} else {
		maceratorRecipe.chancedOutput(crushedOreItem, 5000, 750)
	}
	maceratorRecipe.chancedOutput(crushedOreItem.copyWithCount(1), 2500, 500)
	maceratorRecipe.chancedOutput(crushedOreItem.copyWithCount(1), 1250, 250)

	// Quern
	if (multiplier > 1) {
		event.recipes.tfc.quern(
			crushedOreItem.copyWithCount(multiplier / 2),
			poorOreItem
		).id(`tfg:quern/${materialName}_crushed_ore_from_poor_raw_ore`)
	} else {
		event.recipes.tfc.quern(
			ChemicalHelper.get(TagPrefix.dustSmall, material, 2),
			poorOreItem
		).id(`tfg:quern/${materialName}_crushed_ore_from_poor_raw_ore`)
	}

	// Smelting
	smeltOre(event, material, oreProperty, multiplier / 2, poorOreItem, 'poor')

	// Melting
	const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY);
	if (tfcProperty !== null) {
		addTFCMelting(event, poorOreItem, material, global.calcAmountOfMetalProcessed(24, tfcProperty.getPercentOfMaterial()), 'poor_raw_ore');
	}
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processNormalRawOre(event, material) {
	const oreProperty = material.getProperty(PropertyKey.ORE)
	const multiplier = oreProperty.getOreMultiplier();
	const normalOreItem = ChemicalHelper.get(TagPrefix.rawOre, material, 1)
	const crushedOreItem = ChemicalHelper.get(TagPrefix.crushed, material, multiplier)

	if (normalOreItem === null || crushedOreItem === null)
		return;

	const materialName = material.getName();

	// Forge hammer
	let hammerRecipe = event.recipes.gtceu.forge_hammer(`hammer_raw_${materialName}_to_crushed_ore`)
		.itemInputs(normalOreItem)
		.category(GTRecipeCategories.ORE_FORGING)
		.duration(100)
		.EUt(16)

	if (material.hasProperty(PropertyKey.GEM)) {
		const gemItem = ChemicalHelper.get(TagPrefix.gem, material, crushedOreItem.getCount())
		hammerRecipe.itemOutputs(gemItem)

		event.recipes.greate.pressing(gemItem, normalOreItem)
			.recipeTier(1)
			.id(`greate:pressing/raw_${materialName}_to_gem`)

		event.recipes.create.sandpaper_polishing(gemItem, normalOreItem)
			.id(`tfg:polishing/raw_${materialName}_to_gem`)
	} else {
		hammerRecipe.itemOutputs(crushedOreItem)

		event.recipes.greate.pressing(crushedOreItem, normalOreItem)
			.recipeTier(1)
			.id(`greate:pressing/raw_${materialName}_to_crushed_ore`)
	}

	event.remove({ id: `greate:milling/integration/gtceu/macerator/macerate_raw_${materialName}_ore_to_crushed_ore` })

	// Macerator
	event.recipes.gtceu.macerator(`macerate_raw_${materialName}_ore_to_crushed_ore`)
		.itemInputs(normalOreItem)
		.itemOutputs(crushedOreItem)
		.chancedOutput(crushedOreItem.copyWithCount(1), 5000, 500)
		.chancedOutput(crushedOreItem.copyWithCount(1), 2500, 250)
		.chancedOutput(crushedOreItem.copyWithCount(1), 1250, 250)
		.category(GTRecipeCategories.ORE_CRUSHING)
		.duration(40)
		.EUt(2)

	// Quern
	event.recipes.tfc.quern(crushedOreItem, normalOreItem)
		.id(`tfg:quern/${materialName}_crushed_ore_from_normal_raw_ore`)

	// Remove ore block recipes
	event.remove({ id: `gtceu:compressor/compress_${materialName}_to_raw_ore_block` })
	event.remove({ id: `gtceu:forge_hammer/decompress_${materialName}_to_raw_ore` })

	// Smelting
	smeltOre(event, material, oreProperty, multiplier, normalOreItem, 'raw')

	// Melting
	const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY);
	if (tfcProperty !== null) {
		addTFCMelting(event, normalOreItem, material, global.calcAmountOfMetalProcessed(36, tfcProperty.getPercentOfMaterial()), 'raw_ore');
	}
}

/**
* @param {Internal.RecipesEventJS} event 
* @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
*/
function processRichRawOre(event, material) {
	const oreProperty = material.getProperty(PropertyKey.ORE)
	const multiplier = oreProperty.getOreMultiplier() * 2;
	const richOreItem = ChemicalHelper.get(TFGTagPrefix.richRawOre, material, 1)
	const crushedOreItem = ChemicalHelper.get(TagPrefix.crushed, material, multiplier)

	if (richOreItem === null || crushedOreItem === null)
		return;

	const materialName = material.getName();

	// Forge hammer
	let hammerRecipe = event.recipes.gtceu.forge_hammer(`hammer_rich_raw_${materialName}_to_crushed_ore`)
		.itemInputs(richOreItem)
		.category(GTRecipeCategories.ORE_FORGING)
		.duration(100)
		.EUt(16)

	if (material.hasProperty(PropertyKey.GEM)) {
		const gemItem = ChemicalHelper.get(TagPrefix.gem, material, crushedOreItem.getCount())
		hammerRecipe.itemOutputs(gemItem)

		event.recipes.greate.pressing(gemItem, richOreItem)
			.recipeTier(1)
			.id(`greate:pressing/rich_raw_${materialName}_to_gem`)

		event.recipes.create.sandpaper_polishing(gemItem, richOreItem)
			.id(`tfg:polishing/rich_raw_${materialName}_to_gem`)
	} else {
		hammerRecipe.itemOutputs(crushedOreItem)

		event.recipes.greate.pressing(crushedOreItem, richOreItem)
			.recipeTier(1)
			.id(`greate:pressing/rich_raw_${materialName}_to_crushed_ore`)
	}

	// Macerator
	event.recipes.gtceu.macerator(`macerate_rich_raw_${materialName}_ore_to_crushed_ore`)
		.itemInputs(richOreItem)
		.itemOutputs(crushedOreItem)
		.chancedOutput(crushedOreItem.copyWithCount(1), 5000, 750)
		.chancedOutput(crushedOreItem.copyWithCount(1), 2500, 500)
		.chancedOutput(crushedOreItem.copyWithCount(1), 1250, 250)
		.category(GTRecipeCategories.ORE_CRUSHING)
		.duration(40)
		.EUt(2)

	// Quern
	event.recipes.tfc.quern(crushedOreItem, richOreItem)
		.id(`tfg:quern/${materialName}_crushed_ore_from_rich_raw_ore`)

	// Smelting
	smeltOre(event, material, oreProperty, multiplier, richOreItem, 'rich')

	// Melting
	const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY);
	if (tfcProperty !== null) {
		addTFCMelting(event, richOreItem, material, global.calcAmountOfMetalProcessed(48, tfcProperty.getPercentOfMaterial()), 'rich_raw_ore');
	}
}

/**
* @param {Internal.RecipesEventJS} event 
* @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
*/
function processCrushedOre(event, material) {
	const crushedOreItem = ChemicalHelper.get(TagPrefix.crushed, material, 1)
	const impureDustItem = ChemicalHelper.get(TagPrefix.dustImpure, material, 1)
	const pureOreItem = ChemicalHelper.get(TagPrefix.crushedPurified, material, 1)
	const materialName = material.getName();

	if (crushedOreItem !== null && pureOreItem !== null) {
		let byproductMaterial = material.getProperty(PropertyKey.ORE).getOreByProduct(0, material);
		const byproductItem = ChemicalHelper.get(TagPrefix.dust, byproductMaterial, 1)
		
		// GT machines
		event.recipes.gtceu.ore_washer(`wash_${materialName}_crushed_ore_to_purified_ore_distilled`)
			.itemInputs(crushedOreItem)
			.inputFluids("gtceu:distilled_water 10")
			.itemOutputs(pureOreItem, 'gtceu:stone_dust')
			.chancedOutput(byproductItem, 3333, 0)
			.duration(20)
			.EUt(GTValues.VHA[GTValues.LV])

		event.recipes.gtceu.ore_washer(`wash_${materialName}_crushed_ore_to_purified_ore`)
			.itemInputs(crushedOreItem)
			.inputFluids("minecraft:water 100")
			.itemOutputs(pureOreItem, 'gtceu:stone_dust')
			.chancedOutput(byproductItem, 3333, 0)
			.circuit(1)
			.duration(40)
			.EUt(GTValues.VHA[GTValues.LV])

		event.recipes.gtceu.macerator(`macerate_${materialName}_crushed_ore_to_impure_dust`)
			.itemInputs(crushedOreItem)
			.itemOutputs(impureDustItem)
			.chancedOutput(byproductItem, 1400, 0)
			.category(GTRecipeCategories.ORE_CRUSHING)
			.duration(20)
			.EUt(2)

		// Bulk washing

		event.recipes.greate.splashing([pureOreItem, Item.of(byproductItem).withChance(0.333), 'gtceu:stone_dust'], crushedOreItem)
			.id(`tfg:splashing/${materialName}_purified_ore`)

		// Dropping in water
		event.custom({
			type: "ae2:transform",
			circumstance: {
				type: "fluid",
				tag: "tfc:any_water"
			},
			ingredients: [
				crushedOreItem.toJson()
			],
			result: pureOreItem.toJson()
		}).id(`tfg:ae_transform/${materialName}_purified_ore`)

		event.recipes.tfc.barrel_instant()
			.inputItem(crushedOreItem)
			.inputFluid(Fluid.of("minecraft:water", 10))
			.outputItem(pureOreItem)
			.id(`tfg:instant_barrel/${materialName}_purified_ore`)

		// Melting
		const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY);
		if (tfcProperty !== null) {
			addTFCMelting(event, crushedOreItem, material, global.calcAmountOfMetalProcessed(80, tfcProperty.getPercentOfMaterial()), 'purified_ore');
		}
	}

	if (crushedOreItem !== null && impureDustItem !== null) {
		event.recipes.greate.pressing(impureDustItem, crushedOreItem)
			.recipeTier(1)
			.id(`greate:pressing/crushed_${materialName}_to_impure_dust`)
	}
}

/**
* @param {Internal.RecipesEventJS} event 
* @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
*/
function processPurifiedOre(event, material) {
	const pureOreItem = ChemicalHelper.get(TagPrefix.crushedPurified, material, 1)
	const pureDustItem = ChemicalHelper.get(TagPrefix.dustPure, material, 1)

	if (pureOreItem !== null && pureDustItem !== null) {
		const materialName = material.getName();		
		let byproductMaterial = material.getProperty(PropertyKey.ORE).getOreByProduct(1, material);
		const byproductItem = ChemicalHelper.get(TagPrefix.dust, byproductMaterial, 1)

		// With byproducts
		event.recipes.gtceu.macerator(`macerate_${materialName}_crushed_ore_to_dust`)
			.itemInputs(pureOreItem)
			.itemOutputs(pureDustItem)
			.chancedOutput(byproductItem, 1400, 0)
			.category(GTRecipeCategories.ORE_CRUSHING)
			.duration(20)
			.EUt(GTValues.VHA[GTValues.LV])

		// Without byproducts
		event.recipes.greate.pressing(pureDustItem, pureOreItem)
			.recipeTier(1)
			.id(`greate:pressing/pure_crushed_${material.getName()}_to_pure_dust`)

		const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY);
		if (tfcProperty !== null) {
			addTFCMelting(event, pureOreItem, material, global.calcAmountOfMetalProcessed(100, tfcProperty.getPercentOfMaterial()), 'pure_crushed');
		}
	}
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
*/
function processRefinedOre(event, material) {
	const refinedOreItem = ChemicalHelper.get(TagPrefix.crushedRefined, material, 1)
	const dustItem = ChemicalHelper.get(TagPrefix.dust, material, 1)

	if (refinedOreItem !== null && dustItem !== null) {
		const materialName = material.getName();
		let byproductMaterial = material.getProperty(PropertyKey.ORE).getOreByProduct(2, material);
		const byproductItem = ChemicalHelper.get(TagPrefix.dust, byproductMaterial, 1)

		// With byproducts
		event.recipes.gtceu.macerator(`macerate_${materialName}_refined_ore_to_dust`)
			.itemInputs(refinedOreItem)
			.itemOutputs(dustItem)
			.chancedOutput(byproductItem, 1400, 0)
			.category(GTRecipeCategories.ORE_CRUSHING)
			.duration(20)
			.EUt(GTValues.VHA[GTValues.LV])

		// Without byproducts
		event.recipes.greate.pressing(dustItem, refinedOreItem)
			.recipeTier(1)
			.id(`greate:pressing/refined_${material.getName()}_to_dust`)

		const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY);
		if (tfcProperty !== null) {
			addTFCMelting(event, refinedOreItem, material, global.calcAmountOfMetalProcessed(110, tfcProperty.getPercentOfMaterial()), 'refined_crushed');
		}
	}
}


/**
* @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
*/
function processImpureDust(event, material) {
	const impureDustItem = ChemicalHelper.get(TagPrefix.dustImpure, material, 1)
	const dustItem = ChemicalHelper.get(TagPrefix.dust, material, 1)

	if (impureDustItem !== null && dustItem !== null) {
		const materialName = material.getName();

		// Bulk washing
		event.recipes.greate.splashing(dustItem, impureDustItem)
			.id(`tfg:splashing/${materialName}_dust_from_impure`)

		event.recipes.tfc.barrel_instant()
			.inputItem(impureDustItem)
			.inputFluid(Fluid.of("minecraft:water", 10))
			.outputItem(dustItem)
			.id(`tfg:instant_barrel/${materialName}_dust_from_impure`)

		// Centrifuging
		let byproductMaterial = material.getProperty(PropertyKey.ORE).getOreByProduct(0, material);

		event.recipes.vintageimprovements.centrifugation(
			[dustItem, Item.of(ChemicalHelper.get(TagPrefix.dust, byproductMaterial, 1)).withChance(0.111)],
			impureDustItem)
			.processingTime(material.getMass() * 10 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
			.minimalRPM(32)
			.id(`tfg:vi/centrifuge/${materialName}_dust_from_impure`)

		// Dropping in water
		event.custom({
			type: "ae2:transform",
			circumstance: {
				type: "fluid",
				tag: "tfc:any_water"
			},
			ingredients: [
				impureDustItem.toJson()
			],
			result: dustItem.toJson()
		}).id(`tfg:ae_transform/${materialName}_dust_from_impure`)

		// Melting
		const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY);
		if (tfcProperty !== null) {
			addTFCMelting(event, impureDustItem, material, global.calcAmountOfMetalProcessed(100, tfcProperty.getPercentOfMaterial()), 'impure_dust');
		}
	}
}

/**
* @param {Internal.RecipesEventJS} event 
* @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
*/
function processPureDust(event, material) {
	const pureDustItem = ChemicalHelper.get(TagPrefix.dustPure, material, 1);
	const dustItem = ChemicalHelper.get(TagPrefix.dust, material, 1);

	if (pureDustItem !== null && dustItem !== null) {
		const materialName = material.getName();

		// Bulk washing
		event.recipes.greate.splashing(dustItem, pureDustItem)
			.id(`tfg:splashing/${materialName}_dust_from_pure`)

		event.recipes.tfc.barrel_instant()
			.inputItem(pureDustItem)
			.inputFluid(Fluid.of("minecraft:water", 10))
			.outputItem(dustItem)
			.id(`tfg:instant_barrel/${materialName}_dust_from_pure`)

		// Centrifuging
		let byproductMaterial = material.getProperty(PropertyKey.ORE).getOreByProduct(1, material);

		event.recipes.vintageimprovements.centrifugation(
			[dustItem, Item.of(ChemicalHelper.get(TagPrefix.dust, byproductMaterial, 1)).withChance(0.111)],
			pureDustItem)
			.processingTime(material.getMass() * 10 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
			.minimalRPM(32)
			.id(`tfg:vi/centrifuge/${materialName}_dust_from_pure`)

		// Dropping in water
		event.custom({
			type: "ae2:transform",
			circumstance: {
				type: "fluid",
				tag: "tfc:any_water"
			},
			ingredients: [
				pureDustItem.toJson()
			],
			result: dustItem.toJson()
		}).id(`tfg:ae_transform/${materialName}_dust_from_pure`)

		// Melting
		const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY);
		if (tfcProperty !== null) {
			addTFCMelting(event, pureDustItem, material, global.calcAmountOfMetalProcessed(120, tfcProperty.getPercentOfMaterial()), 'pure_dust');
		}
	}
}

/**
* @param {Internal.RecipesEventJS} event 
* @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
*/
function processGems(event, material) {
	const gemItem = ChemicalHelper.get(TagPrefix.gem, material, 1);
	if (gemItem.isEmpty() || gemItem.hasTag('c:hidden_from_recipe_viewers'))
		return;

	const materialName = material.getName();

	const budItem = ChemicalHelper.get(TFGTagPrefix.budIndicator, material, 1);
	if (!budItem.isEmpty()) {
		event.recipes.tfc.damage_inputs_shapeless_crafting(
			event.shapeless(budItem, [gemItem, '#tfc:chisels']))
				.id(`shapeless/${materialName}_bud_indicator`)
	}

	const chipped = ChemicalHelper.get(TagPrefix.gemChipped, material, 1)
	const smallDust = ChemicalHelper.get(TagPrefix.dustSmall, material, 1)
	if (!chipped.isEmpty()) {
		event.shaped(smallDust, [
			'A', 'B'
		], {
			A: chipped,
			B: '#forge:tools/mortars'
		}).id(`shapeless/mortar_chipped_${materialName}`)
	}

	const amount = getMaterialAmount(TagPrefix.block, material);
	const block = ChemicalHelper.get(TagPrefix.block, material, 1);
	if (!block.isEmpty()) {
		event.recipes.greate.pressing(ChemicalHelper.get(TagPrefix.gem, material, amount), block)
			.recipeTier(0)
			.id(`greate:pressing/unpacking_${materialName}_block`)
	}

	event.recipes.tfc.quern(ChemicalHelper.get(TagPrefix.dust, material, 1), gemItem)
		.id(`tfg:quern/${materialName}_gem_to_dust`)

	// Melting
	const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY);
	if (tfcProperty !== null) {
		addTFCMelting(event, ChemicalHelper.get(TagPrefix.gemChipped, material, 1), material, global.calcAmountOfMetalProcessed(144 / 4, tfcProperty.getPercentOfMaterial()), 'gem_chipped');
		addTFCMelting(event, ChemicalHelper.get(TagPrefix.gemFlawed, material, 1), material, global.calcAmountOfMetalProcessed(144 / 2, tfcProperty.getPercentOfMaterial()), 'gem_flawed');
		addTFCMelting(event, gemItem, material, global.calcAmountOfMetalProcessed(144, tfcProperty.getPercentOfMaterial()), 'gem');
		addTFCMelting(event, ChemicalHelper.get(TagPrefix.gemFlawless, material, 1), material, global.calcAmountOfMetalProcessed(144 * 2, tfcProperty.getPercentOfMaterial()), 'gem_flawless');
		addTFCMelting(event, ChemicalHelper.get(TagPrefix.gemExquisite, material, 1), material, global.calcAmountOfMetalProcessed(144 * 4, tfcProperty.getPercentOfMaterial()), 'gem_exquisite');
	}
}