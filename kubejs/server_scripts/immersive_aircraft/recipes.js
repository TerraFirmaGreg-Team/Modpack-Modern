// priority: 0
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
function registerImmersiveAircraftRecipes(event) {

	//#region Recycling Util

	/**
	 * 
	 * @param {string} id 
	 * @param {{input: string, duration: number, outputsMacerator: Internal.ItemStack[], outputsArcFurnace: Internal.ItemStack[]}} args 
	 */
	let generateRecyclingRecipe = (id, args) => {
		event.recipes.gtceu.macerator(id)
			.itemInputs(args.input)
			// macerator only has 6 output slots
			.itemOutputs(args.outputsMacerator.slice(0, 6))
			.duration(args.duration)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)
			.EUt(GTValues.VA[GTValues.ULV]);

		event.recipes.gtceu.arc_furnace(id)
			.itemInputs(args.input)
			.itemOutputs(args.outputsArcFurnace)
			.duration(args.duration)
			.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
			.EUt(GTValues.VA[GTValues.LV])
	}

	/**
	 * 
	 * @param {string} inputItem 
	 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material[]} outputMaterialsArray 
	 * @param {{tagPrefixMacerator: TagPrefix, tagPrefixArcFurnace: TagPrefix, count: number}[]} materialToResults 
	 * @returns {input: string, duration: number, outputsMacerator: Internal.ItemStack[], outputsArcFurnace: Internal.ItemStack[]}
	 */
	let createRecyclingRecipeArgs = (inputItem, outputMaterialsArray, materialToResults) => {

		let outputsMacerator = []
		let outputsArcFurnace = []
		let duration = 0;

		for (let i = 0; i < outputMaterialsArray.length; i++) {
			if (i > 9) {
				break;
			}

			let material = outputMaterialsArray[i];
			let arcFurnaceMaterial = material;

			let result = materialToResults[i];

			/*FIXME: This should do a couple of things it doesnt do rn, but i cba to fix it myself.
			//The arcFurnaceMaterial should have special checks to see if it should be replaced with Ash if the material is a Wood or a Polymer.
			//It should also set itself to annealed copper if the input is regular copper
			//Ideally we should make sure the specified material has a specific TagPrefix before pushing it into the array, cant get it to work tho. I think the method TagPrefix.doGenerateItem() is ideal for this
			*/

			outputsArcFurnace.push(ChemicalHelper.get(result.tagPrefixArcFurnace, arcFurnaceMaterial, result.count));
			outputsMacerator.push(ChemicalHelper.get(result.tagPrefixMacerator, material, result.count));
			duration += material.getMass() * result.count;
		}

		let result = {
			input: inputItem,
			duration: duration,
			outputsMacerator: outputsMacerator,
			outputsArcFurnace: outputsArcFurnace,
		}
		return result;
	}

	/**
	 * 
	 * @param {TagPrefix} tagPrefixMacerator 
	 * @param {TagPrefix} tagPrefixArcFurnace 
	 * @param {number} count 
	 * @returns {tagPrefixMacerator: TagPrefix, tagPrefixArcFurnace: TagPrefix, count: number}
	 */
	let createMaterialsToResults = (tagPrefixMacerator, tagPrefixArcFurnace, count) => {
		let result =
		{
			tagPrefixMacerator: tagPrefixMacerator,
			tagPrefixArcFurnace: tagPrefixArcFurnace,
			count: count
		};
		return result;
	}
	//#endregion

	event.remove({ mod: 'man_of_many_planes' });
	event.remove({ mod: 'immersive_aircraft' });

	event.shaped('immersive_aircraft:hull', [
		'AAA',
		'BCB',
		'AAA'
	], {
		A: '#minecraft:planks',
		B: 'gtceu:wrought_iron_plate',
		C: 'tfc:glue',
	}).id('tfg:immersive_aircraft/shaped/hull');

	event.shaped('immersive_aircraft:engine', [
		'ABC',
		'DED'
	], {
		A: '#forge:tools/hammers',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:tools/wrenches',
		D: '#tfg:metal_bars',
		E: 'create:andesite_casing'
	}).id('tfg:immersive_aircraft/shaped/engine');

	event.recipes.gtceu.assembler('tfg:immersive_aircraft/assembler/engine')
		.itemInputs('gtceu:tin_alloy_small_fluid_pipe', 'create:andesite_casing', '2x #tfg:metal_bars')
		.itemOutputs('immersive_aircraft:engine')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	event.shaped('immersive_aircraft:sail', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'gtceu:wrought_iron_screw',
		B: '#forge:cloth',
		C: '#minecraft:trapdoors'
	}).id('tfg:immersive_aircraft/shaped/sail');

	event.shaped('immersive_aircraft:rotary_cannon', [
		'ABA',
		'ACA',
		' D '
	], {
		A: 'create:copper_sheet',
		B: 'minecraft:dispenser',
		C: 'gtceu:wrought_iron_gear',
		D: 'tfc:powderkeg'
	}).id('tfg:immersive_aircraft/shaped/rotary_cannon');

	event.shaped('immersive_aircraft:heavy_crossbow', [
		'ABA',
		'CDC',
		' A '
	], {
		A: '#minecraft:logs',
		B: 'gtceu:long_steel_rod',
		C: '#tfg:metal_chains',
		D: 'minecraft:crossbow'
	}).id('tfg:immersive_aircraft/shaped/heavy_crossbow');

	event.shaped('immersive_aircraft:telescope', [
		'ABC',
		' D ',
		' E '
	], {
		A: 'gtceu:small_brass_gear',
		B: 'minecraft:spyglass',
		C: '#forge:glass/colorless',
		D: 'gtceu:copper_rod',
		E: 'gtceu:wrought_iron_plate'
	}).id('tfg:immersive_aircraft/shaped/telescope');

	event.shaped('immersive_aircraft:bomb_bay', [
		'AAA',
		'ABA',
		'ACA'
	], {
		A: 'gtceu:steel_plate',
		B: 'tfc:powderkeg',
		C: 'minecraft:dispenser'
	}).id('tfg:immersive_aircraft/shaped/bomb_bay');

	//#region Airplane Upgrades

	event.shaped('immersive_aircraft:industrial_gears', [
		'ABA',
		'CAB',
		'ACA'
	], {
		A: 'gtceu:small_brass_gear',
		B: 'gtceu:double_wrought_iron_plate',
		C: 'gtceu:double_copper_plate'
	}).id('tfg:immersive_aircraft/shaped/industrial_gears');

	event.shaped('immersive_aircraft:sturdy_pipes', [
		'EDA',
		'BAC',
		'AD '
	], {
		A: '#forge:small_fluid_pipes',
		B: 'gtceu:blue_steel_plate',
		C: 'gtceu:red_steel_plate',
		D: 'gtceu:black_steel_screw',
		E: '#forge:tools/screwdrivers',
	}).id('tfg:immersive_aircraft/shaped/sturdy_pipes')

	event.recipes.gtceu.assembler('tfg:immersive_aircraft/assembler/sturdy_pipes')
		.itemInputs('gtceu:red_steel_plate', 'gtceu:blue_steel_plate', '3x #forge:small_fluid_pipes', '2x gtceu:black_steel_screw')
		.itemOutputs('immersive_aircraft:sturdy_pipes')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	event.shaped('immersive_aircraft:gyroscope', [
		'ABC',
		'DED',
		'FDG'
	], {
		A: '#forge:tools/wrenches',
		B: 'create:precision_mechanism',
		C: '#forge:gems/quartzite',
		D: 'gtceu:small_brass_gear',
		E: 'firmaciv:firmaciv_compass',
		F: '#forge:screws/blue_steel',
		G: '#forge:tools/screwdrivers'
	}).id('tfg:immersive_aircraft/shaped/gyroscope')

	event.recipes.gtceu.assembler('tfg:immersive_aircraft/assembler/gyroscope')
		.itemInputs('create:precision_mechanism', 'firmaciv:firmaciv_compass', '#forge:gems/quartzite', '3x gtceu:small_brass_gear', '#forge:screws/blue_steel')
		.itemOutputs('immersive_aircraft:gyroscope')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	event.shaped('immersive_aircraft:gyroscope_dials', [
		'ABC',
		'DED',
		'FDG'
	], {
		A: '#forge:tools/wrenches',
		B: '#gtceu:circuits/lv',
		C: 'gtceu:lv_sensor',
		D: 'gtceu:small_aluminium_gear',
		E: 'immersive_aircraft:gyroscope',
		F: '#forge:screws/vanadium_steel',
		G: '#forge:tools/screwdrivers'
	}).id('tfg:immersive_aircraft/shaped/gyroscope_dials')

	event.recipes.gtceu.assembler('tfg:immersive_aircraft/assembler/gyroscope_dials')
		.itemInputs('immersive_aircraft:gyroscope', 'gtceu:lv_sensor', '#gtceu:circuits/lv', '3x gtceu:small_aluminium_gear', '#forge:screws/vanadium_steel')
		.itemOutputs('immersive_aircraft:gyroscope_dials')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	event.shaped('immersive_aircraft:gyroscope_hud', [
		'ABC',
		'DED',
		'FDG'
	], {
		A: '#forge:tools/wrenches',
		B: 'gtceu:computer_monitor_cover',
		C: 'gtceu:mv_sensor',
		D: '#gtceu:circuits/mv',
		E: 'immersive_aircraft:gyroscope_dials',
		F: '#forge:screws/stainless_steel',
		G: '#forge:tools/screwdrivers'
	}).id('tfg:immersive_aircraft/shaped/gyroscope_hud')

	event.recipes.gtceu.assembler('tfg:immersive_aircraft/assembler/gyroscope_hud')
		.itemInputs('immersive_aircraft:gyroscope_dials', 'gtceu:mv_sensor', '3x #gtceu:circuits/mv', 'gtceu:computer_monitor_cover', '#forge:screws/stainless_steel')
		.itemOutputs('immersive_aircraft:gyroscope_hud')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	event.shaped('tfg:black_steel_plated_airplane_propeller', [
		'CA ',
		'ABA',
		' AD'
	], {
		A: 'gtceu:black_steel_plate',
		B: '#forge:rotors',
		C: '#forge:tools/hammers',
		D: '#forge:tools/wrenches'
	}).id('tfg:shaped/black_steel_plated_airplane_propeller');

	event.recipes.gtceu.assembler('tfg:assembler/black_steel_plated_airplane_propeller')
		.itemInputs('#forge:rotors', '4x gtceu:black_steel_plate')
		.itemOutputs('tfg:black_steel_plated_airplane_propeller')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	generateRecyclingRecipe('tfg:recycling/black_steel_plated_airplane_propeller',
		createRecyclingRecipeArgs('tfg:black_steel_plated_airplane_propeller', [GTMaterials.BlackSteel], [createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 3)]))

	event.shaped('tfg:redblu_steel_plated_airplane_propeller', [
		'AB ',
		'DED',
		' BF'
	], {
		A: '#forge:tools/hammers',
		B: 'gtceu:red_steel_plate',
		D: 'gtceu:blue_steel_plate',
		E: '#forge:rotors',
		F: '#forge:tools/wrenches'
	}).id('tfg:shaped/redblu_steel_plated_airplane_propeller');

	event.recipes.gtceu.assembler('tfg:assembler/redblu_steel_plated_airplane_propeller')
		.itemInputs('#forge:rotors', '2x gtceu:red_steel_plate', '2x gtceu:blue_steel_plate')
		.itemOutputs('tfg:redblu_steel_plated_airplane_propeller')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	generateRecyclingRecipe('tfg:recycling/redblu_steel_plated_airplane_propeller',
		createRecyclingRecipeArgs('tfg:redblu_steel_plated_airplane_propeller', [
			GTMaterials.RedSteel,
			GTMaterials.BlueSteel
		], [
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1)
		])
	);

	event.shaped('immersive_aircraft:enhanced_propeller', [
		'CA ',
		'ABA',
		' AD'
	], {
		A: 'vintageimprovements:aluminum_sheet',
		B: '#forge:rotors',
		C: '#forge:tools/hammers',
		D: '#forge:tools/wrenches'
	}).id('tfg:immersive_aircraft/shaped/enhanced_propeller');

	event.recipes.gtceu.assembler('tfg:immersive_aircraft/assembler/enhanced_propeller')
		.itemInputs('#forge:rotors', '4x vintageimprovements:aluminum_sheet')
		.itemOutputs('immersive_aircraft:enhanced_propeller')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	generateRecyclingRecipe('immersive_aircraft:recycling/enhanced_propeller',
		createRecyclingRecipeArgs('immersive_aircraft:enhanced_propeller', [GTMaterials.Aluminium], [createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 3)]))

	event.shaped('tfg:stainless_steel_plated_airplane_propeller', [
		'CA ',
		'ABA',
		' AD'
	], {
		A: 'gtceu:stainless_steel_plate',
		B: '#forge:rotors',
		C: '#forge:tools/hammers',
		D: '#forge:tools/wrenches'
	}).id('tfg:shaped/stainless_steel_plated_airplane_propeller');

	event.recipes.gtceu.assembler('tfg:assembler/stainless_steel_plated_airplane_propeller')
		.itemInputs('#forge:rotors', '4x gtceu:stainless_steel_plate')
		.itemOutputs('tfg:stainless_steel_plated_airplane_propeller')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	generateRecyclingRecipe('tfg:recycling/stainless_steel_plated_airplane_propeller',
		createRecyclingRecipeArgs('tfg:stainless_steel_plated_airplane_propeller', [GTMaterials.StainlessSteel], [createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 3)]))

	event.shaped('tfg:titanium_plated_airplane_propeller', [
		'CA ',
		'ABA',
		' AD'
	], {
		A: 'gtceu:titanium_plate',
		B: '#forge:rotors',
		C: '#forge:tools/hammers',
		D: '#forge:tools/wrenches'
	}).id('tfg:shaped/titanium_plated_airplane_propeller');

	event.recipes.gtceu.assembler('tfg:assembler/titanium_plated_airplane_propeller')
		.itemInputs('#forge:rotors', '4x gtceu:titanium_plate')
		.itemOutputs('tfg:titanium_plated_airplane_propeller')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	generateRecyclingRecipe('tfg:recycling/titanium_plated_airplane_propeller',
		createRecyclingRecipeArgs('tfg:titanium_plated_airplane_propeller', [GTMaterials.Titanium], [createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 3)]))

	event.shaped('immersive_aircraft:eco_engine', [
		'ABC',
		'BDB',
		'EEE'
	], {
		A: '#forge:tools/hammers',
		B: 'gtceu:double_rose_gold_plate',
		C: '#forge:tools/screwdrivers',
		D: 'immersive_aircraft:engine',
		E: 'gtceu:double_sterling_silver_plate'
	}).id('tfg:immersive_aircraft/shaped/eco_engine');

	event.recipes.gtceu.assembler('tfg:immersive_aircraft/assembler/eco_engine')
		.itemInputs('immersive_aircraft:engine', '3x gtceu:double_sterling_silver_plate', '3x gtceu:double_rose_gold_plate')
		.itemOutputs('immersive_aircraft:eco_engine')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	event.shaped('immersive_aircraft:steel_boiler', [
		'ABA',
		'ACA',
		'DAD'
	], {
		A: 'gtceu:steel_plate',
		B: 'gtceu:black_steel_rod',
		C: 'immersive_aircraft:engine',
		D: 'gtceu:tin_alloy_small_fluid_pipe'
	}).id('tfg:immersive_aircraft/shaped/steel_boiler');

	generateRecyclingRecipe('immersive_aircraft:recycling/steel_boiler',
		createRecyclingRecipeArgs('immersive_aircraft:steel_boiler', [
			GTMaterials.Steel,
			GTMaterials.TinAlloy,
			GTMaterials.WroughtIron,
			GTMaterials.BlackSteel
		], [
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 3),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 3),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1),
			createMaterialsToResults(TagPrefix.dustTiny, TagPrefix.nugget, 4)
		])
	)

	event.shaped('tfg:lv_aircraft_engine', [
		'ABC',
		'DED',
		'FGF'
	], {
		A: 'gtceu:red_steel_plate',
		B: 'gtceu:black_steel_plate',
		C: 'gtceu:blue_steel_plate',
		D: 'gtceu:lv_electric_piston',
		E: 'immersive_aircraft:engine',
		F: 'gtceu:tin_single_cable',
		G: 'gtceu:lv_electric_pump'
	}).id('tfg:shaped/lv_aircraft_engine')

	generateRecyclingRecipe('tfg:recycling/lv_aircraft_engine',
		createRecyclingRecipeArgs('tfg:lv_aircraft_engine', [
			GTMaterials.Steel,
			GTMaterials.Tin,
			GTMaterials.Copper,
			GTMaterials.Bronze,
			GTMaterials.RedSteel,
			GTMaterials.BlueSteel,
			GTMaterials.BlackSteel,
			GTMaterials.RedAlloy,
			GTMaterials.TinAlloy
		], [
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 10),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 7),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 4),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 2),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1)
		])
	)

	event.shaped('immersive_aircraft:nether_engine', [
		'AAA',
		'BCB',
		'DED'
	], {
		A: 'vintageimprovements:aluminum_sheet',
		B: 'gtceu:mv_electric_piston',
		C: 'immersive_aircraft:engine',
		D: 'gtceu:copper_single_cable',
		E: 'gtceu:mv_electric_pump'
	}).id('tfg:immersive_aircraft/shaped/nether_engine')

	generateRecyclingRecipe('immersive_aircraft:recycling/nether_engine',
		createRecyclingRecipeArgs('immersive_aircraft:nether_engine', [
			GTMaterials.Aluminium,
			GTMaterials.Cupronickel,
			GTMaterials.AnnealedCopper,
			GTMaterials.Steel,
			GTMaterials.Bronze,
			GTMaterials.TinAlloy,
			GTMaterials.WroughtIron
		], [
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 12),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 9),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 3),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 3),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 3),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1)
		])
	)

	event.shaped('tfg:hv_aircraft_engine', [
		'AAA',
		'BCB',
		'DED'
	], {
		A: 'gtceu:stainless_steel_plate',
		B: 'gtceu:hv_electric_piston',
		C: 'immersive_aircraft:engine',
		D: 'gtceu:silver_double_cable',
		E: 'gtceu:hv_electric_pump',
	}).id('tfg:shaped/hv_aircraft_engine')

	generateRecyclingRecipe('tfg:recycling/hv_aircraft_engine',
		createRecyclingRecipeArgs('tfg:hv_aircraft_engine', [
			GTMaterials.StainlessSteel,
			GTMaterials.Electrum,
			GTMaterials.Silver,
			GTMaterials.Steel,
			GTMaterials.Gold,
			GTMaterials.TinAlloy,
			GTMaterials.WroughtIron
		], [
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 14),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 9),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 5),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 3),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1),
		])
	)

	event.shaped('tfg:ev_aircraft_engine', [
		'AAA',
		'BCB',
		'DED'
	], {
		A: 'gtceu:titanium_plate',
		B: 'gtceu:ev_electric_piston',
		C: 'immersive_aircraft:engine',
		D: 'gtceu:aluminium_quadruple_cable',
		E: 'gtceu:ev_electric_pump',
	}).id('tfg:shaped/ev_aircraft_engine')

	generateRecyclingRecipe('tfg:recycling/ev_aircraft_engine',
		createRecyclingRecipeArgs('tfg:ev_aircraft_engine', [
			GTMaterials.Titanium,
			GTMaterials.Aluminium,
			GTMaterials.Kanthal,
			GTMaterials.StainlessSteel,
			GTMaterials.Neodymium,
			GTMaterials.TinAlloy,
			GTMaterials.WroughtIron
		], [
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 14),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 9),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 9),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 2),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1),
		])
	);

	event.shaped('immersive_aircraft:hull_reinforcement', [
		'AB ',
		'BCB',
		' BD'
	], {
		A: '#forge:tools/hammers',
		B: 'gtceu:black_steel_plate',
		C: 'immersive_aircraft:hull',
		D: '#forge:tools/wrenches'
	}).id('tfg:immersive_aircraft/shaped/hull_reinforcement');

	event.recipes.gtceu.assembler('tfg:immersive_aircraft/assembler/hull_reinforcement')
		.itemInputs('immersive_aircraft:hull', '4x gtceu:black_steel_plate')
		.itemOutputs('immersive_aircraft:hull_reinforcement')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	generateRecyclingRecipe('immersive_aircraft:recycling/hull_reinforcement',
		createRecyclingRecipeArgs('immersive_aircraft:hull_reinforcement', [
			GTMaterials.BlackSteel,
			GTMaterials.WroughtIron
		], [
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 3),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1)
		])
	)

	event.shaped('tfg:redblu_steel_hull_reinforcement', [
		'AB ',
		'ECE',
		' BD'
	], {
		A: '#forge:tools/hammers',
		B: 'gtceu:red_steel_plate',
		C: 'immersive_aircraft:hull',
		D: '#forge:tools/wrenches',
		E: 'gtceu:blue_steel_plate'
	}).id('tfg:shaped/redblu_steel_hull_reinforcement');

	event.recipes.gtceu.assembler('tfg:assembler/redblu_steel_hull_reinforcement')
		.itemInputs('immersive_aircraft:hull', '2x gtceu:red_steel_plate', '2x gtceu:blue_steel_plate')
		.itemOutputs('tfg:redblu_steel_hull_reinforcement')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	generateRecyclingRecipe('tfg:recycling/redblu_steel_hull_reinforcement',
		createRecyclingRecipeArgs('tfg:redblu_steel_hull_reinforcement', [
			GTMaterials.BlueSteel,
			GTMaterials.RedSteel,
			GTMaterials.RedAlloy,
			GTMaterials.WroughtIron
		], [
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1),
		])
	);

	event.shaped('tfg:aluminium_hull_reinforcement', [
		'AB ',
		'BCB',
		' BD'
	], {
		A: '#forge:tools/hammers',
		B: 'vintageimprovements:aluminum_sheet',
		C: 'immersive_aircraft:hull',
		D: '#forge:tools/wrenches'
	}).id('tfg:shaped/aluminium_hull_reinforcement');

	event.recipes.gtceu.assembler('tfg:assembler/aluminium_hull_reinforcement')
		.itemInputs('immersive_aircraft:hull', '4x vintageimprovements:aluminum_sheet')
		.itemOutputs('tfg:aluminium_hull_reinforcement')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	generateRecyclingRecipe('tfg:recycling/aluminium_hull_reinforcement',
		createRecyclingRecipeArgs('tfg:aluminium_hull_reinforcement', [
			GTMaterials.Aluminium,
			GTMaterials.WroughtIron
		], [
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 3),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1)
		])
	)

	event.shaped('tfg:stainless_steel_hull_reinforcement', [
		'AB ',
		'BCB',
		' BD'
	], {
		A: '#forge:tools/hammers',
		B: 'gtceu:stainless_steel_plate',
		C: 'immersive_aircraft:hull',
		D: '#forge:tools/wrenches'
	}).id('tfg:shaped/stainless_steel_hull_reinforcement');

	event.recipes.gtceu.assembler('tfg:assembler/stainless_steel_hull_reinforcement')
		.itemInputs('immersive_aircraft:hull', '4x gtceu:stainless_steel_plate')
		.itemOutputs('tfg:stainless_steel_hull_reinforcement')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	generateRecyclingRecipe('tfg:recycling/stainless_steel_hull_reinforcement',
		createRecyclingRecipeArgs('tfg:stainless_steel_hull_reinforcement', [
			GTMaterials.StainlessSteel,
			GTMaterials.WroughtIron
		], [
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 3),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1)
		])
	)

	event.shaped('tfg:titanium_hull_reinforcement', [
		'AB ',
		'BCB',
		' BD'
	], {
		A: '#forge:tools/hammers',
		B: 'gtceu:titanium_plate',
		C: 'immersive_aircraft:hull',
		D: '#forge:tools/wrenches'
	}).id('tfg:shaped/titanium_hull_reinforcement');

	event.recipes.gtceu.assembler('tfg:assembler/titanium_hull_reinforcement')
		.itemInputs('immersive_aircraft:hull', '4x gtceu:titanium_plate')
		.itemOutputs('tfg:titanium_hull_reinforcement')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	generateRecyclingRecipe('tfg:recycling/titanium_hull_reinforcement',
		createRecyclingRecipeArgs('tfg:titanium_hull_reinforcement', [
			GTMaterials.Titanium,
			GTMaterials.WroughtIron
		], [
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 3),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 1)
		])
	)

	event.shaped('immersive_aircraft:improved_landing_gear', [
		'ABC',
		'DEB',
		'DDF'
	], {
		A: '#forge:tools/wrenches',
		B: 'gtceu:black_steel_plate',
		C: 'gtceu:black_steel_rod',
		D: '#tfg:rubber_plates',
		E: 'gtceu:small_brass_gear',
		F: '#forge:tools/screwdrivers'
	}).id('tfg:immersive_aircraft/shaped/improved_landing_gear');

	event.recipes.gtceu.assembler('tfg:immersive_aircraft/assembler/improved_landing_gear')
		.itemInputs('3x #tfg:rubber_plates', 'gtceu:small_brass_gear', '2x gtceu:black_steel_plate', 'gtceu:black_steel_rod')
		.itemOutputs('immersive_aircraft:improved_landing_gear')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	generateRecyclingRecipe('immersive_aircraft:recycling/improved_landing_gear',
		createRecyclingRecipeArgs('immersive_aircraft:improved_landing_gear', [
			GTMaterials.BlackSteel,
			GTMaterials.Brass
		], [
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 2),
			createMaterialsToResults(TagPrefix.dustTiny, TagPrefix.nugget, 7),
		])
	);

	event.shaped('tfg:redblu_steel_landing_gear', [
		'ABC',
		'DEB',
		'DDF'
	], {
		A: '#forge:tools/wrenches',
		B: 'gtceu:red_steel_plate',
		C: 'gtceu:blue_steel_rod',
		D: '#tfg:rubber_plates',
		E: 'gtceu:small_brass_gear',
		F: '#forge:tools/screwdrivers'
	}).id('tfg:shaped/redblu_steel_landing_gear')

	event.recipes.gtceu.assembler('tfg:assembler/redblu_steel_landing_gear')
		.itemInputs('3x #tfg:rubber_plates', 'gtceu:small_brass_gear', '2x gtceu:red_steel_plate', 'gtceu:blue_steel_rod')
		.itemOutputs('tfg:redblu_steel_landing_gear')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	generateRecyclingRecipe('tfg:recycling/redblu_steel_landing_gear',
		createRecyclingRecipeArgs('tfg:redblu_steel_landing_gear', [
			GTMaterials.RedSteel,
			GTMaterials.BlueSteel,
			GTMaterials.Brass,
		], [
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 2),
			createMaterialsToResults(TagPrefix.dustTiny, TagPrefix.nugget, 3),
			createMaterialsToResults(TagPrefix.dustTiny, TagPrefix.nugget, 7),
		])
	);

	event.shaped('tfg:aluminium_landing_gear', [
		'ABC',
		'DEB',
		'DDF'
	], {
		A: '#forge:tools/wrenches',
		B: 'vintageimprovements:aluminum_sheet',
		C: 'gtceu:aluminium_rod',
		D: '#tfg:rubber_plates',
		E: 'gtceu:cobalt_brass_gear',
		F: '#forge:tools/screwdrivers'
	}).id('tfg:shaped/aluminium_landing_gear')

	event.recipes.gtceu.assembler('tfg:assembler/aluminium_landing_gear')
		.itemInputs('3x #tfg:rubber_plates', 'gtceu:cobalt_brass_gear', '2x vintageimprovements:aluminum_sheet', 'gtceu:aluminium_rod')
		.itemOutputs('tfg:aluminium_landing_gear')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	generateRecyclingRecipe('tfg:recycling/aluminium_landing_gear',
		createRecyclingRecipeArgs('tfg:aluminium_landing_gear', [
			GTMaterials.Aluminium,
			GTMaterials.CobaltBrass
		], [
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 2),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 3),
		])
	);

	event.shaped('tfg:stainless_steel_landing_gear', [
		'ABC',
		'DEB',
		'DDF'
	], {
		A: '#forge:tools/wrenches',
		B: 'gtceu:stainless_steel_plate',
		C: 'gtceu:stainless_steel_rod',
		D: '#tfg:rubber_plates',
		E: 'gtceu:cobalt_brass_gear',
		F: '#forge:tools/screwdrivers'
	}).id('tfg:shaped/stainless_steel_landing_gear');

	event.recipes.gtceu.assembler('tfg:assembler/stainless_steel_landing_gear')
		.itemInputs('3x #tfg:rubber_plates', 'gtceu:cobalt_brass_gear', '2x gtceu:stainless_steel_plate', 'gtceu:stainless_steel_rod')
		.itemOutputs('tfg:stainless_steel_landing_gear')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	generateRecyclingRecipe('tfg:recycling/stainless_steel_landing_gear',
		createRecyclingRecipeArgs('tfg:stainless_steel_landing_gear', [
			GTMaterials.StainlessSteel,
			GTMaterials.CobaltBrass
		], [
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 2),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 3),
		])
	);

	event.shaped('tfg:titanium_landing_gear', [
		'ABC',
		'DEB',
		'DDF'
	], {
		A: '#forge:tools/wrenches',
		B: 'gtceu:titanium_plate',
		C: 'gtceu:titanium_rod',
		D: '#tfg:rubber_plates',
		E: 'gtceu:cobalt_brass_gear',
		F: '#forge:tools/screwdrivers'
	}).id('tfg:shaped/titanium_landing_gear');

	event.recipes.gtceu.assembler('tfg:assembler/titanium_landing_gear')
		.itemInputs('3x #tfg:rubber_plates', 'gtceu:cobalt_brass_gear', '2x gtceu:titanium_plate', 'gtceu:titanium_rod')
		.itemOutputs('tfg:titanium_landing_gear')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	generateRecyclingRecipe('tfg:recycling/titanium_landing_gear',
		createRecyclingRecipeArgs('tfg:titanium_landing_gear', [
			GTMaterials.Titanium,
			GTMaterials.CobaltBrass
		], [
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 2),
			createMaterialsToResults(TagPrefix.dust, TagPrefix.ingot, 3),
		])
	);
	//#endregion

	//#region Aircrafts

	event.shaped('immersive_aircraft:quadrocopter', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: '#forge:rotors',
		B: '#create:seats',
		C: 'gtceu:long_wood_rod',
		D: 'tfg:scaffolding_frame',
		E: 'immersive_aircraft:engine'
	}).id('tfg:immersive_aircraft/shaped/quadrocopter');

	event.shaped('immersive_aircraft:airship', [
		'ABA',
		'CDE',
		'FGA'
	], {
		A: 'immersive_aircraft:sail',
		B: 'tfg:airship_balloon',
		C: 'immersive_aircraft:engine',
		D: '#create:seats',
		E: 'firmaciv:rope_coil',
		F: '#forge:rotors',
		G: 'tfg:airship_hull'
	}).id('tfg:immersive_aircraft/shaped/airship')

	event.shaped('immersive_aircraft:cargo_airship', [
		'ABA',
		'CDC',
		'EFE'
	], {
		A: '#forge:rotors',
		B: '#forge:tools/hammers',
		C: 'immersive_aircraft:engine',
		D: 'immersive_aircraft:airship',
		E: 'gtceu:wood_crate',
		F: '#forge:tools/screwdrivers'
	}).id('tfg:immersive_aircraft/shaped/cargo_airship')

	event.recipes.gtceu.assembler('tfg:immersive_aircraft/assembler/cargo_airship')
		.itemInputs('immersive_aircraft:airship', '2x immersive_aircraft:engine', '2x gtceu:wood_crate', '2x #forge:rotors')
		.itemOutputs('immersive_aircraft:cargo_airship')
		.duration(10 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	//WAAGH!
	event.recipes.create.mechanical_crafting('immersive_aircraft:warship', [
		'ABCC ',
		' DDD ',
		' EEEF',
		' EGEH',
		' EEEF',
		' DDD '
	], {
		A: 'tfg:redblu_steel_plated_airplane_propeller',
		B: 'tfg:lv_aircraft_engine',
		C: 'tfg:airship_balloon',
		D: 'gtceu:wrought_iron_plate',
		E: 'immersive_aircraft:hull',
		F: 'gtceu:wrought_iron_rod',
		G: 'immersive_aircraft:cargo_airship',
		H: '#create:seats'
	}).id('tfg:immersive_aircraft/mechanical_crafter/warship')

	event.recipes.create.mechanical_crafting('immersive_aircraft:gyrodyne', [
		'   A   ',
		'   B   ',
		'CCDDDCC',
		'BBDEDBB',
		' FDDDF ',
		'   B   ',
		'   G   ',
	], {
		A: 'tfg:redblu_steel_plated_airplane_propeller',
		B: 'gtceu:long_treated_wood_rod',
		C: 'immersive_aircraft:sail',
		D: 'immersive_aircraft:hull',
		E: '#create:seats',
		F: 'create:hand_crank',
		G: 'gtceu:wrought_iron_double_ingot'
	}).id('tfg:immersive_aircraft/mechanical_crafter/gyrodyne')

	event.recipes.create.mechanical_crafting('man_of_many_planes:economy_plane', [
		' AABCBAA ',
		'ADDBEBDDA',
		' FGBHBGF ',
		'    D    ',
		'    D    ',
		'   DAD   ',
		'   DDD   ',
		'   AAA   '
	], {
		A: 'immersive_aircraft:sail',
		B: 'gtceu:blue_steel_plate',
		C: 'tfg:black_steel_plated_airplane_propeller',
		D: 'gtceu:long_treated_wood_rod',
		E: '#create:seats',
		F: 'gtceu:black_steel_rotor',
		G: 'greate:rubber_belt_connector',
		H: 'immersive_aircraft:steel_boiler'
	}).id('tfg:man_of_many_planes/mechanical_crafter/economy_plane');

	event.recipes.create.mechanical_crafting('immersive_aircraft:biplane', [
		'   A   ',
		'BFBCBFB',
		'  FDF  ',
		'  BBB  ',
		'   B   ',
		'   E   ',
		'  BEB  ',
		'   B   '
	], {
		A: 'immersive_aircraft:enhanced_propeller',
		B: 'immersive_aircraft:hull',
		C: 'tfg:lv_aircraft_engine',
		D: 'man_of_many_planes:economy_plane',
		E: 'gtceu:treated_wood_plate',
		F: 'gtceu:treated_wood_frame'
	}).id('tfg:immersive_aircraft/mechanical_crafter/biplane')

	event.recipes.create.mechanical_crafting('man_of_many_planes:scarlet_biplane', [
		'    A    ',
		'    B    ',
		'CCCDEDCCC',
		' F DDD F ',
		' CCDGDCC ',
		'    H    ',
		'   CHC   ',
		'    C    '
	], {
		A: 'tfg:stainless_steel_plated_airplane_propeller',
		B: 'immersive_aircraft:nether_engine',
		C: 'immersive_aircraft:hull',
		D: 'gtceu:red_steel_plate',
		E: 'immersive_aircraft:biplane',
		F: 'gtceu:black_steel_frame',
		G: '#create:seats',
		H: 'tfc:metal/ingot/red_steel'
	}).id('tfg:man_of_many_planes/mechanical_crafter/scarlet_biplane')

	event.recipes.create.mechanical_crafting('immersive_aircraft:bamboo_hopper', [
		'  A   A  ',
		'BBCHBHCBB',
		'  DEFED  ',
		'  DGGGD  ',
		'  D   D  ',
		' BHBGBHB ',
		'  B   B  '
	], {
		A: 'tfg:stainless_steel_plated_airplane_propeller',
		B: 'immersive_aircraft:hull',
		C: 'immersive_aircraft:nether_engine',
		D: 'gtceu:long_aluminium_rod',
		E: '#create:seats',
		F: 'immersive_aircraft:biplane',
		G: 'gtceu:double_aluminium_plate',
		H: 'gtceu:aluminium_frame'
	}).id('tfg:immersive_aircraft/mechanical_crafter/bamboo_hopper')

	//#endregion

	// Custom stuff

	//Scaffolding Frame
	event.shaped('tfg:scaffolding_frame',
		[
			' A ',
			'ABA',
			' A '
		],
		{
			A: '#forge:rods/wood',
			B: '#forge:cloth'
		}).id('tfg:shaped/scaffolding_frame');

	//Airship Hull
	event.shaped('tfg:airship_hull', [
		'A B',
		'C C',
		'CCC'
	], {
		A: '#forge:tools/screwdrivers',
		B: '#forge:tools/hammers',
		C: 'immersive_aircraft:hull'
	}).id('tfg:shaped/airship_hull');
	event.recipes.gtceu.assembler('tfg:assembler/airship_hull')
		.itemInputs('5x immersive_aircraft:hull')
		.itemOutputs('tfg:airship_hull')
		.duration(40)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.ULV]);

	//Airship Balloon
	event.shaped('tfg:airship_balloon', [
		'ABA',
		'BAB',
		'ABA'
	], {
		A: '#forge:string',
		B: 'immersive_aircraft:sail'
	}).id('tfg:shaped/airship_balloon')

	event.recipes.gtceu.assembler('tfg:assembler/airship_balloon')
		.itemInputs('4x immersive_aircraft:sail', '4x #forge:string')
		.itemOutputs('tfg:airship_balloon')
		.duration(40)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.ULV])
}