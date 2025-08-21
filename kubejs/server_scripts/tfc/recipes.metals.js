// priority: 0
"use strict";

function registerTFCMetalsRecipes(event) {

	//#region Alloying

	// Fix ratios of TFC alloys to match GT's

	event.recipes.tfc.alloy('tfc:bronze', [
		TFC.alloyPart('tfc:copper', 0.7, 0.8),
		TFC.alloyPart('tfc:tin', 0.2, 0.3)
	]).id('tfc:alloy/bronze')

	event.recipes.tfc.alloy('tfc:brass', [
		TFC.alloyPart('tfc:copper', 0.7, 0.8),
		TFC.alloyPart('tfc:zinc', 0.2, 0.3)
	]).id('tfc:alloy/brass')

	// New alloys

	event.recipes.tfc.alloy('tfg:red_alloy', [
		TFC.alloyPart('tfg:redstone', 0.75, 0.85),
		TFC.alloyPart('tfc:copper', 0.15, 0.25)
	]).id('tfg:alloy/red_alloy')

	event.recipes.tfc.alloy('tfg:tin_alloy', [
		TFC.alloyPart('tfc:tin', 0.45, 0.55),
		TFC.alloyPart('tfc:cast_iron', 0.45, 0.55)
	]).id('tfg:alloy/tin_alloy')

	event.recipes.tfc.alloy('tfg:invar', [
		TFC.alloyPart('tfc:nickel', 0.60, 0.70),
		TFC.alloyPart('tfc:cast_iron', 0.30, 0.40)
	]).id('tfg:alloy/invar')

	event.recipes.tfc.alloy('tfg:potin', [
		TFC.alloyPart('tfc:copper', 0.63, 0.69),
		TFC.alloyPart('tfc:tin', 0.19, 0.25),
		TFC.alloyPart('tfg:lead', 0.08, 0.14)
	]).id('tfg:alloy/potin')

	event.recipes.tfc.alloy('tfg:cobalt_brass', [
		TFC.alloyPart('tfc:brass', 0.74, 0.81),
		TFC.alloyPart('tfg:cobalt', 0.08, 0.14),
		TFC.alloyPart('tfg:aluminium_silicate', 0.08, 0.14)
	]).id('tfg:alloy/cobalt_brass')

	//#endregion


	//#region Фикс рецептов колоколов

	//#region Из золота

	event.recipes.tfc.casting(`minecraft:bell`, 'tfc:ceramic/bell_mold', Fluid.of('gtceu:gold', 144), 1)
		.id(`tfc:casting/gold_bell`)

	event.recipes.tfc.heating(`minecraft:bell`, 1060)
		.resultFluid(Fluid.of('gtceu:gold', 144))
		.id(`tfc:heating/gold_bell`)

	event.recipes.create.filling(
		Item.of('tfc:ceramic/bell_mold', getFillingNBT(GTMaterials.Gold, 144)),
		[
			Fluid.of(GTMaterials.Gold.getFluid(), 144),
			Item.of('tfc:ceramic/bell_mold').strongNBT()
		]
	).id(`tfg:tfc/filling/${GTMaterials.Gold.getName()}_bell_mold`)

	//#endregion

	//#region Из латуни

	event.recipes.tfc.casting(`tfc:brass_bell`, 'tfc:ceramic/bell_mold', Fluid.of('gtceu:brass', 144), 1)
		.id(`tfc:casting/brass_bell`)

	event.recipes.tfc.heating(`tfc:brass_bell`, 930)
		.resultFluid(Fluid.of('gtceu:brass', 144))
		.id(`tfc:heating/brass_bell`)

	event.recipes.create.filling(
		Item.of('tfc:ceramic/bell_mold', getFillingNBT(GTMaterials.Brass, 144)),
		[
			Fluid.of(GTMaterials.Brass.getFluid(), 144),
			Item.of('tfc:ceramic/bell_mold').strongNBT()
		]
	).id(`tfg:tfc/filling/${GTMaterials.Brass.getName()}_bell_mold`)

	//#endregion

	//#region Из бронзы

	event.recipes.tfc.casting(`tfc:bronze_bell`, 'tfc:ceramic/bell_mold', Fluid.of('gtceu:bronze', 144), 1)
		.id(`tfc:casting/bronze_bell`)

	event.recipes.tfc.heating(`tfc:bronze_bell`, 930)
		.resultFluid(Fluid.of('gtceu:bronze', 144))
		.id(`tfc:heating/bronze_bell`)

	event.recipes.create.filling(
		Item.of('tfc:ceramic/bell_mold', getFillingNBT(GTMaterials.Bronze, 144)),
		[
			Fluid.of(GTMaterials.Bronze.getFluid(), 144),
			Item.of('tfc:ceramic/bell_mold').strongNBT()
		]
	).id(`tfg:tfc/filling/${GTMaterials.Bronze.getName()}_bell_mold`)

	//#endregion

	//#endregion

	//#region Рецепты ковки TFC слитков в GT машинах

	// Сырая крица -> Укрепленная крица
	event.recipes.gtceu.forge_hammer('tfg/refined_bloom')
		.itemInputs('tfc:raw_iron_bloom')
		.itemOutputs('tfc:refined_iron_bloom')
		.duration(200)
		.EUt(4)

	// Укрепленная крица -> Слиток кованного железа
	event.recipes.gtceu.forge_hammer('tfg/wrought_iron_ingot')
		.itemInputs('tfc:refined_iron_bloom')
		.itemOutputs('gtceu:wrought_iron_ingot')
		.duration(200)
		.EUt(4)

	// Чугун -> Высокоуглеродная сталь
	event.recipes.gtceu.forge_hammer('tfg/high_carbon_steel')
		.itemInputs('tfc:metal/ingot/pig_iron')
		.itemOutputs('tfc:metal/ingot/high_carbon_steel')
		.duration(300)
		.EUt(4)

	// Высокоуглеродная сталь -> Cталь
	event.recipes.gtceu.forge_hammer('tfg/steel')
		.itemInputs('tfc:metal/ingot/high_carbon_steel')
		.itemOutputs('gtceu:steel_ingot')
		.duration(300)
		.EUt(4)

	// Высокоуглеродная черная сталь -> черная сталь 
	event.recipes.gtceu.forge_hammer('tfg/black_steel')
		.itemInputs('tfc:metal/ingot/high_carbon_black_steel')
		.itemOutputs('tfc:metal/ingot/black_steel')
		.duration(300)
		.EUt(4)

	// Высокоуглеродная синяя сталь -> синяя сталь 
	event.recipes.gtceu.forge_hammer('tfg/blue_steel')
		.itemInputs('tfc:metal/ingot/high_carbon_blue_steel')
		.itemOutputs('tfc:metal/ingot/blue_steel')
		.duration(400)
		.EUt(4)

	// Высокоуглеродная красная сталь -> красная сталь 
	event.recipes.gtceu.forge_hammer('tfg/red_steel')
		.itemInputs('tfc:metal/ingot/high_carbon_red_steel')
		.itemOutputs('tfc:metal/ingot/red_steel')
		.duration(400)
		.EUt(4)

	// Слабая сталь + Чугун -> Высокоуглеродная черная сталь
	event.recipes.greate.compacting('tfc:metal/ingot/high_carbon_black_steel',
		['tfc:metal/ingot/weak_steel', 'tfc:metal/ingot/pig_iron', 'tfc:powder/flux'])
		.heated()
		.recipeTier(1)
		.id(`greate:compacting/high_carbon_black_steel`)

	event.recipes.gtceu.alloy_smelter('tfg/high_carbon_black_steel')
		.itemInputs('tfc:metal/ingot/weak_steel', 'tfc:metal/ingot/pig_iron')
		.itemOutputs('2x tfc:metal/ingot/high_carbon_black_steel')
		.duration(600)
		.EUt(4)

	// Слабая синяя сталь + Черная сталь -> Высокоуглеродная синяя сталь
	event.recipes.greate.compacting('tfc:metal/ingot/high_carbon_blue_steel',
		['tfc:metal/ingot/weak_blue_steel', 'tfc:metal/ingot/black_steel', 'tfc:powder/flux'])
		.heated()
		.recipeTier(1)
		.id(`greate:compacting/high_carbon_blue_steel`)

	event.recipes.gtceu.alloy_smelter('tfg/high_carbon_blue_steel')
		.itemInputs('tfc:metal/ingot/weak_blue_steel', 'tfc:metal/ingot/black_steel')
		.itemOutputs('2x tfc:metal/ingot/high_carbon_blue_steel')
		.duration(700)
		.EUt(4)

	// Слабая красная сталь + Черная сталь -> Высокоуглеродная красная сталь
	event.recipes.greate.compacting('tfc:metal/ingot/high_carbon_red_steel',
		['tfc:metal/ingot/weak_red_steel', 'tfc:metal/ingot/black_steel', 'tfc:powder/flux'])
		.heated()
		.recipeTier(1)
		.id(`greate:compacting/high_carbon_red_steel`)

	event.recipes.gtceu.alloy_smelter('tfg/high_carbon_red_steel')
		.itemInputs('tfc:metal/ingot/weak_red_steel', 'tfc:metal/ingot/black_steel')
		.itemOutputs('2x tfc:metal/ingot/high_carbon_red_steel')
		.duration(700)
		.EUt(4)

	// Rose Gold + Sterling Silver
	const copper_types = [
		"#forge:ingots/copper",
		"#forge:dusts/copper",
		"#forge:ingots/annealed_copper",
		"#forge:dusts/annealed_copper"
	];
	const gold_types = [
		"#forge:ingots/gold",
		"#forge:dusts/gold"
	];
	const silver_types = [
		"#forge:ingots/silver",
		"#forge:dusts/silver"
	];

	copper_types.forEach(copper_types_array => {
		gold_types.forEach(gold_types_array => {
			event.recipes.gtceu.alloy_smelter(`rose_gold_from_${copper_types_array.replace(/:/g, "/").replace(/#/g, "")}_and_${gold_types_array.replace(/:/g, "/").replace(/#/g, "")}`)
				.itemInputs(Ingredient.of(copper_types_array).withCount(1), Ingredient.of(gold_types_array).withCount(4))
				.itemOutputs(ChemicalHelper.get(TagPrefix.ingot, GTMaterials.RoseGold, 5))
				.duration(20*10)
				.EUt(GTValues.VA[GTValues.LV])
		});
		silver_types.forEach(silver_types_array => {
			event.recipes.gtceu.alloy_smelter(`sterling_silver_from_${copper_types_array.replace(/:/g, "/").replace(/#/g, "")}_and_${silver_types_array.replace(/:/g, "/").replace(/#/g, "")}`)
				.itemInputs(Ingredient.of(copper_types_array).withCount(1), Ingredient.of(silver_types_array).withCount(4))
				.itemOutputs(ChemicalHelper.get(TagPrefix.ingot, GTMaterials.SterlingSilver, 5))
				.duration(20*10)
				.EUt(GTValues.VA[GTValues.LV])
		});
	});


	const TFC_INTERMEDIATE_METALS =
		[
			{ metal: 'pig_iron', meltTemp: 1535 },
			{ metal: 'high_carbon_steel', meltTemp: 1540 },
			{ metal: 'high_carbon_black_steel', meltTemp: 1540 },
			{ metal: 'high_carbon_red_steel', meltTemp: 1540 },
			{ metal: 'high_carbon_blue_steel', meltTemp: 1540 },
			{ metal: 'weak_steel', meltTemp: 1540 },
			{ metal: 'weak_blue_steel', meltTemp: 1540 },
			{ metal: 'weak_red_steel', meltTemp: 1540 },
			{ metal: 'unknown', meltTemp: 400 }
		]

	TFC_INTERMEDIATE_METALS.forEach(x => {

		event.recipes.tfc.casting(`tfc:metal/ingot/${x.metal}`, 'tfc:ceramic/ingot_mold', Fluid.of(`tfc:metal/${x.metal}`, 144), 0.1)
			.id(`tfc:casting/${x.metal}_ingot`)

		event.recipes.tfc.casting(`tfc:metal/ingot/${x.metal}`, 'tfc:ceramic/fire_ingot_mold', Fluid.of(`tfc:metal/${x.metal}`, 144), 0.01)
			.id(`tfc:casting/${x.metal}_fire_ingot`)

		event.recipes.tfc.heating(`tfc:metal/ingot/${x.metal}`, x.meltTemp)
			.resultFluid(Fluid.of(`tfc:metal/${x.metal}`, 144))
			.id(`tfc:heating/metal/${x.metal}_ingot`)

		event.recipes.create.filling(
			Item.of('tfc:ceramic/ingot_mold',
				{
					tank: {
						FluidName: `tfc:metal/${x.metal}`,
						Amount: 144
					}
				}),
			[
				Fluid.of(`tfc:metal/${x.metal}`, 144),
				Item.of('tfc:ceramic/ingot_mold').strongNBT()
			])
			.id(`tfg:tfc/filling/${x.metal}_ingot`)

		event.recipes.create.filling(
			Item.of('tfc:ceramic/fire_ingot_mold',
				{
					tank: {
						FluidName: `tfc:metal/${x.metal}`,
						Amount: 144
					}
				}),
			[
				Fluid.of(`tfc:metal/${x.metal}`, 144),
				Item.of('tfc:ceramic/fire_ingot_mold').strongNBT()
			]
		).id(`tfg:tfc/filling/${x.metal}_fire_ingot`)
	})

	//#endregion

	//#region Фикс рецептов металлических предметов

	// Рецепт Jacks
	event.recipes.tfc.welding('tfc:jacks', '#forge:rods/brass', '#forge:plates/brass', 2)
		.id(`tfc:welding/jacks`)

	event.recipes.greate.compacting('tfc:jacks', ['#forge:rods/brass', '#forge:plates/brass', 'tfc:powder/flux'])
		.heated()
		.recipeTier(0)
		.id('greate:compacting/jacks')

	// Декрафт Jacks
	event.recipes.tfc.heating('tfc:jacks', 930)
		.resultFluid(Fluid.of('gtceu:brass', 144))
		.id(`tfc:heating/jacks`)

	// Декрафт Gem Saw
	event.recipes.tfc.heating('tfc:gem_saw', 930)
		.resultFluid(Fluid.of('gtceu:brass', 72))
		.id(`tfc:heating/gem_saw`)

	// Декрафт сырой крицы в жидкость
	event.recipes.tfc.heating(`tfc:raw_iron_bloom`, 1535)
		.resultFluid(Fluid.of('gtceu:iron', 144))
		.id(`tfc:heating/raw_bloom`)

	// Декрафт укрепленной крицы в жидкость
	event.recipes.tfc.heating(`tfc:refined_iron_bloom`, 1535)
		.resultFluid(Fluid.of('gtceu:iron', 144))
		.id(`tfc:heating/refined_bloom`)

	// Гриль
	event.recipes.tfc.heating('tfc:wrought_iron_grill', 1535)
		.resultFluid(Fluid.of('gtceu:iron', 288))
		.id(`tfc:heating/grill`)

	// Ванильная дверь декрафт
	event.recipes.tfc.heating('minecraft:iron_door', 1535)
		.resultFluid(Fluid.of('gtceu:iron', 288))
		.id(`tfc:heating/iron_door`)

	// Ванильная дверь на наковальне
	event.recipes.tfc.anvil('minecraft:iron_door', '#forge:double_plates/wrought_iron', ['hit_last', 'draw_not_last', 'punch_not_last'])
		.tier(3)
		.id(`tfc:anvil/iron_door`)

	// Bloom -> Wrought Iron Ingot
	event.recipes.tfc.anvil('gtceu:wrought_iron_ingot', 'tfc:refined_iron_bloom', ['hit_last', 'hit_second_last', 'hit_third_last'])
		.tier(2)
		.id('tfc:anvil/wrought_iron_from_bloom')

	// High Carbon Steel Ingot -> Steel Ingot
	event.recipes.tfc.anvil('gtceu:steel_ingot', 'tfc:metal/ingot/high_carbon_steel', ['hit_last', 'hit_second_last', 'hit_third_last'])
		.tier(3)
		.id('tfc:anvil/steel_ingot')

	// High Carbon Black Steel Ingot -> Black Steel Ingot
	event.recipes.tfc.anvil('tfc:metal/ingot/black_steel', 'tfc:metal/ingot/high_carbon_black_steel', ['hit_last', 'hit_second_last', 'hit_third_last'])
		.tier(4)
		.id('tfc:anvil/black_steel_ingot')

	// High Carbon Red Steel Ingot -> Red Steel Ingot
	event.recipes.tfc.anvil('tfc:metal/ingot/red_steel', 'tfc:metal/ingot/high_carbon_red_steel', ['hit_last', 'hit_second_last', 'hit_third_last'])
		.tier(5)
		.id('tfc:anvil/red_steel_ingot')

	// High Carbon Blue Steel Ingot -> Blue Steel Ingot
	event.recipes.tfc.anvil('tfc:metal/ingot/blue_steel', 'tfc:metal/ingot/high_carbon_blue_steel', ['hit_last', 'hit_second_last', 'hit_third_last'])
		.tier(5)
		.id('tfc:anvil/blue_steel_ingot')

	// Cast iron -> Raw Iron Bloom
	event.recipes.tfc.bloomery('tfc:raw_iron_bloom', 'minecraft:charcoal', Fluid.of('gtceu:iron', 144), 15000)
		.id('tfc:bloomery/raw_iron_bloom')

	// Cast Iron -> Pig Iron
	event.recipes.tfc.blast_furnace(Fluid.of('tfc:metal/pig_iron', 1), '#tfc:flux', Fluid.of('gtceu:iron', 1))
		.id('tfc:blast_furnace/pig_iron')

	//#endregion

	//#region Gravel Deposit Washing
	const deposit_ores = [
		'native_gold',
		'native_copper',
		'native_silver',
		'cassiterite'
	];

	global.TFC_STONE_TYPES.forEach(stone => {
		deposit_ores.forEach(ore => {

			event.recipes.gtceu.ore_washer(`tfc:ore_washer/water/deposit/${ore}/${stone}`)
				.itemInputs(`1x tfc:deposit/${ore}/${stone}`)
				.inputFluids("#tfg:clean_water 100")
				.circuit(4)
				.itemOutputs(`1x tfc:ore/normal_${ore}`)
				.duration(400)
				.EUt(GTValues.VA[GTValues.LV])

			event.recipes.gtceu.ore_washer(`tfc:ore_washer/distilled_water/deposit/${ore}/${stone}`)
				.itemInputs(`1x tfc:deposit/${ore}/${stone}`)
				.inputFluids(Fluid.of('gtceu:distilled_water', 50))
				.circuit(4)
				.itemOutputs(`1x tfc:ore/normal_${ore}`)
				.duration(200)
				.EUt(GTValues.VA[GTValues.LV])
		})
	})
	//#endregion

	// Melting powders

	const METAL_POWDERS = [
		{ powder: 'tfc:powder/native_copper', material: GTMaterials.Copper },
		{ powder: 'tfc:powder/native_gold', material: GTMaterials.Gold },
		{ powder: 'tfc:powder/hematite', material: GTMaterials.Hematite },
		{ powder: 'tfc:powder/native_silver', material: GTMaterials.Silver },
		{ powder: 'tfc:powder/cassiterite', material: GTMaterials.Cassiterite },
		{ powder: 'tfc:powder/bismuthinite', material: GTMaterials.Bismuth },
		{ powder: 'tfc:powder/garnierite', material: GTMaterials.Garnierite },
		{ powder: 'tfc:powder/malachite', material: GTMaterials.Malachite },
		{ powder: 'tfc:powder/magnetite', material: GTMaterials.Magnetite },
		{ powder: 'tfc:powder/limonite', material: GTMaterials.YellowLimonite },
		{ powder: 'tfc:powder/sphalerite', material: GTMaterials.Sphalerite },
		{ powder: 'tfc:powder/tetrahedrite', material: GTMaterials.Tetrahedrite },
		{ powder: 'tfc:powder/pyrite', material: GTMaterials.Pyrite }
	]

	METAL_POWDERS.forEach(x => {
		const tfcProperty = x.material.getProperty(TFGPropertyKey.TFC_PROPERTY)

		let outputMaterial = (tfcProperty.getOutputMaterial() === null) ? x.material : tfcProperty.getOutputMaterial()

		event.recipes.tfc.heating(x.powder, tfcProperty.getMeltTemp())
			.resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetalProcessed(36, tfcProperty.getPercentOfMaterial())))
			.id(`tfg:heating/powder/${x.material.getName()}`)
	})
}
