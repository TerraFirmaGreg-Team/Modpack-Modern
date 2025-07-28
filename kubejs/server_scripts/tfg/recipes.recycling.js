// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGRecyclingRecipes(event) {

	//MV Refrigerator
	event.recipes.gtceu.macerator('tfg:macerator/recycling/mv_food_refrigerator')
		.itemInputs('tfg:mv_food_refrigerator')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 5),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Bronze, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Cupronickel, 4),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Polyethylene, 2)
		)
		.duration(GTMaterials.Aluminium.getMass() * 5)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('tfg:arc_furnace/recycling/mv_food_refrigerator')
		.itemInputs('tfg:mv_food_refrigerator')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 5),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Bronze, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Cupronickel, 4),
			ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.Ash, 2)
		)
		.duration(GTMaterials.Aluminium.getMass() * 5)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	//HV Refrigerator
	event.recipes.gtceu.macerator('tfg:macerator/recycling/hv_food_refrigerator')
		.itemInputs('tfg:hv_food_refrigerator')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 8),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 7),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Electrum, 4),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Polytetrafluoroethylene, 4)
		)
		.duration(GTMaterials.StainlessSteel.getMass() * 8)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('tfg:arc_furnace/recycling/hv_food_refrigerator')
		.itemInputs('tfg:hv_food_refrigerator')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 8),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 7),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Electrum, 4),
			ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.Ash, 4)
		)
		.duration(GTMaterials.StainlessSteel.getMass() * 8)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	//EV Refrigerator
	event.recipes.gtceu.macerator('tfg:macerator/recycling/ev_food_refrigerator')
		.itemInputs('tfg:ev_food_refrigerator')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Titanium, 8),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 10),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Kanthal, 4),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 3)
		)
		.duration(GTMaterials.Titanium.getMass() * 8)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('tfg:arc_furnace/recycling/ev_food_refrigerator')
		.itemInputs('tfg:ev_food_refrigerator')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Titanium, 8),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 10),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Kanthal, 4),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 3)
		)
		.duration(GTMaterials.Titanium.getMass() * 8)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	//LV Food Processor
	event.recipes.gtceu.macerator('tfg:macerator/recycling/lv_food_processor')
		.itemInputs('tfg:lv_food_processor')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 7),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Tin, 4),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Bronze, 2),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.WroughtIron, 2)
		)
		.duration(GTMaterials.Steel.getMass() * 7)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('tfg:arc_furnace/recycling/lv_food_processor')
		.itemInputs('tfg:lv_food_processor')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 7),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Tin, 4),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Bronze, 2),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.WroughtIron, 2)
		)
		.duration(GTMaterials.Steel.getMass() * 7)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	//MV Food Processor
	event.recipes.gtceu.macerator('tfg:macerator/recycling/mv_food_processor')
		.itemInputs('tfg:mv_food_processor')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Cupronickel, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Copper, 3),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.SiliconeRubber, 3)
		)
		.duration(GTMaterials.Aluminium.getMass() * 6)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('tfg:arc_furnace/recycling/mv_food_processor')
		.itemInputs('tfg:mv_food_processor')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Cupronickel, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Copper, 3),
			ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.Ash, 3)
		)
		.duration(GTMaterials.Aluminium.getMass() * 6)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	//HV Food Processor
	event.recipes.gtceu.macerator('tfg:macerator/recycling/hv_food_processor')
		.itemInputs('tfg:hv_food_processor')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 7),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Electrum, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.SiliconeRubber, 3)
		)
		.duration(GTMaterials.StainlessSteel.getMass() * 7)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('tfg:arc_furnace/recycling/hv_food_processor')
		.itemInputs('tfg:hv_food_processor')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 7),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Electrum, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 6),
			ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.Ash, 3)
		)
		.duration(GTMaterials.StainlessSteel.getMass() * 7)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	//EV Food Processor
	event.recipes.gtceu.macerator('tfg:macerator/recycling/ev_food_processor')
		.itemInputs('tfg:ev_food_processor')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Titanium, 9),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Kanthal, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 4),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 4)
		)
		.duration(GTMaterials.Titanium.getMass() * 9)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('tfg:arc_furnace/recycling/ev_food_processor')
		.itemInputs('tfg:ev_food_processor')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Titanium, 9),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Kanthal, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 4),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 4)
		)
		.duration(GTMaterials.Titanium.getMass() * 9)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	//LV Food Oven
	event.recipes.gtceu.macerator('tfg:macerator/recycling/lv_food_oven')
		.itemInputs('tfg:lv_food_oven')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 8),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Tin, 4),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Iron, 4),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Rubber, 7)
		)
		.duration(GTMaterials.Steel.getMass() * 8)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('tfg:arc_furnace/recycling/lv_food_oven')
		.itemInputs('tfg:lv_food_oven')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 8),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Tin, 4),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Iron, 4),
			ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.Ash, 7)
		)
		.duration(GTMaterials.Steel.getMass() * 8)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	//MV Food Oven
	event.recipes.gtceu.macerator('tfg:macerator/recycling/mv_food_oven')
		.itemInputs('tfg:mv_food_oven')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 9),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Cupronickel, 8),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Copper, 4),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 1)
		)
		.duration(GTMaterials.Aluminium.getMass() * 9)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('tfg:arc_furnace/recycling/mv_food_oven')
		.itemInputs('tfg:mv_food_oven')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 9),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Cupronickel, 8),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Copper, 4),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 1)
		)
		.duration(GTMaterials.Aluminium.getMass() * 9)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	//HV Food Oven
	event.recipes.gtceu.macerator('tfg:macerator/recycling/hv_food_oven')
		.itemInputs('tfg:hv_food_oven')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 8),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Electrum, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Kanthal, 2),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Silver, 3)
		)
		.duration(GTMaterials.StainlessSteel.getMass() * 8)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('tfg:arc_furnace/recycling/hv_food_oven')
		.itemInputs('tfg:hv_food_oven')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 8),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Electrum, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Kanthal, 2),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Silver, 3)
		)
		.duration(GTMaterials.StainlessSteel.getMass() * 8)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	//EV Food Oven
	event.recipes.gtceu.macerator('tfg:macerator/recycling/ev_food_oven')
		.itemInputs('tfg:ev_food_oven')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Titanium, 10),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 5),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Kanthal, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Nichrome, 2)
		)
		.duration(GTMaterials.Titanium.getMass() * 10)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('tfg:arc_furnace/recycling/ev_food_oven')
		.itemInputs('tfg:ev_food_oven')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Titanium, 10),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 5),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Kanthal, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Nichrome, 2)
		)
		.duration(GTMaterials.Titanium.getMass() * 10)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	//LV Food Oven
	event.recipes.gtceu.macerator('tfg:macerator/recycling/lv_aqueous_accumulator')
		.itemInputs('tfg:lv_aqueous_accumulator')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 4),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Bronze, 2),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Tin, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Rubber, 2)
		)
		.duration(GTMaterials.Steel.getMass() * 4)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('tfg:arc_furnace/recycling/lv_aqueous_accumulator')
		.itemInputs('tfg:lv_aqueous_accumulator')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 4),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Bronze, 2),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Tin, 6),
			ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.Ash, 2)
		)
		.duration(GTMaterials.Steel.getMass() * 4)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	//MV Food Oven
	event.recipes.gtceu.macerator('tfg:macerator/recycling/mv_aqueous_accumulator')
		.itemInputs('tfg:mv_aqueous_accumulator')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 5),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Bronze, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 2),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Cupronickel, 2)
		)
		.duration(GTMaterials.Aluminium.getMass() * 5)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('tfg:arc_furnace/recycling/mv_aqueous_accumulator')
		.itemInputs('tfg:mv_aqueous_accumulator')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 5),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Bronze, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 2),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Cupronickel, 2)
		)
		.duration(GTMaterials.Aluminium.getMass() * 5)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	//HV Food Oven
	event.recipes.gtceu.macerator('tfg:macerator/recycling/hv_aqueous_accumulator')
		.itemInputs('tfg:hv_aqueous_accumulator')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Electrum, 2),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Steel, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Gold, 1)
		)
		.duration(GTMaterials.StainlessSteel.getMass() * 6)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('tfg:arc_furnace/recycling/hv_aqueous_accumulator')
		.itemInputs('tfg:hv_aqueous_accumulator')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Electrum, 2),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Steel, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Gold, 1)
		)
		.duration(GTMaterials.StainlessSteel.getMass() * 6)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	//EV Food Oven
	event.recipes.gtceu.macerator('tfg:macerator/recycling/ev_aqueous_accumulator')
		.itemInputs('tfg:ev_aqueous_accumulator')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Titanium, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.StainlessSteel, 6),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Kanthal, 2),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 1)
		)
		.duration(GTMaterials.Titanium.getMass() * 6)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('tfg:arc_furnace/recycling/ev_aqueous_accumulator')
		.itemInputs('tfg:ev_aqueous_accumulator')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Titanium, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.StainlessSteel, 6),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Kanthal, 2),
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 1)
		)
		.duration(GTMaterials.Titanium.getMass() * 6)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	//Aluminium Harvest Basket
	event.recipes.gtceu.macerator('tfg:macerator/recycling/aluminium_harvest_basket')
		.itemInputs('tfg:aluminium_harvest_basket')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 2),
			ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Steel, 1),
			ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.CobaltBrass, 2)
		)
		.duration(GTMaterials.Aluminium.getMass() * 2)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('tfg:arc_furnace/recycling/aluminium_harvest_basket')
		.itemInputs('tfg:aluminium_harvest_basket')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 2),
			ChemicalHelper.get(TagPrefix.nugget, GTMaterials.Steel, 1),
			ChemicalHelper.get(TagPrefix.nugget, GTMaterials.CobaltBrass, 2)
		)
		.duration(GTMaterials.Aluminium.getMass() * 2)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])
}