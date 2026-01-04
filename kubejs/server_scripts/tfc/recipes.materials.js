// priority: 0
"use strict";

function registerTFCMaterialsRecipes(event) {

	forEachMaterial(material => {
		let tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY)

		if (tfcProperty === null) {
			return;
		}
		
		let outputMaterial = (tfcProperty.getOutputMaterial() === null) ? material : tfcProperty.getOutputMaterial()

		// Ingots
		let ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1)
		if (!ingotItem.isEmpty()) {

			// Декрафт слитка в жидкость
			event.recipes.tfc.heating(ingotItem, tfcProperty.getMeltTemp())
				.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
				.id(`tfc:heating/metal/${material.getName()}_ingot`)

			if (material !== GTMaterials.WroughtIron) {

				// Отливка слитка в обычной форме
				event.recipes.tfc.casting(ingotItem, 'tfc:ceramic/ingot_mold', Fluid.of(outputMaterial.getFluid(), 144), 0.1)
					.id(`tfc:casting/${material.getName()}_ingot`)

				// Отливка слитка в огнеупорной форме
				event.recipes.tfc.casting(ingotItem, 'tfc:ceramic/fire_ingot_mold', Fluid.of(outputMaterial.getFluid(), 144), 0.01)
					.id(`tfc:casting/${material.getName()}_fire_ingot`)

				event.recipes.create.filling(
					Item.of('tfc:ceramic/ingot_mold', getFillingNBT(outputMaterial, 144)),
					[
						Fluid.of(outputMaterial.getFluid(), 144),
						Item.of('tfc:ceramic/ingot_mold').strongNBT()
					]
				).id(`tfg:tfc/filling/${material.getName()}_ingot`)

				event.recipes.create.filling(
					Item.of('tfc:ceramic/fire_ingot_mold', getFillingNBT(outputMaterial, 144)),
					[
						Fluid.of(outputMaterial.getFluid(), 144),
						Item.of('tfc:ceramic/fire_ingot_mold').strongNBT()
					]
				).id(`tfg:tfc/filling/${material.getName()}_fire_ingot`)
			}

			// Double Ingots
			let doubleIngotItem = ChemicalHelper.get(TFGTagPrefix.ingotDouble, material, 1)
			if (!doubleIngotItem.isEmpty()) {

				// Декрафт двойного слитка в жидкость
				event.recipes.tfc.heating(doubleIngotItem, tfcProperty.getMeltTemp())
					.resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
					.id(`tfc:heating/metal/${material.getName()}_double_ingot`)

				// 2 слитка -> Двойной слиток
				event.recipes.tfc.welding(doubleIngotItem, ingotItem, ingotItem, tfcProperty.getTier() - 1)
					.id(`tfc:welding/${material.getName()}_double_ingot`)

				event.recipes.greate.compacting(doubleIngotItem, [ingotItem, ingotItem, 'tfc:powder/flux'])
					.heated()
					.recipeTier(tfcProperty.getTier() < 5 ? 0 : 1)
					.circuitNumber(0)
					.id(`greate:compacting/${material.getName()}_double_ingot`)

				// Plates
				let plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1)
				if (!plateItem.isEmpty()) {

					// Декрафт пластины в жидкость
					event.recipes.tfc.heating(plateItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.id(`tfc:heating/metal/${material.getName()}_sheet`)

					// Двойной слиток -> Пластина
					event.recipes.tfc.anvil(plateItem, doubleIngotItem, ['hit_last', 'hit_second_last', 'hit_third_last'])
						.tier(tfcProperty.getTier())
						.id(`tfc:anvil/${material.getName()}_sheet`)

					// Double Plate
					let doublePlateItem = ChemicalHelper.get(TagPrefix.plateDouble, material, 1)
					if (!doublePlateItem.isEmpty()) {

						// Декрафт двойных пластин
						event.recipes.tfc.heating(doublePlateItem, tfcProperty.getMeltTemp())
							.resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
							.id(`tfc:heating/metal/${material.getName()}_double_sheet`)

						// Две пластины -> Двойная пластина
						event.recipes.tfc.welding(doublePlateItem, plateItem, plateItem)
							.tier(tfcProperty.getTier())
							.id(`tfc:welding/${material.getName()}_double_sheet`)

						event.recipes.greate.compacting(doublePlateItem, [plateItem, plateItem, 'tfc:powder/flux'])
							.heated()
							.recipeTier(tfcProperty.getTier() < 4 ? 0 : 1)
							.id(`greate:compacting/${material.getName()}_double_sheet`)

						// Armor
						if (material.hasFlag(TFGMaterialFlags.HAS_TFC_ARMOR)) {
							//#region Шлем

							// Декрафт незавершенного шлема в жидкость
							event.recipes.tfc.heating(`tfc:metal/unfinished_helmet/${material.getName()}`, tfcProperty.getMeltTemp())
								.resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
								.id(`tfc:heating/metal/${material.getName()}_unfinished_helmet`)

							// Незавершенный шлем
							event.recipes.tfc.anvil(`tfc:metal/unfinished_helmet/${material.getName()}`, doublePlateItem, ['hit_last', 'bend_second_last', 'bend_third_last'])
								.tier(tfcProperty.getTier())
								.id(`tfc:anvil/${material.getName()}_unfinished_helmet`)

							// Декрафт шлема в жидкость
							event.recipes.tfc.heating(`tfc:metal/helmet/${material.getName()}`, tfcProperty.getMeltTemp())
								.resultFluid(Fluid.of(outputMaterial.getFluid(), 432))
								.useDurability(true)
								.id(`tfc:heating/metal/${material.getName()}_helmet`)

							// Шлем
							event.recipes.tfc.welding(`tfc:metal/helmet/${material.getName()}`, `tfc:metal/unfinished_helmet/${material.getName()}`, plateItem)
								.tier(tfcProperty.getTier())
								.id(`tfc:welding/${material.getName()}_helmet`)

							event.recipes.greate.compacting(`tfc:metal/helmet/${material.getName()}`, [`tfc:metal/unfinished_helmet/${material.getName()}`, plateItem, 'tfc:powder/flux'])
								.heated()
								.recipeTier(tfcProperty.getTier() < 4 ? 0 : 1)
								.id(`greate:compacting/${material.getName()}_helmet`)

							//#endregion

							//#region Нагрудник

							// Декрафт незавершенного нагрудника в жидкость
							event.recipes.tfc.heating(`tfc:metal/unfinished_chestplate/${material.getName()}`, tfcProperty.getMeltTemp())
								.resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
								.id(`tfc:heating/metal/${material.getName()}_unfinished_chestplate`)

							// Незавершенный нагрудник
							event.recipes.tfc.anvil(`tfc:metal/unfinished_chestplate/${material.getName()}`, doublePlateItem, ['hit_last', 'hit_second_last', 'upset_third_last'])
								.tier(tfcProperty.getTier())
								.id(`tfc:anvil/${material.getName()}_unfinished_chestplate`)

							// Декрафт нагрудника в жидкость
							event.recipes.tfc.heating(`tfc:metal/chestplate/${material.getName()}`, tfcProperty.getMeltTemp())
								.resultFluid(Fluid.of(outputMaterial.getFluid(), 576))
								.useDurability(true)
								.id(`tfc:heating/metal/${material.getName()}_chestplate`)

							// Нагрудник
							event.recipes.tfc.welding(`tfc:metal/chestplate/${material.getName()}`, `tfc:metal/unfinished_chestplate/${material.getName()}`, doublePlateItem)
								.tier(tfcProperty.getTier())
								.id(`tfc:welding/${material.getName()}_chestplate`)

							event.recipes.greate.compacting(`tfc:metal/chestplate/${material.getName()}`, [`tfc:metal/unfinished_chestplate/${material.getName()}`, doublePlateItem, 'tfc:powder/flux'])
								.heated()
								.recipeTier(tfcProperty.getTier() < 4 ? 0 : 1)
								.id(`greate:compacting/${material.getName()}_chestplate`)

							//#endregion

							//#region Поножи

							// Декрафт незавершенных поножей в жидкость
							event.recipes.tfc.heating(`tfc:metal/unfinished_greaves/${material.getName()}`, tfcProperty.getMeltTemp())
								.resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
								.id(`tfc:heating/metal/${material.getName()}_unfinished_greaves`)

							// Незавершенные поножи
							event.recipes.tfc.anvil(`tfc:metal/unfinished_greaves/${material.getName()}`, doublePlateItem, ['bend_any', 'draw_any', 'hit_any'])
								.tier(tfcProperty.getTier())
								.id(`tfc:anvil/${material.getName()}_unfinished_greaves`)

							// Декрафт поножей в жидкость
							event.recipes.tfc.heating(`tfc:metal/greaves/${material.getName()}`, tfcProperty.getMeltTemp())
								.resultFluid(Fluid.of(outputMaterial.getFluid(), 432))
								.useDurability(true)
								.id(`tfc:heating/metal/${material.getName()}_greaves`)

							// Поножи
							event.recipes.tfc.welding(`tfc:metal/greaves/${material.getName()}`, `tfc:metal/unfinished_greaves/${material.getName()}`, plateItem)
								.tier(tfcProperty.getTier())
								.id(`tfc:welding/${material.getName()}_greaves`)

							event.recipes.greate.compacting(`tfc:metal/greaves/${material.getName()}`, [`tfc:metal/unfinished_greaves/${material.getName()}`, plateItem, 'tfc:powder/flux'])
								.heated()
								.recipeTier(tfcProperty.getTier() < 4 ? 0 : 1)
								.id(`greate:compacting/${material.getName()}_greaves`)

							//#endregion

							//#region Ботинки

							// Декрафт незавершенных ботинок в жидкость
							event.recipes.tfc.heating(`tfc:metal/unfinished_boots/${material.getName()}`, tfcProperty.getMeltTemp())
								.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
								.id(`tfc:heating/metal/${material.getName()}_unfinished_boots`)

							// Незавершенные ботинки
							event.recipes.tfc.anvil(`tfc:metal/unfinished_boots/${material.getName()}`, plateItem, ['bend_last', 'bend_second_last', 'shrink_third_last'])
								.tier(tfcProperty.getTier())
								.id(`tfc:anvil/${material.getName()}_unfinished_boots`)

							// Декрафт ботинок в жидкость
							event.recipes.tfc.heating(`tfc:metal/boots/${material.getName()}`, tfcProperty.getMeltTemp())
								.resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
								.useDurability(true)
								.id(`tfc:heating/metal/${material.getName()}_boots`)

							// Ботинки
							event.recipes.tfc.welding(`tfc:metal/boots/${material.getName()}`, `tfc:metal/unfinished_boots/${material.getName()}`, plateItem)
								.tier(tfcProperty.getTier())
								.id(`tfc:welding/${material.getName()}_boots`)

							event.recipes.greate.compacting(`tfc:metal/boots/${material.getName()}`, [`tfc:metal/unfinished_boots/${material.getName()}`, plateItem, 'tfc:powder/flux'])
								.heated()
								.recipeTier(tfcProperty.getTier() < 4 ? 0 : 1)
								.id(`greate:compacting/${material.getName()}_boots`)

							//#endregion
						}

						// Tools (From Double Plate)
						if (material.hasFlag(TFGMaterialFlags.HAS_TFC_TOOL)) {
							//#region Фурма

							// Декрафт инструмента в жидкость
							event.recipes.tfc.heating(`tfc:metal/tuyere/${material.getName()}`, tfcProperty.getMeltTemp())
								.resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
								.useDurability(true)
								.id(`tfc:heating/metal/${material.getName()}_tuyere`)

							// Фурма
							event.recipes.tfc.anvil(`tfc:metal/tuyere/${material.getName()}`, doublePlateItem, ['bend_last', 'bend_second_last'])
								.tier(tfcProperty.getTier())
								.id(`tfc:anvil/${material.getName()}_tuyere`)

							// These aren't TFC recipes but they go here since they don't have a tag prefix
							// and I'm too lazy to make them one
							event.recipes.vintageimprovements.curving(`tfc:metal/tuyere/${material.getName()}`, doublePlateItem)
								.head('gtceu:bottle_extruder_mold')
								.id(`tfg:vi/curving/${material.getName()}_tuyere`)

							event.recipes.gtceu.extruder(`tfg:${material.getName()}_tuyere`)
								.itemInputs(doublePlateItem)
								.notConsumable('gtceu:bottle_extruder_mold')
								.itemOutputs(`tfc:metal/tuyere/${material.getName()}`)
								.duration(material.getMass() * 6)
								.EUt(GTValues.VA[GTValues.LV])
							//#endregion

							//#region Щит

							// Декрафт щита в жидкость
							event.recipes.tfc.heating(`tfc:metal/shield/${material.getName()}`, tfcProperty.getMeltTemp())
								.resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
								.useDurability(true)
								.id(`tfc:heating/metal/${material.getName()}_shield`)

							// Щит
							event.recipes.tfc.anvil(`tfc:metal/shield/${material.getName()}`, doublePlateItem, ['upset_last', 'bend_second_last', 'bend_third_last'])
								.tier(tfcProperty.getTier())
								.id(`tfc:anvil/${material.getName()}_shield`)

							event.recipes.vintageimprovements.curving(`tfc:metal/shield/${material.getName()}`, doublePlateItem)
								.head('gtceu:plate_extruder_mold')
								.id(`tfg:vi/curving/${material.getName()}_shield`)

							event.recipes.gtceu.extruder(`tfg:${material.getName()}_shield`)
								.itemInputs(doublePlateItem)
								.notConsumable('gtceu:plate_extruder_mold')
								.itemOutputs(`tfc:metal/shield/${material.getName()}`)
								.duration(material.getMass() * 6)
								.EUt(GTValues.VA[GTValues.LV])
							//#endregion

							//#region Конская броня

							// Декрафт конской брони в жидкость
							event.recipes.tfc.heating(`tfc:metal/horse_armor/${material.getName()}`, tfcProperty.getMeltTemp())
								.resultFluid(Fluid.of(outputMaterial.getFluid(), 864))
								.useDurability(true)
								.id(`tfc:heating/metal/${material.getName()}_horse_armor`)

							//#endregion
						}

						// Buzzsaw blade
						let buzzsawBladeItem = ChemicalHelper.get(TagPrefix.toolHeadBuzzSaw, material, 1)
						if (!buzzsawBladeItem.isEmpty()) {
							event.recipes.tfc.heating(buzzsawBladeItem, tfcProperty.getMeltTemp())
								.resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
								.id(`tfc:heating/metal/${material.getName()}_buzzsaw_blade`)

							event.recipes.tfc.anvil(buzzsawBladeItem, doublePlateItem, ['bend_last', 'hit_second_last', 'draw_third_last'])
								.tier(tfcProperty.getTier())
								.id(`tfc:anvil/${material.getName()}_buzzsaw_blade`)
						}
					}

					// Tools (From Plate)
					if (material.hasFlag(TFGMaterialFlags.HAS_TFC_TOOL)) {
						//#region Удочка

						// Декрафт оголовья в жидкость
						event.recipes.tfc.heating(`tfc:metal/fish_hook/${material.getName()}`, tfcProperty.getMeltTemp())
							.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
							.id(`tfc:heating/metal/${material.getName()}_fish_hook`)

						// Крюк удочки
						event.recipes.tfc.anvil(`tfc:metal/fish_hook/${material.getName()}`, plateItem, ['bend_any', 'hit_any', 'draw_not_last'])
							.tier(tfcProperty.getTier())
							.bonus(true)
							.id(`tfc:anvil/${material.getName()}_fish_hook`)

						// Декрафт инструмента в жидкость
						event.recipes.tfc.heating(`tfc:metal/fishing_rod/${material.getName()}`, tfcProperty.getMeltTemp())
							.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
							.useDurability(true)
							.id(`tfc:heating/metal/${material.getName()}_fishing_rod`)

						//#endregion
					}

					generatePlatedBlockRecipe(event, material);
				}

				// Tools (From Double Ingots)
				if (material.hasFlag(TFGMaterialFlags.HAS_TFC_TOOL) || material.hasFlag(TFGMaterialFlags.HAS_GT_TOOL)) {
					//#region Меч

					// Крафт инструмента
					event.remove({ id: `tfc:crafting/metal/sword/${material.getName()}` })

					// Декрафт инструмента в жидкость
					let swordItem = ToolHelper.get(GTToolType.SWORD, material)
					if (!swordItem.isEmpty()) {

						event.recipes.tfc.heating(swordItem, tfcProperty.getMeltTemp())
							.resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
							.useDurability(true)
							.id(`tfc:heating/metal/${material.getName()}_sword`)

					}

					let swordHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadSword, material, 1)
					if (!swordHeadItem.isEmpty()) {

						// Декрафт оголовья в жидкость
						event.recipes.tfc.heating(swordHeadItem, tfcProperty.getMeltTemp())
							.resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
							.id(`tfc:heating/metal/${material.getName()}_sword_blade`)

						// Крафт оголовья
						event.recipes.tfc.anvil(swordHeadItem, doubleIngotItem, ['punch_last', 'bend_not_last', 'draw_not_last'])
							.tier(tfcProperty.getTier())
							.bonus(true)
							.id(`tfc:anvil/${material.getName()}_sword_blade`)

						// Металл + Форма -> Оголовье
						if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
							event.recipes.tfc.casting(swordHeadItem, 'tfc:ceramic/sword_blade_mold', Fluid.of(outputMaterial.getFluid(), 288), 1)
								.id(`tfc:casting/${material.getName()}_sword_blade`)

							event.recipes.create.filling(
								Item.of('tfc:ceramic/sword_blade_mold', getFillingNBT(outputMaterial, 288)),
								[
									Fluid.of(outputMaterial.getFluid(), 288),
									Item.of('tfc:ceramic/sword_blade_mold').strongNBT()
								]
							).id(`tfg:tfc/filling/${material.getName()}_sword_blade`)
						}
					}

					//#endregion

					//#region Дубина

					if (!material.hasFlag(TFGMaterialFlags.HAS_GT_TOOL)) {
						// Декрафт инструмента в жидкость
						event.recipes.tfc.heating(`tfc:metal/mace/${material.getName()}`, tfcProperty.getMeltTemp())
							.resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
							.useDurability(true)
							.id(`tfc:heating/metal/${material.getName()}_mace`)

						// Металл + Форма -> Оголовье
						if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
							event.recipes.tfc.casting(`tfc:metal/mace_head/${material.getName()}`, 'tfc:ceramic/mace_head_mold', Fluid.of(outputMaterial.getFluid(), 288), 1)
								.id(`tfc:casting/${material.getName()}_mace_head`)

							event.recipes.create.filling(
								Item.of('tfc:ceramic/mace_head_mold', getFillingNBT(outputMaterial, 288)),
								[
									Fluid.of(outputMaterial.getFluid(), 288),
									Item.of('tfc:ceramic/mace_head_mold').strongNBT()
								]
							).id(`tfg:tfc/filling/${material.getName()}_mace_head`)
						}

						// Декрафт оголовья в жидкость
						event.recipes.tfc.heating(`tfc:metal/mace_head/${material.getName()}`, tfcProperty.getMeltTemp())
							.resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
							.id(`tfc:heating/metal/${material.getName()}_mace_head`)
					}
					//#endregion

					//#region Мясницкий нож

					// Декрафт инструмента в жидкость
					let butcheryKnifeItem = ToolHelper.get(GTToolType.BUTCHERY_KNIFE, material)
					if (!butcheryKnifeItem.isEmpty()) {

						event.recipes.tfc.heating(butcheryKnifeItem, tfcProperty.getMeltTemp())
							.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
							.useDurability(true)
							.id(`tfc:heating/metal/${material.getName()}_butchery_knife`)

					}

					let butcheryKnifeHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadButcheryKnife, material, 1)
					if (!butcheryKnifeHeadItem.isEmpty()) {

						// Декрафт оголовья в жидкость
						event.recipes.tfc.heating(butcheryKnifeHeadItem, tfcProperty.getMeltTemp())
							.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
							.id(`tfc:heating/metal/${material.getName()}_knife_butchery_head`)

						// Крафт оголовья
						event.recipes.tfc.anvil(butcheryKnifeHeadItem, `#forge:ingots/${material.getName()}`, ['punch_last', 'bend_not_last', 'bend_not_last'])
							.tier(tfcProperty.getTier())
							.bonus(true)
							.id(`tfc:anvil/${material.getName()}_knife_butchery_head`)

					}

					//#endregion

					//#region Молот шахтера

					// Декрафт инструмента в жидкость
					let miningHammerItem = ToolHelper.get(GTToolType.MINING_HAMMER, material)
					if (!miningHammerItem.isEmpty()) {

						event.recipes.tfc.heating(miningHammerItem, tfcProperty.getMeltTemp())
							.resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
							.useDurability(true)
							.id(`tfc:heating/metal/${material.getName()}_mining_hammer`)

					}


					let miningHammerHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadMiningHammer, material, 1)
					if (!miningHammerHeadItem.isEmpty()) {

						// Декрафт оголовья в жидкость
						event.recipes.tfc.heating(miningHammerHeadItem, tfcProperty.getMeltTemp())
							.resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
							.id(`tfc:heating/metal/${material.getName()}_mining_hammer_head`)

						// Крафт оголовья
						event.recipes.tfc.anvil(miningHammerHeadItem, doubleIngotItem, ['punch_last', 'shrink_not_last'])
							.tier(tfcProperty.getTier())
							.bonus(true)
							.id(`tfc:anvil/${material.getName()}_mining_hammer_head`)

					}

					//#endregion

					//#region Большая лопата

					// Декрафт инструмента в жидкость
					let spadeItem = ToolHelper.get(GTToolType.SPADE, material)
					if (!spadeItem.isEmpty()) {

						event.recipes.tfc.heating(spadeItem, tfcProperty.getMeltTemp())
							.resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
							.useDurability(true)
							.id(`tfc:heating/metal/${material.getName()}_spade`)

					}

					let spadeHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadSpade, material, 1)
					if (!spadeHeadItem.isEmpty()) {

						// Крафт оголовья
						event.recipes.tfc.anvil(spadeHeadItem, doubleIngotItem, ['punch_last', 'hit_not_last'])
							.tier(tfcProperty.getTier())
							.bonus(true)
							.id(`tfc:anvil/${material.getName()}_spade_head`)

						// Декрафт оголовья в жидкость
						event.recipes.tfc.heating(spadeHeadItem, tfcProperty.getMeltTemp())
							.resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
							.id(`tfc:heating/metal/${material.getName()}_spade_head`)

					}

					//#endregion
				}

			}

			// Rods
			let rodItem = ChemicalHelper.get(TagPrefix.rod, material, 1)
			if (!rodItem.isEmpty()) {

				// Декрафт стержня в жидкость
				event.recipes.tfc.heating(rodItem, tfcProperty.getMeltTemp())
					.resultFluid(Fluid.of(outputMaterial.getFluid(), 72))
					.id(`tfc:heating/metal/${material.getName()}_rod`)

				// Слиток -> 2 Стержня
				event.recipes.tfc.anvil(rodItem.withCount(2), ingotItem, ['draw_last'])
					.tier(tfcProperty.getTier())
					.id(`tfc:anvil/${material.getName()}_rod`)
				
				if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
			    	event.recipes.tfc.casting(rodItem.withCount(1), 'tfg:rod_mold', Fluid.of(outputMaterial.getFluid(), 72), 0.05)
						.id(`tfc:casting/${material.getName()}_rod`)
				}

				// Long Rods
				let longRodItem = ChemicalHelper.get(TagPrefix.rodLong, material, 1)
				if (!longRodItem.isEmpty()) {

					// Декрафт длинного стержня в жидкость
					event.recipes.tfc.heating(longRodItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.id(`tfc:heating/metal/${material.getName()}_long_rod`)

					// Стержни -> Длинный стержень
					event.recipes.tfc.welding(longRodItem, rodItem, rodItem)
						.tier(tfcProperty.getTier())
						.id(`tfc:anvil/${material.getName()}_long_rod`)

					event.recipes.greate.compacting(longRodItem, [rodItem, rodItem, 'tfc:powder/flux'])
						.heated()
						.recipeTier(tfcProperty.getTier() < 4 ? 0 : 1)
						.id(`greate:compacting/${material.getName()}_long_rod`)
				}

				// Bolt
				let boltItem = ChemicalHelper.get(TagPrefix.bolt, material, 1)
				if (!boltItem.isEmpty()) {

					// Болт -> Металл
					event.recipes.tfc.heating(boltItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 18))
						.id(`tfc:heating/metal/${material.getName()}_bolt`)

					// Стержень -> Болт
					event.recipes.tfc.anvil(boltItem.withCount(2), rodItem, ['punch_last', 'draw_second_last', 'draw_third_last'])
						.tier(tfcProperty.getTier())
						.id(`tfc:anvil/${material.getName()}_bolt`)

				}

				// Screw
				let screwItem = ChemicalHelper.get(TagPrefix.screw, material, 1)
				if (!screwItem.isEmpty()) {

					// Винт -> Металл
					event.recipes.tfc.heating(screwItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 16))
						.id(`tfc:heating/metal/${material.getName()}_screw`)

					// Стержень -> Винт
					event.recipes.tfc.anvil(screwItem, rodItem, ['punch_last', 'punch_second_last', 'shrink_third_last'])
						.tier(tfcProperty.getTier())
						.id(`tfc:anvil/${material.getName()}_screw`)

				}

				// Ring
				let ringItem = ChemicalHelper.get(TagPrefix.ring, material, 1)
				if (!ringItem.isEmpty()) {

					// Кольцо -> Металл
					event.recipes.tfc.heating(ringItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 36))
						.id(`tfc:heating/metal/${material.getName()}_ring`)

					// Стержень -> Кольцо
					event.recipes.tfc.anvil(ringItem, rodItem, ['hit_last', 'hit_second_last', 'hit_third_last'])
						.tier(tfcProperty.getTier())
						.id(`tfc:anvil/${material.getName()}_ring`)

				}

				// Spring
				let springItem = ChemicalHelper.get(TagPrefix.spring, material, 1)
				if (!springItem.isEmpty() && !longRodItem.isEmpty()) {

					event.recipes.tfc.heating(springItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.id(`tfc:heating/metal/${material.getName()}_spring`)

					event.recipes.tfc.anvil(springItem, longRodItem, ['hit_last', 'bend_second_last', 'bend_third_last'])
						.tier(tfcProperty.getTier())
						.id(`tfc:anvil/${material.getName()}_spring`)
				}

				// Small spring
				let smallSpringItem = ChemicalHelper.get(TagPrefix.springSmall, material, 1)
				if (!smallSpringItem.isEmpty() && !rodItem.isEmpty()) {

					event.recipes.tfc.heating(smallSpringItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 36))
						.id(`tfc:heating/metal/${material.getName()}_small_spring`)

					event.recipes.tfc.anvil(smallSpringItem, rodItem, ['hit_last', 'bend_second_last', 'bend_third_last'])
						.tier(tfcProperty.getTier())
						.id(`tfc:anvil/${material.getName()}_small_spring`)
				}

				// Nugget
				let nuggetItem = ChemicalHelper.get(TagPrefix.nugget, material, 9)
				if (!nuggetItem.isEmpty()) {

					event.recipes.tfc.heating(nuggetItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144/9))
						.id(`tfc:heating/metal/${material.getName()}_nugget`)

					event.recipes.tfc.anvil(nuggetItem, ingotItem, ['punch_last', 'hit_second_last', 'punch_third_last'])
						.tier(tfcProperty.getTier())
						.id(`tfc:anvil/${material.getName()}_nugget`)
					
					if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
			    		event.recipes.tfc.casting(nuggetItem.withCount(4), 'tfg:nugget_mold', Fluid.of(outputMaterial.getFluid(), 64), 0.05)
							.id(`tfc:casting/${material.getName()}_nugget`)
					}
				}
			}

			// Small Gears
			let smallGearItem = ChemicalHelper.get(TagPrefix.gearSmall, material, 1)
			if (!smallGearItem.isEmpty()) {

				event.recipes.tfc.heating(smallGearItem, tfcProperty.getMeltTemp())
					.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
					.id(`tfc:heating/small_${material.getName()}_gear`)

				event.recipes.tfc.anvil(smallGearItem, `#forge:ingots/${material.getName()}`, ['hit_last', 'shrink_second_last', 'draw_third_last'])
					.tier(tfcProperty.getTier())
					.id(`tfc:anvil/small_${material.getName()}_gear`)
				
				if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
					event.recipes.tfc.casting(smallGearItem, 'tfg:small_gear_mold', Fluid.of(outputMaterial.getFluid(), 144), 0.05)
						.id(`tfc:casting/small_${material.getName()}_gear`)
				}
			}

			// Tools (From Ingot)
			if (material.hasFlag(TFGMaterialFlags.HAS_TFC_TOOL) || material.hasFlag(TFGMaterialFlags.HAS_GT_TOOL)) {

				//#region pickaxe

				// Крафт инструмента
				event.remove({ id: `tfc:crafting/metal/pickaxe/${material.getName()}` })

				// Декрафт инструмента в жидкость
				let pickaxeItem = ToolHelper.get(GTToolType.PICKAXE, material)
				if (!pickaxeItem.isEmpty()) {

					event.recipes.tfc.heating(`gtceu:${material.getName()}_pickaxe`, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.useDurability(true)
						.id(`tfc:heating/metal/${material.getName()}_pickaxe`)

				}

				let pickaxeHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadPickaxe, material, 1)
				if (!pickaxeHeadItem.isEmpty()) {

					// Декрафт оголовья в жидкость
					event.recipes.tfc.heating(pickaxeHeadItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.id(`tfc:heating/metal/${material.getName()}_pickaxe_head`)

					// Крафт оголовья
					event.recipes.tfc.anvil(pickaxeHeadItem, ingotItem, ['punch_last', 'bend_not_last', 'draw_not_last'])
						.tier(tfcProperty.getTier())
						.bonus(true)
						.id(`tfc:anvil/${material.getName()}_pickaxe_head`)

					// Металл + Форма -> Оголовье
					if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
						event.recipes.tfc.casting(pickaxeHeadItem, 'tfc:ceramic/pickaxe_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
							.id(`tfc:casting/${material.getName()}_pickaxe_head`)

						event.recipes.create.filling(
							Item.of('tfc:ceramic/pickaxe_head_mold', getFillingNBT(outputMaterial, 144)),
							[
								Fluid.of(outputMaterial.getFluid(), 144),
								Item.of('tfc:ceramic/pickaxe_head_mold').strongNBT()
							]
						).id(`tfg:tfc/filling/${material.getName()}_pickaxe_head`)
					}

				}
				//#endregion
					
				// #region mattock
				if (!material.hasFlag(TFGMaterialFlags.HAS_GT_TOOL)) {
					event.recipes.tfc.heating(`rnr:metal/mattock/${material.getName()}`, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.useDurability(true)
						.id(`rnr:heating/metal/${material.getName()}_mattock`)

					event.recipes.tfc.heating(`rnr:metal/mattock_head/${material.getName()}`, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.id(`rnr:heating/metal/${material.getName()}_mattock_head`)
				}
				//#endregion
				
				// #region screwdriver
				event.recipes.tfc.heating(`gtceu:${material.getName()}_screwdriver`, tfcProperty.getMeltTemp())
					.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
					.useDurability(true)
					.id(`gtceu:heating/metal/${material.getName()}_screwdriver`)

				event.recipes.tfc.heating(`gtceu:${material.getName()}_screwdriver_tip`, tfcProperty.getMeltTemp())
					.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
					.id(`gtceu:heating/metal/${material.getName()}_screwdriver_tip`)
					
				event.recipes.tfc.anvil(`gtceu:${material.getName()}_screwdriver_tip`, ingotItem, ['draw_last', 'hit_second_last', 'hit_third_last'])
					.tier(tfcProperty.getTier())
					.id(`gtceu:anvil/${material.getName()}_screwdriver_tip`)
				//#endregion
				
				//#region wrench
				event.recipes.tfc.heating(`gtceu:${material.getName()}_wrench`, tfcProperty.getMeltTemp())
					.resultFluid(Fluid.of(outputMaterial.getFluid(), 288 + 144 + 18))
					.useDurability(true)
					.id(`gtceu:heating/metal/${material.getName()}_wrench`)

				event.recipes.tfc.heating(`gtceu:${material.getName()}_wrench_tip`, tfcProperty.getMeltTemp())
					.resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
					.id(`gtceu:heating/metal/${material.getName()}_wrench_tip`)

				event.recipes.tfc.anvil(`gtceu:${material.getName()}_wrench_tip`, doubleIngotItem, ['draw_last', 'hit_second_last', 'hit_third_last'])
					.tier(tfcProperty.getTier())
					.id(`gtceu:anvil/${material.getName()}_wrench_tip`)
				//#endregion

				//#region crowbar
				let crowbarItem = ToolHelper.get(GTToolType.CROWBAR, material)
				if (!crowbarItem.isEmpty()) {
					event.recipes.tfc.heating(crowbarItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 216))
						.useDurability(true)
						.id(`gtceu:heating/metal/${material.getName()}_crowbar`)
				}
				//#endregion

				//#region mortar
				let mortarItem = ToolHelper.get(GTToolType.MORTAR, material)
				if (!mortarItem.isEmpty()) {
					event.recipes.tfc.heating(mortarItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.useDurability(true)
						.id(`gtceu:heating/metal/${material.getName()}_mortar`)
				}
				//#endregion
				
				//#region wire cutters
				event.recipes.tfc.heating(`gtceu:${material.getName()}_wire_cutter`, tfcProperty.getMeltTemp())
					.resultFluid(Fluid.of(outputMaterial.getFluid(), 288 + 144 + 18))
					.useDurability(true)
					.id(`gtceu:heating/metal/${material.getName()}_wire_cutter`)

				event.recipes.tfc.heating(`gtceu:${material.getName()}_wire_cutter_head`, tfcProperty.getMeltTemp())
					.resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
					.id(`gtceu:heating/metal/${material.getName()}_wire_cutter_head`)

				event.recipes.tfc.anvil(`gtceu:${material.getName()}_wire_cutter_head`, doubleIngotItem, ['draw_last', 'hit_second_last', 'hit_third_last'])
					.tier(tfcProperty.getTier())
					.id(`gtceu:anvil/${material.getName()}_wire_cutter_head`)
				//#endregion
				
				//#region axe

				// Крафт инструмента
				event.remove({ id: `tfc:crafting/metal/axe/${material.getName()}` })

				// Декрафт инструмента в жидкость
				let axeItem = ToolHelper.get(GTToolType.AXE, material)
				if (!axeItem.isEmpty()) {

					event.recipes.tfc.heating(axeItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.useDurability(true)
						.id(`tfc:heating/metal/${material.getName()}_axe`)

				}

				let axeHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadAxe, material, 1)
				if (!axeHeadItem.isEmpty()) {
					// Декрафт оголовья в жидкость
					event.recipes.tfc.heating(axeHeadItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.id(`tfc:heating/metal/${material.getName()}_axe_head`)

					// Крафт оголовья
					event.recipes.tfc.anvil(axeHeadItem, ingotItem, ['punch_last', 'hit_second_last', 'upset_third_last'])
						.tier(tfcProperty.getTier())
						.bonus(true)
						.id(`tfc:anvil/${material.getName()}_axe_head`)

					// Металл + Форма -> Оголовье
					if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
						event.recipes.tfc.casting(axeHeadItem, 'tfc:ceramic/axe_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
							.id(`tfc:casting/${material.getName()}_axe_head`)

						event.recipes.create.filling(
							Item.of('tfc:ceramic/axe_head_mold', getFillingNBT(outputMaterial, 144)),
							[
								Fluid.of(outputMaterial.getFluid(), 144),
								Item.of('tfc:ceramic/axe_head_mold').strongNBT()
							]
						).id(`tfg:tfc/filling/${material.getName()}_axe_head`)
					}
				}

				//#endregion

				//#region shovel

				// Крафт инструмента
				event.remove({ id: `tfc:crafting/metal/shovel/${material.getName()}` })

				// Декрафт инструмента в жидкость
				let shovelItem = ToolHelper.get(GTToolType.SHOVEL, material)
				if (!shovelItem.isEmpty()) {

					event.recipes.tfc.heating(shovelItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.useDurability(true)
						.id(`tfc:heating/metal/${material.getName()}_shovel`)

				}

				let shovelHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadShovel, material, 1)
				if (!shovelHeadItem.isEmpty()) {

					// Декрафт оголовья в жидкость
					event.recipes.tfc.heating(shovelHeadItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.id(`tfc:heating/metal/${material.getName()}_shovel_head`)

					// Крафт оголовья
					event.recipes.tfc.anvil(shovelHeadItem, ingotItem, ['punch_last', 'hit_not_last'])
						.tier(tfcProperty.getTier())
						.bonus(true)
						.id(`tfc:anvil/${material.getName()}_shovel_head`)

					// Металл + Форма -> Оголовье
					if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
						event.recipes.tfc.casting(shovelHeadItem, 'tfc:ceramic/shovel_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
							.id(`tfc:casting/${material.getName()}_shovel_head`)

						event.recipes.create.filling(
							Item.of('tfc:ceramic/shovel_head_mold', getFillingNBT(outputMaterial, 144)),
							[
								Fluid.of(outputMaterial.getFluid(), 144),
								Item.of('tfc:ceramic/shovel_head_mold').strongNBT()
							]
						).id(`tfg:tfc/filling/${material.getName()}_shovel_head_mold`)
					}

				}

				//#endregion

				//#region hoe

				// Крафт инструмента
				event.remove({ id: `tfc:crafting/metal/hoe/${material.getName()}` })

				// Декрафт инструмента в жидкость
				let hoeItem = ToolHelper.get(GTToolType.HOE, material)
				if (!hoeItem.isEmpty()) {
					event.recipes.tfc.heating(hoeItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.useDurability(true)
						.id(`tfc:heating/metal/${material.getName()}_hoe`)
				}

				let hoeHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadHoe, material, 1)
				if (!hoeHeadItem.isEmpty()) {

					// Декрафт оголовья в жидкость
					event.recipes.tfc.heating(hoeHeadItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.id(`tfc:heating/metal/${material.getName()}_hoe_head`)

					// Крафт оголовья
					event.recipes.tfc.anvil(hoeHeadItem, ingotItem, ['punch_last', 'hit_not_last', 'bend_not_last'])
						.tier(tfcProperty.getTier())
						.bonus(true)
						.id(`tfc:anvil/${material.getName()}_hoe_head`)

					// Металл + Форма -> Оголовье
					if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
						event.recipes.tfc.casting(hoeHeadItem, 'tfc:ceramic/hoe_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
							.id(`tfc:casting/${material.getName()}_hoe_head`)

						event.recipes.create.filling(
							Item.of('tfc:ceramic/hoe_head_mold', getFillingNBT(outputMaterial, 144)),
							[
								Fluid.of(outputMaterial.getFluid(), 144),
								Item.of('tfc:ceramic/hoe_head_mold').strongNBT()
							]
						).id(`tfg:tfc/filling/${material.getName()}_hoe_head_mold`)
					}

				}

				//#endregion

				//#region crafting hammer

				// Крафт инструмента
				event.remove({ id: `tfc:crafting/metal/hammer/${material.getName()}` })

				// Декрафт инструмента в жидкость
				let hammerItem = ToolHelper.get(GTToolType.HARD_HAMMER, material)
				if (!hammerItem.isEmpty()) {

					event.recipes.tfc.heating(hammerItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.useDurability(true)
						.id(`tfc:heating/metal/${material.getName()}_hammer`)

				}

				let hammerHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadHammer, material, 1)
				if (!hammerHeadItem.isEmpty()) {

					// Декрафт оголовья в жидкость
					event.recipes.tfc.heating(hammerHeadItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.id(`tfc:heating/metal/${material.getName()}_hammer_head`)

					// Крафт оголовья
					event.recipes.tfc.anvil(hammerHeadItem, ingotItem, ['punch_last', 'shrink_not_last'])
						.tier(tfcProperty.getTier())
						.bonus(true)
						.id(`tfc:anvil/${material.getName()}_hammer_head`)

					// Металл + Форма -> Оголовье
					if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
						event.recipes.tfc.casting(hammerHeadItem, 'tfc:ceramic/hammer_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
							.id(`tfc:casting/${material.getName()}_hammer_head`)

						event.recipes.create.filling(
							Item.of('tfc:ceramic/hammer_head_mold', getFillingNBT(outputMaterial, 144)),
							[
								Fluid.of(outputMaterial.getFluid(), 144),
								Item.of('tfc:ceramic/hammer_head_mold').strongNBT()
							]
						).id(`tfg:tfc/filling/${material.getName()}_hammer_head_mold`)
					}

				}

				//#endregion

				//#region saw

				// Крафт инструмента
				event.remove({ id: `tfc:crafting/metal/saw/${material.getName()}` })

				// Декрафт инструмента в жидкость
				let sawItem = ToolHelper.get(GTToolType.SAW, material)
				if (!sawItem.isEmpty()) {

					event.recipes.tfc.heating(sawItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.useDurability(true)
						.id(`tfc:heating/metal/${material.getName()}_saw`)

				}

				let sawHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadSaw, material, 1)
				if (!sawHeadItem.isEmpty()) {

					// Декрафт оголовья в жидкость
					event.recipes.tfc.heating(sawHeadItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.id(`tfc:heating/metal/${material.getName()}_saw_blade`)

					// Крафт оголовья
					event.recipes.tfc.anvil(sawHeadItem, ingotItem, ['hit_last', 'hit_second_last'])
						.tier(tfcProperty.getTier())
						.bonus(true)
						.id(`tfc:anvil/${material.getName()}_saw_blade`)

					// Металл + Форма -> Оголовье
					if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
						event.recipes.tfc.casting(sawHeadItem, 'tfc:ceramic/saw_blade_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
							.id(`tfc:casting/${material.getName()}_saw_blade`)

						event.recipes.create.filling(
							Item.of('tfc:ceramic/saw_blade_mold', getFillingNBT(outputMaterial, 144)),
							[
								Fluid.of(outputMaterial.getFluid(), 144),
								Item.of('tfc:ceramic/saw_blade_mold').strongNBT()
							]
						).id(`tfg:tfc/filling/${material.getName()}_saw_blade_mold`)
					}

				}

				//#endregion

				//#region scythe

				// Крафт инструмента
				event.remove({ id: `tfc:crafting/metal/scythe/${material.getName()}` })

				// Декрафт инструмента в жидкость
				let scytheItem = ToolHelper.get(GTToolType.SCYTHE, material)
				if (!scytheItem.isEmpty()) {
					event.recipes.tfc.heating(scytheItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.useDurability(true)
						.id(`tfc:heating/metal/${material.getName()}_scythe`)
				}

				let scytheHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadScythe, material, 1)
				if (!scytheHeadItem.isEmpty()) {

					// Декрафт оголовья в жидкость
					event.recipes.tfc.heating(scytheHeadItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.id(`tfc:heating/metal/${material.getName()}_scythe_blade`)

					// Крафт оголовья
					event.recipes.tfc.anvil(scytheHeadItem, ingotItem, ['punch_last', 'bend_not_last', 'draw_not_last'])
						.tier(tfcProperty.getTier())
						.bonus(true)
						.id(`tfc:anvil/${material.getName()}_scythe_blade`)

					// Металл + Форма -> Оголовье
					if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
						event.recipes.tfc.casting(scytheHeadItem, 'tfc:ceramic/scythe_blade_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
							.id(`tfc:casting/${material.getName()}_scythe_blade`)

						event.recipes.create.filling(
							Item.of('tfc:ceramic/scythe_blade_mold', getFillingNBT(outputMaterial, 144)),
							[
								Fluid.of(outputMaterial.getFluid(), 144),
								Item.of('tfc:ceramic/scythe_blade_mold').strongNBT()
							]
						).id(`tfg:tfc/filling/${material.getName()}_scythe_blade_mold`)
					}

				}

				//#endregion

				//#region file

				// Декрафт инструмента в жидкость
				let fileItem = ToolHelper.get(GTToolType.FILE, material)
				if (!fileItem.isEmpty()) {
					event.recipes.tfc.heating(fileItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.useDurability(true)
						.id(`tfc:heating/metal/${material.getName()}_file`)
				}

				let fileHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadFile, material, 1)
				if (!fileHeadItem.isEmpty()) {

					// Декрафт оголовья в жидкость
					event.recipes.tfc.heating(fileHeadItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.id(`tfc:heating/metal/${material.getName()}_file_head`)

					// Крафт оголовья
					event.recipes.tfc.anvil(fileHeadItem, ingotItem, ['upset_last', 'bend_not_last', 'punch_not_last'])
						.tier(tfcProperty.getTier())
						.bonus(true)
						.id(`tfc:anvil/${material.getName()}_file_head`)

				}

				//#endregion

				//#region knife

				// Крафт инструмента
				event.remove({ id: `tfc:crafting/metal/knife/${material.getName()}` })

				// Декрафт инструмента в жидкость
				let knifeItem = ToolHelper.get(GTToolType.KNIFE, material)
				if (!knifeItem.isEmpty()) {
					event.recipes.tfc.heating(knifeItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.useDurability(true)
						.id(`tfc:heating/metal/${material.getName()}_knife`)
				}

				let knifeHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadKnife, material, 1)
				if (!knifeHeadItem.isEmpty()) {

					// Декрафт оголовья в жидкость
					event.recipes.tfc.heating(knifeHeadItem, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.id(`tfc:heating/metal/${material.getName()}_knife_blade`)

					// Крафт оголовья
					event.recipes.tfc.anvil(knifeHeadItem, ingotItem, ['punch_last', 'bend_not_last', 'draw_not_last'])
						.tier(tfcProperty.getTier())
						.bonus(true)
						.id(`tfc:anvil/${material.getName()}_knife_blade`)

					// Металл + Форма -> Оголовье
					if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
						event.recipes.tfc.casting(knifeHeadItem, 'tfc:ceramic/knife_blade_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
							.id(`tfc:casting/${material.getName()}_knife_blade`)

						event.recipes.create.filling(
							Item.of('tfc:ceramic/knife_blade_mold', getFillingNBT(outputMaterial, 144)),
							[
								Fluid.of(outputMaterial.getFluid(), 144),
								Item.of('tfc:ceramic/knife_blade_mold').strongNBT()
							]
						).id(`tfg:tfc/filling/${material.getName()}_knife_blade_mold`)
					}

					//#region shears 

					// Сварка оголовий
					if (!material.hasFlag(TFGMaterialFlags.HAS_GT_TOOL)) {
						event.recipes.tfc.welding(`tfc:metal/shears/${material.getName()}`, knifeHeadItem, knifeHeadItem, tfcProperty.getTier())
							.id(`tfc:welding/${material.getName()}_shears`)

						event.recipes.greate.compacting(`tfc:metal/shears/${material.getName()}`, [knifeHeadItem, knifeHeadItem, 'tfc:powder/flux'])
							.heated()
							.recipeTier(tfcProperty.getTier() < 4 ? 0 : 1)
							.id(`greate:compacting/${material.getName()}_shears`)

						// Декрафт инструмента в жидкость
						event.recipes.tfc.heating(`tfc:metal/shears/${material.getName()}`, tfcProperty.getMeltTemp())
							.resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
							.useDurability(true)
							.id(`tfc:heating/metal/${material.getName()}_shears`)

						event.recipes.gtceu.forge_hammer(`tfc:metal/shears/${material.getName()}`)
							.itemInputs(knifeHeadItem.withCount(2))
							.itemOutputs(`tfc:metal/shears/${material.getName()}`)
							.duration(40)
							.EUt(7)
					}
					//#endregion

				}

				//#endregion

				//#region prospector pick

				if (!material.hasFlag(TFGMaterialFlags.HAS_GT_TOOL)) {
					// Декрафт инструмента в жидкость
					event.recipes.tfc.heating(`tfc:metal/propick/${material.getName()}`, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.useDurability(true)
						.id(`tfc:heating/metal/${material.getName()}_propick`)

					// Декрафт оголовья в жидкость
					event.recipes.tfc.heating(`tfc:metal/propick_head/${material.getName()}`, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.id(`tfc:heating/metal/${material.getName()}_propick_head`)

					// Металл + Форма -> Оголовье
					if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
						event.recipes.tfc.casting(`tfc:metal/propick_head/${material.getName()}`, 'tfc:ceramic/propick_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
							.id(`tfc:casting/${material.getName()}_propick_head`)

						event.recipes.create.filling(
							Item.of('tfc:ceramic/propick_head_mold', getFillingNBT(outputMaterial, 144)),
							[
								Fluid.of(outputMaterial.getFluid(), 144),
								Item.of('tfc:ceramic/propick_head_mold').strongNBT()
							]
						).id(`tfg:tfc/filling/${material.getName()}_propick_head_mold`)
					}
				}
				//#endregion

				//#region chisel
				if (!material.hasFlag(TFGMaterialFlags.HAS_GT_TOOL)) {
					// Декрафт инструмента в жидкость
					event.recipes.tfc.heating(`tfc:metal/chisel/${material.getName()}`, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.useDurability(true)
						.id(`tfc:heating/metal/${material.getName()}_chisel`)

					// Декрафт оголовья в жидкость
					event.recipes.tfc.heating(`tfc:metal/chisel_head/${material.getName()}`, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.id(`tfc:heating/metal/${material.getName()}_chisel_head`)

					// Металл + Форма -> Оголовье
					if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
						event.recipes.tfc.casting(`tfc:metal/chisel_head/${material.getName()}`, 'tfc:ceramic/chisel_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
							.id(`tfc:casting/${material.getName()}_chisel_head`)

						event.recipes.create.filling(
							Item.of('tfc:ceramic/chisel_head_mold', getFillingNBT(outputMaterial, 144)),
							[
								Fluid.of(outputMaterial.getFluid(), 144),
								Item.of('tfc:ceramic/chisel_head_mold').strongNBT()
							]
						).id(`tfg:tfc/filling/${material.getName()}_chisel_head_mold`)
					}
				}
				//#endregion

				//#region javelin
				if (!material.hasFlag(TFGMaterialFlags.HAS_GT_TOOL)) {
					// Декрафт инструмента в жидкость
					event.recipes.tfc.heating(`tfc:metal/javelin/${material.getName()}`, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.useDurability(true)
						.id(`tfc:heating/metal/${material.getName()}_javelin`)

					// Декрафт оголовья в жидкость
					event.recipes.tfc.heating(`tfc:metal/javelin_head/${material.getName()}`, tfcProperty.getMeltTemp())
						.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
						.id(`tfc:heating/metal/${material.getName()}_javelin_head`)

					// Металл + Форма -> Оголовье
					if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
						event.recipes.tfc.casting(`tfc:metal/javelin_head/${material.getName()}`, 'tfc:ceramic/javelin_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
							.id(`tfc:casting/${material.getName()}_javelin_head`)

						event.recipes.create.filling(
							Item.of('tfc:ceramic/javelin_head_mold', getFillingNBT(outputMaterial, 144)),
							[
								Fluid.of(outputMaterial.getFluid(), 144),
								Item.of('tfc:ceramic/javelin_head_mold').strongNBT()
							]
						).id(`tfg:tfc/filling/${material.getName()}_javelin_head_mold`)
					}
				}
				//#endregion
			}
		}

		// Blocks
		let blockItem = ChemicalHelper.get(TagPrefix.block, material, 1)
		if (!blockItem.isEmpty()) {

			// Декрафт блока в жидкость
			event.recipes.tfc.heating(`#forge:storage_blocks/${material.getName()}`, tfcProperty.getMeltTemp())
				.resultFluid(Fluid.of(outputMaterial.getFluid(), 1296))
				.id(`tfc:heating/metal/${material.getName()}_storage_block`)

		}

		// Anvils, Lamps, Trapdors, Chains
		if (material.hasFlag(TFGMaterialFlags.HAS_TFC_UTILITY)) {

			// Декрафт незавершенной лампы в жидкость
			event.recipes.tfc.heating(`tfc:metal/unfinished_lamp/${material.getName()}`, tfcProperty.getMeltTemp())
				.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
				.id(`tfc:heating/metal/${material.getName()}_unfinished_lamp`)

			// Декрафт лампы в жидкость
			event.recipes.tfc.heating(`tfc:metal/lamp/${material.getName()}`, tfcProperty.getMeltTemp())
				.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
				.id(`tfc:heating/metal/${material.getName()}_lamp`)

			// Декрафт люка в жидкость
			event.recipes.tfc.heating(`tfc:metal/trapdoor/${material.getName()}`, tfcProperty.getMeltTemp())
				.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
				.id(`tfc:heating/metal/${material.getName()}_trapdoor`)

			let plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1);

			// Люк
			event.recipes.tfc.anvil(`tfc:metal/trapdoor/${material.getName()}`, plateItem,
				['bend_last', 'draw_second_last', 'draw_third_last'])
				.tier(tfcProperty.getTier())
				.id(`tfc:anvil/${material.getName()}_trapdoor`)

			// Декрафт решетки в жидкость
			event.recipes.tfc.heating(`tfc:metal/bars/${material.getName()}`, tfcProperty.getMeltTemp())
				.resultFluid(Fluid.of(outputMaterial.getFluid(), 18))
				.id(`tfc:heating/metal/${material.getName()}_bars`)

			// 8x Решетка
			event.recipes.tfc.anvil(`4x tfc:metal/bars/${material.getName()}`, ingotItem,
				['upset_last', 'punch_second_last', 'punch_third_last'])
				.tier(tfcProperty.getTier())
				.id(`tfc:anvil/${material.getName()}_bars`)

			event.stonecutting(`4x tfc:metal/bars/${material.getName()}`, ingotItem);

			let quarterMap = {};
			quarterMap[material.getName()] = 0.25;
			TFGHelpers.registerMaterialInfo(`tfc:metal/bars/${material.getName()}`, quarterMap)

			// 16x Решетка
			event.recipes.tfc.anvil(`8x tfc:metal/bars/${material.getName()}`, ChemicalHelper.get(TFGTagPrefix.ingotDouble, material, 1),
				['upset_last', 'punch_second_last', 'punch_third_last'])
				.tier(tfcProperty.getTier())
				.id(`tfc:anvil/${material.getName()}_bars_double`)

			// Декрафт цепи в жидкость
			event.recipes.tfc.heating(`tfc:metal/chain/${material.getName()}`, tfcProperty.getMeltTemp())
				.resultFluid(Fluid.of(outputMaterial.getFluid(), 9))
				.id(`tfc:heating/metal/${material.getName()}_chain`)

			// Декрафт наковальни в жидкость
			event.recipes.tfc.heating(`tfc:metal/anvil/${material.getName()}`, tfcProperty.getMeltTemp())
				.resultFluid(Fluid.of(outputMaterial.getFluid(), 2016))
				.id(`tfc:heating/metal/${material.getName()}_anvil`)
		}

		//#region tongs
		let tongsStack = Item.of(`tfchotornot:tongs/${material.getName()}`)
		let tongPartStack = Item.of(`tfchotornot:tong_part/${material.getName()}`)

		if (!tongsStack.isEmpty() && !tongPartStack.isEmpty() && material !== GTMaterials.Iron) {
			// tong parts
			event.recipes.vintageimprovements.curving(tongPartStack, `#forge:rods/long/${material.getName()}`)
				.head('gtceu:rod_extruder_mold')
				.id(`tfg:vi/curving/${material.getName()}_tong`)

			event.recipes.gtceu.extruder(`tfg:${material.getName()}_tong`)
				.itemInputs(`#forge:rods/long/${material.getName()}`)
				.notConsumable('gtceu:rod_extruder_mold')
				.itemOutputs(tongPartStack)
				.duration(material.getMass())
				.EUt(GTValues.VA[GTValues.LV])

			// tongs
			event.recipes.tfc.advanced_shaped_crafting(
				TFC.isp.of(tongsStack).copyForgingBonus(), [
					'AA',
					'BC'
				], {
					A: tongPartStack,
					B: Ingredient.of('#forge:bolts').subtract('gtceu:wood_bolt'),
					C: '#forge:tools/hammers'
				}, 0, 0).id(`tfchotornot:crafting/tongs/${material.getName()}`)

			event.recipes.gtceu.forge_hammer(`tfg:${material.getName()}_tong`)
				.itemInputs(tongPartStack.withCount(2))
				.itemOutputs(tongsStack)
				.duration(material.getMass())
				.EUt(GTValues.VA[GTValues.ULV])

			// tong heating
			event.recipes.tfc.heating(tongPartStack, tfcProperty.getMeltTemp())
				.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
				.id(`tfchotornot:heating/tong_part/${material.getName()}`)

			event.recipes.tfc.heating(tongsStack, tfcProperty.getMeltTemp())
				.resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
				.useDurability(true)
				.id(`tfchotornot:heating/tongs/${material.getName()}`)
		}
		//#endregion

		// Small TFC Ores
		if (material.hasFlag(TFGMaterialFlags.HAS_SMALL_TFC_ORE)) {

			// Workaround for limonite/bismuth
			let materialName = material.getName();
			if (materialName === "yellow_limonite") {
				materialName = "limonite";
			} else if (materialName === "bismuth") {
				materialName = "bismuthinite";
			}

			// Декрафт мелкого кусочка в жидкость
			event.recipes.tfc.heating(`tfc:ore/small_${materialName}`, tfcProperty.getMeltTemp())
				.resultFluid(Fluid.of(outputMaterial.getFluid(), 16))
				.id(`tfc:heating/ore/small_${materialName}`)
		}

		// Small Native TFC Ores
		if (material.hasFlag(TFGMaterialFlags.HAS_SMALL_NATIVE_TFC_ORE)) {
			// Декрафт мелкого кусочка в жидкость
			event.recipes.tfc.heating(`tfc:ore/small_native_${material.getName()}`, tfcProperty.getMeltTemp())
				.resultFluid(Fluid.of(outputMaterial.getFluid(), 16))
				.id(`tfc:heating/ore/small_native_${material.getName()}`)
		}

		// Any Dusts from GTCEu
		if (material.hasProperty(PropertyKey.DUST)) {

			// Декрафт мелкой пыли
			let tinyDust = ChemicalHelper.get(TagPrefix.dustTiny, material, 1)
			if (!tinyDust.isEmpty()) {

				event.recipes.tfc.heating(tinyDust, tfcProperty.getMeltTemp())
					.resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetalProcessed(16, tfcProperty.getPercentOfMaterial())))
					.id(`tfg:heating/tiny_dust/${material.getName()}`)

			}

			// Декрафт средней пыли
			let smallDust = ChemicalHelper.get(TagPrefix.dustSmall, material, 1)
			if (!smallDust.isEmpty()) {

				event.recipes.tfc.heating(smallDust, tfcProperty.getMeltTemp())
					.resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetalProcessed(36, tfcProperty.getPercentOfMaterial())))
					.id(`tfg:heating/small_dust/${material.getName()}`)

			}

			// Декрафт пыли
			let dust = ChemicalHelper.get(TagPrefix.dust, material, 1)
			if (!dust.isEmpty()) {

				event.recipes.tfc.heating(dust, tfcProperty.getMeltTemp())
					.resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetalProcessed(144, tfcProperty.getPercentOfMaterial())))
					.id(`tfg:heating/dust/${material.getName()}`)

			}

			// Декрафт грязной пыли
			let impureDust = ChemicalHelper.get(TagPrefix.dustImpure, material, 1)
			if (!impureDust.isEmpty()) {

				event.recipes.tfc.heating(impureDust, tfcProperty.getMeltTemp())
					.resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetalProcessed(80, tfcProperty.getPercentOfMaterial())))
					.id(`tfg:heating/impure_dust/${material.getName()}`)

			}

			// Декрафт очищенной пыли
			let purifiedDust = ChemicalHelper.get(TagPrefix.dustPure, material, 1)
			if (!purifiedDust.isEmpty()) {

				event.recipes.tfc.heating(purifiedDust, tfcProperty.getMeltTemp())
					.resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetalProcessed(120, tfcProperty.getPercentOfMaterial())))
					.id(`tfg:heating/purified_dust/${material.getName()}`)

			}

		}

		// Any Ores from GTCEu
		if (material.hasProperty(PropertyKey.ORE)) {

			// Декрафт ломанной руды
			let crushedOre = ChemicalHelper.get(TagPrefix.crushed, material, 1)
			if (!crushedOre.isEmpty()) {

				event.recipes.tfc.heating(crushedOre, tfcProperty.getMeltTemp())
					.resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetalProcessed(80, tfcProperty.getPercentOfMaterial())))
					.id(`tfg:heating/crushed_ore/${material.getName()}`)

			}

			// Декрафт ломанной очищенной руды
			let crushedPurifiedOre = ChemicalHelper.get(TagPrefix.crushedPurified, material, 1)
			if (!crushedPurifiedOre.isEmpty()) {

				event.recipes.tfc.heating(crushedPurifiedOre, tfcProperty.getMeltTemp())
					.resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetalProcessed(100, tfcProperty.getPercentOfMaterial())))
					.id(`tfg:heating/crushed_purified_ore/${material.getName()}`)

			}

			// Декрафт центрифугированной ломанной руды
			let crushedRefinedOre = ChemicalHelper.get(TagPrefix.crushedRefined, material, 1)
			if (!crushedRefinedOre.isEmpty()) {

				event.recipes.tfc.heating(crushedRefinedOre, tfcProperty.getMeltTemp())
					.resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetalProcessed(110, tfcProperty.getPercentOfMaterial())))
					.id(`tfg:heating/crushed_refined_ore/${material.getName()}`)

			}

			// Декрафт богатого куска руды
			let richRawOre = ChemicalHelper.get(TFGTagPrefix.richRawOre, material, 1)
			if (!richRawOre.isEmpty()) {

				event.recipes.tfc.heating(richRawOre, tfcProperty.getMeltTemp())
					.resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetal(48, tfcProperty.getPercentOfMaterial())))
					.id(`tfg:heating/rich_raw/${material.getName()}`)
			}

			// Декрафт нормального куска руды
			let normalRawOre = ChemicalHelper.get(TagPrefix.rawOre, material, 1)
			if (!normalRawOre.isEmpty()) {

				event.recipes.tfc.heating(normalRawOre, tfcProperty.getMeltTemp())
					.resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetal(36, tfcProperty.getPercentOfMaterial())))
					.id(`tfg:heating/raw/${material.getName()}`)
			}

			// Декрафт бедного куска руды
			let poorRawOre = ChemicalHelper.get(TFGTagPrefix.poorRawOre, material, 1)
			if (!poorRawOre.isEmpty()) {
				event.recipes.tfc.heating(poorRawOre, tfcProperty.getMeltTemp())
					.resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetal(24, tfcProperty.getPercentOfMaterial())))
					.id(`tfg:heating/poor_raw/${material.getName()}`)
			}
		}

		// Nuggets
		let nuggetItem = ChemicalHelper.get(TagPrefix.nugget, material, 1)
		if (!nuggetItem.isEmpty()) {

			// Декрафт самородков пыли
			event.recipes.tfc.heating(nuggetItem, tfcProperty.getMeltTemp())
				.resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetal(16, tfcProperty.getPercentOfMaterial())))
				.id(`tfg:heating/nugget/${material.getName()}`)
		}
	})
}
