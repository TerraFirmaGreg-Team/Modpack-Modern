// priority: 0
"use strict";


/**
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processTFCArmor(event, material) {

	const materialName = material.getName();

	const plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1);
	const doublePlateItem = ChemicalHelper.get(TagPrefix.plateDouble, material, 1);

	// Helmet
	const unfinishedHelmet = `tfc:metal/unfinished_helmet/${materialName}`;
	const finishedHelmet = `tfc:metal/helmet/${materialName}`;

	addAnvilRecipe(event, unfinishedHelmet, doublePlateItem, ['hit_last', 'bend_second_last', 'bend_third_last'], true, material, 'unfinished_helmet');
	addTFCMelting(event, unfinishedHelmet, material, 144 * 2, 'unfinished_helmet');
	addTFCMelting(event, finishedHelmet, material, 144 * 3, 'helmet');
	addMaterialWelding(event, finishedHelmet, unfinishedHelmet, plateItem, material, 4, 0);

	// Chestplate
	const unfinishedChestplate = `tfc:metal/unfinished_chestplate/${materialName}`;
	const finishedChestplate = `tfc:metal/chestplate/${materialName}`;

	addAnvilRecipe(event, unfinishedChestplate, doublePlateItem, ['hit_last', 'hit_second_last', 'upset_third_last'], true, material, 'unfinished_chestplate');
	addTFCMelting(event, unfinishedChestplate, material, 144 * 2, 'unfinished_chestplate');
	addTFCMelting(event, finishedChestplate, material, 144 * 4, 'chestplate');
	addMaterialWelding(event, finishedChestplate, unfinishedChestplate, doublePlateItem, material, 4, 0);

	// Greaves
	const unfinishedGreaves = `tfc:metal/unfinished_greaves/${materialName}`;
	const finishedGreaves = `tfc:metal/greaves/${materialName}`;

	addAnvilRecipe(event, unfinishedGreaves, doublePlateItem, ['bend_any', 'draw_any', 'hit_any'], true, material, 'unfinished_greaves');
	addTFCMelting(event, unfinishedGreaves, material, 144 * 2, 'unfinished_greaves');
	addTFCMelting(event, finishedGreaves, material, 144 * 3, 'greaves');
	addMaterialWelding(event, finishedGreaves, unfinishedGreaves, plateItem, material, 4, 0);

	// Boots
	const unfinishedBoots = `tfc:metal/unfinished_boots/${materialName}`;
	const finishedBoots = `tfc:metal/boots/${materialName}`;

	addAnvilRecipe(event, unfinishedBoots, plateItem, ['bend_last', 'bend_second_last', 'shrink_third_last'], true, material, 'unfinished_boots');
	addTFCMelting(event, unfinishedBoots, material, 144, 'unfinished_boots');
	addTFCMelting(event, finishedBoots, material, 144 * 2, 'boots');
	addMaterialWelding(event, finishedBoots, unfinishedBoots, plateItem, material, 4, 0);
}


/**
 * Processes the TFC items for the TFC "tool material" metals
 * @param {Internal.RecipesEventJS} event 
 * @param {com.gregtechceu.gtceu.api.data.chemical.material.Material_} material 
 */
