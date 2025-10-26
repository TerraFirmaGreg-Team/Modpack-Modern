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

	event.recipes.tfc.extra_products_shapeless_crafting('4x greate:andesite_alloy_shaft',
		event.shapeless('create:andesite_casing', ['greate:andesite_alloy_gearbox', '#forge:tools/hammers']))

	event.recipes.tfc.extra_products_shapeless_crafting('4x greate:steel_shaft',
		event.shapeless('create:andesite_casing', ['greate:steel_gearbox', '#forge:tools/hammers']))

	event.recipes.tfc.extra_products_shapeless_crafting('4x greate:aluminium_shaft',
		event.shapeless('create:andesite_casing', ['greate:aluminium_gearbox', '#forge:tools/hammers']))

	event.recipes.tfc.extra_products_shapeless_crafting('4x greate:stainless_steel_shaft',
		event.shapeless('create:andesite_casing', ['greate:stainless_steel_gearbox', '#forge:tools/hammers']))

	event.recipes.tfc.extra_products_shapeless_crafting('4x greate:titanium_shaft',
		event.shapeless('create:andesite_casing', ['greate:titanium_gearbox', '#forge:tools/hammers']))

	// #endregion

	// #region Belts

	event.recipes.gtceu.macerator('greate:rubber_belt_connector')
		.itemInputs('greate:rubber_belt_connector')
		.itemOutputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Rubber, 1))
		.duration(GTMaterials.Rubber.getMass() * 3)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.macerator('greate:silicone_rubber_belt_connector')
		.itemInputs('greate:silicone_rubber_belt_connector')
		.itemOutputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.SiliconeRubber, 1))
		.duration(GTMaterials.SiliconeRubber.getMass() * 3)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.macerator('greate:polyethylene_belt_connector')
		.itemInputs('greate:polyethylene_belt_connector')
		.itemOutputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.StyreneButadieneRubber, 1))
		.duration(GTMaterials.StyreneButadieneRubber.getMass() * 3)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	// #region
}