"use strict";

const registerCreatedecoRecipes = (event) => {

	//#region Item Replacements
	const replacements = {
		'create:zinc_ingot': '#forge:ingots/zinc',
		'createdeco:zinc_sheet': '#forge:plates/zinc',
		'create:zinc_nugget': '#forge:nuggets/zinc',
		'create:brass_ingot': '#forge:ingots/brass',
		'create:brass_sheet': '#forge:plates/brass',
		'create:brass_nugget': '#forge:nuggets/brass',
		'minecraft:iron_ingot': '#forge:ingots/wrought_iron',
		'create:iron_sheet': '#forge:plates/wrought_iron',
		'minecraft:iron_nugget': '#forge:nuggets/wrought_iron',
		'createdeco:industrial_iron_ingot': '#forge:ingots/steel',
		'createdeco:industrial_iron_sheet': '#forge:plates/steel',
		'createdeco:industrial_iron_nugget': '#forge:nuggets/steel',
		'minecraft:torch': 'minecraft:glowstone',
		'minecraft:vine': '#tfc:moss',
		'create:andesite_alloy': '#forge:ingots/tin_alloy',
		'createdeco:andesite_sheet': '#forge:plates/tin_alloy',
		'create:copper_nugget': '#forge:nuggets/copper',
		'createdeco:netherite_nugget': '#forge:nuggets/blue_steel',
		'minecraft:string': '#forge:string'
	};

	// Iterate through the replacement list and update recipes
	Object.keys(replacements).forEach(missingItem => {
		const replacementItem = replacements[missingItem];

		event.replaceInput({ mod: "createdeco" }, missingItem, replacementItem);
	});
	//#endregion

	//#region Recipe Removal
	event.remove({ output: 'createdeco:zinc_sheet' })
	event.remove({ output: 'createdeco:industrial_iron_sheet' })
	event.remove({ output: 'createdeco:industrial_iron_nugget' })
	event.remove({ output: 'createdeco:industrial_iron_ingot' })
	event.remove({ id: 'createdeco:andesite_bars_overlay' })
	event.remove({ id: 'createdeco:andesite_bars' })
	event.remove({ id: 'createdeco:brass_bars_overlay' })
	event.remove({ id: 'createdeco:brass_bars' })
	event.remove({ id: 'createdeco:iron_bars_overlay' })
	event.remove({ id: 'createdeco:copper_bars_overlay' })
	event.remove({ id: 'createdeco:copper_bars' })
	event.remove({ id: 'createdeco:industrial_iron_bars_overlay' })
	event.remove({ id: 'createdeco:industrial_iron_bars' })
	event.remove({ id: 'createdeco:zinc_bars_overlay' })
	event.remove({ id: 'createdeco:zinc_bars' })
	event.remove({ id: 'createdeco:industrial_iron_block' })
	event.remove({ id: 'createdeco:netherite_ingot' })
	event.remove({ id: 'gtceu:assembler/bricks' })
	event.remove({ type: 'minecraft:stonecutting', input: '#forge:storage_blocks/tin_alloy' })
	event.remove({ type: 'minecraft:stonecutting', input: '#forge:storage_blocks/brass' })
	event.remove({ type: 'minecraft:stonecutting', input: '#forge:storage_blocks/wrought_iron' })
	event.remove({ type: 'minecraft:stonecutting', input: '#forge:storage_blocks/copper' })
	event.remove({ type: 'minecraft:stonecutting', input: '#forge:storage_blocks/steel' })
	event.remove({ type: 'minecraft:stonecutting', input: '#forge:storage_blocks/zinc' })
	event.remove({ id: 'createdeco:andesite_sheet_metal' })
	event.remove({ id: 'createdeco:brass_sheet_metal' })
	event.remove({ id: 'createdeco:iron_sheet_metal' })
	event.remove({ id: 'createdeco:copper_sheet_metal' })
	event.remove({ id: 'createdeco:industrial_iron_sheet_metal' })
	event.remove({ id: 'createdeco:zinc_sheet_metal' })
	//#endregion

	//#region Lamp Recipes
	const lampColors = ['blue', 'green', 'red', 'yellow'];
	const lampTypes = ['zinc', 'brass', 'iron', 'industrial_iron', 'copper', 'andesite'];

	lampTypes.forEach(type => {
		lampColors.forEach(color => {
			event.remove({ output: `createdeco:${color}_${type}_lamp` });
		});
	});

	function lampRecipe(output, lampType, lampColor) {

		let replacementLampType = lampType;
		if (lampType === 'industrial_iron') {
			replacementLampType = 'steel';
		}
		if (lampType === 'andesite') {
			replacementLampType = 'wrought_iron';
		}

		let ingredients = {
			T: `minecraft:glowstone`,
			N: `#forge:bolts/${replacementLampType}`,
			P: `#forge:plates/${replacementLampType}`,
			D: null,
			X: null
		};

		// Adjust based on the color
		if (lampColor === 'green') {
			ingredients.D = 'gtceu:small_copper_dust';
		} else if (lampColor === 'blue') {
			ingredients.D = 'gtceu:small_sulfur_dust';
		} else if (lampColor === 'red') {
			ingredients.D = `gtceu:small_lithium_dust`;
		} else if (lampColor === 'yellow') {
			ingredients.D = `gtceu:small_salt_dust`;
		}

		if (lampType === 'iron') {
			ingredients.N = '#forge:bolts/wrought_iron';
			ingredients.P = '#forge:plates/wrought_iron';
		}
		if (lampType === 'andesite') {
			ingredients.N = '#forge:bolts/tin_alloy';
			ingredients.P = '#forge:plates/tin_alloy';
		}
		if (lampType === 'industrial_iron') {
			ingredients.N = '#forge:bolts/steel';
			ingredients.P = '#forge:plates/steel';
		}


		// Create the shaped recipe

		event.shaped(output, [
			'XN ',
			'DTX',
			'XP '
		], ingredients);
	}

	// Loop through each lamp type and color to create the recipes
	lampTypes.forEach(lampType => {
		lampColors.forEach(lampColor => {
			let output = `createdeco:${lampColor}_${lampType}_lamp`; // Define the output item ID
			lampRecipe(output, lampType, lampColor); // Call the lampRecipe function for each combination
		});
	});
	//#endregion

	//#region Brick Recipes
	const brickTypes = ['blue', 'verdant', 'pearl', 'dean', 'dusk', 'scarlet', 'umber']
	const powderTypes = ['lapis_lazuli', 'malachite', 'soda_ash', 'limonite', 'charcoal', 'hematite', 'cassiterite']

	event.recipes.gtceu.assembler(`assembler_bricks`)
			.itemInputs('5x minecraft:brick')
			.inputFluids(Fluid.of('gtceu:concrete', 144))
			.itemOutputs(`4x minecraft:bricks`)
			.duration(50)
			.circuit(2)
			.EUt(7)

	brickTypes.forEach(type => {
		event.remove({ output: `createdeco:${type}_bricks` });
	});

	brickTypes.forEach((type, index) => {
		const powder = `tfc:powder/${powderTypes[index]}`;
		event.shaped(Item.of(`createdeco:${type}_bricks`, 4),
			[
				'BDB',
				'MBM',
				'BMB'
			],
			{
				B: `minecraft:brick`,
				D: powder,
				M: `tfc:mortar`
			});

		event.recipes.gtceu.assembler(`createdeco:${type}_bricks`)
			.itemInputs('5x minecraft:brick', powder)
			.inputFluids(Fluid.of('gtceu:concrete', 144))
			.itemOutputs(`4x createdeco:${type}_bricks`)
			.circuit(3)
			.duration(50)
			.EUt(7)
	});
	//#endregion

	//#region Dyes
	global.MINECRAFT_DYE_NAMES.forEach(color => {
		event.remove({ output: `createdeco:${color}_shipping_container`, input: 'minecraft:barrel' });

		event.replaceInput({ mod: "createdeco" }, `minecraft:${color}_dye`, `#forge:dyes/${color}`);
	});
	//#endregion

	event.stonecutting('4x createdeco:andesite_mesh_fence', '#forge:ingots/tin_alloy')
	event.stonecutting('4x createdeco:andesite_catwalk', '#forge:ingots/tin_alloy')
	event.stonecutting('2x createdeco:andesite_catwalk_stairs', '#forge:ingots/tin_alloy')
	event.stonecutting('8x createdeco:andesite_catwalk_railing', '#forge:ingots/tin_alloy')
	event.stonecutting('4x createdeco:andesite_facade', '#forge:ingots/tin_alloy')
	event.stonecutting('3x createdeco:andesite_support_wedge', '#forge:ingots/tin_alloy')
	event.stonecutting('4x createdeco:iron_mesh_fence', '#forge:ingots/wrought_iron')
	event.stonecutting('4x createdeco:iron_catwalk', '#forge:ingots/wrought_iron')
	event.stonecutting('2x createdeco:iron_catwalk_stairs', '#forge:ingots/wrought_iron')
	event.stonecutting('8x createdeco:iron_catwalk_railing', '#forge:ingots/wrought_iron')
	event.stonecutting('4x createdeco:iron_facade', '#forge:ingots/wrought_iron')
	event.stonecutting('3x createdeco:iron_support_wedge', '#forge:ingots/wrought_iron')

	event.shaped('8x createdeco:iron_catwalk_railing', [
		'AAA',
		'B B',
		'B B'
	], {
		A: '#forge:plates/wrought_iron',
		B: 'tfc:metal/bars/wrought_iron'
	}).id('createdeco:iron_catwalk_railing')

	event.shaped('4x createdeco:iron_catwalk', [
		' A ',
		'ABA',
		' A '
	], {
		A: '#forge:plates/wrought_iron',
		B: 'tfc:metal/bars/wrought_iron'
	}).id('createdeco:iron_catwalk')

	event.shaped('2x createdeco:iron_catwalk_stairs', [
		' A',
		'AB'
	], {
		A: 'createdeco:iron_catwalk',
		B: 'tfc:metal/bars/wrought_iron'
	}).id('createdeco:iron_catwalk_stairs')
	

	// #region Bars + Doors

	const metalThings = [
		{ metal: 'andesite', material: 'tin_alloy', tier: 3 },
		{ metal: 'brass', material: 'brass', tier: 2 },
		{ metal: 'iron', material: 'wrought_iron', tier: 3 },
		{ metal: 'copper', material: 'copper', tier: 1 },
		{ metal: 'industrial_iron', material: 'steel', tier: 4 },
		{ metal: 'zinc', material: 'zinc', tier: 1 }
	];

	metalThings.forEach(bar => {
		event.remove({ id: `createdeco:${bar.metal}_trapdoor` })
		event.remove({ id: `createdeco:${bar.metal}_door` })

		let quarterMap = {};
		quarterMap[bar.material] = 0.25;

		if (bar.metal !== 'iron') {
			// Bars
			event.remove({ type: 'minecraft:stonecutting', output: `createdeco:${bar.metal}_bars` })

			event.recipes.tfc.anvil(`4x createdeco:${bar.metal}_bars`, `#forge:ingots/${bar.material}`, ['shrink_last', 'punch_second_last', 'punch_third_last'])
				.tier(bar.tier).id(`tfg:anvil/createdeco_${bar.metal}_bars`)

			event.stonecutting(`4x createdeco:${bar.metal}_bars`, `#forge:ingots/${bar.material}`)

			TFGHelpers.registerMaterialInfo(`createdeco:${bar.metal}_bars`, quarterMap)

			// Door
			event.recipes.tfc.anvil(`createdeco:${bar.metal}_door`, `#forge:double_plates/${bar.material}`, ['draw_last', 'draw_second_last', 'punch_third_last'])
				.tier(bar.tier).id(`tfg:anvil/createdeco_${bar.metal}_door`)

			event.recipes.gtceu.cutter(`tfg:${bar.material}_create_deco_door`)
				.itemInputs(`#forge:double_plates/${bar.material}`)
				.itemOutputs(`createdeco:${bar.metal}_door`)
				.duration(100)
				.EUt(GTValues.VA[GTValues.LV])

			let twoMap = {};
			twoMap[bar.material] = 2;
			TFGHelpers.registerMaterialInfo(`createdeco:${bar.metal}_door`, twoMap)
		}

		// Overlay bars
		event.remove({ type: 'minecraft:stonecutting', output: `createdeco:${bar.metal}_bars_overlay` })

		event.recipes.tfc.anvil(`4x createdeco:${bar.metal}_bars_overlay`, `#forge:ingots/${bar.material}`, ['draw_last', 'punch_second_last', 'punch_third_last'])
			.tier(bar.tier).id(`tfg:anvil/createdeco_${bar.metal}_bars_overlay`)

		event.stonecutting(`4x createdeco:${bar.metal}_bars_overlay`, `#forge:ingots/${bar.material}`)

		TFGHelpers.registerMaterialInfo(`createdeco:${bar.metal}_bars_overlay`, quarterMap)

		// Facade
		event.shaped(`4x createdeco:${bar.metal}_facade`, [
			' A ',
			'ABA',
			' A '
		], {
			A: `#forge:rods/${bar.material}`,
			B: `createdeco:${bar.metal}_mesh_fence`
		}).id(`tfg:shaped/createdeco_${bar.metal}_facade`)
	})

	// #endregion

	// #region Trapdoors
	
	event.shapeless(`createdeco:copper_trapdoor`, `tfc:metal/trapdoor/copper`)
	event.shapeless(`tfc:metal/trapdoor/copper`, `createdeco:copper_trapdoor`)
	TFGHelpers.registerMaterialInfo('createdeco:copper_trapdoor', { 'copper': 1 })

	event.shapeless(`createdeco:industrial_iron_trapdoor`, `tfc:metal/trapdoor/steel`)
	event.shapeless(`tfc:metal/trapdoor/steel`, `createdeco:industrial_iron_trapdoor`)
	TFGHelpers.registerMaterialInfo('createdeco:industrial_iron_trapdoor', { 'steel': 1 })

	// TODO: move these two into the tag prefixes in tfg-core, then remove these recipes

	event.recipes.tfc.anvil(`createdeco:brass_trapdoor`, `#forge:ingots/brass`, ['shrink_last', 'draw_second_last', 'draw_third_last'])
		.tier(2).id(`createdeco:anvil/brass_trapdoor`)

	event.recipes.gtceu.alloy_smelter(`tfg:cast_brass_trapdoor`)
		.itemInputs('#forge:ingots/brass')
		.notConsumable('tfg:trapdoor_casting_mold')
		.itemOutputs('createdeco:brass_trapdoor')
		.duration(GTMaterials.Brass.getMass())
		.category(GTRecipeCategories.INGOT_MOLDING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.fluid_solidifier(`tfg:solidify_brass_trapdoor`)
		.inputFluids(Fluid.of(GTMaterials.Brass.getFluid(), 144))
		.notConsumable('tfg:trapdoor_casting_mold')
		.itemOutputs('createdeco:brass_trapdoor')
		.duration(GTMaterials.Brass.getMass())
		.EUt(GTValues.VA[GTValues.ULV])

	TFGHelpers.registerMaterialInfo('createdeco:brass_trapdoor', { 'brass': 1 })

	event.recipes.tfc.anvil(`createdeco:zinc_trapdoor`, `#forge:ingots/zinc`, ['shrink_last', 'draw_second_last', 'draw_third_last'])
		.tier(1).id(`createdeco:anvil/zinc_trapdoor`)

	event.recipes.gtceu.alloy_smelter(`tfg:cast_zinc_trapdoor`)
		.itemInputs('#forge:ingots/zinc')
		.notConsumable('tfg:trapdoor_casting_mold')
		.itemOutputs('createdeco:zinc_trapdoor')
		.duration(GTMaterials.Zinc.getMass())
		.category(GTRecipeCategories.INGOT_MOLDING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.fluid_solidifier(`tfg:solidify_zinc_trapdoor`)
		.inputFluids(Fluid.of(GTMaterials.Zinc.getFluid(), 144))
		.notConsumable('tfg:trapdoor_casting_mold')
		.itemOutputs('createdeco:zinc_trapdoor')
		.duration(GTMaterials.Zinc.getMass())
		.EUt(GTValues.VA[GTValues.ULV])

	TFGHelpers.registerMaterialInfo('createdeco:zinc_trapdoor', { 'zinc': 1 })

	event.recipes.tfc.anvil(`createdeco:andesite_trapdoor`, `#forge:ingots/tin_alloy`, ['shrink_last', 'draw_second_last', 'draw_third_last'])
		.tier(3).id(`createdeco:anvil/andesite_trapdoor`)

	event.recipes.gtceu.alloy_smelter(`tfg:cast_tin_alloy_trapdoor`)
		.itemInputs('#forge:ingots/tin_alloy')
		.notConsumable('tfg:trapdoor_casting_mold')
		.itemOutputs('createdeco:andesite_trapdoor')
		.duration(GTMaterials.TinAlloy.getMass())
		.category(GTRecipeCategories.INGOT_MOLDING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.fluid_solidifier(`tfg:solidify_tin_alloy_trapdoor`)
		.inputFluids(Fluid.of(GTMaterials.TinAlloy.getFluid(), 144))
		.notConsumable('tfg:trapdoor_casting_mold')
		.itemOutputs('createdeco:andesite_trapdoor')
		.duration(GTMaterials.TinAlloy.getMass())
		.EUt(GTValues.VA[GTValues.ULV])

	TFGHelpers.registerMaterialInfo('createdeco:andesite_trapdoor', { 'tin_alloy': 1 })

	// #endregion

	//#region Coins

	event.recipes.gtceu.forming_press('createdeco:gold_coin')
		.itemInputs('#forge:nuggets/gold')
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('4x createdeco:gold_coin')
		.duration(50)
		.EUt(16)

	event.recipes.gtceu.forming_press('createdeco:netherite_coin')
		.itemInputs('#forge:nuggets/blue_steel')
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('4x createdeco:netherite_coin')
		.duration(50)
		.EUt(16)

	event.recipes.gtceu.forming_press('createdeco:brass_coin')
		.itemInputs('#forge:nuggets/brass')
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('4x createdeco:brass_coin')
		.duration(50)
		.EUt(16)

	event.recipes.gtceu.forming_press('createdeco:iron_coin')
		.itemInputs('#forge:nuggets/wrought_iron')
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('4x createdeco:iron_coin')
		.duration(50)
		.EUt(16)

	event.recipes.gtceu.forming_press('createdeco:copper_coin')
		.itemInputs('#forge:nuggets/copper')
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('4x createdeco:copper_coin')
		.duration(50)
		.EUt(16)

	event.recipes.gtceu.forming_press('createdeco:industrial_iron_coin')
		.itemInputs('#forge:nuggets/steel')
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('createdeco:industrial_iron_coin')
		.duration(50)
		.EUt(16)

	event.recipes.gtceu.forming_press('createdeco:zinc_coin')
		.itemInputs('#forge:nuggets/zinc')
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('createdeco:zinc_coin')
		.duration(50)
		.EUt(16)

	// #region

	// #region Window panes

	const CREATE_DECO_GLASS_WINDOWS =
	[
		['andesite', '#forge:rods/tin_alloy'],
		['copper', '#forge:rods/copper'],
		['iron', '#forge:rods/wrought_iron'],
		['industrial_iron', '#forge:rods/steel'],
		['brass', '#forge:rods/brass'],
		['zinc', '#forge:rods/zinc']
	]

	CREATE_DECO_GLASS_WINDOWS.forEach(x => {
		event.shaped(`2x createdeco:${x[0]}_window`,
			[
				' B ',
				'BAB'
			], {
			A: '#forge:glass',
			B: x[1]
		}).id(`createdeco:${x[0]}_window`)

		event.shapeless(`2x createdeco:${x[0]}_window_pane`,
			[
				`createdeco:${x[0]}_window`,
				'#forge:tools/saws'
			])
			.id(`createdeco:${x[0]}_window_pane`)

		event.recipes.gtceu.cutter(`tfg:createdeco/${x[0]}_window_pane`)
			.itemInputs(`3x createdeco:${x[0]}_window`)
			.itemOutputs(`8x createdeco:${x[0]}_window_pane`)
			.duration(40)
			.EUt(7)
	})

	// #endregion

	// #region Ladders

	event.shaped('7x createdeco:iron_ladder', [
		'A A',
		'AAA',
		'A A'
	], {
		A: '#forge:rods/wrought_iron'
	}).id('tfg:createdeco/shaped/iron_ladder')

	event.stonecutting('2x createdeco:iron_ladder', '#forge:ingots/wrought_iron')

	TFGHelpers.registerMaterialInfo('createdeco:iron_ladder', { 'wrought_iron': 0.5 })

	event.shaped('7x createdeco:zinc_ladder', [
		'A A',
		'AAA',
		'A A'
	], {
		A: '#forge:rods/zinc'
	}).id('tfg:createdeco/shaped/zinc_ladder')

	TFGHelpers.registerMaterialInfo('createdeco:zinc_ladder', { 'zinc': 0.5 })

	event.shaped('7x createdeco:industrial_iron_ladder', [
		'A A',
		'AAA',
		'A A'
	], {
		A: '#forge:rods/steel'
	}).id('tfg:createdeco/shaped/industrial_iron_ladder')

	TFGHelpers.registerMaterialInfo('createdeco:industrial_iron_ladder', { 'steel': 0.5 })

	// #endregion

	// #region Shipping Containers

	global.MINECRAFT_DYE_NAMES.forEach(color => {
		event.remove({ id: `createdeco:${color}_shipping_container_from_dyeing_vaults` })

		event.recipes.gtceu.chemical_bath(`createdeco:${color}_shipping_container`)
			.itemInputs('create:item_vault')
			.inputFluids(Fluid.of(`tfc:${color}_dye`, 144))
			.itemOutputs(`createdeco:${color}_shipping_container`)
			.duration(100)
			.EUt(16)
			.category(GTRecipeCategories.CHEM_DYES);

		event.recipes.gtceu.chemical_bath(`createdeco:${color}_shipping_container_recolor`)
			.itemInputs('#createdeco:shipping_containers')
			.inputFluids(Fluid.of(`tfc:${color}_dye`, 144))
			.itemOutputs(`createdeco:${color}_shipping_container`)
			.duration(100)
			.EUt(16)
			.category(GTRecipeCategories.CHEM_DYES);
	})

	event.recipes.gtceu.chemical_bath(`createdeco:bleach_shipping_container`)
		.itemInputs('#createdeco:shipping_containers')
		.inputFluids(Fluid.of('gtceu:chlorine', 144))
		.itemOutputs('create:item_vault')
		.duration(100)
		.EUt(16)
		.category(GTRecipeCategories.CHEM_DYES);

	// #endregion

	// #region Sheet Metal

	event.stonecutting('4x createdeco:andesite_sheet_metal', '#forge:plates/tin_alloy')
	TFGHelpers.registerMaterialInfo('createdeco:andesite_sheet_metal', { 'tin_alloy': 0.25 })
	event.stonecutting('4x createdeco:brass_sheet_metal', '#forge:plates/brass')
	TFGHelpers.registerMaterialInfo('createdeco:brass_sheet_metal', { 'brass': 0.25 })
	event.stonecutting('4x createdeco:iron_sheet_metal', '#forge:plates/wrought_iron')
	TFGHelpers.registerMaterialInfo('createdeco:iron_sheet_metal', { 'wrought_iron': 0.25 })
	event.stonecutting('4x createdeco:copper_sheet_metal', '#forge:plates/copper')
	TFGHelpers.registerMaterialInfo('createdeco:copper_sheet_metal', { 'copper': 0.25 })
	event.stonecutting('4x createdeco:industrial_iron_sheet_metal', '#forge:plates/steel')
	TFGHelpers.registerMaterialInfo('createdeco:industrial_iron_sheet_metal', { 'steel': 0.25 })
	event.stonecutting('4x createdeco:zinc_sheet_metal', '#forge:plates/zinc')
	TFGHelpers.registerMaterialInfo('createdeco:zinc_sheet_metal', { 'zinc': 0.25 })

	// #endregion
};
