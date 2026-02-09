// priority: 0
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerTFCRecipes = (event) => {

	removeTFCRecipes(event)
	registerTFCMetalsRecipes(event)
	registerTFCDyeRecipes(event)

	event.remove({ mod: 'tfc', type: 'tfc:casting' });

	// Доменная печь
	event.recipes.gtceu.shaped('tfc:blast_furnace', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: '#forge:double_plates/wrought_iron',
		B: 'tfc:crucible'
	}).id('tfc:crafting/blast_furnace')

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
	event.smelting('3x tfc:powder/soda_ash', 'tfc:food/fresh_seaweed').id('tfg:smelting/fresh_seaweed_to_soda')
	event.smelting('3x tfc:powder/soda_ash', 'tfc:groundcover/seaweed').id('tfg:smelting/seaweed_to_soda')
	event.smelting('3x tfc:powder/soda_ash', 'tfc:plant/winged_kelp').id('tfg:smelting/winged_kelp_to_soda')
	event.smelting('3x tfc:powder/soda_ash', 'tfc:plant/leafy_kelp').id('tfg:smelting/leafy_kelp_to_soda')
	event.smelting('3x tfc:powder/soda_ash', 'tfc:plant/giant_kelp_flower').id('tfg:smelting/giant_kelp_to_soda')

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

	// Clay dust to balls
	event.recipes.tfc.barrel_sealed(8000)
		.inputs('gtceu:clay_dust',TFC.fluidStackIngredient('minecraft:water', 250))
		.outputItem('1x minecraft:clay_ball')
		.id('tfc:barrel/clay_ball')

	// Borax to flux
	event.recipes.tfc.quern('4x tfc:powder/flux', 'gtceu:borax_dust')
		.id(`tfg:quern/borax`)

	event.recipes.gtceu.macerator('borax_to_flux')
		.itemInputs("#forge:dusts/borax")
		.itemOutputs("4x tfc:powder/flux")
		.duration(50)
		.EUt(2);

	event.shapeless('4x tfc:fire_clay', ['tfc:fire_clay_block'])
	
	event.shapeless('4x tfc:kaolin_clay', ['tfc:white_kaolin_clay'])
	event.shapeless('4x tfc:kaolin_clay', ['tfc:pink_kaolin_clay'])
	event.shapeless('4x tfc:kaolin_clay', ['tfc:red_kaolin_clay'])

	global.TFC_WOOD_TYPES.forEach(element => {
		event.shaped(`4x tfc:wood/fallen_leaves/${element}`,[
			'AA',
			'AA'
		], {
			A: `tfc:wood/leaves/${element}`
		}).id(`tfg:shaped/tfc/${element}_leaves_to_fallen_leaves`);
	});
	
	/**
	 * @property {string[]} krummholz_types - List of krummholz wood types.
	 */
	const krummholz_types = [
		'aspen',
		'douglas_fir',
		'pine',
		'spruce',
		'white_cedar'
	];
	krummholz_types.forEach(type => {
		event.shaped(`1x tfc:plant/${type}_krummholz`,[
			'A',
			'A'
		], {
			A: `tfc:wood/sapling/${type}`
		}).id(`tfg:shaped/tfc/${type}_krummholz`);
	});

	/**
	 * @property {Array} tfcWoodRecyclingIndex - Wood recycling material index.
	 */
	const tfcWoodRecyclingIndex = [
		['tfc:wood/chest_minecart/{type}', ['{wood}', 4, GTMaterials.WroughtIron, 5]],
		['tfc:wood/planks/{type}', ['{wood}', 8]],
		['tfc:wood/planks/{type}_door', ['{wood}', 6]],
		['tfc:wood/planks/{type}_trapdoor', ['{wood}', 4]],
		['tfc:wood/planks/{type}_fence', ['{wood}', 4]],
		['tfc:wood/planks/{type}_log_fence', ['{wood}', 8]],
		['tfc:wood/planks/{type}_fence_gate', ['{wood}', 8]],
		['tfc:wood/planks/{type}_slab', ['{wood}', 2]],
		['tfc:wood/planks/{type}_stairs', ['{wood}', 3]],
		['tfc:wood/planks/{type}_pressure_plate', ['{wood}', 4]],
		['tfc:wood/planks/{type}_button', ['{wood}', 1]],
		['tfc:wood/chest/{type}', ['{wood}', 16]],
		['tfc:wood/trapped_chest/{type}', ['{wood}', 16, GTMaterials.WroughtIron, 4/9, GTMaterials.Wood, 1]]
	];
	/**
	 * @param {Array} materials
	 * @param {string} woodMaterial
	 * @return {Array}
	 */
	function resolveArgs(materials, woodMaterial) {
		return materials.map(materials => materials === '{wood}' ? woodMaterial : materials);
	};
	global.TFC_HARDWOOD_TYPES.forEach(type => {
		tfcWoodRecyclingIndex.forEach(([template, args]) => {
			const item = template.replace('{type}', type);
			const resolvedArgs = resolveArgs(args, GTMaterials.get('hardwood'));
			TFGHelpers.registerMaterialInfo(item, resolvedArgs);
		});
	});
	global.TFC_SOFTWOOD_TYPES.forEach(type => {
		tfcWoodRecyclingIndex.forEach(([template, args]) => {
			const item = template.replace('{type}', type);
			const resolvedArgs = resolveArgs(args, GTMaterials.Wood);
			TFGHelpers.registerMaterialInfo(item, resolvedArgs);
		});
	});
}