function processTFCTool(event, material) {
	const materialName = material.getName();
	
	const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1);
	const doubleIngotItem = ChemicalHelper.get(TFGTagPrefix.ingotDouble, material, 1);
	const doublePlateItem = ChemicalHelper.get(TagPrefix.plateDouble, material, 1);
	const knifeHead = ChemicalHelper.get(TFGTagPrefix.toolHeadKnife, material, 1)

	// Helper methods
	function addExtruderRecipe(outputItem, inputItem, mold, id) {
		event.recipes.vintageimprovements.curving(outputItem, inputItem)
			.head(mold)
			.id(`tfg:vi/curving/${materialName}_${id}`)

		event.recipes.gtceu.extruder(`tfg:${materialName}_${id}`)
			.itemInputs(inputItem)
			.notConsumable(mold)
			.itemOutputs(outputItem)
			.duration(material.getMass() * 6)
			.EUt(GTValues.VA[GTValues.LV])
	}

	// For tools that are pure TFC

	if (material.hasFlag(TFGMaterialFlags.HAS_TFC_TOOL)) {
		// Tuyere
		let tuyere = `tfc:metal/tuyere/${materialName}`;
		addTFCMelting(event, tuyere, material, 144 * 2, 'tuyere');
		addExtruderRecipe(tuyere, doublePlateItem, 'gtceu:bottle_extruder_mold', 'tuyere');
		addAnvilRecipe(event, tuyere, doublePlateItem, ['bend_last', 'bend_second_last'], true, material, 'tuyere');

		// Shield
		let shield = `tfc:metal/shield/${materialName}`;
		addTFCMelting(event, shield, material, 144 * 2, 'shield');
		addExtruderRecipe(shield, doublePlateItem, 'gtceu:plate_extruder_mold', 'shield');
		addAnvilRecipe(event, shield, doublePlateItem, ['upset_last', 'bend_second_last', 'bend_third_last'], true, material, 'shield');

		// Horse armor
		let horseArmor = `tfc:metal/horse_armor/${materialName}`;
		addTFCMelting(event, horseArmor, material, 144 * 6, 'horse_armor');

		// Fish hook
		let fishHook = `tfc:metal/fish_hook/${materialName}`;
		addAnvilRecipe(event, fishHook, ingotItem, ['bend_any', 'hit_any', 'draw_not_last'], false, material, 'fish_hook');
		addTFCMelting(event, `tfc:metal/fishing_rod/${materialName}`, material, 144, 'fishing_rod');

		// Mace
		let mace = `tfc:metal/mace/${materialName}`;
		addTFCMelting(event, mace, material, 144 * 2, 'mace');

		// Mattock
		event.remove({ id: `rnr:heating/metal/${materialName}_mattock` })
		event.remove({ id: `rnr:heating/metal/${materialName}_mattock_head` })
		let mattock = `rnr:metal/mattock/${materialName}`;
		addTFCMelting(event, mattock, material, 144, 'mattock');

		// Shears
		let shears = `tfc:metal/shears/${materialName}`;
		addMaterialWelding(event, shears, knifeHead, knifeHead, material, 4, 1);
		addTFCMelting(event, shears, material, 144 * 2, 'shears');

		event.recipes.gtceu.forge_hammer(`tfg:shears/${materialName}`)
			.itemInputs(knifeHead.withCount(2))
			.itemOutputs(shears)
			.duration(40)
			.EUt(7);

		// Prospector pick
		let propick = `tfc:metal/propick/${materialName}`;
		addTFCMelting(event, propick, material, 144, 'propick');

		// Chisel
		let chisel = `tfc:metal/chisel/${materialName}`;
		addTFCMelting(event, chisel, material, 144, 'chisel');

		// Javelin
		let javelin = `tfc:metal/javelin/${materialName}`;
		addTFCMelting(event, javelin, material, 144, 'javelin');

		// Scraping knife
		let scrapingKnife = `tfcscraping:metal/scraping_knife/${materialName}`;
		let scrapingKnifeBlade = `tfcscraping:metal/scraping_knife_blade/${materialName}`;
		addAnvilRecipe(event, scrapingKnifeBlade, doubleIngotItem, ['hit_last','draw_not_last', 'draw_second_last'], true, material, 'scraping_knife_blade');
		addTFCMelting(event, scrapingKnife, material, 144 * 2, 'scraping_knife');
		addMaterialRecyclingNoTagPrefix(event, scrapingKnifeBlade, material, 'scraping_knife_blade', 2);
		addMaterialCasting(event, scrapingKnifeBlade, 'tfcscraping:ceramic/scraping_knife_blade_mold', false, null, material, 'scraping_knife_blade', 144 * 2);
		
		// Tongs
		let tongPart = `tfchotornot:tong_part/${materialName}`;
		let tong = `tfchotornot:tongs/${materialName}`;
		addExtruderRecipe(tongPart, ChemicalHelper.get(TagPrefix.rodLong, material, 1), 'gtceu:rod_extruder_mold', 'tong_part');
		addMaterialRecyclingNoTagPrefix(event, tongPart, material, 'tong_part', 1);
		addTFCMelting(event, tong, material, 144 * 2, 'tong');

		event.recipes.tfc.advanced_shaped_crafting(
			TFC.isp.of(tong).copyForgingBonus(), [
				'AA',
				'BC'
			], {
				A: tongPart,
				B: Ingredient.of('#forge:bolts').subtract('gtceu:wood_bolt'),
				C: '#forge:tools/hammers'
			}, 0, 0).id(`tfchotornot:crafting/tongs/${materialName}`)

		event.recipes.gtceu.forge_hammer(tong)
			.itemInputs(`2x ${tongPart}`)
			.itemOutputs(tong)
			.duration(material.getMass())
			.EUt(GTValues.VA[GTValues.ULV])

		event.remove({ id: `tfchotornot:heating/tongs/${materialName}` })
		event.remove({ id: `tfchotornot:heating/tong_part/${materialName}` })
	}

	// Sword
	const swordBlade = ChemicalHelper.get(TFGTagPrefix.toolHeadSword, material, 1);
	event.remove({ id: `tfc:crafting/metal/sword/${materialName}` })
	addAnvilRecipe(event, swordBlade, doubleIngotItem, ['punch_last', 'bend_not_last', 'draw_not_last'], true, material, 'sword_blade');
	
	// Butchery Knife
	const butcheryKnifeHead = ChemicalHelper.get(TFGTagPrefix.toolHeadButcheryKnife, material, 1);
	addAnvilRecipe(event, butcheryKnifeHead, ingotItem, ['punch_last', 'bend_not_last', 'bend_not_last'], true, material, 'knife_butchery_head');

	// Mining Hammer
	const miningHammerHead = ChemicalHelper.get(TFGTagPrefix.toolHeadMiningHammer, material, 1);
	addAnvilRecipe(event, miningHammerHead, doubleIngotItem, ['punch_last', 'shrink_not_last'], true, material, 'mining_hammer_head');

	// Spade
	const spadeHead = ChemicalHelper.get(TFGTagPrefix.toolHeadSpade, material, 1);
	addAnvilRecipe(event, spadeHead, doubleIngotItem, ['punch_last', 'hit_not_last'], true, material, 'spade_head');

	// Pickaxe
	const pickaxeHead = ChemicalHelper.get(TFGTagPrefix.toolHeadPickaxe, material, 1);
	event.remove({ id: `tfc:crafting/metal/pickaxe/${materialName}` });
	addAnvilRecipe(event, pickaxeHead, ingotItem, ['punch_last', 'bend_not_last', 'draw_not_last'], true, material, 'pickaxe_head');

	// Screwdriver
	const screwdriverHead = ChemicalHelper.get(TagPrefix.toolHeadScrewdriver, material, 1);
	addAnvilRecipe(event, screwdriverHead, ingotItem, ['draw_last', 'hit_second_last', 'hit_third_last'], true, material, 'screwdriver_tip');

	// Wrench
	const wrenchHead = ChemicalHelper.get(TagPrefix.toolHeadWrench, material, 1);
	addAnvilRecipe(event, wrenchHead, doubleIngotItem, ['draw_last', 'hit_second_last', 'hit_third_last'], true, material, 'wrench_tip');

	// Crowbar
	const crowbar = ToolHelper.get(GTToolType.CROWBAR, material);
	addTFCMelting(event, crowbar, material, 144 * 1.5, 'crowbar');

	// Wire cutters
	const wireCutterHead = ChemicalHelper.get(TagPrefix.toolHeadWireCutter, material, 1);
	addAnvilRecipe(event, wireCutterHead, doubleIngotItem, ['draw_last', 'hit_second_last', 'hit_third_last'], true, material, 'wire_cutter_head');

	// Axe
	const axeHead = ChemicalHelper.get(TFGTagPrefix.toolHeadAxe, material, 1);
	event.remove({ id: `tfc:crafting/metal/axe/${materialName}` });
	addAnvilRecipe(event, axeHead, ingotItem, ['punch_last', 'hit_second_last', 'upset_third_last'], true, material, 'axe_head');

	// Shovel
	const shovelHead = ChemicalHelper.get(TFGTagPrefix.toolHeadShovel, material, 1);
	event.remove({ id: `tfc:crafting/metal/shovel/${materialName}` });
	addAnvilRecipe(event, shovelHead, ingotItem, ['punch_last', 'hit_not_last'], true, material, 'shovel_head');

	// Hoe
	const hoeHead = ChemicalHelper.get(TFGTagPrefix.toolHeadHoe, material, 1);
	event.remove({ id: `tfc:crafting/metal/hoe/${materialName}` });
	addAnvilRecipe(event, hoeHead, ingotItem, ['punch_last', 'hit_not_last', 'bend_not_last'], true, material, 'hoe_head');

	// Hammer
	const hammerHead = ChemicalHelper.get(TFGTagPrefix.toolHeadHammer, material, 1);
	event.remove({ id: `tfc:crafting/metal/hammer/${materialName}` });
	addAnvilRecipe(event, hammerHead, ingotItem, ['punch_last', 'shrink_not_last'], true, material, 'hammer_head');

	// Saw
	const sawHead = ChemicalHelper.get(TFGTagPrefix.toolHeadSaw, material, 1);
	event.remove({ id: `tfc:crafting/metal/saw/${materialName}` });
	addAnvilRecipe(event, sawHead, ingotItem, ['hit_last', 'hit_second_last'], true, material, 'saw_blade');

	// Scythe
	const scytheHead = ChemicalHelper.get(TFGTagPrefix.toolHeadScythe, material, 1);
	event.remove({ id: `tfc:crafting/metal/scythe/${materialName}` })
	addAnvilRecipe(event, scytheHead, ingotItem, ['punch_last', 'bend_not_last', 'draw_not_last'], true, material, 'scythe_blade');

	// File
	const fileHead = ChemicalHelper.get(TFGTagPrefix.toolHeadFile, material, 1);
	addAnvilRecipe(event, fileHead, ingotItem, ['upset_last', 'bend_not_last', 'punch_not_last'], true, material, 'file_head');

	// Knife
	addAnvilRecipe(event, knifeHead, ingotItem, ['punch_last', 'bend_not_last', 'draw_not_last'], true, material, 'knife_blade');
}

