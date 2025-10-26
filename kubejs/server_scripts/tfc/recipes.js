// priority: 0
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerTFCRecipes = (event) => {

	removeTFCRecipes(event)
	registerTFCMaterialsRecipes(event)
	registerTFCMetalsRecipes(event)
	registerTFCStoneRecipes(event)
	registerTFCSandRecipes(event)
	registerTFCDirtRecipes(event)
	registerTFCWoodRecipes(event)
	registerTFCKnappingRecipes(event)
	registerTFCMachineRecipes(event)
	registerTFCAlabasterRecipes(event)
	registerTFCDyeRecipes(event)

	//#region Рецепты порошков

	// Добавление рецептов
	global.TFC_QUERN_POWDER_RECIPE_COMPONENTS.forEach(element => {
		event.recipes.gtceu.macerator(`tfg:${element.name}`)
			.itemInputs(element.input)
			.itemOutputs(element.output)
			.duration(60)
			.EUt(2)

		event.recipes.tfc.quern(element.output, element.input)
			.id(`tfg:quern/${element.name}`)
	})

	//#endregion

	//#region Рецепты обжарки форм

	global.TFC_FURNACE_MOLD_RECIPE_COMPONENTS.forEach(element => {
		event.smelting(element.output, element.input)
			.id(`tfg:smelting/${element.name}`)
	})

	global.MINECRAFT_DYE_NAMES.forEach(dye => {
		event.smelting(`tfc:ceramic/${dye}_glazed_vessel`, `tfc:ceramic/${dye}_unfired_vessel`)
			.id(`tfg:smelting/${dye}_glazed_vessel`)

		event.smelting(`tfc:ceramic/large_vessel/${dye}`, `tfc:ceramic/unfired_large_vessel/${dye}`)
			.id(`tfg:smelting/${dye}_large_vessel`)
	})

	//#endregion


	//#region Рецепты электрической теплицы

	// Дерево
	global.TFC_WOOD_TYPES.forEach(wood => {
		generateGreenHouseRecipe(event, `8x tfc:wood/sapling/${wood}`, '#tfc:any_fresh_water', 16000, `64x tfc:wood/log/${wood}`,
			`tfg:greenhouse/${wood}`, 'minecraft:overworld', 16, `32x tfc:wood/sapling/${wood}`, GTValues.VH[GTValues.LV])
	})

	global.AFC_SAPLINGS.forEach(x => {
		generateGreenHouseRecipe(event, `8x afc:wood/sapling/${x.sapling}`, '#tfc:any_fresh_water', 16000, `64x ${x.log}`,
			`tfg:greenhouse/${x.sapling}`, 'minecraft:overworld', 16, `32x afc:wood/sapling/${x.sapling}`, GTValues.VH[GTValues.LV])
	})

	// Семена фруктов
	global.TFC_GREENHOUSE_FRUIT_RECIPE_COMPONENTS.forEach(element => {
		generateGreenHouseRecipe(event, element.input, '#tfc:any_fresh_water', element.fluid_amount, element.output,
			element.name, 'minecraft:overworld', 8, element.input, GTValues.VH[GTValues.LV])
	})

	// Семена овощей
	global.TFC_GREENHOUSE_VEGETABLE_RECIPE_COMPONENTS.forEach(element => {
		generateGreenHouseRecipe(event, element.input, '#tfc:any_fresh_water', element.fluid_amount, element.output,
			element.name, null, 8, element.input, GTValues.VH[GTValues.LV])
	})

	// Семена ягод
	global.TFC_GREENHOUSE_BERRY_RECIPE_COMPONENTS.forEach(element => {
		generateGreenHouseRecipe(event, element.input, '#tfc:any_fresh_water', element.fluid_amount, element.output,
			element.name, null, 8, element.input, GTValues.VH[GTValues.LV])
	})

	// Растения
	Ingredient.of('#tfc:plants').subtract('#tfc:wild_fruits').stacks.forEach(element => {
		const itemId = element.id;
		const recipeId = `greenhouse_${itemId.replace(':', '_')}`;

		generateGreenHouseRecipe(event, itemId, '#tfc:any_fresh_water', 8000, `8x ${itemId}`, 
			recipeId, null, 8, itemId, GTValues.VH[GTValues.LV]);
	});

	//#endregion

	event.shapeless('tfc:crucible', ['tfc:crucible']).id('tfg:empty_crucible')

	event.shapeless('2x minecraft:stick', ['#minecraft:saplings', '#forge:tools/knives']).id('tfg:strip_saplings')

	event.recipes.gtceu.cutter('tfg:saplings_to_sticks')
		.itemInputs('#minecraft:saplings')
		.itemOutputs('2x minecraft:stick')
		.duration(20)
		.EUt(7)

	// Доменная печь
	event.recipes.gtceu.shaped('tfc:blast_furnace', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: '#forge:double_plates/wrought_iron',
		B: 'tfc:crucible'
	}).addMaterialInfo().id('tfc:crafting/blast_furnace')

	// Тыква -> Кусочки тыквы
	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.itemStackProvider.of('4x tfc:food/pumpkin_chunks').copyFood(),
		[TFC.ingredient.notRotten('tfc:pumpkin'), '#forge:tools/hammers'], 'tfc:pumpkin')
		.id(`tfc:crafting/pumpkin_chunks_hammer`)

	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.itemStackProvider.of('4x tfc:food/pumpkin_chunks').copyFood(),
		[TFC.ingredient.notRotten('tfc:pumpkin'), '#tfc:knives'], 'tfc:pumpkin')
		.id(`tfc:crafting/pumpkin_chunks_knife`)

	// Lime
	event.smelting('tfc:powder/lime', 'tfc:powder/flux')
		.id('tfg:smelting/lime')

	// Kaolinite Clay - regular smelting recipes can't have multiple inputs
	event.recipes.gtceu.alloy_smelter('tfg:kaolinite')
		.itemInputs('tfc:kaolin_clay')
		.circuit(1)
		.chancedOutput('tfc:powder/kaolinite', 2000, 0)
		.duration(100)
		.EUt(16)

	// Fire Clay
	event.recipes.gtceu.alloy_smelter('tfg:cheaper_fire_clay')
		.itemInputs('#forge:dusts/graphite', '4x tfc:kaolin_clay')
		.itemOutputs('2x tfc:fire_clay')
		.duration(600)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.alloy_smelter('tfg:oops_i_smelted_all_my_kaolin')
		.itemInputs('minecraft:clay_ball', 'tfc:powder/kaolinite')
		.itemOutputs('tfc:kaolin_clay')
		.duration(600)
		.EUt(GTValues.VA[GTValues.ULV])

	// Выпаривание соли
	event.recipes.tfc.pot([], Fluid.of('tfc:salt_water', 625), 300, 100)
		.itemOutput('gtceu:small_salt_dust')
		.id('tfg:tfc/pot/salt')

	// Salt Water
	generateMixerRecipe(event, ['#forge:dusts/salt'], "#tfg:clean_water 1000",
		[], 2, Fluid.of('tfc:salt_water', 1000), 40, 7, 64, 'tfg:tfc/salt_water')


	// Seaweed and kelp
	event.recipes.tfc.heating('tfc:groundcover/seaweed', 200)
		.resultItem('tfc:food/dried_seaweed')
	event.recipes.tfc.heating('tfc:plant/leafy_kelp', 200)
		.resultItem('tfc:food/dried_kelp')
	event.recipes.tfc.heating('tfc:plant/winged_kelp', 200)
		.resultItem('tfc:food/dried_kelp')

	// Burning Bread
	event.recipes.tfc.heating('#tfc:foods/breads', 850)

	// Soda Ash
	event.smelting('3x tfc:powder/soda_ash', 'tfc:food/dried_seaweed').id('tfg:smelting/dried_seaweed_to_soda')
	event.smelting('3x tfc:powder/soda_ash', 'tfc:food/dried_kelp').id('tfg:smelting/dried_kelp_to_soda')

	//#region Обрушения

	event.recipes.tfc.collapse('#tfg:rock_slabs').id('tfg:collapse/rock_slabs')
	event.recipes.tfc.collapse('#tfg:rock_stairs').id('tfg:collapse/rock_stairs')
	event.recipes.tfc.collapse('#tfg:rock_walls').id('tfg:collapse/rock_walls')

	//#endregion

	//More accesible solar drier
	event.replaceInput({ id: 'firmalife:crafting/solar_drier' }, 'gtceu:stainless_steel_rod', 'gtceu:silver_rod')

	//Wood ash
	event.recipes.create.splashing([Item.of('tfc:powder/wood_ash').withChance(0.25), Item.of('minecraft:stick').withChance(0.25)], 'tfc:torch')
		.id('tfg:splashing/wash_torch')

	//Lye
	generateMixerRecipe(event, 'tfc:powder/wood_ash', "#tfg:clean_water 200",
		[], null, Fluid.of('tfc:lye', 200), 100, 2, 64, 'lye_from_wood_ash')
	generateMixerRecipe(event, '#forge:dusts/sodium_hydroxide', "#tfg:clean_water 1000",
		[], null, Fluid.of('tfc:lye', 1000), 100, 2, 64, 'lye_from_sodium_hydroxide')

	event.recipes.gtceu.distillery('lye_to_sodium_hydroxide')
		.inputFluids('tfc:lye 1000')
		.itemOutputs('gtceu:sodium_hydroxide_dust')
		.duration(100)
		.EUt(2)

	// Brass Mechanism
	event.recipes.shapeless('gtceu:small_brass_gear', [ 'tfc:brass_mechanisms' ]).id('tfg:replace_brass_mechanisms')
	event.replaceInput({ input: 'tfc:brass_mechanisms' }, 'tfc:brass_mechanisms', 'gtceu:small_brass_gear')

	// Fertilizers
	event.recipes.gtceu.centrifuge('tfg:gtceu/centrifuge/pure_fertilizers')
		.itemInputs('1x gtceu:fertilizer')
		.itemOutputs('1x tfc:pure_nitrogen', '1x tfc:pure_potassium', '1x tfc:pure_phosphorus')
		.duration(340)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.mixer('tfg:tfc/mixer/fertilizer')
		.itemInputs('1x tfc:pure_nitrogen', '1x tfc:pure_potassium', '1x tfc:pure_phosphorus', ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.Clay, 1))
		.itemOutputs('1x gtceu:fertilizer')
		.duration(160)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.gas_pressurizer('tfg:pure_nitrogen')
		.itemInputs('#forge:wax')
		.inputFluids(Fluid.of('gtceu:nitrogen', 1000))
		.itemOutputs('16x tfc:pure_nitrogen')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	//Hide Sewing
	const stages = [
		'raw',
		'soaked',
		'scraped',
		'prepared',
		'sheepskin'
	];

	stages.forEach(stage => {
		//Combining
		event.recipes.tfc.damage_inputs_shapeless_crafting(
			event.shapeless(`1x tfc:medium_${stage}_hide`, [
				`2x tfc:small_${stage}_hide`,
				'#tfc:sewing_needles',
				'#forge:string',
				'tfc:glue'
			]).id(`tfg:tfc/small_to_medium_${stage}_hide`)
		)
		event.recipes.tfc.damage_inputs_shapeless_crafting(
			event.shapeless(`1x tfc:large_${stage}_hide`, [
				`3x tfc:small_${stage}_hide`,
				'#tfc:sewing_needles',
				'#forge:string',
				'tfc:glue'
			]).id(`tfg:tfc/small_to_large_${stage}_hide`)
		)

		event.recipes.gtceu.assembler(`tfg:gtceu/assembler/small_to_medium_${stage}_hide`)
			.inputFluids(Fluid.of('gtceu:glue', 25))
			.itemOutputs(`1x tfc:medium_${stage}_hide`)
			.itemInputs(`2x tfc:small_${stage}_hide`)
			.duration(60)
			.circuit(7)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.assembler(`tfg:gtceu/assembler/small_to_large_${stage}_hide`)
			.inputFluids(Fluid.of('gtceu:glue', 25))
			.itemOutputs(`1x tfc:large_${stage}_hide`)
			.itemInputs(`3x tfc:small_${stage}_hide`)
			.duration(60)
			.circuit(9)
			.EUt(GTValues.VA[GTValues.ULV])

		//Cutting
		event.recipes.tfc.damage_inputs_shapeless_crafting(
			event.shapeless(`2x tfc:small_${stage}_hide`, [
				`1x tfc:medium_${stage}_hide`,
				'#forge:shears'
			]).id(`tfg:tfc/medium_to_small_${stage}_hide`)
		)

		event.recipes.tfc.damage_inputs_shapeless_crafting(
			event.shapeless(`3x tfc:small_${stage}_hide`, [
				`1x tfc:large_${stage}_hide`,
				'#forge:shears'
			]).id(`tfg:tfc/large_to_small_${stage}_hide`)
		)

		event.recipes.gtceu.assembler(`tfg:gtceu/assembler/medium_to_small_${stage}_hide`)
			.itemOutputs(`2x tfc:small_${stage}_hide`)
			.itemInputs(`1x tfc:medium_${stage}_hide`)
			.duration(60)
			.circuit(4)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.assembler(`tfg:gtceu/assembler/large_to_small_${stage}_hide`)
			.itemOutputs(`3x tfc:small_${stage}_hide`)
			.itemInputs(`1x tfc:large_${stage}_hide`)
			.duration(60)
			.circuit(6)
			.EUt(GTValues.VA[GTValues.ULV])
	});

	// Jar lids

	event.shapeless('8x tfc:jar_lid', [
		'gtceu:tin_ingot',
		'#forge:tools/hammers',
		'#forge:tools/saws'
	]).id('tfc:shapeless/jar_lid')

	event.replaceInput({ mod: 'tfc' }, 'minecraft:sugar', '#tfg:sugars')

	// Sea Water
	event.recipes.tfc.barrel_instant()
		.inputItem(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Salt, 1))
		.inputFluid(Fluid.of('minecraft:water', 1000))
		.outputFluid(Fluid.of('tfc:salt_water', 1000))
		.id('tfg:barrel/water_to_salt_water')

	event.recipes.tfc.barrel_instant()
		.inputItem("tfc:powder/salt")
		.inputFluid(Fluid.of('minecraft:water', 250))
		.outputFluid(Fluid.of('tfc:salt_water', 250))
		.id('tfg:barrel/water_to_salt_water_tfc')

    // jute net -> burlap net
    event.replaceInput({ id: 'tfc:crafting/jute_net'}, 'tfc:jute_fiber', '#tfg:burlap_fiber')

    // horse armor to use burlap
    global.TFC_EQUIPMENT_METALS.forEach(material => {
        event.replaceInput({ id: `tfc:crafting/${material}_horse_armor`}, `tfc:jute_fiber`, `#tfg:burlap_fiber`)
    })

	// Just a dummy recipe to tell people they can get wood ash by throwing torches in water via TFC
	event.custom({
		type: "ae2:transform",
		circumstance: {
			type: "fluid",
			tag: "tfc:water"
		},
		ingredients: [{ item: 'tfc:torch' }],
		result: { item: 'tfc:powder/wood_ash' }
	}).id(`tfg:ae_transform/torch_to_wood_ash`)

	event.shaped('8x minecraft:ladder', [
		'A A',
		'AAA',
		'A A'
	], {
		A: '#tfc:lumber'
	}).id('tfc:crafting/vanilla/ladder')
}
