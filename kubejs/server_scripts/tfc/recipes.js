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
	registerTFCDyeRecipes(event)

	// Добавление рецептов
	const TFC_QUERN_POWDER_RECIPE_COMPONENTS = /** @type {const} */ ([
		{ input: "#forge:dusts/coke", output: "4x tfc:powder/coke", name: "coke_powder" },
		{ input: "#forge:dusts/amethyst", output: "4x tfc:powder/amethyst", name: "amethyst_powder" },
		{ input: "#forge:dusts/diamond", output: "4x tfc:powder/diamond", name: "diamond_powder" },
		{ input: "#forge:dusts/emerald", output: "4x tfc:powder/emerald", name: "emerald_powder" },
		{ input: "#forge:dusts/lapis", output: "4x tfc:powder/lapis_lazuli", name: "lapis_powder" },
		{ input: "#forge:dusts/opal", output: "4x tfc:powder/opal", name: "opal_powder" },
		{ input: "#forge:dusts/pyrite", output: "4x tfc:powder/pyrite", name: "pyrite_powder" },
		{ input: "#forge:dusts/ruby", output: "4x tfc:powder/ruby", name: "ruby_powder" },
		{ input: "#forge:dusts/sapphire", output: "4x tfc:powder/sapphire", name: "sapphire_powder" },
		{ input: "#forge:dusts/topaz", output: "4x tfc:powder/topaz", name: "topaz_powder" },
		{ input: "#forge:dusts/gold", output: "4x tfc:powder/native_gold", name: "gold_powder" },
		{ input: "#forge:dusts/silver", output: "4x tfc:powder/native_silver", name: "silver_powder" },
		{ input: "#forge:dusts/copper", output: "4x tfc:powder/native_copper", name: "copper_powder" },
		{ input: "#forge:dusts/cassiterite", output: "4x tfc:powder/cassiterite", name: "cassiterite_powder" },
		{ input: "#forge:dusts/bismuth", output: "4x tfc:powder/bismuthinite", name: "bismuth_powder" },
		{ input: "#forge:dusts/garnierite", output: "4x tfc:powder/garnierite", name: "garnierite_powder" },
		{ input: "#forge:dusts/nickel", output: "4x tfc:powder/garnierite", name: "nickel_powder" },
		{ input: "#forge:dusts/sphalerite", output: "4x tfc:powder/sphalerite", name: "sphalerite_powder" },
		{ input: "#forge:dusts/magnetite", output: "4x tfc:powder/magnetite", name: "magnetite_powder" },
		{ input: "#forge:dusts/tetrahedrite", output: "4x tfc:powder/tetrahedrite", name: "tetrahedrite_powder" },
		{ input: "#forge:dusts/malachite", output: "4x tfc:powder/malachite", name: "malachite_powder" },
		{ input: "#forge:dusts/yellow_limonite", output: "4x tfc:powder/limonite", name: "limonite_powder" },
		{ input: "#forge:dusts/hematite", output: "4x tfc:powder/hematite", name: "hematite_powder" },
		{ input: "#forge:dusts/sulfur", output: "4x tfc:powder/sulfur", name: "sulfur_powder" },
		{ input: "#forge:dusts/saltpeter", output: "4x tfc:powder/saltpeter", name: "saltpeter_powder" },
		{ input: "#forge:dusts/salt", output: "4x tfc:powder/salt", name: "salt_powder" },
		{ input: "#forge:dusts/graphite", output: "4x tfc:powder/graphite", name: "graphite_powder" },
		{ input: "#forge:dusts/borax", output: "4x tfc:powder/flux", name: "flux_powder" },
		{ input: "#forge:dusts/soda_ash", output: "4x tfc:powder/soda_ash", name: "soda_ash" },
		{ input: "gtceu:charcoal_dust", output: "2x tfc:powder/charcoal", name: "charcoal" },
		{ input: "tfc:ore/sylvite", output: "4x tfc:powder/sylvite", name: "sylvite" }
	]);

	TFC_QUERN_POWDER_RECIPE_COMPONENTS.forEach(element => {
		event.recipes.gtceu.macerator(`tfg:${element.name}`)
			.itemInputs(element.input)
			.itemOutputs(element.output)
			.duration(60)
			.EUt(2)

		event.recipes.tfc.quern(element.output, element.input)
			.id(`tfg:quern/${element.name}`)
	})

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

	// Flux + Lime
	event.smelting('tfc:powder/lime', 'tfc:powder/flux')
		.id('tfg:smelting/lime')

	event.recipes.gtceu.macerator('flux')
		.itemInputs('#tfc:fluxstone')
		.itemOutputs('2x tfc:powder/flux')
		.duration(30)
		.EUt(2)

	event.recipes.gtceu.forge_hammer('flux')
		.itemInputs('#tfc:fluxstone')
		.itemOutputs('2x tfc:powder/flux')
		.duration(30)
		.EUt(2)

	event.recipes.greate.pressing('2x tfc:powder/flux', '#tfc:fluxstone')
		.recipeTier(0)
		.id('greate:pressing/flux')

	// Salt Water
	event.recipes.tfc.pot([], Fluid.of('tfc:salt_water', 625), 300, 100)
		.itemOutput('gtceu:small_salt_dust')
		.id('tfg:tfc/pot/salt')

	generateMixerRecipe(event, ['#forge:dusts/salt'], "#tfg:clean_water 1000",
		[], 2, Fluid.of('tfc:salt_water', 1000), 40, 7, 64, 'tfg:tfc/salt_water')

	event.recipes.gtceu.centrifuge('centrifuging_tfc_salt_water')
		.inputFluids(Fluid.of('tfc:salt_water', 1000))
		.itemOutputs('1x gtceu:salt_dust')
		.outputFluids(Fluid.of('minecraft:water', 1000))
		.duration(51)
		.EUt(30)
		.circuit(1)

	event.recipes.gtceu.electrolyzer('electrolyze_tfc_salt_water')
		.inputFluids(Fluid.of('tfc:salt_water', 1000))
		.itemOutputs('1x gtceu:sodium_hydroxide_dust', '2x gtceu:small_sodium_hydroxide_dust')
		.outputFluids(Fluid.of('gtceu:chlorine', 500), Fluid.of('gtceu:hydrogen', 500))
		.duration(720)
		.EUt(30)

	// Add circuit to gregtech salt water mixer recipe
	event.remove({ id: 'gtceu:mixer/salt_water' })
	generateMixerRecipe(event, ['2x #forge:dusts/salt'], Fluid.of('minecraft:water', 1000), [], 1, Fluid.of('gtceu:salt_water', 1000), 40, 7, 64, 'tfg:gtceu/salt_water')

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

	//More accesible solar drier
	event.replaceInput({ id: 'firmalife:crafting/solar_drier' }, 'gtceu:stainless_steel_rod', 'gtceu:silver_rod')


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
	event.replaceInput({ input: 'tfc:brass_mechanisms' }, 'tfc:brass_mechanisms', 'gtceu:small_brass_gear')

	// Rennet
	event.recipes.gtceu.fermenter('tfg:fermenter/vegetable_rennet')
		.itemInputs('#tfg:ferments_to_rennet')
		.itemOutputs('firmalife:rennet')
		.duration(400)
		.EUt(16)

	event.recipes.gtceu.fermenter('tfg:fermenter/biomass_rennet')
		.inputFluids(Fluid.of('gtceu:fermented_biomass', 100))
		.itemOutputs('firmalife:rennet')
		.duration(2400)
		.EUt(16)

	// Brine
	event.recipes.gtceu.mixer('tfg:tfc/brine')
		.inputFluids(Fluid.of('tfc:salt_water', 900))
		.inputFluids(Fluid.of('tfc:vinegar', 100))
		.outputFluids(Fluid.of('tfc:brine', 1000))
		.duration(100)
		.EUt(16)

	// LimeWater + Sand -> Mortar
	event.recipes.gtceu.mixer('mortar')
		.itemInputs('#forge:sand')
		.inputFluids(Fluid.of('tfc:limewater', 100))
		.itemOutputs('16x tfc:mortar')
		.duration(800)
		.EUt(8)

	// Jar lids

	event.shapeless('8x tfc:jar_lid', [
		'gtceu:tin_ingot',
		'#forge:tools/hammers',
		'#forge:tools/saws'
	]).id('tfc:shapeless/jar_lid')

	event.replaceInput({ mod: 'tfc' }, 'minecraft:sugar', '#tfg:sugars')


	// jute net -> burlap net
	event.replaceInput({ id: 'tfc:crafting/jute_net' }, 'tfc:jute_fiber', '#tfg:burlap_fiber')

	// horse armor to use burlap
	global.TFC_EQUIPMENT_METALS.forEach(material => {
		event.replaceInput({ id: `tfc:crafting/${material}_horse_armor` }, `tfc:jute_fiber`, `#tfg:burlap_fiber`)
	})

	event.recipes.gtceu.centrifuge('tfg:soot')
		.itemInputs('tfc:soot')
		.itemOutputs('#forge:dusts/carbon')
		.duration(20)
		.EUt(2)

	event.recipes.gtceu.extruder('tfg:wrought_iron_grill_electric_only')
		.itemInputs('2x #forge:plates/wrought_iron')
		.notConsumable('tfg:large_casing_extruder_mold')
		.itemOutputs('tfc:wrought_iron_grill')
		.duration(60)
		.EUt(8)

	// acetic acid to vinegar conversion

	event.recipes.gtceu.mixer('vinegar_from_acetic_acid')
		.inputFluids(
			Fluid.of('minecraft:water', 950),
			Fluid.of('gtceu:acetic_acid', 50)
		)
		.outputFluids(
			Fluid.of('tfc:vinegar', 1000)
		)
		.circuit(1)
		.duration(30)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.distillery('acetic_acid_from_vinegar')
		.inputFluids(
			Fluid.of('tfc:vinegar', 1000)
		)
		.outputFluids(
			Fluid.of('gtceu:acetic_acid', 50)
		)
		.circuit(1)
		.duration(50)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.distillery('water_from_vinegar')
		.inputFluids(
			Fluid.of('tfc:vinegar', 1000)
		)
		.outputFluids(
			Fluid.of('minecraft:water', 950)
		)
		.circuit(2)
		.duration(50)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.distillation_tower('vinegar_distillation')
		.inputFluids(
			Fluid.of('tfc:vinegar', 1000)
		)
		.outputFluids(
			Fluid.of('gtceu:acetic_acid', 50),
			Fluid.of('minecraft:water', 950)
		)
		.duration(80)
		.EUt(GTValues.VA[GTValues.MV])

	// fix alcohol tag for vinegar
	event.recipes.tfc.barrel_sealed(8000)
		.inputs('#tfc:foods/fruits', TFC.fluidStackIngredient('#tfg:alcohols', 250))
		.outputFluid(Fluid.of('tfc:vinegar', 250))
		.id('tfc:barrel/vinegar')
}
