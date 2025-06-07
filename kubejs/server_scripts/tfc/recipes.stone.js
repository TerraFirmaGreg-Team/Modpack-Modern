// priority: 0

function registerTFCStoneRecipes(event) {

	global.TFC_STONE_TYPES.forEach(stone => {

		let stoneMaterial = TFGHelpers.getMaterial(stone);
		let stoneDust = ChemicalHelper.get(TagPrefix.dust, stoneMaterial, 1)
		let smallStoneDust = ChemicalHelper.get(TagPrefix.dustSmall, stoneMaterial, 1)

		// Кирпич (предмет)
		event.recipes.gtceu.cutter(`tfg:tfc/${stone}_loose_to_brick`)
			.itemInputs(`tfc:rock/loose/${stone}`)
			.itemOutputs(`tfc:brick/${stone}`)
			.duration(40)
			.EUt(8)

		//#region Сырой камень

		// Сырой камень -> Сырой камень
		event.recipes.gtceu.rock_breaker(`${stone}_raw`)
			.notConsumable(`tfc:rock/raw/${stone}`)
			.itemOutputs(`tfc:rock/raw/${stone}`)
			.duration(16)
			.EUt(7)

		// Сырой камень -> Булыжник
		event.recipes.gtceu.forge_hammer(`${stone}_raw_to_cobble`)
			.itemInputs(`tfc:rock/raw/${stone}`)
			.itemOutputs(`tfc:rock/cobble/${stone}`)
			.duration(10)
			.EUt(16)

		// ? -> Сырая нажимная пластина
		event.shaped(`tfc:rock/pressure_plate/${stone}`, [
			' B ',
			'CDC',
			' E '
		], {
			B: '#tfc:hammers',
			C: `tfc:rock/raw/${stone}_slab`,
			D: '#forge:small_springs',
			E: '#forge:tools/screwdrivers'
		}).id(`tfc:crafting/rock/${stone}_pressure_plate`)

		event.recipes.gtceu.assembler(`${stone}_raw_pressure_plate`)
			.itemInputs('#forge:small_springs', `2x tfc:rock/raw/${stone}_slab`)
			.circuit(0)
			.itemOutputs(`2x tfc:rock/pressure_plate/${stone}`)
			.duration(50)
			.EUt(2)

		// ? -> Сырая кнопка
		event.remove({ id: `tfc:crafting/rock/${stone}_button` })

		generateCutterRecipe(event, `tfc:rock/pressure_plate/${stone}`, `6x tfc:rock/button/${stone}`, 50, 2, `${stone}_raw_button`)

		// Gravel Crafting
		event.shapeless(`1x tfc:rock/gravel/${stone}`, [
			`4x tfc:rock/loose/${stone}`
		]).id(`tfc:shapeless/loose_${stone}_to_gravel`)

		event.shapeless(`1x tfc:rock/gravel/${stone}`, [
			`4x tfc:rock/mossy_loose/${stone}`
		]).id(`tfc:shapeless/mossy_loose_${stone}_to_gravel`)

		event.shapeless(`16x tfc:rock/loose/${stone}`, [
			`4x tfc:rock/gravel/${stone}`
		]).id(`tfc:shapeless/gravel_to_loose_${stone}`)

		// Cobble Unpacking
		event.recipes.gtceu.packer(`tfc:gtceu/packer/unpacking_mossy_${stone}_cobble_into_loose`)
			.itemInputs(`1x tfc:rock/mossy_cobble/${stone}`)
			.circuit(1)
			.itemOutputs(`4x tfc:rock/mossy_loose/${stone}`)
			.duration(20)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.packer(`tfc:gtceu/packer/unpacking_${stone}_cobble_into_loose`)
			.itemInputs(`1x tfc:rock/cobble/${stone}`)
			.circuit(1)
			.itemOutputs(`4x tfc:rock/loose/${stone}`)
			.duration(20)
			.EUt(GTValues.VA[GTValues.ULV])

		//#endregion
		
		// #region Stonecutting

		// Сырой камень -> Ступени
		event.remove({ id: `tfc:crafting/rock/${stone}_raw_stairs` })

		// Сырой камень -> Плиты
		event.remove({ id: `tfc:crafting/rock/${stone}_raw_slab` })

		// Сырой камень -> Стена
		event.remove({ id: `tfc:crafting/rock/${stone}_raw_wall` })

		// Булыжник -> Ступени
		event.remove({ id: `tfc:crafting/rock/${stone}_cobble_stairs` })

		// Булыжник -> Плиты
		event.remove({ id: `tfc:crafting/rock/${stone}_cobble_slab` })

		// Булыжник -> Стена
		event.remove({ id: `tfc:crafting/rock/${stone}_cobble_wall` })

		// Булыжник -> Ступени
		event.remove({ id: `tfc:crafting/rock/${stone}_smooth_stairs` })

		// Булыжник -> Плиты
		event.remove({ id: `tfc:crafting/rock/${stone}_smooth_slab` })

		// Булыжник -> Стена
		event.remove({ id: `tfc:crafting/rock/${stone}_smooth_wall` })

		// Блок кирпичей -> Ступени
		event.remove({ id: `tfc:crafting/rock/${stone}_bricks_stairs` })

		// Блок кирпичей -> Плиты
		event.remove({ id: `tfc:crafting/rock/${stone}_bricks_slab` })

		// Блок кирпичей -> Стена
		event.remove({ id: `tfc:crafting/rock/${stone}_bricks_wall` })

		// Потрескавшийся кирпич -> Ступени
		event.remove({ id: `tfc:crafting/rock/${stone}_cracked_bricks_stairs` })

		// Потрескавшийся кирпич -> Плиты
		event.remove({ id: `tfc:crafting/rock/${stone}_cracked_bricks_slab` })

		// Потрескавшийся кирпич -> Стена
		event.remove({ id: `tfc:crafting/rock/${stone}_cracked_bricks_wall` })

		// Замшелый булыжник -> Ступени
		event.remove({ id: `tfc:crafting/rock/${stone}_mossy_cobble_stairs` })

		//Замшелый булыжник -> Плиты
		event.remove({ id: `tfc:crafting/rock/${stone}_mossy_cobble_slab` })

		// Замшелый булыжник -> Стена
		event.remove({ id: `tfc:crafting/rock/${stone}_mossy_cobble_wall` })

		// Замшелый булыжник -> Ступени
		event.remove({ id: `tfc:crafting/rock/${stone}_mossy_bricks_stairs` })

		//Замшелый булыжник -> Плиты
		event.remove({ id: `tfc:crafting/rock/${stone}_mossy_bricks_slab` })

		// Замшелый булыжник -> Стена
		event.remove({ id: `tfc:crafting/rock/${stone}_mossy_bricks_wall` })

		// Укрепленный сырой камень -> Гладкий
		event.stonecutting(`tfc:rock/smooth/${stone}`, `tfc:rock/hardened/${stone}`).id(`hardened_${stone}_to_smooth`)

		// Блок кирпичей -> Резной кирпич
		event.stonecutting(`tfc:rock/chiseled/${stone}`, `tfc:rock/bricks/${stone}`).id(`chiseled_${stone}`)

		// #endregion

		//#region Булыжник

		// Булыжник -> Булыжник
		event.recipes.gtceu.rock_breaker(`${stone}_cobble`)
			.notConsumable(`tfc:rock/cobble/${stone}`)
			.itemOutputs(`tfc:rock/cobble/${stone}`)
			.duration(16)
			.EUt(7)

		// Булыжник -> Гравий
		event.recipes.gtceu.forge_hammer(`${stone}_cobble_to_gravel`)
			.itemInputs(`tfc:rock/cobble/${stone}`)
			.itemOutputs(`tfc:rock/gravel/${stone}`)
			.duration(10)
			.EUt(16)

		// Камни -> Булыжник
		event.shaped(`tfc:rock/cobble/${stone}`, [
			'ABA',
			'BAB',
			'ABA'
		], {
			A: `tfc:rock/loose/${stone}`,
			B: '#tfc:mortar'
		}).id(`tfc:crafting/rock/${stone}_loose_rocks_to_cobble`)

		event.recipes.gtceu.assembler(`${stone}_loose_rocks_to_cobble`)
			.itemInputs(`4x tfc:rock/loose/${stone}`)
			.circuit(2)
			.inputFluids(Fluid.of('gtceu:concrete', 72))
			.itemOutputs(`tfc:rock/cobble/${stone}`)
			.duration(50)
			.EUt(2)

		// #endregion


		//#region Кирпич -> Блок кирпичей

		event.recipes.gtceu.assembler(`bricks_${stone}`)
			.itemInputs(`5x tfc:brick/${stone}`)
			.circuit(1)
			.inputFluids(Fluid.of('gtceu:concrete', 72))
			.itemOutputs(`4x tfc:rock/bricks/${stone}`)
			.duration(50)
			.EUt(2)

		//#endregion

		//#region Кирпич -> Потрескавшийся кирпич

		event.recipes.gtceu.forge_hammer(`cracked_bricks_${stone}`)
			.itemInputs(`tfc:rock/bricks/${stone}`)
			.itemOutputs(`tfc:rock/cracked_bricks/${stone}`)
			.duration(25)
			.EUt(8)

		//#endregion

		//#region Замшелый булыжник

		// Булыжник -> Замшелый булыжник
		event.shaped(`tfc:rock/mossy_cobble/${stone}`, [
			'ABA',
			'BAB',
			'ABA'
		], {
			A: `tfc:rock/mossy_loose/${stone}`,
			B: '#tfc:mortar'
		}).id(`tfc:crafting/rock/${stone}_mossy_loose_rocks_to_cobble`)

		event.recipes.gtceu.assembler(`${stone}_mossy_loose_rocks_to_mossy_cobble`)
			.itemInputs(`4x tfc:rock/mossy_loose/${stone}`)
			.circuit(0)
			.inputFluids(Fluid.of('gtceu:concrete', 72))
			.itemOutputs(`tfc:rock/mossy_cobble/${stone}`)
			.duration(50)
			.EUt(2)

		event.recipes.gtceu.assembler(`${stone}_cobble_rocks_to_mossy_cobble`)
			.itemInputs(`tfc:rock/cobble/${stone}`, '#tfc:compost_greens_low')
			.circuit(0)
			.inputFluids(Fluid.of('minecraft:water', 144))
			.itemOutputs(`tfc:rock/mossy_cobble/${stone}`)
			.duration(50)
			.EUt(2)

		//#endregion

		//#region Блок кирпичей -> Замшелый кирпич

		event.recipes.gtceu.assembler(`mossy_bricks_${stone}`)
			.itemInputs(`tfc:rock/bricks/${stone}`, '#tfc:compost_greens_low')
			.circuit(0)
			.inputFluids(Fluid.of('minecraft:water', 144))
			.itemOutputs(`tfc:rock/mossy_bricks/${stone}`)
			.duration(50)
			.EUt(2)

		//#endregion

		//#region Укрепленный камень

		event.recipes.gtceu.assembler(`hardened_${stone}`)
			.itemInputs(`5x tfc:rock/raw/${stone}`)
			.circuit(0)
			.inputFluids(Fluid.of('gtceu:concrete', 72))
			.itemOutputs(`2x tfc:rock/hardened/${stone}`)
			.duration(250)
			.EUt(8)

		//#endregion

		//#region Акведук

		event.recipes.gtceu.assembler(`aqueduct_${stone}`)
			.itemInputs(`3x tfc:brick/${stone}`)
			.circuit(0)
			.inputFluids(Fluid.of('gtceu:concrete', 16))
			.itemOutputs(`tfc:rock/aqueduct/${stone}`)
			.duration(50)
			.EUt(2)

		//#endregion

		//#region Декрафт блоков камня в пыль

		//#region Целый блок

		// Сырой
		event.recipes.gtceu.macerator(`raw_${stone}_to_dust`)
			.itemInputs(`tfc:rock/raw/${stone}`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Булыжник
		event.recipes.gtceu.macerator(`cobble_${stone}_to_dust`)
			.itemInputs(`tfc:rock/cobble/${stone}`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Гладкий
		event.recipes.gtceu.macerator(`smooth_${stone}_to_dust`)
			.itemInputs(`tfc:rock/smooth/${stone}`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Кирпичи
		event.recipes.gtceu.macerator(`bricks_${stone}_to_dust`)
			.itemInputs(`tfc:rock/bricks/${stone}`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Потрескавшиеся кирпичи
		event.recipes.gtceu.macerator(`cracked_bricks_${stone}_to_dust`)
			.itemInputs(`tfc:rock/cracked_bricks/${stone}`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Замшелый булыжник
		event.recipes.gtceu.macerator(`mossy_cobble_${stone}_to_dust`)
			.itemInputs(`tfc:rock/mossy_cobble/${stone}`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Замшелый кирпич
		event.recipes.gtceu.macerator(`mossy_bricks_${stone}_to_dust`)
			.itemInputs(`tfc:rock/mossy_bricks/${stone}`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		//#endregion

		//#region Ступень

		// Сырой
		event.recipes.gtceu.macerator(`raw_stairs_${stone}_to_dust`)
			.itemInputs(`tfc:rock/raw/${stone}_stairs`)
			.itemOutputs(smallStoneDust.withCount(6))
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Булыжник
		event.recipes.gtceu.macerator(`cobble_stairs_${stone}_to_dust`)
			.itemInputs(`tfc:rock/cobble/${stone}_stairs`)
			.itemOutputs(smallStoneDust.withCount(6))
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Гладкий
		event.recipes.gtceu.macerator(`smooth_stairs_${stone}_to_dust`)
			.itemInputs(`tfc:rock/smooth/${stone}_stairs`)
			.itemOutputs(smallStoneDust.withCount(6))
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Кирпичи
		event.recipes.gtceu.macerator(`bricks_stairs_${stone}_to_dust`)
			.itemInputs(`tfc:rock/bricks/${stone}_stairs`)
			.itemOutputs(smallStoneDust.withCount(6))
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Потрескавшиеся кирпичи
		event.recipes.gtceu.macerator(`cracked_bricks_stairs_${stone}_to_dust`)
			.itemInputs(`tfc:rock/cracked_bricks/${stone}_stairs`)
			.itemOutputs(smallStoneDust.withCount(6))
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Замшелый булыжник
		event.recipes.gtceu.macerator(`mossy_cobble_stairs_${stone}_to_dust`)
			.itemInputs(`tfc:rock/mossy_cobble/${stone}_stairs`)
			.itemOutputs(smallStoneDust.withCount(6))
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Замшелый кирпич
		event.recipes.gtceu.macerator(`mossy_bricks_stairs_${stone}_to_dust`)
			.itemInputs(`tfc:rock/mossy_bricks/${stone}_stairs`)
			.itemOutputs(smallStoneDust.withCount(6))
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		//#endregion

		//#region Плита

		// Сырой
		event.recipes.gtceu.macerator(`raw_slab_${stone}_to_dust`)
			.itemInputs(`tfc:rock/raw/${stone}_slab`)
			.itemOutputs(smallStoneDust.withCount(2))
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Булыжник
		event.recipes.gtceu.macerator(`cobble_slab_${stone}_to_dust`)
			.itemInputs(`tfc:rock/cobble/${stone}_slab`)
			.itemOutputs(smallStoneDust.withCount(2))
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Гладкий
		event.recipes.gtceu.macerator(`smooth_slab_${stone}_to_dust`)
			.itemInputs(`tfc:rock/smooth/${stone}_slab`)
			.itemOutputs(smallStoneDust.withCount(2))
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Кирпичи
		event.recipes.gtceu.macerator(`bricks_slab_${stone}_to_dust`)
			.itemInputs(`tfc:rock/bricks/${stone}_slab`)
			.itemOutputs(smallStoneDust.withCount(2))
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Потрескавшиеся кирпичи
		event.recipes.gtceu.macerator(`cracked_bricks_slab_${stone}_to_dust`)
			.itemInputs(`tfc:rock/cracked_bricks/${stone}_slab`)
			.itemOutputs(smallStoneDust.withCount(2))
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Замшелый булыжник
		event.recipes.gtceu.macerator(`mossy_cobble_slab_${stone}_to_dust`)
			.itemInputs(`tfc:rock/mossy_cobble/${stone}_slab`)
			.itemOutputs(smallStoneDust.withCount(2))
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Замшелый кирпич
		event.recipes.gtceu.macerator(`mossy_bricks_slab_${stone}_to_dust`)
			.itemInputs(`tfc:rock/mossy_bricks/${stone}_slab`)
			.itemOutputs(smallStoneDust.withCount(2))
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		//#endregion

		//#region Стена

		event.recipes.tfc.chisel(`tfc:rock/raw/${stone}_wall`, `tfc:rock/raw/${stone}_slab`, 'smooth')
		event.recipes.tfc.chisel(`tfc:rock/cobble/${stone}_wall`, `tfc:rock/cobble/${stone}_slab`, 'smooth')
		event.recipes.tfc.chisel(`tfc:rock/smooth/${stone}_wall`, `tfc:rock/smooth/${stone}_slab`, 'smooth')
		event.recipes.tfc.chisel(`tfc:rock/bricks/${stone}_wall`, `tfc:rock/bricks/${stone}_slab`, 'smooth')
		event.recipes.tfc.chisel(`tfc:rock/cracked_bricks/${stone}_wall`, `tfc:rock/cracked_bricks/${stone}_slab`, 'smooth')
		event.recipes.tfc.chisel(`tfc:rock/mossy_cobble/${stone}_wall`, `tfc:rock/mossy_cobble/${stone}_slab`, 'smooth')
		event.recipes.tfc.chisel(`tfc:rock/mossy_bricks/${stone}_wall`, `tfc:rock/mossy_bricks/${stone}_slab`, 'smooth')

		// Сырой
		event.recipes.gtceu.macerator(`raw_wall_${stone}_to_dust`)
			.itemInputs(`tfc:rock/raw/${stone}_wall`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Булыжник
		event.recipes.gtceu.macerator(`cobble_wall_${stone}_to_dust`)
			.itemInputs(`tfc:rock/cobble/${stone}_wall`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Гладкий
		event.recipes.gtceu.macerator(`smooth_wall_${stone}_to_dust`)
			.itemInputs(`tfc:rock/smooth/${stone}_wall`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Кирпичи
		event.recipes.gtceu.macerator(`bricks_wall_${stone}_to_dust`)
			.itemInputs(`tfc:rock/bricks/${stone}_wall`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Потрескавшиеся кирпичи
		event.recipes.gtceu.macerator(`cracked_bricks_wall_${stone}_to_dust`)
			.itemInputs(`tfc:rock/cracked_bricks/${stone}_wall`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Замшелый булыжник
		event.recipes.gtceu.macerator(`mossy_cobble_wall_${stone}_to_dust`)
			.itemInputs(`tfc:rock/mossy_cobble/${stone}_wall`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Замшелый кирпич
		event.recipes.gtceu.macerator(`mossy_bricks_wall_${stone}_to_dust`)
			.itemInputs(`tfc:rock/mossy_bricks/${stone}_wall`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		//#endregion

		// Резной кирпич
		event.recipes.gtceu.macerator(`chiseled_${stone}_to_dust`)
			.itemInputs(`tfc:rock/chiseled/${stone}`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Укрепленный
		event.recipes.gtceu.macerator(`hardened_${stone}_to_dust`)
			.itemInputs(`tfc:rock/hardened/${stone}`)
			.itemOutputs(stoneDust.withCount(2))
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		//#endregion


		event.custom({
			type: "tfc:collapse",
			ingredient: {
				tag: `forge:ores_in_ground/${stone}`
			},
			result: `tfc:rock/cobble/${stone}`
		}).id(`tfg:collapse/${stone}_gt_ores`)
	})


	// #region Rock decomposition recipes

	let oxygenFluid = GTMaterials.Oxygen.getFluid();

	// Replacements

	event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_blackstone' })

	event.recipes.gtceu.centrifuge('gtceu:decomposition_centrifuging__diorite')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Diorite, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Mirabilite, 1), 2000, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Clay, 1), 7000, 700)
		.outputFluids(Fluid.of(oxygenFluid, 5))

	event.recipes.gtceu.centrifuge('gtceu:decomposition_centrifuging__marble')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Marble, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Magnesium, 1), 1500, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Calcite, 1), 8000, 700)
		.outputFluids(Fluid.of(oxygenFluid, 12))

	event.recipes.gtceu.centrifuge('gtceu:decomposition_centrifuging__andesite')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Andesite, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Asbestos, 1), 8000, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Saltpeter, 1), 2000, 700)

	event.recipes.gtceu.centrifuge('gtceu:decomposition_centrifuging__basalt')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Basalt, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Olivine, 1), 1700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Calcite, 1), 1700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Flint, 1), 5000, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dust, GTMaterials.DarkAsh, 1), 2500, 700)

	event.recipes.gtceu.centrifuge('gtceu:decomposition_centrifuging__granite')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Granite, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.SiliconDioxide, 1), 8000, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Redrock, 1), 2000, 700)
		.outputFluids(Fluid.of(oxygenFluid, 5))

	event.recipes.gtceu.centrifuge('gtceu:decomposition_centrifuging__deepslate')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Deepslate, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.SiliconDioxide, 1), 8000, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Biotite, 1), 2000, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Stone, 1), 3700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1), 3700, 700)
		.outputFluids(Fluid.of(oxygenFluid, 12))

	event.recipes.gtceu.centrifuge('blackstone_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Blackstone, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dust, GTMaterials.DarkAsh, 1), 2500, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Calcium, 1), 3700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Sodium, 1), 6700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Magnesium, 1), 4700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1), 3700, 700)
		.outputFluids(Fluid.of(oxygenFluid, 16))

	// TFC

	event.recipes.gtceu.centrifuge('gabbro_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('gabbro'), 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Iron, 1), 3700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Rutile, 1), 2700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1), 1700, 700)

	event.recipes.gtceu.centrifuge('shale_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('shale'), 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Sodium, 1), 7500, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1), 1500, 700)
		.outputFluids(Fluid.of(oxygenFluid, 16))

	event.recipes.gtceu.centrifuge('claystone_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('claystone'), 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Bauxite, 1), 6700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Silicon, 1), 6700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Hematite, 1), 6700, 700)
		.outputFluids(Fluid.of(oxygenFluid, 5))

	event.recipes.gtceu.centrifuge('limestone_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('limestone'), 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Calcium, 1), 8700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1), 1700, 700)
		.outputFluids(Fluid.of(oxygenFluid, 36))

	event.recipes.gtceu.centrifuge('conglomerate_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('conglomerate'), 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Hematite, 1), 6700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Silicon, 1), 4700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.TricalciumPhosphate, 1), 3700, 700)
		.outputFluids(Fluid.of(oxygenFluid, 5))

	event.recipes.gtceu.centrifuge('dolomite_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('dolomite'), 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Magnesium, 1), 6700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Calcium, 1), 5700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1), 3700, 700)
		.outputFluids(Fluid.of(oxygenFluid, 16))

	event.recipes.gtceu.centrifuge('chert_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('chert'), 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Silicon, 1), 6700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1), 3700, 700)
		.outputFluids(Fluid.of(oxygenFluid, 24))

	event.recipes.gtceu.centrifuge('chalk_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('chalk'), 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Calcium, 1), 6700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Carbon, 1), 3700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1), 1700, 700)
		.outputFluids(Fluid.of(oxygenFluid, 12))

	event.recipes.gtceu.centrifuge('rhyolite_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('rhyolite'), 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.SiliconDioxide, 1), 8700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1), 800, 700)

	event.recipes.gtceu.centrifuge('dacite_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('dacite'), 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Sodium, 1), 6700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Calcium, 1), 5700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.SiliconDioxide, 1), 4700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Kyanite, 1), 3700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1), 1500, 700)
		.outputFluids(Fluid.of(oxygenFluid, 12))

	event.recipes.gtceu.centrifuge('slate_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('slate'), 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.SiliconDioxide, 1), 4700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1), 3700, 700)
		.outputFluids(Fluid.of(oxygenFluid, 24))

	event.recipes.gtceu.centrifuge('phyllite_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('phyllite'), 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Quartzite, 1), 5700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.CalciumChloride, 1), 1700, 700)
		.outputFluids(Fluid.of(oxygenFluid, 5))

	event.recipes.gtceu.centrifuge('schist_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('schist'), 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Mica, 1), 6700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Talc, 1), 5700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Graphite, 1), 4700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1), 780, 700)
		.outputFluids(Fluid.of(oxygenFluid, 12))

	event.recipes.gtceu.centrifuge('gneiss_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('gneiss'), 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Quartzite, 1), 6700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Biotite, 1), 3700, 700)
		.outputFluids(Fluid.of(oxygenFluid, 5))

	event.recipes.gtceu.centrifuge('dripstone_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('dripstone'), 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.CalciumCarbonate, 1), 8700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.CalciumHydroxide, 1), 1700, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.SiliconDioxide, 1), 4700, 700)
		.outputFluids(Fluid.of(oxygenFluid, 12))

	// Misc dust

	event.recipes.gtceu.centrifuge('gtceu:quartz_sand_separation')
		.EUt(30)
		.duration(60)
		.itemInputs('2x gtceu:quartz_sand_dust')
		.itemOutputs('gtceu:quartzite_dust')
		.chancedOutput('#forge:dust/nether_quartz', 2000, 200)

	// #endregion
}