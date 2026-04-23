// priority: 0
"use strict";

function registerTFGFruitMealFoodItems(event) {

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
};
