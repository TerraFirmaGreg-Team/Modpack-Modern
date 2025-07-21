// priority: 0
"use strict";

function registerCccBridgeRecyclingRecipes(event) {

	// Source Block
	event.recipes.gtceu.macerator('cccbridge:macerator/recycling/source_block')
		.itemInputs('cccbridge:source_block')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 5),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Redstone, 4)
	)
		.duration(GTMaterials.Aluminium.getMass() * 5)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('cccbridge:arc_furnace/recycling/source_block')
		.itemInputs('cccbridge:source_block')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 5),
			ChemicalHelper.get(TagPrefix.plate, GTMaterials.Redstone, 4)
		)
		.duration(GTMaterials.Aluminium.getMass() * 5)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Target Block
	event.recipes.gtceu.macerator('cccbridge:macerator/recycling/target_block')
		.itemInputs('cccbridge:target_block')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 5),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Redstone, 4)
	)
		.duration(GTMaterials.Aluminium.getMass() * 5)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('cccbridge:arc_furnace/recycling/target_block')
		.itemInputs('cccbridge:target_block')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 5),
			ChemicalHelper.get(TagPrefix.plate, GTMaterials.Redstone, 4)
		)
		.duration(GTMaterials.Aluminium.getMass() * 5)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// RedRouter Block
	event.recipes.gtceu.macerator('cccbridge:macerator/recycling/redrouter_block')
		.itemInputs('cccbridge:redrouter_block')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 4),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.RedAlloy, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Brass, 5)
	)
		.duration(GTMaterials.Aluminium.getMass() * 4)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('cccbridge:arc_furnace/recycling/redrouter_block')
		.itemInputs('cccbridge:redrouter_block')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 4),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.RedAlloy, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Brass, 5)
	)
		.duration(GTMaterials.Aluminium.getMass() * 4)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Animatronic Block
	event.recipes.gtceu.macerator('cccbridge:macerator/recycling/animatronic_block')
		.itemInputs('cccbridge:animatronic_block')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 18),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Electrum, 12),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Silver, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Gold, 5)
	)
		.duration(GTMaterials.StainlessSteel.getMass() * 18)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('cccbridge:arc_furnace/recycling/animatronic_block')
		.itemInputs('cccbridge:animatronic_block')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 18),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Electrum, 12),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Silver, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Gold, 5)
	)
		.duration(GTMaterials.StainlessSteel.getMass() * 18)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])
}