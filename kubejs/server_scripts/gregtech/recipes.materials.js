// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerGTCEUMetalRecipes(event) {

	/**
	 * @param {GTToolType} toolType 
	 * @param {String} tagPrefixName
	 * @param {TagPrefix} headTagPrefix 
	 * @param {Internal.ItemStack} extruderMold 
	 * @param {number} circuitMeta 
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	 * @returns 
	 */
	function makeToolRecipe(toolType, tagPrefixName, headTagPrefix, extruderMold, circuitMeta, material) {
		const toolItem = ToolHelper.get(toolType, material)

		if (toolItem.isEmpty()) return

		const toolHeadItem = ChemicalHelper.get(headTagPrefix, material, 1)

		if (toolHeadItem.isEmpty()) return

		// Skip this one because it has a duping bug, and you can't remove the macerator/arc furnace iron pick recipes
		if (material === GTMaterials.Iron) return;

		if (toolType === GTToolType.WRENCH) {
			event.recipes.tfc.advanced_shaped_crafting(
				TFC.itemStackProvider.of(toolItem).copyForgingBonus().copyHeat(), [
				'ABC',
				'DB '
			], {
				A: toolHeadItem,
				B: `#forge:rods/${material.getName()}`,
				C: '#forge:tools/screwdrivers',
				D: `#forge:bolts/${material.getName()}`
			}, 0, 0)
				.id(`gtceu:shaped/${toolType.name}_${material.getName()}`)
		} else if (toolType === GTToolType.WIRE_CUTTER) {
			event.recipes.tfc.advanced_shaped_crafting(
				TFC.itemStackProvider.of(toolItem).copyForgingBonus().copyHeat(), [
				' AD',
				'CBC'
			], {
				A: toolHeadItem,
				B: `#forge:small_springs`,
				C: `#forge:rods/${material.getName()}`,
				D: '#forge:tools/screwdrivers'
			}, 0, 1)
				.id(`gtceu:shaped/${toolType.name}_${material.getName()}`)
		} else {
			event.recipes.tfc.advanced_shapeless_crafting(
				TFC.itemStackProvider.of(toolItem).copyForgingBonus().copyHeat(),
				[toolHeadItem, '#forge:rods/wooden'], toolHeadItem)
				.id(`gtceu:shaped/${toolType.name}_${material.getName()}`)
		}

		processToolHead(headTagPrefix, tagPrefixName, extruderMold, circuitMeta, material)
	}

	/** 
	 * @param {TagPrefix} headTagPrefix 
	 * @param {String} tagPrefixName
	 * @param {Internal.ItemStack} extruderMold 
	 * @param {number} circuitMeta 
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	 */
	function processToolHead(headTagPrefix, tagPrefixName, extruderMold, circuitMeta, material) {

		const toolHeadItem = ChemicalHelper.get(headTagPrefix, material, 1)
		if (toolHeadItem.isEmpty())
			return

		event.remove({ mod: 'gtceu', type: 'minecraft:crafting_shaped', output: toolHeadItem })

		if (material.hasProperty(PropertyKey.INGOT)) {
			const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);
			if (ingotItem.isEmpty() || ingotItem.hasTag('c:hidden_from_recipe_viewers'))
				return

			const materialAmount = Math.floor(headTagPrefix.materialAmount() / GTValues.M);

			event.recipes.gtceu.extruder(`tfg:extrude_${material.getName()}_ingot_to_${tagPrefixName}`)
				.itemInputs(ingotItem.copyWithCount(materialAmount))
				.notConsumable(extruderMold)
				.itemOutputs(toolHeadItem)
				.duration(material.getMass() * 6)
				.EUt(GTValues.VA[GTValues.LV])

			let input_array = [];
			for (let i = 0; i < materialAmount; i++) {
				input_array.push(ingotItem);
			}

			event.recipes.vintageimprovements.curving(toolHeadItem, input_array)
				.head(extruderMold)
				.id(`tfg:vi/curving/${material.getName()}_ingot_to_${tagPrefixName}`)
			
			if (GTMaterials.Stone !== material) {
				removeMaceratorRecipe(event, `macerate_${material.getName()}_${tagPrefixName}`)
				event.recipes.gtceu.macerator(`tfg:macerate_${material.getName()}_${tagPrefixName}`)
					.itemInputs(toolHeadItem)
					.itemOutputs(ChemicalHelper.get(TagPrefix.dust, material, materialAmount))
					.duration(material.getMass() * 6 * materialAmount)
					.category(GTRecipeCategories.MACERATOR_RECYCLING)
					.EUt(GTValues.VA[GTValues.ULV])
				
				event.recipes.gtceu.arc_furnace(`gtceu:arc_${material.getName()}_${tagPrefixName}`)
					.itemInputs(toolHeadItem)
					.itemOutputs(ChemicalHelper.get(TagPrefix.ingot, material, materialAmount))
					.duration(material.getMass() * 6 * materialAmount)
					.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
					.EUt(GTValues.VA[GTValues.LV])

				event.recipes.gtceu.extractor(`gtceu:extract_${material.getName()}_${tagPrefixName}`)
					.itemInputs(toolHeadItem)
					.outputFluids(Fluid.of(material.getFluid(), materialAmount * 144))
					.duration(material.getMass() * 6 * materialAmount)
					.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
					.EUt(material.hasProperty(PropertyKey.BLAST) ? GTValues.VA[GTValues.MV] : GTValues.VA[GTValues.ULV])
			}

		} else if (material.hasProperty(PropertyKey.GEM)) {

			const gemItem = ChemicalHelper.get(TagPrefix.gem, material, Math.floor(headTagPrefix.materialAmount() / GTValues.M))
			if (gemItem.isEmpty())
				return

			event.recipes.gtceu.laser_engraver(`tfg:engrave_${material.getName()}_gem_to_${tagPrefixName}`)
				.itemInputs(gemItem)
				.notConsumable(ChemicalHelper.get(TagPrefix.lens, GTMaterials.Glass, 1))
				.circuit(circuitMeta)
				.itemOutputs(toolHeadItem)
				.duration(material.getMass() * 6)
				.EUt(GTValues.VA[GTValues.LV])
				
			removeMaceratorRecipe(event, `macerate_${material.getName()}_${tagPrefixName}`)
			event.recipes.gtceu.macerator(`tfg:macerate_${material.getName()}_${tagPrefixName}`)
				.itemInputs(toolHeadItem)
				.itemOutputs(ChemicalHelper.get(TagPrefix.dust, material, 1))
				.duration(material.getMass() * 6)
				.category(GTRecipeCategories.MACERATOR_RECYCLING)
				.EUt(GTValues.VA[GTValues.ULV])
		}
		// else: ignore :3
	}

	/**
	 * @param {GTToolType} toolType 
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	 */
	function processToolMortar(toolType, material) {
		const toolItem = ToolHelper.get(toolType, material)
		if (toolItem.isEmpty())
			return

		const usableTagPrefix = material.hasProperty(PropertyKey.GEM) ? TagPrefix.gem : TagPrefix.ingot;
		const usableItem = ChemicalHelper.get(usableTagPrefix, material, 1)

		if (usableItem.isEmpty())
			return

		event.recipes.tfc.damage_inputs_shaped_crafting(
			event.shaped(toolItem, [
				'CA ',
				' B '
			], {
				A: usableItem,
				B: '#tfc:rock/raw',
				C: '#tfc:chisels'
			})
		).id(`gtceu:shaped/mortar_${material.getName()}`)
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	 */
	function processIngot(material) {
		const ingotStack = ChemicalHelper.get(TagPrefix.ingot, material, 1)

		if (material.hasFlag(MaterialFlags.GENERATE_PLATE)
			&& material !== GTMaterials.Wood
			&& material !== GTMaterials.TreatedWood
			&& material !== GTMaterials.Stone
			&& !material.hasProperty(PropertyKey.POLYMER))
		{
			const plateStack = ChemicalHelper.get(TagPrefix.plate, material, 1)
			const blockStack = ChemicalHelper.get(TagPrefix.block, material, 1)

			let matAmount = TagPrefix.block.getMaterialAmount(material) / GTValues.M;

			if (!plateStack.isEmpty() && !plateStack.hasTag('c:hidden_from_recipe_viewers')) {

				event.custom({
					type: "createaddition:rolling",
					input: ingotStack,
					result: plateStack,
					//processingTime: material.getMass() // TODO - controlled by a global config argh
				}).id(`tfg:rolling/${material.getName()}_plate`)

				if (!blockStack.isEmpty() && GTMaterials.Stone !== material) {
					let ingotArray = [];
					for (let i = 0; i < matAmount; i++)
						ingotArray.push(ingotStack)

					// 9х Слиток -> Блок
					event.recipes.greate.compacting(blockStack, ingotArray)
						.recipeTier(1)
						.circuitNumber(9)
						.heated()
						.id(`greate:compacting/${material.getName()}_block`)
				}
			} else {
				if (!blockStack.isEmpty() && !blockStack.hasTag('c:hidden_from_recipe_viewers')) {
					// Блок из гемов -> 9 Пластин
					event.recipes.greate.cutting(plateStack.withCount(matAmount), blockStack)
						.recipeTier(1)
						.id(`greate:cutting/${material.getName()}_plate`)
				}
			}
		}
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	 */
	function processPlate(material) {
		const item = ChemicalHelper.get(TagPrefix.plate, material, 1)
		if (item.isEmpty()) return

		event.remove({ id: `gtceu:shaped/plate_${material.getName()}` })
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	*/
	function processPlateDouble(material) {
		const doublePlateItem = ChemicalHelper.get(TagPrefix.plateDouble, material, 1)
		if (doublePlateItem.isEmpty() || doublePlateItem.hasTag('c:hidden_from_recipe_viewers')) return
		const plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1)

		event.remove({ id: `gtceu:shaped/plate_double_${material.getName()}` })

		if (material.getProperty(TFGPropertyKey.TFC_PROPERTY) === null) {
			event.recipes.greate.compacting(doublePlateItem, [plateItem, plateItem, 'tfc:powder/flux'])
				.heated()
				.recipeTier(2)
				.id(`greate:compacting/${material.getName()}_double_plate`)

			event.remove({ id: `gtceu:bender/bend_${material.getName()}_plate_to_double_plate` })
			event.recipes.gtceu.bender(`bend_${material.getName()}_plate_to_double_plate_electric_only`)
				.itemInputs(plateItem.withCount(2))
				.itemOutputs(doublePlateItem)
				.circuit(2)
				.duration(20 * 5.8)
				.EUt(24)
		}
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	*/
	function processBlock(material) {
		const item = ChemicalHelper.get(TagPrefix.block, material, 1)
		if (item.isEmpty())
			return

		event.remove({ id: `gtceu:compressor/compress_${material.getName()}_to_block` })
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	*/
	function processFoil(material) {
		const foilItem = ChemicalHelper.get(TagPrefix.foil, material, 4)
		const plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1)

		if (plateItem !== null && foilItem !== null && !plateItem.hasTag('c:hidden_from_recipe_viewers')) {
			event.custom({
				type: "createaddition:rolling",
				input: plateItem,
				result: foilItem,
				// TODO - processing time is controlled by a global config instead of setting it per-recipe...
				//processingTime: material.getMass()
			}).id(`tfg:rolling/${material.getName()}_foil`)
		}
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	*/
	function processRodLong(material) {
		const longRodItem = ChemicalHelper.get(TagPrefix.rodLong, material, 1)
		if (longRodItem.isEmpty() || longRodItem.hasTag('c:hidden_from_recipe_viewers'))
			return
		const shortRodItem = ChemicalHelper.get(TagPrefix.rod, material, 1)
		if (shortRodItem.isEmpty() || shortRodItem.hasTag('c:hidden_from_recipe_viewers'))
			return;

		event.remove({ id: `gtceu:shaped/stick_long_stick_${material.getName()}` })

		// Rod welding recipes for all of the other non-tfc materials, since those were handled in tfc/recipes.materials.js
		if (!material.hasProperty(TFGPropertyKey.TFC_PROPERTY)) {
			event.recipes.greate.compacting(longRodItem, [shortRodItem, shortRodItem, 'tfc:powder/flux'])
				.heated()
				.recipeTier(1)
				.id(`greate:compacting/${material.getName()}_long_rod`)
		}
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	*/
	function processIngotDouble(material) {
		if (!material.hasFlag(TFGMaterialFlags.GENERATE_DOUBLE_INGOTS))
			return;

		const doubleIngotStack = ChemicalHelper.get(TFGTagPrefix.ingotDouble, material, 1);

		if (material.hasProperty(PropertyKey.FLUID)) {
			event.recipes.gtceu.extractor(`tfg:extract_${material.getName()}_double_ingot`)
				.itemInputs(doubleIngotStack)
				.outputFluids(Fluid.of(material.getFluid(), 288))
				.duration(material.getMass())
				.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
				.EUt(material.hasProperty(PropertyKey.BLAST) ? GTValues.VA[GTValues.MV] : GTValues.VA[GTValues.ULV])
		}

		if (material.hasProperty(PropertyKey.DUST)) {
			event.recipes.gtceu.macerator(`tfg:macerate_${material.getName()}_double_ingot`)
				.itemInputs(doubleIngotStack)
				.itemOutputs(ChemicalHelper.get(TagPrefix.dust, material, 2))
				.duration(material.getMass())
				.category(GTRecipeCategories.MACERATOR_RECYCLING)
				.EUt(GTValues.VA[GTValues.ULV])
		}

		const twoIngotStack = ChemicalHelper.get(TagPrefix.ingot, material, 2);

		event.recipes.gtceu.arc_furnace(`tfg:arc_furnace_${material.getName()}_double_ingot`)
			.itemInputs(doubleIngotStack)
			.itemOutputs(twoIngotStack)
			.duration(material.getMass() * 6)
			.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
			.EUt(GTValues.VA[GTValues.LV])

		event.recipes.gtceu.bender(`tfg:bend_${material.getName()}_double_ingot_electric_only`)
			.itemInputs(twoIngotStack)
			.itemOutputs(doubleIngotStack)
			.duration(material.getMass() * 6)
			.EUt(GTValues.VA[GTValues.LV])
			.circuit(3)
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	*/
	function processSmallOre(material) {
		if (!material.hasFlag(TFGMaterialFlags.HAS_SMALL_TFC_ORE)) return;

		const smallOre = ChemicalHelper.get(TFGTagPrefix.oreSmall, material, 1);
		const smallDust = ChemicalHelper.get(TagPrefix.dustSmall, material, 1);

		event.recipes.gtceu.macerator(`tfg:macerate_${material.getName()}_small_ore`)
			.itemInputs(smallOre)
			.itemOutputs(smallDust)
			.duration(material.getMass())
			.category(GTRecipeCategories.ORE_CRUSHING)
			.EUt(GTValues.VA[GTValues.ULV])

		let tfcName = material.getName();
		if (material === GTMaterials.Bismuth)
			tfcName = "bismuthinite";
		else if (material === GTMaterials.YellowLimonite)
			tfcName = "limonite";

		event.recipes.tfc.quern(smallDust, smallOre)
			.id(`tfc:quern/small_${tfcName}`)
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	*/
	const processSmallNativeOre = (material) => {
		if (!material.hasFlag(TFGMaterialFlags.HAS_SMALL_NATIVE_TFC_ORE)) return;

		const smallNativeOre = ChemicalHelper.get(TFGTagPrefix.oreSmallNative, material, 1);
		const smallDust = ChemicalHelper.get(TagPrefix.dustSmall, material, 1);

		event.recipes.gtceu.macerator(`tfg:macerate_${material.getName()}_small_native_ore`)
			.itemInputs(smallNativeOre)
			.itemOutputs(smallDust)
			.duration(material.getMass())
			.category(GTRecipeCategories.ORE_CRUSHING)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.tfc.quern(smallDust, smallNativeOre)
			.id(`tfc:quern/small_native_${material.getName()}`)
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	 * @param {*} oreProperty 
	 * @param {number} multiplier 
	 * @param {Internal.ItemStack} oreItem 
	 * @param {string} type
	 */
	function smeltOre(material, oreProperty, multiplier, oreItem, type) {
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
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	*/
	const processPoorRawOre = (material) => {
		const poorOreItem = ChemicalHelper.get(TFGTagPrefix.poorRawOre, material, 1)
		const crushedOreItem = ChemicalHelper.get(TagPrefix.crushed, material, 1)

		if (poorOreItem === null || crushedOreItem === null) return;

		const oreProperty = material.getProperty(PropertyKey.ORE)
		const multiplier = oreProperty.getOreMultiplier();
		crushedOreItem.setCount(crushedOreItem.getCount() * multiplier)

		// Forge hammer
		let hammerRecipe = event.recipes.gtceu.forge_hammer(`hammer_poor_raw_${material.getName()}_to_crushed_ore`)
			.itemInputs(poorOreItem)
			.category(GTRecipeCategories.ORE_FORGING)
			.duration(100)
			.EUt(16)

		if (material.hasProperty(PropertyKey.GEM)) {
			const gemItem = ChemicalHelper.get(TagPrefix.gem, material, crushedOreItem.getCount());
			hammerRecipe.chancedOutput(gemItem, 7500, 950)

			event.recipes.greate.pressing(Item.of(gemItem).withChance(0.75), poorOreItem)
				.recipeTier(1)
				.id(`greate:pressing/poor_raw_${material.getName()}_to_gem`)

			let polishingCount = Math.max(crushedOreItem.getCount() / 2, 1);
			event.recipes.create.sandpaper_polishing(gemItem.copyWithCount(polishingCount), poorOreItem)
				.id(`tfg:polishing/poor_raw_${material.getName()}_to_gem`)
		} else {
			hammerRecipe.chancedOutput(crushedOreItem, 7500, 950)

			event.recipes.greate.pressing(Item.of(crushedOreItem).withChance(0.75), poorOreItem)
				.recipeTier(1)
				.id(`greate:pressing/poor_raw_${material.getName()}_to_crushed_ore`)
		}

		// Macerator
		let maceratorRecipe = event.recipes.gtceu.macerator(`macerate_poor_raw_${material.getName()}_ore_to_crushed_ore`)
			.itemInputs(poorOreItem)
			.category(GTRecipeCategories.ORE_CRUSHING)
			.duration(400)
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
			).id(`tfg:quern/${material.getName()}_crushed_ore_from_poor_raw_ore`)
		} else {
			event.recipes.tfc.quern(
				ChemicalHelper.get(TagPrefix.dustSmall, material, 2),
				poorOreItem
			).id(`tfg:quern/${material.getName()}_crushed_ore_from_poor_raw_ore`)
		}

		// Smelting
		smeltOre(material, oreProperty, multiplier / 2, poorOreItem, 'poor')
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	*/
	const processNormalRawOre = (material) => {
		const oreProperty = material.getProperty(PropertyKey.ORE)
		const multiplier = oreProperty.getOreMultiplier();
		const normalOreItem = ChemicalHelper.get(TagPrefix.rawOre, material, 1)
		const crushedOreItem = ChemicalHelper.get(TagPrefix.crushed, material, multiplier)

		if (normalOreItem === null || crushedOreItem === null)
			return;

		// Forge hammer
		let hammerRecipe = event.recipes.gtceu.forge_hammer(`hammer_raw_${material.getName()}_to_crushed_ore`)
			.itemInputs(normalOreItem)
			.category(GTRecipeCategories.ORE_FORGING)
			.duration(100)
			.EUt(16)

		if (material.hasProperty(PropertyKey.GEM)) {
			const gemItem = ChemicalHelper.get(TagPrefix.gem, material, crushedOreItem.getCount())
			hammerRecipe.itemOutputs(gemItem)

			event.recipes.greate.pressing(gemItem, normalOreItem)
				.recipeTier(1)
				.id(`greate:pressing/raw_${material.getName()}_to_gem`)

			event.recipes.create.sandpaper_polishing(gemItem, normalOreItem)
				.id(`tfg:polishing/raw_${material.getName()}_to_gem`)
		} else {
			hammerRecipe.itemOutputs(crushedOreItem)

			event.recipes.greate.pressing(crushedOreItem, normalOreItem)
				.recipeTier(1)
				.id(`greate:pressing/raw_${material.getName()}_to_crushed_ore`)
		}

		event.remove({ id: `greate:milling/integration/gtceu/macerator/macerate_raw_${material.getName()}_ore_to_crushed_ore` })

		// Macerator
		event.recipes.gtceu.macerator(`macerate_raw_${material.getName()}_ore_to_crushed_ore`)
			.itemInputs(normalOreItem)
			.itemOutputs(crushedOreItem)
			.chancedOutput(crushedOreItem.copyWithCount(1), 5000, 500)
			.chancedOutput(crushedOreItem.copyWithCount(1), 2500, 250)
			.chancedOutput(crushedOreItem.copyWithCount(1), 1250, 250)
			.category(GTRecipeCategories.ORE_CRUSHING)
			.duration(400)
			.EUt(2)

		// Quern
		event.recipes.tfc.quern(crushedOreItem, normalOreItem)
			.id(`tfg:quern/${material.getName()}_crushed_ore_from_normal_raw_ore`)

		// Remove ore block recipes
		event.remove({ id: `gtceu:compressor/compress_${material.getName()}_to_raw_ore_block` })
		event.remove({ id: `gtceu:forge_hammer/decompress_${material.getName()}_to_raw_ore` })

		// Smelting
		smeltOre(material, oreProperty, multiplier, normalOreItem, 'raw')
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	*/
	const processRichRawOre = (material) => {
		const oreProperty = material.getProperty(PropertyKey.ORE)
		const multiplier = oreProperty.getOreMultiplier() * 2;
		const richOreItem = ChemicalHelper.get(TFGTagPrefix.richRawOre, material, 1)
		const crushedOreItem = ChemicalHelper.get(TagPrefix.crushed, material, multiplier)

		if (richOreItem === null || crushedOreItem === null)
			return;

		// Forge hammer
		let hammerRecipe = event.recipes.gtceu.forge_hammer(`hammer_rich_raw_${material.getName()}_to_crushed_ore`)
			.itemInputs(richOreItem)
			.category(GTRecipeCategories.ORE_FORGING)
			.duration(100)
			.EUt(16)

		if (material.hasProperty(PropertyKey.GEM)) {
			const gemItem = ChemicalHelper.get(TagPrefix.gem, material, crushedOreItem.getCount())
			hammerRecipe.itemOutputs(gemItem)

			event.recipes.greate.pressing(gemItem, richOreItem)
				.recipeTier(1)
				.id(`greate:pressing/rich_raw_${material.getName()}_to_gem`)
				
			event.recipes.create.sandpaper_polishing(gemItem, richOreItem)
				.id(`tfg:polishing/rich_raw_${material.getName()}_to_gem`)
		} else {
			hammerRecipe.itemOutputs(crushedOreItem)

			event.recipes.greate.pressing(crushedOreItem, richOreItem)
				.recipeTier(1)
				.id(`greate:pressing/rich_raw_${material.getName()}_to_crushed_ore`)
		}

		// Macerator
		event.recipes.gtceu.macerator(`macerate_rich_raw_${material.getName()}_ore_to_crushed_ore`)
			.itemInputs(richOreItem)
			.itemOutputs(crushedOreItem)
			.chancedOutput(crushedOreItem.copyWithCount(1), 5000, 750)
			.chancedOutput(crushedOreItem.copyWithCount(1), 2500, 500)
			.chancedOutput(crushedOreItem.copyWithCount(1), 1250, 250)
			.category(GTRecipeCategories.ORE_CRUSHING)
			.duration(400)
			.EUt(2)

		// Quern
		event.recipes.tfc.quern(crushedOreItem, richOreItem)
			.id(`tfg:quern/${material.getName()}_crushed_ore_from_rich_raw_ore`)

		// Smelting
		smeltOre(material, oreProperty, multiplier, richOreItem, 'rich')
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	*/
	const processCrushedOre = (material) => {
		const crushedOreItem = ChemicalHelper.get(TagPrefix.crushed, material, 1)
		const impureDustItem = ChemicalHelper.get(TagPrefix.dustImpure, material, 1)
		const pureOreItem = ChemicalHelper.get(TagPrefix.crushedPurified, material, 1)

		if (crushedOreItem !== null && pureOreItem !== null) {

			// Bulk washing
			let byproductMaterial = material.getProperty(PropertyKey.ORE).getOreByProduct(0, material);
			const byproductItem = ChemicalHelper.get(TagPrefix.dust, byproductMaterial, 1)

			event.recipes.greate.splashing([pureOreItem, Item.of(byproductItem).withChance(0.333), 'gtceu:stone_dust'], crushedOreItem)
				.id(`tfg:splashing/${material.getName()}_purified_ore`)

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
			}).id(`tfg:ae_transform/${material.getName()}_purified_ore`)

			event.recipes.tfc.barrel_instant()
				.inputItem(crushedOreItem)
				.inputFluid(Fluid.of("minecraft:water", 100))
				.outputItem(pureOreItem)
				.id(`tfg:instant_barrel/${material.getName()}_purified_ore`)
		}

		if (crushedOreItem !== null && impureDustItem !== null) {
			event.recipes.greate.pressing(impureDustItem, crushedOreItem)
				.recipeTier(1)
				.id(`greate:pressing/crushed_${material.getName()}_to_impure_dust`)
		}
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	*/
	const processPurifiedOre = (material) => {
		const pureOreItem = ChemicalHelper.get(TagPrefix.crushedPurified, material, 1)
		const pureDustItem = ChemicalHelper.get(TagPrefix.dustPure, material, 1)

		if (pureOreItem !== null && pureDustItem !== null) {
			event.recipes.greate.pressing(pureDustItem, pureOreItem)
				.recipeTier(1)
				.id(`greate:pressing/pure_crushed_${material.getName()}_to_pure_dust`)
		}
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	*/
	const processRefinedOre = (material) => {
		const refinedOreItem = ChemicalHelper.get(TagPrefix.crushedRefined, material, 1)
		const dustItem = ChemicalHelper.get(TagPrefix.dust, material, 1)

		if (refinedOreItem !== null && dustItem !== null) {
			event.recipes.greate.pressing(dustItem, refinedOreItem)
				.recipeTier(1)
				.id(`greate:pressing/refined_${material.getName()}_to_dust`)
		}
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	*/
	const processImpureDust = (material) => {
		const impureDustItem = ChemicalHelper.get(TagPrefix.dustImpure, material, 1)
		const dustItem = ChemicalHelper.get(TagPrefix.dust, material, 1)

		if (impureDustItem !== null && dustItem !== null) {

			// Bulk washing
			event.recipes.greate.splashing(dustItem, impureDustItem)
				.id(`tfg:splashing/${material.getName()}_dust_from_impure`)

			event.recipes.tfc.barrel_instant()
				.inputItem(impureDustItem)
				.inputFluid(Fluid.of("minecraft:water", 100))
				.outputItem(dustItem)
				.id(`tfg:instant_barrel/${material.getName()}_dust_from_impure`)

			// Centrifuging
			let byproductMaterial = material.getProperty(PropertyKey.ORE).getOreByProduct(0, material);

			event.recipes.vintageimprovements.centrifugation(
				[dustItem, Item.of(ChemicalHelper.get(TagPrefix.dust, byproductMaterial, 1)).withChance(0.111)],
				impureDustItem)
				.processingTime(material.getMass() * 10 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
				.id(`tfg:vi/centrifuge/${material.getName()}_dust_from_impure`)

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
			}).id(`tfg:ae_transform/${material.getName()}_dust_from_impure`)
		}
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	*/
	const processPureDust = (material) => {
		const pureDust = ChemicalHelper.get(TagPrefix.dustPure, material, 1)
		const dustItem = ChemicalHelper.get(TagPrefix.dust, material, 1)

		if (pureDust !== null && dustItem !== null) {

			// Bulk washing
			event.recipes.greate.splashing(dustItem, pureDust)
				.id(`tfg:splashing/${material.getName()}_dust_from_pure`)

			event.recipes.tfc.barrel_instant()
				.inputItem(pureDust)
				.inputFluid(Fluid.of("minecraft:water", 100))
				.outputItem(dustItem)
				.id(`tfg:instant_barrel/${material.getName()}_dust_from_pure`)

			// Centrifuging
			let byproductMaterial = material.getProperty(PropertyKey.ORE).getOreByProduct(1, material);

			event.recipes.vintageimprovements.centrifugation(
				[dustItem, Item.of(ChemicalHelper.get(TagPrefix.dust, byproductMaterial, 1)).withChance(0.111)],
				pureDust)
				.processingTime(material.getMass() * 10 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
				.id(`tfg:vi/centrifuge/${material.getName()}_dust_from_pure`)

			// Dropping in water
			event.custom({
				type: "ae2:transform",
				circumstance: {
					type: "fluid",
					tag: "tfc:any_water"
				},
				ingredients: [
					pureDust.toJson()
				],
				result: dustItem.toJson()
			}).id(`tfg:ae_transform/${material.getName()}_dust_from_pure`)
		}
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	*/
	const processGems = (material) => {
		let gem = ChemicalHelper.get(TagPrefix.gem, material, 1);
		if (gem.hasTag('c:hidden_from_recipe_viewers'))
			return

		let chipped = ChemicalHelper.get(TagPrefix.gemChipped, material, 1)
		let smallDust = ChemicalHelper.get(TagPrefix.dustSmall, material, 1)

		event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(
			ChemicalHelper.get(TFGTagPrefix.budIndicator, material, 1), [gem, '#tfc:chisels']))
			.id(`shapeless/${material.getName()}_bud_indicator`)

		event.shaped(smallDust,
			['A', 'B'],
			{ A: chipped, B: '#forge:tools/mortars' })
			.id(`shapeless/mortar_chipped_${material.getName()}`)

		let amount = 9;
		if (material === GTMaterials.NetherQuartz || material === GTMaterials.CertusQuartz || material === GTMaterials.Amethyst)
			amount = 4;

		event.recipes.greate.pressing(ChemicalHelper.get(TagPrefix.gem, material, amount), ChemicalHelper.get(TagPrefix.block, material, 1))
			.recipeTier(0)
			.id(`greate:pressing/unpacking_${material.getName()}_block`)

		event.recipes.tfc.quern(ChemicalHelper.get(TagPrefix.dust, material, 1), ChemicalHelper.get(TagPrefix.gem, material, 1))
			.id(`tfg:quern/${material.getName()}_gem_to_dust`)
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	*/
	const processAnvil = (material) => {
		const anvilStack = ChemicalHelper.get(TFGTagPrefix.anvil, material, 1)
		if (anvilStack === null) return;

		event.recipes.gtceu.macerator(`tfg:macerate_${material.getName()}_anvil`)
			.itemInputs(anvilStack)
			.itemOutputs(ChemicalHelper.get(TagPrefix.dust, material, 14))
			.duration(material.getMass() * 32)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)
			.EUt(GTValues.VA[GTValues.LV])

		event.recipes.gtceu.arc_furnace(`tfg:arc_${material.getName()}_anvil`)
			.itemInputs(anvilStack)
			.itemOutputs(ChemicalHelper.get(TagPrefix.ingot, material, 14))
			.duration(material.getMass() * 32)
			.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.extractor(`tfg:extract_${material.getName()}_anvil`)
			.itemInputs(anvilStack)
			.outputFluids(Fluid.of(material.getFluid(), 14 * 144))
			.duration(material.getMass() * 32)
			.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
			.EUt(material.hasProperty(PropertyKey.BLAST) ? GTValues.VA[GTValues.MV] : GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.alloy_smelter(`tfg:cast_${material.getName()}_anvil`)
			.itemInputs(ChemicalHelper.get(TagPrefix.ingot, material, 14))
			.notConsumable('gtceu:anvil_casting_mold')
			.itemOutputs(anvilStack)
			.duration(material.getMass() * 32)
			.EUt(GTValues.VA[GTValues.ULV])
			.category(GTRecipeCategories.INGOT_MOLDING)

		event.recipes.gtceu.fluid_solidifier(`tfg:solidify_${material.getName()}_anvil`)
			.inputFluids(Fluid.of(material.getFluid(), 14 * 144))
			.notConsumable('gtceu:anvil_casting_mold')
			.itemOutputs(anvilStack)
			.duration(material.getMass() * 32)
			.EUt(GTValues.VA[GTValues.ULV])
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	*/
	const processLamp = (material) => {
		const finishedLampStack = ChemicalHelper.get(TFGTagPrefix.lamp, material, 1)
		if (finishedLampStack === null) return;

		const materialDustStack = ChemicalHelper.get(TagPrefix.dust, material, 1)
		const materialIngotStack = ChemicalHelper.get(TagPrefix.ingot, material, 1)
		const glassDustStack = ChemicalHelper.get(TagPrefix.dust, GTMaterials.Glass, 1)
		const unfinishedLampStack = ChemicalHelper.get(TFGTagPrefix.lampUnfinished, material, 1)

		event.recipes.gtceu.macerator(`tfg:macerate_${material.getName()}_lamp`)
			.itemInputs(finishedLampStack)
			.itemOutputs([materialDustStack, glassDustStack])
			.duration(material.getMass() * 8)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)
			.EUt(GTValues.VA[GTValues.LV])

		event.recipes.gtceu.arc_furnace(`tfg:arc_${material.getName()}_lamp`)
			.itemInputs(finishedLampStack)
			.itemOutputs([materialIngotStack, glassDustStack])
			.duration(material.getMass() * 8)
			.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.assembler(`tfg:${material.getName()}_lamp`)
			.itemInputs("tfc:lamp_glass", unfinishedLampStack)
			.itemOutputs(finishedLampStack)
			.duration(material.getMass() * 7)
			.circuit(12)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.assembler(`tfg:${material.getName()}_lamp_from_liquid`)
			.itemInputs(unfinishedLampStack)
			.inputFluids(Fluid.of(GTMaterials.Glass.getFluid(), 576))
			.itemOutputs(finishedLampStack)
			.duration(material.getMass() * 7)
			.circuit(13)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.macerator(`tfg:macerate_${material.getName()}_unfinished_lamp`)
			.itemInputs(unfinishedLampStack)
			.itemOutputs(materialDustStack)
			.duration(material.getMass() * 8)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)
			.EUt(GTValues.VA[GTValues.LV])

		event.recipes.gtceu.arc_furnace(`tfg:arc_${material.getName()}_unfinished_lamp`)
			.itemInputs(unfinishedLampStack)
			.itemOutputs(materialIngotStack)
			.duration(material.getMass() * 8)
			.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.extractor(`tfg:extract_${material.getName()}_unfinished_lamp`)
			.itemInputs(unfinishedLampStack)
			.outputFluids(Fluid.of(material.getFluid(), 144))
			.duration(material.getMass() * 8)
			.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
			.EUt(material.hasProperty(PropertyKey.BLAST) ? GTValues.VA[GTValues.MV] : GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.alloy_smelter(`tfg:cast_${material.getName()}_unfinished_lamp`)
			.itemInputs(materialIngotStack)
			.notConsumable('tfg:lamp_casting_mold')
			.itemOutputs(unfinishedLampStack)
			.duration(material.getMass() * 8)
			.category(GTRecipeCategories.INGOT_MOLDING)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.fluid_solidifier(`tfg:solidify_${material.getName()}_unfinished_lamp`)
			.inputFluids(Fluid.of(material.getFluid(), 144))
			.notConsumable('tfg:lamp_casting_mold')
			.itemOutputs(unfinishedLampStack)
			.duration(material.getMass() * 8)
			.EUt(GTValues.VA[GTValues.ULV])
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	*/
	const processTrapdoor = (material) => {
		const trapdoorStack = ChemicalHelper.get(TFGTagPrefix.trapdoor, material, 1)
		if (trapdoorStack === null) return;

		const materialDustStack = ChemicalHelper.get(TagPrefix.dust, material, 1)
		const materialIngotStack = ChemicalHelper.get(TagPrefix.ingot, material, 1)

		event.recipes.gtceu.macerator(`tfg:macerate_${material.getName()}_trapdoor`)
			.itemInputs(trapdoorStack)
			.itemOutputs(materialDustStack)
			.duration(material.getMass() * 7)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)
			.EUt(GTValues.VA[GTValues.LV])

		event.recipes.gtceu.arc_furnace(`tfg:arc_${material.getName()}_trapdoor`)
			.itemInputs(trapdoorStack)
			.itemOutputs(materialIngotStack)
			.duration(material.getMass() * 7)
			.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.extractor(`tfg:extract_${material.getName()}_trapdoor`)
			.itemInputs(trapdoorStack)
			.outputFluids(Fluid.of(material.getFluid(), 144))
			.duration(material.getMass() * 7)
			.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
			.EUt(material.hasProperty(PropertyKey.BLAST) ? GTValues.VA[GTValues.MV] : GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.alloy_smelter(`tfg:cast_${material.getName()}_trapdoor`)
			.itemInputs(materialIngotStack)
			.notConsumable('tfg:trapdoor_casting_mold')
			.itemOutputs(trapdoorStack)
			.duration(material.getMass() * 8)
			.category(GTRecipeCategories.INGOT_MOLDING)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.fluid_solidifier(`tfg:solidify_${material.getName()}_trapdoor`)
			.inputFluids(Fluid.of(material.getFluid(), 144))
			.notConsumable('tfg:trapdoor_casting_mold')
			.itemOutputs(trapdoorStack)
			.duration(material.getMass() * 7)
			.EUt(GTValues.VA[GTValues.ULV])
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	*/
	const processChain = (material) => {
		const chainStack = ChemicalHelper.get(TFGTagPrefix.chain, material, 1)
		if (chainStack === null) return;

		const chain2Stack = ChemicalHelper.get(TFGTagPrefix.chain, material, 2)

		const materialDustTinyStack = ChemicalHelper.get(TagPrefix.dustTiny, material, 1)
		const materialNuggetStack = ChemicalHelper.get(TagPrefix.nugget, material, 1)
		const materialIngotStack = ChemicalHelper.get(TagPrefix.ingot, material, 1)

		event.recipes.gtceu.macerator(`tfg:macerate_${material.getName()}_chain`)
			.itemInputs(chain2Stack)
			.itemOutputs(materialDustTinyStack)
			.duration(material.getMass() * 3)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)
			.EUt(GTValues.VA[GTValues.LV])

		event.recipes.gtceu.arc_furnace(`tfg:arc_${material.getName()}_chain`)
			.itemInputs(chain2Stack)
			.itemOutputs(materialNuggetStack)
			.duration(material.getMass() * 3)
			.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.extractor(`tfg:extract_${material.getName()}_chain`)
			.itemInputs(chainStack)
			.outputFluids(Fluid.of(material.getFluid(), 9))
			.duration(material.getMass() * 3)
			.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
			.EUt(material.hasProperty(PropertyKey.BLAST) ? GTValues.VA[GTValues.MV] : GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.alloy_smelter(`tfg:cast_${material.getName()}_chain`)
			.itemInputs(materialIngotStack)
			.notConsumable('tfg:chain_casting_mold')
			.itemOutputs(ChemicalHelper.get(TFGTagPrefix.chain, material, 16))
			.duration(material.getMass() * 3)
			.category(GTRecipeCategories.INGOT_MOLDING)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.fluid_solidifier(`tfg:solidify_${material.getName()}_chain`)
			.inputFluids(Fluid.of(material.getFluid(), 9))
			.notConsumable('tfg:chain_casting_mold')
			.itemOutputs(chainStack)
			.duration(material.getMass() * 3)
			.EUt(GTValues.VA[GTValues.ULV])
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	*/
	const processBell = (material) => {
		const bellStack = ChemicalHelper.get(TFGTagPrefix.bell, material, 1)
		if (bellStack === null) return;

		const materialDustStack = ChemicalHelper.get(TagPrefix.dust, material, 1)
		const materialIngotStack = ChemicalHelper.get(TagPrefix.ingot, material, 1)

		event.recipes.gtceu.macerator(`tfg:macerate_${material.getName()}_bell`)
			.itemInputs(bellStack)
			.itemOutputs(materialDustStack)
			.duration(material.getMass() * 5)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)
			.EUt(GTValues.VA[GTValues.LV])

		event.recipes.gtceu.arc_furnace(`tfg:arc_${material.getName()}_bell`)
			.itemInputs(bellStack)
			.itemOutputs(materialIngotStack)
			.duration(material.getMass() * 5)
			.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.extractor(`tfg:extract_${material.getName()}_bell`)
			.itemInputs(bellStack)
			.outputFluids(Fluid.of(material.getFluid(), 144))
			.duration(material.getMass() * 5)
			.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.alloy_smelter(`tfg:cast_${material.getName()}_bell`)
			.itemInputs(materialIngotStack)
			.notConsumable('tfg:bell_casting_mold')
			.itemOutputs(bellStack)
			.duration(material.getMass() * 5)
			.category(GTRecipeCategories.INGOT_MOLDING)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.fluid_solidifier(`tfg:solidify_${material.getName()}_bell`)
			.inputFluids(Fluid.of(material.getFluid(), 144))
			.notConsumable('tfg:bell_casting_mold')
			.itemOutputs(bellStack)
			.duration(material.getMass() * 5)
			.EUt(GTValues.VA[GTValues.ULV])
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	*/
	const processBuzzsawBlade = (material) => {
		const buzzsawBladeItem = ChemicalHelper.get(TagPrefix.toolHeadBuzzSaw, material, 1)
		const doublePlateItem = ChemicalHelper.get(TagPrefix.plateDouble, material, 1)
		if (buzzsawBladeItem === null || doublePlateItem === null) return;

		let isLowTier = material.hasProperty(TFGPropertyKey.TFC_PROPERTY)

		event.recipes.gtceu.lathe(`buzzsaw_gear_${material.getName()}`)
			.itemInputs(doublePlateItem)
			.itemOutputs(buzzsawBladeItem)
			.duration(material.getMass() * 6)
			.EUt(GTValues.VA[isLowTier ? GTValues.LV : GTValues.MV])

		if (isLowTier) {
			event.recipes.vintageimprovements.polishing(buzzsawBladeItem, doublePlateItem)
				.speedLimits(0)
				.processingTime(material.getMass() * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER)
				.id(`tfg:vi/lathe/${material.getName()}_buzzsaw`)
		}

		removeMaceratorRecipe(event, `macerate_${material.getName()}_buzz_saw_blade`)
		event.recipes.gtceu.macerator(`tfg:macerate_${material.getName()}_buzz_saw_blade`)
			.itemInputs(buzzsawBladeItem)
			.itemOutputs(ChemicalHelper.get(TagPrefix.dust, material, 2))
			.duration(material.getMass() * 6 * 2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)
			.EUt(GTValues.VA[GTValues.ULV])

		event.remove({ id: `gtceu:arc_furnace/arc_${material.getName()}_buzz_saw_blade` })
		event.recipes.gtceu.arc_furnace(`tfg:arc_furnace_${material.getName()}_buzz_saw_blade`)
			.itemInputs(buzzsawBladeItem)
			.itemOutputs(ChemicalHelper.get(TagPrefix.ingot, material, 2))
			.duration(material.getMass() * 6 * 2)
			.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
			.EUt(GTValues.VA[GTValues.LV])
			
		event.remove({ id: `gtceu:extractor/extract_${material.getName()}_buzz_saw_blade` })
		event.recipes.gtceu.extractor(`tfg:extract_${material.getName()}_buzz_saw_blade`)
			.itemInputs(buzzsawBladeItem)
			.outputFluids(Fluid.of(material.getFluid(), 2 * 144))
			.duration(material.getMass() * 6 * 2)
			.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
			.EUt(material.hasProperty(PropertyKey.BLAST) ? GTValues.VA[GTValues.MV] : GTValues.VA[GTValues.ULV])

		event.remove({ id: `gtceu:shaped/buzzsaw_blade_${material.getName()}` })
	}

	/**
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
	*/
	const removePowerToolRecycling = (material) => {
		removeMaceratorRecipe(event, `macerate_lv_${material.getName()}_wrench`)
		event.remove({ id: `gtceu:arc_furnace/arc_lv_${material.getName()}_wrench` })
		removeMaceratorRecipe(event, `macerate_hv_${material.getName()}_wrench`)
		event.remove({ id: `gtceu:arc_furnace/arc_hv_${material.getName()}_wrench` })
		removeMaceratorRecipe(event, `macerate_iv_${material.getName()}_wrench`)
		event.remove({ id: `gtceu:arc_furnace/arc_iv_${material.getName()}_wrench` })
		removeMaceratorRecipe(event, `macerate_lv_${material.getName()}_chainsaw`)
		event.remove({ id: `gtceu:arc_furnace/arc_lv_${material.getName()}_chainsaw` })
		removeMaceratorRecipe(event, `macerate_${material.getName()}_buzzsaw`)
		event.remove({ id: `gtceu:arc_furnace/arc_${material.getName()}_buzzsaw` })
		removeMaceratorRecipe(event, `macerate_lv_${material.getName()}_drill`)
		event.remove({ id: `gtceu:arc_furnace/arc_lv_${material.getName()}_drill` })
		removeMaceratorRecipe(event, `macerate_mv_${material.getName()}_drill`)
		event.remove({ id: `gtceu:arc_furnace/arc_mv_${material.getName()}_drill` })
		removeMaceratorRecipe(event, `macerate_hv_${material.getName()}_drill`)
		event.remove({ id: `gtceu:arc_furnace/arc_hv_${material.getName()}_drill` })
		removeMaceratorRecipe(event, `macerate_ev_${material.getName()}_drill`)
		event.remove({ id: `gtceu:arc_furnace/arc_ev_${material.getName()}_drill` })
		removeMaceratorRecipe(event, `macerate_iv_${material.getName()}_drill`)
		event.remove({ id: `gtceu:arc_furnace/arc_iv_${material.getName()}_drill` })
		removeMaceratorRecipe(event, `macerate_lv_${material.getName()}_screwdriver`)
		event.remove({ id: `gtceu:arc_furnace/arc_lv_${material.getName()}_screwdriver` })
		removeMaceratorRecipe(event, `macerate_lv_${material.getName()}_wirecutter`)
		event.remove({ id: `gtceu:arc_furnace/arc_lv_${material.getName()}_wirecutter` })
		removeMaceratorRecipe(event, `macerate_hv_${material.getName()}_wirecutter`)
		event.remove({ id: `gtceu:arc_furnace/arc_hv_${material.getName()}_wirecutter` })
		removeMaceratorRecipe(event, `macerate_iv_${material.getName()}_wirecutter`)
		event.remove({ id: `gtceu:arc_furnace/arc_iv_${material.getName()}_wirecutter` })
	}
	
	const $GreateMaterials = Java.loadClass("electrolyte.greate.registry.GreateMaterials")

	forEachMaterial(material => {
		// greate moment
		if (material === $GreateMaterials.AndesiteAlloy
			|| material === $GreateMaterials.RefinedRadiance
			|| material === $GreateMaterials.ShadowSteel
			|| material === $GreateMaterials.ChromaticCompound
			|| material === GTMaterials.DamascusSteel)
		{ return; }

		const toolProperty = material.getProperty(PropertyKey.TOOL)
		const ingotProperty = material.getProperty(PropertyKey.INGOT)
		const oreProperty = material.getProperty(PropertyKey.ORE)

		if (toolProperty !== null) {
			let circuit = 1;
			makeToolRecipe(GTToolType.SWORD, "sword_head", TFGTagPrefix.toolHeadSword, 'tfg:sword_head_extruder_mold', circuit++, material)
			makeToolRecipe(GTToolType.PICKAXE, "pickaxe_head", TFGTagPrefix.toolHeadPickaxe, 'tfg:pickaxe_head_extruder_mold', circuit++, material)
			makeToolRecipe(GTToolType.AXE, "axe_head", TFGTagPrefix.toolHeadAxe, 'tfg:axe_head_extruder_mold', circuit++, material)
			makeToolRecipe(GTToolType.SHOVEL, "shovel_head", TFGTagPrefix.toolHeadShovel, 'tfg:shovel_head_extruder_mold', circuit++, material)
			makeToolRecipe(GTToolType.HOE, "hoe_head", TFGTagPrefix.toolHeadHoe, 'tfg:hoe_head_extruder_mold', circuit++, material)
			makeToolRecipe(GTToolType.KNIFE, "knife_head", TFGTagPrefix.toolHeadKnife, 'tfg:knife_head_extruder_mold', circuit++, material)
			makeToolRecipe(GTToolType.FILE, "file_head", TFGTagPrefix.toolHeadFile, 'tfg:file_head_extruder_mold', circuit++, material)
			makeToolRecipe(GTToolType.SAW, "saw_head", TFGTagPrefix.toolHeadSaw, 'tfg:saw_head_extruder_mold', circuit++, material)
			makeToolRecipe(GTToolType.SPADE, "spade_head", TFGTagPrefix.toolHeadSpade, 'tfg:spade_head_extruder_mold', circuit++, material)
			makeToolRecipe(GTToolType.MINING_HAMMER, "mining_hammer_head", TFGTagPrefix.toolHeadMiningHammer, 'tfg:mining_hammer_head_extruder_mold', circuit++, material)
			makeToolRecipe(GTToolType.SCYTHE, "scythe_head", TFGTagPrefix.toolHeadScythe, 'tfg:scythe_head_extruder_mold', circuit++, material)
			makeToolRecipe(GTToolType.HARD_HAMMER, "hammer_head", TFGTagPrefix.toolHeadHammer, 'tfg:hammer_head_extruder_mold', circuit++, material)
			makeToolRecipe(GTToolType.BUTCHERY_KNIFE, "butchery_knife_head", TFGTagPrefix.toolHeadButcheryKnife, 'tfg:butchery_knife_head_extruder_mold', circuit++, material)
			makeToolRecipe(GTToolType.SCREWDRIVER, "screwdriver_tip", TagPrefix.toolHeadScrewdriver, 'tfg:screwdriver_tip_extruder_mold', circuit++, material)
			makeToolRecipe(GTToolType.WRENCH, "wrench_tip", TagPrefix.toolHeadWrench, 'tfg:wrench_tip_extruder_mold', circuit++, material)
			makeToolRecipe(GTToolType.WIRE_CUTTER, "wire_cutter_head", TagPrefix.toolHeadWireCutter, 'tfg:wire_cutter_head_extruder_mold', circuit++, material)

			processToolMortar(GTToolType.MORTAR, material)

			processToolHead(TFGTagPrefix.toolHeadPropick, "propick_head", 'tfg:propick_head_extruder_mold', circuit++, material)
			processToolHead(TFGTagPrefix.toolHeadJavelin, "javelin_head", 'tfg:javelin_head_extruder_mold', circuit++, material)
			processToolHead(TFGTagPrefix.toolHeadChisel, "chisel_head", 'tfg:chisel_head_extruder_mold', circuit++, material)
			processToolHead(TFGTagPrefix.toolHeadMace, "mace_head", 'tfg:mace_head_extruder_mold', circuit++, material)
			processToolHead(TFGTagPrefix.toolHeadMattock, "mattock_head", 'tfg:mattock_head_extruder_mold', circuit++, material)
			processToolHead(TFGTagPrefix.toolHeadHook, "fish_hook", 'tfg:fish_hook_extruder_mold', circuit, material)

			removePowerToolRecycling(material)
		}

		if (ingotProperty !== null) {
			processIngot(material)
			processPlate(material)
			processPlateDouble(material)
			processBlock(material)
			processFoil(material)
			processRodLong(material)
			processIngotDouble(material)

			processAnvil(material)
			processLamp(material)
			processTrapdoor(material)
			processChain(material)
			processBell(material)
			processBuzzsawBlade(material)

			event.remove({ id: `gtceu:shaped/spring_${material.getName()}` })
			event.remove({ id: `gtceu:shaped/spring_small_${material.getName()}` })
		}

		if (oreProperty !== null && material !== GTMaterials.Plutonium239) {

			processSmallOre(material)
			processSmallNativeOre(material)
			processPoorRawOre(material)
			processNormalRawOre(material)
			processRichRawOre(material)

			processCrushedOre(material)
			processPurifiedOre(material)
			processRefinedOre(material)
			processImpureDust(material)
			processPureDust(material)

			if (material.hasProperty(PropertyKey.GEM)) {
				processGems(material)
			}

			// Indicators
			event.replaceInput({ id: `gtceu:shaped/${material.getName()}_surface_indicator` },
				'minecraft:gravel', '#tfc:rock/gravel')
		}
	})
}