/**
 * @param {Internal.RecipesEventJS} event 
 * @param {GTMaterial} material 
 */
function processPlatedBlock(event, material) {
	const platedBlock = ChemicalHelper.get(TFGTagPrefix.blockPlated, material, 1);
	if (platedBlock === null)
		return;

	const platedSlab = ChemicalHelper.get(TFGTagPrefix.slabPlated, material, 1);
	const platedStair = ChemicalHelper.get(TFGTagPrefix.stairPlated, material, 1);
	const plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1);

	const materialName = material.getName();

	event.shapeless(platedBlock, ['#forge:stone_bricks', plateItem, '#forge:tools/hammers'])
		.id(`tfg:shapeless/${materialName}_plated_block`)
	event.recipes.gtceu.assembler(`tfg:${materialName}_plated_block`)
		.itemInputs('#forge:stone_bricks', plateItem)
		.itemOutputs(platedBlock)
		.circuit(10)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	addMaterialRecycling(event, platedBlock, material, 'plated_block', TFGTagPrefix.blockPlated);


	event.shapeless(platedSlab.withCount(2), ['2x #tfg:brick_slabs', plateItem, '#forge:tools/hammers'])
		.id(`tfg:item_application/${materialName}_plated_slab`)
	event.recipes.gtceu.assembler(`tfg:${materialName}_plated_slab`)
		.itemInputs('2x #tfg:brick_slabs', plateItem)
		.itemOutputs(platedSlab.withCount(2))
		.circuit(10)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	addMaterialRecycling(event, platedSlab, material, 'plated_slab', TFGTagPrefix.slabPlated);


	event.shapeless(platedStair, ['#tfg:brick_stairs', plateItem, '#forge:tools/hammers'])
		.id(`tfg:item_application/${materialName}_plated_stair`)
	event.recipes.gtceu.assembler(`tfg:${materialName}_plated_stair`)
		.itemInputs('#tfg:brick_stairs', plateItem)
		.itemOutputs(platedStair)
		.circuit(10)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	addMaterialRecycling(event, platedStair, material, 'plated_stair', TFGTagPrefix.stairPlated);
}