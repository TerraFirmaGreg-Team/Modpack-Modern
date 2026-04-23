// priority: 0
"use strict";

function registerTFGAnimalFoodItems(event) {

	//#region Generic Meats

	/**
	 * Function to create raw and cooked meat items for a given animal product.
	 * - All items receive the meat food tags, and raw items receive the hunger effect when eaten.
	 * @param {string} name Animal product name. e.g. "limpet", "glider_wings", etc.
	 */
	function createGenericMeatItems(name) {


		event.create(`tfg:food/raw_${name}`)
			.translationKey(`item.tfg.food.raw_${name}`)
			.texture(`tfg:item/food/raw_${name}`)
			.food(food => food.hunger(1).saturation(1)
			.effect('minecraft:hunger', 100, 0, 1))
			.tag('tfc:foods')
			.tag('tfc:foods/meats')
			.tag('tfc:foods/raw_meats');

		event.create(`tfg:food/cooked_${name}`)
			.translationKey(`item.tfg.food.cooked_${name}`)
			.texture(`tfg:item/food/cooked_${name}`)
			.food(food => food.hunger(1).saturation(1))
			.tag('tfc:foods')
			.tag('tfc:foods/meats')
			.tag('tfc:foods/cooked_meats');
	};

	/**
	 * Array of animal product ids to pass through createGenericMeatItems.
	 * @type {Array<string>} animalProducts - Array of animal product names. e.g. "limpet", "glider_wings", etc.
	 */
	const animalProducts = [
		'limpet',
		'crawlermari',
		'moon_rabbit',
		'glacian_mutton',
		'sniffer_beef',
		'wraptor',
		'bison_meat',
		'springling_collar',
		'walker_steak',
		'glider_wings',
		'whole_soarer',
		'crusher_meat',
		'goober_meat',
		'cruncher_ribs',
		'surfer_steak',
		'long_pig_filet'
	];

	animalProducts.forEach(meatName => createGenericMeatItems(meatName));

	//#endregion
	//#region Special Meats

	// Birt (exception - has a special effect when eaten raw).
	event.create('tfg:food/raw_birt')
		.translationKey('item.tfg.food.raw_birt')
		.food(food => food.hunger(1).saturation(1)
			.effect('species:birtd', 50, 0, 1)
			.eaten(ctx => {
				ctx.player.level.runCommandSilent(`playsound species:effect.birtd.applied player ${ctx.player.username} ${ctx.player.x} ${ctx.player.y} ${ctx.player.z} 1 1`)
			}))
		.tag('tfc:foods')
		.tag('tfc:foods/meats')
		.tag('tfc:foods/raw_meats');

	event.create('tfg:food/cooked_birt')
		.translationKey('item.tfg.food.cooked_birt')
		.food(food => food.hunger(1).saturation(1))
		.tag('tfc:foods')
		.tag('tfc:foods/meats')
		.tag('tfc:foods/cooked_meats');

	//Stackatick (exception - must be crafted into kebabs).
	event.create('tfg:food/raw_stackatick_chunks')
		.translationKey('item.tfg.food.raw_stackatick_chunks')
		.texture('tfg:item/food/raw_stackatick_chunks')
		.food(food => food.hunger(1).saturation(1)
			.effect('minecraft:hunger', 100, 0, 1))
		.tag('tfc:foods')
		.tag('tfc:foods/meats')
		.tag('tfc:foods/raw_meats');

	event.create('tfg:food/raw_stickastackatick')
		.translationKey('item.tfg.food.raw_stickastackatick')
		.parentModel('tfg:item/food/raw_stickastackatick')
		.food(food => food.hunger(1).saturation(1)
			.effect('minecraft:hunger', 100, 0, 1)
			.eaten(ctx => {
				if (ctx.player) {
					ctx.player.give('minecraft:stick')
				}
			})
		)
		.tag('tfc:foods')
		.tag('tfc:foods/meats')
		.tag('tfc:foods/raw_meats');

	event.create('tfg:food/cooked_stickastackatick')
		.translationKey('item.tfg.food.cooked_stickastackatick')
		.parentModel('tfg:item/food/cooked_stickastackatick')
		.food(food => food.hunger(1).saturation(1)
			.eaten(ctx => {
				if (ctx.player) {
					ctx.player.give('minecraft:stick')
				}
			})
		)
		.tag('tfc:foods')
		.tag('tfc:foods/meats')
		.tag('tfc:foods/cooked_meats');

	//#endregion
	//#region Other Products

	event.create('tfg:wraptor_sugar')
		.tag('tfg:sugars')
		.tag('tfg:haste_ingredients')
		.tag('tfc:sweetener');

	//#endregion
}
