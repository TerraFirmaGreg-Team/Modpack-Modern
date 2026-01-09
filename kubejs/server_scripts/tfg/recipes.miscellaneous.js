// priority: 0
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS_} event 
 */
function registerTFGMiscellaneousRecipes(event) {

	//Moss
	event.replaceInput({ input: 'minecraft:vine' }, 'minecraft:vine', '#tfc:moss')

	event.shapeless('1x minecraft:moss_block', [
		'#tfc:dirt',
		'#tfc:moss'
	]).id(`tfg:shapeless/moss_block`)

	event.shaped('6x minecraft:moss_carpet', [
		'AA'
	], {
		A: 'minecraft:moss_block'
	}).id(`tfg:shaped/moss_carpet`)

	// Universal Circuit
	global.UNIVERSAL_CIRCUIT_TIERS.forEach(tier => {
		event.shapeless(Item.of(`tfg:${tier}_universal_circuit`, 1), [Ingredient.of([`#gtceu:circuits/${tier}`]).subtract([`tfg:${tier}_universal_circuit`])]
		).id(`universal_circuits_${tier}`);
	});

	// Armor stands
	event.shapeless('1x tfg:armor_stand_arms', [
		'minecraft:armor_stand'
	]).id(`tfg:shapeless/armor_stand_arms`)

	event.shapeless('1x minecraft:armor_stand', [
		'tfg:armor_stand_arms'
	]).id(`tfg:shapeless/armor_stand`)

	// Piglin disguise
	event.recipes.tfc.sewing(
		'1x tfg:piglin_disguise',
		[
			0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 1, 1, 0, 0, 0, 1, 1, 0,
			0, 1, 1, 1, 0, 1, 1, 1, 0,
			0, 0, 1, 1, 0, 1, 1, 0, 0,
			0, 0, 1, 1, 0, 1, 1, 0, 0
		], [
		1, 1, 1, 1, 1, 1, 1, 1,
		1, 0, 1, 0, 0, 1, 0, 1,
		1, -1, 0, 0, 0, 0, -1, 1,
		1, -1, 0, 0, 0, 0, -1, 1
	]
	).id('tfg:sewing/piglin_disguise')

	//Trowel
	event.shaped('tfg:trowel', [
		'DBC',
		'AA ',
		'   '
	], {
		A: ChemicalHelper.get(TagPrefix.plate, GTMaterials.Invar, 1),
		B: '#forge:screws',
		C: '#tfc:lumber',
		D: '#forge:tools/screwdrivers'
	}).id('tfg:shaped/trowel')

	event.recipes.gtceu.assembler('tfg:assembler/trowel')
		.itemInputs(ChemicalHelper.get(TagPrefix.plate, GTMaterials.Invar, 2), '1x #forge:screws', '1x #tfc:lumber')
		.itemOutputs('1x tfg:trowel')
		.duration(40)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.ULV])

	// Etching Tip
	event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless('tfg:etching_diamond_tip', [
		'#forge:tools/hammers',
		'#tfc:chisels',
		'minecraft:diamond'
	]));

	event.replaceInput({ id: "minecraft:jukebox" }, 'minecraft:diamond', 'tfg:etching_diamond_tip');

	// Interplanetary ae2 card
	event.recipes.gtceu.assembler('tfg:wireless_card')
		.itemInputs(
			'ae2:advanced_card',
			'4x ae2:wireless_booster',
			'ae2:cell_component_16k',
			'2x ae2:wireless_receiver',
			'2x gtceu:ev_emitter',
			'#forge:exquisite_gems/fluix',
			'2x #forge:plates/ruthenium')
		.inputFluids(Fluid.of('gtceu:epoxy', 144))
		.itemOutputs('tfg:wireless_card')
		.duration(300)
		.EUt(GTValues.VA[GTValues.EV])

	// Replace bronze drums & crates with a tag containing the 3 different bronzes
	// NOTE: A better way to do this would be to overwrite GTCraftingComponents.CRATE and GTCraftingComponents.DRUM in crafting_components.js, but tags seem to get populated after the recipes get registed, so...
	event.replaceInput({ input: 'gtceu:bronze_crate' }, 'gtceu:bronze_crate', '#tfg:any_bronze_crate')
	event.replaceInput({ input: 'gtceu:bronze_drum' , not: { id: 'gtceu:shapeless/drum_nbt_bronze' }}, 'gtceu:bronze_drum', '#tfg:any_bronze_drum')

	//#region RNR Paving Cart
	const rubber_types = [
		{ fluid: 'styrene_butadiene_rubber', quantity: 144 },
		{ fluid: 'silicone_rubber', quantity: 288 },
		{ fluid: 'rubber', quantity: 576 }
	];
	rubber_types.forEach((rubber) => {
		event.recipes.gtceu.assembler(`tfg:cobalt_brass_wheel/${rubber.fluid}`)
			.itemInputs(
				ChemicalHelper.get(TagPrefix.rod, GTMaterials.CobaltBrass, 8),
				Ingredient.of('firmaciv:rope_coil'),
				Ingredient.of('#forge:screws/any_bronze').withCount(4)
			)
			.inputFluids(Fluid.of(`gtceu:${rubber.fluid}`, rubber.quantity))
			.itemOutputs('tfg:cobalt_brass_wheel')
			.duration(20 * 10)
			.EUt(GTValues.VA[GTValues.LV])
	});
	TFGHelpers.registerMaterialInfo('tfg:cobalt_brass_wheel', { 'rubber': 1, 'cobalt_brass': 4 });

	event.recipes.create.mechanical_crafting('tfg:cobalt_brass_wheel', [
		'  D  ',
		'CAAAC',
		'DABAD',
		'CAAAC',
		'  D  '

	], {
		A: '#forge:rods/cobalt_brass',
		B: 'firmaciv:rope_coil',
		C: '#forge:screws/any_bronze',
		D: '#forge:plates/rubber'
	}).id('tfg:mechanical_crafter/cobalt_brass_wheel')

	const mattock_types = ['red', 'blue'];
	mattock_types.forEach((type) => {
		event.recipes.gtceu.assembler(`tfg:rnr_plow/${type}_steel`)
			.itemInputs(
				ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.CobaltBrass, 1),
				ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.TreatedWood, 2),
				ChemicalHelper.get(TagPrefix.plate, GTMaterials.Invar, 4),
				ChemicalHelper.get(TagPrefix.spring, GTMaterials.Steel, 2),
				Ingredient.of('tfg:cobalt_brass_wheel').withCount(2),
				Ingredient.of('create:chute').withCount(1),
				Ingredient.of(`#forge:mattock_heads/${type}_steel`).withCount(3)
			)
			.itemOutputs('tfg:rnr_plow')
			.duration(20 * 60)
			.EUt(GTValues.VA[GTValues.LV])

		event.recipes.create.mechanical_crafting('tfg:rnr_plow', [
			' B B ',
			'ECACE',
			'DCFCD',
			' GGG '
		], {
			A: '#forge:rods/long/cobalt_brass',
			B: '#forge:rods/long/treated_wood',
			C: '#forge:plates/invar',
			D: '#forge:springs/steel',
			E: 'tfg:cobalt_brass_wheel',
			F: 'create:chute',
			G: `#forge:mattock_heads/${type}_steel`
		}).id(`tfg:mechanical_crafter/rnr_plow/${type}_steel`)
	});
	TFGHelpers.registerMaterialInfo('tfg:rnr_plow', { 'cobalt_brass': 9, 'invar': 4, 'steel': 2, 'wrought_iron': 3, 'treated_wood': 2 });

	//#endregion
}
