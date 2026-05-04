// priority: 0
"use strict";

function registerTFGFoodItems(event) {

	//#region Generic Foods
	/**
	 * Registers generic food items based on the properties defined in the `TFG_CREATE_GENERIC_FOOD_ITEM` array.
	 * Each item should have an id, texture. if `inedible` is true then no food properties will be set and the player cant eat the item.
	 * Optional properties for mobEffect, returnItem, and tags.
	 */
	global.TFG_CREATE_GENERIC_FOOD_ITEM.forEach(foodItem => {
		let a = event.create(foodItem.id)
			a.texture(foodItem.texture);
		
			if (!foodItem.inedible) {
				a.food(food => {
					food.hunger(1).saturation(1)
					
					if (foodItem.effect) {
						if (Array.isArray(foodItem.effect)) {
							foodItem.effect.forEach(effect => food.effect(effect.id, effect.duration, effect.strength, effect.probability));
						} else {
							food.effect(foodItem.effect.id, foodItem.effect.duration, foodItem.effect.strength, foodItem.effect.probability);
						};
					};

					if (foodItem.returnItem) {
						food.eaten(ctx => {
							if (ctx.player) ctx.player.give(foodItem.returnItem);
						});
					};
				});

				a.tag('tfc:foods');
			};
		
			if (foodItem.tags && Array.isArray(foodItem.tags)) {
				foodItem.tags.forEach(tag => a.tag(tag));
			};
	});

	//#endregion
	//#region Fruit Preservation

	/**
	 * Registers freeze dried fruits and jams based on the properties of each fruit in the `FOOD_FRUIT` array.
	 * Freeze dried fruits require the fruit to have genFreezeDried and color properties, while jams require genJam and color properties.
	 * Each generated food item is tagged appropriately for use in recipes and other mechanics.
	 */
	global.FOOD_FRUIT.forEach(fruit => {

		// Freeze Dried Fruits
		if (fruit.genFreezeDried && fruit.color) {

			event.create(`tfg:food/freeze_dried/${fruit.name}`)
				.translationKey(`item.tfg.food.freeze_dried.${fruit.name}`)
				.tag('tfc:foods')
				.tag('tfg:space_food')
				.tag('tfg:foods/freeze_dried_fruits')
				.food(food => food.hunger(1).saturation(1)
					.eaten(ctx => {
						if (ctx.player) {
							ctx.player.give('tfg:used_foil_pack')
						}
					})
				)
				.modelJson({
					parent: 'tfg:item/item_2_layer_tintable',
					textures: {
						layer0: `tfg:item/foil_pack`,
						layer1: 'tfg:item/food/freeze_dried_fruit_overlay'
					}
				})
				.color(1, fruit.color);
		}

		// Jams
		if (fruit.genJam && fruit.color) {

			let sealedModelFilePath = `kubejs/assets/tfg/models/block/food/jam/${fruit.name}.json`;
			let sealedModelData = { parent: 'tfc:block/jar', textures: { '1': `tfg:block/food/jam/${fruit.name}` } };
			let sealedExisting = JsonIO.read(sealedModelFilePath);
			if (JSON.stringify(sealedExisting) !== JSON.stringify(sealedModelData)) {
				JsonIO.write(sealedModelFilePath, sealedModelData);
			};
			let unsealedModelFilePath = `kubejs/assets/tfg/models/block/food/jam/${fruit.name}_unsealed.json`;
			let unsealedModelData = { parent: 'tfc:block/jar', textures: { '1': `tfg:block/food/jam/${fruit.name}`, '2': 'tfc:block/jar_no_lid' } };
			let unsealedExisting = JsonIO.read(unsealedModelFilePath);
			if (JSON.stringify(unsealedExisting) !== JSON.stringify(unsealedModelData)) {
				JsonIO.write(unsealedModelFilePath, unsealedModelData);
			};

			event.create(`tfg:jar/${fruit.name}`, 'tfc:jar')
				.translationKey(`item.tfg.food.jam.${fruit.name}`)
				.tag('tfc:jars')
				.tag('tfc:sealed_jars')
				.tag('tfc:foods')
				.tag('tfc:foods/sealed_preserves')
				.placedModel(`tfg:block/food/jam/${fruit.name}`)
				.modelJson({
					parent: 'tfg:item/item_2_layer_tintable',
					textures: {
						layer0: `tfg:item/food/jam_sealed`,
						layer1: `tfg:item/food/jam_overlay`
					}
				})
				.color(1, fruit.color);
			
			event.create(`tfg:jar/${fruit.name}_unsealed`, 'tfc:jar')
				.translationKey(`item.tfg.food.jam.${fruit.name}_unsealed`)
				.tag('tfc:jars')
				.tag('tfc:foods')
				.tag('tfc:foods/preserves_2')
				.tag('tfc:foods/preserves')
				.placedModel(`tfg:block/food/jam/${fruit.name}_unsealed`)
				.modelJson({
					parent: 'tfg:item/item_2_layer_tintable',
					textures: {
						layer0: `tfg:item/food/jam_unsealed`,
						layer1: `tfg:item/food/jam_overlay`
					}
				})
				.color(1, fruit.color);
		};
	});

	//#endregion
	//#region Food Containers
	
	event.create('tfg:foil_pack');

	event.create('tfg:clean_foil_pack');

	event.create('tfg:used_foil_pack')
		.translationKey('item.tfg.food.used_foil_pack')
		.food(food => food.hunger(0).saturation(0)
			.effect('minecraft:nausea', 200, 0, 1)
		)
		.texture('tfg:item/used_foil_pack');

	//#endregion
	//#region Gimic Foods

	event.create('tfg:food/ice_soup')
		.translationKey('item.tfg.food.ice_soup')
		.texture('tfg:item/food/ice_soup')
		.food(food => {
			food.effect('tfg:cooling', 100, 0, 1)
			food.eaten(ctx => {
				if (ctx.player) {
					ctx.player.give('tfc:ceramic/bowl')
				}
			})
		});

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

	//#endregion
	//#region Basic Ingredients
	
	event.create('tfg:wraptor_sugar')
		.tag('tfg:sugars')
		.tag('tfg:haste_ingredients')
		.tag('tfc:sweetener');

	//#endregion
	//#region Spices

	// Spices are registered in `SPICES`.
	global.SPICES.slice(2).forEach(spice => {
		let spiceName = spice.product.match(/[^/:]+$/)[0];

		event.create(spice.product)
			.translationKey(`item.tfg.food.${spiceName}`)
			.texture(`tfg:item/food/${spiceName}`)
			.tag('tfg:spices');
	});

	//#endregion
};
