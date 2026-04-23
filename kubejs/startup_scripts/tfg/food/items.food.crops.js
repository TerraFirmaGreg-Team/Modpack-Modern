// priority: 0
"use strict";

function registerTFGCropFoodItems(event) {

	//#region Crops

	// Sunflower seeds
	event.create('tfg:roasted_sunflower_seeds')
		.translationKey('item.tfg.roasted_sunflower_seeds')
		.texture('tfg:item/roasted_sunflower_seeds')
		.food(food => food.hunger(1).saturation(1))
		.tag('tfc:foods')
		.tag('tfc:foods/grains')
		.tag('tfc:foods/usable_in_salad');

	// Cooked Lentils
	event.create('tfg:food/cooked_lentil')
		.translationKey('item.tfg.food.cooked_lentil')
		.texture('tfg:item/food/cooked_lentil')
		.food(food => food.hunger(1).saturation(1))
		.tag('tfc:foods')
		.tag('tfc:foods/vegetables')
		.tag('tfg:foods/legumes');

	// Cooked Cassava
	event.create('tfg:food/cooked_cassava')
		.translationKey('item.tfg.food.cooked_cassava')
		.texture('tfg:item/food/cooked_cassava')
		.food(food => food.hunger(1).saturation(1))
		.tag('tfc:foods')
		.tag('tfc:foods/usable_in_salad')
		.tag('tfc:foods/usable_in_soup');

	// Cooked Beans
	event.create('tfg:food/cooked_beans')
		.translationKey('item.tfg.food.cooked_beans')
		.texture('tfg:item/food/cooked_beans')
		.food(food => food.hunger(1).saturation(1))
		.tag('tfc:foods')
		.tag('tfc:foods/vegetables')
		.tag('tfg:foods/legumes');

	//#endregion
	//#region Spices

	/** 
	 * @type {Array<string>} spiceIndex - Array of custom spice items.
	 */
	const SpiceIndex = [
		'bay_leaf',
		'cardamom_pods',
		'cilantro_leaves',
		'cumin_seeds',
		'oregano_leaves',
		'allspice'
	];

	SpiceIndex.forEach(spice => {

		event.create(`tfg:spice/${spice}`)
			.translationKey(`item.tfg.food.${spice}`)
			.texture(`tfg:item/food/${spice}`)
			.tag('tfg:spices');
	});

	//#endregion
}
