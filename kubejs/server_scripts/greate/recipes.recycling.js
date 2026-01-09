// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerGreateRecyclingRecipes(event) {

	// #region Cogs

	event.recipes.tfc.extra_products_shapeless_crafting('greate:andesite_alloy_shaft',
		event.shapeless('#forge:small_gears/wood', ['greate:andesite_alloy_cogwheel']))

	event.recipes.tfc.extra_products_shapeless_crafting('greate:andesite_alloy_shaft',
		event.shapeless('#forge:gears/wood', ['greate:large_andesite_alloy_cogwheel']))

	event.recipes.tfc.extra_products_shapeless_crafting('greate:steel_shaft',
		event.shapeless('#forge:small_gears/wrought_iron', ['greate:steel_cogwheel']))

	event.recipes.tfc.extra_products_shapeless_crafting('greate:steel_shaft',
		event.shapeless('2x #forge:small_gears/wrought_iron', ['greate:large_steel_cogwheel']))

	event.recipes.tfc.extra_products_shapeless_crafting('greate:aluminium_shaft',
		event.shapeless('#forge:small_gears/steel', ['greate:aluminium_cogwheel']))

	event.recipes.tfc.extra_products_shapeless_crafting('greate:aluminium_shaft',
		event.shapeless('2x #forge:small_gears/steel', ['greate:large_aluminium_cogwheel']))

	event.recipes.tfc.extra_products_shapeless_crafting('greate:stainless_steel_shaft',
		event.shapeless('#forge:small_gears/aluminium', ['greate:stainless_steel_cogwheel']))

	event.recipes.tfc.extra_products_shapeless_crafting('greate:stainless_steel_shaft',
		event.shapeless('2x #forge:small_gears/aluminium', ['greate:large_stainless_steel_cogwheel']))

	event.recipes.tfc.extra_products_shapeless_crafting('greate:titanium_shaft',
		event.shapeless('#forge:small_gears/stainless_steel', ['greate:titanium_cogwheel']))

	event.recipes.tfc.extra_products_shapeless_crafting('greate:titanium_shaft',
		event.shapeless('2x #forge:small_gears/stainless_steel', ['greate:large_titanium_cogwheel']))

	// #endregion

	// #region Gearbox

	global.GREATE_MATERIAL_TIERS.forEach(tier => {
		event.recipes.tfc.extra_products_shapeless_crafting(`4x greate:${tier}_shaft`,
			event.shapeless('create:andesite_casing', [`greate:${tier}_gearbox`, '#forge:tools/hammers']))
	})

	// #endregion
}