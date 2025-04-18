// priority: 0

function registerGTCEUMetalRecipes(event) {

	const makeToolRecipe = (toolType, headTagPrefix, extruderMold, cirucitMeta, material) => {
		const toolItem = ToolHelper.get(toolType, material)
		if (toolItem.isEmpty()) return

		const toolHeadItem = ChemicalHelper.get(headTagPrefix, material, 1)
		if (toolHeadItem.isEmpty()) return

		event.recipes.tfc.advanced_shapeless_crafting(
			TFC.itemStackProvider.of(toolItem).copyForgingBonus().copyHeat(),
			[toolHeadItem, '#forge:rods/wooden'], toolHeadItem)
			.id(`gtceu:shaped/${toolType.name}_${material.getName()}`)

		processToolHead(headTagPrefix, extruderMold, cirucitMeta, material)
	}

	const processToolHead = (headTagPrefix, extruderMold, cirucitMeta, material) => {
		const toolHeadItem = ChemicalHelper.get(headTagPrefix, material, 1)
		if (toolHeadItem.isEmpty()) return

		if (material.hasProperty(PropertyKey.INGOT)) {

			const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1)
			if (ingotItem.isEmpty()) return

			event.recipes.gtceu.extruder(`tfg:extrude_${material.getName()}_ingot_to_${new String(headTagPrefix.name).toLowerCase()}_head`)
				.itemInputs(ingotItem.copyWithCount(Math.floor(headTagPrefix.materialAmount() / GTValues.M)))
				.notConsumable(extruderMold)
				.itemOutputs(toolHeadItem)
				.duration(material.getMass() * 6)
				.EUt(GTValues.VA[GTValues.LV])

			if (headTagPrefix.materialAmount() / GTValues.M == 1) {
				event.custom({
					type: 'vintageimprovements:curving',
					ingredients: [ingotItem],
					itemAsHead: extruderMold,
					results: [toolHeadItem],
					processingTime: material.getMass() * 6 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
				}).id(`tfg:vi/curving/${material.getName()}_ingot_to_${new String(headTagPrefix.name).toLowerCase()}_head`)
			}
			else {
				event.custom({
					type: 'vintageimprovements:curving',
					// have to do [item, item] instead of [item x2]
					ingredients: [ingotItem, ingotItem],
					itemAsHead: extruderMold,
					results: [toolHeadItem],
					processingTime: material.getMass() * 6 * global.VINTAGE_IMPROVEMENTS_DURATION_MULTIPLIER
				}).id(`tfg:vi/curving/${material.getName()}_ingot_to_${new String(headTagPrefix.name).toLowerCase()}_head`)
			}

			event.recipes.gtceu.macerator(`tfg:macerate_${material.getName()}_${new String(headTagPrefix.name).toLowerCase()}_head`)
				.itemInputs(toolHeadItem)
				.itemOutputs(ChemicalHelper.get(TagPrefix.dust, material, 1))
				.duration(material.getMass() * 6)
				.category(GTRecipeCategories.MACERATOR_RECYCLING)
				.EUt(GTValues.VA[GTValues.ULV])

			event.recipes.gtceu.arc_furnace(`tfg:arc_furnace_${material.getName()}_${new String(headTagPrefix.name).toLowerCase()}_head`)
				.itemInputs(toolHeadItem)
				.itemOutputs(ChemicalHelper.get(TagPrefix.ingot, material, 1))
				.duration(material.getMass() * 6)
				.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
				.EUt(GTValues.VA[GTValues.LV])

			if (GTMaterials.Stone != material) {
				event.recipes.gtceu.extractor(`tfg:extract_${material.getName()}_${new String(headTagPrefix.name).toLowerCase()}_head`)
					.itemInputs(toolHeadItem)
					.outputFluids(Fluid.of(material.getFluid(), 144))
					.duration(material.getMass() * 6)
					.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
					.EUt(GTValues.VA[GTValues.ULV])
			}

		} else if (material.hasProperty(PropertyKey.GEM)) {

			const gemItem = ChemicalHelper.get(TagPrefix.gem, material, 1)
			if (gemItem.isEmpty()) return

			event.recipes.gtceu.laser_engraver(`tfg:engrave_${material.getName()}_gem_to_${new String(headTagPrefix.name).toLowerCase()}_head`)
				.itemInputs(gemItem.copyWithCount(Math.floor(headTagPrefix.materialAmount() / GTValues.M)))
				.notConsumable(ChemicalHelper.get(TagPrefix.lens, GTMaterials.Glass, 1))
				.circuit(cirucitMeta)
				.itemOutputs(toolHeadItem)
				.duration(material.getMass() * 6)
				.EUt(GTValues.VA[GTValues.LV])

			event.recipes.gtceu.macerator(`tfg:macerate_${material.getName()}_${new String(headTagPrefix.name).toLowerCase()}_head`)
				.itemInputs(toolHeadItem)
				.itemOutputs(ChemicalHelper.get(TagPrefix.dust, material, 1))
				.duration(material.getMass() * 6)
				.category(GTRecipeCategories.MACERATOR_RECYCLING)
				.EUt(GTValues.VA[GTValues.ULV])
		}
		// else: ignore :3
	}

	const processToolMortar = (toolType, material) => {
		const toolItem = ToolHelper.get(toolType, material)
		if (toolItem.isEmpty()) return

		const usableTagPrefix = material.hasProperty(PropertyKey.GEM) ? TagPrefix.gem : TagPrefix.ingot;
		const usableItem = ChemicalHelper.get(usableTagPrefix, material, 1)

		if (usableItem.isEmpty()) return

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

	const processIngot = (tagPrefix, material) => {
		const ingotStack = ChemicalHelper.get(tagPrefix, material, 1)

		if (material.hasFlag(MaterialFlags.GENERATE_PLATE)
			&& material != GTMaterials.Wood
			&& material != GTMaterials.TreatedWood 
			&& !material.hasProperty(PropertyKey.POLYMER))
		{
			const plateStack = ChemicalHelper.get(TagPrefix.plate, material, 1)
			const blockStack = ChemicalHelper.get(TagPrefix.block, material, 1)

			let matAmount = TagPrefix.block.getMaterialAmount(material) / GTValues.M;

			if (!plateStack.isEmpty()) {

				event.custom({
					type: "createaddition:rolling",
					input: ingotStack,
					result: plateStack,
					//processingTime: material.getMass() // TODO - controlled by a global config argh
				}).id(`tfg:rolling/${material.getName()}_plate`)

				if (!blockStack.isEmpty() && GTMaterials.Stone != material) {

					// 9х Слиток -> Блок
					event.recipes.createCompacting(blockStack, ingotStack.withCount(matAmount))
						.heated()
						.id(`tfg:compacting/${material.getName()}_block`)
				}
			}
			else {
				if (!blockStack.isEmpty()) {

					// Блок из гемов -> 9 Пластин
					event.recipes.createCutting(plateStack.withCount(matAmount).withChance(0.65), blockStack)
						.id(`tfg:cutting/${material.getName()}_plate`)
				}
			}
		}
	}

	const processPlate = (tagPrefix, material) => {
		const item = ChemicalHelper.get(tagPrefix, material, 1)
		if (item.isEmpty()) return

		event.remove({ id: `gtceu:shaped/plate_${material.getName()}` })
	}

	const processPlateDouble = (tagPrefix, material) => {
		const item = ChemicalHelper.get(tagPrefix, material, 1)
		if (item.isEmpty()) return

		event.remove({ id: `gtceu:shaped/plate_double_${material.getName()}` })
	}

	const processBlock = (tagPrefix, material) => {
		const item = ChemicalHelper.get(tagPrefix, material, 1)
		if (item.isEmpty()) return

		event.remove({ id: `gtceu:compressor/compress_${material.getName()}_to_block` })
	}

	const processFoil = (tagPrefix, material) => {

		const foilItem = ChemicalHelper.get(tagPrefix, material, 4)
		const plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1)

		if (plateItem != null && foilItem != null) {
			event.custom({
				type: "createaddition:rolling",
				input: plateItem,
				result: foilItem,
				// TODO - processing time is controlled by a global config instead of setting it per-recipe...
				//processingTime: material.getMass()
			}).id(`tfg:rolling/${material.getName()}_foil`)
		}
	}

	const processRodLong = (tagPrefix, material) => {
		const item = ChemicalHelper.get(tagPrefix, material, 1)
		if (item.isEmpty()) return

		event.remove({ id: `gtceu:shaped/stick_long_stick_${material.getName()}` })
	}

	const processIngotDouble = (tagPrefix, material) => {
		if (!material.hasFlag(TFGMaterialFlags.GENERATE_DOUBLE_INGOTS)) return;

		const doubleIngotStack = ChemicalHelper.get(tagPrefix, material, 1);

		if (material.hasProperty(PropertyKey.FLUID)) {
			event.recipes.gtceu.extractor(`tfg:extract_${material.getName()}_double_ingot`)
				.itemInputs(doubleIngotStack)
				.outputFluids(Fluid.of(material.getFluid(), 288))
				.duration(material.getMass())
				.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
				.EUt(GTValues.VA[GTValues.ULV])
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

		event.recipes.gtceu.bender(`tfg:bend_${material.getName()}_double_ingot`)
			.itemInputs(twoIngotStack)
			.itemOutputs(doubleIngotStack)
			.duration(material.getMass() * 6)
			.EUt(GTValues.VA[GTValues.LV])
			.circuit(3)
	}

	const processSmallOre = (tagPrefix, material) => {
		if (!material.hasFlag(TFGMaterialFlags.HAS_SMALL_TFC_ORE)) return;

		const smallOre = ChemicalHelper.get(tagPrefix, material, 1);
		const smallDust = ChemicalHelper.get(TagPrefix.dustSmall, material, 1);

		event.recipes.gtceu.macerator(`tfg:macerate_${material.getName()}_small_ore`)
			.itemInputs(smallOre)
			.itemOutputs(smallDust)
			.duration(material.getMass())
			.category(GTRecipeCategories.ORE_CRUSHING)
			.EUt(GTValues.VA[GTValues.ULV])
	}

	const processSmallNativeOre = (tagPrefix, material) => {
		if (!material.hasFlag(TFGMaterialFlags.HAS_SMALL_NATIVE_TFC_ORE)) return;

		const smallNativeOre = ChemicalHelper.get(tagPrefix, material, 1);
		const smallDust = ChemicalHelper.get(TagPrefix.dustSmall, material, 1);

		event.recipes.gtceu.macerator(`tfg:macerate_${material.getName()}_small_native_ore`)
			.itemInputs(smallNativeOre)
			.itemOutputs(smallDust)
			.duration(material.getMass())
			.category(GTRecipeCategories.ORE_CRUSHING)
			.EUt(GTValues.VA[GTValues.ULV])
	}

	const processPoorRawOre = (tagPrefix, material) => {
		const poorOreItem = ChemicalHelper.get(tagPrefix, material, 2)
		const crushedOreItem = ChemicalHelper.get(TagPrefix.crushed, material, Math.max(material.getProperty(PropertyKey.ORE).getOreMultiplier() / 2.0, 1))

		if (poorOreItem != null && crushedOreItem != null) {

			event.recipes.tfc.quern(crushedOreItem, poorOreItem)
				.id(`tfg:quern/${material.getName()}_crushed_ore_from_poor_raw_ore`)

			// TODO: Remove when Greate fixes its chanced output bug

			event.shapeless(crushedOreItem, [poorOreItem, '#forge:tools/hammers'])
				.id(`tfg:greate_workaround_crushed_${material.getName()}`)
		}
	}

	const processNormalRawOre = (tagPrefix, material) => {
		const normalOreItem = ChemicalHelper.get(tagPrefix, material, 1)
		const crushedOreItem = ChemicalHelper.get(TagPrefix.crushed, material, material.getProperty(PropertyKey.ORE).getOreMultiplier())

		if (normalOreItem != null && crushedOreItem != null) {
			event.recipes.tfc.quern(crushedOreItem, normalOreItem)
				.id(`tfg:quern/${material.getName()}_crushed_ore_from_normal_raw_ore`)
		}
	}

	const processRichRawOre = (tagPrefix, material) => {
		const richOreItem = ChemicalHelper.get(tagPrefix, material, 1)
		const crushedOreItem = ChemicalHelper.get(TagPrefix.crushed, material, material.getProperty(PropertyKey.ORE).getOreMultiplier() * 2)

		if (richOreItem != null && crushedOreItem != null) {
			event.recipes.tfc.quern(crushedOreItem, richOreItem)
				.id(`tfg:quern/${material.getName()}_crushed_ore_from_rich_raw_ore`)
		}
	}

	const processCrushedOre = (tagPrefix, material) => {
		const crushedOreItem = ChemicalHelper.get(tagPrefix, material, 1)
		const pureOreItem = ChemicalHelper.get(TagPrefix.crushedPurified, material, 1)

		if (crushedOreItem != null && pureOreItem != null) {
			
			let byproductMaterial = material.getProperty(PropertyKey.ORE).getOreByProduct(0, material);
			const byproductItem = ChemicalHelper.get(TagPrefix.dust, byproductMaterial, 1)

			event.recipes.greate.splashing([pureOreItem, TieredOutputItem.of(byproductItem).withChance(0.333), 'gtceu:stone_dust'], crushedOreItem)
				.id(`tfg:splashing/${material.getName()}_purified_ore`)
			
			// Дробленная руда -> Очищенная руда
			event.custom({
				type: "ae2:transform",
				circumstance: {
					type: "fluid",
					tag: "tfc:water"
				},
				ingredients: [
					crushedOreItem.toJson()
				],
				result: pureOreItem.toJson()
			}).id(`tfg:ae_transform/${material.getName()}_purified_ore`)
		}
	}

	const processImpureDust = (tagPrefix, material) => {
		const impureDustItem = ChemicalHelper.get(tagPrefix, material, 1)
		const dustItem = ChemicalHelper.get(TagPrefix.dust, material, 1)

		if (impureDustItem != null && dustItem != null) {
			
			let byproductMaterial = material.getProperty(PropertyKey.ORE).getOreByProduct(0, material);
			const byproductItem = ChemicalHelper.get(TagPrefix.dust, byproductMaterial, 1)

			event.recipes.greate.splashing([dustItem, TieredOutputItem.of(byproductItem).withChance(0.333), 'gtceu:stone_dust'], impureDustItem)
				.id(`tfg:splashing/${material.getName()}_dust_from_impure`)

			// Грязная пыль -> Пыль
			event.custom({
				type: "ae2:transform",
				circumstance: {
					type: "fluid",
					tag: "tfc:water"
				},
				ingredients: [
					impureDustItem.toJson()
				],
				result: dustItem.toJson()
			}).id(`tfg:ae_transform/${material.getName()}_dust_from_impure`)
		}
	}

	const processPureDust = (tagPrefix, material) => {
		const pureDust = ChemicalHelper.get(tagPrefix, material, 1)
		const dustItem = ChemicalHelper.get(TagPrefix.dust, material, 1)

		if (pureDust != null && dustItem != null) {

			let byproductMaterial = material.getProperty(PropertyKey.ORE).getOreByProduct(0, material);
			const byproductItem = ChemicalHelper.get(TagPrefix.dust, byproductMaterial, 1)

			event.recipes.greate.splashing([dustItem, TieredOutputItem.of(byproductItem).withChance(0.333), 'gtceu:stone_dust'], pureDust)
				.id(`tfg:splashing/${material.getName()}_dust_from_pure`)

			// Очищенная пыль -> Пыль
			event.custom({
				type: "ae2:transform",
				circumstance: {
					type: "fluid",
					tag: "tfc:water"
				},
				ingredients: [
					pureDust.toJson()
				],
				result: dustItem.toJson()
			}).id(`tfg:ae_transform/${material.getName()}_dust_from_pure`)
		}
	}

	GTMaterialRegistry.getRegisteredMaterials().forEach(material => {
		const toolProperty = material.getProperty(PropertyKey.TOOL)
		const ingotProperty = material.getProperty(PropertyKey.INGOT)
		const oreProperty = material.getProperty(PropertyKey.ORE)
		const gemProperty = material.getProperty(PropertyKey.GEM)

		const anvilStack = ChemicalHelper.get(TFGTagPrefix.anvil, material, 1)
		const finishedLampStack = ChemicalHelper.get(TFGTagPrefix.lamp, material, 1)
		const trapdoorStack = ChemicalHelper.get(TFGTagPrefix.trapdoor, material, 1)
		const chainStack = ChemicalHelper.get(TFGTagPrefix.chain, material, 1)
		const bellStack = ChemicalHelper.get(TFGTagPrefix.bell, material, 1)
		const barsStack = ChemicalHelper.get(TFGTagPrefix.bars, material, 4)

		if (toolProperty != null) {
			makeToolRecipe(GTToolType.SWORD, TFGTagPrefix.toolHeadSword, 'tfg:sword_head_extruder_mold', 1, material)
			makeToolRecipe(GTToolType.PICKAXE, TFGTagPrefix.toolHeadPickaxe, 'tfg:pickaxe_head_extruder_mold', 2, material)
			makeToolRecipe(GTToolType.AXE, TFGTagPrefix.toolHeadAxe, 'tfg:axe_head_extruder_mold', 3, material)
			makeToolRecipe(GTToolType.SHOVEL, TFGTagPrefix.toolHeadShovel, 'tfg:shovel_head_extruder_mold', 4, material)
			makeToolRecipe(GTToolType.HOE, TFGTagPrefix.toolHeadHoe, 'tfg:hoe_head_extruder_mold', 5, material)
			makeToolRecipe(GTToolType.KNIFE, TFGTagPrefix.toolHeadKnife, 'tfg:knife_head_extruder_mold', 6, material)
			makeToolRecipe(GTToolType.FILE, TFGTagPrefix.toolHeadFile, 'tfg:file_head_extruder_mold', 7, material)
			makeToolRecipe(GTToolType.SAW, TFGTagPrefix.toolHeadSaw, 'tfg:saw_head_extruder_mold', 8, material)
			makeToolRecipe(GTToolType.SPADE, TFGTagPrefix.toolHeadSpade, 'tfg:spade_head_extruder_mold', 9, material)
			makeToolRecipe(GTToolType.MINING_HAMMER, TFGTagPrefix.toolHeadMiningHammer, 'tfg:mining_hammer_head_extruder_mold', 10, material)
			makeToolRecipe(GTToolType.SCYTHE, TFGTagPrefix.toolHeadScythe, 'tfg:scythe_head_extruder_mold', 11, material)
			makeToolRecipe(GTToolType.HARD_HAMMER, TFGTagPrefix.toolHeadHammer, 'tfg:hammer_head_extruder_mold', 12, material)
			makeToolRecipe(GTToolType.BUTCHERY_KNIFE, TFGTagPrefix.toolHeadButcheryKnife, 'tfg:butchery_knife_head_extruder_mold', 13, material)

			processToolMortar(GTToolType.MORTAR, material)

			processToolHead(TFGTagPrefix.toolHeadPropick, 'tfg:propick_head_extruder_mold', 14, material)
			processToolHead(TFGTagPrefix.toolHeadJavelin, 'tfg:javelin_head_extruder_mold', 15, material)
			processToolHead(TFGTagPrefix.toolHeadChisel, 'tfg:chisel_head_extruder_mold', 16, material)
			processToolHead(TFGTagPrefix.toolHeadMace, 'tfg:mace_head_extruder_mold', 17, material)
			processToolHead(TFGTagPrefix.toolHeadMattock, 'tfg:mattock_head_extruder_mold', 18, material)
		}

		if (ingotProperty != null) {
			processIngot(TagPrefix.ingot, material)
			processPlate(TagPrefix.plate, material)
			processPlateDouble(TagPrefix.plateDouble, material)
			processBlock(TagPrefix.block, material)
			processFoil(TagPrefix.foil, material)
			processRodLong(TagPrefix.rodLong, material)
			processIngotDouble(TFGTagPrefix.ingotDouble, material)
		}

		if (oreProperty != null) {
			processSmallOre(TFGTagPrefix.oreSmall, material)
			processSmallNativeOre(TFGTagPrefix.oreSmallNative, material)
			processPoorRawOre(TFGTagPrefix.poorRawOre, material)
			processNormalRawOre(TagPrefix.rawOre, material)
			processRichRawOre(TFGTagPrefix.richRawOre, material)

			processCrushedOre(TagPrefix.crushed, material)
			processImpureDust(TagPrefix.dustImpure, material)
			processPureDust(TagPrefix.dustPure, material)

			if (gemProperty != null) {
				let gem = ChemicalHelper.get(TagPrefix.gem, material, 1);
				let chipped = ChemicalHelper.get(TagPrefix.gemChipped, material, 1)
				let smallDust = ChemicalHelper.get(TagPrefix.dustSmall, material, 1)

				event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(
					`gtceu:${material.getName()}_bud_indicator`, [gem, '#tfc:chisels']))
					.id(`shapeless/${material.getName()}_bud_indicator`)

				event.shaped(smallDust,
					[ 'A', 'B' ],
					{ A: chipped, B: '#forge:tools/mortars'})
					.id(`shapeless/mortar_chipped_${material.getName()}`)
			}
		}

		if (anvilStack != null) {
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
				.EUt(GTValues.VA[GTValues.ULV])

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

		if (finishedLampStack != null) {
			const materialDustStack = ChemicalHelper.get(TagPrefix.dust, material, 1)
			const materialIngotStack = ChemicalHelper.get(TagPrefix.ingot, material, 1)
			const glassDustStack = ChemicalHelper.get(TagPrefix.dust, GTMaterials.Glass, 4)
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
				.itemOutputs([materialIngotStack, glassDustStack])
				.duration(material.getMass() * 8)
				.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
				.EUt(GTValues.VA[GTValues.ULV])

			event.recipes.gtceu.extractor(`tfg:extract_${material.getName()}_unfinished_lamp`)
				.itemInputs(unfinishedLampStack)
				.outputFluids(Fluid.of(material.getFluid(), 144))
				.duration(material.getMass() * 8)
				.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
				.EUt(GTValues.VA[GTValues.ULV])

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

		if (trapdoorStack != null) {
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
				.EUt(GTValues.VA[GTValues.ULV])

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

		if (chainStack != null) {
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
				.EUt(GTValues.VA[GTValues.ULV])

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

		if (bellStack != null) {
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

		if (barsStack != null) {
			event.stonecutting(barsStack, ChemicalHelper.get(TagPrefix.ingot, material, 1))
				.id(`${material.getName()}_ingot_to_bars`)
		}

		// Indicators
		if (oreProperty != null) {
			event.replaceInput({ id: `gtceu:shaped/${material.getName()}_surface_indicator`},
				'minecraft:gravel', '#tfc:rock/gravel')
		}
	})
}