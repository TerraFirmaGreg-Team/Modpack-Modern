"use strict";

const registerDomumOrnamentumRecipes = (event) => {

	event.remove({ mod: 'domum_ornamentum', type: 'minecraft:crafting_shaped' })
	event.remove({ mod: 'domum_ornamentum', type: 'minecraft:crafting_shapeless' })

	//#region Extra Blocks
	event.shaped(Item.of('domum_ornamentum:brick_extra', 5),
		[
			'B B',
			' B ',
			'B B'
		],
		{
			B: 'minecraft:bricks'
		}).id('domum_ornamentum:brick_extra');

	event.shaped(Item.of('domum_ornamentum:cobblestone_extra', 5),
		[
			'B B',
			' B ',
			'B B'
		],
		{
			B: '#forge:cobblestone'
		}).id('domum_ornamentum:cobblestone_extra');

	event.shaped(Item.of('domum_ornamentum:blue_cobblestone_extra', 8),
		[
			'BBB',
			'BAB',
			'BBB'
		],
		{
			B: 'domum_ornamentum:cobblestone_extra',
			A: '#forge:dyes/blue',
		}).id('domum_ornamentum:blue_cobblestone_extra');

	event.shaped(Item.of('domum_ornamentum:green_cobblestone_extra', 8),
		[
			'BBB',
			'BAB',
			'BBB'
		],
		{
			B: 'domum_ornamentum:cobblestone_extra',
			A: '#forge:dyes/green',
		}).id('domum_ornamentum:green_cobblestone_extra');

	event.shaped(Item.of('domum_ornamentum:purple_cobblestone_extra', 8),
		[
			'BBB',
			'BAB',
			'BBB'
		],
		{
			B: 'domum_ornamentum:cobblestone_extra',
			A: '#forge:dyes/purple',
		}).id('domum_ornamentum:purple_cobblestone_extra');

	event.shaped(Item.of('domum_ornamentum:mossy_cobblestone_extra', 8),
		[
			'BBB',
			'BAB',
			'BBB'
		],
		{
			B: 'domum_ornamentum:cobblestone_extra',
			A: '#tfc:moss',
		}).id('domum_ornamentum:mossy_cobblestone_extra');

	event.shaped(Item.of('domum_ornamentum:wheat_extra', 5),
		[
			'B B',
			' B ',
			'B B'
		],
		{
			B: 'minecraft:hay_block'
		}).id('domum_ornamentum:wheat_extra');

	event.shaped(Item.of('domum_ornamentum:architectscutter', 1),
		[
			' E ',
			'ACA',
			'BDB'
		],
		{
			A: '#forge:plates/wrought_iron',
			B: '#tfc:lumber',
			C: '#forge:plates/brass',
			D: '#forge:small_gears',
			E: '#forge:buzz_saw_heads'
		}).id('domum_ornamentum:architectscutter');

	event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(
		'4x domum_ornamentum:cactus_extra',
		['tfc:plant/barrel_cactus', '#tfc:saws']))
		.id('domum_ornamentum:cactus_extra');

	event.shaped(Item.of('domum_ornamentum:green_cactus_extra', 8),
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: 'domum_ornamentum:cactus_extra',
			B: '#forge:dyes/green'
		}).id('domum_ornamentum:green_cactus_extra');

	event.shaped('4x domum_ornamentum:paper_extra', [
		'AA',
		'AA'
	], {
		A: '4x #forge:paper'
	}).id('domum_ornamentum:paper_extra');

	event.shapeless('4x domum_ornamentum:paper_extra', [
		'4x domum_ornamentum:white_paper_extra'
	]).id('domum_ornamentum:paper_extra_decompress');

	event.shapeless('4x domum_ornamentum:white_paper_extra', [
		'4x domum_ornamentum:paper_extra'
	]).id('domum_ornamentum:white_paper_extra');
	//#endregion

	//#region Colored Bricks
	global.MINECRAFT_DYE_NAMES.forEach(color => {
		event.shaped(Item.of(`domum_ornamentum:${color}_brick_extra`, 8),
			[
				'AAA',
				'ABA',
				'AAA'
			],
			{
				A: 'domum_ornamentum:brick_extra',
				B: `#forge:dyes/${color}`
			}).id(`domum_ornamentum:${color}_brick_extra`);
	})
	//#endregion

	//#region Bricks
	//Brown Bricks
	event.shaped(Item.of('domum_ornamentum:brown_bricks', 4),
		[
			'BAB',
			'CBC',
			'BAB'
		],
		{
			A: 'tfc:brick/chert',
			B: 'tfc:mortar',
			C: 'minecraft:brick',
		}).id('domum_ornamentum:brown_bricks');

	event.shaped(Item.of('domum_ornamentum:brown_stone_bricks', 4),
		[
			'BCB',
			'ABA',
			'BCB'
		],
		{
			A: 'tfc:brick/chert',
			B: 'tfc:mortar',
			C: 'minecraft:brick',
		}).id('domum_ornamentum:brown_stone_bricks');

	//Beige Bricks
	event.shaped(Item.of('domum_ornamentum:beige_bricks', 4),
		[
			'BAB',
			'CBC',
			'BAB'
		],
		{
			A: 'tfc:brick/conglomerate',
			B: 'tfc:mortar',
			C: 'minecraft:brick',
		}).id('domum_ornamentum:beige_bricks');

	event.shaped(Item.of('domum_ornamentum:beige_stone_bricks', 4),
		[
			'BCB',
			'ABA',
			'BCB'
		],
		{
			A: 'tfc:brick/conglomerate',
			B: 'tfc:mortar',
			C: 'minecraft:brick',
		}).id('domum_ornamentum:beige_stone_bricks');

	//Cream Bricks
	event.shaped(Item.of('domum_ornamentum:cream_bricks', 4),
		[
			'BAB',
			'CBC',
			'BAB'
		],
		{
			A: 'tfc:brick/gneiss',
			B: 'tfc:mortar',
			C: 'minecraft:brick',
		}).id('domum_ornamentum:cream_bricks');

	event.shaped(Item.of('domum_ornamentum:cream_stone_bricks', 4),
		[
			'BCB',
			'ABA',
			'BCB'
		],
		{
			A: 'tfc:brick/gneiss',
			B: 'tfc:mortar',
			C: 'minecraft:brick',
		}).id('domum_ornamentum:cream_stone_bricks');

	//Roan Bricks
	event.shaped(Item.of('domum_ornamentum:roan_bricks', 4),
		[
			'BAB',
			'CBC',
			'BAB'
		],
		{
			A: 'tfc:brick/claystone',
			B: 'tfc:mortar',
			C: 'minecraft:brick',
		}).id('domum_ornamentum:roan_bricks');

	event.shaped(Item.of('domum_ornamentum:roan_stone_bricks', 4),
		[
			'BCB',
			'ABA',
			'BCB'
		],
		{
			A: 'tfc:brick/claystone',
			B: 'tfc:mortar',
			C: 'minecraft:brick',
		}).id('domum_ornamentum:roan_stone_bricks');

	//Sand Bricks
	event.shaped(Item.of('domum_ornamentum:sand_bricks', 4),
		[
			'BAB',
			'CBC',
			'BAB'
		],
		{
			A: 'tfc:brick/limestone',
			B: 'tfc:mortar',
			C: 'minecraft:brick',
		}).id('domum_ornamentum:sand_bricks');

	event.shaped(Item.of('domum_ornamentum:sand_stone_bricks', 4),
		[
			'BCB',
			'ABA',
			'BCB'
		],
		{
			A: 'tfc:brick/limestone',
			B: 'tfc:mortar',
			C: 'minecraft:brick',
		}).id('domum_ornamentum:sand_stone_bricks');
	//#endregion
};