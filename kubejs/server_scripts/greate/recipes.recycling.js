// priority: 0

function registerGreateRecyclingRecipes(event) {

	// #region Shafts

	// No andesite alloy shafts because those can be crafted from 4 different materials

	event.recipes.gtceu.macerator('steel_shaft')
		.itemInputs('greate:steel_shaft')
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Steel, 1))
		.duration(GTMaterials.Steel.getMass())
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('steel_shaft')
		.itemInputs('greate:steel_shaft')
		.itemOutputs(ChemicalHelper.get(TagPrefix.nugget, GTMaterials.Steel, 1))
		.duration(GTMaterials.Steel.getMass())
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.macerator('aluminium_shaft')
		.itemInputs('greate:aluminium_shaft')
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Aluminium, 1))
		.duration(GTMaterials.Aluminium.getMass())
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('aluminium_shaft')
		.itemInputs('greate:aluminium_shaft')
		.itemOutputs(ChemicalHelper.get(TagPrefix.nugget, GTMaterials.Aluminium, 1))
		.duration(GTMaterials.Aluminium.getMass())
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.macerator('stainless_steel_shaft')
		.itemInputs('greate:stainless_steel_shaft')
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.StainlessSteel, 1))
		.duration(GTMaterials.StainlessSteel.getMass())
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('stainless_steel_shaft')
		.itemInputs('greate:stainless_steel_shaft')
		.itemOutputs(ChemicalHelper.get(TagPrefix.nugget, GTMaterials.StainlessSteel, 1))
		.duration(GTMaterials.StainlessSteel.getMass())
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.macerator('titanium_shaft')
		.itemInputs('greate:titanium_shaft')
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Titanium, 1))
		.duration(GTMaterials.Titanium.getMass())
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('titanium_shaft')
		.itemInputs('greate:titanium_shaft')
		.itemOutputs(ChemicalHelper.get(TagPrefix.nugget, GTMaterials.Titanium, 1))
		.duration(GTMaterials.Titanium.getMass())
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// #endregion

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

	// #region Millstones

	event.recipes.gtceu.macerator('greate:steel_millstone')
		.itemInputs('greate:steel_millstone')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Steel, 10),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Stone, 2),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Diamond, 2))
		.duration(GTMaterials.Stone.getMass() * 4)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:steel_millstone')
		.itemInputs('greate:steel_millstone')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.nugget, GTMaterials.Steel, 10),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Diamond, 2))
		.duration(GTMaterials.Stone.getMass() * 4)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.macerator('greate:aluminium_millstone')
		.itemInputs('greate:aluminium_millstone')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 8),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.VanadiumSteel, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 4),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Diamond, 2))
		.duration(GTMaterials.Aluminium.getMass() * (8+6+4+2))
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:aluminium_millstone')
		.itemInputs('greate:aluminium_millstone')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 8),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.VanadiumSteel, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 4))
		.duration(GTMaterials.Aluminium.getMass() * (8+6+4))
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.macerator('greate:stainless_steel_millstone')
		.itemInputs('greate:stainless_steel_millstone')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 8),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 8),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.BlueAlloy, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 4),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Diamond, 5))
		.duration(GTMaterials.StainlessSteel.getMass() * (8+8+6+4+5))
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:stainless_steel_millstone')
		.itemInputs('greate:stainless_steel_millstone')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 8),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 8),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.BlueAlloy, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 4))
		.duration(GTMaterials.StainlessSteel.getMass() * (8+8+6+4))
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.macerator('greate:titanium_millstone')
		.itemInputs('greate:titanium_millstone')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Titanium, 8),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 8),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Ultimet, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 4),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Diamond, 5))
		.duration(GTMaterials.Titanium.getMass() * (8+8+6+4+5))
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:titanium_millstone')
		.itemInputs('greate:titanium_millstone')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Titanium, 8),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 8),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Ultimet, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 4))
		.duration(GTMaterials.Titanium.getMass() * (8+8+6+4))
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

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

	// #region Encased Fan

	event.recipes.gtceu.macerator('greate:steel_encased_fan')
		.itemInputs('greate:steel_encased_fan')
		.itemOutputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 5),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.WroughtIron, 2))
		.duration(GTMaterials.Steel.getMass() * 7)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:steel_encased_fan')
		.itemInputs('greate:steel_encased_fan')
		.itemOutputs(ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 5),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.WroughtIron, 2))
		.duration(GTMaterials.Steel.getMass() * 7)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.macerator('greate:aluminium_encased_fan')
		.itemInputs('greate:aluminium_encased_fan')
		.itemOutputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 12))
		.duration(GTMaterials.Aluminium.getMass() * 12)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:aluminium_encased_fan')
		.itemInputs('greate:aluminium_encased_fan')
		.itemOutputs(ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 12))
		.duration(GTMaterials.Aluminium.getMass() * 12)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.macerator('greate:stainless_steel_encased_fan')
		.itemInputs('greate:stainless_steel_encased_fan')
		.itemOutputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 12))
		.duration(GTMaterials.StainlessSteel.getMass() * 12)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:stainless_steel_encased_fan')
		.itemInputs('greate:stainless_steel_encased_fan')
		.itemOutputs(ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 12))
		.duration(GTMaterials.StainlessSteel.getMass() * 12)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.macerator('greate:titanium_encased_fan')
		.itemInputs('greate:titanium_encased_fan')
		.itemOutputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Titanium, 12))
		.duration(GTMaterials.Titanium.getMass() * 12)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:titanium_encased_fan')
		.itemInputs('greate:titanium_encased_fan')
		.itemOutputs(ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Titanium, 12))
		.duration(GTMaterials.Titanium.getMass() * 12)
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

	// #region Mechanical Saw

	event.recipes.gtceu.macerator('greate:andesite_alloy_mechanical_saw')
		.itemInputs('greate:andesite_alloy_mechanical_saw')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.WroughtIron, 7),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Wood, 1))
		.duration(GTMaterials.WroughtIron.getMass() * 7)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:andesite_alloy_mechanical_saw')
		.itemInputs('greate:andesite_alloy_mechanical_saw')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.WroughtIron, 7),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Ash, 1))
		.duration(GTMaterials.WroughtIron.getMass() * 7)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.macerator('greate:steel_mechanical_saw')
		.itemInputs('greate:steel_mechanical_saw')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.WroughtIron, 8),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.CobaltBrass, 4),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Copper, 4))
		.duration(GTMaterials.CobaltBrass.getMass() * 16)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:steel_mechanical_saw')
		.itemInputs('greate:steel_mechanical_saw')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.WroughtIron, 8),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.CobaltBrass, 4),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.AnnealedCopper, 4))
		.duration(GTMaterials.CobaltBrass.getMass() * 16)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.macerator('greate:aluminium_mechanical_saw')
		.itemInputs('greate:aluminium_mechanical_saw')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 10),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Cupronickel, 8),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.VanadiumSteel, 4),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Copper, 2))
		.duration(GTMaterials.VanadiumSteel.getMass() * 22)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:aluminium_mechanical_saw')
		.itemInputs('greate:aluminium_mechanical_saw')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 10),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Cupronickel, 8),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.VanadiumSteel, 4),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.AnnealedCopper, 2))
		.duration(GTMaterials.VanadiumSteel.getMass() * 22)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.macerator('greate:stainless_steel_mechanical_saw')
		.itemInputs('greate:stainless_steel_mechanical_saw')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 10),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Electrum, 8),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Diamond, 4),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Silver, 4))
		.duration(GTMaterials.Diamond.getMass() * 22)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:stainless_steel_mechanical_saw')
		.itemInputs('greate:stainless_steel_mechanical_saw')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 10),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Electrum, 8),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Diamond, 4),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Silver, 4))
		.duration(GTMaterials.Diamond.getMass() * 22)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.macerator('greate:titanium_mechanical_saw')
		.itemInputs('greate:titanium_mechanical_saw')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Titanium, 10),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Kanthal, 8),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Ultimet, 4),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 4))
		.duration(GTMaterials.Ultimet.getMass() * 22)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:titanium_mechanical_saw')
		.itemInputs('greate:titanium_mechanical_saw')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Titanium, 10),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Kanthal, 8),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Ultimet, 4),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 4))
		.duration(GTMaterials.Ultimet.getMass() * 22)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// #endregion

	// #region Mechanical Pump

	event.recipes.gtceu.macerator('greate:steel_mechanical_pump')
		.itemInputs('greate:steel_mechanical_pump')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Copper, 2),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.WroughtIron, 1),
			ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Steel, 2))
		.duration(GTMaterials.Copper.getMass() * 3)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:steel_mechanical_pump')
		.itemInputs('greate:steel_mechanical_pump')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Copper, 2),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.WroughtIron, 1),
			ChemicalHelper.get(TagPrefix.nugget, GTMaterials.Steel, 2))
		.duration(GTMaterials.Copper.getMass() * 3)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.macerator('greate:aluminium_mechanical_pump')
		.itemInputs('greate:aluminium_mechanical_pump')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Copper, 2),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 1),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Rubber, 1),
			ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Aluminium, 2))
		.duration(GTMaterials.Copper.getMass() * 3)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:aluminium_mechanical_pump')
		.itemInputs('greate:aluminium_mechanical_pump')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Copper, 2),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 1),
			ChemicalHelper.get(TagPrefix.nugget, GTMaterials.Aluminium, 2))
		.duration(GTMaterials.Copper.getMass() * 3)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.macerator('greate:stainless_steel_mechanical_pump')
		.itemInputs('greate:stainless_steel_mechanical_pump')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Copper, 2),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 1),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Rubber, 1),
			ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.StainlessSteel, 2))
		.duration(GTMaterials.Copper.getMass() * 3)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:stainless_steel_mechanical_pump')
		.itemInputs('greate:stainless_steel_mechanical_pump')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Copper, 2),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 1),
			ChemicalHelper.get(TagPrefix.nugget, GTMaterials.StainlessSteel, 2))
		.duration(GTMaterials.Copper.getMass() * 3)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.macerator('greate:titanium_mechanical_pump')
		.itemInputs('greate:titanium_mechanical_pump')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Copper, 2),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 1),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Rubber, 1),
			ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Titanium, 2))
		.duration(GTMaterials.Copper.getMass() * 3)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:titanium_mechanical_pump')
		.itemInputs('greate:titanium_mechanical_pump')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Copper, 2),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 1),
			ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Titanium, 2))
		.duration(GTMaterials.Copper.getMass() * 3)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

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

	// #region Mechanical Mixer

	event.recipes.gtceu.macerator('greate:steel_mechanical_mixer')
		.itemInputs('greate:steel_mechanical_mixer')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.WroughtIron, 8),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 4))
		.duration(GTMaterials.WroughtIron.getMass() * 12)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:steel_mechanical_mixer')
		.itemInputs('greate:steel_mechanical_mixer')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.WroughtIron, 8),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 4))
		.duration(GTMaterials.WroughtIron.getMass() * 12)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.macerator('greate:aluminium_mechanical_mixer')
		.itemInputs('greate:aluminium_mechanical_mixer')
		.itemOutputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 12))
		.duration(GTMaterials.Aluminium.getMass() * 12)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:aluminium_mechanical_mixer')
		.itemInputs('greate:aluminium_mechanical_mixer')
		.itemOutputs(ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 12))
		.duration(GTMaterials.Aluminium.getMass() * 12)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.macerator('greate:stainless_steel_mechanical_mixer')
		.itemInputs('greate:stainless_steel_mechanical_mixer')
		.itemOutputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 12))
		.duration(GTMaterials.StainlessSteel.getMass() * 12)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:stainless_steel_mechanical_mixer')
		.itemInputs('greate:stainless_steel_mechanical_mixer')
		.itemOutputs(ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 12))
		.duration(GTMaterials.StainlessSteel.getMass() * 12)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.macerator('greate:titanium_mechanical_mixer')
		.itemInputs('greate:titanium_mechanical_mixer')
		.itemOutputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Titanium, 12))
		.duration(GTMaterials.Titanium.getMass() * 12)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('greate:titanium_mechanical_mixer')
		.itemInputs('greate:titanium_mechanical_mixer')
		.itemOutputs(ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Titanium, 12))
		.duration(GTMaterials.Titanium.getMass() * 12)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// #endregion
}