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

	// #region Crushing Wheels

	event.recipes.gtceu.macerator('greate:steel_crushing_wheel')
		.itemInputs('greate:steel_crushing_wheel')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.WroughtIron, 18),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.TinAlloy, 8),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 4))
		.duration(GTMaterials.TinAlloy.getMass() * 34)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:steel_crushing_wheel')
		.itemInputs('greate:steel_crushing_wheel')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.WroughtIron, 18),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.TinAlloy, 8),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 4))
		.duration(GTMaterials.TinAlloy.getMass() * 34)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.macerator('greate:aluminium_crushing_wheel')
		.itemInputs('greate:aluminium_crushing_wheel')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 18),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.VanadiumSteel, 8),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 4))
		.duration(GTMaterials.VanadiumSteel.getMass() * 34)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:aluminium_crushing_wheel')
		.itemInputs('greate:aluminium_crushing_wheel')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 18),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.VanadiumSteel, 8),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 4))
		.duration(GTMaterials.VanadiumSteel.getMass() * 34)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.macerator('greate:stainless_steel_crushing_wheel')
		.itemInputs('greate:stainless_steel_crushing_wheel')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 18),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.BlueAlloy, 8),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 4))
		.duration(GTMaterials.BlueAlloy.getMass() * 34)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:stainless_steel_crushing_wheel')
		.itemInputs('greate:stainless_steel_crushing_wheel')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 18),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.BlueAlloy, 8),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 4))
		.duration(GTMaterials.BlueAlloy.getMass() * 34)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.macerator('greate:titanium_crushing_wheel')
		.itemInputs('greate:titanium_crushing_wheel')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 18),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Ultimet, 8),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Titanium, 4))
		.duration(GTMaterials.Ultimet.getMass() * 34)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:titanium_crushing_wheel')
		.itemInputs('greate:titanium_crushing_wheel')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 18),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Ultimet, 8),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Titanium, 4))
		.duration(GTMaterials.Ultimet.getMass() * 34)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

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
}