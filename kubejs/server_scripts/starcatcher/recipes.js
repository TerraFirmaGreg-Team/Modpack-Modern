// priority: 0
"use strict";

const registerStarcatcherRecipes = (event) => {
	if (!Platform.isLoaded("starcatcher")) return;

	global.STARCATCHER_DISABLED_ITEMS.forEach(item => {
		event.remove({output: item});
		event.remove({input: item});
	});
	event.remove({input: '#tfc:holds_large_fishing_bait'});
	event.remove({input: '#tfc:holds_small_fishing_bait'});

	// Twine
	TFGHelpers.registerMaterialInfo('starcatcher:starcatcher_twine', [GTMaterials.Wood, 1/4]);
	event.remove({id: 'starcatcher:twine'});
	event.shaped('starcatcher:starcatcher_twine', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: '#forge:string',
		B: '#forge:rods/wood'
	}).id('tfg:starcatcher/shaped/twine');

	// Tournament Stand
	TFGHelpers.registerMaterialInfo('starcatcher:tournament_stand', [GTMaterials.Wood, 10]);
	event.remove({id: 'starcatcher:stand'});
	event.recipes.tfc.no_remainder_shaped_crafting(
		event.shaped('starcatcher:tournament_stand', [
			'AA ',
			'BC '
		], {
			A: '#create:dyed_table_cloths',
			B: '#tfc:barrels',
			C: 'starcatcher:starcatcher_guide'
		})
	).id('tfg:starcatcher/shaped/tournament_stand');

	// Bobber
	TFGHelpers.registerMaterialInfo('starcatcher:bobber', [GTMaterials.Wood, 2/4]);
	event.remove({id: 'starcatcher:bobber'});
	event.shapeless('starcatcher:bobber', [
		'#forge:rods/wood','firmalife:cork'
	]).id('tfg:starcatcher/shaped/bobber');

	// Vanilla Bobber
	TFGHelpers.registerMaterialInfo('starcatcher:vanilla_bobber', [GTMaterials.get('starcatcher:bobber'), 1]);
	event.remove({id: 'starcatcher:vanilla_bobber'});
	event.shapeless('starcatcher:vanilla_bobber', [
		'starcatcher:bobber','minecraft:clay'
	]).id('tfg:starcatcher/shaped/vanilla_bobber');

	// Steady Bobber
	TFGHelpers.registerMaterialInfo('starcatcher:steady_bobber', [GTMaterials.get('starcatcher:bobber'), 1, GTMaterials.get('tfg:bakelite'), 2]);
	event.remove({id: 'starcatcher:steady_bobber'});
	event.recipes.gtceu.fluid_solidifier('tfg:starcatcher/steady_bobber')
		.duration(30 * 20)
		.EUt(GTValues.VA[GTValues.LV])
		.itemInputs('starcatcher:bobber')
		.itemOutputs('starcatcher:steady_bobber')
		.inputFluids(Fluid.of('tfg:bakelite', 288))

	// Clear Bobber
	TFGHelpers.registerMaterialInfo('starcatcher:clear_bobber', [GTMaterials.Glass, 1]);
	event.remove({id: 'starcatcher:clear_bobber'});
	event.recipes.tfc.glassworking(
        'starcatcher:clear_bobber',
        '#tfc:glass_batches',
        [
			'iron',
            'blow',
            'blow',
            'saw'
        ]
    ).id('tfg:starcatcher/glassworking/clear_bobber');

	event.recipes.gtceu.alloy_smelter('tfg:starcatcher/clear_bobber/glass_batch')
		.itemInputs('#tfc:glass_batches')
		.notConsumable('gtceu:pill_casting_mold')
		.itemOutputs('starcatcher:clear_bobber')
		.duration(30 * 20)
		.EUt(GTValues.VA[GTValues.ULV])
		.category(GTRecipeCategories.INGOT_MOLDING);
	event.recipes.gtceu.alloy_smelter('tfg:starcatcher/clear_bobber/glass_dust')
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Glass, 1))
		.notConsumable('gtceu:pill_casting_mold')
		.itemOutputs('starcatcher:clear_bobber')
		.duration(30 * 20)
		.EUt(GTValues.VA[GTValues.ULV])
		.category(GTRecipeCategories.INGOT_MOLDING);

	// Starcatcher Fishing Rod
	TFGHelpers.registerMaterialInfo('starcatcher:starcatcher_rod', [GTMaterials.Wood, 1]);
	event.remove({id: 'starcatcher:rod'});
	event.shaped('starcatcher:starcatcher_rod', [
		'  A',
		'CAB',
		'ADE'
	], {
		A: '#forge:rods/wood',
		B: 'starcatcher:starcatcher_twine',
		C: '#forge:tools/knives',
		D: 'starcatcher:bobber',
		E: 'starcatcher:hook'
	}).id('tfg:starcatcher/shaped/rod');

	// Hook
	TFGHelpers.registerMaterialInfo('starcatcher:hook', [GTMaterials.Wood, 1]);
	event.remove({id: 'starcatcher:hook'});
	event.recipes.tfc.knapping(
		'starcatcher:hook',
		'tfg:bone',
		[
			'   X ',
			'    X',
			'    X',
			' X  X',
			' XXX '
		]
	).outsideSlotRequired(false).id('tfg:starcatcher/knapping/hook');

	// Radar
	TFGHelpers.registerMaterialInfo('starcatcher:fish_radar', [GTMaterials.Aluminium, 1, GTMaterials.get(GTCraftingComponents.SENSOR.get(GTValues.MV)), 1, GTMaterials.WroughtIron, 2 + 4/9, GTMaterials.Copper, 1/4]);
	event.shaped('starcatcher:fish_radar', [
		'CCA',
		'BBB'
	], {
		A: GTCraftingComponents.SENSOR.get(GTValues.MV),
		B: 'create:display_board',
		C: ChemicalHelper.get(TagPrefix.plate, GTMaterials.Aluminium, 1)
	}).id('tfg:starcatcher/shaped/fish_radar');


};
